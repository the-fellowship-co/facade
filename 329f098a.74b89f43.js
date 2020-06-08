(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{147:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),c=(t(0),t(177));const a={id:"ruby",title:"Ruby Development",sidebar_label:"Ruby Development"},o={id:"references/ruby",title:"Ruby Development",description:"Active Record Migration",source:"@site/docs/references/ruby.md",permalink:"/facade/docs/references/ruby",editUrl:"https://github.com/alphas-co/facade/edit/master/docs/references/ruby.md",sidebar_label:"Ruby Development",sidebar:"someSidebar",previous:{title:"Model API",permalink:"/facade/docs/references/model"}},i=[{value:"Active Record Migration",id:"active-record-migration",children:[]},{value:"Active Record",id:"active-record",children:[]},{value:"Ruby Primer",id:"ruby-primer",children:[]},{value:"Installing Ruby",id:"installing-ruby",children:[]}],u={rightToc:i};function l({components:e,...r}){return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"active-record-migration"},"Active Record Migration"),Object(c.b)("p",null,"Run this from project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss login\n")),Object(c.b)("h2",{id:"active-record"},"Active Record"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss new your-project-namecd\n")),Object(c.b)("h2",{id:"ruby-primer"},"Ruby Primer"),Object(c.b)("p",null,"Run this from project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss domain new your-domain-name\n")),Object(c.b)("h2",{id:"installing-ruby"},"Installing Ruby"),Object(c.b)("p",null,"Run this from domain in which you need to generate the client,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),"truss g:client domain-name\n")))}l.isMDXComponent=!0},177:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),b=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},p=function(e){var r=b(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(t),s=n,m=p["".concat(o,".").concat(s)]||p[s]||d[s]||a;return t?c.a.createElement(m,i({ref:r},l,{components:t})):c.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);