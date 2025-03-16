import Link from "next/link";

const Nav = ({}) => {
  return (
    <nav className="h-auto fixed flex justify-center gap-5 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 bg-white p-3 z-[1000] shadow">
      <Link
        href="/"
        className="font-bold text-base hover:border-b-2 border-white/0 hover:border-custom-600 border-b-2"
      >
        Home
      </Link>
      <Link href="./about" className="font-bold text-base hover:border-b-2 border-white/0 hover:border-custom-600 border-b-2">
        About
      </Link>
    </nav>
  );
};

export default Nav;
