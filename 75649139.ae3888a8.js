(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(139)),c={id:"expose_your_blocks",title:"Expose your blocks",sidebar_label:"Expose your blocks"},i={id:"bylding_backends/expose_your_blocks",isDocsHomePage:!1,title:"Expose your blocks",description:"Use byld gate expose [block-name] to generate an edge to the frontend.",source:"@site/docs/bylding_backends/expose_your_frontends.md",permalink:"/docs/bylding_backends/expose_your_blocks",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/expose_your_frontends.md",sidebar_label:"Expose your blocks",sidebar:"someSidebar",previous:{title:"Communicating between blocks",permalink:"/docs/bylding_backends/communicating_between_blocks"},next:{title:"CLI Command",permalink:"/docs/references/cli"}},l=[{value:"Structure of a gate",id:"structure-of-a-gate",children:[]},{value:"Joining blocks",id:"joining-blocks",children:[]},{value:"Deploy your gate",id:"deploy-your-gate",children:[]},{value:"Querying the gate",id:"querying-the-gate",children:[]}],d={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"byld gate expose [block-name]")," to generate an edge to the frontend."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate expose order\n")),Object(o.b)("h3",{id:"structure-of-a-gate"},"Structure of a gate"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gate/\n\u251c\u2500\u2500 Gemfile\n\u2514\u2500\u2500 edges\n    \u2514\u2500\u2500 identity_edge.rb\n    \u2514\u2500\u2500 inventory_edge.rb\n    \u2514\u2500\u2500 order_edge.rb\n    \u2514\u2500\u2500 payment_edge.rb\n    \u2514\u2500\u2500 communication_edge.rb\n")),Object(o.b)("p",null,"You could add additional methods using this interface markup ",Object(o.b)("inlineCode",{parentName:"p"},"inf(RequestType) {ReturnType}")," over it."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class OrderEdge < Byld::Edge\n  include Orders\n\n  inf(ID) {Order}\n  def get_order(id)\n    OrderService.client.get(id)\n  end\n\n  inf(CreateOrderReq) {Order}\n  def create_order!(req)\n    OrderService.client.create!(req)\n  end\n\n  inf(UpdateOrderReq) {Order}\n  def update_order!(req)\n    OrderService.client.update!(req)\n  end\n\n  inf(ID) {Order}\n  def delete_order!(id)\n    OrderService.client.delete!(id)\n  end\nend\n")),Object(o.b)("h3",{id:"joining-blocks"},"Joining blocks"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class OrderEdge < Byld::Edge\n\n  join User\n  def customer(order)\n    UserService.client.get(order.user_id)\n  end\n\nend\n")),Object(o.b)("h3",{id:"deploy-your-gate"},"Deploy your gate"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"byld deploy")," to deploy the gate. This exposes all the blocks to the frontends via GraphQL endpoints."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n")),Object(o.b)("h3",{id:"querying-the-gate"},"Querying the gate"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"byld status")," to see the status of the gate and blocks."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n")),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/graphiql")," endpoint to interact with the endpoints in browser."),Object(o.b)("p",null,"You can use the",Object(o.b)("inlineCode",{parentName:"p"},"/graphql")," endpoint to power your UI across different platforms."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  getOrder(id: "z3dsbjn3223") {\n    id\n    totalPrice\n    lineItems {\n      id\n      qty\n      unitPrice\n      totalPrice\n      product {\n        id\n        title\n      }\n      customer {\n        firstName\n        lastName\n        address {\n          street\n          city\n          state\n        }\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0},139:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,g=b["".concat(c,".").concat(u)]||b[u]||p[u]||o;return t?a.a.createElement(g,i(i({ref:n},d),{},{components:t})):a.a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=t[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);