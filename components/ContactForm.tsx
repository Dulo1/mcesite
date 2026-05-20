'use client';

import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions/contact';
import { CheckCircle } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full h-14 mt-4 flex items-center justify-center bg-accent text-primary-dark font-bold text-lg rounded-sm shadow-md transition-all hover:bg-accent-hover hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
    >
      {pending ? 'Invio in corso...' : 'Richiedi Sopralluogo Gratuito'}
    </button>
  );
};

interface ContactFormProps {
  layout?: 'full' | 'simple';
}

const ContactForm = ({ layout = 'full' }: ContactFormProps) => {
  const [state, formAction] = useActionState(submitContactForm, null);

  const formContent = (
    <div className={`${layout === 'full' ? 'bg-surface p-10 lg:p-16' : 'bg-surface p-8 lg:p-12 shadow-2xl rounded-2xl border border-surface-muted/30 w-full'} flex flex-col justify-center h-full`}>
      {layout === 'simple' && (
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-text-main mb-2">Compila il modulo</h2>
          <p className="text-text-muted text-sm font-body">Verrai ricontattato entro 24 ore dai nostri tecnici per fissare il sopralluogo.</p>
        </div>
      )}
      <form action={formAction} className="flex flex-col gap-6">
        
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b-2 border-surface-muted py-2 text-text-main font-body focus:outline-none focus:border-accent focus:ring-0 transition-colors"
            placeholder="Es. Mario Rossi"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Numero di Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-transparent border-b-2 border-surface-muted py-2 text-text-main font-body focus:outline-none focus:border-accent focus:ring-0 transition-colors"
            placeholder="Es. 333 1234567"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Indirizzo Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b-2 border-surface-muted py-2 text-text-main font-body focus:outline-none focus:border-accent focus:ring-0 transition-colors"
            placeholder="Es. mario.rossi@email.it"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Di cosa hai bisogno? *
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full bg-transparent border-b-2 border-surface-muted py-2 text-text-main font-body focus:outline-none focus:border-accent focus:ring-0 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Seleziona un servizio...</option>
              <option value="Impermeabilizzazione/Poliurea">Impermeabilizzazione / Poliurea</option>
              <option value="Ristrutturazione Civile">Ristrutturazione Civile</option>
              <option value="Edilizia Industriale">Edilizia Industriale</option>
              <option value="Altro">Altro</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Descrivi brevemente il problema (Opzionale)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full bg-transparent border-b-2 border-surface-muted py-2 text-text-main font-body focus:outline-none focus:border-accent focus:ring-0 transition-colors resize-none"
            placeholder="Inserisci dettagli utili per il sopralluogo..."
          ></textarea>
        </div>

        {state && (
          <div className={`p-4 mt-2 rounded border text-sm font-bold shadow-sm ${
            state.success 
              ? 'bg-green-50 text-green-700 border-green-200' 
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>
            {state.message}
          </div>
        )}

        <SubmitButton />
      </form>
    </div>
  );

  if (layout === 'simple') {
    return formContent;
  }

  return (
    <section id="contact" className="w-full bg-surface-muted py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden shadow-2xl border border-surface-muted/30">
          
          <div className="bg-primary-dark p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Infiltrazioni o progetti in stallo? <br className="hidden md:block" />
              <span className="text-accent">Risolviamoli alla radice.</span>
            </h2>
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-10">
              Richiedi un Sopralluogo Gratuito. I nostri tecnici analizzeranno la situazione e ti forniranno un piano d&apos;intervento definitivo.
            </p>
            
            <ul className="flex flex-col gap-6">
              {[
                'Zero vincoli',
                'Preventivo trasparente',
                'Soluzioni in Poliurea garantite'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white font-medium text-lg">
                  <CheckCircle className="text-accent w-7 h-7 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {formContent}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
