import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface WhatsAppChatProps {
  phoneNumber: string;
}

export default function WhatsAppChat({ phoneNumber }: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultMessage = "Hi Mozahidul! I'm interested in your digital marketing services. Can we discuss my project?";

  const handleSendMessage = () => {
    const finalMessage = message.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    "I need help with SEO",
    "Google Ads management",
    "WordPress website",
    "Digital marketing services"
  ];

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[9000]">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-72 sm:w-80 max-h-[70vh] sm:max-h-[80vh] overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-green-500 text-white p-3 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div>
                <div className="font-semibold text-sm">Mozahidul Islam</div>
                <div className="text-xs text-green-100">Digital Marketing Expert</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body - Scrollable */}
          <div className="p-3 max-h-[calc(70vh-120px)] sm:max-h-[calc(80vh-120px)] overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-3">
              <div className="bg-gray-100 rounded-lg p-2 mb-2">
                <div className="text-xs text-gray-600 mb-1">Mozahidul Islam</div>
                <div className="text-sm text-gray-800">
                  👋 Hi! I'm here to help with your digital marketing needs. What can I assist you with?
                </div>
              </div>
            </div>

            {/* Quick Message Buttons */}
            <div className="mb-3">
              <div className="text-xs text-gray-500 mb-2">Quick messages:</div>
              <div className="grid grid-cols-2 gap-1">
                {quickMessages.map((quickMsg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(quickMsg)}
                    className="text-left p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-md transition-colors border border-gray-200"
                  >
                    {quickMsg}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                rows={2}
              />
            </div>
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="p-3 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <button
              onClick={handleSendMessage}
              className="w-full bg-green-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Send size={16} />
              Send on WhatsApp
            </button>
            <div className="mt-1 text-xs text-gray-500 text-center">
              Redirects to WhatsApp
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'animate-pulse'
        }`}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}