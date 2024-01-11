import './style.css';
type Props = {
  text: string;
};
const TagChip = ({ text }: Props) => (
  <div className="containerTagChip">{text}</div>
);

export default TagChip;
