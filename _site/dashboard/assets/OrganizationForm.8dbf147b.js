import{s as u,c as m,a as n,_ as s,F as c}from"./TextInput.9e767deb.js";import{C as b,o as f,a as g,w as r,g as i,d as l,e as p,t as x}from"./vendor.bfb30425.js";import{_ as S}from"./SubmitButton.46db78ca.js";const h={props:{orgName:{type:String,default:""},orgDescription:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(e){const{t:a}=b();u({mixed:{required:({label:t})=>a("field_required",{field:t})},string:{max:({label:t,max:o})=>a("field_too_big",{field:t,max:o})}});const d=m().shape({name:n().required().max(50).label(a("org.name")),description:n().nullable().optional().label(a("description"))});return(t,o)=>(f(),g(l(c),{class:"space-y-6",onSubmit:e.onSubmit,"validation-schema":l(d)},{default:r(()=>[i(s,{disabled:!e.allowEdit,value:e.orgName,name:"name",label:l(a)("org.name")},null,8,["disabled","value","label"]),i(s,{disabled:!e.allowEdit,element:"textarea",value:e.orgDescription,name:"description",label:`${l(a)("description")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),i(S,{"allow-submit":e.allowEdit},{default:r(()=>[p(x(t.$t(e.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}};export{h as _};