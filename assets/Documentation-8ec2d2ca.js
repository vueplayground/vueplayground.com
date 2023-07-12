import{V as c,F as f}from"./Footer-b07570e6.js";import{M as b}from"./Meta-92231dea.js";import{_ as v,r,o as i,c as d,a,b as t,w as $,v as w,n,g as y,F as g,p as k,f as C}from"./index-e1191636.js";const V={components:{VueNavigator:c,Footer:f,Meta:b},data:()=>({menu:!1}),methods:{open(e){location.href=e}}},l=e=>(k("data-v-e614d847"),e=e(),C(),e),z={class:"bg-slate-100 flex flex-col h-screen"},F={style:{width:"100%"},class:"relative overflow-auto flex-1 h-full"},M={class:"relative h-full w-full flex"},I=l(()=>t("label",{class:"from-slate-600 bg-slate-500 shadow-md bg-gradient-to-tl fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-6 text-sm text-white rounded-lg",for:"toggle"},[t("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})])],-1)),N={class:"md:p-7 md:w-80 xl:w-80 md:shadow-md shadow-lg pt-24 border-r border-slate-200 bg-slate-100 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 h-full absolute md:relative top-0 overflow-auto"},S=l(()=>t("h3",{class:"whitespace-nowrap font-bold text-slate-800 ml-2"}," Getting Started ",-1)),A={class:"space-y-1 ml-3 mt-4 border-l border-slate-400"},D=l(()=>t("h3",{class:"mt-6 whitespace-nowrap font-bold text-slate-800 ml-2"}," General ",-1)),q={class:"space-y-1 ml-3 mt-4 border-l border-slate-400"},B=l(()=>t("h3",{class:"mt-6 whitespace-nowrap font-bold text-slate-800 ml-2"}," Other ",-1)),G={class:"space-y-1 ml-3 mt-4 border-l border-slate-400"};function H(e,o,P,E,K,L){const u=r("Meta"),p=r("VueNavigator"),m=r("router-view"),h=r("Footer");return i(),d(g,null,[a(u,{description:"Read the Vue Play documentation for better insights to the software.",title:"Documentation"}),t("div",z,[a(p,{class:"absolute flex z-50"}),t("main",F,[t("div",M,[I,$(t("input",{class:"peer hidden",type:"checkbox",id:"toggle","onUpdate:modelValue":o[0]||(o[0]=s=>e.menu=s)},null,512),[[w,e.menu]]),t("div",N,[S,t("ul",A,[t("li",{class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation","border-emerald-400":e.$route.path==="/documentation","border-l-4":e.$route.path==="/documentation"}]),onClick:o[1]||(o[1]=s=>(e.$router.push("/documentation"),e.menu=!1)),style:{height:"25px"}}," Introduction ",2),t("li",{onClick:o[2]||(o[2]=s=>(e.$router.push("/documentation/deployment"),e.menu=!1)),class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/deployment","border-emerald-400":e.$route.path==="/documentation/deployment","border-l-4":e.$route.path==="/documentation/deployment"}])}," Deployment ",2),t("li",{onClick:o[3]||(o[3]=s=>(e.$router.push("/documentation/keyboard-shortcuts"),e.menu=!1)),class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/keyboard-shortcuts","border-emerald-400":e.$route.path==="/documentation/keyboard-shortcuts","border-l-4":e.$route.path==="/documentation/keyboard-shortcuts"}])}," Keyboard Shortcuts ",2)]),D,t("ul",q,[t("li",{class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/limitations","border-emerald-400":e.$route.path==="/documentation/limitations","border-l-4":e.$route.path==="/documentation/limitations"}]),onClick:o[4]||(o[4]=s=>(e.$router.push("/documentation/limitations"),e.menu=!1)),style:{height:"25px"}}," Limitations ",2),t("li",{class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/composition-api","border-emerald-400":e.$route.path==="/documentation/composition-api","border-l-4":e.$route.path==="/documentation/composition-api"}]),onClick:o[5]||(o[5]=s=>(e.$router.push("/documentation/composition-api"),e.menu=!1)),style:{height:"25px"}}," Composition API ",2),t("li",{class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/typescript","border-emerald-400":e.$route.path==="/documentation/typescript","border-l-4":e.$route.path==="/documentation/typescript"}]),onClick:o[6]||(o[6]=s=>(e.$router.push("/documentation/typescript"),e.menu=!1)),style:{height:"25px"}}," TypeScript ",2),t("li",{onClick:o[7]||(o[7]=s=>(e.$router.push("/documentation/v-bind"),e.menu=!1)),class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/v-bind","border-emerald-400":e.$route.path==="/documentation/v-bind","border-l-4":e.$route.path==="/documentation/v-bind"}])}," v-bind ",2)]),B,t("ul",G,[t("li",{class:n(["hover:text-slate-900 text-slate-700 cursor-pointer pl-6",{"font-semibold":e.$route.path==="/documentation/faq","border-emerald-400":e.$route.path==="/documentation/faq","border-l-4":e.$route.path==="/documentation/faq"}]),onClick:o[8]||(o[8]=s=>(e.$router.push("/documentation/faq"),e.menu=!1)),style:{height:"25px"}}," FAQ ",2)])]),a(m,{class:"m-auto container grow h-full overflow-auto"}),e.menu?(i(),d("div",{key:0,class:"absolute h-full w-full",onClick:o[9]||(o[9]=s=>e.menu=!1)})):y("",!0)])]),a(h)])],64)}const T=v(V,[["render",H],["__scopeId","data-v-e614d847"]]);export{T as default};
