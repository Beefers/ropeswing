"use strict";(()=>{var Os=Object.defineProperty;var pr=(t,e)=>{for(var r in e)Os(t,r,{get:e[r],enumerable:!0})};var ur=["a","b","i"],Q=new Map;function mr(t,e,r,s,o){let n=Q.get(e)?.[t];if(!n)return o?Reflect.construct(e[t],r,s):e[t].apply(s,r);for(let f of n.b.values()){let i=f.call(s,r);Array.isArray(i)&&(r=i)}let c=[...n.i.values()].reduce((f,i)=>(...l)=>i.call(s,l,f),(...f)=>o?Reflect.construct(n.o,f,s):n.o.apply(s,f))(...r);for(let f of n.a.values())c=f.call(s,r,c)??c;return c}function dr(t,e,r,s){let o=Q.get(t),n=o?.[e];return n?.[s].has(r)?(n[s].delete(r),ur.every(c=>n[c].size===0)&&(Reflect.defineProperty(t,e,{value:n.o,writable:!0,configurable:!0})||(t[e]=n.o),delete o[e]),Object.keys(o).length==0&&Q.delete(t),!0):!1}var Jt=t=>(e,r,s,o=!1)=>{if(typeof r[e]!="function")throw new Error(`${e} is not a function in ${r.constructor.name}`);Q.has(r)||Q.set(r,{});let n=Q.get(r);if(!n[e]){let i=r[e];n[e]={o:i,b:new Map,i:new Map,a:new Map};let l=(p,d,u)=>{let h=mr(e,r,d,p,u);return o&&f(),h},m=new Proxy(i,{apply:(p,d,u)=>l(d,u,!1),construct:(p,d)=>l(i,d,!0),get:(p,d,u)=>d=="toString"?i.toString.bind(i):Reflect.get(p,d,u)});Reflect.defineProperty(r,e,{value:m,configurable:!0,writable:!0})||(r[e]=m)}let c=Symbol(),f=()=>dr(r,e,c,t);return n[e][t].set(c,s),f};var hr=Jt("b"),Ar=Jt("i"),Qo=Jt("a");var ge={};pr(ge,{clear:()=>_s,typewrite:()=>Rs,write:()=>Ee,writeLine:()=>ut});var he={};pr(he,{timer:()=>de});var de=t=>new Promise(e=>setTimeout(e,t));var Ae=document.getElementById("convga");if(!Ae)throw new Error("Failed to find VGA console element - are we on the right site?");var _s=()=>Ae.innerHTML="",Ee=(...t)=>Ae.textContent+=t.join(" "),ut=(...t)=>Ee(t.join(" ")+`
`),Rs=async(t,...e)=>{for(let r of e.join(" ").split(""))Ee(r),await de(t)};var x=t=>t;var Er=x({patches:[{executable:"C:/system/local/bin/shell36",find:/document\.addEventListener\("keydown",/,replace:()=>"("}],manifest:{name:"forcereboot",description:"removes the reboot confirmation when pressing Ctrl+R or F5",authors:["redstonekasi"]}});var gr=x({patches:[{find:/Windows 96 main<br>/,replace:t=>`${t}ropeswing 00703e1<br>`},{find:/Other trademarks and logos are property of their respective owners\./,replace:t=>`${t}

ropeswing 00703e1, an <a href="https://github.com/uwu/ropeswing">uwunet project</a>.`,executable:"C:/system/local/bin/about-ui"}],onLoad(){localStorage["ropeswing-welcome"]!=="true"&&(localStorage["ropeswing-welcome"]="true",w96.WApplication.execAsync(this.dialog(w96.WApplication),[]))},manifest:{name:"housekeeper",description:"basic ropeswing info, e.g. welcome dialog, version listing",authors:["redstonekasi","Beef"]},core:!0,dialog:t=>new class extends t{async main(r){super.main(r);let s=this.createWindow({title:"ropeswing",initialHeight:120,initialWidth:260,resizable:!1,bodyClass:"dlg-run-box",controlBoxStyle:"WS_CBX_CLOSE"}),o=s.getBodyContainer();o.innerHTML='<div class="text exp">ropeswing has been installed!<br>Check your system settings in order to configure it.</div><button class="w96-button">OK</button>',o.querySelector("button")?.addEventListener("click",()=>s.close(!1)),s.setPosition(window.innerWidth/2-130,window.innerHeight/2-60),s.show()}}});var Sr=x({patches:[{find:/\(await\(0,.{1,2}\..{1,2}\)\(i\.value\)\)\.valid/,replace:"true"},{find:"the product key you have received on Patreon",replace:t=>`<s>${t}</s> any product key`}],manifest:{name:"keygen",description:"makes the keymgr app (patreon rewards app) accept any key",authors:["Beef"]}});var Se="https://w96-msgroom.kasi.workers.dev",br=x({patches:[{executable:"C:/system/local/bin/win96-chat",find:/\((this\.CHAT_URL=.{1,2})\)/,replace:(t,e)=>`(${e}="${Se}")`},{executable:"C:/system/local/bin/win96-chat",find:/,(.{1,2})\.onload=\(\)=>\{/,replace:(t,e)=>`,${e}.onload=async()=>{await $self.onFrameLoad(${e}),`}],manifest:{name:"msgbranch",description:"ropeswing in msgroom",authors:["redstonekasi"]},async onFrameLoad(t){let e=s=>t.contentWindow.postMessage({op:"eval",script:s},Se),r=await fetch(`${Se}/main.js`).then(s=>s.text());for(let s of N)if(s.patches)for(let o of s.patches)o.executable==="$msgroom"&&(r=r.replace(o.find,Yt(o.replace,s.manifest.name)));e(r),e("app.call(window);")},core:!0});var xr=x({patches:[{executable:"C:/system/local/bin/resetwiz",find:/localStorage\.clear\(\)/g,replace:t=>`$self.save(),${t},$self.restore()`},{executable:"C:/system/local/bin/resetwiz",find:/;(.{1,2}?)\.querySelector\("\.w96-radiobox"\)\.replaceWith\(.{1,2}?\.getElement\(\)\)/,replace:(t,e)=>`;${t};$self.appendToggle(${e})`}],manifest:{name:"persist",description:"optionally persist ropeswing installation across wizard resets",authors:["redstonekasi"]},persist:!0,kinject:"",save(){this.persist&&(this.kinject=kutil.sysrom.read("KINJECT.js"))},restore(){this.persist&&kutil.sysrom.write("KINJECT.js",this.kinject)},appendToggle(t){let e=t.querySelector(".w96-radiobox")?.parentElement;if(!e)return;let r=new w96.ui.components.CheckBox({label:"Persist ropeswing installation",checked:this.persist,onchange:s=>this.persist=s.checked});e.appendChild(r.getElement())},core:!0});var Ot=Symbol("Cached"),W=Symbol("Observable"),et=Symbol("Observable.Frozen"),rt=Symbol("Observable.Readable"),be=Symbol("Observable.Writable"),st=Symbol("Store"),kt=Symbol("Store.Keys"),ot=Symbol("Store.Observable"),It=Symbol("Store.Target"),_t=Symbol("Store.Values"),Qt=Symbol("Store.Untracked"),Y=Symbol("Suspense"),I=Symbol("Uncached"),nt=Symbol("Untracked"),K=Symbol("Untracked.Unwrapped");var wr=t=>it(t)?t:[t],yr=t=>t instanceof Error?t:typeof t=="string"?new Error(t):new Error("Unknown error"),{is:mt}=Object,{isArray:it}=Array,Or=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0,s=t.length;r<s;r++){let o=t[r],n=e[r];if(!mt(o,n))return!1}return!0},g=t=>typeof t=="function",Dt=t=>t!==null&&typeof t=="object",_r=t=>typeof t=="symbol",Gt=()=>{},Zt=()=>!1;function Bs(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Ls(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this.get()}function Cs(t){return arguments.length?g(t)?this.C(t):this.set(t):this.get()}var D=t=>{let e=Bs.bind(t);return e[W]=!0,e[et]=!0,e},ct=t=>{let e=Ls.bind(t);return e[W]=!0,e[rt]=t,e},Rr=t=>{let e=Cs.bind(t);return e[W]=!0,e[be]=t,e};var xe=0,Rt=1,dt=2,ht=3,Sn=D(!1),bn=D(!0),Xt=new Proxy({},new Proxy({},{get(){throw new Error("Unavailable value")}})),jt=function(){};var te=(t,e)=>{if(t instanceof Array)for(let r=0,s=t.length;r<s;r++)e(t[r]);else t&&e(t)},Ut=(t,e)=>{if(t instanceof Array)for(let r=t.length-1;r>=0;r--)e(t[r]);else t&&e(t)},v=(t,e,r)=>{let s=t[e];s instanceof Array?s.push(r):s?t[e]=[s,r]:t[e]=r},R=(t,e,r)=>{let s=t[e];if(s instanceof Set)s.add(r);else if(s){if(r!==s){let o=new Set;o.add(s),o.add(r),t[e]=o}}else t[e]=r},B=(t,e,r)=>{let s=t[e];s instanceof Set?s.delete(r):s===r&&(t[e]=void 0)},At=(t,e)=>{if(t instanceof Set)for(let r of t)e(r);else t&&e(t)};var Ts=t=>t.call(t),we=t=>t.Q(!0),ye=class{constructor(){this.disposed=!1,this.B=void 0,this.S=void 0,this.D=void 0,this.K=void 0,this.T=void 0,this.U=void 0}catch(e,r){let{S:s}=this;if(s)return s(e),!0;if(this.parent?.catch(e,!0))return!0;if(r)return!1;throw e}Q(e){Ut(this.D,we),Ut(this.K,we),Ut(this.U,we),Ut(this.B,Ts),this.B=void 0,this.disposed=e,this.S=void 0,this.K=void 0,this.U=void 0}get(e){return this.context?.[e]}E(e,r,s){let o=E,n=U;Oe(r),Bt(s);try{return e()}catch(c){return this.catch(yr(c),!1),Xt}finally{Oe(o),Bt(n)}}},H=ye;var _e=class extends H{constructor(){super(...arguments),this.context={}}},Br=_e;var ft,Re=new Br,U,E=Re;var Bt=t=>U=t,Oe=t=>E=t;var Ms=t=>g(t)&&(et in t||!!t[rt]?.parent?.disposed),ee=Ms;var Ns=t=>g(t)&&(nt in t||K in t),re=Ns;var Be=class{constructor(){this.A1=[],this.M=0,this.A2=!1,this.N=()=>{if(!this.A2&&!this.M&&this.A1.length)try{for(this.A2=!0;;){let e=this.A1;if(!e.length)break;this.A1=[];for(let r=0,s=e.length;r<s;r++)e[r].C()}}finally{this.A2=!1}},this.E=e=>{this.M+=1,e(),this.M-=1,this.N()},this.F=e=>{this.A1.push(e)}}},Et=new Be;var Le=class{constructor(e,r,s){this.K=new Set,this.value=e,s&&(this.parent=s),r?.equals!==void 0&&(this.equals=r.equals||Zt)}get(){return this.parent?.disposed||(this.parent?.C(),U?.A.L(this)),this.value}set(e){let r=this.equals||mt;return(this.value===jt||!r(e,this.value))&&(this.value=e,Et.M+=1,this.I(ht),Et.M-=1,Et.N()),e}I(e){for(let r of this.K)(r.J!==Rt||r.A.has(this))&&(r.sync?(r.J=Math.max(r.J,e),Et.F(r)):r.I(e))}C(e){let r=e(this.value);return this.set(r)}},L=Le;var se=class{constructor(e){this.observer=e,this.A=[],this.P=0}Q(e){if(e){let{observer:r,A:s}=this;for(let o=0;o<s.length;o++)s[o].K.delete(r)}this.P=0}R(){let{observer:e,A:r,P:s}=this,o=r.length;if(s<o){for(let n=s;n<o;n++)r[n].K.delete(e);r.length=s}}empty(){return!this.A.length}has(e){let r=this.A.indexOf(e);return r>=0&&r<this.P}L(e){let{observer:r,A:s,P:o}=this,n=s.length;if(n>0){if(s[o]===e){this.P+=1;return}let c=s.indexOf(e);if(c>=0&&c<o)return;o<n-1?this.R():o===n-1&&s[o].K.delete(r)}e.K.add(r),s[this.P++]=e,o===128&&(r.A=new Ce(r,s))}C(){let{A:e}=this;for(let r=0,s=e.length;r<s;r++)e[r].parent?.C()}},Ce=class{constructor(e,r){this.observer=e,this.A=new Set(r)}Q(e){for(let r of this.A)r.K.delete(this.observer)}R(){}empty(){return!this.A.size}has(e){return this.A.has(e)}L(e){let{observer:r,A:s}=this,o=s.size;e.K.add(r);let n=s.size;o!==n&&s.add(e)}C(){for(let e of this.A)e.parent?.C()}};var Te=class extends H{constructor(){super(),this.parent=E,this.context=E.context,this.J=ht,this.A=new se(this),E!==Re&&v(this.parent,"K",this)}Q(e){this.A.Q(e),super.Q(e)}H(e){this.Q(!1),this.J=Rt;try{return this.E(e,this,this)}finally{this.A.R()}}run(){throw new Error("Abstract method")}I(e){throw new Error("Abstract method")}C(){this.disposed||(this.J===dt&&this.A.C(),this.J===ht?(this.J=Rt,this.run(),this.J===Rt?this.J=xe:this.C()):this.J=xe)}},oe=Te;var Me=class extends oe{constructor(e,r){super(),this.fn=e,this.observable=new L(jt,r,this),r?.sync===!0&&(this.sync=!0,this.C())}run(){let e=super.H(this.fn);!this.disposed&&this.A.empty()&&(this.disposed=!0),e!==Xt&&this.observable.set(e)}I(e){let r=this.J;r>=e||(this.J=e,r!==dt&&this.observable.I(dt))}},Lr=Me;var Ys=(t,e)=>{if(ee(t))return t;if(re(t))return D(t());{let r=new Lr(t,e);return ct(r.observable)}},G=Ys;var Is=t=>g(t)?ee(t)||re(t)?!!t():G(()=>!!t()):!!t,Cr=Is;var Ds=t=>{v(E,"B",t)},F=Ds;var Ne=class extends H{constructor(e){super(),this.parent=E,this.context={...E.context,...e},v(this.parent,"D",this)}E(e){return super.E(e,this,void 0)}},Tr=Ne;function Us(t,e){return _r(t)?E.context[t]:new Tr(t).E(e||Gt)}var Ye=Us;var Ie=class{constructor(){this.A1=[],this.A2=!1,this.A3=!1,this.N=()=>{if(!this.A2&&this.A1.length)try{for(this.A2=!0;;){let e=this.A1;if(!e.length)break;this.A1=[];for(let r=0,s=e.length;r<s;r++)e[r].C()}}finally{this.A2=!1}},this.queue=()=>{this.A3||(this.A3=!0,this.resolve())},this.resolve=()=>{queueMicrotask(()=>{queueMicrotask(()=>{ft?ft.finally(this.resolve):(this.A3=!1,this.N())})})},this.F=e=>{this.A1.push(e),this.queue()}}},Ft=new Ie;var De=class extends oe{constructor(e,r){if(super(),this.fn=e,r?.suspense!==!1){let s=this.get(Y);s&&(this.suspense=s)}r?.sync===!0&&(this.sync=!0),r?.sync==="init"?(this.init=!0,this.C()):this.F()}run(){let e=super.H(this.fn);g(e)&&v(this,"B",e)}F(){this.suspense?.suspended||(this.sync?this.C():Ft.F(this))}I(e){let r=this.J;r>=e||(this.J=e,(!this.sync||r!==2&&r!==3)&&this.F())}C(){this.suspense?.suspended||super.C()}},ne=De;var Fs=(t,e)=>{let r=new ne(t,e);return()=>r.Q(!0)},gt=Fs;function Pt(t){if(g(t))return K in t?Pt(t()):nt in t?D(Pt(t())):W in t?t:G(()=>Pt(t()));if(t instanceof Array){let e=new Array(t.length);for(let r=0,s=e.length;r<s;r++)e[r]=Pt(t[r]);return e}else return t}var St=Pt;var Ue=class extends H{constructor(e){super(),this.parent=E,this.context=E.context,e&&this.get(Y)&&(this.A0=!0,R(this.parent,"T",this))}Q(e){this.A0&&B(this.parent,"T",this),super.Q(e)}E(e){let r=()=>this.Q(!0),s=()=>e(r);return super.E(s,this,void 0)}},Lt=Ue;var Ps=D(-1),Fe=class extends Lt{},Pe=class{constructor(e){this.parent=E,this.suspense=E.get(Y),this.A5=new Map,this.A6=!1,this.A7=0,this.A8=0,this.A9=0,this.cleanup=()=>{if(!this.A7||this.A7===this.A8)return;let{A5:r,A6:s}=this;r.size&&(this.A9?r.forEach((o,n)=>{o.A6!==s&&(o.Q(!0),r.delete(n))}):(this.A5.forEach(o=>{o.Q(!0)}),this.A5=new Map))},this.Q=()=>{this.suspense&&B(this.parent,"T",this.T),this.A7=this.A5.size,this.A8=0,this.A9=0,this.cleanup()},this.AA=()=>{this.A6=!this.A6,this.A8=0,this.A9=0},this.O=r=>{this.A9=r.length,this.cleanup(),this.A7=this.A9,this.A8=0},this.map=r=>{this.AA();let{A5:s,A6:o,fn:n,AB:c}=this,f=new Array(r.length),i=!0,l=!0,m=0;for(let a=0,p=r.length;a<p;a++){let d=r[a],u=s.get(d);if(u&&u.A6!==o)l=!1,m+=1,u.A6=o,u.index?.set(a),f[a]=u.G;else{i=!1;let h=new Fe(!1);u&&F(()=>h.Q(!0)),h.E(()=>{let A=Ps;c&&(h.index=new L(a),A=ct(h.index));let S=f[a]=St(n(d,A));h.A6=o,h.G=S,u||s.set(d,h)})}}return this.A8=m,this.O(r),i&&(f[Ot]=!0),l&&(f[I]=!0),f},this.T=()=>Array.from(this.A5.values()),this.fn=e,this.AB=e.length>1,this.suspense&&R(this.parent,"T",this.T)}},Mr=Pe;var $s=t=>g(t)&&W in t,$t=$s;function Vs(t,e=!0){return(e?g:$t)(t)?t():t}var Z=Vs;var $e=class extends H{constructor(){super(),this.parent=E,this.context={...E.context,[Y]:this},v(this.parent,"U",this),this.suspended=E.get(Y)?.suspended||0}A4(e){if(!this.suspended&&!e)return;let r=this.suspended,s=r+(e?1:-1);if(this.suspended=s,!!r==!!s)return;this.observable?.set(!!s);let o=i=>{te(i.D,o),te(i.K,n),te(i.U,f),At(i.T,c)},n=i=>{i instanceof ne&&(i.J===dt||i.J===ht)&&(i.init?i.C():i.F()),o(i)},c=i=>{g(i)?i().forEach(o):o(i)},f=i=>{i.A4(e)};o(this)}E(e){return super.E(e,this,void 0)}},Nr=$e;var Ws=(t,e)=>{let r=new Nr,s=Cr(t);return gt(()=>r.A4(Z(s)),{sync:!0}),r.E(e)},Yr=Ws;var Ks=D(-1),Ve=class extends Lt{},We=class{constructor(e,r){this.parent=E,this.suspense=E.get(Y),this.A5=new Map,this.AC=[],this.AD=0,this.cleanup=()=>{let s=0,o=Math.max(0,this.pooled?this.AD-this.AC.length:0);this.A5.forEach(n=>{o>0&&s++<o?(n.suspended?.set(!0),this.AC.push(n)):n.Q(!0)})},this.Q=()=>{this.suspense&&B(this.parent,"T",this.T),this.A5.forEach(s=>{s.Q(!0)}),this.AC.forEach(s=>{s.Q(!0)})},this.map=s=>{let{A5:o,fn:n,AB:c}=this,f=new Map,i=new Array(s.length),l=this.AC,m=this.pooled,a=!0,p=!0,d=[];if(o.size)for(let u=0,h=s.length;u<h;u++){let A=s[u],S=o.get(A);S?(p=!1,o.delete(A),f.set(A,S),S.index?.set(u),i[u]=S.G):d.push(u)}else d=new Array(i.length);t:for(let u=0,h=d.length;u<h;u++){let A=d[u]||u,S=s[A],j=f.has(S);if(!j)for(let[tt,k]of o.entries()){o.delete(tt),f.set(S,k),k.index?.set(A),k.value?.set(S),i[A]=k.G;continue t}a=!1;let b;m&&l.length?(b=l.pop(),b.index?.set(A),b.value?.set(S),b.suspended?.set(!1),i[A]=b.G):(b=new Ve(!1),b.E(()=>{let tt=Ks;c&&(b.index=new L(A),tt=ct(b.index));let k=b.value=new L(S),Nt=m?new L(!1):void 0,zt=G(()=>Z(k.get())),ys=i[A]=Nt?Yr(()=>Nt.get(),()=>St(n(zt,tt))):St(n(zt,tt));b.value=k,b.G=ys,b.suspended=Nt})),j?F(()=>b.Q(!0)):f.set(S,b)}return this.AD=Math.max(this.AD,i.length),this.cleanup(),this.A5=f,a&&(i[Ot]=!0),p&&(i[I]=!0),i},this.T=()=>[...this.A5.values(),...this.AC.values()],this.fn=e,this.AB=e.length>1,this.pooled=r,this.suspense&&R(this.parent,"T",this.T)}},Ir=We;var vs=t=>Dt(t)&&st in t,C=vs;function Hs(t){if(g(t)){let e=U;if(e)try{return Bt(void 0),t()}finally{Bt(e)}else return t()}else return t}var lt=Hs;function qs(t,e,r=[],s){let{Q:o,map:n}=s?.unkeyed?new Ir(e,!!s.pooled):new Mr(e);F(o);let c=G(()=>Z(t),{equals:(f,i)=>!!f&&!!i&&!f.length&&!i.length&&!C(f)&&!C(i)});return G(()=>{let f=c();return C(f)&&f[_t],lt(()=>{let i=n(f);return i?.length?i:St(r)})},{equals:(f,i)=>it(f)&&!!f[Ot]&&it(i)&&Or(f,i)})}var Ke=qs;var zs=()=>!!ft||Ft.A3||Ft.A2||Et.A2,Dr=zs;function Js(t,e){return Rr(new L(t,e))}var ve=Js;var ks=t=>new Lt(!0).E(t),He=ks;var z=class extends Map{AH(e,r){return super.set(e,r),r}},Ct=class{constructor(){this.AE=0}listen(){this.AE+=1,F(this)}call(){this.AE-=1,!this.AE&&this.Q()}Q(){}},qe=class extends Ct{constructor(e,r){super(),this.parent=e,this.observable=r}Q(){this.parent.keys=void 0}},ze=class extends Ct{constructor(e,r){super(),this.parent=e,this.observable=r}Q(){this.parent.values=void 0}},Je=class extends Ct{constructor(e,r,s){super(),this.parent=e,this.key=r,this.observable=s}Q(){this.parent.has?.delete(this.key)}},ke=class extends Ct{constructor(e,r,s,o){super(),this.parent=e,this.key=r,this.observable=s,this.AI=o}Q(){this.parent.AJ?.delete(this.key)}},_={AK:0,AL:new Set,AM:new Set,AN:()=>{let{AL:t,AM:e}=_,r=new Set,s=o=>{r.has(o)||(r.add(o),At(o.AO,s),At(o.AP,n=>{t.add(n)}))};return e.forEach(s),()=>{t.forEach(o=>{o()})}},V:t=>{_.AM.add(t),P.F()},reset:()=>{_.AL=new Set,_.AM=new Set}},w={AK:0,AM:new Map,AN:()=>{let{AM:t}=w;return()=>{t.forEach((e,r)=>{let s=Array.from(e);At(r.AQ,o=>{o(s)})})}},V:(t,e)=>{let r=w.AM.get(t)||new Set;r.add(e),w.AM.set(t,r),P.F()},AR:(t,e,r)=>{if(e.AO){let s=new Set,o=n=>{s.has(n)||(s.add(n),At(n.AO,c=>{c.AO||w.V(c,n.store),o(c)}))};o(t||e)}else{let s=t?.store||lt(()=>e.store[r]);w.V(e,s)}},reset:()=>{w.AM=new Map}},P={AK:!1,N:()=>{let t=_.AN(),e=w.AN();P.reset(),t(),e()},AS:()=>{Dr()?ft?ft.finally(P.AS):setTimeout(P.AS,0):P.N()},reset:()=>{P.AK=!1,_.reset(),w.reset()},F:()=>{P.AK||(P.AK=!0,queueMicrotask(P.AS))}},Tt=new WeakMap,Qs=new Set([st,kt,ot,It,_t]),Gs=new Set(["__proto__","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","prototype","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toSource","toString","valueOf"]),Zs={get:(t,e)=>{if(Qs.has(e)){if(e===st)return!0;if(e===It)return t;if(e===kt){if(Vt()){let i=q(t);i.keys||(i.keys=Ur(i)),i.keys.listen(),i.keys.observable.get()}return}if(e===_t){if(Vt()){let i=q(t);i.values||(i.values=js(i)),i.values.listen(),i.values.observable.get()}return}if(e===ot)return i=>{i=typeof i=="number"?String(i):i;let l=q(t),m=l.AT?.get(i);if(m)return m.bind(l.store);l.AJ||(l.AJ=new z);let a=t[i],p=l.AJ.get(i)||l.AJ.AH(i,Fr(l,i,a)),d=l.equals?{equals:l.equals}:void 0;return p.observable||(p.observable=Kt(l,a,d)),ct(p.observable)}}if(Gs.has(e))return t[e];let r=q(t),s=r.AT?.get(e),o=s||t[e];r.AJ||(r.AJ=new z);let n=Vt(),c=Wt(o),f=n||c?r.AJ.get(e)||r.AJ.AH(e,Fr(r,e,o)):void 0;if(f?.AI&&R(f.AI,"AO",r),f&&n){let i=r.equals?{equals:r.equals}:void 0;f.listen(),f.observable||(f.observable=Kt(r,o,i)),f.observable.get()}return s?s.call(r.store):typeof o=="function"&&o===Array.prototype[e]?function(){return o.apply(r.store,arguments)}:f?.AI?.store||o},set:(t,e,r)=>{r=bt(r);let s=q(t),o=s.AU?.get(e);if(o)o.call(s.store,r);else{let n=t[e],c=!!n||e in t,f=s.equals||mt;if(c&&f(r,n)&&(e!=="length"||!Array.isArray(t)))return!0;t[e]=r,s.values?.observable.set(0),c||(s.keys?.observable.set(0),s.has?.get(e)?.observable.set(!0));let i=s.AJ?.get(e);i?.AI&&B(i.AI,"AO",s),i&&(i.observable?.set(r),i.AI=Wt(r)?Tt.get(r)||ie(r,s):void 0),i?.AI&&R(i.AI,"AO",s),w.AK&&w.AR(i?.AI,s,e),_.AK&&_.V(s)}return!0},deleteProperty:(t,e)=>{if(!(e in t))return!0;if(!Reflect.deleteProperty(t,e))return!1;let o=q(t);o.keys?.observable.set(0),o.values?.observable.set(0),o.has?.get(e)?.observable.set(!1);let n=o.AJ?.get(e);return w.AK&&w.AR(n?.AI,o,e),n?.AI&&B(n.AI,"AO",o),n&&(n.observable?.set(void 0),n.AI=void 0),_.AK&&_.V(o),!0},defineProperty:(t,e,r)=>{let s=q(t),o=s.equals||mt,n=e in t,c=Reflect.getOwnPropertyDescriptor(t,e);if(c&&oo(c,r,o))return!0;if(!Reflect.defineProperty(t,e,r))return!1;r.get?r.get&&(s.AT||(s.AT=new z),s.AT.set(e,r.get)):s.AT?.delete(e),r.set?r.set&&(s.AU||(s.AU=new z),s.AU.set(e,r.set)):s.AU?.delete(e),n!==!!r.enumerable&&(s.keys?.observable.set(0),s.has?.get(e)?.observable.set(!!r.enumerable));let i=s.AJ?.get(e);if(w.AK&&w.AR(i?.AI,s,e),i?.AI&&B(i.AI,"AO",s),i)if("get"in r)i.observable?.set(r.get),i.AI=void 0;else{let l=r.value;i.observable?.set(l),i.AI=Wt(l)?Tt.get(l)||ie(l,s):void 0}return i?.AI&&R(i.AI,"AO",s),w.AK&&w.AR(i?.AI,s,e),_.AK&&_.V(s),!0},has:(t,e)=>{if(e===st||e===It)return!0;let r=e in t;if(Vt()){let s=q(t);s.has||(s.has=new z);let o=s.has.get(e)||s.has.AH(e,to(s,e,r));o.listen(),o.observable.get()}return r},ownKeys:t=>{let e=Reflect.ownKeys(t);if(Vt()){let r=q(t);r.keys||(r.keys=Ur(r)),r.keys.listen(),r.keys.observable.get()}return e}},Xs={has:(t,e)=>e===Qt?!0:e in t},ie=(t,e,r)=>{let s=new Proxy(t,Zs),o=eo(t),n={AO:e,store:s};if(o){let{AT:c,AU:f}=o;c&&(n.AT=c),f&&(n.AU=f)}return r===!1?n.equals=Zt:r?n.equals=r:e?.equals&&(n.equals=e.equals),Tt.set(t,n),n},q=t=>{let e=Tt.get(t);if(!e)throw new Error("Impossible");return e},Pr=t=>q(bt(t)),Ur=t=>{let e=Kt(t,0,{equals:!1});return new qe(t,e)},js=t=>{let e=Kt(t,0,{equals:!1});return new ze(t,e)},to=(t,e,r)=>{let s=Kt(t,r);return new Je(t,e,s)},Kt=(t,e,r)=>new L(e,r),Fr=(t,e,r)=>{let o=Wt(r)?Tt.get(r)||ie(r,t):void 0,n=new ke(t,e,void 0,o);return t.AJ||(t.AJ=new z),t.AJ.set(e,n),n},eo=t=>{if(it(t))return;let e,r,s=Object.keys(t);for(let o=0,n=s.length;o<n;o++){let c=s[o],f=Object.getOwnPropertyDescriptor(t,c);if(!f)continue;let{get:i,set:l}=f;i&&(e||(e=new z),e.set(c,i)),l&&(r||(r=new z),r.set(c,l))}if(!(!e&&!r))return{AT:e,AU:r}},ro=(t,e)=>C(t)?t:(Tt.get(t)||ie(t,void 0,e?.equals)).store,bt=t=>C(t)?t[It]:t,so=t=>!Dt(t)||$r(t)?t:new Proxy(t,Xs),oo=(t,e,r)=>!!t.configurable==!!e.configurable&&!!t.enumerable==!!e.enumerable&&!!t.writable==!!e.writable&&r(t.value,e.value)&&t.get===e.get&&t.set===e.set,Vt=()=>!!U,Wt=t=>{if(t===null||typeof t!="object")return!1;if(st in t)return!0;if(Qt in t)return!1;if(it(t))return!0;let e=Object.getPrototypeOf(t);return e===null?!0:Object.getPrototypeOf(e)===null},$r=t=>t===null||typeof t!="object"?!1:Qt in t,Mt=(t,e)=>!Dt(t)||$r(t)?t:ro(t,e);Mt.on=(t,e)=>{let r=wr(t),s=r.filter(g),o=r.filter(C).map(Pr);_.AK+=1;let n=s.map(c=>{let f=!1;return gt(()=>{f&&(_.AL.add(e),P.F()),f=!0,c()},{suspense:!1,sync:!0})});return o.forEach(c=>{R(c,"AP",e)}),()=>{_.AK-=1,n.forEach(c=>{c()}),o.forEach(c=>{B(c,"AP",e)})}};Mt._onRoots=(t,e)=>{if(!C(t))return Gt;let r=Pr(t);if(r.AO)throw new Error("Only top-level stores are supported");return w.AK+=1,R(r,"AQ",e),()=>{w.AK-=1,B(r,"AQ",e)}};Mt.reconcile=(()=>{let t=o=>it(o)?1:Wt(o)?2:0,e=(o,n)=>{let c=bt(o),f=bt(n);r(o,n);let i=t(c),l=t(f);return(i===1||l===1)&&(o.length=n.length),o},r=(o,n)=>{let c=bt(o),f=bt(n),i=Object.keys(c),l=Object.keys(f);for(let m=0,a=l.length;m<a;m++){let p=l[m],d=c[p],u=f[p];if(mt(d,u))d===void 0&&!(p in c)&&(o[p]=void 0);else{let h=t(d),A=t(u);h&&h===A?(r(o[p],u),h===1&&(o[p].length=u.length)):o[p]=u}}for(let m=0,a=i.length;m<a;m++){let p=i[m];p in f||delete o[p]}return o};return(o,n)=>lt(()=>e(o,n))})();Mt.untrack=t=>so(t);Mt.unwrap=t=>bt(t);var Qe=Mt;var no=()=>{let t=E,e=U;return r=>t.E(()=>r(),t,e)},Ge=no;var at=lt;var Vr={},Yf=Symbol("Suspense"),Wr=Symbol("Template.Accessor"),Kr={};var io=t=>(t[K]=!0,t),ce=io;var Ze=document.createComment.bind(document,""),vr=document.createElement.bind(document),Hr=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),xt=document.createTextNode.bind(document);var{assign:Xe}=Object,je=t=>J(t)?t:[t];var qr=t=>{for(let e=0,r=t.length;e<r;e++)if(J(t[e]))return t.flat(1/0);return t},$f=(()=>{let t=Array.prototype.indexOf;return(e,r)=>t.call(e,r)})(),{isArray:J}=Array,zr=t=>typeof t=="boolean";var y=t=>typeof t=="function",X=t=>!(nt in t||K in t||et in t||t[rt]?.parent?.disposed),T=t=>t==null,Jr=t=>t instanceof Node;var M=t=>typeof t=="string",wt=t=>!!t.isSVG,kr=(()=>{let t=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,e={};return r=>{let s=e[r];return s!==void 0?s:e[r]=!r.includes("-")&&t.test(r)}})(),Qr=t=>y(t)&&Wr in t;var Gr=t=>t==null||typeof t=="boolean"||typeof t=="symbol";var tr=F;var Zr=gt;var Xr=$t;var $=Z;var er=ve;var co={sync:"init"},fo=t=>Zr(t,co),V=fo;var vt=He;var lo=()=>{let t=!1,e=()=>t;return tr(()=>t=!0),e},jr=lo;var ao=t=>{let e=jr(),r=Ge();queueMicrotask(()=>{e()||r(t)})},rr=ao;var fe=C;var le=Qe;var ts=(t,e,r)=>{let{className:s}=t;if(M(s))if(s){if(!r&&s===e){t.className="";return}}else if(r){t.className=e;return}else return;e.includes(" ")?e.split(" ").forEach(o=>{o.length&&t.classList.toggle(o,!!r)}):t.classList.toggle(e,!!r)};var ae=document.createComment(""),sr=[ae],or=[ae],po=(t,e,r,s)=>{if(e===r)return;e instanceof Node&&(sr[0]=e,e=sr),r instanceof Node&&(or[0]=r,r=or);let o=r.length,n=e.length,c=o,f=0,i=0,l=null,m;for(;f<n||i<c;)if(n===f){let a=c<o?i?r[i-1].nextSibling:r[c-i]:s;i<c&&(a?a.before.apply(a,r.slice(i,c)):t.append.apply(t,r.slice(i,c)),i=c)}else if(c===i)for(;f<n;){if(!l||!l.has(e[f])){m=e[f];try{t.removeChild(m)}catch{}}f++}else if(e[f]===r[i])f++,i++;else if(e[n-1]===r[c-1])n--,c--;else if(e[f]===r[c-1]&&r[i]===e[n-1]){let a=e[--n].nextSibling;t.insertBefore(r[i++],e[f++].nextSibling),t.insertBefore(r[--c],a),e[n]=r[c]}else{if(!l){l=new Map;let a=i;for(;a<c;)l.set(r[a],a++)}if(l.has(e[f])){let a=l.get(e[f]);if(i<a&&a<c){let p=f,d=1;for(;++p<n&&p<c&&l.get(e[p])===a+d;)d++;if(d>a-i){let u=e[f];i<a&&(u?u.before.apply(u,r.slice(i,a)):t.append.apply(t,r.slice(i,a)),i=a)}else t.replaceChild(r[i++],e[f++])}else f++}else{m=e[f++];try{t.removeChild(m)}catch{}}}sr[0]=ae,or[0]=ae},es=po;var uo=[],yt={make:()=>({values:void 0,length:0}),makeWithNode:t=>({values:t,length:1}),makeWithFragment:t=>({values:t,fragmented:!0,length:1}),getChildrenFragmented:(t,e=[])=>{let{values:r,length:s}=t;if(!s)return e;if(r instanceof Array)for(let o=0,n=r.length;o<n;o++){let c=r[o];c instanceof Node?e.push(c):yt.getChildrenFragmented(c,e)}else r instanceof Node?e.push(r):yt.getChildrenFragmented(r,e);return e},getChildren:t=>t.length?t.fragmented?t.length===1?yt.getChildren(t.values):yt.getChildrenFragmented(t):t.values:uo,pushFragment:(t,e)=>{yt.pushValue(t,e),t.fragmented=!0},pushNode:(t,e)=>{yt.pushValue(t,e)},pushValue:(t,e)=>{let{values:r,length:s}=t;s===0?t.values=e:s===1?t.values=[r,e]:r.push(e),t.length+=1},replaceWithNode:(t,e)=>{t.values=e,delete t.fragmented,t.length=1},replaceWithFragment:(t,e)=>{t.values=e.values,t.fragmented=e.fragmented,t.length=e.length}},O=yt;var Ht=(t,e,r=!1)=>{if(y(t))X(t)?V(()=>{Ht(t(),e,!0)}):Ht(t(),e,r);else if(J(t)){let[s,o]=mo(t);s[I]=t[I],e(s,o||r)}else e(t,r)},pe=(t,e={})=>{if(M(t))t.split(/\s+/g).filter(Boolean).filter(r=>{e[r]=!0});else if(y(t))pe(t(),e);else if(J(t))t.forEach(r=>{pe(r,e)});else if(t)for(let r in t){let s=t[r];$(s)&&(e[r]=!0)}return e},mo=(()=>{let t=[],e=(r,s,o)=>{for(let n=0,c=r.length;n<c;n++){let f=r[n],i=typeof f;i==="string"||i==="number"||i==="bigint"?(s===t&&(s=r.slice(0,n)),s.push(xt(f))):i==="object"&&J(f)?(s===t&&(s=r.slice(0,n)),o=e(f,s,o)[1]):i==="function"&&Xr(f)?(s!==t&&s.push(f),o=!0):s!==t&&s.push(f)}return s===t&&(s=r),[s,o]};return r=>e(r,t,!1)})();var cr=(()=>{let t=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),e=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,r={},s=/[A-Z]/g,o=n=>r[n]||(r[n]=e.test(n)?n:n.replace(s,c=>`-${c.toLowerCase()}`));return(n,c,f)=>{wt(n)?(c=c==="xlinkHref"||c==="xlink:href"?"href":o(c),T(f)||f===!1&&t.has(c)?n.removeAttribute(c):n.setAttribute(c,String(f))):T(f)||f===!1&&t.has(c)?n.removeAttribute(c):(f=f===!0?"":String(f),n.setAttribute(c,f))}})(),ho=(t,e,r)=>{y(r)&&X(r)?V(()=>{cr(t,e,r())}):cr(t,e,$(r))};var Ao=(t,e)=>{if(e.nodeType===3)return e.nodeValue=t,e;{let r=e.parentElement;if(!r)throw new Error("Invalid child replacement");let s=xt(t);return r.replaceChild(s,e),s}};var cs=(t,e,r,s,o)=>{if(!o&&s===void 0)return;let n=O.getChildren(e),c=n instanceof Array,f=c?n.length:1,i=c?n[0]:n,m=(c?n[f-1]:n)?.nextSibling||null;if(f===0){let h=typeof s;if(h==="string"||h==="number"||h==="bigint"){let A=xt(s);r||t.appendChild(A),O.replaceWithNode(e,A);return}else if(h==="object"&&s!==null&&typeof s.nodeType=="number"){let A=s;r||t.insertBefore(A,null),O.replaceWithNode(e,A);return}}if(f===1){let h=typeof s;if(h==="string"||h==="number"||h==="bigint"){let A=Ao(String(s),i);O.replaceWithNode(e,A);return}}let a=O.make(),p=Array.isArray(s)?s:[s];for(let h=0,A=p.length;h<A;h++){let S=p[h],j=typeof S;if(j==="string"||j==="number"||j==="bigint")O.pushNode(a,xt(S));else if(j==="object"&&S!==null&&typeof S.nodeType=="number")O.pushNode(a,S);else if(j==="function"){let b=O.make(),tt=!r;O.pushFragment(a,b),Ht(S,(k,Nt)=>{let zt=tt;tt=!1,cs(t,b,zt,k,Nt)})}}let d=O.getChildren(a),u=a.length;if(!(u===0&&f===1&&i.nodeType===8)){if(!r&&(u===0||f===1&&i.nodeType===8||p[I])){let{childNodes:h}=t;if(h.length===f){if(t.textContent="",u===0){let A=Ze();O.pushNode(a,A),d!==a.values&&(d=A,u+=1)}m?d instanceof Array?m.before.apply(m,d):t.insertBefore(d,m):d instanceof Array?t.append.apply(t,d):t.append(d),O.replaceWithFragment(e,a);return}}if(u===0){let h=Ze();O.pushNode(a,h),d!==a.values&&(d=h,u+=1)}r||es(t,n,d,m),O.replaceWithFragment(e,a)}},lr=(t,e,r=O.make())=>{Ht(e,cs.bind(void 0,t,r,!1))},ue=ts,nr=(t,e,r)=>{y(r)&&X(r)?V(()=>{ue(t,e,r())}):ue(t,e,$(r))},rs=(t,e,r,s)=>{s&&s!==!0&&ue(t,s,!1),r&&r!==!0&&ue(t,r,e)},ir=(t,e,r)=>{if(y(r)&&X(r)){let s;V(()=>{let o=r();rs(t,e,o,s),s=o})}else rs(t,e,$(r))},ss=(t,e,r)=>{if(M(e))wt(t)?t.setAttribute("class",e):t.className=e;else{if(r)if(M(r))r&&(wt(t)?t.setAttribute("class",""):t.className="");else if(J(r)){r=le.unwrap(r);for(let s=0,o=r.length;s<o;s++)r[s]&&ir(t,!1,r[s])}else{r=le.unwrap(r);for(let s in r)e&&s in e||nr(t,s,!1)}if(J(e))if(fe(e))for(let s=0,o=e.length;s<o;s++){let n=at(()=>y(e[s])?e[s]:e[ot](String(s)));ir(t,!0,n)}else for(let s=0,o=e.length;s<o;s++)e[s]&&ir(t,!0,e[s]);else if(fe(e))for(let s in e){let o=at(()=>y(e[s])?e[s]:e[ot](s));nr(t,s,o)}else for(let s in e)nr(t,s,e[s])}},Eo=(t,e)=>{if(y(e)||J(e)){let r;V(()=>{let s=pe(e);ss(t,s,r),r=s})}else ss(t,e)},go=(t,e,r)=>{let s=Kr[e]||Symbol(),o=Ye(s)||Vr[s];if(!o)throw new Error(`Directive "${e}" not found`);let n=()=>o.fn(t,...je(r));o.immediate?n():rr(n)},So=(()=>{let t={onauxclick:["_onauxclick",!1],onbeforeinput:["_onbeforeinput",!1],onclick:["_onclick",!1],ondblclick:["_ondblclick",!1],onfocusin:["_onfocusin",!1],onfocusout:["_onfocusout",!1],oninput:["_oninput",!1],onkeydown:["_onkeydown",!1],onkeyup:["_onkeyup",!1],onmousedown:["_onmousedown",!1],onmouseup:["_onmouseup",!1]},e=r=>{let s=`_${r}`;document.addEventListener(r.slice(2),o=>{let n=o.composedPath(),c=null;Object.defineProperty(o,"currentTarget",{configurable:!0,get(){return c}});for(let f=0,i=n.length;f<i;f++){c=n[f];let l=c[s];if(l&&(l(o),o.cancelBubble))break}c=null})};return(r,s,o)=>{if(s.startsWith("onmiddleclick")){let c=o;s=`onauxclick${s.slice(13)}`,o=c&&(f=>f.button===1&&c(f))}let n=t[s];if(n)n[1]||(n[1]=!0,e(s)),r[n[0]]=o;else if(s.endsWith("passive")){let c=s.endsWith("capturepassive"),f=s.slice(2,-7-(c?7:0)),i=`_${s}`,l=r[i];l&&r.removeEventListener(f,l,{capture:c}),o&&r.addEventListener(f,o,{passive:!0,capture:c}),r[i]=o}else if(s.endsWith("capture")){let c=s.slice(2,-7),f=`_${s}`,i=r[f];i&&r.removeEventListener(c,i,{capture:!0}),o&&r.addEventListener(c,o,{capture:!0}),r[f]=o}else r[s]=o}})(),bo=(t,e,r)=>{So(t,e,r)},xo=(t,e)=>{t.innerHTML=String(T(e)?"":e)},wo=(t,e)=>{V(()=>{xo(t,$($(e).__html))})},os=(t,e,r)=>{e==="tabIndex"&&zr(r)&&(r=r?0:void 0),e==="value"&&t.tagName==="SELECT"&&!t._$inited&&(t._$inited=!0,queueMicrotask(()=>t[e]=r)),t[e]=r,T(r)&&cr(t,e,null)},yo=(t,e,r)=>{y(r)&&X(r)?V(()=>{os(t,e,r())}):os(t,e,$(r))},Oo=(t,e)=>{if(T(e))return;let r=qr(je(e)).filter(Boolean);r.length&&rr(()=>at(()=>r.forEach(s=>s?.(t))))},fr=(()=>{let t=/^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/i,e={};return(r,s,o)=>{s.charCodeAt(0)===45?T(o)?r.style.removeProperty(s):r.style.setProperty(s,String(o)):T(o)?r.style[s]=null:r.style[s]=M(o)||e[s]||(e[s]=t.test(s))?o:`${o}px`}})(),ns=(t,e,r)=>{y(r)&&X(r)?V(()=>{fr(t,e,r())}):fr(t,e,$(r))},is=(t,e,r)=>{if(M(e))t.setAttribute("style",e);else{if(r)if(M(r))r&&(t.style.cssText="");else{r=le.unwrap(r);for(let s in r)e&&s in e||fr(t,s,null)}if(fe(e))for(let s in e){let o=at(()=>y(e[s])?e[s]:e[ot](s));ns(t,s,o)}else for(let s in e)ns(t,s,e[s])}},_o=(t,e)=>{if(y(e)&&X(e)){let r;V(()=>{let s=e();is(t,s,r),r=s})}else is(t,$(e))},Ro=(t,e,r)=>{if(e==="children"){let s=xt("");t.insertBefore(s,null),r(t,"setChildReplacement",void 0,s)}else e==="ref"?r(t,"setRef"):e==="style"?r(t,"setStyles"):e==="class"?(wt(t)||(t.className=""),r(t,"setClasses")):e==="dangerouslySetInnerHTML"?r(t,"setHTML"):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?r(t,"setEvent",e.toLowerCase()):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?r(t,"setDirective",e.slice(4)):e==="innerHTML"||e==="outerHTML"||e==="textContent"||e==="className"||(e in t&&!wt(t)?r(t,"setProperty",e):(t.setAttribute(e,""),r(t,"setAttribute",e)))},Bo=(t,e,r)=>{Qr(r)?Ro(t,e,r):e==="children"?lr(t,r):e==="ref"?Oo(t,r):e==="style"?_o(t,r):e==="class"?Eo(t,r):e==="dangerouslySetInnerHTML"?wo(t,r):e.charCodeAt(0)===111&&e.charCodeAt(1)===110?bo(t,e.toLowerCase(),r):e.charCodeAt(0)===117&&e.charCodeAt(3)===58?go(t,e.slice(4),r):e==="innerHTML"||e==="outerHTML"||e==="textContent"||e==="className"||(e in t&&!wt(t)?yo(t,e,r):ho(t,e,r))},fs=(t,e)=>{for(let r in e)Bo(t,r,e[r])};var Lo=(t,e,...r)=>{let{children:s,key:o,ref:n,...c}=e||{},f=r.length===1?r[0]:r.length===0?s:r;if(y(t)){let i=c;return T(f)||(i.children=f),T(n)||(i.ref=n),ce(()=>at(()=>t.call(t,i)))}else if(M(t)){let i=c,l=kr(t),m=l?Hr:vr;return Gr(f)||(i.children=f),T(n)||(i.ref=n),ce(()=>{let a=m(t);return l&&(a.isSVG=!0),at(()=>fs(a,i)),a})}else{if(Jr(t))return ce(()=>t);throw new Error("Invalid component")}},qt=Lo;function Co({values:t,fallback:e,pooled:r,unkeyed:s,children:o}){return Ke(t,o,e,{pooled:r,unkeyed:s})}var me=Co;var To=(t,e)=>{if(!e||!(e instanceof HTMLElement))throw new Error("Invalid parent node");return e.textContent="",vt(r=>(lr(e,t),()=>{r(),e.textContent=""}))},ar=To;var as=function(t,e,r,s){var o;e[0]=0;for(var n=1;n<e.length;n++){var c=e[n++],f=e[n]?(e[0]|=c?1:2,r[e[n++]]):e[++n];c===3?s[0]=f:c===4?s[1]=Object.assign(s[1]||{},f):c===5?(s[1]=s[1]||{})[e[++n]]=f:c===6?s[1][e[++n]]+=f+"":c?(o=t.apply(f,as(t,f,r,["",null])),s.push(o),f[0]?e[0]|=2:(e[n-2]=0,e[n]=o)):s.push(f)}return s},ls=new Map;function ps(t){var e=ls.get(this);return e||(e=new Map,ls.set(this,e)),(e=as(this,e.get(t)||(e.set(t,e=function(r){for(var s,o,n=1,c="",f="",i=[0],l=function(p){n===1&&(p||(c=c.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,p,c):n===3&&(p||c)?(i.push(3,p,c),n=2):n===2&&c==="..."&&p?i.push(4,p,0):n===2&&c&&!p?i.push(5,0,!0,c):n>=5&&((c||!p&&n===5)&&(i.push(n,0,c,o),n=6),p&&(i.push(n,p,0,o),n=6)),c=""},m=0;m<r.length;m++){m&&(n===1&&l(),l(m));for(var a=0;a<r[m].length;a++)s=r[m][a],n===1?s==="<"?(l(),i=[i],n=3):c+=s:n===4?c==="--"&&s===">"?(n=1,c=""):c=s+c[0]:f?s===f?f="":c+=s:s==='"'||s==="'"?f=s:s===">"?(l(),n=1):n&&(s==="="?(n=5,o=c,c=""):s==="/"&&(n<5||r[m][a+1]===">")?(l(),n===3&&(i=i[0]),n=i,(i=i[0]).push(2,0,n),n=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),n=2):c+=s),n===3&&c==="!--"&&(n=4,i=i[0])}return l(),i}(t)),e),arguments,[])).length>1?e:e[0]}var us={},Mo=(t,e,...r)=>qt(us[t]||t,e,...r),No=t=>void Xe(us,t),Yo=Xe(ps.bind(Mo),{register:No}),pt=Yo;var ms=()=>{let t=er(0);return pt`
		<div class="page">
			<div><span style="color: red;">TODO!</span> The counter is ${t}</div>
			<button class="w96-button" onClick=${()=>t(r=>r+1)}>Click button to make counter go up</button>
		</div>
	`};var ds=({extension:t})=>pt`
		<div class="item" style=${`display: flex;${t.core&&" opacity: 50%"}`}>
			<div style="display: flex; flex-direction: column;">
				<div class="bold-noaa">${t.manifest.name} <i style="opacity: 50%">${t.manifest.authors.join(", ")}</i></div>
				<div>${t.manifest.description}</div>
			</div>
		</div>
	`;var hs=()=>pt`
        <div style="display: flex; flex-direction: column; gap: 0.2rem; padding-top: 0.2rem; height: 100%;" class="w96-listbox">
            <${me} values=${N.sort(t=>t.core?1:-1)}>${t=>pt`<${ds} extension=${t} />`}</${me}>
        </div>
    `;var Io=[{name:"Settings",component:ms,isDefault:!0},{name:"Extensions",component:hs}],As=x({patches:[{find:/{caption:"System Flags",icon:await (.{1,2}\..{1,2}\.getIconUrl)\("objects\/tools"\),onclick:\(\)=>(.{1,2}\..{1,2}\.execCmd)\("flags"\)}/,replace:(t,e,r)=>`${t},{caption:"ropeswing",icon:await ${e}("apps/settings"),onclick:()=>${r}("ctrl", ["--cpl", "royalmail"])}`},{find:"rcon:k",replace:t=>`${t},royalmail:$self.app(w96.WApplication, w96.ui.components)`}],manifest:{name:"royalmail",description:"settings frontend for ropeswing",authors:["Beef"]},core:!0,app:(t,e)=>class extends t{constructor(){super()}main=async s=>vt(o=>{if(hr("onterminated",this,o,!0),super.main(s),document.querySelector(".royalmail-applet"))return;let n=this.createWindow({center:!0,taskbar:!1,resizable:!1,initialWidth:370,initialHeight:450,controlBoxStyle:"WS_CBX_CLOSE",bodyClass:"royalmail-applet",title:"ropeswing"},!0),c=new e.TabControl;Io.forEach(i=>{let l=c.addPage(i.name,async m=>void ar(qt(i.component),m));i.isDefault&&c.openPage(l)});let f=c.getElement();f.style.height="100%",n.getBodyContainer().appendChild(f),n.show()})}});var Es=x({patches:[{find:/.\.features\.includes\(.\.f\.hidden\)/,replace:"false"}],manifest:{name:"showhiddendrives",description:"shows all drives in explorer",authors:["redstonekasi"]}});var gs=x({patches:[{find:/run\(await .+?\((.)\)/,replace:(t,e)=>`run(await $self.getFileContent(${e})`}],manifest:{name:"treebranch",description:"ropeswing in userland",authors:["redstonekasi"]},async getFileContent(t){let e=await w96.FS.readstr(t);for(let r of N)if(r.patches)for(let s of r.patches)s.executable===t&&(e=e.replace(s.find,Yt(s.replace,r.manifest.name)));return e},core:!0});var Ss=x({patches:[{find:/var __webpack_exports__=__webpack_require__\(\d{4}\)/,replace:t=>`${t};$self.unpack(__webpack_require__,__webpack_modules__);`}],manifest:{name:"unbox",description:"webpack unpacker",authors:["Beef"]},unpack(t,e){window.__string_require__=r=>{for(let[s,o]of Object.entries(e)){let n=o.toString();if(r instanceof RegExp&&r.test(n)||typeof r=="string"&&n.includes(r))return t(s)}}},core:!0});var N=[Er,gr,Sr,br,xr,As,Es,gs,Ss];function Yt(t,e){let r=`ropeswing.extensions["${e}"]`;switch(typeof t){case"string":return t.replaceAll("$self",r);case"function":return(...s)=>t(...s).replaceAll("$self",r)}}function bs(t){if(!t.textContent)throw new Error("Script doesn't have textContent, what?");console.group("[ ropeswing-patcher ]");for(let e of N)if(e.patches)for(let r of e.patches)r.executable||(t.textContent=t.textContent.replace(r.find,Yt(r.replace,e.manifest.name)),console.log(`applied patch ${e.patches.indexOf(r)+1} of ${e.patches.length} from ${e.manifest.name}`));console.groupEnd()}function xs(){console.group("[ ropeswing-postload ]");for(let t of N)t.onLoad&&(t.onLoad(),console.log(`executed onLoad of ${t.manifest.name}`));console.groupEnd()}var ws=()=>({console:ge,utils:he,extensions:Object.fromEntries([...N].map(t=>[t.manifest.name,{...t}]))});console.group("[ ropeswing ]");console.log("in kernel ctx...");var Do=Ar("appendChild",document.head,(t,e)=>{Do(),t[0]instanceof HTMLScriptElement||e(...t);let r=t[0];ut("[ropeswing] preboot loaded. welcome!"),ut("exposing API..."),window.ropeswing=ws(),ut("applying patches..."),bs(r),ut("booting original!"),e(...t),ut("assigning postload init event..."),w96.evt.sys.on("init-complete",xs)});console.log("kernel done!");console.groupEnd();})();
//# sourceURL=ropeswing
