import React, { useState } from 'react';
import './signup.css'
import logo from '../../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();


  async function handleSubmit(e){
    e.preventDefault();

    axios.post('http://localhost:3000/signup',{name,email,password})
    .then((res)=>{
      console.log(res);
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='signup'>
      <img src={logo} className='logo'></img>
      <div className='signup-form'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Your name' value={name} name='name' onChange={e=>setName(e.target.value)}/>
          <input type='email' placeholder='Your Email' value={email} name='email' onChange={e=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' value={password} name='password' onChange={e=>setPassword(e.target.value)}/>
          <button type='submit' >Sign up</button>
          <div className='form-help'>
            <p>Need Help?</p>
          </div>
          <div className='switch'>
          <p>Already have an account? <Link to='/login'>Sign in</Link></p>  
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
