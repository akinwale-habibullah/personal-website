import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Portfolio ">
      <main>
        <div className={styles.container}>
            <img src="img/akinwale-habib.jpeg" alt="Image of akinwale habib" className={styles.image} />

            <div className={styles.contentcontainer}>
              <p className={clsx("hero__subtitle", styles.contentsubtitle)} >Hi 👋, I'm Akinwale Habib.</p>
              <p className={styles.contenttext}>
                I am a senior software engineer with extensive experience in IT and software engineering, specializing in product engineering, IT service management and project management.
                
                <br /><br />
                
                I've contributed to the growth of software developers as a learning facilitator at Andela's coding bootcamp, showcasing my commitment to collaborative knowledge-sharing. I am eager to contribute my expertise and innovation-driven passion to a forward-thinking team/organisation. Feel free to reach out to me if you need help with building or improving your technical solutions.

                <br /><br />

                You can find me on <a href='https://www.linkedin.com/in/akinwalehabib' target="_blank">LinkedIn</a>, <a href='https://www.x.com/@akinwalehabib' target="_blank">X</a>, <a href='https://www.github.com/akinwale-habibullah' target="_blank">Github</a>
              </p>
            </div>
        </div>
      </main>
    </Layout>
  );
}
