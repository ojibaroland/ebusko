import { createContext, useEffect, useRef, useState, ReactNode, useCallback } from "react";
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTimeRef = useRef<number>(0);

  // Function to update locomotive scroll
  const update = useCallback(() => {
    if (scroll) {
      scroll.update();
    }
  }, [scroll]);

  // Initialize Locomotive Scroll
  useEffect(() => {
    if (!scroll && scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        multiplier: 0.9,
        inertia: 0.1,
        getSpeed: true,
        getDirection: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        class: "is-inview",
      });

      // Listen to scroll event
      locomotiveScroll.on('scroll', (_instance: any) => {
        lastScrollTimeRef.current = Date.now();
        setIsScrolling(true);
      });

      // Setup regular updates (regardless of scroll events)
      intervalRef.current = setInterval(() => {
        locomotiveScroll.update();
      }, 100);

      setScroll(locomotiveScroll);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        locomotiveScroll.destroy();
      };
    }

    return undefined;
  }, []);

  // Monitor for scroll events ending
  useEffect(() => {
    if (!scroll || !isScrolling) return;

    const checkScrollStopped = () => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current > 100) {
        setIsScrolling(false);
        // Important: force an update when scrolling stops
        update();
      }
    };

    // Check every 50ms if scrolling has stopped
    const interval = setInterval(checkScrollStopped, 50);

    return () => {
      clearInterval(interval);
    };
  }, [scroll, isScrolling, update]);

  // Handle mouse wheel events directly
  useEffect(() => {
    if (!scroll) return;

    const handleWheel = () => {
      update();
      lastScrollTimeRef.current = Date.now();
      setIsScrolling(true);
    };

    const handleTouchMove = () => {
      update();
      lastScrollTimeRef.current = Date.now();
      setIsScrolling(true);
    };

    // Listen to DOM events
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', update);
    };
  }, [scroll, update]);

  return (
    <SmoothScrollContext.Provider value={{ scroll, update }}>
      <div id="smooth-scroll-container" ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};