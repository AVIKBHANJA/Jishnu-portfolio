import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Trophy, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const education = [
  {
    period: "2025 - Present",
    degree: "PhD in Stem Cell Biology",
    institution: "HUN-REN BRC, University of Szeged",
    location: "Szeged, Hungary",
    details: "Stipendium Hungaricum Fellowship | Embryonic and Induced Pluripotent Stem Cell Research",
    current: true,
  },
  {
    period: "2023 - 2025",
    degree: "M.Tech in Biotechnology",
    institution: "Heritage Institute of Technology",
    location: "Kolkata, India",
    details: "CGPA: 9.78/10 | Thesis: Role of Vitamin A & E in Prevention of Asthmatic Lung Damage",
    current: false,
  },
  {
    period: "2017 - 2019",
    degree: "M.Sc in Biotechnology",
    institution: "Techno India University",
    location: "Kolkata, India",
    details: "CGPA: 8.92/10 | Thesis: Isolation of Chromium Resistant Bacteria from River Ganga",
    current: false,
  },
  {
    period: "2014 - 2017",
    degree: "B.Sc (Hons.) Zoology",
    institution: "Maulana Azad College, University of Calcutta",
    location: "Kolkata, India",
    details: "Percentage: 63% | Specializations: Cell Biology, Biochemistry, Molecular Biology",
    current: false,
  },
];

const awards = [
  {
    title: "Stipendium Hungaricum Fellowship",
    issuer: "Tempus Public Foundation, 2025",
  },
  {
    title: "GATE 2025 Biotechnology",
    issuer: "AIR 1688 | IIT Roorkee",
  },
  {
    title: "GATE 2024 Qualified",
    issuer: "Biotechnology (BT) & Life Science (XL) | IISc Bengaluru",
  },
];

const institutionHighlights = [
  "One of the largest research universities in Europe, with world RANK 401 (Shanghai/ARWU Ranking).",
  "SZTE has been home to Nobel Laureates such as Albert Szent-György (1937) and Katalin Karikó (2023)",
  "HUN-REN BRC were also acknowledged by the European Molecular Biological Organisation (EMBO)",
  "The European Union awarded the title of 'Centre of Excellence' to HUN-REN BRC.",
];

const institutionImages = [
  { src: "/assets/HUN-REN BRC.jpeg", alt: "HUN-REN BRC Research Center" },
  { src: "/assets/SZTE.JPG", alt: "University of Szeged" },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Academic Background
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Education
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-border"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                      edu.current ? "bg-accent" : "bg-primary"
                    }`}>
                      {edu.current && (
                        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                      )}
                    </div>

                    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        {edu.current && (
                          <Badge className="bg-accent text-accent-foreground text-xs">Current</Badge>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-foreground flex items-center gap-2">
                        <GraduationCap size={20} className="text-primary" />
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{edu.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-card-gradient dark:bg-none dark:bg-card rounded-xl p-6 shadow-card sticky top-24 border border-transparent dark:border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Trophy size={20} className="text-accent" />
                  Honours & Awards
                </h3>

                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div
                      key={award.title}
                      className="p-4 rounded-lg bg-background/50 dark:bg-background/80 border border-border"
                    >
                      <h4 className="font-medium text-foreground text-sm">{award.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{award.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Institution Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-card rounded-xl p-8 shadow-card border border-transparent dark:border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award size={24} className="text-accent" />
                My Institution & University
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Highlights List */}
                <div className="space-y-4">
                  {institutionHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Image Carousel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {institutionImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-64 object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
