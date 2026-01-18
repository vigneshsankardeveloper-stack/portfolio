"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function PersonalInfo() {
  const ageCalculator = () => {
    const today = new Date();
    const birthDate = new Date("2001-11-29");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = ageCalculator();

  const testimonials = [
    {
      type: "list",
      quote: [
        { label: "Name", value: "Vignesh Sankar" },
        { label: "Age", value: age },
        { label: "Address", value: "Salem, Tamil Nadu, India" },
        { label: "Father's Name", value: "Sankar Thangavelu" },
        { label: "Mother's Name", value: "Padmavathi Sankar" },
        {
          label: "Others",
          value: "Second child of the family based on weaving",
        },
      ],
      
      name: "Vignesh Sankar",
      designation: "Personal Info and Address",
      src: "/vigneshOne.jpeg",
    },

    {
      type: "paragraph",
      quote:
        "Completed schooling with strong academic performance. He scored 95% in SSLC and 85% in HSC, demonstrating consistency and dedication throughout the higher secondary education.",
      name: "Vignesh Sankar",
      designation: "Schooling Details",
      src: "/vignesh101.jpeg",
    },

    {
      type: "paragraph",
      quote:
        "Completed Bachelor of Engineering in Computer Science and Engineering (CSE) at AVS Engineering College. Graduated in 2023 with a CGPA of 8.5, reflecting strong technical knowledge and consistent academic performance.",
      name: "Vignesh Sankar",
      designation: "College Education",
      src: "/vignesh102.jpeg",
    },

    {
      type: "paragraph",
      quote:
        "Began a professional career as a Full Stack Developer, working with the MERN stack and SQL databases. Hands-on experience includes building scalable applications using Next.js for server-side rendering and Node.js for backend services.",
      name: "Career Overview",
      designation: "Start of Career",
      src: "/vignesh103.jpeg",
    },

    {
      type: "paragraph",
      quote:
        "Currently working as a Backend Developer with a strong focus on Node.js server-side development and database engineering. Experience includes designing and maintaining efficient APIs, optimizing database performance, and contributing to the successful delivery of 8 projects.",
      name: "Career Overview",
      designation: "Current Role",
      src: "/vigneshFour.jpeg",
    },
  ];

  return (
    <>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-5xl mb-3 text-white dark:text-white max-w-4xl font-bold">
            {"Prosonal info"}
          </h2>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />;
    </>
  );
}
