import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FaUsersCog } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

const architect_tabs = [{
      title: "Project",
      code: `amazon/
|-- identity/
|-- orders/
|-- payments/
|-- communication/
|-- inventory/
|-- catalog/
|-- shipping/
|-- gateway/
`

    },{
      title: "Block",
      code: `orders
|-- models/
|    |-- order.rb
|    |-- line_items.rb
|-- Gemfile
`

    },{
      title: "Model",
      code: `class Order < ActiveRecord::Base

  expose allow: [:get, :create, :update, :delete]
  publisher on: :order_events

  inf([ID]) {[Order]}
  def self.list(ids)
    Order.find(ids)
  end

end
`
    }];

const expose_tabs = [{
      title: "Gateway",
      code: `gateway
|-- edges/
|   |-- identity_edge.rb
|   |-- order_edge.rb
|   |-- payments_edge.rb
|   |-- communication_edge.rb
|   |-- inventory_edge.rb
|   |-- catalog_edge.rb
|   |-- shipping_edge.rb
|-- Gemfile
`

    },{
      title: "Edge",
      code: `# Auto-generated. Modify as you need.
class OrderEdge < Particle::Edge
  include Orders

  inf(ID) {Order}
  def get_order(id)
    OrderService.client.get(id)
  end

  inf(CreateOrderReq) {Order}
  def create_order!(create_order_req)
    OrderService.client.create!(create_order_req)
  end

  ...

end
`
    }];

const deploy_tabs = [{
      title: "Deploy",
      code: `$ byld deploy`

    }];

const comms_tabs = [{
      title: "Sync",
      code: `# Inter block communication
Order.client.create(customer_id: 'Bezos', status: 'Active')`
    },{
      title: "Async",
      code: `class Order < ActiveRecord::Base

  publisher on: :order_events

end

class Inventory < ActiveRecord::Base

  subscriber
  def self.handle_order_events(event)

  end

end`
    }];

class TabbedCodeBlock extends React.Component {

  handleOnClick(idx){
    this.setState({activeTab:idx})
  }
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {activeTab : 0};
  }
  render() {

    return (<><ul class="pills">
      {this.props.tabs.map((tab, idx) => (<li key={idx} onClick={()=>this.handleOnClick(idx)} className={`pills__item ${idx == this.state.activeTab ? "pills__item--active" : ""}`}>{tab.title}</li>))}
      </ul>
    <CodeBlock className="python">
      {this.props.tabs[this.state.activeTab].code}
    </CodeBlock>
    </>);
  }
}

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
      title="Byld"
      description="Byld, a better way to build backends<head/>">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <div className="row">
          <div className="col col--12 hero__text">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="hero__button">
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button--blue',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting_started/quick_start')}>
              Get started for free
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg button--blue-border',
                styles.getStarted,
              )}
              to="https://calendly.com/trytruss/demo"
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
            <div className="col col--12 ">
            <TabbedCodeBlock tabs={architect_tabs} />
            </div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--2"></div>
            <div className="col col--8 ">
              <p className="highlight__title">Design</p>
              <h1 className="feature__text">Architect in minutes.</h1>
              <p className="feature__detail">Model the different domains of your business instantly using <b>byld blocks</b>, an abstraction that only lets you write code that matters and eliminates the rest.
              </p>
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
            <div className="col col--8 ">
              <p className="highlight__title">Communicate</p>
              <h1 className="feature__text">Communicate with ease.</h1>
              <p className="feature__detail">Synchronous and asynchronous communication
              between blocks is always a simple function call.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--12 ">
            <TabbedCodeBlock tabs={comms_tabs} />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--12 ">
              <TabbedCodeBlock tabs={expose_tabs} />
            </div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--4"></div>
            <div className="col col--8">
              <p className="highlight__title">Expose</p>
              <h1 className="feature__text">Flexible to all frontends.</h1>
              <p className="feature__detail">Power different web and mobile
              user interfaces with a great deal of flexibility using <b>byld gates</b>, a
              GraphQL based gateway.</p>
            </div>
            <div className="col col--2 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--4 feature__block">
            <div className="row">
            <div className="col col--12">
              <p className="highlight__title">Reuse <span class="badge badge--info">Coming Soon</span></p>
              <h1 className="feature__text">We build. You reuse infinite times.</h1>
              <p className="feature__detail">Use our prebuilt blocks to assemble your backend rather than coding it from scratch.</p>
            </div>
            </div>
          </div>
          <div className="col col--8 ">
            <div className="row">
            <div className="col">
              <div class="card">
                <div class="card__header">
                  <div class="avatar">
                    <div class="avatar__photo"><FaUsersCog size="46px" className="icon__avatar"/></div>
                    <div class="avatar__intro">
                      <h4 class="avatar__name">Identity</h4>
                      <small class="avatar__subtitle">
                        User Management
                      </small>
                    </div>
                  </div>
                </div>
                <div class="card__body">
                    <p>Login. Authentication. Authorization.</p>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <button class="button button--info">Use</button>
                    <button class="button button--outline button--info">Fork</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div class="card__header">
                  <div class="avatar">
                    <div class="avatar__photo"><FaRegCreditCard size="46px" className="icon__avatar"/></div>
                    <div class="avatar__intro">
                      <h4 class="avatar__name">Payment</h4>
                      <small class="avatar__subtitle">
                        Stripe Integration
                      </small>
                    </div>
                  </div>
                </div>
                <div class="card__body">
                    <p>Visa. Mastercard. Discover. Refunds.</p>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                    <button class="button button--info">Use</button>
                    <button class="button button--outline button--info">Fork</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <div class="card__header">
                  <div class="avatar">
                    <div class="avatar__photo"><FaMailBulk size="46px" className="icon__avatar"/></div>
                    <div class="avatar__intro">
                      <h4 class="avatar__name">Communication</h4>
                      <small class="avatar__subtitle">
                        SendGrid Integration
                      </small>
                    </div>
                  </div>
                </div>
                <div class="card__body">
                    <p>Emails. Text Messages. Retries. Reconciliation.</p>
                </div>
                <div class="card__footer">
                  <div class="button-group button-group--block">
                  <button class="button button--info">Use</button>
                  <button class="button button--outline button--info">Fork</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container highlight__section">
        <div className="row">
          <div className="col col--6 ">
            <div className="row">
            <div className="col col--12 ">
            <TabbedCodeBlock tabs={deploy_tabs} />
            </div>
            </div>
          </div>
          <div className="col col--6 feature__block">
            <div className="row">
            <div className="col col--4"></div>
            <div className="col col--8">
              <p className="highlight__title">Deploy</p>
              <h1 className="feature__text">Don't sweat to deploy and scale.</h1>
              <p className="feature__detail">Instantly deploy
              and scale without any infrastructure setups.</p>
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
