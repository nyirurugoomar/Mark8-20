import React from 'react'
import Image from 'next/image'
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <div className='w-full md:mx-auto md:mt-8 mt-8'>
      <div className='grid grid-cols-3 lg:grid-cols-3 bg-[#F4F5F6] items-center justify-between gap-4 p-6 md:px-20'>
        <div className='flex justify-center lg:justify-start'>
          <Image src='/logo.png' width={100} height={40} alt='Logo'/>
        </div>
        <div className='flex justify-center'>
          <h3 className='text-[14px]'>
            <span className='font-[500] text-[#0C0D0D]'>©2024. Mark8</span> By Awesomity Ltd
          </h3>
        </div>
        <div className='flex justify-center lg:justify-end gap-2 items-center'>
          <RiTwitterXLine size={16} color='black' />
          <FaInstagram size={16} color='black' />
          <FiYoutube size={16} color='black' />
          <SlSocialLinkedin size={16} color='black' />
        </div>
      </div>
    </div>
  )
}

export default Footer
