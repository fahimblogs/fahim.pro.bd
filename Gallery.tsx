import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center pt-48 pb-10 relative overflow-hidden">
      <div className="relative group">
        {/* Animated Speech Bubble */}
        <div className="absolute -top-16 -right-12 sm:-right-20 animate-float z-20">
          <div className="relative bg-white dark:bg-zinc-800 text-gray-900 dark:text-white px-4 py-2 rounded-2xl rounded-bl-none shadow-lg border border-gray-100 dark:border-zinc-700 text-lg font-bold font-sans">
            السلام عليكم
            <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white dark:bg-zinc-800 border-b border-r border-gray-100 dark:border-zinc-700 transform rotate-45 skew-x-12"></div>
          </div>
        </div>

        {/* Profile Image with Glow */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-tr from-theme to-purple-500 shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 bg-gray-200">
            <img 
              src="https://raw.githubusercontent.com/fahimblogs/fahimblogs.github.io/refs/heads/main/IMG_9299%20(1).jpg" 
              alt="Fahim Rahman" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Status Dot */}
          <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="text-center mt-8 space-y-4 px-4 z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          I'm <span className="text-theme">Fahim Rahman</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
          Front-End Developer & UI/UX Enthusiast. <br/>
          Building digital experiences with a touch of magic.
        </p>
      </div>
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-theme opacity-5 dark:opacity-10 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;