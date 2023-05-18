import './CartItem.scss';
import prod from '../../../assets/prod.webp';

import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import { Context } from '../../../utils/context';

const CartItem = () => {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity
  } = useContext(Context);

  return (
    <div className="cart-products">
    {cartItems.map(item => (
      <div className="cart-product" key={item.id}>
        <div className="image-container">
          <img src={prod} />
        </div>

        <div className="prod-details">
          <span className="name">{item.attributes.title}</span>
          <MdClose
            className="close-btn"
            onClick={() => handleRemoveFromCart(item)}
          />
          <div className="quantity-buttons">
            <span
              onClick={() =>
                handleCartProductQuantity("dec", item)
              }
            >
              -
            </span>
            <span>{item.quantity}</span>
            <span
              onClick={() =>
                handleCartProductQuantity("inc", item)
              }
            >
            +
            </span>
          </div>
        </div>
        <div className="text">
          <span>{item.quantity}</span>
          <span>x</span>
          <span className="highlight">
            <span>&#8377;</span>
            {item.attributes.price *
             item.quantity}
          </span>
        </div>
      </div>
    ))}
    </div>
  );
};

export default CartItem;
