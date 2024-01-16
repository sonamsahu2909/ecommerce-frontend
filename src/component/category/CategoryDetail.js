import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar"
import Recommended from "./Recommended/Recommended";
import Card from "./Card";
import Product from "./Products/Product";

function CategoryDetail() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // ------------ Button Filtering -----------
    const handleClick = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    function filteredData(products, selected, query) {
      let filteredProducts = products;
  
      // Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }
  
      // Applying selected filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
        );
      }

      
      return filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );
    }
  
    const result = filteredData(products, selectedCategory, query);
  return (
    // <>
    //      <Sidebar handleChange={handleChange} /> 
    //      <Navigation query={query} handleInputChange={handleInputChange} />  
    //     <Recommended handleClick={handleClick} />
    //     <Product result={result} />
    //   </>
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
          <Sidebar handleChange={handleChange} /> 
        </div>
        {/*Shop Sidebar End */}

        {/*Shop Product Start */}
        <div className="col-lg-9 col-md-8">
        <Recommended handleClick={handleClick} />
        <Product result={result} />
        </div>
        {/*Shop Product End */}
       
      </div>
    </div>
    {/*Shop End */}
  </>
  )
}

export default CategoryDetail