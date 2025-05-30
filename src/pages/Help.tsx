
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  HelpCircle, 
  ArrowLeft, 
  Search,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Download,
  Upload,
  User,
  Settings,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: ""
  });

  const faqs = [
    {
      id: 1,
      question: "How do I download course materials? / Ninawezaje kupakua nyenzo za masomo?",
      answer: "To download materials, go to your course page, click on the Materials tab, and click the download button next to any material. Make sure you're logged in and enrolled in the course.",
      category: "materials"
    },
    {
      id: 2,
      question: "How do I submit assignments? / Ninawezaje kuwasilisha kazi?",
      answer: "Navigate to your course page, go to the Assignments tab, find your assignment, and click 'Submit'. You can upload files directly or paste text depending on the assignment type.",
      category: "assignments"
    },
    {
      id: 3,
      question: "I forgot my password. What should I do? / Nimesahau neno langu la siri.",
      answer: "Click on 'Forgot Password' on the login page. Enter your email address and you'll receive instructions to reset your password. Contact support if you don't receive the email.",
      category: "account"
    },
    {
      id: 4,
      question: "How do I change my profile information? / Ninawezaje kubadilisha maelezo yangu?",
      answer: "Go to your Profile page, click the 'Edit' button, make your changes, and click 'Save'. Some information like Student ID cannot be changed and requires admin assistance.",
      category: "profile"
    },
    {
      id: 5,
      question: "Why can't I access certain courses? / Kwa nini siwezi kufikia masomo fulani?",
      answer: "You can only access courses you're enrolled in. If you think you should have access to a course, contact your academic advisor or the registrar's office.",
      category: "courses"
    },
    {
      id: 6,
      question: "How do I turn on notifications? / Ninawezaje kuwasha arifa?",
      answer: "Go to Settings > Notifications and toggle on the types of notifications you want to receive. You can choose between email and push notifications.",
      category: "notifications"
    }
  ];

  const quickLinks = [
    { title: "User Guide", url: "#", icon: BookOpen },
    { title: "Video Tutorials", url: "#", icon: Download },
    { title: "System Requirements", url: "#", icon: Settings },
    { title: "Academic Calendar", url: "#", icon: User }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "msaada@elimuhub.co.tz",
      icon: Mail,
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "+255 123 456 789",
      icon: Phone,
      action: "Call Now"
    },
    {
      title: "Live Chat",
      description: "Available 8AM-6PM",
      icon: MessageCircle,
      action: "Start Chat"
    }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Msaada / Help & Support</h1>
                <p className="text-xs text-gray-500">Get help and find answers</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Quick Search */}
          <div className="mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">How can we help you?</h2>
                  <p className="text-gray-600">Search for answers or browse our help sections</p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for help topics... / Tafuta mada za msaada..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <link.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900">{link.title}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 mx-auto mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="faq" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                {/* FAQ Tab */}
                <TabsContent value="faq">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                      <CardDescription>
                        Find quick answers to common questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredFaqs.map((faq) => (
                          <div key={faq.id} className="border rounded-lg">
                            <button
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                              onClick={() => toggleFaq(faq.id)}
                            >
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              {expandedFaq === faq.id ? (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-500" />
                              )}
                            </button>
                            {expandedFaq === faq.id && (
                              <div className="p-4 pt-0 border-t bg-gray-50">
                                <p className="text-gray-600">{faq.answer}</p>
                                <Badge variant="secondary" className="mt-2">
                                  {faq.category}
                                </Badge>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Guides Tab */}
                <TabsContent value="guides">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Getting Started Guide</CardTitle>
                        <CardDescription>Learn the basics of using ElimuHub</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">1</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Login to your account</h4>
                              <p className="text-sm text-gray-600">Use your university email and password</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">2</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Browse your courses</h4>
                              <p className="text-sm text-gray-600">Access course materials and assignments</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">3</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Submit assignments</h4>
                              <p className="text-sm text-gray-600">Upload your work before deadlines</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Video Tutorials</CardTitle>
                        <CardDescription>Watch step-by-step video guides</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 border rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">How to Download Materials</h4>
                            <p className="text-sm text-gray-600 mb-3">Learn how to access and download course materials</p>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Watch Video
                            </Button>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">Submitting Assignments</h4>
                            <p className="text-sm text-gray-600 mb-3">Step-by-step assignment submission guide</p>
                            <Button size="sm" variant="outline">
                              <Upload className="w-4 h-4 mr-2" />
                              Watch Video
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Support</CardTitle>
                      <CardDescription>
                        Can't find what you're looking for? Get in touch with us
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              value={supportForm.name}
                              onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={supportForm.email}
                              onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                              placeholder="your.email@university.ac.tz"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select 
                            id="category"
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
                            value={supportForm.category}
                            onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
                          >
                            <option value="">Select a category</option>
                            <option value="technical">Technical Issue</option>
                            <option value="account">Account Problem</option>
                            <option value="course">Course Access</option>
                            <option value="assignment">Assignment Help</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={supportForm.subject}
                            onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                            placeholder="Brief description of your issue"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">Message</Label>
                          <textarea
                            id="message"
                            rows={5}
                            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
                            value={supportForm.message}
                            onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                            placeholder="Describe your issue in detail..."
                          />
                        </div>

                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <method.icon className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{method.title}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Portal</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">File Downloads</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Operational
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Assignment Uploads</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Operational
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      All times are East Africa Time (EAT)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;
