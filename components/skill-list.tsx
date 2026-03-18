import type { Role } from '@/data/content'

const SkillList: React.FC<Role> = ({ skills }) => {
    return skills ? (
        <ul className="flex flex-wrap gap-2 mt-2" aria-label="Technologies used">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400"
            >
              {skill}
            </li>
          ))}
        </ul>
    ) : null
  }
export default SkillList;
