(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(139));const c={id:"architecting_with_blocks",title:"Architecting with blocks",sidebar_label:"Architecting with blocks"},o={id:"bylding_backends/architecting_with_blocks",isDocsHomePage:!1,title:"Architecting with blocks",description:"Create your first project",source:"@site/docs/bylding_backends/architecting_with_blocks.md",permalink:"/docs/bylding_backends/architecting_with_blocks",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/architecting_with_blocks.md",sidebar_label:"Architecting with blocks",sidebar:"someSidebar",previous:{title:"What's Byld?",permalink:"/docs/getting_started/intro"},next:{title:"Communicating between blocks",permalink:"/docs/bylding_backends/communicating_between_blocks"}},i=[{value:"Create your first project",id:"create-your-first-project",children:[]},{value:"Create your first block",id:"create-your-first-block",children:[]},{value:"Create your first model",id:"create-your-first-model",children:[]},{value:"Deploy your block",id:"deploy-your-block",children:[]},{value:"Test and debug your block",id:"test-and-debug-your-block",children:[]}],l={rightToc:i};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"create-your-first-project"},"Create your first project"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld new [project-name]")," to create a new project. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld new amazon\n")),Object(a.b)("p",null,"Now there is a new directory created with the name ",Object(a.b)("inlineCode",{parentName:"p"},"amazon/"),". Switch into the newly created directory."),Object(a.b)("h3",{id:"create-your-first-block"},"Create your first block"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld block new [block-name]")," to create a new block. Lets start with identity block which abstracts users and identity management."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block new identity\n")),Object(a.b)("h4",{id:"structure-of-a-block"},"Structure of a block"),Object(a.b)("p",null,"Block are fundamental units of abstractions of your business/organizations. ..."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"identity/\n\u251c\u2500\u2500 Gemfile\n\u2514\u2500\u2500 models/\n")),Object(a.b)("h3",{id:"create-your-first-model"},"Create your first model"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"byld b g:model [model-name]")," to create a model."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld b g:model users\n")),Object(a.b)("p",null,"It creates two files the actual model and the db migration for the model."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class User < ActiveRecord::Base\n  expose only: [:get, :create, :update, :delete, :list]\nend\n")),Object(a.b)("p",null,"The model by default has ",Object(a.b)("inlineCode",{parentName:"p"},"get"),", ",Object(a.b)("inlineCode",{parentName:"p"},"create"),", ",Object(a.b)("inlineCode",{parentName:"p"},"update"),", ",Object(a.b)("inlineCode",{parentName:"p"},"delete")," and ",Object(a.b)("inlineCode",{parentName:"p"},"list"),"\nimplemented. You could add additional methods using this interface markup\n",Object(a.b)("inlineCode",{parentName:"p"},"inf(RequestType) {ReturnType}")," over it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class User < ActiveRecord::Base\n  expose only: [:get, :create, :update, :delete, :list]\n\n  inf(ID) {User}\n  def self.activate(id)\n    user = User.find(id)\n    user.enable!\n  end\nend\n")),Object(a.b)("p",null,"Use the migration file to fill the necessary fields for the model."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"class CreateUsers < ActiveRecord::Migration[5.2]\n  def change\n    create_table :users do |t|\n      t.string :first_name\n      t.string :last_name\n      t.string :email\n    end\n  end\nend\n")),Object(a.b)("p",null,"That\u2019s pretty much it. You\u2019re all set up to deploy your first block."),Object(a.b)("h3",{id:"deploy-your-block"},"Deploy your block"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"byld deploy")," from the block directory to deploy it. Check the status of the deployment using ",Object(a.b)("inlineCode",{parentName:"p"},"byld status")," command. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n\namazon\n\nblocks\n\n+----------+----------+\n| name     | status   |\n+----------+----------+\n| identity | active   |\n+----------+----------+\n\n")),Object(a.b)("h3",{id:"test-and-debug-your-block"},"Test and debug your block"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"byld console")," and ",Object(a.b)("inlineCode",{parentName:"p"},"byld logs")," commands come in handy to test and debug the block after deploying. "))}b.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);