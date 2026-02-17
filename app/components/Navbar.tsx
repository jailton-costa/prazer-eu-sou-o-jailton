import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-verde-300 backdrop-blur-md border-b-2 rounded-b-2xl border-verde-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-azul">
          <Link href="/" className="font-semibold text-lg text-verde-100">
            Prazer, eu sou o Jailton
          </Link>

          <div className="flex gap-5 text-ms font-semibold text-azul-100 flex-wrap">
            <Link href="/sobreProjeto">
              Sobre este projeto
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="#como-trabalho">
              Como trabalho
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="#como-comecei">
              Como comecei
            </Link>
            <div className="h-7 border border-verde-100"></div>
            <Link href="#valores">
              Meus valores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
