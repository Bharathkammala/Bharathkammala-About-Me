import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "C#",
        "Python",
        "JavaScript",
        "SQL"
      ]
    },
    {
      title: ".NET Technologies",
      skills: [
        ".NET Framework",
        "ASP.NET",
        "WinForms",
        "ADO.NET",
        "Web Forms"
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "SQL Server",
        "Visual Studio",
        "VS Code",
        "Git/GitHub",
        "CI/CD Pipelines"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground drop-shadow-sm">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A focused toolkit I use to build reliable applications and polished user experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="glass-card h-full overflow-hidden border-border/60 transition-all duration-300 group hover:-translate-y-2 hover:border-primary/50">
                <CardContent className="p-6 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Core Stack
                    </span>
                    <span className="h-px flex-1 ml-4 bg-gradient-to-r from-primary/40 to-transparent"></span>
                  </div>
                  <h3 className="mb-5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: skillIndex * 0.05 }}
                        className="rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 inline-block drop-shadow-sm">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'API Integration', 'OOP Concepts', 'DBMS', 'HTML/CSS', 'IoT',
              'IntelliJ IDEA', 'React', 'Node.js', 'Express.js', 'MongoDB', 'CI/CD Pipelines'
            ].map((tech, index) => (
              <motion.span
                whileHover={{ scale: 1.06, y: -2 }}
                key={index}
                className="px-5 py-2 glass border-border/50 rounded-full text-sm font-medium text-foreground/90 transition-all duration-300 cursor-default hover:border-primary/50 hover:text-primary"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
