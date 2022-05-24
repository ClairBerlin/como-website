import{s as h,c as p,a as r,_ as n,F as g}from"./TextInput.94d977bf.js";import{u as y,o as S,c as v,w as d,a as o,i as l,l as x,t as z}from"./index.41107586.js";import{_ as $}from"./SubmitButton.78fbcc12.js";const q={props:{roomName:{type:String,default:""},roomDescription:{type:String,default:""},roomSize:{type:String,default:""},roomHeight:{type:String,default:""},roomCapacity:{type:String,default:""},allowEdit:{type:Boolean,default:!1},buttonText:{type:String,required:!0},onSubmit:{type:Function,required:!0}},setup(i){const{t:a}=y();h({mixed:{required:({label:e})=>a("field_required",{field:e})},string:{max:({label:e,max:t})=>a("field_too_big",{field:e,max:t}),length:({label:e,length:t})=>a("field_length_mismatch",{field:e,length:t})}});const u=e=>{const t=e.includes(",")?",":".",[,s]=e.split(t);return(s==null?void 0:s.length)||0},c=e=>{if(!e)return!0;if(u(e)>1)return!1;const t=parseFloat(e.replace(",","."));return!(isNaN(t)||t<0||t>=1e4)},m=e=>{if(!e)return!0;if(u(e)>1)return!1;const t=parseFloat(e.replace(",","."));return!(isNaN(t)||t<0||t>20)},f=e=>{if(!e)return!0;const t=parseInt(e);return!(isNaN(t)||t<0||t>500)},b=p().shape({name:r().required().max(50).label(a("room.name")),description:r().nullable().optional().label(a("description")),size:r().test("is-valid-size",a("room.invalidSize"),c).label(a("room.size")),height:r().test("is-valid-height",a("room.invalidHeight"),m).label(a("room.height")),capacity:r().test("is-valid-capacity",a("room.invalidMaxOccupancy"),f).label(a("room.maxOccupancy"))});return(e,t)=>(S(),v(l(g),{class:"space-y-6",onSubmit:i.onSubmit,"validation-schema":l(b)},{default:d(()=>[o(n,{disabled:!i.allowEdit,value:i.roomName,name:"name",label:l(a)("room.name")},null,8,["disabled","value","label"]),o(n,{disabled:!i.allowEdit,element:"textarea",value:i.roomDescription,name:"description",label:`${l(a)("description")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),o(n,{disabled:!i.allowEdit,value:i.roomSize,name:"size",label:`${l(a)("room.size")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),o(n,{disabled:!i.allowEdit,value:i.roomHeight,name:"height",label:`${l(a)("room.height")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),o(n,{disabled:!i.allowEdit,value:i.roomCapacity,name:"capacity",label:`${l(a)("room.maxOccupancy")} (${l(a)("optional")})`},null,8,["disabled","value","label"]),o($,{"allow-submit":i.allowEdit},{default:d(()=>[x(z(e.$t(i.buttonText)),1)]),_:1},8,["allow-submit"])]),_:1},8,["onSubmit","validation-schema"]))}};export{q as _};
