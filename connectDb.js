const mongoose = require('mongoose')


const connectDb = async ()=>{
  try {
      mongoose.connect(process.env.MONGO_URL)
      console.log("Database Connected Successfully ")
  } catch (error) {
    console.log(error)
  }
} 


module.exports = connectDb