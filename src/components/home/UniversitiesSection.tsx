
import { CheckCircle } from "lucide-react";

const universities = [
  "University of Dar es Salaam",
  "Sokoine University",
  "Mzumbe University",
  "Nelson Mandela AIST",
  "University of Dodoma",
  "Muhimbili University"
];

export const UniversitiesSection = () => {
  return (
    <section id="universities" className="py-20">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Trusted by Leading Universities
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Supporting academic excellence across Tanzania
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {universities.map((university, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-900 dark:text-white">{university}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
