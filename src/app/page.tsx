'use client';
import Homepage from '@/components/pagecomponent/homepage';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  );
}
