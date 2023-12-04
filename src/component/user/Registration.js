import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../user/register.css'
import {useDispatch,useSelector} from 'react-redux'
import { register } from '../../redux/actions/UserAction'
import { useAlert } from 'react-alert'
import { CLEAR_ERRORS } from '../../redux/constants/UserConstant'

function Registration() {
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [cpassword,setCPassword] = useState('')
  const [image,setAvtar] = useState('')
  const dispatch = useDispatch() 
  const history = useNavigate()
  const alert = useAlert()
  
  const submithandler = (e)=>{
    e.preventDefault()
    // console.log(name,email,password,cpassword)
    // console.log(image)
    const myForm = new FormData()
    myForm.append('name',name)
    myForm.append('email',email)
    myForm.append('password',password)
    myForm.append('cpassword',cpassword)
    myForm.append('image',image)
    dispatch(register(myForm))
  }
  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(CLEAR_ERRORS)
    }
    if(isAuthenticated){
      history('/login')
    }
  },[dispatch,alert,error,isAuthenticated,history])

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
                  <form onSubmit={submithandler}>
                    <div className="mb-4">
                      {/* <label>UserName:</label> */}
                      <input
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        name=""
                        className="form-control "
                        placeholder="UserName"
                      />
                    </div>
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
                    <div className="mb-4">
                      {/* <label>Password:</label> */}
                      <input
                        onChange={(e)=>setCPassword(e.target.value)}
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        onChange={(e)=>setAvtar(e.target.files[0])}
                        type="file"
                        name="image"       
                      />
                    </div>

                    <center>
                      {" "}
                      <button type="submit"  className="btn btn-warning">
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