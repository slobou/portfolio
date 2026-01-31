"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../../../../public/assets/components/Logo";
import StarBorder from "@/components/blocks/StarBorder/StarBorder";
import ShinyText from "@/components/blocks/TextAnimations/ShinyText/ShinyText";

const RESUME_PATH = "/assets/Resume - Santiago Lobo.pdf";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  items,
  className = "",
  ease = "power3.out",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] md:w-[88%] max-w-[800px] 2xl:max-w-[880px] 3xl:max-w-[920px] 4xl:max-w-[960px] z-99 top-[0.8em] sm:top-[1em] md:top-[1.5em] lg:top-[2em] xl:top-[2em] px-2 sm:px-0 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] dark:bg-black bg-white transition-colors duration-200 ease-out`}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-2">
          <div
            className={`hamburger-menu ${
              isHamburgerOpen ? "open" : ""
            } group h-full flex flex-col items-center justify-center cursor-pointer order-2 md:order-0 dark:text-white text-black relative w-[40px] transition-colors duration-200 ease-out`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-in-out absolute ${
                isHamburgerOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-[8px]"
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-in-out absolute ${
                isHamburgerOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-[8px]"
              } group-hover:opacity-75`}
            />
          </div>
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-0 font-[--font-montserrat] transition-colors duration-200 ease-out">
            <Logo
              width={48}
              height={48}
              className="dark:text-slate-200 text-gray-400"
            />
          </div>

          <a
            href={RESUME_PATH}
            download="Santiago-Lobo-Resume.pdf"
            className="card-nav-cta-button btn hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 h-full font-semibold cursor-pointer transition-colors duration-200 ease-out no-underline bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white dark:bg-emerald-900 dark:hover:bg-emerald-950 dark:active:bg-emerald-950 dark:text-white"
            style={
              buttonBgColor != null
                ? { backgroundColor: buttonBgColor, color: buttonTextColor }
                : undefined
            }
            aria-label="Download resume (PDF)"
          >
            <ShinyText text="Download Resume" speed={5} />
          </a>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => {
                  const isExternal =
                    lnk.href.startsWith("http") ||
                    lnk.href.startsWith("mailto:");
                  return (
                    <a
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <GoArrowUpRight
                        className="nav-card-link-icon shrink-0"
                        aria-hidden="true"
                      />
                      {lnk.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
