"use client"

import Link from "next/link"
import { Music, Users, Heart, Code } from "lucide-react"
import Navbar from "./components/Navbar"
import MeuContato from "./meuContato/MeuContato"

export default function page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />

      <header className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-shadow-[#099B3C] shadow-sm drop-shadow-[0_0_5px_#099B3C]" style={{ color: "var(--verde-100)" }}>
            Prazer, eu sou o Jailton
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-pretty" style={{ color: "var(--preto-100)" }}>
            Um espaço para você me conhecer além do código — compartilhando minha trajetória, valores e paixão por
            tecnologia.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-15">
          <div id="sobre-mim" className="scroll-mt-20 rounded-xl p-2 shadow-[#0C2A33] shadow-lg drop-shadow-[0_0_20px_#0C2A33]" style={{
                backgroundColor: "#0C2A33",
              }}>
            <h2
              className="text-2xl font-bold mb-6 pb-2"
              style={{
                color: "var(--azul-100)",
                borderBottom: "2px solid var(--azul-200)",
              }}
            >
              Sobre mim
            </h2>
            <div
              className="rounded-2xl aspect-video flex items-center justify-center mb-6 overflow-hidden border-2"
              style={{
                backgroundColor: "#0a4d5c",
                borderColor: "#00bcd4",
              }}
            >
              <img src="/friendly-developer-portrait.jpg" alt="Jailton" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--preto-200)" }}>
              <p>
                Sou desenvolvedor apaixonado por criar experiências que conectam pessoas e tecnologia de forma simples e
                verdadeira.
              </p>
              <p>
                Acredito que o código é apenas uma ferramenta — o que realmente importa são as histórias, valores e
                conexões que construímos através dele.
              </p>
              <p>
                Quando não estou programando, você me encontra ouvindo música, conversando sobre ideias ou explorando
                novas formas de colaboração.
              </p>
            </div>
          </div>

          <div id="como-trabalho" className="scroll-mt-20 p-2 rounded-xl shadow-[#040F0F] shadow-lg drop-shadow-[0_0_20px_#040F0F]" style={{
                backgroundColor: "#040F0F",
              }}>
            <h2
              className="text-2xl font-bold mb-6 pb-2"
              style={{
                color: "var(--verde-100)",
                borderBottom: "2px solid var(--verde-200)",
              }}
            >
              Como trabalho
            </h2>
            <div
              className="rounded-2xl aspect-video flex items-center justify-center mb-6 overflow-hidden border-2"
              style={{
                backgroundColor: "#1a4d2e",
                borderColor: "#4ade80",
              }}
            >
              <img
                src="/collaborative-team-workspace.jpg"
                alt="Trabalho em equipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--preto-200)" }}>
              <p>
                Valorizo a <strong style={{ color: "var(--verde-100)" }}>colaboração</strong> acima de tudo. Cada membro
                da equipe traz uma perspectiva única que enriquece o resultado final.
              </p>
              <p>
                Pratico a escuta ativa e o <strong style={{ color: "var(--verde-100)" }}>respeito mútuo</strong>,
                criando um ambiente onde todos se sintam seguros para contribuir.
              </p>
              <p>
                Acredito em processos transparentes, comunicação clara e feedbacks construtivos que ajudam todos a
                crescer juntos.
              </p>
            </div>
          </div>

          <div id="como-comecei" className="scroll-mt-20 rounded-2xl p-2 shadow-[#463400] shadow-lg drop-shadow-[0_0_20px_#463400]" style={{
                backgroundColor: "#463400",
              }}>
            <h2
              className="text-2xl font-bold mb-6 pb-2"
              style={{
                color: "var(--amarelo-100)",
                borderBottom: "2px solid var(--amarelo-200)",
              }}
            >
              Como comecei
            </h2>
            <div
              className="rounded-2xl aspect-video flex items-center justify-center mb-6 overflow-hidden border-2"
              style={{
                backgroundColor: "#4d3d0a",
                borderColor: "#fbbf24",
              }}
            >
              <img
                src="/coding-journey-learning-computer.jpg"
                alt="Minha jornada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--preto-200)" }}>
              <p>
                Minha jornada com tecnologia começou pela curiosidade de entender como as coisas funcionam por trás das
                telas.
              </p>
              <p>
                Com o tempo, descobri que programar não é só resolver problemas técnicos — é sobre{" "}
                <strong style={{ color: "var(--amarelo-100)" }}>criar soluções que impactam pessoas</strong>.
              </p>
              <p>
                Hoje, cada projeto é uma oportunidade de aprender, colaborar e construir algo que faça a diferença no
                dia a dia de alguém.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="container mx-auto px-4 py-16 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: "var(--amarelo-100)" }}>
          Valores que me guiam
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div
            className="p-6 rounded-xl border transition-colors hover:border-opacity-70 shadow-[#0C2A33] shadow-lg drop-shadow-[0_0_20px_#0C2A33]"
            style={{
              backgroundColor: "var(--azul-300)",
              borderColor: "var(--azul-200)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: "var(--amarelo-300)",
              }}
            >
              <Users className="w-6 h-6" style={{ color: "var(--amarelo-100)" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Colaboração
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--preto-200)" }}>
              O poder do trabalho em equipe onde cada perspectiva única enriquece o resultado.
            </p>
          </div>

          <div
            className="p-6 rounded-xl border transition-colors hover:border-opacity-70 shadow-[#0C2A33] shadow-lg drop-shadow-[0_0_20px_#0C2A33]"
            style={{
              backgroundColor: "var(--azul-300)",
              borderColor: "var(--azul-200)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: "var(--amarelo-300)",
              }}
            >
              <Heart className="w-6 h-6" style={{ color: "var(--amarelo-100)" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Respeito
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--preto-200)" }}>
              Escuta ativa e respeito mútuo em todas as interações e conversas.
            </p>
          </div>

          <div
            className="p-6 rounded-xl border transition-colors hover:border-opacity-70 shadow-[#0C2A33] shadow-lg drop-shadow-[0_0_20px_#0C2A33]"
            style={{
              backgroundColor: "var(--azul-300)",
              borderColor: "var(--azul-200)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: "var(--amarelo-300)",
              }}
            >
              <Music className="w-6 h-6" style={{ color: "var(--amarelo-100)" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Criatividade
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--preto-200)" }}>
              A música como parte do processo criativo para encontrar soluções inovadoras.
            </p>
          </div>

          <div
            className="p-6 rounded-xl border transition-colors hover:border-opacity-70 shadow-[#0C2A33] shadow-lg drop-shadow-[0_0_20px_#0C2A33]"
            style={{
              backgroundColor: "var(--azul-300)",
              borderColor: "var(--azul-200)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: "var(--amarelo-300)",
              }}
            >
              <Code className="w-6 h-6" style={{ color: "var(--amarelo-100)" }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
              Tecnologia
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--preto-200)" }}>
              Criar experiências acessíveis e inclusivas para todas as pessoas.
            </p>
          </div>
        </div>
      </section>

      <MeuContato />

      <footer className="border-t rounded-sm border-shadow-[#0C2A33] shadow-sm drop-shadow-[0_0_30px_#0C2A33]" 
      style={{ borderColor: "var(--azul-200)", borderTop: "1px solid var(--azul-100)" }}>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm" style={{ color: "var(--preto-100)" }}>
            Feito com dedicação e café ☕ • 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
