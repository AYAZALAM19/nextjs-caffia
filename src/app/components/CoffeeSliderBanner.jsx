'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrightInfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      src: "/assets/images/home-banner/banner_3.jpeg",
      title: "Premium Coffee Experience",
      subtitle: "Discover our carefully selected coffee beans from around the world",
      cta: "Shop Now"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80",
      title: "Artisan Roasted Beans",
      subtitle: "Perfectly roasted for the ultimate flavor experience",
      cta: "Explore"
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80",
      title: "Coffee Moments",
      subtitle: "Every cup tells a story of passion and craftsmanship",
      cta: "Learn More"
    }
  ];

  // Extended slides for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 0) {
        sliderRef.current.style.transition = 'none';
        setCurrentIndex(slides.length);
        setTimeout(() => {
          sliderRef.current.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 50);
      } else if (currentIndex === slides.length + 1) {
        sliderRef.current.style.transition = 'none';
        setCurrentIndex(1);
        setTimeout(() => {
          sliderRef.current.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 50);
      }
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Actual index for dots
  const getActualIndex = () => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex > slides.length) return 0;
    return currentIndex - 1;
  };

  return (
    <section className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden bg-gradient-to-bt from-amber-200 via-white/5 to-transparent shadow-2xl group">

      {/* Slides */}
      <div
        ref={sliderRef}
        className="flex h-full w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full min-w-full">
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div> */}
            </div>

            {/* Content - Left aligned with smooth line animations */}
            <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
              <div className="max-w-2xl space-y-6">
                
                {/* Title - First line */}
                <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-caffia leading-tight drop-shadow-lg transition-all duration-700 ease-out ${
                  Math.abs(currentIndex - index) === 0 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
                }`}>
                  {slide.title}
                </h1>

                {/* Subtitle - Second line */}
                <p className={`text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md transition-all duration-700 ease-out delay-200 ${
                  Math.abs(currentIndex - index) === 0 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
                }`}>
                  {slide.subtitle}
                </p>

                {/* CTA Button - Third line */}
                <button className={`inline-flex items-center md:gap-3 px-4 md:px-8 py-1 md:py-3 bg-gradient-to-br from-caffia via-white to-caffia hover:from-amberLight hover:to-transparent text-Greytext taxt-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-700 ease-out delay-400 backdrop-blur-sm border border-amberLight ${
                  Math.abs(currentIndex - index) === 0 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
                }`}>
                  <span>{slide.cta}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white text-caffia p-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50"
      >
        <ChevronLeft className="md:w-6 md:h-6 h-3 w-3" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white text-caffia p-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50"
      >
        <ChevronRight className="md:w-6 md:h-6 h-3 w-3" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1 md:gap-5 bg-white/5 backdrop-blur-md px-2 md:px-5 py-0.5 md:py-1 rounded-full">
  {slides.map((slide, idx) => (
    <button
      key={idx}
      onClick={() => goToSlide(idx)}
      disabled={isTransitioning}
      className="p-0 rounded-full"
      aria-label={`Go to slide ${idx + 1}`}
    >
      <img
        src={slide.src}
        alt={slide.title ?? `Slide ${idx + 1}`}
        loading="lazy"
        className={
          `rounded-full object-cover transition-transform duration-300 ` +
          (idx === getActualIndex()
            ? 'md:w-10 md:h-10 w-4 h-4  scale-105'
            : 'md:w-8 md:h-8 h-3.5 w-3.5')
        }
      />
    </button>
  ))}
</div>


      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div 
          className="h-full bg-gradient-to-r from-caffia to-caffia/60 transition-all duration-500"
          style={{ width: `${((getActualIndex() + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default BrightInfiniteSlider;