(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,r){"use strict";r.r(t);var n=r(2);function o(e,t,r,n,o){switch(o){case"circle":e.beginPath(),e.ellipse((n-1+.5)*t,(r-1+.5)*t,.3*t,.3*t,0,0,360),e.fill();break;case"circle outline":e.beginPath(),e.ellipse((n-1+.5)*t,(r-1+.5)*t,1.1*t*.3,1.1*t*.3,0,0,360),e.fill();break;case"block":e.fillRect((n-1+.2)*t,(r-1+.2)*t,.6*t,.6*t)}}function i(e,t=!1){if("deselected"==e)return"#30303055";if("block"==e)return t?"#30303066":"#303030";if("red"==e)return t?"#ff000066":"#ff0000";if("blue"==e)return t?"#0000ff66":"#0000ff";throw new Error("Unkown team: "+e)}let l=[];{let e=document.getElementById("thecanvas"),t=e.getContext("2d"),r=document.getElementById("next2go"),c=r.getContext("2d"),u=n.b.new();document.getElementById("undo").onmousedown=function(){u.undo()},document.getElementById("newgame").onmousedown=function(){u.new_game()},document.getElementById("makeai").onmousedown=function(e){u.ai_move()},e.onmouseleave=function(e){u.mouse_leave()},e.onmousemove=function(t){let r=e.width/u.size(),n=Math.floor(t.offsetX/r)+1,o=Math.floor(t.offsetY/r)+1;u.mouse_move(o,n)},e.onmousedown=function(t){let r=e.width/u.size(),n=Math.floor(t.offsetX/r)+1,o=Math.floor(t.offsetY/r)+1;u.mouse_click(o,n)},l.push((l,s)=>{u.turn()==n.a.Red?c.fillStyle="red":c.fillStyle="blue",c.fillRect(0,0,r.width,r.height),function(e,t,r){let l=["#eae8ea","#c1c1c1"];for(let c=1;c<=t.size();c++)for(let u=1;u<=t.size();u++){e.fillStyle=l[(u+c)%2],e.fillRect((u-1)*r,(c-1)*r,r,r);let s=t.token(c,u);1==s.wall&&(e.fillStyle=i("block",s.hover),o(e,r,c,u,"block")),null!=s.piece&&(s.piece==n.a.Gray?(e.fillStyle=i("block",s.hover),o(e,r,c,u,"circle")):(e.fillStyle="white",o(e,r,c,u,"circle outline"),s.piece==n.a.Red&&(e.fillStyle=i("red",s.hover)),s.piece==n.a.Blue&&(e.fillStyle=i("blue",s.hover)),o(e,r,c,u,"circle"))),s.free()}}(t,u,e.width/u.size())})}{let e=0;l.push((t,r)=>{r>e&&(e+=5)})}let c=performance.now(),u=0;!function e(){let t=performance.now(),r=(t-c)/1e3;u+=r,c=t,l.forEach(e=>{e(r,u)}),window.requestAnimationFrame(e)}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return a}));var n=r(4);let o=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let i=null;function l(e,t){return o.decode((null!==i&&i.buffer===n.i.buffer||(i=new Uint8Array(n.i.buffer)),i).subarray(e,e+t))}const c=Object.freeze({Red:0,Blue:1,Gray:2});class u{static __wrap(e){const t=Object.create(u.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,n.a(e)}get wall(){return 0!==n.d(this.ptr)}set wall(e){n.g(this.ptr,e)}get hover(){return 0!==n.b(this.ptr)}set hover(e){n.e(this.ptr,e)}get piece(){var e=n.c(this.ptr);return 3===e?void 0:e}set piece(e){n.f(this.ptr,null==e?3:e)}}class s{static __wrap(e){const t=Object.create(s.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,n.h(e)}static new(){var e=n.n();return s.__wrap(e)}turn(){return n.r(this.ptr)>>>0}size(){return n.p(this.ptr)>>>0}new_game(){n.o(this.ptr)}ai_move(){n.j(this.ptr)}undo(){n.s(this.ptr)}mouse_leave(){n.l(this.ptr)}mouse_click(e,t){n.k(this.ptr,e,t)}mouse_move(e,t){n.m(this.ptr,e,t)}token(e,t){var r=n.q(this.ptr,e,t);return u.__wrap(r)}}const f=function(e,t){console.log(l(e,t))},a=function(e,t){throw new Error(l(e,t))}},,function(e,t,r){"use strict";var n=r.w[e.i];e.exports=n;r(2);n.t()}]]);