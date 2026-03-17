import { FileQuestion, FileQuestionMark, FolderCheck, Folders } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-verde-300 backdrop-blur-md border-b-2 rounded-b-2xl border-verde-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-azul">
          <div>
          <Link href="/" className="font-semibold text-lg text-verde-100 flex justify-center items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-2xs w-7 h-7"
          />
            Prazer, eu sou o Jailton 
          </Link>
          </div>

          <div className="flex gap-5 text-ms font-semibold text-verde-100 flex-wrap ">
            <Link href="/sobreProjeto" className="flex gap-1 hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 pl-1 transition-all">
              <FileQuestionMark/>Sobre este projeto
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="/#meusProjetos" className="flex gap-1 hover:drop-shadow-[0_0_5px_#0FF25E] hover:border-b-2 pl-1 transition-all">
              <Folders/>Meus Projetos
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  )
}
