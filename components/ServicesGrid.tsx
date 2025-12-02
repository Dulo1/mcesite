import React from 'react';

const ServicesGrid = () => {
 const services = [
  {
   title: "Nuove Costruzioni",
   description: "Progettazione e realizzazione di edifici residenziali e commerciali con materiali di prima scelta e tecniche all'avanguardia.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-gold mb-4">
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
   )
  },
  {
   title: "Ristrutturazioni",
   description: "Rinnoviamo i tuoi spazi con interventi mirati, dal rifacimento impianti alla riqualificazione energetica completa.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-gold mb-4">
     <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
   )
  },
  {
   title: "Impermeabilizzazioni",
   description: "Soluzioni definitive contro infiltrazioni e umidità, utilizzando le migliori tecnologie come la poliurea a spruzzo.",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-brand-gold mb-4">
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
   )
  }
 ];

 return (
  <section className="py-24 bg-brand-concrete-light">
   <div className="container mx-auto px-4">
    <div className="text-center mb-16">
     <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-black mb-4">
      Le Nostre Specializzazioni
     </h2>
     <p className="text-lg text-brand-concrete-dark max-w-2xl mx-auto font-body">
      Offriamo servizi completi per ogni esigenza edilizia, garantendo qualità e professionalità in ogni fase del progetto.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {services.map((service, index) => (
      <div
       key={index}
       className="bg-white p-8 rounded-lg shadow-sm border border-brand-concrete/20 transition-all duration-300 hover:-translate-y-2 hover:border-b-4 hover:border-brand-gold group"
      >
       <div className="flex justify-center md:justify-start text-brand-gold">
        {service.icon}
       </div>
       <h3 className="text-xl font-bold font-heading text-brand-black mb-3 text-center md:text-left">
        {service.title}
       </h3>
       <p className="text-brand-concrete-dark font-body leading-relaxed text-center md:text-left">
        {service.description}
       </p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default ServicesGrid;
