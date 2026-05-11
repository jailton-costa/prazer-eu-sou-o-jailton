import Image from "next/image"
import Link from "next/link"

export default function Card({ cards }: { cards: any[] }) {
  return (
    <div className="container mx-auto px-15 flex flex-wrap gap-10">

      {cards.map((card, index) => (
        <Link key={index} href={card.link}>

          <div className={`h-full justify-center items-center rounded-2xl p-4 ${card.corBg} ${card.border} transition-all max-w-xs border shadow-lg drop-shadow-[0_0_20px_#${card.shadow}]`}>

            <h2 className={`text-2xl font-bold mb-3 pb-2 ${card.corTitulo} border-b-2 ${card.border}`}>
              {card.titulo}
            </h2>

            <div className={`rounded-2xl aspect-video mb-3 overflow-hidden border-2 ${card.border}`}>
              <Image
                src={card.imagem}
                alt={card.alt ?? card.titulo}
                width={500}
                height={500}
                className="rounded-md object-top-left w-full h-full"
              />
            </div>

            <div className={`space-y-4 ${card.corDescricao} leading-relaxed`}>
              <p>{card.descricao}</p>
            </div>

            <div className="flex justify-start items-center mt-5 gap-5 flex-wrap">
              {card.icon?.map((Icon: any, idx: number) => (
                <Icon key={idx} className={`w-7 h-7 ${card.border}`} />
              ))}
            </div>
          </div>

        </Link>
      ))}

    </div>
  )
}