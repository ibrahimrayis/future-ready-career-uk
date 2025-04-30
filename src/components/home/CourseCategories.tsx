
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, BookIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const CourseCategories = () => {
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
    <section id="courses" className="section-container bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <span className="text-sm text-cbc-gold uppercase tracking-wider font-medium">Curriculum</span>
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mt-2">Our Course Categories</h2>
        <div className="flex justify-center items-center my-4">
          <div className="h-px w-16 bg-gray-300"></div>
          <span className="decoration-dot"></span>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Explore our wide range of courses designed to help you excel in your professional 
          career or prepare younger students for future success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Professional Certifications */}
        <Card className="border-0 shadow-lg overflow-hidden reveal-on-scroll gradient-border rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-cbc-gold to-cbc-gold/60"></div>
          <CardHeader className="pb-2">
            <div className="mb-4 bg-cbc-gold/10 p-3 rounded-full w-fit">
              <BriefcaseIcon className="h-6 w-6 text-cbc-gold" />
            </div>
            <CardTitle className="text-2xl font-heading">Professional Certifications</CardTitle>
            <CardDescription>Industry-recognized credentials for career advancement</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <Link to="/programs/cma" className="hover:text-cbc-gold transition-colors">CMA (Certified Management Accountant)</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <Link to="/programs/cdcs" className="hover:text-cbc-gold transition-colors">CDCS (Certified Documentary Credit Specialist)</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <Link to="/programs/pmp" className="hover:text-cbc-gold transition-colors">PMP (Project Management Professional)</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <Link to="/programs/cia" className="hover:text-cbc-gold transition-colors">CIA (Certified Internal Auditor)</Link>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <Link to="/programs/cisa" className="hover:text-cbc-gold transition-colors">CISA (Certified Information Systems Auditor)</Link>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="bg-cbc-gold hover:bg-amber-600 text-white rounded-md shadow-md hover:shadow-lg transition-all" asChild>
              <Link to="/programs/cma">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Specialized English Courses */}
        <Card className="border-0 shadow-lg overflow-hidden reveal-on-scroll gradient-border rounded-2xl">
          <div className="h-2 bg-gradient-to-r from-cbc-navy to-cbc-navy/60"></div>
          <CardHeader className="pb-2">
            <div className="mb-4 bg-cbc-navy/10 p-3 rounded-full w-fit">
              <GraduationCapIcon className="h-6 w-6 text-cbc-navy" />
            </div>
            <CardTitle className="text-2xl font-heading">Specialized English Courses</CardTitle>
            <CardDescription>For students aged 10-15 years in the UK</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our specialized English courses are designed to prepare the future generation with essential 
              communication and language skills, setting the groundwork for success in the job market.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <BookIcon className="h-5 w-5 text-cbc-navy mr-2" />
                <span>Comprehensive language proficiency development</span>
              </div>
              <div className="flex items-center">
                <BookIcon className="h-5 w-5 text-cbc-navy mr-2" />
                <span>Business communication foundations</span>
              </div>
              <div className="flex items-center">
                <BookIcon className="h-5 w-5 text-cbc-navy mr-2" />
                <span>Public speaking and presentation skills</span>
              </div>
              <div className="flex items-center">
                <BookIcon className="h-5 w-5 text-cbc-navy mr-2" />
                <span>Written communication mastery</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="bg-cbc-navy hover:bg-blue-900 text-white rounded-md shadow-md hover:shadow-lg transition-all" asChild>
              <Link to="/programs/english">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default CourseCategories;
