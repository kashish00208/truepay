import Link from "next/link";

const navlink = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
  { name: "Log In", path: "/login" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-gray-900 text-white p-4 z-10 w-full">
      <nav className="flex flex-row justify-between items-center container mx-auto">
        <h1 className="font-bold text-2xl">
          truePay
        </h1>
        <div className="flex space-x-4">
          {navlink.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-bold hover:underline hover:text-red-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
