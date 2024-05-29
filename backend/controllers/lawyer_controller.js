import Lawyer from "../models/lawyer_model.js"



export const signup = async (req,res)=>{
    try {
        let {fullName,username,city,specialization,experience,gender} = req.body

        console.log(req.body)

        const lawyer = await Lawyer.findOne({username})

        if(lawyer){
            return res.status(400).json({ error: "Username already exists" })
        }

        

        const newLawyer = new Lawyer({
            fullName,
            username,
            city,
            specialization,
            experience,
            gender,
            profilePic : "https://w7.pngwing.com/pngs/852/253/png-transparent-computer-icons-criminal-law-lawyer-court-lawyer-angle-people-silhouette.png"
        })

        if(newLawyer){
            await newLawyer.save()
            res.status(201).json({
                _id: newLawyer._id,
                fullName: newLawyer.fullName,
                username: newLawyer.username,
                city:newLawyer.city,
                specialization:newLawyer.specialization,
                profilePic: newLawyer.profilePic
            })
        }else{
            res.status(400).jaon({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("Error in lawyer signup controller", error.message)
        res.status(500).json({ error: error })
    }
}

export const getLawyers = async(req,res)=>{
    try {
        const lawyers = await Lawyer.find({})

		res.status(200).json(lawyers);
    } catch (error) {
        console.error("Error in getLawyers ", error.message);
		res.status(500).json({ error: "Internal server error" });

    }
}