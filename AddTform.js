import React, { useState } from 'react'
import axios from 'axios'
import {  toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const AddTform = () => {
    const navigate = useNavigate()
  let intialState = {amount:"",type:"",category:"",date:"",description:""}

  const [transaction,setTransaction] = useState(intialState)
  const handleSubmit = async (e) =>{
    e.preventDefault()
         try {
         const user = JSON.parse(localStorage.getItem('user'))
          await axios.post('http://localhost:8080/api/transactions/add-transaction',{...transaction,userid:user._id})
          console.log(transaction)
          toast.success('Success') 
          navigate('/')
         } catch (error) {
            console.log(error)
         }
  }
  const handleChange = (e) =>{
    setTransaction({...transaction,
    [e.target.name]:e.target.value})
  }
  return (
    <div className=''>
    <div className="container ">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
    <input type="number" name='amount' value={transaction.amount || ''} onChange={handleChange} className="form-control" id="exampleInputEmail1" required />
  </div>
  <div className="mb-3">
  <label className="form-label">Type</label>
  <select className="form-select" name='type' value={transaction.type || ''} onChange={handleChange} >
  <option selected>Select Option</option>
  <option>Income</option>
  <option >Expense</option>
</select>
  </div>
  <div className="mb-3">
  <label className="form-label">Category</label>
  <select className="form-select" name='category' value={transaction.category || ''} onChange={handleChange} >
  <option selected>Select Option</option>
  <option>Salary</option>
  <option >Tip</option>
  <option >Project</option>
  <option >Tax</option>
  <option >Medical</option>
  <option >Movie</option>
  <option >Rent</option>
  <option >Other</option>
</select>
  </div>
  
  <div className="mb-3">
    <label className="form-label">Date</label>
    <input type="date" name='date' value={transaction.date || ''} onChange={handleChange} className="form-control" />
  </div>
 
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" name='description' value={transaction.description || ''} onChange={handleChange} className="form-control" />
  </div>
  
 <div className='d-flex justify-content-end'>
 <button type="submit" className="btn btn-primary ">Submit</button>
 </div>
 
</form>
</div>
    </div>
  )
}

export default AddTform