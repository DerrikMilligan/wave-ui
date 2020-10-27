(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["rating-index-vue","rating-api-vue","rating-examples-vue"],{1382:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The missing props descriptions will be added shortly (all the props are already listed).")]),s("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),s("api",{attrs:{items:t.slots,title:"Slots"}}),s("api",{attrs:{items:t.events,title:"Events"}})],1)},r=[],a=(s("13d5"),s("c57b")),i={},l={},o={},c={data:function(){return{propsDescs:i,slots:l}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(t,e){return(t[e]={description:o[e]||""})&&t}),{})}}},d=c,u=s("2877"),p=Object(u["a"])(d,n,r,!1,null,null,null);e["default"]=p.exports},"572a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ui-component-title",{attrs:{slug:"w-rating"}},[s("div",{staticClass:"code"},[t._v("w-rating")]),s("w-tag",{staticClass:"ml2 text-upper",attrs:{color:"orange",outline:""}},[t._v("In progress")])],1),s("examples"),s("api")],1)},r=[],a=s("59e3"),i=s("1382"),l={components:{Examples:a["default"],Api:i["default"]}},o=l,c=s("2877"),d=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports},"59e3":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-link",{attrs:{h2:""}},[t._v("Default")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-rating\n")]},proxy:!0}])},[s("w-rating")],1),s("title-link",{attrs:{h2:""}},[t._v("V-model")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-rating(v-model="rating")\ndiv.mt2\n  strong.mr2 v-model:\n  code '+t._s("{{ rating }}")+"\n")]},proxy:!0}])},[s("w-rating",{model:{value:t.rating1,callback:function(e){t.rating1=e},expression:"rating1"}}),s("div",{staticClass:"mt2"},[s("strong",{staticClass:"mr2"},[t._v("v-model:")]),s("code",[t._v(t._s(t.rating1))])])],1),s("title-link",{attrs:{h2:""}},[t._v("Color")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-rating.d-block.my4(color="green")\nw-rating.d-block.my4(bg-color="light-green")\n')]},proxy:!0}])},[s("w-rating",{staticClass:"d-block my4",attrs:{color:"green"}}),s("w-rating",{staticClass:"d-block my4",attrs:{"bg-color":"light-green",color:"yellow"}})],1),s("title-link",{attrs:{h2:""}},[t._v("Custom Icons")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-rating.d-block.my4(icon="mdi mdi-heart")\n')]},proxy:!0}])},[s("w-rating",{staticClass:"d-block my4",attrs:{icon:"mdi mdi-heart"}})],1),s("title-link",{attrs:{h2:""}},[t._v("Sizes")]),t._m(0),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-rating.d-block.my4(xs)\nw-rating.d-block.my4(sm)\nw-rating.d-block.my4(md)\nw-rating.d-block.my4(lg)\nw-rating.d-block.my4(xl)")]},proxy:!0}])},[s("w-rating",{staticClass:"d-block my4",attrs:{xs:""}}),s("w-rating",{staticClass:"d-block my4",attrs:{sm:""}}),s("w-rating",{staticClass:"d-block my4",attrs:{md:""}}),s("w-rating",{staticClass:"d-block my4",attrs:{lg:""}}),s("w-rating",{staticClass:"d-block my4",attrs:{xl:""}})],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The rating size can be controlled via the preset sizes "),s("code",[t._v("xs")]),t._v(", "),s("code",[t._v("sm")]),t._v(", "),s("code",[t._v("md")]),t._v(",\n"),s("code",[t._v("lg")]),t._v(", "),s("code",[t._v("xl")]),t._v(" or via CSS override.\n")])}],a={data:function(){return{rating1:3}}},i=a,l=s("2877"),o=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=rating-index-vue.62709a23.js.map