
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Calendar, Search, Filter, Bell, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with real data from your backend
  const courses = [
    {
      id: 1,
      code: "CS101",
      name: "Introduction to Computer Science",
      semester: "Fall 2024",
      stream: "Regular",
      instructor: "Dr. Sarah Johnson",
      materials: 12,
      assignments: 3,
      pastPapers: 5,
      color: "bg-blue-500"
    },
    {
      id: 2,
      code: "MATH201",
      name: "Calculus II",
      semester: "Fall 2024",
      stream: "Regular",
      instructor: "Prof. Michael Chen",
      materials: 8,
      assignments: 4,
      pastPapers: 7,
      color: "bg-green-500"
    },
    {
      id: 3,
      code: "ENG102",
      name: "Academic Writing",
      semester: "Fall 2024",
      stream: "Evening",
      instructor: "Dr. Emily Davis",
      materials: 6,
      assignments: 2,
      pastPapers: 3,
      color: "bg-purple-500"
    },
    {
      id: 4,
      code: "PHYS151",
      name: "Physics I",
      semester: "Fall 2024",
      stream: "Regular",
      instructor: "Dr. Robert Wilson",
      materials: 10,
      assignments: 3,
      pastPapers: 6,
      color: "bg-orange-500"
    }
  ];

  const recentActivities = [
    { type: "assignment", course: "CS101", title: "Programming Assignment 2", dueDate: "Oct 25, 2024" },
    { type: "material", course: "MATH201", title: "Lecture Notes - Integration", uploaded: "Oct 20, 2024" },
    { type: "assignment", course: "ENG102", title: "Essay Draft", dueDate: "Oct 28, 2024" },
    { type: "paper", course: "PHYS151", title: "Midterm Exam 2023", uploaded: "Oct 18, 2024" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">UniPortal</h1>
                <p className="text-xs text-gray-500">Student Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Link to="/" className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h2>
          <p className="text-gray-600">Here's what's happening with your courses today.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search courses, materials, assignments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Courses Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Courses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary">{course.stream}</Badge>
                      </div>
                      <CardTitle className="text-lg">{course.code}</CardTitle>
                      <CardDescription className="text-sm">{course.name}</CardDescription>
                      <p className="text-xs text-gray-500">{course.instructor}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-lg font-semibold text-blue-600">{course.materials}</p>
                          <p className="text-xs text-gray-500">Materials</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-green-600">{course.assignments}</p>
                          <p className="text-xs text-gray-500">Assignments</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-purple-600">{course.pastPapers}</p>
                          <p className="text-xs text-gray-500">Past Papers</p>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        <Link to={`/course/${course.id}`}>View Course</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Courses</span>
                  <span className="text-xl font-semibold text-blue-600">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Assignments</span>
                  <span className="text-xl font-semibold text-orange-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Semester</span>
                  <span className="text-xl font-semibold text-green-600">Fall 2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'assignment' ? 'bg-orange-100' :
                        activity.type === 'material' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'assignment' ? (
                          <Calendar className={`w-4 h-4 ${
                            activity.type === 'assignment' ? 'text-orange-600' : ''
                          }`} />
                        ) : (
                          <FileText className={`w-4 h-4 ${
                            activity.type === 'material' ? 'text-blue-600' : 'text-purple-600'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.course}</p>
                        <p className="text-xs text-gray-400">
                          {activity.dueDate ? `Due: ${activity.dueDate}` : `Uploaded: ${activity.uploaded}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
