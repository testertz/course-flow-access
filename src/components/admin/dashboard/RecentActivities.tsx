
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentActivities = [
  {
    id: 1,
    action: "New student registered",
    user: "Alex Johnson",
    time: "2 minutes ago",
    type: "user"
  },
  {
    id: 2,
    action: "Material uploaded",
    user: "Dr. Wilson",
    time: "15 minutes ago",
    type: "upload"
  },
  {
    id: 3,
    action: "Course updated",
    user: "Prof. Chen",
    time: "1 hour ago",
    type: "course"
  }
];

export const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{activity.action}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">by {activity.user}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{activity.time}</p>
                <Badge variant="secondary" className="mt-1">
                  {activity.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
