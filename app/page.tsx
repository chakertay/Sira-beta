"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Share2, CheckCircle, ArrowRight, Sparkles, Brain, Users } from "lucide-react"

export default function SiraLanding() {
  const [isListening, setIsListening] = useState(false)
  const [currentAgent, setCurrentAgent] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const agents = [
    {
      id: "emploi",
      name: "SIRA - EMPLOI",
      title: "Analyse de Carrière Intelligente",
      description: "Un agent IA dédié à l'optimisation de votre parcours professionnel",
      videoUrl: "/emploi.mp4?height=400&width=300",
      color: "from-emerald-500 to-teal-600",
      features: [
        "Analyse complète de votre CV",
        "Questions personnalisées sur votre parcours",
        "Identification des points forts et lacunes",
        "Rapport d'évaluation détaillé",
      ],
      link : "https://ai-gen-qq48.onrender.com"
    },
    {
      id: "retraite",
      name: "SIRA - RETRAITE",
      title: "Planification Retraite Personnalisée",
      description: "Un agent IA spécialisé dans la préparation de votre avenir financier",
      videoUrl: "/retraite.mp4?height=400&width=300",
      color: "from-violet-500 to-purple-600",
      features: [
        "Analyse de votre fiche de paie",
        "Évaluation de vos objectifs d'épargne",
        "Bilan de retraite personnalisé",
        "Recommandations d'investissement",
      ],
      link : "https://agent-3n6a.onrender.com"
    },
    {
      id: "tuteur",
      name: "SIRA - TUTEUR",
      title: "Assistant Visuel Temps Réel",
      description: "Un agent IA pour l'assistance contextuelle instantanée",
      videoUrl: "/global.mp4?height=400&width=300",
      color: "from-orange-500 to-red-500",
      features: [
        "Partage d'écran en temps réel",
        "Analyse contextuelle instantanée",
        "Réponses vocales adaptées",
        "Support multi-documents",
      ],
      link : "https://ai-tutor-kappa.vercel.app/"
    },
        {
      id: "commercial",
      name: "SIRA - COMMERCIAL",
      title: "Conseil d'affaires pour les commerçants",
      description: "Un agent IA spécialisé dans la conseil des affaires",
      videoUrl: "/global.mp4?height=400&width=300",
      color: "from-orange-500 to-red-500",
      features: [
        "Analyse de situation de votre entreprise",
        "évaluation des objectifs",
        "Recommandations stratégiques",
        "Rapport d'évaluation détaillé",
      ],
      link : "https://com-agent-29o7.onrender.com"
    },
  ]

  const toggleListening = () => {
    setIsListening(!isListening)
  }

  const selectAgent = (agentId: string) => {
    setCurrentAgent(agentId)
    setIsListening(true)
  }

  const handleVideoHover = async (agentId: string, isHovering: boolean) => {
    const videoElement = videoRefs.current[agentId]
    if (!videoElement) return

    try {
      if (isHovering) {
        videoElement.currentTime = 0
        const playPromise = videoElement.play()
        if (playPromise !== undefined) {
          await playPromise
        }
      } else {
        // Check if video is not paused before trying to pause
        if (!videoElement.paused) {
          videoElement.pause()
        }
        videoElement.currentTime = 0
      }
    } catch (error) {
      // Silently handle the error - this is expected behavior when hovering quickly
      console.debug("Video play/pause interrupted:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SIRA
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#agents" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Nos Agents
              </a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Intelligence Artificielle Avancée
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
              Bienvenue sur SIRA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Votre plateforme d'intelligence artificielle avec trois agents spécialisés pour vous accompagner dans vos
              décisions professionnelles et personnelles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" })}
              >
                Découvrir nos Agents
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Nos Trois Agents Intelligents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque agent SIRA est spécialisé dans un domaine précis pour vous offrir une expertise personnalisée et
              des conseils adaptés à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agents.map((agent, index) => {
              return (
                <Card
                  key={agent.id}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${agent.color}`} />
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-48 h-32 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                      onMouseEnter={() => handleVideoHover(agent.id, true)}
                      onMouseLeave={() => handleVideoHover(agent.id, false)}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[agent.id] = el
                        }}
                        className="w-full h-full object-cover rounded-lg"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={agent.videoUrl}
                      >
                        <source src={agent.videoUrl} type="video/mp4" />
                        {/* Fallback image if video fails to load */}
                        <img
                          src={agent.videoUrl || "/placeholder.svg"}
                          alt={`${agent.name} animation`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </video>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{agent.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">{agent.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-center">{agent.description}</p>
                    <ul className="space-y-3 mb-6">
                      {agent.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-gradient-to-r ${agent.color} hover:opacity-90 text-white`}
                      onClick={() => window.open(agent.link, "_blank")}
                    >
                      <Mic className="mr-2 w-4 h-4" />
                      Parler avec {agent.name.split(" - ")[1]}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à découvrir SIRA ?</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Commencez dès maintenant votre expérience avec l'intelligence artificielle et transformez votre approche
              professionnelle et financière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => window.open("https://www.google.com/", "_blank")}
              >
                <Users className="mr-2 w-5 h-5" />
                Commencer avec SIRA
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg bg-transparent"
              >
                <Share2 className="mr-2 w-5 h-5" />
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SIRA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Votre plateforme d'intelligence artificielle pour l'emploi, la retraite et l'assistance globale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nos Agents</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SIRA - EMPLOI</li>
                <li>SIRA - RETRAITE</li>
                <li>SIRA - GLOBAL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Support technique</li>
                <li>Documentation</li>
                <li>Partenariats</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SIRA. Tous droits réservés. Plateforme d'intelligence artificielle.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

