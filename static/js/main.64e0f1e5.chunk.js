(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var i,c,o,d=n(1),s=n.n(d),r=n(12),a=n.n(r),l=(n(21),n(3)),h=n(6),j=(n(22),n(7)),u=n.p+"static/media/icon-sun.910b1f9a.svg",b=n.p+"static/media/icon-check.a8fb15d0.svg",f=n.p+"static/media/icon-moon.6c03114b.svg",m=n.p+"static/media/bg-desktop-dark.73e47dbb.jpg",O=n.p+"static/media/bg-desktop-light.3508d620.jpg",x=n(16),g=n(0),p=function(t){var e=t.todo,n=t.setTodo,i=t.dark,c=(t.setDark,t.check),o=Object(d.useState)(""),s=Object(l.a)(o,2),r=s[0],a=s[1];return Object(g.jsxs)("div",{className:"input",style:{backgroundColor:i?"hsl(0, 0%, 98%)":"hsl(235, 21%, 11%)"},children:[Object(g.jsx)("input",{type:"text",placeholder:"Type what you want to do today",onChange:function(t){a(t.target.value)},value:r,style:{backgroundColor:i?"hsl(0, 0%, 98%)":"hsl(235, 21%, 11%)"}}),Object(g.jsx)("button",{onClick:function(){!r&&r.length<3?window.alert("Put something valuabe in there!"):(n([].concat(Object(x.a)(e),[{id:Math.floor(100*Math.random()-20),name:r,did:!1}])),a(""))},children:Object(g.jsx)("img",{src:c})})]})},k=n(10),y=function(t){var e=t.setTodo,n=t.todo,i=t.dark,c=function(t){e(n.map((function(e){return e.id===t&&!1===e.did?Object(k.a)(Object(k.a)({},e),{},{did:!e.did}):e})))},o=function(t){e(n.filter((function(e){return e.id!==t}))),console.log(t)};return Object(g.jsx)("div",{children:n.map((function(t){return Object(g.jsxs)("div",{className:"todo-item",style:{backgroundColor:i?"hsl(0, 0%, 98%)":"hsl(235, 24%, 19%)"},children:[Object(g.jsx)("h3",{className:"todo ".concat(t.did?"todo-did":"todo-not"),children:t.name}),Object(g.jsxs)("div",{className:"todo-btns",children:[!1===t.did?Object(g.jsx)("button",{type:"button",onClick:function(){return c(t.id)},children:"Check"}):" ",Object(g.jsx)("button",{type:"button",onClick:function(){return o(t.id)},children:"Delete"})]})]},t.id)}))})},v=j.a.div(i||(i=Object(h.a)(["\nwidth:50%;\nmargin:0 auto;\n@media(max-width:600px){\n  width:90%;\n}\n"]))),C=j.a.div(c||(c=Object(h.a)(["\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\nh3{\ncolor:#fff;\nfont-size:2.1rem;\nletter-spacing:12px;\n@media(max-width:600px){\nfont-size:1.1rem;\n}\n}\n"]))),w=j.a.div(o||(o=Object(h.a)(["\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\npadding:0.9rem 0.2rem;\n@media(max-width:600px){\npadding:0.4rem 0.1rem;\n}\nh3{\ncolor:hsl(236, 9%, 61%);\nfont-size:0.9rem;\nfont-weight:700;\n@media(max-width:600px){\nfont-size:0.6rem;\n}\n}\n"])));var N=function(){var t=Object(d.useState)(!1),e=Object(l.a)(t,2),n=e[0],i=e[1],c=Object(d.useState)([{id:1,name:"Do this",did:!1},{id:2,name:"Do that",did:!1},{id:3,name:"You need to go to",did:!0},{id:4,name:"Get that BAC",did:!0}]),o=Object(l.a)(c,2),s=o[0],r=o[1];return Object(g.jsxs)("div",{className:"App",style:{backgroundColor:n?"hsl(233, 11%, 84%)":"hsl(235, 21%, 11%)"},children:[Object(g.jsx)("header",{className:"header",style:{backgroundImage:"url(".concat(n?O:m,")")},children:Object(g.jsxs)(v,{children:[Object(g.jsxs)(C,{children:[Object(g.jsx)("h3",{children:"TODO"}),Object(g.jsx)("a",{href:"#",onClick:function(){return i(!n)},children:Object(g.jsx)("img",{src:n?f:u})})]}),Object(g.jsx)(p,{todo:s,setTodo:r,dark:n,setDark:i,check:b})]})}),Object(g.jsx)("div",{className:"todo-list",children:Object(g.jsx)(v,{children:s.length>0?Object(g.jsx)(y,{todo:s,setTodo:r,dark:n,setDark:i}):Object(g.jsx)("h3",{className:"text-center",children:"No todo's to display :("})})}),Object(g.jsx)(v,{children:Object(g.jsx)("div",{className:"todo-checking",style:{backgroundColor:n?"hsl(0, 0%, 98%)":"hsl(235, 24%, 19%)"},children:Object(g.jsxs)(w,{children:[s.length>0?s.filter((function(t){return!t.did})).length>0?Object(g.jsxs)("h3",{children:[s.filter((function(t){return!t.did})).length," tasks left"]}):Object(g.jsx)("h3",{children:"Good job for today , you did it !"}):Object(g.jsx)("h3",{children:"Also.. no todos to display :("}),s.length>0?Object(g.jsxs)("div",{className:"todo-btns",children:[Object(g.jsx)("button",{type:"button",onClick:function(){return r(s.filter((function(t){return!0===t.did&&!1===t.did})))},children:"All"}),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{type:"button",onClick:function(){return r(s.filter((function(t){return!0===t.did})))},children:"Finished"}),Object(g.jsx)("button",{type:"button",onClick:function(){return r(s.filter((function(t){return!1===t.did})))},children:"Still in progress"})]})]}):Object(g.jsx)("h3",{children:"What should I filter ? refresh it !"})]})})})]})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,d=e.getTTFB;n(t),i(t),c(t),o(t),d(t)}))};a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),D()}},[[26,1,2]]]);
//# sourceMappingURL=main.64e0f1e5.chunk.js.map