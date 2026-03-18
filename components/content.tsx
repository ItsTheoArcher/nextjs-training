import Image from "next/image";
import Roles from "@/components/roles"
import RoleTenure from "@/components/tenure"

import type { Content } from "@/data/content";

type ContentProps = Content;


const Content: React.FC<ContentProps> = ({ title, institutions }) => {
    return (
      <section className="my-9 text-sm">
        <h2 className="text-lg mb-2 text-slate-900 dark:text-slate-200 font-semibold pl-3 border-l-2 border-teal-500">{title}</h2>
        <div className="flex flex-col gap-4">
          {institutions.map((institution, index) => {
            const isCompact = institution.roles.length === 1 && !institution.roles[0].skills;
            return isCompact ? (
              <div className="flex items-center gap-3 px-4 py-3 border border-slate-100 dark:border-slate-700 rounded-xl bg-white dark:bg-neutral-800/50 hover:border-teal-200 dark:hover:border-teal-800 transition-colors" key={index}>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center w-9 h-9 overflow-hidden flex-shrink-0">
                  <Image
                    alt={`${institution.name} logo`}
                    src={institution.image}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="font-semibold text-slate-900 dark:text-slate-200 text-sm">{institution.roles[0].title}</h2>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <RoleTenure startDate={institution.roles[0].startDate} endDate={institution.roles[0].endDate} />
                  </div>
                  {institution.roles[0].description ? (
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-0.5">{institution.roles[0].description}</p>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="flex flex-col border border-slate-100 dark:border-slate-700 rounded-xl p-4 bg-white dark:bg-neutral-800/50 hover:border-teal-200 dark:hover:border-teal-800 transition-colors" key={index}>
                <div className="flex py-1 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex justify-center w-11">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center w-9 h-9 overflow-hidden">
                      <Image
                        alt={`${institution.name} logo`}
                        src={institution.image}
                        width={40}
                        height={40}
                        className="object-contain w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center ml-2">
                    <h2 className="font-semibold text-slate-900 dark:text-slate-200">{institution.name}</h2>
                  </div>
                </div>
                <Roles {...institution} />
              </div>
            );
          })}
        </div>
      </section>
    );
  };

export default Content;