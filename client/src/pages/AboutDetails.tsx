import { motion } from "framer-motion";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";

export default function AboutDetails() {
  return (
    <PageTransition>
      <div className="pt-20 pb-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <motion.button 
              className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 010 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Go Back</span>
            </motion.button>
          </Link>

          <motion.div
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-60 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                About Ebuka Ojiba
              </h1>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Goals</h2>
                    <p className="text-gray-600 leading-relaxed">
                      As a dedicated Full-Stack Development professional, I am eager to contribute my expertise to a dynamic team focused on mission-critical systems. With a robust foundation in C#, jQuery, Angular, Ionic, Docker and Azure DevOps, I am excited to leverage my skills and experience as a software Developer to support in resolving complex challenges.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Journey</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      My journey as a developer began with my education at Cleveland Codes Software Developers Academy. I further enhanced my skills by obtaining a Bachelor's in Chemical Engineering from Texas A&M University, which provided me with strong analytical and problem-solving abilities that complement my technical skills.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Recently, I completed the CompTIA SecurePath Cybersecurity Bootcamp, adding security expertise to my skill set.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Throughout my career, I've worked on a variety of projects that have allowed me to develop skills in both front-end and back-end technologies. My experience ranges from optimizing automated processes to designing and building e-commerce websites.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Approach</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      I believe in writing clean, maintainable code that follows industry best practices. I'm passionate about optimizing performance and creating intuitive user experiences. My approach combines technical excellence with practical business solutions.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      I continuously expand my knowledge of emerging technologies and frameworks to ensure that the solutions I deliver are modern, scalable, and future-proof.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Involvement</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Beyond my professional work, I'm committed to giving back to the community. I volunteer with organizations such as Bridge to IT Community Roadshow, Greater Cleveland Food Bank Distribution, The City Mission – Crossroads Men Crisis Center, and Sacred Heart, where I provide ushering services.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Skills</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">JavaScript, TypeScript, Python</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">C#, ASP.NET MVC, .NET Core, .NET Framework</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">React, React Native, Vue, Angular, Ionic</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">MySQL, SQL, DB2</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Docker, Azure, AWS</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Expertise</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Testing (xUnit, NUnit, MSTest, Selenium)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Hangfire, Window Service, Sitecore</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Figma, JSS</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Bootstrap, Sass, Tailwind, Bulma</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">Microsoft Office Suite</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-primary text-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>ojibaebuka@yahoo.com</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>216.600.7958</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Cleveland, Ohio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}