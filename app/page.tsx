import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SkillsBanner from "./components/SkillsBanner";
import VisionSection from "./components/VisionSection";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyHireMe from "./components/WhyHireMe";
import BlogPosts from "./components/BlogPosts";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg-page)" }}>
      <Navbar />
      <Hero />
      <Services />
      
      <WorkExperience />
      <VisionSection />
      <WhyHireMe />
      <Portfolio />
      <SkillsBanner />
      <Testimonials />
      <BlogPosts />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
