import React from 'react'

// import './GDF.css'

const GiftDeedForm = (props) => {

    
    console.log(props.day,props )
    

  return (
    <div className="flex text-black justify-center m-0 items-center ">
        <div className=" bg-white max-w-2xl overflow-auto p-5">
            <h1>GIFT DEED</h1>
            <div className="body">
                <div className=" p-1 mb-2 justify-start">
                    <p>
                        This deed of gift made this day Day of month (month) year (year) between;
                    </p>
                </div>
                <div className="p-1 mb-2">
                    <p>
                        Mr. donor, Age donorAge years,
                    </p>
                    <p>
                        Resident of donorAdd
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
                        Mr. donee, Age doneeAge years,
                    </p>
                    <p>
                        Resident of doneeAdd
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
                            assigns to the donee a sum of Rs. amount to be held by the donee absolutely.
                        </p>
                    </div>
                    <div className="point">
                        <p>2.
                            The possession of the Rs. amount vide cheque No. chequeNo Drawn on
                            `today.getDate(). today.getMonth() + 1. today.getFullYear().` , _____________ Branch dated _/_/__ hereinabove donated unto the donee
                            and
                            has
                            been physically handed over to the donee as absolute owner before execution of this Gift
                            Deed.
                        </p>
                    </div>
                    <div className="point">
                        <p>3.
                            The said gift of Rs.______________(amount) has been accepted by Mr/Miss
                            ___________________________.
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
