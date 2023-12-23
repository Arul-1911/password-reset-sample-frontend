import React from 'react';

const Reset = () => {
    return (
        <div>
             <div className="body">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="card-body">
            <form>
            <div className="mb-3 mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-type Password"
                  required
                />
              </div>
              <div className="mb-3 ">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Reset;