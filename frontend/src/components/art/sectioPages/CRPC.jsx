import React, { useEffect, useState } from 'react'
import sections from '../../../apis/crpc.json'
import SearchInput from './SearchInput'


const CRPC = () => {

    let [arr,setArr] = useState(sections)

    let handleChange = (newArr)=>{
        if (newArr.length===0){
            setArr(sections)
        }else{
        setArr(newArr)
        console.log(newArr.length)
        }
    }
        
    

    return (
        <div className="">
            <SearchInput arr={arr} onSearch={handleChange} />
        <div className=' h-full py-2 flex flex-col w-auto m-5'>
            {
                arr.map(section => {
                    return (
                        <div className=" ">
                            <div className="p-2">
                                <h1 className=' text-amber-50'><span className=' text-xl font-bold'>Section {section.section}</span> : <span className=' text-xl font-bold'>{section.section_title}</span> </h1>
                            </div>
                            <div className=" mx-3">
                                <p className=' text-slate-300'>{section.section_desc}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
        </div>
    )
}

export default CRPC
