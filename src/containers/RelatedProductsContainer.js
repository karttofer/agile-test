// Components
import { useState, useEffect } from 'react';
import LineComponent from '../components/LineComponent';
import RelatedProductsCard from '../components/RelatedProductCard';

const RelatedProductsComponent = () => {
  const [data, setProducts] = useState({ products: [] });

  useEffect(() => {
    fetch('/get-related')
      .then((e) => e.json())
      .then(u => {
          setProducts(u)
      });
  }, []);

  return (
    <div className="shop__related-products-fill">
      <LineComponent />
      <div className="shop__related-products-list">
        {data.products.length ? data.products.map(e => <RelatedProductsCard key={e.title} title={e.title} price={e.price} img={e.image}/>):null}
      </div>
    </div>
  );
};

export default RelatedProductsComponent;

// Dependencies
