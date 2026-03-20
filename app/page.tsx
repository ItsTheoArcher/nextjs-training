import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import Nav from "@/components/nav";
import CursorGradient from "@/components/cursor-gradient";

function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  const fmt = (d: Date) =>
    d.toLocaleString("en", { month: "short", year: "numeric" }).toUpperCase();
  return `${fmt(start)} — ${end ? fmt(end) : "PRESENT"}`;
}

export default function Home() {
  const experienceData = contentData.find((c) => c.title === "Experience");
  const educationData = contentData.find((c) => c.title === "Education");

  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <CursorGradient />
      <div className="relative z-10 lg:flex lg:justify-between lg:gap-4">
        {/* ── Left sticky sidebar ── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
              <a href="/">{generalData.name}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-100">
              {generalData.jobTitle}
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              {generalData.tagline}
            </p>

            <Nav />
          </div>

          <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
            {generalData.website && (
              <li>
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-500 hover:text-neutral-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
              </li>
            )}
            <li>
              <a
                href={generalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-500 hover:text-neutral-100 transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </li>
            {generalData.contacts.map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-500 hover:text-neutral-100 transition-colors"
                  aria-label={contact.label}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* ── Right scrolling content ── */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          {/* About */}
          <section
            id="about"
            className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-100">
                About
              </h2>
            </div>
            <div className="space-y-4">
              {generalData.about.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section
            id="experience"
            className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-100">
                Experience
              </h2>
            </div>
            <div>
              <ol className="group/list">
                {experienceData?.institutions.map((inst) =>
                  inst.roles.map((role) => (
                    <li key={role.id} className="mb-12">
                      <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg lg:hover:bg-neutral-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg p-4 -m-4">
                        <header className="sm:col-span-2 mt-1 mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:mb-0">
                          {formatDateRange(role.startDate, role.endDate)}
                        </header>
                        <div className="sm:col-span-6">
                          <h3 className="font-medium leading-snug text-neutral-100">
                            <span className="group-hover:text-emerald-400 transition-colors">
                              {role.title} · {inst.name}
                            </span>
                          </h3>
                          {role.description && (
                            <p className="mt-2 text-sm leading-normal">
                              {role.description}
                            </p>
                          )}
                          {role.skills && (
                            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                              {role.skills.map((skill, i) => (
                                <li
                                  key={i}
                                  className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400"
                                >
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ol>

            </div>
          </section>

          {/* Education */}
          <section
            id="education"
            className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
            aria-label="Education"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-100">
                Education
              </h2>
            </div>
            <ol className="group/list">
              {educationData?.institutions.map((inst) =>
                inst.roles.map((role) => (
                  <li key={role.id} className="mb-12">
                    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg lg:hover:bg-neutral-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg p-4 -m-4">
                      <header className="sm:col-span-2 mt-1 mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:mb-0">
                        {formatDateRange(role.startDate, role.endDate)}
                      </header>
                      <div className="sm:col-span-6">
                        <h3 className="font-medium leading-snug text-neutral-100">
                          <span className="group-hover:text-emerald-400 transition-colors">
                            {role.title} · {inst.name}
                          </span>
                        </h3>
                        {role.description && (
                          <p className="mt-2 text-sm leading-normal">
                            {role.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ol>
          </section>

          {/* Footer */}
          <footer className="max-w-md pb-16 text-sm text-neutral-500">
            <p>
              Built with{" "}
              <a href="https://nextjs.org" className="font-medium text-neutral-400 hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Next.js
              </a>{" "}
              and{" "}
              <a href="https://tailwindcss.com" className="font-medium text-neutral-400 hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Tailwind CSS
              </a>
              , deployed on{" "}
              <a href="https://vercel.com" className="font-medium text-neutral-400 hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
