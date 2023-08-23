'use client';
import Homepage from '@/app/components/pagecomponent/homepage';
import styles from './page.module.css';
import Featuredetailpage from './components/pagecomponent/featuresdetailpage';
import Blogpage from './components/pagecomponent/blogpage';
import Blogdetailpage from './components/pagecomponent/blogdetailpage';
import TermsandConditions from './components/pagecomponent/termsandconditionspage';

export default function Home() {
  return (
    <main className={styles.main}>
      <TermsandConditions />
    </main>
  );
}
