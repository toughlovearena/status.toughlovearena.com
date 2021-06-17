(this["webpackJsonpstatus.toughlovearena.com"]=this["webpackJsonpstatus.toughlovearena.com"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,o=n(1),l=n.n(o),u=n(19),d=n.n(u),h=n(4),j=n(8),b=n(9),f=b.a.div(r||(r=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n\n  padding: 2rem 1rem;\n  box-sizing: border-box;\n  max-width: 800px;\n\n  @media (min-width: 800px) {\n    max-width: 1200px;\n  }\n"]))),v=b.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n\n  @media (min-width: 800px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n"]))),O=b.a.div(c||(c=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n\n  @media (min-width: 800px) {\n    width: 500px;\n  }\n"]))),p=b.a.div(s||(s=Object(j.a)(["\n  font-size: 1.5em;\n  margin: 1em 0;\n  margin-bottom: 0.5em;\n"]))),x=b.a.table(i||(i=Object(j.a)(["\n  font-size: 1rem;\n  border-collapse: collapse;\n\n  th,\n  td {\n    text-align: center;\n    border: 1px solid grey;\n    padding: 0.5em 1em;\n    background-color: rgb(60, 60, 60);\n  }\n\n  th {\n    background-color: inherit;\n  }\n"]))),g=n(11),m=n(7),w=n.n(m),k=n(10),y=n(2),E=n(3),T=new(function(){function e(){var t=this;Object(y.a)(this,e),this.PERIOD=3e4,this.callbacks={},setInterval((function(){return t.step()}),this.PERIOD)}return Object(E.a)(e,[{key:"step",value:function(){Object.values(this.callbacks).forEach((function(e){return e&&e()}))}},{key:"register",value:function(e,t){var n=this;return void 0!==this.callbacks[e]||t(),this.callbacks[e]=t,function(){return n.unregister(e)}}},{key:"unregister",value:function(e){this.callbacks[e]=function(){}}}]),e}());function S(e){return fetch(e+"?cache="+(new Date).getTime())}function C(e,t){for(var n=[],r=0;r<e.length;)n.push(e.slice(r,r+t)),r+=t;return n}var R,M,A=n(0),P=b.a.a(R||(R=Object(j.a)(["\n  color: ",";\n  text-decoration: none;\n"])),(function(e){return e.isUp?"lightgreen":"salmon"}));function D(e){var t=e.label,n=e.url,r=e.report,a=Object(o.useState)(void 0),c=Object(h.a)(a,2),s=c[0],i=c[1],l=Object(o.useState)(void 0),u=Object(h.a)(l,2),d=u[0],j=u[1],b=Object(o.useCallback)(Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=performance.now(),e.prev=1,e.next=4,S(n);case 4:if(e.sent.ok){e.next=7;break}throw new Error("fetch failed: "+n);case 7:i(!0),r(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),i(!1),r(!1);case 15:a=performance.now(),j(Math.round(a-t));case 17:case"end":return e.stop()}}),e,null,[[1,11]])}))),[n,r,i,j]);return Object(o.useEffect)((function(){return T.register("poll-".concat(t),(function(){return b()}))}),[t,b]),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:t}),Object(A.jsx)("td",{children:void 0===s?"???":Object(A.jsx)(P,{href:n,isUp:s,children:s?"OK":"DOWN"})}),Object(A.jsx)("td",{children:null!==d&&void 0!==d?d:"???"})]})}var I=[{label:"toughlovearena.com",url:"https://toughlovearena.com/version.json"},{label:"cache.tla",url:"https://cache.toughlovearena.com/health"},{label:"handshake.tla",url:"https://handshake.toughlovearena.com/health"},{label:"leaderboard.tla",url:"https://leaderboard.toughlovearena.com/health"},{label:"match.tla",url:"https://match.toughlovearena.com"},{label:"presence.tla",url:"https://presence.toughlovearena.com/health"},{label:"stun.tla",url:"https://stun.toughlovearena.com/health"},{label:"serverless accounts API\t",url:"https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/"}],L=b.a.a(M||(M=Object(j.a)(["\n  color: ",";\n"])),(function(e){return e.isUp?"lightgreen":"salmon"})),_={};function F(){var e=Object(o.useState)(void 0),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.useCallback)((function(e,t){_[e]=t,r(Object.values(_).every((function(e){return e})))}),[r]);return Object(A.jsxs)(O,{children:[Object(A.jsxs)(p,{children:["Status: ",void 0===n?"???":Object(A.jsx)(L,{isUp:n,children:n?"OK":"DOWN"})]}),Object(A.jsxs)(x,{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Service"}),Object(A.jsx)("th",{children:"Status"}),Object(A.jsx)("th",{children:"ms"})]})}),Object(A.jsx)("tbody",{children:I.map((function(e,t){return Object(A.jsx)(D,Object(g.a)({report:function(t){return a(e.url,t)}},e),t)}))})]})]})}function Q(){var e=Object(o.useState)(void 0),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.useCallback)(Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("https://toughlovearena.com/version.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.v);case 7:case"end":return e.stop()}}),e)}))),[r]);return Object(o.useEffect)((function(){return T.register("version",(function(){return a()}))}),[a]),Object(A.jsxs)("div",{children:["v",null!==n&&void 0!==n?n:"???"]})}function U(){var e=Object(o.useState)(void 0),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.useCallback)(Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/news");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.message);case 7:case"end":return e.stop()}}),e)}))),[r]);Object(o.useEffect)((function(){return T.register("news",(function(){return a()}))}),[a]);var c=(void 0===n?"???":n)||"<i>no news</i>";return Object(A.jsxs)("div",{children:["News: ",Object(A.jsx)("span",{dangerouslySetInnerHTML:{__html:c}})]})}function q(){var e=Object(o.useState)(void 0),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.useCallback)(Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("https://presence.toughlovearena.com");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),[r]);Object(o.useEffect)((function(){return T.register("activePlayers",(function(){return a()}))}),[a]);var c=n?Object.values(n).reduce((function(e,t){return t+e}),0):"???",s=function(e){var t;return null!==(t=n&&n[e])&&void 0!==t?t:"?"};return Object(A.jsxs)(O,{children:[Object(A.jsxs)(p,{children:["Active Players: ",c]}),Object(A.jsxs)(x,{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Game Mode"}),Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:"Game Mode"}),Object(A.jsx)("th",{children:"#"})]})}),Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Welcome"}),Object(A.jsx)("td",{children:s("welcome")}),Object(A.jsx)("td",{children:"Online Menu"}),Object(A.jsx)("td",{children:s("online_menu")})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Tutorial"}),Object(A.jsx)("td",{children:s("tutorial")}),Object(A.jsx)("td",{children:"Ranked Match"}),Object(A.jsx)("td",{children:s("online_ranked")})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Local Versus"}),Object(A.jsx)("td",{children:s("local")}),Object(A.jsx)("td",{children:"Casual Match"}),Object(A.jsx)("td",{children:s("online_casual")})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Versus CPU"}),Object(A.jsx)("td",{children:s("cpu")}),Object(A.jsx)("td",{children:"Private Match"}),Object(A.jsx)("td",{children:s("online_private")})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Training"}),Object(A.jsx)("td",{children:s("training")}),Object(A.jsx)("td",{children:"Private Lobby"}),Object(A.jsx)("td",{children:s("online_lobby")})]})]})]})]})}var B,G,W,z=n(12),N=function e(t){Object(y.a)(this,e),this.chart=void 0;var n=t.canvasElm,r=t.label,a=t.colorRGB,c=n.getContext("2d");z.d.register(z.a,z.b,z.c,z.e);var s=new z.d(c,{type:"bar",data:{labels:[],datasets:[{label:r,data:[],backgroundColor:"rgba(".concat(a.r,", ").concat(a.g,", ").concat(a.b,", 0.2)"),borderColor:"rgba(".concat(a.r,", ").concat(a.g,", ").concat(a.b,", 1)"),borderWidth:1}]},options:{plugins:{legend:{display:!1}},responsive:!0,maintainAspectRatio:!0,scales:{x:{title:{display:!0,text:"seconds waiting for match",color:"white"},ticks:{color:"white"}},y:{beginAtZero:!0,title:{display:!0,text:"matches",color:"white"},ticks:{color:"white"}}}}});this.chart=s},J=n(5),K=new(function(){function e(){var t=this;Object(y.a)(this,e),this.casual=void 0,this.ranked=void 0,T.register("chart",(function(){return t.step()}))}return Object(E.a)(e,[{key:"registerCasual",value:function(e){this.casual=e,this.step()}},{key:"registerRanked",value:function(e){this.ranked=e,this.step()}},{key:"convertQueueTimesToData",value:function(e){console.log(e);var t={},n=Object.keys(e).sort().pop();if(n){var r=e[n];for(var a in r){var c=parseFloat(a.split("s")[0]),s=r[a];t[c.toString()]=(t[c.toString()]||0)+s}var i=[],o=0,l=0;for(var u in t){var d=parseFloat(u),h=t[u];i.push({seconds:d,count:h}),o+=d*h,l+=h}var j=o/l,b=function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}(Math.max.apply(Math,Object(J.a)(i.map((function(e){return e.seconds}))))+1),f=b.map((function(e){return t[e.toString()]||0}));return{labels:C(b,5).map((function(e){return"".concat(e[0]," - ").concat(e.concat().pop())})),values:C(f,5).map((function(e){return e.reduce((function(e,t){return e+t}),0)})),average:j}}}},{key:"step",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,r,a,c=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,S("https://match.toughlovearena.com/details");case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a=r.filter((function(e){return"prod"===e.label}))[0],this.casual&&t.push({queueTimes:a.casual.queueTimes,ref:this.casual}),this.ranked&&t.push({queueTimes:a.ranked.queueTimes,ref:this.ranked}),t.forEach((function(e){var t=c.convertQueueTimesToData(e.queueTimes);if(t){for(;null===(n=e.ref.chart.chart.data.labels)||void 0===n?void 0:n.length;){var n;e.ref.chart.chart.data.labels.pop()}e.ref.chart.chart.data.datasets.forEach((function(e){for(;e.data.length;)e.data.pop()})),t.labels.forEach((function(t){return e.ref.chart.chart.data.labels.push(t)})),t.values.forEach((function(t){return e.ref.chart.chart.data.datasets.forEach((function(e){return e.data.push(t)}))})),e.ref.chart.chart.update(),e.ref.setAverage(Math.round(t.average))}})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t.forEach((function(e){e.ref.setAverage(void 0)}));case 18:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}());function V(){var e=Object(o.useRef)(null),t=Object(o.useState)(void 0),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){if(e.current){var t=new N({canvasElm:e.current,label:"Ranked Queue Time",colorRGB:{r:162,g:100,b:235}});K.registerRanked({chart:t,setAverage:a})}}),[e,a]),Object(A.jsxs)(O,{children:[Object(A.jsxs)(p,{children:["Ranked Queue Time: ",null!==r&&void 0!==r?r:"???"," seconds"]}),Object(A.jsx)("canvas",{ref:e})]})}function H(){var e=Object(o.useRef)(null),t=Object(o.useState)(void 0),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){if(e.current){var t=new N({canvasElm:e.current,label:"Casual Queue Time",colorRGB:{r:54,g:162,b:235}});K.registerCasual({chart:t,setAverage:a})}}),[e,a]),Object(A.jsxs)(O,{children:[Object(A.jsxs)(p,{children:["Casual Queue Time: ",null!==r&&void 0!==r?r:"???"," seconds"]}),Object(A.jsx)("canvas",{ref:e})]})}var Z=b.a.div(B||(B=Object(j.a)(["\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid white;\n"]))),X=b.a.img(G||(G=Object(j.a)(["\n  display: block;\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n"]))),Y=b.a.div(W||(W=Object(j.a)(["\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid white;\n"])));function $(){var e,t=Object(o.useState)(void 0),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(o.useEffect)((function(){return T.register("updated",(function(){return a(new Date)}))}),[a]),Object(A.jsxs)(f,{children:[Object(A.jsxs)(Z,{children:[Object(A.jsx)(X,{src:"logo.png",alt:"logo"}),Object(A.jsx)("div",{children:"Tough Love Arena Status Page"}),Object(A.jsx)(Q,{}),Object(A.jsx)(U,{})]}),Object(A.jsxs)(v,{children:[Object(A.jsx)(F,{}),Object(A.jsx)(q,{}),Object(A.jsx)(V,{}),Object(A.jsx)(H,{})]}),Object(A.jsxs)(Y,{children:["Updates every 30 seconds",Object(A.jsx)("br",{}),"Last updated @ ",null!==(e=null===r||void 0===r?void 0:r.toLocaleTimeString())&&void 0!==e?e:"???",Object(A.jsx)("br",{}),"If anything is down, please email ",Object(A.jsx)("a",{href:"mailto:toughlovearena@gmail.com",children:"toughlovearena@gmail.com"})]})]})}var ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};d.a.render(Object(A.jsx)(l.a.StrictMode,{children:Object(A.jsx)($,{})}),document.getElementById("root")),setInterval((function(){return window.location.reload(!1)}),3e5),ee()}},[[31,1,2]]]);
//# sourceMappingURL=main.128c8520.chunk.js.map