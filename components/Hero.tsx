import React from 'react';

export default function Hero() {
 return (
  <section className="relative w-full overflow-hidden bg-primary-dark">
   {/* Background Image - User can replace src */}
   <div className="absolute inset-0 z-0">
    <img
     src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
     alt="Background"
     className="w-full h-full object-cover opacity-40"
    />
    {/* Gradient Overlay for text readability */}
    <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
   </div>

   <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 flex flex-col items-start justify-center min-h-[600px] lg:min-h-[70vh]">
    <div className="flex max-w-4xl flex-col gap-6">

     {/* Headline with Highlighted Text */}
     <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[1.1]">
      Dall&apos;esperienza <br />
      di ieri, <br />
      progettiamo e <br />
      costruiamo <br />
      <span className="relative inline-block mt-2">
       <span className="relative z-10 px-2 text-white">il futuro di</span>
       <span className="absolute inset-0 -skew-y-2 bg-accent transform origin-bottom-left z-0"></span>
      </span>
      <span className="relative inline-block mt-2 ml-4">
       <span className="relative z-10 px-2 text-white">domani.</span>
       <span className="absolute inset-0 -skew-y-2 bg-accent transform origin-bottom-left z-0"></span>
      </span>
     </h1>

     {/* Subheadline */}
     <p className="max-w-2xl text-lg text-gray-400 md:text-xl font-light leading-relaxed">
      Uniamo la solidità delle costruzioni tradizionali con tecnologie d&apos;avanguardia come la Poliurea a spruzzo.
     </p>

     {/* Buttons */}
     <div className="flex flex-col gap-4 sm:flex-row mt-4">
      <a
       href="#contact"
       className="inline-flex h-14 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-white shadow transition-all hover:bg-accent-hover hover:scale-105"
      >
       Parla con un Tecnico
      </a>
      <a
       href="#poliurea"
       className="inline-flex h-14 items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 text-base font-medium text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 group"
      >
       Scopri la Poliurea
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
       </svg>
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}
