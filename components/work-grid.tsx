import { WORK } from "@/lib/site";

const thumbs: Record<(typeof WORK)[number]["thumb"], string> = {
  pbc: "work-thumb-pbc",
  bbl: "work-thumb-bbl",
};

export function WorkGrid() {
  return (
    <div className="work-grid mt-12" data-count={WORK.length}>
      {WORK.map((item) => (
        <article
          key={item.domain}
          className="overflow-hidden rounded-[18px] bg-paper-elevated shadow-card"
        >
          <div className={`work-thumb ${thumbs[item.thumb]}`} aria-hidden="true">
            <span className="work-thumb-label">{item.domain}</span>
          </div>
          <div className="px-6 pb-7 pt-6 sm:px-7">
            <h3 className="font-display text-[28px] font-medium tracking-[-0.02em] text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[16px] text-mute">{item.blurb}</p>
            <a
              href={item.href}
              className="mt-4 inline-flex min-h-11 items-center text-[16px] font-medium text-signal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.domain}
              <span aria-hidden="true">&nbsp;→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
