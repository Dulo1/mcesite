import React from 'react';

const PartnerLogos = () => {
  return (
    <section className="bg-surface-muted py-12 border-t border-surface-muted/50">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold text-text-muted tracking-widest text-center mb-8 uppercase">
          I Nostri Partner e Fornitori Tecnici
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <div className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-accent transition-colors cursor-default">
            MAPEI
          </div>
          <div className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-accent transition-colors cursor-default">
            BASF
          </div>
          <div className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-accent transition-colors cursor-default">
            SOPREMA
          </div>
          <div className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-accent transition-colors cursor-default">
            CERTIFICAZIONE CE
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
