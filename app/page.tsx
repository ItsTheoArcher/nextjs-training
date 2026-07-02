import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import Nav from "@/components/nav";
import CursorGradient from "@/components/cursor-gradient";
import Section from "@/components/section";
import RoleList from "@/components/role-list";

export default function Home() {
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
            <p className="mt-4 max-w-xs leading-normal">{generalData.tagline}</p>

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
            {generalData.github && (
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
            )}
            {generalData.contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
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
          <Section id="about" title="About" ariaLabel="About me">
            <div className="space-y-4">
              {generalData.about.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          </Section>

          {contentData.map((section) => (
            <Section
              key={section.title}
              id={section.title.toLowerCase()}
              title={section.title}
              ariaLabel={section.title}
            >
              <RoleList institutions={section.institutions} />
            </Section>
          ))}

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
