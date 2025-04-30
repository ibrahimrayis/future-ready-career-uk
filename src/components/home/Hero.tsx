
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-cbc-navy to-cbc-navy/90 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cbc-navy/70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Build Your Career</span>
            <span className="block gradient-heading">Shape Your Future</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-xl text-gray-300 sm:max-w-3xl">
            Professional certifications and specialized English courses to prepare 
            you for success in today's competitive job market.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
            <Button size="lg" className="px-8 py-6 bg-cbc-gold hover:bg-amber-600 text-white">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
