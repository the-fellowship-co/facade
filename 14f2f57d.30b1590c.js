(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(140));const a={id:"intro",title:"What's Byld?",sidebar_label:"What's Byld?"},i={id:"getting_started/intro",isDocsHomePage:!1,title:"What's Byld?",description:"Byld is a tool to design, develop and deploy backends in a incredibly fast way.",source:"@site/docs/getting_started/intro.md",permalink:"/docs/getting_started/intro",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/getting_started/intro.md",sidebar_label:"What's Byld?",sidebar:"someSidebar",next:{title:"Architecting with blocks",permalink:"/docs/bylding_backends/architecting_with_blocks"}},c=[{value:"How it works?",id:"how-it-works",children:[]},{value:"Setting it up",id:"setting-it-up",children:[{value:"Installation",id:"installation",children:[]},{value:"Login",id:"login",children:[]}]}],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Byld is a tool to design, develop and deploy backends in a incredibly fast way."),Object(o.b)("h3",{id:"how-it-works"},"How it works?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Architect with blocks"),": Use blocks to bootstrap the individual units of abstraction in your business/organisation."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Communicate between blocks"),": Make the blocks communicate in both asynchronous and synchronous way."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Expose blocks with gates"),": Expose the blocks to variety of frontends using gates."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Deploy block and gates"),": Instantly deploy the blocks and gates using a single cli command.")),Object(o.b)("h2",{id:"setting-it-up"},"Setting it up"),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ gem install byld-cli\n")),Object(o.b)("p",null,"If you don\u2019t have ruby on your machine. We recommend using RVM for installing it."),Object(o.b)("h3",{id:"login"},"Login"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"byld login")," to authenicate. If you don't have a token yet it. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://forms.gle/2VGp3jgdndogwM939"}),"Request your token"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld login\n\nYour email: xxx@xxx.com\nYour token: xxxxx\n")),Object(o.b)("p",null,"You\u2019re all set for building your first project."))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);