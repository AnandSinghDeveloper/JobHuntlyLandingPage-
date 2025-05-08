'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import  Dstopcompany  from '../../public/Dashboard Company.png'


const CTApage = () => {
  return (
    <div className='flex flex-col  lg:justify-between lg:flex-row
    
     sm:flex-col items-center w-full h-140 lg:h-100 p-10 text-white rounded-tl-[80px] rounded-br-[80px]  bg-[#4640de] '>
      <div className='flex flex-col gap-7 justify-center '>
        <h2 className='text-4xl lg:text-5xl font-bold  w-57 lg:w-80'>Start posting job today</h2>
        <p>start posting job for only $10</p>
        <Button className='bg-white text-[#4640de] lg:w-35 rounded-none hover:bg-background py-5'>Sign Up for free</Button>

      </div>

      <Image className='mt-20 lg:mt-23 max-w-[130%]  ' src={Dstopcompany.src} width={500} height={50} alt="company" />
    </div>
  )
}

export default CTApage
