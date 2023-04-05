import { ReactNode, SetStateAction, MutableRefObject } from "react";
interface NavbarProps {
  activeItem: number;
  id: string;
  children: ReactNode;
  setActiveItem: (value: SetStateAction<number>) => void;
  refJump: () => void;
}
export default NavbarProps;
