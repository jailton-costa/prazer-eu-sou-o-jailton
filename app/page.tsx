"use client"

import { Music, Users, Heart, Code } from "lucide-react"
import Navbar from "./components/Navbar"
import Rodape from "./components/Rodape"
import Card from "./components/Card"
import BtContato from "./components/BtContato"

export default function page() {

  const cards = [
    {
      titulo: "Música",
      descricao: "A música é minha companheira constante, inspirando criatividade e trazendo alegria para minha vida.",
      imgJPG: "/devs.jpg",
      local: "/pgTestes",
      corText: "text-verde-100",
      corBg: "bg-verde-300",
      shadow: "040F0F",
      border: "border-verde-100"
    },
  ]
  
  const cards2 = [
    {
      titulo: "familia",
      descricao: "A família é minha maior fonte de alegria e apoio.",
      imgJPG: "/codigo.png",
      local: "/pgTestes",
      corText: "text-azul-100",
      corBg: "bg-azul-300",
      shadow: "0C2A33",
      border: "border-azul-100"
    },
  ]

  const cards3 = [
    {
      titulo: "amigos",
      descricao: "Amigos são os companheiros que compartilham alegria e desafios.",
      imgJPG: "/isso.png",
      local: "/pgTestes",
      corText: "text-amarelo-100",
      corBg: "bg-amarelo-300",
      shadow: "463400",
      border: "border-amarelo-100"
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <header className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-verde-100 drop-shadow-[0_0_5px_#099B3C]">
            Prazer, eu sou o Jailton
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-preto-100">
            Um espaço para você me conhecer além do código — compartilhando minha trajetória,
            valores e paixão por tecnologia.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">

          {/* SOBRE MIM */}
          <div
            id="sobre-mim"
            className="scroll-mt-20 rounded-xl p-4 bg-azul-300 shadow-lg drop-shadow-[0_0_20px_#0C2A33]"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 text-azul-100 border-b-2 border-azul-200">
              Sobre mim
            </h2>

            <div className="rounded-2xl aspect-video mb-6 overflow-hidden border-2 border-azul-100 bg-quatro">
              <img
                src="/friendly-developer-portrait.jpg"
                alt="Jailton"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-preto-200 leading-relaxed">
              <p>
                Sou desenvolvedor apaixonado por criar experiências que conectam pessoas
                e tecnologia de forma simples e verdadeira.
              </p>
              <p>
                Código é ferramenta — o valor está nas histórias e conexões criadas.
              </p>
              <p>
                Fora do código: música, boas conversas e novas ideias.
              </p>
            </div>
          </div>

          {/* COMO TRABALHO */}
          <div
            id="como-trabalho"
            className="scroll-mt-20 rounded-xl p-4 bg-verde-300 shadow-lg drop-shadow-[0_0_20px_#040F0F]"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 text-verde-100 border-b-2 border-verde-200">
              Como trabalho
            </h2>

            <div className="rounded-2xl aspect-video mb-6 overflow-hidden border-2 border-verde-100 bg-verde-200">
              <img
                src="/collaborative-team-workspace.jpg"
                alt="Trabalho em equipe"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-preto-200 leading-relaxed">
              <p>
                Valorizo <strong className="text-verde-100">colaboração</strong>.
              </p>
              <p>
                Escuta ativa e <strong className="text-verde-100">respeito mútuo</strong>.
              </p>
              <p>
                Processos claros e feedbacks construtivos.
              </p>
            </div>
          </div>

          {/* COMO COMECEI */}
          <div
            id="como-comecei"
            className="scroll-mt-20 rounded-xl p-4 bg-amarelo-300 shadow-lg drop-shadow-[0_0_20px_#463400]"
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 text-amarelo-100 border-b-2 border-amarelo-200">
              Como comecei
            </h2>

            <div className="rounded-2xl aspect-video mb-6 overflow-hidden border-2 border-amarelo-100 bg-amarelo-200">
              <img
                src="/coding-journey-learning-computer.jpg"
                alt="Minha jornada"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-preto-200 leading-relaxed">
              <p>
                Tudo começou com curiosidade.
              </p>
              <p>
                Programar é <strong className="text-amarelo-100">impactar pessoas</strong>.
              </p>
              <p>
                Cada projeto é aprendizado.
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="flex justify-center items-center gap-10">
        <Card cards={cards} />
        <Card cards={cards2} />
        <Card cards={cards3} />
      </div>

      <BtContato />

      <Rodape />
    </div>
  )
}
