(this["webpackJsonpcountry-quiz"]=this["webpackJsonpcountry-quiz"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),r=s(6),a=s.n(r),i=(s(12),s.p+"static/media/adventure.182b6171.svg"),o=s(0);function u(e){var t=e.name,s=e.index,c=e.correctResponse,n=e.possibleShownResponsesRef,r=e.addToPossibleShownResponsesRef,a=e.firstTestState,i=e.firstTestSetState,u=e.score,l=e.newQuestion;return Object(o.jsxs)("li",{onClick:function(e){return t=e.currentTarget,void(a&&(i(!1),t.children[1].innerText===c.name?(t.classList.add("correct"),t.querySelector("img").src="/country-quiz/images/correct.svg"):(u.current--,t.classList.add("incorrect"),t.querySelector("img").src="/country-quiz/images/incorrect.svg",n.forEach((function(e){e.children[1].innerText===c.name&&(e.classList.add("correct"),e.querySelector("img").src="/country-quiz/images/correct.svg")}))),setTimeout((function(){l()}),1500)));var t},ref:r,children:[Object(o.jsx)("span",{children:String.fromCharCode(65+s)}),Object(o.jsx)("span",{children:t}),Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("img",{src:"",alt:""})})]},t)}var l=s.p+"static/media/winners.d76bfdf8.svg";function d(){return Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("p",{children:"Loading..."})})}var j=s(2);var b=s(7);var h=function(){var e=function(e){var t=Object(c.useState)([]),s=Object(j.a)(t,2),n=s[0],r=s[1],a=Object(c.useRef)([]),i=Object(c.useState)(!1),o=Object(j.a)(i,2),u=o[0],l=o[1],d=Object(c.useState)("loading"),b=Object(j.a)(d,2),h=b[0],f=b[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){fetch(e).then((function(e){return e.json()})).then((function(e){e=e.filter((function(e){return e.name&&e.capital&&e.flag&&e.numericCode})),a.current=e.slice(),r(e.slice()),f("loaded")})).catch((function(){l(!0),f("loaded")}))}),1e3);return function(){clearTimeout(t)}}),[e]),{countriesState:n,countriesSetState:r,storageData:a.current,apiErrorState:u,loaderState:h}}("https://restcountries.eu/rest/v2/all"),t=e.countriesState,s=e.countriesSetState,n=e.storageData,r=e.apiErrorState,a=e.loaderState,h=function(e,t,s){var n=Object(c.useState)(!1),r=Object(j.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(j.a)(o,2),l=u[0],d=u[1],h=Object(c.useState)(!0),f=Object(j.a)(h,2),m=f[0],O=f[1],p=Object(c.useState)({}),S=Object(j.a)(p,2),g=S[0],x=S[1],v=Object(c.useState)([]),R=Object(j.a)(v,2),w=R[0],T=R[1],N=Object(c.useRef)([]),y=Object(c.useRef)(10),C=Object(c.useRef)(0);return{newQuestion:function(){var e,t;N.current=[],C.current++,C.current>10&&d(!0),e=s.splice(Math.floor(Math.random()*s.length),1)[0],s.sort((function(e,t){return parseInt(t.numericCode)*Math.random()-parseInt(e.numericCode)*Math.random()})),t=s.splice(0,3),t=[e].concat(Object(b.a)(t)).sort((function(e,t){return parseInt(t.numericCode)*Math.random()-parseInt(e.numericCode)*Math.random()})),x(e),T(t),i(!a),O(!0)},newRound:function(){C.current=0,y.current=10,t(e.slice()),d(!1)},toggleFlagCapitalState:a,gameOverState:l,correctResponseState:g,possibleResponsesState:w,score:y,firstTestSetState:O,firstTestState:m,tourNumber:C,possibleShownResponsesRef:N.current,addToPossibleShownResponsesRef:function(e){e&&!N.current.includes(e)&&N.current.push(e)}}}(n,s,t),f=h.newRound,m=h.newQuestion,O=h.addToPossibleShownResponsesRef,p=h.firstTestSetState,S=h.firstTestState,g=h.gameOverState,x=h.correctResponseState,v=h.possibleResponsesState,R=h.possibleShownResponsesRef,w=h.toggleFlagCapitalState,T=h.tourNumber,N=h.score;return Object(c.useEffect)((function(){0!==t.length&&m()}),[t]),Object(o.jsx)(o.Fragment,{children:"loading"===a?Object(o.jsx)(d,{}):Object(o.jsx)(o.Fragment,{children:r?Object(o.jsx)("p",{className:"apiError",children:"We have issues with our database. Please come back later :)"}):Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)("h1",{children:"Country quiz"}),Object(o.jsx)("div",{className:"container",children:g?Object(o.jsxs)("div",{className:"results",children:[Object(o.jsx)("div",{className:"img",children:Object(o.jsx)("img",{src:l,alt:""})}),Object(o.jsx)("h2",{children:"Results"}),Object(o.jsxs)("p",{children:["You got ",Object(o.jsxs)("span",{children:[N.current,"/10"]})," correct answers."]}),Object(o.jsx)("button",{className:"button",onClick:function(e){return f()},children:"Try again"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:i,alt:""})}),Object(o.jsxs)("div",{className:"tour-number",children:[T.current,"/10"]}),w?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flag",children:Object(o.jsx)("img",{src:x.flag,alt:""})}),Object(o.jsx)("div",{className:"question",children:"Which country does this flag belong to? "})]}):Object(o.jsxs)("div",{className:"question",children:[x.capital," is the capital of ?"]}),Object(o.jsx)("ul",{className:"responses",children:v.map((function(e,t){return Object(o.jsx)(u,{name:e.name,index:t,correctResponse:x,addToPossibleShownResponsesRef:O,possibleShownResponsesRef:R,firstTestState:S,firstTestSetState:p,score:N,newQuestion:m},e.name)}))})]})})]})})})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.201fd64f.chunk.js.map