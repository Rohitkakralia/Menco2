import React from 'react'
import CardContainer from './CardContainer'
import Navbar from './Navbar'

const Home = () => {
   
  return (
    <div>
      <Navbar />
       <div className="flex w-[100%] md:w-[100%] h-[90vh] justify-between items-center bg-white p-8 ">
        
        <div className="w-[40%] ml-[50px]">
          <h2 className="text-purple-700 md:text-[60px] text-[40px] font-bold ">
            FIND YOUR <br /> MENTOR
          </h2>
          <button className="bg-purple-700 text-white py-2 px-6 rounded-md hover:bg-purple-800 transition">
            Register for free
          </button>
        </div>

        <div className="w-[60%] flex justify-center items-center mr-[50px]">
          <div className="relative bg-gray-200 w-full h-[400px] rounded-lg flex justify-center items-center">
            
          </div>
        </div>
        
      </div>

      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Top Mentors</p>
        <CardContainer/>
      </div>
      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Mathematics</p>
        <CardContainer/>
      </div>
      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>Web Dev</p>
        <CardContainer/>
      </div>
      <div className='px-[80px]'>
        <p className='text-[30px] text-black font-bold'>DSA</p>
        <CardContainer/>
      </div>
      
    </div>
  )
}

export default Home
