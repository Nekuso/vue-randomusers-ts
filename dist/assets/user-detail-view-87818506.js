import{U as d,d as c,u as r,c as x,a as t,b as u,w as h,e as s,f as l,t as a,n as _,g as b,o as f,R as p,p as g,h as m,_ as w}from"./index-d6e1f09b.js";const v=(n="")=>({fetchedUser:d.value.find(e=>e.login.username===n)}),o=n=>(g("data-v-1310d1dc"),n=n(),m(),n),y={class:"card w-[80%] m-h-[500px] p-5 mx-auto rounded-xl border-xl bg-white shadow-lg flex flex-col gap-[70px] dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500"},k={class:"relative w-full h-[200px] bg-orange-400 rounded-xl"},j=o(()=>t("div",{class:"absolute w-full h-full bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl"},null,-1)),U={class:"absolute cursor-pointer flex items-center justify-center w-7 h-7 rounded-full top-2 left-2 bg-white hover:scale-105 transition duration-500"},S=o(()=>t("i",{class:"bx bx-chevron-left text-2xl text-cyan-700 dark:text-slate-600"},null,-1)),V=["src"],C=b('<div class="flex absolute bottom-3 right-3" data-v-1310d1dc><a href="https://www.facebook.com/" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500" data-v-1310d1dc><i class="bx bxl-facebook text-white" data-v-1310d1dc></i></a><a href="https://www.twitter.com/" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500 ml-2" data-v-1310d1dc><i class="bx bxl-twitter text-white" data-v-1310d1dc></i></a><a href="https://www.instagram.com/" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500 ml-2" data-v-1310d1dc><i class="bx bxl-instagram text-white" data-v-1310d1dc></i></a></div>',1),I={class:"w-full m-h-[200px] flex flex-col gap-9"},N={class:"w-full flex justify-between"},B={class:"w-full flex flex-col"},D={class:"flex place-items-center gap-1 text-2xl font-bold text-black dark:text-white transition-colors duration-500 leading-3"},R=o(()=>t("i",{class:"bx bxs-badge-check text-teal-400 text-[1.8rem]"},null,-1)),z={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},E=o(()=>t("div",{class:"w-full flex flex-col justify-start place-items-end"},[t("button",{class:"flex items-center gap-1 text-sm font-semibold bg-cyan-500 text-white rounded-md px-3 py-2 hover:shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-500 shadow-md dark:bg-cyan-500 dark:hover:bg-cyan-500 transition-shadow duration-500"},[t("i",{class:"bx bx-paper-plane"}),l(" Send Message ")])],-1)),F={class:"flex w-full justify-center"},L={class:"w-full flex flex-col gap-3"},M={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},T={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},$=o(()=>t("i",{class:"bx bxs-envelope"},null,-1)),q={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},A=o(()=>t("i",{class:"bx bxs-phone"},null,-1)),G={class:"w-full flex flex-col gap-3"},H={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},J=o(()=>t("i",{class:"bx bxs-buildings"},null,-1)),K={class:"text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"},O=o(()=>t("i",{class:"bx bxs-map-pin"},null,-1)),P=c({__name:"user-detail-view",setup(n){const i=r(),{fetchedUser:e}=v(`${i.params.id}`);return console.log(e),(Q,W)=>(f(),x("div",y,[t("div",k,[j,t("div",U,[u(s(p),{to:"/"},{default:h(()=>[S]),_:1})]),t("img",{class:"absolute w-40 h-40 rounded-full -bottom-1/3 left-3 border-4 border-white dark:border-slate-800 transition-colors duration-500",src:s(e).picture.large,alt:"fetchedUser-profile"},null,8,V),C]),t("div",I,[t("div",N,[t("div",B,[t("h1",D,[l(a(s(e).name.first)+" "+a(s(e).name.last)+" ",1),R]),t("h4",z," @"+a(s(e).login.username),1)]),E]),t("div",F,[t("div",L,[t("h4",M,[t("i",{class:_(["bx",[s(e).gender=="male"?"bx-male":"bx-female"]])},null,2),l(" "+a(s(e).gender[0].toUpperCase()+s(e).gender.slice(1))+" • "+a(s(e).dob.age)+" years old ",1)]),t("h4",T,[$,l(" "+a(s(e).email),1)]),t("h4",q,[A,l(" "+a(s(e).phone),1)])]),t("div",G,[t("h4",H,[J,l(" "+a(s(e).location.city)+", "+a(s(e).location.country),1)]),t("h4",K,[O,l(" "+a(s(e).location.street.name)+" "+a(s(e).location.street.number),1)])])])])]))}});const Y=w(P,[["__scopeId","data-v-1310d1dc"]]);export{Y as default};
