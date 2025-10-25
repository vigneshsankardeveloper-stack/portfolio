"use client";
import React from "react";
import HeroPage from "./components/HeroPage";
import { WavyBackground } from "@/components/ui/wavy-background";
import { NavigationBar } from "./components/NavigationBar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen m-0 p-0 overflow-hidden bg-black">
      <WavyBackground speed="fast" waveWidth={50} waveOpacity={0.2}>
        <HeroPage />
      </WavyBackground>
      <NavigationBar />
    </div>
  );
}
