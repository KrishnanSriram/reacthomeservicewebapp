import { ProductCard } from '../../components/productcard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsData } from './data';

type PurchaseInfo = {
  userid: string;
  id: number;
  description: string;
  price: string;
};

export const FeaturedProductsPage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  const handleClick = async (purchaseInfo: PurchaseInfo) => {
    const data = { userid: purchaseInfo.userid, items: [{ id: '' + purchaseInfo.id, description: purchaseInfo.description, price: purchaseInfo.price }] }; // data to send in the request body
    console.log('Data to be persisted is', data);
    try {
      const res = await fetch('https://team13webapp.azurewebsites.net/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        console.log('Failed to add to cart');
        console.log(res.statusText);
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setResponse(json);
      console.log(json);
      alert('Your purchase is added to cart');
    } catch (err: any) {
      setError(err.message);
      alert(`Error: ${err.message}`);
    }
  };

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
            handleClick({ userid: 'random-id1', id: product.id, description: product.title, price: product.price });
          }}
        />
      ))}
    </div>
  );
};
