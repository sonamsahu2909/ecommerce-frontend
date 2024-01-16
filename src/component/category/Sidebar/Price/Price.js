import Input from "../../Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
    
      <div className="ml bg-light p-4 mb-30">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="Rs 20000 - Rs30000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="Rs 30000 - Rs 40000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="Rs 40000 - Rs 50000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Rs 50000 - Rs 75000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Rs 75000 - Rs 20000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
