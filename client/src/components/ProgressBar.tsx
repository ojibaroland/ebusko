import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ProgressBarProps {
  name: string;
  percentage: number;
}

export default function ProgressBar({ name, percentage }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      // Use a timeout to allow the animation to play out
      // before setting the width to the final percentage
      // This is a simple way to create a delay for the animation
      // You can adjust the timeout duration as needed
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full">
        <div 
          className="h-2.5 bg-primary rounded-full transition-all duration-1500 ease-in-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
