(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["customization"],{"0be0":function(s,a,t){"use strict";var e=t("5d33"),i=t.n(e);i.a},"5d33":function(s,a,t){},cb0d:function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("title-link",{staticClass:"mt4",attrs:{h1:"",slug:"customization"}},[s._v("Customization Via SCSS (optional)")]),t("p",[s._v("Wave UI components rely on SCSS variables that you can easily override from Your SCSS file, just like this:")]),s._m(0),t("div",{staticClass:"title4"},[s._v("But to do so, you need to slightly modify your config.")]),t("title-link",{attrs:{h2:""}},[s._v("Modify your config")]),s._m(1),t("p",[s._v("In main.js, replace the 2 Wave UI imports with:")]),t("ssh-pre",{staticClass:"mt5",attrs:{language:"js",label:"main.js"}},[s._v("import WaveUI from 'wave-ui/src/wave-ui'\nimport 'wave-ui/src/wave-ui/scss/index.scss'\n")]),t("div",{staticClass:"title4 mt6"},[s._v("2. Create an SCSS file & import it globally")]),t("ul",[s._m(2),t("li",{staticClass:"mt2"},[s._v("Import this SCSS variables file globally from Vue config and re-serve the app."),t("ssh-pre",{staticClass:"mt5",attrs:{language:"js",label:"vue.config.js"}},[s._v("module.exports = {\n  transpileDependencies: ['wave-ui'],\n  css: {\n    loaderOptions: {\n      sass: { prependData: '@import \"@/scss/_variables.scss\";' }\n    }\n  }\n}\n")])],1)]),t("div",{staticClass:"title4 mt8"},[s._v("Voilà !")]),t("p",[s._v("You're all set, you can now override the SCSS variables.")]),t("div",{staticClass:"w-divider my12"}),t("title-link",{attrs:{h2:""}},[s._v("Basic SCSS overrides")]),s._m(3),t("title-link",{attrs:{h2:""}},[s._v("Give Wave UI CSS more priority")]),t("p",[s._v("It is also possible to control Wave UI's CSS rules priorities by overriding the CSS base scope:")]),s._m(4),s._m(5),t("alert",{staticClass:"mt6 py3",attrs:{success:""}},[s._v("This means you can control all the css rules specificity and consequently their priority!\n")]),t("title-link",{attrs:{h2:"",slug:"presets"}},[s._v("Presets"),t("w-tag",{staticClass:"ml3",attrs:{"bg-color":"red-light1",lg:"",color:"white"}},[s._v("Coming soon")])],1),t("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[s._v("// Buttons example.\n{\n  'w-button': { sm: true, outlined: true, round: true }\n}")])],1)},i=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"ssh-pre",attrs:{"data-label":"SCSS"}},[t("span",{staticClass:"purple text-bold"},[s._v("@import ")]),t("span",{staticClass:"red-light2"},[s._v("'wave-ui/src/wave-ui/scss/_variables'")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("br"),t("span",{staticClass:"pink"},[s._v("$base-font-size")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("14px")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$base-increment")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("5px")]),t("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"title4 mt4"},[s._v("1. Update "),t("span",{staticClass:"code"},[s._v("main.js")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("li",[s._v("In your project "),t("span",{staticClass:"code"},[s._v("src")]),s._v(" folder, create a "),t("code",[s._v("_variables.scss")]),s._v(", usually in an "),t("span",{staticClass:"code"},[s._v("scss")]),s._v("\nfolder.\n")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"ssh-pre",attrs:{"data-label":"@/scss/_variables.scss"}},[t("span",{staticClass:"grey-light1 text-italic"},[s._v("// First import the Wave UI variables, then override what you want.")]),t("br"),t("span",{staticClass:"purple text-bold"},[s._v("@import ")]),t("span",{staticClass:"red-light2"},[s._v("'wave-ui/src/wave-ui/scss/_variables'")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("br"),t("span",{staticClass:"pink"},[s._v("$base-font-size")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("14px")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$base-increment")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"purple text-bold"},[s._v("round")]),t("span",{staticClass:"blue-grey"},[s._v("(")]),t("span",{staticClass:"pink"},[s._v("$base-font-size")]),t("span",{staticClass:"blue-grey mx1"},[s._v("/")]),t("span",{staticClass:"orange"},[s._v("4")]),t("span",{staticClass:"blue-grey"},[s._v(")")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$layout-padding")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"pink"},[s._v("$base-increment")]),t("span",{staticClass:"blue-grey mx1"},[s._v("*")]),t("span",{staticClass:"orange"},[s._v("4")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$border-radius")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("3px")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$border")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("1px solid rgba(0, 0, 0, 0.15)")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$drawer-max-size")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("380px")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$transition-duration")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("0.25s")]),t("span",{staticClass:"blue-grey"},[s._v(";")]),t("br"),t("span",{staticClass:"pink"},[s._v("$box-shadow")]),t("span",{staticClass:"blue-grey"},[s._v(": ")]),t("span",{staticClass:"deep-orange"},[s._v("0 3px 1px -2px rgba(0, 0, 0, 0.2),")]),t("br"),t("span",{staticClass:"deep-orange"},[s._v("             0 2px 2px 0 rgba(0, 0, 0, 0.15),")]),t("br"),t("span",{staticClass:"deep-orange"},[s._v("             0 1px 5px 0 rgba(0, 0, 0, 0.15)")]),t("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"ssh-pre",attrs:{"data-label":"SCSS"}},[t("span",{staticClass:"pink"},[s._v("$css-scope")]),t("span",{staticClass:"blue-grey mr1"},[s._v(":")]),t("span",{staticClass:"red-light2"},[s._v("'.w-app'")]),t("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("For instance if you set the scope to "),t("code",[s._v("html > body > div.w-app")]),s._v(", the default\n"),t("code",[s._v(".w-app .primary {color: #234781;}")]),s._v(" would become\n"),t("code",[s._v("html > body > div.w-app .primary {color: #234781;}")]),s._v(".")])}],l=(t("0be0"),t("2877")),r={},n=Object(l["a"])(r,e,i,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=customization.2ae83afd.js.map