'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
// import { dastopcompany } from '../../public/Dashboard Company.png'


const CTApage = () => {
  return (
    <div className='flex justify-baseline items-center w-full h-100 p-10 text-white rounded-tl-[100px] rounded-br-[100px]  bg-[#4640de] '>
      <div className='flex flex-col gap-7 justify-center'>
        <h2 className='text-4xl font-bold w-70'>Start posting job today</h2>
        <p>start posting job for only $10</p>
        <Button className='bg-white text-[#4640de] w-35 rounded-none py-5'>Sign Up for free</Button>

      </div>

      <Image src="" alt="" />
    </div>
  )
}

export default CTApage
