import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Bell, SlidersHorizontal } from 'lucide-react';
import CategoryPills from '@/components/CategoryPills';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCat = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [activeCategory, search]);

  const groupedByCategory = useMemo(() => {
    if (activeCategory !== 'all') return null;
    const groups: Record<string, typeof products> = {};
    products.forEach((p) => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [activeCategory]);

  return (
    <div className="pb-24 min-h-screen">
      {/* Navbar */}
      <div className="glass sticky top-0 z-40 px-4 py-3 flex items-center justify-between" style={{ borderRadius: '0 0 20px 20px' }}>
        <h1 className="text-lg font-bold">
          <span className="text-white">Mehtab </span>
          <span className="text-primary">Aquarium</span>
        </h1>
        <div className="flex items-center gap-3">
          <Search size={20} className="text-white/70" />
          <Bell size={20} className="text-white/70" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pt-4">
        <div className="glass-sm flex items-center gap-2 px-4 py-2.5">
          <Search size={16} className="text-white/40" />
          <input
            type="text"
            placeholder="Search fish, aquariums, plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 outline-none font-light"
          />
          <SlidersHorizontal size={16} className="text-white/40" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 pt-3">
        <CategoryPills active={activeCategory} onSelect={setActiveCategory} />
      </div>

      {/* Products */}
      <div className="px-4 pt-4">
        {activeCategory === 'all' && groupedByCategory ? (
          Object.entries(groupedByCategory).map(([cat, items]) => {
            const catLabel = categories.find((c) => c.id === cat)?.label || cat;
            return (
              <section key={cat} className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-base font-bold text-white">{catLabel}</h2>
                  <button onClick={() => setActiveCategory(cat)} className="text-primary text-xs font-medium">See All</button>
                </div>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                  {items.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              </section>
            );
          })
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((p) => (
              <div key={p.id} className="w-full">
                <div
                  className="glass overflow-hidden cursor-pointer group"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="relative h-32 overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-2 left-2 glass-sm px-2.5 py-1">
                      <span className="text-[11px] font-semibold text-white">{p.priceLabel}</span>
                    </div>
                    {p.badge === 'premium' && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white glow-purple" style={{ background: '#9B59B6' }}>
                        👑 Premium
                      </div>
                    )}
                    {p.badge === 'beginner' && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white glow-green" style={{ background: 'rgba(76,175,80,0.8)' }}>
                        ✅ Beginner
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white truncate">{p.name}</h3>
                    <p className="text-[10px] text-white/50 font-light truncate">{p.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {filtered.length === 0 && (
          <p className="text-white/40 text-center py-12 font-light">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
