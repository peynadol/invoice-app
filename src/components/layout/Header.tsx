import logo from "../../../public/logo.svg";
import userAvatar from "../../../public/image-avatar.jpg";
import Image from "next/image";
import { Toggle } from "@/components/ui/toggle";
import { Moon } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-[#373A53] h-[72px] flex justify-between">
      <div className="bg-[#9277FF] w-[72px] rounded-r-xl">
        <Link href={"/invoices"}>
          <Image
            src={logo}
            alt="Invoicer Logo"
            width={40}
            height={40}
            className="mt-4 ml-4 scale-75"
          />
        </Link>
      </div>
      <div className="flex items-center p-4 gap-4">
        <Toggle size="lg">
          <Moon className="fill-[#7E88C3] stroke-0 scale-150" />
        </Toggle>
        <Image
          src={userAvatar}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
