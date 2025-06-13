
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { number: "10K+", label: "Students" },
  { number: "500+", label: "Courses" },
  { number: "1K+", label: "Materials" },
  { number: "50+", label: "Universities" }
];

export const HeroSection = () => {
  return (
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
  );
};
