import Link from "next/link";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[68px] border-b border-ink/5 bg-paper/92 backdrop-blur-md">
      <div className="page-wrap flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-semibold tracking-[-0.02em] text-ink desk:text-base"
        >
          {SITE.name}
        </Link>

        <div className="flex items-center gap-4 desk:gap-6">
          <nav className="hidden items-center gap-6 text-[14px] text-ink desk:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-signal">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="whitespace-nowrap text-[12px] text-ink transition-colors hover:text-signal sm:text-[14px]"
          >
            {SITE.phoneDisplay}
          </a>

          <a href="/#contact" className="btn btn-primary btn-header whitespace-nowrap">
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
