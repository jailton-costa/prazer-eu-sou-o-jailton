import Image from "next/image"


export default function Card({ titulo, descricao, imgJPG }: { titulo: string; descricao: string; imgJPG: string }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg font-inter w-72">
            <Image
                src={imgJPG}
                alt={imgJPG}
                width={300}
                height={200}
                className="rounded-md object-cover"
            />

            <div className="p-2">
                <h1 className="text-2xl font-semibold">{titulo}</h1>
                <p className="text-gray-600">{descricao}</p>
            </div>
        </div>
    )
}
