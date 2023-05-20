import React, { useState,useEffect } from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
const GetTransaction = () => {
    const [allTransaction,setAllTransaction]= useState([])
    const [type,setType] = useState('all')
    
    useEffect(() => {
  
      
      const getAllTransaction = async()=>{
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await axios.post('http://localhost:8080/api/transactions/get-transaction',{userid:user._id,type})
            setAllTransaction(res.data)
         
        } catch (error) {
            console.log(error)
        }
    }
 
      getAllTransaction()
    }, [type]) 
    

  return (
    <>
    <div className="container">
    <div className="filter">
          <div>
            <h6>Select Frequency</h6>
            <select className="form-select" value={type} onChange={(type)=> setType(type)}>
            
              <option value='all' >All</option>
              <option value='income'  >Income</option>
              <option value='expense'>Expence</option>
            
            </select>
          </div>
          <Link to='/add-transaction' className="btn btn-primary" >
            Add
          </Link>
        </div>
    <table className="table">
  <caption>List of Transaction</caption>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Type</th>
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>

            <tbody>
    
      {
        allTransaction.map((val,key)=>{ 
         return(
            <tr key={key}>
                <td>{val.date}</td>
                <td>{val.amount}</td>
                <td>{val.type}</td>
                <td>{val.category}</td>
                <td>{val.description}</td>
                <td className='d-flex justify-content-start'>
                  <button className="btn btn-secondary mx-1">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
         )
        })
      }
  </tbody>
       
  
</table>

    </div>
    </>
  )
}

export default GetTransaction