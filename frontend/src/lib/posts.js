export function getPosts() {
    return [
      { slug: 'post1', title: 'First Blog Post', file: '/posts/post1.md' },
      { slug: 'post2', title: 'Second Blog Post', file: '/posts/post2.md' }
    ];
  }
  
  export function getPostBySlug(slug) {
    return getPosts().find(post => post.slug === slug);
  }
  