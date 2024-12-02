import React, { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type BentoTiltProps = {
  children: React.ReactNode;
  className?: string;
};

const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { top, left, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.96, .96, .96)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  useGSAP(
    () => {
      gsap.fromTo(
        itemRef.current,
        {
          rotationX: -45,
          y: 100,
          opacity: 0,
          scale: 0.9,
          transformOrigin: "center top",
          transformPerspective: 1000,
        },
        {
          rotationX: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1,
          transformPerspective: 1000,
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: itemRef },
  );

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
