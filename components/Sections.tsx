import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Star } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_NUMBER } from '../constants';

export const HowToOrder: React.FC = () => (
  <section id="howto" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-serif font-bold text-brand-dark mb-12">How to Order</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-brand-cream rounded-xl">
          <div className="w-12 h-12 bg-brand-rose text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Browse Menu</h3>
          <p className="text-gray-600">Choose your favorite dadih and desserts. Add them to your cart.</p>
        </div>
        <div className="p-6 bg-brand-cream rounded-xl">
          <div className="w-12 h-12 bg-brand-rose text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Fill Details</h3>
          <p className="text-gray-600">Review your cart and fill in your delivery or pickup details.</p>
        </div>
        <div className="p-6 bg-brand-cream rounded-xl">
          <div className="w-12 h-12 bg-brand-rose text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">Confirm on WhatsApp</h3>
          <p className="text-gray-600">Send the generated order summary to us on WhatsApp to confirm.</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-500 bg-blue-50 inline-block px-4 py-2 rounded-full">
        Note: Please order at least 1 day in advance for large quantities.
      </p>
    </div>
  </section>
);

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-16 bg-brand-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif font-bold text-brand-dark text-center mb-12">What They Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-brand-pink/20">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"{t.text}"</p>
            <p className="text-brand-rose font-bold text-sm">- {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer id="contact" className="bg-brand-dark text-brand-cream py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-white">Ilham Rasa Desert</h3>
          <p className="text-gray-400 mb-4">Homemade dadih and dessert for your sweet moments.</p>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <div className="flex items-center text-gray-400">
                <Instagram className="w-5 h-5 mr-2" /> @ilhamrasadesert
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" /> Petaling Jaya, Selangor
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5 mr-2" /> +{WHATSAPP_NUMBER}
            </a>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-dark bg-brand-pink hover:bg-brand-rose hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
          </a>
        </div>

        <div>
           <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
           <ul className="space-y-2 text-gray-400">
             <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white">Home</button></li>
             <li><span className="text-gray-500">Menu</span></li>
             <li><span className="text-gray-500">How to Order</span></li>
           </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ilham Rasa Desert. All rights reserved.
      </div>
    </div>
  </footer>
);