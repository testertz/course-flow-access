
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon, 
  ArrowLeft, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Download,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    assignments: true,
    materials: true,
    exams: true,
    general: false,
    email: true,
    push: false
  });

  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "light",
    autoDownload: false,
    offlineMode: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    allowMessages: true
  });

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
                <SettingsIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mipangilio / Settings</h1>
                <p className="text-xs text-gray-500">Manage your preferences</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="notifications">Arifa</TabsTrigger>
              <TabsTrigger value="preferences">Mapendeleo</TabsTrigger>
              <TabsTrigger value="security">Usalama</TabsTrigger>
              <TabsTrigger value="privacy">Faragha</TabsTrigger>
            </TabsList>

            {/* Notifications Settings */}
            <TabsContent value="notifications">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Choose what notifications you want to receive
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="assignments">Assignment Notifications</Label>
                          <p className="text-sm text-gray-500">Get notified about assignment deadlines</p>
                        </div>
                        <Switch 
                          id="assignments"
                          checked={notifications.assignments}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, assignments: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="materials">New Materials</Label>
                          <p className="text-sm text-gray-500">When new course materials are uploaded</p>
                        </div>
                        <Switch 
                          id="materials"
                          checked={notifications.materials}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, materials: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="exams">Exam Notifications</Label>
                          <p className="text-sm text-gray-500">Exam schedules and updates</p>
                        </div>
                        <Switch 
                          id="exams"
                          checked={notifications.exams}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, exams: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="general">General Announcements</Label>
                          <p className="text-sm text-gray-500">University news and updates</p>
                        </div>
                        <Switch 
                          id="general"
                          checked={notifications.general}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, general: checked})
                          }
                        />
                      </div>
                    </div>

                    <hr />

                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">Delivery Methods</h4>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <div>
                            <Label htmlFor="email">Email Notifications</Label>
                            <p className="text-sm text-gray-500">Receive notifications via email</p>
                          </div>
                        </div>
                        <Switch 
                          id="email"
                          checked={notifications.email}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, email: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-gray-500" />
                          <div>
                            <Label htmlFor="push">Push Notifications</Label>
                            <p className="text-sm text-gray-500">Browser and mobile push notifications</p>
                          </div>
                        </div>
                        <Switch 
                          id="push"
                          checked={notifications.push}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, push: checked})
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Preferences */}
            <TabsContent value="preferences">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Display & Language
                    </CardTitle>
                    <CardDescription>
                      Customize your app appearance and language
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="language">Language / Lugha</Label>
                      <select 
                        id="language"
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
                        value={preferences.language}
                        onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                      >
                        <option value="en">English</option>
                        <option value="sw">Kiswahili</option>
                        <option value="both">Both / Zote mbili</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {preferences.theme === 'light' ? (
                          <Sun className="w-4 h-4 text-gray-500" />
                        ) : (
                          <Moon className="w-4 h-4 text-gray-500" />
                        )}
                        <div>
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-gray-500">Switch to dark theme</p>
                        </div>
                      </div>
                      <Switch 
                        checked={preferences.theme === 'dark'}
                        onCheckedChange={(checked) => 
                          setPreferences({...preferences, theme: checked ? 'dark' : 'light'})
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Settings
                    </CardTitle>
                    <CardDescription>
                      Manage how files are downloaded and stored
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="autoDownload">Auto-download Materials</Label>
                        <p className="text-sm text-gray-500">Automatically download new materials</p>
                      </div>
                      <Switch 
                        id="autoDownload"
                        checked={preferences.autoDownload}
                        onCheckedChange={(checked) => 
                          setPreferences({...preferences, autoDownload: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="offlineMode">Offline Mode</Label>
                        <p className="text-sm text-gray-500">Access downloaded content offline</p>
                      </div>
                      <Switch 
                        id="offlineMode"
                        checked={preferences.offlineMode}
                        onCheckedChange={(checked) => 
                          setPreferences({...preferences, offlineMode: checked})
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Password & Security
                    </CardTitle>
                    <CardDescription>
                      Manage your account security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input 
                        id="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input 
                        id="newPassword"
                        type="password"
                        placeholder="Enter new password"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input 
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm new password"
                        className="mt-2"
                      />
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700">
                      <Lock className="w-4 h-4 mr-2" />
                      Update Password
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Enable 2FA</Label>
                        <p className="text-sm text-gray-500">Use SMS or authenticator app</p>
                      </div>
                      <Button variant="outline">Setup 2FA</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Privacy */}
            <TabsContent value="privacy">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Privacy Settings
                    </CardTitle>
                    <CardDescription>
                      Control who can see your information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="profileVisible">Public Profile</Label>
                        <p className="text-sm text-gray-500">Make your profile visible to other students</p>
                      </div>
                      <Switch 
                        id="profileVisible"
                        checked={privacy.profileVisible}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, profileVisible: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showEmail">Show Email</Label>
                        <p className="text-sm text-gray-500">Display your email on your profile</p>
                      </div>
                      <Switch 
                        id="showEmail"
                        checked={privacy.showEmail}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, showEmail: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showPhone">Show Phone</Label>
                        <p className="text-sm text-gray-500">Display your phone number on your profile</p>
                      </div>
                      <Switch 
                        id="showPhone"
                        checked={privacy.showPhone}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, showPhone: checked})
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allowMessages">Allow Messages</Label>
                        <p className="text-sm text-gray-500">Let other students send you messages</p>
                      </div>
                      <Switch 
                        id="allowMessages"
                        checked={privacy.allowMessages}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, allowMessages: checked})
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data & Privacy</CardTitle>
                    <CardDescription>
                      Manage your data and download options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete My Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;
