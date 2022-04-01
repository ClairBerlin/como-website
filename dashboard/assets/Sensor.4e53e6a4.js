import{o as u,a as I,w as f,g as l,b as e,d as t,Y as V,Z as Q,_ as X,ak as Y,ai as Z,e as N,t as n,aj as H,X as J,V as K,C as D,Q as W,u as ee,al as te,c as g,G as se,E as T,r as ae,f as b,ao as oe,b3 as ne,F as L,p as E,i as O,n as le,O as q}from"./vendor.bfb30425.js";import{d as B,i as ie,b as re}from"./index.86f2583d.js";import{L as de}from"./index.de9be4ad.js";import{s as ce,c as ue,a as _,_ as w,F as me}from"./TextInput.9e767deb.js";import{_ as pe}from"./SubmitButton.46db78ca.js";import{_ as fe}from"./PrivacyToggle.41108d81.js";import"./camelCase.8cdf0679.js";const ge={class:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},be=e("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle","aria-hidden":"true"},"\u200B",-1),ve={class:"inline-block transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"},ye={class:"absolute top-0 right-0 hidden pt-4 pr-4 sm:block"},he=e("span",{class:"sr-only"},"Close",-1),xe={class:"sm:flex sm:items-start"},_e={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10"},we={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},$e={class:"mt-2"},ke={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},je={props:{open:{type:Boolean,required:!0},modalTitle:{type:String,required:!0}},emits:["closeModal","installClicked"],setup(r,{emit:a}){const m=()=>a("closeModal"),i=()=>{a("installClicked"),m()};return(c,p)=>(u(),I(t(K),{as:"template",show:r.open},{default:f(()=>[l(t(J),{as:"div",class:"fixed inset-0 z-10 overflow-y-auto",onClose:m},{default:f(()=>[e("div",ge,[l(t(V),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f(()=>[l(t(Q),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),be,l(t(V),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:f(()=>[e("div",ve,[e("div",ye,[e("button",{type:"button",class:"rounded-sm bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:m},[he,l(t(X),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",xe,[e("div",_e,[l(t(Y),{class:"h-6 w-6 text-indigo-600","aria-hidden":"true"})]),e("div",we,[l(t(Z),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:f(()=>[N(n(r.modalTitle),1)]),_:1}),e("div",$e,[H(c.$slots,"default")])])]),e("div",ke,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:i},n(c.$t("installation.installNow")),1),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:m},n(c.$t("cancel")),1)])])]),_:3})])]),_:3})]),_:3},8,["show"]))}},Ce={props:{sensorAlias:{type:String,default:""},sensorDescription:{type:String,default:""},eui64:{type:String,default:""},sensorId:{type:String,default:""},tradeName:{type:String,default:""},sensorManufacturer:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(r){const{t:a}=D();ce({mixed:{required:({label:i})=>i+" "+a("field_required")},string:{max:({label:i,max:c})=>a("field_too_big",{field:i,max:c})}});const m=ue().shape({alias:_().required().max(100).label(a("node.name")),description:_().nullable().label(a("description")),eui:_().nullable().label(a("node.eui")),id:_().nullable().label(a("node.id")),type:_().nullable().label(a("node.type")),manufacturer:_().nullable().label(a("node.manufacturer"))});return(i,c)=>(u(),I(t(me),{class:"space-y-6",onSubmit:r.onSubmit,"validation-schema":t(m)},{default:f(()=>[l(w,{disabled:!r.allowEdit,value:r.sensorAlias,name:"alias",label:t(a)("node.name")},null,8,["disabled","value","label"]),l(w,{disabled:!r.allowEdit,element:"textarea",value:r.sensorDescription,name:"description",label:`${t(a)("description")} (${t(a)("optional")})`},null,8,["disabled","value","label"]),l(w,{disabled:"",name:"eui",value:r.eui64,label:t(a)("node.eui")},null,8,["value","label"]),l(w,{disabled:"",name:"id",value:r.sensorId,label:t(a)("node.id")},null,8,["value","label"]),l(w,{disabled:"",name:"type",value:r.tradeName,label:t(a)("node.type")},null,8,["value","label"]),l(w,{disabled:"",name:"manufacturer",value:r.sensorManufacturer,label:t(a)("node.manufacturer")},null,8,["value","label"]),l(pe,{"allow-submit":r.allowEdit},{default:f(()=>[N(n(i.$t(r.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}},Se={key:0,class:""},Ie={class:"form-control"},Ne={for:"room",class:"block text-sm font-medium text-gray-700"},Te=["value"],Le={class:"my-2 flex items-center"},Oe={class:"mr-3 text-sm"},Ve={for:"makePublic",class:"font-medium text-gray-700"},De={key:2},Ee={class:"mt-8 max-w-sm sm:max-w-lg"},qe={class:"rounded-sm bg-white p-6 shadow-md"},Be={key:3,class:"text-md mt-8 overflow-hidden rounded-sm bg-white ring-1 ring-gray-300"},Me={class:"min-w-full divide-y divide-gray-200"},Ae={class:"bg-gray-50"},Fe={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Re={scope:"col",class:"py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Pe={scope:"col",class:"py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},ze={scope:"col",class:"hidden py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6 md:table-cell"},Ue={scope:"col",class:"px-2 py-3 text-left text-xs font-medium tracking-wider text-gray-500 sm:px-6"},Ge={class:"whitespace-nowrap px-2 py-4 sm:px-6"},Qe={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Xe={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Ye={class:"whitespace-nowrap px-2 py-4 text-left sm:px-6"},Ze={class:"whitespace-nowrap px-2 py-4 sm:px-6"},He={class:"flex flex-col sm:flex-row"},Je={class:"flex flex-row"},Ke=["onClick"],it={emits:["changeSubheading"],setup(r,{emit:a}){const m=W(),i=ee(),c=te(),{t:p}=D(),$=g(()=>i.getters["nav/isOwner"]),M=g(()=>i.getters["nav/isOrgContextLoading"]),h=g(()=>m.params.sensorId),v=g(()=>i.getters["jv/get"]({_jv:{type:"Node",id:h.value}}));se(()=>{var s;((s=v.value)==null?void 0:s.alias)&&a("changeSubheading",v.value.alias)});const k=g(()=>{const s=i.getters["jv/get"]("Installation",`$[?(@.node._jv.id=="${h.value}")]`);return Object.entries(s).map(([,y])=>y)}),A=g(()=>{var s;return((s=k.value)==null?void 0:s.length)>0}),F=g(()=>re(k.value)),j=g(()=>i.getters["nav/getRooms"]),R=g(()=>{var s;return((s=j.value)==null?void 0:s.length)>0}),C=T(!1),x=T(j.value[0]),S=T(!1),P=async({alias:s,description:d})=>{let y={_jv:{type:"Node",id:h.value},alias:s,description:d};try{await i.dispatch("jv/patch",[y,{url:`nodes/${h.value}/`}]),c.success(p("node.updateSuccess"))}catch(o){c.error(p("node.updateError")),console.log(o)}},z=async s=>{const d={_jv:{type:"Installation",id:s},to_timestamp_s:q().unix()};try{await i.dispatch("jv/patch",[d,{url:`installations/${s}/`}]),c.success(p("installation.successTerminate"))}catch(y){c.error(p("installation.errorTerminate")),console.log(y)}},U=async()=>{if(typeof x.value=="undefined"){c.error(p("installation.errorNoTarget"));return}let s={_jv:{type:"Installation",relationships:{room:{data:{type:"Room",id:x.value._jv.id}},node:{data:{type:"Node",id:h.value}}}},from_timestamp_s:q().unix(),is_public:S.value};try{await i.dispatch("jv/post",[s,{url:"installations/"}]),await i.dispatch("jv/get",["installations",{params:{"filter[organization]":m.params.orgId}}],{root:!0}),c.success(p("installation.successCreate")),x.value=void 0}catch(d){c.error(p("installation.errorCreate")),x.value=void 0,console.log(d)}};return(s,d)=>{const y=ae("router-link");return u(),b(L,null,[t($)&&!t(F)&&t(R)?(u(),b("div",Se,[e("div",{class:"btn bg-indigo-600 normal-case hover:bg-indigo-700",onClick:d[0]||(d[0]=o=>C.value=!0)},n(s.$t("installation.installNow")),1),l(je,{open:C.value,onCloseModal:d[3]||(d[3]=o=>C.value=!1),onInstallClicked:U,"modal-title":"Installation "+t(p)("of")+" "+t(v).alias},{default:f(()=>[e("div",Ie,[e("label",Ne,n(s.$t("installation.targetLocation")),1),oe(e("select",{id:"location",name:"room","onUpdate:modelValue":d[1]||(d[1]=o=>x.value=o),class:"mt-1 block w-full rounded-sm border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},[(u(!0),b(L,null,E(t(j),o=>(u(),b("option",{key:o._jv.id,value:o},n(o.name),9,Te))),128))],512),[[ne,x.value]])]),e("div",Le,[e("div",Oe,[e("label",Ve,n(s.$t("installation.makePublic")),1)]),e("div",null,[l(fe,{modelValue:S.value,"onUpdate:modelValue":d[2]||(d[2]=o=>S.value=o)},null,8,["modelValue"])])])]),_:1},8,["open","modal-title"])])):O("",!0),t(M)?(u(),I(de,{key:1})):(u(),b("div",De,[e("div",Ee,[e("div",qe,[l(Ce,{"sensor-alias":t(v).alias,"sensor-description":t(v).description,eui64:t(v).eui64,"sensor-id":t(h),"trade-name":t(v).model.trade_name,"sensor-manufacturer":t(v).model.manufacturer,"allow-edit":t($),"button-text":"update","on-submit":P},null,8,["sensor-alias","sensor-description","eui64","sensor-id","trade-name","sensor-manufacturer","allow-edit"])])])])),t(A)?(u(),b("div",Be,[e("table",Me,[e("thead",Ae,[e("tr",null,[e("th",Fe,n(s.$t("node.installationLocation")),1),e("th",Re,n(s.$t("installation.isPublic")),1),e("th",Pe,n(s.$t("installation.installedOn")),1),e("th",ze,n(s.$t("installation.removedOn")),1),e("th",Ue,n(s.$t("actions")),1)])]),e("tbody",null,[(u(!0),b(L,null,E(t(k),(o,G)=>(u(),b("tr",{key:o._jv.id,class:le([G%2==0?"bg-white":"bg-gray-50"])},[e("td",Ge,n(o.room.name),1),e("td",Qe,n(s.$t(`installation.public.${o.is_public}`)),1),e("td",Xe,n(t(B)(o.from_timestamp_s)),1),e("td",Ye,n(t(B)(o.to_timestamp_s)),1),e("td",Ze,[e("div",He,[e("div",Je,[l(y,{class:"gray-button btn-sm my-2 w-max font-semibold",to:{name:"installation",params:{installationId:o._jv.id}}},{default:f(()=>[N(n(s.$t("inspect")),1)]),_:2},1032,["to"])]),t($)&&t(ie)(o)?(u(),b("div",{key:0,class:"gray-button btn-sm m-2 mr-0 w-max font-semibold",onClick:We=>z(o._jv.id)},n(s.$t("installation.terminate")),9,Ke)):O("",!0)])])],2))),128))])])])):O("",!0)],64)}}};export{it as default};