import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react";
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
          <div className="grid md:grid-cols-2 gap-8">
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-card-gradient rounded-xl p-8 shadow-card text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Interested in Collaboration?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new research opportunities, collaborations, or just connecting with fellow scientists.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    asChild
                  >
                    <a href="mailto:jishnusarathi@gmail.com">
                      <Mail size={18} />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/jishnu-sarathi-deb-016844214"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
