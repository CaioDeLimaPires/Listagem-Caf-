
import './style.css';
import { useCoffeeData } from '../../../../../services/api-service';
import CardCoffe from '@pages/initialPage/moleculesCardCoffe';

const TableCoffe = () => {
  const { data} = useCoffeeData();
  return (
    <div className="containerTableCoffe">
      <CardCoffe data={data||[]} />
    </div>
  );
};

export default TableCoffe;
