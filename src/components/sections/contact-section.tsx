import { Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lw2pqf8", // seu Service ID
        "template_1oamzbz", // seu Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "kbjhRebRi_nUDtQO0" // sua Public Key
      )
      .then(
        (result) => {
          console.log("Email enviado!", result.text);
          alert("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
          alert("Ocorreu um erro ao enviar a mensagem.");
        }
      );
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Vamos Conversar?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e projetos interessantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">
                Entre em Contato
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Estou sempre interessada em discutir novas oportunidades,
                projetos colaborativos ou simplesmente trocar ideias sobre
                tecnologia e desenvolvimento.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium">Localização</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Ji-Paraná, RO
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium">Email</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Disponível via LinkedIn
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-medium text-lg mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
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
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading font-semibold">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription className="font-body">
                Preencha o formulário abaixo e entrarei em contato em breve
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body font-medium">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body font-medium">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full font-body font-semibold"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
