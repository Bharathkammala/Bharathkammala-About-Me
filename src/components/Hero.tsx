import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import BlurText from "../BlurText";
import "../index.css";

const Hero = () => {
  const [role, setRole] = useState("Software Developer");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const fullText = role;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [role]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("images/hero-bg.png")` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-xl"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary/30 rounded-full animate-float blur-xl"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h2 className="text-lg sm:text-xl text-muted-foreground mb-4 font-light">
            Hello, I'm
          </h2>

          {/* Name with BlurText */}
          <BlurText
            text="Bharath Kammala"
            delay={100}
            animateBy="letters"
            direction="top"
            gradient={true}
            className="text-5xl sm:text-6xl lg:text-7xl ml-6 font-bold inline-block"
            onAnimationComplete={() =>
              console.log("✨ BlurText animation complete!")
            }
            stepDuration={0.5}
          />

          {/* Role positioned below name and above paragraph */}
          {/* Role with simple BlurText animation */}
          <div className="my-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground text-center flex justify-center">
            <BlurText
              text={role}
              delay={100}
              animateBy="letters"
              direction="bottom"
              gradient={false}
              className="inline"
              stepDuration={0.4}
              onAnimationComplete={() =>
                console.log("Role blur animation complete!")
              }
            />
          </div>

          {/* Description paragraph */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed ">
            <BlurText
              text="Passionate .NET developer specializing in C#, ASP.NET, and modern web technologies with expertise in API integration and database management"
              delay={100}
              animateBy="words"
              direction="bottom"
              gradient={false}
              className="inline"
              stepDuration={0.4}
              onAnimationComplete={() =>
                console.log("Description blur animation complete!")
              }
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-fuchsia-400 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          >
            View My Work
          </Button> */}

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Bharath_Kammala_Resume.pdf"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-fuchsia-400 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              >
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary glow-hover p-3"
              onClick={() =>
                window.open("https://github.com/Bharathkammala", "_blank")
              }
            >
              <Github size={24} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary glow-hover p-3"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kammala-bharath",
                  "_blank"
                )
              }
            >
              <Linkedin size={24} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary glow-hover p-3"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=kammalabharath96@gmail.com"
                )
              }
            >
              <Mail size={24} />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-0.9 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-primary" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
