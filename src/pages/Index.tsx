
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Calendar, 
  Shield, 
  Search, 
  Globe, 
  Award, 
  MapPin,
  Download,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const features = [
    {
      icon: FileText,
      title: "Course Materials",
      description: "Access comprehensive lecture notes, PDFs, videos organized by semester and academic year.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Assignment Tracking",
      description: "Submit coursework, track deadlines, and manage your academic responsibilities with ease.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find materials quickly with advanced filtering by course, year, semester, and stream.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Past Papers",
      description: "Access previous examination papers to prepare effectively for your upcoming tests.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students" },
    { number: "500+", label: "Courses" },
    { number: "1K+", label: "Materials" },
    { number: "50+", label: "Universities" }
  ];

  const universities = [
    "University of Dar es Salaam",
    "Sokoine University",
    "Mzumbe University",
    "Nelson Mandela AIST",
    "University of Dodoma",
    "Muhimbili University"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Enhanced Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ElimuHub
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Student Academic Portal</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#universities" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Universities</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Tanzania</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Welcome to the Future of Learning
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block">
                ElimuHub
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive digital platform for accessing course materials, submitting assignments, 
              and tracking academic progress across Tanzanian universities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Link to="/dashboard" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Modern Learning
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to excel in your academic journey, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Universities Section */}
        <section id="universities" className="py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Leading Universities
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Supporting academic excellence across Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {universities.map((university, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-gray-900 dark:text-white">{university}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20">
          <div className="max-w-md mx-auto">
            <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl text-gray-900 dark:text-white">Welcome Back</CardTitle>
                <CardDescription className="text-lg">Access your student portal</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="student" className="text-lg py-3">Student</TabsTrigger>
                    <TabsTrigger value="admin" className="text-lg py-3">Admin</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="student" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="student-email" className="text-base">Email Address</Label>
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="student@university.ac.tz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password" className="text-base">Password</Label>
                      <Input
                        id="student-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>
                    <Button className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Link to="/dashboard" className="w-full">Sign in as Student</Link>
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="admin" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email" className="text-base">Admin Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@university.ac.tz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password" className="text-base">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>
                    <Button className="w-full h-12 text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                      <Link to="/admin" className="w-full">Sign in as Admin</Link>
                    </Button>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 text-center">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ElimuHub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Tanzanian students with easy and efficient access to educational resources.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Universities</h3>
              <ul className="space-y-2 text-gray-400">
                <li>University of Dar es Salaam</li>
                <li>Sokoine University</li>
                <li>Mzumbe University</li>
                <li>Nelson Mandela AIST</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@elimuhub.co.tz</li>
                <li>Phone: +255 123 456 789</li>
                <li>Hours: Monday-Friday 8AM-6PM</li>
                <li>Location: Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ElimuHub Tanzania. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
