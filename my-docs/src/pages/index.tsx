import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          flemingo
        </Heading>

        <p className={styles.heroSubtitle}>
          A cross-platform chat app built for speed, privacy, and reliability. Designed with a 
          clean architecture and real-time messaging foundation using React Native, WebSockets, 
          message persistence, presence indicators, and secure phone-based authentication.
        </p>

        <p className={styles.heroSubtitle}>
          The long-term vision introduces opt-in emotional insight powered by machine learning. 
          Users can choose to share emotional tone analysis during conversations, helping reduce 
          miscommunication while keeping consent and privacy as core principles. We use Docusaurus for the documentation of this app.
        </p>

        <div className={styles.buttons}>
          <Link className={styles.ctaButton} to="/docs/introduction">
            Read Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Flemingo project documentation and technical overview"
    >
      <HomepageHeader />
    </Layout>
  );
}
