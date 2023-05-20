import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {  toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate()
    let intialState = {
         name:"",
         email:"",
         password:""
    }
    const [user, setUser] = useState(intialState)
 
    const handleSubmit = async (e)=>{
     e.preventDefault()
      try {
        await axios.post('http://localhost:8080/api/users/register',user)
        toast.success("Registration Successfull",{position:'top-center'})
        navigate('/login')
      } catch (error) {
        toast.error("Something went wrong")
      }
    }
    const handleChange =(e)=>{
         setUser({...user,
        [e.target.name]:e.target.value})
       
    }
//prevent th login user

useEffect(()=>{
  if(localStorage.getItem("user")){
    navigate('/')
  }
},[navigate])

  return (
     <>
          <div div className='login template d-flex justify-content-center align-item-center 100-w vh-100  '>
            <div className='50-w  p-5 rounded bg-white'>
   <form onSubmit={handleSubmit}>
   <h3 className='text-center'>Sign Up</h3>

  <div className="mb-2 ">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" name='name' value={user.name || ''} onChange={handleChange} className="form-control " placeholder="Enter name" />
    
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputPassword1">Email</label>
    <input type="email" name='email' value={user.email || ''}  onChange={handleChange} className="form-control" placeholder="Enter email" />
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name='password' value={user.password || ''}  onChange={handleChange} className="form-control" placeholder="Enter password" />
  </div>
  
  <div className="d-grid">
  <button type="submit"  className="btn btn-primary" >Sign Up</button>

  </div>
 
</form>
<div className="mb-2">
    <Link className='btn text-center'><strong>Are you Already User?</strong> <Link to='/login' className='primary'>Sign In</Link> </Link>
  </div>
</div>
    </div>
     </>
  )
}

export default Register