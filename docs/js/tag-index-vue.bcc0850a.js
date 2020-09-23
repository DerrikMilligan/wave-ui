(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tag-index-vue"],{"527f":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("examples"),r("api")],1)},l=[],n=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("title-link",{staticClass:"mt4 code",attrs:{h1:""}},[t._v("w-tag")]),r("title-link",{attrs:{h2:""}},[t._v("Default tag & outline")]),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-tag.mr4 tag\nw-tag(outline) tag\n")]},proxy:!0}])},[r("w-tag",{staticClass:"mr4"},[t._v("tag")]),r("w-tag",{attrs:{outline:""}},[t._v("tag")])],1),r("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(0),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag.mr4(color="primary") tag\nw-tag.mr4(bg-color="primary") tag\nw-tag(bg-color="primary" color="yellow") tag\n')]},proxy:!0}])},[r("w-tag",{staticClass:"mr4",attrs:{color:"primary"}},[t._v("tag")]),r("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary"}},[t._v("tag")]),r("w-tag",{attrs:{"bg-color":"primary",color:"yellow"}},[t._v("tag")])],1),r("title-link",{attrs:{h2:""}},[t._v("Round, tile & shadow")]),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag.mr4(bg-color="primary" round) round\nw-tag.mr4(bg-color="primary" tile) tile\nw-tag(color="primary" shadow) shadow\n')]},proxy:!0}])},[r("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",round:""}},[t._v("round")]),r("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",tile:""}},[t._v("tile")]),r("w-tag",{attrs:{color:"primary",shadow:""}},[t._v("shadow")])],1),r("title-link",{attrs:{h2:""}},[t._v("Sizes")]),r("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.w-flex.wrap.align-center\n  w-tag.ma1(color="primary" xs) extra small\n  w-tag.ma1(color="primary" sm) small\n  w-tag.ma1(color="primary" md) medium\n  w-tag.ma1(color="primary" lg) large\n  w-tag.ma1(color="primary" xl) extra large\np.my4 You can also put a custom size using the width and height props.\nw-tag(outline color="primary" xl width="10em" height="3em") a bigger tag\n')]},proxy:!0}])},[r("div",{staticClass:"w-flex wrap align-center"},[r("w-tag",{staticClass:"ma1",attrs:{color:"primary",xs:""}},[t._v("extra small")]),r("w-tag",{staticClass:"ma1",attrs:{color:"primary",sm:""}},[t._v("small")]),r("w-tag",{staticClass:"ma1",attrs:{color:"primary",md:""}},[t._v("medium")]),r("w-tag",{staticClass:"ma1",attrs:{color:"primary",lg:""}},[t._v("large")]),r("w-tag",{staticClass:"ma1",attrs:{color:"primary",xl:""}},[t._v("extra large")])],1),r("p",{staticClass:"my4"},[t._v("You can also put a custom size using the "),r("code",[t._v("width")]),t._v(" and "),r("code",[t._v("height")]),t._v(" props.")]),r("w-tag",{attrs:{outline:"",color:"primary",xl:"",width:"10em",height:"3em"}},[t._v("a bigger tag")])],1),r("title-link",{attrs:{h2:""}},[t._v("Toggleable state & closable")]),t._m(1),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-tag(\n  v-model=\"tagOn\"\n  :bg-color=\"tagOn ? 'primary' : 'primary-light2'\"\n  dark\n  lg\n  toggle) "+t._s("{{ tagOn ? 'active' : 'inactive' }}")+"\nspan.ml4\n  | Value:\n  code.ml1 "+t._s("{{ tagOn }}"))]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tagOn: false\n})\n")]},proxy:!0}])},[r("w-tag",{attrs:{"bg-color":t.tagOn1?"primary":"primary-light2",dark:"",lg:"",toggle:""},model:{value:t.tagOn1,callback:function(a){t.tagOn1=a},expression:"tagOn1"}},[t._v(t._s(t.tagOn1?"active":"inactive"))]),r("span",{staticClass:"ml4"},[t._v("Value:"),r("code",{staticClass:"ml1"},[t._v(t._s(t.tagOn1))])])],1),r("h3",[t._v("Closable tag")]),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag(v-model="tagOn" closable lg :outline="tagOn" color="primary" :width="145") v-model & close')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tagOn: false\n})\n")]},proxy:!0}])},[r("w-tag",{attrs:{closable:"",lg:"",outline:t.tagOn2,color:"primary",width:145},model:{value:t.tagOn2,callback:function(a){t.tagOn2=a},expression:"tagOn2"}},[t._v("v-model & close")])],1),r("title-link",{attrs:{h2:""}},[t._v("Custom content")]),r("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag(color="pink-light1" bg-color="pink-light5")\n  w-icon.mr1(sm) mdi mdi-heart\n  | like it')]},proxy:!0}])},[r("w-tag",{attrs:{color:"pink-light1","bg-color":"pink-light5"}},[r("w-icon",{staticClass:"mr1",attrs:{sm:""}},[t._v("mdi mdi-heart")]),t._v("like it")],1)],1)],1)},o=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("p",[t._v("Like in most components, you can set a "),r("code",[t._v("color")]),t._v(" for the text and a "),r("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("p",[t._v("When a tag has a "),r("code",[t._v("v-model")]),t._v(" or "),r("code",[t._v("value")]),t._v(", it becomes clickable and its "),r("code",[t._v("v-model")]),t._v("\nvalue is updated when user clicks on it.")])}],s={data:function(){return{tagOn1:!1,tagOn2:!0}}},i=s,c=r("2877"),g=Object(c["a"])(i,n,o,!1,null,null,null),m=g.exports,p=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div")},u=[],v={},_=v,d=Object(c["a"])(_,p,u,!1,null,null,null),w=d.exports,y={components:{Examples:m,Api:w}},h=y,f=Object(c["a"])(h,e,l,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=tag-index-vue.bcc0850a.js.map