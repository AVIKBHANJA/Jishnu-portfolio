import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FlaskConical,
  Cpu,
  Dna,
  Lightbulb,
  Users,
  Palette,
  Globe2,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: FlaskConical,
    title: "Laboratory",
    skills: [
      "iPSC Culture",
      "Western Blotting",
      "SDS-PAGE",
      "ELISA",
      "qRT-PCR",
      "Confocal Microscopy",
    ],
  },
  {
    icon: Cpu,
    title: "Computational",
    skills: ["AlphaFold2", "BioRender", "Microsoft Office"],
  },
  {
    icon: Dna,
    title: "Molecular Biology",
    skills: [
      "Immunocytochemistry",
      "DNA/RNA Isolation",
      "Gel Electrophoresis",
      "Histological Staining",
      "PCR Techniques",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research",
    skills: [
      "Scientific Writing",
      "Data Analysis",
      "Literature Review",
      "GLP",
      "Animal Handling",
    ],
  },
];

const studyAbroadGuide = [
  {
    number: "1",
    title: "How to find a prospective supervisor?",
    subItems: ["1.1. How to send Cold Emails?"],
  },
  {
    number: "2",
    title: "Creating CV guidelines",
  },
  {
    number: "3",
    title: "English language proficiency certificate",
  },
  {
    number: "4",
    title: "How can you seek an application fee waiver?",
  },
  {
    number: "5",
    title: "How to apply?",
  },
  {
    number: "6",
    title: "How to write a Motivation letter?",
  },
  {
    number: "7",
    title: "How to find a research gap?",
  },
  {
    number: "8",
    title: "How to write a Research proposal (for PhD)",
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

          {/* Study Abroad Helpdesk & Languages */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Study Abroad Helpdesk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Study Abroad Helpdesk
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {studyAbroadGuide.map((item) => (
                  <div
                    key={item.number}
                    className="p-4 rounded-lg bg-card shadow-soft"
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {item.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">
                          {item.title}
                        </h4>
                        {item.subItems && (
                          <ul className="mt-2 space-y-1 ml-2">
                            {item.subItems.map((subItem, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-muted-foreground pl-2 border-l border-accent/30"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
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
                  <div
                    key={lang.name}
                    className="p-4 rounded-lg bg-card shadow-soft"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${lang.proficiency}%` } : {}
                        }
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
