import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
      <Image src={"/logo.svg"} width={180} height={100} alt="logo" />

      <div className="">
        <Button className="cursor-pointer shadow-slate-900 animate-pulse duration-1000  transition-all">
          Empieza Gratis Ya!!
        </Button>
      </div>
    </div>
  );
};
