import React from "react";
import { Logo } from "./vectors";

interface Props {
  title?: React.ReactNode;
  headerBack?: React.ReactNode;
  headerRight?: React.ReactNode;
}

const Header = ({ title = <Logo />, headerBack, headerRight }: Props) => {
  return (
    <header className="relative flex h-14 items-center justify-center border-b border-customGrey-200 px-4">
      {headerBack && (
        <div className="absolute top-0 left-4 flex h-full w-8 items-center">
          {headerBack}
        </div>
      )}
      <div className="w-24 text-lg font-bold text-customGrey-400">{title}</div>
      {headerRight && (
        <div className="absolute top-0 right-4 flex h-full items-center">
          right
        </div>
      )}
    </header>
  );
};

export default Header;
