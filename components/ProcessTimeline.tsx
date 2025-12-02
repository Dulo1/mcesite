'use client';

import React, { useEffect, useRef, useState } from 'react';

const ProcessTimeline = () => {
 const steps = [
  {
   title: "Analisi & Diagnostica",
   description: "Non facciamo preventivi al buio. Analizziamo il problema alla radice con strumentazione avanzata.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <circle cx="11" cy="11" r="8"></circle>
     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
   )
  },
  {
   title: "Progettazione su Budget",
   description: "Soluzioni tecniche calibrate sulle tue reali capacità di investimento, senza sorprese finali.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
     <line x1="8" y1="21" x2="16" y2="21"></line>
     <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
   )
  },
  {
   title: "Cantiere 'Clean & Safe'",
   description: "Rispetto rigido delle normative, pulizia giornaliera e zero rischi per la tua proprietà.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
   )
  },
  {
   title: "Certificato di Garanzia",
   description: "Consegna lavori con documentazione tecnica completa e garanzia postuma reale.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
     <path d="M9 12l2 2 4-4"></path>
    </svg>
   )
  }
 ];

 const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      const index = Number(entry.target.getAttribute('data-index'));
      setVisibleSteps((prev) => {
       if (prev.includes(index)) return prev;
       return [...prev, index];
      });
      // Optional: Stop observing once visible
      observer.unobserve(entry.target);
     }
    });
   },
   {
    threshold: 0.1, // Trigger as soon as 10% is visible
    rootMargin: '0px 0px -10% 0px' // Trigger slightly before it hits the bottom
   }
  );

  const elements = containerRef.current?.querySelectorAll('.timeline-step');
  elements?.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
 }, []);

 return (
  <section className="py-24 bg-primary-dark relative overflow-hidden">
   {/* Background Texture/Gradient */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-primary-dark opacity-50"></div>

   <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
    <div className="text-center mb-16">
     <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2 block">
      IL NOSTRO PROCESSO
     </span>
     <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
      Il Metodo Montagna
     </h2>
    </div>

    <div className="relative max-w-4xl mx-auto">
     {/* Vertical Line */}
     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-dashed border-l-2 border-dashed border-white/10 hidden md:block"></div>

     <div className="flex flex-col gap-12 md:gap-24">
      {steps.map((step, index) => (
       <div
        key={index}
        data-index={index}
        className={`timeline-step flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 ease-out transform ${visibleSteps.includes(index)
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
         }`}
       >
        {/* Text Content - Alternating */}
        <div className={`flex-1 text-center md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3 md:text-left'}`}>
         <h3 className="text-xl font-bold font-display text-white mb-2">{step.title}</h3>
         <p className="text-gray-400 font-body leading-relaxed">{step.description}</p>
        </div>

        {/* Icon Marker */}
        <div className="relative z-10 md:order-2 flex-shrink-0">
         <div className={`w-16 h-16 rounded-full bg-primary-dark border-2 border-accent flex items-center justify-center text-accent shadow-[0_0_20px_rgba(197,165,114,0.2)] transition-transform duration-700 delay-300 ${visibleSteps.includes(index) ? 'scale-100' : 'scale-0'
          }`}>
          {step.icon}
         </div>
        </div>

        {/* Empty Space for alignment */}
        <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
};

export default ProcessTimeline;
