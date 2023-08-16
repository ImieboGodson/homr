"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useDropMenu from "@/app/hooks/useDropMenu";
import { useCallback } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dropMenu = useDropMenu();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const handleToggle = useCallback(() => {
    if (dropMenu.isOpen) {
      return dropMenu.onClose();
    }

    return dropMenu.onOpen();
  }, [dropMenu]);

  const handleClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    return router.push("/owner/create-listing");
  }, [currentUser, loginModal, router]);

  return (
    <div className="relative w-fit flex  flex-row gap-6 justify-between items-center">
      <div className="hidden md:flex flex-row gap-2 justify-between items-center">
        {pathname === "/" && (
          <div
            onClick={() => router.push("/listings")}
            className="py-3 px-5 cursor-pointer text-sm font-semibold hover:bg-gray-100 text-black rounded-lg transition"
          >
            Browse listings
          </div>
        )}
        <div
          onClick={handleClick}
          className="py-3 px-5 text-sm font-semibold hover:bg-gray-100 text-black cursor-pointer rounded-lg transition"
        >
          List a home
        </div>
      </div>
      <div className="p-[5px] flex flex-row gap-2 justify-between items-center border-l-2 cursor-pointer">
        <div
          onClick={handleToggle}
          className="ml-4 flex flex-row gap-2 justify-between items-center"
        >
          <div className="hidden md:block">
            <Avatar userImage={currentUser?.image} />
          </div>
          {currentUser && (
            <div className="flex flex-col items-start max-w-[150px] overflow-hidden">
              <div className="text-xs font-bold truncate">
                {currentUser.name}
              </div>
              <div className="text-xs font-light truncate">
                {currentUser.email}
              </div>
            </div>
          )}
          <IoIosArrowDown size={18} />
        </div>
        {dropMenu.isOpen && (
          <div className="absolute right-0 top-12 md:w-[60%] w-[40vw] py-2 flex flex-col bg-white rounded-lg shadow-lg">
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
                  <MenuItem title="Log out" onClick={() => signOut()} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <MenuItem
                    title="Log in"
                    onClick={() => loginModal.onOpen()}
                  />
                  <MenuItem
                    title="Sign up"
                    onClick={() => registerModal.onOpen()}
                  />
                </div>
                <div className="pt-2 border-t-[1px]">
                  <MenuItem title="List a home" onClick={handleClick} />
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
