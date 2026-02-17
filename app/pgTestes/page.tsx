import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="container mx-auto flex flex-col items-center justify-center text-center flex-1 px-4">
        <div className="max-w-4xl flex flex-col items-center justify-center text-center gap-10 p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-azul-100 drop-shadow-[0_0_3px_#35ADDC]">
            Deu certo, paizão 🚀
          </h1>

          <p className="text-lg md:text-xl font-semibold leading-relaxed text-azul-100">
            Pra cima que vai dar certo.  
            Se você não fizer, ninguém vai fazer.  
            Você é melhor do que imagina — vai que é tua.
          </p>
        </div>
      </header>
    </main>
  )
}
