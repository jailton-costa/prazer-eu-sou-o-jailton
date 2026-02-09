import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section id="sobre" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-azul-100 drop-shadow-[0_0_15px_#0C2A33]">
            Sobre este projeto
          </h1>

          <div className="space-y-6 leading-relaxed text-preto-200">
            <p>
              <span className="font-semibold text-azul-100">
                Prazer, eu sou o Jailton
              </span>{" "}
              é mais do que um portfólio — é um projeto pessoal criado para apresentar quem eu sou
              de forma simples e verdadeira.
            </p>

            <p>
              A ideia é permitir que as pessoas me conheçam além do código, entendendo minha
              trajetória, forma de trabalhar e valores.
            </p>

            <p>
              Este projeto tem um{" "}
              <span className="font-semibold text-azul-100">
                foco mais humano e social
              </span>
              , valorizando conversa, respeito, colaboração e até a música como parte do processo
              criativo.
            </p>

            <div className="p-6 rounded-2xl border-l-4 bg-azul-300 border-verde-200 mt-8">
              <p className="text-sm font-medium mb-2 text-amarelo-100">
                Stack Técnica
              </p>

              <p className="text-sm text-azul-100">
                Desenvolvido com{" "}
                <strong className="text-verde-100">Next.js</strong>,{" "}
                <strong className="text-verde-100">TypeScript</strong> e{" "}
                <strong className="text-verde-100">Tailwind CSS</strong>, com uma paleta pensada
                para transmitir calma, acessibilidade e proximidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
