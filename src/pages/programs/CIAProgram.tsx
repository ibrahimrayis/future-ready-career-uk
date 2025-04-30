
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CIAProgram = () => {
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
              CIA (Certified Internal Auditor)
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Establish yourself as a trusted expert in internal auditing with the premier 
              certification that demonstrates your proficiency in governance, risk management, and control.
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
                  The Certified Internal Auditor (CIA) is the only globally recognized certification for 
                  internal auditors and is the standard by which individuals demonstrate their competency 
                  and professionalism in internal auditing. The CIA designation is a valuable credential for 
                  career growth in internal auditing, risk management, and compliance.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive CIA program prepares you to pass all three parts of the CIA exam through 
                  expert instruction, extensive practice materials, and a structured study plan that aligns with the 
                  latest IIA's International Standards for the Professional Practice of Internal Auditing.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Structure</h2>
                
                <Tabs defaultValue="part1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="part1">Part 1</TabsTrigger>
                    <TabsTrigger value="part2">Part 2</TabsTrigger>
                    <TabsTrigger value="part3">Part 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="part1" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Essentials of Internal Auditing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Foundations of Internal Auditing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Independence and Objectivity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Proficiency and Due Professional Care</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Quality Assurance and Improvement Programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Governance, Risk Management, and Control</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="part2" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Practice of Internal Auditing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Managing the Internal Audit Activity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Planning the Engagement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Performing the Engagement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Communicating Results</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Monitoring Progress</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="part3" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Business Knowledge for Internal Auditing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Business Acumen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Information Security</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Information Technology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Financial Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Strategic Management</span>
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
                      <CardTitle className="text-xl">Professional Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Gain the most prestigious qualification in the internal audit profession, recognized worldwide.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Career Advancement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Enhance your opportunities for promotion and leadership positions in internal audit.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Competitive Advantage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Stand out in the job market with a credential that demonstrates your expertise and commitment.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Professional Network</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Connect with a global network of certified internal audit professionals through IIA membership.</p>
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
                    <span>15+ Exams</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Support:</span>
                    <span>Instructor-led</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-gold font-bold">£2,200</span>
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

export default CIAProgram;
