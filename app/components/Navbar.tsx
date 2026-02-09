import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-azul-300 backdrop-blur-md border-b rounded-b-2xl border-azul-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-azul">
          <Link href="/" className="font-semibold text-lg text-verde-100">
            Prazer, eu sou o Jailton
          </Link>

          <div className="flex gap-6 text-sm">
            <Link href="/sobreProjeto" className="hover:opacity-80">
              Sobre este projeto
            </Link>
            <Link href="#como-trabalho" className="hover:opacity-80">
              Como trabalho
            </Link>
            <Link href="#como-comecei" className="hover:opacity-80">
              Como comecei
            </Link>
            <Link href="#valores" className="hover:opacity-80">
              Meus valores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
