import React from 'react'
import Home from '../Components/Home'
import Sidebar from '../Components/Sidebar'

const HomePage = () => {
  return (
    <>
        <div className='w-full mt-16 flex justify-between '>
            <div className='w-full lg:w-[75%]'>
                <Home/>
            </div>

            <div className='w-[25%] hidden lg:block'>
                <Sidebar/>
            </div>
        </div>
    </>
  )
}

export default HomePage