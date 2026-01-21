import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    // Build search query from location
    const searchParams = new URLSearchParams()
    if (pickupLocation.trim()) {
      searchParams.set('q', pickupLocation.trim())
    }
    // Navigate to cars page with search query
    navigate(`/cars?${searchParams.toString()}`)
  }

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center gap-12 lg:gap-14 bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 px-4 text-center">
      <div>
        <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">Premium car rental</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Luxury cars on rent across Sri Lanka
        </h1>
        <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
          Book sedans, SUVs & vans. Self-drive or with driver. Best rates, no hidden fees.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-3 p-4 md:py-3 md:px-5 rounded-2xl w-full max-w-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
        <div className="flex flex-col md:flex-row md:flex-1 gap-4 md:gap-4 md:divide-x md:divide-slate-200">
          <div className="flex flex-col items-start gap-1.5 text-left">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pickup location</label>
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full md:w-44 text-slate-800 font-medium bg-transparent border-0 p-0 focus:ring-0 cursor-pointer"
            >
              <option value="">Select city</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <span className="text-xs text-slate-400">{pickupLocation || 'Choose a city'}</span>
          </div>

          <div className="flex flex-col items-start gap-1.5 text-left md:pl-0">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pick-up date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full md:w-40 text-slate-800 font-medium bg-transparent border-0 p-0 focus:ring-0"
            />
          </div>

          <div className="flex flex-col items-start gap-1.5 text-left md:pl-4">
            <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Return date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={pickupDate || new Date().toISOString().split('T')[0]}
              className="w-full md:w-40 text-slate-800 font-medium bg-transparent border-0 p-0 focus:ring-0"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-3.5 md:py-3 rounded-xl bg-primary hover:bg-primary-dull text-white font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <img src={assets.search_icon} alt="" className="w-4 h-4 brightness-0 invert" />
          Search
        </button>
      </form>

      <img src={assets.main_car} alt="Car" className="max-h-56 sm:max-h-64 lg:max-h-72 w-auto object-contain drop-shadow-2xl" />
    </section>
  )
}

export default Hero
