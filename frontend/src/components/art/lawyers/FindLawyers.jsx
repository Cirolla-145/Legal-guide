import React from 'react'
import useFindLawyers from '../hooks/useFindLawyers'

const FindLawyers = () => {
    const {loading,lawyers} = useFindLawyers()
  return (
    <>
    <div className='py-2 flex flex-col overflow-auto'>
      {lawyers.map(lawyer=>{
        return(
            <div className="">
            <div className="flex gap-2 items-center hover:bg-slate-900 rounded p-2 py-1 cursor-pointer">
                <div className="w-12 rounded-full m-5">
                    <img src={lawyer.profilePic} alt="user avatar" />
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <div className=" text-lg">
                            <p>Name : {lawyer.fullName}</p>
                            <p>City : {lawyer.city}</p>
                            <p>Specialization : {lawyer.specialization}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=" divider my-0 py-0 h-1"></div>
            </div>
        )
      })}
      
    </div>
    
    </>
  )
}

export default FindLawyers
