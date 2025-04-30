
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CourseCategories from "@/components/home/CourseCategories";
import Locations from "@/components/home/Locations";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CourseCategories />
        <Locations />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
