
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
  AlertCircle,
  MapPin
} from "lucide-react";

const Course = () => {
  const { courseId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Tanzania-specific course data
  const course = {
    id: courseId,
    code: "ICT201",
    name: "Computer Programming Fundamentals",
    semester: "Semester 1 - 2024",
    stream: "Regular (Mchana)",
    instructor: "Dr. Amina Mwalimu",
    description: "Utangulizi wa misingi ya upangaji kazi wa kompyuta, algoritma, na suluhisho la matatizo kwa kutumia lugha za kiprogramu.",
    university: "University of Dar es Salaam"
  };

  const materials = [
    {
      id: 1,
      title: "Introduction to Programming - Utangulizi wa Upangaji",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "15 Oktoba, 2024",
      downloads: 45,
      language: "English/Kiswahili"
    },
    {
      id: 2,
      title: "Data Structures Overview - Muundo wa Data",
      type: "Video",
      size: "156 MB", 
      uploadDate: "18 Oktoba, 2024",
      downloads: 32,
      language: "English"
    },
    {
      id: 3,
      title: "Algorithm Analysis - Uchambuzi wa Algoriti",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "20 Oktoba, 2024",
      downloads: 28,
      language: "English/Kiswahili"
    },
    {
      id: 4,
      title: "Programming Examples - Mifano ya Upangaji",
      type: "Code Files",
      size: "500 KB",
      uploadDate: "22 Oktoba, 2024",
      downloads: 38,
      language: "Code"
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Programming Assignment 1 - Kazi ya Upangaji 1",
      description: "Tekeleza algoritma za kimsingi za upangaji (Implement basic sorting algorithms)",
      dueDate: "30 Oktoba, 2024",
      status: "submitted",
      grade: "85%",
      submittedDate: "28 Oktoba, 2024"
    },
    {
      id: 2,
      title: "Programming Assignment 2 - Kazi ya Upangaji 2",
      description: "Jenga programu ya kikokotoo (Build a simple calculator application)",
      dueDate: "15 Novemba, 2024",
      status: "pending",
      grade: null,
      submittedDate: null
    },
    {
      id: 3,
      title: "Final Project Proposal - Pendekezo la Mradi",
      description: "Wasilisha pendekezo la mradi wako wa mwisho (Submit your final project proposal)",
      dueDate: "25 Novemba, 2024",
      status: "not_submitted",
      grade: null,
      submittedDate: null
    }
  ];

  const pastPapers = [
    {
      id: 1,
      title: "Mid-Semester Exam 2023 - Mtihani wa Kati wa Muhula",
      year: "2023",
      semester: "Semester 1",
      stream: "Regular (Mchana)",
      type: "PDF",
      size: "890 KB"
    },
    {
      id: 2,
      title: "Final Exam 2023 - Mtihani wa Mwisho",
      year: "2023", 
      semester: "Semester 1",
      stream: "Regular (Mchana)",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      id: 3,
      title: "Mid-Semester Exam 2022 - Mtihani wa Kati",
      year: "2022",
      semester: "Semester 1", 
      stream: "Evening (Jioni)",
      type: "PDF",
      size: "756 KB"
    },
    {
      id: 4,
      title: "Practical Exam 2023 - Mtihani wa Vitendo",
      year: "2023",
      semester: "Semester 1",
      stream: "Regular (Mchana)",
      type: "PDF",
      size: "645 KB"
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
        return "Imewasilishwa";
      case "pending":
        return "Inasubiri Ukaguzi";
      case "not_submitted":
        return "Haijawawilishwa";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Rudi Dashibodi
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{course.code}</h1>
                <p className="text-xs text-gray-500">{course.name}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-green-600" />
              <span>{course.university}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Course Info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">{course.semester}</Badge>
            <Badge variant="outline" className="border-yellow-500 text-yellow-700">{course.stream}</Badge>
            <span className="text-gray-600">Mwalimu: {course.instructor}</span>
          </div>
          <p className="text-gray-700 mb-2">{course.description}</p>
          <p className="text-sm text-gray-500">Course description available in both English and Kiswahili</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Tafuta nyenzo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="materials" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="materials">Nyenzo za Masomo</TabsTrigger>
            <TabsTrigger value="assignments">Kazi za Darasa</TabsTrigger>
            <TabsTrigger value="papers">Mitihani ya Zamani</TabsTrigger>
          </TabsList>

          {/* Materials Tab */}
          <TabsContent value="materials">
            <div className="grid gap-4">
              {materials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{material.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{material.type}</span>
                            <span>{material.size}</span>
                            <span>Ilipakiwa: {material.uploadDate}</span>
                            <span>{material.downloads} downloads</span>
                            <Badge variant="outline" className="text-xs">{material.language}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Pakua
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
                <Card key={assignment.id} className="hover:shadow-md transition-shadow border-l-4 border-l-yellow-500">
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
                            <span className="text-gray-600">Muda: {assignment.dueDate}</span>
                          </div>
                          {assignment.submittedDate && (
                            <span className="text-green-600">Iliwasilishwa: {assignment.submittedDate}</span>
                          )}
                          {assignment.grade && (
                            <span className="text-blue-600 font-medium">Alama: {assignment.grade}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Pakua
                        </Button>
                        {assignment.status !== "submitted" && (
                          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                            <Upload className="w-4 h-4 mr-2" />
                            Wasilisha
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
                <Card key={paper.id} className="hover:shadow-md transition-shadow border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{paper.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Mwaka: {paper.year}</span>
                            <span>{paper.semester}</span>
                            <span>{paper.stream}</span>
                            <span>{paper.type}</span>
                            <span>{paper.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <Download className="w-4 h-4 mr-2" />
                        Pakua
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
