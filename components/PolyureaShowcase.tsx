'use client';

import React, { useState, useRef, useEffect } from 'react';

const PolyureaShowcase = () => {
 const [sliderPosition, setSliderPosition] = useState(50);
 const [isDragging, setIsDragging] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
  if (!containerRef.current) return;

  const containerRect = containerRef.current.getBoundingClientRect();
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

  let position = ((clientX - containerRect.left) / containerRect.width) * 100;
  position = Math.max(0, Math.min(100, position));

  setSliderPosition(position);
 };

 const handleMouseDown = () => setIsDragging(true);
 const handleMouseUp = () => setIsDragging(false);

 // Global event listeners for smooth dragging outside the component
 useEffect(() => {
  if (isDragging) {
   window.addEventListener('mousemove', handleMove);
   window.addEventListener('mouseup', handleMouseUp);
   window.addEventListener('touchmove', handleMove);
   window.addEventListener('touchend', handleMouseUp);
  } else {
   window.removeEventListener('mousemove', handleMove);
   window.removeEventListener('mouseup', handleMouseUp);
   window.removeEventListener('touchmove', handleMove);
   window.removeEventListener('touchend', handleMouseUp);
  }

  return () => {
   window.removeEventListener('mousemove', handleMove);
   window.removeEventListener('mouseup', handleMouseUp);
   window.removeEventListener('touchmove', handleMove);
   window.removeEventListener('touchend', handleMouseUp);
  };
 }, [isDragging]);

 return (
  <section id="poliurea" className="py-24 bg-surface">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

     {/* Left Column: Copy */}
     <div className="flex flex-col gap-8">
      <div>
       <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-dark mb-4 leading-tight">
        Poliurea a Spruzzo: <br />
        <span className="text-accent">L'Impermeabilizzazione Definitiva</span>
       </h2>
       <p className="text-xl text-gray-500 font-medium">
        Indurisce in 10 secondi. Dura 30 anni.
       </p>
      </div>

      <ul className="flex flex-col gap-4">
       {[
        "300% Elastica - Segue i movimenti della struttura",
        "Senza Giunzioni - Manto unico continuo",
        "Calpestabile subito - Agibilità immediata"
       ].map((item, index) => (
        <li key={index} className="flex items-center gap-3 text-lg text-text-main">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-accent shrink-0">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
         </svg>
         {item}
        </li>
       ))}
      </ul>

      <div className="mt-4">
       <button className="inline-flex items-center justify-center h-12 px-8 rounded-sm border-2 border-primary-dark text-primary-dark font-bold hover:bg-primary-dark hover:text-white transition-all duration-300">
        Scarica Scheda Tecnica
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-4 h-4">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75V1.5m0 0l3 3m-3-3l-3 3" />
        </svg>
       </button>
      </div>
     </div>

     {/* Right Column: Before/After Slider */}
     <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl select-none group" ref={containerRef}>

      {/* Before Image (Background) - Cemento Crepato */}
      <img
       src="https://placehold.co/800x600/555/FFF?text=Cemento+Crepato+(Before)"
       alt="Before Polyurea"
       className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm z-10">
       PRIMA
      </div>

      {/* After Image (Foreground) - Poliurea Applicata */}
      <div
       className="absolute inset-0 overflow-hidden"
       style={{ width: `${sliderPosition}%` }}
      >
       <img
        src="https://placehold.co/800x600/007bff/FFF?text=Poliurea+Applicata+(After)"
        alt="After Polyurea"
        className="absolute inset-0 w-full h-full object-cover max-w-none"
        style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
       />
       <div className="absolute top-4 left-4 bg-accent/90 text-white px-3 py-1 rounded text-sm font-bold backdrop-blur-sm z-10">
        DOPO
       </div>
      </div>

      {/* Slider Handle */}
      <div
       className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
       style={{ left: `${sliderPosition}%` }}
       onMouseDown={handleMouseDown}
       onTouchStart={handleMouseDown}
      >
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
       </div>
      </div>

      {/* Interaction Hint */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none transition-opacity duration-500 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
       Trascina per vedere l'effetto
      </div>

     </div>

    </div>
   </div>
  </section>
 );
};

export default PolyureaShowcase;
