import React from 'react'

import FundCard from './FundCard';
import { loader } from '../public'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { daysLeft } from '../utils'

const DisplayGrants = ({ title, isLoading, grants }) => {
  return (
    <div>
      <h1
        className='font-epilogue font semi-bold text-[18px]
            text-white text-left'
      >
        {title} ({grants.length})
      </h1>

      <div className='flex flex-wrap mt-[20px] gap-[26px]'>
        {isLoading && (
          <img
            src={loader}
            alt='loader'
            className='w-[100px]
                h-[100px] object-contain'
          />
        )}

        {!isLoading && grants.length === 0 && (
          <p
            className='font-epilogue font-semibold text-[14px]
                leading-[30px] text-[#818183]'
          >
            You do not have any grants at the moment.
          </p>
        )}

        {!isLoading &&
          grants.length > 0 &&
          grants
            .sort((a, b) => daysLeft(a.deadline) - daysLeft(b.deadline))
            .map((grant) => (
              <Link
                href={{
                  pathname: `/grant-details/${grant.pId}`,
                  query: { ...grant, remainingDays: daysLeft(grant.deadline) },
                }}
              >
                <FundCard key={uuidv4()} {...grant} />
              </Link>
            ))}
      </div>
    </div>
  )
}

export default DisplayGrants