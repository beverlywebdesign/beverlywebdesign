import Image from "next/image";
import { WORK } from "@/lib/site";

export function WorkGrid() {
  return (
    <div className="work-grid mt-12" data-count={WORK.length}>
      {WORK.map((item) => (
        <article key={item.domain} className="overflow-hidden rounded-[12px] border border-line bg-elevated">
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
            <div className="work-thumb">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 860px) 520px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </a>
          <div className="px-6 pb-7 pt-6 sm:px-7">
            <h3 className="title-md text-ink">{item.title}</h3>
            <p className="mt-2 text-[16px] text-mute">{item.blurb}</p>
            <a
              href={item.href}
              className="mt-4 inline-flex min-h-11 items-center text-[16px] font-medium text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.domain}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
