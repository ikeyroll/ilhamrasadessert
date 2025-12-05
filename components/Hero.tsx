import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface HeroProps {
  onBrowseMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseMenu }) => {
  return (
    <section id="home" className="relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-brand-cream sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-serif font-extrabold text-brand-dark sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Ilham Rasa Desert</span>{' '}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Homemade dadih and <span className="italic text-brand-rose">manis manis</span> dessert from Petaling Jaya, ready for your next jamuan, office event, or craving.
              </p>
              
              <div className="mt-5 flex flex-wrap gap-2 text-sm text-gray-400 font-medium tracking-wide uppercase sm:justify-center lg:justify-start">
                <span className="bg-white/50 px-2 py-1 rounded">Halal Ingredients</span>
                <span className="hidden sm:inline">•</span>
                <span className="bg-white/50 px-2 py-1 rounded">Freshly Made</span>
                <span className="hidden sm:inline">•</span>
                <span className="bg-white/50 px-2 py-1 rounded">Suitable for Jamuan</span>
              </div>

              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <button
                    onClick={onBrowseMenu}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-rose hover:bg-rose-400 md:py-4 md:text-lg transition-all transform hover:scale-105"
                  >
                    Browse Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ilham%20Rasa%20Desert,%20I%20would%20like%20to%20know%20more...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-brand-rose text-base font-medium rounded-md text-brand-rose bg-white hover:bg-brand-pink/10 md:py-4 md:text-lg transition-all"
                  >
                    Order via WhatsApp
                    <MessageCircle className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
          alt="Delicious desserts on table"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream to-transparent lg:via-brand-cream/20"></div>
      </div>
    </section>
  );
};

export default Hero;