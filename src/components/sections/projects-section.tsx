import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";



export function ProjectsSection() {
  const projects = [
    {
      title: "Curriculo Dev",
      description:
        "Projeto de currículo desenvolvido com foco em apresentação profissional e design moderno.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/nnathalia/CurriculoDev",
      demo: "https://nnathalia.github.io/CurriculoDev/",
      image: "/images/curriculo-dev.png",
    },
    {
      title: "SIMC - Sistema Inteligente de Monitoramento Climatico ",
      description:
        "O SIMC é um sistema web que exibe em tempo real os dados coletados pela estação meteorológica, permitindo acompanhar e visualizar informações climáticas de forma prática.",
      technologies: ["Python", "Django", "PostgreSQL", "Arduino", "Sensores"],
      github: "https://github.com/nnathalia/CurriculoDev",
      demo: null,
      image: "/images/simc.png",
    },
    {
      title: "Tech Parking",
      description:
        "O Tech Parking é um sistema inteligente de estacionamento que une hardware (sensores em Arduino) e software (Django) para monitorar vagas em tempo real e exibir as informações em uma interface web.",
      technologies: ["Python", "Django", "SQLite", "Arduino", "Sensores"],
      github: "http://github.com/nnathalia/tech_parking?tab=readme-ov-file",
      demo: null,
      image: "/images/tech-parking.png",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Projetos</span>
          </h2>
          <p className="fdont-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="font-heading font-semibold text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-body text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>

                  {project.demo && (
                    <Button size="sm">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/nnathalia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold"
            >
              Ver Mais Projetos no GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
