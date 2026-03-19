import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fish } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';
import CategoryPills from '@/components/CategoryPills';
import ProductCard from '@/components/ProductCard';
import { getFeaturedFish, getFeaturedAquariums, getFeaturedPlants, getProductsByCategory } from '@/data/products';
import { WHATSAPP_NUMBER } from '@/components/WhatsAppFab';

const Home = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const featuredFish = getFeaturedFish();
  const featuredAquariums = getFeaturedAquariums();
  const featuredPlants = getFeaturedPlants();

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    if (id !== 'all') navigate(`/shop?category=${id}`);
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img src={heroBg} alt="Mehtab Aquarium" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,28,44,0.3) 0%, rgba(4,28,44,0.85) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
          <p className="text-white/60 text-xs font-light tracking-widest uppercase">Welcome to</p>
          <h1 className="text-3xl font-bold">
            <span className="text-white">Mehtab </span>
            <span className="text-primary">Aquarium</span>
          </h1>
          <p className="text-white text-lg font-bold leading-tight">Your house without an aquarium is just walls.</p>
          <p className="text-white/60 text-xs font-light leading-relaxed">
            Visit us at our stores in Udhampur & Jammu — 25 years of trust, 19 varieties of fish, custom aquariums built for you.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-2 flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white glow-cyan transition-all"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #0057B7)' }}
          >
            <Fish size={18} />
            Get Started
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-4">
        <CategoryPills active={activeCategory} onSelect={handleCategorySelect} />
      </section>

      {/* Popular Fish */}
      <section className="px-4 py-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">Popular Fish</h2>
          <button onClick={() => navigate('/shop?category=fish')} className="text-primary text-xs font-medium">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredFish.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Custom Aquariums */}
      <section className="px-4 py-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">Custom Aquariums</h2>
          <button onClick={() => navigate('/custom-aquarium')} className="text-primary text-xs font-medium">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredAquariums.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Plants & Accessories */}
      <section className="px-4 py-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-white">Plants & Accessories</h2>
          <button onClick={() => navigate('/shop?category=plant')} className="text-primary text-xs font-medium">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {featuredPlants.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Maintenance Banner */}
      <section className="px-4 py-3">
        <div className="glass p-5 space-y-2">
          <h3 className="text-white font-bold text-base">🧹 Aquarium Cleaning & Health Check</h3>
          <p className="text-white/60 text-xs font-light">Professional maintenance service starting from <span className="text-primary font-bold">₹499</span></p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I\'d like to book an aquarium maintenance service.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 px-4 py-2 rounded-xl text-xs font-bold text-white"
            style={{ background: '#25D366' }}
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Beginner's Corner */}
      <section className="px-4 py-3">
        <div className="glass p-5 space-y-2">
          <h3 className="text-white font-bold text-base">🐟 New to Aquariums?</h3>
          <p className="text-white/60 text-xs font-light">Start your aquarium journey with our beginner's guide. Learn everything you need to know!</p>
          <button
            onClick={() => navigate('/beginner-guide')}
            className="mt-1 px-4 py-2 rounded-xl text-xs font-bold text-primary-foreground bg-primary/80 hover:bg-primary transition-colors"
          >
            View Guide
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
