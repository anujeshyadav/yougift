(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[61],{719:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(40),i=n(0),r=n(875),l=n(877),o=n(881),c=n(880),u=n(876),d=n(878),m=n(862),s=n(879),g=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function f(e,t,n,a){return{name:e,code:t,population:n,size:a,density:n/a}}var h=[f("India","IN",1324171354,3287263),f("China","CN",1403500365,9596961),f("Italy","IT",60483973,301340),f("United States","US",327167434,9833520),f("Canada","CA",37602103,9984670),f("Australia","AU",25475400,7692024),f("Germany","DE",83019200,357578),f("Ireland","IE",4857e3,70273),f("Mexico","MX",126577691,1972550),f("Japan","JP",126317e3,377973),f("France","FR",67022e3,640679),f("United Kingdom","GB",67545757,242495),f("Russia","RU",146793744,17098246),f("Nigeria","NG",200962417,923768),f("Brazil","BR",210147125,8515767)];function p(){var e=i.useState(0),t=Object(a.a)(e,2),n=t[0],f=t[1],p=i.useState(10),b=Object(a.a)(p,2),y=b[0],E=b[1];return i.createElement(r.a,{sx:{width:"100%",overflow:"hidden"}},i.createElement(u.a,{sx:{maxHeight:440}},i.createElement(l.a,{stickyHeader:!0,"aria-label":"sticky table"},i.createElement(d.a,null,i.createElement(s.a,null,g.map((function(e){return i.createElement(c.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),i.createElement(o.a,null,h.slice(n*y,n*y+y).map((function(e){return i.createElement(s.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},g.map((function(t){var n=e[t.id];return i.createElement(c.a,{key:t.id,align:t.align},t.format&&"number"===typeof n?t.format(n):n)})))}))))),i.createElement(m.a,{rowsPerPageOptions:[10,25,100],component:"div",count:h.length,rowsPerPage:y,page:n,onPageChange:function(e,t){f(t)},onRowsPerPageChange:function(e){E(+e.target.value),f(0)}}))}}}]);
//# sourceMappingURL=61.91f34786.chunk.js.map