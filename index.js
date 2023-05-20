const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb')

dotenv.config()



const app = express();

//midddleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

connectDb();

app.use('/api/users',require('./routes/user'))
app.use('/api/transactions',require('./routes/transaction'))

const PORT = 8080 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server Running On Port ${PORT}`)
})