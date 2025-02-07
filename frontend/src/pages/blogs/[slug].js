// pages/blogs/[slug].js
// import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const blogDir = 'public/blogs';
  const files = fs.readdirSync(blogDir);

  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public/blogs', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: { blog: data, contentHtml },
  };
}

export default function BlogPost({ blog, contentHtml }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <article className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mt-2">{blog.date} • {blog.author}</p>
      <img src={blog.image} alt={blog.title} className="w-full my-5 rounded-lg shadow-md" />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="prose mt-4" />
    </article>
    </div>
  );
}

// const blogData = {
//   "exploring-bangkok": {
//     title: "Exploring Bangkok",
//     content: "Bangkok is a vibrant city with amazing street food and temples...",
//   },
//   "hidden-gems-paris": {
//     title: "Hidden Gems in Paris",
//     content: "Paris has more than just the Eiffel Tower. Explore Montmartre...",
//   },
// };

// export default function BlogPost() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const blog = blogData[slug];

//   if (!blog) return <div className="text-center mt-20">Blog Not Found</div>;

//   return (
//     <div>
//       <Navbar />
//       <main className="min-h-screen pt-24 px-6 max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold">{blog.title}</h1>
//         <p className="mt-4 text-gray-600">{blog.content}</p>
//       </main>
//     </div>
//   );
// }
