'use client'

import { useState } from "react"

export default function BtContato() {
  const [mostrarAcoes, setMostrarAcoes] = useState(false)
  const [emailCop, setEmailCop] = useState("")
  const [linkedin, setLinkedin] = useState("")

  const copiarEmail = () => {
    navigator.clipboard.writeText("jailton.jpc09@gmail.com")
    setEmailCop("Email copiado!")
    setTimeout(() => setEmailCop(""), 1500)
    setTimeout(() => setMostrarAcoes(false), 1900)
  }

  const abrirLinkedin = () => {
    setLinkedin("Abrindo linkedIn")
    window.open("https://www.linkedin.com/in/jailton-costa-pereira", "_blank")
    setTimeout(() => setLinkedin(""), 1500)
    setTimeout(() => setMostrarAcoes(false), 1900)
  }

  return (
    <section id="contato" className="container mx-auto px-4 py-16 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-verde-100">
          Vamos conversar?
        </h2>

        <p className="mb-8 leading-relaxed text-azul-100">
          Estou sempre aberto para novas conexões, trocas de ideias e oportunidades de colaboração.
        </p>

        {!mostrarAcoes && (
          <button
            onClick={() => setMostrarAcoes(true)}
            className="
              btN2 animate-fade-in
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
                hover:opacity-90 transition animate-fade-in
              "
            >
              {emailCop ? emailCop : "Copiar Email"}
            </button>

            <button
              onClick={abrirLinkedin}
              className="
                inline-flex px-8 py-4 font-medium
                bg-azul-300 text-azul-100 border rounded-2xl border-azul-100
                shadow-lg drop-shadow-[0_0_10px_#35ADDC]
                hover:opacity-90 transition animate-fade-in
              "
            >
              {linkedin ? linkedin : "Meu LinkedIn"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
