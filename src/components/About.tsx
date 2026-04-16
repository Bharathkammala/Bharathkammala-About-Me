import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems"
    },
    {
      icon: Users,
      title: "Continuous Learning",
      description: "Actively learning new tools and technologies to improve development skills"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Driven by curiosity and a passion for solving complex problems"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground drop-shadow-sm">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-6 mx-auto">
            Electronics & Communication Engineering graduate with expertise in .NET development and modern software solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 glass-card p-8 rounded-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-bold text-foreground">
              Building Innovative Software Solutions
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Developer who recently completed an internship at August Devices, with hands-on experience in .NET-based application development,
                specializing in C#, ASP.NET, and database operations using SQL Server and MySQL.
              </p>
              <p>
                With a B.Tech in Electronics and Communication Engineering from Annamacharya Institute of
                Technology & Sciences (CGPA: 8.3), I combine technical knowledge with practical experience
                in developing secure user management systems, college portals, and IoT-based solutions.
              </p>
              <p>
                My passion lies in creating efficient, scalable applications with clean code architecture.
                I enjoy working with APIs, implementing security features, and solving complex problems
                through innovative software solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">2+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Learning</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Certifications</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;