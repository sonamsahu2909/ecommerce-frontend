import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/orderdetail.css";
import Message from "../../layouts/loader/Message";
import Loader from "../../layouts/loader/Loader";
import {
  clearErrors,
  getOrdersDetails,
} from "../../../redux/actions/OrderAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
function OrderDetail() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id)

  const { user } = useSelector((state) => state.auth);
  const { loading, error, orderDetail } = useSelector(
    (state) => state.ordDetail
  );
  console.log(orderDetail);

  useEffect(() => {
    dispatch(getOrdersDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, id, alert, error]);

  // if (loading) {
  //   return <Loader />;
  // }

  if (!orderDetail || Object.keys(orderDetail).length === 0) {
    return <Message variant="danger">No orders found</Message>;
  }

  const {
    orderItems,
    shippingInfo,
    paymentInfo,
    createdAt,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = orderDetail;

  return (
    <div className="container px-0">
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
            User Profile
          </li>
        </ol>
      </nav>
      {/* Breadcrumb */}
      {loading?(<Loader/>):error?(<Message/>):(
        <div className="row ">
           <div className="col-md-4  mb-3">
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
         <div className="order-detail-row bg-light">
        {orderItems.map((item) => (
          <div key={item._id} className="order-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="item-details">
              <div>
                <strong>{item.name}</strong>
              </div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>
            </div>
          </div>
        ))} 
      </div  >
      <div className="order-detail-row bg-light">
        <div className="title">Shipping Address</div>
        <div className="data">
          {" "}
          {shippingInfo && shippingInfo.address},{" "}
          {shippingInfo && shippingInfo.city},{" "}
          {shippingInfo && shippingInfo.country} -{" "}
          {shippingInfo && shippingInfo.postalcode}
        </div>
      </div>
      <div className="order-detail-row bg-light">
        <div className="title">Payment Method</div>
        <div className="data">
          {paymentInfo
            ? paymentInfo.status === "succeeded"
              ? paymentInfo.id
              : "Pending"
            : "N/A"}
        </div>
      </div>
      <div className="order-detail-row bg-light">
        <div className="title">Order Summary</div>
        <div className="data">
          Ordered on: {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className="data">Item(s) Subtotal: {itemsPrice}</div>
        <div className="data">Shipping: {shippingPrice}</div>
        <div className="data">Tax: {taxPrice}</div>
        <div className="data">Grand Total: {totalPrice}</div>
      </div>
         </div>
        </div>
      )}
      
      
    </div>
  );
}

export default OrderDetail;
