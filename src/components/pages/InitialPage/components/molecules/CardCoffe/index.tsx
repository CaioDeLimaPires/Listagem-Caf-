import Card from '@ui/atoms/Card';
import './style.css';
import DetailsCoffe from '../DetailsCoffe';

type Props = {
  data: CoffeDetailsProps[];
};
export type CoffeDetailsProps = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
};
const CardCoffe = ({ data }: Props) => {
  return data.map((item) => (
    <div className="containerCardCoffe" key={item.id}>
      <Card image={item.image} />
      <DetailsCoffe
        price={item.price}
        rating={item.rating}
        text={item.name}
        votes={item.votes}
      />
    </div>
  ));
};

export default CardCoffe;
