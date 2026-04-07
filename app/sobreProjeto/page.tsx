import Image from "next/image"
import Navbar from "../components/Navbar"
import { CircleQuestionMark } from "lucide-react"
import Rodape from "../components/Rodape"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section id="sobre" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">

            {/* Logo */}
            <div className="flex justify-center mb-10">
              <Image
                src="/JailtonLogoGrande.png"
                alt="Logo do projeto: Prazer, eu sou o Jailton"
                width={600}
                height={500}
                priority
                className="rounded-2xl border border-azul-300 shadow-xl max-h-[280px] w-auto"
              />
            </div>

            {/* Título */}
            <header className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 text-azul-100 drop-shadow-[0_0_10px_#0C2A33]">
                Sobre este projeto
                <CircleQuestionMark className="h-7 w-7" />
              </h1>
            </header>

            {/* Conteúdo */}
            <div className="space-y-6 text-preto-200 leading-relaxed text-base md:text-lg">

              <p>
                <span className="font-semibold text-azul-100">
                  Prazer, eu sou o Jailton
                </span>{" "}
                é mais do que um portfólio — é um projeto pessoal criado para
                apresentar quem eu sou de forma simples e verdadeira.
              </p>

              <p>
                A proposta é facilitar para avaliadores, recrutadores e outros
                desenvolvedores conhecerem meus projetos, colaborações em equipe e
                a forma como eu trabalho.
              </p>

              <p>
                O projeto também foi pensado para ser <span className="text-azul-100 font-semibold">modular e reutilizável</span>,
                permitindo adicionar novos projetos e experiências com facilidade ao
                longo do tempo.
              </p>

            </div>

            {/* Stack */}
            <div className="mt-10 p-6 border-l-3 rounded-2xl border-verde-200 bg-azul-300/40 backdrop-blur-sm">

              <p className="text-sm uppercase tracking-wider text-amarelo-100 mb-2">
                Stack Técnica
              </p>

              <p className="text-sm md:text-base text-azul-100">
                Desenvolvido com{" "}
                <strong className="text-verde-100">Next.js</strong>,{" "}
                <strong className="text-verde-100">TypeScript</strong> e{" "}
                <strong className="text-verde-100">Tailwind CSS</strong>,
                utilizando uma paleta pensada para transmitir calma,
                acessibilidade e proximidade.
              </p>

            </div>

          </div>
        </section>
      </main>

      <Rodape />
    </div>
  )
}