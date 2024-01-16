import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <div className="col-lg-12 col-md-4 mt-3">
        {/*Price Start */}
        <h5 className="section-title position-relative text-uppercase mb-4">
          <span className="bg-secondary pr-3">Filter by price</span>
        </h5>
        <Price handleChange={handleChange} />
        {/*Price End */}

        {/*Category Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by Laptop</span>
        </h5>
        <Category handleChange={handleChange} />
        {/*Category End */}

        {/* color */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by Laptop</span>
        </h5>
        <Colors handleChange={handleChange} />
      </div>
    </>
  );
};

export default Sidebar;
