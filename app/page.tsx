import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyHireMe from "./components/WhyHireMe";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg-page)" }}>
      <Navbar />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <BlogPosts />
      <Contact />
      <Footer />
    </main>
  );
}
