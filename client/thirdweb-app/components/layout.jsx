import Navbar from './navbar'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <>
      <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
        <div className='sm:flex hidden mr-10 relative'>
          <Sidebar />
        </div>
        <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}
