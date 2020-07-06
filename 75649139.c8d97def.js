(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(140)),l={id:"expose_your_blocks",title:"Expose your blocks",sidebar_label:"Expose your blocks"},c={id:"bylding_backends/expose_your_blocks",isDocsHomePage:!1,title:"Expose your blocks",description:"Use byld gate expose [block-name] to generate an edge to the frontend. It'll generate a edge for every Byld::Model in that block.",source:"@site/docs/bylding_backends/expose_your_frontends.md",permalink:"/docs/bylding_backends/expose_your_blocks",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/expose_your_frontends.md",sidebar_label:"Expose your blocks",sidebar:"someSidebar",previous:{title:"Communicating between blocks",permalink:"/docs/bylding_backends/communicating_between_blocks"},next:{title:"Let's build a backend for a todo app",permalink:"/docs/bylding_backends/todo_app"}},d=[{value:"Joining blocks",id:"joining-blocks",children:[]},{value:"Deploy your gate",id:"deploy-your-gate",children:[]},{value:"Querying the gate",id:"querying-the-gate",children:[]}],i={rightToc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld gate expose [block-name]")," to generate an edge to the frontend. It'll generate a edge for every ",Object(a.b)("inlineCode",{parentName:"p"},"Byld::Model")," in that block."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate expose order\n")),Object(a.b)("h4",{id:"structure-of-a-gate"},"Structure of a gate"),Object(a.b)("p",null,"Gate is a collection of edges. Edge is collection of queries, mutations and joins for the different models in your block."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gate/\n\u251c\u2500\u2500 Gemfile\n\u2514\u2500\u2500 edges\n    \u2514\u2500\u2500 user_edge.rb\n    \u2514\u2500\u2500 stock_edge.rb\n    \u2514\u2500\u2500 order_edge.rb\n    \u2514\u2500\u2500 payment_edge.rb\n    \u2514\u2500\u2500 conversation_edge.rb\n")),Object(a.b)("p",null,"You could add additional query and mutations using the interface markup\n",Object(a.b)("inlineCode",{parentName:"p"},"inf(RequestType) {ReturnType}")," over it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class OrderEdge < Byld::Edge\n  include Orders\n\n  inf(ID) {Order}\n  def get_order(id)\n    OrderService.client.get(id)\n  end\n\n  inf(CreateOrderReq) {Order}\n  def create_order!(req)\n    OrderService.client.create!(req)\n  end\n\n  inf(UpdateOrderReq) {Order}\n  def update_order!(req)\n    OrderService.client.update!(req)\n  end\n\n  inf(ID) {Order}\n  def delete_order!(id)\n    OrderService.client.delete!(id)\n  end\nend\n")),Object(a.b)("h3",{id:"joining-blocks"},"Joining blocks"),Object(a.b)("p",null,"Use join markup ",Object(a.b)("inlineCode",{parentName:"p"},"join [ReturnType]")," to compose models across different blocks, doing that would include the joining model as part of the parent model. For instance ",Object(a.b)("inlineCode",{parentName:"p"},"join User")," allows you to get customer model as part of order model."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class OrderEdge < Byld::Edge\n  include Order\n  include Identity\n\n  ...\n\n  join User\n  def customer(order)\n    UserService.client.get(order.user_id)\n  end\n\nend\n")),Object(a.b)("h3",{id:"deploy-your-gate"},"Deploy your gate"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld deploy")," to deploy the gate."),Object(a.b)("p",null,"When the block changes, you need to expose the block and deploy the gate again."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n")),Object(a.b)("h3",{id:"querying-the-gate"},"Querying the gate"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld status")," to see the status of the gate and blocks."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n\n+-------------------------------+------------------------------+\n| status  | url                 | docs                         |\n+--------------------------------+-----------------------------+\n| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql |\n+---------+---------------------+------------------------------+\n\nblocks\n\n+----------+------------+\n| name     | status     |\n+----------+------------+\n| order    | running    |\n| identity | running    |\n+----------+------------+\n")),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"amazon.letsbyld.com")," url to power your UI across different\nplatforms."),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"amazon.letsbyld.com/graphiql")," url to view docs and test out your\nendpoints."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  getOrder(id: "z3dsbjn3223") {\n    id\n    totalPrice\n    lineItems {\n      id\n      qty\n      unitPrice\n      totalPrice\n      product {\n        id\n        title\n      }\n      customer {\n        firstName\n        lastName\n        address {\n          street\n          city\n          state\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"Finally use the hosted url to power your frontends."))}s.isMDXComponent=!0},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,g=b["".concat(l,".").concat(p)]||b[p]||u[p]||a;return t?o.a.createElement(g,c(c({ref:n},i),{},{components:t})):o.a.createElement(g,c({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);