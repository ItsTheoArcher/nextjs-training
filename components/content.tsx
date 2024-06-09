import Image from "next/image";
import Roles from "@/components/roles"

import type { Content } from "@/data/content";

type ContentProps = Content;


const Content: React.FC<ContentProps> = ({ title, institutions }) => {
    return (
      <section className="my-9 text-sm">
        <h2 className="text-lg mb-2 text-slate-900 dark:text-slate-200">{title}</h2>
        <div className="flex flex-col gap-6 divide-y-2">
          {institutions.map((institution, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="flex py-4">
                  <div className="flex justify-center w-11">
                      <Image
                        alt="Author"
                        src={institution.image}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                  </div>
                  <div className="flex flex-col justify-center ml-1">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-200">{institution.name}</h3>
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