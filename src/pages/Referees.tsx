import { motion } from "framer-motion";
import { Mail, GraduationCap, Building2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Referee {
  name: string;
  role: string;
  currentPosition: string;
  institution: string;
  formerPositions: string[];
  email: string;
  image?: string;
}

const referees: Referee[] = [
  {
    name: "Prof. (Dr.) Melinda Katalin Pirity",
    role: "Doctoral Thesis Supervisor",
    currentPosition: "Senior Research Associate",
    institution: "Institute of Genetics, HUN-REN Biological Research Center Szeged",
    formerPositions: [
      "Former Postdoctoral Research Associate, Department of Molecular Genetics, Albert Einstein College of Medicine, Bronx, USA"
    ],
    email: "pirity@brc.hu",
    image: "/assets/Melinda K.jpg"
  },
  {
    name: "Prof. (Dr.) Koustubh Panda",
    role: "MTech Thesis Supervisor",
    currentPosition: "Professor, Department of Biotechnology",
    institution: "University of Calcutta, Kolkata, INDIA",
    formerPositions: [
      "Former Assistant Professor: Department of Immunology & Pathobiology, Lerner Research Institute, Cleveland Clinic Foundation, USA"
    ],
    email: "kpbcg@caluniv.ac.in",
    image: "/assets/Koustubh Panda.jpg"
  },
  {
    name: "Prof. (Dr.) Nandan Kumar Jana",
    role: "MTech Thesis Supervisor",
    currentPosition: "Associate Professor, Department of Biotechnology",
    institution: "Heritage Institute of Technology, Kolkata, INDIA",
    formerPositions: [
      "PhD from BOSE INSTITUTE",
      "Post Doc. (UCONN Health-Centre, Farmington, CT, and UNC at Chapel Hill, NC, USA)"
    ],
    email: "nandankumar.jana@heritageit.edu",
    image: "/assets/Nandan Kumar Jana.JPG"
  },
  {
    name: "Dr. Malavika Bhattacharya",
    role: "Associate Professor, TIU",
    currentPosition: "Associate Professor, Former Head of the Dept. Department of Biotechnology",
    institution: "Techno India University-West Bengal",
    formerPositions: [
      "Former PhD fellow in the National Institute of Immunology, INDIA",
      "Former Post Doc. fellow of University of Pennsylvania, USA"
    ],
    email: "malavika.b@technoindiaeducation.com",
    image: "/assets/Malavika-Bhattacharya.webp"
  },
  {
    name: "Dr. Sirshendu Chatterjee",
    role: "Associate Professor",
    currentPosition: "Associate Professor, Department of Biotechnology",
    institution: "Techno India University, Salt Lake Sector V, Kolkata-700091",
    formerPositions: [
      "Ex-Scientist (Analytical Biochemist), Quality Control Lab, Tea Board of India"
    ],
    email: "sirshendu.chatterjee@gmail.com",
    image: "/assets/Sirshendu Chatterjee.jpeg"
  }
];

const Referees = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-serif text-xl font-semibold text-foreground">Referees</h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Professional References
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Distinguished academics and researchers who have supervised and mentored my work
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10">
          {referees.map((referee, index) => (
            <motion.div
              key={referee.email}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden bg-muted mx-auto md:mx-0">
                    <img
                      src={referee.image}
                      alt={referee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                      {referee.name}
                    </h3>
                    <p className="text-primary font-medium">{referee.role}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 justify-center md:justify-start">
                      <Building2 size={18} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-foreground font-medium">{referee.currentPosition}</p>
                        <p className="text-muted-foreground">{referee.institution}</p>
                      </div>
                    </div>

                    {referee.formerPositions.length > 0 && (
                      <div className="flex items-start gap-3 justify-center md:justify-start">
                        <GraduationCap size={18} className="text-accent flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          {referee.formerPositions.map((position, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {position}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Mail size={18} className="text-accent flex-shrink-0" />
                      <a
                        href={`mailto:${referee.email}`}
                        className="text-primary hover:underline transition-colors"
                      >
                        {referee.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jishnu Sarathi Deb. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Referees;
