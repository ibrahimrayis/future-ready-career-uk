
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    reset();
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our courses or interested in enrolling? Reach out to us and 
          our team will be happy to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-6 text-gray-600">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-red-500" : ""}
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
                className={errors.email ? "border-red-500" : ""}
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
                className={errors.subject ? "border-red-500" : ""}
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
                className={`min-h-32 ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>
            
            <Button type="submit" className="w-full bg-cbc-gold hover:bg-amber-600 text-white">
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="bg-cbc-lightgray p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Why Choose Career Building Center?</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-cbc-navy">Professional Excellence</h4>
              <p className="text-gray-600 mt-1">
                Our certification programs are recognized globally and designed to meet industry standards.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-cbc-navy">Future-Ready Education</h4>
              <p className="text-gray-600 mt-1">
                Our specialized English courses prepare young students with communication skills essential for their future careers.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-cbc-navy">Global Presence</h4>
              <p className="text-gray-600 mt-1">
                With centers in Riyadh and London, we provide education and certification opportunities across continents.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-cbc-navy">Expert Instructors</h4>
              <p className="text-gray-600 mt-1">
                Learn from industry professionals with years of experience in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
