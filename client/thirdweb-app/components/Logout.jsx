import { useDisconnect } from '@thirdweb-dev/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { logout } from '../public'

const Logout = ({ isActive }) => {
  const router = useRouter()
  const disconnect = useDisconnect()

  const handleClick = () => {
    disconnect()
    router.push('/')
  }
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === 'logout' && 'bg-[#2c2f32]'
      } flex justify-center items-center cursor-pointer`}
      onClick={handleClick}
    >
      {!isActive ? (
        <Image src={'logout'} alt='fund_logo' className='w-1/2 h-1/2' />
      ) : (
        <Image
          src={logout}
          alt='fund_logo'
          className={`w-1/2 h-1/2 ${isActive !== 'logout' && 'grayscale'}`}
          width={500}
          height={500}
        />
      )}
    </div>
  )
}

export default Logout
