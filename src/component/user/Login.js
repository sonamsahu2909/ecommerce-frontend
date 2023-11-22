import React from 'react'
import { Link } from 'react-router-dom'
import '../user/login.css'

function Login() {
  return (
    <>
    <div className="container-fluid wh">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card shadow-lg login bg-secondary">
                <h3 className=" text-center pk "> Admin Login</h3>
                <div className="card-body">
                  <form>
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

                    <center>
                      {" "}
                      <button type="button" class="btn btn-success ">
                        Login
                      </button>
                    </center>
                    <p className="text-center mt-4 text-black">
                      <Link href="/" className="reg">
                        <b>FORGOT_PASSWORD</b>
                      </Link>
                      <br></br>
                      <b style={{ color: "black" }}>
                        DONT HAVE AN ACCOUNT?
                      </b>{" "}
                      &nbsp; &nbsp;
                      <Link to="/register" className="reg">
                        <b>REGISTER NOW</b>
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

export default Login