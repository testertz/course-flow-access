
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SystemHealth = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health</CardTitle>
        <CardDescription>Current system status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Server Status</span>
            <Badge className="bg-green-100 text-green-800">Online</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Database</span>
            <Badge className="bg-green-100 text-green-800">Healthy</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Storage</span>
            <Badge className="bg-yellow-100 text-yellow-800">75% Used</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Active Users</span>
            <Badge className="bg-blue-100 text-blue-800">45 Online</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
