import { motion } from "framer-motion";

const volunteeringActivities = [
  {
    title: "Bridge to IT Community Roadshow",
    description: "Participated in community outreach to promote IT education and career opportunities to underrepresented groups."
  },
  {
    title: "Greater Cleveland Food Bank Distribution",
    description: "Assisted with vehicle loading during food distribution events to help provide meals to those in need."
  },
  {
    title: "The City Mission – Crossroads Men Crisis Center",
    description: "Volunteered time and skills to support men experiencing homelessness and crisis situations."
  },
  {
    title: "Ushering service at Sacred Heart",
    description: "Provided ushering services during religious ceremonies to enhance the worship experience for attendees."
  }
];

export default function Volunteering() {
  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-inter text-primary">Volunteering</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-2"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My commitment to community service and giving back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {volunteeringActivities.map((activity, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold font-inter mb-3">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
