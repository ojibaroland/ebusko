import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SmoothScrollProvider } from "./SmoothScrollContext";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

interface LayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { scroll } = useSmoothScroll();
  
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

    // Use both window scroll and locomotive scroll events
    window.addEventListener("scroll", handleScroll);
    
    if (scroll) {
      scroll.on("scroll", handleScroll);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scroll) {
        scroll.off("scroll", handleScroll);
      }
    };
  }, [scroll]);

  return (
    <div className="font-roboto text-neutral-dark bg-neutral-light">
      <Navbar />
      <main data-scroll-section>{children}</main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScrollProvider>
      <LayoutContent>{children}</LayoutContent>
    </SmoothScrollProvider>
  );
}
