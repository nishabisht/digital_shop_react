import React from "react";
import { NavLink } from "react-router-dom";

const Login = ({ setLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div
      className="d-flex border border-info p-3 rounded-4"
      style={{ width: "20vw" }}
    >
      <form className="m-2" onSubmit={handleSubmit}>
        <h3 className="align-self-center p-3">Login </h3>

        <div className="form-group m-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control my-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group m-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control my-3"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check m-3">
          <input
            type="checkbox"
            className="form-check-input "
            id="exampleCheck1"
          />
          <label className="form-check-label " for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn bg-info m-3" id="submit">
          Submit
        </button>
        <button type="" className="btn bg-secondary text-white ">
          <a className="nav-link " href="">
            SignIn
          </a>
        </button>
      </form>
    </div>
  );
};

export default Login;
