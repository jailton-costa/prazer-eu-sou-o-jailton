import { Fullscreen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function CardSlim({ cardSlim }: { cardSlim: any[] }) {
    return (
        <div className="container mx-auto px-15 grid grid-cols-1 md:grid-cols-2 gap-10">
            {cardSlim.map((cardSlim, index) => (
                <Link href={cardSlim.links} key={index} className={`flex items-center justify-start rounded-2xl border-l-5 hover:${cardSlim.shadow} ${cardSlim.corBg} ${cardSlim.border} mt-2`}>
                    <Image
                        src={cardSlim.imagem}
                        alt={cardSlim.imagem}
                        width={100}
                        height={100}
                        className="w-50 h-30 p-2 rounded-2xl object-top-left"
                    />
                    <div className="flex flex-col gap-2 ml-6">
                        <h1 className={`text-xl font-medium ${cardSlim.corTitulo}`}>
                            {cardSlim.titulo}
                        </h1>
                        <p className={`text-sm ${cardSlim.corDescricao}`}>
                            {cardSlim.descricao}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
