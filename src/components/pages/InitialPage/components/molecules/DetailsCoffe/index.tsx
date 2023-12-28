import Typography from '@ui/atoms/Typography';
import PriceCard from '../../atoms/PriceCard';
import './styles.css';
type Props = {
  text: string;
  price: string;
  rating: number;
  votes: number;
};

const DetailsCoffe = ({ text, price, rating, votes }: Props) => (
  <div className="containerDetails">
    <div className='containerDefault' >
      <div className="containerTextDetails">
        <Typography text={text} style={'small'} />
      </div>
      <PriceCard price={price} />
    </div>
    <div className="containerStatus">
      <img src="/Star_fill.svg" alt="StarFill" />
      <div className='containerRating'>
        <Typography text={rating.toString()} style="small" />
        <Typography text={`(${votes} votes)`} style="sub-title" />
      </div>
    </div>
  </div>
);

export default DetailsCoffe;
