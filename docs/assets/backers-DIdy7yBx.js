import{a as v}from"./axios-B4uVmeYG.js";import{r as i,o as l,g as c,a as r,w as a,b as o,d as t,F as b,k,m,e as p,t as y,_ as w}from"./index-DIRMtT9U.js";const B="/wave-ui/assets/divriots-B_KSrxWL.svg",x="/wave-ui/assets/divriots-grey-mhwOlI6i.svg",G={class:"text-center"},L=t("div",{class:"mb12"},[t("h2",null,"A big THANK YOU to all the backers!"),t("p",null,"Thank you to all of you, you make this happen, you are part of this library!")],-1),$=["href"],D=["src"],R={class:"backer plus ma1"},E=t("p",{class:"mt10"},[o("If you would like to support Wave UI, you can"),t("a",{class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},"become a sponsor"),o("or"),t("a",{class:"ml1",href:"https://www.paypal.me/antoniandre1",target:"_blank"},"make a donation"),o(". Thank you! 🙏🙏")],-1),I=t("h2",{class:"gold"},"Gold Sponsors 🔥",-1),N={class:"gold-sponsors"},S={href:"https://divriots.com/",target:"_blank"},T=["src"];function C(s,n,d,O,V,j){const _=i("title-link"),u=i("w-icon"),h=i("w-tooltip"),g=i("w-flex");return l(),c("main",null,[r(_,{class:"mt4",h1:""},{default:a(()=>[o("Backers")]),_:1}),t("div",G,[L,r(g,{class:"align-center wrap justify-center backers"},{default:a(()=>[(l(!0),c(b,null,k(s.backers,e=>(l(),c("div",{class:"backer ma1",key:e.username},[r(h,null,{activator:a(({on:A})=>[t("a",m({href:e.url,target:"_blank"},p(A,!0)),[t("img",{class:"avatar",alt:"",src:e.avatar,onError:n[0]||(n[0]=f=>f.target.src=s.emptyGif)},null,40,D),r(u,{class:"octocat",xl:""},{default:a(()=>[o("mdi mdi-github")]),_:1})],16,$)]),default:a(()=>[o(y(e.username),1)]),_:2},1024)]))),128)),r(h,null,{activator:a(({on:e})=>[t("div",R,[t("a",m({class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},p(e,!0)),[r(u,{class:"white",xl:""},{default:a(()=>[o("wi-plus")]),_:1})],16)])]),default:a(()=>[o("Add yourself!")]),_:1})]),_:1}),E,I,t("div",N,[t("a",S,[t("img",{src:s.$store.state.darkMode?s.DivRiotsLogoGrey:s.DivRiotsLogo},null,8,T)])])])])}const H=["divriots","nmauersberg","KleinSamuel","chris-deep","crbast","CoolGoose","bohdaq","cordova-jauregui","consuman","bastien09","micksp","orefalo","helenetran","antoniandre"],K={data:()=>({emptyGif:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",backers:[],DivRiotsLogo:B,DivRiotsLogoGrey:x}),created(){H.forEach((s,n)=>{this.backers[n]={username:s,avatar:"",url:`https://github.com/${s}`},v.get(`https://api.github.com/users/${s}`).then(d=>{this.backers[n].avatar=d.data.avatar_url})})}},U=w(K,[["render",C]]);export{U as default};
