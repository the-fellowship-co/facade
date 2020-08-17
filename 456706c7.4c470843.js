(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var c=n(2),r=(n(0),n(143));const a={id:"cli",title:"CLI Command",sidebar_label:"CLI"},l={id:"references/cli",title:"CLI Command",description:"Setup",source:"@site/docs/references/cli.md",permalink:"/docs/references/cli",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/references/cli.md",sidebar_label:"CLI",sidebar:"someSidebar",previous:{title:"Backend for a todo app",permalink:"/docs/bylding_backends/todo_app"},next:{title:"Ruby Development",permalink:"/docs/references/ruby"}},o=[{value:"Setup",id:"setup",children:[{value:"Login",id:"login",children:[]},{value:"Create project",id:"create-project",children:[]}]},{value:"Blocks",id:"blocks",children:[{value:"Create block",id:"create-block",children:[]},{value:"Create model",id:"create-model",children:[]},{value:"Connect block",id:"connect-block",children:[]}]},{value:"Gate",id:"gate",children:[{value:"Create gate",id:"create-gate",children:[]},{value:"Expose block",id:"expose-block",children:[]},{value:"Connect block",id:"connect-block-1",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Deploy",id:"deploy",children:[]},{value:"Status",id:"status",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Console",id:"console",children:[]}]}],b={rightToc:o};function i({components:e,...t}){return Object(r.b)("wrapper",Object(c.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{}),"$ byld login\n")),Object(r.b)("h3",{id:"create-project"},"Create project"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld new [project-name]\n")),Object(r.b)("h2",{id:"blocks"},"Blocks"),Object(r.b)("h3",{id:"create-block"},"Create block"),Object(r.b)("p",null,"Run this from project directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block new [block-name]\n")),Object(r.b)("p",null,"or you can also use a short version"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld b new [block-name]\n")),Object(r.b)("h3",{id:"create-model"},"Create model"),Object(r.b)("p",null,"Run this from block directory in which you need to generate the model,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld b g:model [model-name]\n")),Object(r.b)("h3",{id:"connect-block"},"Connect block"),Object(r.b)("p",null,"Run this from block in which you need to generate the client,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld connect [block-name]\n")),Object(r.b)("h2",{id:"gate"},"Gate"),Object(r.b)("h3",{id:"create-gate"},"Create gate"),Object(r.b)("p",null,"Run this from project directory"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate create\n")),Object(r.b)("h3",{id:"expose-block"},"Expose block"),Object(r.b)("p",null,"Run this from gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld expose [block-name]\n")),Object(r.b)("h3",{id:"connect-block-1"},"Connect block"),Object(r.b)("p",null,"Run this from gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld connect [block-name]\n")),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("h3",{id:"deploy"},"Deploy"),Object(r.b)("p",null,"Run this from block/ gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n")),Object(r.b)("h3",{id:"status"},"Status"),Object(r.b)("p",null,"Run this from block/ gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n")),Object(r.b)("h3",{id:"logs"},"Logs"),Object(r.b)("p",null,"Run this from block/ gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld logs\n")),Object(r.b)("h3",{id:"console"},"Console"),Object(r.b)("p",null,"Run this from block/ gate directory,"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ byld console\n")))}i.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=d(n),s=c,m=p["".concat(l,".").concat(s)]||p[s]||u[s]||a;return n?r.a.createElement(m,o({ref:t},i,{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var i=2;i<a;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);