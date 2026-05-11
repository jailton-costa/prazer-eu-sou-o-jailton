'use client'

import { useState } from "react"
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiPrisma, SiTailwindcss, SiPython, SiGit } from 'react-icons/si'
import { ChevronLeft, ChevronRight, FoldersIcon, UsersIcon, MessageSquare, Heart } from "lucide-react"
import Card from "./Card"
import CardSlim from "./CardSlim"

type Props = {
    cardsEventos: Event[]
}

const cards = [
    {
        titulo: "InkluaTicket",
        descricao: "A InkluaTicket é uma plataforma de venda de ingressos online que facilita, gestão e compra de ingressos para eventos, oferecendo uma experiência, segura e acessível para organizadores e participantes.",
        imagem: "/colaboracao/inkluaTicket/inkluaTicket.png",
        corTitulo: "text-roxo-inklua-100",
        corDescricao: "text-roxo-inklua-100",
        corBg: "bg-gray-900",
        border: "border-roxo-inklua-200",
        shadow: " hover:drop-shadow-[0_0_10px_#574cd5] transition-all",
        link: "/projeto/inkluaTicket",
        icon: [SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiPrisma, SiTailwindcss]
    }, {
        titulo: "islandTainho",
        descricao: "O Pet Tainho é uma plataforma que centraliza rotas, dicas e informações para ajudar turistas a se locomoverem em Florianópolis de forma mais prática, rápida e segura.",
        imagem: "/colaboracao/islandTainho/island.png",
        corTitulo: "text-island-azul-100",
        corDescricao: "text-island-azul-100",
        corBg: "bg-island-azul-300",
        border: "border-island-azul-100",
        shadow: " hover:drop-shadow-[0_0_15px_#053345] transition-all",
        link: "/projeto/islandTainho",
        icon: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiPrisma]
    }, {  
        titulo: "DevChatCLI",
        descricao: "o DevChat CLI é um chat em tempo real para desenvolvedores que funciona diretamente no terminal, permitindo conversar com outros devs sem sair do ambiente de código",
        imagem: "/colaboracao/DevChatCLI/devChatCLI01.png",
        corTitulo: "text-devChat-100",
        corDescricao: "text-devChat-100",
        corBg: "bg-devChat-300",
        border: "border-devChat-100",
        shadow: " hover:drop-shadow-[0_0_10px_#ffffff] transition-all",
        link: "/projeto/devChatCLI",
        icon: [SiTypescript, SiNodedotjs, SiGit]
    },
]

const cardSlim = [
    {
        titulo: "My-game",
        descricao: "Edgewake é um jogo ambientado em um mundo colapsado entre dimensões, enfrenta combates táticos inspirados em Undertale e toma decisões que influenciam o destino entre caos e esperança.",
        imagem: "/pessoal/my-game/myGame.png",
        corTitulo: "text-white",
        corDescricao: "text-green-700",
        corBg: "bg-gray-800",
        border: "border-gray-100",
        shadow: " hover:drop-shadow-[0_0_10px_#ffffff] transition-all",
        links: "/projeto/myGame",
    },
]


export default function CarouselCards() {
    const items = [
        { titulo: "Projetos colaborativos", icon: UsersIcon },
        { titulo: "Meus Projetos", icon: FoldersIcon }
    ]

    const [index, setIndex] = useState(0)
    const total = items.length
    const Projetos = items[index]?.titulo || "Projetos colaborativos"
    const Icon = items[index]?.icon || FoldersIcon

    const next = () => {
        setIndex((prev) => (prev + 1) % total)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + total) % total)
    }

    return (
        <div className="flex flex-col scroll-smooth scroll-mt-20" id="meusProjetos">
            <div className="flex justify-between items-start mb-5">
                <h1 className="text-3xl flex gap-2 items-center text-start px-6 mb-5 font-semibold text-verde-100">
                    <Icon className="w-9 h-9" />
                    {Projetos}
                </h1>
                <div className="flex gap-2 mr-10">
                    <button
                        onClick={prev}
                        className=" btNormal rounded-full p-1 h-max"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className=" btNormal rounded-full p-1 h-max"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center ">

                {index === 0 && (
                    <div className="animateLeft flex-1/3 flex relative">
                        <Card cards={cards} />
                    </div>
                )}

                {index === 1 && (
                    <div className="animateRight">
                        <CardSlim cardSlim={cardSlim} />
                    </div>
                )}

            </div>
        </div>
    )
}
