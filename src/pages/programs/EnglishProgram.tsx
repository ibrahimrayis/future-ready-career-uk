
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EnglishProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cbc-navy/95 to-cbc-navy pt-28 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-cbc-gold/20 px-3 py-1 rounded-full text-cbc-gold text-sm font-medium mb-4">
              Youth Development
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Specialized English Courses
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Prepare young learners aged 10-15 with essential communication and language 
              skills to excel in their future academic and professional endeavors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-cbc-gold hover:bg-amber-600 text-white">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Overview</h2>
                <p className="text-gray-600 mb-4">
                  Our specialized English courses are designed specifically for students aged 10-15 years in the UK. 
                  We believe that developing strong communication skills early sets the groundwork for future success 
                  in both academic and professional settings.
                </p>
                <p className="text-gray-600 mb-4">
                  Our curriculum combines traditional language acquisition with practical communication skills, 
                  business terminology, and public speaking training—all tailored to be age-appropriate while preparing 
                  students for their future careers.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Course Modules</h2>
                
                <Tabs defaultValue="language" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="language">Language</TabsTrigger>
                    <TabsTrigger value="business">Business</TabsTrigger>
                    <TabsTrigger value="speaking">Speaking</TabsTrigger>
                    <TabsTrigger value="writing">Writing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="language" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Comprehensive Language Proficiency</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Advanced vocabulary development focused on academic and professional contexts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Grammar mastery with practical applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Reading comprehension strategies for complex texts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Critical thinking and analytical skills development</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="business" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Business Communication Foundations</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Introduction to professional vocabulary and terminology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Email and formal written communication basics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Teamwork and collaboration exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Basic project planning and organization skills</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="speaking" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Public Speaking and Presentation Skills</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Confidence building through speech practices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Presentation design and structure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Voice modulation and body language techniques</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Handling questions and interactive discussions</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="writing" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Written Communication Mastery</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Essay structure and argumentative writing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Creative writing for various purposes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Research and citation skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Digital media writing and online communication</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Early Career Preparation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Building foundational skills that will be essential in university and future workplaces.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Confidence Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Encouraging students to express themselves clearly and confidently in various situations.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Cross-Cultural Awareness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Preparing students for global communication and cultural sensitivity in an interconnected world.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Academic Excellence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Enhancing language skills that improve performance across all school subjects.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <Card className="sticky top-24 border-0 shadow-lg gradient-border rounded-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cbc-navy to-cbc-navy/60"></div>
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                  <CardDescription>Everything parents need to know</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Age Group:</span>
                    <span>10-15 years</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Class Size:</span>
                    <span>Max 12 students</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Schedule:</span>
                    <span>After-school & Weekends</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Course Length:</span>
                    <span>12 weeks per module</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Materials:</span>
                    <span>All included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-navy font-bold">£750 per module</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button className="w-full bg-cbc-navy hover:bg-blue-900 text-white">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Assessment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnglishProgram;
