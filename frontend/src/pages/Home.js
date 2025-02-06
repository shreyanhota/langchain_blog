

import { Link } from 'react-router-dom';
import React from 'react';
import { getPosts } from '../lib/posts';

function Home() {
  const posts = getPosts();

  return (
    <div>
        
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Home;
