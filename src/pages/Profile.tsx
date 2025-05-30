
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award,
  ArrowLeft,
  Edit,
  Save,
  Camera
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Amina Mohamed Mwalimu",
    email: "amina.mohamed@udsm.ac.tz",
    phone: "+255 754 123 456",
    studentId: "2022-04-01234",
    program: "Bachelor of Science in Computer Engineering",
    year: "3rd Year",
    gpa: "3.85",
    address: "Mlimani Campus, University of Dar es Salaam"
  });

  const academicRecord = [
    { semester: "Semester 1 - 2024", gpa: "3.9", credits: 18, status: "Completed" },
    { semester: "Semester 2 - 2023", gpa: "3.8", credits: 20, status: "Completed" },
    { semester: "Semester 1 - 2023", gpa: "3.7", credits: 18, status: "Completed" },
    { semester: "Semester 2 - 2022", gpa: "3.9", credits: 19, status: "Completed" }
  ];

  const achievements = [
    { title: "Dean's List", semester: "Semester 1 - 2024", description: "Academic Excellence" },
    { title: "Best Programming Project", semester: "Semester 2 - 2023", description: "ICT201 Course" },
    { title: "Mathematics Competition Winner", semester: "Semester 1 - 2023", description: "University Level" }
  ];

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
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Wasifu wa Mwanafunzi</h1>
                <p className="text-xs text-gray-500">Student Profile</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 rounded-full p-2">
                    <Camera className="w-3 h-3" />
                  </Button>
                </div>
                <CardTitle className="text-lg">{profileData.name}</CardTitle>
                <CardDescription>{profileData.studentId}</CardDescription>
                <Badge variant="secondary" className="bg-green-100 text-green-800">{profileData.year}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{profileData.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{profileData.program}</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{profileData.gpa}</p>
                    <p className="text-sm text-gray-500">Current GPA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="personal">Maelezo ya Binafsi</TabsTrigger>
                <TabsTrigger value="academic">Rekodi ya Masomo</TabsTrigger>
                <TabsTrigger value="achievements">Mafanikio</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Manage your personal details</CardDescription>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                        {isEditing ? "Hifadhi" : "Hariri"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Full Name / Jina Kamili</Label>
                        <Input
                          id="fullName"
                          value={profileData.name}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="studentId">Student ID / Nambari ya Mwanafunzi</Label>
                        <Input
                          id="studentId"
                          value={profileData.studentId}
                          disabled
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address / Barua pepe</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number / Nambari ya Simu</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address / Anwani</Label>
                        <Input
                          id="address"
                          value={profileData.address}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="program">Program / Chuo</Label>
                        <Input
                          id="program"
                          value={profileData.program}
                          disabled
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic Record */}
              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Record / Rekodi ya Masomo</CardTitle>
                    <CardDescription>Your semester-wise academic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {academicRecord.map((record, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium text-gray-900">{record.semester}</h3>
                            <p className="text-sm text-gray-500">{record.credits} credits completed</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-lg font-semibold text-green-600">{record.gpa}</p>
                              <p className="text-xs text-gray-500">GPA</p>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {record.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Achievements */}
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Awards / Mafanikio na Tuzo</CardTitle>
                    <CardDescription>Your academic achievements and recognitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{achievement.semester}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
