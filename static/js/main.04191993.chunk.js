(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{29:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=a(7),u=a(12),i=(a(38),a(8)),s=a(10),m=a(11),d=a(18),E=a(17),f=(a(39),function(e){var t=e.book,a=e.booksAdded,n=t.title,o=t.author,c=t.price,l=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:l,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("h2",{className:"book-title"},n),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},"$",c),r.a.createElement("button",{className:"btn btn-info add-to-cart",onClick:a},"Add to cart")))}),b=(a(40),r.a.createContext()),p=b.Provider,O=b.Consumer,h=function(){return function(e){return function(t){return r.a.createElement(O,null,(function(a){return r.a.createElement(e,Object.assign({},t,{bookstoreService:a}))}))}}},v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},k=function(){return r.a.createElement("div",null,"Loading...")},g=function(){return r.a.createElement("div",null,"Error")},y=function(e){var t=e.books,a=e.booksAdded;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(f,{booksAdded:function(){return a(e)},book:e}))})))},j=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,n=e.error,o=e.booksAdded;return a?r.a.createElement(k,null):n?r.a.createElement(g,null):r.a.createElement(y,{booksAdded:o,books:t})}}]),a}(n.Component),I=v(h(),Object(l.b)((function(e){return{books:e.books,loading:e.loading,error:e.error}}),(function(e,t){return{fetchBooks:function(){e({type:"BOOKS_REQUESTED"}),t.bookstoreService.getBooks().then((function(t){return e({type:"BOOKS_LOADED",payload:t})})).catch((function(t){return e({type:"BOOKS_ERROR",error:t})}))},booksAdded:function(t){return e(function(e){return{type:"BOOKS_ADDED",payload:e}}(t))}}})))(j),D=(a(41),Object(l.b)((function(e){return{items:e.cartItems,total:e.orderTotal}}),(function(e){return{onIncrease:function(t){e(function(e){return{type:"BOOKS_INCREASED",payload:e}}(t))},onDecrease:function(t){e(function(e){return{type:"BOOKS_DECREASED",payload:e}}(t))},onDelete:function(t){e(function(e){return{type:"BOOKS_DELETED",payload:e}}(t))}}}))((function(e){var t=e.items,a=e.total,n=e.onIncrease,o=e.onDecrease,c=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){var a=e.id,l=e.name,u=e.count,i=e.total;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t+1),r.a.createElement("td",null,l),r.a.createElement("td",null,u),r.a.createElement("td",null,"$",i),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(a)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return n(a)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return o(a)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),r.a.createElement("div",{className:"total"},"Total: $",a))}))),S=function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(D,null))},N=function(){return r.a.createElement("div",null,"Cart Page")},B=a(28);a(42);var T=Object(l.b)((function(e){return{numItems:e.cartItems.reduce((function(e,t){return e+t.count}),0),total:e.orderTotal}}))((function(e){var t=e.numItems,a=e.total;Object(B.a)(e,["numItems","total"]);return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(u.b,{to:"/"},r.a.createElement("div",{className:"logo text-dark"},"ReStore")),r.a.createElement(u.b,{to:"/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",a,")")))})),_=function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(T,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:S,exact:!0}),r.a.createElement(i.a,{path:"/cart",component:N})))},A=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(m.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(g,null):this.props.children}}]),a}(n.Component),R=function(){function e(){Object(s.a)(this,e),this.data=[{id:3,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:4,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(m.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){t(e.data)}),1e3)}))}}]),e}(),C=a(16),K=a(6),w=a(23),L={books:[],loading:!0,error:null,cartItems:[],orderTotal:0},P=function(e,t,a,n){return Object(w.a)(e).map((function(e){return e.id===t?Object(K.a)({},e,{count:n?++e.count:--e.count,total:n?e.total+a:e.total-a}):e}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_LOADED":return Object(K.a)({},e,{books:t.payload,loading:!1,error:null});case"BOOKS_REQUESTED":return Object(K.a)({},e,{loading:!0,error:null});case"BOOKS_ERROR":return Object(K.a)({},e,{books:[],loading:!1,error:t.payload});case"BOOKS_ADDED":var a=t.payload,n=a.id,r=a.title,o=a.price,c=e.cartItems.find((function(e){return e.id===n}));return c?Object(K.a)({},e,{cartItems:P(e.cartItems,n,o,!0),orderTotal:e.orderTotal+o}):Object(K.a)({},e,{cartItems:[].concat(Object(w.a)(e.cartItems),[{id:n,name:r,count:1,total:o}]),orderTotal:e.orderTotal+o});case"BOOKS_DELETED":var l,u=e.cartItems.filter((function(e){return t.payload===e.id&&(l=e.total),t.payload!==e.id}));return Object(K.a)({},e,{cartItems:u,orderTotal:e.orderTotal-l});case"BOOKS_INCREASED":var i=e.books.find((function(e){return e.id===t.payload}));return Object(K.a)({},e,{cartItems:P(e.cartItems,i.id,i.price,!0),orderTotal:e.orderTotal+i.price});case"BOOKS_DECREASED":var s=e.books.find((function(e){return e.id===t.payload}));return Object(K.a)({},e,{cartItems:P(e.cartItems,s.id,s.price,!1),orderTotal:e.orderTotal-s.price});default:return e}},J=Object(C.b)(x),$=new R;c.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(A,null,r.a.createElement(p,{value:$},r.a.createElement(u.a,null,r.a.createElement(_,null))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.04191993.chunk.js.map