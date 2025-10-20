import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Award, Mail } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-1 px-4 md:px-6 py-3 rounded-full bg-card/50 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const Icon = item.icon;
            
            return (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 md:px-4 py-2 rounded-full transition-all duration-300 group ${
                  isActive 
                    ? "bg-primary/20 text-primary scale-105" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium hidden md:block">{item.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
