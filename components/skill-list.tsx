import type { Role } from '@/data/content'

const SkillList: React.FC<Role> = ({ skills }) => {
    return  ( skills ?
        <div className="text-gray-500 dark:text-gray-300 mt-2">
          {skills.map((skill, index) => {
            return (<span className="font-semibold text-xs text-nowrap mr-1" key={index}>{skill}{ index !== skills.length -1 ? ',' : null}</span>)
          })}
        </div> : null
    )
  }
export default SkillList;