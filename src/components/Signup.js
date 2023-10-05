import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import '../style/signup.css';
const BACKEND_URL = process.env.BACKEND_URL;

const Signup = () => {
 
  const [credentials, setCrendentials] = useState({name:"", email:"", password:""})
  let navigate = useNavigate();
  
  const handleSubmit = async (e)=>{
      e.preventDefault();
      const response = await fetch(`${BACKEND_URL}/api/auth/createuser`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
       // console.log(json);
        
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
     //  console.log(credentials)
   }

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="">
    {/* <label htmlFor="name" className="form-label">Name</label> */}
    <input type="text" className="form-control" id="name" onChange={onChange} name='name'  aria-describedby="emailHelp" placeholder='enter your name' />
  </div>

  <div className="">
    {/* <label htmlFor="email" className="form-label">Email address</label> */}
    <input type="email" className="form-control" id="email" onChange={onChange} name='email'  aria-describedby="emailHelp" placeholder='enter your email'/>
  </div>

  <div className="">
    {/* <label htmlFor="password" className="form-label">Password</label> */}
    <input type="password" className="form-control" id="password" onChange={onChange} name='password' minLength={5} required placeholder='enter your password'/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
