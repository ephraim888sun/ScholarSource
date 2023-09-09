import React from 'react'
import Image from 'next/image'

const LogoIcon = ({
  styles,
  name,
  imgUrl,
  isActive,
  disabled,
  handleClick,
}) => (
  <div
    className={`w-[52px] h-[52px] rounded-[10px] ${
      isActive && isActive === name && 'bg-[#2c2f32]'
    } flex justify-center items-center ${
      !disabled && 'cursor-pointer'
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <Image src={imgUrl} alt='fund_logo' className='w-full h-full' />
    ) : (
      <Image
        src={imgUrl}
        alt='fund_logo'
        className={`w-full h-full ${isActive !== name && 'grayscale'}`}
      />
    )}
  </div>
)

export default LogoIcon
