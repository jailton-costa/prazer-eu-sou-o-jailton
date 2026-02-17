"use client"

import { Music, Users, Heart, Code, CardSim } from "lucide-react"
import Navbar from "./components/Navbar"
import Rodape from "./components/Rodape"
import Card from "./components/reutilizaveis/Card"
import BtContato from "./components/BtContato"
import Carousel from "./components/reutilizaveis/Carousel"
import CardSlim from "./components/reutilizaveis/CardSlim"

export default function page() {
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
    },{
      titulo: "Hackathon 2026",
      subtitulo: "Desafios de programação",
      data: "15 a 17 de junho",
      local: "Online",
      imagem: "/codigo.png",
    },{
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
      shadow: " hover:drop-shadow-[0_0_5px_#F7B500] transition-all"
    },{
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/codigo.png",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_5px_#F7B500] transition-all"
    },{
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      imagem: "/isso.png",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_5px_#F7B500] transition-all"
    },{
      imagem: "/dormir.png",
      titulo: "Música",
      descricao: "A música inspira criatividade e energia.",
      corTitulo: "text-amarelo-100",
      corDescricao: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      border: "border-amarelo-100",
      shadow: " hover:drop-shadow-[0_0_5px_#F7B500] transition-all"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col gap-15">
      <Navbar />
      <header className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-verde-100 drop-shadow-[0_0_5px_#099B3C]">
            Prazer, eu sou o Jailton
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-azul-100">
            Um espaço para você me conhecer além do código — compartilhando minha trajetória,
            valores e paixão por tecnologia.
          </p>
        </div>
      </header>

      <Carousel eventos={eventos} />

      <header className="container mx-auto px-4 py-12 flex flex-col gap-5">
        <div className=" flex flex-col gap-10">
          <h1 className="text-3xl text-start font-semibold text-azul-100 ">Valores que me definem</h1>
          <div className=" flex justify-center items-center gap-10">
            <div className="w-fit h-fit mx-auto text-center border-azul-100 border rounded-2xl p-8 bg-azul-300 shadow-lg drop-shadow-[0_0_20px_#0C2A33]">
              <Heart className="mx-auto mb-4 text-azul-100" size={48} />
              <h1 className="text-2xl md:text-1xl font-bold mb-4 text-azul-100">
                Empatia
              </h1>
            </div>
            <div className="w-fit h-fit mx-auto text-center border-azul-100 border rounded-2xl p-8 bg-azul-300 shadow-lg drop-shadow-[0_0_20px_#0C2A33]">
              <Users className="mx-auto mb-4 text-azul-100" size={48} />
              <h1 className="text-2xl md:text-1xl font-bold mb-4 text-azul-100">
                Amizade
              </h1>
            </div>
            <div className="w-fit h-fit mx-auto text-center border-azul-200 border rounded-2xl p-8 bg-azul-300 shadow-lg drop-shadow-[0_0_20px_#0C2A33]">
              <Code className="mx-auto mb-4 text-azul-100" size={48} />
              <h1 className="text-2xl md:text-1xl font-bold mb-4 text-azul-100">
                Respeito
              </h1>
            </div>
            <div className="w-fit h-fit mx-auto text-center border-azul-200 border rounded-2xl p-8 bg-azul-300 shadow-lg drop-shadow-[0_0_20px_#0C2A33]">
              <Music className="mx-auto mb-4 text-azul-100" size={48} />
              <h1 className="text-2xl md:text-1xl font-bold mb-4 text-azul-100">
                Comunicação
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col">
        <h1 className="text-3xl text-start px-6 mb-5 font-semibold text-amarelo-100">Meus Projetos</h1>
          <CardSlim cardSlim={cardSlim} />
      </div>

      <BtContato />

      <Rodape />
    </div>
  )
}
