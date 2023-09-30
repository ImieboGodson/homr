"use client";

import { usePathname } from "next/navigation";
import Container from "../Container";
import Logo from "../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full z-30 bg-white">
      <div className="py-6">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <div>
              <Logo currentUser={currentUser} />
            </div>
            {pathname === "/listings" && (
              <div className="sm:ml-12 md:ml-16 lg:ml-20 xl:ml-52 ">
                <Search />
              </div>
            )}
            {!(pathname === "/owner/create-listing") && (
              <UserMenu currentUser={currentUser} />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
