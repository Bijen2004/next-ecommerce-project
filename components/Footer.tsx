import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col gap-3 items-center p-4 bg-white/5 text-white/40'>
      <div className='flex gap-3'>
        <div>
        Follow Us At:
        </div>
        <div>
            <a href='https://www.instagram.com/bgarts88/' className='text-[pink] text-center text-2xl' target='_blank'><FaInstagram/></a>
        </div>
      </div>
        <div>
        Copyright © 2024 BG Arts
        </div>
    </div>
  )
}

export default Footer