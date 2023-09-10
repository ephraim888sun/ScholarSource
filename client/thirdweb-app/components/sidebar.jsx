import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Icon from './icon'

import { logo, sun } from '../public'
import { navlinks } from '../constants'
import LogoIcon from './logoIcon'
import Logout from './Logout'

const Sidebar = () => {
  const router = useRouter()
  const [isActive, setIsActive] = useState('dashboard')

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link href='/'>
        <LogoIcon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgUrl={logo} />
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name)
                  router.push(link.link)
                }
              }}
            />
          ))}

          <Logout isActive={isActive} />
        </div>

        <Icon styles='bg-[#1c1c24] shadow-secondary' imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar
