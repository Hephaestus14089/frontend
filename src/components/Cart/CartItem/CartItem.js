const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
        </div>
        <div className="prod-details">
          <span className="name">product name</span>
          <MdClose
            className="close-btn"
    /* onClick={() => handleRemoveFromCart(item)} */
          />
          <div className="quantity-buttons">
            {/* <span */}
            {/*   onClick={() => */}
            {/*     handleCartProductQuantity("dec", item) */}
            {/*   } */}
            {/* > */}
            {/*   - */}
            {/* </span> */}
            {/* <span>{item.attributes.quantity}</span> */}
            {/* <span */}
            {/*   onClick={() => */}
            {/*     handleCartProductQuantity("inc", item) */}
            {/*   } */}
            {/* > */}
            {/* + */}
            {/* </span> */}
          </div>
        </div>
        <div className="text">
          {/* <span>{item.attributes.quantity}</span> */}
          <span>x</span>
          {/* <span className="highlight"> */}
          {/*   <span>&#8377;</span> */}
          {/*   {item.attributes.price * */}
          {/*    item.attributes.quantity} */}
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
