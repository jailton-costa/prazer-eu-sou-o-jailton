import { FileQuestionMark, CircleUserRoundIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-verde-300 backdrop-blur-md border-b-2 rounded-b-2xl border-verde-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between gap-8 md:gap-1 h-15 text-sm md:text-base">
          <div>
          <Link href="/" className="font-semibold text-verde-100 flex justify-center items-center gap-2">
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

          <div className="flex justify-center items-center md:gap-3 font-semibold text-verde-100 ">
            <Link href="/sobreProjeto" className="flex gap-1 justify-center hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 p-2 transition-all">
              <FileQuestionMark/>Sobre Projeto
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="/Portfolio" className="flex justify-center gap-1 hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 p-2 transition-all">
              <CircleUserRoundIcon/>Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
