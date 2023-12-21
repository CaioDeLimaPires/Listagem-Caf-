import './style.css';
type Props = {
  style?: style;
  color?: string;
  text: string;
};

type style = 'big' | 'sub-title';

const Typography = ({ text, style = 'sub-title' }: Props) => (
  <p className={style}>{text}</p>
);

export default Typography;
