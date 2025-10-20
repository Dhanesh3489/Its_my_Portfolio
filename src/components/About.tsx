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
      year: "2022-2026",
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

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Aspiring Software</span>
              <br />
              <span className="text-gradient">Engineer</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Aspiring Software Engineer with strong foundations in Python, Java, and full-stack development. 
              Passionate about AI, Machine Learning, and Web Technologies, I love building scalable, data-driven 
              solutions that make an impact. I enjoy learning, experimenting, and creating intelligent software 
              projects that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0 group hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] group-hover:scale-125 transition-transform" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                    <span className="text-muted-foreground">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
