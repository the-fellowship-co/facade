(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=(a(0),a(177));const o={id:"deploy",title:"Deploying blocks and gates",sidebar_label:"Deploying blocks and gates"},i={id:"bylding_backends/deploy",title:"Deploying blocks and gates",description:"Truss is built based on Domain Driven Design(DDD) to organize backends.",source:"@site/docs/bylding_backends/deploy.md",permalink:"/facade/docs/bylding_backends/deploy",editUrl:"https://github.com/alphas-co/facade/edit/master/docs/bylding_backends/deploy.md",sidebar_label:"Deploying blocks and gates",sidebar:"someSidebar",previous:{title:"Exposing to UI with gates",permalink:"/facade/docs/bylding_backends/gates"},next:{title:"Building a amazon clone",permalink:"/facade/docs/examples/amazon"}},s=[{value:"Domain",id:"domain",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Messages",id:"messages",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Truss is built based on Domain Driven Design(DDD) to organize backends.\nIn DDD, you organize codes based on business domains. For example, Identity,\nCatalog, Order, Payment, Communication are common domains of an e-commerce\nbusiness. Each domain exposes mutliple methods to other domains and gateway.\nGateway acts like a proxy layer between UI and domains."),Object(r.b)("h3",{id:"domain"},"Domain"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Domain abstracts all business logic related to a business domain."),Object(r.b)("li",{parentName:"ul"},"Domain can have multiple services inside it. Each service exposes a specific\nset of methods to other domains."),Object(r.b)("li",{parentName:"ul"},"Inter domain communications are abstracted as simple function calls."),Object(r.b)("li",{parentName:"ul"},"Whenever you create a model, persisted in db, we automatically expose CRUD\nmethods as a service. Ex: User model will be exposed as UserService with\nget_user, list_user, create_user!, delete_user!, update_user! methods by\ndefault."),Object(r.b)("li",{parentName:"ul"},"You can also create a custom service to expose domain level methods.")),Object(r.b)("h3",{id:"gateway"},"Gateway"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Gateway acts like a proxy layer for expose all domains to UI."),Object(r.b)("li",{parentName:"ul"},"Gateway exposes all the domains via GraphQL interface."),Object(r.b)("li",{parentName:"ul"},"Gateway supports joins to automatically fetch data across domains.\nFor example, get_order can automatically fetch payment details when order and\npayment domains are joined based on order_id."),Object(r.b)("li",{parentName:"ul"},"Gateway can be used implement complex inter domain orchestration logic."),Object(r.b)("li",{parentName:"ul"},"Gateway can be used for request throttling, authentication/ authorization.")),Object(r.b)("h3",{id:"messages"},"Messages"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Non persistent models are known as messages"),Object(r.b)("li",{parentName:"ul"},"Messages can be used to abstract non persistent data inside the domain.\nEx: request/ response classes.")))}l.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?r.a.createElement(m,s({ref:t},l,{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);