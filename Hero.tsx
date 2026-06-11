import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Play, Pause, Palette, Menu, X, Music } from 'lucide-react';
import { THEME_COLORS } from '../constants';
import { ThemeColor } from '../types';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  setColor: (hex: string) => void;
  currentColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, setColor, currentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
    { name: 'Message', id: 'message' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 pointer-events-none">
      
      {/* Main Glassy Navbar - Changed width to 95% */}
      <nav className="pointer-events-auto relative w-[95%] max-w-5xl bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-lg px-6 py-3 transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-theme to-purple-600 cursor-pointer" onClick={() => scrollToSection('home')}>
            FR.
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-theme transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 p-4 shadow-xl flex flex-col gap-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left w-full py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Control Bar (Under Menu) */}
      <div className="pointer-events-auto mt-3 flex items-center gap-3 bg-white/50 dark:bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-sm transition-all hover:bg-white/70 dark:hover:bg-black/60">
        
        {/* Audio Player */}
        <div className="flex items-center gap-2 pr-3 border-r border-gray-300 dark:border-gray-700">
          <button 
            onClick={togglePlay}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-theme text-white hover:opacity-90 transition-transform active:scale-95"
            title="Quran Audio"
          >
            {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
          </button>
          <span className="text-xs font-medium opacity-70 hidden sm:block">
            {isPlaying ? 'Playing...' : 'Quran'}
          </span>
          <audio 
            ref={audioRef} 
            src="https://github.com/jubairbro/Faw/raw/refs/heads/main/audio.mp3" 
            onEnded={() => setIsPlaying(false)}
            loop
          />
        </div>

        {/* Theme Color Switcher */}
        <div className="relative">
          <button 
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            title="Change Theme"
          >
            <Palette size={18} className="text-gray-700 dark:text-gray-200" />
          </button>
          
          {showColorPicker && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-zinc-800 p-2 rounded-xl shadow-xl flex gap-1 border border-gray-100 dark:border-gray-700 animate-slide-up">
              {THEME_COLORS.map((color: ThemeColor) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setColor(color.hex);
                    setShowColorPicker(false);
                  }}
                  className="w-6 h-6 rounded-full border-2 border-transparent hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.hex, borderColor: currentColor === color.hex ? 'white' : 'transparent', boxShadow: currentColor === color.hex ? '0 0 0 2px rgba(0,0,0,0.5)' : 'none' }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          title={isDark ? "Light Mode" : "Dark Mode"}
        >
          {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
        </button>

      </div>
    </div>
  );
};

export default Navbar;