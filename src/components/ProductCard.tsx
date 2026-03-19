import { Product } from '@/data/products';
import { Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="glass min-w-[170px] w-[170px] overflow-hidden cursor-pointer flex-shrink-0 group"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative h-32 overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute top-2 left-2 glass-sm px-2.5 py-1">
          <span className="text-[11px] font-semibold text-white">{product.priceLabel}</span>
        </div>
        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10 backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
          <Heart size={14} className="text-white/70" />
        </button>
        {product.badge === 'premium' && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white glow-purple" style={{ background: '#9B59B6' }}>
            👑 Premium
          </div>
        )}
        {product.badge === 'beginner' && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white glow-green" style={{ background: 'rgba(76,175,80,0.8)' }}>
            ✅ Beginner
          </div>
        )}
      </div>
      <div className="p-3 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-semibold text-white truncate max-w-[120px]">{product.name}</h3>
          <p className="text-[10px] text-white/50 font-light truncate max-w-[120px]">{product.tagline}</p>
        </div>
        <div className="p-1.5 rounded-full bg-white/10">
          <ArrowRight size={14} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
