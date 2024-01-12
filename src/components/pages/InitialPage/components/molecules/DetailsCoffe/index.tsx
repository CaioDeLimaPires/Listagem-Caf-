import Typography from '@ui/atoms/Typography';
import './styles.css';
import PriceCard from '@pages/initialPage/atomsPriceCard';

type Props = {
  text: string;
  price: string;
  rating: number | null;
  votes: number;
  avilable: boolean;
};

const DetailsCoffe = ({ text, price, rating, votes, avilable }: Props) => (
  <div className="containerDetails">
    <div className="containerDefault">
      <div className="containerTextDetails">
        <Typography text={text} style={'medium'} />
      </div>
      <PriceCard price={price} />
    </div>
    <div className="containerStatus">
      {rating ? (
        <img src="/Star_fill.svg" alt="StarFill" width={22} height={22} />
      ) : (
        <img src="/Star.svg" alt="Star" width={20} height={20} />
      )}
      <div className="containerDefault">
        <div className="containerRating">
          {rating && <Typography text={rating.toString()} style="medium" />}
          <Typography
            text={votes ? `(${votes} votes)` : 'No ratings'}
            style="sub-title"
          />
        </div>
        {!avilable && (
          <div className="containerAvailableStatus">
            <Typography text="Sold out" style="warning" />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DetailsCoffe;
