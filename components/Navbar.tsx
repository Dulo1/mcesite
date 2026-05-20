'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-surface-muted/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded bg-accent flex items-center justify-center text-primary-dark font-bold text-xl group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-wide text-text-main font-display uppercase group-hover:text-accent transition-colors">MONTAGNA</span>
            <span className="text-xs tracking-[0.2em] text-accent uppercase">COSTRUZIONI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-text-main hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/chi-siamo" className="text-sm font-medium text-text-main hover:text-accent transition-colors">
            Chi Siamo
          </Link>
          <div className="relative group">
            <span className="text-sm font-medium text-text-main hover:text-accent transition-colors cursor-pointer py-2">
              Servizi
            </span>
            <div className="absolute left-0 top-full mt-2 w-48 bg-surface border border-surface-muted/50 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/servizi/poliurea" className="block px-4 py-3 text-sm text-text-main hover:bg-surface-muted hover:text-accent">
                Poliurea a Spruzzo
              </Link>
              <Link href="/servizi/edilizia" className="block px-4 py-3 text-sm text-text-main hover:bg-surface-muted hover:text-accent border-t border-surface-muted/20">
                Edilizia e Ristrutturazioni
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contatti"
            className="inline-flex h-10 items-center justify-center rounded-sm bg-accent px-6 text-sm font-bold text-primary-dark shadow transition-all hover:bg-accent-hover hover:scale-105"
          >
            Richiedi Sopralluogo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-main hover:text-accent focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-surface-muted/50 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-bold text-text-main">
            Home
          </Link>
          <Link href="/chi-siamo" onClick={() => setIsOpen(false)} className="text-base font-bold text-text-main">
            Chi Siamo
          </Link>
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-surface-muted/50">
            <Link href="/servizi/poliurea" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-main">
              Poliurea a Spruzzo
            </Link>
            <Link href="/servizi/edilizia" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-main">
              Edilizia e Ristrutturazioni
            </Link>
          </div>
          <Link
            href="/contatti"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-12 w-full mt-4 items-center justify-center rounded-sm bg-accent px-6 text-base font-bold text-primary-dark shadow transition-all hover:bg-accent-hover"
          >
            Richiedi Sopralluogo
          </Link>
        </div>
      )}
    </nav>
  );
}
