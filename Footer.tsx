import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="message" className="py-20 px-4 bg-gray-50 dark:bg-zinc-900/50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send a Message</h2>
          <p className="text-gray-500 mt-2">I'll get back to you as soon as possible.</p>
        </div>

        <form
          action="https://formspree.io/f/meokkjkr"
          method="POST"
          className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 dark:border-white/10 relative overflow-hidden animate-scale-in"
          autoComplete="off"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-theme/10 rounded-bl-full pointer-events-none blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-tr-full pointer-events-none blur-2xl"></div>

          <div className="space-y-6 relative z-10">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-theme">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-zinc-700 focus:border-theme focus:ring-2 focus:ring-theme/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-theme">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-zinc-700 focus:border-theme focus:ring-2 focus:ring-theme/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-focus-within:text-theme">Message *</label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-zinc-700 focus:border-theme focus:ring-2 focus:ring-theme/20 outline-none transition-all text-gray-900 dark:text-white resize-none placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-theme text-white font-bold text-lg hover:brightness-110 hover:shadow-lg hover:shadow-theme/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;