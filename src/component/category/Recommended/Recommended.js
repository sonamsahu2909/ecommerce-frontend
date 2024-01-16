import Button from "../Button";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title m-4">Recommended</h2>
        <div className="recommended-flex px-4 mb-4">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button onClickHandler={handleClick} value="Acer" title="Acer" />
          <Button onClickHandler={handleClick} value="Asus" title="Asus" />
          <Button onClickHandler={handleClick} value="Lenovo" title="Lenovo" />
          <Button onClickHandler={handleClick} value="Dell" title="Dell" />
          <Button onClickHandler={handleClick} value="Hp" title="Hp" />
        </div>
      </div>
    </>
  );
};

export default Recommended;