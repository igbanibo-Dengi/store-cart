import React from 'react'
import FilterBtn from './FilterBtn'
import { BsChevronDown } from 'react-icons/bs'
import { BiFilter } from 'react-icons/bi'

const Filters = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-wrap gap-3 justify-between py-8'>
      <div className='flex flex-wrap gap-3'>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>All Products</FilterBtn>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>Price</FilterBtn>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>Review</FilterBtn>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>Color</FilterBtn>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>Material</FilterBtn>
        <FilterBtn variant="primary" icon={<BsChevronDown />}>Other</FilterBtn>
        <FilterBtn variant="primary" icon={<BiFilter />}>All filters</FilterBtn>
      </div>
      <FilterBtn variant="secondary" icon={<BsChevronDown />}>Sort by</FilterBtn>
    </div>
  )
}

export default Filters