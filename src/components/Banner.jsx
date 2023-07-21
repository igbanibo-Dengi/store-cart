import React from 'react'
import IMG from "../Assets/images/banner-2.png"
import Button from './Button'

const Banner = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-[#FBF0E4] flex flex-col md:flex-row items-center jus justify-between md:pt-10 md:px-20'>
      <div className='flex flex-col gap-5 items-center md:items-start'>
        <h2 className='text-primary text-4xl font-bold'>Grab up to 50% off <br />on selected products</h2>
        <Button variant="primary">Buy Now!</Button>
      </div>
      <div>
        <img src={IMG} alt="banner" className='h-[200px]' />
      </div>

    </div>
  )
}

export default Banner