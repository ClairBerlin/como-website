import{u as a,b5 as n,D as r,o as c,f as i,b as l,t as u}from"./vendor.bfb30425.js";const f={async setup(p){let o,t;const e=a();return[o,t]=n(()=>e.dispatch("authuser/logout")),await o,t(),r.remove("csrftoken"),window.location.href=window.location.origin+"/accounts/login/",(s,_)=>(c(),i("div",null,[l("h1",null,u(s.$t("logging-out")),1)]))}};export{f as default};
