"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function PersonalInfo() {
  
  const testimonials = [
    {
      quote:`<ul>
  <li><strong>Name:</strong> Vignesh Sankar</li>
  <li><strong>Age:</strong> Loading...</li>
  <li><strong>Address:</strong> Salem, Tamil Nadu, India</li>
  <li><strong>Others:</strong> Second child of the family based on weaving</li>
</ul>
`,
      name: "Sarah Chen",
      designation: "PersonalInfo and address",
      src: "/vigneshOne.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/vignesh101.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/vignesh102.jpeg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/vigneshFour.jpeg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/vignesh103.jpeg",
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
