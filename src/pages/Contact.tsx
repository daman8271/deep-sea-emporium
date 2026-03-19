import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '@/components/WhatsAppFab';

const branches = [
  {
    name: 'Branch 1 — Udhampur',
    address: 'Main Market, Udhampur, Jammu & Kashmir',
    phone: '+91 XXXXXXXXXX',
    email: 'udhampur@mehtabaquarium.com',
    mapUrl: 'https://maps.google.com/?q=Udhampur+Jammu+Kashmir',
  },
  {
    name: 'Branch 2 — Jammu',
    address: 'City Center, Jammu, Jammu & Kashmir',
    phone: '+91 XXXXXXXXXX',
    email: 'jammu@mehtabaquarium.com',
    mapUrl: 'https://maps.google.com/?q=Jammu+City',
  },
];

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 min-h-screen">
      {/* Navbar */}
      <div className="glass sticky top-0 z-40 px-4 py-3 flex items-center gap-3" style={{ borderRadius: '0 0 20px 20px' }}>
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
          <ArrowLeft size={18} className="text-white" />
        </button>
        <h1 className="text-sm font-bold text-white">About Us</h1>
      </div>

      {/* About */}
      <div className="px-4 pt-6">
        <h1 className="text-2xl font-bold text-white leading-tight">About <span className="text-primary">Mehtab Aquarium</span></h1>
        <p className="text-sm text-white/60 font-light leading-relaxed mt-3">
          With over 25 years of experience, Mehtab Aquarium is one of the most trusted names in live fish and custom aquarium setups in Jammu & Kashmir. We stock 19 varieties of fish and source premium species directly from Kolkata. From first-time hobbyists to bulk buyers — restaurants, military clients, and families — we have served them all with care and expertise.
        </p>
      </div>

      {/* Branches */}
      <div className="px-4 pt-6 space-y-3">
        {branches.map((branch) => (
          <div key={branch.name} className="glass p-4 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {branch.name}
            </h3>
            <p className="text-xs text-white/60 font-light">{branch.address}</p>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Phone size={12} className="text-primary" />
              <span>{branch.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Mail size={12} className="text-primary" />
              <span>{branch.email}</span>
            </div>
            {/* Map placeholder */}
            <div className="w-full h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium">
                📍 View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="px-4 pt-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I have a query about Mehtab Aquarium.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center py-3.5 rounded-2xl font-bold text-white text-sm"
          style={{ background: '#25D366' }}
        >
          💬 Chat with us on WhatsApp
        </a>
      </div>

      {/* Social */}
      <div className="px-4 pt-4 flex justify-center gap-4">
        <a href="#" className="glass-sm px-4 py-2 text-xs text-white/70 font-light">📷 Instagram</a>
        <a href="#" className="glass-sm px-4 py-2 text-xs text-white/70 font-light">📘 Facebook</a>
      </div>

      {/* No delivery note */}
      <div className="px-4 pt-6">
        <div className="glass p-4 text-center">
          <p className="text-xs text-white/50 font-light">⚠️ We do not offer home delivery. Please visit your nearest branch.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
