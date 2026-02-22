import React from "react"
import { Music } from "lucide-react"

export default function Tags({ tags }: { tags: any[] }) {
  return (
    <header className="container mx-auto flex flex-col w-11/12 mt-2">
        <div className="flex gap-25 flex-wrap">
          {tags.map((tags, index) => {
            const Icon = tags.icon
            return (
              <div
                key={index}
                className={`w-fit h-fit text-center border rounded-2xl p-8 shadow-lg gap-10 ${tags.corBg} ${tags.border} ${tags.shadow}`}
              >
                <Icon className={`mx-auto ${tags.corTitulo}`} size={48} />

                <h1 className={`text-2xl font-bold ${tags.corTitulo}`}>
                  {tags.titulo}
                </h1>
              </div>
            )
          })}
        </div>
    </header>
  )
}