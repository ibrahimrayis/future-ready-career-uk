
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useRef } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    reset();
  };

  return (
    <section id="contact" className="section-container bg-white" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <span className="text-sm text-cbc-gold uppercase tracking-wider font-medium">Get in Touch</span>
        <h2 className="text-3xl font-heading font-bold sm:text-4xl mt-2">Contact Us</h2>
        <div className="flex justify-center items-center my-4">
          <div className="h-px w-16 bg-gray-300"></div>
          <span className="decoration-dot"></span>
          <div className="h-px w-16 bg-gray-300"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Have questions about our courses or interested in enrolling? Reach out to us and 
          our team will be happy to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="reveal-on-scroll">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cbc-gold/20 to-cbc-navy/20 rounded-2xl blur-md"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6 text-gray-600">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Full Name"
                    {...register("name", { required: "Name is required" })}
                    className={`rounded-lg border-gray-200 focus:border-cbc-gold focus:ring-cbc-gold/30 ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>
                
                <div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`rounded-lg border-gray-200 focus:border-cbc-gold focus:ring-cbc-gold/30 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                
                <div>
                  <Input
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is required" })}
                    className={`rounded-lg border-gray-200 focus:border-cbc-gold focus:ring-cbc-gold/30 ${errors.subject ? "border-red-500" : ""}`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message as string}
                    </p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                    className={`min-h-32 rounded-lg border-gray-200 focus:border-cbc-gold focus:ring-cbc-gold/30 ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message as string}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cbc-gold to-amber-500 hover:from-amber-500 hover:to-cbc-gold text-white rounded-lg shadow-md hover:shadow-lg transition-all py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="bg-cbc-lightgray p-8 rounded-2xl shadow-lg reveal-on-scroll">
          <h3 className="text-xl font-heading font-semibold mb-6">Why Choose Career Building Center?</h3>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cbc-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-cbc-gold font-bold">01</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-cbc-navy">Professional Excellence</h4>
                <p className="text-gray-600 mt-1">
                  Our certification programs are recognized globally and designed to meet industry standards.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cbc-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-cbc-gold font-bold">02</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-cbc-navy">Future-Ready Education</h4>
                <p className="text-gray-600 mt-1">
                  Our specialized English courses prepare young students with communication skills essential for their future careers.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cbc-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-cbc-gold font-bold">03</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-cbc-navy">Global Presence</h4>
                <p className="text-gray-600 mt-1">
                  With centers in Riyadh and London, we provide education and certification opportunities across continents.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cbc-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-cbc-gold font-bold">04</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-cbc-navy">Expert Instructors</h4>
                <p className="text-gray-600 mt-1">
                  Learn from industry professionals with years of experience in their respective fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
