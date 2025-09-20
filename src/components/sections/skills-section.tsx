import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiBootstrap,
  SiSqlite,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { Card } from "../ui/card";

export function SkillsSection() {
  const skills = [
    { name: "HTML5", icon: SiHtml5},
    { name: "CSS3", icon: SiCss3},
    { name: "JavaScript", icon: SiJavascript},
    { name: "Bootstrap", icon: SiBootstrap},
    { name: "Python", icon: SiPython},
    { name: "Django", icon: SiDjango},
    { name: "MySQL", icon: SiMysql},
    { name: "SQLite", icon: SiSqlite},
    { name: "PostgreSQL", icon: SiPostgresql},
    { name: "Git", icon: SiGit},
  ];

  const learningSkills = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwindcss", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino e estou sempre aprimorando
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-card/80 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-body font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-heading font-semibold text-xl mb-6">
            Estudando Atualmente
          </h3>
          <div className=" grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {learningSkills.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center space-y-2 p-4 bg-secondary/10 rounded-lg border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-6 h-6 text-secondary" />
                  <span className="font-body text-sm text-secondary">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
