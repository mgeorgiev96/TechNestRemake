(this.webpackJsonpshophut=this.webpackJsonpshophut||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),n=c(23),i=c.n(n),r=c(7),j=c(16),o=c.n(j),l=Object(s.createContext)(),d=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],i=c[1],j=Object(s.useState)(0),d=Object(r.a)(j,2),b=d[0],h=d[1],O=Object(s.useState)(""),m=Object(r.a)(O,2),x=m[0],p=m[1],u=Object(s.useState)(""),v=Object(r.a)(u,2),f=v[0],g=v[1],N=Object(s.useState)(""),_=Object(r.a)(N,2),C=_[0],k=_[1],y=Object(s.useState)(""),S=Object(r.a)(y,2),E=S[0],T=S[1];return Object(s.useEffect)((function(){o.a.get("/api/storage").then((function(e){g(e.data.items),p(e.data.user)}))}),[]),Object(a.jsx)(l.Provider,{value:[n,i,x,p,f,g,C,k,E,T,b,h],children:e.children})},b=c(19),h=c(8),O=c(33),m=c(22),x=c(62);var p=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,12),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],Object(a.jsxs)("div",{className:"navbar_container",children:[Object(a.jsxs)(O.a,{expand:"lg",variant:"dark",children:[Object(a.jsx)(O.a.Brand,{children:Object(a.jsx)(b.b,{to:"/api/profile",children:"Technest"})}),Object(a.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(O.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(m.a,{className:"mr-auto",children:[Object(a.jsxs)(x.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(b.b,{to:"/api/shop",children:"Shop"})}),Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(b.b,{to:"/api/cart",children:"Cart"})}),Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(b.b,{to:"/api/favourites",children:"Favourites"})}),Object(a.jsx)(m.a.Item,{children:Object(a.jsx)(b.b,{to:"/api/purchase-history",children:"Purchase History"})})]}),Object(a.jsx)(m.a.Link,{href:"/api/logout",children:"Logout"})]}),Object(a.jsx)(m.a,{children:Object(a.jsxs)(m.a.Link,{children:["Welcome ",c.name]})})]})]}),Object(a.jsx)("i",{onClick:function(){var e=document.querySelector(".navbar"),t=document.querySelector(".fas");e.classList.contains("navbar_show_toggler")?(e.classList.remove("navbar_show_toggler"),t.style.animation="moveToggler 750ms infinite",t.classList.add("idle_toggler"),t.classList.remove("move_toggler")):(e.classList.add("navbar_show_toggler"),t.style.animation="none",t.classList.remove("idle_toggler"),t.classList.add("move_toggler"))},className:"fas fa-bars idle_toggler"})]})};var u=function(){return Object(a.jsxs)("div",{className:"home_container",children:[Object(a.jsx)("div",{className:"box-with-text",children:"Technest"}),Object(a.jsx)("h1",{children:"where quality meets performance"})]})},v=c(28);var f=function(e){var t=Object(s.useContext)(l),c=Object(r.a)(t,10),n=(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7]);return c[8],c[9],Object(a.jsxs)(v.a,{children:[Object(a.jsx)(v.a.Img,{variant:"top",src:e.image}),Object(a.jsxs)(v.a.Body,{children:[Object(a.jsx)(v.a.Title,{children:e.title}),Object(a.jsx)(v.a.Text,{children:Object(a.jsxs)("strong",{children:[e.price,"$"]})}),Object(a.jsx)(b.b,{className:e.id,onClick:function(e){var t=e.target;n(t.className)},to:"/api/item-info",children:"Read More"})]})]})};var g=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2],t[3],t[4]);return t[5],t[6],t[7],t[8],t[9],Object(a.jsx)("div",{className:"shop_container",children:""!==c?c.map((function(e){return Object(a.jsx)(f,{id:e.id,price:e.price,title:e.name,image:e.images[0]},e.id)})):""})},N=(c(92),c(59)),_=c.n(N);var C=function(e){var t=Object(s.useContext)(l),c=Object(r.a)(t,12),n=c[0],i=c[1],j=(c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10]),o=c[11];return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.index+1}),Object(a.jsx)("td",{className:"img_holder",children:Object(a.jsx)("img",{src:e.image})}),Object(a.jsx)("td",{children:e.name}),Object(a.jsxs)("td",{children:[e.price,"$"]}),Object(a.jsx)("td",{className:e.id,children:Object(a.jsx)("i",{className:"fas fa-trash",onClick:function(e){var t=e.target,c=n,a=c.filter((function(e){return e.id===t.parentElement.className}));c=c.filter((function(e){return e.id!==t.parentElement.className})),i(c),o(j-a[0].price)}})})]})},k=c(60),y=c.n(k);var S=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,12),c=t[0],n=t[1],i=t[2],j=t[3],d=(t[4],t[5],t[6],t[7],t[8],t[9],t[10]),b=t[11];return Object(a.jsx)("div",{className:"cart_container",children:Object(a.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(a.jsxs)("thead",{children:[Object(a.jsx)("tr",{children:Object(a.jsxs)("th",{className:"heading_col",scope:"col",colspan:"5",children:["Total - ",d.toFixed(2),"$ ",Object(a.jsx)("br",{}),Object(a.jsx)(_.a,{className:"stripe_button",token:function(e){o.a.post("/api/payment",{username:i.username,email:e.email,price:d,token:e.id,description:"Transaction made on ".concat(y()(Date.now()).format("LLLL"),".")}).then((function(e){j(e.data),n([]),b(0)}))},stripeKey:"pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2",billingAddress:!0,shippingAddress:!0,description:"TechHut - ".concat(d.toFixed(2),"$"),image:"https://stripe.com/img/documentation/checkout/marketplace.png",amount:100*d,currency:"USD"})]})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"#"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(a.jsx)("tbody",{children:c?c.map((function(e,t){return Object(a.jsx)(C,{id:e.id,index:t,image:e.images[0],name:e.name,price:e.price})})):""})]})})},E=c(44),T=c(61),L=c.n(T);var w=function(e){var t=Object(s.useContext)(l),c=Object(r.a)(t,12),n=c[0],i=c[1],j=c[2],d=c[3],b=(c[4],c[5],c[6],c[7],c[8]),h=(c[9],c[10]),O=c[11],m=function(){o.a.post("/api/save-favourite",{item:{id:b.id,images:b.images[0],name:b.name,price:b.price},user:j.username}).then((function(e){d(e.data)}))},x=function(){var e=n;e.push({id:L()(),images:b.images,name:b.name,price:b.price,description:b.description}),i(e),O(h+b.price)};return Object(a.jsxs)("div",{className:"item_specific",children:[Object(a.jsxs)("div",{className:"item_description",children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("ul",{children:e.description?e.description.map((function(e){return Object(a.jsx)("li",{children:e})})):""})]}),Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(E.a.Item,{children:[Object(a.jsxs)("span",{children:[e.price,"$"]}),Object(a.jsx)("img",{className:"d-block w-100",src:e.image[0],alt:"First slide"}),Object(a.jsx)("i",{onClick:x,className:"fas fa-cart-plus"}),Object(a.jsx)("i",{className:"fas fa-heart",onClick:m})]}),Object(a.jsxs)(E.a.Item,{children:[Object(a.jsxs)("span",{children:[e.price,"$"]}),Object(a.jsx)("img",{className:"d-block w-100",src:e.image[1],alt:"Second slide"}),Object(a.jsx)("i",{onClick:x,className:"fas fa-cart-plus"}),Object(a.jsx)("i",{onClick:m,className:"fas fa-heart"})]})]})]})};var P=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2],t[3],t[4]),n=(t[5],t[6]),i=(t[7],t[8],t[9]);return Object(s.useEffect)((function(){c&&c.map((function(e){return e.id===n?i(e):""}))}),[]),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:""!==c?c.map((function(e){return e.id===n?Object(a.jsx)(w,{price:e.price,name:e.name,description:e.description,image:e.images}):""})):""})})};var A=function(e){var t=Object(s.useContext)(l),c=Object(r.a)(t,10),n=(c[0],c[1],c[2]),i=c[3];return c[4],c[5],c[6],c[7],c[8],c[9],Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.index+1}),Object(a.jsx)("td",{className:"img_holder",children:Object(a.jsx)("img",{src:e.image})}),Object(a.jsx)("td",{children:e.name}),Object(a.jsxs)("td",{children:[e.price,"$"]}),Object(a.jsx)("td",{className:e.id,children:Object(a.jsx)("i",{className:"fas fa-trash",onClick:function(e){var t=e.target;o.a.post("/api/remove-favourite",{id:t.parentElement.className,user:n.username}).then((function(e){i(e.data)}))}})})]})};var I=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,10),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],Object(a.jsx)("div",{className:"favourite_container",children:Object(a.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(a.jsxs)("thead",{children:[Object(a.jsx)("tr",{children:Object(a.jsx)("th",{className:"heading_col",scope:"col",colspan:"5",children:"Favourites"})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"#"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(a.jsx)("tbody",{children:c?c.favourites.map((function(e,t){return Object(a.jsx)(A,{id:e.id,index:t,image:e.images,name:e.name,price:e.price})})):""})]})})};var D=function(e){var t=Object(s.useContext)(l),c=Object(r.a)(t,12),n=(c[0],c[1],c[2]),i=c[3];return c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:e.index}),Object(a.jsx)("td",{children:e.name}),Object(a.jsxs)("td",{children:[e.amount,"$"]}),Object(a.jsx)("td",{className:e.id,children:Object(a.jsx)("i",{onClick:function(e){var t=e.target;o.a.post("/api/delete-payment",{username:n.username,id:t.parentElement.className}).then((function(e){i(e.data)}))},className:"fas fa-trash"})})]})};var F=function(){var e=Object(s.useContext)(l),t=Object(r.a)(e,12),c=(t[0],t[1],t[2]);return t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],Object(a.jsx)("div",{className:"history_container",children:Object(a.jsxs)("table",{className:"table table-bordered border-light table-dark",children:[Object(a.jsxs)("thead",{children:[Object(a.jsx)("tr",{children:Object(a.jsx)("th",{className:"heading_col",scope:"col",colspan:"5",children:"History"})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"#"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",colspan:"2",children:"Price"})]})]}),Object(a.jsx)("tbody",{children:c?c.history.map((function(e,t){return Object(a.jsx)(D,{id:e.id,index:t+1,name:e.description,amount:e.amount.toFixed(2)})})):""})]})})};c(94);var H=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID),Object(a.jsx)(d,{children:Object(a.jsx)(b.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h.a,{path:"/api/profile",component:u}),Object(a.jsx)(h.a,{path:"/api/shop",component:g}),Object(a.jsx)(h.a,{path:"/api/cart",component:S}),Object(a.jsx)(h.a,{path:"/api/item-info",component:P}),Object(a.jsx)(h.a,{path:"/api/favourites",component:I}),Object(a.jsx)(h.a,{path:"/api/purchase-history",component:F})]})})})};i.a.render(Object(a.jsx)(H,{}),document.getElementById("root"))},92:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.83996039.chunk.js.map