import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { getPostBySlug } from '../lib/posts';

function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const post = getPostBySlug(slug);
    fetch(post.file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <><article>
          <ReactMarkdown>{content}</ReactMarkdown>
      </article></>
  );
}

export default Post;