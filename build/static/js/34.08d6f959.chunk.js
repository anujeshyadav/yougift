(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[34],{556:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(6),c=a(179);t.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(c.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},559:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(a(568)),n=c(a(561)),o=c(a(570));function c(e){return e&&e.__esModule?e:{default:e}}var l=n.default;t.default=l},561:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=l(a(3)),o=l(a(34)),c=a(569);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,g,y=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var r=Array.prototype.slice.call(a.children),n=document.head,o=n.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(n,a)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(n,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(n,o)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(a.prototype,n),l&&s(a,l),t}(r.Component);p=y,b="contextTypes",g={extract:n.default.func},b in p?Object.defineProperty(p,b,{value:g,enumerable:!0,configurable:!0,writable:!0}):p[b]=g;var h=y;t.default=h,e.exports=t.default},568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=a(0),o=(r=a(3))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return n.Children.only(this.props.children)}}])&&i(a.prototype,r),o&&i(a,o),t}(n.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(f,"childContextTypes",{extract:o.default.func});var d=f;t.default=d,e.exports=t.default},569:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,r=[],c=[];return e.forEach((function(e){var n=e.type,o=e.props;"title"===n?t=e:"link"===n&&"canonical"===o.rel?a=e:"meta"===n?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var a=[],r=function(r){var c=e[r],l=c.props.id;(l?!t.id[l]:0===n.filter((function(e){var a=c.props[e],r=t[e][a];return r&&!r.props.id})).length)&&(a.unshift(c),o.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)r(c);return a}(r)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return r.reduce((function(a,r){var n,o=e.getAttribute(r);return o?a.concat((n=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(n=Array.prototype.slice.call(n||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),r=0,n=t.length;r<n;r++)a.appendChild(t[r]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,r=t.length;a<r;a++)e.removeChild(t[a])};var r=["property","name","itemprop"],n=r.concat(["itemProp"]),o=n.concat(["id"])},570:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}(a(0)),n=c(a(3)),o=c(a(561));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,g=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(a.prototype,n),c&&u(a,c),t}(r.Component);d=g,p="propTypes",b={title:n.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var y=g;t.default=y,e.exports=t.default},582:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=(a(178),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return n.a.createElement("div",{className:"shop-top-bar mb-35"},n.a.createElement("div",{className:"select-shoing-wrap"},n.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,c=e.productCount,l=e.sortedProductCount;return n.a.createElement(r.Fragment,null,n.a.createElement(o,{getLayout:t,getFilterSortParams:a,productCount:c,sortedProductCount:l}))}},586:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(178),c=function(){return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),n.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},n.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},n.a.createElement("input",{type:"text",placeholder:"Search here..."}),n.a.createElement("button",null,n.a.createElement("i",{className:"pe-7s-search"})))))},l=function(e){var t=e.categories,a=e.getSortParams,r=e.cb;return n.a.createElement("div",{className:"sidebar-widget"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),n.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("category",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){console.log(e._id),r(e._id),a("category",e),Object(o.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},i=function(e){var t=e.colors,a=e.getSortParams,r=e.getonecolor;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("color",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(t){r(e._id),console.log(e._id),a("color",e),Object(o.h)(t)}},n.a.createElement("span",{className:"checkmark"}),n.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},u=function(e){var t=e.sizes,a=e.getSortParams,r=e.getonesize;return n.a.createElement("div",{className:"sidebar-widget mt-40"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),n.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{onClick:function(e){a("size",""),Object(o.h)(e)}},n.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("div",{className:"sidebar-widget-list-left"},n.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),r(e._id),a("size",e),Object(o.h)(t)}}," ",n.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},s=function(e){var t=e.tags,a=e.getSortParams,r=e.getonetag;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e),a("tag",e),Object(o.h)(t)}},e))}))):"No tags found"))},m=function(e){var t=e.brands,a=e.getSortParams,r=e.getonebrand;return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("button",{onClick:function(t){r(e._id),a("brands",e),Object(o.h)(t)}},e.name))}))):"No brands found"))},f=a(40),d=a(684),p=a(682);function b(e){return"".concat(e,"\xb0C")}var g=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=n.a.useState([1,90]),r=Object(f.a)(a,2),o=r[0],c=r[1];return n.a.createElement("div",{className:"sidebar-widget mt-50"},n.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),n.a.createElement("div",{className:"sidebar-widget-tag mt-25"},n.a.createElement(d.a,null,n.a.createElement(p.a,{getAriaLabel:function(){return"Price range"},value:o,scale:function(e){return 25*e},onChange:function(e,a){c(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:b}))))};t.a=function(e){var t=e.products,a=e.getSortParams,r=e.sideSpaceClass,f=e.colors,d=e.sizes,p=e.category,b=e.tags,y=e.brand,h=e.callback,v=e.tagcallback,E=e.colorcallback,O=e.sizecallback,j=e.brandcallback,N=e.pricerange;Object(o.b)(t),Object(o.c)(t),Object(o.f)(t),Object(o.d)(t);return n.a.createElement("div",{className:"sidebar-style ".concat(r||"")},n.a.createElement(c,null),n.a.createElement(g,{tags:b,getSortParams:a,priceobj:function(e){N(e),console.log(e)}}),n.a.createElement(s,{tags:b,getSortParams:a,getonetag:function(e){v(e),console.log(e)}}),n.a.createElement(i,{colors:f,getSortParams:a,getonecolor:function(e){E(e),console.log(e)}}),n.a.createElement(u,{sizes:d,getSortParams:a,getonesize:function(e){O(e),console.log(e)}}),n.a.createElement(m,{brands:y,getSortParams:a,getonebrand:function(e){j(e),console.log(e)}}),n.a.createElement(l,{categories:p,getSortParams:a,cb:function(e){h(e),console.log(e)}}))}},828:function(e,t,a){"use strict";a.r(t);var r=a(49),n=a.n(r),o=a(78),c=a(40),l=a(0),i=a.n(l),u=a(559),s=a.n(u),m=a(584),f=a(179),d=a(43),p=a(6),b=a(178),g=a(181),y=a(556),h=(a(586),a(582),a(104));t.default=Object(d.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,r=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),u=e.spaceBottomClass,d=e.colorClass,v=e.titlePriceClass,E=(Object(h.useToasts)().addToast,Object(l.useState)("grid two-column")),O=Object(c.a)(E,2),j=O[0],N=(O[1],Object(l.useState)("")),w=Object(c.a)(N,2),P=w[0],C=(w[1],Object(l.useState)("")),S=Object(c.a)(C,2),_=S[0],k=(S[1],Object(l.useState)("")),x=Object(c.a)(k,2),T=x[0],M=(x[1],Object(l.useState)("")),A=Object(c.a)(M,2),D=A[0],z=(A[1],Object(l.useState)(0)),L=Object(c.a)(z,2),F=L[0],I=L[1],R=Object(l.useState)(1),q=Object(c.a)(R,2),B=q[0],H=q[1],J=Object(l.useState)([]),U=Object(c.a)(J,2),W=(U[0],U[1]),V=Object(l.useState)([]),G=Object(c.a)(V,2),K=G[0],Q=G[1],X=t.pathname;Object(l.useEffect)((function(){var e=Object(b.g)(a,P,_),t=Object(b.g)(e,T,D);Q(e=t),W(e.slice(F,F+16))}),[F,a,P,_,T,D]);var Y=Object(l.useState)([]),Z=Object(c.a)(Y,2),$=Z[0],ee=Z[1];return Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.134.118/api/admin/getproductbytagname/Men");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ee(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.a.createElement(l.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"Flone | Shop Page"),i.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),i.a.createElement(f.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(f.BreadcrumbsItem,{to:""+X},"Shop"),i.a.createElement(g.a,{headerTop:"visible"},i.a.createElement(y.a,null),i.a.createElement("div",{className:"shop-area pt-95 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"shop-bottom-area mt-35"},i.a.createElement("div",{className:"row ".concat(j||"")},i.a.createElement(l.Fragment,null,$.map((function(e){return i.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(r||""),key:e._id},i.a.createElement("div",{className:"product-wrap-2 ".concat(u||""," ").concat(d||""," ")},i.a.createElement("div",{className:"product-img"},i.a.createElement(p.b,{to:"/product-sticky/"+e._id},i.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"250px",height:"300px"}}),i.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"250px",height:"300px"}})),i.a.createElement("div",{className:"product-action-2"})),i.a.createElement("div",{className:"product-content-2"},i.a.createElement("div",{className:"title-price-wrap-2 ".concat(v||"")},i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/product/"+e._id},e.product_name)),i.a.createElement("div",{className:"price-2"},i.a.createElement(l.Fragment,null,i.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),i.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},i.a.createElement(m.a,{totalRecords:K.length,pageLimit:16,pageNeighbours:2,setOffset:I,currentPage:B,setCurrentPage:H,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=34.08d6f959.chunk.js.map