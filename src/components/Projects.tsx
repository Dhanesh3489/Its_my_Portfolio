import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Food Re-Distribution Application",
      description: "A web application designed to reduce food waste by connecting donors with those in need.",
      tech: ["HTML", "CSS", "PHP"],
      icon: "🍴",
    },
    {
      title: "TrafficTelligence",
      description: "CNN-based traffic prediction system using Flask & ML with 85% accuracy for smart traffic management.",
      tech: ["Flask", "Python", "CNN", "Machine Learning"],
      icon: "🚦",
    },
    {
      title: "Vision-Based Driver Drowsiness & Crash Detection",
      description: "AI-powered system using Raspberry Pi & OpenCV that sends GPS alerts via Twilio API for driver safety.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Twilio API", "AI"],
      icon: "🧠",
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-card border border-border glow-hover relative overflow-hidden group"
            >
              {project.status && (
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  {project.status}
                </span>
              )}
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-background text-xs border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Dhanesh3489"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-semibold">View on GitHub</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/Dhanesh3489"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold shadow-lg hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            🔗 View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
