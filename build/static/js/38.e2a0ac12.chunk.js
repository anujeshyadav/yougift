(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[38],{552:function(e,t,a){"use strict";e.exports=a(581)},556:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(6),l=a(179);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},565:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],n=0;n<5;n++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:n}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return r.a.createElement(c.Fragment,null,a)}},577:function(e,t,a){"use strict";var c=a(40),r=a(0),n=a.n(r),l=a(571),o=a.n(l),s=a(863),i=a(565),m=a(43);t.a=Object(m.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,l=e.discountedprice,m=e.finalproductprice,d=e.finaldiscountedprice,u=Object(r.useState)(null),p=Object(c.a)(u,2),E=p[0],f=p[1],v=Object(r.useState)(null),b=Object(c.a)(v,2),g=b[0],N=b[1],h=Object(r.useState)(t.data?t.data[0].color:""),y=Object(c.a)(h,2),w=y[0],O=y[1],j=Object(r.useState)(t.data?t.data[0].size[0].stock:t.stock),C=Object(c.a)(j,2),k=C[0],S=C[1],x=Object(r.useState)(1),_=Object(c.a)(x,2),P=_[0],T=_[1],F=e.wishlistitem,B=e.compareitem,I=e.addtocart,A=e.addtowishlist,L=e.addtocompare,D=e.addtoast;e.cartitems,Object(r.useEffect)((function(){null!==E&&E.controller&&null!==g&&g.controller&&(E.controller.control=g,g.controller.control=E)}),[E,g]);var z={getSwiper:f,spaceBetween:10,loopedSlides:4,loop:!0},R={getSwiper:N,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement(r.Fragment,null,n.a.createElement(s.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},n.a.createElement(s.a.Header,{closeButton:!0}),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-large-image-wrapper"},n.a.createElement(o.a,z,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"product-small-image-wrapper mt-15"},n.a.createElement(o.a,R,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))}))))),n.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-details-content quickview-content"},n.a.createElement("h2",null,t.name),n.a.createElement("div",{className:"product-details-price"},null!==l?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+d)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+m)):n.a.createElement("span",null,a.currencySymbol+m," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"pro-details-rating-wrap"},n.a.createElement("div",{className:"pro-details-rating"},n.a.createElement(i.a,{ratingValue:t.rating}))):"",n.a.createElement("div",{className:"pro-details-list"},n.a.createElement("p",null,t.shortDescription)),t.data?n.a.createElement("div",{className:"pro-details-size-color"},n.a.createElement("div",{className:"pro-details-color-wrap"},n.a.createElement("span",null,"Color"),n.a.createElement("div",{className:"pro-details-color-content"},t.data.map((function(e,t){return n.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},n.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===w?"checked":"",onChange:function(){O(e.color),S(e.size[0].stock),T(1)}}),n.a.createElement("span",{className:"checkmark"}))})))),n.a.createElement("div",{className:"pro-details-size"},n.a.createElement("span",null,"Size"),n.a.createElement("div",{className:"pro-details-size-content"},t.data&&t.data.map((function(e){return e.color===w?e.size.map((function(e,t){return n.a.createElement("label",{className:"pro-details-size-content--single",key:t},n.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"pro-details-cart btn-hover"},n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{onClick:function(){return T(P>1?P-1:1)},className:"dec qtybutton"},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:P,readOnly:!0}),n.a.createElement("button",{className:"inc qtybutton"},"+")),n.a.createElement("div",{className:"pro-details-cart btn-hover"},k&&k>0?n.a.createElement("button",{onClick:function(){return I(t,D,P,w)}}," ","Add To Cart"," "):n.a.createElement("button",{disabled:!0},"Out of Stock")),n.a.createElement("div",{className:"pro-details-wishlist"},n.a.createElement("button",{className:void 0!==F?"active":"",disabled:void 0!==F,title:void 0!==F?"Added to wishlist":"Add to wishlist",onClick:function(){return A(t,D)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-details-compare"},n.a.createElement("button",{className:void 0!==B?"active":"",disabled:void 0!==B,title:void 0!==B?"Added to compare":"Add to compare",onClick:function(){return L(t,D)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},581:function(e,t,a){"use strict";a(134);var c=a(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var n=Symbol.for;r=n("react.element"),t.Fragment=n("react.fragment")}var l=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var c,n={},i=null,m=null;for(c in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(m=t.ref),t)o.call(t,c)&&!s.hasOwnProperty(c)&&(n[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===n[c]&&(n[c]=t[c]);return{$$typeof:r,type:e,key:i,ref:m,props:n,_owner:l.current}}t.jsx=i,t.jsxs=i},582:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=(a(178),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,l=e.productCount,o=e.sortedProductCount;return r.a.createElement(c.Fragment,null,r.a.createElement(n,{getLayout:t,getFilterSortParams:a,productCount:l,sortedProductCount:o}))}},593:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(43),l=a(178),o=a(68),s=a(105),i=a(135),m=a(49),d=a.n(m),u=a(78),p=a(40),E=(a(58),a(6)),f=a(104),v=a(577),b=function(e){var t=e.product,a=e.currency,n=e.addToCart,o=e.addToWishlist,s=e.addToCompare,i=e.cartItem,m=e.wishlistItem,b=e.discountedPrice,g=e.compareItem,N=e.sliderClassName,h=e.spaceBottomClass,y=e.colorClass,w=e.titlePriceClass,O=Object(c.useState)(!1),j=Object(p.a)(O,2),C=j[0],k=j[1],S=Object(f.useToasts)().addToast,x=Object(c.useState)([]),_=Object(p.a)(x,2),P=_[0],T=_[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.134.118\t/api/admin/getproduct");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,T(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),b=Object(l.a)(t.price,t.discount);var F=+(t.price*a.currencyRate).toFixed(2),B=+(b*a.currencyRate).toFixed(2);return r.a.createElement(c.Fragment,null,P.map((function(e){return r.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(N||""),key:e._id},r.a.createElement("div",{className:"product-wrap-2 ".concat(h||""," ").concat(y||""," ")},r.a.createElement("div",{className:"product-img"},r.a.createElement(E.b,{to:"/product-sticky/"+e._id},r.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"200px",height:"250px"}}),r.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"200px",height:"250px"}})),r.a.createElement("div",{className:"product-action-2"},e.affiliateLink?r.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):e.variation&&e.variation.length>=1?r.a.createElement(E.b,{to:"".concat("","/product/").concat(e.id),title:"Select options"},r.a.createElement("i",{className:"fa fa-cog"})):e.stock&&e.stock>0?r.a.createElement("button",{onClick:function(){return n(e,S)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):r.a.createElement("button",{disabled:!0,className:"active",title:"Out of stock"},r.a.createElement("i",{className:"fa fa-shopping-cart"})),r.a.createElement("button",{onClick:function(){return k(!0)},title:"Quick View"},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return s(e,S)}},r.a.createElement("i",{className:"fa fa-retweet"})))),r.a.createElement("div",{className:"product-content-2"},r.a.createElement("div",{className:"title-price-wrap-2 ".concat(w||"")},r.a.createElement("h3",null,r.a.createElement(E.b,{to:"/product/"+e._id},e.product_name)),r.a.createElement("div",{className:"price-2"},r.a.createElement(c.Fragment,null,r.a.createElement("span",null,"\u20b9 ",e.sell_price)))),r.a.createElement("div",{className:"pro-wishlist-2"},r.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return o(e,S)}},r.a.createElement("i",{className:"fa fa-heart-o"}))))))})),r.a.createElement(v.a,{show:C,onHide:function(){return k(!1)},product:t,currency:a,discountedprice:b,finalproductprice:F,finaldiscountedprice:B,cartitem:i,wishlistitem:m,compareitem:g,addtocart:n,addtowishlist:o,addtocompare:s,addtoast:S}))},g=Object(n.connect)((function(e,t){return{products:Object(l.e)(e.productData.products,t.category,t.type,t.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,r,n){e(Object(o.e)(t,a,c,r,n))},addToWishlist:function(t,a){e(Object(s.d)(t,a))},addToCompare:function(t,a){e(Object(i.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,n=e.addToCart,l=e.addToWishlist,o=e.addToCompare,s=(e.cartItems,e.wishlistItems,e.compareItems,e.sliderClassName),i=e.spaceBottomClass,m=e.colorClass,d=e.titlePriceClass;return r.a.createElement(c.Fragment,null,t.map((function(e){return r.a.createElement(b,{sliderClassName:s,spaceBottomClass:i,colorClass:m,product:e,currency:a,addToCart:n,addToWishlist:l,addToCompare:o,key:e.id,titlePriceClass:d})})))}));t.a=function(e){var t=e.products,a=e.layout;return r.a.createElement("div",{className:"shop-bottom-area mt-35"},r.a.createElement("div",{className:"row ".concat(a||"")},r.a.createElement(g,{products:t,spaceBottomClass:"mb-25"})))}},831:function(e,t,a){"use strict";a.r(t);var c=a(40),r=a(0),n=a.n(r),l=a(559),o=a.n(l),s=a(584),i=a(179),m=a(43),d=a(178),u=a(181),p=a(556),E=a(582),f=a(593);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(r.useState)("grid three-column"),m=Object(c.a)(l,2),v=m[0],b=m[1],g=Object(r.useState)(""),N=Object(c.a)(g,2),h=N[0],y=N[1],w=Object(r.useState)(""),O=Object(c.a)(w,2),j=O[0],C=O[1],k=Object(r.useState)(0),S=Object(c.a)(k,2),x=S[0],_=S[1],P=Object(r.useState)(1),T=Object(c.a)(P,2),F=T[0],B=T[1],I=Object(r.useState)([]),A=Object(c.a)(I,2),L=A[0],D=A[1],z=Object(r.useState)([]),R=Object(c.a)(z,2),q=R[0],H=R[1],W=t.pathname;return Object(r.useEffect)((function(){var e=Object(d.g)(a,"",""),t=Object(d.g)(e,h,j);H(e=t),D(e.slice(x,x+15))}),[x,a,"","",h,j]),n.a.createElement(r.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,"Flone | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(i.BreadcrumbsItem,{to:""+W},"Shop"),n.a.createElement(u.a,{headerTop:"visible"},n.a.createElement(p.a,null),n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(E.a,{getLayout:function(e){b(e)},getFilterSortParams:function(e,t){y(e),C(t)},productCount:a.length,sortedProductCount:L.length}),n.a.createElement(f.a,{layout:v,products:L}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(s.a,{totalRecords:q.length,pageLimit:15,pageNeighbours:2,setOffset:_,currentPage:F,setCurrentPage:B,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=38.e2a0ac12.chunk.js.map