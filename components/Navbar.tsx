import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return(
  <nav className='padding-container relative z-30 rounded-lg bg-teal-600 shadow-xl ring-1 ring-slate-100 py-4 lg:py-0'>
    <div className="flexBetween max-container">
      <Link href="/" className='bold-28 capitalize relative'>
        Manahil<span className='text-teal-800'>(a web developer)</span><span className='absolute top-[-0.3rem] right-[-1rem] h5 w-5 linearGradient rounded-full -z-10'></span>
      </Link>
      <ul className='hidden h-full gap-6 lg:flex px-6 py-3'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='flexCentre text-[15px] font-[500] text-white hover:bg-green-800 hover:text-black px-4 py-1 rounded-full cursor-pointer transition-all duration-300'>
            {link.label}
          </Link>
        ))}

      </ul>
      <Image 
      src="menu.svg"
      alt="menu" 
      width={28}
      height={28}
      className='inline-block cursor-pointer lg:hidden'
/>
      
    </div>
    </nav>
)
}
export default Navbar