import React from 'react';

const AboutTerminal: React.FC = () => {
  const codeLines = [
    { text: 'const fahim = {', indent: 0 },
    { text: 'name: "Fahim Rahman",', indent: 1 },
    { text: 'rank: "On Learning Stage",', indent: 1 },
    { text: 'status: "404: Potential Not Found",', indent: 1 },
    { text: 'hobbies: [', indent: 1 },
    { text: '"Coding",', indent: 2 },
    { text: '"Gaming",', indent: 2 },
    { text: '"Photography"', indent: 2 },
    { text: ']', indent: 1 },
    { text: '};', indent: 0 },
  ];

  return (
    <section id="about" className="py-20 px-4 flex flex-col items-center bg-gray-100/50 dark:bg-zinc-900/50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-gray-500">The Source Code</p>
      </div>

      <div className="w-full max-w-2xl transform transition-transform hover:scale-[1.01] duration-500">
        {/* Terminal Window */}
        <div className="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-gray-800 font-mono text-sm md:text-base relative min-h-[300px]">
          
          {/* Title Bar */}
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 text-gray-400 text-xs flex-1 text-center font-sans">fahim_profile.js — read-only</div>
          </div>

          {/* Code Content */}
          <div className="p-6 text-[#d4d4d4] overflow-x-auto relative z-10">
            {/* Live background effect inside terminal */}
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 pointer-events-none mix-blend-overlay bg-cover"></div>
            
            <div className="flex flex-col gap-1">
              <span className="text-[#569cd6] opacity-0 animate-type-line" style={{ animationDelay: '0ms' }}>const <span className="text-[#4fc1ff]">fahim</span> = {'{'}</span>
              
              <span className="opacity-0 animate-type-line pl-4" style={{ animationDelay: '100ms' }}>
                <span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">"Fahim Rahman"</span>,
              </span>
              
              <span className="opacity-0 animate-type-line pl-4" style={{ animationDelay: '200ms' }}>
                 <span className="text-[#9cdcfe]">rank</span>: <span className="text-[#ce9178]">"On Learning Stage"</span>,
              </span>
              
              <span className="opacity-0 animate-type-line pl-4" style={{ animationDelay: '300ms' }}>
                <span className="text-[#9cdcfe]">status</span>: <span className="text-[#ce9178]">"404: Potential Not Found"</span>,
              </span>
              
              <span className="opacity-0 animate-type-line pl-4" style={{ animationDelay: '400ms' }}>
                <span className="text-[#9cdcfe]">hobbies</span>: [
              </span>

              <span className="opacity-0 animate-type-line pl-8" style={{ animationDelay: '500ms' }}>
                <span className="text-[#ce9178]">"Coding"</span>,
              </span>
              <span className="opacity-0 animate-type-line pl-8" style={{ animationDelay: '600ms' }}>
                <span className="text-[#ce9178]">"Gaming"</span>,
              </span>
              <span className="opacity-0 animate-type-line pl-8" style={{ animationDelay: '700ms' }}>
                <span className="text-[#ce9178]">"Photography"</span>
              </span>

              <span className="opacity-0 animate-type-line pl-4" style={{ animationDelay: '800ms' }}>]</span>
              
              <span className="opacity-0 animate-type-line" style={{ animationDelay: '900ms' }}>{'}'};</span>
            </div>
            
            {/* Blinking Cursor */}
            <div className="mt-2 text-[#569cd6] flex items-center">
              &gt; <span className="animate-pulse ml-1 w-2 h-4 bg-[#569cd6] block"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTerminal;