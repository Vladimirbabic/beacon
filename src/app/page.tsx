"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Property card data for carousel
const propertyCards = [
  { image: "https://www.figma.com/api/mcp/asset/d261770d-9232-4067-90f4-0a2f54555383", address: "96 Washington Avenue", city: "Garden City, NY 11530", views: "3,500", saves: "170" },
  { image: "https://www.figma.com/api/mcp/asset/a825145f-77fc-4c33-a70e-88d3a7f9d1f8", address: "142 Oak Street", city: "Mineola, NY 11501", views: "2,800", saves: "145" },
  { image: "https://www.figma.com/api/mcp/asset/895adbc7-2e5d-4427-a782-88e7a72b3e3c", address: "78 Maple Drive", city: "Westbury, NY 11590", views: "4,200", saves: "210" },
  { image: "https://www.figma.com/api/mcp/asset/d261770d-9232-4067-90f4-0a2f54555383", address: "55 Elm Road", city: "Roslyn, NY 11576", views: "3,100", saves: "165" },
  { image: "https://www.figma.com/api/mcp/asset/a825145f-77fc-4c33-a70e-88d3a7f9d1f8", address: "220 Pine Lane", city: "Manhasset, NY 11030", views: "2,950", saves: "158" },
];

const imgQvrn6Gdeq84Zgkw0Rlji1 = "https://www.figma.com/api/mcp/asset/c156f729-e10d-454c-b778-6f8e3f69b179";
const imgFrame2147224642 = "https://www.figma.com/api/mcp/asset/d261770d-9232-4067-90f4-0a2f54555383";
const imgFrame2147224633 = "https://www.figma.com/api/mcp/asset/a825145f-77fc-4c33-a70e-88d3a7f9d1f8";
const imgFrame2147224641 = "https://www.figma.com/api/mcp/asset/895adbc7-2e5d-4427-a782-88e7a72b3e3c";
const imgFrame = "https://www.figma.com/api/mcp/asset/5e8baef8-fbe4-4bed-b1f1-95649743e785";
const imgArrowCircleRight = "https://www.figma.com/api/mcp/asset/4e1977fc-8e60-4906-b5ce-6435e10a951d";
const imgArrowCircleRight1 = "https://www.figma.com/api/mcp/asset/92f18c3a-4114-4859-ac1f-284213414b63";
const imgInstagramLogo20162 = "https://www.figma.com/api/mcp/asset/d7d64a4d-6485-4964-a386-5ccc75891256";
const imgFrame2147224460 = "https://www.figma.com/api/mcp/asset/37e2ec96-5167-4367-a3b9-eaba0abbe92c";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/9118aadc-7223-439a-844c-e77c5f95a1fc";
const imgFrame2147224461 = "https://www.figma.com/api/mcp/asset/96a390e3-643e-4db5-8864-6f2399ab73ee";
const imgGroup15373 = "https://www.figma.com/api/mcp/asset/da715f80-5067-489c-94d3-651e8679ac6e";
const imgGroup15372 = "https://www.figma.com/api/mcp/asset/5862b62a-826a-47c3-9ed1-63769cfb9242";
const imgFrame2147224458 = "https://www.figma.com/api/mcp/asset/55793883-0afb-46bd-956a-dd0859d7341d";
const imgFrame2147224459 = "https://www.figma.com/api/mcp/asset/3a511583-f200-4e2b-91ca-f9c907de1201";
const imgChartLineDown = "https://www.figma.com/api/mcp/asset/c0cb1e8c-dda4-46ae-ab11-8e7d62b53bba";
const imgArrowsDownUp = "https://www.figma.com/api/mcp/asset/832e282b-fd1f-4a79-85e0-0a492607f975";
const imgMathOperations = "https://www.figma.com/api/mcp/asset/a7e6396e-89d1-42c6-b179-fc762dcc5378";
const imgCalendarBlank = "https://www.figma.com/api/mcp/asset/ebee3365-3a8d-4b03-b904-3f1c2387ed2b";
const imgEye = "https://www.figma.com/api/mcp/asset/849a9fd1-d196-4499-872f-48d5febae443";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/7b89c0d8-26cf-4872-a93f-ddc939028348";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/8e2120b1-a216-49be-9e60-6dd812a61d1f";

function Frame({ className }: { className?: string }) {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarRef.current) return;

    const cells = calendarRef.current.querySelectorAll(".calendar-cell");

    gsap.fromTo(cells,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: calendarRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={calendarRef} className={cn("relative", className)}>
      <div className="absolute content-stretch flex flex-col gap-[4px] items-center justify-center left-1/2 top-0 translate-x-[-50%]">
        <div className="content-stretch flex font-sans font-light items-start justify-between leading-[0] relative shrink-0 text-[#929292] text-[20px] text-center w-full">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={i} className="flex flex-col justify-center relative shrink-0 w-[64px]">
              <p className="leading-[32.5px] whitespace-pre-wrap">{day}</p>
            </div>
          ))}
        </div>

        <div className="content-stretch flex flex-col gap-[6.487px] items-start relative shrink-0 w-[493px]">
          {/* Row 1 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="calendar-cell rounded-[10.811px] shrink-0 size-[64.868px]" />
            ))}
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
          </div>

          {/* Row 2 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell relative size-[64.868px]">
              <div className="bg-[#d3cbba] rounded-[10.811px] size-full" />
              <div className="absolute inset-0 flex items-center justify-center font-sans font-medium text-[32px] text-white">
                12
              </div>
            </div>
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
          </div>

          {/* Row 3 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell relative size-[64.868px]">
              <div className="bg-[#d3cbba] rounded-[10.811px] size-full" />
              <div className="absolute inset-0 flex items-center justify-center font-sans font-medium text-[32px] text-white">
                2
              </div>
            </div>
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell relative size-[64.868px]">
              <div className="bg-[#d3cbba] rounded-[10.811px] size-full" />
              <div className="absolute inset-0 flex items-center justify-center font-sans font-medium text-[32px] text-white">
                2
              </div>
            </div>
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
          </div>

          {/* Row 4 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell relative size-[64.868px]">
              <div className="bg-[#ff5825] rounded-[10.811px] size-full" />
              <div className="absolute inset-0 flex items-center justify-center font-sans font-medium text-[32px] text-white">
                8
              </div>
            </div>
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
          </div>

          {/* Row 5 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#ff5825] rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell relative size-[64.868px]">
              <div className="bg-[#ff5825] rounded-[10.811px] size-full" />
              <div className="absolute inset-0 flex items-center justify-center font-sans font-medium text-[32px] text-white">
                2
              </div>
            </div>
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            <div className="calendar-cell bg-[#d3cbba] rounded-[10.811px] shrink-0 size-[64.868px]" />
          </div>

          {/* Row 6 */}
          <div className="content-stretch flex gap-[6.487px] items-center relative shrink-0 w-full">
            <div className="calendar-cell bg-[#d3cbba] opacity-20 rounded-[10.811px] shrink-0 size-[64.868px]" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="calendar-cell rounded-[10.811px] shrink-0 size-[64.868px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Embedded Card Component for Zillow/Reels/LinkedIn showcase
function EmbedCard({ type, address }: { type: "zillow" | "reels" | "linkedin"; address: string }) {
  return (
    <div className="embed-card bg-[#2b2b2b] border border-[#484848] rounded-[20px] p-3 flex flex-col gap-3 w-full">
      {/* Address Header */}
      <div className="px-2">
        <p className="font-sans font-semibold text-[14px] tracking-[1px] uppercase text-white">{address.split(",")[0]},</p>
        <p className="font-sans font-medium text-[14px] tracking-[1px] uppercase text-white/40">{address.split(",").slice(1).join(",")}</p>
      </div>

      {/* Embed Preview */}
      <div className="rounded-[12px] overflow-hidden bg-white">
        {type === "zillow" && (
          <img src="/images/zillow-listing.png" alt="Zillow Listing" className="w-full h-[290px] object-cover" />
        )}
        {type === "reels" && (
          <img src="/images/reels-embed.png" alt="Instagram Reels" className="w-full h-[450px] object-cover" />
        )}
        {type === "linkedin" && (
          <img src="/images/linkedin-post.png" alt="LinkedIn Post" className="w-full h-[350px] object-cover" />
        )}
      </div>

      {/* Caption */}
      <div className="flex flex-wrap gap-1 px-2 text-[20px] text-white">
        <span className="font-sans font-normal">Going viral on</span>
        <img src={imgFrame} alt="Platform" className="w-6 h-6 mx-1" />
        <span className="font-sans font-normal">Zillow with</span>
        <span className="font-sans font-bold">3500 views</span>
        <span className="font-sans font-normal">and</span>
        <span className="font-sans font-bold">170 saves.</span>
      </div>
    </div>
  );
}

// Hero Section with endless auto-scrolling carousel using GSAP
function HeroSection({ heroRef, cardsRef }: { heroRef: React.RefObject<HTMLDivElement | null>; cardsRef: React.RefObject<HTMLDivElement | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const cardWidth = 386;
  const gap = 32;
  const totalWidth = propertyCards.length * (cardWidth + gap);

  // Duplicate cards for seamless loop
  const infiniteCards = [...propertyCards, ...propertyCards];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial position
    gsap.set(container, { x: 0 });

    // Create infinite scroll animation
    tweenRef.current = gsap.to(container, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [totalWidth]);

  // Pause/resume handlers with smooth transition
  const handleMouseEnter = useCallback(() => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5, ease: "power2.out" });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5, ease: "power2.in" });
    }
  }, []);

  // Manual scroll with GSAP
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!tweenRef.current) return;
    const currentProgress = tweenRef.current.progress();
    const step = (cardWidth + gap) / totalWidth;
    const newProgress = direction === 'left'
      ? currentProgress - step
      : currentProgress + step;

    gsap.to(tweenRef.current, {
      progress: newProgress,
      duration: 0.5,
      ease: "power2.inOut",
      modifiers: {
        progress: (p) => ((parseFloat(p) % 1) + 1) % 1
      }
    });
  }, [totalWidth, cardWidth, gap]);

  return (
    <div ref={heroRef} className="w-full relative">
      {/* Left-aligned title and subtitle with inline arrows */}
      <div className="flex flex-col gap-6 px-8 md:px-24 py-12 md:py-16 items-start text-left max-w-[1440px] mx-auto">
        <h1 className="hero-title font-serif text-[40px] md:text-[64px] lg:text-[80px] text-[#2b2b2b] leading-tight tracking-[-1px] md:tracking-[-2.4px] max-w-[900px]">
          Our homes have been seen 235,000 buyers.
        </h1>
        <div className="hero-subtitle flex flex-wrap items-center justify-between w-full gap-4 md:gap-6">
          <span className="font-serif text-[28px] md:text-[40px] lg:text-[48px] text-[#2b2b2b] border-b-[3px] border-[#ff5825] px-2 pb-1">
            And that was just in last 30 days.
          </span>
          {/* Navigation Arrows on right side */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={imgArrowCircleRight} alt="Prev" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rotate-180 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={imgArrowCircleRight1} alt="Next" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Endless Cards Carousel with GSAP */}
      <div
        className="w-full pb-16 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={(el) => {
            containerRef.current = el;
            if (cardsRef && 'current' in cardsRef) {
              (cardsRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            }
          }}
          className="flex pl-8 md:pl-24"
          style={{ gap: `${gap}px` }}
        >
          {infiniteCards.map((card, index) => (
            <div
              key={index}
              className="property-card relative w-[320px] md:w-[386px] h-[480px] md:h-[562px] rounded-[12px] overflow-hidden shrink-0 group cursor-pointer"
            >
              <img src={card.image} alt="Property" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              {/* Overlay gradient matching Figma design */}
              <div
                className="absolute inset-0 rounded-[12px]"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 17.31%, rgba(0, 0, 0, 0.2) 81.25%, #000000 100%)"
                }}
              />
              {/* Address at top */}
              <div className="absolute top-0 left-0 right-0 p-5 text-white">
                <p className="font-sans font-semibold text-[14px] md:text-[16px] tracking-[1px] uppercase">{card.address},</p>
                <p className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase opacity-60">{card.city}</p>
              </div>
              {/* Stats at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex flex-wrap items-center gap-1 text-[16px] md:text-[20px]">
                  <span className="font-sans font-normal">Going viral on</span>
                  <img src={imgFrame} alt="Zillow" className="w-6 h-6 md:w-7 md:h-7 mx-1" />
                  <span className="font-sans font-normal">Zillow with</span>
                  <span className="font-sans font-bold">{card.views} views</span>
                  <span className="font-sans font-normal">and</span>
                  <span className="font-sans font-bold">{card.saves} saves.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const darkSectionRef = useRef<HTMLDivElement>(null);
  const embedsSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        heroRef.current.querySelector(".hero-subtitle"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }

    // Cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".property-card");

      gsap.fromTo(cards,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Dark section animations
    if (darkSectionRef.current) {
      const header = darkSectionRef.current.querySelector(".dark-header");
      const leftCol = darkSectionRef.current.querySelector(".left-stats");
      const rightCol = darkSectionRef.current.querySelector(".right-stats");

      gsap.fromTo(header,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: darkSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(leftCol,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCol,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightCol,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCol,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate stat numbers
      const statNumbers = darkSectionRef.current.querySelectorAll(".stat-number");
      statNumbers.forEach(num => {
        const finalValue = parseInt(num.textContent?.replace(/,/g, "") || "0");
        gsap.fromTo(num,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: num,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            onUpdate: function() {
              const val = Math.round(gsap.getProperty(num, "innerText") as number);
              num.textContent = val.toLocaleString();
            }
          }
        );
      });
    }

    // Embeds section animation
    if (embedsSectionRef.current) {
      const embedCards = embedsSectionRef.current.querySelectorAll(".embed-card");

      gsap.fromTo(embedCards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: embedsSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Stats section (light)
    if (statsSectionRef.current) {
      const content = statsSectionRef.current.querySelector(".stats-content");

      gsap.fromTo(content,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Comparison section
    if (comparisonRef.current) {
      const title = comparisonRef.current.querySelector(".comparison-title");
      const description = comparisonRef.current.querySelector(".comparison-desc");
      const rows = comparisonRef.current.querySelectorAll(".comparison-row");
      const gilletteCol = comparisonRef.current.querySelector(".gillette-column");
      const marketCol = comparisonRef.current.querySelector(".market-column");

      gsap.fromTo(title,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(description,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rows,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rows[0],
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(gilletteCol,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gilletteCol,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(marketCol,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: marketCol,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Footer section
    if (footerRef.current) {
      const content = footerRef.current.querySelector(".footer-content");
      const image = footerRef.current.querySelector(".footer-image");

      gsap.fromTo(content,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(image,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      {/* Header */}
      <header className="w-full max-w-[1440px] px-8 md:px-16 py-4 flex items-center justify-between">
        <div className="h-[60px] md:h-[78px] w-[180px] md:w-[252px] relative">
          <img alt="Logo" className="object-contain w-full h-full" src={imgQvrn6Gdeq84Zgkw0Rlji1} />
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-sans font-semibold text-[#1b2826] text-[12px] md:text-[16px] tracking-[1.6px] uppercase leading-[24px]">
            Powered by
          </p>
          <div className="w-[40px] md:w-[57px] h-[14px] md:h-[18px] relative">
            <img alt="Union" className="w-full h-full" src={imgUnion1} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} cardsRef={cardsRef} />


      {/* Dark Section - Viral Stats */}
      <section ref={darkSectionRef} className="bg-[#2b2b2b] w-full pt-16 md:pt-[120px] pb-0 px-8 md:px-[96px] text-white flex flex-col items-center relative">
        <div className="dark-header text-center mb-12 md:mb-[80px] max-w-[1100px]">
          <p className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase opacity-40 mb-4">Performance</p>
          <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] leading-[1.2]">
            Our Most Viral Open House on{" "}
            <span className="border-b-[3px] border-[#444] pb-1">November 30th</span>{" "}
            on <span className="border-b-[3px] border-[#444] pb-1">123 Main street</span>{" "}
            had <span className="border-b-[3px] border-[#444] pb-1">32 Attendees</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-[1248px] rounded-[12px] border border-[#484848] bg-[#2b2b2b] overflow-hidden">
          {/* Left Column - Social Media */}
          <div className="left-stats flex-1 p-8 md:p-[48px] border-b lg:border-b-0 lg:border-r border-[#484848]">
            <div className="text-center mb-8 md:mb-12">
              <p className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase opacity-40 mb-4">Social Media Views</p>
              <p className="stat-number font-serif text-[64px] md:text-[96px] leading-none">260,000</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff850f] rounded flex items-center justify-center">
                    <img src={imgInstagramLogo20162} alt="IG" className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Instagram</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">34,852</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <img src={imgFrame2147224460} alt="FB" className="w-6 h-6" />
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Facebook</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">45,783</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#d72228] rounded flex items-center justify-center">
                    <img src={imgFrame1} alt="YT" className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Youtube</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">28,573</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <img src={imgFrame2147224461} alt="TT" className="w-6 h-6" />
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Tiktok</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">39,586</span>
              </div>
            </div>
          </div>

          {/* Right Column - Online Portals */}
          <div className="right-stats flex-1 p-8 md:p-[48px]">
            <div className="text-center mb-8 md:mb-12">
              <p className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase opacity-40 mb-4">Online Portals Views</p>
              <p className="stat-number font-serif text-[64px] md:text-[96px] leading-none">2,503,000</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff850f] rounded flex items-center justify-center">
                    <img src={imgGroup15373} alt="Homes" className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Homes.com</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">40,320</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#d72228] rounded flex items-center justify-center">
                    <img src={imgGroup15372} alt="Realtor" className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">realtor.com</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">32,957</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#3f3f3f]">
                <div className="flex items-center gap-3">
                  <img src={imgFrame2147224458} alt="Zillow" className="w-6 h-6" />
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Zillow</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">48,573</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <img src={imgFrame2147224459} alt="Redfin" className="w-6 h-6" />
                  <span className="font-sans font-medium uppercase tracking-widest text-sm">Redfin</span>
                </div>
                <span className="font-serif text-xl md:text-2xl">29,573</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Cards Section */}
        <div ref={embedsSectionRef} className="w-full max-w-[1248px] mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <EmbedCard type="zillow" address="96 Washington Avenue, Garden City, NY 11530" />
            <EmbedCard type="reels" address="96 Washington Avenue, Garden City, NY 11530" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <EmbedCard type="linkedin" address="96 Washington Avenue, Garden City, NY 11530" />
            <EmbedCard type="zillow" address="96 Washington Avenue, Garden City, NY 11530" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <EmbedCard type="reels" address="96 Washington Avenue, Garden City, NY 11530" />
            <EmbedCard type="linkedin" address="96 Washington Avenue, Garden City, NY 11530" />
          </div>
        </div>

        {/* Fade gradient at bottom - positioned at section edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-[#2b2b2b] via-[#2b2b2b] via-40% to-transparent pointer-events-none" />
      </section>

      {/* Stats Section Light */}
      <section ref={statsSectionRef} className="w-full max-w-[1440px] px-8 md:px-[96px] py-16 md:py-[128px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        <div className="stats-content flex-1 flex flex-col justify-between gap-12 lg:h-[450px]">
          <div className="flex flex-wrap gap-2 text-[24px] md:text-[32px] font-serif text-[#2b2b2b]">
            <span className="mr-2">Our Most Viral Open House on</span>
            <span className="border-b-[3px] border-[#ff5825] px-1">November 30th</span>
            <span className="mr-2">on</span>
            <span className="border-b-[3px] border-[#ff5825] px-1">123 Main street</span>
            <span className="mr-2">had</span>
            <span className="border-b-[3px] border-[#ff5825] px-1">32 Attendees</span>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase text-[#7e7d7d]">November Stats</p>
            <div className="flex gap-8 md:gap-12">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-[48px] md:text-[72px] leading-none text-[#2b2b2b]">73</span>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#d3cbba] rounded-[4px]" />
                  <span className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase text-[#7e7d7d]">Private Showings</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-[48px] md:text-[72px] leading-none text-[#2b2b2b]">130</span>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#ff5825] rounded-[4px]" />
                  <span className="font-sans font-medium text-[14px] md:text-[16px] tracking-[1px] uppercase text-[#7e7d7d]">Open Houses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 hidden lg:block">
          <Frame className="w-[500px] xl:w-[675px] h-[350px] xl:h-[450px] bg-[#f4f1ea]" />
        </div>
      </section>

      {/* Us vs Market Section */}
      <section ref={comparisonRef} className="bg-[#2b2b2b] w-full py-16 md:py-[128px] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 md:px-[96px] flex flex-col items-center">
          <h2 className="comparison-title font-serif text-[48px] md:text-[80px] text-[#f4f1ea] mb-8 text-center leading-[1.1] tracking-[-3%]">Us vs. The Market</h2>
          <p className="comparison-desc text-center font-sans font-light text-[14px] md:text-[16px] max-w-[800px] mb-12 md:mb-16 opacity-80">
            This means 95% of our listings sell <span className="font-bold">without</span> any price reduction, so you can expect us to achieve the price we set together. In the broader market, nearly one third of homes end up reducing their price before selling.
          </p>

          {/* Comparison Table */}
          <div className="w-full max-w-[1248px] flex flex-col lg:flex-row justify-center items-start relative">
            {/* Left column - Labels */}
            <div className="hidden lg:flex flex-col w-[400px]">
              {/* Empty header space to align with column headers - matches py-4 + py-4 of other columns */}
              <div className="h-[72px]" />
              <div className="w-full border-t border-[#484848]" />
              <div className="comparison-row flex gap-4 items-start h-[150px] pl-8 pt-6">
                <img src={imgChartLineDown} alt="Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-serif text-[24px] leading-tight">Price Reductions</h3>
                  <p className="font-sans font-light text-[16px] opacity-60">We set the right price and defend it.</p>
                </div>
              </div>
              <div className="w-full border-t border-[#484848]" />
              <div className="comparison-row flex gap-4 items-start h-[150px] pl-8 pt-6">
                <img src={imgArrowsDownUp} alt="Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-serif text-[24px] leading-tight">Reduction Magnitude</h3>
                  <p className="font-sans font-light text-[16px] opacity-60">Strategic adjustments, never dramatic cuts.</p>
                </div>
              </div>
              <div className="w-full border-t border-[#484848]" />
              <div className="comparison-row flex gap-4 items-start h-[150px] pl-8 pt-6">
                <img src={imgMathOperations} alt="Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-serif text-[24px] leading-tight">List-to-Sale Ratio</h3>
                  <p className="font-sans font-light text-[16px] opacity-60">Stronger offers from buyers who trust pricing.</p>
                </div>
              </div>
              <div className="w-full border-t border-[#484848]" />
              <div className="comparison-row flex gap-4 items-start h-[150px] pl-8 pt-6">
                <img src={imgCalendarBlank} alt="Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-serif text-[24px] leading-tight">Days on Market</h3>
                  <p className="font-sans font-light text-[16px] opacity-60">Faster sales, less stress.</p>
                </div>
              </div>
              <div className="w-full border-t border-[#484848]" />
              <div className="comparison-row flex gap-4 items-start h-[150px] pl-8 pt-6">
                <img src={imgEye} alt="Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-serif text-[24px] leading-tight">Listing Visibility</h3>
                  <p className="font-sans font-light text-[16px] opacity-60">More eyeballs. More demand.</p>
                </div>
              </div>
            </div>

            {/* Gillette Group Column - Orange */}
            <div className="gillette-column flex flex-col items-center bg-[#ff5825] text-white rounded-[11px] w-full lg:w-[372px] shadow-2xl relative z-20 lg:scale-105">
              <h4 className="font-sans font-medium uppercase tracking-widest text-[16px] h-[72px] flex items-center">Gillette Group</h4>
              <div className="w-full border-t border-white/50" />
              <div className="flex flex-col w-full text-center">
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">{"<5%"}</span>
                </div>
                <div className="w-full border-t border-white/50" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">-1.2%</span>
                </div>
                <div className="w-full border-t border-white/50" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">100.5%</span>
                </div>
                <div className="w-full border-t border-white/50" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">12</span>
                  <span className="font-sans font-light text-[16px] mt-1">Days</span>
                </div>
                <div className="w-full border-t border-white/50" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">3,200</span>
                  <span className="font-sans font-light text-[16px] mt-1">Views</span>
                </div>
              </div>
            </div>

            {/* Market Average Column */}
            <div className="market-column flex flex-col items-center w-full lg:w-[372px] text-[#acacac]">
              <h4 className="font-sans font-medium uppercase tracking-widest text-[16px] h-[72px] flex items-center">Market Average</h4>
              <div className="w-full border-t border-[#484848]" />
              <div className="flex flex-col w-full text-center">
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">~20%</span>
                </div>
                <div className="w-full border-t border-[#484848]" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">-4.2%</span>
                </div>
                <div className="w-full border-t border-[#484848]" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">97%</span>
                </div>
                <div className="w-full border-t border-[#484848]" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">45</span>
                  <span className="font-sans font-light text-[16px] mt-1">Days</span>
                </div>
                <div className="w-full border-t border-[#484848]" />
                <div className="flex flex-col items-center justify-center h-[150px]">
                  <span className="font-serif text-[64px] leading-none">400</span>
                  <span className="font-sans font-light text-[16px] mt-1">Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section ref={footerRef} className="w-full max-w-[1440px] px-8 md:px-[96px] py-16 md:py-[80px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="footer-content flex-1 flex flex-col gap-8 text-center lg:text-left">
          <h2 className="font-serif text-[48px] md:text-[72px] lg:text-[96px] text-[#2b2b2b] leading-tight">Shannon Gillette Team</h2>
          <div className="w-[100px] h-px bg-[#2b2b2b] mx-auto lg:mx-0" />
          <p className="font-sans font-light text-[18px] md:text-[20px] text-[#2b2b2b] leading-relaxed max-w-[450px] mx-auto lg:mx-0">
            Experience marketing that&apos;s transparent, data-driven, and gets your home in front of serious buyers. Every campaign tracked. Every view documented. Every effort proven.
          </p>
          <button className="bg-[#2b2b2b] text-white px-8 py-4 font-sans font-medium uppercase tracking-widest text-sm w-fit hover:bg-black hover:scale-105 transition-all duration-300 mx-auto lg:mx-0">
            Let&apos;s Make Your Home Shine
          </button>
        </div>
        <div className="footer-image w-full lg:w-[600px] h-[400px] md:h-[500px] lg:h-[650px] relative rounded-[12px] overflow-hidden">
          <img src={imgRectangle2} alt="Profile" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* Copyright */}
      <div className="w-full py-12 md:py-16 flex flex-col items-center gap-6">
        <div className="w-[100px] md:w-[120px] h-[60px] md:h-[80px] relative">
          <img src={imgQvrn6Gdeq84Zgkw0Rlji1} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <p className="font-sans font-normal text-[12px] md:text-[14px] uppercase tracking-widest text-[#2b2b2b] opacity-50 text-center">
          All rights reserved. Gillette Group
        </p>
      </div>
    </main>
  );
}
