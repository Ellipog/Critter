"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-64 lg:w-72 p-4 border-r border-gray-700">
      <Link
        href="/"
        className={`block py-2 px-4 transition-all hover:bg-dark-accent-green rounded-full mb-2 ${
          pathname === "/" && "bg-dark-bg-primary"
        }`}
      >
        Home
      </Link>
      <Link
        href="/profile"
        className={`block py-2 px-4 transition-all hover:bg-dark-accent-green rounded-full mb-2 ${
          pathname === "/profile" && "bg-dark-bg-primary"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
