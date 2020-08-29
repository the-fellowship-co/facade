(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{169:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(184),s=t.n(c),r=t(187),i=t(191),o=t(183),m=t(182),d=t(188),u=t(170),E=t.n(u),v=t(222);const b=[{title:"Project",code:"amazon/\n|-- identity/\n|-- orders/\n|-- payments/\n|-- communication/\n|-- inventory/\n|-- catalog/\n|-- shipping/\n|-- gate/\n"},{title:"Block",code:"orders\n|-- models/\n|    |-- order.rb\n|    |-- line_items.rb\n|-- Gemfile\n"},{title:"Model",code:"class Order < Byld::Model\n  enable only: [:get, :create]\n  publisher on: :order_events\n\n  inf(ID) {Order}\n  def self.confirm!(id)\n    order = Order.find(id)\n    ...\n  end\n\nend\n"}],h=[{title:"Gate",code:"gate\n|-- edges/\n|   |-- identity_edge.rb\n|   |-- order_edge.rb\n|   |-- payments_edge.rb\n|   |-- communication_edge.rb\n|   |-- inventory_edge.rb\n|   |-- catalog_edge.rb\n|   |-- shipping_edge.rb\n|-- Gemfile\n"},{title:"Edge",code:"class OrderEdge < Byld::Edge\n  include Orders\n\n  query(ID) {Order}\n  def get_order(id)\n    Order.client.get(id)\n  end\n\n  ...\nend"},{title:"Extension",code:"class OrderEdge < Byld::Edge\n  include Identity\n\n  extension Customer\n  def customer(order)\n    User.client.get(order.customer_id)\n  end\n\n  ...\nend"}],_=[{title:"Deploy",code:"$ byld deploy\n\ud83e\udd1e Deploying order...\n\ud83d\udc4c Deployment triggered!"},{title:"Status",code:"$ byld status\n\namazon\n\ngate\n\n+-------------------------------+------------------------------+\n| status  | url                 | docs                         |\n+--------------------------------+-----------------------------+\n| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql |\n+---------+---------------------+------------------------------+\n\nblocks\n\n+----------+------------+\n| name     | status     |\n+----------+------------+\n| order    | running    |\n| identity | running    |\n+----------+------------+"}],g=[{title:"Sync",code:"class Order < Byld::Model\n\n  inf(ID) {Order}\n  def self.confirm!(id)\n    order = Order.find(id)\n    if Stock.client.available? order.lineitems.map(&:product_id)\n      ...\n    end\n  end\n\nend"},{title:"Async: Publisher",code:"class Order < Byld::Model\n  publisher on: :order_events\n\n  def confirm!\n    ...\n    publish(:order_confirmed)\n  end\nend"},{title:"Async: Subscriber",code:"class Stock < Byld::Model\n\n  subscriber\n  def self.handle_order_events(event)\n    case event.type\n    when :order_confirmed\n      order = Order.client.get(event.source_id)\n      order.lineitems.each do |lineitem|\n        Stock.decrement_qty! lineitem\n      end\n    ...\n  end\nend"}];class p extends l.a.Component{handleOnClick(e){this.setState({activeTab:e})}constructor(e){console.log(e),super(e),this.state={activeTab:e.activeTab?e.activeTab:0}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{class:"pills"},this.props.tabs.map((e,a)=>l.a.createElement("li",{key:a,onClick:()=>this.handleOnClick(a),className:"pills__item "+(a==this.state.activeTab?"pills__item--active":"")},e.title))),l.a.createElement(i.a,{className:"ruby"},this.props.tabs[this.state.activeTab].code))}}l.a.Fragment,l.a.Fragment,l.a.Fragment,l.a.Fragment;a.default=function(){const e=Object(m.a)(),{siteConfig:a={}}=e;return l.a.createElement(r.a,{title:"Byld",description:"Byld, a better way to build backends<head/>"},l.a.createElement("header",{className:s()("hero hero--primary",E.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12 hero__text"},l.a.createElement("h1",{className:"hero__title"},a.title),l.a.createElement("p",{className:"hero__subtitle"},a.tagline),l.a.createElement("div",{className:"hero__button"},l.a.createElement(o.a,{className:s()("button button--outline button--secondary button--lg button--blue",E.a.getStarted),to:Object(d.a)("signup")},"Start for free"),l.a.createElement(o.a,{className:s()("button button--outline button--secondary button--lg button--blue-border",E.a.getStarted),to:Object(d.a)("docs/getting_started/quick_start"),target:"_blank"},"Quick Start")))),l.a.createElement("div",{className:"row install"},l.a.createElement("div",{className:"col col--4"}),l.a.createElement("div",{className:"col col--4"},l.a.createElement(i.a,{className:"sh"},"gem install byld-cli")),l.a.createElement("div",{className:"col col--4"})))),l.a.createElement("main",null,l.a.createElement("section",{className:"highlight__block"},l.a.createElement("div",{className:"container highlight__section"},l.a.createElement("div",{className:"row reverse"},l.a.createElement("div",{className:"col col--6 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12 "},l.a.createElement(p,{tabs:b})))),l.a.createElement("div",{className:"col col--6 feature__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"}),l.a.createElement("div",{className:"col col--8 "},l.a.createElement("p",{className:"highlight__title"},"Design"),l.a.createElement("h1",{className:"feature__text"},"Architect in minutes."),l.a.createElement("p",{className:"feature__detail"},"Model the different domains of your business instantly using ",l.a.createElement("b",null,"byld blocks"),", an abstraction that only lets you write code that matters and eliminates the rest.")),l.a.createElement("div",{className:"col col--2 "}))))),l.a.createElement("div",{className:"container highlight__section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 feature__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 "},l.a.createElement("p",{className:"highlight__title"},"Communicate"),l.a.createElement("h1",{className:"feature__text"},"Communicate with ease."),l.a.createElement("p",{className:"feature__detail"},"Synchronous and asynchronous communication between blocks is just a simple function call.")),l.a.createElement("div",{className:"col col--2 "}))),l.a.createElement("div",{className:"col col--6 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12 "},l.a.createElement(p,{tabs:g})))))),l.a.createElement("div",{className:"container highlight__section"},l.a.createElement("div",{className:"row reverse"},l.a.createElement("div",{className:"col col--6 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12 "},l.a.createElement(p,{tabs:h})))),l.a.createElement("div",{className:"col col--6 feature__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"}),l.a.createElement("div",{className:"col col--8"},l.a.createElement("p",{className:"highlight__title"},"Expose"),l.a.createElement("h1",{className:"feature__text"},"Flexible to all frontends."),l.a.createElement("p",{className:"feature__detail"},"Power different web and mobile user interfaces with a great deal of flexibility using ",l.a.createElement("b",null,"byld gates"),", a GraphQL based gateway.")),l.a.createElement("div",{className:"col col--2 "}))))),l.a.createElement("div",{className:"container highlight__section"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--4 feature__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12"},l.a.createElement("p",{className:"highlight__title"},"Assemble ",l.a.createElement("span",{class:"badge badge--info"},"Coming Soon")),l.a.createElement("h1",{className:"feature__text"},"We build. You use."),l.a.createElement("p",{className:"feature__detail"},"Use our prebuilt blocks to assemble your backend rather than coding it from scratch.")))),l.a.createElement("div",{className:"col col--8 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("div",{class:"avatar"},l.a.createElement("div",{class:"avatar__photo"},l.a.createElement(v.c,{size:"46px",className:"icon__avatar"})),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h4",{class:"avatar__name"},"identity kit"),l.a.createElement("small",{class:"avatar__subtitle"},"User Management")))),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,"Users. Authentication. Authorization.")),l.a.createElement("div",{class:"card__footer"},l.a.createElement("div",{class:"button-group button-group--block"},l.a.createElement("button",{class:"button button---blue",disabled:!0},"Use"))))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("div",{class:"avatar"},l.a.createElement("div",{class:"avatar__photo"},l.a.createElement(v.a,{size:"46px",className:"icon__avatar"})),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h4",{class:"avatar__name"},"comms kit"),l.a.createElement("small",{class:"avatar__subtitle"},"Messaging")))),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,"Conversations. Inbounds. Outbounds.")),l.a.createElement("div",{class:"card__footer"},l.a.createElement("div",{class:"button-group button-group--block"},l.a.createElement("button",{class:"button button---blue",disabled:!0},"Use"))))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("div",{class:"avatar"},l.a.createElement("div",{class:"avatar__photo"},l.a.createElement(v.b,{size:"46px",className:"icon__avatar"})),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h4",{class:"avatar__name"},"payments kit"),l.a.createElement("small",{class:"avatar__subtitle"},"Transactions")))),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,"Payins. Payouts. Refunds. Ledgers.")),l.a.createElement("div",{class:"card__footer"},l.a.createElement("div",{class:"button-group button-group--block"},l.a.createElement("button",{class:"button button---blue",disabled:!0},"Use"))))))))),l.a.createElement("div",{className:"container highlight__section"},l.a.createElement("div",{className:"row reverse"},l.a.createElement("div",{className:"col col--8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--12 "},l.a.createElement(p,{tabs:_,activeTab:1})))),l.a.createElement("div",{className:"col col--4 feature__block"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"}),l.a.createElement("div",{className:"col col--10"},l.a.createElement("p",{className:"highlight__title"},"Deploy"),l.a.createElement("h1",{className:"feature__text"},"Don't sweat to deploy and scale."),l.a.createElement("p",{className:"feature__detail"},"Instantly deploy and scale without any infrastructure setups.")))))))))}},191:function(e,a,t){"use strict";(function(e){var n=t(2),l=(t(192),t(193),t(71),t(194),t(195),t(190),t(0)),c=t.n(l),s=t(179),r=t(200),i=t(196),o=t.n(i),m=t(197),d=t.n(m),u=t(182),E=t(201),v=t(127),b=t.n(v),h=t(51);(void 0!==e?e:window).Prism=h.a,t(198),t(199);var _=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+a[e].start+"\\s*("+t+")\\s*"+a[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},p=/title=".*"/;a.a=function(e){var a=e.children,t=e.className,i=e.metastring,m=Object(u.a)().siteConfig.themeConfig.prism,v=void 0===m?{}:m,h=Object(l.useState)(!1),N=h[0],f=h[1],y=Object(l.useState)(!1),k=y[0],w=y[1];Object(l.useEffect)((function(){w(!0)}),[]);var j=Object(l.useRef)(null),O=[],x="",B=Object(E.a)();if(i&&_.test(i)){var C=i.match(_)[1];O=d.a.parse(C).filter((function(e){return e>0}))}i&&p.test(i)&&(x=i.match(p)[0].split("title=")[1].replace(/"+/g,""));var S=t&&t.replace(/language-/,"");!S&&v.defaultLanguage&&(S=v.defaultLanguage);var T=a.replace(/\n$/,"");if(0===O.length&&void 0!==S){for(var D,z="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(S),P=a.replace(/\n$/,"").split("\n"),F=0;F<P.length;){var I=F+1,U=P[F].match(M);if(null!==U){switch(U.slice(1).reduce((function(e,a){return e||a}),void 0)){case"highlight-next-line":z+=I+",";break;case"highlight-start":D=I;break;case"highlight-end":z+=D+"-"+(I-1)+","}P.splice(F,1)}else F+=1}O=d.a.parse(z),T=P.join("\n")}var A=function(){o()(T),f(!0),setTimeout((function(){return f(!1)}),2e3)};return c.a.createElement(r.a,Object(n.a)({},r.b,{key:k,theme:B,code:T,language:S}),(function(e){var a,t,l=e.className,r=e.style,i=e.tokens,o=e.getLineProps,m=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,x&&c.a.createElement("div",{style:r,className:b.a.codeBlockTitle},x),c.a.createElement("div",{className:b.a.codeBlockContent},c.a.createElement("button",{ref:j,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(b.a.copyButton,(a={},a[b.a.copyButtonWithTitle]=x,a)),onClick:A},N?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:Object(s.a)(l,b.a.codeBlock,(t={},t[b.a.codeBlockWithTitle]=x,t))},c.a.createElement("div",{className:b.a.codeBlockLines,style:r},i.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=o({line:e,key:a});return O.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return c.a.createElement("span",Object(n.a)({key:a},m({token:e,key:a})))})))}))))))}))}}).call(this,t(72))}}]);