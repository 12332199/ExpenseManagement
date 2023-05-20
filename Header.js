import React ,{useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';
const Header = () => {
   const [loginUser,setLoginUser] = useState('')
  const navigate = useNavigate()
   useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
   }, [])
   
   const logOutHandler = () =>{
    localStorage.removeItem('user');
    toast.success("Logout Successfully",{position:'top-center'})
    navigate('/login')
   }

  return (
    <> 
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">Expense Management</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p   className="nav-link" aria-current="page">
            {loginUser && loginUser.name}
         </p>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary " onClick={logOutHandler}>
          Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Header