import { createContext, useEffect, useRef, useState, ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
  update: () => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
  update: () => {},
});

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    if (!scroll && scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        inertia: 0.09, // Lower values make scrolling smoother
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        resetNativeScroll: false, // Set to false to maintain scroll behavior
      });

      // Add event listener for scrolling
      const handleWindowScroll = () => {
        locomotiveScroll.update();
      };
      window.addEventListener('scroll', handleWindowScroll);
      
      // Update locomotive scroll regularly
      const interval = setInterval(() => {
        locomotiveScroll.update();
      }, 500);

      setScroll(locomotiveScroll);
      setScrollReady(true);

      return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', handleWindowScroll);
        locomotiveScroll.destroy();
      };
    }

    return undefined;
  }, [scroll]);

  // Update locomotive scroll on resize
  useEffect(() => {
    if (!scroll) return;

    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [scroll]);

  // Create the update function
  const update = () => {
    if (scroll) {
      scroll.update();
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ scroll, update }}>
      <div id="smooth-scroll-container" ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};