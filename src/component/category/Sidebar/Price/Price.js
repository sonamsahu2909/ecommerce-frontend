import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
    
      <div className="bg-light p-4 mb-30">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" title="all" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={30000}
          title="Rs 0 - 30000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={40000}
          title="Rs 30000 - Rs 40000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={50000}
          title="Rs 40000 - Rs 50000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100000}
          title="Rs 50000 - Rs 100000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={300000}
          title="Over Rs100000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
