
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cbc-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src="/lovable-uploads/f888d589-1731-4e2a-97b7-3c2d5969b14c.png" 
              alt="CBC Logo" 
              className="h-12 w-auto mb-4 invert"
            />
            <p className="mt-4 text-sm text-gray-300 max-w-md">
              Career Building Center is the place where we support people to grow in their careers. 
              We provide professional courses and certificates, as well as specialized English courses 
              for students aged 10-15 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cbc-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cbc-gold transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-cbc-gold transition-colors">Courses</a></li>
              <li><a href="#locations" className="hover:text-cbc-gold transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-cbc-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-cbc-gold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cbc-gold mr-2 mt-1" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cbc-gold mr-2 mt-1" />
                <span>London, United Kingdom</span>
              </div>
              <div>
                <p className="hover:text-cbc-gold transition-colors">info@careerbuilding.center</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Career Building Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
