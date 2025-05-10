import mongoose from "mongoose"; 



const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,//validation
        unique: true,//validation
    },
    userEmail: {
        type: String,
        required: true,//validation
        unique: true,//validation
    },
    userPassword: {
        type: String,
        require: true,//validation
    },
}, { timestamps: true })



const userModel = mongoose.model("users", userSchema);
export default userModel;