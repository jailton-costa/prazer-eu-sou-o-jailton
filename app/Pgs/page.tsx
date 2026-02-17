import React from 'react'
import Navbar from '../components/Navbar'

export default function Pgs() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <img src="/isso.png" alt="" />
        <h1 className='text-3xl font-bold text-verde-100'>
            Pgs
        </h1>
        <h2 className=''>
            Em breve, mais informações sobre mim e minhas paixões!
        </h2>

      </div>

    </div>
  )
}
