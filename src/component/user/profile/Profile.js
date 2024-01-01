import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Loader from "../../layouts/loader/Loader";


function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user, isAuthenticated, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/')
    }
  });

  return (
    <>
    {
      loading ? (
        <Loader/>
      ) : (
        <div className="container">
    <div className="main-body">
    
          {/* Breadcrumb  */}
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">User</Link></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          {/* Breadcrumb */}
    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={user?.image?.url} alt={user && user.name} className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>{user && user.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
              
                <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to='/profile'>
                    <h6><i className="fas fa-user px-4"></i>MY Profile</h6>
                    </Link>   
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to='/order'>
                    <h6><i className="fas fa-shopping-bag px-4"></i>MY ORDER</h6>
                    </Link>   
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <Link to='/cart'>
                  <h6><i className="fas fa-shopping-cart px-4"></i>MY CART</h6>
                  </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to='/change_password'>
                    <h6> <i className="fas fa-key px-4"></i>CHANGE PASSWORD</h6>
                    </Link>   
                  </li>
                </ul>
            
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="card mb-3">
              
                  <div className="card-body">
                  <div className="row">
                      <div className="col-sm-12">
                        <h6 className="mb-2">PERSONAL INFORMATION</h6>
                      </div>
                    </div>
                    <hr className='mb-3'/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.name}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                        {user && user.email}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile Number</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.number}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Gender</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.gender}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.state}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">City</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.city}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Pincode</h6>
                      </div>
                      <div className="col-sm-9 text-dark">
                      {user && user.pincode}
                      </div>
                    </div>
                    <hr/>
                  
                    <div className="row">
                      <div className="col-sm-10">
                        <Link to='/update_profile' className="btn btn-info mx-2">Edit Profile</Link>
                      </div>                  
                    </div>
                  </div>
                
              </div>
            </div>
  
          </div>
        </div>
    </div>
      )
    }
    

    
  


    </>
  )
}

export default Profile