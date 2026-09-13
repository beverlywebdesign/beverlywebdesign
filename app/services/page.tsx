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
      <div className="mt-14 grid gap-10 desk:grid-cols-2">
        <article className="rounded-[18px] border border-mist bg-paper-elevated p-8">
          <h1 className="display-h2 max-w-[16ch]">Sites built to get you found and chosen.</h1>
          <p className="lead mt-4">
            Fast, clear sites set up so Chicago customers can actually reach you.
          </p>
          <a href="/#contact" className="tap mt-6 text-signal">
            Start a website
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </article>
        <article className="rounded-[18px] bg-code-bg p-8 text-paper">
          <p className="kicker text-code-glow">AI &amp; workflows</p>
          <h2 className="display-h2 mt-4">Systems that do the repeat work.</h2>
          <p className="mt-4 text-[16px] text-paper/70">
            Deployed, not decked. Not a chatbot bolted onto a footer.
          </p>
          <a href="/#contact" className="tap mt-6 text-code-glow">
            Talk about a workflow
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </article>
      </div>
    </div>
  );
}
