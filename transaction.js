const express = require('express');
const { getAllTransaction, addTransaction } = require('../controller/transactionController');


const router = express.Router();


router.post('/add-transaction',addTransaction)

router.post('/get-transaction',getAllTransaction)


module.exports = router