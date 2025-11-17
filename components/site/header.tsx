"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal-700 text-white font-semibold flex items-center justify-center">
            DT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">Doctor Tuji</span>
            <span className="text-xs text-slate-500">Orthopedic Clinic</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+251946904290" className="text-sm font-semibold text-slate-700">
            +251937525119
          </a>
          <Link href="/contact">
            <Button size="sm" className="rounded-full bg-teal-700 hover:bg-teal-800">
              Book appointment
            </Button>
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
        >
          <span className={cn("text-2xl leading-none", open && "rotate-90 transition-transform")}>≡</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-sm">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-full bg-teal-700 hover:bg-teal-800">
                Book appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


