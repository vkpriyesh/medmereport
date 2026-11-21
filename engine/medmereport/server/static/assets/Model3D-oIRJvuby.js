var vh=Object.defineProperty;var El=i=>{throw TypeError(i)};var xh=(i,e,t)=>e in i?vh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var da=(i,e,t)=>xh(i,typeof e!="symbol"?e+"":e,t),yh=(i,e,t)=>e.has(i)||El("Cannot "+t);var ei=(i,e,t)=>(yh(i,e,"read from private field"),t?t.call(i):e.get(i)),Bs=(i,e,t)=>e.has(i)?El("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);import{b as Mh,E as bh,B as Sh,p as tn,a as Wr,I as Mt,s as R,i as We,t as ye,c as V,d as G,e as me,f as nn,g as ae,o as ee,h as Eh,j as Ae,k as Hn,l as ft,m as _,n as kt,q as Jt,r as at,u as Le,v as Oe,w as aa,x as On,y as pn,z as wn,A as $e,C as An,D as Dt,F as Ut,G as Xr,H as qr,J as Tl,K as Qo,L as _u,M as Al,N as Th,_ as Ah,O as $o,P as wh,Q as gu,R as Rh,S as Ch,T as Ph,U as wl,V as Lh,W as Dh,X as Ih,Y as Uh,Z as Nh,$ as Oh,a0 as Fh,a1 as Rl}from"./index-BVw39liZ.js";function vu(i,e,...t){var n=new Sh(i);Mh(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},bh)}const Bh=/^([LRMVHB])__(.+?)(?:_\d+)?$/;function kh(i){const e=i?Bh.exec(i):null;if(!e)return null;const[,t,n]=e;return t==="V"?{kind:"vessel",name:n,key:`V|${n}`}:t==="H"?{kind:"skin",name:n,key:`H|${n}`}:t==="B"?{kind:"bone",name:n,key:`B|${n}`}:{kind:"region",hemi:t,structure:n,key:`${t}|${n}`}}function el(i){const e=i.indexOf("|");return{hemi:i.slice(0,e),structure:i.slice(e+1)}}function zh(i){const{hemi:e,structure:t}=el(i);return e==="L"?`R|${t}`:e==="R"?`L|${t}`:null}const xu=i=>(i.charAt(0).toUpperCase()+i.slice(1)).replace(/_/g," "),qi={},dn=(i,e,t,n)=>n.split(" ").forEach(s=>qi[s]=[i,e,t]);dn("frontal","hemi",!1,"frontal_pole sfg mfg ifg_tri ifg_oper precentral frontal_medial sma paracingulate orbitofrontal frontal_operculum");dn("insular","hemi",!1,"insula");dn("temporal","hemi",!1,"temporal_pole stg mtg itg temporal_fusiform planum_polare heschl planum_temporale");dn("parietal","hemi",!1,"postcentral spl supramarginal angular precuneus parietal_operculum central_operculum");dn("occipital","hemi",!1,"lateral_occipital intracalcarine supracalcarine cuneus lingual occipital_fusiform temporo_occipital_fusiform occipital_pole");dn("limbic","hemi",!1,"cingulate_ant cingulate_post subcallosal parahippocampal");dn("limbic","deep",!0,"hippocampus amygdala");dn("subcortical","deep",!0,"thalamus caudate putamen pallidum accumbens ventral_dc");dn("ventricles","ventricle",!0,"lateral_ventricle third_ventricle fourth_ventricle");dn("white_matter","hemi",!1,"corpus_callosum");dn("white_matter","deep",!0,"cerebral_white_matter");dn("cerebellum","cerebellum",!1,"cerebellum_hemi cerebellar_vermis");dn("cerebellum","cerebellum",!0,"cerebellum_white_matter");dn("brainstem","brainstem",!1,"midbrain pons medulla brainstem");dn("arteries","vessel",!0,"cerebral_arteries neck_arteries");const Hh=Object.keys(qi),$a=["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem","arteries"],yu=i=>{var e;return((e=qi[i])==null?void 0:e[0])??"other"},Vh=i=>{var e;return((e=qi[i])==null?void 0:e[2])??!1};function Gh(i,e,t){const n=t??(qi[i]?qi[i][1]==="hemi"?`hemi_${e==="R"?"R":"L"}`:qi[i][1]:`hemi_${e==="R"?"R":"L"}`);return n==="hemi"?e==="R"?"hemi_R":"hemi_L":n==="vessel"?"vessels":n==="body"?"skin":n}const fr=i=>!!i&&typeof i=="object"&&!Array.isArray(i),Wh=i=>i==null||i===""||Array.isArray(i)&&i.length===0;function eo(i,e){if(!fr(e))return i;if(!fr(i))return e;const t={...i};for(const[n,s]of Object.entries(e))Wh(s)||(t[n]=fr(s)&&fr(t[n])?eo(t[n],s):s);return t}function Xh(i,e,t){var r,a;let n=i??t??{structures:{},lobes:{}};if(n={...n,structures:n.structures??{},lobes:n.lobes??{}},e==="en")return n;const s=((r=i==null?void 0:i.i18n)==null?void 0:r[e])??((a=t==null?void 0:t.i18n)==null?void 0:a[e]);return s&&(n=eo(n,s)),t&&t!==i&&(n=eo(n,{structures:t.structures,lobes:t.lobes,arteries:t.arteries,sequences:t.sequences})),n}const Mu=(i,e,t)=>!!e&&(!i.lang||i.lang==="en"||e!==t),bu=(i,e)=>{var t;return((t=i.structures[e])==null?void 0:t.lobe)??yu(e)};function ea(i,e){var n,s,r,a;const t=(n=i.kb.structures[e])==null?void 0:n.name;return Mu(i,t,(a=(r=(s=i.en)==null?void 0:s.structures)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`struct.${e}`)??t??xu(e)}function ui(i,e){var n,s,r,a;const t=(n=i.kb.lobes[e])==null?void 0:n.name;return Mu(i,t,(a=(r=(s=i.en)==null?void 0:s.lobes)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`lobe.${e}`)??t??xu(e)}function to(i,e){const{hemi:t,structure:n}=el(e),s=ea(i,n);return t==="L"?i.tr("side.leftOf",{name:s})??`Left ${s}`:t==="R"?i.tr("side.rightOf",{name:s})??`Right ${s}`:s}function qh(i,e,t){const n=i.structures[e];return[t,n==null?void 0:n.name,...(n==null?void 0:n.aka)??[],e.replace(/_/g," ")].filter(Boolean).join(" ").toLowerCase()}const wi={frontal:"#f472b6",parietal:"#60a5fa",temporal:"#34d399",occipital:"#fbbf24",insular:"#f97316",limbic:"#c084fc",subcortical:"#22d3ee",cerebellum:"#a3e635",brainstem:"#fb7185",ventricles:"#93c5fd",white_matter:"#e2e8f0",arteries:"#ef4444"},no="#cbd5e1",Su="#3a4252",jh="#e7b9ad",Yh="#c99a8a",Eu=["#1e3a8a","#0ea5e9","#5eead4","#fde047","#f97316","#e11d48"],Kh=["#3b82f6","#93c5fd","#e2e8f0","#fca5a5","#ef4444"],ur=i=>wi[i]??no;function ta(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function Zh([i,e,t]){const n=i/255,s=e/255,r=t/255,a=Math.max(n,s,r),o=Math.min(n,s,r),l=(a+o)/2;if(a===o)return[0,0,l];const c=a-o,u=l>.5?c/(2-a-o):c/(a+o);let h=a===n?(s-r)/c+(s<r?6:0):a===s?(r-n)/c+2:(n-s)/c+4;return h/=6,[h,u,l]}function Jh([i,e,t]){if(e===0)return[t*255,t*255,t*255];const n=(a,o,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(o-a)*6*l:l<1/2?o:l<2/3?a+(o-a)*(2/3-l)*6:a),s=t<.5?t*(1+e):t+e-t*e,r=2*t-s;return[n(r,s,i+1/3)*255,n(r,s,i)*255,n(r,s,i-1/3)*255]}function Qh(i,e,t){const n=Zh(ta(ur(i))),s=t>1?e/(t-1):.5,r=(n[0]+(s-.5)*.09+1)%1,a=Math.max(.36,Math.min(.62,n[2]*.86+(s-.5)*.22)),o=Math.max(.45,n[1]-e%2*.12);return Jh([r,o,a]).map(Math.round)}function $h(i,e){var s;const t={};for(const r of i)(t[s=e(r)]??(t[s]=[])).push(r);const n={};for(const[r,a]of Object.entries(t))a.forEach((o,l)=>n[o]=Qh(r,l,a.length));return n}function ed(i,e=Eu){i=Math.max(0,Math.min(1,Number.isFinite(i)?i:0));const t=e.length-1,n=Math.min(t-1,Math.floor(i*t)),s=i*t-n,r=ta(e[n]),a=ta(e[n+1]);return r.map((o,l)=>o+(a[l]-o)*s)}const td=i=>`linear-gradient(90deg, ${i.join(", ")})`,Tu=i=>`rgb(${i.map(Math.round).join(" ")})`;var nd=Ae('<p class="disc"><!><span><b> </b><!></span></p>');function ys(i,e){tn(e,!0);let t=Wr(e,"extra",3,"");var n=nd(),s=ae(n);Mt(s,{name:"info",size:15});var r=R(s),a=ae(r),o=ee(a,!0),l=R(a);{var c=u=>{var h=Eh();ye(()=>G(h,t())),me(u,h)};We(l,u=>{t()&&u(c)})}ye(u=>G(o,u),[()=>V("disclaimer")]),me(i,n),nn()}function en(i,e="en"){if(i==null||!Number.isFinite(i))return"—";const t=Math.abs(i),n=t>=100?0:t>=10?1:t>=1?2:t===0?0:Math.min(4,1-Math.floor(Math.log10(t))),s=e==="hi"?"hi-IN":"en-US";return i.toLocaleString(s,{maximumFractionDigits:n,minimumFractionDigits:0})}function id(i,e="en"){const t=en(Math.abs(i),e);return`${i>0?"+":i<0?"−":""}${t}%`}const pr=String.raw`[-−]?\d+(?:[.,]\d+)?`,mr=i=>parseFloat(i.replace("−","-").replace(",","."));function sd(i){if(!i)return null;const e=i.replace(/(\d),(\d{3})(?!\d)/g,"$1$2").replace(/[×x]\s*10(?:\^[-−]?\d+|[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g," "),t=new RegExp(`(${pr})\\s*(?:–|—|-|to|\\.\\.|…)\\s*(${pr})`).exec(e);if(t){let r=mr(t[1]),a=mr(t[2]);return r>a&&([r,a]=[a,r]),{lo:r,hi:a}}const n=new RegExp(`(?:<|≤|<=|under|below)\\s*(${pr})`,"i").exec(e);if(n)return{lo:null,hi:mr(n[1])};const s=new RegExp(`(?:>|≥|>=|over|above)\\s*(${pr})`,"i").exec(e);return s?{lo:mr(s[1]),hi:null}:null}function rd(i,e){if(!Number.isFinite(i)||e.lo===null&&e.hi===null)return null;const t=e.lo??Math.min(0,i,e.hi*.5),n=e.hi??Math.max(t*2,i*1.25,t+1),s=Math.max(1e-9,n-t),r=Math.min(t-s*.35,i-s*.08),a=Math.max(n+s*.35,i+s*.08),o=l=>(l-r)/(a-r)*100;return{axisLo:r,axisHi:a,bandLeft:e.lo===null?0:o(t),bandWidth:(e.hi===null?100:o(n))-(e.lo===null?0:o(t)),marker:Math.max(0,Math.min(100,o(i))),position:e.lo!==null&&i<e.lo?"below":e.hi!==null&&i>e.hi?"above":"within"}}function ad(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))return null;const t=Math.max(Math.abs(i),Math.abs(e)),n=(i+e)/2;return{left:i,right:e,leftPct:t?Math.abs(i)/t*100:0,rightPct:t?Math.abs(e)/t*100:0,diffPct:n?(i-e)/Math.abs(n)*100:0}}function od(i){const e=i==null?void 0:i.summary;return e?Array.isArray(e)?e:Object.entries(e).map(([t,n])=>({...n,key:n.key??t})):[]}const io=i=>typeof i=="string"?i:i.text;var ld=Ae('<p class="tag"> </p>'),cd=Ae('<div class="metric-s svelte-1trur1d"><div class="k svelte-1trur1d"> </div><div class="v svelte-1trur1d"> <small class="svelte-1trur1d"> </small></div></div>'),ud=Ae('<h4> </h4> <div class="metrics"></div> <p class="p faint" style="font-size:11.5px;margin-top:6px"> </p>',1),hd=Ae("<p> </p>"),Cl=Ae("<li> </li>"),dd=Ae('<h4> </h4><ul class="dots"></ul>',1),fd=Ae('<h4> </h4><ul class="dots clin"></ul>',1),pd=Ae('<div class="fact"><b> </b> </div>'),md=Ae('<button type="button" class="chip"><span class="dot"></span> </button>'),Pl=Ae('<button type="button" class="btn primary"> </button>'),_d=Ae('<div class="tour-nav"><button type="button" class="btn"> </button> <span class="faint" style="font-size:12px"> </span> <!></div>'),gd=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot"></span> </span> <span class="chip"> </span></div> <h2> </h2> <!></div> <div class="ibody"><!> <!> <!> <!> <!> <h4> </h4> <div class="chips"></div> <!> <!></div>',1);function vd(i,e){tn(e,!0);const t=Le(()=>e.ctx.kb.lobes[e.id]),n=Le(()=>[...e.ctx.store.facts.regions].filter(([,q])=>q.lobe===e.id).map(([q])=>q)),s=Le(()=>[...new Set(_(n).map(q=>q.slice(2)))]),r=Le(()=>e.ctx.store.s.mode),a=Le(()=>e.ctx.store.s.tour),o=/^(cm³|cm3|ml|mL|mm³|mm3|cc)$/,l=Le(()=>{var Q,ie,pe,Me,we;const q={L:null,R:null,M:null};for(const Xe of _(n)){const De=(Me=(pe=(ie=(Q=e.ctx.stats)==null?void 0:Q.regions)==null?void 0:ie[Xe])==null?void 0:pe.measurements)==null?void 0:Me.find(I=>I.key==="volume"||o.test(I.unit)&&I.value!==null);if(!De||De.value===null)continue;const ke=Xe[0];q[ke]={v:(((we=q[ke])==null?void 0:we.v)??0)+De.value,unit:De.unit}}return q}),c=q=>{const Q=e.ctx.store.index.present.get(q);e.ctx.act.select({type:"region",id:`${Q!=null&&Q.has("M")?"M":Q!=null&&Q.has("L")?"L":"R"}|${q}`},!0)};var u=gd(),h=ft(u),d=ae(h),f=ae(d);Mt(f,{name:"close",size:16});var g=R(d,2),y=ae(g),m=ae(y),p=R(m,1,!0),A=R(y,2),T=ee(A,!0),M=R(g,2),H=ee(M,!0),L=R(M,2);{var C=q=>{var Q=ld(),ie=ee(Q,!0);ye(()=>G(ie,_(t).tagline)),me(q,Q)};We(L,q=>{var Q;(Q=_(t))!=null&&Q.tagline&&q(C)})}var U=R(h,2),E=ae(U);{var b=q=>{var Q=ud(),ie=ft(Q),pe=ee(ie,!0),Me=R(ie,2);kt(Me,20,()=>["L","R","M"],pn,(De,ke)=>{var I=aa(),Qe=ft(I);{var qe=Ve=>{var Ie=cd(),tt=ae(Ie),j=ee(tt,!0),S=R(tt),x=ae(S),D=R(x),Y=ee(D,!0);ye((se,ne)=>{G(j,se),G(x,ne),G(Y,_(l)[ke].unit)},[()=>V(`card.side.${ke}`),()=>en(_(l)[ke].v,On.lang)]),me(Ve,Ie)};We(Qe,Ve=>{_(l)[ke]&&Ve(qe)})}me(De,I)});var we=R(Me,2),Xe=ee(we,!0);ye((De,ke)=>{G(pe,De),G(Xe,ke)},[()=>V("card.yourMeasurements"),()=>V("card.lobeSumNote")]),me(q,Q)};We(E,q=>{_(r)==="mine"&&(_(l).L||_(l).R||_(l).M)&&q(b)})}var P=R(E,2);{var F=q=>{var Q=hd(),ie=ee(Q,!0);ye(()=>G(ie,_(t).overview)),me(q,Q)};We(P,q=>{var Q;(Q=_(t))!=null&&Q.overview&&q(F)})}var O=R(P,2);{var X=q=>{var Q=dd(),ie=ft(Q),pe=ee(ie,!0),Me=R(ie);kt(Me,21,()=>_(t).functions,pn,(we,Xe)=>{var De=Cl(),ke=ee(De,!0);ye(()=>G(ke,_(Xe))),me(we,De)}),ye(we=>G(pe,we),[()=>V("card.functions")]),me(q,Q)};We(O,q=>{var Q,ie;(ie=(Q=_(t))==null?void 0:Q.functions)!=null&&ie.length&&q(X)})}var $=R(O,2);{var K=q=>{var Q=fd(),ie=ft(Q),pe=ee(ie,!0),Me=R(ie);kt(Me,21,()=>_(t).clinical,pn,(we,Xe)=>{var De=Cl(),ke=ee(De,!0);ye(()=>G(ke,_(Xe))),me(we,De)}),ye(we=>G(pe,we),[()=>V("card.clinical")]),me(q,Q)};We($,q=>{var Q,ie;(ie=(Q=_(t))==null?void 0:Q.clinical)!=null&&ie.length&&q(K)})}var oe=R($,2);{var Z=q=>{var Q=pd(),ie=ae(Q),pe=ee(ie,!0),Me=R(ie,1,!0);ye(we=>{G(pe,we),G(Me,_(t).fact)},[()=>V("card.fact")]),me(q,Q)};We(oe,q=>{var Q;(Q=_(t))!=null&&Q.fact&&q(Z)})}var de=R(oe,2),fe=ee(de,!0),ve=R(de,2);kt(ve,20,()=>_(s),q=>q,(q,Q)=>{const ie=Le(()=>e.ctx.store.colors[Q]);var pe=md(),Me=ae(pe),we=R(Me,1,!0);ye((Xe,De)=>{Jt(Me,`background:${Xe??""}`),G(we,De)},[()=>_(ie)?Tu(_(ie)):"var(--text-3)",()=>ea(e.ctx.namer,Q)]),at("click",pe,()=>c(Q)),me(q,pe)});var he=R(ve,2);{var be=q=>{var Q=_d(),ie=ae(Q),pe=ee(ie),Me=R(ie,2),we=ee(Me,!0),Xe=R(Me,2);{var De=I=>{var Qe=Pl(),qe=ee(Qe);ye(Ve=>G(qe,`${Ve??""} ›`),[()=>V("card.tour.next")]),at("click",Qe,()=>e.ctx.act.tourStep(1)),me(I,Qe)},ke=I=>{var Qe=Pl(),qe=ee(Qe,!0);ye(Ve=>G(qe,Ve),[()=>V("card.tour.finish")]),at("click",Qe,function(...Ve){var Ie;(Ie=e.ctx.act.tourEnd)==null||Ie.apply(this,Ve)}),me(I,Qe)};We(Xe,I=>{_(a).i<e.ctx.tourLen-1?I(De):I(ke,-1)})}ye((I,Qe)=>{ie.disabled=_(a).i===0,G(pe,`‹ ${I??""}`),G(we,Qe)},[()=>V("card.tour.back"),()=>V("card.tour.pos",{i:_(a).i+1,n:e.ctx.tourLen})]),at("click",ie,()=>e.ctx.act.tourStep(-1)),me(q,Q)};We(he,q=>{_(a)&&q(be)})}var J=R(he,2);ys(J,{}),ye((q,Q,ie,pe,Me,we,Xe)=>{Oe(d,"aria-label",q),Oe(d,"title",Q),Jt(m,`background:${ie??""}`),G(p,pe),G(T,Me),G(H,we),G(fe,Xe)},[()=>V("card.close"),()=>V("card.close"),()=>ur(e.id),()=>V("card.division"),()=>V("card.nStructures",{n:_(s).length}),()=>ui(e.ctx.namer,e.id),()=>V("card.inDivision")]),at("click",d,()=>_(a)?e.ctx.act.tourEnd():e.ctx.act.select(null)),me(i,u),nn()}Hn(["click"]);var xd=Ae('<div class="pop svelte-17vi66k" role="note"><!></div>'),yd=Ae('<span class="ip svelte-17vi66k"><button type="button" class="b svelte-17vi66k"><!></button> <!></span>');function Md(i,e){tn(e,!0);let t=Dt(!1),n;const s=`pop-${Math.random().toString(36).slice(2,9)}`;wn(()=>{if(!_(t))return;const u=d=>{n.contains(d.target)||$e(t,!1)},h=d=>{var f;d.key==="Escape"&&($e(t,!1),d.stopPropagation(),(f=n.querySelector("button"))==null||f.focus())};return document.addEventListener("pointerdown",u),n.addEventListener("keydown",h),()=>{document.removeEventListener("pointerdown",u),n.removeEventListener("keydown",h)}});var r=yd(),a=ae(r),o=ae(a);Mt(o,{name:"info",size:13});var l=R(a,2);{var c=u=>{var h=xd(),d=ae(h);vu(d,()=>e.children),ye(()=>Oe(h,"id",s)),me(u,h)};We(l,u=>{_(t)&&u(c)})}An(r,u=>n=u,()=>n),ye((u,h)=>{Oe(a,"aria-expanded",_(t)),Oe(a,"aria-controls",s),Oe(a,"aria-label",u),Oe(a,"title",h)},[()=>V("card.howMeasured",{name:e.label}),()=>V("card.howMeasured",{name:e.label})]),at("click",a,()=>$e(t,!_(t))),me(i,r),nn()}Hn(["click"]);var bd=Ae('<p class="svelte-qlz17q"><b> </b> </p>'),Sd=Ae("<li> </li>"),Ed=Ae('<p class="svelte-qlz17q"><b> </b></p> <ul class="svelte-qlz17q"></ul>',1),Td=Ae('<p class="svelte-qlz17q"><b> </b> </p> <!> <!> <p class="edu svelte-qlz17q"> </p>',1),Ad=Ae('<small class="svelte-qlz17q"> </small>'),wd=Ae('<div class="bar svelte-qlz17q" role="img"><div class="band svelte-qlz17q"></div> <div class="mk svelte-qlz17q"></div></div> <div class="bar-l svelte-qlz17q"><span> </span><span> </span><span> </span></div>',1),Rd=Ae('<div class="lr svelte-qlz17q" role="img"><b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span> <b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span></div> <div class="s svelte-qlz17q"> <b class="svelte-qlz17q"> </b> </div>',1),Cd=Ae('<div class="cw svelte-qlz17q"> </div>'),Pd=Ae('<div><div class="k svelte-qlz17q"><span> </span> <!></div> <div class="v svelte-qlz17q"> <!></div> <!> <!> <!></div>');function Au(i,e){tn(e,!0);let t=Wr(e,"other",3,null),n=Wr(e,"hemi",3,"M"),s=Wr(e,"wide",3,!1);const r=Le(()=>On.lang),a=Le(()=>sd(e.m.reference)),o=Le(()=>_(a)&&e.m.value!==null?rd(e.m.value,_(a)):null),l=Le(()=>t()&&!/asym/i.test(e.m.key)&&e.m.value!==null&&t().value!==null&&(n()==="L"||n()==="R")?ad(n()==="L"?e.m.value:t().value,n()==="L"?t().value:e.m.value):null),c=Le(()=>e.m.caveats??[]);var u=Pd();let h;var d=ae(u),f=ae(d),g=ee(f,!0),y=R(f,2);Md(y,{get label(){return e.label},children:(P,F)=>{var O=Td(),X=ft(O),$=ae(X),K=ee($,!0),oe=R($),Z=R(X,2);{var de=J=>{var q=bd(),Q=ae(q),ie=ee(Q,!0),pe=R(Q);ye(Me=>{G(ie,Me),G(pe,` ${e.m.reference??""}`)},[()=>V("card.reference")]),me(J,q)};We(Z,J=>{e.m.reference&&J(de)})}var fe=R(Z,2);{var ve=J=>{var q=Ed(),Q=ft(q),ie=ae(Q),pe=ee(ie,!0),Me=R(Q,2);kt(Me,21,()=>_(c),pn,(we,Xe)=>{var De=Sd();let ke;var I=ee(De,!0);ye(Qe=>{ke=Ut(De,1,"svelte-qlz17q",null,ke,{warn:typeof _(Xe)!="string"&&_(Xe).severity==="warn"}),G(I,Qe)},[()=>io(_(Xe))]),me(we,De)}),ye(we=>G(pe,we),[()=>V("card.caveats")]),me(J,q)};We(fe,J=>{_(c).length&&J(ve)})}var he=R(fe,2),be=ee(he,!0);ye((J,q,Q)=>{G(K,J),G(oe,` ${q??""}`),G(be,Q)},[()=>V("card.method"),()=>e.m.method||V("card.methodUnknown"),()=>V("disclaimer")]),me(P,O)},$$slots:{default:!0}});var m=R(d,2),p=ae(m),A=R(p);{var T=P=>{var F=Ad(),O=ee(F,!0);ye(()=>G(O,e.m.unit)),me(P,F)};We(A,P=>{e.m.unit&&P(T)})}var M=R(m,2);{var H=P=>{var F=wd(),O=ft(F),X=ae(O),$=R(X,2),K=R(O,2),oe=ae(K),Z=ee(oe,!0),de=R(oe),fe=ee(de,!0),ve=R(de),he=ee(ve,!0);ye((be,J,q,Q)=>{Oe(O,"aria-label",be),Jt(X,`left:${_(o).bandLeft??""}%;width:${_(o).bandWidth??""}%`),Jt($,`left:${_(o).marker??""}%`),G(Z,J),G(fe,q),G(he,Q)},[()=>V(`card.range.${_(o).position}`,{lo:en(_(a).lo,_(r)),hi:en(_(a).hi,_(r))}),()=>en(_(o).axisLo,_(r)),()=>V("card.typical",{ref:e.m.reference??""}),()=>en(_(o).axisHi,_(r))]),me(P,F)};We(M,P=>{_(o)&&_(a)&&P(H)})}var L=R(M,2);{var C=P=>{var F=Rd(),O=ft(F),X=ae(O),$=ee(X,!0),K=R(X);let oe;var Z=ee(K),de=R(K),fe=ee(de,!0),ve=R(de,2),he=ee(ve,!0),be=R(ve);let J;var q=ee(be),Q=R(be),ie=ee(Q,!0),pe=R(O,2),Me=ae(pe),we=R(Me),Xe=ee(we,!0),De=R(we);ye((ke,I,Qe,qe,Ve,Ie,tt,j)=>{Oe(O,"aria-label",ke),G($,I),oe=Ut(K,1,"t svelte-qlz17q",null,oe,{me:n()==="L"}),Jt(Z,`width:${_(l).leftPct??""}%`),G(fe,Qe),G(he,qe),J=Ut(be,1,"t svelte-qlz17q",null,J,{me:n()==="R"}),Jt(q,`width:${_(l).rightPct??""}%`),G(ie,Ve),G(Me,`${Ie??""} `),G(Xe,tt),G(De,` ${j??""}`)},[()=>V("card.lr.aria",{l:en(_(l).left,_(r)),r:en(_(l).right,_(r)),unit:e.m.unit}),()=>V("side.L"),()=>en(_(l).left,_(r)),()=>V("side.R"),()=>en(_(l).right,_(r)),()=>V("card.lr.diff"),()=>id(_(l).diffPct,_(r)),()=>V(Math.abs(_(l).diffPct)<10?"card.lr.small":"card.lr.large")]),me(P,F)};We(L,P=>{_(l)&&t()&&P(C)})}var U=R(L,2);{var E=P=>{var F=Cd(),O=ee(F,!0);ye(X=>G(O,X),[()=>io(_(c).find(X=>typeof X!="string"&&X.severity==="warn"))]),me(P,F)},b=Le(()=>_(c).some(P=>typeof P!="string"&&P.severity==="warn"));We(U,P=>{_(b)&&P(E)})}ye(P=>{h=Ut(u,1,"metric svelte-qlz17q",null,h,{wide:s()||!!_(l)||!!_(o)}),G(g,e.label),G(p,P)},[()=>en(e.m.value,_(r))]),me(i,u),nn()}var Ld=Ae('<span class="chip"> </span>'),Dd=Ae('<p class="tag"> </p>'),Id=Ae('<div class="metrics"></div>'),Ll=Ae('<p class="empty"> </p>'),Ud=Ae('<a><img alt="" loading="lazy" decoding="async"/><span> </span></a>'),Nd=Ae('<figure><img loading="lazy" decoding="async"/><span> </span></figure>'),Od=Ae('<h4> </h4> <div class="thumbs"></div> <p class="p faint" style="font-size:11.5px;margin-top:8px"> </p>',1),Dl=Ae("<h4> </h4><p> </p>",1),Fd=Ae('<button type="button" class="btn"> <!></button>'),Bd=Ae('<h4> </h4> <!> <!> <!> <div class="cta"><button type="button" class="btn"><!> </button> <!></div> <!>',1),kd=Ae("<p> </p>"),fa=Ae("<li> </li>"),zd=Ae('<h4> </h4><ul class="dots"></ul>',1),Hd=Ae('<h4> </h4><ul class="dots conn"></ul>',1),Vd=Ae('<h4> </h4><ul class="dots clin"></ul>',1),pa=Ae("<dt> </dt><dd> </dd>",1),Gd=Ae('<div class="fact"><b> </b> </div>'),Wd=Ae('<!> <!> <!> <!> <!> <h4> </h4> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <!>',1),Xd=Ae('<!> <div class="cta"><button type="button" class="btn"><!> </button> <button type="button" class="btn"><!> </button></div> <!>',1),qd=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"> </span> <button type="button" class="chip"><span class="dot"></span> </button> <!></div> <h2> </h2> <!></div> <div class="ibody"><!></div>',1);function jd(i,e){tn(e,!0);const t=Le(()=>e.ctx.store.s.mode),n=Le(()=>el(e.id)),s=Le(()=>e.ctx.kb.structures[_(n).structure]),r=Le(()=>bu(e.ctx.kb,_(n).structure)),a=Le(()=>to(e.ctx.namer,e.id)),o=Le(()=>{var he,be;return(be=(he=e.ctx.stats)==null?void 0:he.regions)==null?void 0:be[e.id]}),l=Le(()=>zh(e.id)),c=Le(()=>!!_(l)&&e.ctx.store.facts.regions.has(_(l))),u=Le(()=>{var he,be;return _(l)?(be=(he=e.ctx.stats)==null?void 0:he.regions)==null?void 0:be[_(l)]:void 0}),h=Le(()=>{var he;return(he=e.ctx.regionByKey.get(e.id))==null?void 0:he.code}),d=Le(()=>{var he;return((he=_(o))==null?void 0:he.thumbs)??[]}),f=Le(()=>encodeURIComponent(e.ctx.studyId)),g=Le(()=>{var he,be;return Array.isArray((he=_(s))==null?void 0:he.brodmann)?_(s).brodmann.join(", "):((be=_(s))==null?void 0:be.brodmann)||""}),y=he=>`/study/${_(f)}/view/${encodeURIComponent(he.series)}?slice=${he.slice}${_(h)!==void 0?`&hl=${_(h)}`:""}`,m=he=>Qo(`card.view.${he}`)?V(`card.view.${he}`):he,p=he=>e.ctx.store.dispatch({type:"mode",mode:he});var A=qd(),T=ft(A),M=ae(T),H=ae(M);Mt(H,{name:"close",size:16});var L=R(M,2),C=ae(L),U=ee(C,!0),E=R(C,2),b=ae(E),P=R(b,1,!0),F=R(E,2);{var O=he=>{var be=Ld(),J=ee(be,!0);ye(q=>G(J,q),[()=>V(`cat.${_(s).category}`)]),me(he,be)};We(F,he=>{var be;(be=_(s))!=null&&be.category&&he(O)})}var X=R(L,2),$=ee(X,!0),K=R(X,2);{var oe=he=>{var be=Dd(),J=ee(be,!0);ye(()=>G(J,_(s).tagline)),me(he,be)};We(K,he=>{var be;(be=_(s))!=null&&be.tagline&&he(oe)})}var Z=R(T,2),de=ae(Z);{var fe=he=>{var be=Bd(),J=ft(be),q=ee(J,!0),Q=R(J,2);{var ie=j=>{var S=Id();kt(S,21,()=>_(o).measurements,x=>x.key,(x,D)=>{{let Y=Le(()=>e.ctx.measureLabel(_(D))),se=Le(()=>{var ne,Te;return((Te=(ne=_(u))==null?void 0:ne.measurements)==null?void 0:Te.find(le=>le.key===_(D).key))??null});Au(x,{get m(){return _(D)},get label(){return _(Y)},get hemi(){return _(n).hemi},get other(){return _(se)}})}}),me(j,S)},pe=j=>{var S=Ll(),x=ee(S,!0);ye(D=>G(x,D),[()=>V("card.noMeasurements")]),me(j,S)};We(Q,j=>{var S,x;(x=(S=_(o))==null?void 0:S.measurements)!=null&&x.length?j(ie):j(pe,-1)})}var Me=R(Q,2);{var we=j=>{var S=Od(),x=ft(S),D=ee(x,!0),Y=R(x,2);kt(Y,21,()=>_(d),pn,(Te,le)=>{var xe=aa(),je=ft(xe);{var ue=ze=>{var Ce=Ud(),Se=ae(Ce),Ye=R(Se),Ge=ee(Ye,!0);Xr(Ce,rt=>{var z;return(z=qr)==null?void 0:z(rt)}),ye((rt,z,Re,re)=>{Oe(Ce,"href",rt),Oe(Ce,"aria-label",z),Oe(Se,"src",Re),G(Ge,re)},[()=>y(_(le)),()=>V("card.thumb.open",{view:m(_(le).view),n:_(le).slice+1}),()=>Tl(e.ctx.studyId,_(le).img),()=>m(_(le).view)]),me(ze,Ce)},Pe=ze=>{var Ce=Nd(),Se=ae(Ce),Ye=R(Se),Ge=ee(Ye,!0);ye((rt,z,Re)=>{Oe(Se,"src",rt),Oe(Se,"alt",z),G(Ge,Re)},[()=>Tl(e.ctx.studyId,_(le).img),()=>V("card.thumb.recon",{view:m(_(le).view)}),()=>m(_(le).view)]),me(ze,Ce)};We(je,ze=>{_(le).series?ze(ue):ze(Pe,-1)})}me(Te,xe)});var se=R(Y,2),ne=ee(se,!0);ye((Te,le)=>{G(D,Te),G(ne,le)},[()=>V("card.onScan"),()=>V("card.thumb.hint")]),me(j,S)};We(Me,j=>{_(d).length&&j(we)})}var Xe=R(Me,2);{var De=j=>{var S=Dl(),x=ft(S),D=ee(x,!0),Y=R(x),se=ee(Y,!0);ye(ne=>{G(D,ne),G(se,_(s).overview)},[()=>V("card.whatItIs")]),me(j,S)};We(Xe,j=>{var S;(S=_(s))!=null&&S.overview&&j(De)})}var ke=R(Xe,2),I=ae(ke),Qe=ae(I);Mt(Qe,{name:"spark",size:15});var qe=R(Qe,1,!0),Ve=R(I,2);{var Ie=j=>{var S=Fd(),x=ae(S),D=R(x);Mt(D,{name:"arrow",size:15}),ye(Y=>G(x,Y),[()=>V(_(n).hemi==="L"?"card.compareR":"card.compareL")]),at("click",S,()=>e.ctx.act.select({type:"region",id:_(l)},!0)),me(j,S)};We(Ve,j=>{_(c)&&_(l)&&j(Ie)})}var tt=R(ke,2);{let j=Le(()=>V("card.measureDisc"));ys(tt,{get extra(){return _(j)}})}ye((j,S)=>{G(q,j),G(qe,S)},[()=>V("card.yourMeasurements"),()=>V("card.learnMore")]),at("click",I,()=>p("learn")),me(he,be)},ve=he=>{var be=Xd(),J=ft(be);{var q=Qe=>{var qe=Wd(),Ve=ft(qe);{var Ie=te=>{var ce=kd(),ge=ee(ce,!0);ye(()=>G(ge,_(s).overview)),me(te,ce)};We(Ve,te=>{_(s).overview&&te(Ie)})}var tt=R(Ve,2);{var j=te=>{var ce=zd(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge);kt(ct,21,()=>_(s).functions,pn,(lt,st)=>{var Et=fa(),Ot=ee(Et,!0);ye(()=>G(Ot,_(st))),me(lt,Et)}),ye(lt=>G(Ke,lt),[()=>V("card.functions")]),me(te,ce)};We(tt,te=>{var ce;(ce=_(s).functions)!=null&&ce.length&&te(j)})}var S=R(tt,2);{var x=te=>{var ce=Hd(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge);kt(ct,21,()=>_(s).connections,pn,(lt,st)=>{var Et=fa(),Ot=ee(Et,!0);ye(()=>G(Ot,_(st))),me(lt,Et)}),ye(lt=>G(Ke,lt),[()=>V("card.connections")]),me(te,ce)};We(S,te=>{var ce;(ce=_(s).connections)!=null&&ce.length&&te(x)})}var D=R(S,2);{var Y=te=>{var ce=Vd(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge);kt(ct,21,()=>_(s).clinical,pn,(lt,st)=>{var Et=fa(),Ot=ee(Et,!0);ye(()=>G(Ot,_(st))),me(lt,Et)}),ye(lt=>G(Ke,lt),[()=>V("card.clinical")]),me(te,ce)};We(D,te=>{var ce;(ce=_(s).clinical)!=null&&ce.length&&te(Y)})}var se=R(D,2);{var ne=te=>{var ce=Dl(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge),lt=ee(ct,!0);ye(st=>{G(Ke,st),G(lt,_(s).lateralization)},[()=>V("card.lateralization")]),me(te,ce)};We(se,te=>{_(s).lateralization&&te(ne)})}var Te=R(se,2),le=ee(Te,!0),xe=R(Te,2),je=ae(xe);{var ue=te=>{var ce=pa(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge),lt=ee(ct,!0);ye((st,Et)=>{G(Ke,st),G(lt,Et)},[()=>V("card.aka"),()=>_(s).aka.join(", ")]),me(te,ce)};We(je,te=>{var ce;(ce=_(s).aka)!=null&&ce.length&&te(ue)})}var Pe=R(je,2);{var ze=te=>{var ce=pa(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge),lt=ee(ct,!0);ye(st=>{G(Ke,st),G(lt,_(g))},[()=>V("card.brodmann")]),me(te,ce)};We(Pe,te=>{_(g)&&te(ze)})}var Ce=R(Pe,2);{var Se=te=>{var ce=pa(),ge=ft(ce),Ke=ee(ge,!0),ct=R(ge),lt=ee(ct,!0);ye(st=>{G(Ke,st),G(lt,_(s).blood_supply)},[()=>V("card.blood")]),me(te,ce)};We(Ce,te=>{_(s).blood_supply&&te(Se)})}var Ye=R(Ce,2),Ge=ee(Ye,!0),rt=R(Ye),z=ee(rt,!0),Re=R(xe,2);{var re=te=>{var ce=Gd(),ge=ae(ce),Ke=ee(ge,!0),ct=R(ge,1,!0);ye(lt=>{G(Ke,lt),G(ct,_(s).fact)},[()=>V("card.fact")]),me(te,ce)};We(Re,te=>{_(s).fact&&te(re)})}ye((te,ce,ge)=>{G(le,te),G(Ge,ce),G(z,ge)},[()=>V("card.details"),()=>V("card.partOf"),()=>ui(e.ctx.namer,_(r))]),me(Qe,qe)},Q=Qe=>{var qe=Ll(),Ve=ee(qe,!0);ye(Ie=>G(Ve,Ie),[()=>V("card.noKb")]),me(Qe,qe)};We(J,Qe=>{_(s)?Qe(q):Qe(Q,-1)})}var ie=R(J,2),pe=ae(ie),Me=ae(pe);Mt(Me,{name:"square",size:15});var we=R(Me,1,!0),Xe=R(pe,2),De=ae(Xe);Mt(De,{name:"layers",size:15});var ke=R(De,1,!0),I=R(ie,2);ys(I,{}),ye((Qe,qe)=>{G(we,Qe),G(ke,qe)},[()=>V("card.seeOnScan"),()=>V("card.wholeLobe",{name:ui(e.ctx.namer,_(r))})]),at("click",pe,()=>p("mine")),at("click",Xe,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),me(he,be)};We(de,he=>{_(t)==="mine"?he(fe):he(ve,-1)})}ye((he,be,J,q,Q,ie)=>{Oe(M,"aria-label",he),Oe(M,"title",be),G(U,J),Oe(E,"title",q),Jt(b,`background:${Q??""}`),G(P,ie),G($,_(a))},[()=>V("card.close"),()=>V("card.close"),()=>_(n).hemi==="L"?V("card.side.L"):_(n).hemi==="R"?V("card.side.R"):V("card.side.M"),()=>V("m3d.selectLobe",{name:ui(e.ctx.namer,_(r))}),()=>ur(_(r)),()=>ui(e.ctx.namer,_(r))]),at("click",M,()=>e.ctx.act.select(null)),at("click",E,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),me(i,A),nn()}Hn(["click"]);var Yd=Ae('<h4> </h4> <div class="metrics"></div>',1),Kd=Ae('<p class="empty"> </p>'),ma=Ae("<dt> </dt><dd> </dd>",1),Zd=Ae("<li> </li>"),Jd=Ae('<div class="note"><b> </b> <ul class="dots"></ul></div>'),Qd=Ae('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:var(--accent)"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><!> <h4> </h4> <ul class="dots"><li> </li> <li> </li> <li> </li> <li> </li></ul> <h4> </h4> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <ol class="how" style="margin-top:10px"><li> </li> <li> </li> <li> </li></ol> <!> <!></div>',1),$d=Ae('<button type="button" class="btn primary"><!> </button>'),ef=Ae('<button type="button" class="btn"><!> </button>'),tf=Ae("<span> </span>"),nf=Ae('<button type="button" class="lobe-card"><b> </b><!></button>'),sf=Ae('<h4> </h4> <div class="lobes"></div>',1),rf=Ae('<h4> </h4> <p> </p> <div class="cta"><button type="button" class="btn"><!> </button></div>',1),af=Ae('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:#c084fc"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><div class="cta" style="margin-top:0"><!> <!></div> <!> <!> <!></div>',1);function of(i,e){tn(e,!0);const t=Le(()=>e.ctx.store.s.mode),n=Le(()=>od(e.ctx.stats)),s=Le(()=>$a.filter(h=>e.ctx.store.index.lobes.has(h))),r=Le(()=>e.ctx.store.index.vessels.length>0),a=Le(()=>{var h;return(((h=e.ctx.regions)==null?void 0:h.caveats)??[]).map(io)});var o=aa(),l=ft(o);{var c=h=>{var d=Qd(),f=ft(d),g=ae(f),y=ae(g),m=R(ae(y),1,!0),p=R(g,2),A=ee(p,!0),T=R(p,2),M=ee(T,!0),H=R(f,2),L=ae(H);{var C=D=>{var Y=Yd(),se=ft(Y),ne=ee(se,!0),Te=R(se,2);kt(Te,23,()=>_(n),le=>le.key,(le,xe,je)=>{{let ue=Le(()=>e.ctx.measureLabel(_(xe))),Pe=Le(()=>_(je)===0);Au(le,{get m(){return _(xe)},get label(){return _(ue)},get wide(){return _(Pe)}})}}),ye(le=>G(ne,le),[()=>V("card.sum.numbers")]),me(D,Y)},U=D=>{var Y=Kd(),se=ee(Y,!0);ye(ne=>G(se,ne),[()=>V("card.sum.noNumbers")]),me(D,Y)};We(L,D=>{_(n).length?D(C):D(U,-1)})}var E=R(L,2),b=ee(E,!0),P=R(E,2),F=ae(P),O=ee(F,!0),X=R(F,2),$=ee(X,!0),K=R(X,2),oe=ee(K,!0),Z=R(K,2),de=ee(Z,!0),fe=R(P,2),ve=ee(fe,!0),he=R(fe,2),be=ae(he);{var J=D=>{var Y=ma(),se=ft(Y),ne=ee(se,!0),Te=R(se),le=ee(Te,!0);ye(xe=>{G(ne,xe),G(le,e.ctx.regions.backend)},[()=>V("card.sum.backend")]),me(D,Y)};We(be,D=>{var Y;(Y=e.ctx.regions)!=null&&Y.backend&&D(J)})}var q=R(be,2);{var Q=D=>{var Y=ma(),se=ft(Y),ne=ee(se,!0),Te=R(se),le=ee(Te);ye(xe=>{G(ne,xe),G(le,`${e.ctx.status.pipeline??""}${e.ctx.status.version?` · v${e.ctx.status.version}`:""}`)},[()=>V("card.sum.pipeline")]),me(D,Y)};We(q,D=>{var Y;(Y=e.ctx.status)!=null&&Y.pipeline&&D(Q)})}var ie=R(q,2);{var pe=D=>{var Y=ma(),se=ft(Y),ne=ee(se,!0),Te=R(se),le=ee(Te,!0);ye(xe=>{G(ne,xe),G(le,e.ctx.regions.licence)},[()=>V("card.sum.licence")]),me(D,Y)};We(ie,D=>{var Y;(Y=e.ctx.regions)!=null&&Y.licence&&D(pe)})}var Me=R(ie,2),we=ee(Me,!0),Xe=R(Me),De=ee(Xe,!0),ke=R(he,2),I=ae(ke),Qe=ee(I,!0),qe=R(I,2),Ve=ee(qe,!0),Ie=R(qe,2),tt=ee(Ie,!0),j=R(ke,2);{var S=D=>{var Y=Jd(),se=ae(Y),ne=ee(se,!0),Te=R(se,2);kt(Te,21,()=>{var le;return[..._(a),...((le=e.ctx.status)==null?void 0:le.warnings)??[]]},pn,(le,xe)=>{var je=Zd(),ue=ee(je,!0);ye(()=>G(ue,_(xe))),me(le,je)}),ye(le=>G(ne,le),[()=>V("card.sum.limits")]),me(D,Y)};We(j,D=>{var Y,se;(_(a).length||(se=(Y=e.ctx.status)==null?void 0:Y.warnings)!=null&&se.length)&&D(S)})}var x=R(j,2);{let D=Le(()=>V("card.sum.disc"));ys(x,{get extra(){return _(D)}})}ye((D,Y,se,ne,Te,le,xe,je,ue,Pe,ze,Ce,Se)=>{G(m,D),G(A,Y),G(M,se),G(b,ne),G(O,Te),G($,le),G(oe,xe),G(de,je),G(ve,ue),G(we,Pe),G(De,e.ctx.store.index.keys.length),G(Qe,ze),G(Ve,Ce),G(tt,Se)},[()=>V("card.yourScan"),()=>V("card.sum.title"),()=>V("card.sum.tag"),()=>V("card.sum.try"),()=>V("card.sum.try1"),()=>V("card.sum.try2"),()=>V("card.sum.try3"),()=>V("card.sum.try4"),()=>V("card.sum.how"),()=>V("card.sum.regions"),()=>V("card.sum.how1"),()=>V("card.sum.how2"),()=>V("card.sum.how3")]),me(h,d)},u=h=>{var d=af(),f=ft(d),g=ae(f),y=ae(g),m=R(ae(y),1,!0),p=R(g,2),A=ee(p,!0),T=R(p,2),M=ee(T,!0),H=R(f,2),L=ae(H),C=ae(L);{var U=K=>{var oe=$d(),Z=ae(oe);Mt(Z,{name:"play",size:14});var de=R(Z,1,!0);ye(fe=>G(de,fe),[()=>V("card.learn.tour")]),at("click",oe,function(...fe){var ve;(ve=e.ctx.act.tour)==null||ve.apply(this,fe)}),me(K,oe)};We(C,K=>{e.ctx.tourLen&&K(U)})}var E=R(C,2);{var b=K=>{var oe=ef(),Z=ae(oe);Mt(Z,{name:"spark",size:15});var de=R(Z,1,!0);ye(fe=>G(de,fe),[()=>V("m3d.quiz")]),at("click",oe,function(...fe){var ve;(ve=e.ctx.act.quiz)==null||ve.apply(this,fe)}),me(K,oe)};We(E,K=>{e.ctx.store.index.keys.length>1&&K(b)})}var P=R(L,2);{var F=K=>{var oe=sf(),Z=ft(oe),de=ee(Z,!0),fe=R(Z,2);kt(fe,20,()=>_(s),ve=>ve,(ve,he)=>{var be=nf(),J=ae(be),q=ee(J,!0),Q=R(J);{var ie=pe=>{var Me=tf(),we=ee(Me,!0);ye(()=>G(we,e.ctx.kb.lobes[he].tagline)),me(pe,Me)};We(Q,pe=>{var Me;(Me=e.ctx.kb.lobes[he])!=null&&Me.tagline&&pe(ie)})}ye((pe,Me)=>{Jt(be,`--c:${pe??""}`),G(q,Me)},[()=>ur(he),()=>ui(e.ctx.namer,he)]),at("click",be,()=>e.ctx.act.select({type:"lobe",id:he},!0)),me(ve,be)}),ye(ve=>G(de,ve),[()=>V("card.learn.divisions")]),me(K,oe)};We(P,K=>{_(s).length&&K(F)})}var O=R(P,2);{var X=K=>{var oe=rf(),Z=ft(oe),de=ee(Z,!0),fe=R(Z,2),ve=ee(fe,!0),he=R(fe,2),be=ae(he),J=ae(be);Mt(J,{name:"eye",size:15});var q=R(J,1,!0);ye((Q,ie)=>{G(de,Q),G(ve,e.ctx.kb.arteries.overview),G(q,ie)},[()=>V("card.learn.arteries"),()=>V("card.learn.showArteries")]),at("click",be,function(...Q){var ie;(ie=e.ctx.act.showVessels)==null||ie.apply(this,Q)}),me(K,oe)};We(O,K=>{var oe;_(r)&&((oe=e.ctx.kb.arteries)!=null&&oe.overview)&&K(X)})}var $=R(O,2);ys($,{}),ye((K,oe,Z)=>{G(m,K),G(A,oe),G(M,Z)},[()=>V("m3d.mode.learn"),()=>V("card.learn.title"),()=>V("card.learn.tag")]),me(h,d)};We(l,h=>{_(t)==="mine"?h(c):h(u,-1)})}me(i,o),nn()}Hn(["click"]);var lf=Ae("<p> </p>"),cf=Ae('<br/><span class="faint"> </span>',1),uf=Ae("<dt> </dt><dd> <!></dd>",1),hf=Ae('<h4> </h4> <dl class="kv"></dl>',1),df=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot" style="background:#ef4444"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><!> <!> <div class="note"> </div> <!></div>',1);function ff(i,e){tn(e,!0);const t=Le(()=>/neck/i.test(e.id)),n=Le(()=>e.ctx.kb.arteries);var s=df(),r=ft(s),a=ae(r),o=ae(a);Mt(o,{name:"close",size:16});var l=R(a,2),c=ae(l),u=R(ae(c),1,!0),h=R(l,2),d=ee(h,!0),f=R(h,2),g=ee(f,!0),y=R(r,2),m=ae(y);{var p=U=>{var E=lf(),b=ee(E,!0);ye(()=>G(b,_(n).overview)),me(U,E)};We(m,U=>{var E;(E=_(n))!=null&&E.overview&&U(p)})}var A=R(m,2);{var T=U=>{var E=hf(),b=ft(E),P=ee(b,!0),F=R(b,2);kt(F,21,()=>Object.values(_(n).vessels),pn,(O,X)=>{var $=uf(),K=ft($),oe=ee(K,!0),Z=R(K),de=ae(Z),fe=R(de);{var ve=he=>{var be=cf(),J=R(ft(be)),q=ee(J,!0);ye(()=>G(q,_(X).note)),me(he,be)};We(fe,he=>{_(X).note&&he(ve)})}ye(()=>{G(oe,_(X).name),G(de,_(X).supplies)}),me(O,$)}),ye(O=>G(P,O),[()=>V("card.vessel.main")]),me(U,E)},M=Le(()=>{var U;return((U=_(n))==null?void 0:U.vessels)&&Object.keys(_(n).vessels).length});We(A,U=>{_(M)&&U(T)})}var H=R(A,2),L=ee(H,!0),C=R(H,2);ys(C,{}),ye((U,E,b,P,F,O)=>{Oe(a,"aria-label",U),Oe(a,"title",E),G(u,b),G(d,P),G(g,F),G(L,O)},[()=>V("card.close"),()=>V("card.close"),()=>V("card.vessel.kicker"),()=>V(_(t)?"card.vessel.neck":"card.vessel.brain"),()=>V(_(t)?"card.vessel.neck.tag":"card.vessel.brain.tag"),()=>V("card.vessel.caveat")]),at("click",a,()=>e.ctx.act.select(null)),me(i,s),nn()}Hn(["click"]);var pf=Ae('<div class="fade-in"><!></div>'),mf=Ae('<div class="cardx svelte-1yprcvz"><!></div>');function _f(i,e){tn(e,!0);const t=Le(()=>e.ctx.store.s.sel);let n;wn(()=>{var a,o;(a=_(t))==null||a.type,(o=_(t))==null||o.id,e.ctx.store.s.mode,n&&(n.scrollTop=0)});var s=mf(),r=ae(s);_u(r,()=>{var a,o;return`${(a=_(t))==null?void 0:a.type}:${(o=_(t))==null?void 0:o.id}:${e.ctx.store.s.mode}`},a=>{var o=pf(),l=ae(o);{var c=f=>{of(f,{get ctx(){return e.ctx}})},u=f=>{jd(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},h=f=>{vd(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},d=f=>{ff(f,{get ctx(){return e.ctx},get id(){return _(t).id}})};We(l,f=>{_(t)?_(t).type==="region"?f(u,1):_(t).type==="lobe"?f(h,2):f(d,-1):f(c)})}me(a,o)}),An(s,a=>n=a,()=>n),me(i,s),nn()}var Il=Ae('<button type="button" role="radio"> </button>'),gf=Ae('<li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" aria-hidden="true"></span> </span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li>'),vf=Ae('<div class="cp svelte-1x9pj0t"><div class="sec mode svelte-1x9pj0t"><div class="seg svelte-1x9pj0t" role="group"><button type="button"><!> </button> <button type="button"><!> </button></div> <p class="hint svelte-1x9pj0t"> </p></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t" id="cb-l"> </div> <div class="seg wrap svelte-1x9pj0t" role="radiogroup" aria-labelledby="cb-l"></div> <div class="row svelte-1x9pj0t"><span id="pb-l"> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="pb-l"><button type="button" role="radio"> </button> <button type="button" role="radio"> </button></div></div></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t"> </div> <ul class="layers svelte-1x9pj0t" role="list"><!> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:#e2e8f0" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">X</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:var(--accent)" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">I</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li></ul></div> <div class="sec svelte-1x9pj0t"><label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.01" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.005" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <div class="row svelte-1x9pj0t"><span class="faint sm-t svelte-1x9pj0t" id="ax-l"><!> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="ax-l"></div></div></div> <div class="sec tree svelte-1x9pj0t"><!></div></div>');function xf(i,e){tn(e,!0);const t=Le(()=>e.store.s),n=Ce=>e.store.dispatch(Ce),s={hemi_L:wi.frontal,hemi_R:wi.parietal,cerebellum:wi.cerebellum,brainstem:wi.brainstem,deep:wi.subcortical,ventricle:wi.ventricles,vessels:"#ef4444",neck:"#f87171",bone:"#e7e2d3",skin:"#cbd5e1"},r=Le(()=>[{id:"anatomy",label:V("m3d.color.anatomy")},{id:"lobes",label:V("m3d.color.lobes")},{id:"natural",label:V("m3d.color.natural")},...e.dataMaps.map(Ce=>({id:`data:${Ce.key}`,label:e.dataLabel(Ce),title:V("m3d.color.dataTitle",{name:e.dataLabel(Ce)})}))]),a=["y","x","z"],o=Ce=>Math.round(Ce*100);var l=vf(),c=ae(l),u=ae(c),h=ae(u);let d;var f=ae(h);Mt(f,{name:"square",size:15});var g=R(f,1,!0),y=R(h,2);let m;var p=ae(y);Mt(p,{name:"spark",size:15});var A=R(p,1,!0),T=R(u,2),M=ee(T,!0),H=R(c,2),L=ae(H),C=ee(L,!0),U=R(L,2);kt(U,21,()=>_(r),Ce=>Ce.id,(Ce,Se)=>{var Ye=Il();let Ge;var rt=ee(Ye,!0);ye(()=>{Oe(Ye,"aria-checked",_(t).colorBy===_(Se).id),Oe(Ye,"title",_(Se).title),Ge=Ut(Ye,1,"svelte-1x9pj0t",null,Ge,{on:_(t).colorBy===_(Se).id}),G(rt,_(Se).label)}),at("click",Ye,()=>n({type:"colorBy",colorBy:_(Se).id})),me(Ce,Ye)});var E=R(U,2),b=ae(E),P=ee(b,!0),F=R(b,2),O=ae(F);let X;var $=ee(O,!0),K=R(O,2);let oe;var Z=ee(K,!0),de=R(H,2),fe=ae(de),ve=ee(fe,!0),he=R(fe,2),be=ae(he);kt(be,16,()=>e.store.index.layers,Ce=>Ce,(Ce,Se)=>{var Ye=gf(),Ge=ae(Ye);let rt;var z=ae(Ge),Re=ae(z),re=R(Re,1,!0);ye(te=>{Oe(Ge,"aria-checked",!!_(t).show[Se]),rt=Ut(Ge,1,"tg svelte-1x9pj0t",null,rt,{on:!!_(t).show[Se]}),Jt(Re,`background:${s[Se]??""}`),G(re,te)},[()=>V(`m3d.layer.${Se}`)]),at("click",Ge,()=>n({type:"layer",layer:Se})),me(Ce,Ye)});var J=R(be,2),q=ae(J);let Q;var ie=ae(q),pe=R(ae(ie)),Me=R(J,2),we=ae(Me);let Xe;var De=ae(we),ke=R(ae(De)),I=R(de,2),Qe=ae(I),qe=ae(Qe),Ve=ee(qe,!0),Ie=R(qe,2),tt=R(Ie,2),j=ee(tt),S=R(Qe,2),x=ae(S),D=ee(x,!0),Y=R(x,2),se=R(Y,2),ne=ee(se,!0),Te=R(S,2),le=ae(Te),xe=ae(le);Mt(xe,{name:"cut",size:13});var je=R(xe),ue=R(le,2);kt(ue,21,()=>a,pn,(Ce,Se)=>{var Ye=Il();let Ge;var rt=ee(Ye,!0);ye(z=>{Oe(Ye,"aria-checked",_(t).cutAxis===_(Se)),Ge=Ut(Ye,1,"svelte-1x9pj0t",null,Ge,{on:_(t).cutAxis===_(Se)}),G(rt,z)},[()=>V(`m3d.axis.${_(Se)}`)]),at("click",Ye,()=>n({type:"cutAxis",axis:_(Se)})),me(Ce,Ye)});var Pe=R(I,2),ze=ae(Pe);vu(ze,()=>e.tree),ye((Ce,Se,Ye,Ge,rt,z,Re,re,te,ce,ge,Ke,ct,lt,st,Et,Ot,Jn,_i,_n,Qn,gi)=>{Oe(u,"aria-label",Ce),Oe(h,"aria-pressed",_(t).mode==="mine"),d=Ut(h,1,"svelte-1x9pj0t",null,d,{on:_(t).mode==="mine"}),G(g,Se),Oe(y,"aria-pressed",_(t).mode==="learn"),m=Ut(y,1,"svelte-1x9pj0t",null,m,{on:_(t).mode==="learn"}),G(A,Ye),G(M,Ge),G(C,rt),G(P,z),Oe(O,"aria-checked",_(t).pickBy==="structure"),X=Ut(O,1,"svelte-1x9pj0t",null,X,{on:_(t).pickBy==="structure"}),G($,Re),Oe(K,"aria-checked",_(t).pickBy==="lobe"),oe=Ut(K,1,"svelte-1x9pj0t",null,oe,{on:_(t).pickBy==="lobe"}),G(Z,re),G(ve,te),Oe(q,"aria-checked",_(t).xray),Q=Ut(q,1,"tg svelte-1x9pj0t",null,Q,{on:_(t).xray}),Oe(q,"title",ce),G(pe,`${ge??""} `),Oe(we,"aria-checked",_(t).isolate),Xe=Ut(we,1,"tg svelte-1x9pj0t",null,Xe,{on:_(t).isolate}),we.disabled=!_(t).sel,Oe(we,"title",Ke),G(ke,`${ct??""} `),G(Ve,lt),Al(Ie,_(t).explode),Jt(Ie,`--p:${st??""}%`),Oe(Ie,"aria-valuetext",`${Et??""}%`),G(j,`${Ot??""}%`),G(D,Jn),Al(Y,_(t).cut),Jt(Y,`--p:${_i??""}%`),Oe(Y,"aria-valuetext",_n),G(ne,Qn),G(je,` ${gi??""}`)},[()=>V("m3d.mode"),()=>V("m3d.mode.mine"),()=>V("m3d.mode.learn"),()=>V(_(t).mode==="mine"?"m3d.mode.mine.hint":"m3d.mode.learn.hint"),()=>V("m3d.colorBy"),()=>V("m3d.pickBy"),()=>V("m3d.pickBy.structure"),()=>V("m3d.pickBy.lobe"),()=>V("m3d.layers"),()=>V("m3d.xray.title"),()=>V("m3d.xray"),()=>V("m3d.isolate.title"),()=>V("m3d.isolate"),()=>V("m3d.explode"),()=>o(_(t).explode),()=>o(_(t).explode),()=>o(_(t).explode),()=>V("m3d.cut"),()=>o(_(t).cut),()=>_(t).cut>=.999?V("m3d.cut.off"):`${o(_(t).cut)}%`,()=>_(t).cut>=.999?V("m3d.cut.off"):`${o(_(t).cut)}%`,()=>V("m3d.cut.axis")]),at("click",h,()=>n({type:"mode",mode:"mine"})),at("click",y,()=>n({type:"mode",mode:"learn"})),at("click",O,()=>n({type:"pickBy",pickBy:"structure"})),at("click",K,()=>n({type:"pickBy",pickBy:"lobe"})),at("click",q,()=>n({type:"xray"})),at("click",we,()=>n({type:"isolate"})),at("input",Ie,Ce=>n({type:"explode",value:+Ce.currentTarget.value})),at("input",Y,Ce=>n({type:"cut",value:+Ce.currentTarget.value})),me(i,l),nn()}Hn(["click","input"]);function ks(i,e){if(!i.length)return NaN;const t=(i.length-1)*Math.max(0,Math.min(1,e)),n=Math.floor(t),s=Math.ceil(t);return i[n]+(i[s]-i[n])*(t-n)}function yf(i,e=2){const t=new Map;for(const[s,r]of Object.entries((i==null?void 0:i.regions)??{}))for(const a of r.measurements??[]){if(typeof a.value!="number"||!Number.isFinite(a.value))continue;let o=t.get(a.key);o||t.set(a.key,o={label:a.label||a.key,unit:a.unit??"",values:new Map}),o.values.set(s,a.value)}const n=[];for(const[s,r]of t){if(r.values.size<e)continue;const a=[...r.values.values()].sort((u,h)=>u-h),o=a[0]<0&&a[a.length-1]>0;let l,c;if(o){const u=a.map(Math.abs).sort((h,d)=>h-d);c=ks(u,.95)||1,l=-c}else{const u=ks(a,.25),h=ks(a,.75),d=h-u;l=Math.max(ks(a,.05),u-1.5*d),c=Math.min(ks(a,.95),h+1.5*d),c>l||(l=a[0],c=a[a.length-1]),c>l||(c=l+1)}n.push({key:s,label:r.label,unit:r.unit,values:r.values,lo:l,hi:c,diverging:o,stops:o?Kh:Eu})}return n}function Mf(i,e){const t=i.values.get(e);return t===void 0?ta(Su):ed((t-i.lo)/(i.hi-i.lo),i.stops)}const bf=i=>[i.lo,(i.lo+i.hi)/2,i.hi];var Sf=Ae('<button type="button" class="svelte-1r8wc48"> </button>'),Ul=Ae('<button type="button"><!> </button>'),Ef=Ae('<span class="sep svelte-1r8wc48" aria-hidden="true"></span> <!> <!>',1),Tf=Ae('<div class="dock panel svelte-1r8wc48" role="toolbar"><button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-controls"><!></button> <div class="seg svelte-1r8wc48" role="group"></div> <span class="sep svelte-1r8wc48" aria-hidden="true"></span> <button type="button"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <!> <button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-card"><!></button></div>');function Af(i,e){tn(e,!0);const t=["left","front","top","right","back","below","inside"],n=Le(()=>e.store.s);var s=Tf(),r=ae(s),a=ae(r);Mt(a,{name:"sliders",size:17});var o=R(r,2);kt(o,21,()=>t,pn,(T,M)=>{var H=Sf(),L=ee(H,!0);ye((C,U)=>{Oe(H,"title",C),G(L,U)},[()=>V(`m3d.view.${_(M)}.title`),()=>V(`m3d.view.${_(M)}`)]),at("click",H,()=>e.onview(_(M))),me(T,H)});var l=R(o,4);let c;var u=ae(l);Mt(u,{name:"rotate",size:17});var h=R(l,2),d=ae(h);Mt(d,{name:"camera",size:17});var f=R(h,2),g=ae(f);Mt(g,{name:"reset",size:17});var y=R(f,2);{var m=T=>{var M=Ef(),H=R(ft(M),2);{var L=E=>{var b=Ul();let P;var F=ae(b);Mt(F,{name:"play",size:14});var O=R(F,1,!0);ye(X=>{P=Ut(b,1,"btn svelte-1r8wc48",null,P,{on:!!_(n).tour}),G(O,X)},[()=>V("m3d.tour")]),at("click",b,function(...X){var $;($=e.ontour)==null||$.apply(this,X)}),me(E,b)};We(H,E=>{e.canTour&&E(L)})}var C=R(H,2);{var U=E=>{var b=Ul();let P;var F=ae(b);Mt(F,{name:"spark",size:15});var O=R(F,1,!0);ye(X=>{P=Ut(b,1,"btn svelte-1r8wc48",null,P,{on:!!_(n).quiz}),G(O,X)},[()=>V("m3d.quiz")]),at("click",b,function(...X){var $;($=e.onquiz)==null||$.apply(this,X)}),me(E,b)};We(C,E=>{e.canQuiz&&E(U)})}me(T,M)};We(y,T=>{_(n).mode==="learn"&&T(m)})}var p=R(y,2),A=ae(p);Mt(A,{name:"card",size:17}),ye((T,M,H,L,C,U,E,b,P,F,O,X)=>{Oe(s,"aria-label",T),Oe(r,"aria-expanded",e.controlsOpen),Oe(r,"aria-label",M),Oe(r,"title",H),Oe(o,"aria-label",L),c=Ut(l,1,"btn icon svelte-1r8wc48",null,c,{on:_(n).rotate}),Oe(l,"aria-pressed",_(n).rotate),Oe(l,"aria-label",C),Oe(l,"title",U),Oe(h,"aria-label",E),Oe(h,"title",b),Oe(f,"aria-label",P),Oe(f,"title",F),Oe(p,"aria-expanded",e.cardOpen),Oe(p,"aria-label",O),Oe(p,"title",X)},[()=>V("m3d.dock"),()=>V("m3d.controls"),()=>V("m3d.controls"),()=>V("m3d.views"),()=>V("m3d.rotate"),()=>V("m3d.rotate"),()=>V("m3d.shot"),()=>V("m3d.shot"),()=>V("m3d.reset"),()=>V("m3d.reset"),()=>V("m3d.card"),()=>V("m3d.card")]),at("click",r,function(...T){var M;(M=e.ontoggleControls)==null||M.apply(this,T)}),at("click",l,()=>e.store.dispatch({type:"rotate"})),at("click",h,function(...T){var M;(M=e.onshot)==null||M.apply(this,T)}),at("click",f,function(...T){var M;(M=e.onreset)==null||M.apply(this,T)}),at("click",p,function(...T){var M;(M=e.ontoggleCard)==null||M.apply(this,T)}),me(i,s),nn()}Hn(["click"]);var wf=Ae('<div class="legend panel svelte-qe47ma" role="figure"><div class="ttl svelte-qe47ma"><span> </span><span> </span></div> <div class="grad svelte-qe47ma"></div> <div class="ticks svelte-qe47ma"><span> </span> <span> </span> <span> </span></div> <div class="nd svelte-qe47ma"><i class="svelte-qe47ma"></i> </div></div>');function Rf(i,e){tn(e,!0);const t=Le(()=>bf(e.map)),n=Le(()=>e.map.diverging&&/asym/i.test(e.map.key));var s=wf(),r=ae(s),a=ae(r),o=ee(a,!0),l=R(a),c=ee(l,!0),u=R(r,2),h=R(u,2),d=ae(h),f=ee(d,!0),g=R(d,2),y=ee(g,!0),m=R(g,2),p=ee(m,!0),A=R(h,2),T=ae(A),M=R(T);ye((H,L,C,U,E,b,P)=>{Oe(s,"aria-label",H),G(o,e.label),G(c,e.map.unit),Jt(u,`background:${L??""}`),G(f,C),G(y,U),G(p,E),Jt(T,`background:${Su}`),G(M,`${b??""} · ${P??""}`)},[()=>V("m3d.legend",{name:e.label}),()=>td(e.map.stops),()=>_(n)?V("m3d.legend.rLarger",{v:en(Math.abs(_(t)[0]),On.lang)}):en(_(t)[0],On.lang),()=>_(n)?V("m3d.legend.equal"):en(_(t)[1],On.lang),()=>_(n)?V("m3d.legend.lLarger",{v:en(_(t)[2],On.lang)}):en(_(t)[2],On.lang)+(e.map.diverging?"":"+"),()=>V("m3d.legend.noData"),()=>V("m3d.legend.note")]),me(i,s),nn()}var Cf=Ae('<span class="fb ok svelte-1xhmue8"> </span>'),Pf=Ae('<span class="fb bad svelte-1xhmue8"> </span>'),Lf=Ae('<div role="status" aria-live="polite"><span class="q svelte-1xhmue8"> <b class="svelte-1xhmue8"> </b></span> <span class="score svelte-1xhmue8"> </span> <!> <button type="button" class="btn svelte-1xhmue8"> </button> <button type="button" class="btn icon svelte-1xhmue8"><!></button></div>');function Df(i,e){tn(e,!0);var t=Lf();let n;var s=ae(t),r=ae(s),a=R(r),o=ee(a,!0),l=R(s,2),c=ee(l),u=R(l,2);{var h=p=>{var A=Cf(),T=ee(A,!0);ye(M=>G(T,M),[()=>V("m3d.quiz.right")]),me(p,A)},d=p=>{var A=Pf(),T=ee(A,!0);ye(M=>G(T,M),[()=>V("m3d.quiz.wrong",{name:e.name(e.quiz.last.picked)})]),me(p,A)};We(u,p=>{var A;(A=e.quiz.last)!=null&&A.ok?p(h):e.quiz.last&&e.quiz.last.picked&&p(d,1)})}var f=R(u,2),g=ee(f,!0),y=R(f,2),m=ae(y);Mt(m,{name:"close",size:16}),ye((p,A,T,M,H,L)=>{var C,U;n=Ut(t,1,"banner panel svelte-1xhmue8",null,n,{ok:((C=e.quiz.last)==null?void 0:C.ok)===!0,bad:((U=e.quiz.last)==null?void 0:U.ok)===!1}),G(r,`${p??""} `),G(o,A),Oe(l,"aria-label",T),G(c,`${e.quiz.score??""}/${e.quiz.n??""}`),f.disabled=e.quiz.revealing,G(g,M),Oe(y,"aria-label",H),Oe(y,"title",L)},[()=>V("m3d.quiz.ask"),()=>e.name(e.quiz.target),()=>V("m3d.quiz.score",{s:e.quiz.score,n:e.quiz.n}),()=>V("m3d.quiz.skip"),()=>V("m3d.quiz.end"),()=>V("m3d.quiz.end")]),at("click",f,function(...p){var A;(A=e.onskip)==null||A.apply(this,p)}),at("click",y,function(...p){var A;(A=e.onend)==null||A.apply(this,p)}),me(i,t),nn()}Hn(["click"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="170",ms={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,Nl=1,Uf=2,wu=1,Nf=2,oi=3,qn=0,ln=1,Mn=2,Di=0,_s=1,Ol=2,Fl=3,Bl=4,Of=5,Gi=100,Ff=101,Bf=102,kf=103,zf=104,Hf=200,Vf=201,Gf=202,Wf=203,so=204,ro=205,Xf=206,qf=207,jf=208,Yf=209,Kf=210,Zf=211,Jf=212,Qf=213,$f=214,ao=0,oo=1,lo=2,Ms=3,co=4,uo=5,ho=6,fo=7,Ru=0,ep=1,tp=2,Ii=0,np=1,ip=2,sp=3,Cu=4,rp=5,ap=6,op=7,kl="attached",lp="detached",Pu=300,bs=301,Ss=302,po=303,mo=304,oa=306,Es=1e3,Ci=1001,na=1002,cn=1003,Lu=1004,Ks=1005,bn=1006,jr=1007,hi=1008,pi=1009,Du=1010,Iu=1011,tr=1012,nl=1013,ji=1014,kn=1015,hr=1016,il=1017,sl=1018,Ts=1020,Uu=35902,Nu=1021,Ou=1022,Rn=1023,Fu=1024,Bu=1025,gs=1026,As=1027,rl=1028,al=1029,ku=1030,ol=1031,ll=1033,Yr=33776,Kr=33777,Zr=33778,Jr=33779,_o=35840,go=35841,vo=35842,xo=35843,yo=36196,Mo=37492,bo=37496,So=37808,Eo=37809,To=37810,Ao=37811,wo=37812,Ro=37813,Co=37814,Po=37815,Lo=37816,Do=37817,Io=37818,Uo=37819,No=37820,Oo=37821,Qr=36492,Fo=36494,Bo=36495,zu=36283,ko=36284,zo=36285,Ho=36286,nr=2300,ir=2301,_a=2302,zl=2400,Hl=2401,Vl=2402,cp=2500,up=0,Hu=1,Vo=2,hp=3200,dp=3201,Vu=0,fp=1,Ri="",Wt="srgb",hn="srgb-linear",la="linear",Ct="srgb",Zi=7680,Gl=519,pp=512,mp=513,_p=514,Gu=515,gp=516,vp=517,xp=518,yp=519,Go=35044,Wl="300 es",di=2e3,ia=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const Qs=Math.PI/180,ws=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function cl(i,e){return(i%e+e)%e}function Mp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bp(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function Sp(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function Ep(i,e=1){return e-Math.abs(cl(i,e*2)-e)}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rp(i,e){return i+Math.random()*(e-i)}function Cp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(Xl=i);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(i){return i*Qs}function Dp(i){return i*ws}function Ip(i){return(i&i-1)===0&&i!==0}function Up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wu={DEG2RAD:Qs,RAD2DEG:ws,generateUUID:zn,clamp:Zt,euclideanModulo:cl,mapLinear:Mp,inverseLerp:bp,lerp:$s,damp:Sp,pingpong:Ep,smoothstep:Tp,smootherstep:Ap,randInt:wp,randFloat:Rp,randFloatSpread:Cp,seededRandom:Pp,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Ip,ceilPowerOfTwo:Up,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Op,normalize:wt,denormalize:Fn};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,s,r,a,o,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],A=s[1],T=s[4],M=s[7],H=s[2],L=s[5],C=s[8];return r[0]=a*y+o*A+l*H,r[3]=a*m+o*T+l*L,r[6]=a*p+o*M+l*C,r[1]=c*y+u*A+h*H,r[4]=c*m+u*T+h*L,r[7]=c*p+u*M+h*C,r[2]=d*y+f*A+g*H,r[5]=d*m+f*T+g*L,r[8]=d*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new dt;function Xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){const i=sr("canvas");return i.style.display="block",i}const ql={};function Zs(i){i in ql||(ql[i]=!0,console.warn(i))}function Bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jl=[.64,.33,.3,.6,.15,.06],Yl=[.2126,.7152,.0722],Kl=[.3127,.329],Zl=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[hn]:{primaries:jl,whitePoint:Kl,transfer:la,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:Yl,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:jl,whitePoint:Kl,transfer:Ct,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:Yl,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let Ji;class Hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=sr("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vp=0;class qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0;class Kt extends Ki{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ci,s=Ci,r=bn,a=hi,o=Rn,l=pi,c=Kt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=zn(),this.name="",this.source=new qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Pu;Kt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(f+1)/2,H=(p+1)/2,L=(u+d)/4,C=(h+y)/4,U=(g+m)/4;return T>M&&T>H?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=L/n,r=C/n):M>H?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=L/s,r=U/s):H<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(H),n=C/r,s=U/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-y)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ju extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*y,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const H=Math.sqrt(T),L=Math.atan2(H,p*A);m=Math.sin(m*L)/H,o=Math.sin(o*L)/H}const M=o*A;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+y*M,m===1-o){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new k,Ql=new jn;class Cn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),gr.subVectors(this.max,zs),Qi.subVectors(e.a,zs),$i.subVectors(e.b,zs),es.subVectors(e.c,zs),yi.subVectors($i,Qi),Mi.subVectors(es,$i),Ui.subVectors(Qi,es);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Ui.z,Ui.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Ui.z,0,-Ui.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Ui.y,Ui.x,0];return!ya(t,Qi,$i,es,gr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Qi,$i,es,gr))?!1:(vr.crossVectors(yi,Mi),t=[vr.x,vr.y,vr.z],ya(t,Qi,$i,es,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],In=new k,_r=new Cn,Qi=new k,$i=new k,es=new k,yi=new k,Mi=new k,Ui=new k,zs=new k,gr=new k,vr=new k,Ni=new k;function ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qp=new Cn,Hs=new k,Ma=new k;class Kn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Ma)),this.expandByPoint(Hs.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,ba=new k,xr=new k,bi=new k,Sa=new k,yr=new k,Ea=new k;class Ds{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ba.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=bi.dot(this.direction),l=-bi.dot(xr),c=bi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ba).addScaledVector(xr,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){Sa.subVectors(t,e),yr.subVectors(n,e),Ea.crossVectors(Sa,yr);let a=this.direction.dot(Ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(yr.crossVectors(bi,yr));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(bi));if(c<0||l+c>a)return null;const u=-o*bi.dot(Ea);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Yp)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Si.crossVectors(n,xn),Si.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Si.crossVectors(n,xn)),Si.normalize(),Mr.crossVectors(xn,Si),s[0]=Si.x,s[4]=Mr.x,s[8]=xn.x,s[1]=Si.y,s[5]=Mr.y,s[9]=xn.y,s[2]=Si.z,s[6]=Mr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],A=n[3],T=n[7],M=n[11],H=n[15],L=s[0],C=s[4],U=s[8],E=s[12],b=s[1],P=s[5],F=s[9],O=s[13],X=s[2],$=s[6],K=s[10],oe=s[14],Z=s[3],de=s[7],fe=s[11],ve=s[15];return r[0]=a*L+o*b+l*X+c*Z,r[4]=a*C+o*P+l*$+c*de,r[8]=a*U+o*F+l*K+c*fe,r[12]=a*E+o*O+l*oe+c*ve,r[1]=u*L+h*b+d*X+f*Z,r[5]=u*C+h*P+d*$+f*de,r[9]=u*U+h*F+d*K+f*fe,r[13]=u*E+h*O+d*oe+f*ve,r[2]=g*L+y*b+m*X+p*Z,r[6]=g*C+y*P+m*$+p*de,r[10]=g*U+y*F+m*K+p*fe,r[14]=g*E+y*O+m*oe+p*ve,r[3]=A*L+T*b+M*X+H*Z,r[7]=A*C+T*P+M*$+H*de,r[11]=A*U+T*F+M*K+H*fe,r[15]=A*E+T*O+M*oe+H*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],A=h*m*c-y*d*c+y*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,M=u*y*c-g*h*c+g*o*f-a*y*f-u*o*p+a*h*p,H=g*h*l-u*y*l-g*o*d+a*y*d+u*o*m-a*h*m,L=t*A+n*T+s*M+r*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=A*C,e[1]=(y*d*r-h*m*r-y*s*f+n*m*f+h*s*p-n*d*p)*C,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*C,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*C,e[4]=T*C,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=M*C,e[9]=(g*h*r-u*y*r-g*n*f+t*y*f+u*n*p-t*h*p)*C,e[10]=(a*y*r-g*o*r+g*n*c-t*y*c-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*C,e[12]=H*C,e[13]=(u*y*s-g*h*s+g*n*d-t*y*d-u*n*m+t*h*m)*C,e[14]=(g*o*s-a*y*s-g*n*l+t*y*l+a*n*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,y=a*u,m=a*h,p=o*h,A=l*c,T=l*u,M=l*h,H=n.x,L=n.y,C=n.z;return s[0]=(1-(y+p))*H,s[1]=(f+M)*H,s[2]=(g-T)*H,s[3]=0,s[4]=(f-M)*L,s[5]=(1-(d+p))*L,s[6]=(m+A)*L,s[7]=0,s[8]=(g+T)*C,s[9]=(m-A)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const c=1/r,u=1/a,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=di){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===di)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ia)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=di){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,f=(n+s)*u;let g,y;if(o===di)g=(a+r)*h,y=-2*h;else if(o===ia)g=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new k,Un=new ut,jp=new k(0,0,0),Yp=new k(1,1,1),Si=new k,Mr=new k,xn=new k,$l=new ut,ec=new jn;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kp=0;const tc=new k,ns=new jn,ii=new ut,br=new k,Vs=new k,Zp=new k,Jp=new jn,nc=new k(1,0,0),ic=new k(0,1,0),sc=new k(0,0,1),rc={type:"added"},Qp={type:"removed"},is={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Nt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new k,t=new Yn,n=new jn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new dt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Vs,br,this.up):ii.lookAt(br,Vs,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(ii),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rc),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rc),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new k,si=new k,Aa=new k,ri=new k,ss=new k,rs=new k,ac=new k,wa=new k,Ra=new k,Ca=new k,Pa=new St,La=new St,Da=new St;class Bn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),si.subVectors(n,t),Aa.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(si),l=Nn.dot(Aa),c=si.dot(si),u=si.dot(Aa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),wa.subVectors(e,n);const l=ss.dot(wa),c=rs.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,s);const u=ss.dot(Ra),h=rs.dot(Ra);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ss,a);Ca.subVectors(e,r);const f=ss.dot(Ca),g=rs.dot(Ca);if(g>=0&&f<=g)return t.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(rs,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ac.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(ac,o);const p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=cl(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ia(a,r,e+1/3),this.g=Ia(a,r,e),this.b=Ia(a,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return yt.fromWorkingColorSpace($t.copy(this),e),Math.round(Zt($t.r*255,0,255))*65536+Math.round(Zt($t.g*255,0,255))*256+Math.round(Zt($t.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Wt){yt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Sr);const n=$s(Ei.h,Sr.h,t),s=$s(Ei.s,Sr.s,t),r=$s(Ei.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new it;it.NAMES=Yu;let $p=0;class Xn extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=zn(),this.name="",this.blending=_s,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends Xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new k,Er=new ot;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Ku extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zu extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pn extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let em=0;const En=new ut,Ua=new Nt,as=new k,yn=new Cn,Gs=new Cn,Yt=new k;class Vn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?Zu:Ku)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(yn.min,Gs.min),yn.expandByPoint(Yt),Yt.addVectors(yn.max,Gs.max),yn.expandByPoint(Yt)):(yn.expandByPoint(Gs.min),yn.expandByPoint(Gs.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),Yt.add(as)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new k,l[U]=new k;const c=new k,u=new k,h=new k,d=new ot,f=new ot,g=new ot,y=new k,m=new k;function p(U,E,b){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[U].add(y),o[E].add(y),o[b].add(y),l[U].add(m),l[E].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,E=A.length;U<E;++U){const b=A[U],P=b.start,F=b.count;for(let O=P,X=P+F;O<X;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new k,M=new k,H=new k,L=new k;function C(U){H.fromBufferAttribute(s,U),L.copy(H);const E=o[U];T.copy(E),T.sub(H.multiplyScalar(H.dot(E))).normalize(),M.crossVectors(L,E);const P=M.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,P)}for(let U=0,E=A.length;U<E;++U){const b=A[U],P=b.start,F=b.count;for(let O=P,X=P+F;O<X;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new ut,Oi=new Ds,Tr=new Kn,lc=new k,Ar=new k,wr=new k,Rr=new k,Na=new k,Cr=new k,cc=new k,Pr=new k;class It extends Nt{constructor(e=new Vn,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Na.fromBufferAttribute(h,e),a?Cr.addScaledVector(Na,u):Cr.addScaledVector(Na.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Tr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Tr,lc)===null||Oi.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,H=T;M<H;M+=3){const L=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);s=Lr(this,p,e,n,c,u,h,L,C,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const A=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Lr(this,a,e,n,c,u,h,A,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,H=T;M<H;M+=3){const L=M,C=M+1,U=M+2;s=Lr(this,p,e,n,c,u,h,L,C,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const A=m,T=m+1,M=m+2;s=Lr(this,a,e,n,c,u,h,A,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tm(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,wr),i.getVertexPosition(c,Rr);const u=tm(i,e,t,n,Ar,wr,Rr,cc);if(u){const h=new k;Bn.getBarycoord(cc,Ar,wr,Rr,h),s&&(u.uv=Bn.getInterpolatedAttribute(s,o,l,c,h,new ot)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,o,l,c,h,new ot)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Bn.getNormal(Ar,wr,Rr,d.normal),u.face=d,u.barycoord=h}return u}class Is extends Vn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(h,2));function g(y,m,p,A,T,M,H,L,C,U,E){const b=M/C,P=H/U,F=M/2,O=H/2,X=L/2,$=C+1,K=U+1;let oe=0,Z=0;const de=new k;for(let fe=0;fe<K;fe++){const ve=fe*P-O;for(let he=0;he<$;he++){const be=he*b-F;de[y]=be*A,de[m]=ve*T,de[p]=X,c.push(de.x,de.y,de.z),de[y]=0,de[m]=0,de[p]=L>0?1:-1,u.push(de.x,de.y,de.z),h.push(he/C),h.push(1-fe/U),oe+=1}}for(let fe=0;fe<U;fe++)for(let ve=0;ve<C;ve++){const he=d+ve+$*fe,be=d+ve+$*(fe+1),J=d+(ve+1)+$*(fe+1),q=d+(ve+1)+$*fe;l.push(he,be,q),l.push(be,J,q),Z+=6}o.addGroup(f,Z,E),f+=Z,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function nm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const im={clone:Rs,merge:an};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new k,uc=new ot,hc=new ot;class on extends Qu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,uc,hc),t.subVectors(hc,uc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,ls=1;class am extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(os,ls,e,t);s.layers=this.layers,this.add(s);const r=new on(os,ls,e,t);r.layers=this.layers,this.add(r);const a=new on(os,ls,e,t);a.layers=this.layers,this.add(a);const o=new on(os,ls,e,t);o.layers=this.layers,this.add(o);const l=new on(os,ls,e,t);l.layers=this.layers,this.add(l);const c=new on(os,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends Kt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class om extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $u(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Is(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Di});r.uniforms.tEquirect.value=t;const a=new It(s,r),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=bn),new am(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Oa=new k,lm=new k,cm=new dt;class ci{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oa.subVectors(n,t).cross(lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cm.getNormalMatrix(e),s=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Kn,Dr=new k;class hl{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],A=s[13],T=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+u,m+g,M+A).normalize(),n[3].setComponents(l-a,d-u,m-g,M-A).normalize(),n[4].setComponents(l-o,d-h,m-y,M-T).normalize(),t===di)n[5].setComponents(l+o,d+h,m+y,M+T).normalize();else if(t===ia)n[5].setComponents(o,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function um(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ca extends Vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let T=0;T<c;T++){const M=T*h-r;g.push(M,-A,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const T=A+c*p,M=A+c*(p+1),H=A+1+c*(p+1),L=A+1+c*p;f.push(T,M,L),f.push(M,H,L)}this.setIndex(f),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(y,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.widthSegments,e.heightSegments)}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Om=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:hm,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:_m,aomap_fragment:gm,aomap_pars_fragment:vm,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:bm,bsdfs:Sm,iridescence_fragment:Em,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Im,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Fm,displacementmap_vertex:Bm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i_,envmap_vertex:jm,fog_vertex:Ym,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:$m,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:u_,lights_fragment_maps:h_,lights_fragment_end:d_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:__,map_fragment:g_,map_pars_fragment:v_,map_particle_fragment:x_,map_particle_pars_fragment:y_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:b_,morphinstance_vertex:S_,morphcolor_vertex:E_,morphnormal_vertex:T_,morphtarget_pars_vertex:A_,morphtarget_vertex:w_,normal_fragment_begin:R_,normal_fragment_maps:C_,normal_pars_fragment:P_,normal_pars_vertex:L_,normal_vertex:D_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:F_,opaque_fragment:B_,packing:k_,premultiplied_alpha_fragment:z_,project_vertex:H_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:j_,shadowmap_vertex:Y_,shadowmask_pars_fragment:K_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:Q_,skinnormal_vertex:$_,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:ug,background_frag:hg,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:_g,depth_frag:gg,distanceRGBA_vert:vg,distanceRGBA_frag:xg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:bg,linedashed_frag:Sg,meshbasic_vert:Eg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:wg,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ig,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:Og,meshtoon_frag:Fg,points_vert:Bg,points_frag:kg,shadow_vert:zg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Gg},Be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Wn={basic:{uniforms:an([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:an([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:an([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:an([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:an([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:an([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:an([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:an([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:an([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:an([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:an([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:an([Be.common,Be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:an([Be.lights,Be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wn.physical={uniforms:an([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ir={r:0,b:0,g:0},Bi=new Yn,Wg=new ut;function Xg(i,e,t,n,s,r,a){const o=new it(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function y(A){let T=!1;const M=g(A);M===null?p(o,l):M&&M.isColor&&(p(M,1),T=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,a):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===oa)?(u===void 0&&(u=new It(new Is(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Rs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(T.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Bi)),u.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ct,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new It(new ca(2,2),new mi({name:"BackgroundMaterial",uniforms:Rs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,T){A.getRGB(Ir,Ju(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:y,addToRenderList:m}}function qg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,P,F,O,X){let $=!1;const K=h(O,F,P);r!==K&&(r=K,c(r.object)),$=f(b,O,F,X),$&&g(b,O,F,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(b,P,F,O),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,F){const O=F.wireframe===!0;let X=n[b.id];X===void 0&&(X={},n[b.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let K=$[O];return K===void 0&&(K=d(l()),$[O]=K),K}function d(b){const P=[],F=[],O=[];for(let X=0;X<t;X++)P[X]=0,F[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,F,O){const X=r.attributes,$=P.attributes;let K=0;const oe=F.getAttributes();for(const Z in oe)if(oe[Z].location>=0){const fe=X[Z];let ve=$[Z];if(ve===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function g(b,P,F,O){const X={},$=P.attributes;let K=0;const oe=F.getAttributes();for(const Z in oe)if(oe[Z].location>=0){let fe=$[Z];fe===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),X[Z]=ve,K++}r.attributes=X,r.attributesNum=K,r.index=O}function y(){const b=r.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const F=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;F[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),X[b]!==P&&(i.vertexAttribDivisor(b,P),X[b]=P)}function A(){const b=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==b[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function T(b,P,F,O,X,$,K){K===!0?i.vertexAttribIPointer(b,P,F,X,$):i.vertexAttribPointer(b,P,F,O,X,$)}function M(b,P,F,O){y();const X=O.attributes,$=F.getAttributes(),K=P.defaultAttributeValues;for(const oe in $){const Z=$[oe];if(Z.location>=0){let de=X[oe];if(de===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const fe=de.normalized,ve=de.itemSize,he=e.get(de);if(he===void 0)continue;const be=he.buffer,J=he.type,q=he.bytesPerElement,Q=J===i.INT||J===i.UNSIGNED_INT||de.gpuType===nl;if(de.isInterleavedBufferAttribute){const ie=de.data,pe=ie.stride,Me=de.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<Z.locationSize;we++)p(Z.location+we,ie.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<Z.locationSize;we++)m(Z.location+we);i.bindBuffer(i.ARRAY_BUFFER,be);for(let we=0;we<Z.locationSize;we++)T(Z.location+we,ve/Z.locationSize,J,fe,pe*q,(Me+ve/Z.locationSize*we)*q,Q)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)p(Z.location+ie,de.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<Z.locationSize;ie++)m(Z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ie=0;ie<Z.locationSize;ie++)T(Z.location+ie,ve/Z.locationSize,J,fe,ve*q,ve/Z.locationSize*ie*q,Q)}}else if(K!==void 0){const fe=K[oe];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Z.location,fe);break;case 3:i.vertexAttrib3fv(Z.location,fe);break;case 4:i.vertexAttrib4fv(Z.location,fe);break;default:i.vertexAttrib1fv(Z.location,fe)}}}}A()}function H(){U();for(const b in n){const P=n[b];for(const F in P){const O=P[F];for(const X in O)u(O[X].object),delete O[X];delete P[F]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const F in P){const O=P[F];for(const X in O)u(O[X].object),delete O[X];delete P[F]}delete n[b.id]}function C(b){for(const P in n){const F=n[P];if(F[b.id]===void 0)continue;const O=F[b.id];for(const X in O)u(O[X].object),delete O[X];delete F[b.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function jg(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==pi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==kn&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:H,maxSamples:L}}function Kg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ci,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,T=A*4;let M=p.clippingState||null;l.value=M,M=u(g,d,T,f);for(let H=0;H!==T;++H)M[H]=t[H];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==y;++T,M+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Zg(i){let e=new WeakMap;function t(a,o){return o===po?a.mapping=bs:o===mo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===po||o===mo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new om(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dl extends Qu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,dc=[.125,.215,.35,.446,.526,.582],Wi=20,Fa=new dl,fc=new it;let Ba=null,ka=0,za=0,Ha=!1;const Vi=(1+Math.sqrt(5))/2,cs=1/Vi,pc=[new k(-Vi,cs,0),new k(Vi,cs,0),new k(-cs,0,Vi),new k(cs,0,Vi),new k(0,Vi,-cs),new k(0,Vi,cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Wo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,ka,za),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:hr,format:Rn,colorSpace:hn,depthBuffer:!1},s=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=Qg(r,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fc),u.toneMapping=Ii,u.autoClear=!1;const f=new Pi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new It(new Is,f);let y=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(fc),y=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const T=this._cubeSize;Ur(s,A*T,p>2?T:0,T,T),u.setRenderTarget(s),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pc[(s-r-1)%pc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let A=0;for(let C=0;C<Wi;++C){const U=C/y,E=Math.exp(-U*U/2);p.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const M=this._sizeLods[s],H=3*M*(s>T-ps?s-T+ps:0),L=4*(this._cubeSize-M);Ur(t,H,L,3*M,2*M),l.setRenderTarget(t),l.render(h,Fa)}}function Jg(i){const e=[],t=[],n=[];let s=i;const r=i-ps+1+dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ps?l=dc[a-i+ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,m=2,p=1,A=new Float32Array(y*g*f),T=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let L=0;L<f;L++){const C=L%3*2/3-1,U=L>2?0:-1,E=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(E,y*g*L),T.set(d,m*g*L);const b=[L,L,L,L,L,L];M.set(b,p*g*L)}const H=new Vn;H.setAttribute("position",new un(A,y)),H.setAttribute("uv",new un(T,m)),H.setAttribute("faceIndex",new un(M,p)),e.push(H),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mc(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qg(i,e,t){const n=new Float32Array(Wi),s=new k(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function _c(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===po||l===mo,u=l===bs||l===Ss;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Wo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Wo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tv(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const A=f.array;y=f.version;for(let T=0,M=A.length;T<M;T+=3){const H=A[T+0],L=A[T+1],C=A[T+2];d.push(H,L,L,C,C,H)}}else if(g!==void 0){const A=g.array;y=g.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const H=T+0,L=T+1,C=T+2;d.push(H,L,L,C,C,H)}}else return;const m=new(Xu(d)?Zu:Ku)(d,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function nv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*y[A];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function iv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sv(i,e,t){const n=new WeakMap,s=new St;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,H=1;M>e.maxTextureSize&&(H=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const L=new Float32Array(M*H*4*h),C=new ju(L,M,H,h);C.type=kn,C.needsUpdate=!0;const U=T*4;for(let b=0;b<h;b++){const P=m[b],F=p[b],O=A[b],X=M*H*4*b;for(let $=0;$<P.count;$++){const K=$*U;f===!0&&(s.fromBufferAttribute(P,$),L[X+K+0]=s.x,L[X+K+1]=s.y,L[X+K+2]=s.z,L[X+K+3]=0),g===!0&&(s.fromBufferAttribute(F,$),L[X+K+4]=s.x,L[X+K+5]=s.y,L[X+K+6]=s.z,L[X+K+7]=0),y===!0&&(s.fromBufferAttribute(O,$),L[X+K+8]=s.x,L[X+K+9]=s.y,L[X+K+10]=s.z,L[X+K+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ot(M,H)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class th extends Kt{constructor(e,t,n,s,r,a,o,l,c,u=gs){if(u!==gs&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gs&&(n=ji),n===void 0&&u===As&&(n=Ts),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nh=new Kt,vc=new th(1,1),ih=new ju,sh=new Xp,rh=new $u,xc=[],yc=[],Mc=new Float32Array(16),bc=new Float32Array(9),Sc=new Float32Array(4);function Us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),jt(t,n)}}function hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),jt(t,n)}}function dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;Mc.set(n),i.uniformMatrix4fv(this.addr,!1,Mc),jt(t,n)}}function fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function Mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=Gu,r=vc):r=nh,t.setTexture2D(e||r,s)}function bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sh,s)}function Sv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rh,s)}function Ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ih,s)}function Tv(i){switch(i){case 5126:return av;case 35664:return ov;case 35665:return lv;case 35666:return cv;case 35674:return uv;case 35675:return hv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return _v;case 5125:return gv;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Av(i,e){i.uniform1fv(this.addr,e)}function wv(i,e){const t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function Rv(i,e){const t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function Cv(i,e){const t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function Pv(i,e){const t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lv(i,e){const t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dv(i,e){const t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Iv(i,e){i.uniform1iv(this.addr,e)}function Uv(i,e){i.uniform2iv(this.addr,e)}function Nv(i,e){i.uniform3iv(this.addr,e)}function Ov(i,e){i.uniform4iv(this.addr,e)}function Fv(i,e){i.uniform1uiv(this.addr,e)}function Bv(i,e){i.uniform2uiv(this.addr,e)}function kv(i,e){i.uniform3uiv(this.addr,e)}function zv(i,e){i.uniform4uiv(this.addr,e)}function Hv(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nh,r[a])}function Vv(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sh,r[a])}function Gv(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rh,r[a])}function Wv(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ih,r[a])}function Xv(i){switch(i){case 5126:return Av;case 35664:return wv;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return kv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}class qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tv(t.type)}}class jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}}class Yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Ec(i,e){i.seq.push(e),i.map[e.id]=e}function Kv(i,e,t){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ec(t,c===void 0?new qv(o,i,e):new jv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Yv(o),Ec(t,h)),t=h}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Kv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Tc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zv=37297;let Jv=0;function Qv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ac=new dt;function $v(i){yt._getMatrix(Ac,yt.workingColorSpace,i);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qv(i.getShaderSource(e),a)}else return s}function ex(i,e){const t=$v(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tx(i,e){let t;switch(e){case np:t="Linear";break;case ip:t="Reinhard";break;case sp:t="Cineon";break;case Cu:t="ACESFilmic";break;case ap:t="AgX";break;case op:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new k;function nx(){yt.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function sx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Js(i){return i!==""}function Rc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(ax,lx)}const ox=new Map;function lx(i,e){let t=pt[e];if(t===void 0){const n=ox.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(cx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function px(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case ep:e="ENVMAP_BLENDING_MIX";break;case tp:e="ENVMAP_BLENDING_ADD";break}return e}function mx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _x(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hx(t),c=dx(t),u=fx(t),h=px(t),d=mx(t),f=ix(t),g=sx(r),y=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(m=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=Xo(a),a=Rc(a,t),a=Cc(a,t),o=Xo(o),o=Rc(o,t),o=Cc(o,t),a=Pc(a),o=Pc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+a,M=A+p+o,H=Tc(s,s.VERTEX_SHADER,T),L=Tc(s,s.FRAGMENT_SHADER,M);s.attachShader(y,H),s.attachShader(y,L),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(H).trim(),X=s.getShaderInfoLog(L).trim();let $=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,H,L);else{const oe=wc(s,H,"vertex"),Z=wc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+oe+`
`+Z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||X==="")&&(K=!1);K&&(P.diagnostics={runnable:$,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(H),s.deleteShader(L),U=new $r(s,y),E=rx(s,y)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Zv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=H,this.fragmentShader=L,this}let gx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xx(e),t.set(e,n)),n}}class xx{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function yx(i,e,t,n,s,r,a){const o=new ul,l=new vx,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,P,F,O){const X=F.fog,$=O.geometry,K=E.isMeshStandardMaterial?F.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),Z=oe&&oe.mapping===oa?oe.image.height:null,de=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ve=fe!==void 0?fe.length:0;let he=0;$.morphAttributes.position!==void 0&&(he=1),$.morphAttributes.normal!==void 0&&(he=2),$.morphAttributes.color!==void 0&&(he=3);let be,J,q,Q;if(de){const st=Wn[de];be=st.vertexShader,J=st.fragmentShader}else be=E.vertexShader,J=E.fragmentShader,l.update(E),q=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);const ie=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Me=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,Xe=!!E.map,De=!!E.matcap,ke=!!oe,I=!!E.aoMap,Qe=!!E.lightMap,qe=!!E.bumpMap,Ve=!!E.normalMap,Ie=!!E.displacementMap,tt=!!E.emissiveMap,j=!!E.metalnessMap,S=!!E.roughnessMap,x=E.anisotropy>0,D=E.clearcoat>0,Y=E.dispersion>0,se=E.iridescence>0,ne=E.sheen>0,Te=E.transmission>0,le=x&&!!E.anisotropyMap,xe=D&&!!E.clearcoatMap,je=D&&!!E.clearcoatNormalMap,ue=D&&!!E.clearcoatRoughnessMap,Pe=se&&!!E.iridescenceMap,ze=se&&!!E.iridescenceThicknessMap,Ce=ne&&!!E.sheenColorMap,Se=ne&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Ge=!!E.specularColorMap,rt=!!E.specularIntensityMap,z=Te&&!!E.transmissionMap,Re=Te&&!!E.thicknessMap,re=!!E.gradientMap,te=!!E.alphaMap,ce=E.alphaTest>0,ge=!!E.alphaHash,Ke=!!E.extensions;let ct=Ii;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=i.toneMapping);const lt={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:J,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Me,instancingColor:Me&&O.instanceColor!==null,instancingMorph:Me&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:hn,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:De,envMap:ke,envMapMode:ke&&oe.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Qe,bumpMap:qe,normalMap:Ve,displacementMap:d&&Ie,emissiveMap:tt,normalMapObjectSpace:Ve&&E.normalMapType===fp,normalMapTangentSpace:Ve&&E.normalMapType===Vu,metalnessMap:j,roughnessMap:S,anisotropy:x,anisotropyMap:le,clearcoat:D,clearcoatMap:xe,clearcoatNormalMap:je,clearcoatRoughnessMap:ue,dispersion:Y,iridescence:se,iridescenceMap:Pe,iridescenceThicknessMap:ze,sheen:ne,sheenColorMap:Ce,sheenRoughnessMap:Se,specularMap:Ye,specularColorMap:Ge,specularIntensityMap:rt,transmission:Te,transmissionMap:z,thicknessMap:Re,gradientMap:re,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ce,alphaHash:ge,combine:E.combine,mapUv:Xe&&y(E.map.channel),aoMapUv:I&&y(E.aoMap.channel),lightMapUv:Qe&&y(E.lightMap.channel),bumpMapUv:qe&&y(E.bumpMap.channel),normalMapUv:Ve&&y(E.normalMap.channel),displacementMapUv:Ie&&y(E.displacementMap.channel),emissiveMapUv:tt&&y(E.emissiveMap.channel),metalnessMapUv:j&&y(E.metalnessMap.channel),roughnessMapUv:S&&y(E.roughnessMap.channel),anisotropyMapUv:le&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(E.sheenRoughnessMap.channel),specularMapUv:Ye&&y(E.specularMap.channel),specularColorMapUv:Ge&&y(E.specularColorMap.channel),specularIntensityMapUv:rt&&y(E.specularIntensityMap.channel),transmissionMapUv:z&&y(E.transmissionMap.channel),thicknessMapUv:Re&&y(E.thicknessMap.channel),alphaMapUv:te&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ve||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Xe||te),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:tt&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ke&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&E.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)b.push(P),b.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(A(b,E),T(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function A(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function T(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const b=g[E.type];let P;if(b){const F=Wn[b];P=im.clone(F.uniforms)}else P=E.uniforms;return P}function H(E,b){let P;for(let F=0,O=u.length;F<O;F++){const X=u[F];if(X.cacheKey===b){P=X,++P.usedTimes;break}}return P===void 0&&(P=new _x(i,b,E,r),u.push(P)),P}function L(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:H,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:U}}function Mx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ic(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,y,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function o(h,d,f,g,y,m){const p=a(h,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,y,m){const p=a(h,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||bx),n.length>1&&n.sort(d||Dc),s.length>1&&s.sort(d||Dc)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Sx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ic,i.set(n,[a])):s>=r.length?(a=new Ic,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ex(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Tx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ax=0;function wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rx(i){const e=new Ex,t=Tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new ut,a=new ut;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,A=0,T=0,M=0,H=0,L=0,C=0;c.sort(wx);for(let E=0,b=c.length;E<b;E++){const P=c[E],F=P.color,O=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,h+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],O);C++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=K,f++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(F).multiplyScalar(O),K.distance=X,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[y]=K;const oe=P.shadow;if(P.map&&(n.spotLightMap[H]=P.map,H++,oe.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[y]=oe.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=$,M++}y++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(F).multiplyScalar(O),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(O),K.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==M||U.numSpotMaps!==H||U.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+H-L,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,U.directionalLength=f,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=M,U.numSpotMaps=H,U.numLightProbes=C,n.version=Ax++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Uc(i){const e=new Rx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Uc(i),e.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Px extends Xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ux(i,e,t){let n=new hl;const s=new ot,r=new ot,a=new St,o=new Px({depthPacking:dp}),l=new Lx,c={},u=t.maxTextureSize,h={[qn]:ln,[ln]:qn,[Mn]:Mn},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Dx,fragmentShader:Ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let p=this.type;this.render=function(L,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Di),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==oi&&this.type===oi,X=p===oi&&this.type!==oi;for(let $=0,K=L.length;$<K;$++){const oe=L[$],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const de=Z.getFrameExtents();if(s.multiply(de),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,Z.mapSize.y=r.y)),Z.map===null||O===!0||X===!0){const ve=this.type!==oi?{minFilter:cn,magFilter:cn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Yi(s.x,s.y,ve),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const fe=Z.getViewportCount();for(let ve=0;ve<fe;ve++){const he=Z.getViewport(ve);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),F.viewport(a),Z.updateMatrices(oe,ve),n=Z.getFrustum(),M(C,U,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===oi&&A(Z,U),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,P)};function A(L,C){const U=e.update(y);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,y,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,U,f,y,null)}function T(L,C,U,E){let b=null;const P=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)b=P;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=b.uuid,O=C.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let $=X[O];$===void 0&&($=b.clone(),X[O]=$,C.addEventListener("dispose",H)),b=$}if(b.visible=C.visible,b.wireframe=C.wireframe,E===oi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=U}return b}function M(L,C,U,E,b){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===oi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const O=e.update(L),X=L.material;if(Array.isArray(X)){const $=O.groups;for(let K=0,oe=$.length;K<oe;K++){const Z=$[K],de=X[Z.materialIndex];if(de&&de.visible){const fe=T(L,de,E,b);L.onBeforeShadow(i,L,C,U,O,fe,Z),i.renderBufferDirect(U,null,O,fe,L,Z),L.onAfterShadow(i,L,C,U,O,fe,Z)}}}else if(X.visible){const $=T(L,X,E,b);L.onBeforeShadow(i,L,C,U,O,$,null),i.renderBufferDirect(U,null,O,$,L,null),L.onAfterShadow(i,L,C,U,O,$,null)}}const F=L.children;for(let O=0,X=F.length;O<X;O++)M(F[O],C,U,E,b)}function H(L){L.target.removeEventListener("dispose",H);for(const U in c){const E=c[U],b=L.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Nx={[ao]:oo,[lo]:ho,[co]:fo,[Ms]:uo,[oo]:ao,[ho]:lo,[fo]:co,[uo]:Ms};function Ox(i,e){function t(){let z=!1;const Re=new St;let re=null;const te=new St(0,0,0,0);return{setMask:function(ce){re!==ce&&!z&&(i.colorMask(ce,ce,ce,ce),re=ce)},setLocked:function(ce){z=ce},setClear:function(ce,ge,Ke,ct,lt){lt===!0&&(ce*=ct,ge*=ct,Ke*=ct),Re.set(ce,ge,Ke,ct),te.equals(Re)===!1&&(i.clearColor(ce,ge,Ke,ct),te.copy(Re))},reset:function(){z=!1,re=null,te.set(-1,0,0,0)}}}function n(){let z=!1,Re=!1,re=null,te=null,ce=null;return{setReversed:function(ge){if(Re!==ge){const Ke=e.get("EXT_clip_control");Re?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const ct=ce;ce=null,this.setClear(ct)}Re=ge},getReversed:function(){return Re},setTest:function(ge){ge?ie(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(ge){re!==ge&&!z&&(i.depthMask(ge),re=ge)},setFunc:function(ge){if(Re&&(ge=Nx[ge]),te!==ge){switch(ge){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ge}},setLocked:function(ge){z=ge},setClear:function(ge){ce!==ge&&(Re&&(ge=1-ge),i.clearDepth(ge),ce=ge)},reset:function(){z=!1,re=null,te=null,ce=null,Re=!1}}}function s(){let z=!1,Re=null,re=null,te=null,ce=null,ge=null,Ke=null,ct=null,lt=null;return{setTest:function(st){z||(st?ie(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(st){Re!==st&&!z&&(i.stencilMask(st),Re=st)},setFunc:function(st,Et,Ot){(re!==st||te!==Et||ce!==Ot)&&(i.stencilFunc(st,Et,Ot),re=st,te=Et,ce=Ot)},setOp:function(st,Et,Ot){(ge!==st||Ke!==Et||ct!==Ot)&&(i.stencilOp(st,Et,Ot),ge=st,Ke=Et,ct=Ot)},setLocked:function(st){z=st},setClear:function(st){lt!==st&&(i.clearStencil(st),lt=st)},reset:function(){z=!1,Re=null,re=null,te=null,ce=null,ge=null,Ke=null,ct=null,lt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,A=null,T=null,M=null,H=null,L=null,C=new it(0,0,0),U=0,E=!1,b=null,P=null,F=null,O=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=oe>=2);let de=null,fe={};const ve=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),be=new St().fromArray(ve),J=new St().fromArray(he);function q(z,Re,re,te){const ce=new Uint8Array(4),ge=i.createTexture();i.bindTexture(z,ge),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<re;Ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(Re+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ge}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ms),qe(!1),Ve(Nl),ie(i.CULL_FACE),I(Di);function ie(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function pe(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Me(z,Re){return h[z]!==Re?(i.bindFramebuffer(z,Re),h[z]=Re,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function we(z,Re){let re=f,te=!1;if(z){re=d.get(Re),re===void 0&&(re=[],d.set(Re,re));const ce=z.textures;if(re.length!==ce.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ke=ce.length;ge<Ke;ge++)re[ge]=i.COLOR_ATTACHMENT0+ge;re.length=ce.length,te=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,te=!0);te&&i.drawBuffers(re)}function Xe(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const De={[Gi]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};De[kf]=i.MIN,De[zf]=i.MAX;const ke={[Hf]:i.ZERO,[Vf]:i.ONE,[Gf]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[Xf]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Jf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function I(z,Re,re,te,ce,ge,Ke,ct,lt,st){if(z===Di){y===!0&&(pe(i.BLEND),y=!1);return}if(y===!1&&(ie(i.BLEND),y=!0),z!==Of){if(z!==m||st!==E){if((p!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,M=Gi),st)switch(z){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,T=null,H=null,L=null,C.set(0,0,0),U=0,m=z,E=st}return}ce=ce||Re,ge=ge||re,Ke=Ke||te,(Re!==p||ce!==M)&&(i.blendEquationSeparate(De[Re],De[ce]),p=Re,M=ce),(re!==A||te!==T||ge!==H||Ke!==L)&&(i.blendFuncSeparate(ke[re],ke[te],ke[ge],ke[Ke]),A=re,T=te,H=ge,L=Ke),(ct.equals(C)===!1||lt!==U)&&(i.blendColor(ct.r,ct.g,ct.b,lt),C.copy(ct),U=lt),m=z,E=!1}function Qe(z,Re){z.side===Mn?pe(i.CULL_FACE):ie(i.CULL_FACE);let re=z.side===ln;Re&&(re=!re),qe(re),z.blending===_s&&z.transparent===!1?I(Di):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const te=z.stencilWrite;o.setTest(te),te&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function Ve(z){z!==If?(ie(i.CULL_FACE),z!==P&&(z===Nl?i.cullFace(i.BACK):z===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=z}function Ie(z){z!==F&&(K&&i.lineWidth(z),F=z)}function tt(z,Re,re){z?(ie(i.POLYGON_OFFSET_FILL),(O!==Re||X!==re)&&(i.polygonOffset(Re,re),O=Re,X=re)):pe(i.POLYGON_OFFSET_FILL)}function j(z){z?ie(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function S(z){z===void 0&&(z=i.TEXTURE0+$-1),de!==z&&(i.activeTexture(z),de=z)}function x(z,Re,re){re===void 0&&(de===null?re=i.TEXTURE0+$-1:re=de);let te=fe[re];te===void 0&&(te={type:void 0,texture:void 0},fe[re]=te),(te.type!==z||te.texture!==Re)&&(de!==re&&(i.activeTexture(re),de=re),i.bindTexture(z,Re||Q[z]),te.type=z,te.texture=Re)}function D(){const z=fe[de];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){be.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),be.copy(z))}function Se(z){J.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function Ye(z,Re){let re=c.get(Re);re===void 0&&(re=new WeakMap,c.set(Re,re));let te=re.get(z);te===void 0&&(te=i.getUniformBlockIndex(Re,z.name),re.set(z,te))}function Ge(z,Re){const te=c.get(Re).get(z);l.get(Re)!==te&&(i.uniformBlockBinding(Re,te,z.__bindingPointIndex),l.set(Re,te))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,fe={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,A=null,T=null,M=null,H=null,L=null,C=new it(0,0,0),U=0,E=!1,b=null,P=null,F=null,O=null,X=null,be.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:pe,bindFramebuffer:Me,drawBuffers:we,useProgram:Xe,setBlending:I,setMaterial:Qe,setFlipSided:qe,setCullFace:Ve,setLineWidth:Ie,setPolygonOffset:tt,setScissorTest:j,activeTexture:S,bindTexture:x,unbindTexture:D,compressedTexImage2D:Y,compressedTexImage3D:se,texImage2D:Pe,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:ue,texSubImage2D:ne,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Ce,viewport:Se,reset:rt}}function Nc(i,e,t,n){const s=Fx(n);switch(t){case Nu:return i*e;case Fu:return i*e;case Bu:return i*e*2;case rl:return i*e/s.components*s.byteLength;case al:return i*e/s.components*s.byteLength;case ku:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case Ou:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case ll:return i*e*4/s.components*s.byteLength;case Yr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(e,8)/4;case _o:case vo:return Math.max(i,8)*Math.max(e,8)/2;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qr:case Fo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zu:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fx(i){switch(i){case pi:case Du:return{byteLength:1,components:1};case tr:case Iu:case hr:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case ji:case nl:case kn:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return f?new OffscreenCanvas(S,x):sr("canvas")}function y(S,x,D){let Y=1;const se=j(S);if((se.width>D||se.height>D)&&(Y=D/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const ne=Math.floor(Y*se.width),Te=Math.floor(Y*se.height);h===void 0&&(h=g(ne,Te));const le=x?g(ne,Te):h;return le.width=ne,le.height=Te,le.getContext("2d").drawImage(S,0,0,ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ne+"x"+Te+")."),le}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,x,D,Y,se=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne=x;if(x===i.RED&&(D===i.FLOAT&&(ne=i.R32F),D===i.HALF_FLOAT&&(ne=i.R16F),D===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(ne=i.R8UI),D===i.UNSIGNED_SHORT&&(ne=i.R16UI),D===i.UNSIGNED_INT&&(ne=i.R32UI),D===i.BYTE&&(ne=i.R8I),D===i.SHORT&&(ne=i.R16I),D===i.INT&&(ne=i.R32I)),x===i.RG&&(D===i.FLOAT&&(ne=i.RG32F),D===i.HALF_FLOAT&&(ne=i.RG16F),D===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(ne=i.RG8UI),D===i.UNSIGNED_SHORT&&(ne=i.RG16UI),D===i.UNSIGNED_INT&&(ne=i.RG32UI),D===i.BYTE&&(ne=i.RG8I),D===i.SHORT&&(ne=i.RG16I),D===i.INT&&(ne=i.RG32I)),x===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),D===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),D===i.UNSIGNED_INT&&(ne=i.RGB32UI),D===i.BYTE&&(ne=i.RGB8I),D===i.SHORT&&(ne=i.RGB16I),D===i.INT&&(ne=i.RGB32I)),x===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),D===i.UNSIGNED_INT&&(ne=i.RGBA32UI),D===i.BYTE&&(ne=i.RGBA8I),D===i.SHORT&&(ne=i.RGBA16I),D===i.INT&&(ne=i.RGBA32I)),x===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),x===i.RGBA){const Te=se?la:yt.getTransfer(Y);D===i.FLOAT&&(ne=i.RGBA32F),D===i.HALF_FLOAT&&(ne=i.RGBA16F),D===i.UNSIGNED_BYTE&&(ne=Te===Ct?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(S,x){let D;return S?x===null||x===ji||x===Ts?D=i.DEPTH24_STENCIL8:x===kn?D=i.DEPTH32F_STENCIL8:x===tr&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ji||x===Ts?D=i.DEPTH_COMPONENT24:x===kn?D=i.DEPTH_COMPONENT32F:x===tr&&(D=i.DEPTH_COMPONENT16),D}function H(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==cn&&S.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function L(S){const x=S.target;x.removeEventListener("dispose",L),U(x),x.isVideoTexture&&u.delete(x)}function C(S){const x=S.target;x.removeEventListener("dispose",C),b(x)}function U(S){const x=n.get(S);if(x.__webglInit===void 0)return;const D=S.source,Y=d.get(D);if(Y){const se=Y[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(S),Object.keys(Y).length===0&&d.delete(D)}n.remove(S)}function E(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const D=S.source,Y=d.get(D);delete Y[x.__cacheKey],a.memory.textures--}function b(S){const x=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let se=0;se<x.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=S.textures;for(let Y=0,se=D.length;Y<se;Y++){const ne=n.get(D[Y]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(D[Y])}n.remove(S)}let P=0;function F(){P=0}function O(){const S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function X(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function $(S,x){const D=n.get(S);if(S.isVideoTexture&&Ie(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(D,S,x);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function K(S,x){const D=n.get(S);if(S.version>0&&D.__version!==S.version){J(D,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function oe(S,x){const D=n.get(S);if(S.version>0&&D.__version!==S.version){J(D,S,x);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function Z(S,x){const D=n.get(S);if(S.version>0&&D.__version!==S.version){q(D,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}const de={[Es]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},fe={[cn]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ve={[pp]:i.NEVER,[yp]:i.ALWAYS,[mp]:i.LESS,[Gu]:i.LEQUAL,[_p]:i.EQUAL,[xp]:i.GEQUAL,[gp]:i.GREATER,[vp]:i.NOTEQUAL};function he(S,x){if(x.type===kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===jr||x.magFilter===Ks||x.magFilter===hi||x.minFilter===bn||x.minFilter===jr||x.minFilter===Ks||x.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,de[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,de[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,de[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,fe[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==Ks&&x.minFilter!==hi||x.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function be(S,x){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",L));const Y=x.source;let se=d.get(Y);se===void 0&&(se={},d.set(Y,se));const ne=X(x);if(ne!==S.__cacheKey){se[ne]===void 0&&(se[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),se[ne].usedTimes++;const Te=se[S.__cacheKey];Te!==void 0&&(se[S.__cacheKey].usedTimes--,Te.usedTimes===0&&E(x)),S.__cacheKey=ne,S.__webglTexture=se[ne].texture}return D}function J(S,x,D){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const se=be(S,x),ne=x.source;t.bindTexture(Y,S.__webglTexture,i.TEXTURE0+D);const Te=n.get(ne);if(ne.version!==Te.__version||se===!0){t.activeTexture(i.TEXTURE0+D);const le=yt.getPrimaries(yt.workingColorSpace),xe=x.colorSpace===Ri?null:yt.getPrimaries(x.colorSpace),je=x.colorSpace===Ri||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ue=y(x.image,!1,s.maxTextureSize);ue=tt(x,ue);const Pe=r.convert(x.format,x.colorSpace),ze=r.convert(x.type);let Ce=T(x.internalFormat,Pe,ze,x.colorSpace,x.isVideoTexture);he(Y,x);let Se;const Ye=x.mipmaps,Ge=x.isVideoTexture!==!0,rt=Te.__version===void 0||se===!0,z=ne.dataReady,Re=H(x,ue);if(x.isDepthTexture)Ce=M(x.format===As,x.type),rt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ce,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Pe,ze,null));else if(x.isDataTexture)if(Ye.length>0){Ge&&rt&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,Ye[0].width,Ye[0].height);for(let re=0,te=Ye.length;re<te;re++)Se=Ye[re],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Se.width,Se.height,Pe,ze,Se.data):t.texImage2D(i.TEXTURE_2D,re,Ce,Se.width,Se.height,0,Pe,ze,Se.data);x.generateMipmaps=!1}else Ge?(rt&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,ue.width,ue.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Pe,ze,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Pe,ze,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,Ye[0].width,Ye[0].height,ue.depth);for(let re=0,te=Ye.length;re<te;re++)if(Se=Ye[re],x.format!==Rn)if(Pe!==null)if(Ge){if(z)if(x.layerUpdates.size>0){const ce=Nc(Se.width,Se.height,x.format,x.type);for(const ge of x.layerUpdates){const Ke=Se.data.subarray(ge*ce/Se.data.BYTES_PER_ELEMENT,(ge+1)*ce/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ge,Se.width,Se.height,1,Pe,Ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Se.width,Se.height,ue.depth,Pe,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ce,Se.width,Se.height,ue.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Se.width,Se.height,ue.depth,Pe,ze,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ce,Se.width,Se.height,ue.depth,0,Pe,ze,Se.data)}else{Ge&&rt&&t.texStorage2D(i.TEXTURE_2D,Re,Ce,Ye[0].width,Ye[0].height);for(let re=0,te=Ye.length;re<te;re++)Se=Ye[re],x.format!==Rn?Pe!==null?Ge?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Se.width,Se.height,Pe,ze,Se.data):t.texImage2D(i.TEXTURE_2D,re,Ce,Se.width,Se.height,0,Pe,ze,Se.data)}else if(x.isDataArrayTexture)if(Ge){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ce,ue.width,ue.height,ue.depth),z)if(x.layerUpdates.size>0){const re=Nc(ue.width,ue.height,x.format,x.type);for(const te of x.layerUpdates){const ce=ue.data.subarray(te*re/ue.data.BYTES_PER_ELEMENT,(te+1)*re/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,Pe,ze,ce)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Pe,ze,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,Pe,ze,ue.data);else if(x.isData3DTexture)Ge?(rt&&t.texStorage3D(i.TEXTURE_3D,Re,Ce,ue.width,ue.height,ue.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Pe,ze,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,Pe,ze,ue.data);else if(x.isFramebufferTexture){if(rt)if(Ge)t.texStorage2D(i.TEXTURE_2D,Re,Ce,ue.width,ue.height);else{let re=ue.width,te=ue.height;for(let ce=0;ce<Re;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ce,re,te,0,Pe,ze,null),re>>=1,te>>=1}}else if(Ye.length>0){if(Ge&&rt){const re=j(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ce,re.width,re.height)}for(let re=0,te=Ye.length;re<te;re++)Se=Ye[re],Ge?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe,ze,Se):t.texImage2D(i.TEXTURE_2D,re,Ce,Pe,ze,Se);x.generateMipmaps=!1}else if(Ge){if(rt){const re=j(ue);t.texStorage2D(i.TEXTURE_2D,Re,Ce,re.width,re.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,ze,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Pe,ze,ue);m(x)&&p(Y),Te.__version=ne.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function q(S,x,D){if(x.image.length!==6)return;const Y=be(S,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+D);const ne=n.get(se);if(se.version!==ne.__version||Y===!0){t.activeTexture(i.TEXTURE0+D);const Te=yt.getPrimaries(yt.workingColorSpace),le=x.colorSpace===Ri?null:yt.getPrimaries(x.colorSpace),xe=x.colorSpace===Ri||Te===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let te=0;te<6;te++)!je&&!ue?Pe[te]=y(x.image[te],!0,s.maxCubemapSize):Pe[te]=ue?x.image[te].image:x.image[te],Pe[te]=tt(x,Pe[te]);const ze=Pe[0],Ce=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),Ye=T(x.internalFormat,Ce,Se,x.colorSpace),Ge=x.isVideoTexture!==!0,rt=ne.__version===void 0||Y===!0,z=se.dataReady;let Re=H(x,ze);he(i.TEXTURE_CUBE_MAP,x);let re;if(je){Ge&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ye,ze.width,ze.height);for(let te=0;te<6;te++){re=Pe[te].mipmaps;for(let ce=0;ce<re.length;ce++){const ge=re[ce];x.format!==Rn?Ce!==null?Ge?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,ge.width,ge.height,Ce,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,Ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,0,0,ge.width,ge.height,Ce,Se,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce,Ye,ge.width,ge.height,0,Ce,Se,ge.data)}}}else{if(re=x.mipmaps,Ge&&rt){re.length>0&&Re++;const te=j(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(ue){Ge?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe[te].width,Pe[te].height,Ce,Se,Pe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Pe[te].width,Pe[te].height,0,Ce,Se,Pe[te].data);for(let ce=0;ce<re.length;ce++){const Ke=re[ce].image[te].image;Ge?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,Ke.width,Ke.height,Ce,Se,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,Ye,Ke.width,Ke.height,0,Ce,Se,Ke.data)}}else{Ge?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,Se,Pe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Ce,Se,Pe[te]);for(let ce=0;ce<re.length;ce++){const ge=re[ce];Ge?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,0,0,Ce,Se,ge.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce+1,Ye,Ce,Se,ge.image[te])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),ne.__version=se.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Q(S,x,D,Y,se,ne){const Te=r.convert(D.format,D.colorSpace),le=r.convert(D.type),xe=T(D.internalFormat,Te,le,D.colorSpace),je=n.get(x),ue=n.get(D);if(ue.__renderTarget=x,!je.__hasExternalTextures){const Pe=Math.max(1,x.width>>ne),ze=Math.max(1,x.height>>ne);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,xe,Pe,ze,x.depth,0,Te,le,null):t.texImage2D(se,ne,xe,Pe,ze,0,Te,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,ue.__webglTexture,0,qe(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,ue.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(S,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer){const Y=x.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,ne=M(x.stencilBuffer,se),Te=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=qe(x);Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ne,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,S)}else{const Y=x.textures;for(let se=0;se<Y.length;se++){const ne=Y[se],Te=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),xe=T(ne.internalFormat,Te,le,ne.colorSpace),je=qe(x);D&&Ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,xe,x.width,x.height):Ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const se=Y.__webglTexture,ne=qe(x);if(x.depthTexture.format===gs)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(x.depthTexture.format===As)Ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Me(S){const x=n.get(S),D=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=Y}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,S)}else if(D){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ie(x.__webglDepthbuffer[Y],S,!1);else{const se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ie(x.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(S,x,D){const Y=n.get(S);x!==void 0&&Q(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Me(S)}function Xe(S){const x=S.texture,D=n.get(S),Y=n.get(x);S.addEventListener("dispose",C);const se=S.textures,ne=S.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),ne){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let xe=0;xe<x.mipmaps.length;xe++)D.__webglFramebuffer[le][xe]=i.createFramebuffer()}else D.__webglFramebuffer[le]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)D.__webglFramebuffer[le]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Te)for(let le=0,xe=se.length;le<xe;le++){const je=n.get(se[le]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&Ve(S)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<se.length;le++){const xe=se[le];D.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const je=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),Pe=T(xe.internalFormat,je,ue,xe.colorSpace,S.isXRRenderTarget===!0),ze=qe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Pe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,D.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),he(i.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Q(D.__webglFramebuffer[le][xe],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else Q(D.__webglFramebuffer[le],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,xe=se.length;le<xe;le++){const je=se[le],ue=n.get(je);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),he(i.TEXTURE_2D,je),Q(D.__webglFramebuffer,S,je,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),he(le,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Q(D.__webglFramebuffer[xe],S,x,i.COLOR_ATTACHMENT0,le,xe);else Q(D.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,le,0);m(x)&&p(le),t.unbindTexture()}S.depthBuffer&&Me(S)}function De(S){const x=S.textures;for(let D=0,Y=x.length;D<Y;D++){const se=x[D];if(m(se)){const ne=A(S),Te=n.get(se).__webglTexture;t.bindTexture(ne,Te),p(ne),t.unbindTexture()}}}const ke=[],I=[];function Qe(S){if(S.samples>0){if(Ve(S)===!1){const x=S.textures,D=S.width,Y=S.height;let se=i.COLOR_BUFFER_BIT;const ne=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(S),le=x.length>1;if(le)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const je=n.get(x[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,D,Y,0,0,D,Y,se,i.NEAREST),l===!0&&(ke.length=0,I.length=0,ke.push(i.COLOR_ATTACHMENT0+xe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ke.push(ne),I.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const je=n.get(x[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qe(S){return Math.min(s.maxSamples,S.samples)}function Ve(S){const x=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ie(S){const x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function tt(S,x){const D=S.colorSpace,Y=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==hn&&D!==Ri&&(yt.getTransfer(D)===Ct?(Y!==Rn||se!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=we,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ve}function kx(i,e){function t(n,s=Ri){let r;const a=yt.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.BYTE;if(n===Iu)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===Rn)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Bu)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===al)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===Yr||n===Kr||n===Zr||n===Jr)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===go||n===vo||n===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===Eo||n===To||n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Fo||n===Bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===ko||n===zo||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:Vx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xx extends Ki{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=new Wx,m=t.getContextAttributes();let p=null,A=null;const T=[],M=[],H=new ot;let L=null;const C=new on;C.viewport=new St;const U=new on;U.viewport=new St;const E=[C,U],b=new zx;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let q=T[J];return q===void 0&&(q=new Ga,T[J]=q),q.getTargetRaySpace()},this.getControllerGrip=function(J){let q=T[J];return q===void 0&&(q=new Ga,T[J]=q),q.getGripSpace()},this.getHand=function(J){let q=T[J];return q===void 0&&(q=new Ga,T[J]=q),q.getHandSpace()};function O(J){const q=M.indexOf(J.inputSource);if(q===-1)return;const Q=T[q];Q!==void 0&&(Q.update(J.inputSource,J.frame,c||a),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let J=0;J<T.length;J++){const q=M[J];q!==null&&(M[J]=null,T[J].disconnect(q))}P=null,F=null,y.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,A=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Yi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,Q=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?As:gs,Q=m.stencil?Ts:ji);const pe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Yi(d.textureWidth,d.textureHeight,{format:Rn,type:pi,depthTexture:new th(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(J){for(let q=0;q<J.removed.length;q++){const Q=J.removed[q],ie=M.indexOf(Q);ie>=0&&(M[ie]=null,T[ie].disconnect(Q))}for(let q=0;q<J.added.length;q++){const Q=J.added[q];let ie=M.indexOf(Q);if(ie===-1){for(let Me=0;Me<T.length;Me++)if(Me>=M.length){M.push(Q),ie=Me;break}else if(M[Me]===null){M[Me]=Q,ie=Me;break}if(ie===-1)break}const pe=T[ie];pe&&pe.connect(Q)}}const K=new k,oe=new k;function Z(J,q,Q){K.setFromMatrixPosition(q.matrixWorld),oe.setFromMatrixPosition(Q.matrixWorld);const ie=K.distanceTo(oe),pe=q.projectionMatrix.elements,Me=Q.projectionMatrix.elements,we=pe[14]/(pe[10]-1),Xe=pe[14]/(pe[10]+1),De=(pe[9]+1)/pe[5],ke=(pe[9]-1)/pe[5],I=(pe[8]-1)/pe[0],Qe=(Me[8]+1)/Me[0],qe=we*I,Ve=we*Qe,Ie=ie/(-I+Qe),tt=Ie*-I;if(q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(tt),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),pe[10]===-1)J.projectionMatrix.copy(q.projectionMatrix),J.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const j=we+Ie,S=Xe+Ie,x=qe-tt,D=Ve+(ie-tt),Y=De*Xe/S*j,se=ke*Xe/S*j;J.projectionMatrix.makePerspective(x,D,Y,se,j,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,q){q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let q=J.near,Q=J.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(Q=y.depthFar)),b.near=U.near=C.near=q,b.far=U.far=C.far=Q,(P!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,F=b.far),C.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,b.layers.mask=C.layers.mask|U.layers.mask;const ie=J.parent,pe=b.cameras;de(b,ie);for(let Me=0;Me<pe.length;Me++)de(pe[Me],ie);pe.length===2?Z(b,C,U):b.projectionMatrix.copy(C.projectionMatrix),fe(J,b,ie)};function fe(J,q,Q){Q===null?J.matrix.copy(q.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(q.projectionMatrix),J.projectionMatrixInverse.copy(q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ws*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let ve=null;function he(J,q){if(u=q.getViewerPose(c||a),g=q,u!==null){const Q=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let ie=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,ie=!0);for(let Me=0;Me<Q.length;Me++){const we=Q[Me];let Xe=null;if(f!==null)Xe=f.getViewport(we);else{const ke=h.getViewSubImage(d,we);Xe=ke.viewport,Me===0&&(e.setRenderTargetTextures(A,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(A))}let De=E[Me];De===void 0&&(De=new on,De.layers.enable(Me),De.viewport=new St,E[Me]=De),De.matrix.fromArray(we.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(we.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Me===0&&(b.matrix.copy(De.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ie===!0&&b.cameras.push(De)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const Me=h.getDepthInformation(Q[0]);Me&&Me.isValid&&Me.texture&&y.init(e,Me,s.renderState)}}for(let Q=0;Q<T.length;Q++){const ie=M[Q],pe=T[Q];ie!==null&&pe!==void 0&&pe.update(ie,q,c||a)}ve&&ve(J,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const be=new eh;be.setAnimationLoop(he),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}}const ki=new Yn,qx=new ut;function jx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,M=A.envMapRotation;T&&(m.envMap.value=T,ki.copy(M),ki.x*=-1,ki.y*=-1,ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(ki)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const M=T.program;n.uniformBlockBinding(A,M)}function c(A,T){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const H=T.program;n.updateUBOMapping(A,H);const L=e.render.frame;r[A.id]!==L&&(d(A),r[A.id]=L)}function u(A){const T=h();A.__bindingPointIndex=T;const M=i.createBuffer(),H=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,H,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],M=A.uniforms,H=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,C=M.length;L<C;L++){const U=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,b=U.length;E<b;E++){const P=U[E];if(f(P,L,E,H)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<O.length;$++){const K=O[$],oe=y(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,F+X,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,T,M,H){const L=A.value,C=T+"_"+M;if(H[C]===void 0)return typeof L=="number"||typeof L=="boolean"?H[C]=L:H[C]=L.clone(),!0;{const U=H[C];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return H[C]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(A){const T=A.uniforms;let M=0;const H=16;for(let C=0,U=T.length;C<U;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let b=0,P=E.length;b<P;b++){const F=E[b],O=Array.isArray(F.value)?F.value:[F.value];for(let X=0,$=O.length;X<$;X++){const K=O[X],oe=y(K),Z=M%H,de=Z%oe.boundary,fe=Z+de;M+=de,fe!==0&&H-fe<oe.storage&&(M+=H-fe),F.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=oe.storage}}}const L=M%H;return L>0&&(M+=H-L),A.__size=M,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Kx{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Ii,this.toneMappingExposure=1;const M=this;let H=!1,L=0,C=0,U=null,E=-1,b=null;const P=new St,F=new St;let O=null;const X=new it(0);let $=0,K=t.width,oe=t.height,Z=1,de=null,fe=null;const ve=new St(0,0,K,oe),he=new St(0,0,K,oe);let be=!1;const J=new hl;let q=!1,Q=!1;const ie=new ut,pe=new ut,Me=new k,we=new St,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ke(){return U===null?Z:1}let I=n;function Qe(v,w){return t.getContext(v,w)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const w="webgl2";if(I=Qe(w,v),I===null)throw Qe(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let qe,Ve,Ie,tt,j,S,x,D,Y,se,ne,Te,le,xe,je,ue,Pe,ze,Ce,Se,Ye,Ge,rt,z;function Re(){qe=new ev(I),qe.init(),Ge=new kx(I,qe),Ve=new Yg(I,qe,e,Ge),Ie=new Ox(I,qe),Ve.reverseDepthBuffer&&d&&Ie.buffers.depth.setReversed(!0),tt=new iv(I),j=new Mx,S=new Bx(I,qe,Ie,j,Ve,Ge,tt),x=new Zg(M),D=new $g(M),Y=new um(I),rt=new qg(I,Y),se=new tv(I,Y,tt,rt),ne=new rv(I,se,Y,tt),Ce=new sv(I,Ve,S),ue=new Kg(j),Te=new yx(M,x,D,qe,Ve,rt,ue),le=new jx(M,j),xe=new Sx,je=new Cx(qe),ze=new Xg(M,x,D,Ie,ne,f,l),Pe=new Ux(M,ne,Ve),z=new Yx(I,tt,Ve,Ie),Se=new jg(I,qe,tt),Ye=new nv(I,qe,tt),tt.programs=Te.programs,M.capabilities=Ve,M.extensions=qe,M.properties=j,M.renderLists=xe,M.shadowMap=Pe,M.state=Ie,M.info=tt}Re();const re=new Xx(M,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(v){v!==void 0&&(Z=v,this.setSize(K,oe,!1))},this.getSize=function(v){return v.set(K,oe)},this.setSize=function(v,w,N=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,oe=w,t.width=Math.floor(v*Z),t.height=Math.floor(w*Z),N===!0&&(t.style.width=v+"px",t.style.height=w+"px"),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(K*Z,oe*Z).floor()},this.setDrawingBufferSize=function(v,w,N){K=v,oe=w,Z=N,t.width=Math.floor(v*N),t.height=Math.floor(w*N),this.setViewport(0,0,v,w)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,w,N,W){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,w,N,W),Ie.viewport(P.copy(ve).multiplyScalar(Z).round())},this.getScissor=function(v){return v.copy(he)},this.setScissor=function(v,w,N,W){v.isVector4?he.set(v.x,v.y,v.z,v.w):he.set(v,w,N,W),Ie.scissor(F.copy(he).multiplyScalar(Z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(v){Ie.setScissorTest(be=v)},this.setOpaqueSort=function(v){de=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(v=!0,w=!0,N=!0){let W=0;if(v){let B=!1;if(U!==null){const _e=U.texture.format;B=_e===ll||_e===ol||_e===al}if(B){const _e=U.texture.type,Ee=_e===pi||_e===ji||_e===tr||_e===Ts||_e===il||_e===sl,Fe=ze.getClearColor(),Ue=ze.getClearAlpha(),Je=Fe.r,et=Fe.g,He=Fe.b;Ee?(g[0]=Je,g[1]=et,g[2]=He,g[3]=Ue,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Je,y[1]=et,y[2]=He,y[3]=Ue,I.clearBufferiv(I.COLOR,0,y))}else W|=I.COLOR_BUFFER_BIT}w&&(W|=I.DEPTH_BUFFER_BIT),N&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),xe.dispose(),je.dispose(),j.dispose(),x.dispose(),D.dispose(),ne.dispose(),rt.dispose(),z.dispose(),Te.dispose(),re.dispose(),re.removeEventListener("sessionstart",Jn),re.removeEventListener("sessionend",_i),_n.stop()};function te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const v=tt.autoReset,w=Pe.enabled,N=Pe.autoUpdate,W=Pe.needsUpdate,B=Pe.type;Re(),tt.autoReset=v,Pe.enabled=w,Pe.autoUpdate=N,Pe.needsUpdate=W,Pe.type=B}function ge(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const w=v.target;w.removeEventListener("dispose",Ke),ct(w)}function ct(v){lt(v),j.remove(v)}function lt(v){const w=j.get(v).programs;w!==void 0&&(w.forEach(function(N){Te.releaseProgram(N)}),v.isShaderMaterial&&Te.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,N,W,B,_e){w===null&&(w=Xe);const Ee=B.isMesh&&B.matrixWorld.determinant()<0,Fe=Gn(v,w,N,W,B);Ie.setMaterial(W,Ee);let Ue=N.index,Je=1;if(W.wireframe===!0){if(Ue=se.getWireframeAttribute(N),Ue===void 0)return;Je=2}const et=N.drawRange,He=N.attributes.position;let Ze=et.start*Je,nt=(et.start+et.count)*Je;_e!==null&&(Ze=Math.max(Ze,_e.start*Je),nt=Math.min(nt,(_e.start+_e.count)*Je)),Ue!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,Ue.count)):He!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,He.count));const mt=nt-Ze;if(mt<0||mt===1/0)return;rt.setup(B,W,Fe,N,Ue);let Bt,xt=Se;if(Ue!==null&&(Bt=Y.get(Ue),xt=Ye,xt.setIndex(Bt)),B.isMesh)W.wireframe===!0?(Ie.setLineWidth(W.wireframeLinewidth*ke()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(B.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),Ie.setLineWidth(Ne*ke()),B.isLineSegments?xt.setMode(I.LINES):B.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else B.isPoints?xt.setMode(I.POINTS):B.isSprite&&xt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,Tt=B._multiDrawCounts,_t=B._multiDrawCount,ht=Ue?Y.get(Ue).bytesPerElement:1,zt=j.get(W).currentProgram.getUniforms();for(let Ft=0;Ft<_t;Ft++)zt.setValue(I,"_gl_DrawID",Ft),xt.render(Ne[Ft]/ht,Tt[Ft])}else if(B.isInstancedMesh)xt.renderInstances(Ze,mt,B.count);else if(N.isInstancedBufferGeometry){const Ne=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Tt=Math.min(N.instanceCount,Ne);xt.renderInstances(Ze,mt,Tt)}else xt.render(Ze,mt)};function st(v,w,N){v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=ln,v.needsUpdate=!0,bt(v,w,N),v.side=qn,v.needsUpdate=!0,bt(v,w,N),v.side=Mn):bt(v,w,N)}this.compile=function(v,w,N=null){N===null&&(N=v),p=je.get(N),p.init(w),T.push(p),N.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),v!==N&&v.traverseVisible(function(B){B.isLight&&B.layers.test(w.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const _e=B.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Fe=_e[Ee];st(Fe,N,B),W.add(Fe)}else st(_e,N,B),W.add(_e)}),T.pop(),p=null,W},this.compileAsync=function(v,w,N=null){const W=this.compile(v,w,N);return new Promise(B=>{function _e(){if(W.forEach(function(Ee){j.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){B(v);return}setTimeout(_e,10)}qe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Et=null;function Ot(v){Et&&Et(v)}function Jn(){_n.stop()}function _i(){_n.start()}const _n=new eh;_n.setAnimationLoop(Ot),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(v){Et=v,re.setAnimationLoop(v),v===null?_n.stop():_n.start()},re.addEventListener("sessionstart",Jn),re.addEventListener("sessionend",_i),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,w,U),p=je.get(v,T.length),p.init(w),T.push(p),pe.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),J.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,q=ue.init(this.clippingPlanes,Q),m=xe.get(v,A.length),m.init(),A.push(m),re.enabled===!0&&re.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Qn(_e,w,-1/0,M.sortObjects)}Qn(v,w,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(de,fe),De=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,De&&ze.addToRenderList(m,v),this.info.render.frame++,q===!0&&ue.beginShadows();const N=p.state.shadowsArray;Pe.render(N,v,w),q===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),w.isArrayCamera){const _e=w.cameras;if(B.length>0)for(let Ee=0,Fe=_e.length;Ee<Fe;Ee++){const Ue=_e[Ee];gt(W,B,v,Ue)}De&&ze.render(v);for(let Ee=0,Fe=_e.length;Ee<Fe;Ee++){const Ue=_e[Ee];gi(m,v,Ue,Ue.viewport)}}else B.length>0&&gt(W,B,v,w),De&&ze.render(v),gi(m,v,w);U!==null&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(M,v,w),rt.resetDefaultState(),E=-1,b=null,T.pop(),T.length>0?(p=T[T.length-1],q===!0&&ue.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Qn(v,w,N,W){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||J.intersectsSprite(v)){W&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(pe);const Ee=ne.update(v),Fe=v.material;Fe.visible&&m.push(v,Ee,Fe,N,we.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||J.intersectsObject(v))){const Ee=ne.update(v),Fe=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),we.copy(Ee.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){const Ue=Ee.groups;for(let Je=0,et=Ue.length;Je<et;Je++){const He=Ue[Je],Ze=Fe[He.materialIndex];Ze&&Ze.visible&&m.push(v,Ee,Ze,N,we.z,He)}}else Fe.visible&&m.push(v,Ee,Fe,N,we.z,null)}}const _e=v.children;for(let Ee=0,Fe=_e.length;Ee<Fe;Ee++)Qn(_e[Ee],w,N,W)}function gi(v,w,N,W){const B=v.opaque,_e=v.transmissive,Ee=v.transparent;p.setupLightsView(N),q===!0&&ue.setGlobalState(M.clippingPlanes,N),W&&Ie.viewport(P.copy(W)),B.length>0&&Lt(B,w,N),_e.length>0&&Lt(_e,w,N),Ee.length>0&&Lt(Ee,w,N),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function gt(v,w,N,W){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Yi(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?hr:pi,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[W.id],Ee=W.viewport||P;_e.setSize(Ee.z,Ee.w);const Fe=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(X),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),De&&ze.render(N);const Ue=M.toneMapping;M.toneMapping=Ii;const Je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),q===!0&&ue.setGlobalState(M.clippingPlanes,W),Lt(v,N,W),S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e),qe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let He=0,Ze=w.length;He<Ze;He++){const nt=w[He],mt=nt.object,Bt=nt.geometry,xt=nt.material,Ne=nt.group;if(xt.side===Mn&&mt.layers.test(W.layers)){const Tt=xt.side;xt.side=ln,xt.needsUpdate=!0,Ht(mt,N,W,Bt,xt,Ne),xt.side=Tt,xt.needsUpdate=!0,et=!0}}et===!0&&(S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e))}M.setRenderTarget(Fe),M.setClearColor(X,$),Je!==void 0&&(W.viewport=Je),M.toneMapping=Ue}function Lt(v,w,N){const W=w.isScene===!0?w.overrideMaterial:null;for(let B=0,_e=v.length;B<_e;B++){const Ee=v[B],Fe=Ee.object,Ue=Ee.geometry,Je=W===null?Ee.material:W,et=Ee.group;Fe.layers.test(N.layers)&&Ht(Fe,w,N,Ue,Je,et)}}function Ht(v,w,N,W,B,_e){v.onBeforeRender(M,w,N,W,B,_e),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(M,w,N,W,v,_e),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,M.renderBufferDirect(N,w,W,B,v,_e),B.side=qn,B.needsUpdate=!0,M.renderBufferDirect(N,w,W,B,v,_e),B.side=Mn):M.renderBufferDirect(N,w,W,B,v,_e),v.onAfterRender(M,w,N,W,B,_e)}function bt(v,w,N){w.isScene!==!0&&(w=Xe);const W=j.get(v),B=p.state.lights,_e=p.state.shadowsArray,Ee=B.state.version,Fe=Te.getParameters(v,B.state,_e,w,N),Ue=Te.getProgramCacheKey(Fe);let Je=W.programs;W.environment=v.isMeshStandardMaterial?w.environment:null,W.fog=w.fog,W.envMap=(v.isMeshStandardMaterial?D:x).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,Je===void 0&&(v.addEventListener("dispose",Ke),Je=new Map,W.programs=Je);let et=Je.get(Ue);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===Ee)return Sn(v,Fe),et}else Fe.uniforms=Te.getUniforms(v),v.onBeforeCompile(Fe,M),et=Te.acquireProgram(Fe,Ue),Je.set(Ue,et),W.uniforms=Fe.uniforms;const He=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(He.clippingPlanes=ue.uniform),Sn(v,Fe),W.needsLights=$n(v),W.lightsStateVersion=Ee,W.needsLights&&(He.ambientLightColor.value=B.state.ambient,He.lightProbe.value=B.state.probe,He.directionalLights.value=B.state.directional,He.directionalLightShadows.value=B.state.directionalShadow,He.spotLights.value=B.state.spot,He.spotLightShadows.value=B.state.spotShadow,He.rectAreaLights.value=B.state.rectArea,He.ltc_1.value=B.state.rectAreaLTC1,He.ltc_2.value=B.state.rectAreaLTC2,He.pointLights.value=B.state.point,He.pointLightShadows.value=B.state.pointShadow,He.hemisphereLights.value=B.state.hemi,He.directionalShadowMap.value=B.state.directionalShadowMap,He.directionalShadowMatrix.value=B.state.directionalShadowMatrix,He.spotShadowMap.value=B.state.spotShadowMap,He.spotLightMatrix.value=B.state.spotLightMatrix,He.spotLightMap.value=B.state.spotLightMap,He.pointShadowMap.value=B.state.pointShadowMap,He.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=et,W.uniformsList=null,et}function gn(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=$r.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function Sn(v,w){const N=j.get(v);N.outputColorSpace=w.outputColorSpace,N.batching=w.batching,N.batchingColor=w.batchingColor,N.instancing=w.instancing,N.instancingColor=w.instancingColor,N.instancingMorph=w.instancingMorph,N.skinning=w.skinning,N.morphTargets=w.morphTargets,N.morphNormals=w.morphNormals,N.morphColors=w.morphColors,N.morphTargetsCount=w.morphTargetsCount,N.numClippingPlanes=w.numClippingPlanes,N.numIntersection=w.numClipIntersection,N.vertexAlphas=w.vertexAlphas,N.vertexTangents=w.vertexTangents,N.toneMapping=w.toneMapping}function Gn(v,w,N,W,B){w.isScene!==!0&&(w=Xe),S.resetTextureUnits();const _e=w.fog,Ee=W.isMeshStandardMaterial?w.environment:null,Fe=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:hn,Ue=(W.isMeshStandardMaterial?D:x).get(W.envMap||Ee),Je=W.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,et=!!N.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),He=!!N.morphAttributes.position,Ze=!!N.morphAttributes.normal,nt=!!N.morphAttributes.color;let mt=Ii;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(mt=M.toneMapping);const Bt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,Ne=j.get(W),Tt=p.state.lights;if(q===!0&&(Q===!0||v!==b)){const Vt=v===b&&W.id===E;ue.setState(W,v,Vt)}let _t=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Tt.state.version||Ne.outputColorSpace!==Fe||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Ue||W.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Je||Ne.vertexTangents!==et||Ne.morphTargets!==He||Ne.morphNormals!==Ze||Ne.morphColors!==nt||Ne.toneMapping!==mt||Ne.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ne.__version=W.version);let ht=Ne.currentProgram;_t===!0&&(ht=bt(W,w,B));let zt=!1,Ft=!1,sn=!1;const At=ht.getUniforms(),vn=Ne.uniforms;if(Ie.useProgram(ht.program)&&(zt=!0,Ft=!0,sn=!0),W.id!==E&&(E=W.id,Ft=!0),zt||b!==v){Ie.buffers.depth.getReversed()?(ie.copy(v.projectionMatrix),kp(ie),zp(ie),At.setValue(I,"projectionMatrix",ie)):At.setValue(I,"projectionMatrix",v.projectionMatrix),At.setValue(I,"viewMatrix",v.matrixWorldInverse);const vi=At.map.cameraPosition;vi!==void 0&&vi.setValue(I,Me.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,Ft=!0,sn=!0)}if(B.isSkinnedMesh){At.setOptional(I,B,"bindMatrix"),At.setOptional(I,B,"bindMatrixInverse");const Vt=B.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(I,"boneTexture",Vt.boneTexture,S))}B.isBatchedMesh&&(At.setOptional(I,B,"batchingTexture"),At.setValue(I,"batchingTexture",B._matricesTexture,S),At.setOptional(I,B,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",B._indirectTexture,S),At.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",B._colorsTexture,S));const Dn=N.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ce.update(B,N,ht),(Ft||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,At.setValue(I,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vn.envMap.value=Ue,vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&w.environment!==null&&(vn.envMapIntensity.value=w.environmentIntensity),Ft&&(At.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Ln(vn,sn),_e&&W.fog===!0&&le.refreshFogUniforms(vn,_e),le.refreshMaterialUniforms(vn,W,Z,oe,p.state.transmissionRenderTarget[v.id]),$r.upload(I,gn(Ne),vn,S)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($r.upload(I,gn(Ne),vn,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(I,"center",B.center),At.setValue(I,"modelViewMatrix",B.modelViewMatrix),At.setValue(I,"normalMatrix",B.normalMatrix),At.setValue(I,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Vt=W.uniformsGroups;for(let vi=0,xi=Vt.length;vi<xi;vi++){const Sl=Vt[vi];z.update(Sl,ht),z.bind(Sl,ht)}}return ht}function Ln(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function $n(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,w,N){j.get(v.texture).__webglTexture=w,j.get(v.depthTexture).__webglTexture=N;const W=j.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=N===void 0,W.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,w){const N=j.get(v);N.__webglFramebuffer=w,N.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,N=0){U=v,L=w,C=N;let W=!0,B=null,_e=!1,Ee=!1;if(v){const Ue=j.get(v);if(Ue.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ue.__webglFramebuffer===void 0)S.setupRenderTarget(v);else if(Ue.__hasExternalTextures)S.rebindTextures(v,j.get(v.texture).__webglTexture,j.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const He=v.depthTexture;if(Ue.__boundDepthTexture!==He){if(He!==null&&j.has(He)&&(v.width!==He.image.width||v.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(v)}}const Je=v.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ee=!0);const et=j.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(et[w])?B=et[w][N]:B=et[w],_e=!0):v.samples>0&&S.useMultisampledRTT(v)===!1?B=j.get(v).__webglMultisampledFramebuffer:Array.isArray(et)?B=et[N]:B=et,P.copy(v.viewport),F.copy(v.scissor),O=v.scissorTest}else P.copy(ve).multiplyScalar(Z).floor(),F.copy(he).multiplyScalar(Z).floor(),O=be;if(Ie.bindFramebuffer(I.FRAMEBUFFER,B)&&W&&Ie.drawBuffers(v,B),Ie.viewport(P),Ie.scissor(F),Ie.setScissorTest(O),_e){const Ue=j.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+w,Ue.__webglTexture,N)}else if(Ee){const Ue=j.get(v.texture),Je=w||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,N||0,Je)}E=-1},this.readRenderTargetPixels=function(v,w,N,W,B,_e,Ee){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=j.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe){Ie.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const Ue=v.texture,Je=Ue.format,et=Ue.type;if(!Ve.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-W&&N>=0&&N<=v.height-B&&I.readPixels(w,N,W,B,Ge.convert(Je),Ge.convert(et),_e)}finally{const Ue=U!==null?j.get(U).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,w,N,W,B,_e,Ee){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=j.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(Fe=Fe[Ee]),Fe){const Ue=v.texture,Je=Ue.format,et=Ue.type;if(!Ve.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=v.width-W&&N>=0&&N<=v.height-B){Ie.bindFramebuffer(I.FRAMEBUFFER,Fe);const He=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(w,N,W,B,Ge.convert(Je),Ge.convert(et),0);const Ze=U!==null?j.get(U).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Ze);const nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bp(I,nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(He),I.deleteSync(nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,w=null,N=0){v.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-N),B=Math.floor(v.image.width*W),_e=Math.floor(v.image.height*W),Ee=w!==null?w.x:0,Fe=w!==null?w.y:0;S.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,Ee,Fe,B,_e),Ie.unbindTexture()},this.copyTextureToTexture=function(v,w,N=null,W=null,B=0){v.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],w=arguments[2],B=arguments[3]||0,N=null);let _e,Ee,Fe,Ue,Je,et,He,Ze,nt;const mt=v.isCompressedTexture?v.mipmaps[B]:v.image;N!==null?(_e=N.max.x-N.min.x,Ee=N.max.y-N.min.y,Fe=N.isBox3?N.max.z-N.min.z:1,Ue=N.min.x,Je=N.min.y,et=N.isBox3?N.min.z:0):(_e=mt.width,Ee=mt.height,Fe=mt.depth||1,Ue=0,Je=0,et=0),W!==null?(He=W.x,Ze=W.y,nt=W.z):(He=0,Ze=0,nt=0);const Bt=Ge.convert(w.format),xt=Ge.convert(w.type);let Ne;w.isData3DTexture?(S.setTexture3D(w,0),Ne=I.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(S.setTexture2DArray(w,0),Ne=I.TEXTURE_2D_ARRAY):(S.setTexture2D(w,0),Ne=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,w.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,w.unpackAlignment);const Tt=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ht=I.getParameter(I.UNPACK_SKIP_PIXELS),zt=I.getParameter(I.UNPACK_SKIP_ROWS),Ft=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et);const sn=v.isDataArrayTexture||v.isData3DTexture,At=w.isDataArrayTexture||w.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const vn=j.get(v),Dn=j.get(w),Vt=j.get(vn.__renderTarget),vi=j.get(Dn.__renderTarget);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let xi=0;xi<Fe;xi++)sn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(v).__webglTexture,B,et+xi),v.isDepthTexture?(At&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,j.get(w).__webglTexture,B,nt+xi),I.blitFramebuffer(Ue,Je,_e,Ee,He,Ze,_e,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST)):At?I.copyTexSubImage3D(Ne,B,He,Ze,nt+xi,Ue,Je,_e,Ee):I.copyTexSubImage2D(Ne,B,He,Ze,nt+xi,Ue,Je,_e,Ee);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else At?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Ne,B,He,Ze,nt,_e,Ee,Fe,Bt,xt,mt.data):w.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,B,He,Ze,nt,_e,Ee,Fe,Bt,mt.data):I.texSubImage3D(Ne,B,He,Ze,nt,_e,Ee,Fe,Bt,xt,mt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,He,Ze,_e,Ee,Bt,xt,mt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,He,Ze,mt.width,mt.height,Bt,mt.data):I.texSubImage2D(I.TEXTURE_2D,B,He,Ze,_e,Ee,Bt,xt,mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ft),B===0&&w.generateMipmaps&&I.generateMipmap(Ne),Ie.unbindTexture()},this.copyTextureToTexture3D=function(v,w,N=null,W=null,B=0){return v.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,W=arguments[1]||null,v=arguments[2],w=arguments[3],B=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,w,N,W,B)},this.initRenderTarget=function(v){j.get(v).__webglFramebuffer===void 0&&S.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?S.setTextureCube(v,0):v.isData3DTexture?S.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?S.setTexture2DArray(v,0):S.setTexture2D(v,0),Ie.unbindTexture()},this.resetState=function(){L=0,C=0,U=null,Ie.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}class ah extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new k;class pl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Oc=new k,Fc=new St,Bc=new St,Jx=new k,kc=new ut,Or=new k,Wa=new Kn,zc=new ut,Xa=new Ds;class Qx extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(s),e.ray.intersectsSphere(Wa)!==!1&&(zc.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(zc),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Fc.fromBufferAttribute(s.attributes.skinIndex,e),Bc.fromBufferAttribute(s.attributes.skinWeight,e),Oc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Bc.getComponent(r);if(a!==0){const o=Fc.getComponent(r);kc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jx.copy(Oc).applyMatrix4(kc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class oh extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lh extends Kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=cn,u=cn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new ut,$x=new ut;class ml{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:$x;Hc.multiplyMatrices(o,t[r]),Hc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lh(t,e,e,Rn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new oh),this.bones.push(a),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class qo extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new ut,Vc=new ut,Fr=[],Gc=new Cn,e0=new ut,Ws=new It,Xs=new Kn;class t0 extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Gc.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Xs.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Vc.multiplyMatrices(n,us),Ws.matrixWorld=Vc,Ws.raycast(e,Fr);for(let a=0,o=Fr.length;a<o;a++){const l=Fr[a];l.instanceId=r,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lh(new Float32Array(s*this.count),s,this.count,rl,kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ch extends Xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new k,ra=new k,Wc=new ut,qs=new Ds,Br=new Kn,qa=new k,Xc=new k;class _l extends Nt{constructor(e=new Vn,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sa.fromBufferAttribute(t,s-1),ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Wc.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){const p=u.getX(y),A=u.getX(y+1),T=kr(this,e,qs,l,p,A);T&&t.push(T)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(f),p=kr(this,e,qs,l,y,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){const p=kr(this,e,qs,l,y,y+1);p&&t.push(p)}if(this.isLineLoop){const y=kr(this,e,qs,l,g-1,f);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),ra.fromBufferAttribute(a,r),t.distanceSqToSegment(sa,ra,qa,Xc)>n)return;qa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:Xc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new k,jc=new k;class n0 extends _l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qc.fromBufferAttribute(t,s),jc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(jc);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class i0 extends _l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class uh extends Xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new ut,jo=new Ds,zr=new Kn,Hr=new k;class s0 extends Nt{constructor(e=new Vn,t=new uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Yc.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){const m=c.getX(g);Hr.fromBufferAttribute(h,m),Kc(Hr,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Hr.fromBufferAttribute(h,g),Kc(Hr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kc(i,e,t,n,s,r,a){const o=jo.distanceSqToPoint(i);if(o<t){const l=new k;jo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gl extends Vn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new k,u=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Pn(a,3)),this.setAttribute("normal",new Pn(o,3)),this.setAttribute("uv",new Pn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rr extends Xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mn extends rr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function r0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function a0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function hh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class dr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class o0 extends dr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,o=2*t-n;break;case Vl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:a=e,l=2*n-t;break;case Vl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,A=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let H=0;H!==o;++H)r[H]=p*a[u+H]+A*a[c+H]+T*a[l+H]+M*a[h+H];return r}}class l0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class c0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new c0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new o0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&r0(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=ir;class Ns extends Zn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=nr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class dh extends Zn{}dh.prototype.ValueTypeName="color";class Cs extends Zn{}Cs.prototype.ValueTypeName="number";class u0 extends dr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)jn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ps extends Zn{InterpolantFactoryMethodLinear(e){return new u0(this.times,this.values,this.getValueSize(),e)}}Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Zn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=nr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ls extends Zn{}Ls.prototype.ValueTypeName="vector";class h0{constructor(e="",t=-1,n=[],s=cp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(f0(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=a0(l);l=Zc(l,1,u),c=Zc(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Cs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,y){if(f.length!==0){const m=[],p=[];hh(f,m,p,g),m.length!==0&&y.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const m=[],p=[];for(let A=0;A!==d[g].morphTargets.length;++A){const T=d[g];m.push(T.time),p.push(T.morphTarget===y?1:0)}s.push(new Cs(".morphTargetInfluence["+y+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(Ls,f+".position",d,"pos",s),n(Ps,f+".quaternion",d,"rot",s),n(Ls,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Ls;case"color":return dh;case"quaternion":return Ps;case"bool":case"boolean":return Ns;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function f0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d0(i.type);if(i.times===void 0){const t=[],n=[];hh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class p0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const m0=new p0;class Fs{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class _0 extends Error{constructor(e,t){super(e),this.response=t}}class fh extends Fs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:T,value:M})=>{if(T)p.close();else{y+=M.byteLength;const H=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let L=0,C=u.length;L<C;L++){const U=u[L];U.onProgress&&U.onProgress(H)}p.enqueue(M),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new _0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Li.add(e,c);const u=ai[e];delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class g0 extends Fs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Li.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=sr("img");function l(){u(),Li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class v0 extends Fs{constructor(e){super(e)}load(e,t,n,s){const r=new Kt,a=new g0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ha extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class x0 extends ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new ut,Jc=new k,Qc=new k;class vl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends vl{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class M0 extends ha{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new y0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $c=new ut,js=new k,Ya=new k;class b0 extends vl{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c)}}class xl extends ha{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new b0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S0 extends vl{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new S0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class er{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class E0 extends Fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Li.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Li.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(e,l),r.manager.itemStart(e)}}const yl="\\[\\]\\.:\\/",T0=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",A0="[^"+yl.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",Ml),R0=/(WCOD+)?/.source.replace("WCOD",A0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),L0=new RegExp("^"+w0+R0+C0+P0+"$"),D0=["material","materials","bones","map"];class I0{constructor(e,t,n){const s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(e){const t=L0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);D0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=I0;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const eu=new ut;class U0{constructor(e,t,n=0,s=1/0){this.ray=new Ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(e,t=!0,n=[]){return Ko(e,this,n,t),n.sort(tu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ko(e[s],this,n,t);return n.sort(tu),n}}function tu(i,e){return i.distance-e.distance}function Ko(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ko(r[a],e,t,!0)}}class nu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N0 extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const iu={type:"change"},bl={type:"start"},ph={type:"end"},Gr=new Ds,su=new ci,O0=Math.cos(70*Wu.DEG2RAD),Xt=new k,fn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ka=1e-6;class F0 extends N0{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new jn,this._lastTargetPosition=new k,this._quat=new jn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nu,this._sphericalDelta=new nu,this._scale=1,this._panOffset=new k,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new k,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k0.bind(this),this._onPointerDown=B0.bind(this),this._onPointerUp=z0.bind(this),this._onContextMenu=j0.bind(this),this._onMouseWheel=G0.bind(this),this._onKeyDown=W0.bind(this),this._onTouchStart=X0.bind(this),this._onTouchMove=q0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=V0.bind(this),this._interceptControlDown=Y0.bind(this),this._interceptControlUp=K0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iu),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<O0?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ka||this._lastTargetPosition.distanceToSquared(this.target)>Ka?(this.dispatchEvent(iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xt.copy(s).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function B0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function k0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function z0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ph),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pt.DOLLY;break;case ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}break;case ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(bl)}function V0(i){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function G0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(i.preventDefault(),this.dispatchEvent(bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ph))}function W0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function X0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Pt.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pt.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(bl)}function q0(i){switch(this._trackPointer(i),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pt.NONE}}function j0(i){this.enabled!==!1&&i.preventDefault()}function Y0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ru(i,e){if(e===up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vo||e===Hu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Vo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Z0 extends Fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=er.extractUrlBase(e);a=er.resolveURL(c,this.path)}else a=er.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mh){try{a[vt.KHR_BINARY_GLTF]=new _y(e)}catch(h){s&&s(h);return}r=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:a[h]=new $0;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new gy(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[h]=new vy;break;case vt.KHR_MESH_QUANTIZATION:a[h]=new xy;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function J0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q0{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new it(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],hn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xl(u),c.distance=h;break;case"spot":c=new M0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,li(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class $0{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pi}extendParams(e,t,n){const s=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class ey{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ty{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(o,o)}return Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class sy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],hn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class ry{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class ay{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(o[0],o[1],o[2],hn),Promise.all(r)}}class oy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ly{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(o[0],o[1],o[2],hn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Wt)),Promise.all(r)}}class cy{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class hy{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class dy{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fy{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class py{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class my{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const y=new ut,m=new k,p=new jn,A=new k(1,1,1),T=new t0(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&A.fromBufferAttribute(l.SCALE,M),T.setMatrixAt(M,y.compose(m,p,A));for(const M in l)if(M==="_COLOR_0"){const H=l[M];T.instanceColor=new qo(H.array,H.itemSize,H.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Nt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const mh="glTF",Ys=12,au={JSON:1313821514,BIN:5130562};class _y{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ys,r=new DataView(e,Ys);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===au.JSON){const c=new Uint8Array(e,Ys+a,o);this.content=n.decode(c)}else if(l===au.BIN){const c=Ys+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Zo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Zo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=xs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(f)},o,c,hn,d)})})}}class vy{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xy{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class _h extends dr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,A=1-m,T=p-d+h;for(let M=0;M!==o;M++){const H=a[y+M+o],L=a[y+M+l]*u,C=a[g+M+o],U=a[g+M]*u;r[M]=A*H+T*L+m*C+p*U}return r}}const yy=new jn;class My extends _h{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return yy.fromArray(r).normalize().toArray(r),r}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ou={9728:cn,9729:bn,9984:Lu,9985:jr,9986:Ks,9987:hi},lu={33071:Ci,33648:na,10497:Es},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},by={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new rr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function zi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ey(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ty(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ay(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qa(t.attributes):e=i.indices+":"+Qa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qa(i.targets[n]);return e}function Qa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jo(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ry=new ut;class Cy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new J0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new v0(this.options.manager):this.textureLoader=new E0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return zi(r,o,s),li(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(er.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Za[s.type],o=xs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new un(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Za[s.type],c=xs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(f&&f!==h){const p=Math.floor(d/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let T=t.cache.get(A);T||(y=new c(o,p*f,s.count*f/u),T=new Zx(y,f/u),t.cache.add(A,T)),m=new pl(T,l,d%f/u,g)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new un(y,l,g);if(s.sparse!==void 0){const p=Za.SCALAR,A=xs[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,H=new A(a[1],T,s.sparse.count*p),L=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new un(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,U=H.length;C<U;C++){const E=H[C];if(m.setX(E,L[C*l]),l>=2&&m.setY(E,L[C*l+1]),l>=3&&m.setZ(E,L[C*l+2]),l>=4&&m.setW(E,L[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ou[d.magFilter]||bn,u.minFilter=ou[d.minFilter]||hi,u.wrapS=lu[d.wrapS]||Es,u.wrapT=lu[d.wrapT]||Es,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==cn&&u.minFilter!==bn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Kt(y);m.needsUpdate=!0,d(m)}),t.load(er.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),li(h,a),h.userData.mimeType=a.mimeType||wy(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new uh,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ch,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rr}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){const h=s[vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],hn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);const u=r.alphaMode||Ja.OPAQUE;if(u===Ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ja.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Pi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pi){const h=r.emissiveFactor;o.emissive=new it().setRGB(h[0],h[1],h[2],hn)}return r.emissiveTexture!==void 0&&a!==Pi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),li(h,r),t.associations.set(h,{materials:e}),r.extensions&&zi(s,h,r),h})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return cu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Ay(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=cu(new Vn,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Sy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],m=a[f];let p;const A=c[f];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Qx(y,A):new It(y,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=ru(p.geometry,Hu):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=ru(p.geometry,Vo));else if(m.mode===Tn.LINES)p=new n0(y,A);else if(m.mode===Tn.LINE_STRIP)p=new _l(y,A);else if(m.mode===Tn.LINE_LOOP)p=new i0(y,A);else if(m.mode===Tn.POINTS)p=new s0(y,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ty(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),li(p,r),m.extensions&&zi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&zi(s,h[0],r),h[0];const d=new Xi;r.extensions&&zi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Wu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new dl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new ut;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ml(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let A=0,T=d.length;A<T;A++){const M=d[A],H=f[A],L=g[A],C=y[A],U=m[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=n._createAnimationTracks(M,H,L,C,U);if(E)for(let b=0;b<E.length;b++)p.push(E[b])}return new h0(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ry)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new oh:c.length>1?u=new Xi:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),li(u,r),r.extensions&&zi(n,u,r),r.matrix!==void 0){const h=new ut;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Xi;n.name&&(r.name=s.createUniqueName(n.name)),li(r,n),n.extensions&&zi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Xn||d instanceof Kt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ai[r.path]===Ai.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ai[r.path]){case Ai.weights:c=Cs;break;case Ai.rotation:c=Ps;break;case Ai.position:case Ai.scale:c=Ls;break;default:switch(n.itemSize){case 1:c=Cs;break;case 2:case 3:default:c=Ls;break}break}const u=s.interpolation!==void 0?by[s.interpolation]:ir,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ai[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jo(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ps?My:_h;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Py(i,e,t){const n=e.attributes,s=new Cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=Jo(xs[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=Jo(xs[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function cu(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Zo[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return yt.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),li(i,e),Py(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ey(i,e.targets,t):i})}class Ly extends ah{constructor(){super();const e=new Is;e.deleteAttribute("uv");const t=new rr({side:ln}),n=new rr,s=new xl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new It(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new It(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new It(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new It(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new It(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new It(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new It(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new It(e,hs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new It(e,hs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new It(e,hs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new It(e,hs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new It(e,hs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new It(e,hs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function hs(i){const e=new Pi;return e.color.setScalar(i),e}const ds={radial:.55,hemi:25,drop:18};function Dy(i,e,t,n,s,r){const a=Math.max(0,Math.min(1,s));return r.x=(i.x-e.x)*a*ds.radial,r.y=(i.y-e.y)*a*ds.radial,r.z=(i.z-e.z)*a*ds.radial,t==="L"?r.x+=a*ds.hemi:t==="R"&&(r.x-=a*ds.hemi),(n==="cerebellum"||n==="brainstem")&&(r.y-=a*ds.drop),r}var Iy=Ae('<div class="stage svelte-v5k0y"><div class="tip svelte-v5k0y" hidden="" role="presentation"><span class="tt"></span><span class="ts svelte-v5k0y"></span></div> <div class="pin svelte-v5k0y" aria-hidden="true"><span class="lbl svelte-v5k0y"></span><span class="stem svelte-v5k0y"></span><span class="dotp svelte-v5k0y"></span></div></div>');function Uy(i,e){tn(e,!0);let t,n,s,r,a,o;const l=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let c=null,u,h,d,f=null,g=null,y=null;const m=new ci(new k(0,-1,0),1e4),p=[m],A=new k(1,1,1);let T=100,M=!0,H=!1;const L=new Map,C=[],U=new Map,E=new Map,b=[],P=new Map,F=[],O=new it,X=new it("#5b6476"),$=new k,K={x:0,y:0,z:0},oe={x:0,y:0,z:0},Z=new U0,de=new ot,fe=[],ve=new k,he=new it(jh),be=new it(Yh),J=new Map,q=v=>{let w=J.get(v);return w||J.set(v,w=new it(wi[v]??no)),w},Q=Le(()=>e.store.s),ie=Le(()=>_(Q).colorBy),pe=Le(()=>_(Q).sel),Me=Le(()=>_(Q).hover),we=Le(()=>_(Q).xray),Xe=Le(()=>_(Q).isolate),De=Le(()=>_(Q).show),ke=Le(()=>_(Q).explode),I=Le(()=>_(Q).cut),Qe=Le(()=>_(Q).cutAxis),qe=Le(()=>_(Q).rotate),Ve=Le(()=>!!_(Q).quiz),Ie=Le(()=>_(ie).startsWith("data:")?e.dataMaps.find(v=>`data:${v.key}`===_(ie))??null:null);let tt=Dt(!1);wn(()=>{_(ie),_(pe),_(Me),_(we),_(Xe),_(De),_(Ie),e.store.colors,_(tt),le()}),wn(()=>{_(ke),_(tt),xe()}),wn(()=>{_(I),_(Qe),_(tt),je()}),wn(()=>{const v=_(qe);d&&(d.autoRotate=v,d.autoRotateSpeed=1.2,M=!0)});const j={left:[1,.12,0],right:[-1,.12,0],front:[0,.1,1],back:[0,.15,-1],top:[0,1,.001],below:[0,-1,.001]},S=()=>Math.max(1,1.25/((h==null?void 0:h.aspect)||1));function x(v){v==="inside"?Ce(new k,new k(-1,.1,0),T*4.4):Ce(new k,new k(...j[v]),T*3.4)}function D(){Ce(new k,new k(.75,.25,.6),T*3.4)}function Y(v,w){if(!v)return D();const N=Ye(v);if(!N)return;const W=w?new k(...w):N.clone().sub(new k(0,N.y*.2,0));W.length()<T*.15&&W.set(.3,.4,1),Ce(N.multiplyScalar(w?.3:.35),W.normalize(),T*3.7)}function se(v="medmereport-3d.png"){if(!c)return;c.render(u,h);const w=document.createElement("a");w.download=v,w.href=c.domElement.toDataURL("image/png"),w.click()}function ne(v,w){if(_(ie)==="natural")return w.copy(v.inner?be:he);if(_(ie)==="lobes")return w.copy(q(v.lobe));if(_(Ie)){const W=Mf(_(Ie),v.key);return w.setRGB(W[0]/255,W[1]/255,W[2]/255,Wt)}const N=e.store.colors[v.structure];return N?w.setRGB(N[0]/255,N[1]/255,N[2]/255,Wt):w.set(no)}const Te=(v,w)=>!!w&&(w.type==="lobe"?v.lobe===w.id:w.type==="region"&&v.key===w.id);function le(){var w;if(!_(tt))return;const v=!!_(pe)&&_(pe).type!=="vessel";F.length=0;for(const N of C){const W=N.mat,B=Te(N,_(pe)),_e=Te(N,_(Me));ne(N,O),v&&!B&&O.lerp(X,.55),W.color.copy(O),W.emissive.set(B?1013358:_e?3359061:0),W.emissiveIntensity=B?.55:_e?.6:0;const Ee=_(we)&&!N.inner&&!B||_(Xe)&&v&&!B;W.transparent!==Ee&&(W.transparent=Ee,W.needsUpdate=!0),W.opacity=Ee?_(Xe)&&v?.06:.13:1,W.depthWrite=!Ee;const Fe=_(De)[N.layer]!==!1;for(const Ue of N.meshes)Ue.visible=Fe,Ue.renderOrder=Ee?5:0,Fe&&!Ee&&F.push(Ue)}for(const N of b){const W=!!_(De)[N.layer];N.kind==="vessel"&&N.mat.emissive.set(((w=_(pe))==null?void 0:w.type)==="vessel"&&_(pe).id===N.key?8330525:3866640);for(const B of N.meshes)B.visible=W,W&&N.kind==="vessel"&&F.push(B)}M=!0}function xe(){if(_(tt)){for(const v of C){Dy(v.center,oe,v.hemi,v.layer,_(ke),K);for(const w of v.meshes)w.position.copy(E.get(w)).add($.set(K.x,K.y,K.z))}M=!0}}function je(){if(!_(tt))return;const v={x:A.x,y:A.y,z:A.z}[_(Qe)]*.52;m.normal.set(_(Qe)==="x"?-1:0,_(Qe)==="y"?-1:0,_(Qe)==="z"?-1:0),m.constant=_(I)>=.999?1e4:-v+2*v*_(I),M=!0}let ue=null;const Pe=new k,ze=new k;function Ce(v,w,N){if(!h)return;const W=d.target.clone(),B=h.position.clone(),_e=w?w.clone().normalize():B.clone().sub(W).normalize(),Ee=N!==null?N*S():B.distanceTo(W),Fe=v.clone().add(_e.multiplyScalar(Ee));if(l){d.target.copy(v),h.position.copy(Fe),ue=null,M=!0;return}ue={t0:W,p0:B,t1:v.clone(),p1:Fe,start:performance.now(),dur:900}}function Se(v){if(!ue)return;let w=Math.min(1,(v-ue.start)/ue.dur);w=w<.5?4*w*w*w:1-Math.pow(-2*w+2,3)/2,d.target.lerpVectors(ue.t0,ue.t1,w),Pe.copy(ue.p0).sub(ue.t0),ze.copy(ue.p1).sub(ue.t1);const N=Pe.length()+(ze.length()-Pe.length())*w;Pe.normalize().lerp(ze.normalize(),w).normalize().multiplyScalar(N),h.position.copy(d.target).add(Pe),w>=1&&(ue=null)}function Ye(v){const w=new Cn;if(v.type==="vessel")b.forEach(N=>{N.key===v.id&&N.meshes.forEach(W=>w.expandByObject(W))});else for(const N of C)Te(N,v)&&N.meshes.forEach(W=>w.expandByObject(W));return w.isEmpty()?null:w.getCenter(new k)}let Ge=0,rt=0,z=!1,Re=!1,re=!1,te=null;function ce(v,w){if(!c)return null;const N=c.domElement.getBoundingClientRect();de.set((v-N.left)/N.width*2-1,-((w-N.top)/N.height)*2+1),Z.setFromCamera(de,h),fe.length=0,Z.intersectObjects(F,!1,fe);const W=m.constant>1e3;for(const B of fe)if(W||m.distanceToPoint(B.point)>=-.5)return B.object;return null}function ge(v){if(!v)return null;const w=P.get(v);if(w)return{type:"vessel",id:w.key};const N=U.get(v);return N?_(Q).pickBy==="lobe"?{type:"lobe",id:N.lobe}:{type:"region",id:N.key}:null}function Ke(){if(!Re||re)return;Re=!1;const v=z?ge(ce(Ge,rt)):null;if(e.store.dispatch({type:"hover",sel:v}),v&&!_(Ve)){const w=e.label(v);s.textContent=w.title,r.textContent=w.sub??"";const N=t.getBoundingClientRect();n.style.transform=`translate(${Ge-N.left+14}px, ${rt-N.top+14}px)`,n.hidden=!1,c.domElement.style.cursor="pointer"}else n.hidden=!0,c&&(c.domElement.style.cursor="")}function ct(v){Ge=v.clientX,rt=v.clientY,z=!0,Re=!0}function lt(){z=!1,Re=!0,re=!1}function st(v){te=[v.clientX,v.clientY],re=!0,n.hidden=!0,_(Q).rotate&&e.store.dispatch({type:"rotate",on:!1})}function Et(v){if(re=!1,Re=!0,!te||Math.hypot(v.clientX-te[0],v.clientY-te[1])>5){te=null;return}te=null;const w=ce(v.clientX,v.clientY);if(_(Q).quiz){const N=w?U.get(w):null;N&&e.store.dispatch({type:"quizAnswer",picked:N.key});return}e.store.dispatch({type:"select",sel:ge(w)})}function Ot(v){if(_(Q).quiz)return;const w=ge(ce(v.clientX,v.clientY));w&&(e.store.dispatch({type:"select",sel:w}),Y(e.store.s.sel))}let Jn=!1;function _i(){const v=_(pe),w=(v==null?void 0:v.type)==="region"&&!_(Ve)?L.get(v.id):null,N=w==null?void 0:w.meshes[0];let W=!1;if(w&&N&&N.visible&&c&&(ve.copy(w.anchor).applyMatrix4(N.matrixWorld).project(h),ve.z<1&&Math.abs(ve.x)<1.2&&Math.abs(ve.y)<1.2)){const B=c.domElement.clientWidth,_e=c.domElement.clientHeight;a.style.transform=`translate(${(ve.x*.5+.5)*B}px, ${(-ve.y*.5+.5)*_e}px) translate(-50%, -100%)`,W=!0}W!==Jn&&(a.style.opacity=W?"1":"0",Jn=W)}wn(()=>{const v=_(pe);o&&(o.textContent=(v==null?void 0:v.type)==="region"?e.label(v).title:"")});function _n(){return new mn({color:16777215,roughness:.58,metalness:0,clearcoat:.25,clearcoatRoughness:.45,sheen:.35,sheenRoughness:.6,sheenColor:new it("#ffd6e0"),side:Mn,clippingPlanes:p})}async function Qn(v,w){var Fe,Ue;const N=await fetch(v,{credentials:"same-origin",signal:w});if(!N.ok)throw new Error(`HTTP ${N.status}`);const W=+(N.headers.get("content-length")??0);if(!N.body||!W)return(Fe=e.onprogress)==null||Fe.call(e,null),N.arrayBuffer();const B=N.body.getReader(),_e=new Uint8Array(W);let Ee=0;for(;;){const{done:Je,value:et}=await B.read();if(Je)break;if(Ee+et.length>_e.length){const He=new Uint8Array(Math.max(_e.length*2,Ee+et.length));return He.set(_e.subarray(0,Ee)),gi(B,He,Ee,et)}_e.set(et,Ee),Ee+=et.length,(Ue=e.onprogress)==null||Ue.call(e,Math.round(Ee/W*100))}return _e.buffer.slice(0,Ee)}async function gi(v,w,N,W){const B=[w.subarray(0,N),W];for(;;){const{done:Ue,value:Je}=await v.read();if(Ue)break;B.push(Je)}const _e=B.reduce((Ue,Je)=>Ue+Je.length,0),Ee=new Uint8Array(_e);let Fe=0;for(const Ue of B)Ee.set(Ue,Fe),Fe+=Ue.length;return Ee.buffer}function gt(v){try{const w=new DataView(v);if(w.getUint32(0,!0)!==1179937895)return!1;const N=w.getUint32(12,!0),W=new TextDecoder().decode(new Uint8Array(v,20,N));return W.includes("EXT_meshopt_compression")||W.includes("KHR_meshopt_compression")}catch{return!1}}function Lt(v){var Bt,xt;const w=new Map((((Bt=e.regions)==null?void 0:Bt.regions)??[]).map(Ne=>[Ne.key,Ne]));y=v,u.add(y);const N=()=>new mn({color:"#e11d48",roughness:.32,clearcoat:.8,clearcoatRoughness:.2,emissive:"#3b0010",clippingPlanes:p,side:Mn}),W=new mn({color:"#cbd5e1",roughness:.6,transparent:!0,opacity:.1,depthWrite:!1,side:qn,clippingPlanes:p}),B=new mn({color:"#e7e2d3",roughness:.7,clippingPlanes:p,side:Mn}),_e=new Map;let Ee=0,Fe=0;const Ue={regions:new Map,vessels:new Map};y.traverse(Ne=>{var At,vn;if(!Ne.isMesh)return;const Tt=Ne;let _t=Tt,ht=null;for(;_t&&!(ht=kh(_t.name));)_t=_t.parent;const zt=Tt.geometry;if(zt.attributes.normal||zt.computeVertexNormals(),Ee+=(zt.index?zt.index.count:zt.attributes.position.count)/3,Fe++,(vn=(At=Tt.material)==null?void 0:At.dispose)==null||vn.call(At),!ht){Tt.visible=!1;return}if(ht.kind!=="region"){const Dn=ht.kind==="skin"?"skin":ht.kind==="bone"?"bone":/neck/i.test(ht.name)?"neck":"vessels";let Vt=_e.get(ht.key);Vt||(Vt={key:ht.key,kind:ht.kind,layer:Dn,mat:ht.kind==="skin"?W:ht.kind==="bone"?B:N(),meshes:[]},_e.set(ht.key,Vt),b.push(Vt),ht.kind==="vessel"&&Ue.vessels.set(ht.key,Dn)),Tt.material=Vt.mat,ht.kind==="skin"&&(Tt.renderOrder=10),Vt.meshes.push(Tt),P.set(Tt,Vt);return}const Ft=w.get(ht.key);let sn=L.get(ht.key);if(!sn){const Dn=e.lobeOf(ht.structure)||yu(ht.structure);sn={key:ht.key,hemi:ht.hemi,structure:ht.structure,lobe:Dn,layer:Gh(ht.structure,ht.hemi,Ft==null?void 0:Ft.group),inner:(Ft==null?void 0:Ft.inner)??Vh(ht.structure),mat:_n(),meshes:[],center:new k,anchor:new k},L.set(ht.key,sn),C.push(sn),Ue.regions.set(ht.key,{layer:sn.layer,inner:sn.inner,lobe:Dn})}Tt.material=sn.mat,sn.meshes.push(Tt),U.set(Tt,sn)});const Je=new Cn;C.length?C.forEach(Ne=>Ne.meshes.forEach(Tt=>Je.expandByObject(Tt))):Je.setFromObject(y),Je.isEmpty()&&Je.set(new k(-50,-50,-50),new k(50,50,50));const et=Je.getCenter(new k);Je.getSize(A),T=Math.max(40,A.length()/2),y.position.sub(et),y.updateMatrixWorld(!0);const He=new Cn,Ze=new k,nt=new k,mt=new ut;for(const Ne of C){He.makeEmpty(),Ne.meshes.forEach(zt=>{He.expandByObject(zt),E.set(zt,zt.position.clone())}),He.getCenter(Ne.center);const Tt=Ne.meshes[0],_t=Tt.geometry.attributes.position;if(Ze.copy(Ne.center),Ne.inner||Ze.lengthSq()<1){mt.copy(Tt.matrixWorld).invert(),Ne.anchor.copy(Ne.center).applyMatrix4(mt);continue}Ze.normalize();let ht=-1/0;for(let zt=0;zt<_t.count;zt++){nt.fromBufferAttribute(_t,zt).applyMatrix4(Tt.matrixWorld);const Ft=nt.dot(Ze);Ft>ht&&(ht=Ft,Ne.anchor.fromBufferAttribute(_t,zt))}}for(const Ne of b)Ne.meshes.forEach(Tt=>E.set(Tt,Tt.position.clone()));h.near=Math.max(.5,T/100),h.far=T*40,h.updateProjectionMatrix(),d.minDistance=T*.7,d.maxDistance=T*11,g&&(g.scale.setScalar(T/125),g.position.y=-A.y/2-T*.24),h.position.set(T*3.4*.72,T*1.3,T*2.6),d.target.set(0,0,0),d.update(),e.store.init(Ue,[..._e.values()].map(Ne=>Ne.layer)),$e(tt,!0),D(),(xt=e.onloaded)==null||xt.call(e,{triangles:Math.round(Ee),meshes:Fe})}Th(()=>{var et,He;const v=new AbortController;try{c=new Kx({antialias:!0,powerPreference:"high-performance"})}catch{(et=e.onerror)==null||et.call(e,"webgl");return}c.setPixelRatio(Math.min(devicePixelRatio||1,2)),c.toneMapping=Cu,c.toneMappingExposure=.82,c.outputColorSpace=Wt,c.localClippingEnabled=!0;const w=c.domElement;w.setAttribute("role","img"),w.setAttribute("aria-label",e.ariaLabel),w.tabIndex=-1,t.prepend(w),u=new ah;const N=new Wo(c),W=new Ly;f=N.fromScene(W,.04).texture,W.traverse(Ze=>{const nt=Ze;nt.isMesh&&(nt.geometry.dispose(),nt.material.dispose())}),N.dispose(),u.environment=f,u.environmentIntensity=.55,h=new on(32,1,1,5e3),d=new F0(h,w),d.enableDamping=!0,d.dampingFactor=.08,d.rotateSpeed=.8,d.addEventListener("change",()=>M=!0),d.addEventListener("start",()=>{ue=null});const B=new Yo(16777215,1.6);B.position.set(-200,300,400),u.add(B);const _e=new Yo(8965375,1.2);_e.position.set(300,-100,-400),u.add(_e),u.add(new x0(14674175,1708064,.5)),h.add(new xl(16777215,.6,0,0)),u.add(h),g=new It(new gl(170,64),new mi({transparent:!0,depthWrite:!1,uniforms:{c:{value:new it("#2dd4bf")}},vertexShader:"varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying vec2 vU; void main(){ float d=distance(vU,vec2(.5))*2.; float a=smoothstep(1.,0.,d)*.16 + smoothstep(.02,0.,abs(d-.82))*.25; gl_FragColor=vec4(c,a); }"})),g.rotation.x=-Math.PI/2,u.add(g);const Ee=()=>{if(!c)return;const Ze=Math.max(1,t.clientWidth),nt=Math.max(1,t.clientHeight);c.setSize(Ze,nt),h.aspect=Ze/nt,h.updateProjectionMatrix(),M=!0},Fe=new ResizeObserver(Ee);Fe.observe(t),Ee(),w.addEventListener("pointermove",ct),w.addEventListener("pointerleave",lt),w.addEventListener("pointerdown",st),w.addEventListener("pointerup",Et),w.addEventListener("dblclick",Ot);const Ue=Ze=>{var nt;Ze.preventDefault(),(nt=e.onerror)==null||nt.call(e,"context")};w.addEventListener("webglcontextlost",Ue);const Je=()=>!!_(pe)&&_(pe).type!=="vessel"&&!l;return c.setAnimationLoop(Ze=>{if(ue&&(Se(Ze),M=!0),d.update()&&(M=!0),Ke(),Je()){const nt=.45+Math.sin(Ze/380)*.15;for(const mt of C)Te(mt,_(pe))&&(mt.mat.emissiveIntensity=nt);M=!0}M&&c&&(M=!1,c.render(u,h),_i())}),(He=e.onprogress)==null||He.call(e,0),Qn(e.url,v.signal).then(async Ze=>{const nt=new Z0;if(gt(Ze)){const{MeshoptDecoder:mt}=await Ah(async()=>{const{MeshoptDecoder:Bt}=await import("./meshopt_decoder.module-BbCP70j-.js");return{MeshoptDecoder:Bt}},[]);nt.setMeshoptDecoder(mt)}return nt.parseAsync(Ze,"")}).then(Ze=>{H||Lt(Ze.scene)}).catch(Ze=>{var nt;!H&&(Ze==null?void 0:Ze.name)!=="AbortError"&&((nt=e.onerror)==null||nt.call(e,String((Ze==null?void 0:Ze.message)??Ze)))}),()=>{H=!0,v.abort(),Fe.disconnect(),w.removeEventListener("pointermove",ct),w.removeEventListener("pointerleave",lt),w.removeEventListener("pointerdown",st),w.removeEventListener("pointerup",Et),w.removeEventListener("dblclick",Ot),w.removeEventListener("webglcontextlost",Ue),c==null||c.setAnimationLoop(null),d.dispose();const Ze=new Set;u.traverse(nt=>{var Bt;const mt=nt;mt.isMesh&&((Bt=mt.geometry)==null||Bt.dispose(),(Array.isArray(mt.material)?mt.material:[mt.material]).forEach(xt=>xt&&Ze.add(xt)))}),Ze.forEach(nt=>nt.dispose()),f==null||f.dispose(),c==null||c.renderLists.dispose(),c==null||c.dispose(),c==null||c.forceContextLoss(),w.remove(),c=null,L.clear(),C.length=0,b.length=0,F.length=0,U.clear(),P.clear(),E.clear()}});var Ht={view:x,home:D,flyToSel:Y,screenshot:se},bt=Iy(),gn=ae(bt),Sn=ae(gn);An(Sn,v=>s=v,()=>s);var Gn=R(Sn);An(Gn,v=>r=v,()=>r),An(gn,v=>n=v,()=>n);var Ln=R(gn,2),$n=ae(Ln);return An($n,v=>o=v,()=>o),An(Ln,v=>a=v,()=>a),An(bt,v=>t=v,()=>t),me(i,bt),nn(Ht)}const gh={hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,vessels:!1,neck:!1,bone:!1,skin:!1};function uu(i){return{mode:"mine",colorBy:"anatomy",pickBy:"structure",sel:null,hover:null,show:Object.fromEntries(i.map(e=>[e,gh[e]])),xray:!1,isolate:!1,explode:0,cut:1,cutAxis:"y",rotate:!1,tour:null,quiz:null}}const Ny=(i,e)=>(i==null?void 0:i.type)===(e==null?void 0:e.type)&&(i==null?void 0:i.id)===(e==null?void 0:e.id),Hi=(i,e)=>e in i.show;function hu(i,e,t){if((i==null?void 0:i.type)==="region"&&e==="lobe"){const n=t.regions.get(i.id);if(n)return{type:"lobe",id:n.lobe}}return i}function Oy(i,e,t){switch(e.type){case"mode":return e.mode===i.mode?i:{...i,mode:e.mode,...e.mode==="mine"?{tour:null,quiz:null}:{}};case"colorBy":return{...i,colorBy:e.colorBy};case"pickBy":{const n=hu(i.sel,e.pickBy,t);return{...i,pickBy:e.pickBy,sel:n}}case"select":{const n=hu(e.sel,i.pickBy,t),s={...i,sel:n,isolate:n?i.isolate:!1};if((n==null?void 0:n.type)==="region"){const r=t.regions.get(n.id);r&&(Hi(i,r.layer)&&!i.show[r.layer]&&(s.show={...i.show,[r.layer]:!0}),r.inner&&!i.xray&&(s.xray=!0))}else if((n==null?void 0:n.type)==="vessel"){const r=t.vessels.get(n.id);r&&Hi(i,r)&&!i.show[r]&&(s.show={...i.show,[r]:!0})}return s}case"hover":return Ny(e.sel,i.hover)?i:{...i,hover:e.sel};case"layer":{if(!Hi(i,e.layer))return i;const n=e.on??!i.show[e.layer];return n===i.show[e.layer]?i:{...i,show:{...i.show,[e.layer]:n}}}case"xray":{const n=e.on??!i.xray,s={...i.show};if(n)for(const r of["deep","ventricle","vessels"])Hi(i,r)&&(s[r]=!0);return{...i,xray:n,show:s}}case"isolate":{const n=e.on??!i.isolate;return{...i,isolate:n&&!!i.sel}}case"explode":return{...i,explode:du(e.value)};case"cut":return{...i,cut:du(e.value)};case"cutAxis":return{...i,cutAxis:e.axis};case"rotate":return{...i,rotate:e.on??!i.rotate};case"view":return e.view==="inside"&&Hi(i,"hemi_R")?{...i,show:{...i.show,hemi_R:!1}}:i;case"reset":{const n=Object.fromEntries(Object.keys(i.show).map(s=>[s,gh[s]]));return{...i,sel:null,hover:null,show:n,xray:!1,isolate:!1,explode:0,cut:1,rotate:!1,tour:null,quiz:null}}case"tour":{const n={...i.show};return Hi(i,"hemi_R")&&(n.hemi_R=!e.hideR),{...i,mode:"learn",quiz:null,tour:{i:e.step},sel:{type:"lobe",id:e.lobe},xray:e.xray,isolate:!1,show:n}}case"tourEnd":{if(!i.tour)return i;const n={...i.show};return Hi(i,"hemi_R")&&(n.hemi_R=!0),{...i,tour:null,xray:!1,sel:null,show:n}}case"quizStart":return{...i,mode:"learn",tour:null,sel:null,isolate:!1,quiz:{target:e.target,score:0,n:0,tries:0,last:null,revealing:!1}};case"quizNext":return i.quiz?{...i,sel:null,quiz:{...i.quiz,target:e.target,tries:0,last:null,revealing:!1}}:i;case"quizAnswer":{const n=i.quiz;if(!n||n.revealing)return i;const s=e.picked===n.target;if(s)return{...i,sel:{type:"region",id:n.target},quiz:{...n,score:n.score+1,n:n.n+1,last:{ok:s,picked:e.picked},revealing:!0}};const r=n.tries+1,a=r>=2;return{...i,sel:a?{type:"region",id:n.target}:i.sel,quiz:{...n,tries:r,n:a?n.n+1:n.n,last:{ok:s,picked:e.picked},revealing:a}}}case"quizSkip":{const n=i.quiz;return!n||n.revealing?i:{...i,sel:{type:"region",id:n.target},quiz:{...n,n:n.n+1,last:null,revealing:!0}}}case"quizEnd":return i.quiz?{...i,quiz:null,sel:null}:i}}const du=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),Fy=[{lobe:"frontal",view:[.6,.35,1]},{lobe:"parietal",view:[.5,.8,-.4]},{lobe:"temporal",view:[1,-.1,.1]},{lobe:"occipital",view:[.3,.2,-1]},{lobe:"insular",view:[1,.1,.2],xray:!0},{lobe:"limbic",view:[-1,.1,0],hideR:!0},{lobe:"subcortical",view:[.6,.5,.8],xray:!0},{lobe:"ventricles",view:[.6,.5,.8],xray:!0},{lobe:"cerebellum",view:[.4,-.2,-1]},{lobe:"brainstem",view:[-1,-.1,.2],hideR:!0}],By=i=>Fy.filter(e=>i.has(e.lobe));function fu(i,e){const t=[];for(const[n,s]of e.regions)!s.inner&&i.show[s.layer]&&t.push(n);return t}function pu(i,e,t=Math.random){if(!i.length)return null;const n=i.length>1&&e?i.filter(s=>s!==e):i;return n[Math.min(n.length-1,Math.floor(t()*n.length))]}const ky=["hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle","vessels","neck","bone","skin"];var ar,or,lr,cr;class zy{constructor(){Bs(this,ar,Dt($o(uu([]))));Bs(this,or,Dt({keys:[],vessels:[],layers:[],lobes:new Set,present:new Map}));Bs(this,lr,Dt({}));Bs(this,cr,Dt(!1));da(this,"facts",{regions:new Map,vessels:new Map});da(this,"dispatch",e=>{const t=Oy(this.s,e,this.facts);t!==this.s&&(this.s=t)})}get s(){return _(ei(this,ar))}set s(e){$e(ei(this,ar),e,!0)}get index(){return _(ei(this,or))}set index(e){$e(ei(this,or),e)}get colors(){return _(ei(this,lr))}set colors(e){$e(ei(this,lr),e)}get ready(){return _(ei(this,cr))}set ready(e){$e(ei(this,cr),e,!0)}init(e,t){this.facts=e;const n=new Set(t),s=new Set,r=new Map,a=new Map;for(const[c,u]of e.regions){n.add(u.layer),s.add(u.lobe);const[h,d]=[c.slice(0,1),c.slice(2)];r.has(d)||r.set(d,new Set),r.get(d).add(h),a.set(d,u.lobe)}for(const c of e.vessels.values())n.add(c);const o=ky.filter(c=>n.has(c)),l=[...r.keys()].sort((c,u)=>mu(c)-mu(u)||c.localeCompare(u));this.colors=$h(l,c=>a.get(c)??"other"),this.index={keys:[...e.regions.keys()],vessels:[...e.vessels.keys()],layers:o,lobes:s,present:r},this.s={...uu(o),mode:this.s.mode},this.ready=!0}}ar=new WeakMap,or=new WeakMap,lr=new WeakMap,cr=new WeakMap;const mu=i=>{const e=Hh.indexOf(i);return e<0?1e6:e};var Hy=Ae('<button type="button"> </button>'),Vy=Ae('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button> <!></li>'),Gy=Ae('<ul role="list" class="svelte-1r3olto"></ul>'),Wy=Ae('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button> <button type="button"><!></button></div> <!></div>'),Xy=Ae('<p class="none faint svelte-1r3olto"> </p>'),qy=Ae('<div class="tree svelte-1r3olto"><label class="search svelte-1r3olto"><!> <span class="sr-only"> </span> <input type="search" autocomplete="off" spellcheck="false" class="svelte-1r3olto"/> <kbd aria-hidden="true" class="svelte-1r3olto">/</kbd></label> <div class="th svelte-1r3olto"><span> </span><span class="n svelte-1r3olto"> </span></div> <div class="list svelte-1r3olto"></div></div>');function jy(i,e){tn(e,!0);let t=Dt(""),n,s,r=$o({});function a(){n==null||n.focus(),n==null||n.select()}const o=Le(()=>{const F=new Map;for(const X of e.store.index.present.keys()){const $=e.lobeOfStructure(X);F.has($)||F.set($,[]),F.get($).push(X)}return[...$a,...[...F.keys()].filter(X=>!$a.includes(X))].filter(X=>F.has(X)).map(X=>({lobe:X,items:F.get(X).map($=>({id:$,name:e.structName($),hs:[...e.store.index.present.get($)].sort()})).sort(($,K)=>$.name.localeCompare(K.name))}))}),l=Le(()=>_(t).trim().toLowerCase()),c=Le(()=>_(l)?_(o).map(F=>({...F,items:F.items.filter(O=>e.search(O.id).includes(_(l)))})).filter(F=>F.items.length):_(o)),u=Le(()=>e.store.index.keys.length),h=Le(()=>e.store.s.sel),d=Le(()=>{var F;return((F=_(h))==null?void 0:F.type)==="region"?_(h).id.slice(2):null});wn(()=>{const F=_(d);if(!F)return;const O=e.lobeOfStructure(F);r[O]||(r[O]=!0),queueMicrotask(()=>{var X;return(X=s==null?void 0:s.querySelector(`[data-id="${CSS.escape(F)}"]`))==null?void 0:X.scrollIntoView({block:"nearest"})})});const f=F=>F.includes("M")?"M":F.includes("L")?"L":F[0];function g(F){var O,X;if(F.key==="Enter"){const $=(O=_(c)[0])==null?void 0:O.items[0];$&&(F.preventDefault(),e.onpick(`${f($.hs)}|${$.id}`))}else F.key==="Escape"?_(t)?($e(t,""),F.stopPropagation()):n.blur():F.key==="ArrowDown"&&(F.preventDefault(),(X=s.querySelector("button"))==null||X.focus())}var y={focus:a},m=qy(),p=ae(m),A=ae(p);Mt(A,{name:"search",size:15});var T=R(A,2),M=ee(T,!0),H=R(T,2);An(H,F=>n=F,()=>n);var L=R(p,2),C=ae(L),U=ee(C,!0),E=R(C),b=ee(E,!0),P=R(L,2);return kt(P,21,()=>_(c),F=>F.lobe,(F,O)=>{const X=Le(()=>!!_(l)||!!r[_(O).lobe]);var $=Wy(),K=ae($),oe=ae(K),Z=ae(oe);let de;var fe=R(Z,2),ve=R(fe,2),he=ee(ve,!0),be=R(ve,2),J=ee(be,!0),q=R(oe,2);let Q;var ie=ae(q);Mt(ie,{name:"focus",size:13});var pe=R(K,2);{var Me=we=>{var Xe=Gy();kt(Xe,21,()=>_(O).items,De=>De.id,(De,ke)=>{const I=Le(()=>e.store.colors[_(ke).id]);var Qe=Vy();let qe;var Ve=ae(Qe),Ie=ae(Ve),tt=R(Ie,2),j=ee(tt,!0),S=R(Ve,2);kt(S,17,()=>_(ke).hs.filter(x=>x!=="M"),pn,(x,D)=>{var Y=Hy();let se;var ne=ee(Y,!0);ye((Te,le)=>{var xe,je;se=Ut(Y,1,"lr svelte-1r3olto",null,se,{on:((xe=_(h))==null?void 0:xe.type)==="region"&&_(h).id===`${_(D)}|${_(ke).id}`}),Oe(Y,"aria-label",Te),Oe(Y,"aria-pressed",((je=_(h))==null?void 0:je.type)==="region"&&_(h).id===`${_(D)}|${_(ke).id}`),G(ne,le)},[()=>V(_(D)==="L"?"side.leftOf":"side.rightOf",{name:_(ke).name}),()=>V(_(D)==="L"?"side.L":"side.R")]),at("click",Y,()=>e.onpick(`${_(D)}|${_(ke).id}`)),me(x,Y)}),ye(x=>{qe=Ut(Qe,1,"it svelte-1r3olto",null,qe,{sel:_(d)===_(ke).id}),Oe(Qe,"data-id",_(ke).id),Oe(Ve,"aria-current",_(d)===_(ke).id?"true":void 0),Jt(Ie,`background:${x??""}`),G(j,_(ke).name)},[()=>_(I)?Tu(_(I)):"var(--text-3)"]),at("click",Ve,()=>e.onpick(`${f(_(ke).hs)}|${_(ke).id}`)),me(De,Qe)}),me(we,Xe)};We(pe,we=>{_(X)&&we(Me)})}ye((we,Xe,De,ke)=>{var I;Oe(oe,"aria-expanded",_(X)),de=Ut(Z,1,"car svelte-1r3olto",null,de,{o:_(X)}),Jt(fe,`background:${we??""}`),G(he,Xe),G(J,_(O).items.length),Q=Ut(q,1,"all svelte-1r3olto",null,Q,{on:((I=_(h))==null?void 0:I.type)==="lobe"&&_(h).id===_(O).lobe}),Oe(q,"aria-label",De),Oe(q,"title",ke)},[()=>ur(_(O).lobe),()=>e.lobeName(_(O).lobe),()=>V("m3d.selectLobe",{name:e.lobeName(_(O).lobe)}),()=>V("m3d.selectLobe",{name:e.lobeName(_(O).lobe)})]),at("click",oe,()=>r[_(O).lobe]=!r[_(O).lobe]),at("click",q,()=>e.onpicklobe(_(O).lobe)),me(F,$)},F=>{var O=Xy(),X=ee(O,!0);ye($=>G(X,$),[()=>V("m3d.noMatch")]),me(F,O)}),An(P,F=>s=F,()=>s),ye((F,O,X)=>{G(M,F),Oe(H,"placeholder",O),G(U,X),G(b,_(u))},[()=>V("m3d.search"),()=>V("m3d.search.ph"),()=>V("m3d.structures")]),at("keydown",H,g),wh(H,()=>_(t),F=>$e(t,F)),me(i,m),nn(y)}Hn(["keydown","click"]);var Yy=Ae('<p class="err svelte-1bo6tlo" role="alert"> </p>'),Ky=Ae('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo"> </p> <ul class="pts svelte-1bo6tlo"><li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li></ul> <!> <button type="button" class="btn primary lg svelte-1bo6tlo"><!> </button>',1),Zy=Ae("<li><!> </li>"),Jy=Ae('<ol class="stages svelte-1bo6tlo"></ol>'),Qy=Ae('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo" aria-live="polite"> </p> <div class="bar svelte-1bo6tlo" role="progressbar"><i class="svelte-1bo6tlo"></i></div> <div class="pct faint svelte-1bo6tlo"> </div> <!> <p class="faint small svelte-1bo6tlo"> </p> <button type="button" class="btn svelte-1bo6tlo"> </button>',1),$y=Ae('<section class="panel build fade-in svelte-1bo6tlo" aria-labelledby="b-t"><div class="ic svelte-1bo6tlo" aria-hidden="true"><!></div> <!></section>');function eM(i,e){tn(e,!0);let t=Dt(null),n=Dt(""),s=Dt(0),r=Dt(null),a=Dt(!1),o=null;const l=$o([]),c=M=>Qo(`mstage.${M}`)?V(`mstage.${M}`):V("mstage.working"),u=Le(()=>Math.round(Math.max(0,Math.min(100,_(s))))),h=Le(()=>l);async function d(){$e(r,null),$e(n,""),$e(s,0),l.length=0;try{$e(t,await Rh(e.studyId),!0),o=Ch(_(t).id,M=>{$e(n,M.stage,!0),$e(s,M.pct,!0),M.stage&&!l.includes(M.stage)&&l.push(M.stage)},M=>{$e(t,null),$e(a,!1),M.status==="done"?e.ondone():M.status==="cancelled"?$e(r,null):$e(r,M.error||V("m3d.build.failed"),!0)})}catch(M){$e(t,null),$e(r,String((M==null?void 0:M.message)??M),!0)}}async function f(){if(_(t)){$e(a,!0);try{await Ph(_(t).id)}catch{$e(a,!1)}}}gu(()=>o==null?void 0:o());var g=$y(),y=ae(g),m=ae(y);Mt(m,{name:"cube",size:30});var p=R(y,2);{var A=M=>{var H=Ky(),L=ft(H),C=ee(L,!0),U=R(L,2),E=ee(U,!0),b=R(U,2),P=ae(b),F=ae(P);Mt(F,{name:"lock",size:15});var O=R(F,1,!0),X=R(P,2),$=ae(X);Mt($,{name:"clock",size:15});var K=R($,1,!0),oe=R(X,2),Z=ae(oe);Mt(Z,{name:"info",size:15});var de=R(Z,1,!0),fe=R(b,2);{var ve=q=>{var Q=Yy(),ie=ee(Q,!0);ye(pe=>G(ie,pe),[()=>V("m3d.build.error",{msg:_(r)})]),me(q,Q)};We(fe,q=>{_(r)&&q(ve)})}var he=R(fe,2),be=ae(he);Mt(be,{name:"cube",size:17});var J=R(be,1,!0);ye((q,Q,ie,pe,Me,we)=>{G(C,q),G(E,Q),G(O,ie),G(K,pe),G(de,Me),G(J,we)},[()=>V("m3d.build.title"),()=>V("m3d.build.lead"),()=>V("m3d.build.p1"),()=>V("m3d.build.p2"),()=>V("m3d.build.p3"),()=>_(r)?V("m3d.build.retry"):V("m3d.build.cta")]),at("click",he,d),me(M,H)},T=M=>{var H=Qy(),L=ft(H),C=ee(L,!0),U=R(L,2),E=ee(U),b=R(U,2);Oe(b,"aria-valuemin",0),Oe(b,"aria-valuemax",100);var P=ee(b),F=R(b,2),O=ee(F),X=R(F,2);{var $=fe=>{var ve=Jy();kt(ve,21,()=>_(h),pn,(he,be)=>{var J=Zy();let q;var Q=ae(J);{let pe=Le(()=>_(be)===_(n)?"spark":"check");Mt(Q,{get name(){return _(pe)},size:13})}var ie=R(Q,1,!0);ye(pe=>{q=Ut(J,1,"svelte-1bo6tlo",null,q,{now:_(be)===_(n)}),G(ie,pe)},[()=>c(_(be))]),me(he,J)}),me(fe,ve)};We(X,fe=>{_(h).length&&fe($)})}var K=R(X,2),oe=ee(K,!0),Z=R(K,2),de=ee(Z,!0);ye((fe,ve,he,be,J)=>{G(C,fe),G(E,`${ve??""}…`),Oe(b,"aria-valuenow",_(u)),Oe(b,"aria-label",he),Jt(P,`width:${_(u)??""}%`),G(O,`${_(u)??""}%`),G(oe,be),Z.disabled=_(a),G(de,J)},[()=>V("m3d.build.progress"),()=>_(n)?c(_(n)):V("mstage.starting"),()=>V("m3d.build.progress"),()=>V("m3d.build.note"),()=>_(a)?V("import.progress.cancelling"):V("common.cancel")]),at("click",Z,f),me(M,H)};We(p,M=>{_(t)?M(T,-1):M(A)})}me(i,g),nn()}Hn(["click"]);var tM=Ae('<div class="center svelte-yes7qw" role="status"><div class="spinner svelte-yes7qw"></div></div>'),nM=Ae('<section class="panel msg svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p><p class="faint mono svelte-yes7qw"> </p> <a class="btn svelte-yes7qw"><!> </a></section>'),iM=Ae('<nav class="crumbs faint svelte-yes7qw"><a class="svelte-yes7qw"> </a> <span aria-hidden="true" class="svelte-yes7qw">›</span> <span aria-current="page" class="svelte-yes7qw"> </span></nav> <!>',1),sM=Ae('<p class="faint mono svelte-yes7qw"> </p>'),rM=Ae('<section class="panel msg over svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p> <!></section>'),aM=Ae('<div class="loading panel svelte-yes7qw" role="status" aria-live="polite"><span class="svelte-yes7qw"> </span> <div class="bar svelte-yes7qw"><i></i></div></div>'),oM=Ae('<div class="top svelte-yes7qw"><!></div>'),lM=Ae('<div class="m3d svelte-yes7qw"><!> <!> <!> <aside id="m3d-controls"><div class="lh svelte-yes7qw"><a class="back svelte-yes7qw"><!></a> <div class="st svelte-yes7qw"><b class="svelte-yes7qw"> </b><small class="faint svelte-yes7qw"> </small></div> <button type="button" class="btn icon mob svelte-yes7qw"><!></button></div> <!></aside> <aside id="m3d-card"><button type="button" class="btn icon mob closer svelte-yes7qw"><!></button> <!></aside> <!> <div class="bottom svelte-yes7qw"><!> <!></div> <p class="sr-only svelte-yes7qw" aria-live="polite"> </p></div>');function hM(i,e){tn(e,!0);let t=Dt("loading"),n=Dt(null),s=Dt(null),r=Dt(null),a=Dt(null),o=Dt(null),l=Dt(null),c=Dt(null),u=Dt(0),h=Dt(!1),d=Dt(null);const f=new zy;let g=Dt(null),y=Dt(null),m=Dt(!1),p=Dt(!1);const A=Le(()=>e.params.id),T=Le(()=>encodeURIComponent(e.params.id));async function M(j){$e(t,"loading"),$e(n,null),$e(h,!1),$e(d,null);try{const[S,x]=await Promise.all([Dh(j).catch(()=>null),Ih(j)]);if($e(s,S,!0),!x){$e(t,"missing");return}$e(r,x,!0);const[D,Y,se]=await Promise.all([Uh(j),Nh(j),wl("en")]);$e(a,D),$e(o,Y),$e(l,se),$e(t,"ready")}catch(S){$e(n,String((S==null?void 0:S.message)??S),!0),$e(t,"error")}}wn(()=>{M(_(A))}),wn(()=>{const j=On.lang;$e(c,null),j!=="en"&&wl(j).then(S=>{On.lang===j&&$e(c,S)})});const H=Le(()=>Xh(_(l),On.lang,_(c))),L=(j,S)=>Qo(j)?V(j,S):null,C=Le(()=>({kb:_(H),tr:L,en:_(l),lang:On.lang})),U=Le(()=>yf(_(o))),E=Le(()=>{var j;return new Map((((j=_(a))==null?void 0:j.regions)??[]).map(S=>[S.key,S]))}),b=j=>bu(_(H),j),P=j=>L(`measure.${j.key}`)??j.label,F=j=>L(`measure.${j.key}.short`)??L(`measure.${j.key}`)??j.label,O=j=>j.type==="lobe"?ui(_(C),j.id):j.type==="vessel"?V(/neck/i.test(j.id)?"card.vessel.neck":"card.vessel.brain"):to(_(C),j.id),X=j=>({title:O(j),sub:j.type==="region"?ui(_(C),b(j.id.slice(2))):j.type==="vessel"?V("m3d.vessel.sub"):void 0}),$=Le(()=>f.s),K=Le(()=>_($).colorBy.startsWith("data:")?_(U).find(j=>`data:${j.key}`===_($).colorBy)??null:null),oe=Le(()=>By(f.index.lobes)),Z=Le(()=>_($).sel?V("m3d.announce",{name:O(_($).sel)}):f.ready?V("m3d.announce.none"):"");function de(j,S=!1){var x;f.dispatch({type:"select",sel:j}),S&&((x=_(g))==null||x.flyToSel(f.s.sel))}function fe(j){_($).quiz||de({type:"region",id:j},!0)}function ve(j){_($).quiz||de({type:"lobe",id:j},!0)}function he(j){var S;f.dispatch({type:"view",view:j}),(S=_(g))==null||S.view(j)}function be(){var j;f.dispatch({type:"reset"}),(j=_(g))==null||j.home()}function J(j){const S=_(oe)[j];S&&(f.dispatch({type:"tour",step:j,lobe:S.lobe,xray:!!S.xray,hideR:!!S.hideR}),Rl().then(()=>{var x;return(x=_(g))==null?void 0:x.flyToSel({type:"lobe",id:S.lobe},S.view)}))}const q=()=>J(0),Q=j=>{var S;return J(Math.max(0,Math.min(_(oe).length-1,(((S=_($).tour)==null?void 0:S.i)??-1)+j)))};function ie(){var j;f.dispatch({type:"tourEnd"}),(j=_(g))==null||j.home()}function pe(){const j=pu(fu(f.s,f.facts),null);j&&f.dispatch({type:"quizStart",target:j})}let Me=0;wn(()=>{var S;const j=_($).quiz;if(j!=null&&j.revealing)return Me=window.setTimeout(()=>{const x=pu(fu(f.s,f.facts),j.target);x&&f.dispatch({type:"quizNext",target:x})},(S=j.last)!=null&&S.ok?1300:1700),()=>clearTimeout(Me)}),gu(()=>clearTimeout(Me));function we(){f.dispatch({type:"xray",on:!0});const j=f.index.vessels.find(S=>!/neck/i.test(S))??f.index.vessels[0];j&&de({type:"vessel",id:j})}const Xe=Le(()=>({studyId:_(A),kb:_(H),namer:_(C),stats:_(o),regions:_(a),regionByKey:_(E),status:_(r),store:f,measureLabel:P,tourLen:_(oe).length,act:{select:de,tour:q,tourStep:Q,tourEnd:ie,quiz:pe,showVessels:we}})),De=()=>typeof matchMedia<"u"&&matchMedia("(max-width: 900px)").matches;wn(()=>{_($).sel&&!_($).quiz&&De()&&($e(p,!0),$e(m,!1))});function ke(j){if(_(t)!=="ready"||j.ctrlKey||j.metaKey||j.altKey||j.defaultPrevented)return;const S=j.target;if(!(S&&(S.isContentEditable||S.tagName==="TEXTAREA"||S.tagName==="SELECT"||S.tagName==="INPUT"&&S.type!=="range"&&S.type!=="checkbox")))if(j.key==="Escape"){if(_($).quiz)f.dispatch({type:"quizEnd"});else if(_($).tour)ie();else if(_(m)||_(p))$e(m,!1),$e(p,!1);else if(_($).sel)de(null);else return;j.preventDefault()}else j.key==="/"?(j.preventDefault(),De()&&($e(m,!0),$e(p,!1)),Rl().then(()=>{var D;return(D=_(y))==null?void 0:D.focus()})):j.key==="x"||j.key==="X"?f.dispatch({type:"xray"}):(j.key==="i"||j.key==="I")&&_($).sel&&f.dispatch({type:"isolate"})}var I=aa();Lh("keydown",Oh,ke);var Qe=ft(I);{var qe=j=>{var S=tM(),x=ee(S);ye(D=>Oe(x,"aria-label",D),[()=>V("common.loading")]),me(j,S)},Ve=j=>{var S=nM(),x=ae(S),D=ee(x,!0),Y=R(x),se=ee(Y,!0),ne=R(Y),Te=ee(ne,!0),le=R(ne,2),xe=ae(le);Mt(xe,{name:"back",size:16});var je=R(xe,1,!0);Xr(le,ue=>{var Pe;return(Pe=qr)==null?void 0:Pe(ue)}),ye((ue,Pe,ze)=>{G(D,ue),G(se,Pe),G(Te,_(n)),Oe(le,"href",`/study/${_(T)??""}`),G(je,ze)},[()=>V("m3d.error.t"),()=>V("m3d.error.d"),()=>V("view.back")]),me(j,S)},Ie=j=>{var S=iM(),x=ft(S),D=ae(x),Y=ee(D,!0);Xr(D,le=>{var xe;return(xe=qr)==null?void 0:xe(le)});var se=R(D,4),ne=ee(se,!0),Te=R(x,2);eM(Te,{get studyId(){return e.params.id},ondone:()=>M(e.params.id)}),ye((le,xe,je)=>{Oe(x,"aria-label",le),Oe(D,"href",`/study/${_(T)??""}`),G(Y,xe),G(ne,je)},[()=>V("common.breadcrumb"),()=>{var le;return((le=_(s))==null?void 0:le.description)||V("study.untitled")},()=>V("study.3d")]),me(j,S)},tt=j=>{var S=lM(),x=ae(S);{var D=gt=>{var Lt=rM(),Ht=ae(Lt),bt=ee(Ht,!0),gn=R(Ht),Sn=ee(gn,!0),Gn=R(gn,2);{var Ln=$n=>{var v=sM(),w=ee(v,!0);ye(()=>G(w,_(d))),me($n,v)};We(Gn,$n=>{_(d)!=="webgl"&&_(d)!=="context"&&$n(Ln)})}ye(($n,v)=>{G(bt,$n),G(Sn,v)},[()=>V("m3d.error.t"),()=>_(d)==="webgl"||_(d)==="context"?V(`m3d.error.${_(d)}`):V("m3d.error.d")]),me(gt,Lt)};We(x,gt=>{_(d)&&gt(D)})}var Y=R(x,2);_u(Y,()=>e.params.id,gt=>{{let Lt=Le(()=>Fh(e.params.id)),Ht=Le(()=>V("m3d.canvas"));An(Uy(gt,{get url(){return _(Lt)},get store(){return f},get regions(){return _(a)},lobeOf:b,get dataMaps(){return _(U)},label:X,get ariaLabel(){return _(Ht)},onprogress:bt=>$e(u,bt,!0),onerror:bt=>$e(d,bt,!0),onloaded:()=>$e(h,!0)}),bt=>$e(g,bt,!0),()=>_(g))}});var se=R(Y,2);{var ne=gt=>{var Lt=aM(),Ht=ae(Lt),bt=ee(Ht,!0),gn=R(Ht,2),Sn=ae(gn);let Gn;ye(Ln=>{G(bt,Ln),Jt(Sn,`width:${_(u)??30??""}%`),Gn=Ut(Sn,1,"svelte-yes7qw",null,Gn,{indet:_(u)===null})},[()=>V("m3d.loading")]),me(gt,Lt)};We(se,gt=>{!_(h)&&!_(d)&&gt(ne)})}var Te=R(se,2);let le;var xe=ae(Te),je=ae(xe),ue=ae(je);Mt(ue,{name:"back",size:16}),Xr(je,gt=>{var Lt;return(Lt=qr)==null?void 0:Lt(gt)});var Pe=R(je,2),ze=ae(Pe),Ce=ee(ze,!0),Se=R(ze),Ye=ee(Se,!0),Ge=R(Pe,2),rt=ae(Ge);Mt(rt,{name:"close",size:16});var z=R(xe,2);{var Re=gt=>{xf(gt,{get store(){return f},get dataMaps(){return _(U)},dataLabel:F,tree:Ht=>{An(jy(Ht,{get store(){return f},structName:bt=>ea(_(C),bt),lobeName:bt=>ui(_(C),bt),lobeOfStructure:b,search:bt=>qh(_(H),bt,ea(_(C),bt)),onpick:fe,onpicklobe:ve}),bt=>$e(y,bt,!0),()=>_(y))},$$slots:{tree:!0}})};We(z,gt=>{f.ready&&gt(Re)})}var re=R(Te,2);let te;var ce=ae(re),ge=ae(ce);Mt(ge,{name:"close",size:16});var Ke=R(ce,2);{var ct=gt=>{_f(gt,{get ctx(){return _(Xe)}})};We(Ke,gt=>{f.ready&&gt(ct)})}var lt=R(re,2);{var st=gt=>{var Lt=oM(),Ht=ae(Lt);Df(Ht,{get quiz(){return _($).quiz},name:bt=>to(_(C),bt),onskip:()=>f.dispatch({type:"quizSkip"}),onend:()=>f.dispatch({type:"quizEnd"})}),me(gt,Lt)};We(lt,gt=>{_($).quiz&&gt(st)})}var Et=R(lt,2),Ot=ae(Et);{var Jn=gt=>{{let Lt=Le(()=>F(_(K)));Rf(gt,{get map(){return _(K)},get label(){return _(Lt)}})}};We(Ot,gt=>{_(K)&&gt(Jn)})}var _i=R(Ot,2);{var _n=gt=>{{let Lt=Le(()=>_(oe).length>0),Ht=Le(()=>f.index.keys.length>1);Af(gt,{get store(){return f},get canTour(){return _(Lt)},get canQuiz(){return _(Ht)},onview:he,onshot:()=>{var bt;return(bt=_(g))==null?void 0:bt.screenshot(V("m3d.shot.file"))},onreset:be,ontour:()=>_($).tour?ie():q(),onquiz:()=>_($).quiz?f.dispatch({type:"quizEnd"}):pe(),get controlsOpen(){return _(m)},get cardOpen(){return _(p)},ontoggleControls:()=>{$e(m,!_(m)),_(m)&&$e(p,!1)},ontoggleCard:()=>{$e(p,!_(p)),_(p)&&$e(m,!1)}})}};We(_i,gt=>{f.ready&&gt(_n)})}var Qn=R(Et,2),gi=ee(Qn,!0);ye((gt,Lt,Ht,bt,gn,Sn,Gn)=>{var Ln;le=Ut(Te,1,"left panel svelte-yes7qw",null,le,{open:_(m)}),Oe(Te,"aria-label",gt),Oe(je,"href",`/study/${_(T)??""}`),Oe(je,"aria-label",Lt),Oe(je,"title",Ht),G(Ce,bt),G(Ye,((Ln=_(s))==null?void 0:Ln.description)??""),Oe(Ge,"aria-label",gn),te=Ut(re,1,"right panel svelte-yes7qw",null,te,{open:_(p)}),Oe(re,"aria-label",Sn),Oe(ce,"aria-label",Gn),G(gi,_(Z))},[()=>V("m3d.controls"),()=>V("view.back"),()=>V("view.back"),()=>V("m3d.title"),()=>V("card.close"),()=>V("m3d.card"),()=>V("card.close")]),at("click",Ge,()=>$e(m,!1)),at("click",ce,()=>$e(p,!1)),me(j,S)};We(Qe,j=>{_(t)==="loading"?j(qe):_(t)==="error"?j(Ve,1):_(t)==="missing"?j(Ie,2):j(tt,-1)})}me(i,I),nn()}Hn(["click"]);export{hM as default};
