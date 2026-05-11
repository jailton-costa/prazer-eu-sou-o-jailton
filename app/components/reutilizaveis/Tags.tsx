import React from "react"
import { Music } from "lucide-react"

export default function Tags({ tags }: { tags: any[] }) {
  return (
    <header className="container mx-auto flex justify-center items-center mt-2">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-1 md:gap-12">
          {tags.map((tags, index) => {
            const Icon = tags.icon
            return (
              <div
                key={index}
                className={`w-46 h-30 flex flex-col justify-center items-center border rounded-4xl p-5 shadow-lg ${tags.corBg} ${tags.border} ${tags.shadow}`}
              >
                <Icon className={`mx-auto ${tags.corTitulo}`} size={40} />

                <h1 className={`text-xl font-bold ${tags.corTitulo}`}>
                  {tags.titulo}
                </h1>
              </div>
            )
          })}
        </div>
    </header>
  )
}