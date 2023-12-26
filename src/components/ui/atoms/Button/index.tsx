import './style.css';

type Props = {
  text: string;
  active?: boolean;
  onClick: () => void;
};
const Button = ({ text, active, onClick }: Props) => (
  <button onClick={onClick} className={active ? 'active' : 'notActive'}>
    {text}
  </button>
);

export default Button;
