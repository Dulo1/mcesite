import React from 'react';

const TrustBar = () => {
 const stats = [
  { value: "20+", label: "Anni di Esperienza" },
  { value: "500+", label: "Progetti Completati" },
  { value: "ISO 9001", label: "Certificati" },
  { value: "100%", label: "Eco-Sostenibile" }
 ];

 return (
  <section className="py-8 bg-brand-black text-white">
   <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
     {stats.map((stat, index) => (
      <div key={index} className="flex flex-col items-center text-center w-full md:w-1/4">
       <span className="text-2xl md:text-3xl font-bold font-heading text-brand-gold mb-1">
        {stat.value}
       </span>
       <span className="text-sm md:text-base font-body text-gray-300 uppercase tracking-wider">
        {stat.label}
       </span>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default TrustBar;
