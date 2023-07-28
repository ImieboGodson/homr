"use client";

import { usePathname } from "next/navigation";
import Container from "../Container";
import Logo from "../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="py-6">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <Logo />
            {pathname === "/listings" && <Search />}
            <UserMenu currentUser={null} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
