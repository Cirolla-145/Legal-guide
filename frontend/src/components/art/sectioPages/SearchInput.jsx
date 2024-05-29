import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoSearchSharp } from 'react-icons/io5'



const SearchInput = ({arr,onSearch}) => {

    let {register,handleSubmit} = useForm()
    const fixed = arr
 
    let onFormSubmit = (userObj) => {
        if (userObj.value===''){
            onSearch(fixed)
        }else{
        const searchValue = +userObj.value
        const filteredArr = arr.filter(section=>section.Section===searchValue)
        onSearch(filteredArr)
        }
    }    
    

    return (
        <div className=" mt-5 flex justify-start m-5 ">
        <form onSubmit={handleSubmit(onFormSubmit)} className='flex items-start gap-2 '>
            <input
                type='text'
                placeholder='Search…'
                className='input w-auto input-bordered rounded-full'
                {...register('value')}
                
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
        </div>
    )
}

export default SearchInput
