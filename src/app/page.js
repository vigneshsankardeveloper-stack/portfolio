"use client";
import React from "react";
import HeroPage from "./components/HeroPage";
import { NavigationBar } from "./components/NavigationBar";
import SkillsCard from "./components/SkillsCard";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { skills } from "../../utils/staticVariables";
import { WorkExperinece } from "./components/WorkExperinece";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-black via-purple-900 to-black">
      <HeroPage />
      <SkillsCard skillContent={skills} />
      <WorkExperinece />
      <Projects />
      <div className="pt-30">
        <Hobbies />
      </div>
      <NavigationBar />
    </div>
  );
}
