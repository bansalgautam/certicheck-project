import Wrapper from "@/components/global/wrapper/wrapper";
import ConnectButton from "./connect-button";
import NavLinks from "./nav-links";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <Wrapper className="border-b-2 shadow-lg">
      <div className="max-w-[1366px] mx-auto flex items-center">
        <div className="flex-1 hidden md:flex">
          <Button variant={"link"}>
            <Link href={"/"} className="text-[1rem]">
              About
            </Link>
          </Button>
          <Button variant={"link"}>
            <Link href={"/"} className="text-[1rem]">
              Guide
            </Link>
          </Button>
        </div>
        <div className="flex-1 flex md:justify-center font-extrabold text-xl items-center">
          <Link href={"/"}>CERTICHECK</Link>
        </div>
        <div className="flex-1 hidden md:flex justify-end gap-4">
          <ConnectButton />
          <ModeToggle />
        </div>
        <div className="flex-1 flex justify-end md:hidden gap-4">
          <NavLinks />
          <ModeToggle />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
