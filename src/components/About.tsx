import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "SRGEC",
      cgpa: "8.9",
      icon: "🎓",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "NRI Junior College, Eluru",
      cgpa: "9.3",
      icon: "🏫",
    },
    {
      degree: "SSC",
      institution: "SMC EM High School, Eluru",
      cgpa: "8.7",
      icon: "🏫",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-primary/30 glow space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gradient mb-4">About Me</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Aspiring Software Engineer with strong foundations in Python, Java, and full-stack development. Passionate about AI, Machine Learning, and Web Technologies, I love building scalable, data-driven solutions that make an impact. I enjoy learning, experimenting, and creating intelligent software projects that solve real-world problems.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-primary" size={20} />
                <span>Eluru, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary" size={20} />
                <a href="mailto:dhaneshgangireddy@gmail.com" className="hover:text-primary transition-colors">
                  dhaneshgangireddy@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{edu.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <p className="text-primary font-semibold">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
