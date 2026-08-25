'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export type StaggeredMenuItem = {
  label: string;
  ariaLabel?: string;
  link?: string;
  onClick?: () => void;
};

export type StaggeredMenuSocialItem = {
  label: string;
  link: string;
};

type StaggeredMenuProps = {
  position?: 'left' | 'right';
  items: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  colors?: [string, string];
  logoUrl?: string;
  accentColor?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
};

export default function StaggeredMenu({
  position = 'left',
  items,
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#ffffff',
  changeMenuColorOnOpen = true,
  colors = ['#0b0b0b', '#121212'],
  logoUrl,
  accentColor = '#ef4444',
  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const toggleLockRef = useRef(false);
  const hasSocials = displaySocials && socialItems.length > 0;
  const buttonColor = isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor;

  const runOpenAnimation = () => {
    const panelOffset = position === 'right' ? 24 : -24;

    gsap.fromTo(
      '.staggered-menu-panel',
      { x: panelOffset, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      },
    );

    gsap.fromTo(
      '.js-staggered-menu-item',
      { y: 16, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.08,
        overwrite: 'auto',
      },
    );

    gsap.fromTo(
      '.js-staggered-menu-social',
      { y: 10, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.35,
        ease: 'power2.out',
        stagger: 0.06,
        overwrite: 'auto',
        delay: 0.1,
      },
    );
  };

  const runCloseAnimation = (onComplete?: () => void) => {
    const panelOffset = position === 'right' ? 24 : -24;

    gsap.to('.js-staggered-menu-item', {
      y: 14,
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power2.in',
      stagger: 0.04,
      overwrite: 'auto',
    });

    gsap.to('.js-staggered-menu-social', {
      y: 8,
      autoAlpha: 0,
      duration: 0.2,
      ease: 'power2.in',
      stagger: 0.03,
      overwrite: 'auto',
    });

    gsap.to('.staggered-menu-panel', {
      x: panelOffset,
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
      overwrite: 'auto',
      onComplete,
    });
  };

  useGSAP(
    () => {
      if (!isOpen) {
        return;
      }

      runOpenAnimation();
    },
    { scope: rootRef, dependencies: [isOpen] },
  );

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
    onMenuOpen?.();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('menu-open');
      onMenuClose?.();
    };
  }, [isVisible, onMenuOpen, onMenuClose]);

  const handleToggle = () => {
    if (toggleLockRef.current) {
      return;
    }

    toggleLockRef.current = true;
    window.setTimeout(() => {
      toggleLockRef.current = false;
    }, 320);

    if (isOpen) {
      runCloseAnimation(() => {
        setIsOpen(false);
        setIsVisible(false);
        gsap.set('.staggered-menu-panel', { clearProps: 'opacity,transform' });
      });
      return;
    }

    gsap.set('.staggered-menu-panel', { clearProps: 'opacity,transform' });
    setIsVisible(true);
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  };

  return (
    <div ref={rootRef} className={`staggered-menu ${position} ${isVisible ? 'is-open' : ''}`}>
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="staggered-menu-toggle"
        onClick={handleToggle}
        style={{ color: buttonColor, borderColor: buttonColor }}
      >
        {isOpen ? <CloseRoundedIcon sx={{ fontSize: 20 }} /> : <MenuRoundedIcon sx={{ fontSize: 20 }} />}
        <span className="staggered-menu-label">Menu</span>
      </button>

      <div
        className="staggered-menu-panel"
        style={{ background: `linear-gradient(145deg, ${colors[0]}, ${colors[1]})` }}
        aria-hidden={!isVisible}
      >
        <div className="staggered-menu-sheen" style={{ borderColor: accentColor }} />
        <div className="staggered-menu-content">
          {logoUrl ? (
            <div className="staggered-menu-logo">
              <img src={logoUrl} alt="Menu logo" />
            </div>
          ) : null}
          <nav className="staggered-menu-nav" aria-label="Primary">
            {items.map((item, index) => {
              const numbering = displayItemNumbering ? `${String(index + 1).padStart(2, '0')}` : null;
              const isExternal = item.link?.startsWith('http');

              const content = (
                <>
                  {numbering ? <span className="staggered-menu-number">{numbering}</span> : null}
                  <span className="staggered-menu-text">{item.label}</span>
                </>
              );

              if (item.onClick) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className="staggered-menu-item js-staggered-menu-item"
                    aria-label={item.ariaLabel ?? item.label}
                    onClick={() => {
                      item.onClick?.();
                      runCloseAnimation(() => {
                        setIsOpen(false);
                        setIsVisible(false);
                        gsap.set('.staggered-menu-panel', { clearProps: 'opacity,transform' });
                      });
                    }}
                  >
                    {content}
                  </button>
                );
              }

              if (item.link) {
                return isExternal ? (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="staggered-menu-item js-staggered-menu-item"
                    aria-label={item.ariaLabel ?? item.label}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="staggered-menu-item js-staggered-menu-item"
                    aria-label={item.ariaLabel ?? item.label}
                    onClick={() => {
                      runCloseAnimation(() => {
                        setIsOpen(false);
                        setIsVisible(false);
                        gsap.set('.staggered-menu-panel', { clearProps: 'opacity,transform' });
                      });
                    }}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <span key={item.label} className="staggered-menu-item js-staggered-menu-item">
                  {content}
                </span>
              );
            })}
          </nav>

          {hasSocials ? (
            <div className="staggered-menu-socials" aria-label="Social links">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="staggered-menu-social js-staggered-menu-social"
                >
                  {social.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
