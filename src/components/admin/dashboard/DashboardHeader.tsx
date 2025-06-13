
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back to ElimuHub Admin Portal</p>
      </div>
      <Button>
        <Plus className="w-4 h-4 mr-2" />
        Quick Action
      </Button>
    </div>
  );
};
