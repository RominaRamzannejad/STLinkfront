import React from 'react'
import HeroSectionTexts from './HeroSectionTexts'
import Buttons from './Buttons'

const HeroSection = () => {
    return (
        <div className='bg-white relative bottom-10'>
            <img className='w-full absolute' style={{filter:'brightness(25%)'}} src="../../../public/images/landing-page/bg3.jpg" />
            {/* text */}
            <HeroSectionTexts/>
            {/* buttons to explore the site */}
            <Buttons/>
        </div>
    )
}

export default HeroSection