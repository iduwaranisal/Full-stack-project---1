import React from 'react';

export default function Footer() {
    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>
            <footer className='bg-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-7xl mx-auto'>
            
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                            {/* Logo Text / Brand */}
                            <a href="#" className="flex items-center gap-2">
                                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                                </svg>
                                <span className="text-2xl font-bold text-white tracking-wide">Car<span className="text-blue-500">Rental</span></span>
                            </a>
                            
                            <div className='w-full max-w-52 h-px mt-8 bg-gradient-to-r from-slate-900 via-white/25 to-slate-900'></div>
                            <p className='text-sm text-gray-400 mt-6 max-w-sm leading-relaxed'>
                                Experience the beauty of Sri Lanka with our premium fleet. From budget-friendly city cars to luxury vans for your Nuwara Eliya trips, we have the perfect ride for you.
                            </p>
                            <p className='text-sm text-gray-400 mt-4'>
                                📍 No. 125, Galle Road, Colombo 03.
                            </p>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Quick Links</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Our Fleet</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Airport Pickup</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Self Drive Rates</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Wedding Cars</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Contact Us</a>
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Connect</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>WhatsApp (+94)</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Facebook</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>Instagram</a>
                                <a href="#" className='text-sm text-gray-400 hover:text-white transition-colors'>TikTok</a>
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Get Special Offers</h3>
                            <p className="text-xs text-gray-500 mt-2 mb-4">Subscribe to get seasonal discounts for long-term rentals.</p>
                            <div className="flex items-center border gap-2 border-white/20 h-12 max-w-80 w-full rounded-full overflow-hidden">
                                <input type="email" placeholder="Email address" className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-gray-500" required />
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition w-28 h-9 rounded-full text-sm text-white cursor-pointer mr-1.5 font-medium">Join</button>
                            </div>
                        </div>
            
                    </div>
            
                    <div className='w-full h-px mt-16 mb-4 bg-gradient-to-r from-slate-900 via-white/25 to-slate-900'></div>
            
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className='text-xs text-gray-500'>© 2025 LankaRide Rentals. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href='#' className='text-xs text-gray-500 hover:text-white transition-colors'>Rental Terms</a>
                            <div className='w-px h-4 bg-white/20'></div>
                            <a href='#' className='text-xs text-gray-500 hover:text-white transition-colors'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};