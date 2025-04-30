
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CDCSProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cbc-navy/95 to-cbc-navy pt-28 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-cbc-gold/20 px-3 py-1 rounded-full text-cbc-gold text-sm font-medium mb-4">
              Professional Certification
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              CDCS (Certified Documentary Credit Specialist)
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Become a recognized expert in trade finance and documentary credits with the globally 
              acknowledged CDCS certification for banking and financial professionals.
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
                  The Certified Documentary Credit Specialist (CDCS) is an internationally recognized qualification 
                  that demonstrates specialized knowledge and expertise in documentary credits and related 
                  instruments used in international trade finance.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive CDCS program prepares trade finance professionals with the knowledge and skills 
                  needed to excel in the examination and build a successful career in international trade finance.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Structure</h2>
                
                <Tabs defaultValue="core" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="core">Core Components</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced Topics</TabsTrigger>
                  </TabsList>
                  <TabsContent value="core" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Core Components</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>UCP 600 Rules & Principles</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Types of Documentary Credits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Documents Examination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Documentary Collections (URC 522)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Transport Documents</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Insurance Documents</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="advanced" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Advanced Topics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Standby Letters of Credit (ISP98)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Guarantees and URDG 758</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Trade Finance Fraud Prevention</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Documentary Credit Problems & Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Digital Trade Finance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Compliance and Sanctions</span>
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
                      <CardTitle className="text-xl">Industry Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Gain a qualification recognized by banking and financial institutions worldwide.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Career Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Open doors to advanced positions in international trade finance and banking.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Technical Competence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Develop specialized knowledge and skills for handling complex trade finance scenarios.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Professional Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Join a global community of trade finance specialists and expand your professional connections.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <Card className="sticky top-24 border-0 shadow-lg gradient-border rounded-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cbc-gold to-cbc-gold/60"></div>
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                  <CardDescription>Everything you need to know</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Duration:</span>
                    <span>4 months</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Format:</span>
                    <span>In-person & Online</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Study Materials:</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Practice Tests:</span>
                    <span>8+ Exams</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Support:</span>
                    <span>Instructor-led</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-gold font-bold">£2,100</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button className="w-full bg-cbc-gold hover:bg-amber-600 text-white">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Information
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

export default CDCSProgram;
