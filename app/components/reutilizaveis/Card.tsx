import Image from "next/image"
import Link from "next/link"

export default function Card({ cards }: { cards: any[] }) {
  return (
    <div className="container mx-auto px-15 grid grid-cols-4 md:grid-cols-4 gap-10">

      {cards.map((card, index) => (
        <Link key={index} href={card.link}>

          <div className={`scroll-mt-20 rounded-2xl p-4 ${card.corBg} ${card.border} transition-all max-w-xs border shadow-lg drop-shadow-[0_0_20px_#${card.shadow}]`}>

            <h2 className={`text-2xl font-bold mb-3 pb-2 ${card.corTitulo} border-b-2 ${card.border}`}>
              {card.titulo}
            </h2>

            <div className={`rounded-2xl aspect-video mb-3 overflow-hidden border-2 ${card.border}`}>
              <Image
                src={card.imagem}
                alt={card.alt ?? card.titulo}
                width={155}
                height={155}
                className="rounded-md object-top-left w-full h-full"
              />
            </div>

            <div className={`space-y-4 ${card.corDescricao} leading-relaxed`}>
              <p>{card.descricao}</p>
            </div>

          </div>

        </Link>
      ))}

    </div>
  )
}