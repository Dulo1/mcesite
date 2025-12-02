import Link from 'next/link';

export default function Navbar() {
 return (
  <nav className="sticky top-0 z-50 w-full bg-primary-dark border-b border-white/10">
   <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
    {/* Logo / Brand */}
    <Link href="/" className="flex items-center gap-3">
     <div className="h-10 w-10 rounded bg-accent flex items-center justify-center text-primary-dark font-bold text-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
     </div>
     <div className="flex flex-col leading-none">
      <span className="text-lg font-bold tracking-wide text-white font-display uppercase">MONTAGNA</span>
      <span className="text-xs tracking-[0.2em] text-accent uppercase">COSTRUZIONI</span>
     </div>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8">
     <Link href="#" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
      La Visione
     </Link>
     <Link href="#" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
      Servizi
     </Link>
     <Link href="#" className="text-sm font-medium text-accent hover:text-white transition-colors flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
       <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
      </svg>
      Poliurea System
     </Link>
     <Link href="#" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
      Il Metodo
     </Link>
    </div>

    {/* CTA Button */}
    <div className="hidden md:block">
     <Link
      href="#contact"
      className="inline-flex h-10 items-center justify-center rounded-sm bg-accent px-6 text-sm font-bold text-white shadow transition-all hover:bg-accent-hover hover:scale-105"
     >
      Richiedi Sopralluogo
     </Link>
    </div>

    {/* Mobile Menu Toggle */}
    <button className="md:hidden p-2 text-white hover:text-accent">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
     </svg>
    </button>
   </div>
  </nav>
 );
}
