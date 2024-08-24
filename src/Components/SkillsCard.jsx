import React from 'react'

const SkillsCard = ({skill, value}) => {
  return (
    <div className='flex justify-between items-center mt-5 backdrop-blur-xl shadow-xl p-2 border-2 rounded-lg border-gray-400 mr-2'>
      <h3 className='font-bold text-xl text-white'>{skill}</h3>
      <div className='flex justify-around w-[150px] lg:w-[350px] items-center space-x-5'>
        <progress max = "100" value = {value} className='progress-bar'/>
      </div>
    </div>
  )
}

export default SkillsCard
