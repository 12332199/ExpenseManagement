import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import AddTform from './pages/AddTform';
import Header from './components/layout/Header'
function App() {
  return (
   <>
    <ToastContainer />
    <Header/>
   <Routes>
    <Route path='/' element={ <ProtectedRoutes> <Home/> </ProtectedRoutes>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/> 
    <Route path='/add-transaction' element={<AddTform/>}/>

   </Routes>
   </>
  );
}

export function ProtectedRoutes(props){
   if(localStorage.getItem('user')){
    return props.children
   }else{
    return <Navigate to='/login'/>
   }
}

export default App;
