import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tips = [
  { icon: '✅', title: 'Best Starter Fish', text: 'Koi Carp & Goldfish — hardy, colorful, and forgiving of beginner mistakes.' },
  { icon: '✅', title: 'Recommended Starter Tank', text: '24×12×15 inches — perfect size for 4-6 small fish to start.' },
  { icon: '✅', title: 'Must-Have Equipment', text: 'Filter + Pump + Amazon Plant — the three essentials for every tank.' },
  { icon: '⚠️', title: 'Let Fish Adjust', text: 'Let fish float in the bag for 15 minutes before releasing into the tank.' },
  { icon: '⚠️', title: 'Feed Only 2x Per Day', text: 'Overfeeding is the #1 killer. Give small amounts, twice daily.' },
  { icon: '⚠️', title: 'No Full Water Change', text: 'If your filter is running, never do a full water change — 25% every week is enough.' },
  { icon: '⚠️', title: 'Don\'t Mix Sources', text: 'Do not mix fish from different shops repeatedly — stress and disease risk increases.' },
  { icon: '❄️', title: 'Winter Care', text: 'Maintain water temperature carefully in winter. Fish are extremely sensitive to cold.' },
  { icon: '🐟', title: 'Bigger Tank = Happier Fish', text: 'A larger tank means faster growth, less disease, and more vibrant colors.' },
  { icon: '🚫', title: 'Don\'t Rush Introduction', text: 'Do not add fish to tank immediately after transport — always wait 15 minutes.' },
];

const BeginnerGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 min-h-screen">
      {/* Navbar */}
      <div className="glass sticky top-0 z-40 px-4 py-3 flex items-center gap-3" style={{ borderRadius: '0 0 20px 20px' }}>
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={18} className="text-white" />
        </button>
        <h1 className="text-sm font-bold text-white">Beginner's Guide</h1>
      </div>

      {/* Hero */}
      <div className="px-4 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-white leading-tight">New to Aquariums?<br /><span className="text-primary">We've Got You.</span></h1>
      </div>

      {/* Tips */}
      <div className="px-4 pt-4 space-y-3">
        {tips.map((tip, i) => (
          <div key={i} className="glass p-4 flex items-start gap-3">
            <span className="text-xl flex-shrink-0">{tip.icon}</span>
            <div>
              <h3 className="text-sm font-bold text-white">{tip.title}</h3>
              <p className="text-xs text-white/60 font-light mt-0.5 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 pt-6">
        <button
          onClick={() => navigate('/shop?category=fish')}
          className="w-full py-3.5 rounded-2xl font-bold text-white text-sm glow-cyan"
          style={{ background: 'linear-gradient(135deg, #00D4FF, #0057B7)' }}
        >
          Shop Beginner Starter Kits
        </button>
      </div>
    </div>
  );
};

export default BeginnerGuide;
