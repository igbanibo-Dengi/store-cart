import React, { useState } from 'react';
import { BsCart4, BsChevronDown } from "react-icons/bs"
import { GoSearch } from "react-icons/go"
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"

const NavBar = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };


  return (
    <nav className='max-w-[1200px] mx-auto text-gray-700 text-base py-3 font-semibold flex items-center px-4 justify-between'>
      <div className='logo flex'>
        <BsCart4 className='text-orange-500 h-[40px] w-auto' />
        <p className='font-bold text-black text-3xl'>Shopcart</p>
      </div>
      <div className='nav-links hidden gap-8 w-full xl:pl-16 pl-5 lg:flex'>
        <a href="/" className='flex items-center gap-2 hover:text-black hover:underline'>
          <p>Categories</p> <BsChevronDown />
        </a>
        <a href="/" className={`hover:text-black hover:underline ${inputFocused ? 'hidden' : ''}`}>Deals</a>
        <a href="/" className={`hover:text-black hover:underline ${inputFocused ? 'hidden' : ''}`}>What's new</a>
        <a href="/" className={`hover:text-black hover:underline ${inputFocused ? 'hidden' : ''}`}>Delivery</a>
      </div>
      <div className='nav-end hidden lg:flex gap-4 w-full justify-end'>
        <div className='relative'>
          <div className={`flex bg-gray-200 px-4 items-center rounded-full text-sm p-2 ${inputFocused ? 'w-[500px]' : 'w-fit'}`}>
            <input
              type="text"
              placeholder='Search Product'
              className='bg-transparent outline-none w-full'
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <GoSearch className='cursor-pointer text-base' />
          </div>
        </div>
        <a href='/' className='flex items-center gap-2'>
          <AiOutlineUser className='text-base' />
          <p>Account</p>
        </a>
        <a href='/' className='flex items-center gap-2'>
          <AiOutlineShoppingCart className='text-base' />
          <p>cart</p>
        </a>
      </div>
    </nav>
  )
}

export default NavBar