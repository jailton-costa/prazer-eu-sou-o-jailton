import Image from "next/image"
import Link from "next/link"

export default function CardSlim({ cardSlim }: { cardSlim: any[] }) {
    return (
        <div className="container mx-auto px-15 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {cardSlim.map((cardSlim, index) => (
                <Link
                    href={cardSlim.links}
                    key={index}
                    className={`
                        flex flex-col md:flex-row 
                        items-start md:items-center 
                        w-full 
                        rounded-2xl border-l-4 
                        ${cardSlim.corBg} ${cardSlim.border} 
                        p-3 md:p-4
                        hover:${cardSlim.shadow}
                    `}
                >
                    <Image
                        src={cardSlim.imagem}
                        alt={cardSlim.imagem}
                        width={500}
                        height={500}
                        className="
                            w-full md:w-40 
                            h-40 md:h-28 
                            object-cover 
                            rounded-2xl
                        "
                    />

                    <div className="flex flex-col gap-2 mt-3 md:mt-0 md:ml-4">
                        <h1 className={`text-base md:text-xl font-medium ${cardSlim.corTitulo}`}>
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