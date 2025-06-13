
import { DashboardHeader } from "@/components/admin/dashboard/DashboardHeader";
import { StatsGrid } from "@/components/admin/dashboard/StatsGrid";
import { RecentActivities } from "@/components/admin/dashboard/RecentActivities";
import { SystemHealth } from "@/components/admin/dashboard/SystemHealth";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <StatsGrid />
      <div className="grid lg:grid-cols-2 gap-6">
        <RecentActivities />
        <SystemHealth />
      </div>
    </div>
  );
};

export default AdminDashboard;
