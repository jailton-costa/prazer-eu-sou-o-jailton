'use client'

import { GithubIcon, Linkedin, LinkedinIcon, MailIcon, MessageCircleQuestion } from "lucide-react"
import { useState } from "react"

export default function  Contato() {
  const [mostrarAcoes, setMostrarAcoes] = useState(false)
  const [emailCop, setEmailCop] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")

  const copiarEmail = () => {
    navigator.clipboard.writeText("jailton.jpc09@gmail.com")
    setEmailCop("Copiado!")
    setTimeout(() => setEmailCop(""), 1500)
    setTimeout(() => setMostrarAcoes(false), 1900)
  }

  const abrirLinkedin = () => {
    setLinkedin("Abrindo linkedIn")
    window.open("https://www.linkedin.com/in/jailton-costa-pereira", "_blank")
    setTimeout(() => setLinkedin(""), 1500)
    setTimeout(() => setMostrarAcoes(false), 1900)
  }

  const abrirGithub = () => {
    setGithub("Abrindo Github")
    window.open("https://github.com/jailton-costa", "_blank")
    setTimeout(() => setGithub(""), 1500)
    setTimeout(() => setMostrarAcoes(false), 1900)
  }

  return (
    <section id="contato" className="container w-xs md:w-3xl mx-auto text-center border border-verde-100 rounded-2xl p-8 md:p-15 bg-verde-300 shadow-lg group hover:drop-shadow-[0_0_20px_#099B3C] transition-all">

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-verde-100 group-hover:drop-shadow-[0_0_3px_#099B3C] flex justify-center items-center gap-2">
        Vamos conversar <MessageCircleQuestion className="w-7 h-7"/>
      </h2>

      <p className="mb-8 leading-relaxed text-azul-100 opacity-90">
        Sempre aberto a novas conexões, ideias e oportunidades para construir soluções incríveis e evoluir constantemente.
      </p>

      {!mostrarAcoes && (
        <button
          onClick={() => setMostrarAcoes(true)}
          className="btN2 animate"
        >
          Entrar em contato
        </button>
      )}

      {mostrarAcoes && (
        <div className="grid grid-cols-1 md:grid-cols-3 h-fit gap-5 justify-center trasition-all animate">
          <button
            onClick={copiarEmail}
            className="btAmarelo"
          >
            <MailIcon className="w-5 h-5"/>
            {emailCop ? emailCop : "Copiar email"}
          </button>

          <button
            onClick={abrirLinkedin}
            className="btAzul"
          >
            <LinkedinIcon className="w-5 h-5"/>
            {linkedin ? linkedin : "Linkedin"}
          </button>

          <button
              onClick={abrirGithub}
              className="btGitHub"
            >
              <GithubIcon className="w-5 h-5" />
              {github ? github : "GitHub"}
            </button>
        </div>
      )}
    </section>
  )
}
