"use client";

import useDropMenu from "@/app/hooks/useDropMenu";
import { useCallback } from "react";

interface MenuItemProps {
  title: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onClick }) => {
  const dropMenu = useDropMenu();

  const handlClick = useCallback(() => {
    onClick();
    return dropMenu.onClose();
  }, [dropMenu, onClick]);

  return (
    <div
      onClick={handlClick}
      className={`px-4 py-3 text-sm  hover:bg-gray-100 cursor-pointer ${
        title === "Log in" && "font-bold"
      }`}
    >
      {title}
    </div>
  );
};

export default MenuItem;
