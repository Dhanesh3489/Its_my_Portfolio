import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["Django", "Flask", "Bootstrap", "Git", "VS Code"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "DBMS"],
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux"],
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Problem-Solving", "Self-Learning", "Time Management"],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border glow-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary hover:glow transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
