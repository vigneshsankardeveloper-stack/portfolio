"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Target } from "lucide-react";

export function NavigationBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact Via email",
      icon: (
        <AlternateEmailIcon className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:vigneshsankar29112001@gmail.com",
    },

    {
      title: "Make a Call",
      icon: (
        <LocalPhoneIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+91 9159043026",
    },

    {
      title: "Dowload CV",
      icon: (
        <DocumentScannerIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/vigneshSankarResume.pdf",
    },

    {
      title: "Linkedin",
      icon: (
        <LinkedInIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHstDPmFDr7UAAAAZqSwdWACycJTzZzs4uXEMNLKuZCKFRn8w3Pbf2cJrtcK0PKh9MI5YjeGXro-spXLtzVrtP8WJ6m_a2Xuz8t6nT2iuud3tIMbTxIAdcvNfhTe-PKYxSia2I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvignesh-sankar-393882290%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/vigneshsankardeveloper-stack",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col items-center justify-center   w-full">
      <FloatingDock items={links} />
    </div>
  );
}
