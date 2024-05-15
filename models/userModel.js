const mongoose= require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter the usernmae"]
    },
    email:{
        type:String,
        required:[true,"Please the add email"],
        unique:[true,"email adreess already existes"],
    },
    password:{
        type:String,
        required:[true, "please enter the password"]
    },
   
}, 
{
    timestamps:true,
}
)

module.exports=mongoose.model("User",userSchema)