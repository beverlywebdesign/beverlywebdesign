import { ContactForm } from "@/components/contact-form";
import { WorkGrid } from "@/components/work-grid";
import {
  PROCESS_STEPS,
  SITE,
  WEBSITE_BULLETS,
  WORKFLOW_STEPS,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="page-wrap pb-16 pt-[72px] desk:pb-20 desk:pt-[96px]" aria-labelledby="hero-heading">
        <p className="kicker text-signal">Chicago web design</p>
        <h1 id="hero-heading" className="display-h1 mt-5 max-w-[12ch]">
          A site that
          <br />
          <em className="italic text-signal-deep">brings in</em>
          <br />
          work.
        </h1>
        <p className="lead mt-7 max-w-[34rem] desk:text-[19px]">
          We design and build websites for Chicago businesses. Fast, clear, and set up so the
          right people can find you and get in touch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#services" className="btn btn-secondary">
            See services
          </a>
        </div>
      </section>

      <section className="page-wrap pb-16 desk:pb-20" aria-labelledby="who-heading">
        <div className="border-t border-ink/80 pt-8 desk:grid desk:grid-cols-[200px_1fr] desk:gap-10">
          <p id="who-heading" className="kicker text-ink">
            Who it’s for
          </p>
          <p className="lead mt-3 max-w-[40rem] desk:mt-0">
            Local businesses tired of a site that looks fine and does nothing. Operators who want
            intake, follow-up, and busywork handled without hiring another person.
          </p>
        </div>
      </section>

      <section id="services" className="anchor-offset section-pad page-wrap" aria-labelledby="websites-heading">
        <p className="kicker text-signal">Services</p>
        <div className="mt-12 grid gap-10 border-t border-mist pt-10 desk:grid-cols-2 desk:gap-16">
          <div>
            <h2 id="websites-heading" className="display-h2 max-w-[16ch]">
              Sites built to get you found and chosen.
            </h2>
          </div>
          <div>
            <p className="lead">
              Custom sites, redesigns, and stores. Fast, clear, and set up so Chicago customers can
              actually reach you.
            </p>
            <ul className="mt-8">
              {WEBSITE_BULLETS.map((item) => (
                <li
                  key={item}
                  className="border-t border-mist py-4 text-[16px] text-ink desk:text-[17px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="tap mt-2 text-[16px] font-medium text-signal">
              Start a website
              <span aria-hidden="true">&nbsp;→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="workflows" className="anchor-offset bg-code-bg text-paper" aria-labelledby="workflows-heading">
        <div className="page-wrap band-pad">
          <p className="kicker text-code-glow">AI &amp; workflows</p>
          <h2 id="workflows-heading" className="display-h2 mt-4 max-w-[16ch]">
            Systems that do the repeat work.
          </h2>
          <p className="mt-6 max-w-[40rem] text-[17px] text-paper/78 desk:text-[18px]">
            We design and deploy autonomous workflows for the parts of the business that eat your
            week: intake, follow-up, content, scheduling, internal ops.
          </p>
          <p className="mt-4 max-w-[36rem] text-[16px] text-paper/62">
            Deployed, not decked. Not a chatbot bolted onto a footer.
          </p>
          <a href="#contact" className="btn btn-primary mt-8">
            Talk about a workflow
          </a>

          <div className="mt-12 grid grid-cols-2 gap-3 desk:grid-cols-4">
            {WORKFLOW_STEPS.map((step) => (
              <article key={step.num} className="rounded-[18px] bg-code-card px-4 py-6 sm:px-5">
                <p className="font-mono text-[12px] text-paper/45">{step.num}</p>
                <h3 className="mt-6 font-display text-[24px] font-medium tracking-[-0.02em] sm:text-[28px]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] text-paper/55">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad page-wrap" aria-labelledby="process-heading">
        <p className="kicker text-signal">How we work</p>
        <h2 id="process-heading" className="display-h2 mt-4">
          Three steps. No black box.
        </h2>
        <div className="mt-12 grid gap-10 desk:grid-cols-3 desk:gap-8">
          {PROCESS_STEPS.map((step) => (
            <article key={step.num} className="border-t-2 border-ink pt-6">
              <p className="font-mono text-[12px] text-mute">
                {step.num} — {step.label}
              </p>
              <h3 className="display-h3 mt-5">{step.title}</h3>
              <p className="mt-3 text-[16px] text-mute">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="anchor-offset section-pad page-wrap" aria-labelledby="work-heading">
        <p className="kicker text-signal">Work</p>
        <h2 id="work-heading" className="display-h2 mt-4 max-w-[16ch]">
          Two sites. Built, not mocked up.
        </h2>
        <p className="lead mt-5 max-w-[36rem]">
          Real pages, live. Outcomes when we have them.
        </p>
        <WorkGrid />
      </section>

      <section id="about" className="anchor-offset bg-ink text-paper" aria-labelledby="about-heading">
        <div className="page-wrap band-pad">
          <p className="kicker text-code-glow">Beverly, Chicago</p>
          <h2 id="about-heading" className="display-h2 mt-4 max-w-[16ch]">
            We still write the code.
          </h2>
          <p className="mt-6 max-w-[40rem] text-[17px] text-paper/78 desk:text-[18px]">
            Neighborhood studio. One senior builder, not an account stack. Websites first.
            Workflows when you want the work behind them to run without you in every loop.
          </p>
          <p className="mt-5 max-w-[36rem] text-[17px] text-paper/70 desk:text-[18px]">
            If you want a template and a long chain of people, wrong shop.
          </p>
        </div>
      </section>

      <section id="contact" className="anchor-offset section-pad page-wrap" aria-labelledby="contact-heading">
        <div className="grid items-start gap-12 desk:grid-cols-2 desk:gap-16">
          <div>
            <p className="kicker text-signal">Contact</p>
            <h2 id="contact-heading" className="display-h2 mt-4 max-w-[14ch]">
              Tell us what you need built.
            </h2>
            <p className="lead mt-6 max-w-[28rem]">
              A site. A store. A workflow that takes a job off your plate. We will tell you if we
              are the right people for it.
            </p>
            <div className="mt-8 space-y-2">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block font-display text-[28px] font-medium tracking-[-0.02em] text-ink"
              >
                {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="block text-[16px] text-ink hover:text-signal">
                {SITE.email}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
