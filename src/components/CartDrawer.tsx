import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { WHATSAPP_NUMBER } from './WhatsAppFab';

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    let message = '🛒 *Order from Mehtab Aquarium*\n\n';
    items.forEach((item) => {
      message += `• ${item.product.name} × ${item.quantity} — ₹${item.product.price * item.quantity}\n`;
    });
    message += `\n*Total: ₹${subtotal}*\n\nPlease confirm my order. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={() => setIsCartOpen(false)} />
      <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] glass flex flex-col" style={{ borderRadius: '24px 24px 0 0' }}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="text-lg font-bold text-white">Your Cart ({totalItems})</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full bg-white/10">
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-white/50 text-center py-8 font-light">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="glass-sm p-3 flex items-center gap-3">
                <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white truncate">{item.product.name}</h3>
                  <p className="text-xs text-primary font-semibold">{item.product.priceLabel}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Minus size={14} className="text-white" />
                  </button>
                  <span className="text-white text-sm font-semibold w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Plus size={14} className="text-white" />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.product.id)} className="p-1.5 rounded-full bg-white/10">
                  <X size={14} className="text-white/60" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70 text-sm">Subtotal</span>
              <span className="text-white text-lg font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3.5 rounded-2xl font-bold text-white text-sm glow-cyan transition-all"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #0057B7)' }}
            >
              Order via WhatsApp →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
