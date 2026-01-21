import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { getOwnerCars, setOwnerCars, uid } from '../../utils/ownerStore'

const AddCar = () => {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    category: 'Sedan',
    seating_capacity: 4,
    fuel_type: 'Petrol',
    transmission: 'Automatic',
    pricePerDay: 100,
    location: 'Colombo',
    image: assets.car_image1,
    description: '',
    isAvaliable: true,
  })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((p) => ({
      ...p,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setForm((p) => ({
          ...p,
          image: reader.result, // Store as data URL (base64)
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const cars = getOwnerCars()
    const newCar = {
      ...form,
      _id: uid('car'),
      createdAt: new Date().toISOString(),
      year: Number(form.year),
      seating_capacity: Number(form.seating_capacity),
      pricePerDay: Number(form.pricePerDay),
    }
    setOwnerCars([newCar, ...cars])
    setForm((p) => ({ 
      ...p, 
      brand: '', 
      model: '', 
      description: '',
      image: assets.car_image1 // Reset to default image
    }))
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]')
    if (fileInput) fileInput.value = ''
    alert('Car added (stored in localStorage).')
  }

  return (
    <div className='max-w-3xl'>
      <div className='mb-5'>
        <p className='text-xl font-semibold text-gray-800'>Add Car</p>
        <p className='text-sm text-gray-500'>Create a new car listing (mock, stored locally).</p>
      </div>

      <form onSubmit={onSubmit} className='bg-white rounded-2xl shadow-sm p-6 border border-slate-200 space-y-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='text-sm text-gray-600'>Brand</label>
            <input
              name='brand'
              value={form.brand}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              placeholder='e.g. Toyota'
              required
            />
          </div>
          <div>
            <label className='text-sm text-gray-600'>Model</label>
            <input
              name='model'
              value={form.model}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              placeholder='e.g. Corolla'
              required
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <label className='text-sm text-gray-600'>Year</label>
            <input
              type='number'
              name='year'
              value={form.year}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              min='1990'
              max='2100'
            />
          </div>
          <div>
            <label className='text-sm text-gray-600'>Seats</label>
            <input
              type='number'
              name='seating_capacity'
              value={form.seating_capacity}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              min='1'
              max='12'
            />
          </div>
          <div>
            <label className='text-sm text-gray-600'>Price / day</label>
            <input
              type='number'
              name='pricePerDay'
              value={form.pricePerDay}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              min='1'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <label className='text-sm text-gray-600'>Category</label>
            <select
              name='category'
              value={form.category}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
            >
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Sports</option>
              <option>Van</option>
            </select>
          </div>
          <div>
            <label className='text-sm text-gray-600'>Fuel</label>
            <select
              name='fuel_type'
              value={form.fuel_type}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
            >
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Hybrid</option>
              <option>Electric</option>
            </select>
          </div>
          <div>
            <label className='text-sm text-gray-600'>Transmission</label>
            <select
              name='transmission'
              value={form.transmission}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
            >
              <option>Automatic</option>
              <option>Manual</option>
              <option>Semi-Automatic</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label className='text-sm text-gray-600'>Location</label>
            <input
              name='location'
              value={form.location}
              onChange={onChange}
              className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all'
              placeholder='City'
            />
          </div>
          <div>
            <label className='text-sm text-gray-600'>Image</label>
            <div className='mt-1.5 space-y-2'>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer'
              />
              {form.image && (
                <div className='mt-2'>
                  <img 
                    src={form.image} 
                    alt='Car preview' 
                    className='w-full h-32 object-cover rounded-xl border border-slate-200'
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className='text-sm text-gray-600'>Description</label>
          <textarea
            name='description'
            value={form.description}
            onChange={onChange}
            className='mt-1.5 w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none min-h-28 transition-all'
            placeholder='Short description...'
          />
        </div>

        <label className='flex items-center gap-2 text-sm text-gray-700'>
          <input type='checkbox' name='isAvaliable' checked={form.isAvaliable} onChange={onChange} />
          Available now
        </label>

        <button type="submit" className='px-6 py-3 bg-primary hover:bg-primary-dull text-white rounded-xl font-semibold shadow-md shadow-primary/20 transition-all'>
          Add car
        </button>
      </form>
    </div>
  )
}

export default AddCar

