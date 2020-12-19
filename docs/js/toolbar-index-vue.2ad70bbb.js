(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["toolbar-index-vue","toolbar-api-vue","toolbar-examples-vue"],{"1f5b":function(t,s,a){"use strict";a("ddbe")},"50f4":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("title-link",{attrs:{h2:""}},[t._v("Simple toolbar with shadow")]),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar shadow>\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="ml2">Item 1</span>\n  <span class="ml2">Item 2</span>\n  <span class="ml2">Item 3</span>\n</w-toolbar>\n\n<w-toolbar shadow class="mt6 py1">\n  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>\n  <div class="title3">Wave UI</div>\n  <div class="spacer"></div>\n  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>\n  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>\n  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>\n</w-toolbar>\n')]},proxy:!0}])},[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])]),a("w-toolbar",{staticClass:"mt6 py1",attrs:{shadow:""}},[a("w-icon",{staticClass:"mr3",staticStyle:{color:"#497ca2"},attrs:{size:"2.5em"}},[t._v("wi-wave")]),a("div",{staticClass:"title3 my0"},[t._v("Wave UI")]),a("div",{staticClass:"spacer"}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-home",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-chat",text:"",lg:""}}),a("w-button",{staticClass:"ml3",attrs:{icon:"mdi mdi-email",text:"",lg:""}})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),a("example",{attrs:{"content-class":"pa4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar bg-color="blue-light5" color="blue-dark3">\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="ml2">Item 1</span>\n  <span class="ml2">Item 2</span>\n  <span class="ml2">Item 3</span>\n</w-toolbar>\n')]},proxy:!0}])},[a("w-toolbar",{attrs:{"bg-color":"blue-light5",color:"blue-dark3"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])],1),a("title-link",{attrs:{h2:""}},[t._v("Toolbars inside w-card")]),a("p",[t._v("The w-card component will detect if there is a toolbar in the title slot or in the actions\nslot and will remove the default padding and border on this slot if there is.\n")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex wrap :gap="4" class="mt4">\n  <w-card>\n    <template #title>\n      <w-toolbar>\n        <div class="title2">Top Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n\n  <w-card>\n    <template #actions>\n      <w-toolbar bottom>\n        <div class="title2">Bottom Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n</w-flex>\n\n<h3>With shadow</h3>\n\n<w-flex wrap :gap="4" class="mt4">\n  <w-card>\n    <template #title>\n      <w-toolbar shadow>\n        <div class="title2">Top Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n\n  <w-card>\n    <template #actions>\n      <w-toolbar bottom shadow>\n        <div class="title2">Bottom Bar</div>\n        <div class="spacer"></div>\n        <span class="ml2">Item 1</span>\n        <span class="ml2">Item 2</span>\n        <span class="ml2">Item 3</span>\n      </w-toolbar>\n    </template>\n  </w-card>\n</w-flex>')]},proxy:!0},{key:"css",fn:function(){return[t._v(".w-card {\n  flex-grow: 1;\n  max-width: 550px;\n  height: 200px;\n}\n")]},proxy:!0}])},[a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1),a("h3",[t._v("With shadow")]),a("w-flex",{staticClass:"mt4",attrs:{wrap:"",gap:4}},[a("w-card",{scopedSlots:t._u([{key:"title",fn:function(){return[a("w-toolbar",{attrs:{shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Top Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])}),a("w-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[a("w-toolbar",{attrs:{bottom:"",shadow:""}},[a("div",{staticClass:"title2 my0"},[t._v("Bottom Bar")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"ml2"},[t._v("Item 1")]),a("span",{staticClass:"ml2"},[t._v("Item 2")]),a("span",{staticClass:"ml2"},[t._v("Item 3")])])]},proxy:!0}])})],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Custom toolbar height")]),t._m(1),a("example",{attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-toolbar bg-color="blue-light5" color="blue-dark3" height="5em" class="py0">\n  <div class="title2">Title</div>\n  <div class="spacer"></div>\n  <span class="mx1">Item 1</span>\n  <span class="mx1">Item 2</span>\n  <w-divider vertical class="mx2"></w-divider>\n  <span class="mx1">Item 3</span>\n  <span class="mx1">Item 4</span>\n  <w-divider vertical class="mx2"></w-divider>\n  <span class="mx1">Item 5</span>\n  <span class="mx1">Item 6</span>\n</w-toolbar>')]},proxy:!0}])},[a("w-toolbar",{staticClass:"py0",attrs:{"bg-color":"blue-light5",color:"blue-dark3",height:"5.4em"}},[a("div",{staticClass:"title2 my0"},[t._v("Title")]),a("div",{staticClass:"spacer"}),a("span",{staticClass:"mx1"},[t._v("Item 1")]),a("span",{staticClass:"mx1"},[t._v("Item 2")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 3")]),a("span",{staticClass:"mx1"},[t._v("Item 4")]),a("w-divider",{staticClass:"mx2",attrs:{vertical:""}}),a("span",{staticClass:"mx1"},[t._v("Item 5")]),a("span",{staticClass:"mx1"},[t._v("Item 6")])],1)],1)],1)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the text and a "),a("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The "),a("code",[t._v("w-toolbar")]),t._v(" component also accepts a height. It can be set as a string with units\nor a number of pixels (without unit).\n")])}],o=(a("1f5b"),a("2877")),n={},i=Object(o["a"])(n,e,l,!1,null,null,null);s["default"]=i.exports},"72ca":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[a("ui-component-title",[t._v("w-toolbar")]),a("examples"),a("api")],1)},l=[],o=a("50f4"),n=a("b34a"),i={components:{Examples:o["default"],Api:n["default"]}},r=i,c=a("2877"),m=Object(c["a"])(r,e,l,!1,null,null,null);s["default"]=m.exports},b34a:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),a("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),a("api",{attrs:{items:t.slots,title:"Slots"}}),a("api",{attrs:{items:t.events,title:"Events"}})],1)},l=[],o=(a("13d5"),a("d633")),n={color:'Applies a color to the toolbar\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the toolbar\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',absolute:"Sets the CSS position of the toolbar to <code>absolute</code>.",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Applies a border at the top of the toolbar, unless the <code>no-border</code> prop is set to true. Also removes the default bottom border.",height:"Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},i={default:{description:"The toolbar content."}},r={},c={data:function(){return{propsDescs:n,slots:i}},computed:{props:function(){return o["a"].props},events:function(){return o["a"].emits.reduce((function(t,s){return(t[s]={description:r[s]||""})&&t}),{})}}},m=c,p=a("2877"),d=Object(p["a"])(m,e,l,!1,null,null,null);s["default"]=d.exports},ddbe:function(t,s,a){}}]);
//# sourceMappingURL=toolbar-index-vue.2ad70bbb.js.map