import { ProductCard } from '../../components/productcard';

export const NewProductsPage = () => {
  const products = [
    {
      title: 'New Title 1',
      subtitle: 'More info about title 1',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
    {
      title: 'New Title 2',
      subtitle: 'More info about title 2',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
    {
      title: 'New Title 3',
      subtitle: 'More info about title 3',
      description: 'Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.',
    },
  ];

  return (
    <div>
      <h2>New products</h2>
      <p>New products introduced this year</p>
      <hr />
      {products.map((product) => (
        <ProductCard key={product.title} title={product.title} subtitle={product.subtitle} description={product.description} />
      ))}
    </div>
  );
};
