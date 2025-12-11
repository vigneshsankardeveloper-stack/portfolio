import { steps } from "motion"

const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive UIs with modern frameworks.",
    steps: ["React.js", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    description: "Designing robust APIs and server-side logic.",
    steps: ["Node.js", "Express","Nest.js"]
  },
  {
    title: "Database Management",
    description: "Optimizing database performance and security.",
    steps: ["MySQL", "MSSQL", "MongoDB"]
  },
  {
    title: "Deployment",
    description: "Automating deployment using modern tools.",
    steps: ["PM2", "Docker", "AWS"]
  },
  {
    title: "Version Control",
    description: "Collaborating effectively with version control tools.",
    steps: ["Git", "GitHub", "Bitbucket"]
  },
  {
    title:"AI and API integration",
    description:"Integrating AI models and APIs for advanced functionality.",
    steps:["Twilio - whatsapp", "Twilio - programmable Voice/SMS", "OpenAI - ChatGPT"]
  },
  {
    title:"Visualization and Data Analysis",
    description:"Creating interactive visualizations and data analysis tools.",
    steps:["Tableau", "Grafana", "PowerBI"]
  },
  {
    title:"Security and Authentication",
    description:"Implementing robust security measures and authentication.",
    steps:["Network cookies", "JWT", "2FA"]
  },
  {
    title:"E-commerce Integration",
    description:"Integrating e-commerce platforms and payment gateways.",
    steps:["Magento","Payment Integration","Shopify"]
  }
]
const age = new Date().getFullYear() - 2001

export { skills ,age}