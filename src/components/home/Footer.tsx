
import { BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">ElimuHub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering Tanzanian students with easy and efficient access to educational resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Student Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Universities</h3>
            <ul className="space-y-2 text-gray-400">
              <li>University of Dar es Salaam</li>
              <li>Sokoine University</li>
              <li>Mzumbe University</li>
              <li>Nelson Mandela AIST</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@elimuhub.co.tz</li>
              <li>Phone: +255 123 456 789</li>
              <li>Hours: Monday-Friday 8AM-6PM</li>
              <li>Location: Dar es Salaam, Tanzania</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ElimuHub Tanzania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
