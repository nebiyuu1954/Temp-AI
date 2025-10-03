import { createContext, useState, useEffect } from "react";
import * as authApi from "../api/auth/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() => {
    const saved = localStorage.getItem("tokens");
    return saved ? JSON.parse(saved) : null;
  });
  const [user, setUser] = useState(null);

  // 🔑 Login
  const handleLogin = async (credentials) => {
    const { data } = await authApi.login(credentials);
    setTokens(data);
    localStorage.setItem("tokens", JSON.stringify(data));

    // fetch user profile
    const me = await authApi.getMe();
    setUser(me.data);

    return me.data; // return user data for navigation
  };

  // 🚪 Logout
  const handleLogout = () => {
    setTokens(null);
    setUser(null);
    localStorage.removeItem("tokens");
  };

  // 🔄 Refresh token + restore user on mount
  useEffect(() => {
    const initAuth = async () => {
      if (tokens?.refresh) {
        try {
          const { data } = await authApi.refresh(tokens.refresh);
          const newTokens = { ...tokens, access: data.access };
          setTokens(newTokens);
          localStorage.setItem("tokens", JSON.stringify(newTokens));

          const me = await authApi.getMe();
          setUser(me.data);
        } catch {
          handleLogout();
        }
      }
    };
    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, tokens, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};