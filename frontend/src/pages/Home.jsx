// import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 flex justify-between flex-col w-full">
        <img className='w-20 ml-7 mt-2' src="https://www.svgrepo.com/show/306893/uber.svg" alt="" />
        <div className="bg-white py-4 pb-7 px-4">
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Home
