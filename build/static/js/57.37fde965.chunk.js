(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[57,61],{615:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),s=t.n(r),i=t(3),c=t.n(i),o=t(77),m=t.n(o),u=t(54),d=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),h={tag:u.c,xs:g,sm:g,md:g,lg:g,xl:g,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,i=e.tag,c=Object(l.a)(e,d),o=[];r.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var r=!n;if(Object(u.a)(l)){var s,i=r?"-":"-"+a+"-",d=b(r,a,l.size);o.push(Object(u.b)(m()(((s={})[d]=l.size||""===l.size,s["order"+i+l.order]=l.order||0===l.order,s["offset"+i+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=b(r,a,l);o.push(f)}}})),o.length||o.push("col");var f=Object(u.b)(m()(a,o),t);return s.a.createElement(i,Object(n.a)({},c,{className:f}))};E.propTypes=h,E.defaultProps=p,a.a=E},719:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(40),l=t(0),r=t(875),s=t(877),i=t(881),c=t(880),o=t(876),m=t(878),u=t(862),d=t(879),f=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function g(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}var h=[g("India","IN",1324171354,3287263),g("China","CN",1403500365,9596961),g("Italy","IT",60483973,301340),g("United States","US",327167434,9833520),g("Canada","CA",37602103,9984670),g("Australia","AU",25475400,7692024),g("Germany","DE",83019200,357578),g("Ireland","IE",4857e3,70273),g("Mexico","MX",126577691,1972550),g("Japan","JP",126317e3,377973),g("France","FR",67022e3,640679),g("United Kingdom","GB",67545757,242495),g("Russia","RU",146793744,17098246),g("Nigeria","NG",200962417,923768),g("Brazil","BR",210147125,8515767)];function p(){var e=l.useState(0),a=Object(n.a)(e,2),t=a[0],g=a[1],p=l.useState(10),b=Object(n.a)(p,2),E=b[0],v=b[1];return l.createElement(r.a,{sx:{width:"100%",overflow:"hidden"}},l.createElement(o.a,{sx:{maxHeight:440}},l.createElement(s.a,{stickyHeader:!0,"aria-label":"sticky table"},l.createElement(m.a,null,l.createElement(d.a,null,f.map((function(e){return l.createElement(c.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),l.createElement(i.a,null,h.slice(t*E,t*E+E).map((function(e){return l.createElement(d.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},f.map((function(a){var t=e[a.id];return l.createElement(c.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),l.createElement(u.a,{rowsPerPageOptions:[10,25,100],component:"div",count:h.length,rowsPerPage:E,page:t,onPageChange:function(e,a){g(a)},onRowsPerPageChange:function(e){v(+e.target.value),g(0)}}))}},860:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(181),s=t(188),i=t.n(s),c=t(549),o=t(550),m=t(615),u=t(719);a.default=function(e){e.data,e.spaceBottomClass;return l.a.createElement(r.a,null,l.a.createElement(c.a,{fluid:!0,className:"mb-4"},l.a.createElement(o.a,{className:"mb-5"},l.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(i.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},l.a.createElement("div",{className:""},l.a.createElement("h1",{className:"text-light text-center"},"Wallet"))))),l.a.createElement("section",{style:{margin:"70px 0px"}},l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement(m.a,{md:"6"},l.a.createElement("div",{className:"sr-3"},l.a.createElement("h4",{className:"sr-h"},"Wallet Details "),l.a.createElement("ul",{className:"sr-ul"},l.a.createElement("li",{className:"sr-li dr"},"Available Balance : ",l.a.createElement("span",{className:"sr-span"},"INR:100"))),l.a.createElement("div",{className:"sr-div"},l.a.createElement("button",{className:"sr-btn1"},"Deposit to Wallet")),l.a.createElement("div",{className:"sr-div"},l.a.createElement("button",{className:"sr-btn1"},"Send Money to Bank")))),l.a.createElement(m.a,{md:"6"},l.a.createElement("div",{className:"sr-3"},l.a.createElement("h4",{className:"sr-h"},"Transaction History "),l.a.createElement(u.default,null)))))))}}}]);
//# sourceMappingURL=57.37fde965.chunk.js.map