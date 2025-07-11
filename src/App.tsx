import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

// Admin Layout and Pages
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentsManagement from "./pages/admin/StudentsManagement";
import CoursesManagement from "./pages/admin/CoursesManagement";
import MaterialsManagement from "./pages/admin/MaterialsManagement";
import UploadMaterial from "./pages/admin/UploadMaterial";
import Analytics from "./pages/admin/Analytics";

// Dashboard section with sidebar & nested pages
import { StudentSidebar } from "@/components/dashboard/StudentSidebar";
import UserDashboardHome from "./pages/dashboard/UserDashboardHome";
import UserCourses from "./pages/dashboard/UserCourses";
import UserAssignments from "./pages/dashboard/UserAssignments";
import UserMaterials from "./pages/dashboard/UserMaterials";
import UserProfile from "./pages/dashboard/UserProfile";
import UserNotifications from "./pages/dashboard/UserNotifications";
import UserSettings from "./pages/dashboard/UserSettings";
import UserHelp from "./pages/dashboard/UserHelp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<UserDashboardHome />} />
            <Route path="courses" element={<UserCourses />} />
            <Route path="assignments" element={<UserAssignments />} />
            <Route path="materials" element={<UserMaterials />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="notifications" element={<UserNotifications />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="help" element={<UserHelp />} />
          </Route>
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="students" element={<StudentsManagement />} />
            <Route path="courses" element={<CoursesManagement />} />
            <Route path="materials" element={<MaterialsManagement />} />
            <Route path="upload" element={<UploadMaterial />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
