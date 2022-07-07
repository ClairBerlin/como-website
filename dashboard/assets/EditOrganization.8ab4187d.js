import{o as s,c as O,a as n,b as y,a0 as b,B as z,u as B,d as l,e as I,f as a,g as t,t as m,h as j,i as e,l as v,w as C,F as N}from"./index.62bc6c45.js";import{_ as V}from"./OrganizationForm.434cdb26.js";import"./TextInput.9a87d8b7.js";import"./SubmitButton.df749b52.js";function $(f,o){return s(),O("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})])}const E={key:0,class:"bg-white shadow-md sm:rounded-sm"},F={class:"mx-auto max-w-screen-xl px-4 py-6 sm:px-6"},S={class:"text-3xl font-bold leading-tight text-gray-900"},A={class:"mt-8 max-w-sm sm:max-w-lg"},T={key:0,class:"mt-4 flex items-center rounded-sm border-l-4 border-red-400 bg-red-50 p-4 shadow-md"},D={class:"flex"},L={class:"flex-shrink-0"},M={class:"ml-3"},R=v(" Find their contact information here. "),q={key:1,class:"rounded-sm bg-white p-6 shadow-md"},P={__name:"EditOrganization",setup(f){const o=y(),u=b(),g=z(),{t:h}=B(),p=l(()=>o.state.nav.currentOrgId),i=l(()=>o.getters["jv/get"]({_jv:{type:"Organization",id:p.value}})),_=l(()=>o.getters["nav/isOwner"]),k=async({name:r,description:w})=>{let d={_jv:{type:"Organization",id:u.params.orgId},name:r,description:w};try{await o.dispatch("jv/patch",[d,{url:`organizations/${u.params.orgId}/`}]),g.success(h("org.updateSuccess"))}catch{g.error(h("org.updateError"))}};return(r,w)=>{var c,x;const d=I("router-link");return s(),a(N,null,[r.$route.meta.title?(s(),a("header",E,[t("div",F,[t("h1",S,m(r.$t("org.edit")),1)])])):j("",!0),t("div",A,[e(_)?(s(),a("div",q,[n(V,{"allow-edit":e(_),"org-name":(c=e(i))==null?void 0:c.name,"org-description":(x=e(i))==null?void 0:x.description,"button-text":"update","on-submit":k},null,8,["allow-edit","org-name","org-description"])])):(s(),a("div",T,[t("div",D,[t("div",L,[n(e($),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",M,[v(" Only the Owner of an organization can change the name and/or description. Contact the Owner of "+m(e(i).name)+". "+m(" ")+" ",1),n(d,{to:{name:"org-management-detail",params:{orgId:e(p)}},class:"font-medium text-red-700 underline hover:text-red-600"},{default:C(()=>[R]),_:1},8,["to"])])])]))])],64)}}};export{P as default};
