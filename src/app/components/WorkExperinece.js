"use client";
import { Timeline } from "@/components/ui/timeline";
import React from "react";

export function WorkExperinece() {
  const data = [
    {
      title: "2019 - 2023",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal text-neutral-400 md:text-xl ">
            {
              "Completed my Bachelor's degree in Computer Science under Anna University with First Class with Distinction (CGPA: 8.5). I have a strong foundation in programming languages such as "
            }
            <strong>C</strong>
            {
              " and JavaScript, as well as a keen interest in web development and "
            }
            <strong>{"software engineering"}</strong>
            {"."}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/it.jpg"
              alt="it"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/smilingStudent.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <img
              src="/webdevKit.jpg"
              alt="webdev kit"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/programingLanguages.jpg"
              alt="programing languages"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal text-neutral-400 md:text-xl ">
            {"Worked as a "} <strong>{"MERN stack developer"}</strong>{" "}
            {"at a startup  company named "}
            <strong>{"QuerciaITsys"}</strong>
            {"."}{" "}
            {
              "Developed and deployed production scheduling software for the automobile industries"
            }
            <strong>{"VOLTAS"}</strong>
            {","} <strong>{"NISSAN"}</strong>, <strong>{"TDSG"}</strong>
            {","} <strong>{"KOBELCO"}</strong>
            {". Worked with"} <strong>{"React"}</strong>
            {", "}
            <strong>{"Node.js"}</strong>, <strong>{"MongoDB"}</strong>
            {", "}
            <strong>{"Express.js"}</strong> {"and"} <strong>{"SQL"}</strong>.
          </p>

          <div className="grid grid-cols-2 gap-4">
           
            {/* <img
              src="/mongoDBDark.png"
              alt="mongoDB template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
            <img
              src="/API.jpg"
              alt="expressJs template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/sql.jpg"
              alt="sql template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024 and present",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal text-neutral-400 md:text-xl ">
            {"Working at "}
            <strong>{"Allzone Management Solutions Pvt Ltd"}</strong>
            {" as a "}
            <strong>{"Software Developer (Node.js Backend)"}</strong>
            {
              ", primarily focusing on managing and developing server-side applications. I handle "
            }
            <strong>{"deployments"}</strong>
            {" and "}
            <strong>{"database management"}</strong>
            {" using "}
            <strong>{"MySQL"}</strong>
            {" and "}
            <strong>{"MS SQL"}</strong>
            {". I work extensively with "}
            <strong>{"Node.js"}</strong>
            {", "}
            <strong>{"PM2"}</strong>
            {" and "}
            <strong>{"AWS services"}</strong>
            {
              ". I’m also involved in AI and API integrations, including enabling WhatsApp functionality using Twilio WhatsApp APIs and implementing "
            }
            <strong>{"Programmable Voice APIs"}</strong>
            {"."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <img
              src="/whatsApp.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/pm2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
           
          </div>
        </div>
      ),
    },
  ];
  return <Timeline className="rounded-10" data={data} />;
}
