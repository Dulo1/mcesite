import React from 'react';
import { Timer, Hammer, Shield, Droplets } from 'lucide-react';

const PolyureaBenefits = () => {
  return (
    <section className="bg-primary-dark py-20 px-4 text-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            VANTAGGI COMPETITIVI
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Perché scegliere la Poliurea?
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Rispetto alle tradizionali guaine bituminose, la poliurea a spruzzo offre prestazioni tecniche e operative irraggiungibili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-surface/5 border border-surface-muted/20 p-8 rounded-xl hover:bg-surface/10 transition-colors group">
            <Timer className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-white mb-3">Rapidità</h3>
            <p className="text-gray-400 font-body leading-relaxed text-lg">
              Calpestabile in 2 minuti. Indurimento istantaneo per non bloccare le tue attività produttive o commerciali.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface/5 border border-surface-muted/20 p-8 rounded-xl hover:bg-surface/10 transition-colors group">
            <Hammer className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-white mb-3">Zero Demolizioni</h3>
            <p className="text-gray-400 font-body leading-relaxed text-lg">
              Nessun smantellamento. Si applica direttamente sulla vecchia guaina o pavimentazione, risparmiando tempo e costi di smaltimento.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface/5 border border-surface-muted/20 p-8 rounded-xl hover:bg-surface/10 transition-colors group">
            <Shield className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-white mb-3">Durata Estrema</h3>
            <p className="text-gray-400 font-body leading-relaxed text-lg">
              Garantita 10 anni. Crea un manto continuo senza giunture o saldature, resistente a raggi UV, sbalzi termici e radici.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface/5 border border-surface-muted/20 p-8 rounded-xl hover:bg-surface/10 transition-colors group">
            <Droplets className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-white mb-3">Certificata HACCP</h3>
            <p className="text-gray-400 font-body leading-relaxed text-lg">
              Sicura e Atossica. Certificata per l'uso in industrie alimentari, celle frigorifere e serbatoi per l'acqua potabile.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PolyureaBenefits;
