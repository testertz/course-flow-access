
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileText, 
  Calendar, 
  Search, 
  Download, 
  Upload, 
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Course = () => {
  const { courseId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock course data - replace with real data from your backend
  const course = {
    id: courseId,
    code: "CS101",
    name: "Introduction to Computer Science",
    semester: "Fall 2024",
    stream: "Regular",
    instructor: "Dr. Sarah Johnson",
    description: "An introduction to computer science concepts, programming fundamentals, and problem-solving techniques."
  };

  const materials = [
    {
      id: 1,
      title: "Introduction to Programming",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "Oct 15, 2024",
      downloads: 45
    },
    {
      id: 2,
      title: "Data Structures Overview",
      type: "Video",
      size: "156 MB",
      uploadDate: "Oct 18, 2024",
      downloads: 32
    },
    {
      id: 3,
      title: "Algorithm Analysis",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "Oct 20, 2024",
      downloads: 28
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Programming Assignment 1",
      description: "Implement basic sorting algorithms",
      dueDate: "Oct 30, 2024",
      status: "submitted",
      grade: "85%",
      submittedDate: "Oct 28, 2024"
    },
    {
      id: 2,
      title: "Programming Assignment 2",
      description: "Build a simple calculator application",
      dueDate: "Nov 15, 2024",
      status: "pending",
      grade: null,
      submittedDate: null
    },
    {
      id: 3,
      title: "Final Project Proposal",
      description: "Submit your final project proposal",
      dueDate: "Nov 25, 2024",
      status: "not_submitted",
      grade: null,
      submittedDate: null
    }
  ];

  const pastPapers = [
    {
      id: 1,
      title: "Midterm Exam 2023",
      year: "2023",
      semester: "Fall",
      stream: "Regular",
      type: "PDF",
      size: "890 KB"
    },
    {
      id: 2,
      title: "Final Exam 2023",
      year: "2023",
      semester: "Fall", 
      stream: "Regular",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      id: 3,
      title: "Midterm Exam 2022",
      year: "2022",
      semester: "Fall",
      stream: "Evening",
      type: "PDF",
      size: "756 KB"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "not_submitted":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "submitted":
        return "Submitted";
      case "pending":
        return "Pending Review";
      case "not_submitted":
        return "Not Submitted";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{course.code}</h1>
                <p className="text-xs text-gray-500">{course.name}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Course Info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary">{course.semester}</Badge>
            <Badge variant="outline">{course.stream}</Badge>
            <span className="text-gray-600">Instructor: {course.instructor}</span>
          </div>
          <p className="text-gray-700">{course.description}</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="materials" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="materials">Course Materials</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="papers">Past Papers</TabsTrigger>
          </TabsList>

          {/* Materials Tab */}
          <TabsContent value="materials">
            <div className="grid gap-4">
              {materials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{material.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{material.type}</span>
                            <span>{material.size}</span>
                            <span>Uploaded: {material.uploadDate}</span>
                            <span>{material.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments">
            <div className="grid gap-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                          {getStatusIcon(assignment.status)}
                          <Badge variant={assignment.status === "submitted" ? "default" : assignment.status === "pending" ? "secondary" : "destructive"}>
                            {getStatusText(assignment.status)}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{assignment.description}</p>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Due: {assignment.dueDate}</span>
                          </div>
                          {assignment.submittedDate && (
                            <span className="text-green-600">Submitted: {assignment.submittedDate}</span>
                          )}
                          {assignment.grade && (
                            <span className="text-blue-600 font-medium">Grade: {assignment.grade}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        {assignment.status !== "submitted" && (
                          <Button size="sm">
                            <Upload className="w-4 h-4 mr-2" />
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Papers Tab */}
          <TabsContent value="papers">
            <div className="grid gap-4">
              {pastPapers.map((paper) => (
                <Card key={paper.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{paper.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{paper.year}</span>
                            <span>{paper.semester}</span>
                            <span>{paper.stream}</span>
                            <span>{paper.type}</span>
                            <span>{paper.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Course;
