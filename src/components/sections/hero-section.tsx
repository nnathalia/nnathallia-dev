
import {ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedora Frontend";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(8, 145, 178, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8, 145, 178, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Terminal-like greeting */}
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-primary">$</span> whoami
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl">
            <span className="block text-foreground mb-2">Olá, eu sou</span>
            <span className="block text-accent">Nathalia Mariano</span>
          </h1>

          <div className="font-heading text-xl sm:text-2xl lg:text-3xl text-muted-foreground min-h-[2rem]">
            <span className="inline-block">{displayText}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
          </div>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por
            tecnologia e desenvolvimento web. Foco em criar interfaces modernas,
            funcionais e com atenção aos detalhes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects">
              <Button size="lg" className="font-body font-semibold ">
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/nnathalia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/nnathallia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://instagram.com/_nnathallia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
}
