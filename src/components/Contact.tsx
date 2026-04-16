import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kammalabharath96@gmail.com",
      href: "mailto:kammalabharath96@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9492693538",
      href: "tel:+919492693538"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Bharathkammala",
      href: "https://github.com/Bharathkammala"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/kammala-bharath",
      href: "https://www.linkedin.com/in/kammala-bharath"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground drop-shadow-sm">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you have a question, a project idea, or just want to connect, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information (Left Column) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground px-2">
              Primary Contact
            </h3>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card border-border/50 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium text-foreground hover:text-primary transition-colors block"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Socials and Status (Right Column) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground px-2">
              Connect & Availability
            </h3>

            {/* Social Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <Card key={index} className="glass-card border-border/50 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center justify-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <social.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-foreground hover:text-primary transition-colors block"
                      >
                        {social.title}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Current Status Card */}
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Briefcase className="text-primary" size={24} />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-background rounded-full animate-pulse"></span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      Current Status
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    I am actively seeking full-time opportunities in software development. 
                    I'm highly interested in roles involving .NET core architecture, full-stack web applications, 
                    and impactful API design. Let's build something great together!
                  </p>
                  <div className="pt-2">
                     <div className="inline-flex items-center space-x-2 text-sm font-medium text-foreground/80">
                        <Globe size={16} className="text-primary" />
                        <span>Available for remote or hybrid work</span>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;