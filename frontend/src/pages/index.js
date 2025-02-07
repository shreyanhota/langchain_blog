// pages/index.js
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-24">
        <h1 className="text-4xl font-extrabold">Discover Breathtaking Destinations</h1>
        <p className="mt-4 text-lg text-gray-600">Your AI-powered guide to the world’s best travel spots.</p>
        <Link href="/blogs">
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-black">
            Explore Blogs
          </button>
        </Link>
      </main>
    </div>
  );
}
