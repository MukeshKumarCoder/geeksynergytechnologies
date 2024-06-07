import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    Profession: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("User", JSON.stringify(formData));
    navigate("/login");
    console.log(formData);
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="aaaaa@gmail.com"
            required
            value={formData.email}
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
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Type your Number"
            required
            value={formData.number}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="country">Profession</label>
          <select
            id="Profession"
            name="Profession"
            required
            value={formData.Profession}
            onChange={changeHandler}
          >
            <option>Student</option>
            <option>Working</option>
          </select>
        </div>
        <Button title="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
