// name email pass confirmpass, image

import React from 'react'
import { Link } from 'react-router-dom'
import '../user/register.css'

function Registration() {
  return (
    <>
    <div className="container-fluid wh8">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card shadow-lg login8 bg-secondary">
                <h3 className=" text-center pk "> Administrator Login</h3>
                <div className="card-body">
                  <form>
                    <div className="mb-4">
                      {/* <label>UserName:</label> */}
                      <input
                        type="text"
                        name=""
                        className="form-control "
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label>UserName:</label> */}
                      <input
                        type="text"
                        name=""
                        className="form-control "
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label>Password:</label> */}
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label>Password:</label> */}
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Conform Password"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="file"
                        name="image"
                       
                        
                      />
                    </div>

                    <center>
                      {" "}
                      <button type="button" className="btn btn-warning">
                        Register
                      </button>
                    </center>
                    <p className="text-center mt-4 text-black">
                      <b style={{ color: "black" }}> HAVE AN ACCOUNT?</b>&nbsp;
                      &nbsp;
                      <Link to="/login" className="reg8">
                        <b style={{ color: "red" }}>LOGIN NOW</b>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Registration