import{o as a,f as i,g as e,i as v,t as c,d as M,c as w,h as b,n as B,a0 as A,r as _,b as E,D as L,a as f,H as N}from"./index.5094c426.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import{i as O}from"./index.86e5ff1d.js";var R="/dashboard/assets/como-logo.fc3e99d7.svg",D="/dashboard/assets/fresh-air-medal.8f1f467e.svg";const I={class:"flex max-w-[327px] flex-col items-center gap-2 rounded bg-[#F1F9FE] px-6 pt-7 pb-4 drop-shadow-sm"},S=["src"],z=e("div",{class:"mx-0 text-lg font-bold text-[#1E398F]"},"Frischluft Medaille",-1),H=e("div",{class:"font-medium text-[#3B3B3A]"}," Unsere Langzeitmessungen zeigen, dass an diesem Ort regelm\xE4\xDFig und ausreichend gel\xFCftet wird. Es kann aufgeatmet werden! ",-1),T={setup(t){return(r,l)=>(a(),i("div",I,[e("img",{class:"mb-4 h-12 w-12",src:v(D),alt:"Frischluft Medaille"},null,8,S),z,H]))}},V={class:"flex w-full flex-row items-center justify-between"},q=e("svg",{width:"16",height:"24",viewBox:"0 0 16 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M13.7871 22L2 12L13.7871 2",stroke:"#385BA7","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1),G=[q],W={class:"flex select-none flex-col items-center text-[#385BA7]"},P={class:"text-sm"},U={class:"text-sm font-bold"},Z=e("svg",{width:"16",height:"24",viewBox:"0 0 16 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.00004 2L13.7871 12L2.00004 22",stroke:"#385BA7","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1),K=[Z],J={props:{numberOfInstallations:{type:Number,required:!0},currentInstallation:{type:Number,required:!0},roomName:{type:String,required:!0}},emits:["previous","next"],setup(t,{emit:r}){const l=()=>r("previous"),s=()=>r("next");return(n,o)=>(a(),i("div",V,[e("div",{class:"rounded p-6 hover:bg-[#F1F9FE]",onClick:l},G),e("div",W,[e("div",P,c(t.currentInstallation)+"/"+c(t.numberOfInstallations),1),e("div",U,c(t.roomName),1)]),e("div",{class:"rounded p-6 hover:bg-[#F1F9FE]",onClick:s},K)]))}};const Q=["value"],X={props:{ppm:{type:Number,required:!0}},setup(t){const r=t,l=M(()=>Math.max(400,Math.min(r.ppm,2e3)));return(s,n)=>(a(),i("input",{type:"range",disabled:"",class:"form-range h-4 w-full appearance-none bg-transparent p-0 focus:shadow-none focus:outline-none focus:ring-0",min:"400",max:"2000",value:v(l)},null,8,Q))}};var Y=j(X,[["__scopeId","data-v-92d52f96"]]);const ee=e("div",{class:"mt-2 text-lg font-bold leading-5 text-[#1E398F]"}," Aktueller Messwert ",-1),te={key:0,class:"text-sm leading-3 text-[#1E398F]"},se={key:1,class:"text-sm leading-3 text-[#1E398F]"},ne={class:"mt-4 self-end text-[#1E398F]"},oe={class:"text-2xl font-bold"},ae=e("span",{class:"text-sm"}," ppm",-1),ie={key:3,class:"mt-4 font-medium text-[#3B3B3A]"},le=["innerHTML"],re={key:4,class:"mt-4 font-medium text-[#3B3B3A]"},ce=e("span",{class:"text-[#E40032]"},"ST\xD6RUNG ",-1),de=e("span",null," - Der Sensor macht gerade ein P\xE4uschen! Leider ist gerade keine Anzeige m\xF6glich, da im Moment keine Daten gesendet werden. ",-1),ue=[ce,de],me={props:{ppm:{type:Number,default:void 0},timestamp:{type:Date,default:void 0}},setup(t){const r=s=>s<=1e3?`Der CO<sub>2</sub>-Gehalt des Raumes liegt bei ${s} ppm, dies entspricht einem normalen Wert und einer niedrigen Aerosollast. Die Raumluft ist gut und du kannst durchatmen.`:s<=1600?`Der CO<sub>2</sub>-Gehalt des Raumes liegt bei ${s} ppm, dies entspricht einem leicht erh\xF6hten Wert und somit auch einer erh\xF6hten Aerosollast. Dem Raum w\xFCrde etwas frischer Wind gut tun! `:`Der CO<sub>2</sub>-Gehalt des Raumes liegt bei ${s} ppm, dies entspricht einem sehr hohen Wert und deutet auf eine hohe Aerosollast hin. Halte lieber die Luft an!`,l=s=>{const n=s.getHours().toString(),o=s.getMinutes()<10?"0"+s.getMinutes().toString():s.getMinutes();return`von ${n}:${o}h`};return(s,n)=>(a(),i("div",{class:B(["flex h-[340px] max-w-[327px] flex-col items-center gap-2 rounded px-7 pt-7 pb-4 drop-shadow-sm",!t.ppm||!t.timestamp?"bg-[#F6F6F6]":"bg-[#F1F9FE]"])},[ee,t.timestamp&&t.ppm?(a(),i("div",te,c(l(t.timestamp)),1)):(a(),i("div",se,"von --:--h")),e("div",ne,[e("span",oe,c(t.ppm||"---"),1),ae]),t.timestamp&&t.ppm?(a(),w(Y,{key:2,ppm:t.ppm},null,8,["ppm"])):b("",!0),t.timestamp&&t.ppm?(a(),i("div",ie,[e("span",{innerHTML:r(t.ppm)},null,8,le)])):(a(),i("div",re,ue))],2))}},he={key:0,class:"mx-auto flex min-h-[359px] max-w-[359px] flex-col items-center justify-center gap-6 rounded-lg bg-white p-4"},pe={key:1,class:"flex justify-center font-semibold"},_e={key:2,class:"mx-auto flex max-w-[359px] flex-col items-center gap-6 rounded-lg bg-white p-4"},ge=["src"],fe={class:"mt-[-12px] mb-4 text-[#7886C2]"},ve={class:"flex gap-2"},xe=e("svg",{width:"18",height:"24",viewBox:"0 0 18 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.57147 0C3.20402 0 0 3.52459 0 9.42862C0 15.8692 7.64575 23.4361 7.97147 23.755C8.13169 23.912 8.34711 24 8.57147 24C8.79583 24 9.01125 23.912 9.17148 23.755C9.49719 23.4361 17.1429 15.8692 17.1429 9.42862C17.1429 3.52459 13.9389 0 8.57147 0ZM8.57147 12.0001C7.72383 12.0001 6.89523 11.7487 6.19044 11.2778C5.48566 10.8069 4.93635 10.1375 4.61197 9.3544C4.28759 8.57129 4.20272 7.70957 4.36808 6.87822C4.53345 6.04687 4.94163 5.28322 5.541 4.68385C6.14037 4.08448 6.90402 3.6763 7.73537 3.51094C8.56672 3.34557 9.42844 3.43044 10.2116 3.75482C10.9947 4.0792 11.664 4.62851 12.1349 5.3333C12.6059 6.03808 12.8572 6.86669 12.8572 7.71432C12.8558 8.85056 12.4039 9.93986 11.6004 10.7433C10.797 11.5467 9.7077 11.9987 8.57147 12.0001Z",fill:"currentColor"})],-1),we={class:"text-lg font-bold"},Ce={setup(t){const r=A(),l=_(!1),s=E(),n=_([]);L(async()=>{l.value=!0;const g=r.params.siteId,x=await s.dispatch("jv/get",`sites/${g}`),m=await s.dispatch("jv/get",`sites/${g}/rooms`),h=Object.entries(m).map(async([d,p])=>{const y=await s.dispatch("jv/get",`rooms/${d}/installations`);Object.entries(y).map(([F,u])=>{(u==null?void 0:u.is_public)&&O(u)&&n.value.push({roomId:d,site:x,room:p,installationId:F,installation:u})})});await Promise.all(h),l.value=!1});const o=_(1),$=_(!1),k=()=>{o.value-1<=0?o.value=n.value.length:o.value-=1},C=()=>{o.value+1>n.value.length?o.value=1:o.value+=1};return(g,x)=>{var m,h,d,p;return l.value?(a(),i("div",he,[f(N,{"additional-classes":"border-[#1e398f]"})])):n.value.length===0?(a(),i("div",pe," Keine Daten vorhanden. ")):(a(),i("div",_e,[e("img",{class:"mt-6 h-12 w-auto",src:v(R),alt:"COMo Logo"},null,8,ge),e("div",fe,[e("div",ve,[xe,e("div",we,c(n.value[o.value-1].site.name),1)])]),f(me,{ppm:(h=(m=n.value[o.value-1].installation)==null?void 0:m.latest_sample)==null?void 0:h.co2_ppm,timestamp:new Date(((p=(d=n.value[o.value-1].installation)==null?void 0:d.latest_sample)==null?void 0:p.timestamp_s)*1e3)},null,8,["ppm","timestamp"]),$.value?(a(),w(T,{key:0})):b("",!0),f(J,{"number-of-installations":n.value.length,"current-installation":o.value,"room-name":n.value[o.value-1].room.name,onPrevious:k,onNext:C},null,8,["number-of-installations","current-installation","room-name"])]))}}};export{Ce as default};
