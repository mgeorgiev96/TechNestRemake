(this.webpackJsonpshophut=this.webpackJsonpshophut||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),i=c(23),n=c.n(i),r=c(7),j=c(16),o=c.n(j),l=Object(a.createContext)(),d=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),i=c[0],n=c[1],j=Object(a.useState)(0),d=Object(r.a)(j,2),b=d[0],O=d[1],h=Object(a.useState)(""),m=Object(r.a)(h,2),x=m[0],p=m[1],u=Object(a.useState)(""),v=Object(r.a)(u,2),f=v[0],g=v[1],_=Object(a.useState)(""),N=Object(r.a)(_,2),C=N[0],S=N[1],E=Object(a.useState)(""),T=Object(r.a)(E,2),k=T[0],y=T[1];return Object(a.useEffect)((function(){o.a.get("/api/storage").then((function(e){g(e.data.items),p(e.data.user)}))}),[]),Object(s.jsx)(l.Provider,{value:[i,n,x,p,f,g,C,S,k,y,b,O],children:e.children})},b=c(19),O=c(8),h=c(33),m=c(22),x=c(62);var p=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,12),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],Object(s.jsxs)("div",{className:"navbar_container",children:[Object(s.jsxs)(h.a,{expand:"lg",variant:"dark",children:[Object(s.jsx)(h.a.Brand,{children:Object(s.jsx)(b.b,{to:"/api/profile",children:"Technest"})}),Object(s.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(s.jsxs)(m.a,{className:"mr-auto",children:[Object(s.jsxs)(x.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(s.jsx)(m.a.Item,{children:Object(s.jsx)(b.b,{to:"/api/shop",children:"Shop"})}),Object(s.jsx)(m.a.Item,{children:Object(s.jsx)(b.b,{to:"/api/cart",children:"Cart"})}),Object(s.jsx)(m.a.Item,{children:Object(s.jsx)(b.b,{to:"/api/favourites",children:"Favourites"})}),Object(s.jsx)(m.a.Item,{children:Object(s.jsx)(b.b,{to:"/api/purchase-history",children:"Purchase History"})})]}),Object(s.jsx)(m.a.Link,{href:"/api/logout",children:"Logout"})]}),Object(s.jsx)(m.a,{children:Object(s.jsxs)(m.a.Link,{children:["Welcome ",c.name]})})]})]}),Object(s.jsx)("i",{onClick:function(){var e=document.querySelector(".navbar"),t=document.querySelector(".fas");e.classList.contains("navbar_show_toggler")?(e.classList.remove("navbar_show_toggler"),t.style.animation="moveToggler 750ms infinite",t.classList.add("idle_toggler"),t.classList.remove("move_toggler")):(e.classList.add("navbar_show_toggler"),t.style.animation="none",t.classList.remove("idle_toggler"),t.classList.add("move_toggler"))},className:"fas fa-bars idle_toggler"})]})};var u=function(){return Object(s.jsxs)("div",{className:"home_container",children:[Object(s.jsx)("div",{className:"box-with-text",children:"Technest"}),Object(s.jsx)("h1",{children:"where quality meets performance"})]})},v=c(28);var f=function(e){var t=Object(a.useContext)(l),c=Object(r.a)(t,10),i=(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7]);return c[8],c[9],Object(s.jsxs)(v.a,{children:[Object(s.jsx)(v.a.Img,{variant:"top",src:e.image}),Object(s.jsxs)(v.a.Body,{children:[Object(s.jsx)(v.a.Title,{children:e.title}),Object(s.jsx)(v.a.Text,{children:Object(s.jsxs)("strong",{children:[e.price,"$"]})}),Object(s.jsx)(b.b,{className:e.id,onClick:function(e){var t=e.target;i(t.className)},to:"/api/item-info",children:"Read More"})]})]})};var g=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2],t[3],t[4]);return t[5],t[6],t[7],t[8],t[9],Object(s.jsx)("div",{className:"shop_container",children:""!==c?c.map((function(e){return Object(s.jsx)(f,{id:e.id,price:e.price,title:e.name,image:e.images[0]},e.id)})):""})},_=(c(92),c(59)),N=c.n(_);var C=function(e){var t=Object(a.useContext)(l),c=Object(r.a)(t,12),i=c[0],n=c[1],j=(c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10]),o=c[11];return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.index+1}),Object(s.jsx)("td",{className:"img_holder",children:Object(s.jsx)("img",{src:e.image})}),Object(s.jsx)("td",{children:e.name}),Object(s.jsxs)("td",{children:[e.price,"$"]}),Object(s.jsx)("td",{className:e.id,children:Object(s.jsx)("i",{className:"fas fa-trash",onClick:function(e){var t=e.target,c=i,s=c.filter((function(e){return e.id===t.parentElement.className}));c=c.filter((function(e){return e.id!==t.parentElement.className})),n(c),o(j-s[0].price)}})})]})},S=c(60),E=c.n(S);var T=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,12),c=t[0],i=t[1],n=t[2],j=t[3],d=(t[4],t[5],t[6],t[7],t[8],t[9],t[10]),b=t[11];return Object(s.jsx)("div",{className:"cart_container",children:Object(s.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(s.jsxs)("thead",{children:[Object(s.jsx)("tr",{children:Object(s.jsxs)("th",{className:"heading_col",scope:"col",colspan:"5",children:["Total - ",d.toFixed(2),"$ ",Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{className:"stripe_button",token:function(e){o.a.post("/api/payment",{username:n.username,email:e.email,price:d,token:e.id,description:"Transaction made on ".concat(E()(Date.now()).format("LLLL"),".")}).then((function(e){j(e.data),i([]),b(0)}))},stripeKey:"pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2",billingAddress:!0,shippingAddress:!0,description:"TechHut - ".concat(d.toFixed(2),"$"),image:"https://stripe.com/img/documentation/checkout/marketplace.png",amount:100*d,currency:"USD"})]})}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(s.jsx)("tbody",{children:c?c.map((function(e,t){return Object(s.jsx)(C,{id:e.id,index:t,image:e.images[0],name:e.name,price:e.price})})):""})]})})},k=c(44),y=c(61),L=c.n(y);var D=function(e){var t=Object(a.useContext)(l),c=Object(r.a)(t,12),i=c[0],n=c[1],j=c[2],d=c[3],b=(c[4],c[5],c[6],c[7],c[8]),O=(c[9],c[10]),h=c[11],m=function(){o.a.post("/api/save-favourite",{item:{id:b.id,images:b.images[0],name:b.name,price:b.price},user:j.username}).then((function(e){d(e.data)}))},x=function(){var e=i;e.push({id:L()(),images:b.images,name:b.name,price:b.price,description:b.description}),n(e),h(O+b.price)};return Object(s.jsxs)("div",{className:"item_specific",children:[Object(s.jsxs)("div",{className:"item_description",children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("ul",{children:e.description?e.description.map((function(e){return Object(s.jsx)("li",{children:e})})):""})]}),Object(s.jsxs)(k.a,{children:[Object(s.jsxs)(k.a.Item,{children:[Object(s.jsxs)("span",{children:[e.price,"$"]}),Object(s.jsx)("img",{className:"d-block w-100",src:e.image[0],alt:"First slide"}),Object(s.jsx)("i",{onClick:x,className:"fas fa-cart-plus"}),Object(s.jsx)("i",{className:"fas fa-heart",onClick:m})]}),Object(s.jsxs)(k.a.Item,{children:[Object(s.jsxs)("span",{children:[e.price,"$"]}),Object(s.jsx)("img",{className:"d-block w-100",src:e.image[1],alt:"Second slide"}),Object(s.jsx)("i",{onClick:x,className:"fas fa-cart-plus"}),Object(s.jsx)("i",{onClick:m,className:"fas fa-heart"})]})]})]})};var R=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2],t[3],t[4]),i=(t[5],t[6]),n=(t[7],t[8],t[9]);return Object(a.useEffect)((function(){c&&c.map((function(e){return e.id===i?n(e):""}))}),[]),Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:""!==c?c.map((function(e){return e.id===i?Object(s.jsx)(D,{price:e.price,name:e.name,description:e.description,image:e.images}):""})):""})})};var w=function(e){var t=Object(a.useContext)(l),c=Object(r.a)(t,10),i=(c[0],c[1],c[2]),n=c[3];return c[4],c[5],c[6],c[7],c[8],c[9],Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.index+1}),Object(s.jsx)("td",{className:"img_holder",children:Object(s.jsx)("img",{src:e.image})}),Object(s.jsx)("td",{children:e.name}),Object(s.jsxs)("td",{children:[e.price,"$"]}),Object(s.jsx)("td",{className:e.id,children:Object(s.jsx)("i",{className:"fas fa-trash",onClick:function(e){var t=e.target;o.a.post("/api/remove-favourite",{id:t.parentElement.className,user:i.username}).then((function(e){n(e.data)}))}})})]})};var H=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],Object(s.jsx)("div",{className:"favourite_container",children:Object(s.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(s.jsxs)("thead",{children:[Object(s.jsx)("tr",{children:Object(s.jsx)("th",{className:"heading_col",scope:"col",colspan:"5",children:"Favourites"})}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(s.jsx)("tbody",{children:c?c.favourites.map((function(e,t){return Object(s.jsx)(w,{id:e.id,index:t,image:e.images,name:e.name,price:e.price})})):""})]})})};var P=function(e){var t=Object(a.useContext)(l),c=Object(r.a)(t,12),i=(c[0],c[1],c[2]),n=c[3];return c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:e.index}),Object(s.jsx)("td",{children:e.name}),Object(s.jsxs)("td",{children:[e.amount,"$"]}),Object(s.jsx)("td",{className:e.id,children:Object(s.jsx)("i",{onClick:function(e){var t=e.target;o.a.post("/api/delete-payment",{username:i.username,id:t.parentElement.className}).then((function(e){n(e.data)}))},className:"fas fa-trash"})})]})};var A=function(){var e=Object(a.useContext)(l),t=Object(r.a)(e,12),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],Object(s.jsx)("div",{className:"history_container",children:Object(s.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(s.jsxs)("thead",{children:[Object(s.jsx)("tr",{children:Object(s.jsx)("th",{className:"heading_col",scope:"col",colspan:"5",children:"History"})}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(s.jsx)("tbody",{children:c?c.history.map((function(e,t){return Object(s.jsx)(P,{id:e.id,index:t+1,name:e.description,amount:e.amount.toFixed(2)})})):""})]})})};c(94);var F=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MONGO_DB),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),Object(s.jsx)(d,{children:Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Martin"}),Object(s.jsx)("h3",{children:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MONGO_DB}),Object(s.jsx)(p,{}),Object(s.jsx)(O.a,{path:"/api/profile",component:u}),Object(s.jsx)(O.a,{path:"/api/shop",component:g}),Object(s.jsx)(O.a,{path:"/api/cart",component:T}),Object(s.jsx)(O.a,{path:"/api/item-info",component:R}),Object(s.jsx)(O.a,{path:"/api/favourites",component:H}),Object(s.jsx)(O.a,{path:"/api/purchase-history",component:A})]})})})};n.a.render(Object(s.jsx)(F,{}),document.getElementById("root"))},92:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.d91ed6d0.chunk.js.map