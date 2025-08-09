"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Header = () => {
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animación del logo
    gsap.from(logoRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animación del botón
    gsap.from(buttonRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)",
    });

    // Hover animation for button
    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
      <div ref={logoRef}>
        <Image src={"/logo.svg"} width={180} height={100} alt="logo" />
      </div>

      <div ref={buttonRef}>
        <Button
          className="cursor-pointer shadow-slate-900 hover:shadow-lg"
          style={{
            perspective: "600px",
            transformStyle: "preserve-3d",
          }}
        >
          Empieza Gratis Ya!!
        </Button>
      </div>
    </div>
  );
};
