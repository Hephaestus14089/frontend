import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

// import Search from './Search/Search';
import Cart from '../Cart/Cart';

import { Context } from '../../utils/context';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>

          <div className="center">Plethora</div>

          <div className="right">
            <TbSearch />
            <AiOutlineHeart />
            <span
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      { showCart && <Cart setShowCart={setShowCart} /> }
    </>
  );
};

export default Header;
