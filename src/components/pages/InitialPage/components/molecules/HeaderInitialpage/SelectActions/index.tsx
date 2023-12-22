import Button from '@ui/atoms/Button';
import { useState } from 'react';
import './style.css'
export const SelectActions = () => {
    const[active,setActive]=useState(false)
  return (
    <div className='containerButton'>
      <Button active={active} onClick={()=>setActive((prev)=>!prev)}text="All Products" />
      <Button active={active} onClick={()=>setActive((prev)=>!prev)} text="Available Now" />
    </div>
  );
};
