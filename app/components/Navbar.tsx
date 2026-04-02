import { FileQuestion, FileQuestionMark, CircleUserRoundIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-verde-300 backdrop-blur-md border-b-2 rounded-b-2xl border-verde-100 shadow-sm">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between h-15 sm:text-lg md:text-xl">
          <div>
          <Link href="/" className="font-semibold sm:text-lg md:text-xl text-verde-100 flex justify-center items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-2xs w-6 h-6"
          />
            Prazer, eu sou o Jailton 
          </Link>
          </div>

          <div className="flex justify-center items-center gap-3 sm:text-lg md:text-xl font-semibold text-verde-100 ">
            <Link href="/sobreProjeto" className="flex gap-1 text-base hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 p-2 transition-all">
              <FileQuestionMark/>Sobre Projeto
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="/MeuPerfil" className="flex gap-1 text-base hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 p-2 transition-all">
              <CircleUserRoundIcon/>Meu Perfil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
