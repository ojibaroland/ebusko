import { motion } from "framer-motion";

const educations = [
  {
    degree: "CLEVELAND CODES SOFTWARE DEVELOPERS ACADEMY",
    institution: "Cuyahoga Community College",
    year: "2022",
    icon: "graduation-cap"
  },
  {
    degree: "BACHELOR OF CHEMICAL ENGINEERING",
    institution: "Texas A&M University, Kingsville",
    year: "2015 - 2018",
    icon: "graduation-cap"
  },
  {
    degree: "COMPTIA SECUREPATH CYBERSECURITY BOOTCAMP",
    institution: "Cuyahoga Community College",
    year: "2024",
    icon: "certificate"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter text-primary">Education & Certifications</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications provide a strong foundation for my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((education, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-24 bg-primary flex items-center justify-center">
                {education.icon === "graduation-cap" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary mb-4">
                  {education.year}
                </span>
                <h3 className="text-xl font-bold font-inter mb-2">{education.degree}</h3>
                <p className="text-gray-600">{education.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
