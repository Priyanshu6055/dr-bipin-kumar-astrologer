import React, { useState, useEffect, useRef } from 'react';
import logo from '../img/logo.PNG';

// --- Icon Imports (These are assumed to be correctly imported from a shared file or library in your main App.js) ---
export const Sun = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="8" /><line x1="12" x2="12" y1="2" y2="6" /><line x1="12" x2="12" y1="18" y2="22" /><line x1="4.93" x2="7.76" y1="4.93" y2="7.76" /><line x1="16.24" x2="19.07" y1="16.24" y2="19.07" /><line x1="2" x2="6" y1="12" y2="12" /><line x1="18" x2="22" y1="12" y2="12" /><line x1="4.93" x2="7.76" y1="19.07" y2="16.24" /><line x1="16.24" x2="19.07" y1="7.76" y2="4.93" /></svg>;
export const Star = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
export const Sparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="M9.93 13.5C8.75 14.96 6.58 14.82 5.2 13.4C2.5 10.53 4.2 6.3 9.7 7.27c2.47.46 4.45 2.5 4.7 4.93.38 3.68-3.13 6.07-6.55 4.78C6.56 16.3 6 14 6 12" /><path d="M11.5 6.7c2.4-.95 5.5-1.16 7.6-.6 2.3.62 3.9 2.5 3.5 4.6-.35 1.9-.99 3.1-2.1 4.1" /><path d="M12.93 18.5c1.18-1.46 3.35-1.32 4.73.1c2.7 2.97 1.05 7.2-4.45 6.23-2.47-.46-4.45-2.5-4.7-4.93-.38-3.68 3.13-6.07 6.55-4.78.92.37 1.48 2.67 1.48 4.92" /><path d="M10.5 24.7c-2.4.95-5.5 1.16-7.6.6-2.3-.62-3.9-2.5-3.5-4.6.35-1.9.99-3.1 2.1-4.1" /></svg>;


export const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const astrologerImageRef = useRef(null);

  // Dynamic Background Animation (Stars/Sparkles reacting to mouse)
  useEffect(() => {
    const section = heroSectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      section.querySelectorAll('.background-element').forEach(el => {
        const depth = parseFloat(el.dataset.depth) || 0.1;
        const elX = ((mouseX - centerX) / 100) * depth;
        const elY = ((mouseY - centerY) / 100) * depth;
        el.style.transform = `translate(${elX}px, ${elY}px)`;
      });
    };

    const handleMouseLeave = () => {
      section.querySelectorAll('.background-element').forEach(el => {
        el.style.transform = `translate(0px, 0px)`;
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Astrologer Image Float and Orb Shine Animation
  useEffect(() => {
    const imageElement = astrologerImageRef.current;
    if (!imageElement) return;

    let start = null;
    const duration = 5000;
    const maxMoveY = 8;
    const maxRotate = 2;

    const animateFloat = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) % duration / duration;

      const offsetY = Math.sin(progress * 2 * Math.PI) * maxMoveY;
      const rotateZ = Math.sin(progress * 2 * Math.PI / 2) * maxRotate;

      imageElement.style.transform = `translateY(${offsetY}px) rotateZ(${rotateZ}deg)`;

      requestAnimationFrame(animateFloat);
    };

    const animationFrameId = requestAnimationFrame(animateFloat);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3D Tilt effect on mouse move for the main content box
  useEffect(() => {
    const contentBox = heroContentRef.current;
    if (!contentBox) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = contentBox.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rotateY = ((mouseX - centerX) / width) * 20;
      const rotateX = ((mouseY - centerY) / height) * -20;

      contentBox.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateZ(30px)`;
      contentBox.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 0 80px rgba(255, 165, 0, 0.9)';
      contentBox.style.borderColor = 'rgba(255, 165, 0, 0.8)';
    };

    const handleMouseLeave = () => {
      contentBox.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)';
      contentBox.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 0 40px rgba(255, 165, 0, 0.4)';
      contentBox.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    };

    contentBox.addEventListener('mousemove', handleMouseMove);
    contentBox.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      contentBox.removeEventListener('mousemove', handleMouseMove);
      contentBox.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  return (
    <section
      id="home"
      ref={heroSectionRef}
      className="relative text-gray-800 min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden transition-all duration-300"
      style={{
        perspective: '1500px',
      }}
    >
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay"
        autoPlay
        loop
        muted
        playsInline
        src="/video/backgroundVdo.mp4"
        onError={(e) => console.error("Video failed to load:", e.target.src)}
      >
        Your browser does not support the video tag.
      </video> */}

        <video
  className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay"
  autoPlay
  loop
  muted
  playsInline
  src="/videos/backgroundVdo.mp4" 
  onError={(e) => console.error("Video failed to load:", e.target.src)}
>
  Your browser does not support the video tag.
</video>

      <div className="absolute inset-0 z-0 opacity-40">
        <Star data-depth="0.2" className="background-element absolute top-[10%] left-[15%] w-10 h-10 text-amber-300 animate-pulse-slow" />
        <Sparkles data-depth="0.3" className="background-element absolute top-[30%] right-[10%] w-8 h-8 text-amber-200 animate-bounce-slow" />
        <Sun data-depth="0.1" className="background-element absolute bottom-[20%] left-[25%] w-12 h-12 text-orange-400 animate-spin-slow" />
        <Star data-depth="0.4" className="background-element absolute top-[55%] left-[5%] w-6 h-6 text-amber-100 animate-pulse-slowest" />
        <Sparkles data-depth="0.25" className="background-element absolute bottom-[10%] right-[30%] w-9 h-9 text-amber-300 animate-bounce-slow" />
        <Sun data-depth="0.15" className="background-element absolute top-[5%] right-[20%] w-14 h-14 text-orange-300 animate-spin-slowest" />
      </div>

      <div
        ref={heroContentRef}
        className="container mx-auto px-6 py-12 text-center relative z-10 bg-white bg-opacity-95 rounded-3xl shadow-lg p-8 max-w-3xl border border-white border-opacity-50 animate-fade-in-up flex flex-col items-center transition-all duration-300 ease-out will-change-transform"
        style={{
          margin: '10px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 0 40px rgba(255, 165, 0, 0.4)',
        }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-orange-800 drop-shadow-md animate-slide-in-left">
          Cosmic Insights Await
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-gray-700 drop-shadow-sm animate-slide-in-right animation-delay-300">
          Navigate your life's journey with clarity and foresight.
        </p>

        {/* Astrologer Photo in an animated orb - using a placeholder for the imported logo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full flex-shrink-0 overflow-hidden mb-8 mt-4 animate-scale-in animation-delay-800"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,200,100,0.7) 100%)',
            boxShadow: '0 0 50px rgba(255, 165, 0, 0.8), inset 0 0 30px rgba(255,255,255,0.7)',
            border: '4px solid rgba(255,255,255,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            ref={astrologerImageRef}
            src={logo}
            alt="AstroGuidance Logo"
            className="w-full h-full object-cover rounded-full filter brightness-95"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/256x256/CCCCCC/333333?text=Logo+Error";
            }}
          />

          <div className="absolute inset-0 rounded-full" style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4) 0%, transparent 40%)'
          }}></div>
        </div>

        <a
          href="#services"
          className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75 animate-pop-in animation-delay-1200"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};