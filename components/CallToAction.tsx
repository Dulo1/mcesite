import React from 'react';
import Link from 'next/link';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CallToAction = ({
  title = "Pronto a risolvere definitivamente il problema delle infiltrazioni?",
  subtitle = "Richiedi ora un sopralluogo gratuito e senza impegno. I nostri tecnici sono pronti a intervenire.",
  buttonText = "Richiedi Sopralluogo Gratuito",
  buttonHref = "/contatti"
}: CallToActionProps) => {
  return (
    <section className="bg-accent py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-dark mb-6 leading-tight">
          {title}
        </h2>
        
        <p className="text-lg md:text-2xl text-primary-dark/80 font-medium mb-10 max-w-2xl font-body">
          {subtitle}
        </p>

        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center bg-primary-dark text-white hover:bg-primary transition-colors px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:-translate-y-1 transform duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
