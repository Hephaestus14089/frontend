import prod from '../../assets/prod.webp';
import './SingleProduct.scss';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCartPlus
} from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';

import { productsData } from '../../assets/productsData.js';
import { Context } from '../../utils/context';

const SingleProduct = () => {
  const { id } = useParams();

  const product = productsData[Number(id) - 1];
  const { title, price } = product.attributes;

  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(Context);

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>

          <div className="right">
            <span className="name">{title}</span>
            <span className="price">{price}</span>
            <span className="desc">Product description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span
                  onClick={() => { setQuantity(
                    quantity === 1
                      ? 1
                      : quantity - 1
                  )}}
                >-</span>
                <span>{quantity}</span>
                <span
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}>+</span>
              </div>

              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(product, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
