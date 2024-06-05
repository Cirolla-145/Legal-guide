import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {saveAs} from 'file-saver'

const Form = () => {

    let {register,handleSubmit} = useForm()

    const onFormSubmit = (userObj)=>{
        axios.post('/api/forms/create-pdf',userObj)
        .then(()=>axios.get('/api/forms/fetch-pdf',{responseType:'blob'}))
        .then((res)=>{
            const pdfBlob = new Blob([res.data],{type:"application/pdf"})

            saveAs(pdfBlob,'newPdf.pdf')
        })
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onFormSubmit)} >
        <input type="text" className=' input-md' placeholder='name' {...register("name")} />
        <input type="text" className=' input-md' placeholder='receiptId' {...register('id')} />
        <input type="text" className=' input-md' placeholder='price1' {...register('price1')} />
        <input type="text" className=' input-md' placeholder='price2' {...register('price2')} />
        <button type="submit">Download</button>
      </form>
    </div>
  )
}

export default Form
