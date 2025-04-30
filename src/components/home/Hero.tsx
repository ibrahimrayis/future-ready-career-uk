
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-cbc-navy to-cbc-navy/90 overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-cbc-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-cbc-gold/5 rounded-full blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cbc-navy/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 sm:text-center lg:text-left reveal-on-scroll">
            <div className="inline-block mb-3">
              <span className="text-xs uppercase tracking-widest text-cbc-gold font-medium">Excellence in Education</span>
              <div className="flex items-center mt-1">
                <span className="w-10 h-0.5 bg-cbc-gold"></span>
                <span className="w-2 h-2 rounded-full bg-cbc-gold ml-1"></span>
              </div>
            </div>
            
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Build Your Career</span>
              <span className="block gradient-heading mt-2">Shape Your Future</span>
            </h1>
            
            <p className="mt-8 text-xl text-gray-300 sm:max-w-3xl">
              Professional certifications and specialized English courses to prepare 
              you for success in today's competitive job market.
            </p>
            
            <div className="mt-12 sm:flex sm:justify-center lg:justify-start gap-6">
              <Button size="lg" className="px-8 py-6 bg-cbc-gold hover:bg-amber-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-all duration-300 mt-4 sm:mt-0">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cbc-gold to-cbc-silver rounded-2xl blur-sm"></div>
              <div className="relative bg-white rounded-2xl p-6">
                <div className="bg-cbc-lightgray p-4 rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-cbc-navy/10 rounded-full flex items-center justify-center">
                    <span className="text-cbc-navy text-2xl font-bold">CBC</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="h-8 w-24 bg-cbc-gold rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
