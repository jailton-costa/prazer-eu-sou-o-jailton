import Navbar from "./components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col font-montserrat">

      <Navbar />

      <div className="flex flex-col items-center justify-center gap-6 pt-16 pb-16 px-6">

        <div className="max-w-4xl flex flex-col items-center text-center gap-6">

          <h1 className="text-4xl md:text-5xl font-bold text-amarelo-100 drop-shadow-[0_0_2px_#F7B500]">
            Erro 404
          </h1>

          <p className="text-2xl font-semibold leading-relaxed text-azul-100">
            Página não encontrada. Parece que você tentou acessar uma página que não existe ou foi removida.
          </p>

          <p className="text-lg text-verde-100">
            Mas não se preocupe, você pode voltar para a página inicial.
          </p>

        </div>

        <Link href="/" className="btN2">
          Voltar para o início
        </Link>

      </div>

    </main>
  )
}