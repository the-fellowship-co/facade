(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(0),l=t.n(n),r=t(262),c=t(261),o=t(256),i=t(258),m=t(257),s=t(260),u=t(215),d=t.n(u),p=t(213),E=t.n(p),h=t(253),g=t(249),b=t(255),y=t(153),f=t(212),v=t(211);const N=Object(g.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},successIcon:{margin:e.spacing(1),backgroundColor:f.a[400]},apiKeyBlock:{width:300,textAlign:"center",fontWeight:"bold"},codeBlock:{width:300,marginTop:e.spacing(2)},subContent:{marginTop:e.spacing(3),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},error:{color:v.a[400]}}));function w(){return l.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},`Copyright \xa9 ${(new Date).getFullYear()} The Fellowship Co`)}function C({email:e,apiKey:a}){const t=N();return l.a.createElement(b.a,{component:"main",maxWidth:"md"},l.a.createElement(o.a,null),l.a.createElement("div",{className:t.paper},l.a.createElement(r.a,{className:t.successIcon},l.a.createElement(E.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},"Success"),l.a.createElement("div",{className:t.subContent},l.a.createElement(h.a,{component:"h7",variant:"body1"},"Your account has been created successfully"),l.a.createElement("code",{className:t.apiKeyBlock},"Your API Key: ",a)),l.a.createElement("div",{className:t.subContent},l.a.createElement(h.a,{component:"h7",variant:"body1"},"You are all set to start using byld! Use ",l.a.createElement("code",null,"byld login")," to authenticate and byld your first project:"),l.a.createElement("code",{className:t.codeBlock},l.a.createElement("div",null,"$ byld login"),l.a.createElement("div",null,"Your email: ",e),l.a.createElement("div",null,"Your token: ",a))),l.a.createElement("div",{className:t.subContent},l.a.createElement(h.a,{component:"h7",variant:"body1"},"A copy of these instructions along with the API key has been sent to your email ",l.a.createElement("code",null,e)))))}function k(){const e=N(),[a,t]=Object(n.useState)({}),[u,p]=Object(n.useState)({}),[E,g]=Object(n.useState)(null),f=e=>{t({...a,[e.target.name]:e.target.value})};return l.a.createElement(y.a,null,!u.authenticationToken&&l.a.createElement(b.a,{component:"main",maxWidth:"xs"},l.a.createElement(o.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(r.a,{className:e.avatar},l.a.createElement(d.a,null)),l.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign up"),l.a.createElement("form",{className:e.form,onSubmit:async e=>{e.preventDefault();try{const e=await fetch("http://api.letsbyld.com/users",{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json","x-user-email":a.email,"x-user-token":"7B9BbsH2wqNG-zLSHzfp"}),body:JSON.stringify({user:a})}),t=await e.json();200===e.status?(p(t),g(null)):g(t.error)}catch(e){g("There was an error processing your request. Please try again.")}}},l.a.createElement(m.a,{container:!0,spacing:2},l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(i.a,{autoComplete:"fname",name:"firstName",onChange:f,variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6},l.a.createElement(i.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",onChange:f,autoComplete:"lname"})),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(i.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:f,autoComplete:"email"}))),l.a.createElement(c.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up")),E&&l.a.createElement("div",{className:e.error},E)),l.a.createElement(s.a,{mt:5},l.a.createElement(w,null))),u.authenticationToken&&l.a.createElement(C,{email:u.email,apiKey:u.authenticationToken}))}}}]);