import HeaderInitialPage from '../../molecules/HeaderInitialpage';
import { SelectActions } from '../../molecules/SelectActions';
import './style.css';
const CoffeePresentationBlockWithButtons = () => (
  <div className="container">
    <HeaderInitialPage />
    <SelectActions />
  </div>
);

export default CoffeePresentationBlockWithButtons;
