import React from "react"
import { Music } from "lucide-react"

export default function Tags({ tags }: { tags: any[] }) {
  return (
    <header className="container mx-auto flex flex-col w-11/12 mt-2">
        <div className="flex gap-30 flex-wrap">
          {tags.map((tags, index) => {
            const Icon = tags.icon
            return (
              <div
                key={index}
                className={`w-fit h-32 flex flex-col justify-center items-center border rounded-4xl p-8 shadow-lg ${tags.corBg} ${tags.border} ${tags.shadow}`}
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