import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[66px] border-b border-ink/5 bg-paper/92 backdrop-blur-md">
      <div className="page-wrap flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          className="tap shrink-0 text-[15px] font-semibold tracking-[-0.02em] text-ink desk:text-base"
        >
          {SITE.name}
        </Link>

        <div className="flex items-center gap-3 desk:gap-6">
          <nav
            className="hidden items-center gap-6 text-[14px] text-ink desk:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="tap transition-colors hover:text-signal">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="tap whitespace-nowrap text-[12px] text-ink transition-colors hover:text-signal sm:text-[14px]"
          >
            {SITE.phoneDisplay}
          </a>

          <a href="/#contact" className="btn btn-primary btn-header whitespace-nowrap">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
