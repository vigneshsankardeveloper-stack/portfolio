"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function Hobbies() {
  const items = [
    {
      title: "Books ( Novels )",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Documentaries",
      image:
        "/documentries.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Techonologies and Tools",
      image:"/techies.png",
        
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Learning New AI Tools",
      image:
        "/ai.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-5xl mb-3 text-white dark:text-white max-w-4xl font-bold">
            {"Hobbies & Interests"}
          </h2>
          <p className="text-neutral-400   text-sm md:text-base max-w-sm">
            {"A little bit about me and my hobbies."}
          </p>
        </div>
      </div>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          {
            "My Most Favorite Hobbies are documentaries releated to excavation and archaeology"
          }
        </p>
        {items?.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </>
  );
}
