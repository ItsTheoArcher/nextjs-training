import type { Institution } from "@/data/content";

function formatDateRange(startDate: string, endDate: string | null): string {
  const fmt = (iso: string) => {
    const [year, month] = iso.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1))
      .toLocaleString("en", { month: "short", year: "numeric", timeZone: "UTC" })
      .toUpperCase();
  };
  return `${fmt(startDate)} – ${endDate ? fmt(endDate) : "PRESENT"}`;
}

export default function RoleList({
  institutions,
}: {
  institutions: Institution[];
}) {
  return (
    <ol className="group/list">
      {institutions.map((inst) =>
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
                    {role.skills.map((skill) => (
                      <li
                        key={skill}
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
  );
}
