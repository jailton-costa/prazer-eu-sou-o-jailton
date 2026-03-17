import React from 'react'
import Image from "next/image"

export default function Resumo() {
    return (
        <header className="h-min containe text-center pt-10">
            <div className="flex justify-center items-center gap-2 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-verde-100 drop-shadow-[0_0_5px_#099B3C] ">
                    Prazer, eu sou o Jailton
                </h1>
            </div>

            <p className="text-lg md:text-xl text-azul-100">
                Um espaço para você me conhecer além do código — compartilhando minha trajetória,
                valores e paixão por tecnologia.
            </p>
        </header>
    )
}
