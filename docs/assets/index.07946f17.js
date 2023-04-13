`:`
`;return i.join(n)}commitMessage(){return`${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`}commitSha(){return this.faker.datatype.hexadecimal({length:40,case:"lower",prefix:""})}shortSha(){return this.faker.datatype.hexadecimal({length:7,case:"lower",prefix:""})}},wu=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(wu.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this))}abbreviation(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation)}adjective(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective)}noun(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun)}verb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb)}ingverb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb)}phrase(){let u={abbreviation:this.abbreviation,adjective:this.adjective,ingverb:this.ingverb,noun:this.noun,verb:this.verb},a=this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);return this.faker.helpers.mustache(a,u)}};function cw(u){let a=mw(u.replace(/L?$/,"0"));return a===0?0:10-a}function mw(u){u=u.replace(/[\s-]/g,"");let a=0,e=!1;for(let i=u.length-1;i>=0;i--){let n=parseInt(u.substring(i,i+1));e&&(n*=2,n>9&&(n=n%10+1)),a+=n,e=!e}return a%10}var Fw={},kw=[];function Cw(u,a){return u[a]===void 0?-1:0}function Z(u,a,e,i,n){throw console.error("Error",e),console.log(`Found ${Object.keys(i).length} unique entries before throwing error.
retried: ${n}
total time: ${a-u}ms`),new g(`${e} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`)}function Nu(u,a,e={}){var i;let n=new Date().getTime(),{startTime:t=new Date().getTime(),maxTime:l=50,maxRetries:x=50,compare:D=Cw,store:m=Fw}=e,{exclude:c=kw}=e;if(e.currentIterations=(i=e.currentIterations)!=null?i:0,Array.isArray(c)||(c=[c]),n-t>=l)return Z(t,n,`Exceeded maxTime: ${l}`,m,e.currentIterations);if(e.currentIterations>=x)return Z(t,n,`Exceeded maxRetries: ${x}`,m,e.currentIterations);let F=u.apply(this,a);return D(m,F)===-1&&c.indexOf(F)===-1?(m[F]=F,e.currentIterations=0,F):(e.currentIterations++,Nu(u,a,{...e,startTime:t,maxTime:l,maxRetries:x,compare:D,exclude:c}))}var Tu=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(Tu.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this))}slugify(u=""){return u.replace(/ /g,"-").replace(/[^\一-龠\ぁ-ゔ\ァ-ヴー\w\.\-]+/g,"")}replaceSymbolWithNumber(u="",a="#"){let e="";for(let i=0;i<u.length;i++)u.charAt(i)===a?e+=this.faker.datatype.number(9):u.charAt(i)==="!"?e+=this.faker.datatype.number({min:2,max:9}):e+=u.charAt(i);return e}replaceSymbols(u=""){let a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e="";for(let i=0;i<u.length;i++)u.charAt(i)==="#"?e+=this.faker.datatype.number(9):u.charAt(i)==="?"?e+=this.arrayElement(a):u.charAt(i)==="*"?e+=this.faker.datatype.boolean()?this.arrayElement(a):this.faker.datatype.number(9):e+=u.charAt(i);return e}replaceCreditCardSymbols(u="6453-####-####-####-###L",a="#"){u=this.regexpStyleStringParse(u),u=this.replaceSymbolWithNumber(u,a);let e=cw(u);return u.replace("L",String(e))}repeatString(u="",a=0){return h({deprecated:"faker.helpers.repeatString()",proposed:"String.prototype.repeat()",since:"7.5",until:"8.0"}),u.repeat(a)}regexpStyleStringParse(u=""){let a=/(.)\{(\d+)\,(\d+)\}/,e=/(.)\{(\d+)\}/,i=/\[(\d+)\-(\d+)\]/,n,t,l,x,D=u.match(a);for(;D!=null;)n=parseInt(D[2]),t=parseInt(D[3]),n>t&&(l=t,t=n,n=l),x=this.faker.datatype.number({min:n,max:t}),u=u.slice(0,D.index)+D[1].repeat(x)+u.slice(D.index+D[0].length),D=u.match(a);for(D=u.match(e);D!=null;)x=parseInt(D[2]),u=u.slice(0,D.index)+D[1].repeat(x)+u.slice(D.index+D[0].length),D=u.match(e);for(D=u.match(i);D!=null;)n=parseInt(D[1]),t=parseInt(D[2]),n>t&&(l=t,t=n,n=l),u=u.slice(0,D.index)+this.faker.datatype.number({min:n,max:t}).toString()+u.slice(D.index+D[0].length),D=u.match(i);return u}shuffle(u){if(u==null||u.length===0)return u||[];for(let a=u.length-1;a>0;--a){let e=this.faker.datatype.number(a),i=u[a];u[a]=u[e],u[e]=i}return u}uniqueArray(u,a){if(Array.isArray(u)){let i=new Set(u),n=Array.from(i);return this.shuffle(n).splice(0,a)}let e=new Set;try{if(typeof u=="function")for(;e.size<a;)e.add(u())}catch{}return Array.from(e)}mustache(u,a){if(u==null)return"";for(let e in a){let i=new RegExp(`{{${e}}}`,"g"),n=a[e];u=u.replace(i,n)}return u}maybe(u,a={}){let{probability:e=.5}=a;if(this.faker.datatype.float({min:0,max:1})<e)return u()}objectKey(u){let a=Object.keys(u);return this.arrayElement(a)}objectValue(u){let a=this.faker.helpers.objectKey(u);return u[a]}arrayElement(u=["a","b","c"]){let a=u.length>1?this.faker.datatype.number({max:u.length-1}):0;return u[a]}arrayElements(u=["a","b","c"],a){typeof a!="number"?a=u.length===0?0:this.faker.datatype.number({min:1,max:u.length}):a>u.length?a=u.length:a<0&&(a=0);let e=u.slice(0),i=u.length,n=i-a,t,l;for(;i-- >n;)l=Math.floor((i+1)*this.faker.datatype.float({min:0,max:.99})),t=e[l],e[l]=e[i],e[i]=t;return e.slice(n)}fake(u){if(typeof u!="string"||u.length===0)throw new g("string parameter is required!");let a=u.search(/{{[a-z]/),e=u.indexOf("}}",a);if(a===-1||e===-1)return u;let i=u.substring(a+2,e+2).replace("}}","").replace("{{",""),n=/\(([^)]+)\)/,t=n.exec(i),l="";t&&(i=i.replace(n,""),l=t[1]);let x=i.split("."),D=this.faker,m=this.faker.definitions;for(let y of x)D=D==null?void 0:D[y],m=m==null?void 0:m[y];let c;if(typeof D=="function")c=D;else if(Array.isArray(m))c=()=>this.faker.helpers.arrayElement(m);else throw new g(`Invalid module method or definition: ${i}
- faker.${i} is not a function
- faker.definitions.${i} is not an array`);c=c.bind(this);let F;try{F=JSON.parse(l)}catch{F=l}let C;typeof F=="string"&&F.length===0?C=String(c()):C=String(c(F));let v=u.substring(0,a)+C+u.substring(e+2);return v===""?"":this.fake(v)}unique(u,a,e={}){let{maxTime:i=50,maxRetries:n=50}=e;return Nu(u,a,{...e,startTime:new Date().getTime(),maxTime:i,maxRetries:n,currentIterations:0})}},hw=class{constructor(u){this.faker=u}image(u,a,e,i){return this.imageUrl(u,a,e,i)}imageGrayscale(u,a,e){return this.imageUrl(u,a,e)}imageBlurred(u,a,e){return this.imageUrl(u,a,void 0,e)}imageRandomSeeded(u,a,e,i,n){return this.imageUrl(u,a,e,i,n)}avatar(){return h({deprecated:"faker.image.lorempicsum.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(u,a,e,i,n){u=u||640,a=a||480;let t="https://picsum.photos";return n&&(t+=`/seed/${n}`),t+=`/${u}/${a}`,e&&i?`${t}?grayscale&blur=${i}`:e?`${t}?grayscale`:i?`${t}?blur=${i}`:t}},gw=class{constructor(u){this.faker=u}image(u,a,e){let i=["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport"];return this[this.faker.helpers.arrayElement(i)](u,a,e)}avatar(){return h({deprecated:"faker.image.lorempixel.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(u,a,e,i){u=u||640,a=a||480;let n=`https://lorempixel.com/${u}/${a}`;return e!=null&&(n+=`/${e}`),i&&(n+=`?${this.faker.datatype.number()}`),n}abstract(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"abstract",e)}animals(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"animals",e)}business(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"business",e)}cats(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"cats",e)}city(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"city",e)}food(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"food",e)}nightlife(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"nightlife",e)}fashion(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"fashion",e)}people(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"people",e)}nature(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"nature",e)}sports(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"sports",e)}technics(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"technics",e)}transport(u,a,e){return this.faker.image.lorempixel.imageUrl(u,a,"transport",e)}},Lu=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(Lu.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this))}imageUrl(u,a,e,i,n,t){u=u||640,a=a||u;let l="https://via.placeholder.com";return l+=`/${u}x${a}`,n!=null&&(l+=`/${n.replace("#","").toUpperCase()}`,t!=null&&(l+=`/${t.replace("#","").toUpperCase()}`)),i!=null&&(l+=`.${i}`),e!=null&&(l+=`?${new URLSearchParams({text:e}).toString()}`),l}randomUrl(u,a,e){return this.imageUrl(u,a,this.faker.lorem.word(),e,this.faker.color.rgb({casing:"upper",prefix:""}),this.faker.color.rgb({casing:"upper",prefix:""}))}},pw=class{constructor(u){this.faker=u}get categories(){return h({deprecated:"faker.image.unsplash.categories",since:"7.3",until:"8.0"}),["food","nature","people","technology","objects","buildings"]}image(u,a,e){return this.imageUrl(u,a,void 0,e)}avatar(){return h({deprecated:"faker.image.unsplash.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(u,a,e,i){u=u||640,a=a||480;let n="https://source.unsplash.com";return e!=null&&(n+=`/category/${e}`),n+=`/${u}x${a}`,i!=null&&/^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$/.test(i)&&(n+=`?${i}`),n}food(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"food",e)}people(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"people",e)}nature(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"nature",e)}technology(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"technology",e)}objects(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"objects",e)}buildings(u,a,e){return this.faker.image.unsplash.imageUrl(u,a,"buildings",e)}},Hu=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(Hu.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this));this.lorempixel=new gw(this.faker),this.unsplash=new pw(this.faker),this.lorempicsum=new hw(this.faker),this.placeholder=new Lu(this.faker)}image(u,a,e){let i=["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport"];return this[this.faker.helpers.arrayElement(i)](u,a,e)}avatar(){return this.faker.internet.avatar()}imageUrl(u,a,e,i){u=u||640,a=a||480;let n=`https://loremflickr.com/${u}/${a}`;return e!=null&&(n+=`/${e}`),i&&(n+=`?lock=${this.faker.datatype.number()}`),n}abstract(u,a,e){return this.imageUrl(u,a,"abstract",e)}animals(u,a,e){return this.imageUrl(u,a,"animals",e)}business(u,a,e){return this.imageUrl(u,a,"business",e)}cats(u,a,e){return this.imageUrl(u,a,"cats",e)}city(u,a,e){return this.imageUrl(u,a,"city",e)}food(u,a,e){return this.imageUrl(u,a,"food",e)}nightlife(u,a,e){return this.imageUrl(u,a,"nightlife",e)}fashion(u,a,e){return this.imageUrl(u,a,"fashion",e)}people(u,a,e){return this.imageUrl(u,a,"people",e)}nature(u,a,e){return this.imageUrl(u,a,"nature",e)}sports(u,a,e){return this.imageUrl(u,a,"sports",e)}technics(u,a,e){return this.imageUrl(u,a,"technics",e)}transport(u,a,e){return this.imageUrl(u,a,"transport",e)}dataUri(u,a,e="grey"){let i=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${u}" height="${a}"><rect width="100%" height="100%" fill="${e}"/><text x="${u/2}" y="${a/2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${u}x${a}</text></svg>`;return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(i)}};function vw(u){let a=c=>{let F=u.datatype.number({min:0,max:100})/100,C=0,v=0,y;for(let z in c)if(Object.prototype.hasOwnProperty.call(c,z)){if(v=c[z]+C,y=z,F>=C&&F<=v)break;C=C+c[z]}return y},e=()=>u.helpers.arrayElement(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"]),i=()=>{let c=a({chrome:.45132810566,iexplorer:.27477061836,firefox:.19384170608,safari:.06186781118,opera:.01574236955}),F=a({chrome:{win:.89,mac:.09,lin:.02},firefox:{win:.83,mac:.16,lin:.01},opera:{win:.91,mac:.03,lin:.06},safari:{win:.04,mac:.96},iexplorer:{win:1}}[c]);return[c,F]},n=c=>{let F={lin:["i686","x86_64"],mac:{Intel:.48,PPC:.01,"U; Intel":.48,"U; PPC":.01},win:["","WOW64","Win64; x64"]}[c];return Array.isArray(F)?u.helpers.arrayElement(F):a(F)},t=c=>{let F="";for(let C=0;C<c;C++)F+=`.${u.datatype.number({min:0,max:9})}`;return F},l={net(){return[u.datatype.number({min:1,max:4}),u.datatype.number({min:0,max:9}),u.datatype.number({min:1e4,max:99999}),u.datatype.number({min:0,max:9})].join(".")},nt(){return[u.datatype.number({min:5,max:6}),u.datatype.number({min:0,max:3})].join(".")},ie(){return u.datatype.number({min:7,max:11})},trident(){return[u.datatype.number({min:3,max:7}),u.datatype.number({min:0,max:1})].join(".")},osx(c){return[10,u.datatype.number({min:5,max:10}),u.datatype.number({min:0,max:9})].join(c||".")},chrome(){return[u.datatype.number({min:13,max:39}),0,u.datatype.number({min:800,max:899}),0].join(".")},presto(){return`2.9.${u.datatype.number({min:160,max:190})}`},presto2(){return`${u.datatype.number({min:10,max:12})}.00`},safari(){return[u.datatype.number({min:531,max:538}),u.datatype.number({min:0,max:2}),u.datatype.number({min:0,max:2})].join(".")}},x={firefox(c){let F=`${u.datatype.number({min:5,max:15})}${t(2)}`,C=`Gecko/20100101 Firefox/${F}`,v=n(c);return`Mozilla/5.0 ${c==="win"?`(Windows NT ${l.nt()}${v?`; ${v}`:""}`:c==="mac"?`(Macintosh; ${v} Mac OS X ${l.osx()}`:`(X11; Linux ${v}`}; rv:${F.slice(0,-2)}) ${C}`},iexplorer(){let c=l.ie();return c>=11?`Mozilla/5.0 (Windows NT 6.${u.datatype.number({min:1,max:3})}; Trident/7.0; ${u.datatype.boolean()?"Touch; ":""}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${c}.0; Windows NT ${l.nt()}; Trident/${l.trident()}${u.datatype.boolean()?`; .NET CLR ${l.net()}`:""})`},opera(c){let F=` Presto/${l.presto()} Version/${l.presto2()})`,C=c==="win"?`(Windows NT ${l.nt()}; U; ${e()}${F}`:c==="lin"?`(X11; Linux ${n(c)}; U; ${e()}${F}`:`(Macintosh; Intel Mac OS X ${l.osx()} U; ${e()} Presto/${l.presto()} Version/${l.presto2()})`;return`Opera/${u.datatype.number({min:9,max:14})}.${u.datatype.number({min:0,max:99})} ${C}`},safari(c){let F=l.safari(),C=`${u.datatype.number({min:4,max:7})}.${u.datatype.number({min:0,max:1})}.${u.datatype.number({min:0,max:10})}`;return`Mozilla/5.0 ${c==="mac"?`(Macintosh; ${n("mac")} Mac OS X ${l.osx("_")} rv:${u.datatype.number({min:2,max:6})}.0; ${e()}) `:`(Windows; U; Windows NT ${l.nt()})`}AppleWebKit/${F} (KHTML, like Gecko) Version/${C} Safari/${F}`},chrome(c){let F=l.safari();return`Mozilla/5.0 ${c==="mac"?`(Macintosh; ${n("mac")} Mac OS X ${l.osx("_")}) `:c==="win"?`(Windows; U; Windows NT ${l.nt()})`:`(X11; Linux ${n(c)}`} AppleWebKit/${F} (KHTML, like Gecko) Chrome/${l.chrome()} Safari/${F}`}},[D,m]=i();return x[D](m)}var Ru=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(Ru.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this))}avatar(){return`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.datatype.number(1249)}.jpg`}email(u,a,e,i){e=e||this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email);let n=this.faker.helpers.slugify(this.userName(u,a));if(i!=null&&i.allowSpecialCharacters){let t="._-".split(""),l=".!#$%&'*+-/=?^_`{|}~".split("");n=n.replace(this.faker.helpers.arrayElement(t),this.faker.helpers.arrayElement(l))}return`${n}@${e}`}exampleEmail(u,a,e){let i=this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);return this.email(u,a,i,e)}userName(u,a){let e;switch(u=u||this.faker.name.firstName(),a=a||this.faker.name.lastName(),this.faker.datatype.number(2)){case 0:e=`${u}${this.faker.datatype.number(99)}`;break;case 1:e=u+this.faker.helpers.arrayElement([".","_"])+a;break;case 2:e=`${u}${this.faker.helpers.arrayElement([".","_"])}${a}${this.faker.datatype.number(99)}`;break}return e=e.toString().replace(/'/g,""),e=e.replace(/ /g,""),e}protocol(){let u=["http","https"];return this.faker.helpers.arrayElement(u)}httpMethod(){let u=["GET","POST","PUT","DELETE","PATCH"];return this.faker.helpers.arrayElement(u)}httpStatusCode(u={}){let{types:a=Object.keys(this.faker.definitions.internet.http_status_code)}=u,e=this.faker.helpers.arrayElement(a);return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[e])}url(){return`${this.protocol()}://${this.domainName()}`}domainName(){return`${this.domainWord()}.${this.domainSuffix()}`}domainSuffix(){return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix)}domainWord(){return`${this.faker.word.adjective()}-${this.faker.word.noun()}`.replace(/([\\~#&*{}/:<>?|\"'])/gi,"").replace(/\s/g,"-").replace(/-{2,}/g,"-").toLowerCase()}ip(){return this.ipv4()}ipv4(){let u=()=>this.faker.datatype.number(255).toFixed(0),a=[];for(let e=0;e<4;e++)a[e]=u();return a.join(".")}ipv6(){let u=()=>{let e="";for(let i=0;i<4;i++)e+=this.faker.helpers.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);return e},a=[];for(let e=0;e<8;e++)a[e]=u();return a.join(":")}port(){return this.faker.datatype.number({min:0,max:65535})}userAgent(){return vw(this.faker)}color(u=0,a=0,e=0){let i=x=>Math.floor((this.faker.datatype.number(256)+x)/2).toString(16).padStart(2,"0"),n=i(u),t=i(a),l=i(e);return`#${n}${t}${l}`}mac(u){let a,e="",i=":";for(["-",""].indexOf(u)!==-1&&(i=u),a=0;a<12;a++)e+=this.faker.datatype.number(15).toString(16),a%2===1&&a!==11&&(e+=i);return e}password(u=15,a=!1,e=/\w/,i=""){let n=/[aeiouAEIOU]$/,t=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,l=(x,D,m,c)=>{if(c.length>=x)return c;D&&(c.match(t)?m=n:m=t);let F=this.faker.datatype.number(94)+33,C=String.fromCharCode(F);return D&&(C=C.toLowerCase()),C.match(m)?l(x,D,m,c+C):l(x,D,m,c)};return l(u,a,e,i)}emoji(u={}){let{types:a=Object.keys(this.faker.definitions.internet.emoji)}=u,e=this.faker.helpers.arrayElement(a);return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[e])}},I={fail:()=>{throw new g("No words found that match the given length.")},closest:(u,a)=>{let e=u.reduce((x,D)=>{var m;return(x[D.length]=(m=x[D.length])!=null?m:[]).push(D),x},{}),i=Object.keys(e).map(Number),n=Math.min(...i),t=Math.max(...i),l=Math.min(a.min-n,t-a.max);return u.filter(x=>x.length===a.min-l||x.length===a.max+l)},shortest:u=>{let a=Math.min(...u.map(e=>e.length));return u.filter(e=>e.length===a)},longest:u=>{let a=Math.max(...u.map(e=>e.length));return u.filter(e=>e.length===a)},"any-length":u=>[...u]};function M(u){let{wordList:a,length:e,strategy:i="any-length"}=u;if(e){let n=typeof e=="number"?l=>l.length===e:l=>l.length>=e.min&&l.length<=e.max,t=a.filter(n);return t.length>0?t:typeof e=="number"?I[i](a,{min:e,max:e}):I[i](a,e)}else return i==="shortest"||i==="longest"?I[i](a):[...a]}var Gu=class{constructor(u){this.faker=u;for(let a of Object.getOwnPropertyNames(Gu.prototype))a==="constructor"||typeof this[a]!="function"||(this[a]=this[a].bind(this))}word(u={}){let a=typeof u=="number"?{length:u}:u;return this.faker.helpers.arrayElement(M({...a,wordList:this.faker.definitions.lorem.words}))}words(u=3){let a=[];for(let e=0;e<u;e++)a.push(this.word());return a.join(" ")}sentence(u){u==null&&(u=this.faker.datatype.number({min:3,max:10}));let a=this.words(u);return`${a.charAt(0).toUpperCase()+a.slice(1)}.`}slug(u){let a=this.words(u);return this.faker.helpers.slugify(a)}sentences(u,a=" "){u==null&&(u=this.faker.datatype.number({min:2,max:6}));let e=[];for(u;u>0;u--)e.push(this.sentence());return e.join(a)}paragraph(u=3){return this.sentences(u+this.faker.datatype.number(3))}paragraphs(u=3,a=`
`){let e=[];for(u;u>0;u--)e.push(this.paragraph());return e.join(a)}text(){let u=["word","words","sentence","sentences","paragraph","paragraphs","lines"],a=this.faker.helpers.arrayElement(u);return`${this[a]()}`}lines(u){return u==null&&(u=this.faker.datatype.number({min:1,max:5})),this.sentences(u,`
definition (`),s("code",null,"left"),r(", "),s("code",null,"center"),r(" or "),s("code",null,"right"),r(")."),s("br"),r(`
If you don't define any, `),s("code",null,"left"),r(` will be implicit.
`)],-1),IL=s("p",null,[r("Even with the "),s("code",null,"no-headers"),r(" option, the "),s("code",null,"headers"),r(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),OL=s("p",null,[r("A table footer can be added via the "),s("code",null,"footer"),r(` slot. If present, the footer will span on
all the columns by default.
`)],-1),$L={class:"w-flex justify-end"},WL=s("strong",{class:"mr2"},"Total:",-1),qL=s("p",null,[r("The "),s("code",null,"footer-row"),r(" slot will give you more flexibility as it lets you define the whole table row.")],-1),ZL=s("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),UL=s("p",null,[r("You can resize the columns by dragging their edges left or right."),s("br"),r(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),s("code",null,"..."),r("), you can apply this CSS.")],-1),YL=s("p",null,[r(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),s("br"),r(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),QL=s("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),XL=s("p",null,[r("To make a column sticky, you only need to add "),s("code",null,"sticky: true"),r(` to the header of that
column.`),s("br"),r(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),uH=s("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1),aH={class:"w-flex align-center mb2"},eH=s("p",null,[r(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),s("strong",{class:"code"},"w-table"),r("'s sorting is defined with a header key string preceded by a "),s("code",null,"+"),r(` for ASC,
or a `),s("code",null,"-"),r(" for DESC. For instance, in this example: "),s("code",null,"'+firstName'"),r(`.
`)],-1),iH=s("p",null,[r(`When dealing with a lot of table entries, you will most likely need the sorting to be done
in the backend.`),s("br"),r(`
For this you can use the asynchronous sorting and update the table rows from outside Wave UI.`)],-1),rH=s("p",null,[r(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),s("strong",{class:"code"},"w-table"),r(" component and it will be applied to the table."),s("br"),r(`
Setting the filter to `),s("code",null,"null"),r(" or "),s("code",null,"false"),r(" or "),s("code",null,"undefined"),r(" will remove any previous filter.")],-1),nH={class:"w-flex wrap mb3"},oH=s("p",null,[r("You could also apply a filter globally, which looks into all the columns at once."),s("br"),r(`
Here is one cool way to do it.`)],-1),lH=s("strong",null,[r(`If you don't need the RegExp power, you can simply return
`),s("code",null,"allTheColumns.toLowerCase().includes(keyword)"),r(` instead.
`)],-1),tH=s("br",null,null,-1),sH=s("br",null,null,-1),EH=s("code",null,"|",-1),DH=s("br",null,null,-1),xH=s("code",null,"new RegExp(keyword, 'i')",-1),dH=s("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),cH=s("code",null,"floretta",-1),mH=s("code",null,"florett",-1),FH=s("p",null,[r("When the table content is not ready straight away, you can use the "),s("code",null,"loading"),r(` prop to display
a progress bar while loading.`)],-1),kH=s("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),CH=s("p",null,[r("By default, the selection will use the "),s("code",null,"primary"),r(" color and apply an opacity of "),s("code",null,"0.2"),r(`.
If this is not what you want, you can override it via CSS (`),s("code",null,".w-table__row--selected td:before"),r(`).
`)],-1),hH=s("span",{class:"code"},"selectable-rows",-1),gH=s("p",null,[r("You can enable the rows selection by adding the "),s("code",null,"selectable-rows"),r(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),s("code",null,"1"),r(`
to allow a single selection only.
`)],-1),pH=s("span",{class:"code"},"force-selection",-1),vH=s("p",null,[r("Eventually, you can use the "),s("code",null,"force-selection"),r(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),bH=s("span",{class:"code"},"@row-select",-1),BH=X(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),AH=s("div",{class:"mt4 title4"},"Selection info:",-1),yH=s("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),zH=s("ul",null,[s("li",null,[s("strong",null,"In Vue 2"),r(", you can do 2-way binding on any variable other than the "),s("strong",{class:"code"},"v-model"),r(" using the "),s("code",null,".sync"),r(" modifier.")]),s("li",null,[s("strong",null,"In Vue 3"),r(", multiple "),s("strong",{class:"code"},"v-model"),r(" are supported in order to achieve 2-way binding. So you don't need "),s("code",null,".sync"),r(".")])],-1),fH={class:"mt4"},SH={class:"ml2"},MH=s("br",null,null,-1),jH=s("code",null,"id",-1),PH=s("code",null,"uid-key",-1),KH=s("p",null,"You can customize the headers labels and/or each row cells.",-1),wH=s("p",null,[r("In this example, only the headers are customized via the "),s("code",null,"header-label"),r(" slot.")],-1),NH=s("p",null,[r("In this example, only the items cells are customized via the "),s("code",null,"item"),r(` slot
(and the headers are hidden).`)],-1),TH={key:0},LH={class:"grey mr2"},HH=X(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),RH=s("p",null,[r(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),s("br"),r(`
As you notice, the `),s("code",null,"item"),r(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),GH=["onClick"],VH=s("span",{class:"code"},"colspan",-1),JH=s("p",null,[r("This example is showcasing another useful case: handling a colspan attribute."),s("br"),r(`
All the cells of all the rows are `),s("code",null,"colspan"),r("'d to one, and a custom row layout is applied.")],-1),_H=["onClick"],IH=["colspan"],OH={class:"title3"},$H={class:"mr2"},WH=s("p",null,[r("In addition to the full responsiveness, the "),s("code",null,"w-table"),r(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),s("br"),r(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),s("code",null,"mobile-breakpoint"),r(`
parameter.`),s("br"),r(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),s("br"),s("br"),r(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),qH=s("p",null,[r("To stay lean and efficient, the minimum JavaScript behavior is added to the "),s("code",null,"w-table"),r(`
component.`),s("br"),r(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),s("br"),r(`
You can override it to set the width you want via:
`)],-1);function ZH(u,a,e,i,n,t){const l=p("title-link"),x=p("w-table"),D=p("example"),m=p("w-button"),c=p("w-icon"),F=p("w-flex"),C=p("ssh-pre"),v=p("w-tag"),y=p("w-radios"),z=p("w-input"),j=p("alert");return B(),A("div",null,[E(l,{h2:""},{default:o(()=>[r("Basic")]),_:1}),E(D,null,{pug:o(()=>[r('w-table(:headers="table.headers" :items="table.items")')]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:u.table1.items},null,8,["headers","items"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("When there is no data")]),_:1}),VL,E(D,null,{pug:o(()=>[r(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`)]),html:o(()=>[r(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:[]},null,8,["headers"]),JL,E(x,{headers:u.table1.headers,items:[]},{"no-data":o(()=>[r("\u{1F44C} There is no data! \u{1F44C}")]),_:1},8,["headers"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Alignments")]),_:1}),_L,E(D,null,{pug:o(()=>[r('w-table(:headers="table.headers" :items="table.items")')]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table2.headers,items:u.table2.items},null,8,["headers","items"])]),_:1}),E(l,{h2:"",slug:"example--no-headers"},{default:o(()=>[r("No headers")]),_:1}),IL,E(D,null,{pug:o(()=>[r('w-table(:items="table.items" :headers="table.headers" no-headers)')]),html:o(()=>[r(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:u.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),E(l,{h2:"",slug:"example--fixed-headers"},{default:o(()=>[r("Fixed headers")]),_:1}),E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table3.headers,items:u.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),E(l,{h2:"",slug:"example--footer"},{default:o(()=>[r("Footer")]),_:1}),E(l,{h3:"",slug:"example--footer-slot"},{default:o(()=>[r("Footer slot")]),_:1}),OL,s("div",$L,[E(m,{onClick:a[0]||(a[0]=k=>u.table3.fixedFooter=!u.table3.fixedFooter),outline:!u.table3.fixedFooter,round:""},{default:o(()=>[s("span",{class:P(["code",u.table3.fixedFooter?"contrast-color":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),E(D,null,{pug:o(()=>[r(`w-table(
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px")
  template(#footer)
    w-flex(justify-space-between)
      w-button(round sm @click="addRow")
        w-icon.mr1 wi-plus
        | add person
      div
        strong.mr2 Total:
        | `+d("{{ table.items.length }}")+" persons",1)]),html:o(()=>[r(`<w-table
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px">
  <template #footer>
    <w-flex justify-space-between>
      <w-button round sm @click="addRow">
        <w-icon class="mr1">wi-plus</w-icon>
        add person
      </w-button>

      <div>
        <strong class="mr2">Total:</strong>
        `+d("{{ table.items.length }}")+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,1)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    fixedFooter: false
  },
}),

methods: {
  addRow () {
    this.table.items.push({
      id: this.table.items.length + 1,
      firstName: 'John',
      lastName: 'Doe'
    })
    this.$nextTick(() => {
      const table = this.$refs.table.$el
      table.scrollTo({ top: table.scrollHeight, behavior: 'smooth' })
    })
  }
}
`)]),default:o(()=>[E(x,{ref:"table",headers:u.table3.headers,items:u.table3.items,"fixed-footer":u.table3.fixedFooter,style:{height:"250px"}},{footer:o(()=>[E(F,{"justify-space-between":""},{default:o(()=>[E(m,{round:"",sm:"",onClick:t.addRow},{default:o(()=>[E(c,{class:"mr1"},{default:o(()=>[r("wi-plus")]),_:1}),r("add person")]),_:1},8,["onClick"]),s("div",null,[WL,r(d(u.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),E(l,{h3:"",slug:"example--footer-slot"},{default:o(()=>[r("Footer-row slot")]),_:1}),qL,ZL,E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px")
  template(#footer-row)
    tr
      th.py1(
        v-for="&#40;header, i&#41; in table3.headers"
        :key="i"
        :class="\`\${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`")
        | `+d("{{ header.label }}"),1)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px">
  <template #footer-row>
    <tr>
      <th
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`py1 \${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`">
        `+d("{{ header.label }}")+`
      </th>
    </tr>
  </template>
</w-table>`,1)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
})
`)]),default:o(()=>[E(x,{headers:u.table3.headers,"no-headers":"",items:u.table3.items,"fixed-footer":u.table3.fixedFooter,style:{height:"250px"}},{"footer-row":o(()=>[s("tr",null,[(B(!0),A(H,null,R(u.table3.headers,(k,b)=>(B(),A("th",{class:P(["py1",`${b?"px1":"px2"} text-${k.align||"left"}`]),key:b},d(k.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Built-in column resizing")]),_:1}),UL,E(C,{language:"css",dark:u.$store.state.darkMode},{default:o(()=>[r(`.w-table__cell {
  white-space: nowrap;
}
`)]),_:1},8,["dark"]),E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
})
`)]),default:o(()=>[E(x,{headers:u.table7.headers,items:u.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),E(l,{h3:""},{default:o(()=>[r("Saving the table layout in localStorage")]),_:1}),YL,E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
}),

methods: {
  onColumnResize ({ index, widths }) {
    widths.forEach((width, i) => (this.table.headers[i].width = width))

    // Save the table layout in localStorage.
    localStorage.tableWidths = widths
  }
},

mounted () {
  // Reapply the saved table layout.
  localStorage.tableWidths?.split(',').forEach((width, i) => (this.table.headers[i].width = width))
}
`)]),default:o(()=>[E(x,{headers:u.table8.headers,items:u.table8.items,"resizable-columns":"",onColumnResize:t.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Toggling column visibility")]),_:1}),QL,E(D,null,{pug:o(()=>[r(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? `+d(u.$store.state.darkMode?"grey-dark4":"grey-light4")+` : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+d("{{ header.hidden ? '-off' : ''}}")+`
  | `+d("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:o(()=>[r(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+d("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+d("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', hidden: false },
      { label: 'First name', key: 'firstName', hidden: false },
      { label: 'Last name', key: 'lastName', hidden: false }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:o(()=>[r("Toggle columns:"),(B(!0),A(H,null,R(u.table6.headers,(k,b)=>(B(),W(v,{class:"ma1",key:b,"bg-color":k.hidden?u.$store.state.darkMode?"grey-dark4":"grey-light4":"primary",onClick:Uu(S=>k.hidden=!k.hidden,["stop"])},{default:o(()=>[E(c,{class:"mr2"},{default:o(()=>[r("mdi mdi-eye"+d(k.hidden?"-off":""),1)]),_:2},1024),r(d(k.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),E(x,{class:"mt2",headers:u.table6.headers.filter(k=>!k.hidden),items:u.table6.items},null,8,["headers","items"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Sticky columns")]),_:1}),XL,uH,E(D,null,{pug:o(()=>[r(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    fixedHeaders: false,
    headers: [
      { label: 'ID', key: 'id', hidden: false, width: '60px', sticky: true },
      { label: 'First name', key: 'firstName', hidden: false, width: '120px' },
      { label: 'Last name', key: 'lastName', hidden: false, width: '120px' },
      { label: 'Birthday', key: 'birthday', email: false, width: '150px' },
      { label: 'Email', key: 'email', hidden: false, width: '200px' },
      { label: 'Phone', key: 'phone', hidden: false, width: '200px' },
      { label: 'Country', key: 'country', hidden: false, width: '200px' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', birthday: 'Feb. 12, 1976', email: 'f.sampson@gmail.com', phone: '+21 234 567 8921', country: 'United Kingdom' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', birthday: 'Dec. 15, 1995', email: 'n.lynn@gmail.com', phone: '+22 234 567 8922', country: 'Luxembourg' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', birthday: 'Apr. 25, 1989', email: 'r.bristol@gmail.com', phone: '+23 234 567 8923', country: 'Montenegro' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', birthday: 'Mar. 24, 2002', email: 'd.elliott@gmail.com', phone: '+24 234 567 8924', country: 'Germany' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', birthday: 'Aug. 2, 1990', email: 'v.carman@gmail.com', phone: '+25 234 567 8925', country: 'Ukraine' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison', birthday: 'Feb. 12, 2008', email: 'b.morison@gmail.com', phone: '+26 234 567 8926', country: 'Lithuania' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann', birthday: 'Nov. 6, 1991', email: 'b.mann@gmail.com', phone: '+27 234 567 8927', country: 'Finland' },
      { id: 8, firstName: 'Davie', lastName: 'Forester', birthday: 'Dec. 6, 1982', email: 'd.forester@gmail.com', phone: '+28 234 567 8928', country: 'Portugal' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery', birthday: 'Jan. 20, 1987', email: 'a.montgomery@gmail.com', phone: '+29 234 567 8929', country: 'Czechia' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk', birthday: 'Dec. 31, 1992', email: 'm.kirk@gmail.com', phone: '+30 234 567 8930', country: 'Norway' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory', birthday: 'Dec. 7, 1979', email: 'h.mallory@gmail.com', phone: '+31 234 567 8931', country: 'Greece' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle', birthday: 'Feb. 16, 1980', email: 's.castle@gmail.com', phone: '+32 234 567 8932', country: 'France' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason', birthday: 'Jun. 29, 2000', email: 'r.eason@gmail.com', phone: '+33 234 567 8933', country: 'Poland' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley', birthday: 'Dec. 31, 2009', email: 'm.hayley@gmail.com', phone: '+34 234 567 8934', country: 'Hungary' },
      { id: 15, firstName: 'Josie', lastName: 'Richard', birthday: 'Aug. 16, 2004', email: 'j.richard@gmail.com', phone: '+35 234 567 8935', country: 'Italy' }
    ]
  }
})
`)]),default:o(()=>[s("div",aH,[r("Sticky columns:"),E(y,{class:"ml1 mr4",modelValue:u.table9.stickyColumn,"onUpdate:modelValue":a[1]||(a[1]=k=>u.table9.stickyColumn=k),items:u.table9.stickyColumnOptions,onChange:t.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),E(m,{onClick:a[2]||(a[2]=k=>u.table9.fixedHeaders=!u.table9.fixedHeaders),outline:!u.table9.fixedHeaders,round:""},{default:o(()=>[s("span",{class:P(["code",u.table9.fixedHeaders?"contrast-color":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),E(x,{class:"base-color--bg",headers:u.table9.headers,items:u.table9.items,"fixed-layout":"","fixed-headers":u.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Sorting")]),_:1}),eH,E(l,{h3:""},{default:o(()=>[r("Initial Sorting")]),_:1}),E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    sort: '+firstName'
  }
})
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:u.table1.items,sort:u.table1.sort,"onUpdate:sort":a[3]||(a[3]=k=>u.table1.sort=k)},null,8,["headers","items","sort"])]),_:1}),E(l,{h3:""},{default:o(()=>[r("Asynchronous Sorting")]),_:1}),iH,E(D,{"blank-codepen":["js"]},{html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort-function="sortFunction"
  :loading="table.loading"
  style="height: 140px">
</w-table>`)]),js:o(()=>[r(`// This object is simulating content coming from the server.
const tableItemsInAPI = {
  null: [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '+id': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-id': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '+firstName': [
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-firstName': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' }
  ],
  '+lastName': [
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '-lastName': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' }
  ]
}

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: [
        { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
        { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
        { id: 3, firstName: 'Rory', lastName: 'Bristol' },
        { id: 4, firstName: 'Daley', lastName: 'Elliott' },
        { id: 5, firstName: 'Virgil', lastName: 'Carman' }
      ],
      loading: false
    }
  }),

  methods: {
    // For consistency, the received sortKeys parameter is always an array
    // (for multi-column sorting), whether the sorting is done on one or more columns.
    // Notice the async & await keywords.
    async sortFunction (sortKeys) {
      // Before the fetch set the loading flag, and display the progress bar in
      // the header only, so the current rows stay visible while loading.
      this.table.loading = 'header'

      // Simulating an AJAX call with 1 second latency.
      // Replace this in your app with a \`fetch\` or Axios call.
      const apiResponse = new Promise(resolve => setTimeout(() => resolve(tableItemsInAPI[sortKeys[0] || null]), 1000))

      // Fill up the array with rows from the API.
      this.table.items = await apiResponse

      this.table.loading = false
    }
  }
})

app.use(WaveUI, {})

app.mount('#app')
`)]),default:o(()=>[E(x,{class:"my6",headers:u.table10.headers,items:u.table10.items,"sort-function":t.sortFunction,loading:u.table10.loading,style:{height:"140px"}},{pug:o(()=>[r(`w-table.my6(
:headers="table.headers"
:items="table.items"
:sort-function="sortFunction"
:loading="table.loading"
style="height: 140px")`)]),_:1},8,["headers","items","sort-function","loading"])]),_:1}),E(l,{h2:""},{default:o(()=>[r("Filtering")]),_:1}),rH,E(D,null,{pug:o(()=>[r(`.w-flex.wrap.mb3
  w-button.mr2.mb1(
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0")
    | No filter
  w-button.mr2.mb1(
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1")
    | Last name starting with 'M'
  w-button.mr2.mb1(
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2")
    | ID >= 10
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]")`)]),html:o(()=>[r(`<div class="w-flex wrap mb3">
  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0">
    No filter
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1">
    Last name starting with 'M'
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2">
    ID >= 10
  </w-button>
</div>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    filters: [
      null,
      item => item.lastName[0] === 'M',
      item => item.id >= 10
    ],
    activeFilter: 0
  }
})
`)]),default:o(()=>[s("div",nH,[E(m,{class:"mr2 mb1",onClick:a[4]||(a[4]=k=>u.table3.activeFilter=0),round:"",outline:u.table3.activeFilter!==0},{default:o(()=>[r("No filter")]),_:1},8,["outline"]),E(m,{class:"mr2 mb1",onClick:a[5]||(a[5]=k=>u.table3.activeFilter=1),round:"",outline:u.table3.activeFilter!==1},{default:o(()=>[r("Last name starting with 'M'")]),_:1},8,["outline"]),E(m,{class:"mr2 mb1",onClick:a[6]||(a[6]=k=>u.table3.activeFilter=2),round:"",outline:u.table3.activeFilter!==2},{default:o(()=>[r("ID >= 10")]),_:1},8,["outline"])]),E(x,{headers:u.table3.headers,items:u.table3.items,filter:u.table3.filters[u.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),E(l,{h3:""},{default:o(()=>[r("Global filter")]),_:1}),oH,E(D,null,{pug:o(()=>[r(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)]),html:o(()=>[r(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    keyword: '',
    keywordFilter: keyword => item => {
      // Concatenate all the columns into a single string for a faster lookup.
      const allTheColumns = \`\${item.id} \${item.firstName} \${item.lastName}\`

      // Lookup the keyword variable in the string with case-insensitive flag.
      return new RegExp(keyword, 'i').test(allTheColumns)
    }
  }
})`)]),default:o(()=>[E(z,{class:"mb3",modelValue:u.table4.keyword,"onUpdate:modelValue":a[7]||(a[7]=k=>u.table4.keyword=k),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),E(x,{headers:u.table4.headers,items:u.table4.items,filter:u.table4.keywordFilter(u.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),E(j,{tip:""},{default:o(()=>[lH,tH,sH,r(`But the real power of using a regular expression
`),E(c,{class:"red mr1",size:"0.9em"},{default:o(()=>[r("mdi mdi-heart")]),_:1}),r(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),EH,r(" etc."),DH,r(`
You could also match only the full words by replacing `),xH,r(` with
`),dH,r(" (it would return a result when typing "),cH,r(`
but not `),mH,r(" for instance).")]),_:1}),E(l,{h2:""},{default:o(()=>[r("Loading state")]),_:1}),FH,E(m,{class:"mb2",disabled:!!u.table1.loading,onClick:t.reload},{default:o(()=>[E(c,{class:"mr1"},{default:o(()=>[r("mdi mdi-sync")]),_:1}),r("reload")]),_:1},8,["disabled","onClick"]),E(l,{h3:""},{default:o(()=>[r("Simple table - no set height")]),_:1}),E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:u.table1.items,loading:u.table1.loading},null,8,["headers","items","loading"])]),_:1}),E(l,{h3:"",slug:"loading-with-fixed-header"},{default:o(()=>[r("Table with fixed header & set height of 200px")]),_:1}),E(D,null,{pug:o(()=>[r(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)]),html:o(()=>[r(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:o(()=>[E(x,{headers:u.table1.headers,items:u.table3.items,"fixed-headers":"",loading:u.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),E(l,{h2:"",slug:"pagination"},{default:o(()=>[r("Pagination"),E(v,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:o(()=>[r("COMING SOON")]),_:1})]),_:1}),E(l,{h2:""},{default:o(()=>[r("Rows selection")]),_:1}),kH,CH,E(l,{h3:"",slug:"example--selectable-rows"},{default:o(()=>[r("The "),hH,r(" prop")]),_:1}),gH,E(l,{h3:"",slug:"example--force-selection"},{default:o(()=>[r("The "),pH,r(" prop")]),_:1}),vH,E(l,{h3:"",slug:"example--row-select"},{default:o(()=>[r("The "),bH,r(" event")]),_:1}),BH,E(D,null,{pug:o(()=>[r(`w-flex.mb4(wrap)
  w-radios.mr6(v-model="table.selectableRows" :items="selectableRowsOptions")
  w-button.my3(
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection")
    w-icon.mr2(v-if="table.forceSelection") wi-check
    | Force selection

w-table(
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event")

.mt4.title4 Selection info:
pre `+d("{{ selectionInfo }}"))]),html:o(()=>[r(`<w-flex wrap class="mb4">
  <w-radios
    v-model="table.selectableRows"
    :items="selectableRowsOptions"
    class="mr6">
  </w-radios>
  <w-button
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection"
    class="my3">
    <w-icon v-if="table.forceSelection" class="mr2">
      wi-check
    </w-icon>
    Force selection
  </w-button>
</w-flex>

<w-table
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event">
</w-table>

<div class="title4 mt4">Selection info:</div>
<pre>`+d("{{ selectionInfo }}")+"</pre>")]),js:o(()=>[r(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectableRows: true,
    forceSelection: false
  },
  selectableRowsOptions: [
    { label: '<code class="mr2">:selectable-row="false"</code> (default)', value: false },
    { label: '<code>selectable-row</code>', value: true },
    { label: '<code>:selectable-row="1"</code>', value: 1 }
  ],
  selectionInfo: {}
})
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  :headers="table.headers"
  :items="table.items"
</w-table>

})