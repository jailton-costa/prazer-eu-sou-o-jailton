import Image from "next/image"
import Link from "next/link"


export default function Card({ cards }: { cards: any[] }) {
    return (
        <Link href={cards[0].local} className="container mx-auto px-4 py-12">
            {cards.map((card, index) => (
                <div key={index} className={`scroll-mt-20 rounded-2xl p-4 ${card.corBg} shadow-lg drop-shadow-[0_0_20px_#${card.shadow}]`}>
                    <h2 className={`text-2xl font-bold mb-6 pb-2 ${card.corText} border-b-2 ${card.border}`}>
                        {card.titulo}
                    </h2>

                    <div className={`rounded-2xl aspect-video mb-6 overflow-hidden border-2 ${card.border}`}>
                        <Image
                            src={card.imgJPG}
                            alt={card.alt ?? card.titulo}
                            width={215}
                            height={200}
                            className="rounded-md object-cover"
                        />
                    </div>

                    <div className={`space-y-4 text-preto-200 leading-relaxed`}>
                        <p>
                            {card.descricao}
                        </p>
                    </div>
                </div>
            ))}
        </Link>
    )
}
