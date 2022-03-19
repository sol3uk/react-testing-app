(this["webpackJsonpbens-app"]=this["webpackJsonpbens-app"]||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),s=n.n(a),i=n(5),o=n(15),l=n(16),u=n(18),j=n(17),h=n(1);var b=function(e){return Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("p",{className:"card-text",children:["Click Count: ",e.count]}),Object(h.jsx)("button",{className:"btn btn-primary",onClick:e.handleIncrement,children:"Increment"})," ",Object(h.jsx)("button",{className:"btn btn-danger",onClick:e.handleDecrement,children:"Decrement"})]})},d=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={count:0},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e.handleDecrement=function(){e.setState({count:e.state.count-1})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"card text-center",children:[Object(h.jsx)("div",{className:"card-header bg-primary text-white",children:"Click Counter!"}),Object(h.jsx)(b,{count:this.state.count,handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement})]})}}]),n}(r.a.Component),O=n(22),x=n(29),m=n(19),f=(n(41),{red:!1,blue:!1,yellow:!1,green:!1}),p=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(Object.keys(f)[Math.floor(Math.random()*Object.keys(f).length)]),r=Object(c.useState)(f),a=Object(m.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(5),l=Object(m.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)("play"),d=Object(m.a)(b,2),p=d[0],v=d[1];return Object(c.useEffect)((function(){return e.current=setInterval((function(){j((function(t){var n=t-1;return n<=0&&(v("lost"),clearInterval(e.current)),n}))}),1e3),function(){clearInterval(e.current),clearTimeout(t.current)}}),[]),Object(c.useEffect)((function(){if("halt"===p)return t.current=setTimeout((function(){v("play")}),1e3),function(){return clearTimeout(t.current)}}),[p]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"FIND GAME !"}),Object(h.jsx)("h3",{children:"Instructions"}),Object(h.jsx)("p",{children:"One of these blocks has the prize in it"}),Object(h.jsx)("p",{children:"Can you click the right one and win the prize??"}),Object(h.jsx)("p",{children:"Click the wrong box and you have to wait 1 second before you can try again!"}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["You have only ",u," seconds left to find the right one!!"]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"blocks",children:Object.entries(s).map((function(t){var c=Object(m.a)(t,2),r=c[0],a=c[1],o="block ".concat(a?n.current===r?"winner":"wrong":"");return Object(h.jsx)("div",{style:{backgroundColor:r},className:o,onClick:function(){return function(t){"play"===p&&(s[t]||(i((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},t,!0))})),t===n.current?(clearInterval(e.current),v("won")):v("halt")))}(r)}},r)}))}),Object(h.jsxs)("div",{className:"announcement ".concat(p),children:["halt"===p&&Object(h.jsx)("span",{children:"YOU'VE GOTTA WAIT !!!"}),"lost"===p&&Object(h.jsx)("span",{children:"OUTTA TIME!! HARD LUCK, REFRESH TO TRY AGAIN"}),"won"===p&&Object(h.jsx)("span",{children:"YEY - YOU HAVE WON THE PRIZE !!"})]}),void console.log("Im an IIFE within the html, look at the console and see me!")]})};function v(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(h.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(r.a.Component);function y(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(m.a)(t[n],3),r=c[0],a=c[1],s=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return e[r]}return null}var N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},c}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();y(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,c=n[this.state.stepNumber],r=y(c.squares),a=n.map((function(e,n){var c=n?"Go to move #"+n:"Go to game start";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.jumpTo(n)},children:c})},n)}));return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(k,{squares:c.squares,onClick:function(e){return t.handleClick(e)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{children:e}),Object(h.jsx)("ol",{children:a})]})]})}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"home",children:"Hello World!"})}}]),n}(r.a.Component),C=n(56),I=n(55),S=n(57),q=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(C.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:Object(h.jsxs)(I.a,{children:[Object(h.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(C.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(S.a.Link,{href:"/",children:"Home"}),Object(h.jsx)(S.a.Link,{href:"/find-game",children:"Find Game"}),Object(h.jsx)(S.a.Link,{href:"/tic-tac-toe",children:"Tic Tac Toe"}),Object(h.jsx)(S.a.Link,{href:"/counter",children:"Counter"})]})})]})})})};var T=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(q,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/find-game",component:p}),Object(h.jsx)(i.a,{path:"/tic-tac-toe",component:N}),Object(h.jsx)(i.a,{path:"/counter",component:d}),Object(h.jsx)(i.a,{path:"/",component:g})]})]})},w=n(28);n(50),n(51);s.a.render(Object(h.jsx)(w.a,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.0072cd7e.chunk.js.map