import{b as v,C as y,z as g,u as f,d as i,o as j,f as x,g as I,a as O,i as b}from"./index.5094c426.js";import{_ as A}from"./SiteForm.02ba9ed0.js";import"./TextInput.1dc4ae92.js";import"./SubmitButton.166d0718.js";const S={class:"mt-8 max-w-sm sm:max-w-lg"},B={class:"rounded-sm bg-white p-6 shadow-md"},C={setup(E){const n=v(),c=y(),u=g(),{t:d}=f(),p=i(()=>n.state.nav.currentOrgId),l=i(()=>n.getters["nav/isOwner"]),m=async({name:t,description:s,street1:r,street2:a,zip:e,city:o})=>{const h=await w({street1:r,street2:a,zip:e,city:o});_({name:t,description:s,addressId:h})},_=async({name:t,description:s,addressId:r})=>{let a={_jv:{type:"Site",relationships:{operator:{data:{type:"Organization",id:p.value}},address:{data:{type:"Address",id:r}}}},name:t,description:s};try{const{_jv:e}=await n.dispatch("jv/post",[a,{url:"sites/"}]);u.push({name:"sites",params:{siteId:e.id}})}catch{c.error(d("site.createError"))}},w=async({street1:t,street2:s,zip:r,city:a})=>{let e={_jv:{type:"Address"},street1:t,street2:s,zip:r,city:a};try{const{_jv:o}=await n.dispatch("jv/post",[e,{url:"/addresses/"}]);return o.id}catch(o){c.error(d("address.createError")),console.log(o)}};return(t,s)=>(j(),x("div",S,[I("div",B,[O(A,{"allow-edit":b(l),"button-text":"site.add","on-submit":m},null,8,["allow-edit"])])]))}};export{C as default};
