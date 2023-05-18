import prod from "../../../assets/prod.webp";
import './Product.scss';

const Product = ({ key, id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
