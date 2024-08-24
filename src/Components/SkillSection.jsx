import React from 'react';
import SkillsCard from './SkillsCard';
import SkillsObject from './SkillsObject';

const SkillSection = () => {
  return (
    <div className='mb-20 lg:mb-36'>
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className='h-[300px] overflow-y-scroll select-none scroll-bar'>
        {
          SkillsObject.skillsName.map((skill, index) => (
            <SkillsCard key={index} skill={skill} value={SkillsObject.value[index]} />
          ))
        }
      </div>
    </div>
  );
}

export default SkillSection;
