import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", level: 85 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: ".NET Technologies",
      skills: [
        { name: ".NET Framework", level: 85 },
        { name: "ASP.NET", level: 80 },
        { name: "WinForms", level: 85 },
        { name: "ADO.NET", level: 80 },
        { name: "Web Forms", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "Visual Studio", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Git/GitHub", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-16 lg:py-18 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-gradient border-border card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'API Integration', 'OOP Concepts', 'DBMS', 'HTML/CSS', 'IoT', 
              'IntelliJ IDEA', 'React', 'Node.js', 'Express.js', 'MongoDB',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;