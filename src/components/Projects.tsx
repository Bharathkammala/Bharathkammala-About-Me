import { ExternalLink, Github, ImageUpscale } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Mustaab E-Commerce Platform",
      description:
        "A fully functional e-commerce website built using the MERN stack in collaboration with a teammate. The platform features product management, authentication, and integrated services like Razorpay for payments and Shiprocket for order delivery tracking.",
      image: `${import.meta.env.BASE_URL}images/Mustaab.png`,
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Razorpay API",
        "Shiprocket API",
      ],
      liveUrl: "https://mustaab-frontend.vercel.app/",
      githubUrl: "https://github.com/pranayjindam/Mustaab-frontend.git",
      featured: true,
    },
    {
      title: "Secure User Management System",
      description:
        "A comprehensive user management system with role-based authentication, OTP verification, and MySQL database integration. Features include modular design, API integrations with Twilio and Google Maps.",
      image: `${import.meta.env.BASE_URL}images/securelogin.png`,
      technologies: [
        "C#",
        "ASP.NET Web Forms",
        "MySQL",
        "Twilio API",
        "Google Maps API",
      ],
      githubUrl:
        "https://github.com/Bharathkammala/Secure-User-Management-System-with-API-Support.git",
      featured: true,
    },
    {
      title: "College Portal Management System",
      description:
        "Role-based college management application built with C# WinForms. Includes separate dashboards for Admin, Teacher, and Student roles with comprehensive CRUD operations for attendance, marks, and fee management.",
      image: `${import.meta.env.BASE_URL}images/CollegePortal.jpg`,
      ImageUpscale,
      technologies: ["C#", "WinForms", "SQL Server", "ADO.NET"],
      githubUrl:
        "https://github.com/Bharathkammala/College-Portal--WinForms-App.git",
      featured: true,
    },
    // {
    //   title: "Smart Street Light Management",
    //   description:
    //     "IoT-based smart street lighting system using IR sensors for vehicle detection and LDR sensors for ambient light measurement.",
    //   image: `${import.meta.env.BASE_URL}images/smartstreet.jpg`,
    //   technologies: [
    //     "Arduino",
    //     "IR Sensors",
    //     "LDR Sensors",
    //     "LED Control",
    //     "IoT",
    //   ],
    //   githubUrl: "#",
    //   featured: false,
    // },
    {
      title: "ChatGPT API Integration Suite",
      description:
        "Intelligent assistant application with multiple AI model integration and live search capabilities. Features include YouTube video summarization and data extraction from various file formats.",
      image: `${import.meta.env.BASE_URL}images/chatgpt.jpg`,
      ImageUpscale,
      technologies: [
        "Python",
        "ChatGPT API",
        "Data Processing",
      ],
      githubUrl: "#",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground drop-shadow-sm">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work that showcases my skills and
            creativity
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group ${project.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""
                  }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden w-full h-64 lg:h-80">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="glass text-white/90 hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="glass text-white/90 hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink size={16} className="mr-2" /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <CardContent
                  className={`p-6 lg:p-8 ${project.featured
                      ? "lg:flex lg:flex-col lg:justify-center"
                      : ""
                    }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.2)" }}
                        key={techIndex}
                        className="px-3 py-1 bg-background border border-border/50 rounded-full text-xs text-foreground/90 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/30 text-foreground hover:bg-primary/20 hover:scale-105 transition-all w-[200px]"
          >
            All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;