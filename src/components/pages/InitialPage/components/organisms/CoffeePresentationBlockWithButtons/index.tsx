import HeaderInitialPage from '@pages/initialPage/moleculesHeaderInitialpage';
import './style.css';
import { SelectActions } from '@pages/initialPage/moleculesSelectActions';

const CoffeePresentationBlockWithButtons = () => (
  <div className="container">
    <HeaderInitialPage />
    <SelectActions />
  </div>
);

export default CoffeePresentationBlockWithButtons;
