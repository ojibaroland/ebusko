import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SmoothScrollProvider } from "./SmoothScrollContext";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

interface LayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { scroll, update } = useSmoothScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  // Update scroll on mount and after component renders
  useEffect(() => {
    if (scroll) {
      // Force initial update
      update();
      
      // Update after a slight delay to ensure all content is properly loaded
      const timeout = setTimeout(() => {
        update();
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [scroll, update]);
  
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      
      // Update locomotive scroll each time the normal scroll event fires
      if (scroll) {
        update();
      }
      
      // Get current scroll position
      const st = window.scrollY;
      
      // Determine scroll direction
      if (st > lastScrollTop) {
        setScrollDirection('down');
      } else if (st < lastScrollTop) {
        setScrollDirection('up');
      }
      setLastScrollTop(st);
      
      // Apply navbar styling based on scroll position
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
    
    // Handle wheel events
    const handleWheel = () => {
      if (scroll) update();
    };
    document.addEventListener("wheel", handleWheel);
    
    // Handle touch events for mobile
    const handleTouchMove = () => {
      if (scroll) update();
    };
    document.addEventListener("touchmove", handleTouchMove);
    
    if (scroll) {
      scroll.on("scroll", handleScroll);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
      if (scroll) {
        scroll.off("scroll", handleScroll);
      }
    };
  }, [scroll, update, lastScrollTop]);

  // Additional listener for scroll direction change
  useEffect(() => {
    if (!scroll || !scrollDirection) return;
    
    // Force update on direction change
    update();
    
    // Additional update after a slight delay
    const timeout = setTimeout(() => {
      update();
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [scroll, scrollDirection, update]);

  return (
    <div className="font-roboto text-neutral-dark bg-neutral-light flex flex-col min-h-screen">
      <Navbar />
      <main data-scroll-section className="flex-grow">{children}</main>
      <div data-scroll-section>
        <Footer />
      </div>
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
