import Link from "next/link";

const Nav = ({}) => {
  return (
    <nav className="h-auto fixed flex justify-center gap-5 w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-custom-600 p-3 z-[1000]">
      <Link
        href="/"
        className="text-white font-bold text-base hover:border-b-2 border-white/0 hover:border-white border-b-2"
      >
        Home
      </Link>
      <Link href="./about" className="text-white font-bold text-base hover:border-b-2 border-white/0 hover:border-white border-b-2">
        About
      </Link>
    </nav>
  );
};

export default Nav;
