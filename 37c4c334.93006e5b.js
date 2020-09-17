(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=(t(0),t(180));const o={id:"deploying_and_testing_gate",title:"Deploying and testing gate",sidebar_label:"Deploying and testing gate"},i={id:"bylding_backends/deploying_and_testing_gate",isDocsHomePage:!1,title:"Deploying and testing gate",description:"Deploy your gate",source:"@site/docs/bylding_backends/deploying_and_testing_gate.md",permalink:"/docs/bylding_backends/deploying_and_testing_gate",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/deploying_and_testing_gate.md",sidebar_label:"Deploying and testing gate",sidebar:"someSidebar",previous:{title:"Working with edges",permalink:"/docs/bylding_backends/working_with_edges"},next:{title:"Messages and Services",permalink:"/docs/bylding_backends/custom"}},l=[{value:"Deploy your gate",id:"deploy-your-gate",children:[]},{value:"Querying the gate",id:"querying-the-gate",children:[]}],c={rightToc:l};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"deploy-your-gate"},"Deploy your gate"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld deploy")," to deploy the gate."),Object(a.b)("p",null,"When the block changes, you need to expose the block and deploy the gate again."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n")),Object(a.b)("h2",{id:"querying-the-gate"},"Querying the gate"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld status")," to see the status of the gate and blocks."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n\ngate\n\n+-------------------------------+------------------------------+\n| status  | url                 | docs                         |\n+-------------------------------+------------------------------+\n| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql |\n+---------+---------------------+------------------------------+\n\nblocks\n\n+----------+------------+\n| name     | status     |\n+----------+------------+\n| order    | running    |\n| identity | running    |\n+----------+------------+\n")),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"amazon.letsbyld.com")," url to power your UI across different\nplatforms. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"amazon.letsbyld.com/graphiql")," url to view docs and test out your\nendpoints."),Object(a.b)("p",null,"You can learn more about using GraphQL in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/"}),"GraphQL queries and mutations guide"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  getOrder(id: "z3dsbjn3223") {\n    id\n    totalPrice\n    lineItems {\n      id\n      qty\n      unitPrice\n      totalPrice\n      product {\n        id\n        title\n      }\n      customer {\n        firstName\n        lastName\n        address {\n          street\n          city\n          state\n        }\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,g=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(g,l(l({ref:n},s),{},{components:t})):a.a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);