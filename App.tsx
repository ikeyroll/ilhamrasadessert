import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { HowToOrder, Testimonials, Footer } from './components/Sections';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleNavigate = (page: 'home' | 'menu', hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart`);
  }, []);

  const handleUpdateQty = useCallback((id: string, delta: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero onBrowseMenu={() => handleNavigate('menu')} />
            <HowToOrder />
            <Testimonials />
          </>
        ) : (
          <section id="menu" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-dark">Our Menu</h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Select your favorite desserts to order.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveFromCart}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-up">
          {toast}
        </div>
      )}
    </div>
  );
};

export default App;