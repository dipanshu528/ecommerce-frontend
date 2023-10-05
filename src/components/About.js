import React, { useState, useEffect } from 'react';
import Detail1 from "./Detail1";
// import Detail2 from "./Detail2";
const BACKEND_URL = process.env.BACKEND_URL;

const About = () => {

    
    const [user1, setUser1] = useState([])

    const getUser1 = async ()=>{
        // todo api call
      const response = await fetch(`${BACKEND_URL}/api/auth/getuser`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
    
      const json = await response.json()
        console.log(json)
        setUser1(json)
    }

   
  useEffect(()=>{
    if(localStorage.getItem('token')){
     getUser1();
    
    }
    else{
      alert('please login first')
    }
  },[])

  return (
    
    <>
    <Detail1
      key={user1._id}
      name={user1.name}
      email={user1.email}
    />
    

  </>
  )
}

export default About
