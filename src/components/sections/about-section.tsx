
import { GraduationCap, Heart, MapPin } from "lucide-react";
import { Card } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg-px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-foreground">
                Minha História
              </h3>
              <p className="font-bold text-muted-foreground leading-relaxed">
                Sou estudante de Análise e Desenvolvimento de Sistemas e
                apaixonada por tecnologia e desenvolvimento web. Meu foco
                principal está no desenvolvimento frontend, onde posso unir
                criatividade, performance e usabilidade para criar interfaces
                modernas e funcionais.
              </p>

              <p className="font-bold text-muted-foreground leading-relaxed">
                Acredito que o código limpo e as soluções eficientes são
                fundamentais para criar experiências digitais memoráveis. Estou
                sempre em busca de novos desafios e oportunidades para crescer
                profissionalmente.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-md transition-shadow duration-200">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-body font-medium text-sm">Localização </p>
                <p className="font-body text-xs text-muted-foreground">
                  Ji-Paraná, RO
                </p>
              </Card>

              <Card className="p-4 text-center hover:shadow-md transition-shadow duration-200">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-body font-medium text-sm">Formação</p>
                <p className="font-body text-xs text-muted-foreground">ADS</p>
              </Card>

              <Card className="p-4 text-center hover:shadow-md transition-shadow duration-200">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-body font-medium text-sm">Paixão</p>
                <p className="font-body text-xs text-muted-foreground">
                  Frontend
                </p>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl p-8 border border-border">
              <div className="font-mono text-sem space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-muted-foreground">about-me.js</span>
                </div>

                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-secondary">const</span>
                    <span className="text-primary"> developer</span> = {`{`}
                  </div>

                  <div className="ml-4">
                    <span className="text-accent">name</span>:{" "}
                    <span className="text-green-600">
                      "Nathalia Mariano Lopes"
                    </span>
                    ,
                  </div>

                  <div className="ml-4">
                    <span className="text-accent">role</span>:{" "}
                    <span className="text-green-600">"Frontend Developer"</span>
                    ,
                  </div>

                  <div className="ml-4">
                    <span className="text-accent">location</span>:{" "}
                    <span className="text-green-600">"Ji-Paraná, RO"</span>,
                  </div>

                  <div className="ml-4">
                    <span className="text-accent">education</span>:{" "}
                    <span className="text-green-600">"ADS Student"</span>,
                  </div>

                  <div className="ml-4">
                    <span className="text-accent">passion</span>: [
                  </div>
                  <div className="ml-8">
                    <span className="text-green-600">"Clean Code"</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-green-600">"Modern UI/UX"</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-green-600">"Web Performance"</span>
                  </div>
                  <div className="ml-4">],</div>
                  <div className="ml-4">
                    <span className="text-accent">currentlyLearning</span>:{" "}
                    <span className="text-green-600">
                      "Always Something New"
                    </span>
                  </div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
