import React, { useState } from 'react'
import { props } from './GiftDeed'


// import './GDF.css'

const GiftDeedForm = () => {
    
     const today = new Date()  

  return (
    <div className="flex text-black justify-center m-0 items-center ">
        <div className=" bg-white max-w-2xl overflow-auto p-5">
            <h1>GIFT DEED</h1>
            <div className="body">
                <div className=" p-1 mb-2 justify-start">
                    <p>
                        This deed of gift made this day {props.day===""?<span>_________</span> : <span>{props.day}</span>} of month {props.month===""?<span>_________</span> : <span>{props.month}</span>} year {props.year===""?<span>_________</span> : <span>{props.year}</span>} between;
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        Mr. {props.donor===""?<span>_________</span> : <span>{props.donor}</span>}, Age {props.donorAge===""?<span>_________</span> : <span>{props.donorAge}</span>} years,
                    </p>
                    <p>
                        Resident of {props.donorAdd===""?<span>_________</span> : <span>{props.donorAdd}</span>}
                    </p>
                    <p>
                        (Hereinafter called the “Donor”) of the One part
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        And,
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        Mr. {props.donee===""?<span>_________</span> : <span>{props.donee}</span>}, Age {props.doneeAge===""?<span>_________</span> : <span>{props.doneeAge}</span>} years,
                    </p>
                    <p>
                        Resident of {props.doneeAdd===""?<span>_________</span> : <span>{props.doneeAdd}</span>}
                    </p>
                    <p>
                        (Hereinafter called the “Donee”) of the Other part
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        Witnesseth as follows:
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <div className="point">
                        <p>1.
                            In consideration of natural love and affection being the son/daughter of Donor, the donor
                            hereby
                            assigns to the donee a sum of Rs. {props.amount===""?<span>_________</span> : <span>{props.amount}</span>} to be held by the donee absolutely.
                        </p>
                    </div>
                    <div className="point">
                        <p>2.
                            The possession of the Rs. amount vide cheque No. chequeNo Drawn on
                            {today.getDate()}.{today.getMonth() + 1}. {today.getFullYear()} , herein above donated unto the donee
                            and
                            has
                            been physically handed over to the donee as absolute owner before execution of this Gift
                            Deed.
                        </p>
                    </div>
                    <div className="point">
                        <p>3.
                            The said gift of Rs.{props.amount===""?<span>_________</span> : <span>{props.amount}</span>} has been accepted by Mr/Miss
                            {props.donee===""?<span>_________</span> : <span>{props.donee}</span>}.
                        </p>
                    </div>
                    <div className="point">
                        <p>4.
                            The donor from this date reserves no right or interest on the said sum hereby gifted which
                            shall
                            from this day be the sole and exclusive property of the donee.
                        </p>
                    </div>
                    <div className="point">
                        <p>5.
                            The property hereby gifted is the donor’s self-acquired property accumulated out of income
                            earned and has full right and authority to dispose of the same in any manner he may think
                            fit.
                        </p>
                    </div>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        6.In witness whereof, the parties hereto have put their respective signatures on this deed of gift
                        in
                        presence of witnesses.</p>
                </div>
            </div>
            <div className=" grid grid-cols-2">
                <div className=" w-60 pl-10 pr-5">
                    <p>SIGNATURE NAME AND ADDRESS OF THE WITNESS</p>
                </div>
                <div className=" w-60 pl-16">
                    <p><u></u> DONOR</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GiftDeedForm
