(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(143));const c={id:"custom",title:"Messages and Services",sidebar_label:"Messages and Services"},s={id:"bylding_backends/custom",title:"Messages and Services",description:"Create Messages",source:"@site/docs/bylding_backends/custom.md",permalink:"/docs/bylding_backends/custom",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/custom.md",sidebar_label:"Messages and Services",sidebar:"someSidebar",previous:{title:"Deploying and testing gate",permalink:"/docs/bylding_backends/deploying_and_testing_gate"},next:{title:"Backend for a todo app",permalink:"/docs/bylding_backends/todo_app"}},o=[{value:"Create Messages",id:"create-messages",children:[]},{value:"Create Services",id:"create-services",children:[]}],i={rightToc:o};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"create-messages"},"Create Messages"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Byld::Message")," to create a custom messages. Custom messages can be used as\nrequest / reponse type in your additional methods."),Object(a.b)("p",null,"Custom types will be exported across blocks with ",Object(a.b)("inlineCode",{parentName:"p"},"byld connect [block-name]"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class CalculateTaxReq < Byld::Message\n  field :country, String\n  field :state, String\n  field :price, Float\nend\n\nclass CalculateTaxResp < Byld::Message\n  field :price_with_tax, Float\n  field :tax, Float\nend\n")),Object(a.b)("h2",{id:"create-services"},"Create Services"),Object(a.b)("p",null,"Inside a block, use ",Object(a.b)("inlineCode",{parentName:"p"},"Byld::Service")," to create a custom service. All models\nand custom messages can be used in custom services."),Object(a.b)("p",null,"Custom services will be exported across blocks with\n",Object(a.b)("inlineCode",{parentName:"p"},"byld connect [block-name]"),". You can also expose custom services to frontends\nin gates with ",Object(a.b)("inlineCode",{parentName:"p"},"byld gate expose [block-name]"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class TaxCalculator < Byld::Service\n\n  inf(CalculateTaxReq) {CalculateTaxResp}\n  def calculate(req)\n    # 10% tax\n    tax = 0.1 * req.price\n    resp = CalculateTaxResp.new(price_with_tax: req.price + tax, tax: tax)\n  end\n\nend\n")))}l.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||c;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);