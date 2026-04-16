import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import BlurText from "../BlurText";
import DecryptedText from "./DecryptedText";
import Antigravity from "./Antigravity";
import { motion } from "framer-motion";
import "../index.css";

const Hero = () => {
  const [role, setRole] = useState("Software Developer");
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] mt-16 flex items-center justify-center overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] z-0" />
      <Antigravity color="#0071E3" count={100} />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="glass-card p-10 md:p-14 rounded-3xl mx-auto shadow-2xl">
          <motion.h2 variants={itemVariants} className="text-lg sm:text-xl text-primary font-medium tracking-wide mb-4 uppercase">
            Hello, I'm
          </motion.h2>

          <motion.div variants={itemVariants}>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold inline-block tracking-tight mb-2 text-foreground">
              <DecryptedText
                text="Bharath Kammala"
                speed={70}
                animateOn="view"
                revealDirection="center"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="my-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/80 text-center flex justify-center">
            <BlurText
              text={role}
              delay={50}
              animateBy="words"
              direction="bottom"
              gradient={false}
              className="inline"
              stepDuration={0.2}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate .NET developer specializing in C#, ASP.NET, and modern web technologies with expertise in API integration and database management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href={`${import.meta.env.BASE_URL}Bharath_Resume_.pdf`}
              download="Bharath_Resume_.pdf"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/20 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:bg-primary/5 hover:scale-105 hover:shadow-lg"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="glass rounded-full text-muted-foreground hover:text-primary hover:bg-foreground/5 hover:scale-110 transition-all p-3 h-12 w-12"
              onClick={() => window.open("https://github.com/Bharathkammala", "_blank")}
            >
              <Github size={24} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="glass rounded-full text-muted-foreground hover:text-primary hover:bg-foreground/5 hover:scale-110 transition-all p-3 h-12 w-12"
              onClick={() => window.open("https://www.linkedin.com/in/kammala-bharath", "_blank")}
            >
              <Linkedin size={24} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="glass rounded-full text-muted-foreground hover:text-primary hover:bg-foreground/5 hover:scale-110 transition-all p-3 h-12 w-12"
              onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=kammalabharath96@gmail.com")}
            >
              <Mail size={24} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          variants={itemVariants}
          onClick={scrollToAbout}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-primary/70 hover:text-primary transition-colors" size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
