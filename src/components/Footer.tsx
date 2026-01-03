import { Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl font-semibold text-foreground">
            Jishnu Sarathi Deb
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jishnu-sarathi-deb-016844214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="mailto:jishnusarathi@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail size={18} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Made with{" "}
            <Heart size={14} className="text-accent fill-accent" /> in Szeged
          </p>
        </div>
      </div>
    </footer>
  );
};
