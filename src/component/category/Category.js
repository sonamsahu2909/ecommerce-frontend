import React from "react";
import { Link } from "react-router-dom";

function Category({categorydata}) {

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <Link className="text-decoration-none"   to={`subcategory/${categorydata._id}`}>
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: "100px", height: "100px" }}
            >
              <img className="img-fluid" src={categorydata.image[0].url} alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>{categorydata.name}</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Category;
