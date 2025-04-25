import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      
      if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-white/95", "backdrop-blur-sm");
        navbar.classList.remove("bg-white");
      } else {
        navbar.classList.remove("shadow-lg", "bg-white/95", "backdrop-blur-sm");
        navbar.classList.add("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-roboto text-neutral-dark bg-neutral-light">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
