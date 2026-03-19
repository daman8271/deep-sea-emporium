import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Bell, Star, ShoppingCart } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showFullDesc, setShowFullDesc] = useState(false);

  const product = getProductById(id || '');
  if (!product) return <div className="min-h-screen flex items-center justify-center text-white">Product not found</div>;

  const specItems = product.specs ? [
    { label: 'Weight', value: product.specs.weight, icon: '⚖️' },
    { label: 'Size', value: product.specs.size, icon: '📏' },
    { label: 'Temperature', value: product.specs.temperature, icon: '🌡️' },
    { label: 'Tank Size', value: product.specs.tankSize, icon: '🏠' },
    { label: 'Age', value: product.specs.age, icon: '⏳' },
    { label: 'Diet', value: product.specs.diet, icon: '🍽️' },
  ] : [];

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Navbar */}
      <div className="glass sticky top-0 z-40 px-4 py-3 flex items-center justify-between" style={{ borderRadius: '0 0 20px 20px' }}>
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={18} className="text-white" />
        </button>
        <h1 className="text-sm font-bold text-white truncate max-w-[200px]">{product.name}</h1>
        <div className="flex items-center gap-3">
          <Search size={18} className="text-white/70" />
          <Bell size={18} className="text-white/70" />
        </div>
      </div>

      {/* Specs Header */}
      {product.specs && (
        <div className="px-4 pt-4">
          <div className="glass p-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-white">Specifications</h2>
            <div className="glass-sm px-3 py-1.5">
              <span className="text-xs font-bold text-primary">{product.priceLabel} / unit</span>
            </div>
          </div>
        </div>
      )}

      {/* Image */}
      <div className="px-4 pt-4">
        <div className="glass overflow-hidden">
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" style={{ borderRadius: '20px' }} />
            {product.badge === 'premium' && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white glow-purple" style={{ background: '#9B59B6' }}>
                👑 Premium
              </div>
            )}
            {product.badge === 'beginner' && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white glow-green" style={{ background: 'rgba(76,175,80,0.8)' }}>
                ✅ Best for Beginners
              </div>
            )}
          </div>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Specs Grid */}
      {specItems.length > 0 && (
        <div className="px-4 pt-4">
          <div className="grid grid-cols-3 gap-2">
            {specItems.map((spec) => (
              <div key={spec.label} className="glass-sm p-3 text-center">
                <span className="text-lg">{spec.icon}</span>
                <p className="text-[10px] text-white/50 font-light mt-1">{spec.label}</p>
                <p className="text-xs text-white font-semibold mt-0.5">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Name & Rating */}
      <div className="px-4 pt-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{product.name}</h2>
          {product.type && <p className="text-xs text-white/50 font-light">{product.type}</p>}
        </div>
        <div className="flex items-center gap-1 glass-sm px-2 py-1">
          <Star size={14} className="text-yellow-400" fill="#facc15" />
          <span className="text-xs font-bold text-white">4.5</span>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pt-3">
        <p className={`text-sm text-white/60 font-light leading-relaxed ${!showFullDesc ? 'line-clamp-3' : ''}`}>
          {product.description}
        </p>
        <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-primary text-xs font-medium mt-1">
          {showFullDesc ? 'Show Less' : 'Read More'}
        </button>
      </div>

      {/* Sticky Add to Cart */}
      <div className="fixed bottom-16 left-0 right-0 z-40 px-4 pb-2">
        <button
          onClick={handleAddToCart}
          className="w-full py-3.5 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 glow-cyan"
          style={{ background: 'linear-gradient(135deg, #00D4FF, #0057B7)' }}
        >
          <ShoppingCart size={18} />
          Add to Cart >>>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
