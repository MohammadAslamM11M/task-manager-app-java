import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [resgisterFormData, setRegisterFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterFormData({
      ...resgisterFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/auth/register`, resgisterFormData);
      navigate("/login");
    } catch (err) {
      alert("Registeration failed");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        name="email"
        value={resgisterFormData.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="password"
        value={resgisterFormData.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
