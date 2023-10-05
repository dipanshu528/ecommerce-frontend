import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../style/login.css';
const BACKEND_URL = process.env.BACKEND_URL;

const Login = () => {
const [credentials, setCrendentials] = useState({email:"", password:""})
let navigate = useNavigate();

const handleSubmit = async (e)=>{
    e.preventDefault();
   const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json();
    //  console.log(json);
      
      if(json.success){
        // save the authtoken and redirect
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      }
      else{
        alert("invalid credential");
      }
}
 const onChange = (e)=>{
     setCrendentials({...credentials, [e.target.name]:e.target.value})
  //   console.log(credentials)
 }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
  <div className="">
    {/* <label htmlFor="email" className="form-label">Email address</label> */}
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder='enter your email'/>
  </div>
  <div className="">
    {/* <label htmlFor="password" className="form-label">Password</label> */}
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' placeholder='enter your password' />
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
  }

export default Login

