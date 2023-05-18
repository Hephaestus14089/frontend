import prod from "../../../assets/prod.webp";
import './Product.scss';

import { useNavigate } from 'react-router-dom';

const Product = ({ key, id, data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => { navigate("/product/"+id) }}
    >
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
