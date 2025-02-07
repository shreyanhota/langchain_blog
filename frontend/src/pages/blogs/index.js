// pages/blogs/index.js
import Navbar from "@/components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";

const dummyBlogs = [
  { id: 1, title: "Exploring Bangkok", slug: "exploring-bangkok" },
  { id: 2, title: "Hidden Gems in Paris", slug: "hidden-gems-paris" },
];


export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), 'public/blogs');
  const files = fs.readdirSync(blogDir);

  const blogs = files.map(filename => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      image: data.image,
      slug: data.slug,
    };
  });

  return {
    props: { blogs },
  };
}

export default function Blogs({ blogs }) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-24 px-6">
        <h1 className="text-3xl font-bold mb-4">Latest Travel Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <div className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
