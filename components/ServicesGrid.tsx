import React from 'react';

const ServicesGrid = () => {
 const services = [
  {
   title: "Edilizia Civile & Industriale",
   description: "Dalle fondamenta al tetto. Realizziamo complessi residenziali e strutture industriali con focus su durabilità e design.",
   variant: "light",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
   )
  },
  {
   title: "Ristrutturazioni & Recupero",
   description: "Diamo nuova vita agli edifici esistenti. Interventi strutturali, riqualificazione energetica e restauro conservativo.",
   variant: "light",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
     <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
   )
  },
  {
   title: "Impermeabilizzazioni Speciali",
   description: "Siamo tra i rari specialisti sul territorio certificati per l'applicazione della Poliurea a spruzzo ad alte prestazioni.",
   variant: "dark",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
   )
  }
 ];

 return (
  <section className="py-24 bg-surface-muted">
   <div className="container mx-auto px-4">
    <div className="text-center mb-16">
     <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2 block">
      I NOSTRI AMBITI
     </span>
     <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-dark mb-4">
      Costruzione Integrata
     </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {services.map((service, index) => (
      <div
       key={index}
       className={`
        p-10 rounded-sm transition-all duration-500 group border
        ${service.variant === 'dark'
         ? 'bg-primary-dark text-white border-primary-dark shadow-xl hover:-translate-y-2'
         : 'bg-white text-primary-dark border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-accent'}
       `}
      >
       <div className={`
        w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors duration-300
        ${service.variant === 'dark'
         ? 'bg-white/10 text-accent group-hover:bg-accent group-hover:text-white'
         : 'bg-gray-100 text-primary-dark group-hover:bg-accent group-hover:text-white'}
       `}>
        {service.icon}
       </div>

       <h3 className="text-2xl font-bold font-display mb-4">
        {service.title}
       </h3>

       <p className={`
        font-body leading-relaxed text-lg
        ${service.variant === 'dark' ? 'text-gray-400' : 'text-gray-600'}
       `}>
        {service.description}
       </p>

       {/* Link/Arrow */}
       <div className="mt-8">
        <span className={`text-sm font-bold border-b-2 pb-1 transition-all duration-300 inline-block ${service.variant === 'dark'
          ? 'border-accent text-white group-hover:text-accent group-hover:border-white'
          : 'border-gray-200 text-primary-dark group-hover:border-accent group-hover:text-accent'
         }`}>
         SCOPRI DI PIÙ
        </span>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default ServicesGrid;
