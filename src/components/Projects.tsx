import { ExternalLink, Github, ImageUpscale } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from '../components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Mustaab E-Commerce Platform",
      description:
        "A fully functional e-commerce website built using the MERN stack in collaboration with a teammate. The platform features product management, authentication, and integrated services like Razorpay for payments and Shiprocket for order delivery tracking. Deployed with a responsive UI and real-time API communication for a seamless shopping experience.",
      image: `${import.meta.env.BASE_URL}images/Mustaab.png`,
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Razorpay API",
        "Shiprocket API",
        "JWT Authentication",
      ],
      liveUrl: "https://mustaab-frontend.vercel.app/",
      githubUrl: "https://github.com/pranayjindam/Mustaab-frontend.git",
      featured: true,
    },
    {
      title: "Secure User Management System",
      description:
        "A comprehensive user management system with role-based authentication, OTP verification, and MySQL database integration. Features include modular design, API integrations with Twilio and Google Maps, and both Web Forms and console interfaces.",
      image: `${import.meta.env.BASE_URL}images/securelogin.png`,
      technologies: [
        "C#",
        "ASP.NET Web Forms",
        "MySQL",
        "Twilio API",
        "Google Maps API",
        "Gmail SMTP",
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
      technologies: ["C#", "WinForms", "SQL Server", "ADO.NET", "GUI Design"],
      githubUrl:
        "https://github.com/Bharathkammala/College-Portal--WinForms-App.git",
      featured: true,
    },
    {
      title: "Smart Street Light Management",
      description:
        "IoT-based smart street lighting system using IR sensors for vehicle detection and LDR sensors for ambient light measurement. Automatically adjusts LED brightness based on vehicle presence and environmental conditions.",
      image: `${import.meta.env.BASE_URL}images/smartstreet.jpg`,
      technologies: [
        "Arduino",
        "IR Sensors",
        "LDR Sensors",
        "LED Control",
        "IoT",
      ],
      githubUrl: "#",
      featured: false,
    },
    {
      title: "ChatGPT API Integration Suite",
      description:
        "Intelligent assistant application with multiple AI model integration and live search capabilities. Features include YouTube video summarization and data extraction from various file formats including PDFs, CSVs, and Excel files.",
      image: `${import.meta.env.BASE_URL}images/chatgpt.jpg`,
      ImageUpscale,
      technologies: [
        "Python",
        "ChatGPT API",
        "Data Processing",
        "File Parsing",
        "AI Integration",
      ],
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my recent work that showcases my skills and
            creativity
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden card-gradient border-border card-hover group ${
                project.featured ? "lg:grid lg:grid-cols-2 lg:gap-8" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* GitHub Button */}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
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

                  {/* Live Site Button (only if available) */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        🌐 Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <CardContent
                className={`p-6 lg:p-8 ${
                  project.featured
                    ? "lg:flex lg:flex-col lg:justify-center"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
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
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-card border border-border rounded-full text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-card"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;