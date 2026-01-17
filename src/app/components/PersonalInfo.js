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
      quote: `<ul>
      <li><strong>Name:</strong> Vignesh Sankar</li>
      <li><strong>Age:</strong> ${age}</li>
      <li><strong>Address:</strong> Salem, Tamil Nadu, India</li>
      <li><strong>Father's Name:</strong> Sankar Thangavelu</li>
      <li><strong>Mother's Name:</strong> Padmavathi Sankar</li>
      <li><strong>Others:</strong> Second child of the family based on weaving</li>
    </ul>`,
      name: "Vignesh Sankar",
      designation: "Personal Info and Address",
      src: "/vigneshOne.jpeg",
    },

    // ✅ SCHOOLING – PARAGRAPH FORMAT
    {
      quote: `<p>
      Completed schooling with strong academic performance.
      He scored <strong>95%</strong> in SSLC and <strong>85%</strong> in HSC,
      demonstrating consistency and dedication throughout the  higher secondary education.
    </p>`,
      name: "Vignesh Sankar",
      designation: "Schooling Details",
      src: "/vignesh101.jpeg",
    },
    {
      quote: `<p>
    Completed <strong>Bachelor of Engineering in Computer Science and Engineering (CSE)</strong>
    at <strong>AVS Engineering College</strong>.  Graduated in <strong>2023</strong> with a
    <strong>CGPA of 8.5</strong>, reflecting strong technical knowledge and consistent academic performance.
  </p>`,
      name: "Vignesh Sankar",
      designation: "College Education",
      src: "/vignesh102.jpeg",
    },
    {
      quote: `<p>
    Began a professional career as a <strong>Full Stack Developer</strong>,
    working with the <strong>MERN stack</strong> and <strong>SQL databases</strong>.
    Hands-on experience includes building scalable applications using
    <strong>Next.js</strong> for server-side rendering and
    <strong>Node.js</strong> for backend services.
  </p>`,
      name: "Career Overview",
      designation: "Start of Career",
      src: "/vignesh103.jpeg",
    },
    {
      quote: `<p>
    Currently working as a <strong>Backend Developer</strong> with a strong focus on
    <strong>Node.js server-side development</strong> and <strong>database engineering</strong>.
    Experience includes designing and maintaining efficient APIs, optimizing database performance,
    and contributing to the successful delivery of <strong>8 projects</strong>.
  </p>`,
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
