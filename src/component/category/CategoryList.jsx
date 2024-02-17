import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { GetSubCategory } from '../../redux/actions/CategoryAction';

function CategoryList() {
    const { subcategories,loading,error } = useSelector((state) => state.subcat);
    console.log(subcategories)

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(GetSubCategory());
    // }, [dispatch]);
 
    return (
    <>
      {/*Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" to="/">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/*Breadcrumb End */}

      {/*Shop Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          {/*Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4 mt-3">
            {/*Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-4">
              <span className="bg-secondary pr-3">Filter by price</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3 ">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked
                    id="price-all"
                  />
                  <label className="custom-control-label" for="price-all">
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label className="custom-control-label" for="price-1">
                    Rs 20000 - Rs 30000
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" for="price-2">
                    Rs 30000 - Rs 40000
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label className="custom-control-label" for="price-3">
                    Rs 40000 - Rs 50000
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label className="custom-control-label" for="price-4">
                    Rs 50000 - Rs 75000
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label className="custom-control-label" for="price-5">
                    Rs 75000 - Rs 150000
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/*Price End */}

            {/*Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by Laptop</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked
                    id="color-all"
                  />
                  <label className="custom-control-label" for="price-all">
                    All Laptop
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" for="color-5">
                    Asus Laptop
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" for="color-5">
                    Acer Laptop
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" for="color-5">
                    Lenevo Laptop
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" for="color-5">
                    HP Laptop
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" for="color-5">
                    Apple Macbook
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/*Color End */}
          </div>
          {/*Shop Sidebar End */}

          {/*Shop Product Start */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large"></i>
                    </button>
                    <button className="btn btn-sm btn-light ml-2">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/">
                          Latest
                        </Link>
                        <Link className="dropdown-item" to="/">
                          Popularity
                        </Link>
                        <Link className="dropdown-item" to="/">
                          Best Rating
                        </Link>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/">
                          10
                        </Link>
                        <Link className="dropdown-item" to="/">
                          20
                        </Link>
                        <Link className="dropdown-item" to="/">
                          30
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div
                  className="product-item bg-light mb-4"
                  style={{ height: "500px" }}
                >
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src=""
                      alt=""
                    />
                    <div className="product-action">
                      <Link className="btn btn-outline-dark btn-square" to="">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                      <Link className="btn btn-outline-dark btn-square" to="">
                        <i className="far fa-heart"></i>
                      </Link>
                      <Link className="btn btn-outline-dark btn-square" to="">
                        <i className="fa fa-sync-alt"></i>
                      </Link>
                      <Link className="btn btn-outline-dark btn-square" to="">
                        <i className="fa fa-search"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <Link
                      className="h6 text-decoration-none text-truncate"
                      to=""
                    >
                     name
                    </Link>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>Rs 123.00</h5>
                      <h6 className="text-muted ml-2">
                        <del>Rs 123.00</del>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small className="fa fa-star text-primary mr-1"></small>
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>
         
              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link className="page-link" to="/shop">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="/shop">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/shop1">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/shop3">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/*Shop Product End */}
        </div>
      </div>
      {/*Shop End */}
    </>
  )
}

export default CategoryList