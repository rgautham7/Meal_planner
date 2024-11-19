'use client'

import { NavBar } from "@/components/NavBar";
import { AboutPage } from "@/components/AboutPage";
import { DisplayPage } from "@/components/DisplayPage";
import { TestimonialSection } from "@/components/TestimonialSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="pt-4">
        <BackgroundBeamsWithCollision />
        <section id="about">
          <AboutPage />
        </section>
        <section id="mealplans">
          <DisplayPage />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="contact">
          <Newsletter />
        </section>
        <Footer />
      </div>
    </div>
  );
}