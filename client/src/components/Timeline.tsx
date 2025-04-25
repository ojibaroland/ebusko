import { motion } from "framer-motion";

interface TimelineProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

export default function Timeline({ title, company, period, responsibilities, delay = 0 }: TimelineProps) {
  return (
    <motion.div 
      className="pl-12 pb-10 relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      </div>
      
      {/* Timeline line */}
      <div className="absolute left-4 top-0 w-0.5 h-full bg-primary"></div>
      
      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-inter">{title}</h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary">
            {period}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{company}</p>
        <ul className="space-y-2 text-gray-600">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
