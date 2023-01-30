import { ServiceData } from './data';
import { ServiceCard } from '../../components/servicecard';

export const ServiceListPage = () => {
  return (
    <div>
      <h2>Our pay services</h2>
      <p>We care for our customers and offer a variety of payment services</p>
      {ServiceData.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title + '\t - \t' + service.interest}
          subtitle={service.subtitle}
          description={service.description}
          onSelect={() => {
            console.log('Featured products details Clicked');
          }}
          isDefault={service.isDefault}
        />
      ))}
    </div>
  );
};
