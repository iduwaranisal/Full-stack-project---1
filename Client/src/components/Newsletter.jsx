import React from 'react';

export default function Newsletter() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section className="flex flex-col items-center justify-center py-16 bg-white">
                <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 rounded-full px-3 py-1 font-medium">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                            stroke="currentColor" strokeMiterlimit="5.759" strokeLinecap="round" />
                    </svg>
                    <span>Travel Smart</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 text-center">Ready to explore Sri Lanka?</h1>
                <p className="max-w-xl text-center text-slate-500 mt-6 px-4">
                    Join our newsletter to get seasonal discounts on KDH vans and self-drive cars. Be the first to know about our special rates for long trips to Ella, Mirissa, and Yala.
                </p>
                <form className="relative flex items-center rounded-full border border-slate-200 mt-8 text-sm max-w-md w-full shadow-sm hover:border-blue-400 transition-colors mx-4">
                    <svg className="absolute left-4" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input type="email" 
                        name="email"
                        placeholder="Enter your email address" 
                        className="focus:outline-none pl-12 py-4 bg-transparent w-full rounded-full text-slate-700 placeholder-slate-400"
                        required />
                    <button className="shrink-0 mr-1.5 px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full active:scale-95 transition-all duration-300 text-white shadow-md shadow-blue-200">
                        Get Offers
                    </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </section>
        </>
    );
};