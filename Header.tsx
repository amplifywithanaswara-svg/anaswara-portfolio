"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">
          {site.name}<span className="text-pink">.</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium ${path === n.href ? "bg-ink text-white" : "hover:bg-lilac"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-ink/10 px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              aria-current={path === n.href ? "page" : undefined}
              className={`rounded-xl px-4 py-3 font-medium ${path === n.href ? "bg-ink text-white" : "hover:bg-lilac"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
