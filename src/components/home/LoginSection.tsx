
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
  );
};
