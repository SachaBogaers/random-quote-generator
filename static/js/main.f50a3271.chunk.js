(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(4),u=n.n(r),i=(n(9),n(10),n(3)),a=n(0);var s=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)({text:"",author:""}),u=Object(i.a)(r,2),s=u[0],h=u[1],f=function(){var t,e,o=(t=0,e=n.length,Math.floor(Math.random()*(e-t)+t));return console.log(o),n[o]};Object(o.useEffect)((function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){console.log(t),c(t)}))}),[]),Object(o.useEffect)((function(){j()}),[n]);var j=function(){var t=f();console.log("new quote",t),t&&null===t.author&&(t.author="Unknown"),h(t)};return Object(a.jsxs)("div",{id:"quote-box",children:[s&&Object(a.jsxs)("h2",{id:"text",children:['"',s.text,'"']}),s&&Object(a.jsxs)("h3",{id:"author",children:["- ",s.author]}),Object(a.jsx)("button",{onClick:j,id:"new-quote",children:"New quote"}),s&&Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?text=".concat(s.text," - ").concat(s.author),id:"tweet-quote",children:"Tweet quote"})]})};var h=function(){return Object(a.jsx)(s,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),o(t),c(t),r(t),u(t)}))};u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),f()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f50a3271.chunk.js.map