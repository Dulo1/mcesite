import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const ProjectGallery = () => {
  return (
    <section className="bg-primary-dark py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block font-body">
            Portfolio Lavori
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            I Nostri Cantieri
          </h2>
        </div>

        {/* Masonry-lite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Item 1 - Large Span */}
          <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center group hover:bg-white/10 transition-colors relative cursor-pointer">
            <ImageIcon className="w-12 h-12 text-white/20 group-hover:text-accent group-hover:scale-110 transition-all" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-primary-dark/80 text-white px-3 py-1 text-sm rounded-md font-bold">Ristrutturazione Civile</span>
            </div>
          </div>

          {/* Item 2 - Wide */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center group hover:bg-white/10 transition-colors relative cursor-pointer">
            <ImageIcon className="w-10 h-10 text-white/20 group-hover:text-accent group-hover:scale-110 transition-all" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-primary-dark/80 text-white px-3 py-1 text-sm rounded-md font-bold">Edilizia Industriale</span>
            </div>
          </div>

          {/* Item 3 - Standard */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center group hover:bg-white/10 transition-colors relative cursor-pointer">
            <ImageIcon className="w-8 h-8 text-white/20 group-hover:text-accent group-hover:scale-110 transition-all" />
          </div>

          {/* Item 4 - Standard */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center group hover:bg-white/10 transition-colors relative cursor-pointer">
            <ImageIcon className="w-8 h-8 text-white/20 group-hover:text-accent group-hover:scale-110 transition-all" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
