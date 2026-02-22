"use client"

import { Music, Users, Heart, Code, CardSim, User, Accessibility, PartyPopper } from "lucide-react"
import Navbar from "./components/Navbar"
import Rodape from "./components/Rodape"
import Card from "./components/reutilizaveis/Card"
import BtContato from "./components/Contato"
import Carousel from "./components/reutilizaveis/Carousel"
import CardSlim from "./components/reutilizaveis/CardSlim"
import Tags from "./components/reutilizaveis/Tags"
import Resumo from "./components/Resumo"
import Contato from "./components/Contato"

export default function page() {
  const cards = [
    {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/devs.jpg",
      corTitulo: "text-verde-100",
      corDescricao: "text-verde-100",
      corBg: "bg-verde-300",
      border: "border-verde-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all",
      link: "/pgTestes"
    }, {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/devs.jpg",
      corTitulo: "text-verde-100",
      corDescricao: "text-verde-100",
      corBg: "bg-verde-300",
      border: "border-verde-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all",
      link: "/pgTestes"
    }, {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/devs.jpg",
      corTitulo: "text-verde-100",
      corDescricao: "text-verde-100",
      corBg: "bg-verde-300",
      border: "border-verde-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all",
      link: "/pgTestes"
    }, {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/devs.jpg",
      corTitulo: "text-verde-100",
      corDescricao: "text-verde-100",
      corBg: "bg-verde-300",
      border: "border-verde-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all",
      link: "/pgTestes"
    }
  ]
  const eventos = [
    {
      titulo: "Arnold 2026 | Feira",
      subtitulo: "Arnold 2026 | Feira",
      data: "24 a 26 de abril",
      local: "Expo Center Norte - SP",
      imagem: "/devs.jpg",
      link: "/pgTestes"
    },
    {
      titulo: "Tech Summit 2026",
      subtitulo: "Inovação e tecnologia",
      data: "10 de maio",
      local: "São Paulo - SP",
      imagem: "/dormir.png",
    }, {
      titulo: "Hackathon 2026",
      subtitulo: "Desafios de programação",
      data: "15 a 17 de junho",
      local: "Online",
      imagem: "/codigo.png",
    }, {
      titulo: "Conferência de IA 2026",
      subtitulo: "Inteligência Artificial e Futuro",
      data: "5 de julho",
      local: "Rio de Janeiro - RJ",
      imagem: "/isso.png",
    },
  ]

  const cardSlim = [
    {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/devs.jpg",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all"
    }, {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/codigo.png",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all"
    }, {
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/isso.png",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all"
    }, {
      imagem: "/dormir.png",
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_10px_#F7B500] transition-all"
    }
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

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-25 mb-20">
        <Resumo />

        <div className="flex flex-col">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-verde-100 ">
            Projetos em Destaque
          </h1>
          <Carousel eventos={eventos} />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="valores">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-azul-100 ">
            Valores que me definem
          </h1>
          <Tags tags={tags} />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="trabalho">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-verde-100">
            Projetos em Colaboração
          </h1>
          <Card cards={cards} />
        </div>

        <div id="contato" className="scroll-smooth scroll-mt-20">
          <Contato />
        </div>

        <div className="flex flex-col scroll-smooth scroll-mt-20" id="trabalho">
          <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-amarelo-100">
            Meus Projetos
          </h1>
          <CardSlim cardSlim={cardSlim} />
        </div>

      </div>
      <Rodape />
    </div>
  )
}
