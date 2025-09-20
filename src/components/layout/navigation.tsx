"use client"
import { useState, useEffect } from "react"
import {Menu, X, Code2} from "lucide-react"
import { Button } from "../ui/button"



export function Navigation(){
  const[isOpen, setIsOpen] = useState(false)
  const[scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.addEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl">Nathalia</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-bold text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Button Navigation Menu */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
              </Button>
            </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-x-1 bg-background border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 font-body text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
  
}