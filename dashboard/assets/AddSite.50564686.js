import{u as v,al as y,V as g,D as f,c as i,o as j,f as x,b as I,g as O,d as b}from"./vendor.c632a9d3.js";import{_ as A}from"./SiteForm.31afe2bc.js";import"./TextInput.d734e693.js";import"./SubmitButton.1f24900a.js";const S={class:"mt-8 max-w-sm sm:max-w-lg"},B={class:"rounded-sm bg-white p-6 shadow-md"},D={setup(E){const c=v(),n=y(),u=g(),{t:d}=f(),p=i(()=>c.state.nav.currentOrgId),l=i(()=>c.getters["nav/isOwner"]),m=async({name:t,description:s,street1:r,street2:a,zip:e,city:o})=>{const h=await w({street1:r,street2:a,zip:e,city:o});_({name:t,description:s,addressId:h})},_=async({name:t,description:s,addressId:r})=>{let a={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:p.value}},address:{data:{type:"Address",id:r}}}},name:t,description:s};try{const{_jv:e}=await c.dispatch("jv/post",[a,{url:"sites/"}]);u.push({name:"sites",params:{siteId:e.id}})}catch{n.error(d("site.createError"))}},w=async({street1:t,street2:s,zip:r,city:a})=>{let e={_jv:{type:"Address"},street1:t,street2:s,zip:r,city:a};try{const{_jv:o}=await c.dispatch("jv/post",[e,{url:"/addresses/"}]);return o.id}catch(o){n.error(d("address.createError")),console.log(o)}};return(t,s)=>(j(),x("div",S,[I("div",B,[O(A,{"allow-edit":b(l),"button-text":"site.add","on-submit":m},null,8,["allow-edit"])])]))}};export{D as default};
