import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <motion.a href="https://github.com/Dhanesh3489" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.2,
            rotate: 5
          }} className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/dhanesh3489" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.2,
            rotate: -5
          }} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </motion.a>
            <motion.a href="mailto:dhaneshgangireddy@gmail.com" whileHover={{
            scale: 1.2,
            rotate: 5
          }} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </motion.a>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Built with 💻 by <span className="text-primary font-semibold">Dhanesh</span> | 
              Styled with <span className="text-secondary">TailwindCSS</span> | 
              Hosted on <span className="text-secondary">Lovable</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Thanks for scrolling all the way! 🌟 Let's build something incredible together.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;