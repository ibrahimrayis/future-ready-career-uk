
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CourseCategories from "@/components/home/CourseCategories";
import Locations from "@/components/home/Locations";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

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
