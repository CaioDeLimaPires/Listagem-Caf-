import './style.css';
type Props = {
  price: string;
};
const PriceCard = ({ price }: Props) => (
  <div className="containerCard">{price}</div>
);

export default PriceCard;
