import { ProductCard } from '../../components/productcard';
import { useNavigate } from 'react-router-dom';
import { ProductsData } from './data';

export const FeaturedProductsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Feature products</h2>
      <p>A special lineup of products assembled just for you, based on your needs</p>
      <hr />
      {ProductsData.map((product) => (
        <ProductCard
          key={product.title}
          title={product.title + '\t - \t' + product.price}
          subtitle={product.subtitle}
          description={product.description}
          onDetails={() => {
            console.log('Featured products details Clicked');
            navigate('/products/details/' + product.id);
          }}
          onBuy={() => {
            console.log('Featured products buy clicked');
          }}
        />
      ))}
    </div>
  );
};
