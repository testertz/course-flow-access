
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload,
  FileText,
  Image,
  Video,
  Archive
} from "lucide-react";

const UploadMaterial = () => {
  const [formData, setFormData] = useState({
    title: "",
    course: "",
    type: "",
    semester: "",
    year: "",
    description: "",
    tags: ""
  });

  const courses = [
    { id: 1, code: "CS101", name: "Introduction to Computer Science" },
    { id: 2, code: "MATH201", name: "Calculus II" },
    { id: 3, code: "PHYS151", name: "Physics I" },
    { id: 4, code: "ENG102", name: "Academic Writing" }
  ];

  const fileTypes = [
    { icon: FileText, type: "Document", formats: "PDF, DOC, DOCX" },
    { icon: Image, type: "Image", formats: "JPG, PNG, GIF" },
    { icon: Video, type: "Video", formats: "MP4, AVI, MOV" },
    { icon: Archive, type: "Archive", formats: "ZIP, RAR, 7Z" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Upload Material</h1>
        <p className="text-gray-600 dark:text-gray-400">Upload new course materials and resources</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upload Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Material Details</CardTitle>
              <CardDescription>Provide information about the material you're uploading</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Material Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter material title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="course">Course</Label>
                  <select 
                    id="course"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.code}>
                        {course.code} - {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="type">Material Type</Label>
                  <select 
                    id="type" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="">Select type</option>
                    <option value="notes">Lecture Notes</option>
                    <option value="assignment">Assignment</option>
                    <option value="past_paper">Past Paper</option>
                    <option value="video">Video Lecture</option>
                    <option value="presentation">Presentation</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="semester">Semester</Label>
                  <select 
                    id="semester" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                    value={formData.semester}
                    onChange={(e) => setFormData({...formData, semester: e.target.value})}
                  >
                    <option value="">Select semester</option>
                    <option value="fall_2024">Fall 2024</option>
                    <option value="spring_2024">Spring 2024</option>
                    <option value="summer_2024">Summer 2024</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="year">Academic Year</Label>
                  <select 
                    id="year" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    placeholder="e.g., calculus, derivatives, limits"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief description of the material..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                />
              </div>

              {/* File Upload Area */}
              <div>
                <Label>Upload File</Label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Upload your file</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Drag and drop your file here, or click to browse</p>
                  <Button variant="outline">Choose File</Button>
                  <p className="text-sm text-gray-500 mt-2">Maximum file size: 50MB</p>
                </div>
              </div>

              <Button className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Upload Material
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* File Types Info */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Supported File Types</CardTitle>
              <CardDescription>File formats accepted by the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fileTypes.map((fileType, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <fileType.icon className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{fileType.type}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{fileType.formats}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Upload Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Ensure files are properly named</li>
                <li>• Use descriptive titles and tags</li>
                <li>• Check file quality before upload</li>
                <li>• Include relevant course information</li>
                <li>• Maximum file size is 50MB</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterial;
