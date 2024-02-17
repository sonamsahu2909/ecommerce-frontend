import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { myOrders } from "../../../redux/actions/OrderAction";
import { clearErrors } from "../../../redux/actions/ProductAction";
import Message from "../../layouts/loader/Message";
import Loader from "../../layouts/loader/Loader";
import '../../css/order.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from 'react-spring';

function Order() {
  
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { loading, error, orders } = useSelector((state) => state.myOrder);
  // console.log(orders)

  useEffect(() => {
    dispatch(myOrders());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  // Animation for table rows
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });


  return (
    <animated.div style={fadeIn} className="container-fluid mt-5">
      <div className="px-5">
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
                <Link to="/order">Order</Link>
                </li>
              </ol>
            </nav>
            {/* Breadcrumb */}
      {/* <h1 className="text-center mb-4">My Orders</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row mt-5 ">
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
                          {" "}
                          <i className="fas fa-key px-4"></i>CHANGE PASSWORD
                        </h6>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          <div className="col-8 ">
            <div className="table-responsive bg-white">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Total Price</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id}>
                      <td>{(order._id)}</td>
                      <td>{`₹${order.totalPrice}`}</td>
                      {/* <td>
                        {order.orderItems.map(item => (
                          <div key={item._id}>
                            <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
                            <span>{item.name}</span>
                          </div>
                        ))}
                      </td> */}
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>{new Date(order.createdAt).toLocaleTimeString()}</td>    
                      <td>{order.orderStatus}</td>
                      <td>
                        <Link to={`/order/${order._id}`} className="btn btn-primary">
                          <FontAwesomeIcon icon={faEye} /> 
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      </div>
    </animated.div>
  );
}

export default Order;
