import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';


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
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional user experiences"
    },
    {
      icon: Coffee,
      title: "Passion",
      description: "Driven by curiosity and a love for creating digital experiences"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        <div className="text-center  mb-18">
          <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6 mx-auto">
            Electronics & Communication Engineering graduate with expertise in .NET development and modern software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Building Innovative Software Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Developer currently working as an intern at August Devices, specializing in 
                .NET-based application development with expertise in C#, ASP.NET, and database operations 
                using SQL Server and MySQL.
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border card-hover group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;