"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";

export default function HeroPage() {
  return (
    <div className="w-full flex justify-center h-[80vh]">
      <h1 className="text-[80px] md:text-[120px] lg:text-[160px] font-bold md:font-extrabold leading-tight text-white text-center py-10">
        <LayoutTextFlip
          duration={2000}
          text="A full stack developer experienced in    "
          words={[
            "Node.js",
            "Express.js",
            "SQL",
            "APIs",
            "React.js",
            "Next.js",
            "AWS",
          ]}
        />
      </h1>
    </div>
  );
}
