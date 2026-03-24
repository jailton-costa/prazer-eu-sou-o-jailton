"use client"

import { Users, Heart, Code, Accessibility, PartyPopper, MessageCircleHeartIcon, UsersIcon, SpotlightIcon, FoldersIcon } from "lucide-react"
import Navbar from "./components/Navbar"
import Rodape from "./components/Rodape"
import Card from "./components/reutilizaveis/Card"
import Carousel from "./components/reutilizaveis/Carousel"
import CardSlim from "./components/reutilizaveis/CardSlim"
import Tags from "./components/reutilizaveis/Tags"
import Resumo from "./components/Resumo"
import Contato from "./components/Contato"

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
      imagem: "/colaboracao/islandTainho/island-home.png",
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
    }, {
      icon: Users,
      titulo: "Comunicação",
      corTitulo: "text-azul-100",
      corBg: "bg-azul-300",
      border: "border-azul-100",
      shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
    }, {
      icon: Heart,
      titulo: "Respeito",
      corTitulo: "text-azul-100",
      corBg: "bg-azul-300",
      border: "border-azul-100",
      shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
    }, {
      icon: Code,
      titulo: "Inovação",
      corTitulo: "text-azul-100",
      corBg: "bg-azul-300",
      border: "border-azul-100",
      shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
    }, {
      icon: PartyPopper,
      titulo: "Colaboração",
      corTitulo: "text-azul-100",
      corBg: "bg-azul-300",
      border: "border-azul-100",
      shadow: "hover:drop-shadow-[0_0_10px_#35ADDC] transition-all",
    }
  ]

  const cards = [
    {
      titulo: "InkluaTicket",
      descricao: "A InkluaTicket é uma plataforma de venda de ingressos online que facilita, gestão e compra de ingressos para eventos, oferecendo uma experiência, segura e acessível para organizadores e participantes.",
      imagem: "/colaboracao/inkluaTicket/inkluaTicket.png",
      corTitulo: "text-roxo-inklua-100",
      corDescricao: "text-roxo-inklua-100",
      corBg: "bg-gray-900",
      border: "border-roxo-inklua-200",
      shadow: " hover:drop-shadow-[0_0_10px_#574cd5] transition-all",
      link: "/projeto/inkluaTicket"
    }, {
      titulo: "DevChatCLI",
      descricao: "o DevChat CLI é um chat em tempo real para desenvolvedores que funciona diretamente no terminal, permitindo conversar com outros devs sem sair do ambiente de código",
      imagem: "/colaboracao/DevChatCLI/devChatCLI01.png",
      corTitulo: "text-devChat-100",
      corDescricao: "text-devChat-100",
      corBg: "bg-devChat-300",
      border: "border-devChat-100",
      shadow: " hover:drop-shadow-[0_0_10px_#ffffff] transition-all",
      link: "/projeto/devChatCLI"
    }, {
      titulo: "islandTainho",
      descricao: "O Pet Tainho é uma plataforma que centraliza rotas, dicas e informações para ajudar turistas a se locomoverem em Florianópolis de forma mais prática, rápida e segura.",
      imagem: "/colaboracao/islandTainho/island-home.png",
      corTitulo: "text-island-azul-100",
      corDescricao: "text-island-azul-100",
      corBg: "bg-island-azul-300",
      border: "border-island-azul-100",
      shadow: " hover:drop-shadow-[0_0_15px_#053345] transition-all",
      link: "/projeto/islandTainho"
    }, 
  ]

  const cardSlim = [
    {
      titulo: "My-game",
      descricao: "Edgewake é um jogo ambientado em um mundo colapsado entre dimensões, enfrenta combates táticos inspirados em Undertale e toma decisões que influenciam o destino entre caos e esperança.",
      imagem: "/pessoal/my-game/myGame.png",
      corTitulo: "text-white",
      corDescricao: "text-green-700",
      corBg: "bg-gray-800",
      border: "border-gray-100",
      shadow: " hover:drop-shadow-[0_0_10px_#ffffff] transition-all",
      links: "/projeto/myGame",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-25 mb-20">
        <Resumo />

        <div className="flex flex-col">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-verde-100 flex items-center gap-2">
            <SpotlightIcon className="w-9 h-9"/>
            Projetos em Destaque
          </h1>
          <Carousel eventos={eventos} />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="valores">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-azul-100 flex items-center gap-2">
            <MessageCircleHeartIcon className="w-9 h-9"/>
            Valores que me definem
          </h1>
          <Tags tags={tags} />
        </div>

        <div id="contato" className="scroll-smooth scroll-mt-20">
          <Contato />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="trabalho">
          <h1 className="text-3xl text-start flex items-center gap-2 px-6 mb-5 font-semibold text-verde-100">
            <UsersIcon className="w-9 h-9"/>
            Projetos em Colaboração
          </h1>
          <Card cards={cards} />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="meusProjetos">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-verde-100 flex items-center gap-2">
            <FoldersIcon className="w-9 h-9"/>
            Meus Projetos
          </h1>
          <CardSlim cardSlim={cardSlim} />
        </div>

      </div>
      <Rodape />
    </div>
  )
}
