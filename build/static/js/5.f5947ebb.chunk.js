(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__3y9w3"}},50:function(e,t,c){e.exports={list:"QuoteList_list__1y8kr",sorting:"QuoteList_sorting__3tNSX"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3Dma8"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(49),r=c.n(i),o=c(8),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(o.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=c(50),j=c.n(d),l=function(e){var t,c,i=Object(n.h)(),r=Object(n.i)(),o="asc"===new URLSearchParams(r.search).get("sort"),d=(t=e.quotes,c=o,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){i.push({pathname:r.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(36),h=c(35),x=c(15),O=c(51),m=c.n(O),p=function(){return Object(a.jsxs)("div",{className:m.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(o.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})};t.default=function(){var e=Object(b.a)(h.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(x.a,{})}):"error"===c?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(p,{})}}}]);
//# sourceMappingURL=5.f5947ebb.chunk.js.map