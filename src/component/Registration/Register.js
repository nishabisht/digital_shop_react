import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", userData);
  };

  return (
    <div
      className="d-flex flex-grow flex-wrap border border-info px-3 rounded-4"
      style={{ width: "20vw" }}
    >
      <form className="m-2" onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <h3 className="align-self-center p-3">Sign Up</h3>

          <label htmlFor="username">User Name</label>
          <input
            name="username"
            type="text"
            value={userData.username}
            className="form-control my-3"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={handleChange}
          />

          <label htmlFor="email">Email address</label>
          <input
            name="email"
            type="email"
            value={userData.email}
            className="form-control my-3"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group m-3">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            className="form-control my-3"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            className="form-control my-3"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-check m-2">
          <input
            name="agreeToTerms"
            className="form-check-input"
            type="checkbox"
            id="agreeToTerms"
            checked={userData.agreeToTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agreeToTerms">
            Agree to Terms
          </label>
        </div>

        <button type="submit" className="btn bg-info m-3" id="submit">
          Register
        </button>
        <button type="button" className="btn bg-secondary text-white m-3" id="">
          Sign in
        </button>
      </form>
    </div>
  );
};

export { Register };
