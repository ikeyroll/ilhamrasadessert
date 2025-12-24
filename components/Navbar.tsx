import React, { useState } from 'react';
import { Menu, ShoppingBag, X, Globe } from 'lucide-react';
import { PageType, Language } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: PageType, hash?: string) => void;
  currentPage: PageType;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate, currentPage, language, onLanguageChange, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page: PageType, hash?: string) => {
    onNavigate(page, hash);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNav('home')} 
              className="font-serif text-xl sm:text-2xl font-bold text-brand-rose hover:text-brand-dark transition-colors"
            >
              Ilham Rasa
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNav('home')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-brand-rose' : 'text-brand-dark hover:text-brand-rose'
              }`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNav('menu')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'menu' ? 'text-brand-rose' : 'text-brand-dark hover:text-brand-rose'
              }`}
            >
              {t.nav.menu}
            </button>
            <button 
              onClick={() => handleNav('gallery')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'gallery' ? 'text-brand-rose' : 'text-brand-dark hover:text-brand-rose'
              }`}
            >
              {t.nav.gallery}
            </button>
          </div>

          {/* Icons (Language + Cart + Mobile Toggle) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 rounded-full px-2 py-1">
              <button 
                onClick={() => onLanguageChange('en')}
                className={`text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full transition-colors ${language === 'en' ? 'bg-brand-rose text-white' : 'text-gray-500 hover:text-brand-rose'}`}
              >
                EN
              </button>
              <button 
                onClick={() => onLanguageChange('bm')}
                className={`text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full transition-colors ${language === 'bm' ? 'bg-brand-rose text-white' : 'text-gray-500 hover:text-brand-rose'}`}
              >
                BM
              </button>
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 text-brand-dark hover:text-brand-rose transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5 sm:h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-rose rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-brand-dark hover:text-brand-rose focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-pink/20 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button 
              onClick={() => handleNav('home')} 
              className={`text-left block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentPage === 'home' ? 'text-brand-rose bg-brand-pink/10' : 'text-brand-dark hover:bg-brand-pink/10 hover:text-brand-rose'
              }`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNav('menu')} 
              className={`text-left block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentPage === 'menu' ? 'text-brand-rose bg-brand-pink/10' : 'text-brand-dark hover:bg-brand-pink/10 hover:text-brand-rose'
              }`}
            >
              {t.nav.menu}
            </button>
            <button 
              onClick={() => handleNav('gallery')} 
              className={`text-left block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentPage === 'gallery' ? 'text-brand-rose bg-brand-pink/10' : 'text-brand-dark hover:bg-brand-pink/10 hover:text-brand-rose'
              }`}
            >
              {t.nav.gallery}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;