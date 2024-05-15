const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        requried:true,
        ref:"User"
    },
    name:{
        type:String,
        requried:[true,"please add the contact name"],

    },
    email:{
        type:String,
        required:[true,"please add the email"],
    },
    phone:{
        type:String,
        requried:[true,"please add the number"]
    },


    },{
        timestamps:true,
    })

module.exports=mongoose.model("Contact",contactSchema);