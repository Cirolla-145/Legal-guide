import axios from 'axios'
import { saveAs } from 'file-saver'
import React, { useState } from 'react'
import GiftDeedForm from './GiftDeedForm'

export let props = {}

const GiftDeed = () => {

  let [inputs, setInputs] = useState({
    day: "",
    month: "",
    year: "",
    donor: "",
    donorAge: "",
    donorAdd: "",
    donee: "",
    doneeAge: "",
    doneeAdd: "",
    amount: "",
    chequeNo: "",
    date: "",


  })

  props = inputs

  let [count, setCount] = useState(0)

  let onFormSubmit = (e) => {
    e.preventDefault()
    setCount(count + 1)

  }

  let Complete = (inputs) => {
    axios.post('/api/forms/create-pdf', inputs)
      .then(() => axios.get('/api/forms/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" })

        saveAs(pdfBlob, 'newPdf.pdf')
      })
  }

  if (count === 12) {
    console.log(inputs)
    Complete(inputs)
  }


  return (

    <div className=" grid grid-cols-2">
      <div className='flex min-w-96 rounded-lg max-w-md p-8'>
        <form className=' form-control shadow-md w-fit p-5' action="" onSubmit={onFormSubmit} >
          {count === 0 && <div className="flex  ">
            <label className=" label p-2">
              <span>Day</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.day} onChange={(e) => setInputs({ ...inputs, day: e.target.value })} />
            </div>
          </div>}

          {count === 1 && <div className="flex ">
            <label className=" label p-2">
              <span>Month</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.month} onChange={(e) => setInputs({ ...inputs, month: e.target.value })} />
            </div>
          </div>}

          {count === 2 && <div className="flex  ">
            <label className=" label p-2">
              <span>Year</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.year} onChange={(e) => setInputs({ ...inputs, year: e.target.value })} />
            </div>
          </div>}

          {count === 3 && <div className="flex  ">
            <label className=" label p-2">
              <span>Name of Donor</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.donor} onChange={(e) => setInputs({ ...inputs, donor: e.target.value })} />
            </div>
          </div>}

          {count === 4 && <div className="flex  ">
            <label className=" label p-2">
              <span>Age of Donor</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.donorAge} onChange={(e) => setInputs({ ...inputs, donorAge: e.target.value })} />
            </div>
          </div>}

          {count === 5 && <div className="flex  ">
            <label className=" label p-2">
              <span>Address of Donor</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.donorAdd} onChange={(e) => setInputs({ ...inputs, donorAdd: e.target.value })} />
            </div>
          </div>}

          {count === 6 && <div className="flex  ">
            <label className=" label p-2">
              <span>Name of Donee</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.donee} onChange={(e) => setInputs({ ...inputs, donee: e.target.value })} />
            </div>
          </div>}

          {count === 7 && <div className="flex  ">
            <label className=" label p-2">
              <span>Age of Donee</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.doneeAge} onChange={(e) => setInputs({ ...inputs, doneeAge: e.target.value })} />
            </div>
          </div>}

          {count === 8 && <div className="flex  ">
            <label className=" label p-2">
              <span>Address of Donee</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.doneeAdd} onChange={(e) => setInputs({ ...inputs, doneeAdd: e.target.value })} />
            </div>
          </div>}

          {count === 9 && <div className="flex  ">
            <label className=" label p-2">
              <span>Amount</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.amount} onChange={(e) => setInputs({ ...inputs, amount: e.target.value })} />
            </div>
          </div>}

          {count === 10 && <div className="flex  ">
            <label className=" label p-2">
              <span>Chequeno</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="text" value={inputs.chequeNo} onChange={(e) => setInputs({ ...inputs, chequeNo: e.target.value })} />
            </div>
          </div>}

          {count === 11 && <div className="flex  ">
            <label className=" label p-2">
              <span>Date</span>
            </label>
            <div className="">
              <input className='w-full input input-bordered h-10' type="date" value={inputs.date} onChange={(e) => setInputs({ ...inputs, date: e.target.value })} />
            </div>
          </div>}
          {count > 11 && <div className="flex  ">
            <h1>Thank you</h1>
          </div>}

          {count < 11 &&
            <div className=" flex items-center pt-3">
              <button type='submit' className='btn btn-primary' >Next</button>
            </div>}
          {count === 11 &&
            <div className=" flex items-center pt-3">
              <button type="submit" className='btn btn-success' >Submit</button>
            </div>}

        </form>
      </div>
      <GiftDeedForm />
    </div>
  )
}

export default GiftDeed
