import React from 'react'
import Sidebar from '../../components/Chat-app/sidebar/Sidebar'
import MessageContainer from '../../components/Chat-app/messages/MessageContainer'

const Home = () => {
  return (
    <div className=" sm:w-[750px] flex items-center justify-center shadow-lg bg-gradient-to-bl ">
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
    </div>
    </div>
  )
}

export default Home
