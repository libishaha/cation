import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
        <span className="text-sm font-semibold text-white">C</span>
      </div>
      <span className={cn("text-sm font-semibold", font.className)}>Cation</span>
    </div>
  );
};