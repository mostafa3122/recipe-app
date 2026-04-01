import React, { useState } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { BsLayoutSidebar } from 'react-icons/bs'

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex min-h-screen'>
      <div className={` transition-all duration-300 shadow ${isOpen ? "w-64" : "w-0"}`}>
        <SideBar />
      </div>
      <div className=' relative flex-1 flex flex-col  bg-[#F4F2EE] '>
        <div className='p-6 flex-1 '>
          <div className=" cursor-pointer text-2xl text-black ">
            <BsLayoutSidebar onClick={handleToggle} />
          </div>
          <Outlet />
        </div>

        <Footer />
      </div>

    </div>
  )
}
