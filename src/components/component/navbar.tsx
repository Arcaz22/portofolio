'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4">
      <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/task_120291.png" className="h-8 w-8 rounded-full bg-white" alt="" />
      <ul className="flex space-x-4">
        <Link href="/">
          <li className={`mr-3 ${pathname === "/" ? "text-red-300" : "text-white"} cursor-pointer`}>About</li>
        </Link>
        <Link href="/portofolio">
          <li className={`mr-3 ${pathname === "/portofolio" ? "text-red-300" : "text-white"} cursor-pointer`}>Portfolio</li>
        </Link>
        <Link href="/contact">
          <li className={`mr-3 ${pathname === "/contact" ? "text-red-300" : "text-white"} cursor-pointer`}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
