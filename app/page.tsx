import Image from "next/image";

type Project = {
  slug: string;
  name: string;
  image: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
};

const projects: Project[] = [
  {
    slug: "quietlist",
    name: "Quietlist", // <Image src="/projects/quietlist.svg" alt="Quietlist" />
    image: "/projects/quietlist.svg",
    tags: ["Bubble", "Postmark", "Image Tooling"],
    problem:
      "Property owners and renters had no dedicated marketplace for listing and browsing rental properties with rich, image-heavy listings.",
    approach:
      "Built the platform end-to-end as the sole developer in Bubble, including custom image-editing tools for listing photos and Postmark-powered transactional email for inquiries.",
    outcome:
      "A live property marketplace handling real listings, renter inquiries, and owner-renter communication.",
  },
  {
    slug: "wellshareway",
    name: "WellShareWay", // <Image src="/projects/wellshareway.svg" alt="WellShareWay" />
    image: "/projects/wellshareway.svg",
    tags: ["Bubble", "Acuity Scheduling", "Stripe"],
    problem:
      "Clinics needed a shared marketplace where patients could discover providers and book paid appointments online.",
    approach:
      "Built the booking marketplace in Bubble, integrating Acuity Scheduling for provider calendars and Stripe for payment collection, then stayed on as ongoing developer support for the live platform.",
    outcome:
      "A live clinic marketplace processing real appointment bookings and payments across multiple providers.",
  },
  {
    slug: "parianlabs",
    name: "Parian Labs", // <Image src="/projects/parianlabs.svg" alt="Parian Labs" />
    image: "/projects/parianlabs.svg",
    tags: ["Bubble", "TensorFlow", "Computer Vision", "Stripe"],
    problem:
      "A fitness product needed real-time, camera-based motion tracking — well outside what a no-code platform supports out of the box.",
    approach:
      "As main developer, built custom Bubble plugins bridging the app's camera input with a TensorFlow computer-vision model, alongside Stripe billing and Postmark email for the surrounding product.",
    outcome:
      "A shipped AI-driven fitness product combining a no-code frontend with a custom computer-vision pipeline.",
  },
  {
    slug: "pattayarentacar",
    name: "Pattaya Rent a Car", // <Image src="/projects/pattayarentacar.svg" alt="Pattaya Rent a Car" />
    image: "/projects/pattayarentacar.svg",
    tags: ["Bubble", "Google Sheets API", "SendGrid"],
    problem:
      "A car rental marketplace needed reliable date-range availability booking against an inventory workflow already run through Google Sheets.",
    approach:
      "Built a custom date-picker component in Bubble, synced bookings to a Google Sheets-backed inventory, and wired SendGrid for reservation confirmation emails.",
    outcome:
      "A live rental booking site handling real reservations against synced vehicle availability.",
  },
  {
    slug: "fieldops",
    name: "FieldOps / Conserva", // <Image src="/projects/fieldops.svg" alt="FieldOps / Conserva" />
    image: "/projects/fieldops.svg",
    tags: ["Bubble", "Xano", "Make.com", "GoHighLevel"],
    problem:
      "A field-services business needed a CRM tying together leads, scheduling, and automations instead of stitching together disconnected tools.",
    approach:
      "Built the CRM on Bubble with CanvasTemplate, connected GoHighLevel and Make.com for automations, a Xano backend for structured data, and Manus.ai for AI-assisted workflows.",
    outcome:
      "An operational CRM running the business's day-to-day lead and field-scheduling workflows.",
  },
];

const skills = [
  "Low-code / No-code Development",
  "Bubble.io",
  "PHP",
  "JavaScript",
  "Databases",
  "Payment Gateways",
  "AI Automation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-ink-100 bg-ink-50/80 backdrop-blur">
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink-900">
            Jobin Blancaflor
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-ink-700 sm:flex">
            <a href="#about" className="transition hover:text-brand-600">About</a>
            <a href="#projects" className="transition hover:text-brand-600">Projects</a>
            <a href="#contact" className="transition hover:text-brand-600">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 sm:px-5"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-ink-950 bg-hero-grid [background-size:22px_22px] text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/40 via-ink-950 to-ink-950" />
        <div className="relative mx-auto flex max-w-content flex-col gap-8 px-6 py-20 sm:px-8 sm:py-28 md:py-36 lg:flex-row lg:items-center lg:justify-between lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200 sm:text-sm">
              Software Engineer &middot; Product-minded builder
            </p>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              I turn ambiguous problems into software teams actually rely on.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
              I&rsquo;m a full-stack engineer who ships production systems end to end &mdash;
              from data pipelines to pixel-level UI &mdash; and I care as much about the
              outcome as the code.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://calendar.app.google/p8LkewkGg9MKoGr58"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-card transition hover:bg-amber-400 sm:text-base"
              >
                Let's Talk
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:text-base"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
          <div className="grid w-full max-w-sm grid-cols-2 gap-4 self-center text-center sm:max-w-md md:grid-cols-2 lg:w-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">8+</p>
              <p className="mt-1 text-xs text-ink-300 sm:text-sm">years shipping production software</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">5</p>
              <p className="mt-1 text-xs text-ink-300 sm:text-sm">flagship products launched</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">30+</p>
              <p className="mt-1 text-xs text-ink-300 sm:text-sm">engineers mentored</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">99.9%</p>
              <p className="mt-1 text-xs text-ink-300 sm:text-sm">uptime on systems I own</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">About</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              How I work
            </h2>
            <div className="relative mt-8 aspect-square w-full max-w-xs overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-100 md:max-w-none">
              <Image
                src="/headshot.png"
                alt="Jobin Blancaflor"
                fill
                sizes="(min-width: 768px) 30vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg">
            <p>
              I&rsquo;m a full-stack software engineer who spends most of my time in the
              overlap between clear product thinking and clean systems design. I&rsquo;ve
              led greenfield builds, rescued stalled migrations, and spent plenty of
              nights on-call learning what &ldquo;production-ready&rdquo; actually means.
            </p>
            <p>
              I build marketplaces, booking platforms, CRMs, and AI-powered products
              using a mix of low-code/no-code and hand-written code &mdash; Bubble.io
              for speed, PHP and JavaScript where custom logic is needed, plus the
              databases, payment gateways, and automations that make them run in
              production. The constant across every project: talk to the people who
              will use the thing, ship in small increments, and measure whether it
              actually solved the problem.
            </p>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                What I work with
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-ink-100/60 py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">Selected work</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Case studies
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              Five projects, five different problems &mdash; each one a snapshot of
              taking something ambiguous from &ldquo;we have a problem&rdquo; to
              &ldquo;this is measurably better.&rdquo;
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              /* Project card: name "{project.name}" paired directly with its <Image>. */
              return (
                <article
                  key={project.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-cardHover"
                >
                  {/* Quietlist / WellShareWay / Parian Labs / Pattaya Rent a Car / FieldOps */}
                  <h3 className="sr-only">{project.name}</h3>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-900">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview graphic`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h4 className="font-display text-xl font-bold text-ink-900">
                        {project.name}
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <dl className="space-y-3 text-sm leading-relaxed text-ink-600">
                      <div>
                        <dt className="font-semibold text-ink-800">Problem</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink-800">Approach</dt>
                        <dd>{project.approach}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ink-800">Outcome</dt>
                        <dd className="text-brand-700">{project.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">Contact</span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Have a hard problem worth solving? Let&rsquo;s talk.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
            The fastest way to reach me is to book a slot directly &mdash; no
            back-and-forth required. I&rsquo;m also happy to connect over email,
            LinkedIn, or GitHub.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://calendar.app.google/p8LkewkGg9MKoGr58"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-ink-950 shadow-card transition hover:bg-amber-400 sm:w-auto sm:text-base"
            >
              Let's Talk
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto sm:text-base"
            >
              Download CV (PDF)
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-ink-300 sm:text-base">
            <a href="https://www.linkedin.com/in/jobin-blancaflor-760191161/" className="transition hover:text-white">
              LinkedIn
            </a>
            <span className="text-ink-700">&middot;</span>
            <a href="https://github.com/jobinblancaflor" className="transition hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-100 bg-ink-50 py-10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 text-sm text-ink-500 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} Jobin Blancaflor. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/jobinblancaflor" className="transition hover:text-brand-600">GitHub</a>
            <a href="https://www.linkedin.com/in/jobin-blancaflor-760191161/" className="transition hover:text-brand-600">LinkedIn</a>
            <a href="/cv.pdf" className="transition hover:text-brand-600">CV</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
