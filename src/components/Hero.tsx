import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingIcons />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Gangireddy Dhanesh</span> 👋
          </h1>
          <div className="text-2xl md:text-4xl mb-8 h-20">
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer",
                2000,
                "AI Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Passionate about building intelligent, data-driven, and impactful software solutions.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <motion.a
              href="https://github.com/Dhanesh3489"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-colors glow-hover"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhanesh3489"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-colors glow-hover"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:dhaneshgangireddy@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-colors glow-hover"
            >
              <Mail size={24} />
            </motion.a>
          </div>
          <motion.a
            href="/GANGIREDDY_DHANESH_Resume.pdf"
            download="GANGIREDDY_DHANESH_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg glow-hover"
          >
            <Download size={20} />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
