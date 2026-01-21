import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white overflow-hidden relative">
        <div className="relative z-10">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">For car owners</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Own a luxury or family car?</h2>
          <p className="mt-3 text-slate-300 max-w-md leading-relaxed">
            List it on LankaRide. We handle insurance, verification & payments. Earn stress-free.
          </p>
          <button
            onClick={() => {}}
            className="mt-5 px-6 py-2.5 rounded-xl bg-white text-slate-800 font-semibold hover:bg-slate-100 transition-colors"
          >
            List your car
          </button>
        </div>
        <img
          src={assets.banner_car_image}
          alt=""
          className="max-h-44 md:max-h-52 w-auto object-contain opacity-90"
        />
      </div>
    </section>
  )
}

export default Banner
