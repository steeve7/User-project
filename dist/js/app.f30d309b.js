(function(){"use strict";var e={9985:function(e,t,a){var o=a(9242),n=a(3396);function i(e,t,a,o,i,l){const s=(0,n.up)("AllPage");return(0,n.wg)(),(0,n.j4)(s)}const l={class:"w-full m-auto my-10"},s=(0,n._)("h1",{class:"px-16 py-3 uppercase text-[#6E6893]"},"Table Heading",-1),r={id:"nav",class:"py-3 px-14 flex justify-beween"},c=(0,n._)("div",{class:"right-16 absolute"},[(0,n._)("p",{class:"text-[#6E6893]"},[(0,n.Uk)("Total payable amount:"),(0,n._)("b",{class:"text-[#6D5BD0]"},"$900.00"),(0,n.Uk)("USD")])],-1),u=(0,n._)("div",{class:"border-1 w-[90%] mx-16 mb-3 bg-black h-1"},null,-1);function d(e,t,a,o,i,d){const m=(0,n.up)("router-link"),w=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",l,[s,(0,n._)("div",r,[(0,n.Wm)(m,{to:"/",class:"px-3 text-[#25213B]"},{default:(0,n.w5)((()=>[(0,n.Uk)("All")])),_:1}),(0,n.Wm)(m,{to:"/paid",class:"px-3 text-[#25213B]"},{default:(0,n.w5)((()=>[(0,n.Uk)("Paid")])),_:1}),(0,n.Wm)(m,{to:"/unpaid",class:"px-3 text-[#25213B]"},{default:(0,n.w5)((()=>[(0,n.Uk)("Unpaid")])),_:1}),(0,n.Wm)(m,{to:"/overdue",class:"px-3 text-[#25213B]"},{default:(0,n.w5)((()=>[(0,n.Uk)("Overdue")])),_:1}),c]),u,(0,n.Wm)(w)])}var m={name:"AllPage"},w=a(89);const h=(0,w.Z)(m,[["render",d]]);var v=h,p={name:"App",components:{AllPage:v}};const f=(0,w.Z)(p,[["render",i]]);var b=f,g=a(2483),D=a(7139);const x=e=>((0,n.dD)("data-v-711667c8"),e=e(),(0,n.Cn)(),e),S={class:"mx-16 bg-white shadow-md rounded-md"},y={class:"thead"},U={class:"bg-gray-200"},_=x((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1))),k=x((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1)));function A(e,t,a,o,i,l){const s=(0,n.up)("SearchAll"),r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",S,[(0,n.Wm)(s,{onInput:l.onSearch},null,8,["onInput"]),(0,n._)("div",y,[(0,n._)("table",null,[(0,n._)("thead",U,[(0,n._)("tr",null,[_,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.columns,((e,t)=>((0,n.wg)(),(0,n.iD)("th",{key:t,class:"w-full py-3 text-[#6E6893]"},(0,D.zw)(e),1)))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.rows,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[k,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,t)=>((0,n.wg)(),(0,n.iD)("td",{key:t,class:"px-20 border-b-2"},(0,D.zw)(e),1)))),128))])))),128))])])])])}const M={class:"h-4"},$={class:"relative"},V={for:"",class:"relative block"},P={class:"absolute inset-y-0 left-0 flex items-center pl-3 pr-8"},I=(0,n._)("button",{class:"flex-shrink-0 z-10 inline-flex items-center px-7 py-3 text-sm font-medium text-center m-2 bg-gray-200 shadow-sm border rounded hover:bg-gray-200 text-[#25213B]",type:"button"}," Filter ",-1),B={class:"absolute left-60 top-40 mt-1"},O={for:"",class:"relative block"},W={class:"absolute inset-y-0 left-0 flex items-center pl-3 pr-8"},E=(0,n._)("input",{type:"search",class:"placeholder:italic placeholder:text-[#6E6893] block bg-gray-200 w-[90vh] border-slate-300 rounded-md py-3 pl-12 pr-3 shadow-sm",placeholder:"Search Users by name, Email or Date",required:""},null,-1),j=(0,n._)("button",{type:"submit",class:"text-white absolute right-20 top-40 mt-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"}," Pay Dues ",-1);function H(e,t){const a=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("form",null,[(0,n._)("div",$,[(0,n._)("label",V,[(0,n._)("span",P,[(0,n.Wm)(a,{icon:"fa-solid fa-filter",class:"text-[#8B83BA]"})]),I])]),(0,n._)("div",B,[(0,n._)("label",O,[(0,n._)("span",W,[(0,n.Wm)(a,{icon:"fa-solid fa-search",class:"text-[#8B83BA]"})]),E])]),j])])}const z={},K=(0,w.Z)(z,[["render",H]]);var C=K;const R=(e,t)=>{const a=e.filter((e=>e.join("").includes(t)));return a};var Y={name:"HomePage",components:{SearchAll:C},data(){return{Rawrows:[["Ebuka christoper ebuka@gmail.com","Active","Overdue","$200USD","View More"],["Chidindu ofoegbu chid@gmail.com","Inactive","Paid","$300USD","View More"],["Chinonso chinonso@gmail.com","Inactive","Unpaid","$250USD","View More"],["christain christain@gmail.com","Active","Paid","$200USD","View More"],["Pogba luka pogba@gmail.com","Inactive","Overdue","$200USD","View More"],["Emma dani Emma@gmail.com","Active","Overdue","$750USD","View More"],["Daniella chris daniella@gmail.com","Active","Unpaid","$200USD","View More"],["isabella pat isabella@gmail.com","Active","Paid","$370USD","View More"],["Malvins crest malvins@gmail.com","Inactive","Unpaid","$200USD","View More"],["steeve larry steeve@gmail.com","Active","Overdue","$150USD","View More"]],rows:[["Ebuka christoper ebuka@gmail.com","Active","Overdue","$200USD","View More"],["Chidindu ofoegbu chid@gmail.com","Inactive","Paid","$300USD","View More"],["Chinonso chinonso@gmail.com","Inactive","Unpaid","$250USD","View More"],["christain christain@gmail.com","Active","Paid","$200USD","View More"],["Pogba luka pogba@gmail.com","Inactive","Overdue","$200USD","View More"],["Emma dani Emma@gmail.com","Active","Overdue","$750USD","View More"],["Daniella chris daniella@gmail.com","Active","Unpaid","$200USD","View More",":"],["isabella pat isabella@gmail.com","Active","Paid","$370USD","View More",":"],["Malvins crest malvins@gmail.com","Inactive","Unpaid","$200USD","View More",":"],["steeve larry steeve@gmail.com","Active","Overdue","$150USD","View More",":"]],columns:["name","User Status","Payment Status","Amounts","",""]}},methods:{onSearch(e){const t=e.target.value;this.rows=R(this.Rawrows,t)}},mounted(){this.rows=this.Rawrows}};const T=(0,w.Z)(Y,[["render",A],["__scopeId","data-v-711667c8"]]);var Z=T;const G=e=>((0,n.dD)("data-v-1f2b5e2a"),e=e(),(0,n.Cn)(),e),F={class:"mx-16 bg-white shadow-md rounded-md"},J={class:"thead"},q={class:"bg-gray-200"},N=G((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1))),L=G((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1)));function Q(e,t,a,o,i,l){const s=(0,n.up)("SearchAll"),r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",F,[(0,n.Wm)(s,{onInput:l.onSearch},null,8,["onInput"]),(0,n._)("div",J,[(0,n._)("table",null,[(0,n._)("thead",q,[(0,n._)("tr",null,[N,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.columns,((e,t)=>((0,n.wg)(),(0,n.iD)("th",{key:t,class:"w-full py-3 text-[#6E6893]"},(0,D.zw)(e),1)))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.rows,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[L,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,t)=>((0,n.wg)(),(0,n.iD)("td",{key:t,class:"px-20 border-b-2"},(0,D.zw)(e),1)))),128))])))),128))])])])])}const X=(e,t)=>{const a=e.filter((e=>e.join("").includes(t)));return a};var ee={name:"PaidTask",components:{SearchAll:C},data(){return{Rawrows:[["Chinonso Emeka chinonso@gmail.com","Active","Paid","$200USD","View More"],["Gabriel somto gabriel@gmail.com","Active","Paid","$250USD","View More"],["Daniel luiz daniel@gmail.com","Inactive","Paid","$200USD","View More"],["luiz sancho luiz@gmail.com","Inactive","Paid","$750USD","View More"],["chri pavel chris@gmail.com","Active","Paid","$370USD","View More"],["chinoye sandra sandra@gmail.com","Inactive","Paid","$150USD","View More"]],rows:[["Chinonso Emeka chinonso@gmail.com","Active","Paid","$200USD","View More",":"],["Gabriel somto gabriel@gmail.com","Active","Paid","$250USD","View More"],["Daniel luiz daniel@gmail.com","Inactive","Paid","$200USD","View More"],["luiz sancho luiz@gmail.com","Inactive","Paid","$750USD","View More"],["chri pavel chris@gmail.com","Active","Paid","$370USD","View More"],["chinoye sandra sandra@gmail.com","Inactive","Paid","$150USD","View More"]],columns:["name","User Status","Payment Status","Amounts","",""]}},methods:{onSearch(e){const t=e.target.value;this.rows=X(this.Rawrows,t)}},mounted(){this.rows=this.Rawrows}};const te=(0,w.Z)(ee,[["render",Q],["__scopeId","data-v-1f2b5e2a"]]);var ae=te;const oe=e=>((0,n.dD)("data-v-189b533c"),e=e(),(0,n.Cn)(),e),ne={class:"mx-16 bg-white shadow-md rounded-md"},ie={class:"thead"},le={class:"bg-gray-200"},se=oe((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1))),re=oe((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1)));function ce(e,t,a,o,i,l){const s=(0,n.up)("SearchAll"),r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",ne,[(0,n.Wm)(s,{onInput:l.onSearch},null,8,["onInput"]),(0,n._)("div",ie,[(0,n._)("table",null,[(0,n._)("thead",le,[(0,n._)("tr",null,[se,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.columns,((e,t)=>((0,n.wg)(),(0,n.iD)("th",{key:t,class:"w-full py-3 text-[#6E6893]"},(0,D.zw)(e),1)))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.rows,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[re,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,t)=>((0,n.wg)(),(0,n.iD)("td",{key:t,class:"px-20 border-b-2"},(0,D.zw)(e),1)))),128))])))),128))])])])])}const ue=(e,t)=>{const a=e.filter((e=>e.join("").includes(t)));return a};var de={name:"UnpaidPage",components:{SearchAll:C},data(){return{Rawrows:[["John tochi john@gmail.com","Active","Unpaid","$200USD","View More",":"],["Travis Scoth travis@gmail.com","Active","Unpaid","$200USD","View More",":"],["Kai Hervert kai@gmail.com","Inactive","Unpaid","$200USD","View More",":"]],rows:[["John tochi john@gmail.com","Active","Unpaid","$200USD","View More",":"],["Travis Scoth travis@gmail.com","Active","Unpaid","$200USD","View More",":"],["Kai Hervert kai@gmail.com","Inactive","Unpaid","$200USD","View More",":"]],columns:["name","User Status","Payment Status","Amounts","",":"]}},methods:{onSearch(e){const t=e.target.value;this.rows=ue(this.Rawrows,t)}},mounted(){this.rows=this.Rawrows}};const me=(0,w.Z)(de,[["render",ce],["__scopeId","data-v-189b533c"]]);var we=me;const he=e=>((0,n.dD)("data-v-a7dbcbdc"),e=e(),(0,n.Cn)(),e),ve={class:"mx-16 bg-white shadow-md rounded-md"},pe={class:"thead"},fe={class:"bg-gray-200"},be=he((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1))),ge=he((()=>(0,n._)("input",{type:"checkbox",class:"flex mt-4 absolute left-20"},null,-1)));function De(e,t,a,o,i,l){const s=(0,n.up)("SearchAll"),r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",ve,[(0,n.Wm)(s,{onInput:l.onSearch},null,8,["onInput"]),(0,n._)("div",pe,[(0,n._)("table",null,[(0,n._)("thead",fe,[(0,n._)("tr",null,[be,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.columns,((e,t)=>((0,n.wg)(),(0,n.iD)("th",{key:t,class:"w-full py-3 text-[#6E6893]"},(0,D.zw)(e),1)))),128))])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.rows,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[ge,(0,n.Wm)(r,{icon:"fa-solid fa-chevron-circle-down",class:"text-[#8B83BA] absolute left-28 mt-4"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,t)=>((0,n.wg)(),(0,n.iD)("td",{key:t,class:"px-20 border-b-2"},(0,D.zw)(e),1)))),128))])))),128))])])])])}const xe=(e,t)=>{const a=e.filter((e=>e.join("").includes(t)));return a};var Se={name:"OverDue",components:{SearchAll:C},data(){return{Rawrows:[["Ebuka christoper ebuka@gmail.com","Active","Overdue","$300USD","View More",":"]],rows:[["Ebuka christoper ebuka@gmail.com","Active","Overdue","$300USD","View More",":"]],columns:["name","User Status","Payment Status","Amounts","",":"]}},methods:{onSearch(e){const t=e.target.value;this.rows=xe(this.Rawrows,t)}},mounted(){this.rows=this.Rawrows}};const ye=(0,w.Z)(Se,[["render",De],["__scopeId","data-v-a7dbcbdc"]]);var Ue=ye;const _e=[{path:"/",name:"HomePage",component:Z},{path:"/paid",name:"PaidTask",component:ae},{path:"/unpaid",name:"UnPaid",component:we},{path:"/overdue",name:"OverDue",component:Ue}],ke=(0,g.p7)({history:(0,g.PO)("/"),routes:_e});var Ae=ke,Me=a(3494),$e=a(8539),Ve=a(7749);Me.vI.add($e.wn1,$e.G_j,$e.dWM),(0,o.ri)(b).component("font-awesome-icon",Ve.GN).use(Ae).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],i=e[u][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[r])}))?o.splice(r--,1):(s=!1,i<l&&(l=i));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,l=o[0],s=o[1],r=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(r)var u=r(a)}for(t&&t(o);c<l.length;c++)i=l[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkuser_project"]=self["webpackChunkuser_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9985)}));o=a.O(o)})();
//# sourceMappingURL=app.f30d309b.js.map