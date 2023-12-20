import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

function Profile() {
  const { user,loading } = useSelector((state) => state.auth);
  return (
    <>
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
                    <Link to='/order'>
                    <h6><i className="fas fa-shopping-bag px-4"></i>MY ORDER</h6>
                    </Link>   
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <Link to='/cart'>
                  <h6><i className="fas fa-shopping-cart px-4"></i>MY CART</h6>
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
                  <hr className='mb-5'/>
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
                    <div className="col-sm-10">
                      <button data-bs-toggle="modal" data-bs-target="#change_profile" type="button" className="btn btn-info mx-2">Edit Profile</button>
                      <button data-bs-toggle="modal" data-bs-target="#change_password" type="button" className="btn btn-info "  >change_password</button>
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div className="modal fade" id="change_password"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal-dialog modal-lg"> 
      <div className="modal-content bg-transparent border-0">
        <div className="modal-header">
          <h5 className="modal-title  bg-transparent"> </h5>

          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>
        <div className="modal-body bg-white ">
          <form  className="p-2">
            <div className="mb-3">
              <input type="text" value="" name="oldpassword" className="form-control"
                placeholder="enter your old password"/>
            </div>
            <div className="mb-3">
              <input type="text" value="" name="newpassword" className="form-control"
                placeholder="enter your new password"/>
            </div>
            <div className="mb-3">
              <input type="text" value="" name="cpassword" className="form-control"
                placeholder="enter your confirm password"/>
            </div>
            <button type="submit" className="btn btn-secondary ">Submit</button>

          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="change_profile">
    <div class="modal-dialog modal-lg pt-5 mt-5">
      <div class="modal-content bg-white border-0 ">
        <div class="modal-header">
          <h5 class="modal-title ">Update Profile</h5>

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>
        <div class="modal-body bg-white ">
          <form class="p-2">
            <div class="mb-3">
              <span>Name</span>
              <input type="text"  name="name" class="form-control"placeholder="Name" />
            </div>
            <div class="mb-3">
              <span>Email</span>
              <input type="email"  name="email" class="form-control" placeholder="email" />
            </div>
            <div class="mb-3">
              <span>Image</span>
              <input type="file"  name="image" class="form-control" />
              <img src="" style={{width:'20%',height:'130px',borderRadius: '100px', border: '4px solid white'}}  alt="logo" />
            </div>
            <button type="submit" class="btn btn-secondary ">Submit</button>

           </form>
        </div>
      </div>
    </div>
  </div>


    </>
  )
}

export default Profile