import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter text-primary">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-2"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="/assets/images/ebukaprogramming.jpg"
                alt="Ebuka programming workspace"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-inter text-neutral-dark mb-4">
              Professional Profile
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a dedicated Full-Stack Development professional, I am eager to contribute my expertise to a dynamic team focused on mission-critical systems. With a robust foundation in C#, jQuery, Angular, Ionic, Docker and Azure DevOps, I am excited to leverage my skills and experience as a software Developer to support in resolving complex challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Front-end Development</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Back-end Development</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>DevOps & Cloud Services</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Web Application Design</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div>
                <p className="text-gray-500 font-medium">Email</p>
                <p className="font-medium">ojibaebuka@yahoo.com</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Location</p>
                <p className="font-medium">Cleveland, Ohio</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Available for</p>
                <p className="font-medium">Full-time positions</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Experience</p>
                <p className="font-medium">6+ years</p>
              </div>
            </div>
            
            <Link href="/about-details">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
