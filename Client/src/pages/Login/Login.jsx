import React, { useState } from 'react';
import './Login.css'
import logo from '../../assets/logo.png'
import { Link , useNavigate} from 'react-router-dom';
// import userModel from '../../../../Server/model';
import axios from 'axios';


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate();


    function handleSubmit(e){
      e.preventDefault();
      
      axios.post('http://localhost:3000/login',{email,password})
      .then((res)=>{
        console.log(res.data);
        
        if(res.data.status){
          localStorage.setItem("auth-token",res.data.token);
          navigate('/')
        }
        else if(res.data === "User doesn't exist"){
          alert("User doesn't exist")
        }
        else{
            alert("incorrect password")
        }

      })
      .catch(err=>console.log(err))

    }

  return (
    <div className='login'>
      <img src={logo} className='login-logo'></img>
      <div className='login-form'>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Your Email' value={email} name='email' onChange={e=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' value={password} name='password' onChange={e=>setPassword(e.target.value)}/>
          <button type='submit'>Sign In</button>
          <div className='form-help'>
          <div className='remember'>
            <input type='checkbox'/>
            <label>Remember Me</label>
          </div>
            <p>Need Help?</p>
          </div>
          <div className='switch'>
          <p>New to Netflix? <Link to='/signup'>Sign up</Link></p>  
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

