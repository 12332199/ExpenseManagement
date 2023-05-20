const transactionModel = require("../models/transactionModel")
const moment = require('moment')

const getAllTransaction = async(req,res) =>{
   try {
    const {type} = req.body
     const transactions = await transactionModel.find({
        userid:req.body.userid,
    ...(type!== 'all' && {type})})
     res.status(200).json(transactions)
   } catch (error) {
    console.log(error) 
    res.status(500).json(error)
   }
}

const addTransaction = async (req,res) =>{
    try {
        const newTransaction = new transactionModel({
            userid:req.body.userid,
            amount:req.body.amount,
            type:req.body.type,
            category:req.body.category,
           date:req.body.date,
           description:req.body.description
        })
        await newTransaction.save()
        res.status(201).send('Add successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports = {getAllTransaction,addTransaction}