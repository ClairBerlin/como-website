import{u,o as i,f as a,g as s,t as o,c as g,ao as r,h as x,n as h}from"./index.62bc6c45.js";const p={class:"mt-2 text-lg font-bold leading-5 text-[#1E398F]"},f={key:0,class:"text-sm leading-3 text-[#1E398F]"},w={key:1,class:"text-sm leading-3 text-[#1E398F]"},B={class:"mt-4 self-end text-[#1E398F]"},F={class:"text-2xl font-bold"},v=s("span",{class:"text-sm"}," ppm",-1),y={key:3,class:"mt-4 font-medium text-[#3B3B3A]"},k=["innerHTML"],b={key:4,class:"mt-4 font-medium text-[#3B3B3A]"},E={class:"text-[#E40032]"},_={__name:"CurrentMeasurement",props:{ppm:{type:Number,default:void 0},timestamp:{type:Date,default:void 0},whiteBg:{type:Boolean,default:!1}},setup(e){const{t:n}=u(),l=t=>t<=1e3?n("widget.text.low_p1")+t+n("widget.text.low_p2"):t<=1600?n("widget.text.medium_p1")+t+n("widget.text.medium_p2"):n("widget.text.high_p1")+t+n("widget.text.high_p2"),m=t=>{const d=t.getHours().toString(),c=t.getMinutes()<10?"0"+t.getMinutes().toString():t.getMinutes();return`von ${d}:${c}h`};return(t,d)=>(i(),a("div",{class:h(["flex h-[340px] max-w-[327px] flex-col items-center gap-2 rounded-lg px-7 pt-7 pb-4 shadow-md",!e.ppm||!e.timestamp?"bg-[#F6F6F6]":e.whiteBg?"bg-white":"bg-[#F1F9FE]"])},[s("div",p,o(t.$t("widget.title")),1),e.timestamp&&e.ppm?(i(),a("div",f,o(m(e.timestamp)),1)):(i(),a("div",w,"von --:--h")),s("div",B,[s("span",F,o(e.ppm||"---"),1),v]),e.timestamp&&e.ppm?(i(),g(r,{key:2,ppm:e.ppm},null,8,["ppm"])):x("",!0),e.timestamp&&e.ppm?(i(),a("div",y,[s("span",{innerHTML:l(e.ppm)},null,8,k)])):(i(),a("div",b,[s("span",E,o(t.$t("widget.error.title")),1),s("span",null,o(t.$t("widget.error.text")),1)]))],2))}};export{_};
