
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
  Download,
  Filter
} from "lucide-react";

const StudentsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@student.edu",
      studentId: "ST2024001",
      course: "Computer Science",
      year: "3rd Year",
      status: "active",
      enrollmentDate: "2022-09-15",
      gpa: 3.8
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@student.edu",
      studentId: "ST2024002",
      course: "Engineering",
      year: "2nd Year",
      status: "active",
      enrollmentDate: "2023-09-15",
      gpa: 3.6
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@student.edu",
      studentId: "ST2024003",
      course: "Business Administration",
      year: "4th Year",
      status: "inactive",
      enrollmentDate: "2021-09-15",
      gpa: 3.4
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Students Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage student accounts and information</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search students by name, email, or student ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <CardDescription>
            Total: {students.length} students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Student</th>
                  <th className="text-left p-3">Student ID</th>
                  <th className="text-left p-3">Course</th>
                  <th className="text-left p-3">Year</th>
                  <th className="text-left p-3">GPA</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{student.email}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline">{student.studentId}</Badge>
                    </td>
                    <td className="p-3">{student.course}</td>
                    <td className="p-3">{student.year}</td>
                    <td className="p-3">
                      <Badge variant={student.gpa >= 3.5 ? "default" : "secondary"}>
                        {student.gpa}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge variant={student.status === "active" ? "default" : "secondary"}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsManagement;
