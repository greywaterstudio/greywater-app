var fn=Array.isArray,un=Array.prototype.indexOf,zn=Array.from,Wn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,Pt=Object.getPrototypeOf,bt=Object.isExtensible;const Xn=()=>{};function Jn(t){return t()}function Ct(t){for(var n=0;n<t.length;n++)t[n]()}const D=2,Ft=4,it=8,mt=16,I=32,H=64,et=128,A=256,rt=512,m=1024,P=2048,B=4096,Y=8192,ot=16384,vn=32768,Mt=65536,Qn=1<<17,hn=1<<19,Lt=1<<20,dt=1<<21,K=Symbol("$state"),te=Symbol("legacy props"),ne=Symbol("");function qt(t){return t===this.v}function pn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Yt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ee(){throw new Error("https://svelte.dev/e/hydration_failed")}function re(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function le(){_t=!0}const ae=1,se=2,fe=4,ue=8,ie=16,oe=1,_e=2,ce=4,ve=8,he=16,pe=1,de=2,An="[",xn="[!",Rn="]",jt={},y=Symbol(),we="http://www.w3.org/1999/xhtml";function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function It(t){d=t}function Ee(t,n=!1,e){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!n&&(d.l={s:null,u:null,r1:[],r2:Tt(!1)}),kn(()=>{r.d=!0})}function ye(t){const n=d;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),j(l.reaction),Zt(l.fn)}}finally{st(e),j(r)}}d=n.p,n.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function q(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=Pt(t);if(e!==_n&&e!==cn)return t;var r=new Map,a=fn(t),l=S(0),_=v,c=u=>{var s=v;j(_);var f;return f=u(),j(s),f};return a&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var i=r.get(s);return i===void 0?(i=c(()=>S(f.value)),r.set(s,i)):N(i,c(()=>q(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>S(y)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&N(i,o)}N(f,y),Ot(l)}return!0},get(u,s,f){var O;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(O=G(u,s))!=null&&O.writable)&&(i=c(()=>S(q(o?u[s]:y))),r.set(s,i)),i!==void 0){var p=V(i);return p===y?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=V(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==y)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>S(i?q(u[s]):y)),r.set(s,f));var o=V(f);if(o===y)return!1}return i},set(u,s,f,i){var Dt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var O=f;O<o.v;O+=1){var Q=r.get(O+"");Q!==void 0?N(Q,y):O in u&&(Q=c(()=>S(y)),r.set(O+"",Q))}o===void 0?(!p||(Dt=G(u,s))!=null&&Dt.writable)&&(o=c(()=>S(void 0)),N(o,c(()=>q(f))),r.set(s,o)):(p=o.v!==y,N(o,c(()=>q(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var Rt=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=Rt.v&&N(Rt,pt+1)}Ot(l)}return!0},ownKeys(u){V(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==y});for(var[f,i]of r)i.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function Ot(t,n=1){N(t,t.v+n)}const Z=new Map;function Tt(t,n){var e={f:0,v:t,reactions:null,equals:qt,rv:0,wv:0};return e}function S(t,n){const e=Tt(t);return nn(e),e}function ge(t,n=!1){var r;const e=Tt(t);return n||(e.equals=Yt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(e),e}function N(t,n,e=!1){v!==null&&!R&&ct()&&(v.f&(D|mt))!==0&&!(E!=null&&E.includes(t))&&Tn();let r=e?q(n):n;return Dn(t,r)}function Dn(t,n){if(!t.equals(n)){var e=t.v;X?Z.set(t,n):Z.set(t,e),t.v=n,t.wv=rn(),Bt(t,P),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(I|H))===0&&(T===null?jn([t]):T.push(t))}return n}function Bt(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),a=e.length,l=0;l<a;l++){var _=e[l],c=_.f;(c&P)===0&&(!r&&_===h||(b(_,n),(c&(m|A))!==0&&((c&D)!==0?Bt(_,B):ht(_))))}}let F=!1;function me(t){F=t}let x;function z(t){if(t===null)throw Ht(),jt;return x=t}function Te(){return z(L(x))}function Ae(t){if(F){if(L(x)!==null)throw Ht(),jt;x=t}}function xe(t=1){if(F){for(var n=t,e=x;n--;)e=L(e);x=e}}function Re(){for(var t=0,n=x;;){if(n.nodeType===8){var e=n.data;if(e===Rn){if(t===0)return n;t-=1}else(e===An||e===xn)&&(t+=1)}var r=L(n);n.remove(),n=r}}var St,bn,In,Ut,Vt;function De(){if(St===void 0){St=window,bn=document,In=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Ut=G(n,"firstChild").get,Vt=G(n,"nextSibling").get,bt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),bt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function Et(t){return Ut.call(t)}function L(t){return Vt.call(t)}function be(t,n){if(!F)return Et(t);var e=Et(x);if(e===null)e=x.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),z(r),r}return z(e),e}function Ie(t,n){if(!F){var e=Et(t);return e instanceof Comment&&e.data===""?L(e):e}return x}function Oe(t,n=1,e=!1){let r=F?x:t;for(var a;n--;)a=r,r=L(r);if(!F)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),z(_),_}return z(r),r}function Se(t){t.textContent=""}function At(t){var n=D|P,e=v!==null&&(v.f&D)!==0?v:null;return h===null||e!==null&&(e.f&A)!==0?n|=A:h.f|=Lt,{ctx:d,deps:null,effects:null,equals:qt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function Ne(t){const n=At(t);return nn(n),n}function ke(t){const n=At(t);return n.equals=Yt,n}function Gt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)M(n[e])}}function On(t){for(var n=t.parent;n!==null;){if((n.f&D)===0)return n;n=n.parent}return null}function Sn(t){var n,e=h;st(On(t));try{Gt(t),n=an(t)}finally{st(e)}return n}function Kt(t){var n=Sn(t),e=(k||(t.f&A)!==0)&&t.deps!==null?B:m;b(t,e),t.equals(n)||(t.v=n,t.wv=rn())}function $t(t){h===null&&v===null&&En(),v!==null&&(v.f&A)!==0&&h===null&&wn(),X&&dn()}function Nn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function U(t,n,e,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(e)try{xt(l),l.f|=vn}catch(u){throw M(l),u}else n!==null&&ht(l);var _=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Lt|et))===0;if(!_&&r&&(a!==null&&Nn(l,a),v!==null&&(v.f&D)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function kn(t){const n=U(it,null,!1);return b(n,m),n.teardown=t,n}function Pe(t){$t();var n=h!==null&&(h.f&I)!==0&&d!==null&&!d.m;if(n){var e=d;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function Ce(t){return $t(),Pn(t)}function Fe(t){const n=U(H,t,!0);return(e={})=>new Promise(r=>{e.outro?Mn(n,()=>{M(n),r(void 0)}):(M(n),r(void 0))})}function Zt(t){return U(Ft,t,!1)}function Pn(t){return U(it,t,!0)}function Me(t,n=[],e=At){const r=n.map(e);return Cn(()=>t(...r.map(V)))}function Cn(t,n=0){return U(it|mt|n,t,!0)}function Le(t,n=!0){return U(it|I,t,!0,n)}function zt(t){var n=t.teardown;if(n!==null){const e=X,r=v;kt(!0),j(null);try{n.call(null)}finally{kt(e),j(r)}}}function Wt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&H)!==0?e.parent=null:M(e,n),e=r}}function Fn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&I)===0&&M(n),n=e}}function M(t,n=!0){var e=!1;if((n||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:L(r);r.remove(),r=l}e=!0}Wt(t,n&&!e),ut(t,0),b(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();zt(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Mn(t,n){var e=[];Jt(t,e,!0),Ln(e,()=>{M(t),n&&n()})}function Ln(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var a of t)a.out(r)}else n()}function Jt(t,n,e){if((t.f&Y)===0){if(t.f^=Y,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&I)!==0;Jt(r,n,l?e:!1),r=a}}}function qe(t){Qt(t,!0)}function Qt(t,n){if((t.f&Y)!==0){t.f^=Y,(t.f&m)===0&&(t.f^=m),J(t)&&(b(t,P),ht(t));for(var e=t.first;e!==null;){var r=e.next,a=(e.f&Mt)!==0||(e.f&I)!==0;Qt(e,a?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let W=[],yt=[];function tn(){var t=W;W=[],Ct(t)}function qn(){var t=yt;yt=[],Ct(t)}function Ye(t){W.length===0&&queueMicrotask(tn),W.push(t)}function Nt(){W.length>0&&tn(),yt.length>0&&qn()}let nt=!1,lt=!1,at=null,C=!1,X=!1;function kt(t){X=t}let $=[];let v=null,R=!1;function j(t){v=t}let h=null;function st(t){h=t}let E=null;function Yn(t){E=t}function nn(t){v!==null&&v.f&dt&&(E===null?Yn([t]):E.push(t))}let w=null,g=0,T=null;function jn(t){T=t}let en=1,ft=0,k=!1;function rn(){return++en}function J(t){var i;var n=t.f;if((n&P)!==0)return!0;if((n&B)!==0){var e=t.deps,r=(n&A)!==0;if(e!==null){var a,l,_=(n&rt)!==0,c=r&&h!==null&&!k,u=e.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=e[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&A)===0&&(s.f^=A)}for(a=0;a<u;a++)if(l=e[a],J(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!k)&&b(t,m)}return!1}function Hn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Bn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,n,e,r){if(nt){if(e===null&&(nt=!1),Bn(n))throw t;return}e!==null&&(nt=!0);{Hn(t,n);return}}function ln(t,n,e=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];E!=null&&E.includes(t)||((l.f&D)!==0?ln(l,n,!1):n===l&&(e?b(l,P):(l.f&m)!==0&&b(l,B),ht(l)))}}function an(t){var p;var n=w,e=g,r=T,a=v,l=k,_=E,c=d,u=R,s=t.f;w=null,g=0,T=null,k=(s&A)!==0&&(R||!C||v===null),v=(s&(I|H))===0?t:null,E=null,It(t.ctx),R=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!k)for(o=g;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&g<i.length&&(ut(t,g),i.length=g);if(ct()&&T!==null&&!R&&i!==null&&(t.f&(D|B|P))===0)for(o=0;o<T.length;o++)ln(T[o],t);return a!==null&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),f}finally{w=n,g=e,T=r,v=a,k=l,E=_,It(c),R=u,t.f^=dt}}function Un(t,n){let e=n.reactions;if(e!==null){var r=un.call(e,t);if(r!==-1){var a=e.length-1;a===0?e=n.reactions=null:(e[r]=e[a],e.pop())}}e===null&&(n.f&D)!==0&&(w===null||!w.includes(n))&&(b(n,B),(n.f&(A|rt))===0&&(n.f^=rt),Gt(n),ut(n,0))}function ut(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Un(t,e[r])}function xt(t){var n=t.f;if((n&ot)===0){b(t,m);var e=h,r=d,a=C;h=t,C=!0;try{(n&mt)!==0?Fn(t):Wt(t),zt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,e,r||t.ctx)}finally{C=a,h=e}}}function Vn(){try{yn()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=C;try{var n=0;for(C=!0;$.length>0;){n++>1e3&&Vn();var e=$,r=e.length;$=[];for(var a=0;a<r;a++){var l=Kn(e[a]);Gn(l)}}}finally{lt=!1,C=t,at=null,Z.clear()}}function Gn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|Y))===0)try{J(r)&&(xt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var n=at=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(H|I))!==0){if((e&m)===0)return;n.f^=m}}$.push(n)}function Kn(t){for(var n=[],e=t;e!==null;){var r=e.f,a=(r&(I|H))!==0,l=a&&(r&m)!==0;if(!l&&(r&Y)===0){if((r&Ft)!==0)n.push(e);else if(a)e.f^=m;else{var _=v;try{v=e,J(e)&&xt(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var u=e.parent;for(e=e.next;e===null&&u!==null;)e=u.next,u=u.parent}return n}function $n(t){var n;for(Nt();$.length>0;)lt=!0,sn(),Nt();return n}async function je(){await Promise.resolve(),$n()}function V(t){var n=t.f,e=(n&D)!==0;if(v!==null&&!R){if(!(E!=null&&E.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!k||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&A)===0&&(a.f^=A)}return e&&(a=t,J(a)&&Kt(a)),X&&Z.has(t)?Z.get(t):t.v}function He(t){var n=R;try{return R=!0,t()}finally{R=n}}const Zn=-7169;function b(t,n){t.f=t.f&Zn|n}function Be(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=Pt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=on(e);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{Fe as $,ye as A,be as B,Ae as C,Oe as D,Wn as E,j as F,st as G,fn as H,v as I,h as J,De as K,Qn as L,Et as M,An as N,L as O,_e as P,jt as Q,me as R,K as S,z as T,Te as U,x as V,Rn as W,Ht as X,ee as Y,Se as Z,zn as _,Pe as a,wt as a0,Le as a1,F as a2,Cn as a3,qe as a4,Mn as a5,fe as a6,Y as a7,Ye as a8,ue as a9,S as aA,je as aB,Ne as aC,pn as aD,Tt as aa,ae as ab,se as ac,Dn as ad,Jt as ae,Ln as af,ie as ag,M as ah,xn as ai,Re as aj,we as ak,Pt as al,ne as am,on as an,hn as ao,In as ap,pe as aq,de as ar,Mt as as,Xn as at,bn as au,xe as av,y as aw,Zt as ax,Pn as ay,$n as az,He as b,d as c,Jn as d,Be as e,At as f,V as g,le as h,G as i,ke as j,te as k,_t as l,ve as m,ce as n,q as o,re as p,N as q,Ct as r,Yt as s,ge as t,Ce as u,he as v,oe as w,Ee as x,Ie as y,Me as z};
