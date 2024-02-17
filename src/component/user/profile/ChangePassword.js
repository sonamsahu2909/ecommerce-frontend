import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import {clearErrors, logout, updateUserPassword} from "../../../redux/actions/UserAction";
import { UPDATE_PASSWORD_RESET } from "../../../redux/constants/UserConstant";
import Loader from "../../layouts/loader/Loader";

function ChangePassword() {
  const alert = useAlert();
  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [oldpassword, setOldPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [cpassword, setConfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };
  const toggleShowPassword1 = () => {
    setShowPassword1((prevVisible) => !prevVisible);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2((prevVisible) => !prevVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(oldpassword,newpassword,cpassword)
    const formData = new FormData();
    formData.append("oldpassword", oldpassword);
    formData.append("newpassword", newpassword);
    formData.append("cpassword", cpassword);
    dispatch(updateUserPassword(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Updates Password Successfull");
      dispatch(logout());
      navigate("/login");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, alert, isUpdated, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container" style={{maxWidth:'1200px',padding:'20px'}}>
          <div className="main-body">
            {/* Breadcrumb  */}
            <nav aria-label="breadcrumb" className="main-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="">User</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  ChangePassword
                </li>
              </ol>
            </nav>
            {/* Breadcrumb */}

            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={user?.image?.url}
                        alt={user && user.name}
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{user && user.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/profile">
                        <h6>
                          <i className="fas fa-user px-4"></i>MY Profile
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/order/me">
                        <h6>
                          <i className="fas fa-shopping-bag px-4"></i>MY ORDER
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/cart">
                        <h6>
                          <i className="fas fa-shopping-cart px-4"></i>MY CART
                        </h6>
                      </Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <Link to="/change_password">
                        <h6>
                          <i className="fas fa-key px-4"></i>CHANGE PASSWORD
                        </h6>
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
                        <h6>Change Password</h6>
                      </div>
                    </div>
                    <hr className="mb-2" />
                    <div>
                      <form onSubmit={handleSubmit} className="p-2">
                        <div
                          className="input-group mb-3 form-control"
                          id="show_hide_password"
                        >
                          <input
                            class="form-control border-0 bg-transparent "
                            onChange={(e) => setOldPassword(e.target.value)}
                            value={oldpassword}
                            type={showPassword ? "text" : "password"}
                            placeholder="enter your old password"
                            style={{ margin: "-12px" }}
                          />
                          <Link to="" onClick={toggleShowPassword}>
                            <i
                              className={
                                showPassword
                                  ? "fa fa-eye text-dark"
                                  : "fa fa-eye-slash text-dark"
                              }
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                        <div
                          className="input-group mb-3 form-control"
                          id="show_hide_password"
                        >
                          <input
                            class="form-control border-0 bg-transparent "
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newpassword}
                            type={showPassword1 ? "text" : "password"}
                            placeholder="enter your new password"
                            style={{ margin: "-12px" }}
                          />
                          <Link to="" onClick={toggleShowPassword1}>
                            <i
                              className={
                                showPassword1
                                  ? "fa fa-eye text-dark"
                                  : "fa fa-eye-slash text-dark"
                              }
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                        <div
                          className="input-group mb-3 form-control"
                          id="show_hide_password"
                        >
                          <input
                            class="form-control border-0 bg-transparent "
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={cpassword}
                            type={showPassword2 ? "text" : "password"}
                            placeholder="enter your Confirm Password"
                            style={{ margin: "-12px" }}
                          />
                          <Link to="" onClick={toggleShowPassword2}>
                            <i
                              className={
                                showPassword2
                                  ? "fa fa-eye text-dark"
                                  : "fa fa-eye-slash text-dark"
                              }
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-info mx-2"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChangePassword;
