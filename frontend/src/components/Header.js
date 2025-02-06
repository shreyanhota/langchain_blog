import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>TravelBlog</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
