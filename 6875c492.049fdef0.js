(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(153),l=a(174),r=a(149);t.default=function(e){const{metadata:t,items:a}=e,{allTagsPath:n,name:i,count:o}=t;return s.a.createElement(c.a,{title:`Posts tagged "${i}"`,description:`Blog | Tagged "${i}"`},s.a.createElement("div",{className:"container margin-vert--lg"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--8 col--offset-2"},s.a.createElement("h1",null,o," ",function(e,t){return e>1?t+"s":t}(o,"post"),' tagged with "',i,'"'),s.a.createElement(r.a,{href:n},"View All Tags"),s.a.createElement("div",{className:"margin-vert--xl"},a.map(({content:e})=>s.a.createElement(l.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},s.a.createElement(e,null))))))))}},155:function(e,t,a){"use strict";(function(e){var n=a(2),s=a(0),c=a.n(s),l=a(145),r=a(160),i=a(156),o=a.n(i),m=a(157),d=a.n(m),h=a(148),u=a(161),g=a(93),p=a.n(g),j=a(35);(void 0!==e?e:window).Prism=j.a,a(158),a(159);const f=/{([\d,-]+)}/,k=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map(e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},b=/title=".*"/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:i={}}}}=Object(h.a)(),[m,g]=Object(s.useState)(!1),[j,y]=Object(s.useState)(!1);Object(s.useEffect)(()=>{y(!0)},[]);const E=Object(s.useRef)(null);let v=[],w="";const B=Object(u.a)();if(a&&f.test(a)){const e=a.match(f)[1];v=d.a.parse(e).filter(e=>e>0)}a&&b.test(a)&&(w=a.match(b)[0].split("title=")[1].replace(/"+/g,""));let N=t&&t.replace(/language-/,"");!N&&i.defaultLanguage&&(N=i.defaultLanguage);let x=e.replace(/\n$/,"");if(0===v.length&&void 0!==N){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"]);case"jsx":case"tsx":return k(["js","jsBlock","jsx"]);case"html":return k(["js","jsBlock","html"]);case"python":case"py":return k(["python"]);default:return k()}})(N),n=e.replace(/\n$/,"").split("\n");let s;for(let e=0;e<n.length;){const c=e+1,l=n[e].match(a);if(null!==l){switch(l.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=c+",";break;case"highlight-start":s=c;break;case"highlight-end":t+=`${s}-${c-1},`}n.splice(e,1)}else e+=1}v=d.a.parse(t),x=n.join("\n")}const O=()=>{o()(x),g(!0),setTimeout(()=>g(!1),2e3)};return c.a.createElement(r.a,Object(n.a)({},r.b,{key:j,theme:B,code:x,language:N}),({className:e,style:t,tokens:a,getLineProps:s,getTokenProps:r})=>c.a.createElement(c.a.Fragment,null,w&&c.a.createElement("div",{style:t,className:p.a.codeBlockTitle},w),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(p.a.copyButton,{[p.a.copyButtonWithTitle]:w}),onClick:O},m?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:Object(l.a)(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:w})},c.a.createElement("div",{className:p.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=s({line:e,key:t});return v.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>c.a.createElement("span",Object(n.a)({key:t},r({token:e,key:t})))))}))))))}}).call(this,a(53))}}]);