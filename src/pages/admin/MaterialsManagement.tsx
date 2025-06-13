
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  FileText,
  Calendar,
  User
} from "lucide-react";

const MaterialsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const materials = [
    {
      id: 1,
      title: "Advanced Calculus Notes",
      course: "MATH201",
      type: "PDF",
      uploadedBy: "Dr. Johnson",
      uploadDate: "2024-10-22",
      downloads: 156,
      size: "2.5 MB",
      status: "published"
    },
    {
      id: 2,
      title: "Physics Lab Manual",
      course: "PHYS151",
      type: "PDF",
      uploadedBy: "Prof. Wilson",
      uploadDate: "2024-10-21",
      downloads: 89,
      size: "4.8 MB",
      status: "published"
    },
    {
      id: 3,
      title: "Programming Exercises",
      course: "CS101",
      type: "ZIP",
      uploadedBy: "Dr. Chen",
      uploadDate: "2024-10-20",
      downloads: 234,
      size: "1.2 MB",
      status: "published"
    },
    {
      id: 4,
      title: "Database Design Presentation",
      course: "CS201",
      type: "PPTX",
      uploadedBy: "Prof. Davis",
      uploadDate: "2024-10-19",
      downloads: 67,
      size: "8.3 MB",
      status: "draft"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Materials Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage course materials and resources</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Upload Material
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search materials by title, course, or instructor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{materials.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Materials</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Materials List */}
      <Card>
        <CardHeader>
          <CardTitle>All Materials</CardTitle>
          <CardDescription>Manage and organize course materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {materials.map((material) => (
              <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{material.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Badge variant="outline">{material.course}</Badge>
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {material.uploadedBy}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {material.uploadDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {material.downloads} downloads
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={material.status === "published" ? "default" : "secondary"}>
                    {material.status}
                  </Badge>
                  <Badge variant="outline">{material.type}</Badge>
                  <span className="text-sm text-gray-500">{material.size}</span>
                  <div className="flex gap-1 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialsManagement;
