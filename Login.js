import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {  toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
    let intialState = {
        email:"",
        password:""
   }
   const [user, setUser] = useState(intialState)

   const handleSubmit =async(e)=>{
    e.preventDefault()
   
      try {
        console.log(user)
        const {data} = await axios.post("http://localhost:8080/api/users/login",user)
        toast.success("Login Success",{position:'top-center'});
        localStorage.setItem("user",JSON.stringify({...data.user,password:''}))
        navigate('/')
        
      } catch (error) {
       console.log(error)
      }
   }
   const handleChange =(e)=>{
        setUser({...user,
       [e.target.name]:e.target.value})
      
   }

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
   <h3 className='text-center'>Sign In </h3>

 
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
    <Link className='btn text-center'><strong>Are you New User?</strong> <Link to='/register' className='primary'>Sign In</Link> </Link>
  </div>
</div>
    </div>
    </>
  )
}

export default Login