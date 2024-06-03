import Image from "next/image";
import Roles from "@/components/roles"

import type { Content, Institution } from "@/data/content";

type ContentProps = Content;

function getTenure(roles: Institution["roles"]){
    let totalTenure = 0;
    roles.forEach((role) => {
      const endDateMs = role.endDate ? new Date(role.endDate).getTime() : Date.now();
      const startDateMs = new Date(role.startDate).getTime()
      totalTenure += ( endDateMs - startDateMs)
    })
  
    const totalTenureDays = totalTenure / (24 * 60 * 60 * 1000);
    const totalTenureYears = Math.floor((totalTenureDays / 365));
    const totalTenureMonths = Math.floor((totalTenureDays % 365) / 30.436875 );
    return `${totalTenureYears > 0 ? totalTenureYears + ' years': ''} ${totalTenureMonths} months`
  }

const Content: React.FC<ContentProps> = ({ title, institutions }) => {
    return (
      <section className="my-14 text-sm">
        <h2 className="text-lg mb-2 text-slate-900 dark:text-slate-100">{title}</h2>
        <div className="flex flex-col gap-6 divide-y-2">
          {institutions.map((institution, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="flex py-4">
                  <div className="flex items-center">
                      <Image
                        alt="Author"
                        src={institution.image}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                  </div>
                  <div className="flex flex-col ml-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-300">{institution.name}</h3>
                    <h4 className="text-slate-700 dark:text-slate-400">{getTenure(institution.roles)}</h4>
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