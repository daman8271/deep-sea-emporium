import { categories } from '@/data/products';

interface CategoryPillsProps {
  active: string;
  onSelect: (id: string) => void;
}

const CategoryPills = ({ active, onSelect }: CategoryPillsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
            active === cat.id
              ? 'bg-primary text-primary-foreground glow-cyan'
              : 'glass-sm text-white/70 hover:text-white'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
