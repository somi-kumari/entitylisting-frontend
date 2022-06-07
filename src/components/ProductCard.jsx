import "./ProductCard.css";
export const ProductCard = ({ props }) => {
//   console.log(props);
  const {
    product_color,
    product_image,
    product_price,
    product_size,
    product_title,
  } = props;
  return (
    <div className="product-card">
      <img src={product_image[0]} />

      <div className="field">
        <div className="title">Name:-</div>
        <div>{product_title}</div>
      </div>
      <div className="field">
        <div className="title">Color:-</div>
        <div>{product_color[0]}</div>
      </div>
      <div className="field">
        <div className="title">Size:-</div>
        <div>{product_size[0]}</div>
      </div>
      <div className="field">
        <div className="title">Price:-</div>
        <div> ₹{product_price}</div>
      </div>
    </div>
  );
};
