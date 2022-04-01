import{o as d,a as $,w as p,g as r,b as e,d as o,Y as D,Z as F,_ as G,ak as W,ai as X,e as Y,t as a,aj as Z,X as H,V as J,R as K,u as P,al as Q,C as ee,c as v,S as te,E as y,f as u,i as _,am as se,an as R,ao as oe,ap as ae,F as T,p as ne,n as le,aq as re,ar as ie}from"./vendor.bfb30425.js";import{r as de}from"./index.86f2583d.js";import{_ as I}from"./DeletionModal.dce11adb.js";import{_ as ce,L as me}from"./index.de9be4ad.js";const ue={class:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"},pe=e("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle","aria-hidden":"true"},"\u200B",-1),ge={class:"inline-block transform overflow-hidden rounded-md bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"},he={class:"absolute top-0 right-0 hidden pt-4 pr-4 sm:block"},fe=e("span",{class:"sr-only"},"Close",-1),ve={class:"sm:flex sm:items-start"},ye={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10"},_e={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},xe={class:"mt-2"},be={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},we={props:{open:{type:Boolean,required:!0},modalTitle:{type:String,required:!0}},emits:["closeModal","addClicked"],setup(k,{emit:x}){const l=()=>x("closeModal"),c=()=>{x("addClicked"),l()};return(i,g)=>(d(),$(o(J),{as:"template",show:k.open},{default:p(()=>[r(o(H),{as:"div",class:"fixed inset-0 z-10 overflow-y-auto",onClose:l},{default:p(()=>[e("div",ue,[r(o(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[r(o(F),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),pe,r(o(D),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:p(()=>[e("div",ge,[e("div",he,[e("button",{type:"button",class:"rounded-sm bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:l},[fe,r(o(G),{class:"h-6 w-6","aria-hidden":"true"})])]),e("div",ve,[e("div",ye,[r(o(W),{class:"h-6 w-6 text-indigo-600","aria-hidden":"true"})]),e("div",_e,[r(o(X),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:p(()=>[Y(a(k.modalTitle),1)]),_:1}),e("div",xe,[Z(i.$slots,"default")])])]),e("div",be,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:c},a(i.$t("org.addMember")),1),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:l},a(i.$t("cancel")),1)])])]),_:3})])]),_:3})]),_:3},8,["show"]))}},$e={class:"border-b border-gray-200 bg-white"},ke={key:0,class:"mx-auto max-w-screen-xl px-4 pt-12 pb-4"},Me={class:""},je={class:"text-3xl font-bold leading-tight text-gray-900"},Ce={key:1,class:"mx-auto mt-4 max-w-screen-xl px-4 py-6"},Oe={class:"text-sm text-gray-500"},De={class:"text-sm text-gray-500"},Re={class:"sm:flex sm:items-center"},Te={class:"sm:flex-auto"},Ie={class:"text-xl font-semibold text-gray-900"},ze={class:"mt-2 text-sm text-gray-700"},Ee={class:"mt-4 sm:mt-0 sm:ml-16"},Se={class:"text-black"},Le={class:"flex items-center justify-end"},Ne={class:"flex"},Ve={class:"my-1 italic"},Ae={class:"form-control"},Be={class:"label px-0"},Ue={class:"label-text font-semibold"},qe={class:"mt-8 flex flex-col"},Fe={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ge={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},We={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-md"},Xe={class:"min-w-full divide-y divide-gray-300"},Ye={class:"bg-gray-50 text-sm font-medium text-gray-900"},Ze={scope:"col",class:"px-2 py-3 text-left sm:px-6"},He={scope:"col",class:"py-3 text-left sm:px-6"},Je={scope:"col",class:"hidden px-2 py-3 text-left sm:px-6 md:table-cell"},Ke={scope:"col",class:"px-2 py-3 text-left"},Pe={class:"whitespace-nowrap px-2 py-4 sm:px-6"},Qe={class:"flex"},et={class:"text-sm text-gray-700"},tt={class:"whitespace-nowrap py-4 sm:px-6"},st={class:"hidden whitespace-nowrap px-2 py-4 sm:px-6 md:table-cell"},ot={class:"whitespace-nowrap px-2 py-2"},at={class:"flex flex-col sm:flex-row"},nt=["data-tip","onClick"],lt=["data-tip","onClick"],mt={setup(k){const x=K(),l=P(),c=Q(),{t:i}=ee(),g=v(()=>l.state.nav.currentOrgId);te(async()=>{await l.dispatch("nav/loadInvetory",g.value)});const f=v(()=>l.getters["nav/getOrgMembership"]),z=v(()=>{var t;return((t=f==null?void 0:f.value)==null?void 0:t.orgName)||"\u2026"}),E=v(()=>{var s;const t=l.getters["jv/get"]("Membership",`$[?(@.organization_name=="${(s=f==null?void 0:f.value)==null?void 0:s.orgName}")]`);return Object.entries(t).map(([,m])=>m)}),S=v(()=>l.getters["nav/isOrgContextLoading"]),b=v(()=>l.getters["nav/isOwner"]),M=y(!1),L=()=>M.value=!0,N=async()=>{console.log(`Deleting organization with ID ${g.value}`),await l.dispatch("jv/delete",`organizations/${g.value}`),l.commit("jv/deleteRecord",{_jv:{type:"Organization",id:g.value}}),await l.dispatch("authuser/fetchMemberships"),x.push({name:"org-management"})},j=y(!1),V=()=>j.value=!0,w=y(void 0),A=async()=>{console.log(`Removing member with ID ${w.value} from the organization with ID ${g.value}`),await l.dispatch("jv/delete",`memberships/${w.value}`),l.commit("jv/deleteRecord",{_jv:{type:"Membership",id:w.value}})},C=y(!1),h=y(void 0),B=async()=>{if(typeof h.value=="undefined"){c.error(i("org.noEmailError"));return}let t;try{t=await l.dispatch("jv/get",["users",{params:{"filter[search]":h.value}}])}catch(O){console.log(O),c.error(i("org.noUserWithGivenEmail")+" "+h.value),h.value=void 0;return}h.value=void 0;const n=Object.keys(t);if(typeof t=="undefined"||!t||!n[0]||(n==null?void 0:n.length)>1){c.error(i("org.unexpectedUserResult")),console.log(`Error fetching user: ${n}`);return}const s=n[0];console.log(`Adding user with ID: ${s}`);const m={_jv:{type:"Membership",role:"A",relationships:{organization:{data:{type:"Organization",id:g.value}},user:{data:{type:"User",id:s}}}}};try{await l.dispatch("jv/post",[m,{url:"memberships/"}]),await l.dispatch("jv/get",`users/${s}`),c.success(i("org.successAddMember"))}catch(O){c.error(i("org.addMemberError")),console.log(O)}},U=async t=>{const{id:n}=t._jv,s=t.role==="O"?"I":"O";try{const m={_jv:{type:"Membership",id:n},role:s};await l.dispatch("jv/patch",[m,{url:`memberships/${n}/`}]),c.success(i("role.changeSucces"))}catch(m){c.error(i("role.changeError")),console.log(m)}},q=t=>i(t==="O"?"role.downgrade":"role.upgrade");return(t,n)=>(d(),u(T,null,[e("div",$e,[t.$route.meta.title?(d(),u("header",ke,[e("div",Me,[e("h1",je,a(o(z))+" - "+a(t.$t("org.members")),1)])])):_("",!0)]),r(ce),o(S)?(d(),$(me,{key:0})):(d(),u("div",Ce,[r(I,{open:M.value,onCloseModal:n[0]||(n[0]=s=>M.value=!1),onDeleteClicked:N,"modal-title":"delete-org-modal.title"},{default:p(()=>[e("p",Oe,a(t.$t("delete-org-modal.message")),1)]),_:1},8,["open"]),r(I,{open:j.value,onCloseModal:n[1]||(n[1]=s=>j.value=!1),onDeleteClicked:A,"modal-title":"remove-member-modal.title"},{default:p(()=>[e("p",De,a(t.$t("remove-member-modal.message")),1)]),_:1},8,["open"]),e("div",Re,[e("div",Te,[e("h1",Ie,a(t.$t("team.title")),1),e("p",ze,a(t.$t("team.description")),1)]),e("div",Ee,[o(b)?(d(),u("div",{key:0,class:"indigo-button",onClick:n[2]||(n[2]=s=>C.value=!0)},[r(o(se),{class:"mr-2 h-4 w-4"}),e("span",null,a(t.$t("org.addMember")),1)])):_("",!0),o(b)?(d(),u("div",{key:1,class:"indigo-button ml-2 bg-gray-300 text-gray-900 hover:bg-gray-400",onClick:L},[r(o(R),{class:"mr-2 h-4 w-4"}),e("span",null,a(t.$t("org.delete")),1)])):_("",!0)])]),e("div",Se,[e("div",Le,[e("div",Ne,[r(we,{open:C.value,onCloseModal:n[4]||(n[4]=s=>C.value=!1),onAddClicked:B,"modal-title":o(i)("org.addMember")},{default:p(()=>[e("div",Ve,a(t.$t("add-member-note")),1),e("div",Ae,[e("label",Be,[e("span",Ue,a(t.$t("user.email")),1)]),oe(e("input",{type:"email","onUpdate:modelValue":n[3]||(n[3]=s=>h.value=s),placeholder:"name@domain.org",class:"como-focus input-bordered rounded bg-white text-gray-600"},null,512),[[ae,h.value,void 0,{trim:!0}]])])]),_:1},8,["open","modal-title"])])]),e("div",qe,[e("div",Fe,[e("div",Ge,[e("div",We,[e("table",Xe,[e("thead",Ye,[e("tr",null,[e("th",Ze,a(t.$t("name")),1),e("th",He,a(t.$t("email")),1),e("th",Je,a(t.$t("role.singular")),1),e("th",Ke,a(t.$t("actions")),1)])]),e("tbody",null,[(d(!0),u(T,null,ne(o(E),(s,m)=>(d(),u("tr",{key:s._jv.id,class:le([m%2==0?"bg-white":"bg-gray-50"])},[e("td",Pe,[e("div",Qe,a(s.user.first_name)+" "+a(s.user.last_name),1),e("div",et,a(s.user.username),1)]),e("td",tt,a(s.user.email),1),e("td",st,a(t.$t(o(de)(s.role))),1),e("td",ot,[e("div",at,[o(b)?(d(),u("div",{key:0,"data-tip":q(s.role),class:"gray-button tooltip btn-sm mr-3 w-max p-3",onClick:()=>U(s)},[(s==null?void 0:s.role)==="O"?(d(),$(o(re),{key:0,class:"h-6 w-6"})):(d(),$(o(ie),{key:1,class:"h-6 w-6"}))],8,nt)):_("",!0),o(b)?(d(),u("div",{key:1,"data-tip":t.$t("remove"),class:"gray-button tooltip btn-sm bg-red-600 p-3 hover:bg-red-700",onClick:()=>{V(),w.value=s._jv.id}},[r(o(R),{class:"h-5 w-5 text-red-100"})],8,lt)):_("",!0)])])],2))),128))])])])])])])])]))],64))}};export{mt as default};
