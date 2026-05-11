'use client'

import Navbar from "@/app/components/Navbar"
import Rodape from "@/app/components/Rodape"
import { Search, MapPin, CodeXml, Calendars, Users, GithubIcon, Cpu } from "lucide-react"
import Link from "next/link"
import CarouselProjeto from "@/app/components/reutilizaveis/CarouselProjeto"
import { SiNextdotjs, SiTypescript, SiPython, SiPostgresql, SiPrisma, SiTailwindcss, SiNodedotjs, SiGit } from "react-icons/si"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"


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
  tecnologias: string[]
  Icon: any[]
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
    tecnologias: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Prisma", "Tailwind CSS"],
    Icon: [SiNextdotjs, SiTypescript, SiPython, SiPostgresql, SiPrisma, SiTailwindcss],
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
    tecnologias: ["TypeScript", "Node.js", "Git"],
    Icon: [SiTypescript, SiNodedotjs, SiGit],
    eventos: [
      { imagem: "/colaboracao/DevChatCLI/devChatCLI01.png", corBorder: "border-white", corBg: "bg-black", corText: "border-white", corShadow: "hover:drop-shadow-[0_0_10px_#ffffff] hover:opacity-90" },
      { imagem: "/colaboracao/DevChatCLI/devChatCLI02.png", corBorder: "border-white", corBg: "bg-black", corText: "border-white", corShadow: "hover:drop-shadow-[0_0_10px_#ffffff] hover:opacity-90" },
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
    tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Python", "Prisma"],
    Icon: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiPrisma],
    minhaDescricao: "esse projeto foi uma excelente oportunidade de aprendizado e crescimento pessoal, alem de trabalhar em equipe com pessoas novas e desenvolver um novo projeto do zero com uma ideia totalmente diferente.",
    eventos: [
      { imagem: "/colaboracao/islandTainho/Island.png", corBorder: "border-island-azul-100", corBg: "bg-island-azul-300", corText: "border-island-azul-100", corShadow: "hover:drop-shadow-[0_0_10px_#ECFEFF] hover:opacity-90" },
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
    tecnologias: ["Next.js", "Tailwind CSS"],
    Icon: [SiNextdotjs, SiTailwindcss],
    minhaDescricao: "foi um projeto pessoal onde pude explorar minha criatividade e habilidades de desenvolvimento para criar um jogo divertido e envolvente. Embora o desenvolvimento esteja parado no momento, a experiência me ensinou muito sobre design de jogos, programação e a importância de iterar e testar constantemente para criar uma experiência de jogo agradável.",
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

export default function ProjetoPage() {
  const params = useParams()
  const slug = params.slug as string
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-10 flex justify-center items-center md:h-[380px]"
      >
        <CarouselProjeto eventos={projeto.eventos} />
      </motion.div>

      {/* Conteúdo */}
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${projeto.bgCor} ${projeto.borderCor} ${projeto.textCor} border rounded-3xl p-8 shadow-xl backdrop-blur flex flex-col gap-8`}
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h1 className="text-4xl font-bold">{projeto.title}</h1>
              <p className="text-sm opacity-70">Projeto de desenvolvimento</p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={projeto.linkProjeto}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl border hover:scale-110 transition ${projeto.borderCor} ${projeto.textCor} ${projeto.shadowCor} cursor-pointer`}
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>

          {/* TECNOLOGIAS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`flex flex-col gap-4 ${projeto.bgMinCor} justify-start p-4 rounded-2xl`}
          >
            <p className="text-xl font-semibold flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              Tecnologias Utilizadas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {projeto.tecnologias.map((tecnologia, index) => {
                const Icon = projeto.Icon?.[index]
                return (
                  <motion.span
                    key={tecnologia}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`inline-flex items-center justify-center gap-2 rounded-full border ${projeto.bgCor} px-4 py-2 text-xs md:text-sm font-medium ${projeto.textCor} transition ${projeto.shadowCor} cursor-pointer`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span className="truncate">{tecnologia}</span>
                  </motion.span>
                )
              })}
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: CodeXml, title: "Estado", content: projeto.desenvolvimento },
              { icon: Users, title: "Integrantes", content: projeto.Integrantes },
              {
                icon: Calendars,
                title: "Datas",
                content: (
                  <div className="flex flex-col gap-1 text-sm">
                    <span>Início: {projeto.dataInicio}</span>
                    <span>Fim: {projeto.dataFim}</span>
                  </div>
                ),
              },
              { icon: MapPin, title: "Local", content: projeto.location },
            ].map((stat, idx) => {
              const StatIcon = stat.icon
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + idx * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  className={`${projeto.bgMinCor} p-4 rounded-2xl transition`}
                >
                  <p className="flex items-center gap-2 text-lg font-semibold mb-2">
                    <StatIcon className="w-5 h-5" />
                    {stat.title}
                  </p>
                  <div className="text-sm opacity-90">{stat.content}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* SOBRE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: Search, title: "Sobre o projeto", text: projeto.description },
              { icon: CodeXml, title: "Como foi para mim desenvolver", text: projeto.minhaDescricao },
            ].map((section, idx) => {
              const SectionIcon = section.icon
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${projeto.bgMinCor} p-4 rounded-2xl transition`}
                >
                  <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
                    <SectionIcon className="w-5 h-5" />
                    {section.title}
                  </h2>
                  <p className="leading-relaxed text-sm opacity-90">{section.text}</p>
                </motion.section>
              )
            })}
          </motion.div>
        </motion.div>
      </main>
      <Rodape />
    </div>
  )
}