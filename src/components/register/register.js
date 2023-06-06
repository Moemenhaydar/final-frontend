import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import Swal from "sweetalert2";
const RegisterForm = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);
  // Form submit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://mobilia32.onrender.com/owner/

      `,
        data
      )
      .then((res) => {
        console.log(res);
        Swal.fire("Good job!", "You clicked the button!", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <form className="register-contain" onSubmit={handleSubmit}>
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app.</p>
          <div className="flex">
            <label className="label">
              <input
                required
                name="name"
                placeholder=""
                type="text"
                className="input"
                value={data.name}
                onChange={handleChange}
              />
              <span className="span">Name</span>
            </label>

            <label className="label">
              <input
                required
                placeholder="Enter Your telephone"
                type="tel"
                name="phone"
                className="input"
                value={data.phone}
                onChange={handleChange}
              />
              <span className="span">Phone</span>
            </label>
          </div>

          <label className="label">
            <input
              required
              placeholder=""
              name="email"
              type="email"
              className="input"
              value={data.email}
              onChange={handleChange}
            />
            <span className="span">Email</span>
          </label>

          <label className="label">
            <input
              required
              placeholder=""
              type="text"
              name="address"
              className="input"
              value={data.address}
              onChange={handleChange}
            />
            <span className="span">Address</span>
          </label>

          <label className="label">
            <input
              required
              placeholder=""
              type="password"
              className="input"
              value={data.password}
              name="password"
              onChange={handleChange}
            />
            <span className="span">Password</span>
          </label>

          <button type="button" onClick={handleSubmit} className="submit">
            Submit
          </button>

          <p className="signin">
            Already have an account?{" "}
            <a href="/signin" className="a">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
