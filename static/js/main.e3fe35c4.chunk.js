(this["webpackJsonppizza-app"]=this["webpackJsonppizza-app"]||[]).push([[0],{16:function(e,c,t){},19:function(e,c,t){},21:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var i=t(0),a=t(1),r=t.n(a),s=t(22),n=t.n(s),l=t(9),j=t(13),o=(t(19),t(7));var p=function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{className:"navList",children:[Object(i.jsx)("li",{className:"signiture",children:"BDM"}),Object(i.jsx)(o.b,{to:"",style:{textDecoration:"none"},children:Object(i.jsx)("li",{className:"menu",children:"Menu"})}),Object(i.jsx)(o.b,{to:"/order",style:{textDecoration:"none"},children:Object(i.jsxs)("li",{className:"cart",children:["My Cart",Object(i.jsx)("span",{})," "]})})]})})};var d=function(){var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],r=c[1],s="PizzaList";Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(s));e&&r(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(s,JSON.stringify(t))}),[t]);var n="(".concat(t.length,")");return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"navBar",children:[Object(i.jsx)(p,{}),n]}),Object(i.jsxs)("div",{className:"top-wrapper",children:[Object(i.jsx)("h2",{children:"Imagineria's Pizzaria"}),Object(i.jsx)("h4",{children:" 54450009 N Colorado Street Miami Florida "}),Object(i.jsx)("h4",{children:"(555) 555-5555"})]}),Object(i.jsxs)("div",{className:"mid-wrapper",children:[Object(i.jsxs)("div",{className:"mid-wrap",children:[Object(i.jsxs)("div",{className:"pizza1",children:[Object(i.jsx)("h4",{className:"Left",children:"Spicy Pepperoni Pizza"}),Object(i.jsx)("img",{className:"p1",src:"./img/p1.jpg"}),Object(i.jsx)("p",{children:"Jalepenos, Pepperoni & Ham, 16 inch - $9.45 "}),Object(i.jsx)("button",{className:"leftbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Spicy Pepperoni Pizza",price:9.45}])}))},children:"Add to Cart"})]}),Object(i.jsxs)("div",{className:"pizza2",children:[Object(i.jsx)("h4",{className:"Right",children:"Specialty Pizza Rolls"}),Object(i.jsx)("img",{className:"p2",src:"./img/P roll 1.jpg"}),Object(i.jsx)("p",{children:"Limited time Specialty Pizza Rolls - $5.45"}),Object(i.jsx)("button",{className:"rightbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Specialty Pizza Rolls",price:5.45}])}))},children:"Add to Cart"})]})]}),Object(i.jsxs)("div",{className:"mid-wrap",children:[Object(i.jsxs)("div",{className:"pizza3",children:[Object(i.jsx)("h4",{className:"Left",children:"Vegan Pizza"}),Object(i.jsx)("img",{className:"p1",src:"./img/p6.jpg"}),Object(i.jsx)("p",{children:"Vegan Cheese, Tomatoes & Spinach - $8.45"}),Object(i.jsx)("button",{className:"leftbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Vegan Pizza",price:8.45}])}))},children:"Add to Cart"})]}),Object(i.jsxs)("div",{className:"pizza4",children:[Object(i.jsx)("h4",{className:"Right",children:"Cheese Pizza"}),Object(i.jsx)("img",{className:"p2",src:"./img/p2.jpg"}),Object(i.jsx)("p",{children:"The Simple but Classic - $7.45"}),Object(i.jsx)("button",{className:"rightbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Cheese Pizza",price:7.45}])}))},children:"Add to Cart"})]})]}),Object(i.jsxs)("div",{className:"mid-wrap",children:[Object(i.jsxs)("div",{className:"pizza5",children:[Object(i.jsx)("h4",{className:"Left",children:"Olive & Kale Pizza"}),Object(i.jsx)("img",{className:"p1",src:"./img/p5.jpg"}),Object(i.jsx)("p",{children:"Olives $ Kale - $9.75"}),Object(i.jsx)("button",{className:"leftbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Olive & Kale Pizza",price:9.75}])}))},children:"Add to Cart"})]}),Object(i.jsxs)("div",{className:"pizza6",children:[Object(i.jsx)("h4",{className:"Right",children:"Chef's Special 50/50"}),Object(i.jsx)("img",{className:"p2",src:"./img/p4.jpg"}),Object(i.jsx)("p",{children:"Chef's Special Assortment of Veggies - $10.45"}),Object(i.jsx)("button",{className:"rightbutton",onClick:function(e){r((function(e){return[].concat(Object(l.a)(e),[{name:"Chef's Specialty Pizza",price:10.45}])}))},children:"Add to Cart"})]})]})]}),Object(i.jsx)("div",{className:"bottom-wrapper",children:Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("p",{children:"About us"}),Object(i.jsx)("p",{children:"Contact us"})]})})]})})};t(16);var b=function(){var e=JSON.parse(localStorage.getItem("PizzaList")),c=e.length;if(c<=0){return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",0]})}if(c<=1&&c>0){var t=e[0].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",t.toFixed(2)]})}if(c<=2&&c>1){var a=e[0].price+e[1].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",a.toFixed(2)]})}if(c<=3&&c>2){var r=e[0].price+e[1].price+e[2].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",r.toFixed(2)]})}if(c<=4&&c>3){var s=e[0].price+ +e[1].price+e[2].price+e[3].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",s.toFixed(2)]})}if(c<=5&&c>4){var n=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",n.toFixed(2)]})}if(c<=6&&c>5){var l=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",l.toFixed(2)]})}if(c<=7&&c>6){var j=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",j.toFixed(2)]})}if(c<=8&&c>7){var o=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",o.toFixed(2)]})}if(c<=9&&c>8){var p=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price+e[8].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",p.toFixed(2)]})}if(c<=10&&c>9){var d=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price+e[8].price+e[9].price;return Object(i.jsxs)("div",{className:"o-total",children:["Total = $",d.toFixed(2)]})}if(c>10)return Object(i.jsx)("div",{children:"Total exeeds allowed order amount. "})},h=function(){var e=JSON.parse(localStorage.getItem("PizzaList"));return null===e||0===e.length?Object(i.jsx)("div",{className:"empty",children:"Your Cart is Empty "}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{class:"clear",children:Object(i.jsx)("button",{onClick:function(){localStorage.removeItem("PizzaList"),window.location.reload(!1)},children:"Clear All "})}),Object(i.jsxs)("div",{className:"pizzaList",children:[e.map((function(e){return Object(i.jsxs)("div",{className:"pizzaList2",children:[e.name," - $",e.price]})})),Object(i.jsx)(b,{}),Object(i.jsx)("div",{class:"o-order-buttn",children:Object(i.jsx)("nav",{children:Object(i.jsx)(o.b,{to:"orderForm",style:{textDecoration:"none"},children:Object(i.jsx)("p",{class:"order",children:"Checkout"})})})})]})]})};var x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{class:"o-container",children:[Object(i.jsx)("div",{class:"navBar",children:Object(i.jsx)(p,{})}),Object(i.jsxs)("div",{class:"o-top-wrapper",children:[Object(i.jsx)("h3",{children:"Your Cart"}),Object(i.jsx)("p",{children:"(10 items max)"})]}),Object(i.jsx)("div",{class:"o-mid-wrapper",id:"mw",children:Object(i.jsx)(h,{})})]}),Object(i.jsxs)("div",{className:"o-footer",children:[Object(i.jsx)("p",{children:"About us"}),Object(i.jsx)("p",{children:"Contact us"})]})]})};t(21);var m=function(){var e=JSON.parse(localStorage.getItem("PizzaList")),c=e.length;if(c<=0){return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",0]})}if(c<=1&&c>0){var t=e[0].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",t.toFixed(2)]})}if(c<=2&&c>1){var a=e[0].price+e[1].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",a.toFixed(2)]})}if(c<=3&&c>2){var r=e[0].price+e[1].price+e[2].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",r.toFixed(2)]})}if(c<=4&&c>3){var s=e[0].price+ +e[1].price+e[2].price+e[3].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",s.toFixed(2)]})}if(c<=5&&c>4){var n=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",n.toFixed(2)]})}if(c<=6&&c>5){var l=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",l.toFixed(2)]})}if(c<=7&&c>6){var j=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",j.toFixed(2)]})}if(c<=8&&c>7){var o=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",o.toFixed(2)]})}if(c<=9&&c>8){var p=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price+e[8].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",p.toFixed(2)]})}if(c<=10&&c>9){var d=e[0].price+e[1].price+e[2].price+e[3].price+e[4].price+e[5].price+e[6].price+e[7].price+e[8].price+e[9].price;return Object(i.jsxs)("div",{className:"payment-total",children:["Total = $",d.toFixed(2)]})}};var O=function(){var e=Object(a.useState)(""),c=Object(j.a)(e,2),t=c[0],r=c[1],s=function(e){r(e.target.value)};return"Visa"===t?Object(i.jsxs)("div",{className:"payment-wrap",children:[Object(i.jsx)("div",{className:"radio-buttons",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("p",{children:"Payment Method"}),Object(i.jsx)("input",{type:"radio",value:"Cash",id:"Cash",onChange:s,name:"payment"}),Object(i.jsx)("label",{for:"Cash",children:" Cash "}),Object(i.jsx)("input",{type:"radio",value:"Visa",id:"Visa",onChange:s,name:"payment"}),Object(i.jsx)("label",{for:"Visa",children:" Visa "})]})}),Object(i.jsxs)("div",{className:"CC-info",children:[Object(i.jsx)("label",{children:" Full Name -"}),Object(i.jsx)("input",{placeholder:"Full Name",className:"inp"}),Object(i.jsx)("label",{children:" Card # - "}),Object(i.jsx)("input",{placeholder:"Credit-Card #",className:"inp"}),Object(i.jsx)("label",{children:" CVC # - "}),Object(i.jsx)("input",{placeholder:"Credit-Card #",className:"inp"})]})]}):Object(i.jsx)("div",{className:"payment-wrap",children:Object(i.jsx)("div",{className:"radio-buttons",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("p",{children:"Payment Method"}),Object(i.jsx)("input",{type:"radio",value:"Cash",id:"Cash",onChange:s,name:"payment"}),Object(i.jsx)("label",{for:"Cash",children:" Cash "}),Object(i.jsx)("input",{type:"radio",value:"Visa",id:"Visa",onChange:s,name:"payment"}),Object(i.jsx)("label",{for:"Visa",children:" Visa "})]})})})};var u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"total-page",children:[Object(i.jsx)("div",{className:"top-wrap",children:Object(i.jsx)("h1",{children:"Payment"})}),Object(i.jsx)(O,{}),Object(i.jsxs)("div",{className:"info-wrap",children:[Object(i.jsx)("label",{children:" Full Name -"}),Object(i.jsx)("input",{placeholder:"Full Name",className:"inp"}),Object(i.jsx)("label",{children:" Address -"}),Object(i.jsx)("input",{placeholder:"Address / Appt #",className:"inp"}),Object(i.jsx)("label",{children:" Phone # -"}),Object(i.jsx)("input",{placeholder:"Phone #",className:"inp"})]}),Object(i.jsx)("div",{className:"sub-order",children:Object(i.jsx)("nav",{children:Object(i.jsx)(o.b,{to:"orderComplete",style:{textDecoration:"none"},children:Object(i.jsx)("p",{class:"complete",children:"Complete Order"})})})}),Object(i.jsx)(m,{})]})})};t(34);var v=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"thank-mssg",children:[Object(i.jsx)("h2",{children:"Your Order has been completed"}),Object(i.jsx)("p",{children:"Expect delivery in approximately 30 minutes"}),Object(i.jsx)("p",{children:"Thank you for choosing Imagineria's Pizzaria"})]})})},N=t(2);var f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)("div",{class:"kk",children:Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{path:"/",exact:!0,component:d}),Object(i.jsx)(N.a,{path:"/order",exact:!0,component:x}),Object(i.jsx)(N.a,{path:"/orderForm",exact:!0,component:u}),Object(i.jsx)(N.a,{path:"/orderComplete",exact:!0,component:v})]})})})})};n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e3fe35c4.chunk.js.map