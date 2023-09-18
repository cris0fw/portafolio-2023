import { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import MensajesIngles from '../lang/en.json';
import MensajesEspañol from '../lang/es.json';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  let localPorDefecto;
  let mensajesPorDefecto;
  let lang = localStorage.getItem('lang');

  if (lang) {
    localPorDefecto = lang;

    if (lang === 'es') {
      mensajesPorDefecto = MensajesEspañol;
    } else if (lang === 'en') {
      mensajesPorDefecto = MensajesIngles;
    } else {
      localPorDefecto = 'es';
      mensajesPorDefecto = MensajesEspañol;
    }
  }

  const [mensajes, setMensajes] = useState(mensajesPorDefecto);
  const [locale, setLocale] = useState(localPorDefecto);

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case 'es': {
        setMensajes(MensajesEspañol);
        setLocale('es');
        localStorage.setItem('lang', 'es');
        break;
      }
      case 'en': {
        setMensajes(MensajesIngles);
        setLocale('en');
        localStorage.setItem('lang', 'en');
        break;
      }
      default: {
        setMensajes(MensajesEspañol);
        setLocale('es');
        localStorage.setItem('lang', 'es');
      }
    }
  };

  return (
    <IntlProvider locale={locale} messages={mensajes}>
      <LangContext.Provider value={{ establecerLenguaje }}>
        {children}
      </LangContext.Provider>
    </IntlProvider>
  );
};
