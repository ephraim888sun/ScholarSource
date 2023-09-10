import React from 'react'

import FundCard from './FundCard';
import { loader } from '../public';
import { useRouter } from 'next/navigation';

const DisplayGrants = ({ title, isLoading, grants }) => {
    const router = useRouter();

    const handleRouter = (grant) => { 
        route(` /grant-details/${grant.title}`, { state: 
        grant })
    }

    return (
        <div>
            <h1 className="font-epilogue font semi-bold text-[18px]
            text-white text-left">{title} ({grants.length})</h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">
            {isLoading && (
                <img src={loader} alt="loader" className="w-[100px]
                h-[100px] object-contain"/>
            )}

            {!isLoading && grants.length === 0 && (
                <p className="font-epilogue font-semibold text-[14px]
                leading-[30px] text-[#818183]">
                    You do not have any grants at the moment.
                </p>
            )}

            {!isLoading && grants.length > 0 && grants.map
            ((grant) => <FundCard
            key={grant.id}
            {...grant}
            handelClick={() => handleRouter(grant)}
            />)}
            </div>
        </div>
    )
}

export default DisplayGrants