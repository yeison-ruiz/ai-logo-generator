import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  // Import useEffect and useState from React

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimate(true);
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
      <Image src={"/logo.svg"} width={180} height={100} alt="logo" />

      <div>
        <Button
          className={`cursor-pointer shadow-slate-900 transition-transform duration-300 hover:scale-110 hover:rotate-x-6 hover:rotate-y-6 active:scale-95 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
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
