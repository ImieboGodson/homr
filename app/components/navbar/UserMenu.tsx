"use client";

import { IoIosArrowDown } from "react-icons/io";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useDropMenu from "@/app/hooks/useDropMenu";
import { useCallback } from "react";

interface UserMenuProps {
  currentUser?: null | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const dropMenu = useDropMenu();

  const handleToggle = useCallback(() => {
    if (dropMenu.isOpen) {
      return dropMenu.onClose();
    }

    return dropMenu.onOpen();
  }, [dropMenu]);

  return (
    <div className="relative w-fit flex  flex-row gap-6 justify-between items-center">
      <div className="hidden md:flex flex-row gap-6 justify-between items-center">
        <div className="cursor-pointer text-sm font-semibold">
          Browse listings
        </div>
        <div className="py-3 px-8 text-sm font-semibold bg-black text-white cursor-pointer rounded-lg">
          List a home
        </div>
      </div>
      <div className="p-[5px] flex flex-row gap-2 justify-between items-center border-l-2 cursor-pointer">
        <div
          onClick={handleToggle}
          className="ml-4 flex flex-row gap-2 justify-between items-center"
        >
          <div className="hidden md:block">
            <Avatar />
          </div>
          <IoIosArrowDown size={18} />
        </div>
        {dropMenu.isOpen && (
          <div className="absolute right-0 top-12 md:w-[60%] w-[40vw] py-2 flex flex-col rounded-lg shadow-lg">
            {currentUser ? (
              <>
                <div className="pb-2 font-bold">
                  <MenuItem title="Messages" onClick={() => {}} />
                  <MenuItem title="Scheduled Viewings" onClick={() => {}} />
                  <MenuItem title="Wishlists" onClick={() => {}} />
                </div>
                <div className="py-2 border-t-[1px]">
                  <MenuItem title="List a home" onClick={() => {}} />
                  <MenuItem title="Account" onClick={() => {}} />
                </div>
                <div className="py-2 border-t-[1px]">
                  <MenuItem title="Help" onClick={() => {}} />
                  <MenuItem title="Log out" onClick={() => {}} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <MenuItem title="Log in" onClick={() => {}} />
                  <MenuItem title="Sign up" onClick={() => {}} />
                </div>
                <div className="pt-2 border-t-[1px]">
                  <MenuItem title="List a home" onClick={() => {}} />
                  <MenuItem title="Help" onClick={() => {}} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
