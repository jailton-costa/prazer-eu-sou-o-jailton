import { CoffeeIcon } from 'lucide-react'
import React from 'react'

export default function Rodape() {
  return (
    <div>
        <footer className="border-t-2 rounded-t-2xl border-verde-100 bg-verde-300">
        <div className="container mx-auto px-4 py-3">
          <p className="text-center flex gap-2 justify-center items-center font-semibold text-lg text-verde-100">
            Feito com dedicação e café <CoffeeIcon className='h-5 w-5'/> • 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
