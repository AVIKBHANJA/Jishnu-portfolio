import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const certificates = [
  {
    title: "Stipendium Hungaricum Scholarship",
    issuer: "Tempus Public Foundation",
    year: "2025",
    description: "Full scholarship for PhD studies at University of Szeged",
    image: null,
    pdf: "/assets/Stipendium Hungaricum Scholarship.pdf",
  },
  {
    title: "Statement of Supervisor/Declaration of Acceptance ",
    issuer: "Dr. Melinda Pivity, Biological Research Centre",
    year: "2024",
    description:
      "PhD supervision acceptance from HUN-REN BRC Institute of Genetics",
    image: null,
    pdf: "/assets/Jishnu Sarathi Deb_Supporting_Letter_Stipendium.pdf",
  },
  {
    title: "M.Tech Transcript",
    issuer: "Heritage Institute of Technology",
    year: "2025",
    description: "CGPA: 9.78/10 - Biotechnology",
    image: null,
    pdf: "/assets/MTech Transcript_1.pdf",
  },
  {
    title: "MSc and BSc Degrees",
    issuer: "Academic Degrees",
    year: "2019 & 2017",
    description: "M.Sc & B.Sc in Biotechnology and Zoology",
    image: null,
    pdf: "/assets/MSc and BSc Degree.pdf",
  },
];

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    image: string;
  } | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<{
    title: string;
    pdf: string;
  } | null>(null);

  const handleDownload = (
    url: string,
    title: string,
    isImage: boolean = false
  ) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title + (isImage ? ".png" : ".pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPdf = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <section id="certificates" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Credentials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Certificates & Degrees
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-transparent dark:border-border"
              >
                {/* Certificate Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Award size={64} className="text-primary/40" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <Award
                      size={20}
                      className="text-accent mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                      <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    {cert.image && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            setSelectedCert({
                              title: cert.title,
                              image: cert.image!,
                            })
                          }
                        >
                          <Eye size={16} className="mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            handleDownload(cert.image!, cert.title, true)
                          }
                        >
                          <Download size={16} className="mr-1" />
                          Download
                        </Button>
                      </>
                    )}
                    {cert.pdf && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleViewPdf(cert.pdf!, cert.title)}
                        >
                          <Eye size={16} className="mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1"
                          onClick={() => handleDownload(cert.pdf!, cert.title)}
                        >
                          <Download size={16} className="mr-1" />
                          Download
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          {selectedCert && (
            <div className="mt-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
