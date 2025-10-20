import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - you can integrate with Formspree or EmailJS
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 4000,
        style: {
          background: "hsl(217 33% 17%)",
          color: "hsl(210 40% 98%)",
          border: "1px solid hsl(263 70% 65%)",
        },
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4">
      <Toaster position="bottom-right" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Talk</span> 💬
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, idea, or project in mind? I'd love to hear from you. 
            Let's collaborate and build something amazing!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border glow-hover">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">Eluru, Andhra Pradesh, India</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border glow-hover">
              <Mail className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a
                href="mailto:dhaneshgangireddy@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                dhaneshgangireddy@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-card border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 rounded-2xl bg-card border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-card border border-border focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold glow-hover flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={20} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
