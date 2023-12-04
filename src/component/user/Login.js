import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import '../user/login.css'
import { useSelector, useDispatch } from 'react-redux'
import { login_user } from '../../redux/actions/UserAction'
import { CLEAR_ERRORS } from '../../redux/constants/UserConstant'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  const [email,setEmail] = useState()
  const [password,setpassword] = useState()

  const submithandler = (e)=>{
    e.preventDefault()
    // console.log(email,password)
    dispatch(login_user(email,password))
  }
  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(CLEAR_ERRORS)
    }
    if(isAuthenticated){
      navigate('/')
    }
  },[dispatch,error,isAuthenticated,navigate])
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
                  <form onSubmit={submithandler}>
                    <div className="mb-4">
                      {/* <label>UserName:</label> */}
                      <input
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        name=""
                        className="form-control "
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label>Password:</label> */}
                      <input
                        onChange={(e)=>setpassword(e.target.value)}
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <center>
                      {" "}
                      <button type="submit" class="btn btn-success ">
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