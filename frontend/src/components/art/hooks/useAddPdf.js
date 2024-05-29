import { useState } from "react";
import toast from "react-hot-toast";
const useAddPdf = ()=>{

    const [loading,setLoading] = useState(false)

    const addPdf = async(pdf)=>{
        setLoading(true)
        try {
            const res = await fetch('/api/pdfs/addPdf',{
                method:"POST",
                headers:{"Content-Type": "multipart/form-data"},
                body:JSON.stringify({pdf})
            })

            const data = await res.json()
            if(data.error) throw new Error(data.error)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {addPdf,loading}

}

export default useAddPdf