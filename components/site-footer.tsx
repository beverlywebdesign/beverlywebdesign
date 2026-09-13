import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[13px] text-paper/80 sm:text-[14px]">
      <div className="page-wrap flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p>{SITE.tagline}</p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>{SITE.name}</span>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-paper">
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-paper">
            {SITE.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
