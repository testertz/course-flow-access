
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, FileText, Calendar, Shield, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
                <p className="text-xs text-gray-500">Student Academic Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Academic
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Journey</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access course materials, submit assignments, and track your academic progress all in one place.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Materials</h3>
                    <p className="text-gray-600">Access lecture notes, PDFs, videos, and all course resources organized by semester and stream.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Assignment Tracking</h3>
                    <p className="text-gray-600">Submit assignments, track deadlines, and view your submission history with ease.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
                    <p className="text-gray-600">Find materials quickly with advanced filtering by course, year, stream, and material type.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Access</h3>
                    <p className="text-gray-600">Role-based access ensures students see only their enrolled courses and authorized materials.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Welcome Back</CardTitle>
                  <CardDescription>Sign in to access your student portal</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="student" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="student">Student</TabsTrigger>
                      <TabsTrigger value="admin">Admin</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="student" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email</Label>
                        <Input
                          id="student-email"
                          type="email"
                          placeholder="student@university.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-password">Password</Label>
                        <Input
                          id="student-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Link to="/dashboard" className="w-full">Sign In as Student</Link>
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="admin" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Admin Email</Label>
                        <Input
                          id="admin-email"
                          type="email"
                          placeholder="admin@university.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="admin-password">Password</Label>
                        <Input
                          id="admin-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <Link to="/admin" className="w-full">Sign In as Admin</Link>
                      </Button>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot your password?
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">UniPortal</span>
              </div>
              <p className="text-gray-400">
                Empowering students with seamless access to academic resources and tools for success.
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
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@university.edu</li>
                <li>Phone: (555) 123-4567</li>
                <li>Hours: Mon-Fri 8AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 University Student Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
