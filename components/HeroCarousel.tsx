'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

interface HeroCarouselProps {
  images?: string[];
  media?: MediaItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function HeroCarousel({
  images = [],
  media = [],
  className = '',
  autoPlay = true,
  interval = 6000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Convert images array to media items if media is not provided
  const mediaItems: MediaItem[] = media.length > 0 
    ? media 
    : images.map(img => ({ type: 'image' as const, src: img }));

  useEffect(() => {
    if (!autoPlay || mediaItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, mediaItems.length]);

  // Handle video playback
  useEffect(() => {
    mediaItems.forEach((item, index) => {
      const video = videoRefs.current[index];
      if (video) {
        if (index === currentIndex && item.type === 'video') {
          video.play().catch(() => {
            // Autoplay was prevented, video will play on user interaction
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, mediaItems]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  if (mediaItems.length === 0) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background Media (Images and Videos) */}
      <div className="absolute inset-0">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          >
            {item.type === 'video' ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.src}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay={index === currentIndex}
              />
            ) : (
              <Image
                src={item.src}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            )}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-[#092439]/70"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-4 sm:mb-6 animate-fade-in">
          Al Buraq Logistics
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 animate-fade-in">
          Professional removal and logistics services in Gloucester, UK. 
          Trusted by families and businesses across Gloucestershire for reliable, efficient moving solutions. 
          Serving Gloucester, Cheltenham, Stroud, Bristol, and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in">
          <Link
            href="/book"
            className="bg-[#D4AF37] text-[#092439] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#E5C866] transition shadow-lg"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#D4AF37] hover:text-[#092439] transition"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      {mediaItems.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-20"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-20"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#D4AF37] w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

