
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface HeroProps {
  onBrowseMenu: () => void;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ onBrowseMenu, t }) => {
  return (
    <section id="home" className="relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-brand-cream lg:max-w-2xl lg:w-full pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-serif font-extrabold text-brand-dark sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                <span className="block xl:inline">{t.hero.title}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle.split('manis manis')[0]}
                <span className="italic text-brand-rose font-medium">manis manis</span>
                {t.hero.subtitle.split('manis manis')[1]}
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-2 text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest sm:justify-center lg:justify-start">
                {t.hero.tags.map((tag: string, idx: number) => (
                  <React.Fragment key={idx}>
                    <span className="bg-white/70 px-2 py-1 rounded shadow-sm">{tag}</span>
                    {idx < t.hero.tags.length - 1 && <span className="text-gray-300">•</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <button
                  onClick={onBrowseMenu}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-md text-white bg-brand-rose hover:bg-rose-500 shadow-md transition-all transform hover:-translate-y-1"
                >
                  {t.hero.browse}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <div className="mt-3 sm:mt-0">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ilham%20Rasa%20Desert,%20I%20would%20like%20to%20know%20more...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border-2 border-brand-rose text-base font-bold rounded-md text-brand-rose bg-transparent hover:bg-brand-rose/5 transition-all transform hover:-translate-y-1"
                  >
                    {t.hero.whatsapp}
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
          <img
            className="h-full w-full object-cover lg:object-center shadow-inner"
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Signature Layered Desserts"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/10 to-transparent hidden lg:block"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cream to-transparent lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
