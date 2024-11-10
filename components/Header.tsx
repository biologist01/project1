// components/Header.tsx
import Link from 'next/link';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">My Portfolio</Link>
        </h1>

        {/* Hidden checkbox for mobile menu toggle */}
        <input type="checkbox" id="menuToggle" className={styles.menuCheckbox} />
        <label htmlFor="menuToggle" className={styles.menuButton} aria-label="Toggle menu">
          ☰
        </label>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
