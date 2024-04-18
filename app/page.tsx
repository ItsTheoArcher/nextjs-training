import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content, Institution, Role } from "@/data/content";

type ContentProps = Content;

const SkillList: React.FC<Role> = ({ skills }) => {
  return  (
      <div className="text-gray-500 dark:text-gray-400 mt-2">
        {skills.map((skill, index) => {
          return (<span className="font-semibold text-xs text-nowrap mr-1" key={index}>{skill}{ index !== skills.length -1 ? ',' : null}</span>)
        })}
      </div>
  )
}

const Roles: React.FC<Institution> = ({ roles }) => {
  return (
    <section className="text-sm">
      <ul className="timeline timeline-snap-icon timeline-vertical timeline-compact">
        {roles.map((role, index) => {
          return (
          <li key={index}>
            { index !== 0 ? (<hr/>) : null}
            <div className="timeline-middle mx-4">
              <div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
            </div>
            <div className="timeline-end">
              <div className="flex flex-col mb-4">
                <h4 className="font-semibold text-slate-600 dark:text-gray-400">{role.title}</h4>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {new Date(role.startDate).toLocaleString('en-nz',{month:'short', year:'numeric'})} - { role.endDate ? new Date(role.endDate).toLocaleString('en-nz',{month:'short', year:'numeric'}) : 'Present'}
                </div>
                <p className="text-xs text-slate-400 dark:text-gray-400">
                  {role.subTitle}
                </p>
                {role.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {role.description}
                  </p>
                ) : null}
                {role.skills ? (
                  <SkillList {...role} />
                ) : null}
              </div>
            </div>
            { index !== roles.length -1 ? (<hr/>) : null}
          </li>
          );
        })}
      </ul>
    </section>
  );
};

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

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex items-center">
          <Image
            alt="Author"
            src={generalData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100 font-semibold">
              {generalData.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-slate-400 dark:text-slate-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </span>
            ) : null}
          </div>
        </section>
        <section className="my-9 text-sm">
          <h2 className="text-lg mb-1 text-slate-900 dark:text-slate-100">About</h2>
          <div className="text-slate-600 dark:text-slate-300">
            <p>{generalData.about}</p>
          </div>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <section className="my-14 text-sm">
          <h2 className="text-lg mb-2 text-slate-900 dark:text-slate-100">Contact</h2>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
