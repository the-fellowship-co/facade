import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const highlights = [
  {
    title: <>We build. You reuse infinite times</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Instantly deploy, read and write databases, publish and subscribe to
        message queues and auto scale to loads without any setups.
      </>
    ),
  },
  {
    title: <>We build. You reuse infinite times</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Instantly deploy, read and write databases, publish and subscribe to message queues and auto scale to loads without any setups.
      </>
    ),
  }
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
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>

    </div>
  );
}

function Highlights({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="container">
      <div className="row">
        <div className="col col--6 feature__block">
          <div className="row">
          <div className="col col--2 "></div>
          <div className="col col--8 ">
            <p className="feature__text">{title}</p>
            <p>{description}</p>
          </div>
          <div className="col col--2 "></div>
          </div>
        </div>
        <div className="col col--6 ">
          <div className="row">
          <div className="col col--2 "></div>
          <div className="col col--8 ">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
          <div className="col col--2 "></div>
          </div>
        </div>
      </div>
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
        <div className="row">
          <div className="col col--6 hero__text">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="hero__button">
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
          </div>
        </div>
      </header>
      <main>
      <section className="highlight__block">
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <img className={styles.featureImage}
              src="img/undraw_docusaurus_react.svg"
              alt="We build. You reuse infinite times." />
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <p className="highlight__title">Architect</p>
              <h1 className="feature__text">Abstract your organization in minutes.</h1>
              <p>Easily organize and create different blocks using our framework.
              Focus on your business logic and our framework handles the rest.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <p className="highlight__title">Communicate</p>
              <h1 className="feature__text">We make it look simple. We do listen.</h1>
              <p>Inter domain communication is a simple function call.
              No setup pub/sub system. We don't stop there,
              we also publish CRUD operations by default and provide a simple
              way to process them.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <img className={styles.featureImage}
              src="img/undraw_docusaurus_react.svg"
              alt="We build. You reuse infinite times" />
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <img className={styles.featureImage}
              src="img/undraw_docusaurus_react.svg"
              alt="We build. You reuse infinite times." />
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <p className="highlight__title">Expose</p>
              <h1 className="feature__text">Write code that matters. We
              generate the rest.</h1>
              <p>You focus on core business logic. Our framework generates
              everything else. Default CRUD apis for your
              models. Automatically exposes your domains via GraphQL. </p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <p className="highlight__title">Reuse</p>
              <h1 className="feature__text">We build. You reuse infinite times</h1>
              <p>We provide prebuilt domain kits. It comes with right amount of
              configurations. If you need more, adding features is simple.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <img className={styles.featureImage}
              src="img/undraw_docusaurus_react.svg"
              alt="We build. You reuse infinite times" />
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <img className={styles.featureImage}
              src="img/undraw_docusaurus_react.svg"
              alt="We build. You reuse infinite times." />
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2 "></div>
            <div className="col col--8 ">
              <p className="highlight__title">Deploy</p>
              <h1 className="feature__text">Don't sweat to deploy and
              scale seamlessly.</h1>
              <p>Simply run <code>truss deploy</code> to deploy your
              backends. We automatically scale your backends based on
              demands.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </main>
    </Layout>
  );
}

export default Home;
