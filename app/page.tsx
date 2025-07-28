"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mic,
  Share2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Users,
  TrendingUp,
  Clock,
  Trophy,
  Star,
  Zap,
  Target,
  Award,
} from "lucide-react"

export default function SiraLanding() {
  const [isListening, setIsListening] = useState(false)
  const [currentAgent, setCurrentAgent] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const agents = [
    {
      id: "sira - emploi",
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
      link: "https://ai-gen-qq48.onrender.com",
    },
    {
      id: "sira - retraite",
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
      link: "https://agent-3n6a.onrender.com",
    },
    {
      id: "sira - tuteur",
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
      link: "https://ai-tutor-kappa.vercel.app/",
    },
    {
      id: "sira - commercial",
      name: "SIRA - COMMERCIAL",
      title: "Conseil en affaires pour les commerçants",
      description: "Un agent IA spécialisé en conseil d'affaires.",
      videoUrl: "/global.mp4?height=400&width=300",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Analyse de la situation de votre entreprise",
        "Évaluation des objectifs",
        "Recommandations stratégiques",
        "Rapport d'évaluation détaillé",
      ],
      link: "https://com-agent-29o7.onrender.com",
    },
  ]

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Utilisateurs Actifs",
      color: "from-emerald-500 to-teal-600",
      description: "Professionnels accompagnés",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taux de Satisfaction",
      color: "from-violet-500 to-purple-600",
      description: "Clients recommandent SIRA",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilité",
      color: "from-orange-500 to-red-500",
      description: "Support continu",
    },
    {
      icon: Trophy,
      number: "50+",
      label: "Entreprises Partenaires",
      color: "from-blue-500 to-indigo-600",
      description: "Collaborations actives",
    },
  ]

  const trustLogos = [
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "IBM", logo: "💼" },
    { name: "Oracle", logo: "🗄️" },
    { name: "Salesforce", logo: "☁️" },
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
        if (!videoElement.paused) {
          videoElement.pause()
        }
        videoElement.currentTime = 0
      }
    } catch (error) {
      console.debug("Video play/pause interrupted:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400/30 rotate-45 animate-float-up"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-violet-400/30 rounded-full animate-float-down"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-orange-400/30 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-blue-400/30 rotate-12 animate-bounce-slow"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SIRA
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#agents"
                className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                Nos Agents
              </a>
              <a
                href="#stats"
                className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                Statistiques
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:scale-105 transition-all duration-300 animate-pulse-gentle">
              <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
              Intelligence Artificielle Avancée
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent animate-fade-in">
              Bienvenue sur{" "}
              <span className="inline-block animate-pulse-text bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                SIRA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delayed">
              Votre plateforme d'intelligence artificielle avec{" "}
              <span className="font-semibold text-emerald-600 animate-pulse-text">quatre agents spécialisés</span> pour
              vous accompagner dans vos décisions professionnelles et personnelles
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                onClick={() => document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Découvrir nos Agents
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 group bg-transparent"
              >
                <Target className="mr-3 w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                Voir la Démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section id="stats" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              SIRA en{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse-text">
                Chiffres
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'impact de notre plateforme d'intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="mb-4">
                      <div
                        className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-gray-800 mt-2">{stat.label}</div>
                    </div>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse-text">
                Quatre Agents
              </span>{" "}
              Intelligents
            </h2>
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
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm w-full"
                >
                  <div className={`h-2 bg-gradient-to-r ${agent.color} group-hover:h-3 transition-all duration-300`} />
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-full h-48 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg`}
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
                        <img
                          src={agent.videoUrl || "/placeholder.svg"}
                          alt={`${agent.name} animation`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </video>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {agent.name}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {agent.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pb-6">
                    <p className="text-gray-600 mb-4 text-center text-sm group-hover:text-gray-800 transition-colors duration-300">
                      {agent.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {agent.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-gradient-to-r ${agent.color} hover:opacity-90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn`}
                      onClick={() => window.open(agent.link, "_blank")}
                    >
                      <Mic className="mr-2 w-4 h-4 group-hover/btn:animate-pulse" />
                      Parler avec {agent.name.split(" - ")[1]}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Floating Trust Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ils nous font{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse-text">
              Confiance
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Rejoignez les entreprises leaders qui utilisent SIRA pour transformer leur approche de l'IA
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustLogos.map((company, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                  {company.logo}
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse-slow"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-8 bg-white/20 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg px-6 py-2">
              <Award className="w-5 h-5 mr-2 animate-pulse" />
              Commencez Votre Transformation IA
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in">
              Prêt à découvrir{" "}
              <span className="inline-block animate-pulse-text bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                SIRA
              </span>{" "}
              ?
            </h2>
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
              Commencez dès maintenant votre expérience avec l'intelligence artificielle et{" "}
              <span className="font-semibold text-yellow-300 animate-pulse-text">transformez</span> votre approche
              professionnelle et financière.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
                onClick={() => window.open("https://www.google.com/", "_blank")}
              >
                <Users className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                Commencer avec SIRA
                <Sparkles className="ml-3 w-6 h-6 group-hover:animate-spin" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-12 py-4 text-xl font-bold bg-transparent hover:scale-110 transition-all duration-300 group"
              >
                <Share2 className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                En savoir plus
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-emerald-100">
              <div className="flex items-center space-x-2 group">
                <Star className="w-5 h-5 text-yellow-300 group-hover:animate-spin" />
                <span className="group-hover:text-white transition-colors duration-300">Gratuit pour commencer</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <CheckCircle className="w-5 h-5 text-green-300 group-hover:animate-pulse" />
                <span className="group-hover:text-white transition-colors duration-300">Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Trophy className="w-5 h-5 text-orange-300 group-hover:animate-bounce" />
                <span className="group-hover:text-white transition-colors duration-300">Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  SIRA
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Votre plateforme d'intelligence artificielle pour l'emploi, la retraite, l'assistance globale et le
                conseil commercial.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 cursor-pointer hover:scale-110 transform">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 cursor-pointer hover:scale-110 transform">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 cursor-pointer hover:scale-110 transform">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-emerald-400">Nos Agents</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  SIRA - EMPLOI
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  SIRA - RETRAITE
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  SIRA - TUTEUR
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  SIRA - COMMERCIAL
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-emerald-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  Support technique
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  Documentation
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  Partenariats
                </li>
                <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer hover:translate-x-2 transform">
                  Carrières
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">
              &copy; 2024 SIRA. Tous droits réservés. Plateforme d'intelligence artificielle de nouvelle génération.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-100px); }
        }
        
        @keyframes float-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(100px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-text {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-up { animation: float-up 15s ease-in-out infinite; }
        .animate-float-down { animation: float-down 12s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-pulse-text { animation: pulse-text 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1s ease-out 0.3s both; }
      `}</style>
    </div>
  )
}
