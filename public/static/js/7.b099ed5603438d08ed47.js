webpackJsonp([7],{"2NXm":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("7t+N"),n("nUgu");var a={beforeCreate:function(){document.querySelector("body").setAttribute("style","background-color:#333;")},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")},data:function(){return{list1:["不","要","让","别","人","的","看","法","淹","没","了","自","己","心","底","的","声","音","最","重","要","的",",","要","有","勇","气","跟","随","自","己","的","内","心","与","直","觉"],list2:["Don't","let","others'","judgement","submerge","your","inner","voice",".","Most","importantly",",","you","have","to","be","brave","to","follow","your","heart","and","intuition"]}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text_box"},[n("div",{staticClass:"zh"},[n("marquee",{attrs:{behavior:"alternate",direction:"",scrollamount:"14"}},t._l(t.list1,function(e){return n("span",[t._v(t._s(e)+" ")])}),0)],1),t._v(" "),n("div",{staticClass:"en"},[n("marquee",{attrs:{behavior:"alternate",direction:"",scrollamount:"4"}},t._l(t.list2,function(e){return n("span",[t._v(t._s(e)+" ")])}),0)],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"bgcanvas1"}},[e("canvas",{staticClass:"canvas"})]),this._v(" "),e("div",{attrs:{id:"bgcanvas2"}},[e("canvas",{staticClass:"canvas"})])])}]};var o=n("VU/8")(a,r,!1,function(t){n("ZSJ5")},"data-v-6e719870",null);e.default=o.exports},ZSJ5:function(t,e){},nUgu:function(t,e,n){(function(t){window.onload=function(){t("span").each(function(e,n){t(this).css({color:d()})});var e=t(".canvas")[0],n=t(".canvas")[1],a=e.getContext("2d"),r=n.getContext("2d"),o=window.innerHeight,i=window.innerWidth;e.width=o,e.height=i,n.width=o,n.height=i;for(var l=[],s=14,c=Math.floor(o/s),u=0;u<c;u++)l.push(0);var f="01";function d(){return"rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"}setInterval(function(){a.fillStyle="rgba(0, 0, 0, 0.05)",a.fillRect(0,0,o,i),a.font="1000 "+s+"px 微软雅黑",a.fillStyle=d();for(var t=0;t<c;t++){var n=Math.floor(Math.random()*f.length),r=t*s,u=l[t]*s;a.fillText(f[n],r,u),u>=e.height&&Math.random()>.99&&(l[t]=0),l[t]++}},40),setInterval(function(){r.fillStyle="rgba(0, 0, 0, 0.05)",r.fillRect(0,0,o,i),r.font="1000 "+s+"px 微软雅黑",r.fillStyle=d();for(var t=0;t<c;t++){var e=Math.floor(Math.random()*f.length),a=t*s,u=l[t]*s;r.fillText(f[e],a,u),u>=n.height&&Math.random()>.99&&(l[t]=0),l[t]++}},40)}}).call(e,n("7t+N"))}});
//# sourceMappingURL=7.b099ed5603438d08ed47.js.map