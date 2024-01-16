import Input from "../../Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <>
    <div className="bg-light p-4 mb-30">
       <div>
        <div className="d-flex">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark "></span>All Laptop
        </label>
        </div>
        <Input
          handleChange={handleChange}
          value="Lenovo"
          title="Lenovo"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Hp"
          title="Hp"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dell"
          title="Dell"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Acer"
          title="Acer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Apple"
          title="Apple"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Asus"
          title="Asus"
          name="test"
        />
      </div>
    </div>
    </>
    
  );
}

export default Category;