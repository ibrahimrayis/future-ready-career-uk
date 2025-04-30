
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/f888d589-1731-4e2a-97b7-3c2d5969b14c.png" 
                alt="CBC Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'} w-auto`}
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors elegant-underline">
              Home
            </a>
            <a href="#courses" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors elegant-underline">
              Courses
            </a>
            <a href="#locations" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors elegant-underline">
              Locations
            </a>
            <a href="#contact" className="text-cbc-navy hover:text-cbc-gold font-medium transition-colors elegant-underline">
              Contact
            </a>
            <Button className="bg-cbc-gold hover:bg-amber-600 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
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
              className={`${scrolled ? 'border-cbc-navy text-cbc-navy' : 'border-white text-white'}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-fade-in">
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
