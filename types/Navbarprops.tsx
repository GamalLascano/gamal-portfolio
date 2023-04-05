import { ReactNode } from "react";
interface NavbarProps {
  activeItem: number;
  id: string;
  children: ReactNode;
  setActive: (event: React.MouseEvent) => void;
}
export default NavbarProps;
