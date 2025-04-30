
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PMPProgram = () => {
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
              PMP (Project Management Professional)
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Advance your career with the world's leading project management certification 
              that validates your ability to manage projects successfully in any industry.
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
                  The Project Management Professional (PMP) certification is the gold standard in project management, 
                  recognized worldwide as evidence of your expertise in leading and directing projects. 
                  Whether you're an experienced project manager or aspiring to enter this high-demand field, 
                  earning your PMP opens doors to career advancement and higher earning potential.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive PMP program prepares you for the PMP examination with expert instruction, 
                  extensive practice materials, and a structured study plan that aligns with the latest PMBOK® Guide.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Structure</h2>
                
                <Tabs defaultValue="domains" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="domains">Knowledge Domains</TabsTrigger>
                    <TabsTrigger value="process">Process Groups</TabsTrigger>
                  </TabsList>
                  <TabsContent value="domains" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Knowledge Domains</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>People - Focusing on team leadership skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Process - Covering technical project management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Business Environment - Understanding business strategy alignment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Agile and Hybrid methodologies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Project Management frameworks</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="process" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Process Groups</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Initiating - Starting projects effectively</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Planning - Developing comprehensive project plans</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Executing - Leading project work and teams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Monitoring and Controlling - Tracking project performance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Closing - Finalizing projects and capturing lessons learned</span>
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
                      <CardTitle className="text-xl">Higher Earning Potential</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>PMP-certified professionals earn up to 25% more than their non-certified peers.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Global Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>The PMP certification is recognized and respected in virtually every country and industry.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Career Versatility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Apply your project management skills across industries from IT to construction to healthcare.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Professional Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Join a community of over 1 million PMP-certified professionals worldwide.</p>
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
                    <span>8 weeks</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Format:</span>
                    <span>In-person & Online</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">PDUs:</span>
                    <span>35 Contact Hours</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Practice Tests:</span>
                    <span>10+ Full Exams</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Support:</span>
                    <span>Expert Mentoring</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-gold font-bold">£2,300</span>
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

export default PMPProgram;
