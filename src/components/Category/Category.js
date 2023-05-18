import { useParams } from 'react-router-dom';
import './Category.scss';
import Products from '../Products/Products';

const Category = () => {
  const { id } = useParams();

  function getData(id) {
    let title = "";
    switch (id) {
      case '1':
        title = "Speaker";
        break;
      case '2':
        title = "Headsets";
        break;
      case '3':
        title = "Phones";
        break;
      case '4':
        title = "Laptops";
        break;
    }

    return title;
  }

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          { getData(id) }
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Category;
