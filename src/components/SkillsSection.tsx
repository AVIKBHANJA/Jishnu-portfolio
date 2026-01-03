import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Cpu, Dna, Lightbulb, Users, Palette, Globe2, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: FlaskConical,
    title: "Laboratory",
    skills: ["iPSC Culture", "Western Blotting", "SDS-PAGE", "ELISA", "qRT-PCR", "Confocal Microscopy"],
  },
  {
    icon: Cpu,
    title: "Computational",
    skills: ["AlphaFold2", "BioRender", "ChemiDoc", "UV-Vis Spectrophotometer", "Microsoft Office"],
  },
  {
    icon: Dna,
    title: "Molecular Biology",
    skills: ["Immunocytochemistry", "DNA/RNA Isolation", "Gel Electrophoresis", "Histological Staining", "PCR Techniques"],
  },
  {
    icon: Lightbulb,
    title: "Research",
    skills: ["Scientific Writing", "Data Analysis", "Literature Review", "GLP", "Animal Handling"],
  },
];

const softSkills = [
  {
    icon: GraduationCap,
    title: "Teaching",
    description: "Teaching Assistant at Techno India University",
  },
  {
    icon: Globe2,
    title: "Collaboration",
    description: "International research experience in Hungary",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Former GB Member, NEXUS Welfare Society",
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Diploma in Fine Arts",
  },
];

const languages = [
  { name: "English", level: "Professional", proficiency: 85 },
  { name: "Bengali", level: "Native", proficiency: 100 },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            What I Bring
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Soft Skills & Leadership
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card shadow-soft"
                  >
                    <div className="p-2 rounded-lg bg-accent/10">
                      <skill.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{skill.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="p-4 rounded-lg bg-card shadow-soft">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
