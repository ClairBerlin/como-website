import{u,c as d,r as f,d as a,o as n,a as g,f as i,b as e,t as s,e as l,F as y,p as v,n as w,g as m,w as b,a8 as k}from"./vendor.bfb30425.js";import{L as $}from"./index.de9be4ad.js";const S={key:1,class:"mt-4"},j={class:"sm:flex sm:items-center"},C={class:"sm:flex-auto"},L={class:"text-xl font-semibold text-gray-900"},B={class:"mt-2 max-w-md text-sm text-gray-700"},N=e("a",{href:"mailto:info@como-berlin.de",class:"font-medium text-gray-700 underline hover:text-gray-600"}," info@como-berlin.de ",-1),V={class:"mt-8 flex flex-col"},F={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},T={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},z={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-md"},D={class:"min-w-full divide-y divide-gray-300"},E={class:"bg-gray-50 text-sm font-medium text-gray-900"},G={scope:"col",class:"px-2 py-3 text-left sm:px-6"},I={scope:"col",class:"py-3 text-left sm:px-6"},O={scope:"col",class:"py-3 text-left sm:px-6"},q={scope:"col",class:"px-2 py-3 text-right sm:px-6"},A={class:"whitespace-nowrap px-2 py-4 sm:px-6"},H={class:"whitespace-nowrap py-4 sm:px-6"},J={class:""},K={class:"whitespace-nowrap py-4 sm:px-6"},M={class:"whitespace-nowrap px-2 py-4 text-right sm:px-6"},P={key:2,class:"mt-4 flex max-w-sm items-center rounded-sm border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-md"},Q={class:"flex"},R={class:"flex-shrink-0"},U={class:"ml-3"},W=e("a",{href:"mailto:info@como-berlin.de",class:"font-medium text-yellow-700 underline hover:text-yellow-600"}," info@como-berlin.de ",-1),se={setup(X){const c=u(),_=d(()=>c.getters["nav/isOrgContextLoading"]),r=d(()=>c.getters["nav/getSensors"]),p=d(()=>{var t;return((t=r.value)==null?void 0:t.length)>0});return(t,Y)=>{const h=f("router-link");return a(_)?(n(),g($,{key:0})):a(p)?(n(),i("div",S,[e("div",j,[e("div",C,[e("h1",L,s(t.$t("sensor.title")),1),e("p",B,[l(s(t.$t("sensor.description"))+" ",1),N])])]),e("div",V,[e("div",F,[e("div",T,[e("div",z,[e("table",D,[e("thead",E,[e("tr",null,[e("th",G,s(t.$t("node.name")),1),e("th",I,s(t.$t("node.identifier")),1),e("th",O,s(t.$t("node.model")),1),e("th",q,s(t.$t("node.sampleCount")),1)])]),e("tbody",null,[(n(!0),i(y,null,v(a(r),(o,x)=>(n(),i("tr",{key:o._jv.id,class:w([x%2==0?"bg-white":"bg-gray-50"])},[e("td",A,[m(h,{class:"como-link",to:{name:"sensor",params:{sensorId:o._jv.id}}},{default:b(()=>[l(s(o.alias),1)]),_:2},1032,["to"])]),e("td",H,[e("pre",J,s(o._jv.id),1)]),e("td",K,s(o.model.trade_name),1),e("td",M,s(o.sample_count),1)],2))),128))])])])])])])])):(n(),i("div",P,[e("div",Q,[e("div",R,[m(a(k),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",U,[l(s(t.$t("node.noNodes"))+" "+s(" ")+" "+s(t.$t("contactSupportToGetSensors"))+" "+s(" ")+" ",1),W])])]))}}};export{se as default};