import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLogin}) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });


  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("User"));
    if (
      formData.name === loggedUser.name &&
      formData.password === loggedUser.password
    ) {
      localStorage.setItem("LoggedIn", true)
      setIsLogin(true)
      navigate("/movies");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              required
              value={formData.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your password"
              required
              value={formData.password}
              onChange={changeHandler}
            />
          </div>
          <Button title="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
