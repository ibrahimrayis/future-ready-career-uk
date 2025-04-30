
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Locations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('reveal-visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="locations" className="bg-gradient-to-b from-gray-50 to-cbc-lightgray" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-sm text-cbc-gold uppercase tracking-wider font-medium">Global Presence</span>
          <h2 className="text-3xl font-heading font-bold sm:text-4xl mt-2">Our Locations</h2>
          <div className="flex justify-center items-center my-4">
            <div className="h-px w-16 bg-gray-300"></div>
            <span className="decoration-dot"></span>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            With centers in Riyadh and London, we provide career building opportunities across continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Riyadh Location */}
          <Card className="overflow-hidden border-0 shadow-lg reveal-on-scroll rounded-2xl">
            <div className="h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cbc-navy/10 to-cbc-navy/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <MapPin className="h-16 w-16 text-cbc-gold" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center font-heading">
                <MapPin className="h-5 w-5 mr-2 text-cbc-gold" />
                Riyadh, Saudi Arabia
              </CardTitle>
              <CardDescription>Our Middle East headquarters</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our Riyadh center offers comprehensive professional certification programs 
                designed to advance your career in the Middle Eastern job market.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1 h-1 bg-cbc-gold rounded-full mr-2"></div>
                  <span>Expert instructors with industry experience</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <div className="w-1 h-1 bg-cbc-gold rounded-full mr-2"></div>
                  <span>State-of-the-art learning facilities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* London Location */}
          <Card className="overflow-hidden border-0 shadow-lg reveal-on-scroll rounded-2xl">
            <div className="h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cbc-navy/10 to-cbc-navy/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <MapPin className="h-16 w-16 text-cbc-gold" />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center font-heading">
                <MapPin className="h-5 w-5 mr-2 text-cbc-gold" />
                London, United Kingdom
              </CardTitle>
              <CardDescription>Our European educational center</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our London center specializes in English language education for students aged 10-15, 
                preparing the next generation for global career opportunities.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1 h-1 bg-cbc-gold rounded-full mr-2"></div>
                  <span>Native English-speaking teachers</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <div className="w-1 h-1 bg-cbc-gold rounded-full mr-2"></div>
                  <span>Interactive and engaging learning environment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Locations;
