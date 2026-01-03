import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    type: "Research Paper",
    title: "Isolation of Chromium Resistance Bacteria from Loam Soil Sample of River Ganga",
    journal: "World Journal of Pharmaceutical and Life Sciences",
    year: "2021",
    description: "Study on chromium-resistant bacterial isolates and their potential for bioremediation applications.",
    volume: "Vol. 7, Issue 9, 145-157",
    issn: "ISSN 2454-2229",
  },
  {
    type: "Review Article",
    title: "Apple Seeds: Phytochemistry, Medicinal Property and Toxicology",
    journal: "International Journal of Pharmaceutical Sciences and Research",
    year: "2023",
    description: "Comprehensive review examining the phytochemical composition and therapeutic potential of apple seeds.",
    volume: "Vol. 14(3): 1038-1045",
    doi: "10.13040/IJPSR.0975-8232.14(3).1038-45",
  },
];

const conferences = [
  {
    title: "Phytochemical & Nutritional Analysis of Metabolites from Centella asiatica",
    event: "5th Regional Science & Technology Congress",
    location: "Kolkata, India",
    year: "2023",
    type: "Poster Presentation",
  },
];

export const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Academic Output
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Publications & Presentations
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-primary" />
              Research Publications
            </h3>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {pub.type}
                    </Badge>
                    <Badge className="bg-primary/10 text-primary text-xs">
                      Published {pub.year}
                    </Badge>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-2">{pub.journal}</p>
                  <p className="text-sm text-muted-foreground mb-3">{pub.description}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span>{pub.volume}</span>
                    {pub.issn && <span>{pub.issn}</span>}
                    {pub.doi && <span>DOI: {pub.doi}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users size={24} className="text-primary" />
              Conference Presentations
            </h3>

            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <div
                  key={conf.title}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {conf.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {conf.year}
                    </Badge>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {conf.title}
                  </h4>
                  <p className="text-primary font-medium text-sm">{conf.event}</p>
                  <p className="text-sm text-muted-foreground mt-1">{conf.location}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
