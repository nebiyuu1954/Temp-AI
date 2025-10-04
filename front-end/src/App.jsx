import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login/Login";
import { SignUp } from "./pages/Auth/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApplicantLandingPage from "./pages/Applicant/ApplicantLandingPage";
import EmployerLandingPage from "./pages/Employer/EmployerLandingPage";
// import ProfilePage from "./pages/ProfilePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider } from "./context/SidebarContext";
import MyApplications from "./pages/Applicant/MyApplicationsPage";
import RecommendedPage from "./pages/Applicant/RecommendedPage";
import ResumeBuilderPage from "./pages/Applicant/ResumeBuilderPage";

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applications"
              element={
                <ProtectedRoute>
                  <MyApplications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resume"
              element={
                <ProtectedRoute>
                  <ResumeBuilderPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recommended"
              element={
                <ProtectedRoute>
                  <RecommendedPage />
                </ProtectedRoute>
              }
            />
            

            {/* Unauthorized fallback */}
            <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />
          </Routes>
        </Router>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
