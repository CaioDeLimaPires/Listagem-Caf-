
import './style.css';

type Props={    
    image?:string
}
const Card = ({image}:Props) => {  
  return (
   <img className='card'src={image}/>
  );
};
export default Card;
