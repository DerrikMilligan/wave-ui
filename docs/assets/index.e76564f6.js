import{o as r,g as _,a as e,w as l,b as i,r as t,_ as m,e as x,a8 as $}from"./index.c6506304.js";function h(s,n,d,u,f,a){const o=t("title-link"),c=t("example");return r(),_("div",null,[e(o,{h2:""},{default:l(()=>[i("Default")]),_:1}),e(c,null,{pug:l(()=>[]),_:1})])}const v={},k=m(v,[["render",h]]),w=x("div",{class:"w-divider my12"},null,-1);function g(s,n,d,u,f,a){const o=t("title-link"),c=t("alert"),p=t("component-api");return r(),_("div",null,[w,e(o,{class:"title1",h2:""},{default:l(()=>[i("API")]),_:1}),e(c,{class:"mb6",info:""},{default:l(()=>[i("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),e(p,{class:"mt0",items:a.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(p,{items:s.slots,title:"Slots"},null,8,["items"]),e(p,{items:a.events,title:"Events"},null,8,["items"])])}const y={},B={},D={},E={data:()=>({propsDescs:y,slots:B}),computed:{props(){return $.props},events(){return $.emits.reduce((s,n)=>(s[n]=D[n]||{})&&s,{})}}},N=m(E,[["render",g]]);function V(s,n,d,u,f,a){const o=t("ui-component-title"),c=t("examples"),p=t("api");return r(),_("main",null,[e(o,{slug:"w-steps","in-progress":""},{default:l(()=>[i("w-steps")]),_:1}),e(c),e(p)])}const A={components:{Examples:k,Api:N}},P=m(A,[["render",V]]);export{P as default};