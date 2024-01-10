import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddItemToCart,
  RemoveItemFromCart,
} from "../../redux/actions/CartAction";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);

  const navigate = useNavigate();

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(AddItemToCart(id, newQty));
  };
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }

    dispatch(AddItemToCart(id, newQty));
  };

  const removeCartHandler = (id) => {
    dispatch(RemoveItemFromCart(id));
  };

  const checkouthandler = () => {
    // alert('hello')
    if (isAuthenticated){
      navigate('/shipping')
    }
    else {
      navigate('/login')
    }
  };

  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" to="/shop">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Cart Start */}
      {cartItems.length === 0 ? (
        <h2>Your cart is empty !</h2>
      ) : (
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartItems.map((item) => (
                    <tr>
                      <td className="align-middle">
                        <img
                          src={item.image}
                          alt="product1"
                          style={{ width: "50px" }}
                        />{" "}
                        {item.name}
                      </td>
                      <td className="align-middle">{`₹${item.price}`} </td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: "130px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-minus"
                              onClick={() =>
                                decreaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            name="quantity"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={item.quantity}
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-plus"
                              onClick={() =>
                                increaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        {`₹${item.price * item.quantity}`}{" "}
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeCartHandler(item.product)}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <form className="mb-30" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Apply Coupon</button>
                  </div>
                </div>
              </form>
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Cart Summary</span>
              </h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>{`₹${cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}`}</h6>
                  </div>
                  {/* <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">Rs 10</h6>
                </div> */}
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>{`₹${cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    )}`}</h5>
                  </div>
                  <button
                    className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                    disabled={cartItems === 0}
                    onClick={checkouthandler}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart End */}
    </>
  );
}

export default Cart;
