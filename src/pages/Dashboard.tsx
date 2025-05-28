
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Calendar, Search, Filter, Bell, User, LogOut, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Tanzania-specific mock data
  const courses = [
    {
      id: 1,
      code: "ICT201",
      name: "Computer Programming Fundamentals",
      semester: "Semester 1 - 2024",
      stream: "Regular (Mchana)",
      instructor: "Dr. Amina Mwalimu",
      materials: 15,
      assignments: 4,
      pastPapers: 6,
      color: "bg-green-500"
    },
    {
      id: 2,
      code: "MTH301",
      name: "Calculus and Mathematical Analysis",
      semester: "Semester 1 - 2024", 
      stream: "Regular (Mchana)",
      instructor: "Prof. John Mbwana",
      materials: 12,
      assignments: 3,
      pastPapers: 8,
      color: "bg-blue-500"
    },
    {
      id: 3,
      code: "ENG102",
      name: "English for Academic Purposes",
      semester: "Semester 1 - 2024",
      stream: "Evening (Jioni)",
      instructor: "Dr. Grace Shayo",
      materials: 8,
      assignments: 2,
      pastPapers: 4,
      color: "bg-yellow-500"
    },
    {
      id: 4,
      code: "PHY151",
      name: "Physics for Engineers", 
      semester: "Semester 1 - 2024",
      stream: "Regular (Mchana)",
      instructor: "Dr. Robert Kimaro",
      materials: 14,
      assignments: 3,
      pastPapers: 7,
      color: "bg-red-500"
    }
  ];

  const recentActivities = [
    { type: "assignment", course: "ICT201", title: "Programming Assignment 2 - Java Basics", dueDate: "25 Oktoba, 2024" },
    { type: "material", course: "MTH301", title: "Lecture Notes - Integration Techniques", uploaded: "20 Oktoba, 2024" },
    { type: "assignment", course: "ENG102", title: "Academic Essay Draft", dueDate: "28 Oktoba, 2024" },
    { type: "paper", course: "PHY151", title: "Mid-Semester Exam 2023", uploaded: "18 Oktoba, 2024" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ElimuHub</h1>
                <p className="text-xs text-gray-500">Dashibodi ya Mwanafunzi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>University of Dar es Salaam</span>
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Link to="/" className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Toka</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Karibu tena, Amina!</h2>
          <p className="text-gray-600">Hapa kuna mambo yanayoendelea katika masomo yako leo.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tafuta masomo, nyenzo, kazi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Chuja
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Courses Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Masomo Yako / Your Courses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center`}>
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">{course.stream}</Badge>
                      </div>
                      <CardTitle className="text-lg">{course.code}</CardTitle>
                      <CardDescription className="text-sm">{course.name}</CardDescription>
                      <p className="text-xs text-gray-500">{course.instructor}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-lg font-semibold text-green-600">{course.materials}</p>
                          <p className="text-xs text-gray-500">Nyenzo</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-yellow-600">{course.assignments}</p>
                          <p className="text-xs text-gray-500">Kazi</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-red-600">{course.pastPapers}</p>
                          <p className="text-xs text-gray-500">Mitihani</p>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" variant="default">
                        <Link to={`/course/${course.id}`}>Ona Darasa</Link>
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
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-lg">Takwimu za Haraka</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jumla ya Masomo</span>
                  <span className="text-xl font-semibold text-green-600">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kazi za Kusubiri</span>
                  <span className="text-xl font-semibold text-yellow-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Muhula huu</span>
                  <span className="text-xl font-semibold text-blue-600">Semester 1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mwaka wa Masomo</span>
                  <span className="text-xl font-semibold text-red-600">2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Shughuli za Hivi Karibuni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'assignment' ? 'bg-yellow-100' :
                        activity.type === 'material' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {activity.type === 'assignment' ? (
                          <Calendar className={`w-4 h-4 ${
                            activity.type === 'assignment' ? 'text-yellow-600' : ''
                          }`} />
                        ) : (
                          <FileText className={`w-4 h-4 ${
                            activity.type === 'material' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.course}</p>
                        <p className="text-xs text-gray-400">
                          {activity.dueDate ? `Muda: ${activity.dueDate}` : `Ilipakiwa: ${activity.uploaded}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Calendar */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Kalenda ya Kitaaluma</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mid-Semester Break</span>
                    <span className="text-red-600">Nov 15-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Final Exams</span>
                    <span className="text-red-600">Dec 10-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Semester 2 Start</span>
                    <span className="text-green-600">Jan 15, 2025</span>
                  </div>
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
