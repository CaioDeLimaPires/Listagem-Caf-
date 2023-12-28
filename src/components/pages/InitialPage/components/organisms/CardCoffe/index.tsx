import Card from '@ui/atoms/Card';
import DetailsCoffe from '../../molecules/DetailsCoffe';

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
      <div style={{display:'flex',flexDirection:"column",gap:"16px"}}>
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
