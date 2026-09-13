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
          <p className="kicker text-signal">Contact</p>
          <h1 className="display-h2 mt-4 max-w-[14ch]">Tell us what you need built.</h1>
          <p className="mt-6 max-w-[28rem] text-[17px] text-mute desk:text-[18px]">
            A site. A store. A workflow that takes a job off your plate. We will tell you if we are
            the right people for it.
          </p>
          <p className="mt-8 text-[16px] text-ink">Built in Chicago. Still in the work.</p>
          <div className="mt-6 space-y-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block font-display text-[28px] font-medium tracking-[-0.02em]"
            >
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-[16px] hover:text-signal">
              {SITE.email}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
