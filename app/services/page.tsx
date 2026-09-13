import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, redesigns, stores, and autonomous workflows for Chicago businesses.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrap section-pad">
      <p className="kicker text-signal">Services</p>
      <h1 className="display-h2 mt-4 max-w-[16ch]">What we build</h1>
      <p className="mt-6 max-w-[36rem] text-[17px] text-mute desk:text-[18px]">
        Custom sites, redesigns, and stores — plus the workflows that handle intake, follow-up,
        and the rest of the repeat work.
      </p>

      <div className="mt-14 grid gap-10 desk:grid-cols-2">
        <article className="rounded-[18px] border border-mist bg-paper-elevated p-8">
          <p className="kicker text-signal">Websites</p>
          <h2 className="display-h3 mt-4">Found and chosen.</h2>
          <p className="mt-4 text-[16px] text-mute">
            Fast, clear sites set up so Chicago customers can actually reach you.
          </p>
          <a href="/#contact" className="mt-6 inline-flex text-signal">
            Start a website →
          </a>
        </article>
        <article className="rounded-[18px] bg-code-bg p-8 text-paper">
          <p className="kicker text-code-glow">AI &amp; workflows</p>
          <h2 className="display-h3 mt-4">The repeat work.</h2>
          <p className="mt-4 text-[16px] text-paper/70">
            Deployed systems for intake, follow-up, content, scheduling, and internal ops.
          </p>
          <a href="/#contact" className="mt-6 inline-flex text-code-glow">
            Talk about a workflow →
          </a>
        </article>
      </div>
    </div>
  );
}
