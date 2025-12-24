import { ArrowRight, KeyboardDoubleArrowRight, KeyboardDoubleArrowRightRounded } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Buttons = () => {
    return (
        <div>
            <NavLink to={'/login'} className='absolute top-80 left-80 cursor-pointer transition-colors rounded-full w-30 pr-8 pl-8 pt-2 pb-2 border-none hover:bg-blue-700 text-blue-100 bg-blue-600 h-7'> Try it now </NavLink>
            <NavLink to={'/Monitoring'} className='absolute top-80 right-80 cursor-pointer transition-colors rounded-full w-fit pr-5 pl-5 pt-2 pb-2 border-none hover:text-blue-700 bg-blue-100 mr-20 h-7'>
                <span className='relative bottom-1.5'>Go monitoring</span>
                <KeyboardDoubleArrowRight className='relative top-0.5'/>
            </NavLink>
        </div>
    )
}

export default Buttons