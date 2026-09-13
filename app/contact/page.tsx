import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Beverly Web Design what you need built. A site, a store, or a workflow.",
};

export default function ContactPage() {
  return (
    <div id="contact" className="page-wrap section-pad">
      <div className="grid items-start gap-12 desk:grid-cols-2 desk:gap-16">
        <div>
          <h1 className="display-h2 max-w-[14ch]">Tell us what you need built.</h1>
          <p className="lead mt-6 max-w-[28rem]">
            A site. A store. A workflow that takes a job off your plate. We’ll tell you if we’re
            the right people for it.
          </p>
          <div className="mt-8 space-y-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block text-[28px] font-semibold tracking-[-0.02em]"
            >
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-[16px] text-ink">
              {SITE.email}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
