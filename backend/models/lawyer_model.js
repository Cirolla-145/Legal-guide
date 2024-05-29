import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    city:{
        type:String,
        required:true,
        enum:["Hyderabad","Sangareddy","Nizambad","Warangal","Adilabad","Medak","Khamman","Karimnagar"]
    },
    specialization:{
        type:String,
        required:true,
        enum:["constitutional","criminal","civil","corporate","intellectual-property","real-estate","banking","administrative","insurance"]
    },
    experience:{
        type:String,
        required:true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
},
    { timestamps: true }
);

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

export default Lawyer;
