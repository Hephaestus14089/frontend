import cat1 from "../../../assets/cat1.jpg";
import prod from "../../../assets/prod.webp";
import './Category.scss';

import { useNavigate } from 'react-router-dom';

const categories = [
  {id: 1, title: "speakers"},
  {id: 2, title: "headsets"},
  {id: 3, title: "phones"},
  {id: 2, title: "laptops"}
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map(category => {
          return (
            <div
              key={category.id}
              className="category"
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img src={cat1} title={category.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
