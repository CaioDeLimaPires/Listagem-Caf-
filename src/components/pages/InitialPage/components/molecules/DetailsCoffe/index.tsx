import Typography from '@ui/atoms/Typography';
import './styles.css';
import PriceCard from '@pages/initialPage/atomsPriceCard';

type Props = {
  text: string;
  price: string;
  rating: number;
  votes: number;
};

const DetailsCoffe = ({ text, price, rating, votes }: Props) => (
  <div className="containerDetails">
    <div className="containerDefault">
      <div className="containerTextDetails">
        <Typography text={text} style={'medium'} />
      </div>
      <PriceCard price={price} />
    </div>
    <div className="containerStatus">
      <img src="/Star_fill.svg" alt="StarFill" width={18}height={18}/>
      <div className="containerRating">
        <Typography text={rating.toString()} style="small" />
        <Typography text={`(${votes} votes)`} style="sub-title-small" />
      </div>
    </div>
  </div>
);

export default DetailsCoffe;
