import './Home.scss';

import { useEffect, useContext } from 'react';
import { Context } from '../../utils/context';

import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  const getProducts = () => {
    setProducts();
  };
  const getCategories = () => {
    setCategories();
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);


  return (
    <div className="home">
      <Banner />

      <div className="main-content">
        <div className="layout">
          {/* <Category categories={categories} /> */}
          {/* <Products products={products} /> */}
          <Category/>
          <Products/>
        </div>
      </div>
    </div>
  );
};

export default Home;
