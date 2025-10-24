"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

export default function HeroPage() {
  return (
    <WavyBackground className="max-w-4xl mx-auto h-[40vh] flex items-start justify-start pb-10">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-left text-white leading-tight ">
        <div className=" gap-10 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="a full stack developer experienced in   "
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
        </div>
      </h1>
    </WavyBackground>
  );
}
