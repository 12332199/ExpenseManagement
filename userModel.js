const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
   
    name:{
        type:String,
        require:[true,'Name is required']
   },
   email:{
    type:String,
    require:[true,'Email is required and should be unique'],
    unique:true
},
password:{
    type:String,
    require:[true,'pass is required']
}
},
{timestamps:true}
)

const userModel = mongoose.model('users',userSchema)

module.exports =userModel