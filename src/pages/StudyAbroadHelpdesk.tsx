import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Mail,
  FileText,
  Globe,
  DollarSign,
  Lightbulb,
  Search,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const studyAbroadGuide = [
  {
    number: "1",
    title: "How to find a prospective supervisor?",
    icon: Search,
    subItems: ["1.1. How to send Cold Emails?"],
  },
  {
    number: "2",
    title: "Creating CV guidelines",
    icon: FileText,
  },
  {
    number: "3",
    title: "English language proficiency certificate",
    icon: Globe,
  },
  {
    number: "4",
    title: "How can you seek an application fee waiver?",
    icon: DollarSign,
  },
  {
    number: "5",
    title: "How to apply?",
    icon: BookOpen,
  },
  {
    number: "6",
    title: "How to write a Motivation letter?",
    icon: Mail,
  },
  {
    number: "7",
    title: "How to find a research gap?",
    icon: Lightbulb,
  },
  {
    number: "8",
    title: "How to write a Research proposal (for PhD)",
    icon: FileText,
  },
];

const StudyAbroadHelpdesk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap size={40} className="text-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              Study Abroad Helpdesk
            </h1>
            <p className="text-lg text-muted-foreground">
              Your comprehensive guide to pursuing higher education abroad.
              Navigate through the application process with confidence.
            </p>
          </motion.div>

          {/* Guide Content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {studyAbroadGuide.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {item.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <item.icon
                          size={20}
                          className="text-accent mt-1 flex-shrink-0"
                        />
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      {item.subItems && (
                        <ul className="mt-3 space-y-2 ml-8">
                          {item.subItems.map((subItem, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground pl-3 border-l-2 border-accent/30"
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl p-8 border border-primary/20"
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Need Personalized Guidance?
              </h2>
              <p className="text-muted-foreground mb-6">
                I've successfully navigated the international application
                process and secured the Stipendium Hungaricum Fellowship for my
                PhD. I'm happy to share my experience and help you with your
                journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:jishnusarathi@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Mail size={18} />
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/jishnu-sarathi-deb-016844214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-accent/10 transition-colors font-medium"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyAbroadHelpdesk;
