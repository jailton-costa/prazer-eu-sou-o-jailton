'use client'

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Event = {
    titulo: string
    subtitulo: string
    data: string
    local: string
    imagem: string
    link?: string
}

type Props = {
    eventos: Event[]
}

export default function EventCarousel({ eventos }: Props) {
    const [index, setIndex] = useState(0)

    const prev = () =>
        setIndex((i) => (i === 0 ? eventos.length - 1 : i - 1))

    const next = () =>
        setIndex((i) => (i === eventos.length - 1 ? 0 : i + 1))

    const evento = eventos[index]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i === eventos.length - 1 ? 0 : i + 1));
        }, 10000);

        return () => clearInterval(interval);
    }, [eventos.length]);

    return (
        <div className="relative w-full max-w-9xl mx-auto flex items-center justify-center gap-6">
            <button
                onClick={prev}
                className="relative btNormal rounded-full p-2 h-20 hover:h-26 "
            >
                <ChevronLeft />
            </button>
            <div className="flex flex-col md:flex-row items-center border-verde-100 border overflow-hidden rounded-2xl shadow-2xl w-306">

                <div className="md:w-3/5 md:h-[320px] rounded-2xl border border-verde-100 overflow-hidden relative">
                    <Image
                        src={evento.imagem}
                        alt={evento.titulo}
                        width={800}
                        height={500}
                        className="w-full h-full object-top-left "
                    />
                </div>

                <div className="md:w-2/5 md:h-[320px] bg-verde-300 text-verde-200 rounded-b-2xl p-6 flex flex-col justify-between">

                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {evento.titulo}
                        </h1>

                        <h2 className="opacity-80 font-semibold">
                            {evento.subtitulo}
                        </h2>

                        <p className="opacity-80">
                            {evento.data}
                        </p>
                        <p className="opacity-80">
                            {evento.local}
                        </p>
                    </div>

                    <Link href={`${evento.link}`} className="btNormal text-center w-full md:w-64 h-12">
                        Ver Detalhes
                    </Link>
                </div>
            </div>

            <button
                onClick={next}
                className="relative btNormal rounded-full p-2 h-20 hover:h-26"
            >
                <ChevronRight />
            </button>
        </div>
    )
}
