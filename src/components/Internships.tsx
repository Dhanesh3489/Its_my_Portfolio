import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Cyber Security Analyst Virtual Internship",
      organization: "APSCHE & Smart Bridge",
      date: "July 2024",
      icon: "🔒",
    },
    {
      title: "AI & ML Virtual Internship",
      organization: "APSCHE & Smart Bridge",
      date: "July 2025",
      icon: "🤖",
    },
    {
      title: "Cyber Security & Ethical Hacking Workshop",
      organization: "Indian Servers",
      icon: "🛡️",
    },
    {
      title: "Web Development (Django) Workshop",
      organization: "SRGEC",
      date: "January 2025",
      icon: "🌐",
    },
  ];

  return (
    <section id="internships" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Internships & <span className="text-gradient">Workshops</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border glow-hover"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{exp.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{exp.organization}</p>
                  {exp.date && (
                    <p className="text-primary text-sm font-medium">{exp.date}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
