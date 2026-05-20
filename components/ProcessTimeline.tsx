'use client';

import React, { useEffect, useRef, useState } from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "Analisi & Diagnostica",
      description: "Analizziamo il problema alla radice con strumentazione avanzata, senza preventivi al buio."
    },
    {
      num: "02",
      title: "Progetto su Budget",
      description: "Soluzioni calibrate sulle tue reali capacità di investimento, zero sorprese finali."
    },
    {
      num: "03",
      title: "Cantiere 'Clean & Safe'",
      description: "Rispetto rigido delle normative e pulizia giornaliera per la massima sicurezza."
    },
    {
      num: "04",
      title: "Garanzia Diretta",
      description: "Consegna dei lavori con documentazione tecnica completa e garanzia postuma reale."
    }
  ];

  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.timeline-step');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-6 md:py-10" ref={containerRef}>
      {/* Horizontal Line for Desktop */}
      <div className="hidden md:block relative w-full h-px bg-surface-muted mb-8 mt-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-step flex flex-col items-start transition-all duration-700 ease-out transform ${
              visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Step Number */}
            <span className="text-3xl font-display font-bold text-accent mb-4 md:-mt-[58px] md:bg-surface md:pr-4">
              {step.num}
            </span>
            
            {/* Title */}
            <h3 className="text-lg font-display font-semibold text-text-main mb-2">
              {step.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm font-body text-text-muted leading-relaxed line-clamp-3">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
