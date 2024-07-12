import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   
},
{
    timestamps:true
}
)

export const User = mongoose.models.User || mongoose.model("User",userSchema);