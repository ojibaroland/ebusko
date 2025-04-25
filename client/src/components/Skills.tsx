import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const programmingSkills = [
  { name: "JavaScript/TypeScript", percentage: 90 },
  { name: "C#/.NET", percentage: 85 },
  { name: "Python", percentage: 75 },
];

const frontendSkills = [
  { name: "React/React Native", percentage: 88 },
  { name: "Angular/Ionic", percentage: 82 },
  { name: "CSS/Sass/Tailwind", percentage: 90 },
];

const backendSkills = [
  { name: "ASP.NET MVC/.NET Core", percentage: 85 },
  { name: "SQL/MySQL/DB2", percentage: 80 },
  { name: "Docker/Azure/AWS", percentage: 75 },
];

const additionalTechnologies = [
  "xUnit", "NUnit", "MSTest", "Selenium", "Hangfire", 
  "Window Service", "Sitecore", "Figma", "JSS", 
  "Bootstrap", "Bulma", "Microsoft Office"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter text-primary">Technical Skills</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My core competencies and technical expertise demonstrate a diverse skill set across frontend, backend, and DevOps technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-inter">Programming Languages</h3>
            </div>

            {programmingSkills.map((skill, index) => (
              <ProgressBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </motion.div>

          {/* Frontend Technologies */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-inter">Frontend Technologies</h3>
            </div>

            {frontendSkills.map((skill, index) => (
              <ProgressBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </motion.div>

          {/* Backend & Database */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-inter">Backend & Database</h3>
            </div>

            {backendSkills.map((skill, index) => (
              <ProgressBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold font-inter text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechnologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-white rounded-full shadow-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
