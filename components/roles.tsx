import SkillList from "./skill-list";
import RoleTenure from "./tenure";
import type { Institution } from "@/data/content";

const Roles: React.FC<Institution> = ({ roles }) => {
  return (
    <section className="text-sm">
      <ul className="timeline timeline-snap-icon timeline-vertical timeline-compact">
        {roles.map((role, index) => {
          return (
            <li key={role.id}>
              {index !== 0 ? (<hr className="bg-teal-100 dark:bg-teal-900/40 rounded-none" />) : null}
              <div className="timeline-middle mx-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full ring-2 ring-teal-200 dark:ring-teal-900"></div>
              </div>
              <div className="timeline-end">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-gray-100">{role.title}</h4>
                    {!role.endDate && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    <RoleTenure startDate={role.startDate} endDate={role.endDate} />
                  </div>
                  {role.subTitle && (index === 0 || role.subTitle !== roles[index - 1].subTitle) ? (
                    <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {role.subTitle}
                    </span>
                  ) : null}
                  {role.description ? (
                    <p className="text-slate-700 dark:text-gray-300 mt-2">
                      {role.description}
                    </p>
                  ) : null}
                  {role.skills ? (
                    <SkillList {...role} />
                  ) : null}
                </div>
              </div>
              {index !== roles.length - 1 ? (<hr className="bg-teal-100 dark:bg-teal-900/40 rounded-none" />) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Roles;
