import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative h-48 w-full bg-gray-200">
        <img
          src={`https://picsum.photos/seed/${product.imageSeed}/400/400`}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {(product.tags || []).map((tag, idx) => {
          if (['bestseller', 'popular', 'hot'].includes(tag)) {
            return (
              <span key={idx} className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                {tag}
              </span>
            );
          }
          return null;
        })}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-brand-rose uppercase tracking-wide bg-brand-pink/10 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-serif font-bold text-brand-dark mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-brand-dark">RM{product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-400 block">{product.unit}</span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center justify-center p-2 rounded-full bg-brand-rose text-white hover:bg-rose-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-rose"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;