
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CMAProgram = () => {
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
              CMA (Certified Management Accountant)
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Enhance your career in financial management with the globally recognized CMA certification 
              that validates your expertise in financial planning, analysis, and strategic decision-making.
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
                  The CMA (Certified Management Accountant) is a globally recognized certification that demonstrates 
                  your mastery of financial planning, analysis, control, and decision support. This certification 
                  focuses on the critical accounting and financial management skills needed in today's business environment.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive CMA program prepares you for both parts of the CMA exam through expert instruction, 
                  extensive practice materials, and a structured study plan that fits your schedule.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Structure</h2>
                
                <Tabs defaultValue="part1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="part1">Part 1</TabsTrigger>
                    <TabsTrigger value="part2">Part 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="part1" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Financial Planning, Performance, and Analytics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>External Financial Reporting Decisions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Planning, Budgeting, and Forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Performance Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Cost Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Internal Controls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Technology and Analytics</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="part2" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Strategic Financial Management</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Financial Statement Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Corporate Finance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Decision Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Risk Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Investment Decisions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Professional Ethics</span>
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
                      <CardTitle className="text-xl">Career Advancement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Enhance your professional credibility and qualify for senior financial positions with higher compensation.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Global Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Earn a certification that is recognized and respected by top employers worldwide.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Practical Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Develop skills in financial analysis, planning, and management that directly apply to real-world challenges.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Professional Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Join a global community of over 100,000 finance and accounting professionals.</p>
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
                    <span>6 months</span>
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
                    <span>12+ Exams</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Support:</span>
                    <span>Instructor-led</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-gold font-bold">£2,500</span>
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

export default CMAProgram;
