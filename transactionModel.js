const mongoose = require ('mongoose')

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String,
       
   },
    amount:{
       type:Number,
       require:[true,'amount is require']
   },
   type:{
    type:String,
    require:[true,'type is require']
}, 
    category:{
    type:String,
    require:[true,'cat is require']
},
 date:{
    type:Date, 
    require:true
 },
 description:{
    type:String,
    require:[true,'des is require']
}, 

},{timestamps:true})


const transactionModel = mongoose.model('transactions',transactionSchema)
module.exports = transactionModel