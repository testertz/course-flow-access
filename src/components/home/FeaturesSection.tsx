
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calendar, Search, Award } from "lucide-react";

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

export const FeaturesSection = () => {
  return (
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
  );
};
