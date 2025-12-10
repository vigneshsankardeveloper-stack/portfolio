"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Projects() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-5xl mb-3 text-white dark:text-white max-w-4xl font-bold">
            {"Projects and its Details"}
          </h2>
          <p className="text-neutral-400   text-sm md:text-base max-w-sm">
            {
              "Worked on multiple projects with different technologies since 2023"
            }
          </p>
        </div>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black/50 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden px-2"
            >
              <div className="flex flex-col flex-1">
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-full md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards?.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-500  dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-purple-900   text-white mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Voltas Production management software",
    description: "A software for production management and planning",
    src: "/voltas.jpeg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I worked on the <b>Voltas Production Management Software</b>, a
          complete solution designed for monitoring and managing production
          activities.
          <br />
          <br />
          My responsibilities included building the{" "}
          <b>Production Applications</b> and an interactive <b>Dashboard</b> for
          real-time production monitoring.
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Frontend: React
          <br />• Backend: Next.js
          <br />• Database: MS SQL
          <br />
          <br />
          This system helps track production flow, improve planning, and provide
          clear insights through visually rich dashboard components.
        </p>
      );
    },
  },
  {
    title: "Yazaki Tracebality software",
    description: "A software for tracebility of the PCB board and components",
    src: "/yazaki.jpeg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I worked on the <b>Yazaki Traceability Software</b>, a system designed
          to track PCB boards and their components across each production
          station.
          <br />
          <br />
          My main responsibility was developing the{" "}
          <b>Admin Panel Application</b>, which allows tracing PCB boards as
          they move through different stations and receive real-time station
          output via <b>MQTT</b>.
          <br />
          <br />
          The Admin Panel also includes features for{" "}
          <b>station configuration</b>, workflow management, and{" "}
          <b>operator scheduling</b> to ensure accurate and efficient production
          traceability.
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Frontend: React.js, Next.js
          <br />• Backend: Next.js
          <br />• Database: MySQL, MongoDB
        </p>
      );
    },
  },
  {
    title: "Carrera GT E - commercial",
    description:
      "E - commerce platform including the Warehouse and Admin panel",
    src: "/carrera.jpeg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I worked on the <b>Carrera GT E-Commerce Platform</b>, a complete
          system that includes an Admin Panel, Warehouse Module, and
          integrations with external services.
          <br />
          <br />
          My role focused on developing the <b>Admin Panel</b>, where products
          can be created and managed, orders can be tracked, and courier
          integrations are handled. I also worked on features related to{" "}
          <b>warehouse operations</b>, ensuring smooth syncing between orders,
          stock, and shipping workflows.
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Frontend: Next.js, React.js
          <br />• Backend: Node.js
          <br />• Database: MS SQL, MongoDB
          <br />• E-Commerce API: Magento
        </p>
      );
    },
  },
  {
    description: "Monitor the station health and performance",
    title: "Renault Nissan poka - yoke",
    src: "/nissanLogo.jpeg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I worked on the{" "}
          <b>Renault Nissan Poka-Yoke Health Monitoring Software</b>, a system
          designed to monitor station health, performance, and overall
          operational efficiency within the factory.
          <br />
          <br />
          My primary contribution was developing the <b>Admin Panel</b>, where
          stations can be created, configured with unique station codes, and
          mapped to real-time data sources. The station data is integrated from
          the
          <b> MQTT database</b> and displayed visually in the factory dashboard
          for live monitoring.
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Frontend: Next.js, React.js
          <br />• Backend: Next.js
          <br />• Database: MS SQL, MQTT
        </p>
      );
    },
  },
  {
    description: "A software for employee management and HR - automation",
    title: "Employee - 360",
    src: "/employe360.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <b>Employee-360</b> is an employee management and HR automation
          platform designed to streamline HR operations and provide employees
          with complete access to their organizational data.
          <br />
          <br />
          The system supports separate logins for HR and Employees, enabling
          access to key modules such as offer letters, memos, warnings,
          payslips, and biometric entry records. It simplifies internal
          workflows and automates routine HR tasks.
          <br />
          <br />I worked on the <b>backend</b> development end-to-end, including
          database design, automation flows, and system integrations.
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Backend: Node.js
          <br />• Database: MySQL
          <br />• Automation: Cron jobs, email scheduling
          <br />• Cloud Services: AWS, S3
        </p>
      );
    },
  },
  {
    description: "A HRMS software for onboarding employees to the company",
    title: "HRMS - 360",
    src: "/hrms.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <b>HRMS-360</b> is a complete HRMS platform designed for onboarding
          employees into the company and managing essential HR workflows.
          <br />
          <br />
          The system provides secure access for HR teams and employees to manage
          onboarding documents, offer letters, memos, warnings, payslips, and
          biometric data. It streamlines internal processes and reduces manual
          workload.
          <br />
          <br />I worked on the <b>backend</b> and <b>database</b> development,
          including automation flows, email scheduling, and system integrations.
          <br />
          <br />
          Additionally, I implemented:
          <br />• <b>WhatsApp candidate interest collection</b> using the Twilio
          WhatsApp API
          <br />• <b>Bench Tracking functionalities</b> to monitor employees on
          the bench, track availability, and support HR in resource planning
          <br />
          <br />
          <b>Tech Stack:</b>
          <br />• Backend: Node.js
          <br />• Database: MySQL
          <br />• Automation: Cron jobs, email scheduling
          <br />• Cloud: AWS, S3
          <br />• Communication: Twilio WhatsApp API
        </p>
      );
    },
  },
  {
    description: "A Project costing and analysing software.",
    title: "Project Costing - 360",
    src: "/projectCosting360.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <b>Project Costing - 360</b> is a financial analysis and project
          costing platform designed to calculate revenue, operational expenses,
          and overall profitability for ongoing projects.
          <br />
          <br />
          The system computes revenue received from Cielnet, tracks resources
          allocated to each project, and calculates{" "}
          <b>FTE (Full-Time Equivalent)</b>
          usage to determine accurate project costing. It also includes modules
          for expense calculation and <b>
            currency exchange rate adjustments
          </b>{" "}
          based on client billing requirements.
          <br />
          <br />
          The platform provides separate logins for{" "}
          <b>Management, HRs, Managers, and GMs</b>, giving each role access to
          specific dashboards and financial insights tailored to their
          decision-making needs.
          <br />
          <br />
          These features help organizations gain clear visibility into project
          finances, improve budgeting accuracy, and support strategic planning.
        </p>
      );
    },
  },
];
