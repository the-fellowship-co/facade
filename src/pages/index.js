import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Simple framework</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Abstracts the complexity involved in backend engineering
        makes it easy to build backends with right architecture,
        best practices and code generation.
      </>
    ),
  },
  {
    title: <>Ready to use kits</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Use our <code>identity</code>, <code>payment</code> and
        <code>communication</code> kits to assemble your backend rather than
        coding from scratch.
      </>
    ),
  },
  {
    title: <>Zero setup infrastructure</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Instantly deploy, read and write databases, publish and subscribe to
        message queues and auto scale to loads without any setups.
      </>
    ),
  },
];

// const pricing = [
//   {
//     title: <>Free for 1 month</>,
//     price: <>$0</>,
//     domains: <>4 domains</>,
//     gateway: <>1 gateway</>,
//     kits: <>All kits</>,
//     users: <>1 user / project</>,
//     project: <>1 project</>
//   }
// ];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Pricing({title, price, domains, gateway, kits, users,
  project}) {
  return (
    <div className={classnames('col col--3 pricing--box', styles.pricing)}>
      <h2>{title}</h2>
      <p className="pricing--cost">{price}</p>
      <p>Thanks for trying us :)</p>
      <ul className="pricing--items">
        <li>{project}</li>
        <li>{users}</li>
        <li>{domains}</li>
        <li>{gateway}</li>
        <li>{kits}</li>
      </ul>

    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Truss, a better way to build backends<head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button--blue',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/quick_start')}>
              Get started for free
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button--blue-border',
                styles.getStarted,
              )}
              to="https://calendly.com/trytruss/platform-demo"
              target="_blank">
              Request Demo
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
