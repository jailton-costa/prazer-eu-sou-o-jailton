import Navbar from "@/app/components/Navbar"
import Rodape from "@/app/components/Rodape"
import { Github, Search, MapPin, Calendar, CalendarOff, LucideProjector, Code, CodeXml, Calendars, CalendarDays, CalendarX, CalendarX2, CalendarCheck2, Users, GithubIcon } from "lucide-react"
import Link from "next/link"
import CarouselProjeto from "@/app/components/reutilizaveis/CarouselProjeto"

type Evento = {
  imagem: string
  corBorder: string
  corBg: string
  corText: string
  corShadow: string
}

type Projeto = {
  title: string
  location: string
  description: string
  minhaDescricao: string
  desenvolvimento: string
  Integrantes: string
  eventos: Evento[]
  dataInicio: string
  dataFim: string
  bgCor: string
  bgMinCor: string
  textCor: string
  borderCor: string
  shadowCor: string
  linkProjeto: string
}

const projetos: Record<string, Projeto> = {
  inkluaTicket: {
    title: "InkluaTicket",
    location: "Florianópolis - SC",
    desenvolvimento: "desenvolvimento interrompido em 2025, sem previsão de retomada.",
    Integrantes: "Jailton costa, darlan hildebrando, eduardo santos, samuel bordignon.",
    description: "O projeto InkluaTicket é uma plataforma de venda de ingressos online que facilita o gerenciamento e a compra de ingressos para eventos. Organizadores podem criar eventos, acompanhar vendas e estatísticas em tempo real, enquanto participantes possuem uma navegação simples, pagamentos seguros e acesso rápido aos ingressos digitais.",
    minhaDescricao: "foi um projeto desafiador e gratificante, onde pude aplicar meus conhecimentos em desenvolvimento web, trabalhar em equipe e criar uma solução que realmente facilita a vida de organizadores e participantes de eventos. A experiência me ensinou muito sobre colaboração, resolução de problemas e a importância de pensar na experiência do usuário.",
    eventos: [
      { imagem: "/colaboracao/inkluaTicket/inkluaTicket.png", corBorder: "border-roxo-inklua-200", corBg: "bg-gray-900", corText: "text-roxo-inklua-100", corShadow: "hover:drop-shadow-[0_0_10px_#574cd5] hover:opacity-90" },
      { imagem: "/colaboracao/inkluaTicket/inklua-cadastro.png", corBorder: "border-roxo-inklua-200", corBg: "bg-gray-900", corText: "text-roxo-inklua-100", corShadow: "hover:drop-shadow-[0_0_10px_#574cd5] hover:opacity-90" },
      { imagem: "/colaboracao/inkluaTicket/inklua-login.png", corBorder: "border-roxo-inklua-200", corBg: "bg-gray-900", corText: "text-roxo-inklua-100", corShadow: "hover:drop-shadow-[0_0_10px_#574cd5] hover:opacity-90" },
      { imagem: "/colaboracao/inkluaTicket/inklua-perfil.png", corBorder: "border-roxo-inklua-200", corBg: "bg-gray-900", corText: "text-roxo-inklua-100", corShadow: "hover:drop-shadow-[0_0_10px_#574cd5] hover:opacity-90" },
      { imagem: "/colaboracao/inkluaTicket/inklua-acesibilidades.png", corBorder: "border-roxo-inklua-200", corBg: "bg-gray-900", corText: "text-roxo-inklua-100", corShadow: "hover:drop-shadow-[0_0_10px_#574cd5] hover:opacity-90" },
    ],
    dataInicio: "09/12/2024",
    dataFim: "04/12/2025",
    bgCor: "bg-gray-900",
    bgMinCor: "bg-gray-800",
    textCor: "text-roxo-inklua-100",
    borderCor: "border-roxo-inklua-200 border-2",
    shadowCor: "hover:drop-shadow-[0_0_1px_#ffffff] hover:opacity-90",
    linkProjeto: "https://github.com/InkluaTicket/SA-Senai-InkluaTicket",
  },
  devChatCLI: {
    title: "DevChatCLI",
    location: "Santa catarina - brasil",
    desenvolvimento: "Em desenvolvimento, mais ja da para usar.",
    Integrantes: "Samuel bordignon, Eduardo santos, Jailton costa.",
    description: "O DevChat CLI é um chat em tempo real feito para desenvolvedores, rodando diretamente no terminal.  A ideia é simples:  conversar com outros devs sem sair do ambiente de código.  Nada de abrir Discord, navegador ou apps pesados — só o terminal.",
    minhaDescricao: "Desenvolver o DevChat CLI tem sido uma experiência incrível, em bora o projeto ainda não esteja 100% finalizado, ja e posivel usar e testar.",
    eventos: [
      { imagem: "/colaboracao/DevChatCLI/DevChatCLI01.png", corBorder: "border-white", corBg: "bg-black", corText: "border-white", corShadow: "hover:drop-shadow-[0_0_10px_#ffffff] hover:opacity-90" },
      { imagem: "/colaboracao/DevChatCLI/DevChatCLI02.png", corBorder: "border-white", corBg: "bg-black", corText: "border-white", corShadow: "hover:drop-shadow-[0_0_10px_#ffffff] hover:opacity-90" },
    ],
    dataInicio: "10/2/2026",
    dataFim: "(não ha uma data prevista para o fim do projeto)",
    bgCor: "bg-black",
    bgMinCor: "bg-devChat-300",
    textCor: "text-devChat-100",
    borderCor: "border-devChat-100 border-2",
    shadowCor: "hover:drop-shadow-[0_0_1px_#ffffff] hover:opacity-90",
    linkProjeto: "https://github.com/samuel-bordignon/DevChat-CLI",
  },
  islandTainho: {
    title: "IslandTainho",
    location: "Santa catarina - brasil",
    desenvolvimento: "Desenvolvimento finalizado, para hackathon.",
    Integrantes: "Darlan hildebrando, Rinmarys Alejandra, Nicholas Serencovich, Samuel bordignon, Eduardo santos, Jailton costa.",
    description: "O Pet Tainho é uma solução pensada para ajudar turistas em Florianópolis a se locomoverem com mais facilidade e segurança. O projeto reúne, em um só lugar, informações importantes como rotas, dicas e orientações úteis, reduzindo a confusão causada pela falta de um guia centralizado. Assim, o turista consegue planejar melhor seus deslocamentos, economizar tempo e aproveitar a cidade de forma mais prática, rápida e acessível.",
    minhaDescricao: "esse projeto foi uma excelente oportunidade de aprendizado e crescimento pessoal, alem de trabalhar em equipe com pessoas novas e desenvolver um novo projeto do zero com uma ideia totalmente diferente.",
    eventos: [
      { imagem: "/colaboracao/islandTainho/island-home.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
      { imagem: "/colaboracao/islandTainho/island-Jornadas.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
      { imagem: "/colaboracao/islandTainho/island-cadastro.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
      { imagem: "/colaboracao/islandTainho/island-login.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
      { imagem: "/colaboracao/islandTainho/island-perfil.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
    ],
    dataInicio: "Inicio: 01/12/2025",
    dataFim: " Fim: 04/12/2025",
    bgCor: "bg-island-azul-300",
    bgMinCor: "bg-island-azul-200",
    textCor: "text-island-azul-100",
    borderCor: "border-island-azul-100 border-2",
    shadowCor: "hover:drop-shadow-[0_0_1px_#ECFEFF] hover:opacity-90",
    linkProjeto: "https://github.com/DarlanHildebrando/frontend-hackathon/tree/teste-login",
  },
  myGame: {
    title: "MyGame",
    location: "Santa catarina - brasil",
    desenvolvimento: "Desenvolvimento parado no momento.",
    Integrantes: "Jailton costa.",
    description: "MyGame é um jogo de plataforma 2D onde os jogadores controlam um personagem em uma jornada para resgatar seu amigo sequestrado. O jogo apresenta níveis desafiadores, inimigos variados e power-ups para ajudar na missão. Com gráficos pixel art e uma trilha sonora envolvente, MyGame oferece uma experiência divertida e nostálgica para os fãs de jogos de plataforma.",
    minhaDescricao: "",
    eventos: [
      { imagem: "/pessoal/my-game/myGame-home.png", corBorder: "border-green-700", corBg: "bg-gray-900", corText: "border-green-700", corShadow: "hover:drop-shadow-[0_0_10px_#388E3C] hover:opacity-90" },
      { imagem: "/pessoal/my-game/myGame.png", corBorder: "border-green-700", corBg: "bg-gray-900", corText: "border-green-700", corShadow: "hover:drop-shadow-[0_0_10px_#388E3C] hover:opacity-90" },
    ],
    dataInicio: "Inicio: 11, Jul, 2025",
    dataFim: " Fim: 30, Jul, 2025",
    bgCor: "bg-gray-900",
    bgMinCor: "bg-gray-800",
    textCor: "text-green-700",
    borderCor: "border-green-700 border-2",
    shadowCor: "hover:drop-shadow-[0_0_1px_#053345] hover:opacity-90",
    linkProjeto: "https://github.com/DarlanHildebrando/frontend-hackathon/tree/teste-login",
  },

}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projeto = projetos[slug]

  if (!projeto) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <header className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-20">
          <div className="max-w-4xl flex flex-col gap-6">

            <h1 className="text-4xl md:text-5xl font-bold text-amarelo-100 drop-shadow-[0_0_2px_#F7B500]">
              Projeto não encontrado 😢
            </h1>

            <p className="text-xl text-amarelo-100">
              O projeto que você está procurando não existe ou foi removido.
            </p>

            <p className="text-xl text-azul-100">
              Volte para a página inicial e explore outros projetos.
            </p>

            <Link href="/" className="btAmarelo">
              Voltar para a Home
            </Link>

          </div>
        </header>
      </main>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Carousel */}
      <div className="relative pt-10 flex justify-center items-center md:h-[380px]">
        <CarouselProjeto eventos={projeto.eventos} />
      </div>

      {/* Conteúdo */}
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <div
          className={`${projeto.bgCor} ${projeto.borderCor} ${projeto.textCor}
    border rounded-3xl p-8 shadow-xl backdrop-blur flex flex-col gap-8`}
        >

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold">{projeto.title}</h2>
              <p className="text-sm opacity-70">Projeto de desenvolvimento</p>
            </div>

            <a
              href={projeto.linkProjeto}
              target="_blank"
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl border hover:scale-110 transition ${projeto.borderCor} ${projeto.textCor} ${projeto.shadowCor}`}
            >
              <GithubIcon className="w-5 h-5" />
              Github
            </a>
          </div>

          {/* GRID INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <p className="flex items-center border-b gap-2 font-semibold mb-2">
                <CodeXml size={18} /> Estado
              </p>
              <span>{projeto.desenvolvimento}</span>
            </div>

            <div className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <p className="flex items-center border-b gap-2 font-semibold mb-2">
                <Users size={18} /> Integrantes
              </p>
              <span>{projeto.Integrantes}</span>
            </div>

            <div className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <p className="flex items-center border-b gap-2 font-semibold mb-2">
                <Calendars size={18} /> Datas
              </p>

              <div className="flex flex-col text-sm">
                <span className="flex items-center gap-2">
                  <CalendarCheck2 className="w-4 h-4" /> {projeto.dataInicio}
                </span>

                <span className="flex items-center gap-2">
                  <CalendarX2 className="w-4 h-4" /> {projeto.dataFim}
                </span>
              </div>
            </div>

            <div className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <p className="flex items-center border-b gap-2 font-semibold mb-2">
                <MapPin size={18} /> Local
              </p>
              <span>{projeto.location}</span>
            </div>

          </div>

          {/* SOBRE */}
          <div className="grid grid-cols-2 gap-6">
            <section className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <h3 className="flex items-center gap-2 border-b text-xl font-semibold mb-3">
                <Search /> Sobre o projeto
              </h3>

              <p className="leading-relaxed opacity-90">
                {projeto.description}
              </p>
            </section>
            <section className={`${projeto.bgMinCor} p-4 rounded-2xl`}>
              <h3 className="flex items-center gap-2 border-b text-xl font-semibold mb-3">
                <CodeXml /> Como foi para mim desenvolver
              </h3>

              <p className="leading-relaxed opacity-90">
                {projeto.minhaDescricao}
              </p>
            </section>
          </div>


        </div>
      </main>
      <Rodape />
    </div>
  )
}