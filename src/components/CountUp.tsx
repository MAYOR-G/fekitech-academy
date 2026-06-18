import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string | number;
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<string>(String(value));
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const valStr = String(value);
    
    // Parse the value to handle numbers and suffixes
    // Ex: "500+", "10 weeks", "6-10"
    
    const rangeMatch = valStr.match(/^(\d+)\s*[-–]\s*(\d+)(.*)$/);
    const numMatch = valStr.match(/^(\d+)(.*)$/);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          if (rangeMatch) {
            const startNum = parseInt(rangeMatch[1], 10);
            const endNum = parseInt(rangeMatch[2], 10);
            const suffix = rangeMatch[3];
            
            animateValue(0, endNum, 2000, (currentVal) => {
              setDisplayValue(`${startNum}-${currentVal}${suffix}`);
            });
          } else if (numMatch) {
            const num = parseInt(numMatch[1], 10);
            const suffix = numMatch[2];
            animateValue(0, num, 2000, (currentVal) => {
              setDisplayValue(`${currentVal}${suffix}`);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = (start: number, end: number, duration: number, callback: (val: number) => void) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * (end - start) + start);
      
      callback(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        callback(end);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
