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
            <Logo />
            {pathname === "/listings" && <Search />}
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
