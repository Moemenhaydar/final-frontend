import React, { useState } from "react";
import axios from "axios";
import "./register.css";
const RegisterForm = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://mobilia32.onrender.com/owner/

      `,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      )
      .then((res) => {
        console.log(res);
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
              placeholder=""
              type="text"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span className="span">Firstname</span>
          </label>

          <label className="label">
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="span">Lastname</span>
          </label>
        </div>

        <label className="label">
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="span">Email</span>
        </label>
        <label className="label">
          <input
            required
            placeholder=""
            type="number"
            className="input"
            value={PhoneNumber}
            onChange={(e) => setNumber(e.target.value)}
          />
          <span className="span">Phone-number</span>
        </label>
        <label className="label">
          <input
            required
            placeholder=""
            type="text"
            className="input"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <span className="span">Address</span>
        </label>

        <label className="label">
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="span">Password</span>
        </label>

        <label className="label">
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="span">Confirm password</span>
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
