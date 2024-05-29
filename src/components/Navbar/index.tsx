import logoNavbar from "../../../public/images/logos/logo_tennis_pro_shop.svg";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import Search from "../Search";
import Image from "next/image";
import Link from "next/link";

interface PropsNavbar {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: PropsNavbar) => {
  return (
    <>
      <header
        className={`${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } flex justify-between items-center pt-3 pb-3 pr-8 pl-8 fixed w-full z-10 transition-colors ease-out`}
      >
        <Image src={logoNavbar} alt="Logo" />

        <ul className="flex items-center gap-10 font-bold text-sm">
          <Link href="/">
            <li
              className={`${
                isScrolled
                  ? "text-black hover:text-bg-green"
                  : "text-gray-100 hover:text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                isScrolled
                  ? "text-black hover:text-bg-green"
                  : "text-gray-100 hover:text-white"
              } cursor-pointer`}
            >
              About Us
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`${
                isScrolled
                  ? "text-black hover:text-bg-green"
                  : "text-gray-100 hover:text-white"
              } cursor-pointer`}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex justify-around items-center gap-5">
          <Search />
          <FaRegUser className="text-white w-auto h-auto p-3 bg-bg-green hover:bg-[#8f8b61] transition-all shadow-md rounded-xl cursor-pointer" />
          <FaRegHeart className="text-white w-auto h-auto p-3 bg-bg-green hover:bg-[#8f8b61] transition-all shadow-md rounded-xl cursor-pointer" />
          <LuShoppingCart className="text-white w-auto h-auto p-3 bg-bg-green hover:bg-[#8f8b61] transition-all shadow-md rounded-xl cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
