import{_ as l,o as f,c as g,b as n,n as a,d as s,r as b,t as m,a as i,h as d}from"./index-df5e1a3e.js";const _={data:()=>({}),computed:{route(){return this.$route.path}},methods:{open(t){location.href=t}}},v={style:{"background-image":"linear-gradient(204deg, #f0dfe20d 54%, #e1ebe8ff 59%, #f0f5faff 74%)","background-color":"#edf7f4ff","min-height":"50px"},class:"shadow border-slate-300 border-b"};function h(t,e,u,c,p,r){return f(),g("nav",v,[n("div",{style:{width:"216px","background-size":"contain","background-repeat":"no-repeat","margin-left":"10px",cursor:"pointer",float:"left",height:"35px","margin-top":"7px","margin-bottom":"7px"},onClick:e[0]||(e[0]=o=>t.$router.push("/")),class:"sm:inline hidden logo"}),n("button",{onClick:e[1]||(e[1]=o=>t.$router.push("/")),class:a([{active:r.route==="/"},"sm:hidden"])}," Home ",2),n("button",{onClick:e[2]||(e[2]=o=>t.$router.push("/features")),class:a([{active:r.route==="/features"},"hover:text-green-700 text-slate-700"])}," Features ",2),n("button",{onClick:e[3]||(e[3]=o=>t.$router.push("/documentation")),class:a([{active:r.route.includes("/documentation")},"hover:text-green-700 text-slate-700"])}," Docs ",2),n("button",{onClick:e[4]||(e[4]=o=>t.$router.push("/pricing")),class:a([{active:r.route==="/pricing"},"hover:text-green-700 text-slate-700"])}," Pricing ",2),s(),n("button",{onClick:e[5]||(e[5]=o=>r.open("https://studio.vueplay.com")),class:a([{active:r.route==="/app"},"hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"]),style:{"font-weight":"bold","border-top-left-radius":"4px","border-bottom-left-radius":"4px",height:"29px","border-top-right-radius":"4px","border-bottom-right-radius":"4px","margin-right":"5px"}}," Login ⇾ ",2)])}const D=l(_,[["render",h],["__scopeId","data-v-c75ba289"]]);const x={data:()=>({})},$={style:{width:"100%","text-align":"center","box-sizing":"border-box",display:"inline-block","background-image":"linear-gradient(204deg, #f0dfe20d 14%, #e1ebe8ff 19%, #f0f5faff 34%)","background-color":"#edf7f4ff"},class:"border-slate-300 border-t text-xs md:text-md sm:text-sm px-6 py-8"},y={class:"pb-3"};function k(t,e,u,c,p,r){const o=b("router-link");return f(),g("footer",$,[n("p",y," © All rights reserved - Siglar Development AS "+m(new Date().getUTCFullYear()),1),s(),i(o,{to:"/release-log"},{default:d(()=>[s(" Release log ")]),_:1}),s(" - "),i(o,{to:"/terms-of-service"},{default:d(()=>[s(" Terms of Service ")]),_:1}),s("-"),i(o,{to:"/privacy-policy"},{default:d(()=>[s(" Privacy Policy ")]),_:1})])}const F=l(x,[["render",k],["__scopeId","data-v-3e0b0bb5"]]),w={props:["title","description"],created(){document.title=this.title||"Vue Play",document.head.children.description.content=this.description||"Design Vue files with a drag & drop template builder. Use playground to create your new web app."}};function C(t,e,u,c,p,r){return null}const N=l(w,[["render",C]]);export{F,N as M,D as V};
