import{t as k,a as _}from"../chunks/vwXlEkgE.js";import"../chunks/COuUwsCy.js";import{a2 as D,B as p,D as b,C as o,z as j,q as A,g as m,t as q,y as P}from"../chunks/uUMk-dtt.js";import{s as C,T as S,e as T,i as B}from"../chunks/CkA58hBE.js";import{s as y}from"../chunks/DTGSFdJ8.js";import{p as w}from"../chunks/Buei5ALd.js";function N(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(t=0;t<d;t++)e[t]&&(a=N(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function M(){for(var e,t,a=0,r="",d=arguments.length;a<d;a++)(e=arguments[a])&&(t=N(e))&&(r&&(r+=" "),r+=t);return r}function E(e){return typeof e=="object"?M(e):e??""}function F(e,t,a){var r=e==null?"":""+e;return r===""?null:r}function G(e,t,a,r,d,u){var h=e.__className;if(D||h!==a){var s=F(a);(!D||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):e.className=s),e.__className=a}return u}var H=k('<div class="w-1xl max-w mx-auto flex flex-row rounded-4xl border border-2 border-solid border-zinc-600/50 bg-zinc-950/10 px-4 py-4 shadow-xl backdrop-blur-lg backdrop-brightness-100 sm:w-full sm:flex-row"><img class="w-1/4 place-self-center rounded-4xl border border-2 border-solid border-zinc-600/50"> <div class="mt-4 ml-4 w-full"><div class="flex flex-row"><h3 class="mr-4 text-left text-3xl font-bold tracking-wide text-white"> </h3> <div class="content-center rounded-full border border-2 border-solid border-zinc-600/50 bg-zinc-500/50 px-2"><p class="text-1xl font-medium text-white"> </p></div></div> <p class="mt-2 block text-left text-2xl text-slate-400"> </p></div></div>');function R(e,t){let a=w(t,"name",8),r=w(t,"avatar",8),d=w(t,"position",8),u=w(t,"description",8);var h=H(),s=p(h),f=b(s,2),i=p(f),l=p(i),v=p(l,!0);o(l);var c=b(l,2),n=p(c),x=p(n,!0);o(n),o(c),o(i);var g=b(i,2),z=p(g,!0);o(g),o(f),o(h),j(()=>{C(s,"src",r()),C(s,"alt",a()),y(v,a()),y(x,d()),y(z,u())}),_(e,h)}var I=k('<div><img class="mb-6 w-1/2 place-self-center rounded-full border border-2 border-solid border-zinc-600/50"> <h3 class="text-center text-3xl text-white"> </h3> <p class="mt-2 hidden text-center text-2xl text-slate-400 sm:block"> </p> <p class="mt-2 text-center text-2xl text-slate-400 sm:block sm:hidden"> </p></div>');function W(e,t){let a=w(t,"name",8),r=w(t,"avatar",8),d=w(t,"position",8),u=w(t,"gradient",8),s=q("w-1xl mx-auto flex flex-col rounded-3xl border border-2 border-solid border-zinc-600/50 px-2 py-6 shadow-xl backdrop-blur-lg backdrop-brightness-100 sm:w-full sm:flex-col");u()?A(s,m(s)+" bg-linear-to-t "+u()):A(s,m(s)+" bg-zinc-950/10");var f=I(),i=p(f),l=b(i,2),v=p(l,!0);o(l);var c=b(l,2),n=p(c,!0);o(c);var x=b(c,2),g=p(x,!0);o(x),o(f),j(()=>{G(f,1,E(m(s))),C(i,"src",r()),C(i,"alt",a()),y(v,a()),y(n,d()),y(g,d())}),_(e,f)}var J=k('<div class="mx-auto mt-8 mb-8 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4"></div>'),K=k('<h2 class="text-center text-3xl font-bold text-white sm:text-left sm:text-4xl">Writers</h2> <hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2"> <div class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"></div> <h2 class="text-center text-3xl font-bold text-white sm:text-left sm:text-4xl">Developers</h2> <hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2"> <div class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"></div>',1),L=k('<!> <hr class="mx-auto w-1/2 bg-black"> <!>',1);function O(e){const t=[{name:"Greywater",avatar:"assets/img/people-greywater.png",description:"Facilitates the acquisition of resources necessary for the production and development of systems.",position:"Head Executive"},{name:"Weatherman",avatar:"assets/img/people-weatherman.png",description:"Project founder, lead writer and community manager.",position:"Community Coordination"}],a=[{name:"mage.tearz",position:"Systems Developer",avatar:"assets/img/people-mage.png"},{name:"Samael",position:"Back-end Developer",avatar:"assets/img/people-samael.png"},{name:"aindrigo",position:"Weapons Developer",avatar:"assets/img/people-adam.png"}],r=[{name:"Weatherman",avatar:"assets/img/people-weatherman.png"},{name:"The Singularity",avatar:"assets/img/people-singularity.png"},{name:"Ross",avatar:"assets/img/people-ross.png"}];var d=L(),u=P(d);S(u,{id:"team",title:"Managed By",children:(s,f)=>{var i=J();T(i,5,()=>t,B,(l,v)=>{let c=()=>m(v).name,n=()=>m(v).position,x=()=>m(v).avatar,g=()=>m(v).description;R(l,{get name(){return c()},get position(){return n()},get avatar(){return x()},get description(){return g()}})}),o(i),_(s,i)},$$slots:{default:!0}});var h=b(u,4);S(h,{id:"team",title:"The Team",children:(s,f)=>{var i=K(),l=b(P(i),4);T(l,5,()=>r,B,(c,n)=>{let x=()=>m(n).name,g=()=>m(n).position,z=()=>m(n).avatar;W(c,{get name(){return x()},get position(){return g()},get avatar(){return z()}})}),o(l);var v=b(l,6);T(v,5,()=>a,B,(c,n)=>{let x=()=>m(n).name,g=()=>m(n).position,z=()=>m(n).avatar;W(c,{get name(){return x()},get position(){return g()},get avatar(){return z()}})}),o(v),_(s,i)},$$slots:{default:!0}}),_(e,d)}var Q=k('<main class="mx-auto max-w-5xl"><!></main>');function ee(e){var t=Q(),a=p(t);O(a),o(t),_(e,t)}export{ee as component};
