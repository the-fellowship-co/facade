(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{167:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(172),i=t(176),c=t(170);var o=function(e){var a=e.nextItem,t=e.prevItem;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous Post"),n.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Next Post"),n.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,r=a.metadata,c=r.title,m=r.description,s=r.nextItem,u=r.prevItem,p=r.editUrl;return n.a.createElement(l.a,{title:c,description:m},a&&n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(i.a,{frontMatter:t,metadata:r,isBlogPostPage:!0},n.a.createElement(a,null)),n.a.createElement("div",null,p&&n.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.a.createElement("g",null,n.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||u)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(o,{nextItem:s,prevItem:u}))))))}},168:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var r=t(0),n=t.n(r);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),s=function(e){var a=n.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):c({},a,{},e)),t},u=function(e){var a=s(e.components);return n.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},v=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),v=r,d=u["".concat(i,".").concat(v)]||u[v]||p[v]||l;return t?n.a.createElement(d,c({ref:a},m,{components:t})):n.a.createElement(d,c({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=v;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<l;m++)i[m]=t[m];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},174:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),i=t(170),c=t(177),o=t(9),m=t(171),s=t.n(m),u=t(169),p=(t(127),t(128)),v=t.n(p),d=function(e){return function(a){var t,r=a.id,n=Object(o.a)(a,["id"]),i=Object(u.a)().siteConfig,c=(i=void 0===i?{}:i).themeConfig,m=(c=void 0===c?{}:c).navbar,p=(m=void 0===m?{}:m).hideOnScroll,d=void 0!==p&&p;return r?l.a.createElement(e,n,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:s()("anchor",(t={},t[v.a.enhancedAnchor]=!d,t)),id:r}),n.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):l.a.createElement(e,n)}},f=t(129),g=t.n(f);a.a={code:function(e){var a=e.children;return"string"==typeof a?l.a.createElement(c.a,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(i.a,e)},pre:function(e){return l.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")}},176:function(e,a,t){"use strict";t(71);var r=t(0),n=t.n(r),l=t(171),i=t.n(l),c=t(168),o=t(170),m=t(174),s=t(130),u=t.n(s),p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,s,v=e.children,d=e.frontMatter,f=e.metadata,g=e.truncated,h=e.isBlogPostPage,E=void 0!==h&&h,b=f.date,y=f.permalink,N=f.tags,_=f.readingTime,O=d.author,w=d.title,P=d.author_url||d.authorURL,x=d.author_title||d.authorTitle,j=d.author_image_url||d.authorImageURL;return n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],l=p[parseInt(t[1],10)-1],s=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:i()("margin-bottom--sm",u.a.blogPostTitle)},E?w:n.a.createElement(o.a,{to:y},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",s,", ",r," ",_&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(_)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:O})),n.a.createElement("div",{className:"avatar__intro"},O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},O)),n.a.createElement("small",{className:"avatar__subtitle"},x)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:m.a},v)),(N.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:f.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,"Read More")))))}}}]);