import React, { useEffect } from 'react'
import PortfolioCards from '../Components/PortfolioCards'
import HomeCard from '../Components/HomeCard'
import Abouts from '../Components/abouts'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import ContactSection from '../Components/ContactSection'



const Home = () => {
  return (
    <div className = "w-[80vw] m-auto">
      <PortfolioCards/>
      <HomeCard/>
      <Abouts/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
