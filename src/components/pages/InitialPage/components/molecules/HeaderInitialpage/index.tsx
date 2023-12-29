import Typography from '@ui/atoms/Typography';
import './style.css';

const title = 'Our Collection';
const subTitle =
  'Introducing our Coffee Collection,' +
  ' a selection of unique coffees from different roast types and origins, ' +
  'expertly roasted in small batches and shipped fresh weekly.';

const HeaderInitialPage = () => (
  <div className="containerHeader">
    <img className="vetor" src="/vector.svg" alt="Background vector" />
    <div className="containerText">
      <Typography text={title} style="big" />
      <Typography text={subTitle} style="sub-title" />
    </div>
  </div>
);

export default HeaderInitialPage;
