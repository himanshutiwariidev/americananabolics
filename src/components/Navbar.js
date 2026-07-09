"use client";

import Link from "next/link";
import { useState } from "react";

const leftLinks = [
  { title: 'Home', href: '/' },
  { title: 'Shop', href: '/shop' },
];
const rightLinks = [
  { title: 'About', href: '#' },
  { title: 'Blog', href: '#' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="relative mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
        <div className="hidden items-center gap-8 md:flex">
          {leftLinks.map((link) => (
            <NavLink key={link.title} href={link.href} onClick={closeMobileMenu}>
              {link.title}
            </NavLink>
          ))}
        </div>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-label="Go to homepage"
          onClick={closeMobileMenu}
        >
          {/* <img src="logo.png" className="h-15 w-auto object-cover" /> */}
          <span className="sr-only">Home</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {rightLinks.map((link) => (
            <NavLink key={link.title} href={link.href} onClick={closeMobileMenu}>
              {link.title}
            </NavLink>
          ))}
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <button
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
          <Link
            href="/contact"
            className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white px-6 pb-4">
          <div className="flex flex-col gap-3 pt-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:bg-slate-50 hover:text-emerald-700"
                onClick={closeMobileMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:text-emerald-700"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
