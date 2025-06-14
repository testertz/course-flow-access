
// Dashboard Layout for students, with sidebar navigation and nested routing

import { Outlet } from "react-router-dom";
import { StudentSidebar } from "@/components/dashboard/StudentSidebar";

const Dashboard = () => (
  <div className="min-h-screen flex bg-gray-50">
    <div className="hidden md:block">
      <StudentSidebar />
    </div>
    <div className="flex-1 flex flex-col p-4">
      {/* For mobile: show sidebar as drawer */}
      <div className="md:hidden mb-2">
        <StudentSidebar />
      </div>
      <Outlet />
    </div>
  </div>
);

export default Dashboard;
