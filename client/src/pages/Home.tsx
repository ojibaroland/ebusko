import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set document title
    document.title = "Ebuka Ojiba | Full-Stack Developer";
    
    // Setup native smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <Layout>
      <PageTransition>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Volunteering />
        <Contact />
      </PageTransition>
    </Layout>
  );
}
