import{r as a,o as m,g as u,a as t,w as l,e as o,d as p,b as c,_ as v}from"./index.f25c6fde.js";const f={class:"test ma12 pa12 bd1 bdrs2"},_=o("h1",{class:"mt0 mb8"},"Testing playground",-1);function b(e,s,V,g,h,y){const d=a("w-select"),i=a("w-button"),n=a("w-form");return m(),u("div",f,[_,t(n,{modelValue:e.valid,"onUpdate:modelValue":s[0]||(s[0]=r=>e.valid=r),"no-keyup-validation":!0},{default:l(()=>[t(d,{class:"mt3",label:"Last name",items:e.items,validators:[e.validators.required]},null,8,["items","validators"]),o("code",null,p(e.valid===!1?"false":e.valid||"null"),1),t(i,{type:"submit",disabled:e.valid===!1},{default:l(()=>[c("Validate")]),_:1},8,["disabled"])]),_:1},8,["modelValue"])])}const w={data:()=>({valid:null,validators:{required:e=>!!e||"This field is required"},items:[{label:"Item 1",value:1},{label:"Item 2",value:2}]})},k=v(w,[["render",b]]);export{k as default};