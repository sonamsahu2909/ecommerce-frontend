import { Link } from "react-router-dom";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4" style={{ height: "500px" }}>
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100 mt-4" src={img} alt={title} />
          </div>
          <div className="text-center py-4">
            <Link className="h6 text-decoration-none text-truncate" to="">
            {title}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>{newPrice}</h5>
              <h6 className="text-muted ml-2">
                <del>{prevPrice}</del>
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              {star} {star} {star} {star}
              <small>({reviews})</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
