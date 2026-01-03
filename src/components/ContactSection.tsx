import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone, Download, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jishnusarathi@gmail.com",
    href: "mailto:jishnusarathi@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jishnu-sarathi-deb",
    href: "https://www.linkedin.com/in/jishnu-sarathi-deb-016844214",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+36-204561228",
    href: "tel:+36204561228",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Let's Connect
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Excited to connect with fellow researchers, collaborators, or anyone interested in biotechnology and stem cell biology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
         
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-card shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Szeged, Hungary</p>
                  </div>
                </div>
              </div>
            </motion.div>

            
          {/* Additional Links */}
            <div>
              <h4 className="font-display text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">
                Follow
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <a
                  href="/assets/DIpanjali_Ray.pdf"
                  download
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all font-body text-xs md:text-sm"
                >
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Download Resume
                </a>
                <a
                  href="https://www.instagram.com/dipanjaliray2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/dipanjali-ray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
