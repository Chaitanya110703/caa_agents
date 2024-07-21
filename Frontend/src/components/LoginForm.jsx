import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
// import axios from 'axios'

export default function LoginForm() {
  const Navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginInfo((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      // const response = await axios.post('/login', loginInfo)
      Navigate(`/`)
    } catch (error) {
      console.error('Login error', error);
    }
    setLoginInfo({
      username:'',
      password: '',
    })
  }

  return (
    <div className="col-md-4 bg-body-tertiary m-5 align-item-center">
      <h2 className="text-center fs-1 fw-bolder p-3">CAA Agents</h2>
      <hr />
      <h4 className="text-center fs-2 fw-bold">Login</h4>
      <form
        onSubmit={handleSubmit}
        className="need-validation"
        encType="multipart/form-data"
        noValidate
      >
        <div className="d-flex justify-content-center p-3">
          <div className="col-md-10 p-3">
            <FormInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your Username"
              onChange={handleChange}
              value={loginInfo.username}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center p-2">
          <div className="col-md-10 p-3">
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={loginInfo.password}
            />
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center p-3">
          <button className="btn btn-primary w-50 mx-2">Submit</button>
        </div>
        <p className="fs-6 fw-lighter text-danger text-center">
          *You can directly access home page without loggin in*
        </p>
      </form>
    </div>
  );
}
