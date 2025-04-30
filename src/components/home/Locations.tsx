
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Locations = () => {
  return (
    <section id="locations" className="bg-cbc-lightgray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With centers in Riyadh and London, we provide career building opportunities across continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Riyadh Location */}
          <Card className="card-hover overflow-hidden">
            <div className="h-48 bg-cbc-navy/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-cbc-gold opacity-50" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
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
            </CardContent>
          </Card>

          {/* London Location */}
          <Card className="card-hover overflow-hidden">
            <div className="h-48 bg-cbc-navy/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-cbc-gold opacity-50" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Locations;
