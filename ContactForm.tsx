import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const ContactGrid: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Connect</h2>
        <div className="w-16 h-1 bg-theme mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400">My digital footprint.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOCIAL_LINKS.map((link, index) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${index * 100}ms` }}
            className="group relative flex items-center p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden opacity-0 animate-slide-up"
          >
            {/* Background Color Hover Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: link.color }}
            ></div>

            {/* Icon */}
            <div className="relative shrink-0 w-16 h-16 mr-4 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
               {link.iconUrl ? (
                 <img src={link.iconUrl} alt={link.platform} className="w-10 h-10 object-contain" />
               ) : (
                 <ExternalLink className="text-gray-400" />
               )}
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 z-10">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-theme transition-colors">
                  {link.platform}
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate mb-1 line-clamp-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {link.description}
              </p>
              <p className="text-xs font-mono text-theme/80 truncate font-medium">
                {link.username}
              </p>
            </div>
            
            {/* Arrow Decoration */}
            <div className="absolute top-4 right-4 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
               <ExternalLink size={16} className="text-gray-400 group-hover:text-theme" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactGrid;