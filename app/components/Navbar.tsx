import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-shadow-[#0C2A33] shadow-sm drop-shadow-[0_0_10px_#0C2A33]"
      style={{
        backgroundColor: "rgba(23, 23, 23, 0.8)",
        color: "var(--azul-100)",
        borderBottom: "1px solid var(--azul-100)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg" style={{ color: "var(--azul-100)" }}>
            Prazer, eu sou o Jailton
          </Link>
          <div className="flex gap-6">
            <Link
              href="/sobreProjeto"
              className="text-sm transition-colors hover:opacity-80"
            >
              Sobre este projeto
            </Link>
            <Link
              href="#como-trabalho"
              className="text-sm transition-colors hover:opacity-80"
            >
              Como trabalho
            </Link>
            <Link
              href="#como-comecei"
              className="text-sm transition-colors hover:opacity-80"
            >
              Como comecei
            </Link>
            <Link
              href="#valores"
              className="text-sm transition-colors hover:opacity-80"
            >
              Meus valores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
