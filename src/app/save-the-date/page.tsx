'use client';

import { useEffect, useState } from 'react';
import { DesktopCard, MobileCard } from '../components/Card';
import Loader from '../components/Loader';
import styles from './page.module.scss';

const SaveTheDate = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile === null)
    return (
      <div className={styles.mask}>
        <Loader />
      </div>
    );

  return (
    <main className={styles.main}>
      <div className={styles.container}>{isMobile ? <MobileCard /> : <DesktopCard />}</div>
    </main>
  );
};

export default SaveTheDate;
