import Product from './Product/Product';
import './Products.scss';

import { productsData } from '../../assets/productsData.js';

const Products = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">
        Section Heading
      </div>

      <div className="products">
    {productsData.map(item =>
      <Product key={item.id} id={item.id} data={item.attributes} />
    )}
      </div>
    </div>
  );
};

export default Products;
