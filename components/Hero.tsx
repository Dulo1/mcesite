import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
 return (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
   {/* Background Image */}
   <div className="absolute inset-0 z-0">
    <Image
     src="https://placehold.co/1920x1080"
     alt="Cantiere EdilCostruzioni"
     fill
     className="object-cover"
     priority
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
   </div>

   {/* Content */}
   <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
     <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
      Costruiamo il futuro, <br className="hidden md:block" />
      mattone su mattone.
     </h1>

     <p className="text-lg md:text-xl text-brand-concrete-light font-body max-w-2xl mx-auto delay-200 animate-fade-in-up opacity-0 fill-mode-forwards">
      Eccellenza nell&apos;edilizia residenziale e commerciale dal 2005.
     </p>

     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 delay-400 animate-fade-in-up opacity-0 fill-mode-forwards">
      <Link
       href="#progetti"
       className="px-8 py-4 bg-brand-gold text-brand-black font-bold rounded hover:bg-brand-gold-hover transition-colors duration-300 text-center"
      >
       I Nostri Progetti
      </Link>
      <Link
       href="#contatti"
       className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors duration-300 text-center"
      >
       Richiedi Preventivo
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Hero;
