import React from 'react'
import Navigation from '../Components/Navigation'
import Hero from '../Components/Hero'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'

function Home() {
    return (
      <>
        <Navigation />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </>
  )
}

export default Home