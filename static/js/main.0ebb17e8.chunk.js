(this.webpackJsonppizzeria=this.webpackJsonppizzeria||[]).push([[0],{43:function(e,t,c){},60:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),a=c(36),n=c.n(a),r=(c(43),c(5)),o=c(6),l=(c(44),c(38)),d=c(15),j=c(14),b=c.n(j),m=c(1),u=Object(s.createContext)(),O=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1];Object(s.useEffect)((function(){null!==localStorage.getItem("cart")&&a(JSON.parse(localStorage.getItem("cart")))}),[]),Object(s.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(i))}),[i]);return Object(m.jsx)(u.Provider,{value:{cart:i,addItem:function(e){0===i.filter((function(t){return t.id===e.id})).length?(b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",b.a.stopTimer),e.addEventListener("mouseleave",b.a.resumeTimer)}}).fire({icon:"success",text:"Agregaste "+e.cantidad+"  "+e.nombre+" en tu carrito."}),a([].concat(Object(l.a)(i),[{id:e.id,nombre:e.nombre,img:e.img,valor:e.valor,cantidad:e.cantidad}]))):b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",b.a.stopTimer),e.addEventListener("mouseleave",b.a.resumeTimer)}}).fire({icon:"warning",text:e.nombre+" ya est\xe1 en el carrito."})},removeItem:function(e){var t=i.filter((function(t){return t.id!==e.id}));b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",b.a.stopTimer),e.addEventListener("mouseleave",b.a.resumeTimer)}}).fire({icon:"warning",text:"Se elimin\xf3 "+e.nombre+" del carrito."}),a(t)},clearCart:function(){b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",b.a.stopTimer),e.addEventListener("mouseleave",b.a.resumeTimer)}}).fire({icon:"warning",text:"Se eliminaron todos los items del carrito."}),a([])}},children:e.children})},h=c(18),x=c(17),p=(c(60),function(){var e=Object(s.useContext)(u);return Object(m.jsx)("div",{className:"button is-primary is-outlined",children:Object(m.jsxs)(r.b,{to:"/cart",children:[Object(m.jsx)(x.a,{icon:h.b}),e.cart.length>0&&Object(m.jsx)("span",{className:"ml-1",children:e.cart.length})]})})}),v=c.p+"static/media/logo.5f9d5f69.png",f=(c(63),function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("nav",{className:"navbar py-2","aria-label":"main navigation",children:[Object(m.jsxs)("div",{className:"navbar-brand",children:[Object(m.jsxs)(r.b,{to:"/",className:"navbar-item",children:[" ",Object(m.jsx)("img",{src:v,alt:"La Pizzeria",className:"image"})," "]}),Object(m.jsxs)("button",{className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",children:[Object(m.jsx)("span",{"aria-hidden":"true"}),Object(m.jsx)("span",{"aria-hidden":"true"}),Object(m.jsx)("span",{"aria-hidden":"true"})]})]}),Object(m.jsxs)("div",{className:"navbar-menu",children:[Object(m.jsxs)("div",{className:"navbar-start",children:[Object(m.jsx)(r.b,{to:"/categoria/pizza",className:"navbar-item",children:" Pizzas "}),Object(m.jsx)(r.b,{to:"/categoria/bebidas",className:"navbar-item",children:" Bebidas "}),Object(m.jsx)(r.b,{to:"/categoria/postre",className:"navbar-item",children:" Postres "})]}),Object(m.jsx)("div",{className:"navbar-end",children:Object(m.jsx)("div",{className:"navbar-item",children:Object(m.jsx)(p,{})})})]})]})})}),N=c(10),g=(c(64),function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"spinner",children:[Object(m.jsx)("div",{className:"bounce1"}),Object(m.jsx)("div",{className:"bounce2"}),Object(m.jsx)("div",{className:"bounce3"})]})})}),_=function(e){var t=e.item;return Object(m.jsx)("div",{className:"column column is-half-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd",children:Object(m.jsxs)("div",{className:"card p-4 has-text-centered is-wide",children:[Object(m.jsx)(r.b,{to:"/producto/".concat(t.id),children:Object(m.jsx)("figure",{className:"image",children:Object(m.jsx)("img",{src:t.img,alt:t.nombre,className:"card__img"})})}),Object(m.jsxs)("div",{className:"item__descripcion p-3",children:[Object(m.jsxs)("p",{className:"item__descripcion__titulo card-header-title is-centered",children:[" ",t.nombre," "]}),Object(m.jsxs)("p",{className:"item__descripcion__valor",children:[" $",t.valor]})]}),Object(m.jsx)(r.b,{to:"/producto/".concat(t.id),className:"button is-primary",children:"ver m\xe1s"})]})})},z=c(31);c(69),z.a.initializeApp({apiKey:"AIzaSyDIV1DwURtiFmARHPwsxntGI7ecoObfxXo",authDomain:"react-animales-michael.firebaseapp.com",projectId:"react-animales-michael",storageBucket:"react-animales-michael.appspot.com",messagingSenderId:"919456584079",appId:"1:919456584079:web:6208f102d57da421d37bfa"});var C=z.a.firestore(),w=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(o.f)().catId;return Object(s.useEffect)((function(){i([]);var e=C.collection("productos");a?e.where("categoria","==",a).get().then((function(e){return i(e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})})))})):e.get().then((function(e){return i(e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})})))}))}),[a]),c.length?Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"columns is-mobile is-multiline",children:c.map((function(e){return Object(m.jsx)(_,{item:e},e.id)}))})}):Object(m.jsx)(g,{})};var k=function(e){var t=e.count,c=e.setCount,s=e.initial,i=e.stock;return Object(m.jsxs)("div",{className:"columns py-4",children:[Object(m.jsx)("div",{className:"column",children:Object(m.jsx)("button",{onClick:function(){t>s&&c(t-1)},className:"button",children:"-"})}),Object(m.jsx)("div",{className:"column",children:Object(m.jsx)("p",{children:t})}),Object(m.jsx)("div",{className:"column",children:Object(m.jsx)("button",{onClick:function(){t<i&&c(t+1)},className:"button",children:"+"})})]})},S=function(e){var t=e.item,c=e.count,i=e.setCount,a=Object(s.useContext)(u).addItem;return Object(m.jsx)("div",{className:"container",children:404===t?Object(m.jsx)("div",{className:"columns",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"title is-2",children:"404"}),Object(m.jsx)("h3",{children:"Producto no encontrado."}),Object(m.jsxs)(r.b,{to:"/",className:"button is-success",children:[Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)(x.a,{icon:h.a})}),Object(m.jsx)("span",{children:"volver"})]})]})}):Object(m.jsxs)("div",{className:"columns",children:[Object(m.jsx)("div",{className:"column is-one-third",children:Object(m.jsx)("figure",{className:"image",children:Object(m.jsx)("img",{src:t.img,alt:t.nombre})})}),Object(m.jsxs)("div",{className:"column",children:[Object(m.jsx)("p",{className:"is-size-2 is-uppercasehas-text-weight-bold mn-3",children:t.nombre}),Object(m.jsxs)("p",{className:"",children:["$",t.valor]}),Object(m.jsxs)("p",{children:["Stock: ",t.stock]}),Object(m.jsx)("p",{className:"my-6",children:t.descripcion}),Object(m.jsx)(k,{initial:1,stock:t.stock,count:c,setCount:i}),Object(m.jsx)("button",{onClick:function(){return a(Object(N.a)(Object(N.a)({},t),{},{cantidad:c}))},className:"button is-primary",children:"Agregar al Carrito"})]})]})})},y=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(!0),n=Object(d.a)(a,2),r=n[0],l=n[1],j=Object(s.useState)(1),b=Object(d.a)(j,2),u=b[0],O=b[1],h=Object(o.f)();return Object(s.useEffect)((function(){C.collection("productos").doc(h.id).get().then((function(e){e.exists?i(Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})):i(404)})).catch((function(e){return console.log("Error: "+e)})).finally((function(){return l(!1)}))}),[h]),Object(m.jsx)("section",{className:"section",children:Object(m.jsx)(S,{loading:r,item:c,count:u,setCount:O})})},E=(c(65),function(e){var t=e.title,c=e.subtitle,i=Object(s.useState)([]),a=Object(d.a)(i,2),n=a[0],o=a[1];return C.collection("productos").where("categoria","==","pizza").limit(4).get().then((function(e){return o(e.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{id:e.id})})))})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("section",{className:"hero is-large is-black has-background",children:[Object(m.jsx)("img",{className:"hero-background is-transparent",src:"https://firebasestorage.googleapis.com/v0/b/react-animales-michael.appspot.com/o/pizzeria%2Fpizza-5179939_960_720.jpg?alt=media&token=b68d8e29-2c14-4fbf-a0b3-e8734f8367c5",alt:"Hero"}),Object(m.jsx)("div",{className:"hero-body",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:t}),Object(m.jsx)("h3",{className:"subtitle",children:c})]})})]}),Object(m.jsx)("section",{className:"section",children:n.length?Object(m.jsx)("div",{className:"columns is-mobile is-multiline",children:n.map((function(e){return Object(m.jsx)("div",{item:e,className:"column column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd",children:Object(m.jsxs)("div",{className:"card p-4 has-text-centered is-wide",children:[Object(m.jsx)(r.b,{to:"/producto/".concat(e.id),children:Object(m.jsx)("figure",{className:"image",children:Object(m.jsx)("img",{src:e.img,alt:e.nombre,className:"card__img"})})}),Object(m.jsxs)("div",{className:"item__descripcion p-3",children:[Object(m.jsxs)("p",{className:"item__descripcion__titulo card-header-title is-centered",children:[" ",e.nombre," "]}),Object(m.jsxs)("p",{className:"item__descripcion__valor",children:[" $",e.valor]})]}),Object(m.jsx)(r.b,{to:"/producto/".concat(e.id),className:"button is-primary",children:"ver m\xe1s"})]})},e.id)}))}):Object(m.jsx)(g,{})})]})}),I=(c(66),function(e){var t=e.item,c=Object(s.useContext)(u).removeItem;return Object(m.jsx)("table",{class:"table is-narrow is-fullwidth",children:Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:t.img,alt:t.nombre,className:"image is-48x48"})}),Object(m.jsx)("td",{children:Object(m.jsx)(r.b,{to:"/producto/".concat(t.id),children:t.nombre})}),Object(m.jsx)("td",{children:t.cantidad}),Object(m.jsxs)("td",{children:["$",t.valor]}),Object(m.jsxs)("td",{children:["$",t.cantidad*t.valor]}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{class:"button is-danger",onClick:function(){return c(t)},children:Object(m.jsx)("span",{class:"icon is-small",children:Object(m.jsx)(x.a,{icon:h.c})})})})]})})})}),B=function(){var e=Object(s.useContext)(u),t=e.cart,c=e.clearCart,i=Object(s.useState)(0),a=Object(d.a)(i,2),n=a[0],o=a[1];return Object(s.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.valor*t.cantidad})),o(e)}),[t]),Object(m.jsx)("section",{className:"section",children:t.length?Object(m.jsxs)("div",{className:"container mt-6",children:[Object(m.jsx)("div",{className:"my-6",children:Object(m.jsx)("p",{className:"title is-2",children:"Mi pedido:"})}),Object(m.jsx)("div",{className:"container",children:t.map((function(e){return Object(m.jsx)(I,{item:e},e.id)}))}),Object(m.jsx)("div",{className:"columns is-mobile",children:Object(m.jsx)("div",{className:"column is-three-fifths is-offset-one-fifth mt-6",children:Object(m.jsxs)("div",{className:"columns ",children:[Object(m.jsxs)("div",{className:"column",children:["Total : $",n]}),Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("button",{className:"button is-danger is-outlined",onClick:function(){return c()},children:[Object(m.jsx)("span",{children:"Vaciar Carro"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)(x.a,{icon:h.c})})]})}),Object(m.jsx)("div",{className:"column",children:Object(m.jsxs)("button",{className:"button is-success",onClick:function(){return c()},children:[Object(m.jsx)("span",{children:"Comprar"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)(x.a,{icon:h.b})})]})})]})})})]}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"my-6",children:Object(m.jsx)("p",{className:"title is-2",children:"Carrito vac\xedo"})}),Object(m.jsxs)(r.b,{to:"/",className:"button is-success",children:[Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)(x.a,{icon:h.a})}),Object(m.jsx)("span",{children:"volver"})]})]})})};c(67);function L(e){var t=e.copy;return Object(m.jsx)("div",{className:"footer",children:t})}var P=function(){return Object(m.jsxs)(O,{children:[Object(m.jsxs)(r.a,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(E,{title:"Lo mejor en pizzas.",subtitle:"\xa1Somos una pizzer\xeda al paso donde podr\xe1s encontrar las mejores pizzas artesanales de Santiago!"})}),Object(m.jsx)(o.a,{path:"/categoria/:catId",children:Object(m.jsx)(w,{})}),Object(m.jsx)(o.a,{path:"/producto/:id",children:Object(m.jsx)(y,{})}),Object(m.jsx)(o.a,{path:"/cart",children:Object(m.jsx)(B,{})})]})]}),Object(m.jsx)(L,{copy:"Desarrollado por Michael Robinson"})]})};n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.0ebb17e8.chunk.js.map