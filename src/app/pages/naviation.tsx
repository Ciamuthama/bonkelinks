import Link from "next/link";
import Image from "next/image";

const Nav = ({}) => {
  return (
    <nav className="h-auto fixed flex gap-5 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 bg-white p-3 z-[1000] shadow">
     <div>
      <Image src="/bonkelinks.svg" width={100} height={50} alt="logo"/>
     </div>
      <div className="flex justify-center gap-5 text-center w-full">
        <Link
          href="/"
          className="font-bold text-base hover:border-b-2 border-white/0 hover:border-custom-600 border-b-2"
        >
          Home
        </Link>
        <Link
          href="./about"
          className="font-bold text-base hover:border-b-2 border-white/0 hover:border-custom-600 border-b-2"
        >
          About
        </Link>
        <Link
          href="./about"
          className="font-bold text-base hover:border-b-2 border-white/0 hover:border-custom-600 border-b-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
