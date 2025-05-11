'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClassName?: string; // e.g., 'animate-fadeInUp', 'animate-slideInLeft'
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className,
  animationClassName = 'scroll-reveal', // Default to basic scroll-reveal class
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(className, animationClassName, { visible: isVisible })}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
