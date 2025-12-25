import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'  
import WhyUs from './components/WhyUs'

const LandingPage = () => {
    return (
        <div className='flex flex-col justify-center'>
            <HeroSection/>
            <WhyUs/>
        </div>
    )
}

export default LandingPage