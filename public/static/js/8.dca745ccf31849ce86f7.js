webpackJsonp([8],{"8Bfj":function(t,n){},Vsd6:function(t,n,e){(function(t){var n=0;t(function(){t(document).click(function(e){var i=new Array("(*>﹏<*)","(*^__^*)","%>_<%","└(^o^)┘"," ~(@^_^@)~","O__O","(*^▽^*)"),o=t("<span></span>").text(i[n]);n=(n+1)%i.length;var a=e.pageX,s=e.pageY;o.css({"z-index":99,top:s-20,left:a,position:"absolute","font-weight":"bold",color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t("body").append(o),o.animate({top:s-180,opacity:0},1500,function(){o.remove()})})}),
/*!
 * Fairy Dust Cursor.js
 * - 90's cursors collection
 */
function(){var t=["#D61C59","#E7D84B","#1B8798"],n=window.innerWidth,e=(window.innerHeight,{x:n/2,y:n/2}),i=[];function o(t){n=window.innerWidth,window.innerHeight}function a(n){if(n.touches.length>0)for(var e=0;e<n.touches.length;e++)l(n.touches[e].clientX,n.touches[e].clientY,t[Math.floor(Math.random()*t.length)])}function s(n){e.x=n.clientX,e.y=n.clientY,l(e.x,e.y,t[Math.floor(Math.random()*t.length)])}function l(t,n,e){var o=new function(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"16px","will-change":"transform"},this.init=function(t,n,e){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:n-20},this.initialStyles.color=e,this.element=document.createElement("span"),this.element.innerHTML=this.character,function(t,n){for(var e in n)t.style[e]=n[e]}(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}};o.init(t,n,e),i.push(o)}function r(){requestAnimationFrame(r),function(){for(var t=0;t<i.length;t++)i[t].update();for(t=i.length-1;t>=0;t--)i[t].lifeSpan<0&&(i[t].die(),i.splice(t,1))}()}document.addEventListener("mousemove",s),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),window.addEventListener("resize",o),r()}()}).call(n,e("7t+N"))},"uC7/":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("Vsd6");var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contain",attrs:{id:"contain"}},[e("div",{staticClass:"link"},[e("ul",t._l(t.list,function(n){return e("li",[e("div",{staticClass:"line"}),t._v(" "),e("a",{staticClass:"flow-wave",attrs:{href:n.url,target:"_blank"}},[e("div",{staticClass:"name"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"site"},[t._v(t._s(n.url))])])])}),0)])])},staticRenderFns:[]};var o=e("VU/8")({data:function(){return{list:[{name:"前端资源站",url:"http://www.fly63.com/nav"},{name:"blog",url:"http://blog.nowcoder.net/c9527"},{name:"CSS ICON",url:"https://cssicon.space/"},{name:"字体图标",url:"https://icomoon.io/"},{name:"油猴插件",url:"https://greasyfork.org/zh-CN"},{name:"无忧论坛",url:"http://bbs.wuyou.net/"},{name:"果汁音乐",url:"http://guozhivip.com/yinyue/"},{name:"樱云 Sakura Cloud",url:"https://tawk.to/chat/5d3441149b94cd38bbe87c81/default"}]}},methods:{}},i,!1,function(t){e("8Bfj")},"data-v-61341cba",null);n.default=o.exports}});
//# sourceMappingURL=8.dca745ccf31849ce86f7.js.map