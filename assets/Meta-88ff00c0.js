import{_ as l,o as f,c as h,b as s,n,d as a,r as g,t as m,a as i,h as d}from"./index-9f99a3ac.js";const b={data:()=>({}),computed:{route(){return this.$route.path}},methods:{open(t){location.href=t}}},_={style:{"background-image":"linear-gradient(204deg, #f0dfe20d 54%, #e1ebe8ff 59%, #f0f5faff 74%)","background-color":"#edf7f4ff","min-height":"50px"},class:"shadow border-slate-300 border-b"};function v(t,e,u,c,p,r){return f(),h("nav",_,[s("div",{style:{width:"216px","background-size":"contain","background-repeat":"no-repeat","margin-left":"10px",cursor:"pointer",float:"left",height:"35px","margin-top":"7px","margin-bottom":"7px"},onClick:e[0]||(e[0]=o=>t.$router.push("/")),class:"sm:inline hidden logo"}),s("button",{onClick:e[1]||(e[1]=o=>t.$router.push("/")),class:n([{active:r.route==="/"},"sm:hidden"])}," Home ",2),s("button",{onClick:e[2]||(e[2]=o=>t.$router.push("/features")),class:n([{active:r.route==="/features"},"hover:text-green-700 text-slate-700"])}," Features ",2),s("button",{onClick:e[3]||(e[3]=o=>t.$router.push("/documentation")),class:n([{active:r.route.includes("/documentation")},"hover:text-green-700 text-slate-700"])}," Docs ",2),s("button",{onClick:e[4]||(e[4]=o=>t.$router.push("/pricing")),class:n([{active:r.route==="/pricing"},"hover:text-green-700 text-slate-700"])}," Pricing ",2),a(),s("button",{onClick:e[5]||(e[5]=o=>r.open("https://studio.vueplay.com")),class:n([{active:r.route==="/app"},"hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"]),style:{"font-weight":"bold","border-top-left-radius":"4px","border-bottom-left-radius":"4px",height:"29px","border-top-right-radius":"4px","border-bottom-right-radius":"4px","margin-right":"5px"}}," Login ⇾ ",2)])}const D=l(b,[["render",v],["__scopeId","data-v-c75ba289"]]);const x={data:()=>({})},y={style:{width:"100%","text-align":"center","box-sizing":"border-box",display:"inline-block","background-image":"linear-gradient(204deg, #f0dfe20d 14%, #e1ebe8ff 19%, #f0f5faff 34%)","background-color":"#edf7f4ff"},class:"border-slate-300 border-t text-xs md:text-md sm:text-sm px-6 py-8"},k={class:"pb-3"};function $(t,e,u,c,p,r){const o=g("router-link");return f(),h("footer",y,[s("p",k," © All rights reserved - Siglar Development AS "+m(new Date().getUTCFullYear()),1),a(),i(o,{to:"/release-log"},{default:d(()=>[a(" Release log ")]),_:1}),a(" - "),i(o,{to:"/terms-of-service"},{default:d(()=>[a(" Terms of Service ")]),_:1}),a("-"),i(o,{to:"/privacy-policy"},{default:d(()=>[a(" Privacy Policy ")]),_:1})])}const M=l(x,[["render",$],["__scopeId","data-v-3e0b0bb5"]]),w={props:["title","description","keywords"],data:()=>({defaults:{title:"Vue Play",description:"Design Vue files with a drag & drop template builder. Use playground to create your new web app.",keywords:"Vue Play Playground Vue.js Vuejs Drag Drop Design UI Visual Graphic Userinterface",author:""}}),created(){document.title=this.title||this.defaults.title,this.ensureMeta("description"),this.ensureMeta("keywords"),this.ensureMeta("author"),document.head.children.description.content=this.description||this.defaults.description,document.head.children.keywords.content=this.keywords||this.defaults.keywords,document.head.children.author.content=this.author||this.defaults.author},methods:{ensureMeta(t){if(!document.head.children[t]||document.head.children[t]===void 0){let e=document.createElement("meta");e.name=t,document.head.appendChild(e)}}}};function C(t,e,u,c,p,r){return null}const P=l(w,[["render",C]]);export{M as F,P as M,D as V};
