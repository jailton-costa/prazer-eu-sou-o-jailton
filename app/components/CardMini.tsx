
export default function CardMini({ titulo, descricao,  }: { titulo: string; descricao: string; }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg font-inter w-72">

            <div className="p-2">
                <h1 className="text-2xl font-semibold">{titulo}</h1>
                <p className="text-gray-600">{descricao}</p>
            </div>
        </div>
    )
}
