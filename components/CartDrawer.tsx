import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import { CartItem, CartView, OrderForm } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemove
}) => {
  const [view, setView] = useState<CartView>('list');
  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    type: 'pickup',
    dateTime: '',
    address: '',
    notes: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Construct Message
    let message = `Hi Ilham Rasa Desert, I would like to place an order:\n\n`;
    message += `Name: ${form.name}\n`;
    message += `Phone: ${form.phone}\n\n`;
    
    message += `Order:\n`;
    cartItems.forEach(item => {
      message += `- ${item.quantity} x ${item.name} (RM${item.price.toFixed(2)}) = RM${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: RM${subtotal.toFixed(2)}\n\n`;
    message += `Order type: ${form.type.toUpperCase()}\n`;
    message += `Date & time: ${form.dateTime || 'Not specified'}\n`;
    if (form.type === 'delivery') {
        message += `Address: ${form.address}\n`;
    }
    if (form.notes) {
        message += `Notes: ${form.notes}`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex bg-white shadow-xl transform transition-transform duration-300">
        <div className="flex-1 flex flex-col overflow-y-auto">
          
          {/* Header */}
          <div className="px-4 py-6 bg-brand-cream border-b border-gray-100 sm:px-6 flex items-center justify-between">
             {view === 'checkout' ? (
                 <button onClick={() => setView('list')} className="flex items-center text-brand-dark hover:text-brand-rose">
                     <ArrowLeft className="h-5 w-5 mr-2" /> Back to Cart
                 </button>
             ) : (
                <h2 className="text-lg font-serif font-bold text-brand-dark flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Your Cart
                </h2>
             )}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 py-6 sm:px-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag className="h-16 w-16 text-gray-300" />
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                <p className="text-brand-rose">Add some delicious dadih first!</p>
                <button 
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-brand-rose text-white rounded-md hover:bg-rose-500"
                >
                    Browse Menu
                </button>
              </div>
            ) : (
              <>
                {view === 'list' ? (
                  /* --- List View --- */
                  <div className="space-y-6">
                    <ul className="divide-y divide-gray-100">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-4 flex">
                           <div className="h-16 w-16 w-flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                               <img
                                 src={`https://picsum.photos/seed/${item.imageSeed}/100/100`}
                                 alt={item.name}
                                 className="h-full w-full object-cover"
                               />
                           </div>
                           <div className="ml-4 flex flex-1 flex-col">
                             <div>
                               <div className="flex justify-between text-base font-medium text-gray-900">
                                 <h3>{item.name}</h3>
                                 <p className="ml-4">RM{(item.price * item.quantity).toFixed(2)}</p>
                               </div>
                               <p className="mt-1 text-sm text-gray-500">{item.unit}</p>
                             </div>
                             <div className="flex flex-1 items-end justify-between text-sm">
                               <div className="flex items-center border rounded-md">
                                   <button 
                                     onClick={() => onUpdateQty(item.id, -1)}
                                     className="p-1 hover:bg-gray-100 text-gray-600"
                                     disabled={item.quantity <= 1}
                                   >
                                     <Minus className="h-4 w-4" />
                                   </button>
                                   <span className="px-2 font-medium">{item.quantity}</span>
                                   <button 
                                     onClick={() => onUpdateQty(item.id, 1)}
                                     className="p-1 hover:bg-gray-100 text-gray-600"
                                   >
                                     <Plus className="h-4 w-4" />
                                   </button>
                               </div>
                               <button
                                 type="button"
                                 onClick={() => onRemove(item.id)}
                                 className="font-medium text-red-500 hover:text-red-600 flex items-center"
                               >
                                 <Trash2 className="h-4 w-4 mr-1" /> Remove
                               </button>
                             </div>
                           </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-100 pt-6">
                        <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
                            <p>Total</p>
                            <p>RM{subtotal.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 mb-6">
                            Shipping and taxes calculated via WhatsApp.
                        </p>
                        <button
                            onClick={() => setView('checkout')}
                            className="w-full flex items-center justify-center rounded-md border border-transparent bg-brand-rose px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-500"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                  </div>
                ) : (
                  /* --- Checkout View --- */
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800 mb-4">
                        Please fill in your details. We will generate a WhatsApp message for you to send to confirm the order.
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-rose focus:ring-brand-rose sm:text-sm p-2 border"
                            value={form.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-rose focus:ring-brand-rose sm:text-sm p-2 border"
                            value={form.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <span className="block text-sm font-medium text-gray-700">Order Type</span>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input
                                    id="pickup"
                                    name="type"
                                    type="radio"
                                    value="pickup"
                                    checked={form.type === 'pickup'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 border-gray-300 text-brand-rose focus:ring-brand-rose"
                                />
                                <label htmlFor="pickup" className="ml-3 block text-sm font-medium text-gray-700">Self Pickup</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="delivery"
                                    name="type"
                                    type="radio"
                                    value="delivery"
                                    checked={form.type === 'delivery'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 border-gray-300 text-brand-rose focus:ring-brand-rose"
                                />
                                <label htmlFor="delivery" className="ml-3 block text-sm font-medium text-gray-700">Delivery</label>
                            </div>
                        </div>
                    </div>

                    {form.type === 'delivery' && (
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address <span className="text-red-500">*</span></label>
                            <textarea
                                name="address"
                                id="address"
                                rows={3}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-rose focus:ring-brand-rose sm:text-sm p-2 border"
                                value={form.address}
                                onChange={handleInputChange}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">Preferred Date & Time</label>
                        <input
                            type="text"
                            name="dateTime"
                            id="dateTime"
                            placeholder="e.g. Tomorrow 3PM"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-rose focus:ring-brand-rose sm:text-sm p-2 border"
                            value={form.dateTime}
                            onChange={handleInputChange}
                        />
                        <p className="mt-1 text-xs text-gray-500">Orders should be made at least 1 day in advance for large quantities.</p>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Extra Notes (Optional)</label>
                        <textarea
                            name="notes"
                            id="notes"
                            rows={2}
                            placeholder="e.g. Mix flavors: 4 Choc, 4 Milk, 4 Strawberry"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-rose focus:ring-brand-rose sm:text-sm p-2 border"
                            value={form.notes}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Confirm on WhatsApp
                        </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;