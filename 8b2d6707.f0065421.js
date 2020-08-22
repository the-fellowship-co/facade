(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return b}));var o=t(2),r=t(6),i=(t(0),t(143)),l={id:"deploying_and_testing_blocks",title:"Deploying and testing blocks",sidebar_label:"Deploying and testing blocks"},c={id:"bylding_backends/deploying_and_testing_blocks",title:"Deploying and testing blocks",description:"Deploying a block",source:"@site/docs/bylding_backends/deploying_and_testing_blocks.md",permalink:"/docs/bylding_backends/deploying_and_testing_blocks",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/deploying_and_testing_blocks.md",sidebar_label:"Deploying and testing blocks",sidebar:"someSidebar",previous:{title:"Working with models",permalink:"/docs/bylding_backends/working_with_models"},next:{title:"Communicating between blocks",permalink:"/docs/bylding_backends/communicating_between_blocks"}},a=[{value:"Deploying a block",id:"deploying-a-block",children:[]},{value:"Testing a block",id:"testing-a-block",children:[{value:"Using interactive console",id:"using-interactive-console",children:[]},{value:"Viewing logs",id:"viewing-logs",children:[]}]}],s={rightToc:a};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"deploying-a-block"},"Deploying a block"),Object(i.b)("p",null,"Blocks eliminates all the infrasturcture related code needed to deploy your\nblock. Your migration will be run automatically before\ndeployment."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"byld deploy")," from the block directory to deploy it. And check the status\nof the deployment using ",Object(i.b)("inlineCode",{parentName:"p"},"byld status")," command."),Object(i.b)("h2",{id:"testing-a-block"},"Testing a block"),Object(i.b)("p",null,"After deploying, you can test/debug your blocks from your local command line."),Object(i.b)("h3",{id:"using-interactive-console"},"Using interactive console"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"byld console")," to connect to your block's console. All the models are\nloaded for testing."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),">> req = CreateUserReq.new(first_name: 'foo', last_name: 'bar')\n>> user = User.client.create!(req)\n>> User.client.activate(user.id)\n")),Object(i.b)("p",null,"You can use the block docs link from ",Object(i.b)("inlineCode",{parentName:"p"},"byld status")," to see all the interface method signature and defintions of the request and response types."),Object(i.b)("h3",{id:"viewing-logs"},"Viewing logs"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"byld logs")," to view your block's logs in your command line."))}b.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=b(t),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return t?r.a.createElement(g,c({ref:n},s,{components:t})):r.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);