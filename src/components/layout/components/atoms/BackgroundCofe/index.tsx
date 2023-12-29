import { ReactNode } from 'react';
import './BackgroundCofe.css';

type Props = {
  children: ReactNode;
};
const BackgroundCofe = ({ children }: Props) => {
  return (
    <div className="background">
      <img src="/bg-cafe.jpg"></img>
      {children}
    </div>
  );
};

export default BackgroundCofe;
