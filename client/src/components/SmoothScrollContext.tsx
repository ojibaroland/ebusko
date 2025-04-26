import { createContext, useEffect, useRef, useState, ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scroll && scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        resetNativeScroll: true,
      });

      setScroll(locomotiveScroll);

      return () => {
        locomotiveScroll.destroy();
      };
    }

    return undefined;
  }, [scroll]);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      <div id="smooth-scroll-container" ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};