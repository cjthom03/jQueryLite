!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const o=n(1),r=n(2),s=(n(3),{inbox:r});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".content");new o(e,s).start(),document.querySelectorAll(".sidebar-nav li").forEach(e=>{e.addEventListener("click",()=>{let t=e.innerText;t=t.toLowerCase(),window.location.hash=t})})})},function(e,t){e.exports=class{constructor(e,t){this.node=e,this.routes=t}start(){this.render(),window.addEventListener("hashchange",this.render.bind(this))}activeRoute(){let e=window.location.hash;return this.routes[e.slice(1)]}render(){let e=this.activeRoute();return void 0===e?void(this.node[0].innerHTML=""):(this.node[0].innerHTML="",void this.node[0].appendChild(e.render()))}}},function(e,t,n){const o=n(3),r={render:function(){let e=document.createElement("ul");return e.className="messages",o.getInboxMessages().forEach(t=>{e.appendChild(this.renderMessage(t))}),e},renderMessage:function(e){let t=document.createElement("li");t.className="message";let n=document.createElement("span");n.innerHTML=e.from,n.className="from",t.appendChild(n);let o=document.createElement("span");o.innerHTML=e.subject,o.className="subject",t.appendChild(o);let r=document.createElement("span");return r.innerHTML=e.body,r.className="body",t.appendChild(r),t}};e.exports=r},function(e,t){let n=[{to:"friend@mail.com",subject:"Check this out",body:"It's so cool"},{to:"person@mail.com",subject:"zzz",body:"so booring"}],o=[{from:"grandma@mail.com",subject:"Fwd: Fwd: Fwd: Check this out",body:"Stay at home mom discovers cure for leg cramps. Doctors hate her"},{from:"person@mail.com",subject:"Questionnaire",body:"Take this free quiz win $1000 dollars"}];const r={getInboxMessages:function(){return o},getSentMessages:function(){return n}};e.exports=r}]);