
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, FileText, Calendar, Shield, Search, Globe, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
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
                <p className="text-xs text-gray-500">Tanzania Student Academic Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">Tanzania</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Karibu
              <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent"> ElimuHub</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Mfumo wa kielektroniki wa kupata vifaa vya masomo, kutuma kazi, na kufuatilia maendeleo yako ya kitaaluma.
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Access course materials, submit assignments, and track your academic progress - designed for Tanzanian universities.
            </p>
            
            {/* Tanzania Universities Banner */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
              <span className="bg-green-100 px-3 py-1 rounded-full">University of Dar es Salaam</span>
              <span className="bg-yellow-100 px-3 py-1 rounded-full">Sokoine University</span>
              <span className="bg-green-100 px-3 py-1 rounded-full">Mzumbe University</span>
              <span className="bg-yellow-100 px-3 py-1 rounded-full">Nelson Mandela AIST</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Nyenzo za Masomo / Course Materials</h3>
                    <p className="text-gray-600">Access lecture notes, PDFs, videos organized by semester (Muhula) and academic year (Mwaka wa Masomo).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kufuatilia Kazi / Assignment Tracking</h3>
                    <p className="text-gray-600">Submit coursework, track deadlines, and manage your academic responsibilities with ease.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Utafutaji Mahiri / Smart Search</h3>
                    <p className="text-gray-600">Find materials quickly with filtering by course, year, semester, and stream (Mzunguko wa Jioni, Mchana).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mitihani ya Zamani / Past Papers</h3>
                    <p className="text-gray-600">Access previous examination papers to prepare effectively for your upcoming tests and final exams.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                    <p className="text-gray-600">Interface available in both English and Kiswahili for better accessibility across Tanzania.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Karibu Tena</CardTitle>
                  <CardDescription>Ingia ili kufikia mfumo wako wa masomo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="student" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="student">Mwanafunzi</TabsTrigger>
                      <TabsTrigger value="admin">Msimamizi</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="student" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-email">Email / Barua pepe</Label>
                        <Input
                          id="student-email"
                          type="email"
                          placeholder="mwanafunzi@chuo.ac.tz"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-password">Neno la siri / Password</Label>
                        <Input
                          id="student-password"
                          type="password"
                          placeholder="Ingiza neno la siri"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700">
                        <Link to="/dashboard" className="w-full">Ingia kama Mwanafunzi</Link>
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="admin" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Email ya Msimamizi</Label>
                        <Input
                          id="admin-email"
                          type="email"
                          placeholder="msimamizi@chuo.ac.tz"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="admin-password">Neno la siri</Label>
                        <Input
                          id="admin-password"
                          type="password"
                          placeholder="Ingiza neno la siri"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                        <Link to="/admin" className="w-full">Ingia kama Msimamizi</Link>
                      </Button>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-green-600 hover:text-green-700">
                      Umesahau neno la siri? / Forgot password?
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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">ElimuHub</span>
              </div>
              <p className="text-gray-400">
                Kuwezesha wanafunzi wa Tanzania kupata nyenzo za kielimu kwa urahisi na ufanisi.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Viungo vya Haraka</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Msaada wa Wanafunzi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Msaada wa Kiufundi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kalenda ya Kitaaluma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sera za Faragha</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Vyuo Vikuu</h3>
              <ul className="space-y-2 text-gray-400">
                <li>University of Dar es Salaam</li>
                <li>Sokoine University</li>
                <li>Mzumbe University</li>
                <li>Nelson Mandela AIST</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Wasiliana Nasi</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: msaada@elimuhub.co.tz</li>
                <li>Simu: +255 123 456 789</li>
                <li>Masaa: Jumatatu-Ijumaa 8AM-6PM</li>
                <li>Mkoa: Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ElimuHub Tanzania. Haki zote zimehifadhiwa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
