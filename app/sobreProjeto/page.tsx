import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function page() {
  return (
    <div className='h-screen'>
      <Navbar />
      <section id="sobre" className="container mx-auto px-4 py-13">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "var(--preto-100)" }}>
            Sobre este projeto
          </h2>
          <div className="space-y-6 leading-relaxed" style={{ color: "var(--preto-200)" }}>
            <p>
              <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                Prazer, eu sou o Jailton
              </span>{" "}
              é mais do que um portfolio — é um projeto pessoal criado para apresentar quem eu sou de forma simples e
              verdadeira.
            </p>
            <p>
              A ideia é que as pessoas possam me conhecer além do código, entendendo minha trajetória, como gosto de
              trabalhar em equipe e os valores que levo comigo dentro e fora da tecnologia.
            </p>
            <p>
              Este projeto tem um{" "}
              <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                foco mais humano e social
              </span>
              , valorizando a conversa, o respeito, a colaboração e até a música como parte do meu processo criativo.
            </p>
            <div
              className="p-6 rounded-lg border-l-4 mt-8"
              style={{
                backgroundColor: "var(--azul-300)",
                borderColor: "var(--verde-200)",
              }}
            >
              <p className="text-sm font-medium mb-2" style={{ color: "var(--amarelo-100)" }}>
                Stack Técnica
              </p>
              <p className="text-sm" style={{ color: "var(--azul-100)" }}>
                Desenvolvido com <strong style={{ color: "var(--verde-100)" }}>Next.js</strong>,{" "}
                <strong style={{ color: "var(--verde-100)" }}>TypeScript</strong> e{" "}
                <strong style={{ color: "var(--verde-100)" }}>Tailwind CSS</strong>, com uma paleta de cores pensada
                para transmitir calma, acessibilidade e proximidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
