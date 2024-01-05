import Button from '@ui/atoms/Button';
import './style.css';
import { useAlterStateButton } from '../../../../../context/ButtonChangeTheViewType/context';
export const SelectActions = () => {
  const [buttonState, alterStateButton] =useAlterStateButton((state)=>[
    state.buttomState,
    state.alterStateButton
  ])

  const setButtonStateEqualsAllProducts=()=>{
    alterStateButton("AllProducts")
  }
  const setButtonStateEqualsAvailableNow=()=>{
    alterStateButton("AvailableNow")
  }
  return (
    <div className="containerButton">
      <Button
        active={buttonState==="AllProducts"}
        onClick={setButtonStateEqualsAllProducts}
        text="All Products"
      />
      <Button
        active={buttonState==="AvailableNow"}
        onClick={setButtonStateEqualsAvailableNow}
        text="Available Now"
      />
    </div>
  );
};
