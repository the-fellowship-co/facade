(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(143));const o={id:"intro",title:"What's Byld?",sidebar_label:"What's Byld?"},i={id:"getting_started/intro",title:"What's Byld?",description:"Byld is a tool to design, develop and deploy backends in an incredibly fast way.",source:"@site/docs/getting_started/intro.md",permalink:"/docs/getting_started/intro",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/getting_started/intro.md",sidebar_label:"What's Byld?",sidebar:"someSidebar",next:{title:"Quick Start",permalink:"/docs/getting_started/quick_start"}},l=[{value:"How it works?",id:"how-it-works",children:[]},{value:"Setting it up",id:"setting-it-up",children:[{value:"Installation",id:"installation",children:[]},{value:"Login",id:"login",children:[]}]}],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Byld is a tool to design, develop and deploy backends in an incredibly fast way."),Object(a.b)("h3",{id:"how-it-works"},"How it works?"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Architect with blocks")," to abstract different domains of your business"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Communicate between blocks")," either synchronously or asynchronously with just a function call."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Expose blocks to frontends")," using gate, a GraphQL gateway."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Deploy blocks and gates")," instantly using a single cli command.")),Object(a.b)("p",null,"Byld isn't just a framework, though \u2013 we eliminate a lot of boilerplate code that tradinational backends require like transport, routing, messaging and infrastructure setup. It simplifies building backends by making you only write code that matters and let's you instantly deploy your backends without any additional setups."),Object(a.b)("h2",{id:"setting-it-up"},"Setting it up"),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ gem install byld-cli\n")),Object(a.b)("p",null,"You need to install ",Object(a.b)("inlineCode",{parentName:"p"},"ruby-v2.6.6")," or a newer version. We recommend using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://rvm.io/rvm/install"}),"RVM")," for installing it."),Object(a.b)("h3",{id:"login"},"Login"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld login")," to authenicate. If you don't have a token yet, request your token ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://forms.gle/2VGp3jgdndogwM939"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld login\n\nYour email: someone@example.com\nYour token: xxxxx\n")),Object(a.b)("p",null,"You\u2019re all set for building your first project."))}s.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);