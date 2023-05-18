import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  const location = useLocation();

  useEffect(() => {
    let count = 0;
    cartItems.forEach(
      item => count += item.quantity
    );
    setCartCount(count);

    let totalPrice = 0;
    cartItems.forEach(
      item => totalPrice += item.attributes.price * item.quantity
    );
    setCartPrice(totalPrice);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(item => item.id === product.id);

    if (index !== -1)
      items[index].quantity += quantity;
    else {
      product.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter(item => item.id !== product?.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex(item => item.id === product?.id);

    if (type === "inc") {
      items[index].quantity += 1;
    }
    else if (type === "dec") {
      if (items[index].quantity === 1) return;
      items[index].quantity -= 1;
    }

    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartPrice,
        setCartPrice,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
