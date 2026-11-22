var yp=Object.defineProperty;var Yu=i=>{throw TypeError(i)};var bp=(i,e,t)=>e in i?yp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var rl=(i,e,t)=>bp(i,typeof e!="symbol"?e+"":e,t),Mp=(i,e,t)=>e.has(i)||Yu("Cannot "+t);var Ln=(i,e,t)=>(Mp(i,e,"read from private field"),t?t.call(i):e.get(i)),$i=(i,e,t)=>e.has(i)?Yu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);import{b as Sp,E as Ep,B as Tp,p as Cn,a as gr,I as yt,s as U,i as Xe,t as Me,c as G,d as z,e as _e,f as Pn,g as ne,o as $,h as Ap,j as Ae,k as bi,l as _t,m as _,n as qt,q as gn,r as ct,u as Le,v as Ge,w as Ra,x as gi,y as Fn,z as Zn,A as Je,C as ri,D as At,F as zt,G as Un,H as la,J as ca,K as Ku,L as wp,M as Rp,N as ff,O as ko,P as Cp,_ as Pp,Q as fu,R as Lp,S as Ip,T as pf,U as Dp,V as Up,W as Np,X as Fp,Y as Zu,Z as Ju,$ as Op,a0 as Bp,a1 as kp,a2 as zp,a3 as Vp,a4 as Hp,a5 as Gp,a6 as Qu}from"./index-_b1RblCJ.js";function mf(i,e,...t){var n=new Tp(i);Sp(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},Ep)}const Wp=/^([LRMVHB])__(.+?)(?:_\d+)?$/,Xp=/^([LRMVHB])__(.+)$/;function qp(i,e){const t=i?Wp.exec(i):null;if(!t)return null;const n=t[1];let s=t[2];if(e){const r=Xp.exec(i);if(r[2]!==s&&"LRM".includes(n)&&e(r[2]))s=r[2];else if(r[2]!==s&&"LRM".includes(n)){const a=/^(.+)_\d+$/.exec(r[2]);a&&a[1]!==s&&e(a[1])&&(s=a[1])}}return n==="V"?{kind:"vessel",name:s,key:`V|${s}`}:n==="H"?{kind:"skin",name:s,key:`H|${s}`}:n==="B"?{kind:"bone",name:s,key:`B|${s}`}:{kind:"region",hemi:n,structure:s,key:`${n}|${s}`}}function pu(i){const e=i.indexOf("|");return{hemi:i.slice(0,e),structure:i.slice(e+1)}}function jp(i){const{hemi:e,structure:t}=pu(i);return e==="L"?`R|${t}`:e==="R"?`L|${t}`:null}const ma=i=>(i.charAt(0).toUpperCase()+i.slice(1)).replace(/_/g," "),Yp=i=>{const e=/^vertebrae_([cts]\d{1,2}|l\d|s\d)$/.exec(i);return e?e[1].toUpperCase():null},Kp=i=>{const e=/^rib_(\d{1,2})$/.exec(i);return e?+e[1]:null},ps={},Tt=(i,e,t,n)=>n.split(" ").forEach(s=>ps[s]=[i,e,t]);Tt("frontal","hemi",!1,"frontal_pole sfg mfg ifg_tri ifg_oper precentral frontal_medial sma paracingulate orbitofrontal frontal_operculum");Tt("insular","hemi",!1,"insula");Tt("temporal","hemi",!1,"temporal_pole stg mtg itg temporal_fusiform planum_polare heschl planum_temporale");Tt("parietal","hemi",!1,"postcentral spl supramarginal angular precuneus parietal_operculum central_operculum");Tt("occipital","hemi",!1,"lateral_occipital intracalcarine supracalcarine cuneus lingual occipital_fusiform temporo_occipital_fusiform occipital_pole");Tt("limbic","hemi",!1,"cingulate_ant cingulate_post subcallosal parahippocampal");Tt("limbic","deep",!0,"hippocampus amygdala");Tt("subcortical","deep",!0,"thalamus caudate putamen pallidum accumbens ventral_dc");Tt("ventricles","ventricle",!0,"lateral_ventricle third_ventricle fourth_ventricle");Tt("white_matter","hemi",!1,"corpus_callosum");Tt("white_matter","deep",!0,"cerebral_white_matter");Tt("white_matter","hemi",!1,"cerebral_cortex");Tt("cerebellum","cerebellum",!1,"cerebellum_hemi cerebellar_vermis");Tt("cerebellum","cerebellum",!0,"cerebellum_white_matter");Tt("brainstem","brainstem",!1,"midbrain pons medulla brainstem");Tt("arteries","vessel",!0,"cerebral_arteries neck_arteries body_arteries");Tt("integument","body",!1,"skin");Tt("skeleton","bone",!0,"skeleton");Tt("respiratory","organ",!0,"lung");Tt("respiratory","airway",!0,"airway");Tt("nervous_spine","spine",!0,"spinal_cord");Tt("nervous_spine","spine",!1,"spinal_csf");Tt("spinal_column","spine",!1,"intervertebral_disc");Tt("spinal_column","bone",!1,"vertebral_column");const Zp=[...[1,2,3,4,5,6,7].map(i=>`c${i}`),...Array.from({length:12},(i,e)=>`t${e+1}`),...[1,2,3,4,5].map(i=>`l${i}`),"s1"];Tt("spinal_column","bone",!1,Zp.map(i=>`vertebrae_${i}`).join(" "));Tt("respiratory","organ",!0,"lung_upper_lobe lung_middle_lobe lung_lower_lobe");Tt("respiratory","airway",!0,"trachea");Tt("cardiovascular","organ",!0,"heart atrial_appendage");Tt("cardiovascular","vessel",!0,"aorta pulmonary_vein pulmonary_artery brachiocephalic_trunk subclavian_artery common_carotid_artery brachiocephalic_vein superior_vena_cava inferior_vena_cava portal_vein_and_splenic_vein iliac_artery iliac_vena");Tt("digestive","organ",!0,"liver gallbladder stomach pancreas esophagus small_bowel duodenum colon");Tt("lymphatic","organ",!0,"spleen");Tt("urinary","organ",!0,"kidney kidney_cyst urinary_bladder");Tt("endocrine","organ",!0,"adrenal_gland thyroid_gland");Tt("reproductive","organ",!0,"prostate");Tt("skeleton","bone",!1,`skull sternum costal_cartilages sacrum humerus scapula clavicula femur hip ${Array.from({length:12},(i,e)=>`rib_${e+1}`).join(" ")}`);Tt("muscular","muscle",!1,"gluteus_maximus gluteus_medius gluteus_minimus autochthon iliopsoas");const Jp=Object.keys(ps),oc=["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem","arteries","integument","skeleton","spinal_column","nervous_spine","respiratory","cardiovascular","digestive","urinary","endocrine","lymphatic","reproductive","muscular","nervous","sensory","body_regions"],Qp=new Set(["spinal_column"]),zo=i=>{var e;return((e=ps[i])==null?void 0:e[0])??"other"},$p=i=>{var e;return((e=ps[i])==null?void 0:e[2])??!1},_f=i=>i in ps,Vo=i=>{const e=Jp.indexOf(i);return e<0?1e6:e};function gf(i,e="L"){return i==="hemi"?e==="R"?"hemi_R":"hemi_L":i==="vessel"?"vessels":i==="body"?"skin":i}function em(i,e,t,n){const s=e==="R"?"hemi_R":"hemi_L",r=t??(ps[i]?ps[i][1]==="hemi"?s:ps[i][1]:n??s);return gf(r,e)}const Ua=i=>!!i&&typeof i=="object"&&!Array.isArray(i),tm=i=>i==null||i===""||Array.isArray(i)&&i.length===0;function lc(i,e){if(!Ua(e))return i;if(!Ua(i))return e;const t={...i};for(const[n,s]of Object.entries(e))tm(s)||(t[n]=Ua(s)&&Ua(t[n])?lc(t[n],s):s);return t}function nm(i,e,t){var r,a;let n=i??t??{structures:{},lobes:{}};if(n={...n,structures:n.structures??{},lobes:n.lobes??{}},e==="en")return n;const s=((r=i==null?void 0:i.i18n)==null?void 0:r[e])??((a=t==null?void 0:t.i18n)==null?void 0:a[e]);return s&&(n=lc(n,s)),t&&t!==i&&(n=lc(n,{structures:t.structures,lobes:t.lobes,arteries:t.arteries,sequences:t.sequences})),n}const vf=(i,e,t)=>!!e&&(!i.lang||i.lang==="en"||e!==t),xf=(i,e)=>{var t;return((t=i.structures[e])==null?void 0:t.lobe)??zo(e)};function Ho(i,e){var n,s,r,a;const t=(n=i.kb.structures[e])==null?void 0:n.name;return vf(i,t,(a=(r=(s=i.en)==null?void 0:s.structures)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`struct.${e}`)??t??im(i,e)??ma(e)}function im(i,e){const t=Yp(e);if(t)return i.tr("struct.vertebra",{level:t})??`${t} vertebra`;const n=Kp(e);return n!==null?i.tr("struct.rib",{n})??`Rib ${n}`:null}function Gi(i,e){var n,s,r,a;const t=(n=i.kb.lobes[e])==null?void 0:n.name;return vf(i,t,(a=(r=(s=i.en)==null?void 0:s.lobes)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`lobe.${e}`)??t??ma(e)}function cc(i,e){const{hemi:t,structure:n}=pu(e),s=Ho(i,n);return t==="L"?i.tr("side.leftOf",{name:s})??`Left ${s}`:t==="R"?i.tr("side.rightOf",{name:s})??`Right ${s}`:s}function sm(i,e,t){const n=i.structures[e];return[t,n==null?void 0:n.name,...(n==null?void 0:n.aka)??[],e.replace(/_/g," ")].filter(Boolean).join(" ").toLowerCase()}function yf(i,e="head"){return/neck/i.test(i)?"neck":/body|aorta|cta/i.test(i)||e!=="head"?"body":"brain"}const bf={frontal:"#f472b6",parietal:"#60a5fa",temporal:"#34d399",occipital:"#fbbf24",insular:"#f97316",limbic:"#c084fc",subcortical:"#22d3ee",cerebellum:"#a3e635",brainstem:"#fb7185",ventricles:"#93c5fd",white_matter:"#e2e8f0",arteries:"#ef4444",integument:"#d6c2b4",skeleton:"#e9dfc7",spinal_column:"#e4d6b4",nervous_spine:"#facc15",respiratory:"#7dd3fc",cardiovascular:"#dc2626",digestive:"#f59e0b",urinary:"#a78bfa",endocrine:"#2dd4bf",lymphatic:"#a3e635",reproductive:"#f472b6",muscular:"#c2410c",nervous:"#fde68a",sensory:"#38bdf8",body_regions:"#94a3b8"},rm=new Set(["integument","skeleton","spinal_column"]),am={integument:"#d9b8a3",skeleton:"#ece3cf",spinal_column:"#e6dcc4",nervous_spine:"#f2e6c0",respiratory:"#e9a6a6",cardiovascular:"#9f1d20",digestive:"#b9735a",urinary:"#8f4a3a",endocrine:"#c9855c",lymphatic:"#7a2e3a",reproductive:"#c98d8d",muscular:"#a3473f"},om={hemi_L:"#f472b6",hemi_R:"#60a5fa",cerebellum:"#a3e635",brainstem:"#fb7185",deep:"#22d3ee",ventricle:"#93c5fd",organ:"#f59e0b",airway:"#7dd3fc",spine:"#facc15",muscle:"#c2410c",vessels:"#ef4444",neck:"#f87171",bone:"#e7e2d3",skin:"#cbd5e1"},uc="#cbd5e1",Mf="#3a4252",lm="#e7b9ad",cm="#c99a8a",Sf=["#1e3a8a","#0ea5e9","#5eead4","#fde047","#f97316","#e11d48"],um=["#3b82f6","#93c5fd","#e2e8f0","#fca5a5","#ef4444"],Sr=i=>bf[i]??uc;function Go(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function hm([i,e,t]){const n=i/255,s=e/255,r=t/255,a=Math.max(n,s,r),o=Math.min(n,s,r),l=(a+o)/2;if(a===o)return[0,0,l];const c=a-o,h=l>.5?c/(2-a-o):c/(a+o);let u=a===n?(s-r)/c+(s<r?6:0):a===s?(r-n)/c+2:(n-s)/c+4;return u/=6,[u,h,l]}function $u([i,e,t]){if(e===0)return[t*255,t*255,t*255];const n=(a,o,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(o-a)*6*l:l<1/2?o:l<2/3?a+(o-a)*(2/3-l)*6:a),s=t<.5?t*(1+e):t+e-t*e,r=2*t-s;return[n(r,s,i+1/3)*255,n(r,s,i)*255,n(r,s,i-1/3)*255]}function dm(i,e,t){const n=hm(Go(Sr(i))),s=t>1?e/(t-1):.5;if(rm.has(i)){const l=Math.max(.7,Math.min(.9,n[2]+(s-.5)*.12));return $u([(n[0]+(s-.5)*.04+1)%1,Math.max(.25,n[1]-e%2*.12),l]).map(Math.round)}const r=(n[0]+(s-.5)*.09+1)%1,a=Math.max(.36,Math.min(.62,n[2]*.86+(s-.5)*.22)),o=Math.max(.45,n[1]-e%2*.12);return $u([r,o,a]).map(Math.round)}function fm(i,e){var s;const t={};for(const r of i)(t[s=e(r)]??(t[s]=[])).push(r);const n={};for(const[r,a]of Object.entries(t))a.forEach((o,l)=>n[o]=dm(r,l,a.length));return n}function pm(i,e=Sf){i=Math.max(0,Math.min(1,Number.isFinite(i)?i:0));const t=e.length-1,n=Math.min(t-1,Math.floor(i*t)),s=i*t-n,r=Go(e[n]),a=Go(e[n+1]);return r.map((o,l)=>o+(a[l]-o)*s)}const mm=i=>`linear-gradient(90deg, ${i.join(", ")})`,Ef=i=>`rgb(${i.map(Math.round).join(" ")})`;var _m=Ae('<p class="disc"><!><span><b> </b><!></span></p>');function Er(i,e){Cn(e,!0);let t=gr(e,"extra",3,"");var n=_m(),s=ne(n);yt(s,{name:"info",size:15});var r=U(s),a=ne(r),o=$(a,!0),l=U(a);{var c=h=>{var u=Ap();Me(()=>z(u,t())),_e(h,u)};Xe(l,h=>{t()&&h(c)})}Me(h=>z(o,h),[()=>G("disclaimer")]),_e(i,n),Pn()}function An(i,e="en"){if(i==null||!Number.isFinite(i))return"—";const t=Math.abs(i),n=t>=100?0:t>=10?1:t>=1?2:t===0?0:Math.min(4,1-Math.floor(Math.log10(t))),s=e==="hi"?"hi-IN":"en-US";return i.toLocaleString(s,{maximumFractionDigits:n,minimumFractionDigits:0})}function gm(i,e="en"){const t=An(Math.abs(i),e);return`${i>0?"+":i<0?"−":""}${t}%`}const Na=String.raw`[-−]?\d+(?:[.,]\d+)?`,Fa=i=>parseFloat(i.replace("−","-").replace(",","."));function vm(i){if(!i)return null;const e=i.replace(/(\d),(\d{3})(?!\d)/g,"$1$2").replace(/[×x]\s*10(?:\^[-−]?\d+|[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g," "),t=new RegExp(`(${Na})\\s*(?:–|—|-|to|\\.\\.|…)\\s*(${Na})`).exec(e);if(t){let r=Fa(t[1]),a=Fa(t[2]);return r>a&&([r,a]=[a,r]),{lo:r,hi:a}}const n=new RegExp(`(?:<|≤|<=|under|below)\\s*(${Na})`,"i").exec(e);if(n)return{lo:null,hi:Fa(n[1])};const s=new RegExp(`(?:>|≥|>=|over|above)\\s*(${Na})`,"i").exec(e);return s?{lo:Fa(s[1]),hi:null}:null}function xm(i,e){if(!Number.isFinite(i)||e.lo===null&&e.hi===null)return null;const t=e.lo??Math.min(0,i,e.hi*.5),n=e.hi??Math.max(t*2,i*1.25,t+1),s=Math.max(1e-9,n-t),r=Math.min(t-s*.35,i-s*.08),a=Math.max(n+s*.35,i+s*.08),o=l=>(l-r)/(a-r)*100;return{axisLo:r,axisHi:a,bandLeft:e.lo===null?0:o(t),bandWidth:(e.hi===null?100:o(n))-(e.lo===null?0:o(t)),marker:Math.max(0,Math.min(100,o(i))),position:e.lo!==null&&i<e.lo?"below":e.hi!==null&&i>e.hi?"above":"within"}}function ym(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))return null;const t=Math.max(Math.abs(i),Math.abs(e)),n=(i+e)/2;return{left:i,right:e,leftPct:t?Math.abs(i)/t*100:0,rightPct:t?Math.abs(e)/t*100:0,diffPct:n?(i-e)/Math.abs(n)*100:0}}function bm(i){const e=i==null?void 0:i.summary;return e?Array.isArray(e)?e:Object.entries(e).map(([t,n])=>({...n,key:n.key??t})):[]}const hc=i=>typeof i=="string"?i:i.text;var Mm=Ae('<p class="tag"> </p>'),Sm=Ae('<div class="metric-s svelte-1trur1d"><div class="k svelte-1trur1d"> </div><div class="v svelte-1trur1d"> <small class="svelte-1trur1d"> </small></div></div>'),Em=Ae('<h3 class="sh"> </h3> <div class="metrics"></div> <p class="p faint" style="font-size:11.5px;margin-top:6px"> </p>',1),Tm=Ae("<p> </p>"),eh=Ae("<li> </li>"),Am=Ae('<h3 class="sh"> </h3><ul class="dots"></ul>',1),wm=Ae('<h3 class="sh"> </h3><ul class="dots clin"></ul>',1),Rm=Ae('<div class="fact"><b> </b> </div>'),Cm=Ae('<button type="button" class="chip"><span class="dot"></span> </button>'),th=Ae('<button type="button" class="btn primary"> </button>'),Pm=Ae('<div class="tour-nav"><button type="button" class="btn"> </button> <span class="faint" style="font-size:12px"> </span> <!></div>'),Lm=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot"></span> </span> <span class="chip"> </span></div> <h2> </h2> <!></div> <div class="ibody"><!> <!> <!> <!> <!> <h3 class="sh"> </h3> <div class="chips"></div> <!> <!></div>',1);function Im(i,e){Cn(e,!0);const t=Le(()=>e.ctx.kb.lobes[e.id]),n=Le(()=>[...e.ctx.store.facts.regions].filter(([,W])=>W.lobe===e.id).map(([W])=>W)),s=Le(()=>[...new Set(_(n).map(W=>W.slice(2)))]),r=Le(()=>e.ctx.store.s.mode),a=Le(()=>e.ctx.store.s.tour),o=/^(cm³|cm3|ml|mL|mm³|mm3|cc)$/,l=Le(()=>{var ee,se,Re,Pe,Ne;const W={L:null,R:null,M:null};for(const Be of _(n)){const De=(Pe=(Re=(se=(ee=e.ctx.stats)==null?void 0:ee.regions)==null?void 0:se[Be])==null?void 0:Re.measurements)==null?void 0:Pe.find(O=>O.key==="volume"||o.test(O.unit)&&O.value!==null);if(!De||De.value===null)continue;const He=Be[0];W[He]={v:(((Ne=W[He])==null?void 0:Ne.v)??0)+De.value,unit:De.unit}}return W}),c=W=>{const ee=e.ctx.store.index.present.get(W);e.ctx.act.select({type:"region",id:`${ee!=null&&ee.has("M")?"M":ee!=null&&ee.has("L")?"L":"R"}|${W}`},!0)};var h=Lm(),u=_t(h),d=ne(u),f=ne(d);yt(f,{name:"close",size:16});var g=U(d,2),v=ne(g),m=ne(v),p=U(m,1,!0),y=U(v,2),b=$(y,!0),x=U(g,2),A=$(x,!0),R=U(x,2);{var w=W=>{var ee=Mm(),se=$(ee,!0);Me(()=>z(se,_(t).tagline)),_e(W,ee)};Xe(R,W=>{var ee;(ee=_(t))!=null&&ee.tagline&&W(w)})}var L=U(u,2),S=ne(L);{var M=W=>{var ee=Em(),se=_t(ee),Re=$(se,!0),Pe=U(se,2);qt(Pe,20,()=>["L","R","M"],Fn,(De,He)=>{var O=Ra(),Qe=_t(O);{var je=qe=>{var Oe=Sm(),st=ne(Oe),we=$(st,!0),P=U(st),E=ne(P),D=U(E),X=$(D,!0);Me((ce,le)=>{z(we,ce),z(E,le),z(X,_(l)[He].unit)},[()=>G(`card.side.${He}`),()=>An(_(l)[He].v,gi.lang)]),_e(qe,Oe)};Xe(Qe,qe=>{_(l)[He]&&qe(je)})}_e(De,O)});var Ne=U(Pe,2),Be=$(Ne,!0);Me((De,He)=>{z(Re,De),z(Be,He)},[()=>G("card.yourMeasurements"),()=>G("card.lobeSumNote")]),_e(W,ee)};Xe(S,W=>{_(r)==="mine"&&(_(l).L||_(l).R||_(l).M)&&W(M)})}var T=U(S,2);{var I=W=>{var ee=Tm(),se=$(ee,!0);Me(()=>z(se,_(t).overview)),_e(W,ee)};Xe(T,W=>{var ee;(ee=_(t))!=null&&ee.overview&&W(I)})}var F=U(T,2);{var k=W=>{var ee=Am(),se=_t(ee),Re=$(se,!0),Pe=U(se);qt(Pe,21,()=>_(t).functions,Fn,(Ne,Be)=>{var De=eh(),He=$(De,!0);Me(()=>z(He,_(Be))),_e(Ne,De)}),Me(Ne=>z(Re,Ne),[()=>G("card.functions")]),_e(W,ee)};Xe(F,W=>{var ee,se;(se=(ee=_(t))==null?void 0:ee.functions)!=null&&se.length&&W(k)})}var Z=U(F,2);{var j=W=>{var ee=wm(),se=_t(ee),Re=$(se,!0),Pe=U(se);qt(Pe,21,()=>_(t).clinical,Fn,(Ne,Be)=>{var De=eh(),He=$(De,!0);Me(()=>z(He,_(Be))),_e(Ne,De)}),Me(Ne=>z(Re,Ne),[()=>G("card.clinical")]),_e(W,ee)};Xe(Z,W=>{var ee,se;(se=(ee=_(t))==null?void 0:ee.clinical)!=null&&se.length&&W(j)})}var ae=U(Z,2);{var Q=W=>{var ee=Rm(),se=ne(ee),Re=$(se,!0),Pe=U(se,1,!0);Me(Ne=>{z(Re,Ne),z(Pe,_(t).fact)},[()=>G("card.fact")]),_e(W,ee)};Xe(ae,W=>{var ee;(ee=_(t))!=null&&ee.fact&&W(Q)})}var xe=U(ae,2),ie=$(xe,!0),V=U(xe,2);qt(V,20,()=>_(s),W=>W,(W,ee)=>{const se=Le(()=>e.ctx.store.colors[ee]);var Re=Cm(),Pe=ne(Re),Ne=U(Pe,1,!0);Me((Be,De)=>{gn(Pe,`background:${Be??""}`),z(Ne,De)},[()=>_(se)?Ef(_(se)):"var(--text-3)",()=>Ho(e.ctx.namer,ee)]),ct("click",Re,()=>c(ee)),_e(W,Re)});var K=U(V,2);{var oe=W=>{var ee=Pm(),se=ne(ee),Re=$(se),Pe=U(se,2),Ne=$(Pe,!0),Be=U(Pe,2);{var De=O=>{var Qe=th(),je=$(Qe);Me(qe=>z(je,`${qe??""} ›`),[()=>G("card.tour.next")]),ct("click",Qe,()=>e.ctx.act.tourStep(1)),_e(O,Qe)},He=O=>{var Qe=th(),je=$(Qe,!0);Me(qe=>z(je,qe),[()=>G("card.tour.finish")]),ct("click",Qe,function(...qe){var Oe;(Oe=e.ctx.act.tourEnd)==null||Oe.apply(this,qe)}),_e(O,Qe)};Xe(Be,O=>{_(a).i<e.ctx.tourLen-1?O(De):O(He,-1)})}Me((O,Qe)=>{se.disabled=_(a).i===0,z(Re,`‹ ${O??""}`),z(Ne,Qe)},[()=>G("card.tour.back"),()=>G("card.tour.pos",{i:_(a).i+1,n:e.ctx.tourLen})]),ct("click",se,()=>e.ctx.act.tourStep(-1)),_e(W,ee)};Xe(K,W=>{_(a)&&W(oe)})}var H=U(K,2);Er(H,{}),Me((W,ee,se,Re,Pe,Ne,Be)=>{Ge(d,"aria-label",W),Ge(d,"title",ee),gn(m,`background:${se??""}`),z(p,Re),z(b,Pe),z(A,Ne),z(ie,Be)},[()=>G("card.close"),()=>G("card.close"),()=>Sr(e.id),()=>e.ctx.ft("card.division"),()=>G("card.nStructures",{n:_(s).length}),()=>Gi(e.ctx.namer,e.id),()=>e.ctx.ft("card.inDivision")]),ct("click",d,()=>_(a)?e.ctx.act.tourEnd():e.ctx.act.select(null)),_e(i,h),Pn()}bi(["click"]);var Dm=Ae('<div class="pop svelte-17vi66k" role="note"><!></div>'),Um=Ae('<span class="ip svelte-17vi66k"><button type="button" class="b svelte-17vi66k"><!></button> <!></span>');function Nm(i,e){Cn(e,!0);let t=At(!1),n;const s=`pop-${Math.random().toString(36).slice(2,9)}`;Zn(()=>{if(!_(t))return;const h=d=>{n.contains(d.target)||Je(t,!1)},u=d=>{var f;d.key==="Escape"&&(Je(t,!1),d.stopPropagation(),(f=n.querySelector("button"))==null||f.focus())};return document.addEventListener("pointerdown",h),n.addEventListener("keydown",u),()=>{document.removeEventListener("pointerdown",h),n.removeEventListener("keydown",u)}});var r=Um(),a=ne(r),o=ne(a);yt(o,{name:"info",size:13});var l=U(a,2);{var c=h=>{var u=Dm(),d=ne(u);mf(d,()=>e.children),Me(()=>Ge(u,"id",s)),_e(h,u)};Xe(l,h=>{_(t)&&h(c)})}ri(r,h=>n=h,()=>n),Me((h,u)=>{Ge(a,"aria-expanded",_(t)),Ge(a,"aria-controls",s),Ge(a,"aria-label",h),Ge(a,"title",u)},[()=>G("card.howMeasured",{name:e.label}),()=>G("card.howMeasured",{name:e.label})]),ct("click",a,()=>Je(t,!_(t))),_e(i,r),Pn()}bi(["click"]);var Fm=Ae('<p class="svelte-qlz17q"><b> </b> </p>'),Om=Ae("<li> </li>"),Bm=Ae('<p class="svelte-qlz17q"><b> </b></p> <ul class="svelte-qlz17q"></ul>',1),km=Ae('<p class="svelte-qlz17q"><b> </b> </p> <!> <!> <p class="edu svelte-qlz17q"> </p>',1),zm=Ae('<small class="svelte-qlz17q"> </small>'),Vm=Ae('<div class="bar svelte-qlz17q" role="img"><div class="band svelte-qlz17q"></div> <div class="mk svelte-qlz17q"></div></div> <div class="bar-l svelte-qlz17q"><span> </span><span> </span><span> </span></div>',1),Hm=Ae('<div class="lr svelte-qlz17q" role="img"><b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span> <b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span></div> <div class="s svelte-qlz17q"> <b class="svelte-qlz17q"> </b> </div>',1),Gm=Ae('<div class="cw svelte-qlz17q"> </div>'),Wm=Ae('<div><div class="k svelte-qlz17q"><span> </span> <!></div> <div class="v svelte-qlz17q"> <!></div> <!> <!> <!></div>');function Tf(i,e){Cn(e,!0);let t=gr(e,"other",3,null),n=gr(e,"hemi",3,"M"),s=gr(e,"wide",3,!1);const r=Le(()=>gi.lang),a=Le(()=>vm(e.m.reference)),o=Le(()=>_(a)&&e.m.value!==null?xm(e.m.value,_(a)):null),l=Le(()=>t()&&!/asym/i.test(e.m.key)&&e.m.value!==null&&t().value!==null&&(n()==="L"||n()==="R")?ym(n()==="L"?e.m.value:t().value,n()==="L"?t().value:e.m.value):null),c=Le(()=>e.m.caveats??[]);var h=Wm();let u;var d=ne(h),f=ne(d),g=$(f,!0),v=U(f,2);Nm(v,{get label(){return e.label},children:(T,I)=>{var F=km(),k=_t(F),Z=ne(k),j=$(Z,!0),ae=U(Z),Q=U(k,2);{var xe=H=>{var W=Fm(),ee=ne(W),se=$(ee,!0),Re=U(ee);Me(Pe=>{z(se,Pe),z(Re,` ${e.m.reference??""}`)},[()=>G("card.reference")]),_e(H,W)};Xe(Q,H=>{e.m.reference&&H(xe)})}var ie=U(Q,2);{var V=H=>{var W=Bm(),ee=_t(W),se=ne(ee),Re=$(se,!0),Pe=U(ee,2);qt(Pe,21,()=>_(c),Fn,(Ne,Be)=>{var De=Om();let He;var O=$(De,!0);Me(Qe=>{He=zt(De,1,"svelte-qlz17q",null,He,{warn:typeof _(Be)!="string"&&_(Be).severity==="warn"}),z(O,Qe)},[()=>hc(_(Be))]),_e(Ne,De)}),Me(Ne=>z(Re,Ne),[()=>G("card.caveats")]),_e(H,W)};Xe(ie,H=>{_(c).length&&H(V)})}var K=U(ie,2),oe=$(K,!0);Me((H,W,ee)=>{z(j,H),z(ae,` ${W??""}`),z(oe,ee)},[()=>G("card.method"),()=>e.m.method||G("card.methodUnknown"),()=>G("disclaimer")]),_e(T,F)},$$slots:{default:!0}});var m=U(d,2),p=ne(m),y=U(p);{var b=T=>{var I=zm(),F=$(I,!0);Me(()=>z(F,e.m.unit)),_e(T,I)};Xe(y,T=>{e.m.unit&&T(b)})}var x=U(m,2);{var A=T=>{var I=Vm(),F=_t(I),k=ne(F),Z=U(k,2),j=U(F,2),ae=ne(j),Q=$(ae,!0),xe=U(ae),ie=$(xe,!0),V=U(xe),K=$(V,!0);Me((oe,H,W,ee)=>{Ge(F,"aria-label",oe),gn(k,`left:${_(o).bandLeft??""}%;width:${_(o).bandWidth??""}%`),gn(Z,`left:${_(o).marker??""}%`),z(Q,H),z(ie,W),z(K,ee)},[()=>G(`card.range.${_(o).position}`,{lo:An(_(a).lo,_(r)),hi:An(_(a).hi,_(r))}),()=>An(_(o).axisLo,_(r)),()=>G("card.typical",{ref:e.m.reference??""}),()=>An(_(o).axisHi,_(r))]),_e(T,I)};Xe(x,T=>{_(o)&&_(a)&&T(A)})}var R=U(x,2);{var w=T=>{var I=Hm(),F=_t(I),k=ne(F),Z=$(k,!0),j=U(k);let ae;var Q=$(j),xe=U(j),ie=$(xe,!0),V=U(xe,2),K=$(V,!0),oe=U(V);let H;var W=$(oe),ee=U(oe),se=$(ee,!0),Re=U(F,2),Pe=ne(Re),Ne=U(Pe),Be=$(Ne,!0),De=U(Ne);Me((He,O,Qe,je,qe,Oe,st,we)=>{Ge(F,"aria-label",He),z(Z,O),ae=zt(j,1,"t svelte-qlz17q",null,ae,{me:n()==="L"}),gn(Q,`width:${_(l).leftPct??""}%`),z(ie,Qe),z(K,je),H=zt(oe,1,"t svelte-qlz17q",null,H,{me:n()==="R"}),gn(W,`width:${_(l).rightPct??""}%`),z(se,qe),z(Pe,`${Oe??""} `),z(Be,st),z(De,` ${we??""}`)},[()=>G("card.lr.aria",{l:An(_(l).left,_(r)),r:An(_(l).right,_(r)),unit:e.m.unit}),()=>G("side.L"),()=>An(_(l).left,_(r)),()=>G("side.R"),()=>An(_(l).right,_(r)),()=>G("card.lr.diff"),()=>gm(_(l).diffPct,_(r)),()=>G(Math.abs(_(l).diffPct)<10?"card.lr.small":"card.lr.large")]),_e(T,I)};Xe(R,T=>{_(l)&&t()&&T(w)})}var L=U(R,2);{var S=T=>{var I=Gm(),F=$(I,!0);Me(k=>z(F,k),[()=>hc(_(c).find(k=>typeof k!="string"&&k.severity==="warn"))]),_e(T,I)},M=Le(()=>_(c).some(T=>typeof T!="string"&&T.severity==="warn"));Xe(L,T=>{_(M)&&T(S)})}Me(T=>{u=zt(h,1,"metric svelte-qlz17q",null,u,{wide:s()||!!_(l)||!!_(o)}),z(g,e.label),z(p,T)},[()=>An(e.m.value,_(r))]),_e(i,h),Pn()}var Xm=Ae('<span class="chip"> </span>'),qm=Ae('<p class="tag"> </p>'),jm=Ae('<div class="metrics"></div>'),nh=Ae('<p class="empty"> </p>'),Ym=Ae('<a><img alt="" loading="lazy" decoding="async"/><span> </span></a>'),Km=Ae('<figure><img loading="lazy" decoding="async"/><span> </span></figure>'),Zm=Ae('<h3 class="sh"> </h3> <div class="thumbs"></div> <p class="p faint" style="font-size:11.5px;margin-top:8px"> </p>',1),ih=Ae('<h3 class="sh"> </h3><p> </p>',1),Jm=Ae('<button type="button" class="btn"> <!></button>'),Qm=Ae('<h3 class="sh"> </h3> <!> <!> <!> <div class="cta"><button type="button" class="btn"><!> </button> <!></div> <!>',1),$m=Ae("<p> </p>"),al=Ae("<li> </li>"),e_=Ae('<h3 class="sh"> </h3><ul class="dots"></ul>',1),t_=Ae('<h3 class="sh"> </h3><ul class="dots conn"></ul>',1),n_=Ae('<h3 class="sh"> </h3><ul class="dots clin"></ul>',1),ol=Ae("<dt> </dt><dd> </dd>",1),i_=Ae('<div class="fact"><b> </b> </div>'),s_=Ae('<!> <!> <!> <!> <!> <h3 class="sh"> </h3> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <!>',1),r_=Ae('<!> <div class="cta"><button type="button" class="btn"><!> </button> <button type="button" class="btn"><!> </button></div> <!>',1),a_=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"> </span> <button type="button" class="chip"><span class="dot"></span> </button> <!></div> <h2> </h2> <!></div> <div class="ibody"><!></div>',1);function o_(i,e){Cn(e,!0);const t=Le(()=>e.ctx.store.s.mode),n=Le(()=>pu(e.id)),s=Le(()=>e.ctx.kb.structures[_(n).structure]),r=Le(()=>xf(e.ctx.kb,_(n).structure)),a=Le(()=>cc(e.ctx.namer,e.id)),o=Le(()=>{var K,oe;return(oe=(K=e.ctx.stats)==null?void 0:K.regions)==null?void 0:oe[e.id]}),l=Le(()=>jp(e.id)),c=Le(()=>!!_(l)&&e.ctx.store.facts.regions.has(_(l))),h=Le(()=>{var K,oe;return _(l)?(oe=(K=e.ctx.stats)==null?void 0:K.regions)==null?void 0:oe[_(l)]:void 0}),u=Le(()=>{var K;return(K=e.ctx.regionByKey.get(e.id))==null?void 0:K.code}),d=Le(()=>{var K;return((K=_(o))==null?void 0:K.thumbs)??[]}),f=Le(()=>encodeURIComponent(e.ctx.studyId)),g=Le(()=>{var K,oe;return Array.isArray((K=_(s))==null?void 0:K.brodmann)?_(s).brodmann.join(", "):((oe=_(s))==null?void 0:oe.brodmann)||""}),v=K=>`/study/${_(f)}/view/${encodeURIComponent(K.series)}?slice=${K.slice}${_(u)!==void 0?`&hl=${_(u)}`:""}`,m=K=>Un(`card.view.${K}`)?G(`card.view.${K}`):K,p=K=>e.ctx.store.dispatch({type:"mode",mode:K});var y=a_(),b=_t(y),x=ne(b),A=ne(x);yt(A,{name:"close",size:16});var R=U(x,2),w=ne(R),L=$(w,!0),S=U(w,2),M=ne(S),T=U(M,1,!0),I=U(S,2);{var F=K=>{var oe=Xm(),H=$(oe,!0);Me(W=>z(H,W),[()=>Un(`cat.${_(s).category}`)?G(`cat.${_(s).category}`):ma(_(s).category)]),_e(K,oe)};Xe(I,K=>{var oe;(oe=_(s))!=null&&oe.category&&K(F)})}var k=U(R,2),Z=$(k,!0),j=U(k,2);{var ae=K=>{var oe=qm(),H=$(oe,!0);Me(()=>z(H,_(s).tagline)),_e(K,oe)};Xe(j,K=>{var oe;(oe=_(s))!=null&&oe.tagline&&K(ae)})}var Q=U(b,2),xe=ne(Q);{var ie=K=>{var oe=Qm(),H=_t(oe),W=$(H,!0),ee=U(H,2);{var se=we=>{var P=jm();qt(P,21,()=>_(o).measurements,E=>E.key,(E,D)=>{{let X=Le(()=>e.ctx.measureLabel(_(D))),ce=Le(()=>{var le,ze;return((ze=(le=_(h))==null?void 0:le.measurements)==null?void 0:ze.find(me=>me.key===_(D).key))??null});Tf(E,{get m(){return _(D)},get label(){return _(X)},get hemi(){return _(n).hemi},get other(){return _(ce)}})}}),_e(we,P)},Re=we=>{var P=nh(),E=$(P,!0);Me(D=>z(E,D),[()=>G("card.noMeasurements")]),_e(we,P)};Xe(ee,we=>{var P,E;(E=(P=_(o))==null?void 0:P.measurements)!=null&&E.length?we(se):we(Re,-1)})}var Pe=U(ee,2);{var Ne=we=>{var P=Zm(),E=_t(P),D=$(E,!0),X=U(E,2);qt(X,21,()=>_(d),Fn,(ze,me)=>{var Se=Ra(),Ce=_t(Se);{var q=ye=>{var Ue=Ym(),ge=ne(Ue),Fe=U(ge),We=$(Fe,!0);la(Ue,$e=>{var B;return(B=ca)==null?void 0:B($e)}),Me(($e,B,Ee,re)=>{Ge(Ue,"href",$e),Ge(Ue,"aria-label",B),Ge(ge,"src",Ee),z(We,re)},[()=>v(_(me)),()=>G("card.thumb.open",{view:m(_(me).view),n:_(me).slice+1}),()=>Ku(e.ctx.studyId,_(me).img),()=>m(_(me).view)]),_e(ye,Ue)},fe=ye=>{var Ue=Km(),ge=ne(Ue),Fe=U(ge),We=$(Fe,!0);Me(($e,B,Ee)=>{Ge(ge,"src",$e),Ge(ge,"alt",B),z(We,Ee)},[()=>Ku(e.ctx.studyId,_(me).img),()=>G("card.thumb.recon",{view:m(_(me).view)}),()=>m(_(me).view)]),_e(ye,Ue)};Xe(Ce,ye=>{_(me).series?ye(q):ye(fe,-1)})}_e(ze,Se)});var ce=U(X,2),le=$(ce,!0);Me((ze,me)=>{z(D,ze),z(le,me)},[()=>G("card.onScan"),()=>G("card.thumb.hint")]),_e(we,P)};Xe(Pe,we=>{_(d).length&&we(Ne)})}var Be=U(Pe,2);{var De=we=>{var P=ih(),E=_t(P),D=$(E,!0),X=U(E),ce=$(X,!0);Me(le=>{z(D,le),z(ce,_(s).overview)},[()=>G("card.whatItIs")]),_e(we,P)};Xe(Be,we=>{var P;(P=_(s))!=null&&P.overview&&we(De)})}var He=U(Be,2),O=ne(He),Qe=ne(O);yt(Qe,{name:"spark",size:15});var je=U(Qe,1,!0),qe=U(O,2);{var Oe=we=>{var P=Jm(),E=ne(P),D=U(E);yt(D,{name:"arrow",size:15}),Me(X=>z(E,X),[()=>G(_(n).hemi==="L"?"card.compareR":"card.compareL")]),ct("click",P,()=>e.ctx.act.select({type:"region",id:_(l)},!0)),_e(we,P)};Xe(qe,we=>{_(c)&&_(l)&&we(Oe)})}var st=U(He,2);{let we=Le(()=>G("card.measureDisc"));Er(st,{get extra(){return _(we)}})}Me((we,P)=>{z(W,we),z(je,P)},[()=>G("card.yourMeasurements"),()=>G("card.learnMore")]),ct("click",O,()=>p("learn")),_e(K,oe)},V=K=>{var oe=r_(),H=_t(oe);{var W=Qe=>{var je=s_(),qe=_t(je);{var Oe=te=>{var ve=$m(),Te=$(ve,!0);Me(()=>z(Te,_(s).overview)),_e(te,ve)};Xe(qe,te=>{_(s).overview&&te(Oe)})}var st=U(qe,2);{var we=te=>{var ve=e_(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te);qt(ht,21,()=>_(s).functions,Fn,(ft,at)=>{var Ct=al(),St=$(Ct,!0);Me(()=>z(St,_(at))),_e(ft,Ct)}),Me(ft=>z(Ze,ft),[()=>G("card.functions")]),_e(te,ve)};Xe(st,te=>{var ve;(ve=_(s).functions)!=null&&ve.length&&te(we)})}var P=U(st,2);{var E=te=>{var ve=t_(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te);qt(ht,21,()=>_(s).connections,Fn,(ft,at)=>{var Ct=al(),St=$(Ct,!0);Me(()=>z(St,_(at))),_e(ft,Ct)}),Me(ft=>z(Ze,ft),[()=>G("card.connections")]),_e(te,ve)};Xe(P,te=>{var ve;(ve=_(s).connections)!=null&&ve.length&&te(E)})}var D=U(P,2);{var X=te=>{var ve=n_(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te);qt(ht,21,()=>_(s).clinical,Fn,(ft,at)=>{var Ct=al(),St=$(Ct,!0);Me(()=>z(St,_(at))),_e(ft,Ct)}),Me(ft=>z(Ze,ft),[()=>G("card.clinical")]),_e(te,ve)};Xe(D,te=>{var ve;(ve=_(s).clinical)!=null&&ve.length&&te(X)})}var ce=U(D,2);{var le=te=>{var ve=ih(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te),ft=$(ht,!0);Me(at=>{z(Ze,at),z(ft,_(s).lateralization)},[()=>G("card.lateralization")]),_e(te,ve)};Xe(ce,te=>{_(s).lateralization&&te(le)})}var ze=U(ce,2),me=$(ze,!0),Se=U(ze,2),Ce=ne(Se);{var q=te=>{var ve=ol(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te),ft=$(ht,!0);Me((at,Ct)=>{z(Ze,at),z(ft,Ct)},[()=>G("card.aka"),()=>_(s).aka.join(", ")]),_e(te,ve)};Xe(Ce,te=>{var ve;(ve=_(s).aka)!=null&&ve.length&&te(q)})}var fe=U(Ce,2);{var ye=te=>{var ve=ol(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te),ft=$(ht,!0);Me(at=>{z(Ze,at),z(ft,_(g))},[()=>G("card.brodmann")]),_e(te,ve)};Xe(fe,te=>{_(g)&&te(ye)})}var Ue=U(fe,2);{var ge=te=>{var ve=ol(),Te=_t(ve),Ze=$(Te,!0),ht=U(Te),ft=$(ht,!0);Me(at=>{z(Ze,at),z(ft,_(s).blood_supply)},[()=>G("card.blood")]),_e(te,ve)};Xe(Ue,te=>{_(s).blood_supply&&te(ge)})}var Fe=U(Ue,2),We=$(Fe,!0),$e=U(Fe),B=$($e,!0),Ee=U(Se,2);{var re=te=>{var ve=i_(),Te=ne(ve),Ze=$(Te,!0),ht=U(Te,1,!0);Me(ft=>{z(Ze,ft),z(ht,_(s).fact)},[()=>G("card.fact")]),_e(te,ve)};Xe(Ee,te=>{_(s).fact&&te(re)})}Me((te,ve,Te)=>{z(me,te),z(We,ve),z(B,Te)},[()=>G("card.details"),()=>G("card.partOf"),()=>Gi(e.ctx.namer,_(r))]),_e(Qe,je)},ee=Qe=>{var je=nh(),qe=$(je,!0);Me(Oe=>z(qe,Oe),[()=>G("card.noKb")]),_e(Qe,je)};Xe(H,Qe=>{_(s)?Qe(W):Qe(ee,-1)})}var se=U(H,2),Re=ne(se),Pe=ne(Re);yt(Pe,{name:"square",size:15});var Ne=U(Pe,1,!0),Be=U(Re,2),De=ne(Be);yt(De,{name:"layers",size:15});var He=U(De,1,!0),O=U(se,2);Er(O,{}),Me((Qe,je)=>{z(Ne,Qe),z(He,je)},[()=>G("card.seeOnScan"),()=>G("card.wholeLobe",{name:Gi(e.ctx.namer,_(r))})]),ct("click",Re,()=>p("mine")),ct("click",Be,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),_e(K,oe)};Xe(xe,K=>{_(t)==="mine"?K(ie):K(V,-1)})}Me((K,oe,H,W,ee,se)=>{Ge(x,"aria-label",K),Ge(x,"title",oe),z(L,H),Ge(S,"title",W),gn(M,`background:${ee??""}`),z(T,se),z(Z,_(a))},[()=>G("card.close"),()=>G("card.close"),()=>_(n).hemi==="L"?G("card.side.L"):_(n).hemi==="R"?G("card.side.R"):G("card.side.M"),()=>G("m3d.selectLobe",{name:Gi(e.ctx.namer,_(r))}),()=>Sr(_(r)),()=>Gi(e.ctx.namer,_(r))]),ct("click",x,()=>e.ctx.act.select(null)),ct("click",S,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),_e(i,y),Pn()}bi(["click"]);var l_=Ae('<div class="cta" style="margin-top:10px"><a class="btn"><!> </a></div>'),c_=Ae('<h3 class="sh"> </h3> <div class="metrics"></div>',1),u_=Ae('<p class="empty" role="note"> </p>'),ll=Ae("<dt> </dt><dd> </dd>",1),h_=Ae("<li> </li>"),d_=Ae('<div class="note"><b> </b> <ul class="dots"></ul></div>'),f_=Ae('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:var(--accent)"></span> </span></div> <h2> </h2> <p class="tag"> </p> <!></div> <div class="ibody"><!> <h3 class="sh"> </h3> <ul class="dots"><li> </li> <li> </li> <li> </li> <li> </li></ul> <h3 class="sh"> </h3> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <ol class="how" style="margin-top:10px"><li> </li> <li> </li> <li> </li></ol> <!> <!></div>',1),p_=Ae('<button type="button" class="btn primary"><!> </button>'),m_=Ae('<button type="button" class="btn"><!> </button>'),__=Ae("<span> </span>"),g_=Ae('<button type="button" class="lobe-card"><b> </b><!></button>'),v_=Ae('<h3 class="sh"> </h3> <div class="lobes"></div>',1),x_=Ae('<h3 class="sh"> </h3> <p> </p> <div class="cta"><button type="button" class="btn"><!> </button></div>',1),y_=Ae('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:#c084fc"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><div class="cta" style="margin-top:0"><!> <!></div> <!> <!> <!></div>',1);function b_(i,e){Cn(e,!0);const t=Le(()=>e.ctx.store.s.mode),n=Le(()=>bm(e.ctx.stats)),s=Le(()=>oc.filter(m=>e.ctx.store.index.lobes.has(m))),r=Le(()=>e.ctx.store.index.vessels.length>0),a=Le(()=>{var m;return(((m=e.ctx.regions)==null?void 0:m.caveats)??[]).map(hc)}),o=Le(()=>e.ctx.framing==="head"),l=Le(()=>e.ctx.ft),c=Le(()=>{var m;return e.ctx.study?wp(e.ctx.study.series,(m=e.ctx.regions)==null?void 0:m.primary_series,p=>Rp(p)):null}),h=Le(()=>encodeURIComponent(e.ctx.studyId)),u=m=>Un(`m3d.build.pipeline.${m}`)?G(`m3d.build.pipeline.${m}`):m;var d=Ra(),f=_t(d);{var g=m=>{var p=f_(),y=_t(p),b=ne(y),x=ne(b),A=U(ne(x),1,!0),R=U(b,2),w=$(R,!0),L=U(R,2),S=$(L,!0),M=U(L,2);{var T=Ce=>{var q=l_(),fe=ne(q),ye=ne(fe);yt(ye,{name:"side",size:15});var Ue=U(ye,1,!0);la(fe,ge=>{var Fe;return(Fe=ca)==null?void 0:Fe(ge)}),Me((ge,Fe)=>{Ge(fe,"href",`/study/${_(h)??""}/view/${ge??""}`),z(Ue,Fe)},[()=>encodeURIComponent(_(c)),()=>_(l)("card.sum.open2d")]),_e(Ce,q)};Xe(M,Ce=>{_(c)&&Ce(T)})}var I=U(y,2),F=ne(I);{var k=Ce=>{var q=c_(),fe=_t(q),ye=$(fe,!0),Ue=U(fe,2);qt(Ue,23,()=>_(n),ge=>ge.key,(ge,Fe,We)=>{{let $e=Le(()=>e.ctx.measureLabel(_(Fe))),B=Le(()=>_(We)===0);Tf(ge,{get m(){return _(Fe)},get label(){return _($e)},get wide(){return _(B)}})}}),Me(ge=>z(ye,ge),[()=>G("card.sum.numbers")]),_e(Ce,q)},Z=Ce=>{var q=u_(),fe=$(q,!0);Me(ye=>z(fe,ye),[()=>_(l)("card.sum.noNumbers")]),_e(Ce,q)};Xe(F,Ce=>{_(n).length?Ce(k):Ce(Z,-1)})}var j=U(F,2),ae=$(j,!0),Q=U(j,2),xe=ne(Q),ie=$(xe,!0),V=U(xe,2),K=$(V,!0),oe=U(V,2),H=$(oe,!0),W=U(oe,2),ee=$(W,!0),se=U(Q,2),Re=$(se,!0),Pe=U(se,2),Ne=ne(Pe);{var Be=Ce=>{var q=ll(),fe=_t(q),ye=$(fe,!0),Ue=U(fe),ge=$(Ue,!0);Me(Fe=>{z(ye,Fe),z(ge,e.ctx.regions.backend)},[()=>G("card.sum.backend")]),_e(Ce,q)};Xe(Ne,Ce=>{var q;(q=e.ctx.regions)!=null&&q.backend&&Ce(Be)})}var De=U(Ne,2);{var He=Ce=>{var q=ll(),fe=_t(q),ye=$(fe,!0),Ue=U(fe),ge=$(Ue);Me((Fe,We)=>{z(ye,Fe),z(ge,`${We??""}${e.ctx.status.version?` · v${e.ctx.status.version}`:""}`)},[()=>G("card.sum.pipeline"),()=>u(e.ctx.status.pipeline)]),_e(Ce,q)};Xe(De,Ce=>{var q;(q=e.ctx.status)!=null&&q.pipeline&&Ce(He)})}var O=U(De,2);{var Qe=Ce=>{var q=ll(),fe=_t(q),ye=$(fe,!0),Ue=U(fe),ge=$(Ue,!0);Me(Fe=>{z(ye,Fe),z(ge,e.ctx.regions.licence)},[()=>G("card.sum.licence")]),_e(Ce,q)};Xe(O,Ce=>{var q;(q=e.ctx.regions)!=null&&q.licence&&Ce(Qe)})}var je=U(O,2),qe=$(je,!0),Oe=U(je),st=$(Oe,!0),we=U(Pe,2),P=ne(we),E=$(P,!0),D=U(P,2),X=$(D,!0),ce=U(D,2),le=$(ce,!0),ze=U(we,2);{var me=Ce=>{var q=d_(),fe=ne(q),ye=$(fe,!0),Ue=U(fe,2);qt(Ue,21,()=>{var ge;return[..._(a),...((ge=e.ctx.status)==null?void 0:ge.warnings)??[]]},Fn,(ge,Fe)=>{var We=h_(),$e=$(We,!0);Me(()=>z($e,_(Fe))),_e(ge,We)}),Me(ge=>z(ye,ge),[()=>G("card.sum.limits")]),_e(Ce,q)};Xe(ze,Ce=>{var q,fe;(_(a).length||(fe=(q=e.ctx.status)==null?void 0:q.warnings)!=null&&fe.length)&&Ce(me)})}var Se=U(ze,2);{let Ce=Le(()=>_(l)("card.sum.disc"));Er(Se,{get extra(){return _(Ce)}})}Me((Ce,q,fe,ye,Ue,ge,Fe,We,$e,B,Ee,re,te)=>{z(A,Ce),z(w,q),z(S,fe),z(ae,ye),z(ie,Ue),z(K,ge),z(H,Fe),z(ee,We),z(Re,$e),z(qe,B),z(st,e.ctx.store.index.keys.length+e.ctx.store.index.vessels.length),z(E,Ee),z(X,re),z(le,te)},[()=>G("card.yourScan"),()=>G("card.sum.title"),()=>_(l)("card.sum.tag"),()=>G("card.sum.try"),()=>_(l)("card.sum.try1"),()=>_(l)("card.sum.try2"),()=>_(l)("card.sum.try3"),()=>G("card.sum.try4"),()=>G("card.sum.how"),()=>G("card.sum.regions"),()=>G("card.sum.how1"),()=>_(l)("card.sum.how2"),()=>G("card.sum.how3")]),_e(m,p)},v=m=>{var p=y_(),y=_t(p),b=ne(y),x=ne(b),A=U(ne(x),1,!0),R=U(b,2),w=$(R,!0),L=U(R,2),S=$(L,!0),M=U(y,2),T=ne(M),I=ne(T);{var F=V=>{var K=p_(),oe=ne(K);yt(oe,{name:"play",size:14});var H=U(oe,1,!0);Me(W=>z(H,W),[()=>G("card.learn.tour")]),ct("click",K,function(...W){var ee;(ee=e.ctx.act.tour)==null||ee.apply(this,W)}),_e(V,K)};Xe(I,V=>{e.ctx.tourLen&&V(F)})}var k=U(I,2);{var Z=V=>{var K=m_(),oe=ne(K);yt(oe,{name:"spark",size:15});var H=U(oe,1,!0);Me(W=>z(H,W),[()=>G("m3d.quiz")]),ct("click",K,function(...W){var ee;(ee=e.ctx.act.quiz)==null||ee.apply(this,W)}),_e(V,K)};Xe(k,V=>{e.ctx.store.index.keys.length>1&&V(Z)})}var j=U(T,2);{var ae=V=>{var K=v_(),oe=_t(K),H=$(oe,!0),W=U(oe,2);qt(W,20,()=>_(s),ee=>ee,(ee,se)=>{var Re=g_(),Pe=ne(Re),Ne=$(Pe,!0),Be=U(Pe);{var De=He=>{var O=__(),Qe=$(O,!0);Me(()=>z(Qe,e.ctx.kb.lobes[se].tagline)),_e(He,O)};Xe(Be,He=>{var O;(O=e.ctx.kb.lobes[se])!=null&&O.tagline&&He(De)})}Me((He,O)=>{gn(Re,`--c:${He??""}`),z(Ne,O)},[()=>Sr(se),()=>Gi(e.ctx.namer,se)]),ct("click",Re,()=>e.ctx.act.select({type:"lobe",id:se},!0)),_e(ee,Re)}),Me(ee=>z(H,ee),[()=>_(l)("card.learn.divisions")]),_e(V,K)};Xe(j,V=>{_(s).length&&V(ae)})}var Q=U(j,2);{var xe=V=>{var K=x_(),oe=_t(K),H=$(oe,!0),W=U(oe,2),ee=$(W,!0),se=U(W,2),Re=ne(se),Pe=ne(Re);yt(Pe,{name:"eye",size:15});var Ne=U(Pe,1,!0);Me((Be,De)=>{z(H,Be),z(ee,e.ctx.kb.arteries.overview),z(Ne,De)},[()=>G("card.learn.arteries"),()=>G("card.learn.showArteries")]),ct("click",Re,function(...Be){var De;(De=e.ctx.act.showVessels)==null||De.apply(this,Be)}),_e(V,K)};Xe(Q,V=>{var K;_(o)&&_(r)&&((K=e.ctx.kb.arteries)!=null&&K.overview)&&V(xe)})}var ie=U(Q,2);Er(ie,{}),Me((V,K,oe)=>{z(A,V),z(w,K),z(S,oe)},[()=>G("m3d.mode.learn"),()=>_(l)("card.learn.title"),()=>_(l)("card.learn.tag")]),_e(m,p)};Xe(f,m=>{_(t)==="mine"?m(g):m(v,-1)})}_e(i,d),Pn()}bi(["click"]);var M_=Ae("<p> </p>"),S_=Ae('<br/><span class="faint"> </span>',1),E_=Ae("<dt> </dt><dd> <!></dd>",1),T_=Ae('<h3 class="sh"> </h3> <dl class="kv"></dl>',1),A_=Ae('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot" style="background:#ef4444"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><!> <!> <div class="note"> </div> <!></div>',1);function w_(i,e){Cn(e,!0);const t=Le(()=>yf(e.id,e.ctx.framing)),n=Le(()=>_(t)==="body"?void 0:e.ctx.kb.arteries);var s=A_(),r=_t(s),a=ne(r),o=ne(a);yt(o,{name:"close",size:16});var l=U(a,2),c=ne(l),h=U(ne(c),1,!0),u=U(l,2),d=$(u,!0),f=U(u,2),g=$(f,!0),v=U(r,2),m=ne(v);{var p=L=>{var S=M_(),M=$(S,!0);Me(()=>z(M,_(n).overview)),_e(L,S)};Xe(m,L=>{var S;(S=_(n))!=null&&S.overview&&L(p)})}var y=U(m,2);{var b=L=>{var S=T_(),M=_t(S),T=$(M,!0),I=U(M,2);qt(I,21,()=>Object.values(_(n).vessels),Fn,(F,k)=>{var Z=E_(),j=_t(Z),ae=$(j,!0),Q=U(j),xe=ne(Q),ie=U(xe);{var V=K=>{var oe=S_(),H=U(_t(oe)),W=$(H,!0);Me(()=>z(W,_(k).note)),_e(K,oe)};Xe(ie,K=>{_(k).note&&K(V)})}Me(()=>{z(ae,_(k).name),z(xe,_(k).supplies)}),_e(F,Z)}),Me(F=>z(T,F),[()=>G("card.vessel.main")]),_e(L,S)},x=Le(()=>{var L;return((L=_(n))==null?void 0:L.vessels)&&Object.keys(_(n).vessels).length});Xe(y,L=>{_(x)&&L(b)})}var A=U(y,2),R=$(A,!0),w=U(A,2);Er(w,{}),Me((L,S,M,T,I,F)=>{Ge(a,"aria-label",L),Ge(a,"title",S),z(h,M),z(d,T),z(g,I),z(R,F)},[()=>G("card.close"),()=>G("card.close"),()=>G("card.vessel.kicker"),()=>G(`card.vessel.${_(t)}`),()=>G(`card.vessel.${_(t)}.tag`),()=>e.ctx.ft("card.vessel.caveat")]),ct("click",a,()=>e.ctx.act.select(null)),_e(i,s),Pn()}bi(["click"]);var R_=Ae('<div class="fade-in"><!></div>'),C_=Ae('<div class="cardx svelte-1yprcvz"><!></div>');function P_(i,e){Cn(e,!0);const t=Le(()=>e.ctx.store.s.sel);let n;Zn(()=>{var a,o;(a=_(t))==null||a.type,(o=_(t))==null||o.id,e.ctx.store.s.mode,n&&(n.scrollTop=0)});var s=C_(),r=ne(s);ff(r,()=>{var a,o;return`${(a=_(t))==null?void 0:a.type}:${(o=_(t))==null?void 0:o.id}:${e.ctx.store.s.mode}`},a=>{var o=R_(),l=ne(o);{var c=f=>{b_(f,{get ctx(){return e.ctx}})},h=f=>{o_(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},u=f=>{Im(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},d=f=>{w_(f,{get ctx(){return e.ctx},get id(){return _(t).id}})};Xe(l,f=>{_(t)?_(t).type==="region"?f(h,1):_(t).type==="lobe"?f(u,2):f(d,-1):f(c)})}_e(a,o)}),ri(s,a=>n=a,()=>n),_e(i,s),Pn()}const sh=["hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle","organ","airway","spine","muscle","vessels","neck","bone","skin"],rh={brain_mr:"head",spine_mr:"spine",ct_body:"body"},L_=new Set(["hemi","hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle"]),Af=new Set(["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem"]);function I_(i,e){const t=i==null?void 0:i.framing;if(t==="head"||t==="body"||t==="spine")return t;const n=(i==null?void 0:i.pipeline)??e??"";if(rh[n])return rh[n];const s=(i==null?void 0:i.regions)??[];return!s.length||s.some(a=>a.group?L_.has(a.group):_f(a.structure)&&Af.has(zo(a.structure)))?"head":s.every(a=>["spinal_column","nervous_spine"].includes(zo(a.structure))||a.group==="spine")?"spine":"body"}const wf={head:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!1,neck:!1,bone:!1,skin:!1},body:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!0},spine:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!1}};function D_(i,e,t){const n=new Set(i),s=new Map;for(const l of(e==null?void 0:e.layers)??[])l&&typeof l.id=="string"&&s.set(gf(l.id),l.default);const r=[...sh.filter(l=>n.has(l)),...[...n].filter(l=>!sh.includes(l))];!s.has("neck")&&typeof s.get("vessels")=="boolean"&&s.set("neck",s.get("vessels"));const a=wf[t],o={};for(const l of r){const c=s.get(l);o[l]=typeof c=="boolean"?c:a[l]??!0}return{layers:r,defaults:o}}const U_=i=>{for(const e of i)if(Af.has(e))return!0;return!1},N_=(i,e)=>i==="head"&&!e?"vessels":i,F_=new Set(["muscle","bone"]),O_=["deep","ventricle","vessels","organ","airway","spine"];function mu(i,e,t){return e==="head"?i:e==="vessels"?t(`${i}.vessels`)?`${i}.vessels`:i:e==="spine"&&t(`${i}.spine`)?`${i}.spine`:t(`${i}.body`)?`${i}.body`:i}var ah=Ae('<button type="button" role="radio"> </button>'),B_=Ae('<div class="row svelte-1x9pj0t"><span id="pb-l"> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="pb-l"><button type="button" role="radio"> </button> <button type="button" role="radio"> </button></div></div>'),k_=Ae('<li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" aria-hidden="true"></span> </span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li>'),z_=Ae('<div class="cp svelte-1x9pj0t"><div class="sec mode svelte-1x9pj0t"><div class="seg svelte-1x9pj0t" role="group"><button type="button"><!> </button> <button type="button"><!> </button></div> <p class="hint svelte-1x9pj0t"> </p></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t" id="cb-l"> </div> <div class="seg wrap svelte-1x9pj0t" role="radiogroup" aria-labelledby="cb-l"></div> <!></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t"> </div> <ul class="layers svelte-1x9pj0t" role="list"><!> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:#e2e8f0" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">X</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:var(--accent)" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">I</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li></ul></div> <div class="sec svelte-1x9pj0t"><label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.01" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.005" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <div class="row svelte-1x9pj0t"><span class="faint sm-t svelte-1x9pj0t" id="ax-l"><!> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="ax-l"></div></div></div> <div class="sec tree svelte-1x9pj0t"><!></div></div>');function V_(i,e){Cn(e,!0);const t=Le(()=>e.store.s),n=me=>e.store.dispatch(me),s=(me,Se)=>G(mu(me,e.store.wording,Un),Se),r=me=>Un(`m3d.layer.${me}`)?s(`m3d.layer.${me}`):me.replace(/_/g," "),a=Le(()=>e.store.index.lobes.size>1),o=Le(()=>[{id:"anatomy",label:G("m3d.color.anatomy")},..._(a)?[{id:"lobes",label:s("m3d.color.lobes")}]:[],{id:"natural",label:G("m3d.color.natural")},...e.dataMaps.map(me=>({id:`data:${me.key}`,label:e.dataLabel(me),title:G("m3d.color.dataTitle",{name:e.dataLabel(me)})}))]),l=["y","x","z"],c=me=>Math.round(me*100);var h=z_(),u=ne(h),d=ne(u),f=ne(d);let g;var v=ne(f);yt(v,{name:"square",size:15});var m=U(v,1,!0),p=U(f,2);let y;var b=ne(p);yt(b,{name:"spark",size:15});var x=U(b,1,!0),A=U(d,2),R=$(A,!0),w=U(u,2),L=ne(w),S=$(L,!0),M=U(L,2);qt(M,21,()=>_(o),me=>me.id,(me,Se)=>{var Ce=ah();let q;var fe=$(Ce,!0);Me(()=>{Ge(Ce,"aria-checked",_(t).colorBy===_(Se).id),Ge(Ce,"title",_(Se).title),q=zt(Ce,1,"svelte-1x9pj0t",null,q,{on:_(t).colorBy===_(Se).id}),z(fe,_(Se).label)}),ct("click",Ce,()=>n({type:"colorBy",colorBy:_(Se).id})),_e(me,Ce)});var T=U(M,2);{var I=me=>{var Se=B_(),Ce=ne(Se),q=$(Ce,!0),fe=U(Ce,2),ye=ne(fe);let Ue;var ge=$(ye,!0),Fe=U(ye,2);let We;var $e=$(Fe,!0);Me((B,Ee,re)=>{z(q,B),Ge(ye,"aria-checked",_(t).pickBy==="structure"),Ue=zt(ye,1,"svelte-1x9pj0t",null,Ue,{on:_(t).pickBy==="structure"}),z(ge,Ee),Ge(Fe,"aria-checked",_(t).pickBy==="lobe"),We=zt(Fe,1,"svelte-1x9pj0t",null,We,{on:_(t).pickBy==="lobe"}),z($e,re)},[()=>G("m3d.pickBy"),()=>G("m3d.pickBy.structure"),()=>s("m3d.pickBy.lobe")]),ct("click",ye,()=>n({type:"pickBy",pickBy:"structure"})),ct("click",Fe,()=>n({type:"pickBy",pickBy:"lobe"})),_e(me,Se)};Xe(T,me=>{_(a)&&me(I)})}var F=U(w,2),k=ne(F),Z=$(k,!0),j=U(k,2),ae=ne(j);qt(ae,16,()=>e.store.index.layers,me=>me,(me,Se)=>{var Ce=k_(),q=ne(Ce);let fe;var ye=ne(q),Ue=ne(ye),ge=U(Ue,1,!0);Me(Fe=>{Ge(q,"aria-checked",!!_(t).show[Se]),fe=zt(q,1,"tg svelte-1x9pj0t",null,fe,{on:!!_(t).show[Se]}),gn(Ue,`background:${om[Se]??"#cbd5e1"??""}`),z(ge,Fe)},[()=>r(Se)]),ct("click",q,()=>n({type:"layer",layer:Se})),_e(me,Ce)});var Q=U(ae,2),xe=ne(Q);let ie;var V=ne(xe),K=U(ne(V)),oe=U(Q,2),H=ne(oe);let W;var ee=ne(H),se=U(ne(ee)),Re=U(F,2),Pe=ne(Re),Ne=ne(Pe),Be=$(Ne,!0),De=U(Ne,2),He=U(De,2),O=$(He),Qe=U(Pe,2),je=ne(Qe),qe=$(je,!0),Oe=U(je,2),st=U(Oe,2),we=$(st,!0),P=U(Qe,2),E=ne(P),D=ne(E);yt(D,{name:"cut",size:13});var X=U(D),ce=U(E,2);qt(ce,21,()=>l,Fn,(me,Se)=>{var Ce=ah();let q;var fe=$(Ce,!0);Me(ye=>{Ge(Ce,"aria-checked",_(t).cutAxis===_(Se)),q=zt(Ce,1,"svelte-1x9pj0t",null,q,{on:_(t).cutAxis===_(Se)}),z(fe,ye)},[()=>G(`m3d.axis.${_(Se)}`)]),ct("click",Ce,()=>n({type:"cutAxis",axis:_(Se)})),_e(me,Ce)});var le=U(Re,2),ze=ne(le);mf(ze,()=>e.tree),Me((me,Se,Ce,q,fe,ye,Ue,ge,Fe,We,$e,B,Ee,re,te,ve,Te,Ze,ht)=>{Ge(d,"aria-label",me),Ge(f,"aria-pressed",_(t).mode==="mine"),g=zt(f,1,"svelte-1x9pj0t",null,g,{on:_(t).mode==="mine"}),z(m,Se),Ge(p,"aria-pressed",_(t).mode==="learn"),y=zt(p,1,"svelte-1x9pj0t",null,y,{on:_(t).mode==="learn"}),z(x,Ce),z(R,q),z(S,fe),z(Z,ye),Ge(xe,"aria-checked",_(t).xray),ie=zt(xe,1,"tg svelte-1x9pj0t",null,ie,{on:_(t).xray}),Ge(xe,"title",Ue),z(K,`${ge??""} `),Ge(H,"aria-checked",_(t).isolate),W=zt(H,1,"tg svelte-1x9pj0t",null,W,{on:_(t).isolate}),H.disabled=!_(t).sel,Ge(H,"title",Fe),z(se,`${We??""} `),z(Be,$e),ko(De,_(t).explode),gn(De,`--p:${B??""}%`),Ge(De,"aria-valuetext",`${Ee??""}%`),z(O,`${re??""}%`),z(qe,te),ko(Oe,_(t).cut),gn(Oe,`--p:${ve??""}%`),Ge(Oe,"aria-valuetext",Te),z(we,Ze),z(X,` ${ht??""}`)},[()=>G("m3d.mode"),()=>G("m3d.mode.mine"),()=>G("m3d.mode.learn"),()=>G(_(t).mode==="mine"?"m3d.mode.mine.hint":"m3d.mode.learn.hint"),()=>G("m3d.colorBy"),()=>G("m3d.layers"),()=>s("m3d.xray.title"),()=>s("m3d.xray"),()=>G("m3d.isolate.title"),()=>G("m3d.isolate"),()=>G("m3d.explode"),()=>c(_(t).explode),()=>c(_(t).explode),()=>c(_(t).explode),()=>G("m3d.cut"),()=>c(_(t).cut),()=>_(t).cut>=.999?G("m3d.cut.off"):`${c(_(t).cut)}%`,()=>_(t).cut>=.999?G("m3d.cut.off"):`${c(_(t).cut)}%`,()=>G("m3d.cut.axis")]),ct("click",f,()=>n({type:"mode",mode:"mine"})),ct("click",p,()=>n({type:"mode",mode:"learn"})),ct("click",xe,()=>n({type:"xray"})),ct("click",H,()=>n({type:"isolate"})),ct("input",De,me=>n({type:"explode",value:+me.currentTarget.value})),ct("input",Oe,me=>n({type:"cut",value:+me.currentTarget.value})),_e(i,h),Pn()}bi(["click","input"]);function Hr(i,e){if(!i.length)return NaN;const t=(i.length-1)*Math.max(0,Math.min(1,e)),n=Math.floor(t),s=Math.ceil(t);return i[n]+(i[s]-i[n])*(t-n)}function H_(i,e=2){const t=new Map;for(const[s,r]of Object.entries((i==null?void 0:i.regions)??{}))if(!/^[VHB]\|/.test(s))for(const a of r.measurements??[]){if(typeof a.value!="number"||!Number.isFinite(a.value))continue;let o=t.get(a.key);o||t.set(a.key,o={label:a.label||a.key,unit:a.unit??"",values:new Map}),o.values.set(s,a.value)}const n=[];for(const[s,r]of t){if(r.values.size<e)continue;const a=[...r.values.values()].sort((h,u)=>h-u),o=a[0]<0&&a[a.length-1]>0;let l,c;if(o){const h=a.map(Math.abs).sort((u,d)=>u-d);c=Hr(h,.95)||1,l=-c}else{const h=Hr(a,.25),u=Hr(a,.75),d=u-h;l=Math.max(Hr(a,.05),h-1.5*d),c=Math.min(Hr(a,.95),u+1.5*d),c>l||(l=a[0],c=a[a.length-1]),c>l||(c=l+1)}n.push({key:s,label:r.label,unit:r.unit,values:r.values,lo:l,hi:c,diverging:o,stops:o?um:Sf})}return n}function G_(i,e){const t=i.values.get(e);return t===void 0?Go(Mf):pm((t-i.lo)/(i.hi-i.lo),i.stops)}const W_=i=>[i.lo,(i.lo+i.hi)/2,i.hi];var X_=Ae('<button type="button" class="svelte-1r8wc48"> </button>'),q_=Ae('<option class="svelte-1r8wc48"> </option>'),oh=Ae('<button type="button"><!><span class="tx svelte-1r8wc48"> </span></button>'),j_=Ae('<span class="sep svelte-1r8wc48" aria-hidden="true"></span> <!> <!>',1),Y_=Ae('<div class="dock panel svelte-1r8wc48" role="toolbar"><button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-controls"><!></button> <div class="seg wide svelte-1r8wc48" role="group"></div> <label class="narrow vsel svelte-1r8wc48"><span class="sr-only"> </span> <!> <select class="svelte-1r8wc48"><option disabled="" class="svelte-1r8wc48"> </option><!></select></label> <span class="sep svelte-1r8wc48" aria-hidden="true"></span> <button type="button"><!></button> <button type="button" class="btn icon shot svelte-1r8wc48"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <!> <button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-card"><!></button></div>');function K_(i,e){Cn(e,!0);const t=Le(()=>["left","front","top","right","back","below",...e.store.brain&&e.store.index.layers.includes("hemi_R")?["inside"]:[]]),n=Le(()=>e.store.s);var s=Y_(),r=ne(s),a=ne(r);yt(a,{name:"sliders",size:17});var o=U(r,2);qt(o,21,()=>_(t),Fn,(T,I)=>{var F=X_(),k=$(F,!0);Me((Z,j)=>{Ge(F,"title",Z),z(k,j)},[()=>G(`m3d.view.${_(I)}.title`),()=>G(`m3d.view.${_(I)}`)]),ct("click",F,()=>e.onview(_(I))),_e(T,F)});var l=U(o,2),c=ne(l),h=$(c,!0),u=U(c,2);yt(u,{name:"cube",size:15});var d=U(u,2),f=ne(d),g=$(f,!0);f.value=f.__value="";var v=U(f);qt(v,17,()=>_(t),Fn,(T,I)=>{var F=q_(),k=$(F,!0),Z={};Me(j=>{z(k,j),Z!==(Z=_(I))&&(F.value=(F.__value=Z)??"")},[()=>G(`m3d.view.${_(I)}`)]),_e(T,F)}),d.value=d.__value="";var m=U(l,4);let p;var y=ne(m);yt(y,{name:"rotate",size:17});var b=U(m,2),x=ne(b);yt(x,{name:"camera",size:17});var A=U(b,2),R=ne(A);yt(R,{name:"reset",size:17});var w=U(A,2);{var L=T=>{var I=j_(),F=U(_t(I),2);{var k=ae=>{var Q=oh();let xe;var ie=ne(Q);yt(ie,{name:"play",size:14});var V=U(ie),K=$(V,!0);Me((oe,H)=>{xe=zt(Q,1,"btn svelte-1r8wc48",null,xe,{on:!!_(n).tour}),Ge(Q,"aria-pressed",!!_(n).tour),Ge(Q,"title",oe),z(K,H)},[()=>G("m3d.tour"),()=>G("m3d.tour")]),ct("click",Q,function(...oe){var H;(H=e.ontour)==null||H.apply(this,oe)}),_e(ae,Q)};Xe(F,ae=>{e.canTour&&ae(k)})}var Z=U(F,2);{var j=ae=>{var Q=oh();let xe;var ie=ne(Q);yt(ie,{name:"spark",size:15});var V=U(ie),K=$(V,!0);Me((oe,H)=>{xe=zt(Q,1,"btn svelte-1r8wc48",null,xe,{on:!!_(n).quiz}),Ge(Q,"aria-pressed",!!_(n).quiz),Ge(Q,"title",oe),z(K,H)},[()=>G("m3d.quiz"),()=>G("m3d.quiz")]),ct("click",Q,function(...oe){var H;(H=e.onquiz)==null||H.apply(this,oe)}),_e(ae,Q)};Xe(Z,ae=>{e.canQuiz&&ae(j)})}_e(T,I)};Xe(w,T=>{_(n).mode==="learn"&&T(L)})}var S=U(w,2),M=ne(S);yt(M,{name:"card",size:17}),Me((T,I,F,k,Z,j,ae,Q,xe,ie,V,K,oe,H)=>{Ge(s,"aria-label",T),Ge(r,"aria-expanded",e.controlsOpen),Ge(r,"aria-label",I),Ge(r,"title",F),Ge(o,"aria-label",k),z(h,Z),z(g,j),p=zt(m,1,"btn icon svelte-1r8wc48",null,p,{on:_(n).rotate}),Ge(m,"aria-pressed",_(n).rotate),Ge(m,"aria-label",ae),Ge(m,"title",Q),Ge(b,"aria-label",xe),Ge(b,"title",ie),Ge(A,"aria-label",V),Ge(A,"title",K),Ge(S,"aria-expanded",e.cardOpen),Ge(S,"aria-label",oe),Ge(S,"title",H)},[()=>G("m3d.dock"),()=>G("m3d.controls"),()=>G("m3d.controls"),()=>G("m3d.views"),()=>G("m3d.views"),()=>G("m3d.views.pick"),()=>G("m3d.rotate"),()=>G("m3d.rotate"),()=>G("m3d.shot"),()=>G("m3d.shot"),()=>G("m3d.reset"),()=>G("m3d.reset"),()=>G("m3d.card"),()=>G("m3d.card")]),ct("click",r,function(...T){var I;(I=e.ontoggleControls)==null||I.apply(this,T)}),ct("change",d,T=>{const I=T.currentTarget.value;T.currentTarget.value="",I&&e.onview(I)}),ct("click",m,()=>e.store.dispatch({type:"rotate"})),ct("click",b,function(...T){var I;(I=e.onshot)==null||I.apply(this,T)}),ct("click",A,function(...T){var I;(I=e.onreset)==null||I.apply(this,T)}),ct("click",S,function(...T){var I;(I=e.ontoggleCard)==null||I.apply(this,T)}),_e(i,s),Pn()}bi(["click","change"]);var Z_=Ae('<div class="legend panel svelte-qe47ma" role="figure"><div class="ttl svelte-qe47ma"><span> </span><span> </span></div> <div class="grad svelte-qe47ma"></div> <div class="ticks svelte-qe47ma"><span> </span> <span> </span> <span> </span></div> <div class="nd svelte-qe47ma"><i class="svelte-qe47ma"></i> </div></div>');function J_(i,e){Cn(e,!0);const t=Le(()=>W_(e.map)),n=Le(()=>e.map.diverging&&/asym/i.test(e.map.key));var s=Z_(),r=ne(s),a=ne(r),o=$(a,!0),l=U(a),c=$(l,!0),h=U(r,2),u=U(h,2),d=ne(u),f=$(d,!0),g=U(d,2),v=$(g,!0),m=U(g,2),p=$(m,!0),y=U(u,2),b=ne(y),x=U(b);Me((A,R,w,L,S,M,T)=>{Ge(s,"aria-label",A),z(o,e.label),z(c,e.map.unit),gn(h,`background:${R??""}`),z(f,w),z(v,L),z(p,S),gn(b,`background:${Mf}`),z(x,`${M??""} · ${T??""}`)},[()=>G("m3d.legend",{name:e.label}),()=>mm(e.map.stops),()=>_(n)?G("m3d.legend.rLarger",{v:An(Math.abs(_(t)[0]),gi.lang)}):An(_(t)[0],gi.lang),()=>_(n)?G("m3d.legend.equal"):An(_(t)[1],gi.lang),()=>_(n)?G("m3d.legend.lLarger",{v:An(_(t)[2],gi.lang)}):An(_(t)[2],gi.lang)+(e.map.diverging?"":"+"),()=>G("m3d.legend.noData"),()=>G("m3d.legend.note")]),_e(i,s),Pn()}var Q_=Ae('<span class="fb ok svelte-1xhmue8"> </span>'),$_=Ae('<span class="fb bad svelte-1xhmue8"> </span>'),eg=Ae('<div role="status" aria-live="polite"><span class="q svelte-1xhmue8"> <b class="svelte-1xhmue8"> </b></span> <span class="score svelte-1xhmue8"> </span> <!> <button type="button" class="btn svelte-1xhmue8"> </button> <button type="button" class="btn icon svelte-1xhmue8"><!></button></div>');function tg(i,e){Cn(e,!0);var t=eg();let n;var s=ne(t),r=ne(s),a=U(r),o=$(a,!0),l=U(s,2),c=$(l),h=U(l,2);{var u=p=>{var y=Q_(),b=$(y,!0);Me(x=>z(b,x),[()=>G("m3d.quiz.right")]),_e(p,y)},d=p=>{var y=$_(),b=$(y,!0);Me(x=>z(b,x),[()=>G("m3d.quiz.wrong",{name:e.name(e.quiz.last.picked)})]),_e(p,y)};Xe(h,p=>{var y;(y=e.quiz.last)!=null&&y.ok?p(u):e.quiz.last&&e.quiz.last.picked&&p(d,1)})}var f=U(h,2),g=$(f,!0),v=U(f,2),m=ne(v);yt(m,{name:"close",size:16}),Me((p,y,b,x,A,R)=>{var w,L;n=zt(t,1,"banner panel svelte-1xhmue8",null,n,{ok:((w=e.quiz.last)==null?void 0:w.ok)===!0,bad:((L=e.quiz.last)==null?void 0:L.ok)===!1}),z(r,`${p??""} `),z(o,y),Ge(l,"aria-label",b),z(c,`${e.quiz.score??""}/${e.quiz.n??""}`),f.disabled=e.quiz.revealing,z(g,x),Ge(v,"aria-label",A),Ge(v,"title",R)},[()=>G("m3d.quiz.ask"),()=>e.name(e.quiz.target),()=>G("m3d.quiz.score",{s:e.quiz.score,n:e.quiz.n}),()=>G("m3d.quiz.skip"),()=>G("m3d.quiz.end"),()=>G("m3d.quiz.end")]),ct("click",f,function(...p){var y;(y=e.onskip)==null||y.apply(this,p)}),ct("click",v,function(...p){var y;(y=e.onend)==null||y.apply(this,p)}),_e(i,t),Pn()}bi(["click"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="170",vr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ng=0,lh=1,ig=2,Rf=1,sg=2,zi=3,li=0,Rn=1,Xn=2,ms=0,xr=1,ch=2,uh=3,hh=4,rg=5,Us=100,ag=101,og=102,lg=103,cg=104,ug=200,hg=201,dg=202,fg=203,dc=204,fc=205,pg=206,mg=207,_g=208,gg=209,vg=210,xg=211,yg=212,bg=213,Mg=214,pc=0,mc=1,_c=2,Tr=3,gc=4,vc=5,xc=6,yc=7,Cf=0,Sg=1,Eg=2,_s=0,Tg=1,Ag=2,wg=3,Pf=4,Rg=5,Cg=6,Pg=7,dh="attached",Lg="detached",Lf=300,Ar=301,wr=302,bc=303,Mc=304,Zo=306,Rr=1e3,us=1001,Wo=1002,On=1003,If=1004,ra=1005,Jn=1006,Lo=1007,Wi=1008,ji=1009,Df=1010,Uf=1011,_a=1012,_u=1013,gs=1014,Qn=1015,Pa=1016,gu=1017,vu=1018,Cr=1020,Nf=35902,Ff=1021,Of=1022,qn=1023,Bf=1024,kf=1025,yr=1026,Pr=1027,xu=1028,Jo=1029,zf=1030,yu=1031,bu=1033,Io=33776,Do=33777,Uo=33778,No=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,wc=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,Ic=37810,Dc=37811,Uc=37812,Nc=37813,Fc=37814,Oc=37815,Bc=37816,kc=37817,zc=37818,Vc=37819,Hc=37820,Gc=37821,Fo=36492,Wc=36494,Xc=36495,Vf=36283,qc=36284,jc=36285,Yc=36286,ga=2300,va=2301,cl=2302,fh=2400,ph=2401,mh=2402,Ig=2500,Dg=0,Hf=1,Kc=2,Ug=3200,Ng=3201,Gf=0,Fg=1,cs="",nn="srgb",kn="srgb-linear",Qo="linear",Gt="srgb",zs=7680,_h=519,Og=512,Bg=513,kg=514,Wf=515,zg=516,Vg=517,Hg=518,Gg=519,Zc=35044,gh="300 es",Xi=2e3,Xo=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const ua=Math.PI/180,Lr=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function _n(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function Wg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xg(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function qg(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function jg(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function Yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jg(i,e){return i+Math.random()*(e-i)}function Qg(i){return i*(.5-Math.random())}function $g(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ev(i){return i*ua}function tv(i){return i*Lr}function nv(i){return(i&i-1)===0&&i!==0}function iv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Su={DEG2RAD:ua,RAD2DEG:Lr,generateUUID:xi,clamp:_n,euclideanModulo:Mu,mapLinear:Wg,inverseLerp:Xg,lerp:ha,damp:qg,pingpong:jg,smoothstep:Yg,smootherstep:Kg,randInt:Zg,randFloat:Jg,randFloatSpread:Qg,seededRandom:$g,degToRad:ev,radToDeg:tv,isPowerOfTwo:nv,ceilPowerOfTwo:iv,floorPowerOfTwo:sv,setQuaternionFromProperEuler:rv,normalize:Bt,denormalize:vi};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,s,r,a,o,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],x=s[7],A=s[2],R=s[5],w=s[8];return r[0]=a*v+o*y+l*A,r[3]=a*m+o*b+l*R,r[6]=a*p+o*x+l*w,r[1]=c*v+h*y+u*A,r[4]=c*m+h*b+u*R,r[7]=c*p+h*x+u*w,r[2]=d*v+f*y+g*A,r[5]=d*m+f*b+g*R,r[8]=d*p+f*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new vt;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function av(){const i=xa("canvas");return i.style.display="block",i}const xh={};function aa(i){i in xh||(xh[i]=!0,console.warn(i))}function ov(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function lv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yh=[.64,.33,.3,.6,.15,.06],bh=[.2126,.7152,.0722],Mh=[.3127,.329],Sh=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[kn]:{primaries:yh,whitePoint:Mh,transfer:Qo,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:yh,whitePoint:Mh,transfer:Gt,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let Vs;class uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=xa("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hv=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dv=0;class xn extends Bs{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=us,s=us,r=Jn,a=Wi,o=qn,l=ji,c=xn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=xi(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Lf;xn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,A=(p+1)/2,R=(h+d)/4,w=(u+v)/4,L=(g+m)/4;return b>x&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=w/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fv extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends fv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pv extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),R=Math.atan2(A,p*y);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const x=o*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new N,Th=new Ri;class jt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Ba.subVectors(this.max,Gr),Hs.subVectors(e.a,Gr),Gs.subVectors(e.b,Gr),Ws.subVectors(e.c,Gr),es.subVectors(Gs,Hs),ts.subVectors(Ws,Gs),ys.subVectors(Hs,Ws);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-ys.z,ys.y,es.z,0,-es.x,ts.z,0,-ts.x,ys.z,0,-ys.x,-es.y,es.x,0,-ts.y,ts.x,0,-ys.y,ys.x,0];return!fl(t,Hs,Gs,Ws,Ba)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Hs,Gs,Ws,Ba))?!1:(ka.crossVectors(es,ts),t=[ka.x,ka.y,ka.z],fl(t,Hs,Gs,Ws,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new N,new N,new N,new N,new N,new N,new N,new N],hi=new N,Oa=new jt,Hs=new N,Gs=new N,Ws=new N,es=new N,ts=new N,ys=new N,Gr=new N,Ba=new N,ka=new N,bs=new N;function fl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);const o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mv=new jt,Wr=new N,pl=new N;class Bn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(pl)),this.expandByPoint(Wr.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new N,ml=new N,za=new N,ns=new N,_l=new N,Va=new N,gl=new N;class ks{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=ns.dot(this.direction),l=-ns.dot(za),c=ns.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(za,d),f}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){_l.subVectors(t,e),Va.subVectors(n,e),gl.crossVectors(_l,Va);let a=this.direction.dot(gl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(ns,Va));if(l<0)return null;const c=o*this.direction.dot(_l.cross(ns));if(c<0||l+c>a)return null;const h=-o*ns.dot(gl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,gv)}lookAt(e,t,n){const s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),is.crossVectors(n,Yn),is.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),is.crossVectors(n,Yn)),is.normalize(),Ha.crossVectors(Yn,is),s[0]=is.x,s[4]=Ha.x,s[8]=Yn.x,s[1]=is.y,s[5]=Ha.y,s[9]=Yn.y,s[2]=is.z,s[6]=Ha.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],b=n[7],x=n[11],A=n[15],R=s[0],w=s[4],L=s[8],S=s[12],M=s[1],T=s[5],I=s[9],F=s[13],k=s[2],Z=s[6],j=s[10],ae=s[14],Q=s[3],xe=s[7],ie=s[11],V=s[15];return r[0]=a*R+o*M+l*k+c*Q,r[4]=a*w+o*T+l*Z+c*xe,r[8]=a*L+o*I+l*j+c*ie,r[12]=a*S+o*F+l*ae+c*V,r[1]=h*R+u*M+d*k+f*Q,r[5]=h*w+u*T+d*Z+f*xe,r[9]=h*L+u*I+d*j+f*ie,r[13]=h*S+u*F+d*ae+f*V,r[2]=g*R+v*M+m*k+p*Q,r[6]=g*w+v*T+m*Z+p*xe,r[10]=g*L+v*I+m*j+p*ie,r[14]=g*S+v*F+m*ae+p*V,r[3]=y*R+b*M+x*k+A*Q,r[7]=y*w+b*T+x*Z+A*xe,r[11]=y*L+b*I+x*j+A*ie,r[15]=y*S+b*F+x*ae+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,A=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,R=t*y+n*b+s*x+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*w,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*w,e[4]=b*w,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*w,e[8]=x*w,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*w,e[12]=A*w,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*w,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=l*c,b=l*h,x=l*u,A=n.x,R=n.y,w=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+x)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+b)*w,s[9]=(m-y)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);const c=1/r,h=1/a,u=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Xi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===Xi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h;let g,v;if(o===Xi)g=(a+r)*u,v=-2*u;else if(o===Xo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new N,di=new ut,_v=new N(0,0,0),gv=new N(1,1,1),is=new N,Ha=new N,Yn=new N,Ah=new ut,wh=new Ri;class Ci{constructor(e=0,t=0,n=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vv=0;const Rh=new N,qs=new Ri,Fi=new ut,Ga=new N,Xr=new N,xv=new N,yv=new Ri,Ch=new N(1,0,0),Ph=new N(0,1,0),Lh=new N(0,0,1),Ih={type:"added"},bv={type:"removed"},js={type:"childadded",child:null},vl={type:"childremoved",child:null};class Kt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new N,t=new Ci,n=new Ri,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new vt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Xr,Ga,this.up):Fi.lookAt(Ga,Xr,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Fi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bv),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new N(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new N,Oi=new N,xl=new N,Bi=new N,Ys=new N,Ks=new N,Dh=new N,yl=new N,bl=new N,Ml=new N,Sl=new Ut,El=new Ut,Tl=new Ut;class Mn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Oi.subVectors(n,t),xl.subVectors(e,t);const a=fi.dot(fi),o=fi.dot(Oi),l=fi.dot(xl),c=Oi.dot(Oi),h=Oi.dot(xl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sl.setScalar(0),El.setScalar(0),Tl.setScalar(0),Sl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(El,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Oi.subVectors(e,t),fi.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,n),Ks.subVectors(r,n),yl.subVectors(e,n);const l=Ys.dot(yl),c=Ks.dot(yl);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,s);const h=Ys.dot(bl),u=Ks.dot(bl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);Ml.subVectors(e,r);const f=Ys.dot(Ml),g=Ks.dot(Ml);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ks,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Dh,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=Mu(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Al(a,r,e+1/3),this.g=Al(a,r,e),this.b=Al(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Et.fromWorkingColorSpace(En.copy(this),e),Math.round(_n(En.r*255,0,255))*65536+Math.round(_n(En.g*255,0,255))*256+Math.round(_n(En.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(En.copy(this),t);const n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=nn){Et.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,s=En.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Wa);const n=ha(ss.h,Wa.h,t),s=ha(ss.s,Wa.s,t),r=ha(ss.l,Wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new lt;lt.NAMES=Yf;let Mv=0;class wi extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=xi(),this.name="",this.blending=xr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends wi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new N,Xa=new rt;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Kf extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zf extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class oi extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sv=0;const ni=new ut,wl=new Kt,Zs=new N,Kn=new jt,qr=new jt,mn=new N;class ei extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Zf:Kf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oi(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(Kn.min,qr.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,qr.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(qr.min),Kn.expandByPoint(qr.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),mn.add(Zs)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;const c=new N,h=new N,u=new N,d=new rt,f=new rt,g=new rt,v=new N,m=new N;function p(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[L].add(v),o[S].add(v),o[M].add(v),l[L].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,S=y.length;L<S;++L){const M=y[L],T=M.start,I=M.count;for(let F=T,k=T+I;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new N,x=new N,A=new N,R=new N;function w(L){A.fromBufferAttribute(s,L),R.copy(A);const S=o[L];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(R,S);const T=x.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,T)}for(let L=0,S=y.length;L<S;++L){const M=y[L],T=M.start,I=M.count;for(let F=T,k=T+I;F<k;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new ut,Ms=new ks,qa=new Bn,Nh=new N,ja=new N,Ya=new N,Ka=new N,Rl=new N,Za=new N,Fh=new N,Ja=new N;class Lt extends Kt{constructor(e=new ei,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Rl.fromBufferAttribute(u,e),a?Za.addScaledVector(Rl,h):Za.addScaledVector(Rl.sub(t),h))}t.add(Za)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(qa.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(qa,Nh)===null||Ms.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=b;x<A;x+=3){const R=o.getX(x),w=o.getX(x+1),L=o.getX(x+2);s=Qa(this,p,e,n,c,h,u,R,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=Qa(this,a,e,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,A=b;x<A;x+=3){const R=x,w=x+1,L=x+2;s=Qa(this,p,e,n,c,h,u,R,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,b=m+1,x=m+2;s=Qa(this,a,e,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ev(i,e,t,n,s,r,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:i}}function Qa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ja),i.getVertexPosition(l,Ya),i.getVertexPosition(c,Ka);const h=Ev(i,e,t,n,ja,Ya,Ka,Fh);if(h){const u=new N;Mn.getBarycoord(Fh,ja,Ya,Ka,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Mn.getNormal(ja,Ya,Ka,d.normal),h.face=d,h.barycoord=u}return h}class Fr extends ei{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(u,2));function g(v,m,p,y,b,x,A,R,w,L,S){const M=x/w,T=A/L,I=x/2,F=A/2,k=R/2,Z=w+1,j=L+1;let ae=0,Q=0;const xe=new N;for(let ie=0;ie<j;ie++){const V=ie*T-F;for(let K=0;K<Z;K++){const oe=K*M-I;xe[v]=oe*y,xe[m]=V*b,xe[p]=k,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[m]=0,xe[p]=R>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(K/w),u.push(1-ie/L),ae+=1}}for(let ie=0;ie<L;ie++)for(let V=0;V<w;V++){const K=d+V+Z*ie,oe=d+V+Z*(ie+1),H=d+(V+1)+Z*(ie+1),W=d+(V+1)+Z*ie;l.push(K,oe,W),l.push(oe,H,W),Q+=6}o.addGroup(f,Q,S),f+=Q,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dn(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const s in n)e[s]=n[s]}return e}function Tv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Av={clone:Ir,merge:Dn};var wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends wi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wv,this.fragmentShader=Rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new N,Oh=new rt,Bh=new rt;class Nn extends Qf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class Cv extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Js,Qs,e,t);s.layers=this.layers,this.add(s);const r=new Nn(Js,Qs,e,t);r.layers=this.layers,this.add(r);const a=new Nn(Js,Qs,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Js,Qs,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $f extends xn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pv extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $f(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fr(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ms});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Jn),new Cv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Cl=new N,Lv=new N,Iv=new vt;class _i{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Cl.subVectors(n,t).cross(Lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iv.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Bn,$a=new N;class $o{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+y).normalize(),n[3].setComponents(l-a,d-h,m-g,x-y).normalize(),n[4].setComponents(l-o,d-u,m-v,x-b).normalize(),t===Xi)n[5].setComponents(l+o,d+u,m+v,x+b).normalize();else if(t===Xo)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dv(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class el extends ei{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let b=0;b<c;b++){const x=b*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,x=y+c*(p+1),A=y+1+c*(p+1),R=y+1+c*p;f.push(b,x,R),f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nv=`#ifdef USE_ALPHAHASH
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
#endif`,Fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zv=`#ifdef USE_AOMAP
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
#endif`,Vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
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
#endif`,Gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Yv=`#ifdef USE_BUMPMAP
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
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rx=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Dx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ny=`#ifdef USE_NORMALMAP
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
#endif`,iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vy=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uy=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`#include <common>
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
}`,zy=`#if DEPTH_PACKING == 3200
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
}`,Vy=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`uniform float scale;
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
}`,qy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Ky=`#define LAMBERT
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
}`,Zy=`#define LAMBERT
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
}`,Jy=`#define MATCAP
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
}`,Qy=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,e0=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,n0=`#define PHONG
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
}`,i0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,a0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,u0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,d0=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Uv,alphahash_pars_fragment:Nv,alphamap_fragment:Fv,alphamap_pars_fragment:Ov,alphatest_fragment:Bv,alphatest_pars_fragment:kv,aomap_fragment:zv,aomap_pars_fragment:Vv,batching_pars_vertex:Hv,batching_vertex:Gv,begin_vertex:Wv,beginnormal_vertex:Xv,bsdfs:qv,iridescence_fragment:jv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:Kv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:Qv,color_fragment:$v,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:sx,defaultnormal_vertex:rx,displacementmap_pars_vertex:ax,displacementmap_vertex:ox,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:hx,envmap_fragment:dx,envmap_common_pars_fragment:fx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:Ax,envmap_vertex:_x,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:xx,fog_pars_fragment:yx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Tx,lights_toon_fragment:wx,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Dx,lights_fragment_maps:Ux,lights_fragment_end:Nx,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:kx,map_fragment:zx,map_pars_fragment:Vx,map_particle_fragment:Hx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:qx,morphcolor_vertex:jx,morphnormal_vertex:Yx,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:$x,normal_pars_vertex:ey,normal_vertex:ty,normalmap_pars_fragment:ny,clearcoat_normal_fragment_begin:iy,clearcoat_normal_fragment_maps:sy,clearcoat_pars_fragment:ry,iridescence_pars_fragment:ay,opaque_fragment:oy,packing:ly,premultiplied_alpha_fragment:cy,project_vertex:uy,dithering_fragment:hy,dithering_pars_fragment:dy,roughnessmap_fragment:fy,roughnessmap_pars_fragment:py,shadowmap_pars_fragment:my,shadowmap_pars_vertex:_y,shadowmap_vertex:gy,shadowmask_pars_fragment:vy,skinbase_vertex:xy,skinning_pars_vertex:yy,skinning_vertex:by,skinnormal_vertex:My,specularmap_fragment:Sy,specularmap_pars_fragment:Ey,tonemapping_fragment:Ty,tonemapping_pars_fragment:Ay,transmission_fragment:wy,transmission_pars_fragment:Ry,uv_pars_fragment:Cy,uv_pars_vertex:Py,uv_vertex:Ly,worldpos_vertex:Iy,background_vert:Dy,background_frag:Uy,backgroundCube_vert:Ny,backgroundCube_frag:Fy,cube_vert:Oy,cube_frag:By,depth_vert:ky,depth_frag:zy,distanceRGBA_vert:Vy,distanceRGBA_frag:Hy,equirect_vert:Gy,equirect_frag:Wy,linedashed_vert:Xy,linedashed_frag:qy,meshbasic_vert:jy,meshbasic_frag:Yy,meshlambert_vert:Ky,meshlambert_frag:Zy,meshmatcap_vert:Jy,meshmatcap_frag:Qy,meshnormal_vert:$y,meshnormal_frag:e0,meshphong_vert:t0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:u0,sprite_vert:h0,sprite_frag:d0},Ye={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ai={basic:{uniforms:Dn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Dn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Dn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Dn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Dn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Dn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Dn([Ye.points,Ye.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Dn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Dn([Ye.common,Ye.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Dn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Dn([Ye.sprite,Ye.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Dn([Ye.common,Ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Dn([Ye.lights,Ye.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ai.physical={uniforms:Dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const eo={r:0,b:0,g:0},Es=new Ci,f0=new ut;function p0(i,e,t,n,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Zo)?(h===void 0&&(h=new Lt(new Fr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ir(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(Es)),h.material.toneMapped=Et.getTransfer(x.colorSpace)!==Gt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Lt(new el(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ir(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Et.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(eo,Jf(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function m0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,T,I,F,k){let Z=!1;const j=u(F,I,T);r!==j&&(r=j,c(r.object)),Z=f(M,F,I,k),Z&&g(M,F,I,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(M,T,I,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,T,I){const F=I.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[T.id];Z===void 0&&(Z={},k[T.id]=Z);let j=Z[F];return j===void 0&&(j=d(l()),Z[F]=j),j}function d(M){const T=[],I=[],F=[];for(let k=0;k<t;k++)T[k]=0,I[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,T,I,F){const k=r.attributes,Z=T.attributes;let j=0;const ae=I.getAttributes();for(const Q in ae)if(ae[Q].location>=0){const ie=k[Q];let V=Z[Q];if(V===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),ie===void 0||ie.attribute!==V||V&&ie.data!==V.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function g(M,T,I,F){const k={},Z=T.attributes;let j=0;const ae=I.getAttributes();for(const Q in ae)if(ae[Q].location>=0){let ie=Z[Q];ie===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const V={};V.attribute=ie,ie&&ie.data&&(V.data=ie.data),k[Q]=V,j++}r.attributes=k,r.attributesNum=j,r.index=F}function v(){const M=r.newAttributes;for(let T=0,I=M.length;T<I;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const I=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;I[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),k[M]!==T&&(i.vertexAttribDivisor(M,T),k[M]=T)}function y(){const M=r.newAttributes,T=r.enabledAttributes;for(let I=0,F=T.length;I<F;I++)T[I]!==M[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function b(M,T,I,F,k,Z,j){j===!0?i.vertexAttribIPointer(M,T,I,k,Z):i.vertexAttribPointer(M,T,I,F,k,Z)}function x(M,T,I,F){v();const k=F.attributes,Z=I.getAttributes(),j=T.defaultAttributeValues;for(const ae in Z){const Q=Z[ae];if(Q.location>=0){let xe=k[ae];if(xe===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),xe!==void 0){const ie=xe.normalized,V=xe.itemSize,K=e.get(xe);if(K===void 0)continue;const oe=K.buffer,H=K.type,W=K.bytesPerElement,ee=H===i.INT||H===i.UNSIGNED_INT||xe.gpuType===_u;if(xe.isInterleavedBufferAttribute){const se=xe.data,Re=se.stride,Pe=xe.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)p(Q.location+Ne,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)m(Q.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Ne=0;Ne<Q.locationSize;Ne++)b(Q.location+Ne,V/Q.locationSize,H,ie,Re*W,(Pe+V/Q.locationSize*Ne)*W,ee)}else{if(xe.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)p(Q.location+se,xe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let se=0;se<Q.locationSize;se++)m(Q.location+se);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let se=0;se<Q.locationSize;se++)b(Q.location+se,V/Q.locationSize,H,ie,V*W,V/Q.locationSize*se*W,ee)}}else if(j!==void 0){const ie=j[ae];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Q.location,ie);break;case 3:i.vertexAttrib3fv(Q.location,ie);break;case 4:i.vertexAttrib4fv(Q.location,ie);break;default:i.vertexAttrib1fv(Q.location,ie)}}}}y()}function A(){L();for(const M in n){const T=n[M];for(const I in T){const F=T[I];for(const k in F)h(F[k].object),delete F[k];delete T[I]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const I in T){const F=T[I];for(const k in F)h(F[k].object),delete F[k];delete T[I]}delete n[M.id]}function w(M){for(const T in n){const I=n[T];if(I[M.id]===void 0)continue;const F=I[M.id];for(const k in F)h(F[k].object),delete F[k];delete I[M.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function _0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ji&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function v0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new _i,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,b,f);for(let A=0;A!==b;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function x0(i){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=Ar:o===Mc&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pv(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tu extends Qf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,kh=[.125,.215,.35,.446,.526,.582],Ns=20,Pl=new Tu,zh=new lt;let Ll=null,Il=0,Dl=0,Ul=!1;const Ds=(1+Math.sqrt(5))/2,$s=1/Ds,Vh=[new N(-Ds,$s,0),new N(Ds,$s,0),new N(-$s,0,Ds),new N($s,0,Ds),new N(0,Ds,-$s),new N(0,Ds,$s),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Il,Dl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Pa,format:qn,colorSpace:kn,depthBuffer:!1},s=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(r)),this._blurMaterial=b0(r,e,t)}return s}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,s){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=_s,h.autoClear=!1;const f=new hs({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new Lt(new Fr,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(zh),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;to(s,y*b,p>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ar||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(s-r-1)%Vh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Lt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let y=0;for(let w=0;w<Ns;++w){const L=w/v,S=Math.exp(-L*L/2);p.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[s],A=3*x*(s>b-mr?s-b+mr:0),R=4*(this._cubeSize-x);to(t,A,R,3*x,2*x),l.setRenderTarget(t),l.render(u,Pl)}}function y0(i){const e=[],t=[],n=[];let s=i;const r=i-mr+1+kh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mr?l=kh[a-i+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,L=R>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(S,v*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const A=new ei;A.setAttribute("position",new cn(y,v)),A.setAttribute("uv",new cn(b,m)),A.setAttribute("faceIndex",new cn(x,p)),e.push(A),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function b0(i,e,t){const n=new Float32Array(Ns),s=new N(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Gh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Wh(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function M0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bc||l===Mc,h=l===Ar||l===wr;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Jc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function S0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function E0(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let b=0,x=y.length;b<x;b+=3){const A=y[b+0],R=y[b+1],w=y[b+2];d.push(A,R,R,w,w,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const A=b+0,R=b+1,w=b+2;d.push(A,R,R,w,w,A)}}else return;const m=new(Xf(d)?Zf:Kf)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function T0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function A0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,e,t){const n=new WeakMap,s=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=o.attributes.position.count*b,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*A*4*u),w=new jf(R,x,A,u);w.type=Qn,w.needsUpdate=!0;const L=b*4;for(let M=0;M<u;M++){const T=m[M],I=p[M],F=y[M],k=x*A*4*M;for(let Z=0;Z<T.count;Z++){const j=Z*L;f===!0&&(s.fromBufferAttribute(T,Z),R[k+j+0]=s.x,R[k+j+1]=s.y,R[k+j+2]=s.z,R[k+j+3]=0),g===!0&&(s.fromBufferAttribute(I,Z),R[k+j+4]=s.x,R[k+j+5]=s.y,R[k+j+6]=s.z,R[k+j+7]=0),v===!0&&(s.fromBufferAttribute(F,Z),R[k+j+8]=s.x,R[k+j+9]=s.y,R[k+j+10]=s.z,R[k+j+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new rt(x,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function R0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class tp extends xn{constructor(e,t,n,s,r,a,o,l,c,h=yr){if(h!==yr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yr&&(n=gs),n===void 0&&h===Pr&&(n=Cr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const np=new xn,Xh=new tp(1,1),ip=new jf,sp=new pv,rp=new $f,qh=[],jh=[],Yh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tl(i,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),hn(t,n)}}function U0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),hn(t,n)}}function N0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),hn(t,n)}}function F0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function W0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=Wf,r=Xh):r=np,t.setTexture2D(e||r,s)}function X0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sp,s)}function q0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rp,s)}function j0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ip,s)}function Y0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return V0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return j0}}function K0(i,e){i.uniform1fv(this.addr,e)}function Z0(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function J0(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Q0(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function $0(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eb(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tb(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nb(i,e){i.uniform1iv(this.addr,e)}function ib(i,e){i.uniform2iv(this.addr,e)}function sb(i,e){i.uniform3iv(this.addr,e)}function rb(i,e){i.uniform4iv(this.addr,e)}function ab(i,e){i.uniform1uiv(this.addr,e)}function ob(i,e){i.uniform2uiv(this.addr,e)}function lb(i,e){i.uniform3uiv(this.addr,e)}function cb(i,e){i.uniform4uiv(this.addr,e)}function ub(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||np,r[a])}function hb(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sp,r[a])}function db(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rp,r[a])}function fb(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ip,r[a])}function pb(i){switch(i){case 5126:return K0;case 35664:return Z0;case 35665:return J0;case 35666:return Q0;case 35674:return $0;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ab;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}class mb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}}class _b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pb(t.type)}}class gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function vb(i,e,t){const n=i.name,s=n.length;for(Nl.lastIndex=0;;){const r=Nl.exec(n),a=Nl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jh(t,c===void 0?new mb(o,i,e):new _b(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gb(o),Jh(t,u)),t=u}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vb(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xb=37297;let yb=0;function bb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $h=new vt;function Mb(i){Et._getMatrix($h,Et.workingColorSpace,i);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Qo:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ed(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bb(i.getShaderSource(e),a)}else return s}function Sb(i,e){const t=Mb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Eb(i,e){let t;switch(e){case Tg:t="Linear";break;case Ag:t="Reinhard";break;case wg:t="Cineon";break;case Pf:t="ACESFilmic";break;case Cg:t="AgX";break;case Pg:t="Neutral";break;case Rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new N;function Tb(){Et.getLuminanceCoefficients(no);const i=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function wb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oa(i){return i!==""}function td(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Cb,Lb)}const Pb=new Map;function Lb(i,e){let t=xt[e];if(t===void 0){const n=Pb.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(Ib,Db)}function Db(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ub(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case wr:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ob(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cf:e="ENVMAP_BLENDING_MULTIPLY";break;case Sg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function Bb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ub(t),c=Nb(t),h=Fb(t),u=Ob(t),d=Bb(t),f=Ab(t),g=wb(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?xt.tonemapping_pars_fragment:"",t.toneMapping!==_s?Eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Sb("linearToOutputTexel",t.outputColorSpace),Tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),a=Qc(a),a=td(a,t),a=nd(a,t),o=Qc(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,x=y+p+o,A=Qh(s,s.VERTEX_SHADER,b),R=Qh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(T){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(A).trim(),k=s.getShaderInfoLog(R).trim();let Z=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,R);else{const ae=ed(s,A,"vertex"),Q=ed(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+ae+`
`+Q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||k==="")&&(j=!1);j&&(T.diagnostics={runnable:Z,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(A),s.deleteShader(R),L=new Oo(s,v),S=Rb(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,xb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let zb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hb(e),t.set(e,n)),n}}class Hb{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}}function Gb(i,e,t,n,s,r,a){const o=new Eu,l=new Vb,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,T,I,F){const k=I.fog,Z=F.geometry,j=S.isMeshStandardMaterial?I.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),Q=ae&&ae.mapping===Zo?ae.image.height:null,xe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,V=ie!==void 0?ie.length:0;let K=0;Z.morphAttributes.position!==void 0&&(K=1),Z.morphAttributes.normal!==void 0&&(K=2),Z.morphAttributes.color!==void 0&&(K=3);let oe,H,W,ee;if(xe){const at=Ai[xe];oe=at.vertexShader,H=at.fragmentShader}else oe=S.vertexShader,H=S.fragmentShader,l.update(S),W=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const se=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Pe=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,Be=!!S.map,De=!!S.matcap,He=!!ae,O=!!S.aoMap,Qe=!!S.lightMap,je=!!S.bumpMap,qe=!!S.normalMap,Oe=!!S.displacementMap,st=!!S.emissiveMap,we=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,D=S.clearcoat>0,X=S.dispersion>0,ce=S.iridescence>0,le=S.sheen>0,ze=S.transmission>0,me=E&&!!S.anisotropyMap,Se=D&&!!S.clearcoatMap,Ce=D&&!!S.clearcoatNormalMap,q=D&&!!S.clearcoatRoughnessMap,fe=ce&&!!S.iridescenceMap,ye=ce&&!!S.iridescenceThicknessMap,Ue=le&&!!S.sheenColorMap,ge=le&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,We=!!S.specularColorMap,$e=!!S.specularIntensityMap,B=ze&&!!S.transmissionMap,Ee=ze&&!!S.thicknessMap,re=!!S.gradientMap,te=!!S.alphaMap,ve=S.alphaTest>0,Te=!!S.alphaHash,Ze=!!S.extensions;let ht=_s;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=i.toneMapping);const ft={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:H,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,instancingMorph:Pe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:kn,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:De,envMap:He,envMapMode:He&&ae.mapping,envMapCubeUVHeight:Q,aoMap:O,lightMap:Qe,bumpMap:je,normalMap:qe,displacementMap:d&&Oe,emissiveMap:st,normalMapObjectSpace:qe&&S.normalMapType===Fg,normalMapTangentSpace:qe&&S.normalMapType===Gf,metalnessMap:we,roughnessMap:P,anisotropy:E,anisotropyMap:me,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:q,dispersion:X,iridescence:ce,iridescenceMap:fe,iridescenceThicknessMap:ye,sheen:le,sheenColorMap:Ue,sheenRoughnessMap:ge,specularMap:Fe,specularColorMap:We,specularIntensityMap:$e,transmission:ze,transmissionMap:B,thicknessMap:Ee,gradientMap:re,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:Te,combine:S.combine,mapUv:Be&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:Qe&&v(S.lightMap.channel),bumpMapUv:je&&v(S.bumpMap.channel),normalMapUv:qe&&v(S.normalMap.channel),displacementMapUv:Oe&&v(S.displacementMap.channel),emissiveMapUv:st&&v(S.emissiveMap.channel),metalnessMapUv:we&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:me&&v(S.anisotropyMap.channel),clearcoatMapUv:Se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(S.sheenRoughnessMap.channel),specularMapUv:Fe&&v(S.specularMap.channel),specularColorMapUv:We&&v(S.specularColorMap.channel),specularIntensityMapUv:$e&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:Ee&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(qe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Be||te),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Gt,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xn,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)M.push(T),M.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let T;if(M){const I=Ai[M];T=Av.clone(I.uniforms)}else T=S.uniforms;return T}function A(S,M){let T;for(let I=0,F=h.length;I<F;I++){const k=h[I];if(k.cacheKey===M){T=k,++T.usedTimes;break}}return T===void 0&&(T=new kb(i,M,S,r),h.push(T)),T}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:L}}function Wb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Xb),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function qb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function jb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new lt};break;case"SpotLight":t={position:new N,direction:new N,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Yb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kb=0;function Zb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jb(i){const e=new jb,t=Yb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ut,a=new ut;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,b=0,x=0,A=0,R=0,w=0;c.sort(Zb);for(let S=0,M=c.length;S<M;S++){const T=c[S],I=T.color,F=T.intensity,k=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(T.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(T.sh.coefficients[j],F);w++}else if(T.isDirectionalLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ae=T.shadow,Q=t.get(T);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=T.shadow.matrix,y++}n.directional[f]=j,f++}else if(T.isSpotLight){const j=e.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(I).multiplyScalar(F),j.distance=k,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,n.spot[v]=j;const ae=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,ae.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[v]=ae.matrix,T.castShadow){const Q=t.get(T);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=Z,x++}v++}else if(T.isRectAreaLight){const j=e.get(T);j.color.copy(I).multiplyScalar(F),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=j,m++}else if(T.isPointLight){const j=e.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity),j.distance=T.distance,j.decay=T.decay,T.castShadow){const ae=T.shadow,Q=t.get(T);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,Q.shadowCameraNear=ae.camera.near,Q.shadowCameraFar=ae.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=j,g++}else if(T.isHemisphereLight){const j=e.get(T);j.skyColor.copy(T.color).multiplyScalar(F),j.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==A||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=A,L.numLightProbes=w,n.version=Kb++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function od(i){const e=new Jb(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Qb(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new od(i),e.set(s,[o])):r>=a.length?(o=new od(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class $b extends wi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends wi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
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
}`;function iM(i,e,t){let n=new $o;const s=new rt,r=new rt,a=new Ut,o=new $b({depthPacking:Ng}),l=new eM,c={},h=t.maxTextureSize,u={[li]:Rn,[Rn]:li,[Xn]:Xn},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let p=this.type;this.render=function(R,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ms),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==zi&&this.type===zi,k=p===zi&&this.type!==zi;for(let Z=0,j=R.length;Z<j;Z++){const ae=R[Z],Q=ae.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const xe=Q.getFrameExtents();if(s.multiply(xe),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,Q.mapSize.y=r.y)),Q.map===null||F===!0||k===!0){const V=this.type!==zi?{minFilter:On,magFilter:On}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Os(s.x,s.y,V),Q.map.texture.name=ae.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const ie=Q.getViewportCount();for(let V=0;V<ie;V++){const K=Q.getViewport(V);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),I.viewport(a),Q.updateMatrices(ae,V),n=Q.getFrustum(),x(w,L,Q.camera,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===zi&&y(Q,L),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,T)};function y(R,w){const L=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Os(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,L,f,v,null)}function b(R,w,L,S){let M=null;const T=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=M.uuid,F=w.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let Z=k[F];Z===void 0&&(Z=M.clone(),k[F]=Z,w.addEventListener("dispose",A)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,S===zi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=L}return M}function x(R,w,L,S,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===zi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=e.update(R),k=R.material;if(Array.isArray(k)){const Z=F.groups;for(let j=0,ae=Z.length;j<ae;j++){const Q=Z[j],xe=k[Q.materialIndex];if(xe&&xe.visible){const ie=b(R,xe,S,M);R.onBeforeShadow(i,R,w,L,F,ie,Q),i.renderBufferDirect(L,null,F,ie,R,Q),R.onAfterShadow(i,R,w,L,F,ie,Q)}}}else if(k.visible){const Z=b(R,k,S,M);R.onBeforeShadow(i,R,w,L,F,Z,null),i.renderBufferDirect(L,null,F,Z,R,null),R.onAfterShadow(i,R,w,L,F,Z,null)}}const I=R.children;for(let F=0,k=I.length;F<k;F++)x(I[F],w,L,S,M)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const S=c[L],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const sM={[pc]:mc,[_c]:xc,[gc]:yc,[Tr]:vc,[mc]:pc,[xc]:_c,[yc]:gc,[vc]:Tr};function rM(i,e){function t(){let B=!1;const Ee=new Ut;let re=null;const te=new Ut(0,0,0,0);return{setMask:function(ve){re!==ve&&!B&&(i.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){B=ve},setClear:function(ve,Te,Ze,ht,ft){ft===!0&&(ve*=ht,Te*=ht,Ze*=ht),Ee.set(ve,Te,Ze,ht),te.equals(Ee)===!1&&(i.clearColor(ve,Te,Ze,ht),te.copy(Ee))},reset:function(){B=!1,re=null,te.set(-1,0,0,0)}}}function n(){let B=!1,Ee=!1,re=null,te=null,ve=null;return{setReversed:function(Te){if(Ee!==Te){const Ze=e.get("EXT_clip_control");Ee?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const ht=ve;ve=null,this.setClear(ht)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?se(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Te){re!==Te&&!B&&(i.depthMask(Te),re=Te)},setFunc:function(Te){if(Ee&&(Te=sM[Te]),te!==Te){switch(Te){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Te}},setLocked:function(Te){B=Te},setClear:function(Te){ve!==Te&&(Ee&&(Te=1-Te),i.clearDepth(Te),ve=Te)},reset:function(){B=!1,re=null,te=null,ve=null,Ee=!1}}}function s(){let B=!1,Ee=null,re=null,te=null,ve=null,Te=null,Ze=null,ht=null,ft=null;return{setTest:function(at){B||(at?se(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(at){Ee!==at&&!B&&(i.stencilMask(at),Ee=at)},setFunc:function(at,Ct,St){(re!==at||te!==Ct||ve!==St)&&(i.stencilFunc(at,Ct,St),re=at,te=Ct,ve=St)},setOp:function(at,Ct,St){(Te!==at||Ze!==Ct||ht!==St)&&(i.stencilOp(at,Ct,St),Te=at,Ze=Ct,ht=St)},setLocked:function(at){B=at},setClear:function(at){ft!==at&&(i.clearStencil(at),ft=at)},reset:function(){B=!1,Ee=null,re=null,te=null,ve=null,Te=null,Ze=null,ht=null,ft=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,A=null,R=null,w=new lt(0,0,0),L=0,S=!1,M=null,T=null,I=null,F=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ae=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=ae>=1):Q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=ae>=2);let xe=null,ie={};const V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),oe=new Ut().fromArray(V),H=new Ut().fromArray(K);function W(B,Ee,re,te){const ve=new Uint8Array(4),Te=i.createTexture();i.bindTexture(B,Te),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<re;Ze++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Ee+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Te}const ee={};ee[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Tr),je(!1),qe(lh),se(i.CULL_FACE),O(ms);function se(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Re(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Pe(B,Ee){return u[B]!==Ee?(i.bindFramebuffer(B,Ee),u[B]=Ee,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ee),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ne(B,Ee){let re=f,te=!1;if(B){re=d.get(Ee),re===void 0&&(re=[],d.set(Ee,re));const ve=B.textures;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ze=ve.length;Te<Ze;Te++)re[Te]=i.COLOR_ATTACHMENT0+Te;re.length=ve.length,te=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,te=!0);te&&i.drawBuffers(re)}function Be(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const De={[Us]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};De[lg]=i.MIN,De[cg]=i.MAX;const He={[ug]:i.ZERO,[hg]:i.ONE,[dg]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[vg]:i.SRC_ALPHA_SATURATE,[_g]:i.DST_COLOR,[pg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[yg]:i.ONE_MINUS_CONSTANT_COLOR,[bg]:i.CONSTANT_ALPHA,[Mg]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,Ee,re,te,ve,Te,Ze,ht,ft,at){if(B===ms){v===!0&&(Re(i.BLEND),v=!1);return}if(v===!1&&(se(i.BLEND),v=!0),B!==rg){if(B!==m||at!==S){if((p!==Us||x!==Us)&&(i.blendEquation(i.FUNC_ADD),p=Us,x=Us),at)switch(B){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,b=null,A=null,R=null,w.set(0,0,0),L=0,m=B,S=at}return}ve=ve||Ee,Te=Te||re,Ze=Ze||te,(Ee!==p||ve!==x)&&(i.blendEquationSeparate(De[Ee],De[ve]),p=Ee,x=ve),(re!==y||te!==b||Te!==A||Ze!==R)&&(i.blendFuncSeparate(He[re],He[te],He[Te],He[Ze]),y=re,b=te,A=Te,R=Ze),(ht.equals(w)===!1||ft!==L)&&(i.blendColor(ht.r,ht.g,ht.b,ft),w.copy(ht),L=ft),m=B,S=!1}function Qe(B,Ee){B.side===Xn?Re(i.CULL_FACE):se(i.CULL_FACE);let re=B.side===Rn;Ee&&(re=!re),je(re),B.blending===xr&&B.transparent===!1?O(ms):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const te=B.stencilWrite;o.setTest(te),te&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),st(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function qe(B){B!==ng?(se(i.CULL_FACE),B!==T&&(B===lh?i.cullFace(i.BACK):B===ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),T=B}function Oe(B){B!==I&&(j&&i.lineWidth(B),I=B)}function st(B,Ee,re){B?(se(i.POLYGON_OFFSET_FILL),(F!==Ee||k!==re)&&(i.polygonOffset(Ee,re),F=Ee,k=re)):Re(i.POLYGON_OFFSET_FILL)}function we(B){B?se(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+Z-1),xe!==B&&(i.activeTexture(B),xe=B)}function E(B,Ee,re){re===void 0&&(xe===null?re=i.TEXTURE0+Z-1:re=xe);let te=ie[re];te===void 0&&(te={type:void 0,texture:void 0},ie[re]=te),(te.type!==B||te.texture!==Ee)&&(xe!==re&&(i.activeTexture(re),xe=re),i.bindTexture(B,Ee||ee[B]),te.type=B,te.texture=Ee)}function D(){const B=ie[xe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){oe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function ge(B){H.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),H.copy(B))}function Fe(B,Ee){let re=c.get(Ee);re===void 0&&(re=new WeakMap,c.set(Ee,re));let te=re.get(B);te===void 0&&(te=i.getUniformBlockIndex(Ee,B.name),re.set(B,te))}function We(B,Ee){const te=c.get(Ee).get(B);l.get(Ee)!==te&&(i.uniformBlockBinding(Ee,te,B.__bindingPointIndex),l.set(Ee,te))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},xe=null,ie={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,A=null,R=null,w=new lt(0,0,0),L=0,S=!1,M=null,T=null,I=null,F=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Re,bindFramebuffer:Pe,drawBuffers:Ne,useProgram:Be,setBlending:O,setMaterial:Qe,setFlipSided:je,setCullFace:qe,setLineWidth:Oe,setPolygonOffset:st,setScissorTest:we,activeTexture:P,bindTexture:E,unbindTexture:D,compressedTexImage2D:X,compressedTexImage3D:ce,texImage2D:fe,texImage3D:ye,updateUBOMapping:Fe,uniformBlockBinding:We,texStorage2D:Ce,texStorage3D:q,texSubImage2D:le,texSubImage3D:ze,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Ue,viewport:ge,reset:$e}}function ld(i,e,t,n){const s=aM(n);switch(t){case Ff:return i*e;case Bf:return i*e;case kf:return i*e*2;case xu:return i*e/s.components*s.byteLength;case Jo:return i*e/s.components*s.byteLength;case zf:return i*e*2/s.components*s.byteLength;case yu:return i*e*2/s.components*s.byteLength;case Of:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case bu:return i*e*4/s.components*s.byteLength;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Ac:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case wc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vf:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aM(i){switch(i){case ji:case Df:return{byteLength:1,components:1};case _a:case Uf:case Pa:return{byteLength:2,components:1};case gu:case vu:return{byteLength:2,components:4};case gs:case _u:case Qn:return{byteLength:4,components:1};case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function oM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):xa("canvas")}function v(P,E,D){let X=1;const ce=we(P);if((ce.width>D||ce.height>D)&&(X=D/Math.max(ce.width,ce.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(X*ce.width),ze=Math.floor(X*ce.height);u===void 0&&(u=g(le,ze));const me=E?g(le,ze):u;return me.width=le,me.height=ze,me.getContext("2d").drawImage(P,0,0,le,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+le+"x"+ze+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,E,D,X,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let le=E;if(E===i.RED&&(D===i.FLOAT&&(le=i.R32F),D===i.HALF_FLOAT&&(le=i.R16F),D===i.UNSIGNED_BYTE&&(le=i.R8)),E===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(le=i.R8UI),D===i.UNSIGNED_SHORT&&(le=i.R16UI),D===i.UNSIGNED_INT&&(le=i.R32UI),D===i.BYTE&&(le=i.R8I),D===i.SHORT&&(le=i.R16I),D===i.INT&&(le=i.R32I)),E===i.RG&&(D===i.FLOAT&&(le=i.RG32F),D===i.HALF_FLOAT&&(le=i.RG16F),D===i.UNSIGNED_BYTE&&(le=i.RG8)),E===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(le=i.RG8UI),D===i.UNSIGNED_SHORT&&(le=i.RG16UI),D===i.UNSIGNED_INT&&(le=i.RG32UI),D===i.BYTE&&(le=i.RG8I),D===i.SHORT&&(le=i.RG16I),D===i.INT&&(le=i.RG32I)),E===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(le=i.RGB8UI),D===i.UNSIGNED_SHORT&&(le=i.RGB16UI),D===i.UNSIGNED_INT&&(le=i.RGB32UI),D===i.BYTE&&(le=i.RGB8I),D===i.SHORT&&(le=i.RGB16I),D===i.INT&&(le=i.RGB32I)),E===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),D===i.UNSIGNED_INT&&(le=i.RGBA32UI),D===i.BYTE&&(le=i.RGBA8I),D===i.SHORT&&(le=i.RGBA16I),D===i.INT&&(le=i.RGBA32I)),E===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),E===i.RGBA){const ze=ce?Qo:Et.getTransfer(X);D===i.FLOAT&&(le=i.RGBA32F),D===i.HALF_FLOAT&&(le=i.RGBA16F),D===i.UNSIGNED_BYTE&&(le=ze===Gt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(P,E){let D;return P?E===null||E===gs||E===Cr?D=i.DEPTH24_STENCIL8:E===Qn?D=i.DEPTH32F_STENCIL8:E===_a&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gs||E===Cr?D=i.DEPTH_COMPONENT24:E===Qn?D=i.DEPTH_COMPONENT32F:E===_a&&(D=i.DEPTH_COMPONENT16),D}function A(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==On&&P.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),L(E),E.isVideoTexture&&h.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),M(E)}function L(P){const E=n.get(P);if(E.__webglInit===void 0)return;const D=P.source,X=d.get(D);if(X){const ce=X[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&S(P),Object.keys(X).length===0&&d.delete(D)}n.remove(P)}function S(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const D=P.source,X=d.get(D);delete X[E.__cacheKey],a.memory.textures--}function M(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let ce=0;ce<E.__webglFramebuffer[X].length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[X][ce]);else i.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)i.deleteFramebuffer(E.__webglFramebuffer[X]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const D=P.textures;for(let X=0,ce=D.length;X<ce;X++){const le=n.get(D[X]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(P)}let T=0;function I(){T=0}function F(){const P=T;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),T+=1,P}function k(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Z(P,E){const D=n.get(P);if(P.isVideoTexture&&Oe(P),P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){const X=P.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(D,P,E);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+E)}function j(P,E){const D=n.get(P);if(P.version>0&&D.__version!==P.version){H(D,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+E)}function ae(P,E){const D=n.get(P);if(P.version>0&&D.__version!==P.version){H(D,P,E);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+E)}function Q(P,E){const D=n.get(P);if(P.version>0&&D.__version!==P.version){W(D,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+E)}const xe={[Rr]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},ie={[On]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},V={[Og]:i.NEVER,[Gg]:i.ALWAYS,[Bg]:i.LESS,[Wf]:i.LEQUAL,[kg]:i.EQUAL,[Hg]:i.GEQUAL,[zg]:i.GREATER,[Vg]:i.NOTEQUAL};function K(P,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Lo||E.magFilter===ra||E.magFilter===Wi||E.minFilter===Jn||E.minFilter===Lo||E.minFilter===ra||E.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,xe[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,xe[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,xe[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,V[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==ra&&E.minFilter!==Wi||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function oe(P,E){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const X=E.source;let ce=d.get(X);ce===void 0&&(ce={},d.set(X,ce));const le=k(E);if(le!==P.__cacheKey){ce[le]===void 0&&(ce[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ce[le].usedTimes++;const ze=ce[P.__cacheKey];ze!==void 0&&(ce[P.__cacheKey].usedTimes--,ze.usedTimes===0&&S(E)),P.__cacheKey=le,P.__webglTexture=ce[le].texture}return D}function H(P,E,D){let X=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=i.TEXTURE_3D);const ce=oe(P,E),le=E.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+D);const ze=n.get(le);if(le.version!==ze.__version||ce===!0){t.activeTexture(i.TEXTURE0+D);const me=Et.getPrimaries(Et.workingColorSpace),Se=E.colorSpace===cs?null:Et.getPrimaries(E.colorSpace),Ce=E.colorSpace===cs||me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let q=v(E.image,!1,s.maxTextureSize);q=st(E,q);const fe=r.convert(E.format,E.colorSpace),ye=r.convert(E.type);let Ue=b(E.internalFormat,fe,ye,E.colorSpace,E.isVideoTexture);K(X,E);let ge;const Fe=E.mipmaps,We=E.isVideoTexture!==!0,$e=ze.__version===void 0||ce===!0,B=le.dataReady,Ee=A(E,q);if(E.isDepthTexture)Ue=x(E.format===Pr,E.type),$e&&(We?t.texStorage2D(i.TEXTURE_2D,1,Ue,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Ue,q.width,q.height,0,fe,ye,null));else if(E.isDataTexture)if(Fe.length>0){We&&$e&&t.texStorage2D(i.TEXTURE_2D,Ee,Ue,Fe[0].width,Fe[0].height);for(let re=0,te=Fe.length;re<te;re++)ge=Fe[re],We?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,fe,ye,ge.data):t.texImage2D(i.TEXTURE_2D,re,Ue,ge.width,ge.height,0,fe,ye,ge.data);E.generateMipmaps=!1}else We?($e&&t.texStorage2D(i.TEXTURE_2D,Ee,Ue,q.width,q.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,fe,ye,q.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,q.width,q.height,0,fe,ye,q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ue,Fe[0].width,Fe[0].height,q.depth);for(let re=0,te=Fe.length;re<te;re++)if(ge=Fe[re],E.format!==qn)if(fe!==null)if(We){if(B)if(E.layerUpdates.size>0){const ve=ld(ge.width,ge.height,E.format,E.type);for(const Te of E.layerUpdates){const Ze=ge.data.subarray(Te*ve/ge.data.BYTES_PER_ELEMENT,(Te+1)*ve/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Te,ge.width,ge.height,1,fe,Ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,q.depth,fe,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ue,ge.width,ge.height,q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,q.depth,fe,ye,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ue,ge.width,ge.height,q.depth,0,fe,ye,ge.data)}else{We&&$e&&t.texStorage2D(i.TEXTURE_2D,Ee,Ue,Fe[0].width,Fe[0].height);for(let re=0,te=Fe.length;re<te;re++)ge=Fe[re],E.format!==qn?fe!==null?We?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,fe,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,fe,ye,ge.data):t.texImage2D(i.TEXTURE_2D,re,Ue,ge.width,ge.height,0,fe,ye,ge.data)}else if(E.isDataArrayTexture)if(We){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ue,q.width,q.height,q.depth),B)if(E.layerUpdates.size>0){const re=ld(q.width,q.height,E.format,E.type);for(const te of E.layerUpdates){const ve=q.data.subarray(te*re/q.data.BYTES_PER_ELEMENT,(te+1)*re/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,q.width,q.height,1,fe,ye,ve)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,fe,ye,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,q.width,q.height,q.depth,0,fe,ye,q.data);else if(E.isData3DTexture)We?($e&&t.texStorage3D(i.TEXTURE_3D,Ee,Ue,q.width,q.height,q.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,fe,ye,q.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,q.width,q.height,q.depth,0,fe,ye,q.data);else if(E.isFramebufferTexture){if($e)if(We)t.texStorage2D(i.TEXTURE_2D,Ee,Ue,q.width,q.height);else{let re=q.width,te=q.height;for(let ve=0;ve<Ee;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ue,re,te,0,fe,ye,null),re>>=1,te>>=1}}else if(Fe.length>0){if(We&&$e){const re=we(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ue,re.width,re.height)}for(let re=0,te=Fe.length;re<te;re++)ge=Fe[re],We?B&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe,ye,ge):t.texImage2D(i.TEXTURE_2D,re,Ue,fe,ye,ge);E.generateMipmaps=!1}else if(We){if($e){const re=we(q);t.texStorage2D(i.TEXTURE_2D,Ee,Ue,re.width,re.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ye,q)}else t.texImage2D(i.TEXTURE_2D,0,Ue,fe,ye,q);m(E)&&p(X),ze.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function W(P,E,D){if(E.image.length!==6)return;const X=oe(P,E),ce=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+D);const le=n.get(ce);if(ce.version!==le.__version||X===!0){t.activeTexture(i.TEXTURE0+D);const ze=Et.getPrimaries(Et.workingColorSpace),me=E.colorSpace===cs?null:Et.getPrimaries(E.colorSpace),Se=E.colorSpace===cs||ze===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,q=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!Ce&&!q?fe[te]=v(E.image[te],!0,s.maxCubemapSize):fe[te]=q?E.image[te].image:E.image[te],fe[te]=st(E,fe[te]);const ye=fe[0],Ue=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),Fe=b(E.internalFormat,Ue,ge,E.colorSpace),We=E.isVideoTexture!==!0,$e=le.__version===void 0||X===!0,B=ce.dataReady;let Ee=A(E,ye);K(i.TEXTURE_CUBE_MAP,E);let re;if(Ce){We&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Fe,ye.width,ye.height);for(let te=0;te<6;te++){re=fe[te].mipmaps;for(let ve=0;ve<re.length;ve++){const Te=re[ve];E.format!==qn?Ue!==null?We?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,Te.width,Te.height,Ue,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,Te.width,Te.height,Ue,ge,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Fe,Te.width,Te.height,0,Ue,ge,Te.data)}}}else{if(re=E.mipmaps,We&&$e){re.length>0&&Ee++;const te=we(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Fe,te.width,te.height)}for(let te=0;te<6;te++)if(q){We?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,Ue,ge,fe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,fe[te].width,fe[te].height,0,Ue,ge,fe[te].data);for(let ve=0;ve<re.length;ve++){const Ze=re[ve].image[te].image;We?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Ze.width,Ze.height,Ue,ge,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Fe,Ze.width,Ze.height,0,Ue,ge,Ze.data)}}else{We?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,ge,fe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,Ue,ge,fe[te]);for(let ve=0;ve<re.length;ve++){const Te=re[ve];We?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Ue,ge,Te.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Fe,Ue,ge,Te.image[te])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),le.__version=ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,D,X,ce,le){const ze=r.convert(D.format,D.colorSpace),me=r.convert(D.type),Se=b(D.internalFormat,ze,me,D.colorSpace),Ce=n.get(E),q=n.get(D);if(q.__renderTarget=E,!Ce.__hasExternalTextures){const fe=Math.max(1,E.width>>le),ye=Math.max(1,E.height>>le);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,le,Se,fe,ye,E.depth,0,ze,me,null):t.texImage2D(ce,le,Se,fe,ye,0,ze,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ce,q.__webglTexture,0,je(E)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ce,q.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,E,D){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const X=E.depthTexture,ce=X&&X.isDepthTexture?X.type:null,le=x(E.stencilBuffer,ce),ze=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=je(E);qe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,le,E.width,E.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,P)}else{const X=E.textures;for(let ce=0;ce<X.length;ce++){const le=X[ce],ze=r.convert(le.format,le.colorSpace),me=r.convert(le.type),Se=b(le.internalFormat,ze,me,le.colorSpace),Ce=je(E);D&&qe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Se,E.width,E.height):qe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(E.depthTexture);X.__renderTarget=E,(!X.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ce=X.__webglTexture,le=je(E);if(E.depthTexture.format===yr)qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Pr)qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const E=n.get(P),D=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",ce)};X.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=X}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Re(E.__webglFramebuffer,P)}else if(D){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=i.createRenderbuffer(),se(E.__webglDepthbuffer[X],P,!1);else{const ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),se(E.__webglDepthbuffer,P,!1);else{const X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(P,E,D){const X=n.get(P);E!==void 0&&ee(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Pe(P)}function Be(P){const E=P.texture,D=n.get(P),X=n.get(E);P.addEventListener("dispose",w);const ce=P.textures,le=P.isWebGLCubeRenderTarget===!0,ze=ce.length>1;if(ze||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=E.version,a.memory.textures++),le){D.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[me]=[];for(let Se=0;Se<E.mipmaps.length;Se++)D.__webglFramebuffer[me][Se]=i.createFramebuffer()}else D.__webglFramebuffer[me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)D.__webglFramebuffer[me]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ze)for(let me=0,Se=ce.length;me<Se;me++){const Ce=n.get(ce[me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&qe(P)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Se=ce[me];D.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[me]);const Ce=r.convert(Se.format,Se.colorSpace),q=r.convert(Se.type),fe=b(Se.internalFormat,Ce,q,Se.colorSpace,P.isXRRenderTarget===!0),ye=je(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,fe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,D.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),se(D.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),K(i.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(D.__webglFramebuffer[me][Se],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else ee(D.__webglFramebuffer[me],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let me=0,Se=ce.length;me<Se;me++){const Ce=ce[me],q=n.get(Ce);t.bindTexture(i.TEXTURE_2D,q.__webglTexture),K(i.TEXTURE_2D,Ce),ee(D.__webglFramebuffer,P,Ce,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(Ce)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,X.__webglTexture),K(me,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(D.__webglFramebuffer[Se],P,E,i.COLOR_ATTACHMENT0,me,Se);else ee(D.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,me,0);m(E)&&p(me),t.unbindTexture()}P.depthBuffer&&Pe(P)}function De(P){const E=P.textures;for(let D=0,X=E.length;D<X;D++){const ce=E[D];if(m(ce)){const le=y(P),ze=n.get(ce).__webglTexture;t.bindTexture(le,ze),p(le),t.unbindTexture()}}}const He=[],O=[];function Qe(P){if(P.samples>0){if(qe(P)===!1){const E=P.textures,D=P.width,X=P.height;let ce=i.COLOR_BUFFER_BIT;const le=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(P),me=E.length>1;if(me)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Se]);const Ce=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,ce,i.NEAREST),l===!0&&(He.length=0,O.length=0,He.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(le),O.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Se]);const Ce=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function je(P){return Math.min(s.maxSamples,P.samples)}function qe(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(P){const E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function st(P,E){const D=P.colorSpace,X=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==kn&&D!==cs&&(Et.getTransfer(D)===Gt?(X!==qn||ce!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),E}function we(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=ae,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=qe}function lM(i,e){function t(n,s=cs){let r;const a=Et.getTransfer(s);if(n===ji)return i.UNSIGNED_BYTE;if(n===gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===Uf)return i.SHORT;if(n===_a)return i.UNSIGNED_SHORT;if(n===_u)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Pa)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Of)return i.RGB;if(n===qn)return i.RGBA;if(n===Bf)return i.LUMINANCE;if(n===kf)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===zf)return i.RG;if(n===yu)return i.RG_INTEGER;if(n===bu)return i.RGBA_INTEGER;if(n===Io||n===Do||n===Uo||n===No)if(a===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===Tc||n===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Rc)return a===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===qc||n===jc||n===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cM extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
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

}`;class fM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yi({vertexShader:hM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new el(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pM extends Bs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new fM,m=t.getContextAttributes();let p=null,y=null;const b=[],x=[],A=new rt;let R=null;const w=new Nn;w.viewport=new Ut;const L=new Nn;L.viewport=new Ut;const S=[w,L],M=new cM;let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=b[H];return W===void 0&&(W=new Fl,b[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=b[H];return W===void 0&&(W=new Fl,b[H]=W),W.getGripSpace()},this.getHand=function(H){let W=b[H];return W===void 0&&(W=new Fl,b[H]=W),W.getHandSpace()};function F(H){const W=x.indexOf(H.inputSource);if(W===-1)return;const ee=b[W];ee!==void 0&&(ee.update(H.inputSource,H.frame,c||a),ee.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let H=0;H<b.length;H++){const W=x[H];W!==null&&(x[H]=null,b[H].disconnect(W))}T=null,I=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Os(f.framebufferWidth,f.framebufferHeight,{format:qn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,ee=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=m.stencil?Pr:yr,ee=m.stencil?Cr:gs);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Os(d.textureWidth,d.textureHeight,{format:qn,type:ji,depthTexture:new tp(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(H){for(let W=0;W<H.removed.length;W++){const ee=H.removed[W],se=x.indexOf(ee);se>=0&&(x[se]=null,b[se].disconnect(ee))}for(let W=0;W<H.added.length;W++){const ee=H.added[W];let se=x.indexOf(ee);if(se===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=x.length){x.push(ee),se=Pe;break}else if(x[Pe]===null){x[Pe]=ee,se=Pe;break}if(se===-1)break}const Re=b[se];Re&&Re.connect(ee)}}const j=new N,ae=new N;function Q(H,W,ee){j.setFromMatrixPosition(W.matrixWorld),ae.setFromMatrixPosition(ee.matrixWorld);const se=j.distanceTo(ae),Re=W.projectionMatrix.elements,Pe=ee.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),Be=Re[14]/(Re[10]+1),De=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],O=(Re[8]-1)/Re[0],Qe=(Pe[8]+1)/Pe[0],je=Ne*O,qe=Ne*Qe,Oe=se/(-O+Qe),st=Oe*-O;if(W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(st),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Re[10]===-1)H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const we=Ne+Oe,P=Be+Oe,E=je-st,D=qe+(se-st),X=De*Be/P*we,ce=He*Be/P*we;H.projectionMatrix.makePerspective(E,D,X,ce,we,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function xe(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let W=H.near,ee=H.far;v.texture!==null&&(v.depthNear>0&&(W=v.depthNear),v.depthFar>0&&(ee=v.depthFar)),M.near=L.near=w.near=W,M.far=L.far=w.far=ee,(T!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,I=M.far),w.layers.mask=H.layers.mask|2,L.layers.mask=H.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const se=H.parent,Re=M.cameras;xe(M,se);for(let Pe=0;Pe<Re.length;Pe++)xe(Re[Pe],se);Re.length===2?Q(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),ie(H,M,se)};function ie(H,W,ee){ee===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(ee.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Lr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let V=null;function K(H,W){if(h=W.getViewerPose(c||a),g=W,h!==null){const ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let se=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Pe=0;Pe<ee.length;Pe++){const Ne=ee[Pe];let Be=null;if(f!==null)Be=f.getViewport(Ne);else{const He=u.getViewSubImage(d,Ne);Be=He.viewport,Pe===0&&(e.setRenderTargetTextures(y,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(y))}let De=S[Pe];De===void 0&&(De=new Nn,De.layers.enable(Pe),De.viewport=new Ut,S[Pe]=De),De.matrix.fromArray(Ne.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ne.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Be.x,Be.y,Be.width,Be.height),Pe===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(De)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=u.getDepthInformation(ee[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let ee=0;ee<b.length;ee++){const se=x[ee],Re=b[ee];se!==null&&Re!==void 0&&Re.update(se,W,c||a)}V&&V(H,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const oe=new ep;oe.setAnimationLoop(K),this.setAnimationLoop=function(H){V=H},this.dispose=function(){}}}const Ts=new Ci,mM=new ut;function _M(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(y,A);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const b=u();y.__bindingPointIndex=b;const x=i.createBuffer(),A=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],x=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,w=x.length;R<w;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,M=L.length;S<M;S++){const T=L[S];if(f(T,R,S,A)===!0){const I=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let Z=0;Z<F.length;Z++){const j=F[Z],ae=v(j);typeof j=="number"||typeof j=="boolean"?(T.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,I+k,T.__data)):j.isMatrix3?(T.__data[0]=j.elements[0],T.__data[1]=j.elements[1],T.__data[2]=j.elements[2],T.__data[3]=0,T.__data[4]=j.elements[3],T.__data[5]=j.elements[4],T.__data[6]=j.elements[5],T.__data[7]=0,T.__data[8]=j.elements[6],T.__data[9]=j.elements[7],T.__data[10]=j.elements[8],T.__data[11]=0):(j.toArray(T.__data,k),k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,x,A){const R=y.value,w=b+"_"+x;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{const L=A[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(y){const b=y.uniforms;let x=0;const A=16;for(let w=0,L=b.length;w<L;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,T=S.length;M<T;M++){const I=S[M],F=Array.isArray(I.value)?I.value:[I.value];for(let k=0,Z=F.length;k<Z;k++){const j=F[k],ae=v(j),Q=x%A,xe=Q%ae.boundary,ie=Q+xe;x+=xe,ie!==0&&A-ie<ae.storage&&(x+=A-ie),I.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=ae.storage}}}const R=x%A;return R>0&&(x+=A-R),y.__size=x,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class vM{constructor(e={}){const{canvas:t=av(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=_s,this.toneMappingExposure=1;const x=this;let A=!1,R=0,w=0,L=null,S=-1,M=null;const T=new Ut,I=new Ut;let F=null;const k=new lt(0);let Z=0,j=t.width,ae=t.height,Q=1,xe=null,ie=null;const V=new Ut(0,0,j,ae),K=new Ut(0,0,j,ae);let oe=!1;const H=new $o;let W=!1,ee=!1;const se=new ut,Re=new ut,Pe=new N,Ne=new Ut,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function He(){return L===null?Q:1}let O=n;function Qe(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const Y="webgl2";if(O=Qe(Y,C),O===null)throw Qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let je,qe,Oe,st,we,P,E,D,X,ce,le,ze,me,Se,Ce,q,fe,ye,Ue,ge,Fe,We,$e,B;function Ee(){je=new S0(O),je.init(),We=new lM(O,je),qe=new g0(O,je,e,We),Oe=new rM(O,je),qe.reverseDepthBuffer&&d&&Oe.buffers.depth.setReversed(!0),st=new A0(O),we=new Wb,P=new oM(O,je,Oe,we,qe,We,st),E=new x0(x),D=new M0(x),X=new Dv(O),$e=new m0(O,X),ce=new E0(O,X,st,$e),le=new R0(O,ce,X,st),Ue=new w0(O,qe,P),q=new v0(we),ze=new Gb(x,E,D,je,qe,$e,q),me=new _M(x,we),Se=new qb,Ce=new Qb(je),ye=new p0(x,E,D,Oe,le,f,l),fe=new iM(x,le,qe),B=new gM(O,st,qe,Oe),ge=new _0(O,je,st),Fe=new T0(O,je,st),st.programs=ze.programs,x.capabilities=qe,x.extensions=je,x.properties=we,x.renderLists=Se,x.shadowMap=fe,x.state=Oe,x.info=st}Ee();const re=new pM(x,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(j,ae,!1))},this.getSize=function(C){return C.set(j,ae)},this.setSize=function(C,Y,ue=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,ae=Y,t.width=Math.floor(C*Q),t.height=Math.floor(Y*Q),ue===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(j*Q,ae*Q).floor()},this.setDrawingBufferSize=function(C,Y,ue){j=C,ae=Y,Q=ue,t.width=Math.floor(C*ue),t.height=Math.floor(Y*ue),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,Y,ue,de){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,Y,ue,de),Oe.viewport(T.copy(V).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,Y,ue,de){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,Y,ue,de),Oe.scissor(I.copy(K).multiplyScalar(Q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Oe.setScissorTest(oe=C)},this.setOpaqueSort=function(C){xe=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(C=!0,Y=!0,ue=!0){let de=0;if(C){let J=!1;if(L!==null){const Ve=L.texture.format;J=Ve===bu||Ve===yu||Ve===Jo}if(J){const Ve=L.texture.type,Ke=Ve===ji||Ve===gs||Ve===_a||Ve===Cr||Ve===gu||Ve===vu,tt=ye.getClearColor(),nt=ye.getClearAlpha(),pt=tt.r,mt=tt.g,it=tt.b;Ke?(g[0]=pt,g[1]=mt,g[2]=it,g[3]=nt,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=pt,v[1]=mt,v[2]=it,v[3]=nt,O.clearBufferiv(O.COLOR,0,v))}else de|=O.COLOR_BUFFER_BIT}Y&&(de|=O.DEPTH_BUFFER_BIT),ue&&(de|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Se.dispose(),Ce.dispose(),we.dispose(),E.dispose(),D.dispose(),le.dispose(),$e.dispose(),B.dispose(),ze.dispose(),re.dispose(),re.removeEventListener("sessionstart",yn),re.removeEventListener("sessionend",dn),Pt.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=st.autoReset,Y=fe.enabled,ue=fe.autoUpdate,de=fe.needsUpdate,J=fe.type;Ee(),st.autoReset=C,fe.enabled=Y,fe.autoUpdate=ue,fe.needsUpdate=de,fe.type=J}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const Y=C.target;Y.removeEventListener("dispose",Ze),ht(Y)}function ht(C){ft(C),we.remove(C)}function ft(C){const Y=we.get(C).programs;Y!==void 0&&(Y.forEach(function(ue){ze.releaseProgram(ue)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ue,de,J,Ve){Y===null&&(Y=Be);const Ke=J.isMesh&&J.matrixWorld.determinant()<0,tt=It(C,Y,ue,de,J);Oe.setMaterial(de,Ke);let nt=ue.index,pt=1;if(de.wireframe===!0){if(nt=ce.getWireframeAttribute(ue),nt===void 0)return;pt=2}const mt=ue.drawRange,it=ue.attributes.position;let wt=mt.start*pt,he=(mt.start+mt.count)*pt;Ve!==null&&(wt=Math.max(wt,Ve.start*pt),he=Math.min(he,(Ve.start+Ve.count)*pt)),nt!==null?(wt=Math.max(wt,0),he=Math.min(he,nt.count)):it!=null&&(wt=Math.max(wt,0),he=Math.min(he,it.count));const pe=he-wt;if(pe<0||pe===1/0)return;$e.setup(J,de,tt,ue,nt);let Ie,ke=ge;if(nt!==null&&(Ie=X.get(nt),ke=Fe,ke.setIndex(Ie)),J.isMesh)de.wireframe===!0?(Oe.setLineWidth(de.wireframeLinewidth*He()),ke.setMode(O.LINES)):ke.setMode(O.TRIANGLES);else if(J.isLine){let be=de.linewidth;be===void 0&&(be=1),Oe.setLineWidth(be*He()),J.isLineSegments?ke.setMode(O.LINES):J.isLineLoop?ke.setMode(O.LINE_LOOP):ke.setMode(O.LINE_STRIP)}else J.isPoints?ke.setMode(O.POINTS):J.isSprite&&ke.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ke.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ke.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const be=J._multiDrawStarts,ot=J._multiDrawCounts,et=J._multiDrawCount,Dt=nt?X.get(nt).bytesPerElement:1,Rt=we.get(de).currentProgram.getUniforms();for(let Ht=0;Ht<et;Ht++)Rt.setValue(O,"_gl_DrawID",Ht),ke.render(be[Ht]/Dt,ot[Ht])}else if(J.isInstancedMesh)ke.renderInstances(wt,pe,J.count);else if(ue.isInstancedBufferGeometry){const be=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ot=Math.min(ue.instanceCount,be);ke.renderInstances(wt,pe,ot)}else ke.render(wt,pe)};function at(C,Y,ue){C.transparent===!0&&C.side===Xn&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,gt(C,Y,ue),C.side=li,C.needsUpdate=!0,gt(C,Y,ue),C.side=Xn):gt(C,Y,ue)}this.compile=function(C,Y,ue=null){ue===null&&(ue=C),p=Ce.get(ue),p.init(Y),b.push(p),ue.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),C!==ue&&C.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();const de=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ve=J.material;if(Ve)if(Array.isArray(Ve))for(let Ke=0;Ke<Ve.length;Ke++){const tt=Ve[Ke];at(tt,ue,J),de.add(tt)}else at(Ve,ue,J),de.add(Ve)}),b.pop(),p=null,de},this.compileAsync=function(C,Y,ue=null){const de=this.compile(C,Y,ue);return new Promise(J=>{function Ve(){if(de.forEach(function(Ke){we.get(Ke).currentProgram.isReady()&&de.delete(Ke)}),de.size===0){J(C);return}setTimeout(Ve,10)}je.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ct=null;function St(C){Ct&&Ct(C)}function yn(){Pt.stop()}function dn(){Pt.start()}const Pt=new ep;Pt.setAnimationLoop(St),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(C){Ct=C,re.setAnimationLoop(C),C===null?Pt.stop():Pt.start()},re.addEventListener("sessionstart",yn),re.addEventListener("sessionend",dn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Y),Y=re.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,Y,L),p=Ce.get(C,b.length),p.init(Y),b.push(p),Re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H.setFromProjectionMatrix(Re),ee=this.localClippingEnabled,W=q.init(this.clippingPlanes,ee),m=Se.get(C,y.length),m.init(),y.push(m),re.enabled===!0&&re.isPresenting===!0){const Ve=x.xr.getDepthSensingMesh();Ve!==null&&fn(Ve,Y,-1/0,x.sortObjects)}fn(C,Y,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(xe,ie),De=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,De&&ye.addToRenderList(m,C),this.info.render.frame++,W===!0&&q.beginShadows();const ue=p.state.shadowsArray;fe.render(ue,C,Y),W===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=m.opaque,J=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(J.length>0)for(let Ke=0,tt=Ve.length;Ke<tt;Ke++){const nt=Ve[Ke];ui(de,J,C,nt)}De&&ye.render(C);for(let Ke=0,tt=Ve.length;Ke<tt;Ke++){const nt=Ve[Ke];ti(m,C,nt,nt.viewport)}}else J.length>0&&ui(de,J,C,Y),De&&ye.render(C),ti(m,C,Y);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(x,C,Y),$e.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],W===!0&&q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function fn(C,Y,ue,de){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){de&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Ke=le.update(C),tt=C.material;tt.visible&&m.push(C,Ke,tt,ue,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){const Ke=le.update(C),tt=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Ne.copy(Ke.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(tt)){const nt=Ke.groups;for(let pt=0,mt=nt.length;pt<mt;pt++){const it=nt[pt],wt=tt[it.materialIndex];wt&&wt.visible&&m.push(C,Ke,wt,ue,Ne.z,it)}}else tt.visible&&m.push(C,Ke,tt,ue,Ne.z,null)}}const Ve=C.children;for(let Ke=0,tt=Ve.length;Ke<tt;Ke++)fn(Ve[Ke],Y,ue,de)}function ti(C,Y,ue,de){const J=C.opaque,Ve=C.transmissive,Ke=C.transparent;p.setupLightsView(ue),W===!0&&q.setGlobalState(x.clippingPlanes,ue),de&&Oe.viewport(T.copy(de)),J.length>0&&Li(J,Y,ue),Ve.length>0&&Li(Ve,Y,ue),Ke.length>0&&Li(Ke,Y,ue),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ui(C,Y,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[de.id]===void 0&&(p.state.transmissionRenderTarget[de.id]=new Os(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Pa:ji,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ve=p.state.transmissionRenderTarget[de.id],Ke=de.viewport||T;Ve.setSize(Ke.z,Ke.w);const tt=x.getRenderTarget();x.setRenderTarget(Ve),x.getClearColor(k),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),De&&ye.render(ue);const nt=x.toneMapping;x.toneMapping=_s;const pt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),p.setupLightsView(de),W===!0&&q.setGlobalState(x.clippingPlanes,de),Li(C,ue,de),P.updateMultisampleRenderTarget(Ve),P.updateRenderTargetMipmap(Ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let it=0,wt=Y.length;it<wt;it++){const he=Y[it],pe=he.object,Ie=he.geometry,ke=he.material,be=he.group;if(ke.side===Xn&&pe.layers.test(de.layers)){const ot=ke.side;ke.side=Rn,ke.needsUpdate=!0,vs(pe,ue,de,Ie,ke,be),ke.side=ot,ke.needsUpdate=!0,mt=!0}}mt===!0&&(P.updateMultisampleRenderTarget(Ve),P.updateRenderTargetMipmap(Ve))}x.setRenderTarget(tt),x.setClearColor(k,Z),pt!==void 0&&(de.viewport=pt),x.toneMapping=nt}function Li(C,Y,ue){const de=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ve=C.length;J<Ve;J++){const Ke=C[J],tt=Ke.object,nt=Ke.geometry,pt=de===null?Ke.material:de,mt=Ke.group;tt.layers.test(ue.layers)&&vs(tt,Y,ue,nt,pt,mt)}}function vs(C,Y,ue,de,J,Ve){C.onBeforeRender(x,Y,ue,de,J,Ve),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(x,Y,ue,de,C,Ve),J.transparent===!0&&J.side===Xn&&J.forceSinglePass===!1?(J.side=Rn,J.needsUpdate=!0,x.renderBufferDirect(ue,Y,de,J,C,Ve),J.side=li,J.needsUpdate=!0,x.renderBufferDirect(ue,Y,de,J,C,Ve),J.side=Xn):x.renderBufferDirect(ue,Y,de,J,C,Ve),C.onAfterRender(x,Y,ue,de,J,Ve)}function gt(C,Y,ue){Y.isScene!==!0&&(Y=Be);const de=we.get(C),J=p.state.lights,Ve=p.state.shadowsArray,Ke=J.state.version,tt=ze.getParameters(C,J.state,Ve,Y,ue),nt=ze.getProgramCacheKey(tt);let pt=de.programs;de.environment=C.isMeshStandardMaterial?Y.environment:null,de.fog=Y.fog,de.envMap=(C.isMeshStandardMaterial?D:E).get(C.envMap||de.environment),de.envMapRotation=de.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,pt===void 0&&(C.addEventListener("dispose",Ze),pt=new Map,de.programs=pt);let mt=pt.get(nt);if(mt!==void 0){if(de.currentProgram===mt&&de.lightsStateVersion===Ke)return Jt(C,tt),mt}else tt.uniforms=ze.getUniforms(C),C.onBeforeCompile(tt,x),mt=ze.acquireProgram(tt,nt),pt.set(nt,mt),de.uniforms=tt.uniforms;const it=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=q.uniform),Jt(C,tt),de.needsLights=Si(C),de.lightsStateVersion=Ke,de.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),de.currentProgram=mt,de.uniformsList=null,mt}function Xt(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Oo.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Jt(C,Y){const ue=we.get(C);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function It(C,Y,ue,de,J){Y.isScene!==!0&&(Y=Be),P.resetTextureUnits();const Ve=Y.fog,Ke=de.isMeshStandardMaterial?Y.environment:null,tt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:kn,nt=(de.isMeshStandardMaterial?D:E).get(de.envMap||Ke),pt=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),it=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,he=!!ue.morphAttributes.color;let pe=_s;de.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=x.toneMapping);const Ie=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ke=Ie!==void 0?Ie.length:0,be=we.get(de),ot=p.state.lights;if(W===!0&&(ee===!0||C!==M)){const Ot=C===M&&de.id===S;q.setState(de,C,Ot)}let et=!1;de.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ot.state.version||be.outputColorSpace!==tt||J.isBatchedMesh&&be.batching===!1||!J.isBatchedMesh&&be.batching===!0||J.isBatchedMesh&&be.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&be.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&be.instancing===!1||!J.isInstancedMesh&&be.instancing===!0||J.isSkinnedMesh&&be.skinning===!1||!J.isSkinnedMesh&&be.skinning===!0||J.isInstancedMesh&&be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&be.instancingMorph===!1&&J.morphTexture!==null||be.envMap!==nt||de.fog===!0&&be.fog!==Ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==q.numPlanes||be.numIntersection!==q.numIntersection)||be.vertexAlphas!==pt||be.vertexTangents!==mt||be.morphTargets!==it||be.morphNormals!==wt||be.morphColors!==he||be.toneMapping!==pe||be.morphTargetsCount!==ke)&&(et=!0):(et=!0,be.__version=de.version);let Dt=be.currentProgram;et===!0&&(Dt=gt(de,Y,J));let Rt=!1,Ht=!1,$t=!1;const bt=Dt.getUniforms(),dt=be.uniforms;if(Oe.useProgram(Dt.program)&&(Rt=!0,Ht=!0,$t=!0),de.id!==S&&(S=de.id,Ht=!0),Rt||M!==C){Oe.buffers.depth.getReversed()?(se.copy(C.projectionMatrix),lv(se),cv(se),bt.setValue(O,"projectionMatrix",se)):bt.setValue(O,"projectionMatrix",C.projectionMatrix),bt.setValue(O,"viewMatrix",C.matrixWorldInverse);const pn=bt.map.cameraPosition;pn!==void 0&&pn.setValue(O,Pe.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&bt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ht=!0,$t=!0)}if(J.isSkinnedMesh){bt.setOptional(O,J,"bindMatrix"),bt.setOptional(O,J,"bindMatrixInverse");const Ot=J.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),bt.setValue(O,"boneTexture",Ot.boneTexture,P))}J.isBatchedMesh&&(bt.setOptional(O,J,"batchingTexture"),bt.setValue(O,"batchingTexture",J._matricesTexture,P),bt.setOptional(O,J,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",J._indirectTexture,P),bt.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",J._colorsTexture,P));const Ft=ue.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&Ue.update(J,ue,Dt),(Ht||be.receiveShadow!==J.receiveShadow)&&(be.receiveShadow=J.receiveShadow,bt.setValue(O,"receiveShadow",J.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(dt.envMap.value=nt,dt.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Y.environment!==null&&(dt.envMapIntensity.value=Y.environmentIntensity),Ht&&(bt.setValue(O,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&Mi(dt,$t),Ve&&de.fog===!0&&me.refreshFogUniforms(dt,Ve),me.refreshMaterialUniforms(dt,de,Q,ae,p.state.transmissionRenderTarget[C.id]),Oo.upload(O,Xt(be),dt,P)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Oo.upload(O,Xt(be),dt,P),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&bt.setValue(O,"center",J.center),bt.setValue(O,"modelViewMatrix",J.modelViewMatrix),bt.setValue(O,"normalMatrix",J.normalMatrix),bt.setValue(O,"modelMatrix",J.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Ot=de.uniformsGroups;for(let pn=0,Vn=Ot.length;pn<Vn;pn++){const Ji=Ot[pn];B.update(Ji,Dt),B.bind(Ji,Dt)}}return Dt}function Mi(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Si(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,Y,ue){we.get(C.texture).__webglTexture=Y,we.get(C.depthTexture).__webglTexture=ue;const de=we.get(C);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const ue=we.get(C);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ue=0){L=C,R=Y,w=ue;let de=!0,J=null,Ve=!1,Ke=!1;if(C){const nt=we.get(C);if(nt.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(O.FRAMEBUFFER,null),de=!1;else if(nt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(nt.__hasExternalTextures)P.rebindTextures(C,we.get(C.texture).__webglTexture,we.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&we.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const pt=C.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ke=!0);const mt=we.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(mt[Y])?J=mt[Y][ue]:J=mt[Y],Ve=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?J=we.get(C).__webglMultisampledFramebuffer:Array.isArray(mt)?J=mt[ue]:J=mt,T.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else T.copy(V).multiplyScalar(Q).floor(),I.copy(K).multiplyScalar(Q).floor(),F=oe;if(Oe.bindFramebuffer(O.FRAMEBUFFER,J)&&de&&Oe.drawBuffers(C,J),Oe.viewport(T),Oe.scissor(I),Oe.setScissorTest(F),Ve){const nt=we.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt.__webglTexture,ue)}else if(Ke){const nt=we.get(C.texture),pt=Y||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,ue||0,pt)}S=-1},this.readRenderTargetPixels=function(C,Y,ue,de,J,Ve,Ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt){Oe.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=C.texture,pt=nt.format,mt=nt.type;if(!qe.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-de&&ue>=0&&ue<=C.height-J&&O.readPixels(Y,ue,de,J,We.convert(pt),We.convert(mt),Ve)}finally{const nt=L!==null?we.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ue,de,J,Ve,Ke){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt){const nt=C.texture,pt=nt.format,mt=nt.type;if(!qe.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-de&&ue>=0&&ue<=C.height-J){Oe.bindFramebuffer(O.FRAMEBUFFER,tt);const it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,Ve.byteLength,O.STREAM_READ),O.readPixels(Y,ue,de,J,We.convert(pt),We.convert(mt),0);const wt=L!==null?we.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(O.FRAMEBUFFER,wt);const he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ov(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ve),O.deleteBuffer(it),O.deleteSync(he),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,ue=0){C.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const de=Math.pow(2,-ue),J=Math.floor(C.image.width*de),Ve=Math.floor(C.image.height*de),Ke=Y!==null?Y.x:0,tt=Y!==null?Y.y:0;P.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,ue,0,0,Ke,tt,J,Ve),Oe.unbindTexture()},this.copyTextureToTexture=function(C,Y,ue=null,de=null,J=0){C.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,C=arguments[1],Y=arguments[2],J=arguments[3]||0,ue=null);let Ve,Ke,tt,nt,pt,mt,it,wt,he;const pe=C.isCompressedTexture?C.mipmaps[J]:C.image;ue!==null?(Ve=ue.max.x-ue.min.x,Ke=ue.max.y-ue.min.y,tt=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,pt=ue.min.y,mt=ue.isBox3?ue.min.z:0):(Ve=pe.width,Ke=pe.height,tt=pe.depth||1,nt=0,pt=0,mt=0),de!==null?(it=de.x,wt=de.y,he=de.z):(it=0,wt=0,he=0);const Ie=We.convert(Y.format),ke=We.convert(Y.type);let be;Y.isData3DTexture?(P.setTexture3D(Y,0),be=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(P.setTexture2DArray(Y,0),be=O.TEXTURE_2D_ARRAY):(P.setTexture2D(Y,0),be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Dt=O.getParameter(O.UNPACK_SKIP_PIXELS),Rt=O.getParameter(O.UNPACK_SKIP_ROWS),Ht=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);const $t=C.isDataArrayTexture||C.isData3DTexture,bt=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const dt=we.get(C),Ft=we.get(Y),Ot=we.get(dt.__renderTarget),pn=we.get(Ft.__renderTarget);Oe.bindFramebuffer(O.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Vn=0;Vn<tt;Vn++)$t&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(C).__webglTexture,J,mt+Vn),C.isDepthTexture?(bt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(Y).__webglTexture,J,he+Vn),O.blitFramebuffer(nt,pt,Ve,Ke,it,wt,Ve,Ke,O.DEPTH_BUFFER_BIT,O.NEAREST)):bt?O.copyTexSubImage3D(be,J,it,wt,he+Vn,nt,pt,Ve,Ke):O.copyTexSubImage2D(be,J,it,wt,he+Vn,nt,pt,Ve,Ke);Oe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(be,J,it,wt,he,Ve,Ke,tt,Ie,ke,pe.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(be,J,it,wt,he,Ve,Ke,tt,Ie,pe.data):O.texSubImage3D(be,J,it,wt,he,Ve,Ke,tt,Ie,ke,pe):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,J,it,wt,Ve,Ke,Ie,ke,pe.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,J,it,wt,pe.width,pe.height,Ie,pe.data):O.texSubImage2D(O.TEXTURE_2D,J,it,wt,Ve,Ke,Ie,ke,pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,ot),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ht),J===0&&Y.generateMipmaps&&O.generateMipmap(be),Oe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,ue=null,de=null,J=0){return C.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,C=arguments[2],Y=arguments[3],J=arguments[4]||0),aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,ue,de,J)},this.initRenderTarget=function(C){we.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Oe.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,Oe.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class ap extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new N;class wu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cd=new N,ud=new Ut,hd=new Ut,yM=new N,dd=new ut,io=new N,Ol=new Bn,fd=new ut,Bl=new ks;class bM extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dh,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1&&(fd.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ud.fromBufferAttribute(s.attributes.skinIndex,e),hd.fromBufferAttribute(s.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=hd.getComponent(r);if(a!==0){const o=ud.getComponent(r);dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yM.copy(cd).applyMatrix4(dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class op extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class da extends xn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=On,h=On,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new ut,MM=new ut;class Ru{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:MM;pd.multiplyMatrices(o,t[r]),pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new da(t,e,e,qn,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new op),this.bones.push(a),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class $c extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new ut,md=new ut,so=[],_d=new jt,SM=new ut,jr=new Lt,Yr=new Bn;class EM extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,SM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),_d.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(_d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Yr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),md.multiplyMatrices(n,er),jr.matrixWorld=md,jr.raycast(e,so);for(let a=0,o=so.length;a<o;a++){const l=so[a];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new da(new Float32Array(s*this.count),s,this.count,xu,Qn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function kl(i,e){return i-e}function TM(i,e){return i.z-e.z}function AM(i,e){return e.z-i.z}class wM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const Gn=new ut,RM=new lt(1,1,1),zl=new $o,ro=new jt,As=new Bn,Kr=new N,gd=new N,CM=new N,Vl=new wM,Tn=new Lt,ao=[];function PM(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ws(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class LM extends Lt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new ei,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new da(t,e,e,qn,Qn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new da(t,e,e,Jo,gs);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new da(t,e,e,qn,Qn);n.colorSpace=Et.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new cn(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new cn(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Gn),this.getBoundingBoxAt(r,ro).applyMatrix4(Gn),e.union(ro)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Gn),this.getBoundingSphereAt(r,As).applyMatrix4(Gn),e.union(As)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(kl),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Gn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(RM.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(kl),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);PM(u,d,l);const f=u.itemSize;for(let g=u.count,v=c;g<v;g++){const m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,g=f.array,v=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const g=d[f],{array:v,itemSize:m}=g;v.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new jt,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Kr.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new Bn;this.getBoundingBoxAt(e,ro),ro.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Kr.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Kr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(kl);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);ws(this._multiDrawCounts,s),ws(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ws(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ws(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ws(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ei,this._initializeGeometry(r));const a=this.geometry;r.index&&ws(r.index.array,a.index.array);for(const o in r.attributes)ws(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Tn.material=this.material,Tn.geometry.index=a.index,Tn.geometry.attributes=a.attributes,Tn.geometry.boundingBox===null&&(Tn.geometry.boundingBox=new jt),Tn.geometry.boundingSphere===null&&(Tn.geometry.boundingSphere=new Bn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=s[c];Tn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Tn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Tn.geometry.boundingBox),this.getBoundingSphereAt(c,Tn.geometry.boundingSphere),Tn.raycast(e,ao);for(let u=0,d=ao.length;u<d;u++){const f=ao[u];f.object=this,f.batchId=o,t.push(f)}ao.length=0}Tn.material=null,Tn.geometry.index=null,Tn.geometry.attributes={},Tn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(Gn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),zl.setFromProjectionMatrix(Gn,e.coordinateSystem));let v=0;if(this.sortObjects){Gn.copy(this.matrixWorld).invert(),Kr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Gn),gd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Gn);for(let y=0,b=l.length;y<b;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,Gn),this.getBoundingSphereAt(x,As).applyMatrix4(Gn);let A=!1;if(d&&(A=!zl.intersectsSphere(As)),!A){const R=u[x],w=CM.subVectors(As.center,Kr).dot(gd);Vl.push(R.start,R.count,w,y)}}const m=Vl.list,p=this.customSort;p===null?m.sort(r.transparent?AM:TM):p.call(this,m,n);for(let y=0,b=m.length;y<b;y++){const x=m[y];c[v]=x.start*o,h[v]=x.count,g[v]=x.index,v++}Vl.reset()}else for(let m=0,p=l.length;m<p;m++)if(l[m].visible&&l[m].active){const y=l[m].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(m,Gn),this.getBoundingSphereAt(y,As).applyMatrix4(Gn),b=!zl.intersectsSphere(As)),!b){const x=u[y];c[v]=x.start*o,h[v]=x.count,g[v]=m,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class lp extends wi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new N,jo=new N,vd=new ut,Zr=new ks,oo=new Bn,Hl=new N,xd=new N;class La extends Kt{constructor(e=new ei,t=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qo.distanceTo(jo);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;vd.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(vd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),b=lo(this,e,Zr,l,p,y);b&&t.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=lo(this,e,Zr,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=lo(this,e,Zr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=lo(this,e,Zr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lo(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),t.distanceSqToSegment(qo,jo,Hl,xd)>n)return;Hl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hl);if(!(l<e.near||l>e.far))return{distance:l,point:xd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yd=new N,bd=new N;class Cu extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(bd);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pu extends La{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cp extends wi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Md=new ut,eu=new ks,co=new Bn,uo=new N;class Lu extends Kt{constructor(e=new ei,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;Md.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);uo.fromBufferAttribute(u,m),Sd(uo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)uo.fromBufferAttribute(u,g),Sd(uo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sd(i,e,t,n,s,r,a){const o=eu.distanceSqToPoint(i);if(o<t){const l=new N;eu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Iu extends ei{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oi(a,3)),this.setAttribute("normal",new oi(o,3)),this.setAttribute("uv",new oi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ya extends wi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends ya{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ho(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function IM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function DM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ed(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function up(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ia{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class UM extends Ia{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=e,o=2*t-n;break;case mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=e,l=2*n-t;break;case mh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+y*a[c+A]+b*a[l+A]+x*a[u+A];return r}}class NM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class FM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new FM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new UM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&IM(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=va;class Br extends Pi{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ga;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class hp extends Pi{}hp.prototype.ValueTypeName="color";class Dr extends Pi{}Dr.prototype.ValueTypeName="number";class OM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ri.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ur extends Pi{InterpolantFactoryMethodLinear(e){return new OM(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Pi{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ga;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends Pi{}Nr.prototype.ValueTypeName="vector";class BM{constructor(e="",t=-1,n=[],s=Ig){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(zM(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Pi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=DM(l);l=Ed(l,1,h),c=Ed(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Dr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];up(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new Dr(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Nr,f+".position",d,"pos",s),n(Ur,f+".quaternion",d,"rot",s),n(Nr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return hp;case"quaternion":return Ur;case"bool":case"boolean":return Br;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function zM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kM(i.type);if(i.times===void 0){const t=[],n=[];up(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class VM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const HM=new VM;class zr{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class GM extends Error{constructor(e,t){super(e),this.response=t}}class dp extends zr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ki[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:x})=>{if(b)p.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let R=0,w=h.length;R<w;R++){const L=h[R];L.onProgress&&L.onProgress(A)}p.enqueue(x),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new GM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ds.add(e,c);const h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class WM extends zr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ds.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xa("img");function l(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class XM extends zr{constructor(e){super(e)}load(e,t,n,s){const r=new xn,a=new WM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class nl extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qM extends nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gl=new ut,Td=new N,Ad=new N;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jM extends Du{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class YM extends nl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wd=new ut,Jr=new N,Wl=new N;class KM extends Du{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}}class Uu extends nl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ZM extends Du{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tu extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ZM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JM extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ds.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ds.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,l),r.manager.itemStart(e)}}const Nu="\\[\\]\\.:\\/",QM=new RegExp("["+Nu+"]","g"),Fu="[^"+Nu+"]",$M="[^"+Nu.replace("\\.","")+"]",eS=/((?:WC+[\/:])*)/.source.replace("WC",Fu),tS=/(WCOD+)?/.source.replace("WCOD",$M),nS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),iS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),sS=new RegExp("^"+eS+tS+nS+iS+"$"),rS=["material","materials","bones","map"];class aS{constructor(e,t,n){const s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class kt{constructor(e,t,n){this.path=t,this.parsedPath=n||kt.parseTrackName(t),this.node=kt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new kt.Composite(e,t,n):new kt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(QM,"")}static parseTrackName(e){const t=sS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);rS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=kt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=aS;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Rd=new ut;class oS{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(e,t=!0,n=[]){return nu(e,this,n,t),n.sort(Cd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nu(e[s],this,n,t);return n.sort(Cd),n}}function Cd(i,e){return i.distance-e.distance}function nu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)nu(r[a],e,t,!0)}}class Pd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_n(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ld=new N,fo=new N;class Ki{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ld.subVectors(e,this.start),fo.subVectors(this.end,this.start);const n=fo.dot(fo);let r=fo.dot(Ld)/n;return t&&(r=_n(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class lS extends Bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);const Id={type:"change"},Ou={type:"start"},fp={type:"end"},po=new ks,Dd=new _i,cS=Math.cos(70*Su.DEG2RAD),an=new N,Wn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class uS extends lS{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ri,this._lastTargetPosition=new N,this._quat=new Ri().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pd,this._sphericalDelta=new Pd,this._scale=1,this._panOffset=new N,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new N,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dS.bind(this),this._onPointerDown=hS.bind(this),this._onPointerUp=fS.bind(this),this._onContextMenu=yS.bind(this),this._onMouseWheel=_S.bind(this),this._onKeyDown=gS.bind(this),this._onTouchStart=vS.bind(this),this._onTouchMove=xS.bind(this),this._onMouseDown=pS.bind(this),this._onMouseMove=mS.bind(this),this._interceptControlDown=bS.bind(this),this._interceptControlUp=MS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Id),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Wn:n>Math.PI&&(n-=Wn),s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=an.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<cS?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;an.copy(s).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function dS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fp),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Wt.DOLLY;break;case vr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}break;case vr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Ou)}function mS(i){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _S(i){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(i.preventDefault(),this.dispatchEvent(Ou),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fp))}function gS(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function vS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Wt.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Wt.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Ou)}function xS(i){switch(this._trackPointer(i),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Wt.NONE}}function yS(i){this.enabled!==!1&&i.preventDefault()}function bS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ud(i,e){if(e===Dg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kc||e===Hf){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class SS extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new HS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=fa.extractUrlBase(e);a=fa.resolveURL(c,this.path)}else a=fa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pp){try{a[Mt.KHR_BINARY_GLTF]=new GS(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new nE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Mt.KHR_MATERIALS_UNLIT:a[u]=new AS;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[u]=new WS(r,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[u]=new XS;break;case Mt.KHR_MESH_QUANTIZATION:a[u]=new qS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function ES(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TS{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new lt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],kn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uu(h),c.distance=u;break;case"spot":c=new YM(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class AS{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return hs}extendParams(e,t,n){const s=[];e.color=new lt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,nn))}return Promise.all(s)}}class wS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class RS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(o,o)}return Promise.all(r)}}class CS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class PS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class LS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new lt(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,nn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class IS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class DS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new lt().setRGB(o[0],o[1],o[2],kn),Promise.all(r)}}class US{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new lt().setRGB(o[0],o[1],o[2],kn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,nn)),Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class OS{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class kS{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zS{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VS{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class HS{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new ut,m=new N,p=new Ri,y=new N(1,1,1),b=new EM(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,v.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const A=l[x];b.instanceColor=new $c(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Kt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const pp="glTF",Qr=12,Nd={JSON:1313821514,BIN:5130562};class GS{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qr,r=new DataView(e,Qr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Nd.JSON){const c=new Uint8Array(e,Qr+a,o);this.content=n.decode(c)}else if(l===Nd.BIN){const c=Qr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class WS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=iu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=iu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Mr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,kn,d)})})}}class XS{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qS{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class mp extends Ia{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let x=0;x!==o;x++){const A=a[v+x+o],R=a[v+x+l]*h,w=a[g+x+o],L=a[g+x]*h;r[x]=y*A+b*R+m*w+p*L}return r}}const jS=new Ri;class YS extends mp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return jS.fromArray(r).normalize().toArray(r),r}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:On,9729:Jn,9984:If,9985:Lo,9986:ra,9987:Wi},Od={33071:us,33648:Wo,10497:Rr},ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KS={CUBICSPLINE:void 0,LINEAR:va,STEP:ga},jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ya({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function Rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function QS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $S(i){let e;const t=i.extensions&&i.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=i.indices+":"+Yl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Yl(i.targets[n]);return e}function Yl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tE=new ut;class nE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ES,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new XM(this.options.manager):this.textureLoader=new JM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Rs(r,o,s),Vi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(fa.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ql[s.type],o=Mr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new cn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ql[s.type],c=Mr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(y);b||(v=new c(o,p*f,s.count*f/h),b=new xM(v,f/h),t.cache.add(y,b)),m=new wu(b,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new cn(v,l,g);if(s.sparse!==void 0){const p=ql.SCALAR,y=Mr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new y(a[1],b,s.sparse.count*p),R=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,L=A.length;w<L;w++){const S=A[w];if(m.setX(S,R[w*l]),l>=2&&m.setY(S,R[w*l+1]),l>=3&&m.setZ(S,R[w*l+2]),l>=4&&m.setW(S,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||Jn,h.minFilter=Fd[d.minFilter]||Wi,h.wrapS=Od[d.wrapS]||Rr,h.wrapT=Od[d.wrapT]||Rr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==On&&h.minFilter!==Jn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new xn(v);m.needsUpdate=!0,d(m)}),t.load(fa.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Vi(u,a),u.userData.mimeType=a.mimeType||eE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new cp,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new lp,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ya}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Mt.KHR_MATERIALS_UNLIT]){const u=s[Mt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new lt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],kn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,nn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xn);const h=r.alphaMode||jl.OPAQUE;if(h===jl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===jl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hs&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==hs&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hs){const u=r.emissiveFactor;o.emissive=new lt().setRGB(u[0],u[1],u[2],kn)}return r.emissiveTexture!==void 0&&a!==hs&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,nn)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rs(s,u,r),u})}createUniqueName(e){const t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=$S(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bd(new ei,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?ZS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const y=c[f];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new bM(v,y):new Lt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===si.TRIANGLE_STRIP?p.geometry=Ud(p.geometry,Hf):m.mode===si.TRIANGLE_FAN&&(p.geometry=Ud(p.geometry,Kc));else if(m.mode===si.LINES)p=new Cu(v,y);else if(m.mode===si.LINE_STRIP)p=new La(v,y);else if(m.mode===si.LINE_LOOP)p=new Pu(v,y);else if(m.mode===si.POINTS)p=new Lu(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&QS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vi(p,r),m.extensions&&Rs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Rs(s,u[0],r),u[0];const d=new Fs;r.extensions&&Rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nn(Su.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Tu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ut;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ru(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){const x=d[y],A=f[y],R=g[y],w=v[y],L=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,A,R,w,L);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new BM(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tE)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new op:c.length>1?h=new Fs:c.length===1?h=c[0]:h=new Kt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vi(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){const u=new ut;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Fs;n.name&&(r.name=s.createUniqueName(n.name)),Vi(r,n),n.extensions&&Rs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof wi||d instanceof xn)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];as[r.path]===as.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(as[r.path]){case as.weights:c=Dr;break;case as.rotation:c=Ur;break;case as.position:case as.scale:c=Nr;break;default:switch(n.itemSize){case 1:c=Dr;break;case 2:case 3:default:c=Nr;break}break}const h=s.interpolation!==void 0?KS[s.interpolation]:va,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+as[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ur?YS:mp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iE(i,e,t){const n=e.attributes,s=new jt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const h=su(Mr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,l=new N;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=su(Mr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Bd(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=iu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Et.workingColorSpace!==kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Vi(i,e),iE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?JS(i,e.targets,t):i})}class sE extends ap{constructor(){super();const e=new Fr;e.deleteAttribute("uv");const t=new ya({side:Rn}),n=new ya,s=new Uu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Lt(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Lt(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Lt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Lt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Lt(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Lt(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Lt(e,tr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Lt(e,tr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Lt(e,tr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Lt(e,tr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Lt(e,tr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Lt(e,tr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function tr(i){const e=new hs;return e.color.setScalar(i),e}const _p=0,rE=1,aE=2,kd=2,Kl=1.25,zd=1,$n=32,sn=$n/4,gp=65535,Bo=Math.pow(2,-24),Bu=Symbol("SKIP_GENERATION"),vp={strategy:_p,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Bu]:!1};function Zt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function ru(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function Vd(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Zl(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}function Qt(i,e){return e[i+15]===gp}function vn(i,e){return e[i+6]}function wn(i,e){return e[i+14]}function on(i){return i+sn}function ln(i,e){const t=e[i+6];return i+t*sn}function ku(i,e){return e[i+7]}function Jl(i,e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,g=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let y=(e-p)*6,b=(e+t-p)*6;y<b;y+=6){const x=i[y+0],A=i[y+1],R=x-A,w=x+A;R<r&&(r=R),w>l&&(l=w),x<u&&(u=x),x>g&&(g=x);const L=i[y+2],S=i[y+3],M=L-S,T=L+S;M<a&&(a=M),T>c&&(c=T),L<d&&(d=L),L>v&&(v=L);const I=i[y+4],F=i[y+5],k=I-F,Z=I+F;k<o&&(o=k),Z>h&&(h=Z),I<f&&(f=I),I>m&&(m=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=h,s[0]=u,s[1]=d,s[2]=f,s[3]=g,s[4]=v,s[5]=m}const Ti=8,zu=8,Ql=new Int32Array(Ti),Ei=new Float32Array(Ti*6),nr=new Float32Array(Ti*6),pi=new Float32Array(6),mo=new Float32Array(6),os=new Int32Array(zu),Hd=new Float32Array(zu*6);function oE(i,e,t,n){for(let s=0;s<3;s++){const r=e[i+2*s],a=e[i+2*s+1],o=r-a,l=r+a;o<t[n+s]&&(t[n+s]=o),l>t[n+s+3]&&(t[n+s+3]=l)}}function Gd(i,e){const t=i[e+3]-i[e],n=i[e+4]-i[e+1],s=i[e+5]-i[e+2];return 2*(t*n+n*s+s*t)}function lE(i,e,t,n,s,r){let a=-1,o=0;if(r===_p)a=ru(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===rE)a=ru(i),a!==-1&&(o=cE(t,n,s,a));else if(r===aE){const l=Zl(i);let c=Kl*s;const h=t.offset||0,u=(n-h)*6,d=(n+s-h)*6;for(let f=0;f<3;f++){const g=e[f],p=(e[f+3]-g)/Ti;if(s<zu){for(let y=0;y<s;y++){const b=u+y*6,x=t[b+2*f];let A=y;for(;A>0&&t[os[A-1]+2*f]>x;)os[A]=os[A-1],A--;os[A]=b}for(let y=0;y<3;y++)pi[y]=1/0,pi[y+3]=-1/0,mo[y]=1/0,mo[y+3]=-1/0;for(let y=s-1;y>=0;y--)Vd(os[y],t,mo),Hd.set(mo,y*6);for(let y=0;y<s-1;y++){Vd(os[y],t,pi);const b=t[os[y+1]+2*f];if(t[os[y]+2*f]===b)continue;const x=y+1,A=s-x,R=Zl(pi)/l,w=Gd(Hd,x*6)/l,L=zd+Kl*(R*x+w*A);L<c&&(a=f,c=L,o=b)}}else{for(let x=0;x<Ti;x++){Ql[x]=0;for(let A=0;A<3;A++)Ei[x*6+A]=1/0,Ei[x*6+A+3]=-1/0}for(let x=u;x<d;x+=6){let w=~~((t[x+2*f]-g)/p);w>=Ti&&(w=Ti-1),Ql[w]++,oE(x,t,Ei,w*6)}const y=(Ti-1)*6;for(let x=0;x<6;x++)nr[y+x]=Ei[y+x];for(let x=Ti-2;x>=0;x--){const A=x*6,R=A+6;for(let w=0;w<3;w++)nr[A+w]=Math.min(Ei[A+w],nr[R+w]),nr[A+w+3]=Math.max(Ei[A+w+3],nr[R+w+3])}let b=0;for(let x=0;x<Ti-1;x++){const A=x*6,R=Ql[x];if(R!==0)for(let T=0;T<3;T++)b===0?(pi[T]=Ei[A+T],pi[T+3]=Ei[A+T+3]):(pi[T]=Math.min(pi[T],Ei[A+T]),pi[T+3]=Math.max(pi[T+3],Ei[A+T+3]));b+=R;let w=0,L=0;b!==0&&(w=Zl(pi)/l);const S=s-b;S!==0&&(L=Gd(nr,A+6)/l);const M=zd+Kl*(w*b+L*S);M<c&&(a=f,c=M,o=g+p+x*p)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function cE(i,e,t,n){let s=0;const r=i.offset;for(let a=e,o=e+t;a<o;a++)s+=i[(a-r)*6+n*2];return s/t}function uE(i,e,t,n,s,r){let a=n,o=n+s-1;const l=r.pos,c=r.axis*2,h=t.offset||0;for(;;){for(;a<=o&&t[(a-h)*6+c]<l;)a++;for(;a<=o&&t[(o-h)*6+c]>=l;)o--;if(a<o){for(let u=0;u<e;u++){let d=i[a*e+u];i[a*e+u]=i[o*e+u],i[o*e+u]=d}for(let u=0;u<6;u++){const d=a-h,f=o-h,g=t[d*6+u];t[d*6+u]=t[f*6+u],t[f*6+u]=g}a++,o--}else return a}}const hE=Math.pow(2,32),ir=new Float32Array(6),_o=new Float32Array(6);function dE(i,e,t,n,s,r){const{maxDepth:a,verbose:o,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:d=!1}=s,f=i.primitiveBuffer,g=i.primitiveBufferStride,v=d?SharedArrayBuffer:ArrayBuffer,m=new v($n*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),y=new Uint32Array(m),b=new Uint16Array(m);let x=0,A=!1;return Jl(e,t,n,ir,_o),L(t,n,0),m.slice(0,x*$n);function R(S){u&&u((S-r.offset)/r.count)}function w(S,M,T){const I=S*2;y[S+6]=M,b[I+14]=T,b[I+15]=gp,R(M+T)}function L(S,M,T){const I=x++,F=I*sn;p.set(ir,F),!A&&T>=a&&(A=!0,o&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));const k=M>c;if(M<=l&&!k||T>=a){w(F,S,M);return}const Z=lE(ir,_o,e,S,M,h);let j=Z.axis===-1?-1:uE(f,g,e,S,M,Z);if(Z.axis===-1||j===S||j===S+M){if(!k){w(F,S,M);return}Z.axis=Math.max(0,ru(ir)),j=S+Math.max(1,Math.floor(M/2))}y[F+7]=Z.axis;const ae=j-S;Jl(e,S,ae,ir,_o),L(S,ae,T+1);const Q=x-I;if(Q>hE)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");y[F+6]=Q;const xe=M-ae;Jl(e,j,xe,ir,_o),L(j,xe,T+1)}}function fE(i,e){const t=i.getRootRanges(e.range),n=t[0],s=t[t.length-1],r={offset:n.offset,count:s.offset+s.count-n.offset},a=new Float32Array(6*r.count);a.offset=r.offset,i.computePrimitiveBounds(r.offset,r.count,a),i._roots=t.map(o=>dE(i,a,o.offset,o.count,e,r))}class Vu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class pE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Vt=new pE;let fs,_r;const sr=[],go=new Vu(()=>new jt);function mE(i,e,t,n,s,r){fs=go.getPrimitive(),_r=go.getPrimitive(),sr.push(fs,_r),Vt.setBuffer(i._roots[e]);const a=au(0,i.geometry,t,n,s,r);Vt.clearBuffer(),go.releasePrimitive(fs),go.releasePrimitive(_r),sr.pop(),sr.pop();const o=sr.length;return o>0&&(_r=sr[o-1],fs=sr[o-2]),a}function au(i,e,t,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:c}=Vt;let h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);return Zt(i,o,fs),n(d,f,!1,a,r+i/sn,fs)}else{let M=function(I){const{uint16Array:F,uint32Array:k}=Vt;let Z=I*2;for(;!Qt(Z,F);)I=on(I),Z=I*2;return vn(I,k)},T=function(I){const{uint16Array:F,uint32Array:k}=Vt;let Z=I*2;for(;!Qt(Z,F);)I=ln(I,k),Z=I*2;return vn(I,k)+wn(Z,F)};const d=on(i),f=ln(i,c);let g=d,v=f,m,p,y,b;if(s&&(y=fs,b=_r,Zt(g,o,y),Zt(v,o,b),m=s(y),p=s(b),p<m)){g=f,v=d;const I=m;m=p,p=I,y=b}y||(y=fs,Zt(g,o,y));const x=Qt(g*2,l),A=t(y,x,m,a+1,r+g/sn);let R;if(A===kd){const I=M(g),k=T(g)-I;R=n(I,k,!0,a+1,r+g/sn,y)}else R=A&&au(g,e,t,n,s,r,a+1);if(R)return!0;b=_r,Zt(v,o,b);const w=Qt(v*2,l),L=t(b,w,p,a+1,r+v/sn);let S;if(L===kd){const I=M(v),k=T(v)-I;S=n(I,k,!0,a+1,r+v/sn,b)}else S=L&&au(v,e,t,n,s,r,a+1);return!!S}}const pa=new Vt.constructor,Yo=new Vt.constructor,ls=new Vu(()=>new jt),rr=new jt,ar=new jt,$l=new jt,ec=new jt;let tc=!1;function _E(i,e,t,n){if(tc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");tc=!0;const s=i._roots,r=e._roots;let a,o=0,l=0;const c=new ut().copy(t).invert();for(let h=0,u=s.length;h<u;h++){pa.setBuffer(s[h]),l=0;const d=ls.getPrimitive();Zt(0,pa.float32Array,d),d.applyMatrix4(c);for(let f=0,g=r.length;f<g&&(Yo.setBuffer(r[f]),a=mi(0,0,t,c,n,o,l,0,0,d),Yo.clearBuffer(),l+=r[f].byteLength/$n,!a);f++);if(ls.releasePrimitive(d),pa.clearBuffer(),o+=s[h].byteLength/$n,a)break}return tc=!1,a}function mi(i,e,t,n,s,r=0,a=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=Yo,d=pa):(u=pa,d=Yo);const f=u.float32Array,g=u.uint32Array,v=u.uint16Array,m=d.float32Array,p=d.uint32Array,y=d.uint16Array,b=i*2,x=e*2,A=Qt(b,v),R=Qt(x,y);let w=!1;if(R&&A)h?w=s(vn(e,p),wn(e*2,y),vn(i,g),wn(i*2,v),l,a+e/sn,o,r+i/sn):w=s(vn(i,g),wn(i*2,v),vn(e,p),wn(e*2,y),o,r+i/sn,l,a+e/sn);else if(R){const L=ls.getPrimitive();Zt(e,m,L),L.applyMatrix4(t);const S=on(i),M=ln(i,g);Zt(S,f,rr),Zt(M,f,ar);const T=L.intersectsBox(rr),I=L.intersectsBox(ar);w=T&&mi(e,S,n,t,s,a,r,l,o+1,L,!h)||I&&mi(e,M,n,t,s,a,r,l,o+1,L,!h),ls.releasePrimitive(L)}else{const L=on(e),S=ln(e,p);Zt(L,m,$l),Zt(S,m,ec);const M=c.intersectsBox($l),T=c.intersectsBox(ec);if(M&&T)w=mi(i,L,t,n,s,r,a,o,l+1,c,h)||mi(i,S,t,n,s,r,a,o,l+1,c,h);else if(M)if(A)w=mi(i,L,t,n,s,r,a,o,l+1,c,h);else{const I=ls.getPrimitive();I.copy($l).applyMatrix4(t);const F=on(i),k=ln(i,g);Zt(F,f,rr),Zt(k,f,ar);const Z=I.intersectsBox(rr),j=I.intersectsBox(ar);w=Z&&mi(L,F,n,t,s,a,r,l,o+1,I,!h)||j&&mi(L,k,n,t,s,a,r,l,o+1,I,!h),ls.releasePrimitive(I)}else if(T)if(A)w=mi(i,S,t,n,s,r,a,o,l+1,c,h);else{const I=ls.getPrimitive();I.copy(ec).applyMatrix4(t);const F=on(i),k=ln(i,g);Zt(F,f,rr),Zt(k,f,ar);const Z=I.intersectsBox(rr),j=I.intersectsBox(ar);w=Z&&mi(S,F,n,t,s,a,r,l,o+1,I,!h)||j&&mi(S,k,n,t,s,a,r,l,o+1,I,!h),ls.releasePrimitive(I)}}return w}const nc=new class{constructor(){let i=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=i=r._roots[a],this.uint16Array=t=new Uint16Array(i),this.uint32Array=e=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let a=r*2;for(;!Qt(a,t);)r=on(r),a=r*2;return vn(r,e)},this.getRangeEnd=r=>{let a=r*2;for(;!Qt(a,t);)r=ln(r,e),a=r*2;return vn(r,e)+wn(a,t)};const s=(r,a,o)=>{const l=a*2,c=Qt(l,t);if(!r(o,c,a)&&!c){const u=on(a),d=ln(a,e);s(r,u,o+1),s(r,d,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,o,l)=>{if(o){const c=l*2,h=e[l+6],u=t[c+14];return r(a,o,new Float32Array(i,l*4,6),h,u)}else{const c=ku(l,e);return r(a,o,new Float32Array(i,l*4,6),c)}})}}},Wd=new jt,or=new Float32Array(6);class gE{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...vp,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),fE(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=e,d=e+t;u<d;u++){this.writePrimitiveBounds(u,or,0);const[f,g,v,m,p,y]=or;f<r&&(r=f),m>l&&(l=m),g<a&&(a=g),p>c&&(c=p),v<o&&(o=v),y>h&&(h=y)}return n[s+0]=r,n[s+1]=a,n[s+2]=o,n[s+3]=l,n[s+4]=c,n[s+5]=h,n}computePrimitiveBounds(e,t,n){const s=n.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,or,0);const[o,l,c,h,u,d]=or,f=(o+h)/2,g=(l+u)/2,v=(c+d)/2,m=(h-o)/2,p=(u-l)/2,y=(d-c)/2,b=(r-s)*6;n[b+0]=f,n[b+1]=m+(Math.abs(f)+m)*Bo,n[b+2]=g,n[b+3]=p+(Math.abs(g)+p)*Bo,n[b+4]=v,n[b+5]=y+(Math.abs(v)+y)*Bo}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,s=t.length;n<s;n++)t[n]+=e;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],a=new Uint32Array(r),o=new Uint16Array(r),l=r.byteLength/$n;for(let c=0;c<l;c++){const h=sn*c,u=2*h;Qt(u,o)&&(a[h+6]+=e)}}}}traverse(e,t=0){nc.setBVH(this,t),nc.traverse(e),nc.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const s=e[t],r=new Uint32Array(s),a=new Uint16Array(s),o=new Float32Array(s),l=s.byteLength/$n;for(let c=l-1;c>=0;c--){const h=c*sn,u=h*2;if(Qt(u,a)){const f=vn(h,r),g=wn(u,a);this.writePrimitiveRangeBounds(f,g,or,0),o.set(or,h)}else{const f=on(h),g=ln(h,r);for(let v=0;v<3;v++){const m=o[f+v],p=o[f+v+3],y=o[g+v],b=o[g+v+3];o[h+v]=m<y?m:y,o[h+v+3]=p>b?p:b}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Zt(0,new Float32Array(n),Wd),e.union(Wd)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:a,iterate:o}=e;if(s&&r){const u=s;s=(d,f,g,v,m)=>u(d,f,g,v,m)?!0:o(d,f,this,r,g,v,a)}else s||(r?s=(u,d,f,g)=>o(u,d,this,r,f,g,a):s=(u,d,f)=>f);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(l=mE(this,u,n,s,t,c),l)break;c+=f.byteLength/$n}return l}bvhcast(e,t,n){let{intersectsRanges:s}=n;return _E(this,e,t,s)}}function vE(){return typeof SharedArrayBuffer<"u"}function Hu(i){return i.index?i.index.count:i.attributes.position.count}function il(i){return Hu(i)/3}function xE(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function yE(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=xE(t,n);i.setIndex(new cn(s,1));for(let r=0;r<t;r++)s[r]=r}}function bE(i,e,t){const n=Hu(i)/t,s=e||i.drawRange,r=s.start/t,a=(s.start+s.count)/t,o=Math.max(0,r),l=Math.min(n,a)-o;return{offset:Math.floor(o),count:Math.floor(l)}}function ME(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Xd(i,e,t){const n=bE(i,e,t),s=ME(i,t);if(!s.length)return[n];const r=[],a=n.offset,o=n.offset+n.count,l=Hu(i)/t,c=[];for(const d of s){const{offset:f,count:g}=d,v=f,m=isFinite(g)?g:l-f,p=f+m;v<o&&p>a&&(c.push({pos:Math.max(a,v),isStart:!0}),c.push({pos:Math.min(o,p),isStart:!1}))}c.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(const d of c){const f=d.pos;h!==0&&f!==u&&r.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return r}function SE(i,e){const t=i[i.length-1],n=t.offset+t.count>2**16,s=i.reduce((c,h)=>c+h.count,0),r=n?4:2,a=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),o=n?new Uint32Array(a):new Uint16Array(a);let l=0;for(let c=0;c<i.length;c++){const{offset:h,count:u}=i[c];for(let d=0;d<u;d++)o[l+d]=h+d;l+=u}return o}class EE extends gE{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!vE())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...vp,...t},t[Bu]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const s=Xd(t,e.range,n),r=SE(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else yE(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new jt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Xd(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Zi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],l=e.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}Zi.prototype.setFromBox=(function(){const i=new N;return function(t,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*h+r.z*(1-h);const u=t.dot(i);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}})();const TE=(function(){const i=new N,e=new N,t=new N;return function(s,r,a){const o=s.start,l=i,c=r.start,h=e;t.subVectors(o,c),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),g=t.dot(l),m=l.dot(l)*f-d*d;let p,y;m!==0?p=(u*d-g*f)/m:p=0,y=(u+p*d)/f,a.x=p,a.y=y}})(),Gu=(function(){const i=new rt,e=new N,t=new N;return function(s,r,a,o){TE(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,a),r.at(c,o);return}else if(l>=0&&l<=1){c<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=s.start:h=s.end;let u;c<0?u=r.start:u=r.end;const d=e,f=t;if(s.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}})(),AE=(function(){const i=new N,e=new N,t=new _i,n=new Ki;return function(r,a){const{radius:o,center:l}=r,{a:c,b:h,c:u}=a;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const v=a.getPlane(t);if(Math.abs(v.distanceToPoint(l))<=o){const p=v.projectPoint(l,e);if(a.containsPoint(p))return!0}return!1}})(),wE=["x","y","z"],Hi=1e-15,qd=Hi*Hi;function ii(i){return Math.abs(i)<Hi}class yi extends Mn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new N),this.satBounds=new Array(4).fill().map(()=>new Zi),this.points=[this.a,this.b,this.c],this.plane=new _i,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ki,this.needsUpdate=!0}intersectsSphere(e){return AE(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const c=r[1],h=a[1];c.subVectors(e,t),h.setFromPoints(c,s);const u=r[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,s);const f=r[3],g=a[3];f.subVectors(n,e),g.setFromPoints(f,s);const v=c.length(),m=u.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Hi?m<Hi||p<Hi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<Hi?p<Hi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<Hi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}yi.prototype.closestPointToSegment=(function(){const i=new N,e=new N,t=new Ki;return function(s,r=null,a=null){this.needsUpdate&&this.update();const{start:o,end:l}=s,c=this.points;let h,u=1/0;const d=this.plane.distanceToPoint(o),f=this.plane.distanceToPoint(l);if(d*f<0&&this.plane.intersectLine(s,i)!==null&&this.containsPoint(i))return r&&r.copy(i),a&&a.copy(i),0;for(let g=0;g<3;g++){const v=(g+1)%3;t.start.copy(c[g]),t.end.copy(c[v]),Gu(t,s,i,e),h=i.distanceToSquared(e),h<u&&(u=h,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),h=o.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(u)}})();yi.prototype.intersectsTriangle=(function(){const i=new yi,e=new Zi,t=new Zi,n=new N,s=new N,r=new N,a=new N,o=new Ki,l=new Ki,c=new N,h=new rt,u=new rt;function d(b,x,A,R){const w=n;!b.isDegenerateIntoPoint&&!b.isDegenerateIntoSegment?w.copy(b.plane.normal):w.copy(x.plane.normal);const L=b.satBounds,S=b.satAxes;for(let I=1;I<4;I++){const F=L[I],k=S[I];if(e.setFromPoints(k,x.points),F.isSeparated(e)||(a.copy(w).cross(k),e.setFromPoints(a,b.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}const M=x.satBounds,T=x.satAxes;for(let I=1;I<4;I++){const F=M[I],k=T[I];if(e.setFromPoints(k,b.points),F.isSeparated(e)||(a.crossVectors(w,k),e.setFromPoints(a,b.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}return A&&(R||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),A.start.set(0,0,0),A.end.set(0,0,0)),!0}function f(b,x,A,R,w,L,S,M,T,I,F){let k=S/(S-M);I.x=R+(w-R)*k,F.start.subVectors(x,b).multiplyScalar(k).add(b),k=S/(S-T),I.y=R+(L-R)*k,F.end.subVectors(A,b).multiplyScalar(k).add(b)}function g(b,x,A,R,w,L,S,M,T,I,F){if(w>0)f(b.c,b.a,b.b,R,x,A,T,S,M,I,F);else if(L>0)f(b.b,b.a,b.c,A,x,R,M,S,T,I,F);else if(M*T>0||S!=0)f(b.a,b.b,b.c,x,A,R,S,M,T,I,F);else if(M!=0)f(b.b,b.a,b.c,A,x,R,M,S,T,I,F);else if(T!=0)f(b.c,b.a,b.b,R,x,A,T,S,M,I,F);else return!0;return!1}function v(b,x,A,R){const w=x.degenerateSegment,L=b.plane.distanceToPoint(w.start),S=b.plane.distanceToPoint(w.end);return ii(L)?ii(S)?d(b,x,A,R):(A&&(A.start.copy(w.start),A.end.copy(w.start)),b.containsPoint(w.start)):ii(S)?(A&&(A.start.copy(w.end),A.end.copy(w.end)),b.containsPoint(w.end)):b.plane.intersectLine(w,n)!=null?(A&&(A.start.copy(n),A.end.copy(n)),b.containsPoint(n)):!1}function m(b,x,A){const R=x.a;return ii(b.plane.distanceToPoint(R))&&b.containsPoint(R)?(A&&(A.start.copy(R),A.end.copy(R)),!0):!1}function p(b,x,A){const R=b.degenerateSegment,w=x.a;return R.closestPointToPoint(w,!0,n),w.distanceToSquared(n)<qd?(A&&(A.start.copy(w),A.end.copy(w)),!0):!1}function y(b,x,A,R){if(b.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){const w=b.degenerateSegment,L=x.degenerateSegment,S=s,M=r;w.delta(S),L.delta(M);const T=n.subVectors(L.start,w.start),I=S.x*M.y-S.y*M.x;if(ii(I))return!1;const F=(T.x*M.y-T.y*M.x)/I,k=-(S.x*T.y-S.y*T.x)/I;if(F<0||F>1||k<0||k>1)return!1;const Z=w.start.z+S.z*F,j=L.start.z+M.z*k;return ii(Z-j)?(A&&(A.start.copy(w.start).addScaledVector(S,F),A.end.copy(w.start).addScaledVector(S,F)),!0):!1}else return x.isDegenerateIntoPoint?p(b,x,A):v(x,b,A,R);else{if(b.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(b.a)<qd?(A&&(A.start.copy(b.a),A.end.copy(b.a)),!0):!1:x.isDegenerateIntoSegment?p(x,b,A):m(x,b,A);if(x.isDegenerateIntoPoint)return m(b,x,A);if(x.isDegenerateIntoSegment)return v(b,x,A,R)}}return function(x,A=null,R=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const w=y(this,x,A,R);if(w!==void 0)return w;const L=this.plane,S=x.plane;let M=S.distanceToPoint(this.a),T=S.distanceToPoint(this.b),I=S.distanceToPoint(this.c);ii(M)&&(M=0),ii(T)&&(T=0),ii(I)&&(I=0);const F=M*T,k=M*I;if(F>0&&k>0)return!1;let Z=L.distanceToPoint(x.a),j=L.distanceToPoint(x.b),ae=L.distanceToPoint(x.c);ii(Z)&&(Z=0),ii(j)&&(j=0),ii(ae)&&(ae=0);const Q=Z*j,xe=Z*ae;if(Q>0&&xe>0)return!1;s.copy(L.normal),r.copy(S.normal);const ie=s.cross(r);let V=0,K=Math.abs(ie.x);const oe=Math.abs(ie.y);oe>K&&(K=oe,V=1),Math.abs(ie.z)>K&&(V=2);const W=wE[V],ee=this.a[W],se=this.b[W],Re=this.c[W],Pe=x.a[W],Ne=x.b[W],Be=x.c[W];if(g(this,ee,se,Re,F,k,M,T,I,h,o))return d(this,x,A,R);if(g(x,Pe,Ne,Be,Q,xe,Z,j,ae,u,l))return d(this,x,A,R);if(h.y<h.x){const De=h.y;h.y=h.x,h.x=De,c.copy(o.start),o.start.copy(o.end),o.end.copy(c)}if(u.y<u.x){const De=u.y;u.y=u.x,u.x=De,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(A&&(u.x>h.x?A.start.copy(l.start):A.start.copy(o.start),u.y<h.y?A.end.copy(l.end):A.end.copy(o.end)),!0)}})();yi.prototype.distanceToPoint=(function(){const i=new N;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();yi.prototype.distanceToTriangle=(function(){const i=new N,e=new N,t=["a","b","c"],n=new Ki,s=new Ki;return function(a,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(a,c,!0))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],g=a[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<h&&(h=d,o&&o.copy(i),l&&l.copy(g));const v=this[f];a.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<h&&(h=d,o&&o.copy(v),l&&l.copy(i))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const v=t[g],m=t[(g+1)%3];s.set(a[v],a[m]),Gu(n,s,i,e);const p=i.distanceToSquared(e);p<h&&(h=p,o&&o.copy(i),l&&l.copy(e))}}return Math.sqrt(h)}})();class zn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new N,this.max=new N,this.matrix=new ut,this.invMatrix=new ut,this.points=new Array(8).fill().map(()=>new N),this.satAxes=new Array(3).fill().map(()=>new N),this.satBounds=new Array(3).fill().map(()=>new Zi),this.alignedSatBounds=new Array(3).fill().map(()=>new Zi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}zn.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=s[d];f.x=c?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let c=0;c<3;c++){const h=a[c],u=r[c],d=1<<c,f=s[d];h.subVectors(o,f),u.setFromPoints(h,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();zn.prototype.intersectsBox=(function(){const i=new Zi;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=a[l],h=r[l];if(i.setFromBox(c,t),h.isSeparated(i))return!1}return!0}})();zn.prototype.intersectsTriangle=(function(){const i=new yi,e=new Array(3),t=new Zi,n=new Zi,s=new N;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const f=o[d],g=l[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],g=h[d];if(t.setFromPoints(g,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let g=0;g<4;g++){const v=h[g];if(s.crossVectors(f,v),t.setFromPoints(s,e),n.setFromPoints(s,u),t.isSeparated(n))return!1}}return!0}})();zn.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();zn.prototype.distanceToPoint=(function(){const i=new N;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();zn.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Ki),t=new Array(12).fill().map(()=>new Ki),n=new N,s=new N;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const h=o*o,u=a.min,d=a.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(u,d);const y=p.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(p),c&&c.copy(s),y<h))return Math.sqrt(y)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const b=(m+1)%3,x=(m+2)%3,A=p<<b|y<<x,R=1<<m|p<<b|y<<x,w=f[A],L=f[R];e[v].set(w,L);const M=i[m],T=i[b],I=i[x],F=t[v],k=F.start,Z=F.end;k[M]=u[M],k[T]=p?u[T]:d[T],k[I]=y?u[I]:d[I],Z[M]=d[M],Z[T]=p?u[T]:d[T],Z[I]=y?u[I]:d[I],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?d.x:u.x,s.y=p?d.y:u.y,s.z=y?d.z:u.z,this.closestPointToPoint(s,n);const b=s.distanceToSquared(n);if(b<g&&(g=b,l&&l.copy(n),c&&c.copy(s),b<h))return Math.sqrt(b)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const b=t[y];Gu(p,b,n,s);const x=n.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<h))return Math.sqrt(x)}}return Math.sqrt(g)}})();class RE extends Vu{constructor(){super(()=>new yi)}}const ai=new RE,$r=new N,ic=new N;function CE(i,e,t={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>($r.copy(e).clamp(h.min,h.max),$r.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,$r);const d=e.distanceToSquared($r);return d<o&&(ic.copy($r),o=d,l=u),d<r}}),o===1/0)return null;const c=Math.sqrt(o);return t.point?t.point.copy(ic):t.point=ic.clone(),t.distance=c,t.faceIndex=l,t}const vo=parseInt(Ca)>=169,PE=parseInt(Ca)<=161,Cs=new N,Ps=new N,Ls=new N,xo=new rt,yo=new rt,bo=new rt,jd=new N,Yd=new N,Kd=new N,ea=new N;function LE(i,e,t,n,s,r,a,o){let l;if(r===Rn?l=i.intersectTriangle(n,t,e,!0,s):l=i.intersectTriangle(e,t,n,r!==Xn,s),l===null)return null;const c=i.origin.distanceTo(s);return c<a||c>o?null:{distance:c,point:s.clone()}}function Zd(i,e,t,n,s,r,a,o,l,c,h){Cs.fromBufferAttribute(e,r),Ps.fromBufferAttribute(e,a),Ls.fromBufferAttribute(e,o);const u=LE(i,Cs,Ps,Ls,ea,l,c,h);if(u){if(n){xo.fromBufferAttribute(n,r),yo.fromBufferAttribute(n,a),bo.fromBufferAttribute(n,o),u.uv=new rt;const f=Mn.getInterpolation(ea,Cs,Ps,Ls,xo,yo,bo,u.uv);vo||(u.uv=f)}if(s){xo.fromBufferAttribute(s,r),yo.fromBufferAttribute(s,a),bo.fromBufferAttribute(s,o),u.uv1=new rt;const f=Mn.getInterpolation(ea,Cs,Ps,Ls,xo,yo,bo,u.uv1);vo||(u.uv1=f),PE&&(u.uv2=u.uv1)}if(t){jd.fromBufferAttribute(t,r),Yd.fromBufferAttribute(t,a),Kd.fromBufferAttribute(t,o),u.normal=new N;const f=Mn.getInterpolation(ea,Cs,Ps,Ls,jd,Yd,Kd,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),vo||(u.normal=f)}const d={a:r,b:a,c:o,normal:new N,materialIndex:0};if(Mn.getNormal(Cs,Ps,Ls,d.normal),u.face=d,u.faceIndex=r,vo){const f=new N;Mn.getBarycoord(ea,Cs,Ps,Ls,f),u.barycoord=f}}return u}function Jd(i){return i&&i.isMaterial?i.side:i}function sl(i,e,t,n,s,r,a){const o=n*3;let l=o+0,c=o+1,h=o+2;const{index:u,groups:d}=i;i.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));const{position:f,normal:g,uv:v,uv1:m}=i.attributes;if(Array.isArray(e)){const p=n*3;for(let y=0,b=d.length;y<b;y++){const{start:x,count:A,materialIndex:R}=d[y];if(p>=x&&p<x+A){const w=Jd(e[R]),L=Zd(t,f,g,v,m,l,c,h,w,r,a);if(L)if(L.faceIndex=n,L.face.materialIndex=R,s)s.push(L);else return L}}}else{const p=Jd(e),y=Zd(t,f,g,v,m,l,c,h,p,r,a);if(y)if(y.faceIndex=n,y.face.materialIndex=0,s)s.push(y);else return y}return null}function rn(i,e,t,n){const s=i.a,r=i.b,a=i.c;let o=e,l=e+1,c=e+2;t&&(o=t.getX(o),l=t.getX(l),c=t.getX(c)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function IE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++)sl(l,e,t,h,r,a,o)}function DE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=sl(o,e,t,u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function UE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=h,rn(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function NE(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,g=!1){const v=d*2;if(Qt(v,o)){const m=vn(d,a),p=wn(v,o);let y=1/0,b=1/0,x=1/0,A=-1/0,R=-1/0,w=-1/0;for(let L=3*m,S=3*(m+p);L<S;L++){let M=n[L];const T=s.getX(M),I=s.getY(M),F=s.getZ(M);T<y&&(y=T),T>A&&(A=T),I<b&&(b=I),I>R&&(R=I),F<x&&(x=F),F>w&&(w=F)}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==x||l[d+3]!==A||l[d+4]!==R||l[d+5]!==w?(l[d+0]=y,l[d+1]=b,l[d+2]=x,l[d+3]=A,l[d+4]=R,l[d+5]=w,!0):!1}else{const m=on(d),p=ln(d,a);let y=g,b=!1,x=!1;if(e){if(!y){const M=m/sn+f/$n,T=p/sn+f/$n;b=e.has(M),x=e.has(T),y=!b&&!x}}else b=!0,x=!0;const A=y||b,R=y||x;let w=!1;A&&(w=u(m,f,y));let L=!1;R&&(L=u(p,f,y));const S=w||L;if(S)for(let M=0;M<3;M++){const T=m+M,I=p+M,F=l[T],k=l[T+3],Z=l[I],j=l[I+3];l[d+M]=F<Z?F:Z,l[d+M+3]=k>j?k:j}return S}}}function ci(i,e,t,n,s){let r,a,o,l,c,h;const u=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,g=t.origin.x,v=t.origin.y,m=t.origin.z;let p=e[i],y=e[i+3],b=e[i+1],x=e[i+3+1],A=e[i+2],R=e[i+3+2];return u>=0?(r=(p-g)*u,a=(y-g)*u):(r=(y-g)*u,a=(p-g)*u),d>=0?(o=(b-v)*d,l=(x-v)*d):(o=(x-v)*d,l=(b-v)*d),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),f>=0?(c=(A-m)*f,h=(R-m)*f):(c=(R-m)*f,h=(A-m)*f),r>h||c>a)?!1:((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),r<=s&&a>=n)}function FE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++){let d=c?c[h]:h;sl(l,e,t,d,r,a,o)}}function OE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=sl(o,e,t,l?l[u]:u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function BE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),rn(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function kE(i,e,t,n,s,r,a){Vt.setBuffer(i._roots[e]),ci(0,Vt.float32Array,n,r,a)&&ou(0,i,t,n,s,r,a),Vt.clearBuffer()}function ou(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=Vt,h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);IE(e,t,n,d,f,s,r,a)}else{const d=on(i);ci(d,o,n,r,a)&&ou(d,e,t,n,s,r,a);const f=ln(i,c);ci(f,o,n,r,a)&&ou(f,e,t,n,s,r,a)}}const zE=["x","y","z"];function VE(i,e,t,n,s,r){Vt.setBuffer(i._roots[e]);let a=null;return ci(0,Vt.float32Array,n,s,r)&&(a=lu(0,i,t,n,s,r)),Vt.clearBuffer(),a}function lu(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Vt;let c=i*2;if(Qt(c,o)){const u=vn(i,l),d=wn(c,o);return DE(e,t,n,u,d,s,r)}else{const u=ku(i,l),d=zE[u],g=n.direction[d]>=0;let v,m;g?(v=on(i),m=ln(i,l)):(v=ln(i,l),m=on(i));const y=ci(v,a,n,s,r)?lu(v,e,t,n,s,r):null;if(y){const A=y.point[d];if(g?A<=a[m+u]:A>=a[m+u+3])return y}const x=ci(m,a,n,s,r)?lu(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const Mo=new jt,lr=new yi,cr=new yi,ta=new ut,Qd=new zn,So=new zn;function HE(i,e,t,n){Vt.setBuffer(i._roots[e]);const s=cu(0,i,t,n);return Vt.clearBuffer(),s}function cu(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Vt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Qd.set(t.boundingBox.min,t.boundingBox.max,n),s=Qd),Qt(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,v=vn(i,o),m=wn(l,a);if(ta.copy(n).invert(),t.boundsTree)return Zt(i,r,So),So.matrix.copy(ta),So.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>So.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=v*3,x=(m+v)*3;b<x;b+=3)if(rn(cr,b,u,d),cr.needsUpdate=!0,y.intersectsTriangle(cr))return!0;return!1}});{const p=il(t);for(let y=v*3,b=(m+v)*3;y<b;y+=3){rn(lr,y,u,d),lr.a.applyMatrix4(ta),lr.b.applyMatrix4(ta),lr.c.applyMatrix4(ta),lr.needsUpdate=!0;for(let x=0,A=p*3;x<A;x+=3)if(rn(cr,x,f,g),cr.needsUpdate=!0,lr.intersectsTriangle(cr))return!0}}}else{const h=on(i),u=ln(i,o);return Zt(h,r,Mo),!!(s.intersectsBox(Mo)&&cu(h,e,t,n,s)||(Zt(u,r,Mo),s.intersectsBox(Mo)&&cu(u,e,t,n,s)))}}const Eo=new ut,sc=new zn,na=new zn,GE=new N,WE=new N,XE=new N,qE=new N;function jE(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),sc.set(e.boundingBox.min,e.boundingBox.max,t),sc.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ai.getPrimitive(),f=ai.getPrimitive();let g=GE,v=WE,m=null,p=null;s&&(m=XE,p=qE);let y=1/0,b=null,x=null;return Eo.copy(t).invert(),na.matrix.copy(Eo),i.shapecast({boundsTraverseOrder:A=>sc.distanceToBox(A),intersectsBounds:(A,R,w)=>w<y&&w<a?(R&&(na.min.copy(A.min),na.max.copy(A.max),na.needsUpdate=!0),!0):!1,intersectsRange:(A,R)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:L=>na.distanceToBox(L),intersectsBounds:(L,S,M)=>M<y&&M<a,intersectsRange:(L,S)=>{for(let M=L,T=L+S;M<T;M++){rn(f,3*M,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let I=A,F=A+R;I<F;I++){rn(d,3*I,c,l),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<y&&(v.copy(g),p&&p.copy(m),y=k,b=I,x=M),k<r)return!0}}}});{const w=il(e);for(let L=0,S=w;L<S;L++){rn(f,3*L,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=A,T=A+R;M<T;M++){rn(d,3*M,c,l),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<y&&(v.copy(g),p&&p.copy(m),y=I,b=M,x=L),I<r)return!0}}}}}),ai.releasePrimitive(d),ai.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Eo),v.applyMatrix4(Eo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function YE(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,g=!1){const v=d*2;if(Qt(v,o)){const m=vn(d,a),p=wn(v,o);let y=1/0,b=1/0,x=1/0,A=-1/0,R=-1/0,w=-1/0;for(let L=m,S=m+p;L<S;L++){const M=3*i.resolveTriangleIndex(L);for(let T=0;T<3;T++){let I=M+T;I=n?n[I]:I;const F=s.getX(I),k=s.getY(I),Z=s.getZ(I);F<y&&(y=F),F>A&&(A=F),k<b&&(b=k),k>R&&(R=k),Z<x&&(x=Z),Z>w&&(w=Z)}}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==x||l[d+3]!==A||l[d+4]!==R||l[d+5]!==w?(l[d+0]=y,l[d+1]=b,l[d+2]=x,l[d+3]=A,l[d+4]=R,l[d+5]=w,!0):!1}else{const m=on(d),p=ln(d,a);let y=g,b=!1,x=!1;if(e){if(!y){const M=m/sn+f/$n,T=p/sn+f/$n;b=e.has(M),x=e.has(T),y=!b&&!x}}else b=!0,x=!0;const A=y||b,R=y||x;let w=!1;A&&(w=u(m,f,y));let L=!1;R&&(L=u(p,f,y));const S=w||L;if(S)for(let M=0;M<3;M++){const T=m+M,I=p+M,F=l[T],k=l[T+3],Z=l[I],j=l[I+3];l[d+M]=F<Z?F:Z,l[d+M+3]=k>j?k:j}return S}}}function KE(i,e,t,n,s,r,a){Vt.setBuffer(i._roots[e]),ci(0,Vt.float32Array,n,r,a)&&uu(0,i,t,n,s,r,a),Vt.clearBuffer()}function uu(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=Vt,h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);FE(e,t,n,d,f,s,r,a)}else{const d=on(i);ci(d,o,n,r,a)&&uu(d,e,t,n,s,r,a);const f=ln(i,c);ci(f,o,n,r,a)&&uu(f,e,t,n,s,r,a)}}const ZE=["x","y","z"];function JE(i,e,t,n,s,r){Vt.setBuffer(i._roots[e]);let a=null;return ci(0,Vt.float32Array,n,s,r)&&(a=hu(0,i,t,n,s,r)),Vt.clearBuffer(),a}function hu(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=Vt;let c=i*2;if(Qt(c,o)){const u=vn(i,l),d=wn(c,o);return OE(e,t,n,u,d,s,r)}else{const u=ku(i,l),d=ZE[u],g=n.direction[d]>=0;let v,m;g?(v=on(i),m=ln(i,l)):(v=ln(i,l),m=on(i));const y=ci(v,a,n,s,r)?hu(v,e,t,n,s,r):null;if(y){const A=y.point[d];if(g?A<=a[m+u]:A>=a[m+u+3])return y}const x=ci(m,a,n,s,r)?hu(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const To=new jt,ur=new yi,hr=new yi,ia=new ut,$d=new zn,Ao=new zn;function QE(i,e,t,n){Vt.setBuffer(i._roots[e]);const s=du(0,i,t,n);return Vt.clearBuffer(),s}function du(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=Vt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),$d.set(t.boundingBox.min,t.boundingBox.max,n),s=$d),Qt(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,v=vn(i,o),m=wn(l,a);if(ia.copy(n).invert(),t.boundsTree)return Zt(i,r,Ao),Ao.matrix.copy(ia),Ao.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Ao.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=v,x=m+v;b<x;b++)if(rn(hr,3*e.resolveTriangleIndex(b),u,d),hr.needsUpdate=!0,y.intersectsTriangle(hr))return!0;return!1}});{const p=il(t);for(let y=v,b=m+v;y<b;y++){const x=e.resolveTriangleIndex(y);rn(ur,3*x,u,d),ur.a.applyMatrix4(ia),ur.b.applyMatrix4(ia),ur.c.applyMatrix4(ia),ur.needsUpdate=!0;for(let A=0,R=p*3;A<R;A+=3)if(rn(hr,A,f,g),hr.needsUpdate=!0,ur.intersectsTriangle(hr))return!0}}}else{const h=on(i),u=ln(i,o);return Zt(h,r,To),!!(s.intersectsBox(To)&&du(h,e,t,n,s)||(Zt(u,r,To),s.intersectsBox(To)&&du(u,e,t,n,s)))}}const wo=new ut,rc=new zn,sa=new zn,$E=new N,eT=new N,tT=new N,nT=new N;function iT(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),rc.set(e.boundingBox.min,e.boundingBox.max,t),rc.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ai.getPrimitive(),f=ai.getPrimitive();let g=$E,v=eT,m=null,p=null;s&&(m=tT,p=nT);let y=1/0,b=null,x=null;return wo.copy(t).invert(),sa.matrix.copy(wo),i.shapecast({boundsTraverseOrder:A=>rc.distanceToBox(A),intersectsBounds:(A,R,w)=>w<y&&w<a?(R&&(sa.min.copy(A.min),sa.max.copy(A.max),sa.needsUpdate=!0),!0):!1,intersectsRange:(A,R)=>{if(e.boundsTree){const w=e.boundsTree;return w.shapecast({boundsTraverseOrder:L=>sa.distanceToBox(L),intersectsBounds:(L,S,M)=>M<y&&M<a,intersectsRange:(L,S)=>{for(let M=L,T=L+S;M<T;M++){const I=w.resolveTriangleIndex(M);rn(f,3*I,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let F=A,k=A+R;F<k;F++){const Z=i.resolveTriangleIndex(F);rn(d,3*Z,c,l),d.needsUpdate=!0;const j=d.distanceToTriangle(f,g,m);if(j<y&&(v.copy(g),p&&p.copy(m),y=j,b=F,x=M),j<r)return!0}}}})}else{const w=il(e);for(let L=0,S=w;L<S;L++){rn(f,3*L,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=A,T=A+R;M<T;M++){const I=i.resolveTriangleIndex(M);rn(d,3*I,c,l),d.needsUpdate=!0;const F=d.distanceToTriangle(f,g,m);if(F<y&&(v.copy(g),p&&p.copy(m),y=F,b=M,x=L),F<r)return!0}}}}}),ai.releasePrimitive(d),ai.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(wo),v.applyMatrix4(wo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function ef(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}const Ro=new zn,Co=new ks,tf=new N,nf=new ut,sf=new N,ac=["getX","getY","getZ"];class Ko extends EE{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=s.map(l=>l.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=s,o.index=a?a.array:null,o.indirectBuffer=r),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const o=new Ko(t,{...n,[Bu]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const h=new cn(e.index,1,!1);t.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o;function l(c){for(let h=0;h<c.length;h++){const u=c[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let g=0,v=u.byteLength/$n;g<v;g++){const m=sn*g,p=2*m;Qt(p,f)||(d[m+6]=d[m+6]/sn-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,c=(r?r[e]:e)*3;let h=c+0,u=c+1,d=c+2;o&&(h=o[h],u=o[u],d=o[d]);for(let f=0;f<3;f++){const g=a[ac[f]](h),v=a[ac[f]](u),m=a[ac[f]](d);let p=g;v<p&&(p=v),m<p&&(p=m);let y=g;v>y&&(y=v),m>y&&(y=m),t[n+f]=p,t[n+f+3]=y}return t}computePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,l=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=a.array,h=a.offset||0;let u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=e,v=e+t;g<v;g++){const p=(r?r[g]:g)*3,y=(g-f)*6;let b=p+0,x=p+1,A=p+2;o&&(b=o[b],x=o[x],A=o[A]),l||(b=b*u+h,x=x*u+h,A=A*u+h);for(let R=0;R<3;R++){let w,L,S;l?(w=a[d[R]](b),L=a[d[R]](x),S=a[d[R]](A)):(w=c[b+R],L=c[x+R],S=c[A+R]);let M=w;L<M&&(M=L),S<M&&(M=S);let T=w;L>T&&(T=L),S>T&&(T=S);const I=(T-M)/2,F=R*2;n[y+F+0]=M+I,n[y+F+1]=I+(Math.abs(M)+I)*Bo}}return n}raycastObject3D(e,t,n=[]){const{material:s}=e;if(s===void 0)return;nf.copy(e.matrixWorld).invert(),Co.copy(t.ray).applyMatrix4(nf),sf.setFromMatrixScale(e.matrixWorld),tf.copy(Co.direction).multiply(sf);const r=tf.length(),a=t.near/r,o=t.far/r;if(t.firstHitOnly===!0){let l=this.raycastFirst(Co,s,a,o);l=ef(l,e,t),l&&n.push(l)}else{const l=this.raycast(Co,s,a,o);for(let c=0,h=l.length;c<h;c++){const u=ef(l[c],e,t);u&&n.push(u)}}return n}refit(e=null){return(this.indirect?YE:NE)(this,e)}raycast(e,t=li,n=0,s=1/0){const r=this._roots,a=[],o=this.indirect?KE:kE;for(let l=0,c=r.length;l<c;l++)o(this,l,t,e,a,n,s);return a}raycastFirst(e,t=li,n=0,s=1/0){const r=this._roots;let a=null;const o=this.indirect?JE:VE;for(let l=0,c=r.length;l<c;l++){const h=o(this,l,t,e,n,s);h!=null&&(a==null||h.distance<a.distance)&&(a=h)}return a}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?QE:HE;for(let a=0,o=s.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=ai.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?BE:UE});return ai.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=ai.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const v=this.resolveTriangleIndex(g);rn(a,v*3,o,l)}:g=>{rn(a,g*3,o,l)},h=ai.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const v=e.resolveTriangleIndex(g);rn(h,v*3,u,d)}:g=>{rn(h,g*3,u,d)};if(r){if(!(e instanceof Ko))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(v,m,p,y,b,x,A,R)=>{for(let w=p,L=p+y;w<L;w++){f(w),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(c(S),a.needsUpdate=!0,r(a,h,S,w,b,x,A,R))return!0}return!1};if(s){const v=s;s=function(m,p,y,b,x,A,R,w){return v(m,p,y,b,x,A,R,w)?!0:g(m,p,y,b,x,A,R,w)}}else s=g}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return Ro.set(e.min,e.max,t),Ro.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ro.intersectsBox(n),intersectsTriangle:n=>Ro.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){return(this.indirect?iT:jE)(this,e,t,n,s,r,a)}closestPointToPoint(e,t={},n=0,s=1/0){return CE(this,e,t,n,s)}}const fr={Mesh:Lt.prototype.raycast,Line:La.prototype.raycast,LineSegments:Cu.prototype.raycast,LineLoop:Pu.prototype.raycast,Points:Lu.prototype.raycast,BatchedMesh:LM.prototype.raycast},bn=new Lt,Po=[];function sT(i,e){if(this.isBatchedMesh)rT.call(this,i,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,i,e);else{let n;if(this instanceof Lt)n=fr.Mesh;else if(this instanceof Cu)n=fr.LineSegments;else if(this instanceof Pu)n=fr.LineLoop;else if(this instanceof La)n=fr.Line;else if(this instanceof Lu)n=fr.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,e)}}}function rT(i,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;bn.material=this.material,bn.geometry=this.geometry;const a=bn.geometry.boundsTree,o=bn.geometry.drawRange;bn.geometry.boundingSphere===null&&(bn.geometry.boundingSphere=new Bn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const h=n[l].geometryIndex;if(bn.geometry.boundsTree=t[h],this.getMatrixAt(l,bn.matrixWorld).premultiply(r),!bn.geometry.boundsTree){this.getBoundingBoxAt(h,bn.geometry.boundingBox),this.getBoundingSphereAt(h,bn.geometry.boundingSphere);const u=s[h];bn.geometry.setDrawRange(u.start,u.count)}bn.raycast(i,Po);for(let u=0,d=Po.length;u<d;u++){const f=Po[u];f.object=this,f.batchId=l,e.push(f)}Po.length=0}bn.geometry.boundsTree=a,bn.geometry.drawRange=o,bn.material=null,bn.geometry=null}else fr.BatchedMesh.call(this,i,e)}function aT(i={}){const{type:e=Ko}=i;return this.boundsTree=new e(this,i),this.boundsTree}function oT(){this.boundsTree=null}const dr={radial:.55,hemi:25,drop:18};function lT(i,e,t,n,s,r,a=1){const o=Math.max(0,Math.min(1,s));return r.x=(i.x-e.x)*o*dr.radial,r.y=(i.y-e.y)*o*dr.radial,r.z=(i.z-e.z)*o*dr.radial,t==="L"?r.x+=o*dr.hemi*a:t==="R"&&(r.x-=o*dr.hemi*a),(n==="cerebellum"||n==="brainstem")&&(r.y-=o*dr.drop*a),r}var cT=Ae('<div class="stage svelte-v5k0y"><div class="tip svelte-v5k0y" hidden="" role="presentation"><span class="tt"></span><span class="ts svelte-v5k0y"></span></div> <div class="pin svelte-v5k0y" aria-hidden="true"><span class="lbl svelte-v5k0y"></span><span class="stem svelte-v5k0y"></span><span class="dotp svelte-v5k0y"></span></div></div>');function uT(i,e){Cn(e,!0);let t=gr(e,"framing",3,"head");const n=t()==="head";let s,r,a,o,l,c;const h=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let u=null,d,f,g,v=null,m=null,p=null;const y=1e6,b=new _i(new N(0,-1,0),y),x=[b],A=new N(1,1,1);let R=100,w=1,L=!0,S=!1;const M=new Map,T=[],I=new Map,F=new Map,k=[],Z=new Map,j=[],ae=new lt,Q=new lt("#5b6476"),xe=new N,ie={x:0,y:0,z:0},V={x:0,y:0,z:0},K=new oS,oe=new rt,H=[],W=new N,ee=new lt(lm),se=new lt(cm),Re=new Map(Object.entries(am).map(([he,pe])=>[he,new lt(pe)])),Pe=new Map,Ne=he=>{let pe=Pe.get(he);return pe||Pe.set(he,pe=new lt(bf[he]??uc)),pe},Be=Le(()=>e.store.s),De=Le(()=>_(Be).colorBy),He=Le(()=>_(Be).sel),O=Le(()=>_(Be).hover),Qe=Le(()=>_(Be).xray),je=Le(()=>_(Be).isolate),qe=Le(()=>_(Be).show),Oe=Le(()=>_(Be).explode),st=Le(()=>_(Be).cut),we=Le(()=>_(Be).cutAxis),P=Le(()=>_(Be).rotate),E=Le(()=>!!_(Be).quiz),D=Le(()=>_(De).startsWith("data:")?e.dataMaps.find(he=>`data:${he.key}`===_(De))??null:null);let X=At(!1);Zn(()=>{_(De),_(He),_(O),_(Qe),_(je),_(qe),_(D),e.store.colors,_(X),We()}),Zn(()=>{_(Oe),_(X),$e()}),Zn(()=>{_(st),_(we),_(X),B()}),Zn(()=>{const he=_(P);g&&(g.autoRotate=he,g.autoRotateSpeed=1.2,L=!0)});const ce={left:[1,.12,0],right:[-1,.12,0],front:[0,.1,1],back:[0,.15,-1],top:[0,1,.001],below:[0,-1,.001]},le={head:[.75,.25,.6],body:[.22,.1,1],spine:[1,.06,.1]},ze=()=>Math.max(1,1.25/((f==null?void 0:f.aspect)||1)),me={r:new N,u:new N,d:new N,p:new N};function Se(he,pe=A,Ie=1.12){const{r:ke,u:be,d:ot,p:et}=me;ot.copy(he).normalize(),be.set(0,1,0),Math.abs(ot.dot(be))>.98&&be.set(0,0,-1),ke.crossVectors(be,ot).normalize(),be.crossVectors(ot,ke).normalize();let Dt=0,Rt=0,Ht=0;for(let dt=0;dt<8;dt++)et.set((dt&1?.5:-.5)*pe.x,(dt&2?.5:-.5)*pe.y,(dt&4?.5:-.5)*pe.z),Dt=Math.max(Dt,Math.abs(et.dot(ke))),Rt=Math.max(Rt,Math.abs(et.dot(be))),Ht=Math.max(Ht,Math.abs(et.dot(ot)));const $t=Math.tan(Su.degToRad(((f==null?void 0:f.fov)??32)/2)),bt=(f==null?void 0:f.aspect)||1;return Math.max(Rt/$t,Dt/($t*bt))*Ie+Ht}function Ce(he){if(he==="inside"){n&&ve(new N,new N(-1,.1,0),R*4.4);return}const pe=new N(...ce[he]);n?ve(new N,pe,R*3.4):ve(new N,pe,Se(pe),!0)}function q(){const he=new N(...le[t()]);n?ve(new N,he,R*3.4):ve(new N,he,Se(he),!0)}function fe(he,pe){if(!he)return q();if(!n)return ye(he,pe);const Ie=ht(he);if(!Ie)return;const ke=pe?new N(...pe):Ie.clone().sub(new N(0,Ie.y*.2,0));ke.length()<R*.15&&ke.set(.3,.4,1),ve(Ie.multiplyScalar(pe?.3:.35),ke.normalize(),R*3.7)}function ye(he,pe){const Ie=Ze(he);if(!Ie)return;const ke=Ie.getCenter(new N),be=Ie.getSize(new N),ot=new N(...pe??le[t()]);!pe&&t()==="body"&&(ot.x+=Math.sign(ke.x)*.35);const et=Math.min(Se(ot,A),Math.max(Se(ot,be,1.9),R*.35));ve(ke,ot.normalize(),et,!0)}function Ue(he="medmereport-3d.png"){if(!u)return;u.render(d,f);const pe=document.createElement("a");pe.download=he,pe.href=u.domElement.toDataURL("image/png"),pe.click()}function ge(he,pe){if(_(De)==="natural")return pe.copy(Re.get(he.lobe)??(he.inner?se:ee));if(_(De)==="lobes")return pe.copy(Ne(he.lobe));if(_(D)){const ke=G_(_(D),he.key);return pe.setRGB(ke[0]/255,ke[1]/255,ke[2]/255,nn)}const Ie=e.store.colors[he.structure];return Ie?pe.setRGB(Ie[0]/255,Ie[1]/255,Ie[2]/255,nn):pe.set(uc)}const Fe=(he,pe)=>!!pe&&(pe.type==="lobe"?he.lobe===pe.id:pe.type==="region"&&he.key===pe.id);function We(){var pe;if(!_(X))return;const he=!!_(He)&&_(He).type!=="vessel";j.length=0;for(const Ie of T){const ke=Ie.mat,be=Fe(Ie,_(He)),ot=Fe(Ie,_(O));ge(Ie,ae),he&&!be&&ae.lerp(Q,.55),ke.color.copy(ae),ke.emissive.set(be?1013358:ot?3359061:0),ke.emissiveIntensity=be?.55:ot?.6:0;const et=_(Qe)&&(!Ie.inner||F_.has(Ie.layer))&&!be||_(je)&&he&&!be;ke.transparent!==et&&(ke.transparent=et,ke.needsUpdate=!0),ke.opacity=et?_(je)&&he?.06:.13:1,ke.depthWrite=!et;const Dt=_(qe)[Ie.layer]!==!1;for(const Rt of Ie.meshes)Rt.visible=Dt,Rt.renderOrder=et?5:0,Dt&&!et&&j.push(Rt)}for(const Ie of k){const ke=!!_(qe)[Ie.layer];if(Ie.kind==="vessel"&&Ie.mat.emissive.set(((pe=_(He))==null?void 0:pe.type)==="vessel"&&_(He).id===Ie.key?8330525:3866640),Ie.kind==="bone"&&!n){const be=_(Qe)||_(je)&&he;Ie.mat.transparent!==be&&(Ie.mat.transparent=be,Ie.mat.needsUpdate=!0),Ie.mat.opacity=be?.13:1,Ie.mat.depthWrite=!be;for(const ot of Ie.meshes)ot.renderOrder=be?5:0}for(const be of Ie.meshes)be.visible=ke,ke&&Ie.kind==="vessel"&&j.push(be)}L=!0}function $e(){if(_(X)){for(const he of T){lT(he.center,V,he.hemi,he.layer,_(Oe),ie,w);for(const pe of he.meshes)pe.position.copy(F.get(pe)).add(xe.set(ie.x,ie.y,ie.z))}L=!0}}function B(){if(!_(X))return;const he={x:A.x,y:A.y,z:A.z}[_(we)]*.52;b.normal.set(_(we)==="x"?-1:0,_(we)==="y"?-1:0,_(we)==="z"?-1:0),b.constant=_(st)>=.999?y:-he+2*he*_(st),L=!0}let Ee=null;const re=new N,te=new N;function ve(he,pe,Ie,ke=!1){if(!f)return;const be=g.target.clone(),ot=f.position.clone(),et=pe?pe.clone().normalize():ot.clone().sub(be).normalize(),Dt=Ie!==null?ke?Ie:Ie*ze():ot.distanceTo(be),Rt=he.clone().add(et.multiplyScalar(Dt));if(h){g.target.copy(he),f.position.copy(Rt),Ee=null,L=!0;return}Ee={t0:be,p0:ot,t1:he.clone(),p1:Rt,start:performance.now(),dur:900}}function Te(he){if(!Ee)return;let pe=Math.min(1,(he-Ee.start)/Ee.dur);pe=pe<.5?4*pe*pe*pe:1-Math.pow(-2*pe+2,3)/2,g.target.lerpVectors(Ee.t0,Ee.t1,pe),re.copy(Ee.p0).sub(Ee.t0),te.copy(Ee.p1).sub(Ee.t1);const Ie=re.length()+(te.length()-re.length())*pe;re.normalize().lerp(te.normalize(),pe).normalize().multiplyScalar(Ie),f.position.copy(g.target).add(re),pe>=1&&(Ee=null)}function Ze(he){const pe=new jt;if(he.type==="vessel")k.forEach(Ie=>{Ie.key===he.id&&Ie.meshes.forEach(ke=>pe.expandByObject(ke))});else for(const Ie of T)Fe(Ie,he)&&Ie.meshes.forEach(ke=>pe.expandByObject(ke));return pe.isEmpty()?null:pe}const ht=he=>{var pe;return((pe=Ze(he))==null?void 0:pe.getCenter(new N))??null};let ft=0,at=0,Ct=!1,St=!1,yn=!1,dn=null;function Pt(he,pe){if(!u)return null;const Ie=u.domElement.getBoundingClientRect();oe.set((he-Ie.left)/Ie.width*2-1,-((pe-Ie.top)/Ie.height)*2+1),K.setFromCamera(oe,f),H.length=0;const ke=b.constant>=y;K.firstHitOnly=ke,K.intersectObjects(j,!1,H);for(const be of H)if(ke||b.distanceToPoint(be.point)>=-.5)return be.object;return null}function fn(he){if(!he)return null;const pe=Z.get(he);if(pe)return{type:"vessel",id:pe.key};const Ie=I.get(he);return Ie?_(Be).pickBy==="lobe"?{type:"lobe",id:Ie.lobe}:{type:"region",id:Ie.key}:null}function ti(){if(!St||yn)return;St=!1;const he=Ct?fn(Pt(ft,at)):null;if(e.store.dispatch({type:"hover",sel:he}),he&&!_(E)){const pe=e.label(he);a.textContent=pe.title,o.textContent=pe.sub??"";const Ie=s.getBoundingClientRect();r.style.transform=`translate(${ft-Ie.left+14}px, ${at-Ie.top+14}px)`,r.hidden=!1,u.domElement.style.cursor="pointer"}else r.hidden=!0,u&&(u.domElement.style.cursor="")}function ui(he){ft=he.clientX,at=he.clientY,Ct=!0,St=!0}function Li(){Ct=!1,St=!0,yn=!1}function vs(he){dn=[he.clientX,he.clientY],yn=!0,r.hidden=!0,_(Be).rotate&&e.store.dispatch({type:"rotate",on:!1})}function gt(he){if(yn=!1,St=!0,!dn||Math.hypot(he.clientX-dn[0],he.clientY-dn[1])>5){dn=null;return}dn=null;const pe=Pt(he.clientX,he.clientY);if(_(Be).quiz){const Ie=pe?I.get(pe):null;Ie&&e.store.dispatch({type:"quizAnswer",picked:Ie.key});return}e.store.dispatch({type:"select",sel:fn(pe)})}function Xt(he){if(_(Be).quiz)return;const pe=fn(Pt(he.clientX,he.clientY));pe&&(e.store.dispatch({type:"select",sel:pe}),fe(e.store.s.sel))}let Jt=!1;function It(){const he=_(He),pe=(he==null?void 0:he.type)==="region"&&!_(E)?M.get(he.id):null,Ie=pe==null?void 0:pe.meshes[0];let ke=!1;if(pe&&Ie&&Ie.visible&&u&&(W.copy(pe.anchor).applyMatrix4(Ie.matrixWorld).project(f),W.z<1&&Math.abs(W.x)<1.2&&Math.abs(W.y)<1.2)){const be=u.domElement.clientWidth,ot=u.domElement.clientHeight;l.style.transform=`translate(${(W.x*.5+.5)*be}px, ${(-W.y*.5+.5)*ot}px) translate(-50%, -100%)`,ke=!0}ke!==Jt&&(l.style.opacity=ke?"1":"0",Jt=ke)}Zn(()=>{const he=_(He);c&&(c.textContent=(he==null?void 0:he.type)==="region"?e.label(he).title:"")});function Mi(){return new jn({color:16777215,roughness:.58,metalness:0,clearcoat:.25,clearcoatRoughness:.45,sheen:.35,sheenRoughness:.6,sheenColor:new lt("#ffd6e0"),side:Xn,clippingPlanes:x})}async function Si(he,pe){var Dt,Rt;const Ie=await fetch(he,{credentials:"same-origin",signal:pe});if(!Ie.ok)throw new Error(`HTTP ${Ie.status}`);const ke=+(Ie.headers.get("content-length")??0);if(!Ie.body||!ke)return(Dt=e.onprogress)==null||Dt.call(e,null),Ie.arrayBuffer();const be=Ie.body.getReader(),ot=new Uint8Array(ke);let et=0;for(;;){const{done:Ht,value:$t}=await be.read();if(Ht)break;if(et+$t.length>ot.length){const bt=new Uint8Array(Math.max(ot.length*2,et+$t.length));return bt.set(ot.subarray(0,et)),C(be,bt,et,$t)}ot.set($t,et),et+=$t.length,(Rt=e.onprogress)==null||Rt.call(e,Math.round(et/ke*100))}return ot.buffer.slice(0,et)}async function C(he,pe,Ie,ke){const be=[pe.subarray(0,Ie),ke];for(;;){const{done:Rt,value:Ht}=await he.read();if(Rt)break;be.push(Ht)}const ot=be.reduce((Rt,Ht)=>Rt+Ht.length,0),et=new Uint8Array(ot);let Dt=0;for(const Rt of be)et.set(Rt,Dt),Dt+=Rt.length;return et.buffer}function Y(he){try{const pe=new DataView(he);if(pe.getUint32(0,!0)!==1179937895)return!1;const Ie=pe.getUint32(12,!0),ke=new TextDecoder().decode(new Uint8Array(he,20,Ie));return ke.includes("EXT_meshopt_compression")||ke.includes("KHR_meshopt_compression")}catch{return!1}}function ue(he){var Wu,Xu,qu;const pe=new Map((((Wu=e.regions)==null?void 0:Wu.regions)??[]).map(Yt=>[Yt.key,Yt])),Ie=new Set((((Xu=e.regions)==null?void 0:Xu.regions)??[]).map(Yt=>Yt.structure)),ke=Yt=>Ie.has(Yt)||_f(Yt),be=n?void 0:"organ";p=he,d.add(p);const ot=()=>new jn({color:"#e11d48",roughness:.32,clearcoat:.8,clearcoatRoughness:.2,emissive:"#3b0010",clippingPlanes:x,side:Xn}),et=new jn({color:"#cbd5e1",roughness:.6,transparent:!0,opacity:.1,depthWrite:!1,side:li,clippingPlanes:x}),Dt=new jn({color:"#e7e2d3",roughness:.7,clippingPlanes:x,side:Xn}),Rt=new Map;let Ht=0,$t=0;const bt={regions:new Map,vessels:new Map};p.traverse(Yt=>{var Da,ju;if(!Yt.isMesh)return;const en=Yt;let Qi=en,Nt=null;for(;Qi&&!(Nt=qp(Qi.name,ke));)Qi=Qi.parent;const Hn=en.geometry;if(Hn.attributes.normal||Hn.computeVertexNormals(),Ht+=(Hn.index?Hn.index.count:Hn.attributes.position.count)/3,$t++,(ju=(Da=en.material)==null?void 0:Da.dispose)==null||ju.call(Da),!Nt){en.visible=!1;return}if(Nt.kind!=="region"){const Vr=Nt.kind==="skin"?"skin":Nt.kind==="bone"?"bone":/neck/i.test(Nt.name)?"neck":"vessels";let xs=Rt.get(Nt.key);xs||(xs={key:Nt.key,kind:Nt.kind,layer:Vr,mat:Nt.kind==="skin"?et:Nt.kind==="bone"?Dt:ot(),meshes:[]},Rt.set(Nt.key,xs),k.push(xs),Nt.kind==="vessel"&&bt.vessels.set(Nt.key,Vr)),en.material=xs.mat,Nt.kind==="skin"&&(en.renderOrder=10),xs.meshes.push(en),Z.set(en,xs);return}const Ii=pe.get(Nt.key);let Di=M.get(Nt.key);if(!Di){const Vr=e.lobeOf(Nt.structure)||zo(Nt.structure);Di={key:Nt.key,hemi:Nt.hemi,structure:Nt.structure,lobe:Vr,layer:em(Nt.structure,Nt.hemi,Ii==null?void 0:Ii.group,be),inner:(Ii==null?void 0:Ii.inner)??$p(Nt.structure),mat:Mi(),meshes:[],center:new N,anchor:new N},M.set(Nt.key,Di),T.push(Di),bt.regions.set(Nt.key,{layer:Di.layer,inner:Di.inner,lobe:Vr})}en.material=Di.mat,Di.meshes.push(en),I.set(en,Di)});const dt=new jt;T.length?T.forEach(Yt=>Yt.meshes.forEach(en=>dt.expandByObject(en))):dt.setFromObject(p),dt.isEmpty()&&dt.set(new N(-50,-50,-50),new N(50,50,50));const Ft=dt.getCenter(new N);dt.getSize(A),R=Math.max(40,A.length()/2),p.position.sub(Ft),p.updateMatrixWorld(!0);const Ot=new jt,pn=new N,Vn=new N,Ji=new ut;for(const Yt of T){Ot.makeEmpty(),Yt.meshes.forEach(Hn=>{Ot.expandByObject(Hn),F.set(Hn,Hn.position.clone())}),Ot.getCenter(Yt.center);const en=Yt.meshes[0],Qi=en.geometry.attributes.position;if(pn.copy(Yt.center),Yt.inner||pn.lengthSq()<1){Ji.copy(en.matrixWorld).invert(),Yt.anchor.copy(Yt.center).applyMatrix4(Ji);continue}pn.normalize();let Nt=-1/0;for(let Hn=0;Hn<Qi.count;Hn++){Vn.fromBufferAttribute(Qi,Hn).applyMatrix4(en.matrixWorld);const Ii=Vn.dot(pn);Ii>Nt&&(Nt=Ii,Yt.anchor.fromBufferAttribute(Qi,Hn))}}for(const Yt of k)Yt.meshes.forEach(en=>F.set(en,en.position.clone()));w=n?1:Math.max(1,R/125),f.near=Math.max(.5,R/100),f.far=R*40,f.updateProjectionMatrix(),g.minDistance=n?R*.7:R*.12,g.maxDistance=R*11,m&&(m.scale.setScalar(R/125),m.position.y=-A.y/2-R*(n?.24:.06)),f.position.set(R*3.4*.72,R*1.3,R*2.6),g.target.set(0,0,0),g.update(),e.store.init(bt,[...Rt.values()].map(Yt=>Yt.layer),{framing:t(),regions:e.regions}),Je(X,!0),q(),(qu=e.onloaded)==null||qu.call(e,{triangles:Math.round(Ht),meshes:$t}),Ve()}const de=2e3;let J=0;function Ve(){const he=[];for(const be of T)for(const ot of be.meshes)he.push(ot);for(const be of k)if(be.kind==="vessel")for(const ot of be.meshes)he.push(ot);const pe=be=>(be.geometry.index?be.geometry.index.count:be.geometry.attributes.position.count)/3,Ie=he.filter(be=>pe(be)>=de).sort((be,ot)=>pe(ot)-pe(be));for(const be of he)be.raycast=sT;const ke=()=>{const be=performance.now();for(;Ie.length&&performance.now()-be<12;){const ot=Ie.shift().geometry;ot.boundsTree||aT.call(ot,{maxLeafSize:10})}Ie.length&&!S&&(J=window.setTimeout(ke,16))};J=window.setTimeout(ke,50)}Cp(()=>{var $t,bt;const he=new AbortController;try{u=new vM({antialias:!0,powerPreference:"high-performance"})}catch{($t=e.onerror)==null||$t.call(e,"webgl");return}u.setPixelRatio(Math.min(devicePixelRatio||1,2)),u.toneMapping=Pf,u.toneMappingExposure=.82,u.outputColorSpace=nn,u.localClippingEnabled=!0;const pe=u.domElement;pe.setAttribute("role","img"),pe.setAttribute("aria-label",e.ariaLabel),pe.tabIndex=-1,s.prepend(pe),d=new ap;const Ie=new Jc(u),ke=new sE;v=Ie.fromScene(ke,.04).texture,ke.traverse(dt=>{const Ft=dt;Ft.isMesh&&(Ft.geometry.dispose(),Ft.material.dispose())}),Ie.dispose(),d.environment=v,d.environmentIntensity=.55,f=new Nn(32,1,1,5e3),g=new uS(f,pe),g.enableDamping=!0,g.dampingFactor=.08,g.rotateSpeed=.8,g.addEventListener("change",()=>L=!0),g.addEventListener("start",()=>{Ee=null});const be=new tu(16777215,1.6);be.position.set(-200,300,400),d.add(be);const ot=new tu(8965375,1.2);ot.position.set(300,-100,-400),d.add(ot),d.add(new qM(14674175,1708064,.5)),f.add(new Uu(16777215,.6,0,0)),d.add(f),m=new Lt(new Iu(170,64),new Yi({transparent:!0,depthWrite:!1,uniforms:{c:{value:new lt("#2dd4bf")}},vertexShader:"varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying vec2 vU; void main(){ float d=distance(vU,vec2(.5))*2.; float a=smoothstep(1.,0.,d)*.16 + smoothstep(.02,0.,abs(d-.82))*.25; gl_FragColor=vec4(c,a); }"})),m.rotation.x=-Math.PI/2,d.add(m);const et=()=>{if(!u)return;const dt=Math.max(1,s.clientWidth),Ft=Math.max(1,s.clientHeight);u.setSize(dt,Ft),f.aspect=dt/Ft,f.updateProjectionMatrix(),L=!0},Dt=new ResizeObserver(et);Dt.observe(s),et(),pe.addEventListener("pointermove",ui),pe.addEventListener("pointerleave",Li),pe.addEventListener("pointerdown",vs),pe.addEventListener("pointerup",gt),pe.addEventListener("dblclick",Xt);const Rt=dt=>{var Ft;dt.preventDefault(),(Ft=e.onerror)==null||Ft.call(e,"context")};pe.addEventListener("webglcontextlost",Rt);const Ht=()=>!!_(He)&&_(He).type!=="vessel"&&!h;return u.setAnimationLoop(dt=>{if(Ee&&(Te(dt),L=!0),g.update()&&(L=!0),ti(),Ht()){const Ft=.45+Math.sin(dt/380)*.15;for(const Ot of T)Fe(Ot,_(He))&&(Ot.mat.emissiveIntensity=Ft);L=!0}L&&u&&(L=!1,u.render(d,f),It())}),(bt=e.onprogress)==null||bt.call(e,0),Si(e.url,he.signal).then(async dt=>{const Ft=new SS;if(Y(dt)){const{MeshoptDecoder:Ot}=await Pp(async()=>{const{MeshoptDecoder:pn}=await import("./meshopt_decoder.module-BbCP70j-.js");return{MeshoptDecoder:pn}},[]);Ft.setMeshoptDecoder(Ot)}return Ft.parseAsync(dt,"")}).then(dt=>{S||ue(dt.scene)}).catch(dt=>{var Ft;!S&&(dt==null?void 0:dt.name)!=="AbortError"&&((Ft=e.onerror)==null||Ft.call(e,String((dt==null?void 0:dt.message)??dt)))}),()=>{S=!0,clearTimeout(J),he.abort(),Dt.disconnect(),pe.removeEventListener("pointermove",ui),pe.removeEventListener("pointerleave",Li),pe.removeEventListener("pointerdown",vs),pe.removeEventListener("pointerup",gt),pe.removeEventListener("dblclick",Xt),pe.removeEventListener("webglcontextlost",Rt),u==null||u.setAnimationLoop(null),g.dispose();const dt=new Set;d.traverse(Ft=>{var pn,Vn;const Ot=Ft;Ot.isMesh&&((pn=Ot.geometry)!=null&&pn.boundsTree&&oT.call(Ot.geometry),(Vn=Ot.geometry)==null||Vn.dispose(),(Array.isArray(Ot.material)?Ot.material:[Ot.material]).forEach(Ji=>Ji&&dt.add(Ji)))}),dt.forEach(Ft=>Ft.dispose()),v==null||v.dispose(),u==null||u.renderLists.dispose(),u==null||u.dispose(),u==null||u.forceContextLoss(),pe.remove(),u=null,M.clear(),T.length=0,k.length=0,j.length=0,I.clear(),Z.clear(),F.clear()}});var Ke={view:Ce,home:q,flyToSel:fe,screenshot:Ue},tt=cT(),nt=ne(tt),pt=ne(nt);ri(pt,he=>a=he,()=>a);var mt=U(pt);ri(mt,he=>o=he,()=>o),ri(nt,he=>r=he,()=>r);var it=U(nt,2),wt=ne(it);return ri(wt,he=>c=he,()=>c),ri(it,he=>l=he,()=>l),ri(tt,he=>s=he,()=>s),_e(i,tt),Pn(Ke)}const xp=wf.head;function rf(i,e){const t=Object.fromEntries(i.map(n=>[n,(e==null?void 0:e[n])??xp[n]??!0]));return{mode:"mine",colorBy:"anatomy",pickBy:"structure",sel:null,hover:null,show:{...t},defaults:t,xray:!1,isolate:!1,explode:0,cut:1,cutAxis:"y",rotate:!1,tour:null,quiz:null}}const hT=(i,e)=>(i==null?void 0:i.type)===(e==null?void 0:e.type)&&(i==null?void 0:i.id)===(e==null?void 0:e.id),Is=(i,e)=>e in i.show;function af(i,e,t){if((i==null?void 0:i.type)==="region"&&e==="lobe"){const n=t.regions.get(i.id);if(n)return{type:"lobe",id:n.lobe}}return i}function dT(i,e,t){switch(e.type){case"mode":return e.mode===i.mode?i:{...i,mode:e.mode,...e.mode==="mine"?{tour:null,quiz:null}:{}};case"colorBy":return{...i,colorBy:e.colorBy};case"pickBy":{const n=af(i.sel,e.pickBy,t);return{...i,pickBy:e.pickBy,sel:n}}case"select":{const n=af(e.sel,i.pickBy,t),s={...i,sel:n,isolate:n?i.isolate:!1};if((n==null?void 0:n.type)==="region"){const r=t.regions.get(n.id);r&&(Is(i,r.layer)&&!i.show[r.layer]&&(s.show={...i.show,[r.layer]:!0}),r.inner&&!i.xray&&(s.xray=!0))}else if((n==null?void 0:n.type)==="vessel"){const r=t.vessels.get(n.id);r&&Is(i,r)&&!i.show[r]&&(s.show={...i.show,[r]:!0})}return s}case"hover":return hT(e.sel,i.hover)?i:{...i,hover:e.sel};case"layer":{if(!Is(i,e.layer))return i;const n=e.on??!i.show[e.layer];return n===i.show[e.layer]?i:{...i,show:{...i.show,[e.layer]:n}}}case"xray":{const n=e.on??!i.xray,s={...i.show};if(n)for(const r of O_)Is(i,r)&&(s[r]=!0);return{...i,xray:n,show:s}}case"isolate":{const n=e.on??!i.isolate;return{...i,isolate:n&&!!i.sel}}case"explode":return{...i,explode:of(e.value)};case"cut":return{...i,cut:of(e.value)};case"cutAxis":return{...i,cutAxis:e.axis};case"rotate":return{...i,rotate:e.on??!i.rotate};case"view":return e.view==="inside"&&Is(i,"hemi_R")?{...i,show:{...i.show,hemi_R:!1}}:i;case"reset":{const n=Object.fromEntries(Object.keys(i.show).map(s=>[s,i.defaults[s]??xp[s]??!0]));return{...i,sel:null,hover:null,show:n,xray:!1,isolate:!1,explode:0,cut:1,rotate:!1,tour:null,quiz:null}}case"tour":{const n={...i.show};return Is(i,"hemi_R")&&(n.hemi_R=!e.hideR),{...i,mode:"learn",quiz:null,tour:{i:e.step},sel:{type:"lobe",id:e.lobe},xray:e.xray,isolate:!1,show:n}}case"tourEnd":{if(!i.tour)return i;const n={...i.show};return Is(i,"hemi_R")&&(n.hemi_R=!0),{...i,tour:null,xray:!1,sel:null,show:n}}case"quizStart":return{...i,mode:"learn",tour:null,sel:null,isolate:!1,quiz:{target:e.target,score:0,n:0,tries:0,last:null,revealing:!1}};case"quizNext":return i.quiz?{...i,sel:null,quiz:{...i.quiz,target:e.target,tries:0,last:null,revealing:!1}}:i;case"quizAnswer":{const n=i.quiz;if(!n||n.revealing)return i;const s=e.picked===n.target;if(s)return{...i,sel:{type:"region",id:n.target},quiz:{...n,score:n.score+1,n:n.n+1,last:{ok:s,picked:e.picked},revealing:!0}};const r=n.tries+1,a=r>=2;return{...i,sel:a?{type:"region",id:n.target}:i.sel,quiz:{...n,tries:r,n:a?n.n+1:n.n,last:{ok:s,picked:e.picked},revealing:a}}}case"quizSkip":{const n=i.quiz;return!n||n.revealing?i:{...i,sel:{type:"region",id:n.target},quiz:{...n,n:n.n+1,last:null,revealing:!0}}}case"quizEnd":return i.quiz?{...i,quiz:null,sel:null}:i}}const of=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),fT=[{lobe:"frontal",view:[.6,.35,1]},{lobe:"parietal",view:[.5,.8,-.4]},{lobe:"temporal",view:[1,-.1,.1]},{lobe:"occipital",view:[.3,.2,-1]},{lobe:"insular",view:[1,.1,.2],xray:!0},{lobe:"limbic",view:[-1,.1,0],hideR:!0},{lobe:"subcortical",view:[.6,.5,.8],xray:!0},{lobe:"ventricles",view:[.6,.5,.8],xray:!0},{lobe:"cerebellum",view:[.4,-.2,-1]},{lobe:"brainstem",view:[-1,-.1,.2],hideR:!0}],pT=i=>fT.filter(e=>i.has(e.lobe));function lf(i,e){const t=[];for(const[n,s]of e.regions)!s.inner&&i.show[s.layer]&&t.push(n);return t}function cf(i,e,t=Math.random){if(!i.length)return null;const n=i.length>1&&e?i.filter(s=>s!==e):i;return n[Math.min(n.length-1,Math.floor(t()*n.length))]}var ba,Ma,Sa,Ea,Ta,Aa,wa;class mT{constructor(){$i(this,ba,At(fu(rf([]))));$i(this,Ma,At({keys:[],vessels:[],layers:[],lobes:new Set,present:new Map}));$i(this,Sa,At({}));$i(this,Ea,At(!1));$i(this,Ta,At("head"));$i(this,Aa,At(!0));$i(this,wa,At("head"));rl(this,"facts",{regions:new Map,vessels:new Map});rl(this,"dispatch",e=>{const t=dT(this.s,e,this.facts);t!==this.s&&(this.s=t)})}get s(){return _(Ln(this,ba))}set s(e){Je(Ln(this,ba),e,!0)}get index(){return _(Ln(this,Ma))}set index(e){Je(Ln(this,Ma),e)}get colors(){return _(Ln(this,Sa))}set colors(e){Je(Ln(this,Sa),e)}get ready(){return _(Ln(this,Ea))}set ready(e){Je(Ln(this,Ea),e,!0)}get framing(){return _(Ln(this,Ta))}set framing(e){Je(Ln(this,Ta),e,!0)}get brain(){return _(Ln(this,Aa))}set brain(e){Je(Ln(this,Aa),e,!0)}get wording(){return _(Ln(this,wa))}set wording(e){Je(Ln(this,wa),e,!0)}init(e,t,n={}){this.facts=e;const s=n.framing??"head",r=new Set(t),a=new Set,o=new Map,l=new Map;for(const[u,d]of e.regions){r.add(d.layer),a.add(d.lobe);const[f,g]=[u.slice(0,1),u.slice(2)];o.has(g)||o.set(g,new Set),o.get(g).add(f),l.set(g,d.lobe)}for(const u of e.vessels.values())r.add(u);const c=D_(r,n.regions,s),h=[...o.keys()].sort((u,d)=>Vo(u)-Vo(d)||u.localeCompare(d));this.colors=fm(h,u=>l.get(u)??"other"),this.index={keys:[...e.regions.keys()],vessels:[...e.vessels.keys()],layers:c.layers,lobes:a,present:o},this.framing=s,this.brain=U_(a),this.wording=N_(s,this.brain),this.s={...rf(c.layers,c.defaults),mode:this.s.mode},this.ready=!0}}ba=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,Ea=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,wa=new WeakMap;var _T=Ae('<button type="button"> </button>'),gT=Ae('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button> <!></li>'),uf=Ae('<ul role="list" class="svelte-1r3olto"></ul>'),vT=Ae('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button> <button type="button"><!></button></div> <!></div>'),xT=Ae('<p class="none faint svelte-1r3olto"> </p>'),yT=Ae('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" style="background:#e11d48" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button></li>'),bT=Ae('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button></div> <!></div>'),MT=Ae('<div class="tree svelte-1r3olto"><label class="search svelte-1r3olto"><!> <span class="sr-only"> </span> <input type="search" autocomplete="off" spellcheck="false" class="svelte-1r3olto"/> <kbd aria-hidden="true" class="svelte-1r3olto">/</kbd></label> <div class="th svelte-1r3olto"><span> </span><span class="n svelte-1r3olto"> </span></div> <div class="list svelte-1r3olto"><!> <!></div></div>');function ST(i,e){Cn(e,!0);let t=gr(e,"vesselName",3,ie=>ie),n=At(""),s,r,a=fu({});function o(){s==null||s.focus(),s==null||s.select()}const l=Le(()=>{const ie=new Map;for(const K of e.store.index.present.keys()){const oe=e.lobeOfStructure(K);ie.has(oe)||ie.set(oe,[]),ie.get(oe).push(K)}return[...oc,...[...ie.keys()].filter(K=>!oc.includes(K))].filter(K=>ie.has(K)).map(K=>({lobe:K,items:ie.get(K).map(oe=>({id:oe,name:e.structName(oe),hs:[...e.store.index.present.get(oe)].sort()})).sort(Qp.has(K)?(oe,H)=>Vo(oe.id)-Vo(H.id)||oe.name.localeCompare(H.name):(oe,H)=>oe.name.localeCompare(H.name))}))}),c=Le(()=>_(n).trim().toLowerCase()),h=Le(()=>_(c)?_(l).map(ie=>({...ie,items:ie.items.filter(V=>e.search(V.id).includes(_(c)))})).filter(ie=>ie.items.length):_(l)),u=Le(()=>e.store.index.keys.length),d=Le(()=>e.onpickvessel?e.store.index.vessels.map(ie=>({key:ie,name:t()(ie)})):[]),f=Le(()=>_(c)?_(d).filter(ie=>ie.name.toLowerCase().includes(_(c))):_(d));let g=At(!1);const v=Le(()=>G(mu("m3d.search.ph",e.store.wording,Un))),m=Le(()=>e.store.s.sel),p=Le(()=>{var ie;return((ie=_(m))==null?void 0:ie.type)==="region"?_(m).id.slice(2):null});Zn(()=>{const ie=_(p);if(!ie)return;const V=e.lobeOfStructure(ie);a[V]||(a[V]=!0),queueMicrotask(()=>{var K;return(K=r==null?void 0:r.querySelector(`[data-id="${CSS.escape(ie)}"]`))==null?void 0:K.scrollIntoView({block:"nearest"})})});const y=ie=>ie.includes("M")?"M":ie.includes("L")?"L":ie[0];function b(ie){var V,K;if(ie.key==="Enter"){const oe=(V=_(h)[0])==null?void 0:V.items[0];oe?(ie.preventDefault(),e.onpick(`${y(oe.hs)}|${oe.id}`)):_(f)[0]&&e.onpickvessel&&(ie.preventDefault(),e.onpickvessel(_(f)[0].key))}else ie.key==="Escape"?_(n)?(Je(n,""),ie.stopPropagation()):s.blur():ie.key==="ArrowDown"&&(ie.preventDefault(),(K=r.querySelector("button"))==null||K.focus())}var x={focus:o},A=MT(),R=ne(A),w=ne(R);yt(w,{name:"search",size:15});var L=U(w,2),S=$(L,!0),M=U(L,2);ri(M,ie=>s=ie,()=>s);var T=U(R,2),I=ne(T),F=$(I,!0),k=U(I),Z=$(k,!0),j=U(T,2),ae=ne(j);qt(ae,17,()=>_(h),ie=>ie.lobe,(ie,V)=>{const K=Le(()=>!!_(c)||!!a[_(V).lobe]);var oe=vT(),H=ne(oe),W=ne(H),ee=ne(W);let se;var Re=U(ee,2),Pe=U(Re,2),Ne=$(Pe,!0),Be=U(Pe,2),De=$(Be,!0),He=U(W,2);let O;var Qe=ne(He);yt(Qe,{name:"focus",size:13});var je=U(H,2);{var qe=Oe=>{var st=uf();qt(st,21,()=>_(V).items,we=>we.id,(we,P)=>{const E=Le(()=>e.store.colors[_(P).id]);var D=gT();let X;var ce=ne(D),le=ne(ce),ze=U(le,2),me=$(ze,!0),Se=U(ce,2);qt(Se,17,()=>_(P).hs.filter(Ce=>Ce!=="M"),Fn,(Ce,q)=>{var fe=_T();let ye;var Ue=$(fe,!0);Me((ge,Fe)=>{var We,$e;ye=zt(fe,1,"lr svelte-1r3olto",null,ye,{on:((We=_(m))==null?void 0:We.type)==="region"&&_(m).id===`${_(q)}|${_(P).id}`}),Ge(fe,"aria-label",ge),Ge(fe,"aria-pressed",(($e=_(m))==null?void 0:$e.type)==="region"&&_(m).id===`${_(q)}|${_(P).id}`),z(Ue,Fe)},[()=>G(_(q)==="L"?"side.leftOf":"side.rightOf",{name:_(P).name}),()=>G(_(q)==="L"?"side.L":"side.R")]),ct("click",fe,()=>e.onpick(`${_(q)}|${_(P).id}`)),_e(Ce,fe)}),Me(Ce=>{X=zt(D,1,"it svelte-1r3olto",null,X,{sel:_(p)===_(P).id}),Ge(D,"data-id",_(P).id),Ge(ce,"aria-current",_(p)===_(P).id?"true":void 0),gn(le,`background:${Ce??""}`),z(me,_(P).name)},[()=>_(E)?Ef(_(E)):"var(--text-3)"]),ct("click",ce,()=>e.onpick(`${y(_(P).hs)}|${_(P).id}`)),_e(we,D)}),_e(Oe,st)};Xe(je,Oe=>{_(K)&&Oe(qe)})}Me((Oe,st,we,P)=>{var E;Ge(W,"aria-expanded",_(K)),se=zt(ee,1,"car svelte-1r3olto",null,se,{o:_(K)}),gn(Re,`background:${Oe??""}`),z(Ne,st),z(De,_(V).items.length),O=zt(He,1,"all svelte-1r3olto",null,O,{on:((E=_(m))==null?void 0:E.type)==="lobe"&&_(m).id===_(V).lobe}),Ge(He,"aria-label",we),Ge(He,"title",P)},[()=>Sr(_(V).lobe),()=>e.lobeName(_(V).lobe),()=>G("m3d.selectLobe",{name:e.lobeName(_(V).lobe)}),()=>G("m3d.selectLobe",{name:e.lobeName(_(V).lobe)})]),ct("click",W,()=>a[_(V).lobe]=!a[_(V).lobe]),ct("click",He,()=>e.onpicklobe(_(V).lobe)),_e(ie,oe)},ie=>{var V=Ra(),K=_t(V);{var oe=H=>{var W=xT(),ee=$(W,!0);Me(se=>z(ee,se),[()=>_(c)?G("m3d.noMatch"):G("m3d.noStructures")]),_e(H,W)};Xe(K,H=>{_(f).length||H(oe)})}_e(ie,V)});var Q=U(ae,2);{var xe=ie=>{const V=Le(()=>!!_(c)||_(g)||!_(u));var K=bT(),oe=ne(K),H=ne(oe),W=ne(H);let ee;var se=U(W,2),Re=U(se,2),Pe=$(Re,!0),Ne=U(Re,2),Be=$(Ne,!0),De=U(oe,2);{var He=O=>{var Qe=uf();qt(Qe,21,()=>_(f),je=>je.key,(je,qe)=>{var Oe=yT();let st;var we=ne(Oe),P=U(ne(we),2),E=$(P,!0);Me(()=>{var D,X;st=zt(Oe,1,"it svelte-1r3olto",null,st,{sel:((D=_(m))==null?void 0:D.type)==="vessel"&&_(m).id===_(qe).key}),Ge(we,"aria-current",((X=_(m))==null?void 0:X.type)==="vessel"&&_(m).id===_(qe).key?"true":void 0),z(E,_(qe).name)}),ct("click",we,()=>{var D;return(D=e.onpickvessel)==null?void 0:D.call(e,_(qe).key)}),_e(je,Oe)}),_e(O,Qe)};Xe(De,O=>{_(V)&&O(He)})}Me((O,Qe)=>{Ge(H,"aria-expanded",_(V)),ee=zt(W,1,"car svelte-1r3olto",null,ee,{o:_(V)}),gn(se,`background:${O??""}`),z(Pe,Qe),z(Be,_(f).length)},[()=>Sr("arteries"),()=>G("m3d.tree.vessels")]),ct("click",H,()=>Je(g,!_(V))),_e(ie,K)};Xe(Q,ie=>{_(f).length&&ie(xe)})}return ri(j,ie=>r=ie,()=>r),Me((ie,V)=>{z(S,ie),Ge(M,"placeholder",_(v)),z(F,V),z(Z,_(u)+_(d).length)},[()=>G("m3d.search"),()=>G("m3d.structures")]),ct("keydown",M,b),Lp(M,()=>_(n),ie=>Je(n,ie)),_e(i,A),Pn(x)}bi(["keydown","click"]);var ET=Ae('<div class="none svelte-1bo6tlo" role="status"><b> </b><span class="muted"> </span></div>'),TT=Ae('<span class="chip best svelte-1bo6tlo"> </span>'),hf=Ae('<small class="muted svelte-1bo6tlo"> </small>'),AT=Ae('<label><input type="radio" name="pipeline" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!></span></label>'),wT=Ae('<fieldset class="opts svelte-1bo6tlo"><legend class="svelte-1bo6tlo"> </legend> <!></fieldset>'),RT=Ae('<p class="one svelte-1bo6tlo"><b> </b> · <span class="muted"> </span></p>'),CT=Ae('<span class="chip warn svelte-1bo6tlo"> </span>'),PT=Ae('<small class="faint svelte-1bo6tlo"> </small>'),LT=Ae('<label><input type="radio" name="backend" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!> <!></span></label>'),df=Ae('<p class="note faint svelte-1bo6tlo"><!> </p>'),IT=Ae('<fieldset class="opts svelte-1bo6tlo"><legend class="svelte-1bo6tlo"> </legend> <!> <!></fieldset>'),DT=Ae('<p class="err svelte-1bo6tlo" role="alert"> </p>'),UT=Ae('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo"> </p> <ul class="pts svelte-1bo6tlo"><li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li></ul> <!> <!> <!> <!> <button type="button" class="btn primary lg svelte-1bo6tlo"><!> </button>',1),NT=Ae("<li><!> </li>"),FT=Ae('<ol class="stages svelte-1bo6tlo"></ol>'),OT=Ae('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo" aria-live="polite"> </p> <div class="bar svelte-1bo6tlo" role="progressbar"><i class="svelte-1bo6tlo"></i></div> <div class="pct faint svelte-1bo6tlo"> </div> <!> <p class="faint small svelte-1bo6tlo"> </p> <button type="button" class="btn svelte-1bo6tlo"> </button>',1),BT=Ae('<section class="panel build fade-in svelte-1bo6tlo" aria-labelledby="b-t"><div class="ic svelte-1bo6tlo" aria-hidden="true"><!></div> <!></section>');function kT(i,e){Cn(e,!0);let t=At(null),n=At(""),s=At(0),r=At(null),a=At(!1),o=null;const l=fu([]);let c=At(null),h=At(!0),u=At("auto"),d=At("auto");Zn(()=>{const V=e.studyId;let K=!1;return Je(h,!0),Je(c,null),Ip(V).then(oe=>{K||(Je(c,oe),Je(u,(oe==null?void 0:oe.recommended)??"auto",!0),Je(d,y(oe==null?void 0:oe.pipelines.find(H=>H.pipeline===_(u))),!0))}).catch(()=>{K||Je(c,null)}).finally(()=>{K||Je(h,!1)}),()=>{K=!0}});const f=Le(()=>{var V;return(V=_(c))==null?void 0:V.pipelines.find(K=>K.pipeline===_(u))}),g=Le(()=>{var V;return((V=_(f))==null?void 0:V.backends)??[]}),v=Le(()=>_(g).some(V=>V.id==="totalseg")),m=Le(()=>!!_(c)&&_(c).pipelines.length===0),p=Le(()=>{var V;return((V=_(f))==null?void 0:V.pipeline)==="ct_body"&&!_(v)});function y(V){var oe;const K=((V==null?void 0:V.backends)??[]).filter(H=>H.available);return((oe=K.find(H=>H.default)??K.find(H=>H.id==="classical")??K[0])==null?void 0:oe.id)??"auto"}function b(V){var K;Je(u,V,!0),Je(d,y((K=_(c))==null?void 0:K.pipelines.find(oe=>oe.pipeline===V)),!0)}const x=V=>Un(`m3d.build.pipeline.${V}`)?G(`m3d.build.pipeline.${V}`):ma(V),A=V=>Un(`m3d.build.pipeline.${V}.d`)?G(`m3d.build.pipeline.${V}.d`):"",R=V=>Un(`m3d.build.backend.${V}`)?G(`m3d.build.backend.${V}`):ma(V),w=V=>Un(`m3d.build.backend.${V}.d`)?G(`m3d.build.backend.${V}.d`):"",L=V=>Un(`mstage.${V}`)?G(`mstage.${V}`):G("mstage.working"),S=Le(()=>Math.round(Math.max(0,Math.min(100,_(s))))),M=Le(()=>l);function T(V){if(V instanceof Fp){const K=`m3d.build.err.${V.status}`;return Un(K)?G(K,{msg:V.message}):G("m3d.build.error",{msg:V.message})}return V instanceof TypeError?G("m3d.build.err.net"):G("m3d.build.error",{msg:String((V==null?void 0:V.message)??V)})}function I(V){var oe;const K=(oe=V.result)==null?void 0:oe.code;return typeof K=="string"&&Un(`m3d.build.code.${K}`)?G(`m3d.build.code.${K}`):V.error?G("m3d.build.error",{msg:V.error}):G("m3d.build.failed")}async function F(){Je(r,null),Je(n,""),Je(s,0),l.length=0;try{Je(t,await Dp(e.studyId,_(c)?_(u):"auto",_(c)&&_(g).length>1?_(d):void 0),!0),o=Up(_(t).id,V=>{Je(n,V.stage,!0),Je(s,V.pct,!0),V.stage&&!l.includes(V.stage)&&l.push(V.stage)},V=>{Je(t,null),Je(a,!1),V.status==="done"?e.ondone():V.status==="cancelled"?Je(r,null):Je(r,I(V),!0)})}catch(V){Je(t,null),Je(r,T(V),!0)}}async function k(){if(_(t)){Je(a,!0);try{await Np(_(t).id)}catch{Je(a,!1)}}}pf(()=>o==null?void 0:o());var Z=BT(),j=ne(Z),ae=ne(j);yt(ae,{name:"cube",size:30});var Q=U(j,2);{var xe=V=>{var K=UT(),oe=_t(K),H=$(oe,!0),W=U(oe,2),ee=$(W,!0),se=U(W,2),Re=ne(se),Pe=ne(Re);yt(Pe,{name:"lock",size:15});var Ne=U(Pe,1,!0),Be=U(Re,2),De=ne(Be);yt(De,{name:"clock",size:15});var He=U(De,1,!0),O=U(Be,2),Qe=ne(O);yt(Qe,{name:"info",size:15});var je=U(Qe,1,!0),qe=U(se,2);{var Oe=q=>{var fe=ET(),ye=ne(fe),Ue=$(ye,!0),ge=U(ye),Fe=$(ge,!0);Me((We,$e)=>{z(Ue,We),z(Fe,$e)},[()=>G("m3d.build.none"),()=>G("m3d.build.none.d")]),_e(q,fe)},st=q=>{var fe=wT(),ye=ne(fe),Ue=$(ye,!0),ge=U(ye,2);qt(ge,19,()=>_(c).pipelines,Fe=>Fe.pipeline,(Fe,We,$e)=>{var B=AT();let Ee;var re=ne(B),te=U(re,2),ve=ne(te),Te=ne(ve),Ze=U(Te);{var ht=St=>{var yn=TT(),dn=$(yn,!0);Me(Pt=>z(dn,Pt),[()=>G("m3d.build.best")]),_e(St,yn)};Xe(Ze,St=>{_($e)===0&&St(ht)})}var ft=U(ve,2);{var at=St=>{var yn=hf(),dn=$(yn,!0);Me(Pt=>z(dn,Pt),[()=>_(We).reason||A(_(We).pipeline)]),_e(St,yn)},Ct=Le(()=>A(_(We).pipeline)||_(We).reason);Xe(ft,St=>{_(Ct)&&St(at)})}Me(St=>{Ee=zt(B,1,"opt svelte-1bo6tlo",null,Ee,{on:_(u)===_(We).pipeline}),ko(re,_(We).pipeline),Zu(re,_(u)===_(We).pipeline),z(Te,St)},[()=>x(_(We).pipeline)]),ct("change",re,()=>b(_(We).pipeline)),_e(Fe,B)}),Me(Fe=>z(Ue,Fe),[()=>G("m3d.build.choose")]),_e(q,fe)},we=q=>{var fe=RT(),ye=ne(fe),Ue=$(ye,!0),ge=U(ye,2),Fe=$(ge,!0);Me((We,$e)=>{z(Ue,We),z(Fe,$e)},[()=>x(_(f).pipeline),()=>A(_(f).pipeline)]),_e(q,fe)},P=Le(()=>_(f)&&A(_(f).pipeline));Xe(qe,q=>{_(m)?q(Oe):_(c)&&_(c).pipelines.length>1?q(st,1):_(P)&&q(we,2)})}var E=U(qe,2);{var D=q=>{var fe=IT(),ye=ne(fe),Ue=$(ye,!0),ge=U(ye,2);qt(ge,17,()=>_(g),$e=>$e.id,($e,B)=>{var Ee=LT();let re;var te=ne(Ee),ve=U(te,2),Te=ne(ve),Ze=ne(Te),ht=U(Ze);{var ft=Pt=>{var fn=CT(),ti=$(fn,!0);Me(ui=>z(ti,ui),[()=>G("m3d.build.backend.unavailable")]),_e(Pt,fn)};Xe(ht,Pt=>{_(B).available||Pt(ft)})}var at=U(Te,2);{var Ct=Pt=>{var fn=hf(),ti=$(fn,!0);Me(ui=>z(ti,ui),[()=>!_(B).available&&_(B).reason?_(B).reason:w(_(B).id)]),_e(Pt,fn)},St=Le(()=>w(_(B).id)||_(B).reason);Xe(at,Pt=>{_(St)&&Pt(Ct)})}var yn=U(at,2);{var dn=Pt=>{var fn=PT(),ti=$(fn,!0);Me(()=>z(ti,_(B).licence)),_e(Pt,fn)};Xe(yn,Pt=>{_(B).licence&&Pt(dn)})}Me(Pt=>{re=zt(Ee,1,"opt svelte-1bo6tlo",null,re,{on:_(d)===_(B).id,off:!_(B).available}),ko(te,_(B).id),Zu(te,_(d)===_(B).id),te.disabled=!_(B).available,z(Ze,Pt)},[()=>R(_(B).id)]),ct("change",te,()=>Je(d,_(B).id,!0)),_e($e,Ee)});var Fe=U(ge,2);{var We=$e=>{var B=df(),Ee=ne(B);yt(Ee,{name:"info",size:13});var re=U(Ee,1,!0);Me(te=>z(re,te),[()=>G("m3d.build.totalsegNote")]),_e($e,B)};Xe(Fe,$e=>{_(v)&&$e(We)})}Me($e=>z(Ue,$e),[()=>G("m3d.build.backend")]),_e(q,fe)};Xe(E,q=>{!_(m)&&_(g).length>1&&q(D)})}var X=U(E,2);{var ce=q=>{var fe=df(),ye=ne(fe);yt(ye,{name:"info",size:13});var Ue=U(ye,1,!0);Me(ge=>z(Ue,ge),[()=>G("m3d.build.totalsegNote")]),_e(q,fe)};Xe(X,q=>{!_(m)&&_(p)&&q(ce)})}var le=U(X,2);{var ze=q=>{var fe=DT(),ye=$(fe,!0);Me(()=>z(ye,_(r))),_e(q,fe)};Xe(le,q=>{_(r)&&q(ze)})}var me=U(le,2),Se=ne(me);yt(Se,{name:"cube",size:17});var Ce=U(Se,1,!0);Me((q,fe,ye,Ue,ge,Fe)=>{z(H,q),z(ee,fe),z(Ne,ye),z(He,Ue),z(je,ge),me.disabled=_(h)||_(m),z(Ce,Fe)},[()=>G("m3d.build.title"),()=>G("m3d.build.lead"),()=>G("m3d.build.p1"),()=>G("m3d.build.p2"),()=>G("m3d.build.p3"),()=>_(r)?G("m3d.build.retry"):G("m3d.build.cta")]),ct("click",me,F),_e(V,K)},ie=V=>{var K=OT(),oe=_t(K),H=$(oe,!0),W=U(oe,2),ee=$(W),se=U(W,2);Ge(se,"aria-valuemin",0),Ge(se,"aria-valuemax",100);var Re=$(se),Pe=U(se,2),Ne=$(Pe),Be=U(Pe,2);{var De=qe=>{var Oe=FT();qt(Oe,21,()=>_(M),Fn,(st,we)=>{var P=NT();let E;var D=ne(P);{let ce=Le(()=>_(we)===_(n)?"spark":"check");yt(D,{get name(){return _(ce)},size:13})}var X=U(D,1,!0);Me(ce=>{E=zt(P,1,"svelte-1bo6tlo",null,E,{now:_(we)===_(n)}),z(X,ce)},[()=>L(_(we))]),_e(st,P)}),_e(qe,Oe)};Xe(Be,qe=>{_(M).length&&qe(De)})}var He=U(Be,2),O=$(He,!0),Qe=U(He,2),je=$(Qe,!0);Me((qe,Oe,st,we,P)=>{z(H,qe),z(ee,`${Oe??""}…`),Ge(se,"aria-valuenow",_(S)),Ge(se,"aria-label",st),gn(Re,`width:${_(S)??""}%`),z(Ne,`${_(S)??""}%`),z(O,we),Qe.disabled=_(a),z(je,P)},[()=>G("m3d.build.progress"),()=>_(n)?L(_(n)):G("mstage.starting"),()=>G("m3d.build.progress"),()=>G("m3d.build.note"),()=>_(a)?G("import.progress.cancelling"):G("common.cancel")]),ct("click",Qe,k),_e(V,K)};Xe(Q,V=>{_(t)?V(ie,-1):V(xe)})}_e(i,Z),Pn()}bi(["change","click"]);var zT=Ae('<div class="center svelte-yes7qw" role="status"><div class="spinner svelte-yes7qw"></div></div>'),VT=Ae('<section class="panel msg svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p><p class="faint mono svelte-yes7qw"> </p> <a class="btn svelte-yes7qw"><!> </a></section>'),HT=Ae('<nav class="crumbs faint svelte-yes7qw"><a class="svelte-yes7qw"> </a> <span aria-hidden="true" class="svelte-yes7qw">›</span> <span aria-current="page" class="svelte-yes7qw"> </span></nav> <!>',1),GT=Ae('<p class="faint mono svelte-yes7qw"> </p>'),WT=Ae('<section class="panel msg over svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p> <!></section>'),XT=Ae('<div class="loading panel svelte-yes7qw" role="status" aria-live="polite"><span class="svelte-yes7qw"> </span> <div class="bar svelte-yes7qw"><i></i></div></div>'),qT=Ae('<div class="top svelte-yes7qw"><!></div>'),jT=Ae('<div class="m3d svelte-yes7qw"><!> <!> <!> <aside id="m3d-controls"><div class="lh svelte-yes7qw"><a class="back svelte-yes7qw"><!></a> <div class="st svelte-yes7qw"><h1 class="pt svelte-yes7qw"> </h1><small class="faint svelte-yes7qw"> </small></div> <button type="button" class="btn icon mob svelte-yes7qw"><!></button></div> <!></aside> <aside id="m3d-card"><button type="button" class="btn icon mob closer svelte-yes7qw"><!></button> <!></aside> <!> <div class="bottom svelte-yes7qw"><!> <!></div> <p class="sr-only svelte-yes7qw" aria-live="polite"> </p></div>');function ZT(i,e){Cn(e,!0);let t=At("loading"),n=At(null),s=At(null),r=At(null),a=At(null),o=At(null),l=At(null),c=At(null),h=At(0),u=At(!1),d=At(null);const f=new mT;let g=At(null),v=At(null),m=At(!1),p=At(!1);const y=Le(()=>e.params.id),b=Le(()=>encodeURIComponent(e.params.id));async function x(D){Je(t,"loading"),Je(n,null),Je(u,!1),Je(d,null);try{const[X,ce]=await Promise.all([Bp(D).catch(()=>null),kp(D)]);if(Je(s,X,!0),!ce){Je(t,"missing");return}Je(r,ce,!0);const[le,ze,me]=await Promise.all([zp(D),Vp(D),Ju("en")]);Je(a,le),Je(o,ze),Je(l,me),Je(t,"ready")}catch(X){Je(n,String((X==null?void 0:X.message)??X),!0),Je(t,"error")}}Zn(()=>{x(_(y))}),Zn(()=>{const D=gi.lang;Je(c,null),D!=="en"&&Ju(D).then(X=>{gi.lang===D&&Je(c,X)})});const A=Le(()=>nm(_(l),gi.lang,_(c))),R=(D,X)=>Un(D)?G(D,X):null,w=Le(()=>({kb:_(A),tr:R,en:_(l),lang:gi.lang})),L=Le(()=>H_(_(o))),S=Le(()=>{var D;return new Map((((D=_(a))==null?void 0:D.regions)??[]).map(X=>[X.key,X]))}),M=D=>xf(_(A),D),T=Le(()=>{var D;return I_(_(a),(D=_(r))==null?void 0:D.pipeline)}),I=(D,X)=>G(mu(D,f.ready?f.wording:_(T),Un),X),F=D=>R(`measure.${D.key}`)??D.label,k=D=>R(`measure.${D.key}.short`)??R(`measure.${D.key}`)??D.label,Z=D=>D.type==="lobe"?Gi(_(w),D.id):D.type==="vessel"?G(`card.vessel.${yf(D.id,_(T))}`):cc(_(w),D.id),j=D=>({title:Z(D),sub:D.type==="region"?Gi(_(w),M(D.id.slice(2))):D.type==="vessel"?I("m3d.vessel.sub"):void 0}),ae=Le(()=>f.s),Q=Le(()=>_(ae).colorBy.startsWith("data:")?_(L).find(D=>`data:${D.key}`===_(ae).colorBy)??null:null),xe=Le(()=>pT(f.index.lobes)),ie=Le(()=>_(ae).sel?G("m3d.announce",{name:Z(_(ae).sel)}):f.ready?G("m3d.announce.none"):"");function V(D,X=!1){var ce;f.dispatch({type:"select",sel:D}),X&&((ce=_(g))==null||ce.flyToSel(f.s.sel))}function K(D){_(ae).quiz||V({type:"region",id:D},!0)}function oe(D){_(ae).quiz||V({type:"lobe",id:D},!0)}function H(D){_(ae).quiz||V({type:"vessel",id:D},!0)}function W(D){var X;f.dispatch({type:"view",view:D}),(X=_(g))==null||X.view(D)}function ee(){var D;f.dispatch({type:"reset"}),(D=_(g))==null||D.home()}function se(D){const X=_(xe)[D];X&&(f.dispatch({type:"tour",step:D,lobe:X.lobe,xray:!!X.xray,hideR:!!X.hideR}),Qu().then(()=>{var ce;return(ce=_(g))==null?void 0:ce.flyToSel({type:"lobe",id:X.lobe},X.view)}))}const Re=()=>se(0),Pe=D=>{var X;return se(Math.max(0,Math.min(_(xe).length-1,(((X=_(ae).tour)==null?void 0:X.i)??-1)+D)))};function Ne(){var D;f.dispatch({type:"tourEnd"}),(D=_(g))==null||D.home()}function Be(){const D=cf(lf(f.s,f.facts),null);D&&f.dispatch({type:"quizStart",target:D})}let De=0;Zn(()=>{var X;const D=_(ae).quiz;if(D!=null&&D.revealing)return De=window.setTimeout(()=>{const ce=cf(lf(f.s,f.facts),D.target);ce&&f.dispatch({type:"quizNext",target:ce})},(X=D.last)!=null&&X.ok?1300:1700),()=>clearTimeout(De)}),pf(()=>clearTimeout(De));function He(){f.dispatch({type:"xray",on:!0});const D=f.index.vessels.find(X=>!/neck/i.test(X))??f.index.vessels[0];D&&V({type:"vessel",id:D})}const O=Le(()=>({studyId:_(y),kb:_(A),namer:_(w),stats:_(o),regions:_(a),regionByKey:_(S),status:_(r),store:f,measureLabel:F,tourLen:_(xe).length,framing:_(T),ft:I,study:_(s),act:{select:V,tour:Re,tourStep:Pe,tourEnd:Ne,quiz:Be,showVessels:He}})),Qe=()=>typeof matchMedia<"u"&&matchMedia("(max-width: 900px)").matches;Zn(()=>{_(ae).sel&&!_(ae).quiz&&Qe()&&(Je(p,!0),Je(m,!1))});function je(D){if(_(t)!=="ready"||D.ctrlKey||D.metaKey||D.altKey||D.defaultPrevented)return;const X=D.target;if(!(X&&(X.isContentEditable||X.tagName==="TEXTAREA"||X.tagName==="SELECT"||X.tagName==="INPUT"&&X.type!=="range"&&X.type!=="checkbox")))if(D.key==="Escape"){if(_(ae).quiz)f.dispatch({type:"quizEnd"});else if(_(ae).tour)Ne();else if(_(m)||_(p))Je(m,!1),Je(p,!1);else if(_(ae).sel)V(null);else return;D.preventDefault()}else D.key==="/"?(D.preventDefault(),Qe()&&(Je(m,!0),Je(p,!1)),Qu().then(()=>{var le;return(le=_(v))==null?void 0:le.focus()})):D.key==="x"||D.key==="X"?f.dispatch({type:"xray"}):(D.key==="i"||D.key==="I")&&_(ae).sel&&f.dispatch({type:"isolate"})}var qe=Ra();Op("keydown",Hp,je);var Oe=_t(qe);{var st=D=>{var X=zT(),ce=$(X);Me(le=>Ge(ce,"aria-label",le),[()=>G("common.loading")]),_e(D,X)},we=D=>{var X=VT(),ce=ne(X),le=$(ce,!0),ze=U(ce),me=$(ze,!0),Se=U(ze),Ce=$(Se,!0),q=U(Se,2),fe=ne(q);yt(fe,{name:"back",size:16});var ye=U(fe,1,!0);la(q,Ue=>{var ge;return(ge=ca)==null?void 0:ge(Ue)}),Me((Ue,ge,Fe)=>{z(le,Ue),z(me,ge),z(Ce,_(n)),Ge(q,"href",`/study/${_(b)??""}`),z(ye,Fe)},[()=>G("m3d.error.t"),()=>G("m3d.error.d"),()=>G("view.back")]),_e(D,X)},P=D=>{var X=HT(),ce=_t(X),le=ne(ce),ze=$(le,!0);la(le,q=>{var fe;return(fe=ca)==null?void 0:fe(q)});var me=U(le,4),Se=$(me,!0),Ce=U(ce,2);kT(Ce,{get studyId(){return e.params.id},ondone:()=>x(e.params.id)}),Me((q,fe,ye)=>{Ge(ce,"aria-label",q),Ge(le,"href",`/study/${_(b)??""}`),z(ze,fe),z(Se,ye)},[()=>G("common.breadcrumb"),()=>{var q;return((q=_(s))==null?void 0:q.description)||G("study.untitled")},()=>G("study.3d")]),_e(D,X)},E=D=>{var X=jT(),ce=ne(X);{var le=gt=>{var Xt=WT(),Jt=ne(Xt),It=$(Jt,!0),Mi=U(Jt),Si=$(Mi,!0),C=U(Mi,2);{var Y=ue=>{var de=GT(),J=$(de,!0);Me(()=>z(J,_(d))),_e(ue,de)};Xe(C,ue=>{_(d)!=="webgl"&&_(d)!=="context"&&ue(Y)})}Me((ue,de)=>{z(It,ue),z(Si,de)},[()=>G("m3d.error.t"),()=>_(d)==="webgl"||_(d)==="context"?G(`m3d.error.${_(d)}`):G("m3d.error.d")]),_e(gt,Xt)};Xe(ce,gt=>{_(d)&&gt(le)})}var ze=U(ce,2);ff(ze,()=>e.params.id,gt=>{{let Xt=Le(()=>Gp(e.params.id)),Jt=Le(()=>I("m3d.canvas"));ri(uT(gt,{get url(){return _(Xt)},get store(){return f},get regions(){return _(a)},get framing(){return _(T)},lobeOf:M,get dataMaps(){return _(L)},label:j,get ariaLabel(){return _(Jt)},onprogress:It=>Je(h,It,!0),onerror:It=>Je(d,It,!0),onloaded:()=>Je(u,!0)}),It=>Je(g,It,!0),()=>_(g))}});var me=U(ze,2);{var Se=gt=>{var Xt=XT(),Jt=ne(Xt),It=$(Jt,!0),Mi=U(Jt,2),Si=ne(Mi);let C;Me(Y=>{z(It,Y),gn(Si,`width:${_(h)??30??""}%`),C=zt(Si,1,"svelte-yes7qw",null,C,{indet:_(h)===null})},[()=>G("m3d.loading")]),_e(gt,Xt)};Xe(me,gt=>{!_(u)&&!_(d)&&gt(Se)})}var Ce=U(me,2);let q;var fe=ne(Ce),ye=ne(fe),Ue=ne(ye);yt(Ue,{name:"back",size:16}),la(ye,gt=>{var Xt;return(Xt=ca)==null?void 0:Xt(gt)});var ge=U(ye,2),Fe=ne(ge),We=$(Fe,!0),$e=U(Fe),B=$($e,!0),Ee=U(ge,2),re=ne(Ee);yt(re,{name:"close",size:16});var te=U(fe,2);{var ve=gt=>{V_(gt,{get store(){return f},get dataMaps(){return _(L)},dataLabel:k,tree:Jt=>{ri(ST(Jt,{get store(){return f},structName:It=>Ho(_(w),It),lobeName:It=>Gi(_(w),It),lobeOfStructure:M,search:It=>sm(_(A),It,Ho(_(w),It)),vesselName:It=>Z({type:"vessel",id:It}),onpick:K,onpicklobe:oe,onpickvessel:H}),It=>Je(v,It,!0),()=>_(v))},$$slots:{tree:!0}})};Xe(te,gt=>{f.ready&&gt(ve)})}var Te=U(Ce,2);let Ze;var ht=ne(Te),ft=ne(ht);yt(ft,{name:"close",size:16});var at=U(ht,2);{var Ct=gt=>{P_(gt,{get ctx(){return _(O)}})};Xe(at,gt=>{f.ready&&gt(Ct)})}var St=U(Te,2);{var yn=gt=>{var Xt=qT(),Jt=ne(Xt);tg(Jt,{get quiz(){return _(ae).quiz},name:It=>cc(_(w),It),onskip:()=>f.dispatch({type:"quizSkip"}),onend:()=>f.dispatch({type:"quizEnd"})}),_e(gt,Xt)};Xe(St,gt=>{_(ae).quiz&&gt(yn)})}var dn=U(St,2),Pt=ne(dn);{var fn=gt=>{{let Xt=Le(()=>k(_(Q)));J_(gt,{get map(){return _(Q)},get label(){return _(Xt)}})}};Xe(Pt,gt=>{_(Q)&&gt(fn)})}var ti=U(Pt,2);{var ui=gt=>{{let Xt=Le(()=>_(xe).length>0),Jt=Le(()=>f.index.keys.length>1);K_(gt,{get store(){return f},get canTour(){return _(Xt)},get canQuiz(){return _(Jt)},onview:W,onshot:()=>{var It;return(It=_(g))==null?void 0:It.screenshot(G("m3d.shot.file"))},onreset:ee,ontour:()=>_(ae).tour?Ne():Re(),onquiz:()=>_(ae).quiz?f.dispatch({type:"quizEnd"}):Be(),get controlsOpen(){return _(m)},get cardOpen(){return _(p)},ontoggleControls:()=>{Je(m,!_(m)),_(m)&&Je(p,!1)},ontoggleCard:()=>{Je(p,!_(p)),_(p)&&Je(m,!1)}})}};Xe(ti,gt=>{f.ready&&gt(ui)})}var Li=U(dn,2),vs=$(Li,!0);Me((gt,Xt,Jt,It,Mi,Si,C)=>{var Y;q=zt(Ce,1,"left panel svelte-yes7qw",null,q,{open:_(m)}),Ge(Ce,"aria-label",gt),Ge(ye,"href",`/study/${_(b)??""}`),Ge(ye,"aria-label",Xt),Ge(ye,"title",Jt),z(We,It),z(B,((Y=_(s))==null?void 0:Y.description)??""),Ge(Ee,"aria-label",Mi),Ze=zt(Te,1,"right panel svelte-yes7qw",null,Ze,{open:_(p)}),Ge(Te,"aria-label",Si),Ge(ht,"aria-label",C),z(vs,_(ie))},[()=>G("m3d.controls"),()=>G("view.back"),()=>G("view.back"),()=>G("m3d.title"),()=>G("card.close"),()=>G("m3d.card"),()=>G("card.close")]),ct("click",Ee,()=>Je(m,!1)),ct("click",ht,()=>Je(p,!1)),_e(D,X)};Xe(Oe,D=>{_(t)==="loading"?D(st):_(t)==="error"?D(we,1):_(t)==="missing"?D(P,2):D(E,-1)})}_e(i,qe),Pn()}bi(["click"]);export{ZT as default};
