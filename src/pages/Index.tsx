import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MagicRings from "../components/MagicRings";

import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden overflow-x-hidden selection:bg-primary/20 selection:text-primary-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <MagicRings color="#0071E3" colorTwo="#E2E8F0" opacity={0.6} />
      </div>
      <div className="relative z-10">
        <Navigation />
        <AnimatePresence mode="wait">
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
