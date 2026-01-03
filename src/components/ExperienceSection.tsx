import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Sep 2025 - Present",
    title: "PhD Research Scholar",
    organization: "HUN-REN BRC, Centre of Excellence",
    location: "Szeged, Hungary",
    description: "Reprogramming PBMC to create hi-PSC, Gastruloid Differentiation, RNA isolation, qRT-PCR, Confocal Microscopy, Western Blotting, and AlphaFold2.",
    outcome: "Ongoing research on stem cell differentiation",
    tags: ["Stem Cells", "iPSC", "Confocal Microscopy"],
    current: true,
  },
  {
    period: "Jul 2024 - May 2025",
    title: "Project/Research Assistant",
    organization: "University of Calcutta",
    location: "Kolkata, India",
    description: "Asthma induction in mice, BALF collection, SDS-PAGE, Western Blotting, ELISA, Tissue Lysis, Lipid peroxidation assay, and histological staining.",
    outcome: "Research on inflammatory disease mechanisms",
    tags: ["Western Blotting", "ELISA", "Animal Handling"],
    current: false,
  },
  {
    period: "Sep 2018 - Jun 2019",
    title: "Teaching Assistant",
    organization: "Techno India University",
    location: "Kolkata, India",
    description: "Conducted practical courses including DNA Isolation and Agarose Gel Electrophoresis for undergraduate students.",
    outcome: "Enhanced teaching and mentoring skills",
    tags: ["Teaching", "DNA Isolation", "Gel Electrophoresis"],
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            My Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Research & Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From stem cell biology to translational research — each experience has shaped my understanding of biological systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-2">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <Badge variant="default" className="ml-2 bg-accent text-accent-foreground text-xs">
                          Current
                        </Badge>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">{exp.organization}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <p className="text-sm text-foreground mb-4">
                      <span className="text-primary font-medium">Outcome:</span> {exp.outcome}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
