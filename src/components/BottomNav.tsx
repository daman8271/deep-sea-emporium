import { Home, ShoppingBag, ShoppingCart, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: ShoppingCart, label: 'Cart', path: '#cart' },
    { icon: MessageCircle, label: 'Contact', path: '/contact' },
  ];

  const handleClick = (path: string) => {
    if (path === '#cart') {
      setIsCartOpen(true);
    } else {
      navigate(path);
    }
  };

  const isActive = (path: string) => {
    if (path === '#cart') return false;
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass px-2 py-2" style={{ borderRadius: '20px 20px 0 0' }}>
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={label}
            onClick={() => handleClick(path)}
            className="flex flex-col items-center gap-1 px-4 py-1 relative transition-all"
          >
            <div className={`p-2 rounded-2xl transition-all ${isActive(path) ? 'bg-primary/20 glow-cyan' : ''}`}>
              <Icon size={22} className={isActive(path) ? 'text-primary' : 'text-white/60'} />
            </div>
            {path === '#cart' && totalItems > 0 && (
              <span className="absolute -top-0.5 right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className={`text-[10px] font-light ${isActive(path) ? 'text-primary' : 'text-white/60'}`}>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
