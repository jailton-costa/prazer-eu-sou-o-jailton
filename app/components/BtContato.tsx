'use client'

import { useState } from "react"

export default function BtContato() {
  const [mostrarAcoes, setMostrarAcoes] = useState(false)

  const copiarEmail = () => {
    navigator.clipboard.writeText("jailton.jpc09@gmail.com")
    alert("Email copiado para a área de transferência!")
    setMostrarAcoes(false)
  }

  const abrirLinkedin = () => {
    window.open("https://www.linkedin.com/in/jailton-costa-pereira", "_blank")
    alert("LinkedIn aberto em uma nova aba!")
    setMostrarAcoes(false)
  }

  return (
    <section id="contato" className="container mx-auto px-4 py-16 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-verde-100">
          Vamos conversar?
        </h2>

        <p className="mb-8 leading-relaxed text-preto-200">
          Estou sempre aberto para novas conexões, trocas de ideias e oportunidades de colaboração.
        </p>

        {!mostrarAcoes && (
          <button
            onClick={() => setMostrarAcoes(true)}
            className="
              inline-flex px-8 py-4 rounded-2xl font-medium
              bg-verde-200 text-foreground
              shadow-lg drop-shadow-[0_0_10px_#0FF25E]
              hover:opacity-90 transition
            "
          >
            Entrar em contato
          </button>
        )}

        {mostrarAcoes && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={copiarEmail}
              className="
                inline-flex px-8 py-4 rounded-2xl font-medium
                bg-amarelo-300 text-amarelo-100 border border-amarelo-100
                shadow-lg drop-shadow-[0_0_10px_#F5B700]
                hover:opacity-90 transition
              "
            >
              Meu Email
            </button>

            <button
              onClick={abrirLinkedin}
              className="
                inline-flex px-8 py-4 font-medium
                bg-azul-300 text-azul-100 border rounded-2xl border-azul-100
                shadow-lg drop-shadow-[0_0_10px_#35ADDC]
                hover:opacity-90 transition
              "
            >
              Meu LinkedIn
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
