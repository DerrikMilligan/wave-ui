(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["radio-index-vue"],{db7c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("examples"),a("api")],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{staticClass:"mt4",attrs:{h1:"",slug:"w-radio-and-w-radios"}},[a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),a("span",{staticClass:"code"},[e._v("w-radios")])]),a("w-card",{attrs:{"bg-color":"blue-light5"}},[a("p",{staticClass:"mb3"},[e._v("What it looks like:")]),a("w-radios",{attrs:{items:e.radios1,inline:""},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),a("div",{staticClass:"title4 mt4"},[e._v("States")]),a("div",{staticClass:"w-flex wrap"},[a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}})],1)],1),e._m(0),a("p",[e._v("Let's start with the basic component.")]),a("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radio"}},[e._v("<w-radio>")]),a("div",{staticClass:"w-divider"}),a("alert",{attrs:{tip:""}},[a("div",{staticClass:"title3"},[e._v("Important notes")]),a("strong",{staticClass:"title5"},[e._v("Name attribute")]),a("p",{staticClass:"mb4"},[e._v("With individual radio buttons (using "),a("span",{staticClass:"code"},[e._v("<w-radio>")]),e._v("), the "),a("code",[e._v("name")]),e._v(" prop is\nneeded for the radios to work together. This is how HTML knows they are part of the same group\nof choices."),a("br"),e._v("\nBut when you use a group of radio buttons via "),a("span",{staticClass:"code"},[e._v("<w-radios>")]),e._v(", Wave UI will add the\nname attributes for you.")]),a("strong",{staticClass:"title5"},[e._v("Form validation")]),a("p",[e._v("When a validation is needed on radio buttons, each individual radio button ("),a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(")\nhas a separate validation message."),a("br"),e._v("\nIf you want only one validation for a group of radio buttons, you must use the "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v("\ncomponent.\n")])]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 1. Here is a single radio button\nw-radio I am single - not very useful\n\n.title4.mt8.mb2 2. Here is a duo\nw-radio.mr2(name="radio1") Option 1\nw-radio(name="radio1") Option 2\n\n.title4.mt8.mb2 3. A trio using v-model\nw-radio.mr2(v-model="radio2" return-value="option 1") Option 1\nw-radio.mr2(v-model="radio2" return-value="option 2") Option 2\nw-radio(v-model="radio2" return-value="option 3") Option 3\n\n.title4.mt8.mb2 4. A trio using v-model and a set name\nw-radio.mr2(v-model="radio3" name="radio3" return-value="option 1") Option 1\nw-radio.mr2(v-model="radio3" name="radio3" return-value="option 2") Option 2\nw-radio(v-model="radio3" name="radio3" return-value="option 3") Option 3')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radio2: false,\n  radio3: false\n})\n")]},proxy:!0}])},[a("div",{staticClass:"title4 mb2"},[e._v("1. Here is a single radio button")]),a("w-radio",[e._v("I am single - not very useful")]),a("div",{staticClass:"title4 mt8 mb2"},[e._v("2. Here is a duo")]),a("w-radio",{staticClass:"mr2",attrs:{name:"radio1"}},[e._v("Option 1")]),a("w-radio",{attrs:{name:"radio1"}},[e._v("Option 2")]),a("div",{staticClass:"title4 mt8 mb2"},[e._v("3. A trio using v-model")]),a("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 1"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 1")]),a("w-radio",{staticClass:"mr2",attrs:{"return-value":"option 2"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 2")]),a("w-radio",{attrs:{"return-value":"option 3"},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("Option 3")]),a("div",{staticClass:"title4 mt8 mb2"},[e._v("4. A trio using v-model and a set name")]),a("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 1"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 1")]),a("w-radio",{staticClass:"mr2",attrs:{name:"radio3","return-value":"option 2"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 2")]),a("w-radio",{attrs:{name:"radio3","return-value":"option 3"},model:{value:e.radio3,callback:function(t){e.radio3=t},expression:"radio3"}},[e._v("Option 3")])],1),e._m(1),a("title-link",{attrs:{h2:""}},[e._v("Custom label in w-radio")]),e._m(2),a("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radio.mr5(name="radio1")\n  span.pr1 Choice 1 has an icon\n  w-icon(md) mdi mdi-star\nw-radio(name="radio1")\n  w-tag(bg-color="green-light5" color="green-dark2")\n    | Choice 2 is a tag\n    w-icon.ml1 mdi mdi-heart')]},proxy:!0}])},[a("w-radio",{staticClass:"mr5",attrs:{name:"radio4"}},[a("span",{staticClass:"pr1"},[e._v("Choice 1 has an icon")]),a("w-icon",{attrs:{md:""}},[e._v("mdi mdi-star")])],1),a("w-radio",{attrs:{name:"radio4"}},[a("w-tag",{attrs:{"bg-color":"green-light5",color:"green-dark2"}},[e._v("Choice 2 is a tag"),a("w-icon",{staticClass:"ml1"},[e._v("mdi mdi-heart")])],1)],1)],1),a("alert",{attrs:{tip:""}},[e._v("As seen in this example, the "),a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" component allows you to have complete freedom\nin your radio buttons."),a("br"),e._v("\nBut because in most cases you won't need that, the "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component will make you go\nmuch faster.\n")]),a("title-link",{staticClass:"title1 mt12",attrs:{h2:"",slug:"w-radios"}},[e._v("<w-radios>")]),a("div",{staticClass:"w-divider"}),e._m(3),a("title-link",{staticClass:"title2 primary",attrs:{h3:""}},[e._v("V-model")]),a("alert",{attrs:{info:""}},[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),a("br"),e._v("\nIf no value is set, the choice's label will be returned instead.")]),a("p",[e._v("The v-model can also be preset, or updated externally.")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.w-flex.align-center\n  w-radios(v-model="selection" :items="radioItems")\n  div.title3.ml10 v-model: '+e._s("{{ selection || 'null' }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: 1,\n  radioItems: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[a("div",{staticClass:"w-flex align-center"},[a("w-radios",{attrs:{items:e.radios1},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}}),a("div",{staticClass:"title3 ml10"},[e._v("v-model: "),a("code",[e._v(e._s(e.selection1||"null"))])])],1)]),a("title-link",{attrs:{h2:""}},[e._v("Inline layout")]),a("example",{attrs:{"content-class":"mt3"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios(:items="radioItems" inline)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radioItems: [\n    { label: 'Choice 1' },\n    { label: 'Choice 2' },\n    { label: 'Choice 3' }\n  ]\n})\n")]},proxy:!0}])},[a("w-radios",{attrs:{items:e.radios2,inline:""}})],1),a("title-link",{attrs:{h2:""}},[e._v("Custom label content")]),e._m(4),a("p",[e._v("The great thing is that you can access any custom data from this slot!")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios(v-model="selection" :items="radioItems" color="green")\n  template(#item="{ item }")\n    span.pr2 '+e._s("{{ item.label }}")+"\n    w-icon.success "+e._s("{{ item.icon }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection: 'Square',\n  radioItems: [\n    { label: 'Square', icon: 'mdi mdi-square' },\n    { label: 'Circle', icon: 'mdi mdi-circle' },\n    { label: 'Triangle', icon: 'mdi mdi-triangle' }\n  ],\n})\n")]},proxy:!0}])},[a("w-radios",{attrs:{items:e.radios3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[a("span",{staticClass:"pr2"},[e._v(e._s(o.label))]),a("w-icon",{staticClass:"success"},[e._v(e._s(o.icon))])]}}]),model:{value:e.selection5,callback:function(t){e.selection5=t},expression:"selection5"}})],1),a("div",{staticClass:"w-divider grey-light5 my12"}),a("title-link",{attrs:{h2:""}},[e._v("Color")]),e._m(5),a("title-link",{attrs:{h3:"",slug:"w-radios--colors"}},[a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" colors")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radios.mr2(v-model="selection1" :items="radios1" color="purple") Option 1\n\n.title4.mt8.mb2 Different color per item\nw-radios(v-model="selection2" :items="radios2") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: 1,\n  radios1: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ],\n  selection2: 1,\n  radios2: [\n    { label: 'Choice 1', value: 1, color: 'amber' },\n    { label: 'Choice 2', value: 2, color: 'warning' },\n    { label: 'Choice 3', value: 3, color: 'error' }\n  ]\n})\n")]},proxy:!0}])},[a("w-radios",{staticClass:"mr2",attrs:{items:e.radios1,color:"purple"},model:{value:e.selection6,callback:function(t){e.selection6=t},expression:"selection6"}},[e._v("Option 1")]),a("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),a("w-radios",{attrs:{items:e.radios4},model:{value:e.selection7,callback:function(t){e.selection7=t},expression:"selection7"}},[e._v("Option 2")])],1),a("title-link",{attrs:{h3:"",slug:"w-radio--colors"}},[a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" colors")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-radio.mr2(v-model="selection1" name="radio1" color="teal-light1" :return-value="1") Option 1\nw-radio(v-model="selection1" name="radio1" color="teal-light1" :return-value="2") Option 2\n\n.title4.mt8.mb2 Different color per item\nw-radio.mr2(v-model="selection2" name="radio2" color="pink-light3" :return-value="1") Option 1\nw-radio(v-model="selection2" name="radio2" color="blue-light1" :return-value="2") Option 2')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  selection1: 1,\n  selection2: 1\n})")]},proxy:!0}])},[a("w-radio",{staticClass:"mr2",attrs:{name:"radio5",color:"teal-light1","return-value":1},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}},[e._v("Option 1")]),a("w-radio",{attrs:{name:"radio5",color:"teal-light1","return-value":2},model:{value:e.selection3,callback:function(t){e.selection3=t},expression:"selection3"}},[e._v("Option 2")]),a("div",{staticClass:"title4 mt8 mb2"},[e._v("Different color per item")]),a("w-radio",{staticClass:"mr2",attrs:{name:"radio6",color:"pink-light3","return-value":1},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}},[e._v("Option 1")]),a("w-radio",{attrs:{name:"radio6",color:"blue-light1","return-value":2},model:{value:e.selection4,callback:function(t){e.selection4=t},expression:"selection4"}},[e._v("Option 2")])],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mt12"},[e._v("There are 2 components: "),a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(".\nThe later is a group of radio buttons for convenience.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The above example (case 3 & 4) shows that the radio buttons work without the name attribute,\nusing a v-model, but the navigation using the keyboard arrows will not work as the names are not\nprovided."),a("br"),e._v("\nCase 4 is fully operational. "),a("span",{staticClass:"code"},[e._v(":tada:")]),a("br"),a("strong",[e._v("Note that when you use the "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component, a unique name is set by default so you don't\nhave to worry about it if you don't need it.\n")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" provides a default slot to customize the content.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"my5"},[e._v("The "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" component allows a fast and easy rendering of\nmultiple radio buttons by passing the items through a prop."),a("br"),e._v("\nIt accepts an inline parameter to display the radio buttons inline,\nand allows you to customize the label of each radio button through slot.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" also provides a slot to customize the label of each radio button: "),a("code",[e._v("item")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default the "),a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),a("span",{staticClass:"code"},[e._v("w-radios")]),e._v(" components will use the\nprimary color."),a("br"),e._v("\nYou can provide a different color with the "),a("code",[e._v("color")]),e._v(" option, or you can even set a different\ncolor per item by providing a "),a("code",[e._v("color")]),e._v(" attribute in each of the item objects.\n")])}],l={data:function(){return{selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]}}},r=l,c=a("2877"),d=Object(c["a"])(r,n,s,!1,null,null,null),u=d.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},m=[],p={},_=p,h=Object(c["a"])(_,v,m,!1,null,null,null),b=h.exports,w={components:{Examples:u,Api:b}},f=w,C=Object(c["a"])(f,o,i,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=radio-index-vue.8570b847.js.map