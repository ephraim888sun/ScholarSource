import React from 'react'
import Image from 'next/image'

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && 'bg-[#2c2f32]'
    } flex justify-center items-center ${
      !disabled && 'cursor-pointer'
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <Image src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2' />
    ) : (
      <Image
        src={imgUrl}
        alt='fund_logo'
        className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}
      />
    )}
  </div>
)

export default Icon
