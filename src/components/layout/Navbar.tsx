
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");

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

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // In a real app, you would implement language switching logic here
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-cbc-navy/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/f888d589-1731-4e2a-97b7-3c2d5969b14c.png" 
                  alt="CBC Logo" 
                  className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'} w-auto`}
                />
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`${scrolled ? 'text-cbc-navy' : 'text-white'} hover:text-cbc-gold font-medium transition-colors elegant-underline`}>
              Home
            </Link>
            <a href="#courses" className={`${scrolled ? 'text-cbc-navy' : 'text-white'} hover:text-cbc-gold font-medium transition-colors elegant-underline`}>
              Courses
            </a>
            <a href="#locations" className={`${scrolled ? 'text-cbc-navy' : 'text-white'} hover:text-cbc-gold font-medium transition-colors elegant-underline`}>
              Locations
            </a>
            <a href="#contact" className={`${scrolled ? 'text-cbc-navy' : 'text-white'} hover:text-cbc-gold font-medium transition-colors elegant-underline`}>
              Contact
            </a>

            {/* Language Selector */}
            <div className="relative">
              <Select defaultValue="en" onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[110px] border-none bg-transparent">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="English" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Link to="/login">
              <Button variant="outline" className={`border-cbc-gold text-cbc-gold hover:bg-cbc-gold hover:text-white transition-all`}>
                Login
              </Button>
            </Link>

            <Button className="bg-cbc-gold hover:bg-amber-600 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Selector for Mobile */}
            <Select defaultValue="en" onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[80px] border-none bg-transparent p-1">
                <Globe className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
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
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Home
            </Link>
            <a href="#courses" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Courses
            </a>
            <a href="#locations" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Locations
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-navy hover:text-cbc-gold hover:bg-gray-50">
              Contact
            </a>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-cbc-gold hover:bg-gray-50">
              Login
            </Link>
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
