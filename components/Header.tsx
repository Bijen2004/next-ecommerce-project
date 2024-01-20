import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-[#FFFFFF0D]'>
            <Link href='/'>
            <Image src='/images/bgartLogo.jpg'
             alt='logo'
             width={70}
             height={70}>
            </Image>
            </Link>
            <Link href='/' className='btn btn-ghost text-xl sm:text-2xl text-[#e6d790]'>BG Arts</Link>
            <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header