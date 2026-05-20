import React from 'react';
import { ShieldCheck, Leaf, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-display font-semibold text-text-muted mb-6 tracking-wide uppercase text-center md:text-left">
        Le Nostre Certificazioni
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-muted border border-surface-muted/50 rounded-xl p-5 hover:border-accent/50 transition-colors flex flex-col gap-3 group">
          <ShieldCheck className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-base font-display font-bold text-text-main">
            Certificazione ISO 9001
          </h3>
          <p className="text-sm text-text-muted font-body leading-relaxed">
            Standard di qualità rigorosi dalla progettazione alla consegna.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-muted border border-surface-muted/50 rounded-xl p-5 hover:border-accent/50 transition-colors flex flex-col gap-3 group">
          <Leaf className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-base font-display font-bold text-text-main">
            Idoneità HACCP
          </h3>
          <p className="text-sm text-text-muted font-body leading-relaxed">
            Poliurea certificata per l&apos;uso in ambienti alimentari e celle frigo.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-muted border border-surface-muted/50 rounded-xl p-5 hover:border-accent/50 transition-colors flex flex-col gap-3 group">
          <Award className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-base font-display font-bold text-text-main">
            Applicatori Certificati
          </h3>
          <p className="text-sm text-text-muted font-body leading-relaxed">
            Patentino di alta specializzazione per macchinari bi-mixer a spruzzo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
