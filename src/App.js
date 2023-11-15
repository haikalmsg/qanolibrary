import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    password : ""
  })
  function handleChange(e){
    const {name, value} = e.target
    setFormData(olddata => {
      return{
        ...olddata,
        [name] : value
      }
    })
  }
  function check(pass){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    return regex.test(pass)
  }
  let flag = false
  let pw = false;
  if (formData.password.length == 0){
    flag = false
  }
  else{
    flag = true
    pw = check(formData.password)
  }
  
  return (
    <div className="App">
      <form className='passwordcheck'>
        <input className='passwordEnter' placeholder='password' name = "password" value={formData.password} onChange={handleChange} ></input>
        {flag && <h3 className='describe'>{pw ? " ✅ Strong Password" : "❌ Weak Password"}</h3>}

      </form>
    </div>
  );
}

export default App;
