(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7b9c544"],{"0a49":function(t,i,e){var n=e("9b43"),a=e("626a"),s=e("4bf8"),c=e("9def"),o=e("cd1c");t.exports=function(t,i){var e=1==t,r=2==t,u=3==t,l=4==t,m=6==t,d=5==t||m,p=i||o;return function(i,o,f){for(var g,v,h=s(i),b=a(h),y=n(o,f,3),_=c(b.length),k=0,j=e?p(i,_):r?p(i,0):void 0;_>k;k++)if((d||k in b)&&(g=b[k],v=y(g,k,h),t))if(e)j[k]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:j.push(g)}else if(l)return!1;return m?-1:u||l?l:j}}},1169:function(t,i,e){var n=e("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"2f21":function(t,i,e){"use strict";var n=e("79e5");t.exports=function(t,i){return!!t&&n(function(){i?t.call(null,function(){},1):t.call(null)})}},"5ae7":function(t,i,e){},6783:function(t,i,e){"use strict";var n=e("5ae7"),a=e.n(n);a.a},"6d67":function(t,i,e){"use strict";var n=e("5ca1"),a=e("0a49")(1);n(n.P+n.F*!e("2f21")([].map,!0),"Array",{map:function(t){return a(this,t,arguments[1])}})},7106:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"navbar"},[t.$store.state.islogin?e("div",{staticClass:"img",on:{click:function(i){return t.$router.push("/userinfo")}}},[e("img",{attrs:{src:this.$store.state.userlist.image,alt:""}})]):t._e(),t.$store.state.islogin?t._e():e("div",{staticClass:"imgno",on:{click:function(i){return t.$router.push("/login")}}},[t._v("\n        登录\n  ")]),t._m(0),t._m(1),t._m(2)])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"search"},[e("span",{staticClass:"iconfont icon-icon-18 ",staticStyle:{"margin-left":"10px","font-size":"12px"}}),t._v("\n       危机合约\n  ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"buy"},[e("span",{staticClass:"center iconfont icon-icon-4 "})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"message"},[e("span",{staticClass:"center iconfont icon-icon-1 "})])}],s={name:"",props:[""],data:function(){return{value:""}},components:{},computed:{},created:function(){},mounted:function(){},methods:{}},c=s,o=(e("e642"),e("2877")),r=Object(o["a"])(c,n,a,!1,null,"1391aea6",null);i["a"]=r.exports},bb51:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("nav-bar"),e("van-tabs",{model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.tabs,function(i){return e("van-tab",{key:i.id,attrs:{title:i.title}},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},t._l(i.list,function(i){return e("div",{staticClass:"pagediv"},t._l(i,function(i){return e("div",{staticClass:"datadiv"},[e("div",{staticClass:"top",on:{click:function(e){return t.$router.push("/detail/"+i.id)}}},[e("img",{attrs:{src:i.image,alt:""}}),e("div",[e("van-icon",{attrs:{name:"video-o"}}),e("span",[t._v(t._s(t.computedcount(i.playback)))]),e("span",{staticStyle:{width:"15px",display:"inline-block"}}),e("span",{staticClass:"iconfont icon-icon-3 "}),e("span",[t._v(t._s(t.computedcount(i.comment)))]),e("span",{staticStyle:{width:"15px",display:"inline-block"}}),e("span",[t._v(t._s(i.time))])],1)]),e("div",{staticClass:"bottom"},[t._v("\n              "+t._s(i.name)+"\n            ")])])}),0)}),0)],1)}),1)],1)},a=[],s=(e("6d67"),[{id:1,name:"这动画太好看了！",image:"/image/1.jpg",playback:756445,comment:114521,time:"04:29"},{id:2,name:"这动画太好看了！",image:"/image/5.jpg",playback:756445,comment:114521,time:"04:29"},{id:3,name:"这动画太好看了！",image:"/image/6.jpg",playback:756445,comment:114521,time:"04:29"},{id:4,name:"这动画太好看了！",image:"/image/7.jpg",playback:756445,comment:114521,time:"04:29"},{id:5,name:"这动画太好看了！",image:"/image/8.jpg",playback:756445,comment:114521,time:"04:29"},{id:6,name:"这动画太好看了！",image:"/image/9.jpg",playback:756445,comment:114521,time:"04:29"},{id:7,name:"这动画太好看了！",image:"/image/10.jpg",playback:756445,comment:114521,time:"04:29"},{id:8,name:"这动画太好看了！",image:"/image/5.jpg",playback:756445,comment:114521,time:"04:29"},{id:9,name:"这动画太好看了！",image:"/image/6.jpg",playback:756445,comment:114521,time:"04:29"},{id:10,name:"这动画太好看了！",image:"/image/7.jpg",playback:756445,comment:114521,time:"04:29"},{id:10,name:"这动画太好看了！",image:"/image/8.jpg",playback:756445,comment:114521,time:"04:29"},{id:12,name:"这动画太好看了！",image:"/image/9.jpg",playback:756445,comment:114521,time:"04:29"}]),c=s,o=e("7106"),r={data:function(){return{tabs:[{id:1,title:"推荐"},{id:2,title:"动画"},{id:3,title:"番剧"},{id:4,title:"国创"},{id:5,title:"音乐"},{id:6,title:"舞蹈"},{id:7,title:"游戏"},{id:8,title:"科技"},{id:9,title:"数码"},{id:10,title:"生活"},{id:11,title:"鬼畜"},{id:12,title:"时尚"}],active:0,count:0,isLoading:!1}},mounted:function(){this.tabs=this.$store.state.tabs,void 0==this.tabs[this.active].list&&this.changetabs(),this.changelist()},components:{NavBar:o["a"]},methods:{changetabs:function(){this.tabs=this.tabs.map(function(t,i){return t.list=[],t.page=0,t.pagesize=4,t})},changelist:function(){0==this.tabs[this.active].page&&(this.tabs[this.active].list.push(this.randomlist(4,c)),this.tabs[this.active].page++,this.$store.commit("changetabs",this.tabs))},randomlist:function(t,i){for(var e=[],n=0;n<t;n++)e.push(i[Math.floor(Math.random()*i.length)]);return e},onRefresh:function(){var t=this;setTimeout(function(){t.tabs[t.active].list.unshift(t.randomlist(4,c)),t.tabs[t.active].page++,t.isLoading=!1,t.count++,t.$store.commit("changetabs",t.tabs)},1e3)},computedcount:function(t){return t/1e4>=1?(t/1e4).toFixed(1)+"万":t}},watch:{active:function(){this.changelist()}},computed:{}},u=r,l=(e("6783"),e("2877")),m=Object(l["a"])(u,n,a,!1,null,"89c0d120",null);i["default"]=m.exports},cd1c:function(t,i,e){var n=e("e853");t.exports=function(t,i){return new(n(t))(i)}},cf51:function(t,i,e){},e642:function(t,i,e){"use strict";var n=e("cf51"),a=e.n(n);a.a},e853:function(t,i,e){var n=e("d3f4"),a=e("1169"),s=e("2b4c")("species");t.exports=function(t){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)||(i=void 0),n(i)&&(i=i[s],null===i&&(i=void 0))),void 0===i?Array:i}}}]);
//# sourceMappingURL=chunk-c7b9c544.73b6ade2.js.map