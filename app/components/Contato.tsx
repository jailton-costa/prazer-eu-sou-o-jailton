'use client'

import { MessageCircleQuestion } from "lucide-react"
import { useState } from "react"

export default function  Contato() {
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
    <section id="contato" className="container max-w-xl mx-auto text-center border border-verde-100 rounded-2xl p-8 md:p-10 bg-verde-300 shadow-lg group hover:drop-shadow-[0_0_20px_#099B3C] transition-all">

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-verde-100 group-hover:drop-shadow-[0_0_3px_#099B3C] flex justify-center items-center gap-2">
        Vamos conversar <MessageCircleQuestion className="w-7 h-7"/>
      </h2>

      <p className="mb-8 leading-relaxed text-azul-100 opacity-90">
        Estou aberto a novas conexões, ideias e oportunidades para criar soluções incríveis.
      </p>

      {!mostrarAcoes && (
        <button
          onClick={() => setMostrarAcoes(true)}
          className="btN2 animate-fade-in"
        >
          Entrar em contato
        </button>
      )}

      {mostrarAcoes && (
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={copiarEmail}
            className="btAmarelo"
          >
            {emailCop ? emailCop : "Copiar Email"}
          </button>

          <button
            onClick={abrirLinkedin}
            className="btAzul"
          >
            {linkedin ? linkedin : "Meu LinkedIn"}
          </button>
        </div>
      )}
    </section>
  )
}
