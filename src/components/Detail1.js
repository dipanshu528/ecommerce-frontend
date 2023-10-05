import React from 'react'
import "../style/Detail.css";

const Detail1 = (props) => {
  let {name, email} = props;
  return (
    <div className='detail'>
      
      <p>Hi! {name}</p>
      <p>{email}</p>
    </div>
  )
}

export default Detail1