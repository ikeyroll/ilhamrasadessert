
import React from 'react';
import { MapPin, Phone, MessageCircle, Music, Star } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_NUMBER } from '../constants';
import { PageType } from '../types';

interface SectionProps {
  t: any;
}

export const HowToOrder: React.FC<SectionProps> = ({ t }) => (
  <section id="howto" className="py-16 bg-white text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif font-bold text-brand-dark mb-12">{t.sections.howToOrder}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.sections.steps.map((step: any, idx: number) => (
          <div key={idx} className="p-6 bg-brand-cream rounded-xl">
            <div className="w-12 h-12 bg-brand-rose text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{idx + 1}</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-500 bg-blue-50 inline-block px-4 py-2 rounded-full">
        {t.sections.note}
      </p>
    </div>
  </section>
);

export const Testimonials: React.FC<SectionProps> = ({ t }) => (
  <section id="testimonials" className="py-16 bg-brand-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif font-bold text-brand-dark text-center mb-12">{t.sections.testimonials}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t_data, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-brand-pink/20">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"{t_data.text}"</p>
            <p className="text-brand-rose font-bold text-sm">- {t_data.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

interface FooterProps {
  onNavigate: (page: PageType) => void;
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => (
  <footer id="contact" className="bg-brand-dark text-brand-cream py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ilham Rasa Desert</h3>
          <p className="text-gray-400 mb-6 max-w-sm">{t.sections.footer.desc}</p>
          <div className="flex space-x-4">
             <a 
               href="https://www.tiktok.com/@elinda_idries" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center text-gray-400 hover:text-white transition-colors group"
             >
                <Music className="w-5 h-5 mr-2 group-hover:text-brand-rose transition-colors" /> 
                <span className="font-medium">@elinda_idries</span>
             </a>
          </div>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">{t.sections.footer.quickLinks}</h4>
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className="text-gray-400 hover:text-brand-rose transition-colors font-medium text-left"
              >
                {t.nav.home}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('menu')} 
                className="text-gray-400 hover:text-brand-rose transition-colors font-medium text-left"
              >
                {t.nav.menu}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('gallery')} 
                className="text-gray-400 hover:text-brand-rose transition-colors font-medium text-left"
              >
                {t.nav.gallery}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">{t.sections.footer.contact}</h4>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-brand-rose" /> 
              <span>Petaling Jaya, Selangor</span>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center text-gray-300 hover:text-white transition-colors text-left">
              <Phone className="w-5 h-5 mr-3 text-brand-rose" /> 
              <span>+{WHATSAPP_NUMBER}</span>
            </a>
          </div>
          <div className="mt-8">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center px-6 py-3 border-2 border-brand-rose rounded-full shadow-sm text-sm font-bold text-brand-rose hover:bg-brand-rose hover:text-white transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ilham Rasa Desert. {t.sections.footer.rights}
      </div>
    </div>
  </footer>
);
