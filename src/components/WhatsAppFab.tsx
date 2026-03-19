import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';

interface WhatsAppFabProps {
  message?: string;
}

const WhatsAppFab = ({ message = 'Hi! I\'m interested in Mehtab Aquarium products.' }: WhatsAppFabProps) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-float"
      style={{ background: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
};

export default WhatsAppFab;
export { WHATSAPP_NUMBER };
