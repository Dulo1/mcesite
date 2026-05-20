'use server';

import { Resend } from 'resend';

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Validazione base
  if (!name || !phone || !email || !service) {
    return { success: false, message: 'Per favore, compila tutti i campi obbligatori.' };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Fallback environment per Dev (API Key non trovata nel file .env)
    console.log('--- FALLBACK DEV ENVIRONMENT (Resend) ---');
    console.log('API Key mancante. Ecco i dati del form intercettati:');
    console.log({ name, phone, email, service, message });
    return { 
      success: true, 
      message: 'Richiesta simulata con successo (Ambiente Dev)! In produzione riceverai un\'email.' 
    };
  }

  // Istanziamo Resend con la chiave API
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'Montagna Costruzioni <onboarding@resend.dev>', // Assicurati di usare un dominio verificato su Resend in produzione
      to: 'info@montagnacostruzioni.it', // La mail di destinazione reale dell'azienda
      subject: `Nuova Richiesta di Sopralluogo da ${name}`,
      text: `
Hai ricevuto una nuova richiesta dal sito web Montagna Costruzioni Edili:

Nome e Cognome: ${name}
Telefono: ${phone}
Email: ${email}
Servizio Richiesto: ${service}

Messaggio/Problema: 
${message || 'Nessun messaggio addizionale inserito.'}
      `,
    });

    if (error) {
      console.error('Errore API Resend:', error);
      return { success: false, message: 'Si è verificato un errore durante l\'invio. Riprova più tardi.' };
    }

    return { success: true, message: 'Richiesta inviata con successo! Ti contatteremo al più presto.' };
  } catch (err) {
    console.error('Errore Action ContactForm:', err);
    return { success: false, message: 'Errore interno del server. Riprova più tardi.' };
  }
}
