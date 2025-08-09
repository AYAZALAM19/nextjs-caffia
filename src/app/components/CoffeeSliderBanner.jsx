'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Coffee } from 'lucide-react';

const CoffeeSliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      src: "/assets/images/home-banner/coffee-beans-cup-packaging.jpg",
      title: "Premium Coffee Experience",
      subtitle: "Discover our carefully selected coffee beans from around the world",
      cta: "Shop Now",
      accent: "New Arrival"
    },
    {
      src: "/assets/images/home-banner/roasted-coffee-beans-cinnamon.jpg",
      title: "Artisan Roasted Beans",
      subtitle: "Perfectly roasted with aromatic spices for the ultimate flavor",
      cta: "Explore",
      accent: "Best Seller"
    },
    {
      src: "/assets/images/home-banner/top-view-coffee-with-copy-space.jpg",
      title: "Coffee Moments",
      subtitle: "Every cup tells a story of passion, quality, and craftsmanship",
      cta: "Learn More",
      accent: "Featured"
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
    setCurrentIndex(index + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 0) {
        sliderRef.current.style.transition = 'none';
        setCurrentIndex(slides.length);
        setTimeout(() => {
          sliderRef.current.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
        }, 50);
      } else if (currentIndex === slides.length + 1)  {
        sliderRef.current.style.transition = 'none';
        setCurrentIndex(1);
        setTimeout(() => {
          sliderRef.current.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
        }, 50);
      }
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Get actual index for indicators
  const getActualIndex = () => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex > slides.length) return 0;
    return currentIndex - 1;
  };

  return (
    <section className="relative w-full h-80 md:h-96 lg:h-[550px] overflow-hidden bg-gradient-to-br from-amber to-amberLight rounded-sm shadow-2xl group">
      {/* Slides Container */}
      <div 
        ref={sliderRef}
        className="flex h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center  transition-transform duration-[5s] ease-linear"
              style={{ 
                backgroundImage: `url('${slide.src}')`,
                
                transform: currentIndex === index ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-16">
              <div className="max-w-3xl space-y-3">
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-3 md:px-4 md:py-3 py-2 rounded-full bg-amberLight/95 text-amber text-sm md:text-lg font-bold transition-all duration-700 ${
                  Math.abs(currentIndex - index) <= 0 ? 'translate-y-0 opacity-100' : 'md:translate-y-8 opacity-0'
                }`}>
                  <Star className="w-4 h-4" />
                  {slide.accent}
                </div>

                {/* Title */}
                <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-200 ${
                  Math.abs(currentIndex - index) <= 0 ? 'translate-y-0 opacity-100' : 'md:translate-y-12 translate-y-4  opacity-0'
                }`}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className={`text-lg md:text-xl lg:text-2xl text-amber-50/90  leading-relaxed transition-all duration-700 delay-300 ${
                  Math.abs(currentIndex - index) <= 0 ? 'translate-y-0 opacity-100' : 'md:translate-y-12 opacity-0'
                }`}>
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <button className={`group/btn inline-flex items-center gap-3 md:px-8 md:py-4 py-1 px-2 bg-gradient-to-r from-darkAmber/85 to-amberLight/100 hover:from-darkAmber/80 hover:to-amberLight
                text-white font-bold rounded-full transition-all duration-700 delay-500 hover:scale-105 hover:shadow-xl ${
                  Math.abs(currentIndex - index) <= 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                  <Coffee className="w-5 h-5" />
                  <span>{slide.cta}</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === getActualIndex()
                ? 'w-8 h-3 bg-amber-400'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300"
          style={{ width: `${((getActualIndex() + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CoffeeSliderBanner;
