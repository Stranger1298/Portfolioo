"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowUp,
  Download,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  Code,
  Shield,
  Globe,
  Users,
  MessageCircle,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function AmanPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const skillCategories = {
    Programming: ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
    "Frameworks & Tools": ["React", "Next.js", "Git", "Tailwind CSS", "Express.js", "MongoDB"],
    Cybersecurity: ["Penetration Testing", "Vulnerability Analysis", "Nmap", "Wireshark", "Burp Suite"],
    "Soft Skills": ["Communication", "Problem-Solving", "Creativity", "Cooperation"],
    Languages: ["English", "Hindi"],
  }

  const projects = [
    {
      title: "Location Based Attendance System",
      description:
        "Built a smart attendance solution that marks teachers present based on their proximity to campus using device geolocation and AI validation.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Express.js", "MongoDB", "Gemini API"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Water Delivery Ecommerce Platform",
      description:
        "Developed a multi-vendor ecommerce platform for bottled water with a unique system to remove delivery fees by watching ads.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Supabase"],
      github: "#",
      live: "#",
      featured: true,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-playfair text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                AMAN
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-2 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="font-playfair text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AMAN</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                  Web Developer | Cybersecurity Enthusiast
                </p>
                <div className="flex items-center justify-center gap-2 text-lg text-gray-500 dark:text-gray-400">
                  <Code className="h-5 w-5" />
                  <span>+</span>
                  <Shield className="h-5 w-5" />
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I build full-stack applications and love breaking down systems to make them safer. Currently pursuing
                Computer Science with a passion for creating secure, innovative solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Passionate about technology, security, and building meaningful solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div className="w-64 h-64 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <img
                      src="/placeholder.svg?height=256&width=256"
                      alt="AMAN"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Computer Science undergraduate based in Bangalore. I enjoy crafting real-world full-stack
                  applications with React, Express, and MongoDB—and I'm equally passionate about cybersecurity, ethical
                  hacking, and securing digital systems.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey combines the creativity of web development with the analytical mindset of cybersecurity,
                  allowing me to build applications that are not just functional, but also secure and robust.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm">Bangalore, India</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm">React, Tailwind, MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm">Cybersecurity Intern @ CFSS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <span className="text-sm">amanraj89969@gmail.com</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive toolkit for modern web development and cybersecurity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillCategories).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {category === "Programming" && <Code className="h-5 w-5 text-blue-600" />}
                        {category === "Frameworks & Tools" && <Target className="h-5 w-5 text-green-600" />}
                        {category === "Cybersecurity" && <Shield className="h-5 w-5 text-purple-600" />}
                        {category === "Soft Skills" && <Users className="h-5 w-5 text-orange-600" />}
                        {category === "Languages" && <Globe className="h-5 w-5 text-indigo-600" />}
                        <h3 className="font-semibold text-lg">{category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real-world applications showcasing my technical skills and problem-solving approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Experience</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional experience in cybersecurity and hands-on learning
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Cybersecurity Intern</h3>
                        <Badge variant="secondary" className="w-fit">
                          Mar 2024 – Apr 2024
                        </Badge>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        CFSS Cyber and Forensics Security Solutions, Bangalore
                      </p>
                      <div className="space-y-2 text-gray-600 dark:text-gray-300">
                        <p className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Performed vulnerability testing with tools like Nmap, Wireshark, and Burp Suite
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Practiced ethical hacking and security assessment methodologies in real-world environments
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          Gained hands-on experience with penetration testing frameworks and security protocols
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's discuss opportunities, projects, or just connect over our shared interests in tech and security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project or just say hi..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-semibold text-xl mb-6">Let's Connect</h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:amanraj89969@gmail.com"
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
                        <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">amanraj89969@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/aman-83169b204/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                        <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Connect with me</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    Quick Response
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    I typically respond to emails within 24 hours. For urgent matters or collaboration opportunities,
                    feel free to reach out on LinkedIn.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="font-playfair text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AMAN
              </div>
              <p className="text-gray-400 mb-6">© 2025 AMAN – Built with ❤️ using React & Tailwind CSS</p>
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="mailto:amanraj89969@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-83169b204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">Web Developer • Cybersecurity Enthusiast • Problem Solver</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
            >
              <ArrowUp className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
