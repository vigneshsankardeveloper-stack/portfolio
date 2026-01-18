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
import TechMarque from "./components/TechMarque";
import PersonalInfo from "./components/PersonalInfo";
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col bg-gradient-to-b from-black via-purple-900 to-black">
        <HeroPage />
        <TechMarque />
        <WorkExperinece />
        <SkillsCard skillContent={skills} />
        <Projects />
        
        <div className="pt-30">
          <PersonalInfo />
        </div>
        <NavigationBar />
      </div>
    </>
  );
}
