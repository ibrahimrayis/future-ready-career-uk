
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/f888d589-1731-4e2a-97b7-3c2d5969b14c.png" 
                alt="CBC Logo" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors">
              Home
            </a>
            <a href="#courses" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors">
              Courses
            </a>
            <a href="#locations" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors">
              Locations
            </a>
            <a href="#contact" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors">
              Contact
            </a>
            <Button className="bg-cbc-gold hover:bg-amber-600 text-white">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Home
            </a>
            <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Courses
            </a>
            <a href="#locations" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Locations
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="bg-cbc-gold hover:bg-amber-600 text-white w-full">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
