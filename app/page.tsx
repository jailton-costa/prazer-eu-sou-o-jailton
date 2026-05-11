"use client"

import { Users, Heart, Handshake , Accessibility, MessageSquare, MessageCircleHeartIcon, UsersIcon, Lightbulb, SpotlightIcon, FoldersIcon } from "lucide-react"
import Navbar from "./components/Navbar"
import Rodape from "./components/Rodape"
import Carousel from "./components/reutilizaveis/Carousel"
import Tags from "./components/reutilizaveis/Tags"
import Resumo from "./components/Resumo"
import Contato from "./components/Contato"
import CarouselCards from "./components/reutilizaveis/CarouselCards"
import { header } from "framer-motion/client"

export default function page() {
  const eventos = [
    {
      titulo: "Inklua Ticket",
      subtitulo: "A InkluaTicket é uma plataforma de venda de ingressos online que facilita, gestão e compra de ingressos para eventos, oferecendo uma experiência, segura e acessível para organizadores e participantes.",
      data: "Finalizado em 09/12/2025",
      local: "santa catarina - sc",
      imagem: "/colaboracao/inkluaTicket/inkluaTicket.png",
      link: "/projeto/inkluaTicket"
    },
    {
      titulo: "Island Tainho",
      subtitulo: "O Pet Tainho é uma plataforma que centraliza rotas, dicas e informações para ajudar turistas a se locomoverem em Florianópolis de forma mais prática, rápida e segura.",
      data: "Finalizado em 04/12/2025",
      local: "florianopolis - sc",
      imagem: "/colaboracao/islandTainho/Island.png",
      link: "/projeto/islandTainho"
    },
    {
      titulo: "DevChat Cli",
      subtitulo: "O DevChat CLI é um chat em tempo real para desenvolvedores que funciona diretamente no terminal, permitindo conversar com outros devs sem sair do ambiente de código",
      data: "Iniciado em 10/2/2026",
      local: "santa catarina - sc",
      imagem: "/colaboracao/DevChatCLI/DevChatCLI02.png",
      link: "/projeto/devChatCLI"
    },
  ]

  const tags = [
  {
    icon: Accessibility,
    titulo: "Acessibilidade",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  {
    icon: MessageSquare,
    titulo: "Comunicação",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  {
    icon: Users,
    titulo: "Colaboração",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  {
    icon: Heart,
    titulo: "Respeito",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  {
    icon: Lightbulb,
    titulo: "Inovação",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  {
    icon: Handshake ,
    titulo: "Comprometimento",
    corTitulo: "text-azul-100",
    corBg: "bg-azul-300",
    border: "border-azul-100",
    shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
  },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-25 mb-20">
        <Resumo />

        <div className="flex flex-col">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-verde-100 flex items-center gap-2">
            <SpotlightIcon className="w-9 h-9" />
            Projetos em Destaque
          </h1>
          <Carousel eventos={eventos} />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="valores">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-azul-100 flex items-center gap-2">
            <MessageCircleHeartIcon className="w-9 h-9" />
            Valores que me definem
          </h1>
          <Tags tags={tags} />
        </div>

        <div id="contato" className="flex flex-col scroll-smooth scroll-mt-20">
          <Contato />
        </div>

        <CarouselCards />

      </div>
      <Rodape />
    </div>
  )
}
