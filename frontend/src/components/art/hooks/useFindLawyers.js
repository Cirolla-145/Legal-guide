import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useFindLawyers = ()=>{
    const [loading,setLoading] = useState(false);
    const [lawyers,setLawyers] = useState([])

    useEffect(()=>{
        const findLawyers = async ()=>{
            setLoading(true)
            try {
                const res = await fetch("/api/lawyers")
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                setLawyers(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        findLawyers()
    },[]);
    return {loading,lawyers}
}

export default useFindLawyers;