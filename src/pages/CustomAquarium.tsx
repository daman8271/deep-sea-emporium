import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '@/components/WhatsAppFab';

const pricingCards = [
  { name: 'Ready-made Aquarium', price: '₹600', desc: 'Simple plug & play tank' },
  { name: 'Basic Setup', price: '₹1,500', desc: '24×12×15 inches — Beginner recommended' },
  { name: 'Standard Setup', price: '₹2,500', desc: '30×12×15 inches — Most popular' },
  { name: 'Custom Range', price: '₹1,500 – ₹1,00,000', desc: 'Built to your exact specs' },
  { name: 'Cabinet Aquarium', price: 'Contact for Price', desc: 'Luxury furniture-style tank' },
];

const CustomAquarium = () => {
  const navigate = useNavigate();

  const whatsappMsg = 'Hi! I\'d like to order a custom aquarium from Mehtab Aquarium. Please guide me.';

  return (
    <div className="pb-24 min-h-screen">
      {/* Navbar */}
      <div className="glass sticky top-0 z-40 px-4 py-3 flex items-center gap-3" style={{ borderRadius: '0 0 20px 20px' }}>
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={18} className="text-white" />
        </button>
        <h1 className="text-sm font-bold text-white">Custom Aquariums</h1>
      </div>

      {/* Hero */}
      <div className="px-4 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-white leading-tight">Design Your Dream<br /><span className="text-primary">Aquarium</span></h1>
        <p className="text-white/50 text-sm font-light mt-2">Custom built in ~2 days. Every size, every style.</p>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 pt-4 space-y-3">
        {pricingCards.map((card) => (
          <div key={card.name} className="glass p-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white">{card.name}</h3>
              <p className="text-[11px] text-white/50 font-light">{card.desc}</p>
            </div>
            <div className="glass-sm px-3 py-1.5 flex-shrink-0 ml-3">
              <span className="text-xs font-bold text-primary">{card.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Sizes */}
      <div className="px-4 pt-6">
        <h2 className="text-lg font-bold text-white mb-3">📐 Popular Sizes</h2>
        <div className="space-y-2">
          <div className="glass-sm p-3 flex justify-between items-center">
            <span className="text-sm text-white">30×12×15 inches</span>
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Most Popular</span>
          </div>
          <div className="glass-sm p-3 flex justify-between items-center">
            <span className="text-sm text-white">24×12×15 inches</span>
            <span className="text-[10px] font-bold text-beginner bg-beginner/10 px-2 py-1 rounded-full">Beginner Recommended</span>
          </div>
        </div>
      </div>

      {/* Fish Capacity */}
      <div className="px-4 pt-6">
        <h2 className="text-lg font-bold text-white mb-3">🐠 Fish Capacity Guide</h2>
        <div className="glass p-4 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-lg">✅</span>
            <p className="text-sm text-white/70 font-light"><span className="text-white font-semibold">6–8 fish</span> = comfortable, healthy</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            <p className="text-sm text-white/70 font-light"><span className="text-white font-semibold">10–12 fish</span> = maximum capacity (strong maintenance required)</p>
          </div>
        </div>
      </div>

      {/* Growth Tip */}
      <div className="px-4 pt-4">
        <div className="glass p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <p className="text-sm text-white/70 font-light"><span className="text-white font-semibold">Bigger tank = faster growth, healthier fish.</span> Always go one size up if you can.</p>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="px-4 pt-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center py-3.5 rounded-2xl font-bold text-white text-sm glow-cyan"
          style={{ background: 'linear-gradient(135deg, #00D4FF, #0057B7)' }}
        >
          Order Your Custom Aquarium on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CustomAquarium;
