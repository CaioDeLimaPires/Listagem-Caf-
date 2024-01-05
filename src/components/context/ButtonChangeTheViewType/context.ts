import { create } from 'zustand';

type Props = {
  buttomState: ButtonStateProps;
  alterStateButton: (buttomState:ButtonStateProps) => void;
};
type ButtonStateProps = 'AllProducts' | 'AvailableNow'

export const useAlterStateButton = create<Props>((set) => ({
  buttomState: 'AllProducts',
  alterStateButton: (status) => set(() => ({buttomState:status}))
}));
