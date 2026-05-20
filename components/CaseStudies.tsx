import React from 'react';

const CaseStudies = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 - Span 2 */}
        <div className="md:col-span-2 bg-surface-muted border border-surface-muted/50 rounded-2xl p-8 md:p-10 hover:shadow-xl hover:border-accent/30 transition-all flex flex-col justify-center group">
          <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-bold text-sm rounded-full mb-6 w-max uppercase tracking-wider">
            Settore Industriale
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-text-main mb-8">
            Capannone Logistico 1.200mq
          </h3>
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-bold text-text-main block mb-1">Il Problema:</span>
              <p className="text-text-muted text-lg">Infiltrazioni gravi dal tetto che bloccavano le linee di produzione ad ogni pioggia intensa, causando danni economici continui.</p>
            </div>
            <div>
              <span className="font-bold text-text-main block mb-1">La Soluzione:</span>
              <p className="text-text-muted text-lg">Applicazione di poliurea a spruzzo ad alta densità in 3 giorni, eseguita senza necessità di smantellare la vecchia guaina bituminosa.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800/50 mt-2">
              <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Il Risultato:</span>
              <p className="text-green-800 dark:text-green-300 font-medium">Zero perdite. L&apos;attività produttiva non è mai stata interrotta durante l&apos;esecuzione dei lavori.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-muted border border-surface-muted/50 rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all flex flex-col justify-between group">
          <div>
            <div className="inline-block px-3 py-1 bg-primary-dark/10 dark:bg-white/10 text-primary-dark dark:text-white font-bold text-xs rounded-full mb-5 uppercase tracking-wider">
              Residenziale
            </div>
            <h3 className="text-2xl font-display font-bold text-text-main mb-6">
              Terrazzo Condominiale
            </h3>
            <div className="flex flex-col gap-4 text-base">
              <div>
                <span className="font-bold text-text-main block">Problema:</span>
                <span className="text-text-muted">Crepe strutturali sulla pavimentazione e perdite negli appartamenti sottostanti.</span>
              </div>
              <div>
                <span className="font-bold text-text-main block">Soluzione:</span>
                <span className="text-text-muted">Poliurea a spruzzo poliuretanica calpestabile antiscivolo.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-muted/80">
            <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Risultato:</span>
            <span className="text-text-muted text-sm font-medium">Problema risolto in sole 48 ore, aree fruibili immediatamente dai condomini.</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-muted border border-surface-muted/50 rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all flex flex-col justify-between group">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs rounded-full mb-5 uppercase tracking-wider">
              Sport & Leisure
            </div>
            <h3 className="text-2xl font-display font-bold text-text-main mb-6">
              Piscina Interrata
            </h3>
            <div className="flex flex-col gap-4 text-base">
              <div>
                <span className="font-bold text-text-main block">Problema:</span>
                <span className="text-text-muted">Microlesioni del cemento armato con calo costante del livello dell&apos;acqua.</span>
              </div>
              <div>
                <span className="font-bold text-text-main block">Soluzione:</span>
                <span className="text-text-muted">Rivestimento continuo atossico in poliurea certificata impermeabile.</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-muted/80">
            <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Risultato:</span>
            <span className="text-text-muted text-sm font-medium">Tenuta stagna perfetta al 100%, altissima resistenza chimica al cloro e ai raggi UV.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;
