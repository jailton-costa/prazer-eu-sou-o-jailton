'use client'

import { useState } from "react"

export default function MeuContato() {
  const [bt1, setBt1] = useState(true)
  const [bt2, setBt2] = useState(false)

  const bts = () => {
    setBt1(false)
    setBt2(true)
  }

  const bts2 = () => {
    setBt2(false)
    navigator.clipboard.writeText("jailton.jpc09@gmail.com")
    alert("Email copiado para a área de transferência!")
    setBt1(true)
  }

  const bts3 = () => {
    setBt2(false)
    window.open("https://www.linkedin.com/in/jailton-costa-pereira", "_blank")
    alert("LinkedIn aberto em uma nova aba!")
    setBt1(true)
  }
  return (
    <div className='h-screen'>
      <section id="contato" className="container scroll-mt-20 mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--verde-100)" }}>
            Vamos conversar ?
          </h2>

          <p className="mb-8 leading-relaxed" style={{ color: "var(--preto-200)" }}>
            Estou sempre aberto para novas conexões, trocas de ideias e oportunidades de colaboração.
          </p>

          {bt1 === true ? (
            <button
              className="inline-flex px-8 py-4 rounded-lg transition-opacity hover:opacity-90 font-medium shadow-[#0FF25E] shadow-lg drop-shadow-[0_0_10px_#0FF25E]"
              onClick={() => bts()}
              style={{
                backgroundColor: "var(--verde-200)",
                color: "var(--foreground)",
              }}
            >
              Entrar em contato
            </button>
          ) : null}

          {bt2 === true ? (
            <div className="flex gap-30 justify-center items-center">

              <button
                className="inline-flex px-8 py-4 rounded-lg transition-opacity hover:opacity-90 font-medium shadow-[#F5B700] shadow-lg drop-shadow-[0_0_10px_#F5B700]"
                onClick={() => bts2()}
                style={{
                  backgroundColor: "var(--amarelo-300)",
                  borderColor: "var(--amarelo-100)",
                  color: "var(--amarelo-100)",
                }}
              >
                Meu Email
              </button>

              <button
                className="inline-flex px-8 py-4 rounded-lg transition-opacity hover:opacity-90 font-medium shadow-[#35ADDC] shadow-lg drop-shadow-[0_0_10px_#35ADDC]"
                onClick={() => bts3()}
                style={{
                  backgroundColor: "var(--azul-300)",
                  borderColor: "var(--azul-100)",
                  color: "var(--azul-100)",
                }}
              >
                Meu Linkedin
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
