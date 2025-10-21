import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "Programming Essentials in C",
      issuer: "Cisco",
      icon: "💻",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM SkillsBuild",
      icon: "🔐",
    },
    {
      title: "Privacy & Security in Online Social Media",
      issuer: "NPTEL",
      icon: "🛡️",
    },
    {
      title: "AI & ML Virtual Internship",
      issuer: "APSCHE & Smart Bridge",
      icon: "🤖",
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-card border border-border glow-hover text-center"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="font-semibold mb-2 text-sm">{cert.title}</h3>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
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
            href="https://www.credly.com/users/gangireddy-dhanesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold shadow-lg hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🎓 View All Certificates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
