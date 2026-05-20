import React from 'react';
import { Home, Factory, Wrench } from 'lucide-react';

const EdiliziaServices = () => {
  return (
    <section className="bg-surface py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-surface-muted p-10 rounded-2xl border border-surface-muted/50 hover:border-accent/30 hover:shadow-lg transition-all group">
            <Home className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-text-main mb-4">
              Ristrutturazioni Civili
            </h3>
            <p className="text-text-muted font-body leading-relaxed text-lg">
              Trasformiamo abitazioni e condomini con interventi &apos;chiavi in mano&apos;. Dalla demolizione alle finiture, gestiamo ogni fase con precisione e rispetto dei tempi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-muted p-10 rounded-2xl border border-surface-muted/50 hover:border-accent/30 hover:shadow-lg transition-all group">
            <Factory className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-text-main mb-4">
              Edilizia Industriale
            </h3>
            <p className="text-text-muted font-body leading-relaxed text-lg">
              Costruzione e manutenzione di capannoni, magazzini e strutture produttive. Lavoriamo minimizzando l&apos;impatto sulle tue attività aziendali.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-muted p-10 rounded-2xl border border-surface-muted/50 hover:border-accent/30 hover:shadow-lg transition-all group">
            <Wrench className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-2xl font-display font-bold text-text-main mb-4">
              Manutenzioni Straordinarie
            </h3>
            <p className="text-text-muted font-body leading-relaxed text-lg">
              Interventi strutturali, rifacimento facciate, tetti e consolidamenti. Ripristiniamo la sicurezza, l&apos;efficienza e il valore del tuo immobile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EdiliziaServices;
