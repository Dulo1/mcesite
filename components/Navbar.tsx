'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black/95 backdrop-blur-sm text-brand-concrete shadow-md">
   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link href="/" className="text-2xl font-bold font-heading text-white tracking-wide">
     EdilCostruzioni
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-8 font-body items-center">
     <Link href="/" className="hover:text-brand-gold transition-colors duration-200">Home</Link>
     <Link href="#servizi" className="hover:text-brand-gold transition-colors duration-200">Servizi</Link>
     <Link href="#progetti" className="hover:text-brand-gold transition-colors duration-200">Progetti</Link>
     <Link href="#contatti" className="hover:text-brand-gold transition-colors duration-200">Contatti</Link>
    </div>

    {/* Mobile Hamburger Button */}
    <button
     className="md:hidden focus:outline-none text-brand-gold p-2"
     onClick={toggleMenu}
     aria-label="Toggle menu"
    >
     {isOpen ? (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
     ) : (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
     )}
    </button>
   </div>

   {/* Mobile Menu Dropdown */}
   {isOpen && (
    <div className="md:hidden bg-brand-black border-t border-brand-concrete/10 absolute w-full left-0">
     <div className="flex flex-col space-y-4 px-6 py-6 font-body text-lg">
      <Link href="/" className="hover:text-brand-gold transition-colors duration-200 block" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="#servizi" className="hover:text-brand-gold transition-colors duration-200 block" onClick={() => setIsOpen(false)}>Servizi</Link>
      <Link href="#progetti" className="hover:text-brand-gold transition-colors duration-200 block" onClick={() => setIsOpen(false)}>Progetti</Link>
      <Link href="#contatti" className="hover:text-brand-gold transition-colors duration-200 block" onClick={() => setIsOpen(false)}>Contatti</Link>
     </div>
    </div>
   )}
  </nav>
 );
};

export default Navbar;
