
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Users,
  FileText,
  Calendar
} from "lucide-react";

const CoursesManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Computer Science",
      instructor: "Dr. Johnson",
      students: 45,
      materials: 12,
      semester: "Fall 2024",
      status: "active",
      startDate: "2024-09-01",
      endDate: "2024-12-15"
    },
    {
      id: 2,
      code: "MATH201",
      name: "Calculus II",
      instructor: "Prof. Wilson",
      students: 38,
      materials: 8,
      semester: "Fall 2024",
      status: "active",
      startDate: "2024-09-01",
      endDate: "2024-12-15"
    },
    {
      id: 3,
      code: "PHYS151",
      name: "Physics I",
      instructor: "Dr. Chen",
      students: 52,
      materials: 15,
      semester: "Fall 2024",
      status: "active",
      startDate: "2024-09-01",
      endDate: "2024-12-15"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Courses Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage courses and curriculum</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses by code, name, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{course.code}</Badge>
                <Badge variant={course.status === "active" ? "default" : "secondary"}>
                  {course.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{course.name}</CardTitle>
              <CardDescription>Instructor: {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Students
                  </span>
                  <span className="font-medium">{course.students}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Materials
                  </span>
                  <span className="font-medium">{course.materials}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Semester
                  </span>
                  <span className="font-medium">{course.semester}</span>
                </div>
                
                <div className="pt-3 border-t">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesManagement;
