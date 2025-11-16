"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { differenceInDays } from "date-fns";
import React from "react";

export default function HeroPage() {
  const startDate = new Date(2023, 1, 1); // Feb = month 1 (0-indexed)
  const today = new Date();

  const days = differenceInDays(today, startDate);
  const years = days / 365; // approx
  const experience = years.toFixed(1); // like 2.9

  return (
    <div className="w-full flex justify-center  pb-20">
      <h1 className="text-[80px] md:text-[120px] lg:text-[160px] font-bold md:font-extrabold leading-tight text-white text-center ">
        <LayoutTextFlip
          duration={2000}
          text={`A full stack developer experience in (${experience} + ) `}
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
