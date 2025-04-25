import { motion } from "framer-motion";
import Timeline from "./Timeline";

const experiences = [
  {
    title: "Software Developer",
    company: "Medical Mutual of Ohio",
    period: "2024 - Present",
    responsibilities: [
      "Build services to automate and improve existing processes.",
      "Consistently improved documentation of technical workflows and participated in code reviews.",
      "Solve complex problems on multiple applications and technologies.",
      "Assist peers and senior level colleagues to resolve issues and meet deadlines."
    ]
  },
  {
    title: "Junior Software Developer",
    company: "Interapt – APPRENTICESHIP at Medical Mutual of Ohio",
    period: "2023 - 2024",
    responsibilities: [
      "Researched and utilized multithreading to optimize an automated process from 15hrs to 4hrs.",
      "Redesigned windows processes with C# and .Net Framework to automate a labor-intensive process.",
      "Developed documentation of technical workflows and participated in code reviews.",
      "Utilized Kanban process to fix identified bugs, ensuring the reliability of software applications.",
      "Supported development and maintenance of new and existing .Net applications."
    ]
  },
  {
    title: "Website Developer",
    company: "Kiri Chic",
    period: "2018 - 2023",
    responsibilities: [
      "Coordinated with sales team and leadership to design and build a new ecommerce website.",
      "Customized website features using JavaScript, CSS, and HTML on the Shopify platform.",
      "Supported the team through debugging and maintaining web product pages."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter text-primary">Work Experience</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey showcases experience across various development roles and environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Timeline 
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              responsibilities={experience.responsibilities}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
