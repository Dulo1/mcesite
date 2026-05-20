import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-text-muted py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Montagna Costruzioni Edili
            </h3>
            <p className="font-body leading-relaxed text-sm opacity-80">
              Dal restauro conservativo all&apos;alta tecnologia in poliurea a spruzzo. Costruiamo e proteggiamo il valore del tuo immobile unendo l&apos;affidabilità artigiana alla migliore innovazione del settore.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Navigazione
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="hover:text-accent transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/servizi/poliurea" className="hover:text-accent transition-colors">
                  Poliurea a Spruzzo
                </Link>
              </li>
              <li>
                <Link href="/servizi/edilizia" className="hover:text-accent transition-colors">
                  Edilizia e Ristrutturazioni
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-accent transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Contatti
            </h4>
            <ul className="flex flex-col gap-4 font-body text-sm">
              <li>
                <a href="tel:+390123456789" className="flex items-start gap-3 hover:text-accent transition-colors group">
                  <Phone className="w-5 h-5 text-white/50 group-hover:text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>+39 012 345 6789</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@montagnacostruzioni.it" className="flex items-start gap-3 hover:text-accent transition-colors group">
                  <Mail className="w-5 h-5 text-white/50 group-hover:text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>info@montagnacostruzioni.it</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  Via Roma, 123<br />
                  00100 Roma (RM)
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Certificazioni
            </h4>
            <div className="flex flex-col gap-2">
              <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <span className="text-white text-sm font-medium tracking-wide">ISO 9001:2015</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3">
                <Leaf className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                <span className="text-white text-sm font-medium tracking-wide">Idoneità HACCP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-white/60">
          <div className="text-center md:text-left">
            &copy; {currentYear} Montagna Costruzioni Edili. Tutti i diritti riservati. | Powered by Dulovico
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>P.IVA: 12345678901</span>
            <span className="hidden md:inline opacity-50">|</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline opacity-50">|</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
