import { ProductCard } from '../../components/productcard';

export const FeaturedProductsPage = () => {
  const products = [
    {
      title: 'Title 1',
      subtitle: 'More info about title 1',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
    {
      title: 'Title 2',
      subtitle: 'More info about title 2',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
    {
      title: 'Title 3',
      subtitle: 'More info about title 3',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
  ];
  return (
    <div>
      <h2>Feature products</h2>
      <p>A special lineup of products assembled just for you, based on your needs</p>
      <hr />
      {products.map((product) => (
        <ProductCard key={product.title} title={product.title} subtitle={product.subtitle} description={product.description} />
      ))}
    </div>
  );
};
