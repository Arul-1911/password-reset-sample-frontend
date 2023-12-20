import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Login() {
  return (
    <div className="body">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 ">
                <button type="submit" className="button">
                  Login
                </button>
              </div>
              <a href="/login" className="btn">
                Forget Password?{" "}
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
