'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@/components/primitives/icon';
import { LanguageSwitcher } from './language-switcher';
import { BtnPrimary } from '@/components/primitives/btn-primary';

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>;
  ctaHref: string;
  ctaLabel: string;
}

export function MobileMenu({ links, ctaHref, ctaLabel }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
    }
    return () => {
      document.documentElement.classList.remove('menu-open');
    };
  }, [isOpen]);

  // Focus management via inert
  useEffect(() => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    if (isOpen) {
      mainEl.setAttribute('inert', '');
    } else {
      mainEl.removeAttribute('inert');
      // Return focus to hamburger button on close
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Hamburger button */}
      <button
        ref={hamburgerRef}
        className="mobile-menu-toggle"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={openMenu}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      <div
        id="mobile-menu"
        className="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        {...(isOpen ? { 'data-open': '' } : {})}
      >
        {/* Close button */}
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <Icon name="x" size={20} />
        </button>

        {/* Nav links */}
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            style={{
              transitionDelay: `${index * 50 + 100}ms`,
            }}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}

        {/* Language switcher */}
        <div className="mobile-menu-lang">
          <LanguageSwitcher />
        </div>

        {/* CTA */}
        <div className="mobile-menu-cta">
          <BtnPrimary href={ctaHref}>{ctaLabel}</BtnPrimary>
        </div>
      </div>
    </>
  );
}
