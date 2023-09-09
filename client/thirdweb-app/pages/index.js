import { ConnectWallet } from "@thirdweb-dev/react";
import Link from 'next/link'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        {/* <Navbar /> */}Navbar
        {/* <Link path='/' element={<Home />} />
        <Link path='/profile' element={<Profile />} />
        <Link path='/create-campaign' element={<CreateCampaign />} />
        <Link path='/campaign-details/:id' element={<CampaignDetails />} /> */}
      </div>
    </div>
  )
}
