
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, BookIcon, GraduationCapIcon } from "lucide-react";

const CourseCategories = () => {
  return (
    <section id="courses" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Course Categories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of courses designed to help you excel in your professional 
          career or prepare younger students for future success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professional Certifications */}
        <Card className="card-hover border-t-4 border-t-cbc-gold">
          <CardHeader className="pb-2">
            <div className="mb-4 bg-cbc-gold/10 p-3 rounded-full w-fit">
              <BriefcaseIcon className="h-6 w-6 text-cbc-gold" />
            </div>
            <CardTitle className="text-2xl">Professional Certifications</CardTitle>
            <CardDescription>Industry-recognized credentials for career advancement</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <span>CMA (Certified Management Accountant)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <span>CDCS (Certified Documentary Credit Specialist)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <span>PMP (Project Management Professional)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <span>CIA (Certified Internal Auditor)</span>
              </li>
              <li className="flex items-center">
                <span className="bg-cbc-gold/20 rounded-full p-1 mr-2"></span>
                <span>CISA (Certified Information Systems Auditor)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="bg-cbc-gold hover:bg-amber-600 text-white">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        {/* Specialized English Courses */}
        <Card className="card-hover border-t-4 border-t-cbc-navy">
          <CardHeader className="pb-2">
            <div className="mb-4 bg-cbc-navy/10 p-3 rounded-full w-fit">
              <GraduationCapIcon className="h-6 w-6 text-cbc-navy" />
            </div>
            <CardTitle className="text-2xl">Specialized English Courses</CardTitle>
            <CardDescription>For students aged 10-15 years in the UK</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our specialized English courses are designed to prepare the future generation with essential 
              communication and language skills, setting the groundwork for success in the job market.
            </p>
            <div className="space-y-2">
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
          <CardFooter>
            <Button className="bg-cbc-navy hover:bg-blue-900 text-white">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default CourseCategories;
