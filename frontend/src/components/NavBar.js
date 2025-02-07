// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 shadow-md p-4 flex justify-between items-center z-50">
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-tight">TravelVista</h1>
      </Link>
      <div className="space-x-6">
        <Link href="/blogs" className="hover:underline">Blogs</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
      </div>
    </nav>
  );
}
