"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
  ctaButton?: {
    text: string;
    href: string;
  };
}

export default function Navbar({ logo, links, ctaButton }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-900">
          {logo}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          {ctaButton && (
            <Link href={ctaButton.href}>
              <Button size="sm">{ctaButton.text}</Button>
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-6">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
                {ctaButton && (
                  <Link href={ctaButton.href} onClick={() => setOpen(false)}>
                    <Button className="mt-4">{ctaButton.text}</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
