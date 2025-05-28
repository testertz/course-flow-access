
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Upload, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  Plus,
  Search,
  Download,
  Eye,
  Trash2,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadTitle, setUploadTitle] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Mock data - replace with real data from your backend
  const stats = {
    totalStudents: 247,
    totalCourses: 12,
    totalMaterials: 143,
    totalDownloads: 1567
  };

  const recentUploads = [
    {
      id: 1,
      title: "Advanced Calculus Notes",
      course: "MATH201",
      uploadedBy: "Dr. Johnson",
      uploadDate: "Oct 22, 2024",
      downloads: 15,
      type: "PDF"
    },
    {
      id: 2,
      title: "Physics Lab Manual",
      course: "PHYS151",
      uploadedBy: "Prof. Wilson",
      uploadDate: "Oct 21, 2024",
      downloads: 8,
      type: "PDF"
    },
    {
      id: 3,
      title: "Programming Exercises",
      course: "CS101",
      uploadedBy: "Dr. Chen",
      uploadDate: "Oct 20, 2024",
      downloads: 23,
      type: "PDF"
    }
  ];

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@student.edu",
      courses: 4,
      lastActive: "Oct 22, 2024",
      status: "active"
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@student.edu",
      courses: 5,
      lastActive: "Oct 21, 2024",
      status: "active"
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@student.edu",
      courses: 3,
      lastActive: "Oct 15, 2024",
      status: "inactive"
    }
  ];

  const courses = [
    { id: 1, code: "CS101", name: "Introduction to Computer Science" },
    { id: 2, code: "MATH201", name: "Calculus II" },
    { id: 3, code: "PHYS151", name: "Physics I" },
    { id: 4, code: "ENG102", name: "Academic Writing" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Portal</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold text-green-600">{stats.totalCourses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Materials</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalMaterials}</p>
                </div>
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Downloads</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.totalDownloads}</p>
                </div>
                <Download className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="upload">Upload Materials</TabsTrigger>
            <TabsTrigger value="materials">Manage Materials</TabsTrigger>
            <TabsTrigger value="students">Manage Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Upload Materials Tab */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Material</CardTitle>
                <CardDescription>Upload course materials, assignments, or past papers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Material Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter material title"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="course">Course</Label>
                      <select 
                        id="course"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.code}>
                            {course.code} - {course.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="type">Material Type</Label>
                      <select id="type" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select type</option>
                        <option value="notes">Lecture Notes</option>
                        <option value="assignment">Assignment</option>
                        <option value="past_paper">Past Paper</option>
                        <option value="video">Video</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="semester">Semester</Label>
                      <select id="semester" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select semester</option>
                        <option value="fall_2024">Fall 2024</option>
                        <option value="spring_2024">Spring 2024</option>
                        <option value="summer_2024">Summer 2024</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="stream">Stream</Label>
                      <select id="stream" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select stream</option>
                        <option value="regular">Regular</option>
                        <option value="parallel">Parallel</option>
                        <option value="evening">Evening</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="year">Academic Year</Label>
                      <select id="year" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="file">Upload File</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Drag and drop your file here, or click to browse</p>
                        <p className="text-sm text-gray-500 mt-1">Supports PDF, DOC, DOCX, MP4, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Material
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Materials Tab */}
          <TabsContent value="materials">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Manage Materials</CardTitle>
                    <CardDescription>View and manage all uploaded materials</CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search materials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{material.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{material.course}</span>
                            <span>By {material.uploadedBy}</span>
                            <span>{material.uploadDate}</span>
                            <Badge variant="secondary">{material.downloads} downloads</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Students Tab */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Manage Students</CardTitle>
                    <CardDescription>View and manage student accounts</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{student.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-500">{student.email}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{student.courses} courses</span>
                            <span>Last active: {student.lastActive}</span>
                            <Badge variant={student.status === "active" ? "default" : "secondary"}>
                              {student.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          Reset Password
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Download Analytics</CardTitle>
                  <CardDescription>Track material downloads and usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Analytics chart would be displayed here</p>
                      <p className="text-sm text-gray-400">Connect to backend to show real data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>CS101</span>
                        <span className="text-blue-600 font-medium">156 downloads</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>MATH201</span>
                        <span className="text-blue-600 font-medium">134 downloads</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>PHYS151</span>
                        <span className="text-blue-600 font-medium">98 downloads</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Today</span>
                        <span className="text-green-600 font-medium">45 students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>This Week</span>
                        <span className="text-green-600 font-medium">187 students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>This Month</span>
                        <span className="text-green-600 font-medium">234 students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
