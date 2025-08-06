'use client';
import { useState, useEffect } from 'react';
import { ExternalLink, Instagram, Twitter, Github, Mail, Globe, Music, Video } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      title: "Website Neon Code",
      url: "https://neoncode.my.id",
      icon: <Globe className="w-5 h-5" />,
      bgGradient: "from-[#11bf91] to-[#0ea977]"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/neoncode_",
      icon: <Instagram className="w-5 h-5" />,
      bgGradient: "from-[#11bf91] to-[#0f9d7a]"
    },
    {
      title: "GitHub",
      url: "https://github.com/trustme007",
      icon: <Github className="w-5 h-5" />,
      bgGradient: "from-[#0ea977] to-[#0d8a68]"
    },
    {
      title: "Whatsapp Admin",
      url: "https://wa.me/628385578764",
      icon: <Video className="w-5 h-5" />,
      bgGradient: "from-[#0d8a68] to-[#11bf91]"
    },
    {
      title: "Email Me",
      url: "mailto:info@neoncode.my.id",
      icon: <Mail className="w-5 h-5" />,
      bgGradient: "from-[#0f9d7a] to-[#0ea977]"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/wallpaper.jpg')` 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#11bf91]/30 via-black/60 to-[#0d8a68]/40" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className={`text-center mb-8 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-24 h-24 md:h-32 md:w-32 mx-auto mb-6 rounded-full p-1 shadow-2xl shadow-[#11bf91]/50">
            <Image src="/neon.png" alt="Your Name" width={128} height={128} className="w-full h-full rounded-full" unoptimized={true} />
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">Neon Code</h1>
          <p className="text-base md:text-lg text-white/90 mb-4 drop-shadow">Website and Software Developer</p>
          <p className="text-white/80 max-w-md text-sm md:text-base mx-auto leading-relaxed drop-shadow">
              Kode, kolaborasi, dan konten — temukan semua proyek dan sosial saya di sini.          
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          {links.map((link, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative w-full p-4 rounded-2xl 
                  bg-gradient-to-r ${link.bgGradient}
                  hover:scale-105 hover:shadow-2xl hover:shadow-[#11bf91]/25
                  transform transition-all duration-300 ease-out
                  flex items-center justify-between
                  text-white font-semibold
                  border border-white/10 backdrop-blur-sm
                  hover:border-[#11bf91]/30
                  active:scale-95
                `}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                    {link.title}
                  </span>
                </div>
                
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-300 rounded-2xl" />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <p className="text-white/60 text-sm drop-shadow">
            &copy; 2025 Neon Code. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-[#11bf91]/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-[#15d19f]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#11bf91]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 right-16 w-5 h-5 bg-[#0ea977]/25 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}