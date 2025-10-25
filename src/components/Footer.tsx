import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bharathkammala", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/bharathkammala", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kammalabharath96@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient mb-4 hover:opacity-80 transition-opacity"
            >
              Bharath Kammala
            </button>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Software Developer specializing in .NET technologies and modern web development. 
              Currently building innovative solutions at August Devices.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary glow-hover p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>kammalabharath96@gmail.com</p>
              <p>+91-9492693538</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Bharath Kammala. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;