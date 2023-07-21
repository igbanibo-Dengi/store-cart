import React from 'react'
import { BsTelephone } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"


const NavWidget = () => {
  return (
    <div className='w-full bg-primary text-white hidden md:block'>
      <div className='max-w-[1400px] mx-auto flex justify-between px-16'>
        <div className='flex items-center align-middle cursor-pointer'>
          <BsTelephone />
          <p className='pb-1'>
            +00123456789
          </p>
        </div>
        <div>
          <p>Get 50% off selected items &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Shop now</p>
        </div>
        <div className='flex gap-6'>
          <div className='flex items-center gap-1'>
            <p>Eng</p>
            <BsChevronDown className='cursor-pointer' />
          </div>
          <div className='flex items-center gap-1'>
            <p>location</p>
            <BsChevronDown className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavWidget