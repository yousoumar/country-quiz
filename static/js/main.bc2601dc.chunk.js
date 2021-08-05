(this["webpackJsonpcountry-quiz"]=this["webpackJsonpcountry-quiz"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(6),i=n.n(r),a=(n(12),n.p+"static/media/adventure.182b6171.svg"),o=n.p+"static/media/winners.d76bfdf8.svg",u=n(0);function l(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("p",{children:"Loading..."})})}var d=n(2);var j=n(7);function b(e){var t=e.name,n=e.index,s=e.correctResponse,c=e.possibleShownResponsesRef,r=e.addToPossibleShownResponsesRef,i=e.firstTestState,a=e.firstTestSetState,o=e.score,l=e.newQuestion;return Object(u.jsxs)("li",{onClick:function(e){return t=e.currentTarget,void(i&&(a(!1),t.children[1].innerText===s.name?(t.classList.add("correct"),t.querySelector("img").src="/country-quiz/images/correct.svg"):(o.current--,t.classList.add("incorrect"),t.querySelector("img").src="/country-quiz/images/incorrect.svg",c.forEach((function(e){e.children[1].innerText===s.name&&(e.classList.add("correct"),e.querySelector("img").src="/country-quiz/images/correct.svg")}))),setTimeout((function(){l()}),1500)));var t},ref:r,children:[Object(u.jsx)("span",{children:String.fromCharCode(65+n)}),Object(u.jsx)("span",{children:t}),Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("img",{src:"",alt:""})})]},t)}var h=function(){var e=function(e){var t=Object(s.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(s.useRef)([]),a=Object(s.useState)(!1),o=Object(d.a)(a,2),u=o[0],l=o[1],j=Object(s.useState)("loading"),b=Object(d.a)(j,2),h=b[0],f=b[1];return Object(s.useEffect)((function(){var t=setTimeout((function(){fetch(e).then((function(e){if(e.ok)return e.json();throw Error()})).then((function(e){e=e.filter((function(e){return e.name&&e.capital&&e.flag&&e.numericCode})),i.current=e.slice(),r(e.slice()),f("loaded")})).catch((function(){l(!0),f("loaded")}))}),1e3);return function(){clearTimeout(t)}}),[e]),{countriesState:c,countriesSetState:r,storageData:i.current,apiErrorState:u,loaderState:h}}("https://restcountries.eu/rest/v2/all"),t=e.countriesState,n=e.countriesSetState,c=e.storageData,r=e.apiErrorState,i=e.loaderState,h=function(e,t,n){var c=Object(s.useState)(!1),r=Object(d.a)(c,2),i=r[0],a=r[1],o=Object(s.useState)(!1),l=Object(d.a)(o,2),h=l[0],f=l[1],m=Object(s.useState)(!0),O=Object(d.a)(m,2),p=O[0],g=O[1],x=Object(s.useState)({}),S=Object(d.a)(x,2),v=S[0],R=S[1],y=Object(s.useState)([]),w=Object(d.a)(y,2),N=w[0],T=w[1],q=Object(s.useRef)([]),C=Object(s.useRef)(10),E=Object(s.useRef)(0);function Q(e){e&&!q.current.includes(e)&&q.current.push(e)}function M(){var e,t;q.current=[],E.current++,E.current>10&&f(!0),e=n.splice(Math.floor(Math.random()*n.length),1)[0],n.sort((function(e,t){return parseInt(t.numericCode)*Math.random()-parseInt(e.numericCode)*Math.random()})),t=n.splice(0,3),t=[e].concat(Object(j.a)(t)).sort((function(e,t){return parseInt(t.numericCode)*Math.random()-parseInt(e.numericCode)*Math.random()})),R(e),T(t),a(!i),g(!0)}return{newQuestion:M,newRound:function(){E.current=0,C.current=10,t(e.slice()),f(!1)},displayQuestion:function(){return i?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"flag",children:Object(u.jsx)("img",{src:v.flag,alt:""})}),Object(u.jsx)("div",{className:"question",children:"Which country does this flag belong to? "})]}):Object(u.jsxs)("div",{className:"question",children:[v.capital," is the capital of ?"]})},displayPossibleResponses:function(){return N.map((function(e,t){return Object(u.jsx)(b,{name:e.name,index:t,correctResponse:v,addToPossibleShownResponsesRef:Q,possibleShownResponsesRef:q.current,firstTestState:p,firstTestSetState:g,score:C,newQuestion:M},e.name)}))},displayScore:function(){return C.current+"/10"},displayRemainingQuestions:function(){return E.current+"/10"},gameOver:h}}(c,n,t),f=h.newRound,m=h.newQuestion,O=h.displayQuestion,p=h.displayPossibleResponses,g=h.displayScore,x=h.displayRemainingQuestions,S=h.gameOver;return Object(s.useEffect)((function(){0!==t.length&&m()}),[t]),Object(u.jsx)(u.Fragment,{children:"loading"===i?Object(u.jsx)(l,{}):Object(u.jsx)(u.Fragment,{children:r?Object(u.jsx)("p",{className:"apiError",children:"We have issues with our database. Please come back later :)"}):Object(u.jsxs)("div",{id:"app",children:[Object(u.jsx)("h1",{children:"Country quiz"}),Object(u.jsx)("div",{className:"container",children:S?Object(u.jsxs)("div",{className:"results",children:[Object(u.jsx)("div",{className:"img",children:Object(u.jsx)("img",{src:o,alt:""})}),Object(u.jsx)("h2",{children:"Results"}),Object(u.jsxs)("p",{children:["You got ",Object(u.jsx)("span",{children:g()})," correct answers."]}),Object(u.jsx)("button",{className:"button",onClick:function(e){return f()},children:"Try again"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:a,alt:""})}),Object(u.jsxs)("div",{className:"tour-number",children:[" ",x()]}),O(),Object(u.jsx)("ul",{className:"responses",children:p()})]})})]})})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bc2601dc.chunk.js.map