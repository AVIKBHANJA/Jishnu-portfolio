import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBiotech from "@/assets/hero-biotech.png";
export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient dark:bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBiotech} alt="Biotech illustration" className="w-full h-full object-cover opacity-40 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium mb-6">
            research Scholar in Stem Cell Biology
          </motion.span>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
            Jishnu Sarathi Deb
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Fusing scientific rigor with innovative vision — exploring the frontiers of{" "}
            <span className="text-primary font-medium">embryonic</span>,{" "}
            <span className="text-primary font-medium">Induced pluripotent stem cell research</span>, and{" "}
            <span className="text-primary font-medium">translational health</span>.
          </motion.p>

          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-base italic text-muted-foreground mb-10">
            "I study cellular mechanisms by day and capture life through art at golden hour."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 px-8" onClick={() => document.querySelector("#education")?.scrollIntoView({
            behavior: "smooth"
          })}>Education 
              
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8" onClick={() => document.querySelector("#publications")?.scrollIntoView({
            behavior: "smooth"
          })}>
              <FileText size={18} />
             Research & Skills
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 px-8" onClick={() => document.querySelector("#skills")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Study abroad helpdesk
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 1.2
        }} className="flex items-center justify-center gap-4 mb-24 md:mb-12">
            <a href="https://www.linkedin.com/in/jishnu-sarathi-deb-016844214" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <Linkedin size={20} className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="mailto:jishnusarathi@gmail.com" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <Mail size={20} className="text-muted-foreground hover:text-primary" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Centered at bottom */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer z-10"
      >
        <span className="text-xs uppercase tracking-widest text-center">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>;
};