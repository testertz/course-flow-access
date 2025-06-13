
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Download,
  TrendingUp
} from "lucide-react";

const stats = {
  totalStudents: 247,
  totalCourses: 12,
  totalMaterials: 143,
  totalDownloads: 1567
};

export const StatsGrid = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalStudents}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% from last month
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Courses</p>
              <p className="text-2xl font-bold text-green-600">{stats.totalCourses}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +3 new courses
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Materials</p>
              <p className="text-2xl font-bold text-purple-600">{stats.totalMaterials}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8% this week
              </p>
            </div>
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Downloads</p>
              <p className="text-2xl font-bold text-orange-600">{stats.totalDownloads}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15% this month
              </p>
            </div>
            <Download className="w-8 h-8 text-orange-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
