
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  BookOpen,
  Calendar,
  FileText,
  Trash2,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "assignment",
      title: "Programming Assignment 2 Due Soon",
      message: "Your Java Basics assignment is due in 2 days - October 30, 2024",
      time: "2 hours ago",
      read: false,
      urgent: true
    },
    {
      id: 2,
      type: "material",
      title: "New Lecture Notes Available",
      message: "Advanced Calculus notes for Chapter 5 have been uploaded",
      time: "1 day ago",
      read: false,
      urgent: false
    },
    {
      id: 3,
      type: "exam",
      title: "Mid-Semester Exam Schedule",
      message: "Physics mid-semester exam scheduled for November 5, 2024",
      time: "2 days ago",
      read: true,
      urgent: false
    },
    {
      id: 4,
      type: "general",
      title: "Academic Calendar Update",
      message: "Mid-semester break dates have been adjusted",
      time: "3 days ago",
      read: true,
      urgent: false
    },
    {
      id: 5,
      type: "assignment",
      title: "Essay Submission Confirmed",
      message: "Your Academic Writing essay has been successfully submitted",
      time: "1 week ago",
      read: true,
      urgent: false
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <FileText className="w-5 h-5 text-yellow-600" />;
      case "material":
        return <BookOpen className="w-5 h-5 text-green-600" />;
      case "exam":
        return <Calendar className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-blue-600" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const urgentCount = notifications.filter(n => !n.read && n.urgent).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Rudi Dashibodi
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Arifa / Notifications</h1>
                  <p className="text-xs text-gray-500">{unreadCount} unread messages</p>
                </div>
              </div>
            </div>
            <Button onClick={markAllAsRead} variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Notifications</p>
                    <p className="text-2xl font-bold text-blue-600">{notifications.length}</p>
                  </div>
                  <Bell className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Unread</p>
                    <p className="text-2xl font-bold text-orange-600">{unreadCount}</p>
                  </div>
                  <Mail className="w-8 h-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Urgent</p>
                    <p className="text-2xl font-bold text-red-600">{urgentCount}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications List */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="urgent">Urgent ({urgentCount})</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id} className={`cursor-pointer transition-all ${
                    !notification.read ? 'border-l-4 border-l-green-500 bg-green-50/30' : ''
                  } ${notification.urgent ? 'ring-2 ring-red-200' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'assignment' ? 'bg-yellow-100' :
                            notification.type === 'material' ? 'bg-green-100' :
                            notification.type === 'exam' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              )}
                              {notification.urgent && (
                                <Badge variant="destructive" className="text-xs">Urgent</Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread">
              <div className="space-y-4">
                {notifications.filter(n => !n.read).map((notification) => (
                  <Card key={notification.id} className="border-l-4 border-l-green-500 bg-green-50/30">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'assignment' ? 'bg-yellow-100' :
                            notification.type === 'material' ? 'bg-green-100' :
                            notification.type === 'exam' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              {notification.urgent && (
                                <Badge variant="destructive" className="text-xs">Urgent</Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="urgent">
              <div className="space-y-4">
                {notifications.filter(n => n.urgent && !n.read).map((notification) => (
                  <Card key={notification.id} className="border-l-4 border-l-red-500 bg-red-50/30 ring-2 ring-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'assignment' ? 'bg-yellow-100' :
                            notification.type === 'material' ? 'bg-green-100' :
                            notification.type === 'exam' ? 'bg-red-100' : 'bg-blue-100'
                          }`}>
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-gray-900">{notification.title}</h3>
                              <Badge variant="destructive" className="text-xs">Urgent</Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="assignments">
              <div className="space-y-4">
                {notifications.filter(n => n.type === 'assignment').map((notification) => (
                  <Card key={notification.id} className={`${
                    !notification.read ? 'border-l-4 border-l-yellow-500 bg-yellow-50/30' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              )}
                              {notification.urgent && (
                                <Badge variant="destructive" className="text-xs">Urgent</Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        {!notification.read && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
