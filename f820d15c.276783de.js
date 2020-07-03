(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=(r(0),r(140));const o={id:"model",title:"Model API",sidebar_label:"Model API"},c={id:"references/model",isDocsHomePage:!1,title:"Model API",description:"Login",source:"@site/docs/references/model.md",permalink:"/docs/references/model",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/references/model.md",sidebar_label:"Model API"},l=[{value:"Login",id:"login",children:[]},{value:"Create project",id:"create-project",children:[]},{value:"Create domain",id:"create-domain",children:[]},{value:"Connect domain",id:"connect-domain",children:[]},{value:"Create gateway",id:"create-gateway",children:[]},{value:"Expose domain",id:"expose-domain",children:[]},{value:"Create model",id:"create-model",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Console",id:"console",children:[]}],i={rightToc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"login"},"Login"),Object(a.b)("p",null,"Run this from project directory"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss login\n")),Object(a.b)("h2",{id:"create-project"},"Create project"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss new your-project-namecd\n")),Object(a.b)("h2",{id:"create-domain"},"Create domain"),Object(a.b)("p",null,"Run this from project directory"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss domain new your-domain-name\n")),Object(a.b)("h2",{id:"connect-domain"},"Connect domain"),Object(a.b)("p",null,"Run this from domain in which you need to generate the client,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss g:client domain-name\n")),Object(a.b)("h2",{id:"create-gateway"},"Create gateway"),Object(a.b)("p",null,"Run this from project directory"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss gateway create\n")),Object(a.b)("h2",{id:"expose-domain"},"Expose domain"),Object(a.b)("p",null,"Run this from gateway directory,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss expose domain-name\n")),Object(a.b)("h2",{id:"create-model"},"Create model"),Object(a.b)("p",null,"Run this from domain directory in which you need to generate the model,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss g:model model_name\n")),Object(a.b)("h2",{id:"deploy"},"Deploy"),Object(a.b)("p",null,"Run this from domain/ gateway directory,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss deploy\n")),Object(a.b)("h2",{id:"logs"},"Logs"),Object(a.b)("p",null,"Run this from domain/ gateway directory,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss logs\n")),Object(a.b)("h2",{id:"console"},"Console"),Object(a.b)("p",null,"Run this from domain/ gateway directory,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss console\n")))}u.isMDXComponent=!0},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=b(r),s=n,m=d["".concat(c,".").concat(s)]||d[s]||p[s]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);