import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, redesigns, stores, and autonomous workflows for Chicago businesses.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrap section-pad">
      <div className="grid gap-10 desk:grid-cols-2">
        <article className="rounded-[12px] border border-line bg-elevated p-8">
          <h1 className="display-h2 max-w-[16ch]">Sites built to get you found and chosen.</h1>
          <p className="lead mt-4">
            Fast, clear sites set up so Chicago customers can actually reach you.
          </p>
          <a href="/#contact" className="tap mt-6 text-ink">
            Start a website
          </a>
        </article>
        <article className="rounded-[12px] bg-ink p-8 text-paper">
          <h2 className="display-h2">Systems that do the repeat work.</h2>
          <p className="mt-4 text-[16px] text-paper/80">
            Deployed, not decked. Not a chatbot bolted onto a footer.
          </p>
          <a href="/#contact" className="tap mt-6 text-paper">
            Talk about a workflow
          </a>
        </article>
      </div>
    </div>
  );
}
