import Card from '@ui/atoms/Card';
import './style.css';
import DetailsCoffe from '../DetailsCoffe';
import { useAlterStateButton } from '../../../../../context/ButtonChangeTheViewType/context';
import TagChip from '@ui/atoms/TagChip';

type Props = {
  data: CoffeDetailsProps[];
};
export type CoffeDetailsProps = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
};

const CardCoffe = ({ data }: Props) => {
  const [buttonState] = useAlterStateButton((state) => [state.buttomState]);

  return data.map((item) =>
    buttonState === 'AvailableNow' ? (
      item.available ? (
        <div className="containerCardCoffe" key={item.id}>
          {item.popular&&<TagChip text='Popular' />}
          <Card image={item.image} />
          <DetailsCoffe
            price={item.price}
            rating={item.rating}
            text={item.name}
            votes={item.votes}
            avilable={item.available}
          />
        </div>
      ) : null
    ) : (
      <div className="containerCardCoffe" key={item.id}>
        {item.popular&&<TagChip text='Popular' />}
        <Card image={item.image} />
        <DetailsCoffe
          price={item.price}
          rating={item.rating}
          text={item.name}
          votes={item.votes}
          avilable={item.available}
        />
      </div>
    )
  );
};

export default CardCoffe;
