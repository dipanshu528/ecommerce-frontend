import React, {useState} from "react";
import About from "./About";
import "../style/Userdetail.css";
import {useNavigate} from 'react-router-dom';
const BACKEND_URL = process.env.BACKEND_URL;

const Userdetail = () => {
  const [credentials, setCrendentials] = useState({
    phone: "",
    altphone: "",
    address: "",
    altaddress: "",
  });


  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${BACKEND_URL}/api/detail/userdetail`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          phone: credentials.phone,
          altphone: credentials.altphone,
          address: credentials.address,
          altaddress: credentials.altaddress,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
  };

  const onChange = (e) => {
    setCrendentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const tooglealert = ()=>{
    alert("Successfully added")
  }
  return (
    <>

{localStorage.getItem('token')?
<div>
      <div>
        <About/>
      </div>

      
      <div className="form">
        <form onSubmit={handleSubmit}>
        <h5>Add your details</h5>
          <div className="user">
            <label htmlFor="phone" className="form-label">
              Phone no. :
            </label>
            <input
              type="phone"
              onChange={onChange}
              id="phone"
              name="phone"
            />
          </div>
          <div className="user" >
            <label htmlFor="altphone" className="form-label">
              Alternate Phone no. :
            </label>
            <input
              type="phone"
              value={credentials.altphone}
              onChange={onChange}
              id="altphone"
              name="altphone"
            />
          </div>
          <div className="user">
            <label htmlFor="address" className="form-label">
              Address :
            </label>
            <input
              type="string"
              value={credentials.address}
              onChange={onChange}
              id="address"
              name="address"
            />
          </div>
          <div className="user">
            <label htmlFor="altaddress" className="form-label">
              Alternate Address :
            </label>
            <input
              type="string"
              value={credentials.altaddress}
              onChange={onChange}
              id="altaddress"
              name="altaddress"
            />
          </div>

          <button type="submit" onClick={tooglealert} className="btn">
            Submit 
          </button>
        </form>
      </div>
      </div>
: 
<div className="nottoken">
<h3>Please Sing Up</h3> <p onClick={()=> navigate('/signup')}>here</p>
</div>
  }
    </>
  );
};

export default Userdetail;
