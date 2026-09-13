import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";

const websiteBullets = [
  "Says what you do in one pass",
  "Ranks for the searches that matter locally",
  "Easy to update after launch",
];

const workflowSteps = [
  { num: "01", title: "Intake", detail: "form to CRM" },
  { num: "02", title: "Qualify", detail: "score and route" },
  { num: "03", title: "Follow-up", detail: "draft and send" },
  { num: "04", title: "Schedule", detail: "booked" },
];

const processSteps = [
  {
    num: "01",
    label: "Call",
    title: "Thirty minutes.",
    body: "What you sell, who should find you, what working looks like.",
  },
  {
    num: "02",
    label: "Build",
    title: "You see the real thing.",
    body: "Changes while still easy.",
  },
  {
    num: "03",
    label: "Launch",
    title: "Live, tracked.",
    body: "Set up so the next edit is not a project.",
  },
];

export default function Home() {
  return (
    <>
      <section className="page-wrap pb-[72px] pt-[72px] desk:pb-[88px] desk:pt-[88px]">
        <p className="kicker text-signal">Chicago web design</p>
        <h1 className="display-h1 mt-5 max-w-[11ch]">
          A site that
          <br />
          <em className="italic text-signal-deep">brings in</em>
          <br />
          work.
        </h1>
        <p className="mt-7 max-w-[34rem] text-[17px] text-mute desk:text-[19px]">
          We design and build websites for Chicago businesses. Fast, clear, and set up so the
          right people can find you and get in touch.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-primary">
            Book a call
          </a>
          <a href="#services" className="btn btn-secondary">
            See services
          </a>
        </div>
      </section>

      <section className="page-wrap pb-[72px] desk:pb-[88px]">
        <div className="border-t border-ink/80 pt-8 desk:grid desk:grid-cols-[200px_1fr] desk:gap-10">
          <p className="kicker text-ink">Who it’s for</p>
          <p className="mt-3 max-w-[40rem] text-[17px] text-mute desk:mt-0 desk:text-[18px]">
            Local businesses tired of a site that looks fine and does nothing. Operators who want
            intake, follow-up, and busywork handled without hiring another person.
          </p>
        </div>
      </section>

      <section id="services" className="anchor-offset section-pad page-wrap">
        <p className="kicker text-signal">Services</p>
        <h2 className="display-h2 mt-4">What we build</h2>

        <div className="mt-12 grid gap-10 border-t border-mist pt-10 desk:grid-cols-2 desk:gap-16">
          <div>
            <p className="kicker text-signal">Websites</p>
            <h3 className="display-h3 mt-4 max-w-[16ch]">
              Sites built to get you found and chosen.
            </h3>
          </div>

          <div>
            <p className="text-[17px] text-mute desk:text-[18px]">
              Custom sites, redesigns, and stores. Fast, clear, and set up so Chicago customers can
              actually reach you.
            </p>
            <ul className="mt-8">
              {websiteBullets.map((item) => (
                <li
                  key={item}
                  className="border-t border-mist py-4 text-[16px] text-ink desk:text-[17px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-2 inline-flex items-center gap-2 text-[16px] font-medium text-signal">
              Start a website
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="workflows" className="anchor-offset bg-code-bg text-paper">
        <div className="page-wrap band-pad">
          <p className="kicker text-code-glow">AI &amp; workflows</p>
          <h2 className="display-h2 mt-4 max-w-[16ch]">Systems that do the repeat work.</h2>
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

          <div className="mt-12 grid gap-3 sm:grid-cols-2 desk:grid-cols-4">
            {workflowSteps.map((step) => (
              <article
                key={step.num}
                className="rounded-[18px] bg-code-card px-5 py-6"
              >
                <p className="font-mono text-[12px] text-paper/45">{step.num}</p>
                <h3 className="mt-6 font-display text-[28px] font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] text-paper/55">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad page-wrap">
        <p className="kicker text-signal">How we work</p>
        <h2 className="display-h2 mt-4">Three steps. No black box.</h2>
        <div className="mt-12 grid gap-10 desk:grid-cols-3 desk:gap-8">
          {processSteps.map((step) => (
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

      <section id="contact" className="anchor-offset section-pad page-wrap">
        <div className="grid items-start gap-12 desk:grid-cols-2 desk:gap-16">
          <div>
            <p className="kicker text-signal">Contact</p>
            <h2 className="display-h2 mt-4 max-w-[14ch]">Tell us what you need built.</h2>
            <p className="mt-6 max-w-[28rem] text-[17px] text-mute desk:text-[18px]">
              A site. A store. A workflow that takes a job off your plate. We will tell you if we
              are the right people for it.
            </p>
            <p id="about" className="anchor-offset mt-8 text-[16px] text-ink">
              Built in Chicago. Still in the work.
            </p>
            <div className="mt-6 space-y-2">
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
            <a href="#contact" className="btn btn-primary mt-8">
              Book a call
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
