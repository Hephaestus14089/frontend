import Product from './Product/Product';
import './Products.scss';

const products = [
  {
    id: 1,
    attributes: {
      title: "JBL Infinity",
      price: 3500
    }
  },
  {
    id: 2,
    attributes: {
      title: "JBL Clip 3",
      price: 4000
    }
  },
  {
    id: 3,
    attributes: {
      title: "Raspberry pi",
      price: 14000
    }
  },
  {
    id: 1,
    attributes: {
      title: "Arduino",
      price: 11000
    }
  },
  {
    id: 1,
    attributes: {
      title: "AMD Threadripper",
      price: 1320000
    }
  },
  {
    id: 1,
    attributes: {
      title: "JBL Infinity",
      price: 3500
    }
  },
  {
    id: 1,
    attributes: {
      title: "AMD Threadripper",
      price: 1320000
    }
  },
  {
    id: 1,
    attributes: {
      title: "JBL Clip 3",
      price: 4000
    }
  },
  {
    id: 1,
    attributes: {
      title: "AMD Threadripper",
      price: 1320000
    }
  },
  {
    id: 1,
    attributes: {
      title: "Raspberry pi",
      price: 14000
    }
  },
]

const Products = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">
        Section Heading
      </div>

      <div className="products">
    {products.map(item =>
      <Product key={item.id} id={item.id} data={item.attributes} />
    )}
      </div>
    </div>
  );
};

export default Products;
