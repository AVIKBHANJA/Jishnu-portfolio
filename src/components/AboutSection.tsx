import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Globe, Award, GraduationCap } from "lucide-react";

const stats = [
  { value: "9.78", label: "CGPA", suffix: "" },
  { value: "2", label: "Publications", suffix: "+" },
  { value: "3", label: "Projects", suffix: "+" },
  { value: "1", label: "Fellowship", suffix: "" },
];

const highlights = [
  {
    icon: Microscope,
    title: "Research Focus",
    description: "iPSC Reprogramming, Gastruloid Differentiation, Confocal Microscopy, and understanding disease mechanisms at the cellular level.",
  },
  {
    icon: Globe,
    title: "International Exposure",
    description: "PhD research at HUN-REN Biological Research Centre, Hungary — a European Union Centre of Excellence in stem cell biology.",
  },
  {
    icon: Award,
    title: "Academic Recognition",
    description: "GATE 2025 qualified (AIR 1688), Stipendium Hungaricum Fellow with research publications in international journals.",
  },
  {
    icon: GraduationCap,
    title: "Beyond Science",
    description: "Diploma in Fine Arts, chess enthusiast, and former GB member of NEXUS Welfare Society — blending creativity with scientific inquiry.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Get to know me
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed text-center mb-12"
          >
            I'm a Research fellow at HUN-REN Biological Research Centre, with a passion for
understanding the pattern of embryonic development, stem cell Biology and regenerative
medicine. Here, I acquired ideas about the 3D Gastruloid model, generating iPSC by
reprogramming and several techniques related to molecular biology.
Previously, I worked on oxidised stress, Lung damage, inflammation and the role of Vitamins.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card-gradient rounded-xl p-6 text-center shadow-soft"
              >
                <div className="font-serif text-4xl font-semibold text-primary">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
