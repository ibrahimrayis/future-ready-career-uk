
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CheckIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CISAProgram = () => {
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
              CISA (Certified Information Systems Auditor)
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Elevate your IT audit career with the world-renowned CISA certification, proving your expertise 
              in information systems audit, control, and security.
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
                  The Certified Information Systems Auditor (CISA) is a globally recognized certification for 
                  IS audit, control, and security professionals. CISA validates your expertise and demonstrates your 
                  ability to assess vulnerabilities, report on compliance, and implement controls within an enterprise.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive CISA program prepares you for the rigorous CISA examination through expert 
                  instruction, extensive practice materials, and a structured study plan that covers the latest 
                  developments in information systems auditing, control, and security.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Program Structure</h2>
                
                <Tabs defaultValue="domains" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="domains">CISA Domains</TabsTrigger>
                    <TabsTrigger value="skills">Key Skills</TabsTrigger>
                  </TabsList>
                  <TabsContent value="domains" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">CISA Domains</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Information System Auditing Process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Governance and Management of IT</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Information Systems Acquisition, Development and Implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Information Systems Operations and Business Resilience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Protection of Information Assets</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="skills" className="p-4 border rounded-md mt-2">
                    <h3 className="text-xl font-semibold mb-3">Key Skills Developed</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Risk assessment and mitigation strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>IT governance frameworks implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Security control testing and evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Compliance assessment and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Business continuity planning and disaster recovery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cbc-gold mr-2 mt-1 flex-shrink-0" />
                        <span>Cybersecurity incident response</span>
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
                      <CardTitle className="text-xl">Versatility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Applicable across industries from financial services to healthcare to government agencies.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Earning Potential</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>CISA-certified professionals typically earn 20-30% more than their non-certified counterparts.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Job Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>High demand for CISA skills in an increasingly regulated and security-conscious business environment.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md gradient-border rounded-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Global Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Internationally acknowledged certification that opens doors to global career opportunities.</p>
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
                    <span>5 months</span>
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
                    <span>10+ Full Exams</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Support:</span>
                    <span>Expert Coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-cbc-gold font-bold">£2,400</span>
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

export default CISAProgram;
