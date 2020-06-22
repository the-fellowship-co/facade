(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(143)),i={id:"comms",title:"Communicating between blocks",sidebar_label:"Communicating between blocks"},s={id:"bylding_backends/comms",isDocsHomePage:!1,title:"Communicating between blocks",description:"Truss is built based on Domain Driven Design(DDD) to organize backends.",source:"@site/docs/bylding_backends/comms.md",permalink:"/facade/docs/bylding_backends/comms",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/comms.md",sidebar_label:"Communicating between blocks"},c=[{value:"Domain",id:"domain",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Messages",id:"messages",children:[]}],l={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Truss is built based on Domain Driven Design(DDD) to organize backends.\nIn DDD, you organize codes based on business domains. For example, Identity,\nCatalog, Order, Payment, Communication are common domains of an e-commerce\nbusiness. Each domain exposes mutliple methods to other domains and gateway.\nGateway acts like a proxy layer between UI and domains."),Object(o.b)("h3",{id:"domain"},"Domain"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Domain abstracts all business logic related to a business domain."),Object(o.b)("li",{parentName:"ul"},"Domain can have multiple services inside it. Each service exposes a specific\nset of methods to other domains."),Object(o.b)("li",{parentName:"ul"},"Inter domain communications are abstracted as simple function calls."),Object(o.b)("li",{parentName:"ul"},"Whenever you create a model, persisted in db, we automatically expose CRUD\nmethods as a service. Ex: User model will be exposed as UserService with\nget_user, list_user, create_user!, delete_user!, update_user! methods by\ndefault."),Object(o.b)("li",{parentName:"ul"},"You can also create a custom service to expose domain level methods.")),Object(o.b)("h3",{id:"gateway"},"Gateway"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Gateway acts like a proxy layer for expose all domains to UI."),Object(o.b)("li",{parentName:"ul"},"Gateway exposes all the domains via GraphQL interface."),Object(o.b)("li",{parentName:"ul"},"Gateway supports joins to automatically fetch data across domains.\nFor example, get_order can automatically fetch payment details when order and\npayment domains are joined based on order_id."),Object(o.b)("li",{parentName:"ul"},"Gateway can be used implement complex inter domain orchestration logic."),Object(o.b)("li",{parentName:"ul"},"Gateway can be used for request throttling, authentication/ authorization.")),Object(o.b)("h3",{id:"messages"},"Messages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Non persistent models are known as messages"),Object(o.b)("li",{parentName:"ul"},"Messages can be used to abstract non persistent data inside the domain.\nEx: request/ response classes.")))}m.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),b=a,p=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(p,s(s({ref:t},l),{},{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);