(this["webpackJsonpcountry-quiz"]=this["webpackJsonpcountry-quiz"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(7),a=c.n(s),o=(c(12),c(4)),i=c(2),u=c.p+"static/media/adventure.182b6171.svg",l=c(0);function j(e){var t=e.name,c=e.index,r=e.correctResponse,n=e.possibleShownResponses,s=e.addToRef,a=e.newQuestion,o=e.firstTestState,i=e.firstTestSetState,u=e.score;return Object(l.jsxs)("li",{onClick:function(e){return t=e.currentTarget,void(o&&(i(!1),t.children[1].innerText===r.name?(t.classList.add("correct"),t.querySelector("img").src="/country-quiz/images/correct.svg"):(u.current--,t.classList.add("incorrect"),t.querySelector("img").src="/country-quiz/images/incorrect.svg",n.forEach((function(e){e.children[1].innerText===r.name&&(e.classList.add("correct"),e.querySelector("img").src="/country-quiz/images/correct.svg")}))),setTimeout((function(){a()}),1e3)));var t},ref:s,children:[Object(l.jsx)("span",{children:String.fromCharCode(65+c)}),Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("img",{src:"",alt:""})})]},t)}var d=c.p+"static/media/winners.d76bfdf8.svg";var b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=JSON.parse(localStorage.getItem("countries")),a=Object(r.useState)({}),b=Object(i.a)(a,2),h=b[0],m=b[1],O=Object(r.useState)([]),p=Object(i.a)(O,2),f=p[0],g=p[1],x=Object(r.useState)(!0),S=Object(i.a)(x,2),v=S[0],y=S[1],M=Object(r.useState)(!1),R=Object(i.a)(M,2),N=R[0],T=R[1],q=Object(r.useRef)([]),w=Object(r.useRef)(5),z=Object(r.useRef)(0),k=Object(r.useRef)(!0);function C(e){e&&!q.current.includes(e)&&q.current.push(e)}function J(){var e,t;z.current++,z.current>=5&&T(!0),q.current=[],e=c.splice(Math.floor(Math.random()*c.length),1)[0],k.current?(k.current=!k.current,c.sort((function(e,t){return t.area*Math.random()-e.area*Math.random()})),t=c.splice(0,3),(t=[e].concat(Object(o.a)(t))).sort((function(e,t){return t.area*Math.random()-e.area*Math.random()}))):(k.current=!k.current,c.sort((function(e,t){return t.population*Math.random()-e.population*Math.random()})),t=c.splice(0,3),(t=[e].concat(Object(o.a)(t))).sort((function(e,t){return t.population*Math.random()-e.population*Math.random()}))),n(c),m(e),g(t),y(!0)}function E(){var e=s.splice(Math.floor(Math.random()*s.length),1)[0],t=s.splice(0,3);t=[e].concat(Object(o.a)(t)),z.current=0,w.current=5,m(e),g(t),n(s),T(!1)}return console.log(c),Object(r.useEffect)((function(){s?E():fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("countries",JSON.stringify(e));var t=e.splice(Math.floor(Math.random()*e.length),1)[0],c=e.splice(0,3);c=[t].concat(Object(o.a)(c)),m(t),g(c),n(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"app",children:[Object(l.jsx)("h1",{children:"Country quiz"}),Object(l.jsx)("div",{className:"container",children:N?Object(l.jsxs)("div",{className:"results",children:[Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:d,alt:""})}),Object(l.jsx)("h2",{children:"Results"}),Object(l.jsxs)("p",{children:["You got ",Object(l.jsxs)("span",{children:[w.current,"/5"]})," correct answers"]}),Object(l.jsx)("button",{className:"button",onClick:function(e){return E()},children:"Try again"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{src:u,alt:""})}),Object(l.jsxs)("div",{className:"question",children:[h.capital," is the capital of ?"]}),Object(l.jsx)("ul",{className:"responses",children:f.map((function(e,t){return Object(l.jsx)(j,{name:e.name,index:t,correctResponse:h,addToRef:C,possibleShownResponses:q.current,countriesSetState:n,countriesState:c,newQuestion:J,possibleResponsesSetState:g,possibleResponsesState:f,firstTestState:v,firstTestSetState:y,gameOverSetState:T,score:w,tourNumber:z},e.name)}))})]})})]}),Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["created by ",Object(l.jsx)("a",{target:"_blank",href:"https://github.com/yousoumar",children:"yousoumar"})," - devchallenges.io"]})})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d7846291.chunk.js.map