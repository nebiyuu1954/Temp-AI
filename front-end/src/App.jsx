import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login/Login";
import { SignUp } from "./pages/Auth/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApplicantLandingPage from "./pages/Applicant/ApplicantLandingPage";
import EmployerLandingPage from "./pages/Employer/EmployerLandingPage";
import CandidateManagement from "./pages/Employer/Candidate/CandidateManagement";
import CandidateListing from "./pages/Employer/Candidate/CandidateListing";
import CandidateDetail from "./pages/Employer/Candidate/CandidateDetail";
import ManageJob from "./pages/Employer/ManageJobs/ManageJob";
import AllApplicants from "./pages/Employer/ManageJobs/AllApplicants";
import ApplicantDetail from "./pages/Employer/ManageJobs/ApplicantDetail";
import Analytics from "./pages/Employer/Analytics/Analytics";
import PostJobs from "./pages/Employer/PostJob/PostJobs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider } from "./context/SidebarContext";
import MyApplications from "./pages/Applicant/Application/MyApplicationsPage";
import RecommendedPage from "./pages/Applicant/Internship/InternshipsPage";
import ResumeBuilderPage from "./pages/Applicant/Resume/ResumeBuilderPage";

const LazyProfile = lazy(() => import("./pages/Profile/Profile"));
const LazyNotifications = lazy(() => import("./pages/Notifications/Notifications"));
const LazyAnalytics = lazy(() => import("./pages/Employer/Analytics/Analytics"));

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
            <Route path="/analytics" element={<Analytics />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Employer routes */}
            <Route
              path="/manage-jobs"
              element={
                <ProtectedRoute>
                  <ManageJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-applicants"
              element={
                <ProtectedRoute>
                  <AllApplicants />
                </ProtectedRoute>
              }
            />
            <Route
              path="/applicant-detail"
              element={
                <ProtectedRoute>
                  <ApplicantDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/candidates/management"
              element={
                <ProtectedRoute>
                  <CandidateManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/candidates/listing"
              element={
                <ProtectedRoute>
                  <CandidateListing />
                </ProtectedRoute>
              }
            />
            <Route
              path="/candidates/detail"
              element={
                <ProtectedRoute>
                  <CandidateDetail />
                </ProtectedRoute>
              }
            />
            <Route path="/post-job" element={<PostJobs />} />

            {/* Applicant routes */}
            <Route
              path="/internships"
              element={
                <ProtectedRoute>
                  <RecommendedPage />
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

            {/* Shared / Lazy-loaded routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyProfile />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyNotifications />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics-lazy"
              element={
                <ProtectedRoute requiredRole="EMPLOYER">
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyAnalytics />
                  </Suspense>
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