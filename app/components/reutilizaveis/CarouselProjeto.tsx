'use client'

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Event = {
    imagem: string
    corBorder: string
    corBg: string
    corText: string
    corShadow: string
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
                className={`relative ${evento.corBg} ${evento.corText} ${evento.corBorder} ${evento.corShadow} transition-all border-2 rounded-full p-2 h-20 hover:h-26 `}
            >
                <ChevronLeft />
            </button>
            <div className={`flex flex-col md:flex-row items-center overflow-hidden ${evento.corBorder} rounded-2xl shadow-2xl w-275    `}>
                <div className={`md:w-5/5 h-90 border-2 ${evento.corBorder} rounded-2xl overflow-hidden relative`}>
                    <Image
                        src={evento.imagem}
                        alt={evento.imagem}
                        width={500}
                        height={500}
                        className="w-full h-full object-top-left "
                    />
                </div>
            </div>

            <button
                onClick={next}
                className={`relative ${evento.corBg} ${evento.corText} ${evento.corBorder} ${evento.corShadow} transition-all border-2 rounded-full p-2 h-20 hover:h-26`}
            >
                <ChevronRight />
            </button>
        </div>
    )
}
