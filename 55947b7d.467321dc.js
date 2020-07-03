(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(140)),o={id:"block",title:"Block API",sidebar_label:"Block API"},l={id:"references/block",isDocsHomePage:!1,title:"Block API",description:"Login",source:"@site/docs/references/block.md",permalink:"/docs/references/block",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/references/block.md",sidebar_label:"Block API"},i=[{value:"Login",id:"login",children:[]},{value:"Create project",id:"create-project",children:[]},{value:"Create domain",id:"create-domain",children:[]},{value:"Connect domain",id:"connect-domain",children:[]},{value:"Create gateway",id:"create-gateway",children:[]},{value:"Expose domain",id:"expose-domain",children:[]},{value:"Create model",id:"create-model",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Console",id:"console",children:[]}],b={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"login"},"Login"),Object(c.b)("p",null,"Run this from project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss login\n")),Object(c.b)("h2",{id:"create-project"},"Create project"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss new your-project-namecd\n")),Object(c.b)("h2",{id:"create-domain"},"Create domain"),Object(c.b)("p",null,"Run this from project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss domain new your-domain-name\n")),Object(c.b)("h2",{id:"connect-domain"},"Connect domain"),Object(c.b)("p",null,"Run this from domain in which you need to generate the client,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss g:client domain-name\n")),Object(c.b)("h2",{id:"create-gateway"},"Create gateway"),Object(c.b)("p",null,"Run this from project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss gateway create\n")),Object(c.b)("h2",{id:"expose-domain"},"Expose domain"),Object(c.b)("p",null,"Run this from gateway directory,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss expose domain-name\n")),Object(c.b)("h2",{id:"create-model"},"Create model"),Object(c.b)("p",null,"Run this from domain directory in which you need to generate the model,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss g:model model_name\n")),Object(c.b)("h2",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"Run this from domain/ gateway directory,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss deploy\n")),Object(c.b)("h2",{id:"logs"},"Logs"),Object(c.b)("p",null,"Run this from domain/ gateway directory,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss logs\n")),Object(c.b)("h2",{id:"console"},"Console"),Object(c.b)("p",null,"Run this from domain/ gateway directory,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss console\n")))}u.isMDXComponent=!0},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=n,m=d["".concat(o,".").concat(s)]||d[s]||p[s]||c;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);