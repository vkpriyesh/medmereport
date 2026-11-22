var yp=Object.defineProperty;var Yu=i=>{throw TypeError(i)};var bp=(i,e,t)=>e in i?yp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var rl=(i,e,t)=>bp(i,typeof e!="symbol"?e+"":e,t),Mp=(i,e,t)=>e.has(i)||Yu("Cannot "+t);var Dn=(i,e,t)=>(Mp(i,e,"read from private field"),t?t.call(i):e.get(i)),es=(i,e,t)=>e.has(i)?Yu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);import{b as Sp,E as Ep,B as Tp,p as Ln,a as gr,I as Mt,s as U,i as Xe,t as Ee,c as V,d as k,e as ve,f as In,g as ie,o as Q,h as Ap,j as Ce,k as Si,l as gt,m as _,n as qt,q as vn,r as ut,u as Ue,v as Ge,w as Ra,x as xi,y as Bn,z as ei,A as je,C as li,D as bt,F as Bt,G as Fn,H as la,J as ca,K as Ku,L as wp,M as Rp,N as ff,O as ko,P as Cp,_ as Pp,Q as fu,R as Lp,S as Ip,T as pf,U as Dp,V as Up,W as Np,X as Fp,Y as Op,Z as Bp,$ as kp,a0 as zp,a1 as Vp,a2 as Zu,a3 as Ju,a4 as Hp,a5 as Gp,a6 as Wp,a7 as Xp,a8 as qp,a9 as jp,aa as Yp,ab as Qu}from"./index-zP7l6B2b.js";function mf(i,e,...t){var n=new Tp(i);Sp(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},Ep)}const Kp=/^([LRMVHB])__(.+?)(?:_\d+)?$/,Zp=/^([LRMVHB])__(.+)$/;function Jp(i,e){const t=i?Kp.exec(i):null;if(!t)return null;const n=t[1];let s=t[2];if(e){const r=Zp.exec(i);if(r[2]!==s&&"LRM".includes(n)&&e(r[2]))s=r[2];else if(r[2]!==s&&"LRM".includes(n)){const a=/^(.+)_\d+$/.exec(r[2]);a&&a[1]!==s&&e(a[1])&&(s=a[1])}}return n==="V"?{kind:"vessel",name:s,key:`V|${s}`}:n==="H"?{kind:"skin",name:s,key:`H|${s}`}:n==="B"?{kind:"bone",name:s,key:`B|${s}`}:{kind:"region",hemi:n,structure:s,key:`${n}|${s}`}}function pu(i){const e=i.indexOf("|");return{hemi:i.slice(0,e),structure:i.slice(e+1)}}function Qp(i){const{hemi:e,structure:t}=pu(i);return e==="L"?`R|${t}`:e==="R"?`L|${t}`:null}const ma=i=>(i.charAt(0).toUpperCase()+i.slice(1)).replace(/_/g," "),$p=i=>{const e=/^vertebrae_([cts]\d{1,2}|l\d|s\d)$/.exec(i);return e?e[1].toUpperCase():null},em=i=>{const e=/^rib_(\d{1,2})$/.exec(i);return e?+e[1]:null},ms={},Tt=(i,e,t,n)=>n.split(" ").forEach(s=>ms[s]=[i,e,t]);Tt("frontal","hemi",!1,"frontal_pole sfg mfg ifg_tri ifg_oper precentral frontal_medial sma paracingulate orbitofrontal frontal_operculum");Tt("insular","hemi",!1,"insula");Tt("temporal","hemi",!1,"temporal_pole stg mtg itg temporal_fusiform planum_polare heschl planum_temporale");Tt("parietal","hemi",!1,"postcentral spl supramarginal angular precuneus parietal_operculum central_operculum");Tt("occipital","hemi",!1,"lateral_occipital intracalcarine supracalcarine cuneus lingual occipital_fusiform temporo_occipital_fusiform occipital_pole");Tt("limbic","hemi",!1,"cingulate_ant cingulate_post subcallosal parahippocampal");Tt("limbic","deep",!0,"hippocampus amygdala");Tt("subcortical","deep",!0,"thalamus caudate putamen pallidum accumbens ventral_dc");Tt("ventricles","ventricle",!0,"lateral_ventricle third_ventricle fourth_ventricle");Tt("white_matter","hemi",!1,"corpus_callosum");Tt("white_matter","deep",!0,"cerebral_white_matter");Tt("white_matter","hemi",!1,"cerebral_cortex");Tt("cerebellum","cerebellum",!1,"cerebellum_hemi cerebellar_vermis");Tt("cerebellum","cerebellum",!0,"cerebellum_white_matter");Tt("brainstem","brainstem",!1,"midbrain pons medulla brainstem");Tt("arteries","vessel",!0,"cerebral_arteries neck_arteries body_arteries");Tt("integument","body",!1,"skin");Tt("skeleton","bone",!0,"skeleton");Tt("respiratory","organ",!0,"lung");Tt("respiratory","airway",!0,"airway");Tt("nervous_spine","spine",!0,"spinal_cord");Tt("nervous_spine","spine",!1,"spinal_csf");Tt("spinal_column","spine",!1,"intervertebral_disc");Tt("spinal_column","bone",!1,"vertebral_column");const tm=[...[1,2,3,4,5,6,7].map(i=>`c${i}`),...Array.from({length:12},(i,e)=>`t${e+1}`),...[1,2,3,4,5].map(i=>`l${i}`),"s1"];Tt("spinal_column","bone",!1,tm.map(i=>`vertebrae_${i}`).join(" "));Tt("respiratory","organ",!0,"lung_upper_lobe lung_middle_lobe lung_lower_lobe");Tt("respiratory","airway",!0,"trachea");Tt("cardiovascular","organ",!0,"heart atrial_appendage");Tt("cardiovascular","vessel",!0,"aorta pulmonary_vein pulmonary_artery brachiocephalic_trunk subclavian_artery common_carotid_artery brachiocephalic_vein superior_vena_cava inferior_vena_cava portal_vein_and_splenic_vein iliac_artery iliac_vena");Tt("digestive","organ",!0,"liver gallbladder stomach pancreas esophagus small_bowel duodenum colon");Tt("lymphatic","organ",!0,"spleen");Tt("urinary","organ",!0,"kidney kidney_cyst urinary_bladder");Tt("endocrine","organ",!0,"adrenal_gland thyroid_gland");Tt("reproductive","organ",!0,"prostate");Tt("skeleton","bone",!1,`skull sternum costal_cartilages sacrum humerus scapula clavicula femur hip ${Array.from({length:12},(i,e)=>`rib_${e+1}`).join(" ")}`);Tt("muscular","muscle",!1,"gluteus_maximus gluteus_medius gluteus_minimus autochthon iliopsoas");const nm=Object.keys(ms),oc=["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem","arteries","integument","skeleton","spinal_column","nervous_spine","respiratory","cardiovascular","digestive","urinary","endocrine","lymphatic","reproductive","muscular","nervous","sensory","body_regions"],im=new Set(["spinal_column"]),zo=i=>{var e;return((e=ms[i])==null?void 0:e[0])??"other"},sm=i=>{var e;return((e=ms[i])==null?void 0:e[2])??!1},_f=i=>i in ms,Vo=i=>{const e=nm.indexOf(i);return e<0?1e6:e};function gf(i,e="L"){return i==="hemi"?e==="R"?"hemi_R":"hemi_L":i==="vessel"?"vessels":i==="body"?"skin":i}function rm(i,e,t,n){const s=e==="R"?"hemi_R":"hemi_L",r=t??(ms[i]?ms[i][1]==="hemi"?s:ms[i][1]:n??s);return gf(r,e)}const Ua=i=>!!i&&typeof i=="object"&&!Array.isArray(i),am=i=>i==null||i===""||Array.isArray(i)&&i.length===0;function lc(i,e){if(!Ua(e))return i;if(!Ua(i))return e;const t={...i};for(const[n,s]of Object.entries(e))am(s)||(t[n]=Ua(s)&&Ua(t[n])?lc(t[n],s):s);return t}function om(i,e,t){var r,a;let n=i??t??{structures:{},lobes:{}};if(n={...n,structures:n.structures??{},lobes:n.lobes??{}},e==="en")return n;const s=((r=i==null?void 0:i.i18n)==null?void 0:r[e])??((a=t==null?void 0:t.i18n)==null?void 0:a[e]);return s&&(n=lc(n,s)),t&&t!==i&&(n=lc(n,{structures:t.structures,lobes:t.lobes,arteries:t.arteries,sequences:t.sequences})),n}const vf=(i,e,t)=>!!e&&(!i.lang||i.lang==="en"||e!==t),xf=(i,e)=>{var t;return((t=i.structures[e])==null?void 0:t.lobe)??zo(e)};function Ho(i,e){var n,s,r,a;const t=(n=i.kb.structures[e])==null?void 0:n.name;return vf(i,t,(a=(r=(s=i.en)==null?void 0:s.structures)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`struct.${e}`)??t??lm(i,e)??ma(e)}function lm(i,e){const t=$p(e);if(t)return i.tr("struct.vertebra",{level:t})??`${t} vertebra`;const n=em(e);return n!==null?i.tr("struct.rib",{n})??`Rib ${n}`:null}function Wi(i,e){var n,s,r,a;const t=(n=i.kb.lobes[e])==null?void 0:n.name;return vf(i,t,(a=(r=(s=i.en)==null?void 0:s.lobes)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`lobe.${e}`)??t??ma(e)}function cc(i,e){const{hemi:t,structure:n}=pu(e),s=Ho(i,n);return t==="L"?i.tr("side.leftOf",{name:s})??`Left ${s}`:t==="R"?i.tr("side.rightOf",{name:s})??`Right ${s}`:s}function cm(i,e,t){const n=i.structures[e];return[t,n==null?void 0:n.name,...(n==null?void 0:n.aka)??[],e.replace(/_/g," ")].filter(Boolean).join(" ").toLowerCase()}function yf(i,e="head"){return/neck/i.test(i)?"neck":/body|aorta|cta/i.test(i)||e!=="head"?"body":"brain"}const bf={frontal:"#f472b6",parietal:"#60a5fa",temporal:"#34d399",occipital:"#fbbf24",insular:"#f97316",limbic:"#c084fc",subcortical:"#22d3ee",cerebellum:"#a3e635",brainstem:"#fb7185",ventricles:"#93c5fd",white_matter:"#e2e8f0",arteries:"#ef4444",integument:"#d6c2b4",skeleton:"#e9dfc7",spinal_column:"#e4d6b4",nervous_spine:"#facc15",respiratory:"#7dd3fc",cardiovascular:"#dc2626",digestive:"#f59e0b",urinary:"#a78bfa",endocrine:"#2dd4bf",lymphatic:"#a3e635",reproductive:"#f472b6",muscular:"#c2410c",nervous:"#fde68a",sensory:"#38bdf8",body_regions:"#94a3b8"},um=new Set(["integument","skeleton","spinal_column"]),hm={integument:"#d9b8a3",skeleton:"#ece3cf",spinal_column:"#e6dcc4",nervous_spine:"#f2e6c0",respiratory:"#e9a6a6",cardiovascular:"#9f1d20",digestive:"#b9735a",urinary:"#8f4a3a",endocrine:"#c9855c",lymphatic:"#7a2e3a",reproductive:"#c98d8d",muscular:"#a3473f"},dm={hemi_L:"#f472b6",hemi_R:"#60a5fa",cerebellum:"#a3e635",brainstem:"#fb7185",deep:"#22d3ee",ventricle:"#93c5fd",organ:"#f59e0b",airway:"#7dd3fc",spine:"#facc15",muscle:"#c2410c",vessels:"#ef4444",neck:"#f87171",bone:"#e7e2d3",skin:"#cbd5e1"},uc="#cbd5e1",Mf="#3a4252",fm="#e7b9ad",pm="#c99a8a",Sf=["#1e3a8a","#0ea5e9","#5eead4","#fde047","#f97316","#e11d48"],mm=["#3b82f6","#93c5fd","#e2e8f0","#fca5a5","#ef4444"],Sr=i=>bf[i]??uc;function Go(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function _m([i,e,t]){const n=i/255,s=e/255,r=t/255,a=Math.max(n,s,r),o=Math.min(n,s,r),l=(a+o)/2;if(a===o)return[0,0,l];const c=a-o,h=l>.5?c/(2-a-o):c/(a+o);let u=a===n?(s-r)/c+(s<r?6:0):a===s?(r-n)/c+2:(n-s)/c+4;return u/=6,[u,h,l]}function $u([i,e,t]){if(e===0)return[t*255,t*255,t*255];const n=(a,o,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(o-a)*6*l:l<1/2?o:l<2/3?a+(o-a)*(2/3-l)*6:a),s=t<.5?t*(1+e):t+e-t*e,r=2*t-s;return[n(r,s,i+1/3)*255,n(r,s,i)*255,n(r,s,i-1/3)*255]}function gm(i,e,t){const n=_m(Go(Sr(i))),s=t>1?e/(t-1):.5;if(um.has(i)){const l=Math.max(.7,Math.min(.9,n[2]+(s-.5)*.12));return $u([(n[0]+(s-.5)*.04+1)%1,Math.max(.25,n[1]-e%2*.12),l]).map(Math.round)}const r=(n[0]+(s-.5)*.09+1)%1,a=Math.max(.36,Math.min(.62,n[2]*.86+(s-.5)*.22)),o=Math.max(.45,n[1]-e%2*.12);return $u([r,o,a]).map(Math.round)}function vm(i,e){var s;const t={};for(const r of i)(t[s=e(r)]??(t[s]=[])).push(r);const n={};for(const[r,a]of Object.entries(t))a.forEach((o,l)=>n[o]=gm(r,l,a.length));return n}function xm(i,e=Sf){i=Math.max(0,Math.min(1,Number.isFinite(i)?i:0));const t=e.length-1,n=Math.min(t-1,Math.floor(i*t)),s=i*t-n,r=Go(e[n]),a=Go(e[n+1]);return r.map((o,l)=>o+(a[l]-o)*s)}const ym=i=>`linear-gradient(90deg, ${i.join(", ")})`,Ef=i=>`rgb(${i.map(Math.round).join(" ")})`;var bm=Ce('<p class="disc"><!><span><b> </b><!></span></p>');function Er(i,e){Ln(e,!0);let t=gr(e,"extra",3,"");var n=bm(),s=ie(n);Mt(s,{name:"info",size:15});var r=U(s),a=ie(r),o=Q(a,!0),l=U(a);{var c=h=>{var u=Ap();Ee(()=>k(u,t())),ve(h,u)};Xe(l,h=>{t()&&h(c)})}Ee(h=>k(o,h),[()=>V("disclaimer")]),ve(i,n),In()}function Rn(i,e="en"){if(i==null||!Number.isFinite(i))return"—";const t=Math.abs(i),n=t>=100?0:t>=10?1:t>=1?2:t===0?0:Math.min(4,1-Math.floor(Math.log10(t))),s=e==="hi"?"hi-IN":"en-US";return i.toLocaleString(s,{maximumFractionDigits:n,minimumFractionDigits:0})}function Mm(i,e="en"){const t=Rn(Math.abs(i),e);return`${i>0?"+":i<0?"−":""}${t}%`}const Na=String.raw`[-−]?\d+(?:[.,]\d+)?`,Fa=i=>parseFloat(i.replace("−","-").replace(",","."));function Sm(i){if(!i)return null;const e=i.replace(/(\d),(\d{3})(?!\d)/g,"$1$2").replace(/[×x]\s*10(?:\^[-−]?\d+|[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g," "),t=new RegExp(`(${Na})\\s*(?:–|—|-|to|\\.\\.|…)\\s*(${Na})`).exec(e);if(t){let r=Fa(t[1]),a=Fa(t[2]);return r>a&&([r,a]=[a,r]),{lo:r,hi:a}}const n=new RegExp(`(?:<|≤|<=|under|below)\\s*(${Na})`,"i").exec(e);if(n)return{lo:null,hi:Fa(n[1])};const s=new RegExp(`(?:>|≥|>=|over|above)\\s*(${Na})`,"i").exec(e);return s?{lo:Fa(s[1]),hi:null}:null}function Em(i,e){if(!Number.isFinite(i)||e.lo===null&&e.hi===null)return null;const t=e.lo??Math.min(0,i,e.hi*.5),n=e.hi??Math.max(t*2,i*1.25,t+1),s=Math.max(1e-9,n-t),r=Math.min(t-s*.35,i-s*.08),a=Math.max(n+s*.35,i+s*.08),o=l=>(l-r)/(a-r)*100;return{axisLo:r,axisHi:a,bandLeft:e.lo===null?0:o(t),bandWidth:(e.hi===null?100:o(n))-(e.lo===null?0:o(t)),marker:Math.max(0,Math.min(100,o(i))),position:e.lo!==null&&i<e.lo?"below":e.hi!==null&&i>e.hi?"above":"within"}}function Tm(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))return null;const t=Math.max(Math.abs(i),Math.abs(e)),n=(i+e)/2;return{left:i,right:e,leftPct:t?Math.abs(i)/t*100:0,rightPct:t?Math.abs(e)/t*100:0,diffPct:n?(i-e)/Math.abs(n)*100:0}}function Am(i){const e=i==null?void 0:i.summary;return e?Array.isArray(e)?e:Object.entries(e).map(([t,n])=>({...n,key:n.key??t})):[]}const hc=i=>typeof i=="string"?i:i.text;var wm=Ce('<p class="tag"> </p>'),Rm=Ce('<div class="metric-s svelte-1trur1d"><div class="k svelte-1trur1d"> </div><div class="v svelte-1trur1d"> <small class="svelte-1trur1d"> </small></div></div>'),Cm=Ce('<h3 class="sh"> </h3> <div class="metrics"></div> <p class="p faint" style="font-size:11.5px;margin-top:6px"> </p>',1),Pm=Ce("<p> </p>"),eh=Ce("<li> </li>"),Lm=Ce('<h3 class="sh"> </h3><ul class="dots"></ul>',1),Im=Ce('<h3 class="sh"> </h3><ul class="dots clin"></ul>',1),Dm=Ce('<div class="fact"><b> </b> </div>'),Um=Ce('<button type="button" class="chip"><span class="dot"></span> </button>'),th=Ce('<button type="button" class="btn primary"> </button>'),Nm=Ce('<div class="tour-nav"><button type="button" class="btn"> </button> <span class="faint" style="font-size:12px"> </span> <!></div>'),Fm=Ce('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot"></span> </span> <span class="chip"> </span></div> <h2> </h2> <!></div> <div class="ibody"><!> <!> <!> <!> <!> <h3 class="sh"> </h3> <div class="chips"></div> <!> <!></div>',1);function Om(i,e){Ln(e,!0);const t=Ue(()=>e.ctx.kb.lobes[e.id]),n=Ue(()=>[...e.ctx.store.facts.regions].filter(([,G])=>G.lobe===e.id).map(([G])=>G)),s=Ue(()=>[...new Set(_(n).map(G=>G.slice(2)))]),r=Ue(()=>e.ctx.store.s.mode),a=Ue(()=>e.ctx.store.s.tour),o=/^(cm³|cm3|ml|mL|mm³|mm3|cc)$/,l=Ue(()=>{var te,ue,Z,xe,Ae;const G={L:null,R:null,M:null};for(const Fe of _(n)){const De=(xe=(Z=(ue=(te=e.ctx.stats)==null?void 0:te.regions)==null?void 0:ue[Fe])==null?void 0:Z.measurements)==null?void 0:xe.find(O=>O.key==="volume"||o.test(O.unit)&&O.value!==null);if(!De||De.value===null)continue;const We=Fe[0];G[We]={v:(((Ae=G[We])==null?void 0:Ae.v)??0)+De.value,unit:De.unit}}return G}),c=G=>{const te=e.ctx.store.index.present.get(G);e.ctx.act.select({type:"region",id:`${te!=null&&te.has("M")?"M":te!=null&&te.has("L")?"L":"R"}|${G}`},!0)};var h=Fm(),u=gt(h),d=ie(u),f=ie(d);Mt(f,{name:"close",size:16});var g=U(d,2),v=ie(g),m=ie(v),p=U(m,1,!0),y=U(v,2),b=Q(y,!0),x=U(g,2),w=Q(x,!0),R=U(x,2);{var A=G=>{var te=wm(),ue=Q(te,!0);Ee(()=>k(ue,_(t).tagline)),ve(G,te)};Xe(R,G=>{var te;(te=_(t))!=null&&te.tagline&&G(A)})}var P=U(u,2),S=ie(P);{var M=G=>{var te=Cm(),ue=gt(te),Z=Q(ue,!0),xe=U(ue,2);qt(xe,20,()=>["L","R","M"],Bn,(De,We)=>{var O=Ra(),$e=gt(O);{var qe=Ye=>{var Be=Rm(),st=ie(Be),Pe=Q(st,!0),L=U(st),E=ie(L),D=U(E),H=Q(D,!0);Ee((oe,ae)=>{k(Pe,oe),k(E,ae),k(H,_(l)[We].unit)},[()=>V(`card.side.${We}`),()=>Rn(_(l)[We].v,xi.lang)]),ve(Ye,Be)};Xe($e,Ye=>{_(l)[We]&&Ye(qe)})}ve(De,O)});var Ae=U(xe,2),Fe=Q(Ae,!0);Ee((De,We)=>{k(Z,De),k(Fe,We)},[()=>V("card.yourMeasurements"),()=>V("card.lobeSumNote")]),ve(G,te)};Xe(S,G=>{_(r)==="mine"&&(_(l).L||_(l).R||_(l).M)&&G(M)})}var T=U(S,2);{var I=G=>{var te=Pm(),ue=Q(te,!0);Ee(()=>k(ue,_(t).overview)),ve(G,te)};Xe(T,G=>{var te;(te=_(t))!=null&&te.overview&&G(I)})}var F=U(T,2);{var B=G=>{var te=Lm(),ue=gt(te),Z=Q(ue,!0),xe=U(ue);qt(xe,21,()=>_(t).functions,Bn,(Ae,Fe)=>{var De=eh(),We=Q(De,!0);Ee(()=>k(We,_(Fe))),ve(Ae,De)}),Ee(Ae=>k(Z,Ae),[()=>V("card.functions")]),ve(G,te)};Xe(F,G=>{var te,ue;(ue=(te=_(t))==null?void 0:te.functions)!=null&&ue.length&&G(B)})}var Y=U(F,2);{var X=G=>{var te=Im(),ue=gt(te),Z=Q(ue,!0),xe=U(ue);qt(xe,21,()=>_(t).clinical,Bn,(Ae,Fe)=>{var De=eh(),We=Q(De,!0);Ee(()=>k(We,_(Fe))),ve(Ae,De)}),Ee(Ae=>k(Z,Ae),[()=>V("card.clinical")]),ve(G,te)};Xe(Y,G=>{var te,ue;(ue=(te=_(t))==null?void 0:te.clinical)!=null&&ue.length&&G(X)})}var re=U(Y,2);{var J=G=>{var te=Dm(),ue=ie(te),Z=Q(ue,!0),xe=U(ue,1,!0);Ee(Ae=>{k(Z,Ae),k(xe,_(t).fact)},[()=>V("card.fact")]),ve(G,te)};Xe(re,G=>{var te;(te=_(t))!=null&&te.fact&&G(J)})}var ye=U(re,2),ee=Q(ye,!0),pe=U(ye,2);qt(pe,20,()=>_(s),G=>G,(G,te)=>{const ue=Ue(()=>e.ctx.store.colors[te]);var Z=Um(),xe=ie(Z),Ae=U(xe,1,!0);Ee((Fe,De)=>{vn(xe,`background:${Fe??""}`),k(Ae,De)},[()=>_(ue)?Ef(_(ue)):"var(--text-3)",()=>Ho(e.ctx.namer,te)]),ut("click",Z,()=>c(te)),ve(G,Z)});var se=U(pe,2);{var me=G=>{var te=Nm(),ue=ie(te),Z=Q(ue),xe=U(ue,2),Ae=Q(xe,!0),Fe=U(xe,2);{var De=O=>{var $e=th(),qe=Q($e);Ee(Ye=>k(qe,`${Ye??""} ›`),[()=>V("card.tour.next")]),ut("click",$e,()=>e.ctx.act.tourStep(1)),ve(O,$e)},We=O=>{var $e=th(),qe=Q($e,!0);Ee(Ye=>k(qe,Ye),[()=>V("card.tour.finish")]),ut("click",$e,function(...Ye){var Be;(Be=e.ctx.act.tourEnd)==null||Be.apply(this,Ye)}),ve(O,$e)};Xe(Fe,O=>{_(a).i<e.ctx.tourLen-1?O(De):O(We,-1)})}Ee((O,$e)=>{ue.disabled=_(a).i===0,k(Z,`‹ ${O??""}`),k(Ae,$e)},[()=>V("card.tour.back"),()=>V("card.tour.pos",{i:_(a).i+1,n:e.ctx.tourLen})]),ut("click",ue,()=>e.ctx.act.tourStep(-1)),ve(G,te)};Xe(se,G=>{_(a)&&G(me)})}var W=U(se,2);Er(W,{}),Ee((G,te,ue,Z,xe,Ae,Fe)=>{Ge(d,"aria-label",G),Ge(d,"title",te),vn(m,`background:${ue??""}`),k(p,Z),k(b,xe),k(w,Ae),k(ee,Fe)},[()=>V("card.close"),()=>V("card.close"),()=>Sr(e.id),()=>e.ctx.ft("card.division"),()=>V("card.nStructures",{n:_(s).length}),()=>Wi(e.ctx.namer,e.id),()=>e.ctx.ft("card.inDivision")]),ut("click",d,()=>_(a)?e.ctx.act.tourEnd():e.ctx.act.select(null)),ve(i,h),In()}Si(["click"]);var Bm=Ce('<div class="pop svelte-17vi66k" role="note"><!></div>'),km=Ce('<span class="ip svelte-17vi66k"><button type="button" class="b svelte-17vi66k"><!></button> <!></span>');function zm(i,e){Ln(e,!0);let t=bt(!1),n;const s=`pop-${Math.random().toString(36).slice(2,9)}`;ei(()=>{if(!_(t))return;const h=d=>{n.contains(d.target)||je(t,!1)},u=d=>{var f;d.key==="Escape"&&(je(t,!1),d.stopPropagation(),(f=n.querySelector("button"))==null||f.focus())};return document.addEventListener("pointerdown",h),n.addEventListener("keydown",u),()=>{document.removeEventListener("pointerdown",h),n.removeEventListener("keydown",u)}});var r=km(),a=ie(r),o=ie(a);Mt(o,{name:"info",size:13});var l=U(a,2);{var c=h=>{var u=Bm(),d=ie(u);mf(d,()=>e.children),Ee(()=>Ge(u,"id",s)),ve(h,u)};Xe(l,h=>{_(t)&&h(c)})}li(r,h=>n=h,()=>n),Ee((h,u)=>{Ge(a,"aria-expanded",_(t)),Ge(a,"aria-controls",s),Ge(a,"aria-label",h),Ge(a,"title",u)},[()=>V("card.howMeasured",{name:e.label}),()=>V("card.howMeasured",{name:e.label})]),ut("click",a,()=>je(t,!_(t))),ve(i,r),In()}Si(["click"]);var Vm=Ce('<p class="svelte-qlz17q"><b> </b> </p>'),Hm=Ce("<li> </li>"),Gm=Ce('<p class="svelte-qlz17q"><b> </b></p> <ul class="svelte-qlz17q"></ul>',1),Wm=Ce('<p class="svelte-qlz17q"><b> </b> </p> <!> <!> <p class="edu svelte-qlz17q"> </p>',1),Xm=Ce('<small class="svelte-qlz17q"> </small>'),qm=Ce('<div class="bar svelte-qlz17q" role="img"><div class="band svelte-qlz17q"></div> <div class="mk svelte-qlz17q"></div></div> <div class="bar-l svelte-qlz17q"><span> </span><span> </span><span> </span></div>',1),jm=Ce('<div class="lr svelte-qlz17q" role="img"><b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span> <b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span></div> <div class="s svelte-qlz17q"> <b class="svelte-qlz17q"> </b> </div>',1),Ym=Ce('<div class="cw svelte-qlz17q"> </div>'),Km=Ce('<div><div class="k svelte-qlz17q"><span> </span> <!></div> <div class="v svelte-qlz17q"> <!></div> <!> <!> <!></div>');function Tf(i,e){Ln(e,!0);let t=gr(e,"other",3,null),n=gr(e,"hemi",3,"M"),s=gr(e,"wide",3,!1);const r=Ue(()=>xi.lang),a=Ue(()=>Sm(e.m.reference)),o=Ue(()=>_(a)&&e.m.value!==null?Em(e.m.value,_(a)):null),l=Ue(()=>t()&&!/asym/i.test(e.m.key)&&e.m.value!==null&&t().value!==null&&(n()==="L"||n()==="R")?Tm(n()==="L"?e.m.value:t().value,n()==="L"?t().value:e.m.value):null),c=Ue(()=>e.m.caveats??[]);var h=Km();let u;var d=ie(h),f=ie(d),g=Q(f,!0),v=U(f,2);zm(v,{get label(){return e.label},children:(T,I)=>{var F=Wm(),B=gt(F),Y=ie(B),X=Q(Y,!0),re=U(Y),J=U(B,2);{var ye=W=>{var G=Vm(),te=ie(G),ue=Q(te,!0),Z=U(te);Ee(xe=>{k(ue,xe),k(Z,` ${e.m.reference??""}`)},[()=>V("card.reference")]),ve(W,G)};Xe(J,W=>{e.m.reference&&W(ye)})}var ee=U(J,2);{var pe=W=>{var G=Gm(),te=gt(G),ue=ie(te),Z=Q(ue,!0),xe=U(te,2);qt(xe,21,()=>_(c),Bn,(Ae,Fe)=>{var De=Hm();let We;var O=Q(De,!0);Ee($e=>{We=Bt(De,1,"svelte-qlz17q",null,We,{warn:typeof _(Fe)!="string"&&_(Fe).severity==="warn"}),k(O,$e)},[()=>hc(_(Fe))]),ve(Ae,De)}),Ee(Ae=>k(Z,Ae),[()=>V("card.caveats")]),ve(W,G)};Xe(ee,W=>{_(c).length&&W(pe)})}var se=U(ee,2),me=Q(se,!0);Ee((W,G,te)=>{k(X,W),k(re,` ${G??""}`),k(me,te)},[()=>V("card.method"),()=>e.m.method||V("card.methodUnknown"),()=>V("disclaimer")]),ve(T,F)},$$slots:{default:!0}});var m=U(d,2),p=ie(m),y=U(p);{var b=T=>{var I=Xm(),F=Q(I,!0);Ee(()=>k(F,e.m.unit)),ve(T,I)};Xe(y,T=>{e.m.unit&&T(b)})}var x=U(m,2);{var w=T=>{var I=qm(),F=gt(I),B=ie(F),Y=U(B,2),X=U(F,2),re=ie(X),J=Q(re,!0),ye=U(re),ee=Q(ye,!0),pe=U(ye),se=Q(pe,!0);Ee((me,W,G,te)=>{Ge(F,"aria-label",me),vn(B,`left:${_(o).bandLeft??""}%;width:${_(o).bandWidth??""}%`),vn(Y,`left:${_(o).marker??""}%`),k(J,W),k(ee,G),k(se,te)},[()=>V(`card.range.${_(o).position}`,{lo:Rn(_(a).lo,_(r)),hi:Rn(_(a).hi,_(r))}),()=>Rn(_(o).axisLo,_(r)),()=>V("card.typical",{ref:e.m.reference??""}),()=>Rn(_(o).axisHi,_(r))]),ve(T,I)};Xe(x,T=>{_(o)&&_(a)&&T(w)})}var R=U(x,2);{var A=T=>{var I=jm(),F=gt(I),B=ie(F),Y=Q(B,!0),X=U(B);let re;var J=Q(X),ye=U(X),ee=Q(ye,!0),pe=U(ye,2),se=Q(pe,!0),me=U(pe);let W;var G=Q(me),te=U(me),ue=Q(te,!0),Z=U(F,2),xe=ie(Z),Ae=U(xe),Fe=Q(Ae,!0),De=U(Ae);Ee((We,O,$e,qe,Ye,Be,st,Pe)=>{Ge(F,"aria-label",We),k(Y,O),re=Bt(X,1,"t svelte-qlz17q",null,re,{me:n()==="L"}),vn(J,`width:${_(l).leftPct??""}%`),k(ee,$e),k(se,qe),W=Bt(me,1,"t svelte-qlz17q",null,W,{me:n()==="R"}),vn(G,`width:${_(l).rightPct??""}%`),k(ue,Ye),k(xe,`${Be??""} `),k(Fe,st),k(De,` ${Pe??""}`)},[()=>V("card.lr.aria",{l:Rn(_(l).left,_(r)),r:Rn(_(l).right,_(r)),unit:e.m.unit}),()=>V("side.L"),()=>Rn(_(l).left,_(r)),()=>V("side.R"),()=>Rn(_(l).right,_(r)),()=>V("card.lr.diff"),()=>Mm(_(l).diffPct,_(r)),()=>V(Math.abs(_(l).diffPct)<10?"card.lr.small":"card.lr.large")]),ve(T,I)};Xe(R,T=>{_(l)&&t()&&T(A)})}var P=U(R,2);{var S=T=>{var I=Ym(),F=Q(I,!0);Ee(B=>k(F,B),[()=>hc(_(c).find(B=>typeof B!="string"&&B.severity==="warn"))]),ve(T,I)},M=Ue(()=>_(c).some(T=>typeof T!="string"&&T.severity==="warn"));Xe(P,T=>{_(M)&&T(S)})}Ee(T=>{u=Bt(h,1,"metric svelte-qlz17q",null,u,{wide:s()||!!_(l)||!!_(o)}),k(g,e.label),k(p,T)},[()=>Rn(e.m.value,_(r))]),ve(i,h),In()}var Zm=Ce('<span class="chip"> </span>'),Jm=Ce('<p class="tag"> </p>'),Qm=Ce('<div class="metrics"></div>'),nh=Ce('<p class="empty"> </p>'),$m=Ce('<a><img alt="" loading="lazy" decoding="async"/><span> </span></a>'),e_=Ce('<figure><img loading="lazy" decoding="async"/><span> </span></figure>'),t_=Ce('<h3 class="sh"> </h3> <div class="thumbs"></div> <p class="p faint" style="font-size:11.5px;margin-top:8px"> </p>',1),ih=Ce('<h3 class="sh"> </h3><p> </p>',1),n_=Ce('<button type="button" class="btn"> <!></button>'),i_=Ce('<h3 class="sh"> </h3> <!> <!> <!> <div class="cta"><button type="button" class="btn"><!> </button> <!></div> <!>',1),s_=Ce("<p> </p>"),al=Ce("<li> </li>"),r_=Ce('<h3 class="sh"> </h3><ul class="dots"></ul>',1),a_=Ce('<h3 class="sh"> </h3><ul class="dots conn"></ul>',1),o_=Ce('<h3 class="sh"> </h3><ul class="dots clin"></ul>',1),ol=Ce("<dt> </dt><dd> </dd>",1),l_=Ce('<div class="fact"><b> </b> </div>'),c_=Ce('<!> <!> <!> <!> <!> <h3 class="sh"> </h3> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <!>',1),u_=Ce('<!> <div class="cta"><button type="button" class="btn"><!> </button> <button type="button" class="btn"><!> </button></div> <!>',1),h_=Ce('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"> </span> <button type="button" class="chip"><span class="dot"></span> </button> <!></div> <h2> </h2> <!></div> <div class="ibody"><!></div>',1);function d_(i,e){Ln(e,!0);const t=Ue(()=>e.ctx.store.s.mode),n=Ue(()=>pu(e.id)),s=Ue(()=>e.ctx.kb.structures[_(n).structure]),r=Ue(()=>xf(e.ctx.kb,_(n).structure)),a=Ue(()=>cc(e.ctx.namer,e.id)),o=Ue(()=>{var se,me;return(me=(se=e.ctx.stats)==null?void 0:se.regions)==null?void 0:me[e.id]}),l=Ue(()=>Qp(e.id)),c=Ue(()=>!!_(l)&&e.ctx.store.facts.regions.has(_(l))),h=Ue(()=>{var se,me;return _(l)?(me=(se=e.ctx.stats)==null?void 0:se.regions)==null?void 0:me[_(l)]:void 0}),u=Ue(()=>{var se;return(se=e.ctx.regionByKey.get(e.id))==null?void 0:se.code}),d=Ue(()=>{var se;return((se=_(o))==null?void 0:se.thumbs)??[]}),f=Ue(()=>encodeURIComponent(e.ctx.studyId)),g=Ue(()=>{var se,me;return Array.isArray((se=_(s))==null?void 0:se.brodmann)?_(s).brodmann.join(", "):((me=_(s))==null?void 0:me.brodmann)||""}),v=se=>`/study/${_(f)}/view/${encodeURIComponent(se.series)}?slice=${se.slice}${_(u)!==void 0?`&hl=${_(u)}`:""}`,m=se=>Fn(`card.view.${se}`)?V(`card.view.${se}`):se,p=se=>e.ctx.store.dispatch({type:"mode",mode:se});var y=h_(),b=gt(y),x=ie(b),w=ie(x);Mt(w,{name:"close",size:16});var R=U(x,2),A=ie(R),P=Q(A,!0),S=U(A,2),M=ie(S),T=U(M,1,!0),I=U(S,2);{var F=se=>{var me=Zm(),W=Q(me,!0);Ee(G=>k(W,G),[()=>Fn(`cat.${_(s).category}`)?V(`cat.${_(s).category}`):ma(_(s).category)]),ve(se,me)};Xe(I,se=>{var me;(me=_(s))!=null&&me.category&&se(F)})}var B=U(R,2),Y=Q(B,!0),X=U(B,2);{var re=se=>{var me=Jm(),W=Q(me,!0);Ee(()=>k(W,_(s).tagline)),ve(se,me)};Xe(X,se=>{var me;(me=_(s))!=null&&me.tagline&&se(re)})}var J=U(b,2),ye=ie(J);{var ee=se=>{var me=i_(),W=gt(me),G=Q(W,!0),te=U(W,2);{var ue=Pe=>{var L=Qm();qt(L,21,()=>_(o).measurements,E=>E.key,(E,D)=>{{let H=Ue(()=>e.ctx.measureLabel(_(D))),oe=Ue(()=>{var ae,Oe;return((Oe=(ae=_(h))==null?void 0:ae.measurements)==null?void 0:Oe.find(de=>de.key===_(D).key))??null});Tf(E,{get m(){return _(D)},get label(){return _(H)},get hemi(){return _(n).hemi},get other(){return _(oe)}})}}),ve(Pe,L)},Z=Pe=>{var L=nh(),E=Q(L,!0);Ee(D=>k(E,D),[()=>V("card.noMeasurements")]),ve(Pe,L)};Xe(te,Pe=>{var L,E;(E=(L=_(o))==null?void 0:L.measurements)!=null&&E.length?Pe(ue):Pe(Z,-1)})}var xe=U(te,2);{var Ae=Pe=>{var L=t_(),E=gt(L),D=Q(E,!0),H=U(E,2);qt(H,21,()=>_(d),Bn,(Oe,de)=>{var Se=Ra(),Re=gt(Se);{var $=Le=>{var ke=$m(),Me=ie(ke),Ne=U(Me),He=Q(Ne,!0);la(ke,Qe=>{var z;return(z=ca)==null?void 0:z(Qe)}),Ee((Qe,z,we,ne)=>{Ge(ke,"href",Qe),Ge(ke,"aria-label",z),Ge(Me,"src",we),k(He,ne)},[()=>v(_(de)),()=>V("card.thumb.open",{view:m(_(de).view),n:_(de).slice+1}),()=>Ku(e.ctx.studyId,_(de).img),()=>m(_(de).view)]),ve(Le,ke)},_e=Le=>{var ke=e_(),Me=ie(ke),Ne=U(Me),He=Q(Ne,!0);Ee((Qe,z,we)=>{Ge(Me,"src",Qe),Ge(Me,"alt",z),k(He,we)},[()=>Ku(e.ctx.studyId,_(de).img),()=>V("card.thumb.recon",{view:m(_(de).view)}),()=>m(_(de).view)]),ve(Le,ke)};Xe(Re,Le=>{_(de).series?Le($):Le(_e,-1)})}ve(Oe,Se)});var oe=U(H,2),ae=Q(oe,!0);Ee((Oe,de)=>{k(D,Oe),k(ae,de)},[()=>V("card.onScan"),()=>V("card.thumb.hint")]),ve(Pe,L)};Xe(xe,Pe=>{_(d).length&&Pe(Ae)})}var Fe=U(xe,2);{var De=Pe=>{var L=ih(),E=gt(L),D=Q(E,!0),H=U(E),oe=Q(H,!0);Ee(ae=>{k(D,ae),k(oe,_(s).overview)},[()=>V("card.whatItIs")]),ve(Pe,L)};Xe(Fe,Pe=>{var L;(L=_(s))!=null&&L.overview&&Pe(De)})}var We=U(Fe,2),O=ie(We),$e=ie(O);Mt($e,{name:"spark",size:15});var qe=U($e,1,!0),Ye=U(O,2);{var Be=Pe=>{var L=n_(),E=ie(L),D=U(E);Mt(D,{name:"arrow",size:15}),Ee(H=>k(E,H),[()=>V(_(n).hemi==="L"?"card.compareR":"card.compareL")]),ut("click",L,()=>e.ctx.act.select({type:"region",id:_(l)},!0)),ve(Pe,L)};Xe(Ye,Pe=>{_(c)&&_(l)&&Pe(Be)})}var st=U(We,2);{let Pe=Ue(()=>V("card.measureDisc"));Er(st,{get extra(){return _(Pe)}})}Ee((Pe,L)=>{k(G,Pe),k(qe,L)},[()=>V("card.yourMeasurements"),()=>V("card.learnMore")]),ut("click",O,()=>p("learn")),ve(se,me)},pe=se=>{var me=u_(),W=gt(me);{var G=$e=>{var qe=c_(),Ye=gt(qe);{var Be=q=>{var ge=s_(),Te=Q(ge,!0);Ee(()=>k(Te,_(s).overview)),ve(q,ge)};Xe(Ye,q=>{_(s).overview&&q(Be)})}var st=U(Ye,2);{var Pe=q=>{var ge=r_(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te);qt(ot,21,()=>_(s).functions,Bn,(dt,rt)=>{var Rt=al(),zt=Q(Rt,!0);Ee(()=>k(zt,_(rt))),ve(dt,Rt)}),Ee(dt=>k(Ze,dt),[()=>V("card.functions")]),ve(q,ge)};Xe(st,q=>{var ge;(ge=_(s).functions)!=null&&ge.length&&q(Pe)})}var L=U(st,2);{var E=q=>{var ge=a_(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te);qt(ot,21,()=>_(s).connections,Bn,(dt,rt)=>{var Rt=al(),zt=Q(Rt,!0);Ee(()=>k(zt,_(rt))),ve(dt,Rt)}),Ee(dt=>k(Ze,dt),[()=>V("card.connections")]),ve(q,ge)};Xe(L,q=>{var ge;(ge=_(s).connections)!=null&&ge.length&&q(E)})}var D=U(L,2);{var H=q=>{var ge=o_(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te);qt(ot,21,()=>_(s).clinical,Bn,(dt,rt)=>{var Rt=al(),zt=Q(Rt,!0);Ee(()=>k(zt,_(rt))),ve(dt,Rt)}),Ee(dt=>k(Ze,dt),[()=>V("card.clinical")]),ve(q,ge)};Xe(D,q=>{var ge;(ge=_(s).clinical)!=null&&ge.length&&q(H)})}var oe=U(D,2);{var ae=q=>{var ge=ih(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te),dt=Q(ot,!0);Ee(rt=>{k(Ze,rt),k(dt,_(s).lateralization)},[()=>V("card.lateralization")]),ve(q,ge)};Xe(oe,q=>{_(s).lateralization&&q(ae)})}var Oe=U(oe,2),de=Q(Oe,!0),Se=U(Oe,2),Re=ie(Se);{var $=q=>{var ge=ol(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te),dt=Q(ot,!0);Ee((rt,Rt)=>{k(Ze,rt),k(dt,Rt)},[()=>V("card.aka"),()=>_(s).aka.join(", ")]),ve(q,ge)};Xe(Re,q=>{var ge;(ge=_(s).aka)!=null&&ge.length&&q($)})}var _e=U(Re,2);{var Le=q=>{var ge=ol(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te),dt=Q(ot,!0);Ee(rt=>{k(Ze,rt),k(dt,_(g))},[()=>V("card.brodmann")]),ve(q,ge)};Xe(_e,q=>{_(g)&&q(Le)})}var ke=U(_e,2);{var Me=q=>{var ge=ol(),Te=gt(ge),Ze=Q(Te,!0),ot=U(Te),dt=Q(ot,!0);Ee(rt=>{k(Ze,rt),k(dt,_(s).blood_supply)},[()=>V("card.blood")]),ve(q,ge)};Xe(ke,q=>{_(s).blood_supply&&q(Me)})}var Ne=U(ke,2),He=Q(Ne,!0),Qe=U(Ne),z=Q(Qe,!0),we=U(Se,2);{var ne=q=>{var ge=l_(),Te=ie(ge),Ze=Q(Te,!0),ot=U(Te,1,!0);Ee(dt=>{k(Ze,dt),k(ot,_(s).fact)},[()=>V("card.fact")]),ve(q,ge)};Xe(we,q=>{_(s).fact&&q(ne)})}Ee((q,ge,Te)=>{k(de,q),k(He,ge),k(z,Te)},[()=>V("card.details"),()=>V("card.partOf"),()=>Wi(e.ctx.namer,_(r))]),ve($e,qe)},te=$e=>{var qe=nh(),Ye=Q(qe,!0);Ee(Be=>k(Ye,Be),[()=>V("card.noKb")]),ve($e,qe)};Xe(W,$e=>{_(s)?$e(G):$e(te,-1)})}var ue=U(W,2),Z=ie(ue),xe=ie(Z);Mt(xe,{name:"square",size:15});var Ae=U(xe,1,!0),Fe=U(Z,2),De=ie(Fe);Mt(De,{name:"layers",size:15});var We=U(De,1,!0),O=U(ue,2);Er(O,{}),Ee(($e,qe)=>{k(Ae,$e),k(We,qe)},[()=>V("card.seeOnScan"),()=>V("card.wholeLobe",{name:Wi(e.ctx.namer,_(r))})]),ut("click",Z,()=>p("mine")),ut("click",Fe,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),ve(se,me)};Xe(ye,se=>{_(t)==="mine"?se(ee):se(pe,-1)})}Ee((se,me,W,G,te,ue)=>{Ge(x,"aria-label",se),Ge(x,"title",me),k(P,W),Ge(S,"title",G),vn(M,`background:${te??""}`),k(T,ue),k(Y,_(a))},[()=>V("card.close"),()=>V("card.close"),()=>_(n).hemi==="L"?V("card.side.L"):_(n).hemi==="R"?V("card.side.R"):V("card.side.M"),()=>V("m3d.selectLobe",{name:Wi(e.ctx.namer,_(r))}),()=>Sr(_(r)),()=>Wi(e.ctx.namer,_(r))]),ut("click",x,()=>e.ctx.act.select(null)),ut("click",S,()=>e.ctx.act.select({type:"lobe",id:_(r)},!0)),ve(i,y),In()}Si(["click"]);var f_=Ce('<div class="cta" style="margin-top:10px"><a class="btn"><!> </a></div>'),p_=Ce('<h3 class="sh"> </h3> <div class="metrics"></div>',1),m_=Ce('<p class="empty" role="note"> </p>'),ll=Ce("<dt> </dt><dd> </dd>",1),__=Ce("<li> </li>"),g_=Ce('<div class="note"><b> </b> <ul class="dots"></ul></div>'),v_=Ce('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:var(--accent)"></span> </span></div> <h2> </h2> <p class="tag"> </p> <!></div> <div class="ibody"><!> <h3 class="sh"> </h3> <ul class="dots"><li> </li> <li> </li> <li> </li> <li> </li></ul> <h3 class="sh"> </h3> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <ol class="how" style="margin-top:10px"><li> </li> <li> </li> <li> </li></ol> <!> <!></div>',1),x_=Ce('<button type="button" class="btn primary"><!> </button>'),y_=Ce('<button type="button" class="btn"><!> </button>'),b_=Ce("<span> </span>"),M_=Ce('<button type="button" class="lobe-card"><b> </b><!></button>'),S_=Ce('<h3 class="sh"> </h3> <div class="lobes"></div>',1),E_=Ce('<h3 class="sh"> </h3> <p> </p> <div class="cta"><button type="button" class="btn"><!> </button></div>',1),T_=Ce('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:#c084fc"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><div class="cta" style="margin-top:0"><!> <!></div> <!> <!> <!></div>',1);function A_(i,e){Ln(e,!0);const t=Ue(()=>e.ctx.store.s.mode),n=Ue(()=>Am(e.ctx.stats)),s=Ue(()=>oc.filter(m=>e.ctx.store.index.lobes.has(m))),r=Ue(()=>e.ctx.store.index.vessels.length>0),a=Ue(()=>{var m;return(((m=e.ctx.regions)==null?void 0:m.caveats)??[]).map(hc)}),o=Ue(()=>e.ctx.framing==="head"),l=Ue(()=>e.ctx.ft),c=Ue(()=>{var m;return e.ctx.study?wp(e.ctx.study.series,(m=e.ctx.regions)==null?void 0:m.primary_series,p=>Rp(p)):null}),h=Ue(()=>encodeURIComponent(e.ctx.studyId)),u=m=>Fn(`m3d.build.pipeline.${m}`)?V(`m3d.build.pipeline.${m}`):m;var d=Ra(),f=gt(d);{var g=m=>{var p=v_(),y=gt(p),b=ie(y),x=ie(b),w=U(ie(x),1,!0),R=U(b,2),A=Q(R,!0),P=U(R,2),S=Q(P,!0),M=U(P,2);{var T=Re=>{var $=f_(),_e=ie($),Le=ie(_e);Mt(Le,{name:"side",size:15});var ke=U(Le,1,!0);la(_e,Me=>{var Ne;return(Ne=ca)==null?void 0:Ne(Me)}),Ee((Me,Ne)=>{Ge(_e,"href",`/study/${_(h)??""}/view/${Me??""}`),k(ke,Ne)},[()=>encodeURIComponent(_(c)),()=>_(l)("card.sum.open2d")]),ve(Re,$)};Xe(M,Re=>{_(c)&&Re(T)})}var I=U(y,2),F=ie(I);{var B=Re=>{var $=p_(),_e=gt($),Le=Q(_e,!0),ke=U(_e,2);qt(ke,23,()=>_(n),Me=>Me.key,(Me,Ne,He)=>{{let Qe=Ue(()=>e.ctx.measureLabel(_(Ne))),z=Ue(()=>_(He)===0);Tf(Me,{get m(){return _(Ne)},get label(){return _(Qe)},get wide(){return _(z)}})}}),Ee(Me=>k(Le,Me),[()=>V("card.sum.numbers")]),ve(Re,$)},Y=Re=>{var $=m_(),_e=Q($,!0);Ee(Le=>k(_e,Le),[()=>_(l)("card.sum.noNumbers")]),ve(Re,$)};Xe(F,Re=>{_(n).length?Re(B):Re(Y,-1)})}var X=U(F,2),re=Q(X,!0),J=U(X,2),ye=ie(J),ee=Q(ye,!0),pe=U(ye,2),se=Q(pe,!0),me=U(pe,2),W=Q(me,!0),G=U(me,2),te=Q(G,!0),ue=U(J,2),Z=Q(ue,!0),xe=U(ue,2),Ae=ie(xe);{var Fe=Re=>{var $=ll(),_e=gt($),Le=Q(_e,!0),ke=U(_e),Me=Q(ke,!0);Ee(Ne=>{k(Le,Ne),k(Me,e.ctx.regions.backend)},[()=>V("card.sum.backend")]),ve(Re,$)};Xe(Ae,Re=>{var $;($=e.ctx.regions)!=null&&$.backend&&Re(Fe)})}var De=U(Ae,2);{var We=Re=>{var $=ll(),_e=gt($),Le=Q(_e,!0),ke=U(_e),Me=Q(ke);Ee((Ne,He)=>{k(Le,Ne),k(Me,`${He??""}${e.ctx.status.version?` · v${e.ctx.status.version}`:""}`)},[()=>V("card.sum.pipeline"),()=>u(e.ctx.status.pipeline)]),ve(Re,$)};Xe(De,Re=>{var $;($=e.ctx.status)!=null&&$.pipeline&&Re(We)})}var O=U(De,2);{var $e=Re=>{var $=ll(),_e=gt($),Le=Q(_e,!0),ke=U(_e),Me=Q(ke,!0);Ee(Ne=>{k(Le,Ne),k(Me,e.ctx.regions.licence)},[()=>V("card.sum.licence")]),ve(Re,$)};Xe(O,Re=>{var $;($=e.ctx.regions)!=null&&$.licence&&Re($e)})}var qe=U(O,2),Ye=Q(qe,!0),Be=U(qe),st=Q(Be,!0),Pe=U(xe,2),L=ie(Pe),E=Q(L,!0),D=U(L,2),H=Q(D,!0),oe=U(D,2),ae=Q(oe,!0),Oe=U(Pe,2);{var de=Re=>{var $=g_(),_e=ie($),Le=Q(_e,!0),ke=U(_e,2);qt(ke,21,()=>{var Me;return[..._(a),...((Me=e.ctx.status)==null?void 0:Me.warnings)??[]]},Bn,(Me,Ne)=>{var He=__(),Qe=Q(He,!0);Ee(()=>k(Qe,_(Ne))),ve(Me,He)}),Ee(Me=>k(Le,Me),[()=>V("card.sum.limits")]),ve(Re,$)};Xe(Oe,Re=>{var $,_e;(_(a).length||(_e=($=e.ctx.status)==null?void 0:$.warnings)!=null&&_e.length)&&Re(de)})}var Se=U(Oe,2);{let Re=Ue(()=>_(l)("card.sum.disc"));Er(Se,{get extra(){return _(Re)}})}Ee((Re,$,_e,Le,ke,Me,Ne,He,Qe,z,we,ne,q)=>{k(w,Re),k(A,$),k(S,_e),k(re,Le),k(ee,ke),k(se,Me),k(W,Ne),k(te,He),k(Z,Qe),k(Ye,z),k(st,e.ctx.store.index.keys.length+e.ctx.store.index.vessels.length),k(E,we),k(H,ne),k(ae,q)},[()=>V("card.yourScan"),()=>V("card.sum.title"),()=>_(l)("card.sum.tag"),()=>V("card.sum.try"),()=>_(l)("card.sum.try1"),()=>_(l)("card.sum.try2"),()=>_(l)("card.sum.try3"),()=>V("card.sum.try4"),()=>V("card.sum.how"),()=>V("card.sum.regions"),()=>V("card.sum.how1"),()=>_(l)("card.sum.how2"),()=>V("card.sum.how3")]),ve(m,p)},v=m=>{var p=T_(),y=gt(p),b=ie(y),x=ie(b),w=U(ie(x),1,!0),R=U(b,2),A=Q(R,!0),P=U(R,2),S=Q(P,!0),M=U(y,2),T=ie(M),I=ie(T);{var F=pe=>{var se=x_(),me=ie(se);Mt(me,{name:"play",size:14});var W=U(me,1,!0);Ee(G=>k(W,G),[()=>V("card.learn.tour")]),ut("click",se,function(...G){var te;(te=e.ctx.act.tour)==null||te.apply(this,G)}),ve(pe,se)};Xe(I,pe=>{e.ctx.tourLen&&pe(F)})}var B=U(I,2);{var Y=pe=>{var se=y_(),me=ie(se);Mt(me,{name:"spark",size:15});var W=U(me,1,!0);Ee(G=>k(W,G),[()=>V("m3d.quiz")]),ut("click",se,function(...G){var te;(te=e.ctx.act.quiz)==null||te.apply(this,G)}),ve(pe,se)};Xe(B,pe=>{e.ctx.store.index.keys.length>1&&pe(Y)})}var X=U(T,2);{var re=pe=>{var se=S_(),me=gt(se),W=Q(me,!0),G=U(me,2);qt(G,20,()=>_(s),te=>te,(te,ue)=>{var Z=M_(),xe=ie(Z),Ae=Q(xe,!0),Fe=U(xe);{var De=We=>{var O=b_(),$e=Q(O,!0);Ee(()=>k($e,e.ctx.kb.lobes[ue].tagline)),ve(We,O)};Xe(Fe,We=>{var O;(O=e.ctx.kb.lobes[ue])!=null&&O.tagline&&We(De)})}Ee((We,O)=>{vn(Z,`--c:${We??""}`),k(Ae,O)},[()=>Sr(ue),()=>Wi(e.ctx.namer,ue)]),ut("click",Z,()=>e.ctx.act.select({type:"lobe",id:ue},!0)),ve(te,Z)}),Ee(te=>k(W,te),[()=>_(l)("card.learn.divisions")]),ve(pe,se)};Xe(X,pe=>{_(s).length&&pe(re)})}var J=U(X,2);{var ye=pe=>{var se=E_(),me=gt(se),W=Q(me,!0),G=U(me,2),te=Q(G,!0),ue=U(G,2),Z=ie(ue),xe=ie(Z);Mt(xe,{name:"eye",size:15});var Ae=U(xe,1,!0);Ee((Fe,De)=>{k(W,Fe),k(te,e.ctx.kb.arteries.overview),k(Ae,De)},[()=>V("card.learn.arteries"),()=>V("card.learn.showArteries")]),ut("click",Z,function(...Fe){var De;(De=e.ctx.act.showVessels)==null||De.apply(this,Fe)}),ve(pe,se)};Xe(J,pe=>{var se;_(o)&&_(r)&&((se=e.ctx.kb.arteries)!=null&&se.overview)&&pe(ye)})}var ee=U(J,2);Er(ee,{}),Ee((pe,se,me)=>{k(w,pe),k(A,se),k(S,me)},[()=>V("m3d.mode.learn"),()=>_(l)("card.learn.title"),()=>_(l)("card.learn.tag")]),ve(m,p)};Xe(f,m=>{_(t)==="mine"?m(g):m(v,-1)})}ve(i,d),In()}Si(["click"]);var w_=Ce("<p> </p>"),R_=Ce('<br/><span class="faint"> </span>',1),C_=Ce("<dt> </dt><dd> <!></dd>",1),P_=Ce('<h3 class="sh"> </h3> <dl class="kv"></dl>',1),L_=Ce('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot" style="background:#ef4444"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><!> <!> <div class="note"> </div> <!></div>',1);function I_(i,e){Ln(e,!0);const t=Ue(()=>yf(e.id,e.ctx.framing)),n=Ue(()=>_(t)==="body"?void 0:e.ctx.kb.arteries);var s=L_(),r=gt(s),a=ie(r),o=ie(a);Mt(o,{name:"close",size:16});var l=U(a,2),c=ie(l),h=U(ie(c),1,!0),u=U(l,2),d=Q(u,!0),f=U(u,2),g=Q(f,!0),v=U(r,2),m=ie(v);{var p=P=>{var S=w_(),M=Q(S,!0);Ee(()=>k(M,_(n).overview)),ve(P,S)};Xe(m,P=>{var S;(S=_(n))!=null&&S.overview&&P(p)})}var y=U(m,2);{var b=P=>{var S=P_(),M=gt(S),T=Q(M,!0),I=U(M,2);qt(I,21,()=>Object.values(_(n).vessels),Bn,(F,B)=>{var Y=C_(),X=gt(Y),re=Q(X,!0),J=U(X),ye=ie(J),ee=U(ye);{var pe=se=>{var me=R_(),W=U(gt(me)),G=Q(W,!0);Ee(()=>k(G,_(B).note)),ve(se,me)};Xe(ee,se=>{_(B).note&&se(pe)})}Ee(()=>{k(re,_(B).name),k(ye,_(B).supplies)}),ve(F,Y)}),Ee(F=>k(T,F),[()=>V("card.vessel.main")]),ve(P,S)},x=Ue(()=>{var P;return((P=_(n))==null?void 0:P.vessels)&&Object.keys(_(n).vessels).length});Xe(y,P=>{_(x)&&P(b)})}var w=U(y,2),R=Q(w,!0),A=U(w,2);Er(A,{}),Ee((P,S,M,T,I,F)=>{Ge(a,"aria-label",P),Ge(a,"title",S),k(h,M),k(d,T),k(g,I),k(R,F)},[()=>V("card.close"),()=>V("card.close"),()=>V("card.vessel.kicker"),()=>V(`card.vessel.${_(t)}`),()=>V(`card.vessel.${_(t)}.tag`),()=>e.ctx.ft("card.vessel.caveat")]),ut("click",a,()=>e.ctx.act.select(null)),ve(i,s),In()}Si(["click"]);var D_=Ce('<div class="fade-in"><!></div>'),U_=Ce('<div class="cardx svelte-1yprcvz"><!></div>');function N_(i,e){Ln(e,!0);const t=Ue(()=>e.ctx.store.s.sel);let n;ei(()=>{var a,o;(a=_(t))==null||a.type,(o=_(t))==null||o.id,e.ctx.store.s.mode,n&&(n.scrollTop=0)});var s=U_(),r=ie(s);ff(r,()=>{var a,o;return`${(a=_(t))==null?void 0:a.type}:${(o=_(t))==null?void 0:o.id}:${e.ctx.store.s.mode}`},a=>{var o=D_(),l=ie(o);{var c=f=>{A_(f,{get ctx(){return e.ctx}})},h=f=>{d_(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},u=f=>{Om(f,{get ctx(){return e.ctx},get id(){return _(t).id}})},d=f=>{I_(f,{get ctx(){return e.ctx},get id(){return _(t).id}})};Xe(l,f=>{_(t)?_(t).type==="region"?f(h,1):_(t).type==="lobe"?f(u,2):f(d,-1):f(c)})}ve(a,o)}),li(s,a=>n=a,()=>n),ve(i,s),In()}const sh=["hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle","organ","airway","spine","muscle","vessels","neck","bone","skin"],rh={brain_mr:"head",spine_mr:"spine",ct_body:"body"},F_=new Set(["hemi","hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle"]),Af=new Set(["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem"]);function O_(i,e){const t=i==null?void 0:i.framing;if(t==="head"||t==="body"||t==="spine")return t;const n=(i==null?void 0:i.pipeline)??e??"";if(rh[n])return rh[n];const s=(i==null?void 0:i.regions)??[];return!s.length||s.some(a=>a.group?F_.has(a.group):_f(a.structure)&&Af.has(zo(a.structure)))?"head":s.every(a=>["spinal_column","nervous_spine"].includes(zo(a.structure))||a.group==="spine")?"spine":"body"}const wf={head:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!1,neck:!1,bone:!1,skin:!1},body:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!0},spine:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!1}};function B_(i,e,t){const n=new Set(i),s=new Map;for(const l of(e==null?void 0:e.layers)??[])l&&typeof l.id=="string"&&s.set(gf(l.id),l.default);const r=[...sh.filter(l=>n.has(l)),...[...n].filter(l=>!sh.includes(l))];!s.has("neck")&&typeof s.get("vessels")=="boolean"&&s.set("neck",s.get("vessels"));const a=wf[t],o={};for(const l of r){const c=s.get(l);o[l]=typeof c=="boolean"?c:a[l]??!0}return{layers:r,defaults:o}}const k_=i=>{for(const e of i)if(Af.has(e))return!0;return!1},z_=(i,e)=>i==="head"&&!e?"vessels":i,V_=new Set(["muscle","bone"]),H_=["deep","ventricle","vessels","organ","airway","spine"];function mu(i,e,t){return e==="head"?i:e==="vessels"?t(`${i}.vessels`)?`${i}.vessels`:i:e==="spine"&&t(`${i}.spine`)?`${i}.spine`:t(`${i}.body`)?`${i}.body`:i}var ah=Ce('<button type="button" role="radio"> </button>'),G_=Ce('<div class="row svelte-1x9pj0t"><span id="pb-l"> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="pb-l"><button type="button" role="radio"> </button> <button type="button" role="radio"> </button></div></div>'),W_=Ce('<li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" aria-hidden="true"></span> </span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li>'),X_=Ce('<div class="cp svelte-1x9pj0t"><div class="sec mode svelte-1x9pj0t"><div class="seg svelte-1x9pj0t" role="group"><button type="button"><!> </button> <button type="button"><!> </button></div> <p class="hint svelte-1x9pj0t"> </p></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t" id="cb-l"> </div> <div class="seg wrap svelte-1x9pj0t" role="radiogroup" aria-labelledby="cb-l"></div> <!></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t"> </div> <ul class="layers svelte-1x9pj0t" role="list"><!> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:#e2e8f0" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">X</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:var(--accent)" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">I</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li></ul></div> <div class="sec svelte-1x9pj0t"><label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.01" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.005" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <div class="row svelte-1x9pj0t"><span class="faint sm-t svelte-1x9pj0t" id="ax-l"><!> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="ax-l"></div></div></div> <div class="sec tree svelte-1x9pj0t"><!></div></div>');function q_(i,e){Ln(e,!0);const t=Ue(()=>e.store.s),n=de=>e.store.dispatch(de),s=(de,Se)=>V(mu(de,e.store.wording,Fn),Se),r=de=>Fn(`m3d.layer.${de}`)?s(`m3d.layer.${de}`):de.replace(/_/g," "),a=Ue(()=>e.store.index.lobes.size>1),o=Ue(()=>[{id:"anatomy",label:V("m3d.color.anatomy")},..._(a)?[{id:"lobes",label:s("m3d.color.lobes")}]:[],{id:"natural",label:V("m3d.color.natural")},...e.dataMaps.map(de=>({id:`data:${de.key}`,label:e.dataLabel(de),title:V("m3d.color.dataTitle",{name:e.dataLabel(de)})}))]),l=["y","x","z"],c=de=>Math.round(de*100);var h=X_(),u=ie(h),d=ie(u),f=ie(d);let g;var v=ie(f);Mt(v,{name:"square",size:15});var m=U(v,1,!0),p=U(f,2);let y;var b=ie(p);Mt(b,{name:"spark",size:15});var x=U(b,1,!0),w=U(d,2),R=Q(w,!0),A=U(u,2),P=ie(A),S=Q(P,!0),M=U(P,2);qt(M,21,()=>_(o),de=>de.id,(de,Se)=>{var Re=ah();let $;var _e=Q(Re,!0);Ee(()=>{Ge(Re,"aria-checked",_(t).colorBy===_(Se).id),Ge(Re,"title",_(Se).title),$=Bt(Re,1,"svelte-1x9pj0t",null,$,{on:_(t).colorBy===_(Se).id}),k(_e,_(Se).label)}),ut("click",Re,()=>n({type:"colorBy",colorBy:_(Se).id})),ve(de,Re)});var T=U(M,2);{var I=de=>{var Se=G_(),Re=ie(Se),$=Q(Re,!0),_e=U(Re,2),Le=ie(_e);let ke;var Me=Q(Le,!0),Ne=U(Le,2);let He;var Qe=Q(Ne,!0);Ee((z,we,ne)=>{k($,z),Ge(Le,"aria-checked",_(t).pickBy==="structure"),ke=Bt(Le,1,"svelte-1x9pj0t",null,ke,{on:_(t).pickBy==="structure"}),k(Me,we),Ge(Ne,"aria-checked",_(t).pickBy==="lobe"),He=Bt(Ne,1,"svelte-1x9pj0t",null,He,{on:_(t).pickBy==="lobe"}),k(Qe,ne)},[()=>V("m3d.pickBy"),()=>V("m3d.pickBy.structure"),()=>s("m3d.pickBy.lobe")]),ut("click",Le,()=>n({type:"pickBy",pickBy:"structure"})),ut("click",Ne,()=>n({type:"pickBy",pickBy:"lobe"})),ve(de,Se)};Xe(T,de=>{_(a)&&de(I)})}var F=U(A,2),B=ie(F),Y=Q(B,!0),X=U(B,2),re=ie(X);qt(re,16,()=>e.store.index.layers,de=>de,(de,Se)=>{var Re=W_(),$=ie(Re);let _e;var Le=ie($),ke=ie(Le),Me=U(ke,1,!0);Ee(Ne=>{Ge($,"aria-checked",!!_(t).show[Se]),_e=Bt($,1,"tg svelte-1x9pj0t",null,_e,{on:!!_(t).show[Se]}),vn(ke,`background:${dm[Se]??"#cbd5e1"??""}`),k(Me,Ne)},[()=>r(Se)]),ut("click",$,()=>n({type:"layer",layer:Se})),ve(de,Re)});var J=U(re,2),ye=ie(J);let ee;var pe=ie(ye),se=U(ie(pe)),me=U(J,2),W=ie(me);let G;var te=ie(W),ue=U(ie(te)),Z=U(F,2),xe=ie(Z),Ae=ie(xe),Fe=Q(Ae,!0),De=U(Ae,2),We=U(De,2),O=Q(We),$e=U(xe,2),qe=ie($e),Ye=Q(qe,!0),Be=U(qe,2),st=U(Be,2),Pe=Q(st,!0),L=U($e,2),E=ie(L),D=ie(E);Mt(D,{name:"cut",size:13});var H=U(D),oe=U(E,2);qt(oe,21,()=>l,Bn,(de,Se)=>{var Re=ah();let $;var _e=Q(Re,!0);Ee(Le=>{Ge(Re,"aria-checked",_(t).cutAxis===_(Se)),$=Bt(Re,1,"svelte-1x9pj0t",null,$,{on:_(t).cutAxis===_(Se)}),k(_e,Le)},[()=>V(`m3d.axis.${_(Se)}`)]),ut("click",Re,()=>n({type:"cutAxis",axis:_(Se)})),ve(de,Re)});var ae=U(Z,2),Oe=ie(ae);mf(Oe,()=>e.tree),Ee((de,Se,Re,$,_e,Le,ke,Me,Ne,He,Qe,z,we,ne,q,ge,Te,Ze,ot)=>{Ge(d,"aria-label",de),Ge(f,"aria-pressed",_(t).mode==="mine"),g=Bt(f,1,"svelte-1x9pj0t",null,g,{on:_(t).mode==="mine"}),k(m,Se),Ge(p,"aria-pressed",_(t).mode==="learn"),y=Bt(p,1,"svelte-1x9pj0t",null,y,{on:_(t).mode==="learn"}),k(x,Re),k(R,$),k(S,_e),k(Y,Le),Ge(ye,"aria-checked",_(t).xray),ee=Bt(ye,1,"tg svelte-1x9pj0t",null,ee,{on:_(t).xray}),Ge(ye,"title",ke),k(se,`${Me??""} `),Ge(W,"aria-checked",_(t).isolate),G=Bt(W,1,"tg svelte-1x9pj0t",null,G,{on:_(t).isolate}),W.disabled=!_(t).sel,Ge(W,"title",Ne),k(ue,`${He??""} `),k(Fe,Qe),ko(De,_(t).explode),vn(De,`--p:${z??""}%`),Ge(De,"aria-valuetext",`${we??""}%`),k(O,`${ne??""}%`),k(Ye,q),ko(Be,_(t).cut),vn(Be,`--p:${ge??""}%`),Ge(Be,"aria-valuetext",Te),k(Pe,Ze),k(H,` ${ot??""}`)},[()=>V("m3d.mode"),()=>V("m3d.mode.mine"),()=>V("m3d.mode.learn"),()=>V(_(t).mode==="mine"?"m3d.mode.mine.hint":"m3d.mode.learn.hint"),()=>V("m3d.colorBy"),()=>V("m3d.layers"),()=>s("m3d.xray.title"),()=>s("m3d.xray"),()=>V("m3d.isolate.title"),()=>V("m3d.isolate"),()=>V("m3d.explode"),()=>c(_(t).explode),()=>c(_(t).explode),()=>c(_(t).explode),()=>V("m3d.cut"),()=>c(_(t).cut),()=>_(t).cut>=.999?V("m3d.cut.off"):`${c(_(t).cut)}%`,()=>_(t).cut>=.999?V("m3d.cut.off"):`${c(_(t).cut)}%`,()=>V("m3d.cut.axis")]),ut("click",f,()=>n({type:"mode",mode:"mine"})),ut("click",p,()=>n({type:"mode",mode:"learn"})),ut("click",ye,()=>n({type:"xray"})),ut("click",W,()=>n({type:"isolate"})),ut("input",De,de=>n({type:"explode",value:+de.currentTarget.value})),ut("input",Be,de=>n({type:"cut",value:+de.currentTarget.value})),ve(i,h),In()}Si(["click","input"]);function Hr(i,e){if(!i.length)return NaN;const t=(i.length-1)*Math.max(0,Math.min(1,e)),n=Math.floor(t),s=Math.ceil(t);return i[n]+(i[s]-i[n])*(t-n)}function j_(i,e=2){const t=new Map;for(const[s,r]of Object.entries((i==null?void 0:i.regions)??{}))if(!/^[VHB]\|/.test(s))for(const a of r.measurements??[]){if(typeof a.value!="number"||!Number.isFinite(a.value))continue;let o=t.get(a.key);o||t.set(a.key,o={label:a.label||a.key,unit:a.unit??"",values:new Map}),o.values.set(s,a.value)}const n=[];for(const[s,r]of t){if(r.values.size<e)continue;const a=[...r.values.values()].sort((h,u)=>h-u),o=a[0]<0&&a[a.length-1]>0;let l,c;if(o){const h=a.map(Math.abs).sort((u,d)=>u-d);c=Hr(h,.95)||1,l=-c}else{const h=Hr(a,.25),u=Hr(a,.75),d=u-h;l=Math.max(Hr(a,.05),h-1.5*d),c=Math.min(Hr(a,.95),u+1.5*d),c>l||(l=a[0],c=a[a.length-1]),c>l||(c=l+1)}n.push({key:s,label:r.label,unit:r.unit,values:r.values,lo:l,hi:c,diverging:o,stops:o?mm:Sf})}return n}function Y_(i,e){const t=i.values.get(e);return t===void 0?Go(Mf):xm((t-i.lo)/(i.hi-i.lo),i.stops)}const K_=i=>[i.lo,(i.lo+i.hi)/2,i.hi];var Z_=Ce('<button type="button" class="svelte-1r8wc48"> </button>'),J_=Ce('<option class="svelte-1r8wc48"> </option>'),oh=Ce('<button type="button"><!><span class="tx svelte-1r8wc48"> </span></button>'),Q_=Ce('<span class="sep svelte-1r8wc48" aria-hidden="true"></span> <!> <!>',1),$_=Ce('<div class="dock panel svelte-1r8wc48" role="toolbar"><button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-controls"><!></button> <div class="seg wide svelte-1r8wc48" role="group"></div> <label class="narrow vsel svelte-1r8wc48"><span class="sr-only"> </span> <!> <select class="svelte-1r8wc48"><option disabled="" class="svelte-1r8wc48"> </option><!></select></label> <span class="sep svelte-1r8wc48" aria-hidden="true"></span> <button type="button"><!></button> <button type="button" class="btn icon shot svelte-1r8wc48"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <!> <button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-card"><!></button></div>');function eg(i,e){Ln(e,!0);const t=Ue(()=>["left","front","top","right","back","below",...e.store.brain&&e.store.index.layers.includes("hemi_R")?["inside"]:[]]),n=Ue(()=>e.store.s);var s=$_(),r=ie(s),a=ie(r);Mt(a,{name:"sliders",size:17});var o=U(r,2);qt(o,21,()=>_(t),Bn,(T,I)=>{var F=Z_(),B=Q(F,!0);Ee((Y,X)=>{Ge(F,"title",Y),k(B,X)},[()=>V(`m3d.view.${_(I)}.title`),()=>V(`m3d.view.${_(I)}`)]),ut("click",F,()=>e.onview(_(I))),ve(T,F)});var l=U(o,2),c=ie(l),h=Q(c,!0),u=U(c,2);Mt(u,{name:"cube",size:15});var d=U(u,2),f=ie(d),g=Q(f,!0);f.value=f.__value="";var v=U(f);qt(v,17,()=>_(t),Bn,(T,I)=>{var F=J_(),B=Q(F,!0),Y={};Ee(X=>{k(B,X),Y!==(Y=_(I))&&(F.value=(F.__value=Y)??"")},[()=>V(`m3d.view.${_(I)}`)]),ve(T,F)}),d.value=d.__value="";var m=U(l,4);let p;var y=ie(m);Mt(y,{name:"rotate",size:17});var b=U(m,2),x=ie(b);Mt(x,{name:"camera",size:17});var w=U(b,2),R=ie(w);Mt(R,{name:"reset",size:17});var A=U(w,2);{var P=T=>{var I=Q_(),F=U(gt(I),2);{var B=re=>{var J=oh();let ye;var ee=ie(J);Mt(ee,{name:"play",size:14});var pe=U(ee),se=Q(pe,!0);Ee((me,W)=>{ye=Bt(J,1,"btn svelte-1r8wc48",null,ye,{on:!!_(n).tour}),Ge(J,"aria-pressed",!!_(n).tour),Ge(J,"title",me),k(se,W)},[()=>V("m3d.tour"),()=>V("m3d.tour")]),ut("click",J,function(...me){var W;(W=e.ontour)==null||W.apply(this,me)}),ve(re,J)};Xe(F,re=>{e.canTour&&re(B)})}var Y=U(F,2);{var X=re=>{var J=oh();let ye;var ee=ie(J);Mt(ee,{name:"spark",size:15});var pe=U(ee),se=Q(pe,!0);Ee((me,W)=>{ye=Bt(J,1,"btn svelte-1r8wc48",null,ye,{on:!!_(n).quiz}),Ge(J,"aria-pressed",!!_(n).quiz),Ge(J,"title",me),k(se,W)},[()=>V("m3d.quiz"),()=>V("m3d.quiz")]),ut("click",J,function(...me){var W;(W=e.onquiz)==null||W.apply(this,me)}),ve(re,J)};Xe(Y,re=>{e.canQuiz&&re(X)})}ve(T,I)};Xe(A,T=>{_(n).mode==="learn"&&T(P)})}var S=U(A,2),M=ie(S);Mt(M,{name:"card",size:17}),Ee((T,I,F,B,Y,X,re,J,ye,ee,pe,se,me,W)=>{Ge(s,"aria-label",T),Ge(r,"aria-expanded",e.controlsOpen),Ge(r,"aria-label",I),Ge(r,"title",F),Ge(o,"aria-label",B),k(h,Y),k(g,X),p=Bt(m,1,"btn icon svelte-1r8wc48",null,p,{on:_(n).rotate}),Ge(m,"aria-pressed",_(n).rotate),Ge(m,"aria-label",re),Ge(m,"title",J),Ge(b,"aria-label",ye),Ge(b,"title",ee),Ge(w,"aria-label",pe),Ge(w,"title",se),Ge(S,"aria-expanded",e.cardOpen),Ge(S,"aria-label",me),Ge(S,"title",W)},[()=>V("m3d.dock"),()=>V("m3d.controls"),()=>V("m3d.controls"),()=>V("m3d.views"),()=>V("m3d.views"),()=>V("m3d.views.pick"),()=>V("m3d.rotate"),()=>V("m3d.rotate"),()=>V("m3d.shot"),()=>V("m3d.shot"),()=>V("m3d.reset"),()=>V("m3d.reset"),()=>V("m3d.card"),()=>V("m3d.card")]),ut("click",r,function(...T){var I;(I=e.ontoggleControls)==null||I.apply(this,T)}),ut("change",d,T=>{const I=T.currentTarget.value;T.currentTarget.value="",I&&e.onview(I)}),ut("click",m,()=>e.store.dispatch({type:"rotate"})),ut("click",b,function(...T){var I;(I=e.onshot)==null||I.apply(this,T)}),ut("click",w,function(...T){var I;(I=e.onreset)==null||I.apply(this,T)}),ut("click",S,function(...T){var I;(I=e.ontoggleCard)==null||I.apply(this,T)}),ve(i,s),In()}Si(["click","change"]);var tg=Ce('<div class="legend panel svelte-qe47ma" role="figure"><div class="ttl svelte-qe47ma"><span> </span><span> </span></div> <div class="grad svelte-qe47ma"></div> <div class="ticks svelte-qe47ma"><span> </span> <span> </span> <span> </span></div> <div class="nd svelte-qe47ma"><i class="svelte-qe47ma"></i> </div></div>');function ng(i,e){Ln(e,!0);const t=Ue(()=>K_(e.map)),n=Ue(()=>e.map.diverging&&/asym/i.test(e.map.key));var s=tg(),r=ie(s),a=ie(r),o=Q(a,!0),l=U(a),c=Q(l,!0),h=U(r,2),u=U(h,2),d=ie(u),f=Q(d,!0),g=U(d,2),v=Q(g,!0),m=U(g,2),p=Q(m,!0),y=U(u,2),b=ie(y),x=U(b);Ee((w,R,A,P,S,M,T)=>{Ge(s,"aria-label",w),k(o,e.label),k(c,e.map.unit),vn(h,`background:${R??""}`),k(f,A),k(v,P),k(p,S),vn(b,`background:${Mf}`),k(x,`${M??""} · ${T??""}`)},[()=>V("m3d.legend",{name:e.label}),()=>ym(e.map.stops),()=>_(n)?V("m3d.legend.rLarger",{v:Rn(Math.abs(_(t)[0]),xi.lang)}):Rn(_(t)[0],xi.lang),()=>_(n)?V("m3d.legend.equal"):Rn(_(t)[1],xi.lang),()=>_(n)?V("m3d.legend.lLarger",{v:Rn(_(t)[2],xi.lang)}):Rn(_(t)[2],xi.lang)+(e.map.diverging?"":"+"),()=>V("m3d.legend.noData"),()=>V("m3d.legend.note")]),ve(i,s),In()}var ig=Ce('<span class="fb ok svelte-1xhmue8"> </span>'),sg=Ce('<span class="fb bad svelte-1xhmue8"> </span>'),rg=Ce('<div role="status" aria-live="polite"><span class="q svelte-1xhmue8"> <b class="svelte-1xhmue8"> </b></span> <span class="score svelte-1xhmue8"> </span> <!> <button type="button" class="btn svelte-1xhmue8"> </button> <button type="button" class="btn icon svelte-1xhmue8"><!></button></div>');function ag(i,e){Ln(e,!0);var t=rg();let n;var s=ie(t),r=ie(s),a=U(r),o=Q(a,!0),l=U(s,2),c=Q(l),h=U(l,2);{var u=p=>{var y=ig(),b=Q(y,!0);Ee(x=>k(b,x),[()=>V("m3d.quiz.right")]),ve(p,y)},d=p=>{var y=sg(),b=Q(y,!0);Ee(x=>k(b,x),[()=>V("m3d.quiz.wrong",{name:e.name(e.quiz.last.picked)})]),ve(p,y)};Xe(h,p=>{var y;(y=e.quiz.last)!=null&&y.ok?p(u):e.quiz.last&&e.quiz.last.picked&&p(d,1)})}var f=U(h,2),g=Q(f,!0),v=U(f,2),m=ie(v);Mt(m,{name:"close",size:16}),Ee((p,y,b,x,w,R)=>{var A,P;n=Bt(t,1,"banner panel svelte-1xhmue8",null,n,{ok:((A=e.quiz.last)==null?void 0:A.ok)===!0,bad:((P=e.quiz.last)==null?void 0:P.ok)===!1}),k(r,`${p??""} `),k(o,y),Ge(l,"aria-label",b),k(c,`${e.quiz.score??""}/${e.quiz.n??""}`),f.disabled=e.quiz.revealing,k(g,x),Ge(v,"aria-label",w),Ge(v,"title",R)},[()=>V("m3d.quiz.ask"),()=>e.name(e.quiz.target),()=>V("m3d.quiz.score",{s:e.quiz.score,n:e.quiz.n}),()=>V("m3d.quiz.skip"),()=>V("m3d.quiz.end"),()=>V("m3d.quiz.end")]),ut("click",f,function(...p){var y;(y=e.onskip)==null||y.apply(this,p)}),ut("click",v,function(...p){var y;(y=e.onend)==null||y.apply(this,p)}),ve(i,t),In()}Si(["click"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="170",vr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},og=0,lh=1,lg=2,Rf=1,cg=2,Vi=3,hi=0,Pn=1,Yn=2,_s=0,xr=1,ch=2,uh=3,hh=4,ug=5,Us=100,hg=101,dg=102,fg=103,pg=104,mg=200,_g=201,gg=202,vg=203,dc=204,fc=205,xg=206,yg=207,bg=208,Mg=209,Sg=210,Eg=211,Tg=212,Ag=213,wg=214,pc=0,mc=1,_c=2,Tr=3,gc=4,vc=5,xc=6,yc=7,Cf=0,Rg=1,Cg=2,gs=0,Pg=1,Lg=2,Ig=3,Pf=4,Dg=5,Ug=6,Ng=7,dh="attached",Fg="detached",Lf=300,Ar=301,wr=302,bc=303,Mc=304,Zo=306,Rr=1e3,hs=1001,Wo=1002,kn=1003,If=1004,ra=1005,ti=1006,Lo=1007,Xi=1008,Yi=1009,Df=1010,Uf=1011,_a=1012,_u=1013,vs=1014,ni=1015,Pa=1016,gu=1017,vu=1018,Cr=1020,Nf=35902,Ff=1021,Of=1022,Kn=1023,Bf=1024,kf=1025,yr=1026,Pr=1027,xu=1028,Jo=1029,zf=1030,yu=1031,bu=1033,Io=33776,Do=33777,Uo=33778,No=33779,Sc=35840,Ec=35841,Tc=35842,Ac=35843,wc=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,Ic=37810,Dc=37811,Uc=37812,Nc=37813,Fc=37814,Oc=37815,Bc=37816,kc=37817,zc=37818,Vc=37819,Hc=37820,Gc=37821,Fo=36492,Wc=36494,Xc=36495,Vf=36283,qc=36284,jc=36285,Yc=36286,ga=2300,va=2301,cl=2302,fh=2400,ph=2401,mh=2402,Og=2500,Bg=0,Hf=1,Kc=2,kg=3200,zg=3201,Gf=0,Vg=1,us="",sn="srgb",Vn="srgb-linear",Qo="linear",Ht="srgb",zs=7680,_h=519,Hg=512,Gg=513,Wg=514,Wf=515,Xg=516,qg=517,jg=518,Yg=519,Zc=35044,gh="300 es",qi=2e3,Xo=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const ua=Math.PI/180,Lr=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function Kg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function ha(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return ha(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function $g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ev(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nv(i,e){return i+Math.random()*(e-i)}function iv(i){return i*(.5-Math.random())}function sv(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rv(i){return i*ua}function av(i){return i*Lr}function ov(i){return(i&i-1)===0&&i!==0}function lv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Su={DEG2RAD:ua,RAD2DEG:Lr,generateUUID:bi,clamp:gn,euclideanModulo:Mu,mapLinear:Kg,inverseLerp:Zg,lerp:ha,damp:Jg,pingpong:Qg,smoothstep:$g,smootherstep:ev,randInt:tv,randFloat:nv,randFloatSpread:iv,seededRandom:sv,degToRad:rv,radToDeg:av,isPowerOfTwo:ov,ceilPowerOfTwo:lv,floorPowerOfTwo:cv,setQuaternionFromProperEuler:uv,normalize:Ft,denormalize:yi};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,s,r,a,o,l,c){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],x=s[7],w=s[2],R=s[5],A=s[8];return r[0]=a*v+o*y+l*w,r[3]=a*m+o*b+l*R,r[6]=a*p+o*x+l*A,r[1]=c*v+h*y+u*w,r[4]=c*m+h*b+u*R,r[7]=c*p+h*x+u*A,r[2]=d*v+f*y+g*w,r[5]=d*m+f*b+g*R,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new vt;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hv(){const i=xa("canvas");return i.style.display="block",i}const xh={};function aa(i){i in xh||(xh[i]=!0,console.warn(i))}function dv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ht&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ht&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yh=[.64,.33,.3,.6,.15,.06],bh=[.2126,.7152,.0722],Mh=[.3127,.329],Sh=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[Vn]:{primaries:yh,whitePoint:Mh,transfer:Qo,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:yh,whitePoint:Mh,transfer:Ht,toXYZ:Sh,fromXYZ:Eh,luminanceCoefficients:bh,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Vs;class mv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=xa("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gv=0;class yn extends Bs{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=hs,s=hs,r=ti,a=Xi,o=Kn,l=Yi,c=yn.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=bi(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Lf;yn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,w=(p+1)/2,R=(h+d)/4,A=(u+v)/4,P=(g+m)/4;return b>x&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=A/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vv extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends vv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xv extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,p*y);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const x=o*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new N,Th=new Pi;class jt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Ba.subVectors(this.max,Gr),Hs.subVectors(e.a,Gr),Gs.subVectors(e.b,Gr),Ws.subVectors(e.c,Gr),ts.subVectors(Gs,Hs),ns.subVectors(Ws,Gs),ys.subVectors(Hs,Ws);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-ys.z,ys.y,ts.z,0,-ts.x,ns.z,0,-ns.x,ys.z,0,-ys.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-ys.y,ys.x,0];return!fl(t,Hs,Gs,Ws,Ba)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Hs,Gs,Ws,Ba))?!1:(ka.crossVectors(ts,ns),t=[ka.x,ka.y,ka.z],fl(t,Hs,Gs,Ws,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new N,new N,new N,new N,new N,new N,new N,new N],fi=new N,Oa=new jt,Hs=new N,Gs=new N,Ws=new N,ts=new N,ns=new N,ys=new N,Gr=new N,Ba=new N,ka=new N,bs=new N;function fl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);const o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yv=new jt,Wr=new N,pl=new N;class zn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(pl)),this.expandByPoint(Wr.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new N,ml=new N,za=new N,is=new N,_l=new N,Va=new N,gl=new N;class ks{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),is.copy(this.origin).sub(ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(za),o=is.dot(this.direction),l=-is.dot(za),c=is.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(za,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){_l.subVectors(t,e),Va.subVectors(n,e),gl.crossVectors(_l,Va);let a=this.direction.dot(gl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;is.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(is,Va));if(l<0)return null;const c=o*this.direction.dot(_l.cross(is));if(c<0||l+c>a)return null;const h=-o*is.dot(gl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bv,e,Mv)}lookAt(e,t,n){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ss.crossVectors(n,Qn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ss.crossVectors(n,Qn)),ss.normalize(),Ha.crossVectors(Qn,ss),s[0]=ss.x,s[4]=Ha.x,s[8]=Qn.x,s[1]=ss.y,s[5]=Ha.y,s[9]=Qn.y,s[2]=ss.z,s[6]=Ha.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],b=n[7],x=n[11],w=n[15],R=s[0],A=s[4],P=s[8],S=s[12],M=s[1],T=s[5],I=s[9],F=s[13],B=s[2],Y=s[6],X=s[10],re=s[14],J=s[3],ye=s[7],ee=s[11],pe=s[15];return r[0]=a*R+o*M+l*B+c*J,r[4]=a*A+o*T+l*Y+c*ye,r[8]=a*P+o*I+l*X+c*ee,r[12]=a*S+o*F+l*re+c*pe,r[1]=h*R+u*M+d*B+f*J,r[5]=h*A+u*T+d*Y+f*ye,r[9]=h*P+u*I+d*X+f*ee,r[13]=h*S+u*F+d*re+f*pe,r[2]=g*R+v*M+m*B+p*J,r[6]=g*A+v*T+m*Y+p*ye,r[10]=g*P+v*I+m*X+p*ee,r[14]=g*S+v*F+m*re+p*pe,r[3]=y*R+b*M+x*B+w*J,r[7]=y*A+b*T+x*Y+w*ye,r[11]=y*P+b*I+x*X+w*ee,r[15]=y*S+b*F+x*re+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,w=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,R=t*y+n*b+s*x+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=b*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=x*A,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=l*c,b=l*h,x=l*u,w=n.x,R=n.y,A=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+x)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+b)*A,s[9]=(m-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);const c=1/r,h=1/a,u=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=qi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===qi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h;let g,v;if(o===qi)g=(a+r)*u,v=-2*u;else if(o===Xo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new N,pi=new ht,bv=new N(0,0,0),Mv=new N(1,1,1),ss=new N,Ha=new N,Qn=new N,Ah=new ht,wh=new Pi;class Li{constructor(e=0,t=0,n=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sv=0;const Rh=new N,qs=new Pi,Oi=new ht,Ga=new N,Xr=new N,Ev=new N,Tv=new Pi,Ch=new N(1,0,0),Ph=new N(0,1,0),Lh=new N(0,0,1),Ih={type:"added"},Av={type:"removed"},js={type:"childadded",child:null},vl={type:"childremoved",child:null};class Kt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new N,t=new Li,n=new Pi,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new vt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Xr,Ga,this.up):Oi.lookAt(Ga,Xr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Oi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Av),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new N(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new N,Bi=new N,xl=new N,ki=new N,Ys=new N,Ks=new N,Dh=new N,yl=new N,bl=new N,Ml=new N,Sl=new It,El=new It,Tl=new It;class Sn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),Bi.subVectors(n,t),xl.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(Bi),l=mi.dot(xl),c=Bi.dot(Bi),h=Bi.dot(xl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sl.setScalar(0),El.setScalar(0),Tl.setScalar(0),Sl.fromBufferAttribute(e,t),El.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(El,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),Bi.subVectors(e,t),mi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),mi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,n),Ks.subVectors(r,n),yl.subVectors(e,n);const l=Ys.dot(yl),c=Ks.dot(yl);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,s);const h=Ys.dot(bl),u=Ks.dot(bl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);Ml.subVectors(e,r);const f=Ys.dot(Ml),g=Ks.dot(Ml);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ks,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Dh,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=Mu(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Al(a,r,e+1/3),this.g=Al(a,r,e),this.b=Al(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Et.fromWorkingColorSpace(An.copy(this),e),Math.round(gn(An.r*255,0,255))*65536+Math.round(gn(An.g*255,0,255))*256+Math.round(gn(An.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(An.copy(this),t);const n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=sn){Et.fromWorkingColorSpace(An.copy(this),e);const t=An.r,n=An.g,s=An.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Wa);const n=ha(rs.h,Wa.h,t),s=ha(rs.s,Wa.s,t),r=ha(rs.l,Wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new ct;ct.NAMES=Yf;let wv=0;class Ci extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=bi(),this.name="",this.blending=xr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ds extends Ci{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new N,Xa=new at;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Kf extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zf extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rv=0;const ri=new ht,wl=new Kt,Zs=new N,$n=new jt,qr=new jt,_n=new N;class si extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Zf:Kf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors($n.min,qr.min),$n.expandByPoint(_n),_n.addVectors($n.max,qr.max),$n.expandByPoint(_n)):($n.expandByPoint(qr.min),$n.expandByPoint(qr.max))}$n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),_n.add(Zs)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new N,l[P]=new N;const c=new N,h=new N,u=new N,d=new at,f=new at,g=new at,v=new N,m=new N;function p(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[P].add(v),o[S].add(v),o[M].add(v),l[P].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],T=M.start,I=M.count;for(let F=T,B=T+I;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new N,x=new N,w=new N,R=new N;function A(P){w.fromBufferAttribute(s,P),R.copy(w);const S=o[P];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(R,S);const T=x.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,T)}for(let P=0,S=y.length;P<S;++P){const M=y[P],T=M.start,I=M.count;for(let F=T,B=T+I;F<B;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new ht,Ms=new ks,qa=new zn,Nh=new N,ja=new N,Ya=new N,Ka=new N,Rl=new N,Za=new N,Fh=new N,Ja=new N;class Ct extends Kt{constructor(e=new si,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Rl.fromBufferAttribute(u,e),a?Za.addScaledVector(Rl,h):Za.addScaledVector(Rl.sub(t),h))}t.add(Za)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(qa.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(qa,Nh)===null||Ms.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=b;x<w;x+=3){const R=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);s=Qa(this,p,e,n,c,h,u,R,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=Qa(this,a,e,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,w=b;x<w;x+=3){const R=x,A=x+1,P=x+2;s=Qa(this,p,e,n,c,h,u,R,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,b=m+1,x=m+2;s=Qa(this,a,e,n,c,h,u,y,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Cv(i,e,t,n,s,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===hi,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:i}}function Qa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ja),i.getVertexPosition(l,Ya),i.getVertexPosition(c,Ka);const h=Cv(i,e,t,n,ja,Ya,Ka,Fh);if(h){const u=new N;Sn.getBarycoord(Fh,ja,Ya,Ka,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};Sn.getNormal(ja,Ya,Ka,d.normal),h.face=d,h.barycoord=u}return h}class Fr extends si{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(h,3)),this.setAttribute("uv",new ui(u,2));function g(v,m,p,y,b,x,w,R,A,P,S){const M=x/A,T=w/P,I=x/2,F=w/2,B=R/2,Y=A+1,X=P+1;let re=0,J=0;const ye=new N;for(let ee=0;ee<X;ee++){const pe=ee*T-F;for(let se=0;se<Y;se++){const me=se*M-I;ye[v]=me*y,ye[m]=pe*b,ye[p]=B,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=R>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(se/A),u.push(1-ee/P),re+=1}}for(let ee=0;ee<P;ee++)for(let pe=0;pe<A;pe++){const se=d+pe+Y*ee,me=d+pe+Y*(ee+1),W=d+(pe+1)+Y*(ee+1),G=d+(pe+1)+Y*ee;l.push(se,me,G),l.push(me,W,G),J+=6}o.addGroup(f,J,S),f+=J,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nn(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const s in n)e[s]=n[s]}return e}function Pv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Lv={clone:Ir,merge:Nn};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ci{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new N,Oh=new at,Bh=new at;class On extends Qf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class Uv extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(Js,Qs,e,t);s.layers=this.layers,this.add(s);const r=new On(Js,Qs,e,t);r.layers=this.layers,this.add(r);const a=new On(Js,Qs,e,t);a.layers=this.layers,this.add(a);const o=new On(Js,Qs,e,t);o.layers=this.layers,this.add(o);const l=new On(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new On(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $f extends yn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nv extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $f(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fr(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:_s});r.uniforms.tEquirect.value=t;const a=new Ct(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=ti),new Uv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Cl=new N,Fv=new N,Ov=new vt;class vi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Cl.subVectors(n,t).cross(Fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ov.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new zn,$a=new N;class $o{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+y).normalize(),n[3].setComponents(l-a,d-h,m-g,x-y).normalize(),n[4].setComponents(l-o,d-u,m-v,x-b).normalize(),t===qi)n[5].setComponents(l+o,d+u,m+v,x+b).normalize();else if(t===Xo)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bv(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class el extends si{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let b=0;b<c;b++){const x=b*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,x=y+c*(p+1),w=y+1+c*(p+1),R=y+1+c*p;f.push(b,x,R),f.push(x,w,R)}this.setIndex(f),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(v,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,$v=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Ox=`struct PhysicalMaterial {
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
}`,Bx=`
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
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
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
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
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sy=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
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
}`,Xy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,$y=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,h0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:kv,alphahash_pars_fragment:zv,alphamap_fragment:Vv,alphamap_pars_fragment:Hv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:qv,batching_pars_vertex:jv,batching_vertex:Yv,begin_vertex:Kv,beginnormal_vertex:Zv,bsdfs:Jv,iridescence_fragment:Qv,bumpmap_pars_fragment:$v,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ax,color_vertex:ox,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:_x,envmap_fragment:gx,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Lx,envmap_vertex:bx,fog_vertex:Mx,fog_pars_vertex:Sx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:wx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Ix,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Nx,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:zx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:jx,map_particle_pars_fragment:Yx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:$x,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:ry,normal_vertex:ay,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:_y,dithering_pars_fragment:gy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:by,shadowmap_vertex:My,shadowmask_pars_fragment:Sy,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:Ay,skinnormal_vertex:wy,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Iy,transmission_pars_fragment:Dy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:By,background_frag:ky,backgroundCube_vert:zy,backgroundCube_frag:Vy,cube_vert:Hy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:qy,distanceRGBA_frag:jy,equirect_vert:Yy,equirect_frag:Ky,linedashed_vert:Zy,linedashed_frag:Jy,meshbasic_vert:Qy,meshbasic_frag:$y,meshlambert_vert:e0,meshlambert_frag:t0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:u0,meshtoon_frag:h0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:_0,sprite_frag:g0},Ke={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Nn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new ct(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Nn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Nn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Nn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new ct(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Nn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Nn([Ke.points,Ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Nn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Nn([Ke.common,Ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Nn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Nn([Ke.sprite,Ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Nn([Ke.common,Ke.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Nn([Ke.lights,Ke.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const eo={r:0,b:0,g:0},Es=new Li,v0=new ht;function x0(i,e,t,n,s,r,a){const o=new ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Zo)?(h===void 0&&(h=new Ct(new Fr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ir(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Es)),h.material.toneMapped=Et.getTransfer(x.colorSpace)!==Ht,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ct(new el(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ir(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Et.getTransfer(x.colorSpace)!==Ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(eo,Jf(i)),n.buffers.color.setClear(eo.r,eo.g,eo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function y0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,T,I,F,B){let Y=!1;const X=u(F,I,T);r!==X&&(r=X,c(r.object)),Y=f(M,F,I,B),Y&&g(M,F,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(M,T,I,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,T,I){const F=I.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let Y=B[T.id];Y===void 0&&(Y={},B[T.id]=Y);let X=Y[F];return X===void 0&&(X=d(l()),Y[F]=X),X}function d(M){const T=[],I=[],F=[];for(let B=0;B<t;B++)T[B]=0,I[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,T,I,F){const B=r.attributes,Y=T.attributes;let X=0;const re=I.getAttributes();for(const J in re)if(re[J].location>=0){const ee=B[J];let pe=Y[J];if(pe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(M,T,I,F){const B={},Y=T.attributes;let X=0;const re=I.getAttributes();for(const J in re)if(re[J].location>=0){let ee=Y[J];ee===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),B[J]=pe,X++}r.attributes=B,r.attributesNum=X,r.index=F}function v(){const M=r.newAttributes;for(let T=0,I=M.length;T<I;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const I=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;I[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),B[M]!==T&&(i.vertexAttribDivisor(M,T),B[M]=T)}function y(){const M=r.newAttributes,T=r.enabledAttributes;for(let I=0,F=T.length;I<F;I++)T[I]!==M[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function b(M,T,I,F,B,Y,X){X===!0?i.vertexAttribIPointer(M,T,I,B,Y):i.vertexAttribPointer(M,T,I,F,B,Y)}function x(M,T,I,F){v();const B=F.attributes,Y=I.getAttributes(),X=T.defaultAttributeValues;for(const re in Y){const J=Y[re];if(J.location>=0){let ye=B[re];if(ye===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const ee=ye.normalized,pe=ye.itemSize,se=e.get(ye);if(se===void 0)continue;const me=se.buffer,W=se.type,G=se.bytesPerElement,te=W===i.INT||W===i.UNSIGNED_INT||ye.gpuType===_u;if(ye.isInterleavedBufferAttribute){const ue=ye.data,Z=ue.stride,xe=ye.offset;if(ue.isInstancedInterleavedBuffer){for(let Ae=0;Ae<J.locationSize;Ae++)p(J.location+Ae,ue.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<J.locationSize;Ae++)m(J.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Ae=0;Ae<J.locationSize;Ae++)b(J.location+Ae,pe/J.locationSize,W,ee,Z*G,(xe+pe/J.locationSize*Ae)*G,te)}else{if(ye.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)p(J.location+ue,ye.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ue=0;ue<J.locationSize;ue++)m(J.location+ue);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ue=0;ue<J.locationSize;ue++)b(J.location+ue,pe/J.locationSize,W,ee,pe*G,pe/J.locationSize*ue*G,te)}}else if(X!==void 0){const ee=X[re];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(J.location,ee);break;case 3:i.vertexAttrib3fv(J.location,ee);break;case 4:i.vertexAttrib4fv(J.location,ee);break;default:i.vertexAttrib1fv(J.location,ee)}}}}y()}function w(){P();for(const M in n){const T=n[M];for(const I in T){const F=T[I];for(const B in F)h(F[B].object),delete F[B];delete T[I]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const I in T){const F=T[I];for(const B in F)h(F[B].object),delete F[B];delete T[I]}delete n[M.id]}function A(M){for(const T in n){const I=n[T];if(I[M.id]===void 0)continue;const F=I[M.id];for(const B in F)h(F[B].object),delete F[B];delete I[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function b0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:w,maxSamples:R}}function S0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new vi,o=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,b=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,b,f);for(let w=0;w!==b;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function E0(i){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=Ar:o===Mc&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===Mc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nv(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tu extends Qf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,kh=[.125,.215,.35,.446,.526,.582],Ns=20,Pl=new Tu,zh=new ct;let Ll=null,Il=0,Dl=0,Ul=!1;const Ds=(1+Math.sqrt(5))/2,$s=1/Ds,Vh=[new N(-Ds,$s,0),new N(Ds,$s,0),new N(-$s,0,Ds),new N($s,0,Ds),new N(0,Ds,-$s),new N(0,Ds,$s),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Il,Dl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Pa,format:Kn,colorSpace:Vn,depthBuffer:!1},s=Hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(r)),this._blurMaterial=A0(r,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,s){const o=new On(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=gs,h.autoClear=!1;const f=new ds({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Ct(new Fr,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(zh),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;to(s,y*b,p>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ar||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(s-r-1)%Vh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ct(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let y=0;for(let A=0;A<Ns;++A){const P=A/v,S=Math.exp(-P*P/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const x=this._sizeLods[s],w=3*x*(s>b-mr?s-b+mr:0),R=4*(this._cubeSize-x);to(t,w,R,3*x,2*x),l.setRenderTarget(t),l.render(u,Pl)}}function T0(i){const e=[],t=[],n=[];let s=i;const r=i-mr+1+kh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mr?l=kh[a-i+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,P=R>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(S,v*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const w=new si;w.setAttribute("position",new un(y,v)),w.setAttribute("uv",new un(b,m)),w.setAttribute("faceIndex",new un(x,p)),e.push(w),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hh(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function A0(i,e,t){const n=new Float32Array(Ns),s=new N(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Gh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Wh(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function w0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bc||l===Mc,h=l===Ar||l===wr;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Jc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function R0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function C0(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let b=0,x=y.length;b<x;b+=3){const w=y[b+0],R=y[b+1],A=y[b+2];d.push(w,R,R,A,A,w)}}else if(g!==void 0){const y=g.array;v=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){const w=b+0,R=b+1,A=b+2;d.push(w,R,R,A,A,w)}}else return;const m=new(Xf(d)?Zf:Kf)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function P0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function I0(i,e,t){const n=new WeakMap,s=new It;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=o.attributes.position.count*b,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*w*4*u),A=new jf(R,x,w,u);A.type=ni,A.needsUpdate=!0;const P=b*4;for(let M=0;M<u;M++){const T=m[M],I=p[M],F=y[M],B=x*w*4*M;for(let Y=0;Y<T.count;Y++){const X=Y*P;f===!0&&(s.fromBufferAttribute(T,Y),R[B+X+0]=s.x,R[B+X+1]=s.y,R[B+X+2]=s.z,R[B+X+3]=0),g===!0&&(s.fromBufferAttribute(I,Y),R[B+X+4]=s.x,R[B+X+5]=s.y,R[B+X+6]=s.z,R[B+X+7]=0),v===!0&&(s.fromBufferAttribute(F,Y),R[B+X+8]=s.x,R[B+X+9]=s.y,R[B+X+10]=s.z,R[B+X+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new at(x,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function D0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class tp extends yn{constructor(e,t,n,s,r,a,o,l,c,h=yr){if(h!==yr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yr&&(n=vs),n===void 0&&h===Pr&&(n=Cr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const np=new yn,Xh=new tp(1,1),ip=new jf,sp=new xv,rp=new $f,qh=[],jh=[],Yh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tl(i,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function U0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),dn(t,n)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),dn(t,n)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),dn(t,n)}}function V0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function K0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xh.compareFunction=Wf,r=Xh):r=np,t.setTexture2D(e||r,s)}function Z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sp,s)}function J0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rp,s)}function Q0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ip,s)}function $0(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return k0;case 35676:return z0;case 5124:case 35670:return V0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return j0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eb(i,e){i.uniform1fv(this.addr,e)}function tb(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function nb(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function ib(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function sb(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rb(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ab(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ob(i,e){i.uniform1iv(this.addr,e)}function lb(i,e){i.uniform2iv(this.addr,e)}function cb(i,e){i.uniform3iv(this.addr,e)}function ub(i,e){i.uniform4iv(this.addr,e)}function hb(i,e){i.uniform1uiv(this.addr,e)}function db(i,e){i.uniform2uiv(this.addr,e)}function fb(i,e){i.uniform3uiv(this.addr,e)}function pb(i,e){i.uniform4uiv(this.addr,e)}function mb(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||np,r[a])}function _b(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sp,r[a])}function gb(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rp,r[a])}function vb(i,e,t){const n=this.cache,s=e.length,r=tl(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ip,r[a])}function xb(i){switch(i){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return hb;case 36294:return db;case 36295:return fb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return vb}}class yb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$0(t.type)}}class bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xb(t.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function Sb(i,e,t){const n=i.name,s=n.length;for(Nl.lastIndex=0;;){const r=Nl.exec(n),a=Nl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jh(t,c===void 0?new yb(o,i,e):new bb(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mb(o),Jh(t,u)),t=u}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sb(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Eb=37297;let Tb=0;function Ab(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $h=new vt;function wb(i){Et._getMatrix($h,Et.workingColorSpace,i);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Qo:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ed(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ab(i.getShaderSource(e),a)}else return s}function Rb(i,e){const t=wb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cb(i,e){let t;switch(e){case Pg:t="Linear";break;case Lg:t="Reinhard";break;case Ig:t="Cineon";break;case Pf:t="ACESFilmic";break;case Ug:t="AgX";break;case Ng:t="Neutral";break;case Dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const no=new N;function Pb(){Et.getLuminanceCoefficients(no);const i=no.x.toFixed(4),e=no.y.toFixed(4),t=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Ib(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Db(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function oa(i){return i!==""}function td(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Ub,Fb)}const Nb=new Map;function Fb(i,e){let t=xt[e];if(t===void 0){const n=Nb.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(Ob,Bb)}function Bb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case wr:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Hb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cf:e="ENVMAP_BLENDING_MULTIPLY";break;case Rg:e="ENVMAP_BLENDING_MIX";break;case Cg:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=kb(t),c=zb(t),h=Vb(t),u=Hb(t),d=Gb(t),f=Lb(t),g=Ib(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?xt.tonemapping_pars_fragment:"",t.toneMapping!==gs?Cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Rb("linearToOutputTexel",t.outputColorSpace),Pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),a=Qc(a),a=td(a,t),a=nd(a,t),o=Qc(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,x=y+p+o,w=Qh(s,s.VERTEX_SHADER,b),R=Qh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(T){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(R).trim();let Y=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,R);else{const re=ed(s,w,"vertex"),J=ed(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+re+`
`+J)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||B==="")&&(X=!1);X&&(T.diagnostics={runnable:Y,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(w),s.deleteShader(R),P=new Oo(s,v),S=Db(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Eb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=R,this}let Xb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jb(e),t.set(e,n)),n}}class jb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Yb(i,e,t,n,s,r,a){const o=new Eu,l=new qb,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,T,I,F){const B=I.fog,Y=F.geometry,X=S.isMeshStandardMaterial?I.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),J=re&&re.mapping===Zo?re.image.height:null,ye=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=ee!==void 0?ee.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let me,W,G,te;if(ye){const rt=Ri[ye];me=rt.vertexShader,W=rt.fragmentShader}else me=S.vertexShader,W=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),te=l.getFragmentShaderID(S);const ue=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),xe=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,Fe=!!S.map,De=!!S.matcap,We=!!re,O=!!S.aoMap,$e=!!S.lightMap,qe=!!S.bumpMap,Ye=!!S.normalMap,Be=!!S.displacementMap,st=!!S.emissiveMap,Pe=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,D=S.clearcoat>0,H=S.dispersion>0,oe=S.iridescence>0,ae=S.sheen>0,Oe=S.transmission>0,de=E&&!!S.anisotropyMap,Se=D&&!!S.clearcoatMap,Re=D&&!!S.clearcoatNormalMap,$=D&&!!S.clearcoatRoughnessMap,_e=oe&&!!S.iridescenceMap,Le=oe&&!!S.iridescenceThicknessMap,ke=ae&&!!S.sheenColorMap,Me=ae&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,He=!!S.specularColorMap,Qe=!!S.specularIntensityMap,z=Oe&&!!S.transmissionMap,we=Oe&&!!S.thicknessMap,ne=!!S.gradientMap,q=!!S.alphaMap,ge=S.alphaTest>0,Te=!!S.alphaHash,Ze=!!S.extensions;let ot=gs;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ot=i.toneMapping);const dt={shaderID:ye,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:W,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:xe,instancingColor:xe&&F.instanceColor!==null,instancingMorph:xe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Vn,alphaToCoverage:!!S.alphaToCoverage,map:Fe,matcap:De,envMap:We,envMapMode:We&&re.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:$e,bumpMap:qe,normalMap:Ye,displacementMap:d&&Be,emissiveMap:st,normalMapObjectSpace:Ye&&S.normalMapType===Vg,normalMapTangentSpace:Ye&&S.normalMapType===Gf,metalnessMap:Pe,roughnessMap:L,anisotropy:E,anisotropyMap:de,clearcoat:D,clearcoatMap:Se,clearcoatNormalMap:Re,clearcoatRoughnessMap:$,dispersion:H,iridescence:oe,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:ae,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:Ne,specularColorMap:He,specularIntensityMap:Qe,transmission:Oe,transmissionMap:z,thicknessMap:we,gradientMap:ne,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:ge,alphaHash:Te,combine:S.combine,mapUv:Fe&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:$e&&v(S.lightMap.channel),bumpMapUv:qe&&v(S.bumpMap.channel),normalMapUv:Ye&&v(S.normalMap.channel),displacementMapUv:Be&&v(S.displacementMap.channel),emissiveMapUv:st&&v(S.emissiveMap.channel),metalnessMapUv:Pe&&v(S.metalnessMap.channel),roughnessMapUv:L&&v(S.roughnessMap.channel),anisotropyMapUv:de&&v(S.anisotropyMap.channel),clearcoatMapUv:Se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:Ne&&v(S.specularMap.channel),specularColorMapUv:He&&v(S.specularColorMap.channel),specularIntensityMapUv:Qe&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:we&&v(S.thicknessMap.channel),alphaMapUv:q&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ye||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Fe||q),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Z,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Ht,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yn,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)M.push(T),M.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(y(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let T;if(M){const I=Ri[M];T=Lv.clone(I.uniforms)}else T=S.uniforms;return T}function w(S,M){let T;for(let I=0,F=h.length;I<F;I++){const B=h[I];if(B.cacheKey===M){T=B,++T.usedTimes;break}}return T===void 0&&(T=new Wb(i,M,S,r),h.push(T)),T}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:P}}function Kb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Zb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Zb),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ad,i.set(n,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ct};break;case"SpotLight":t={position:new N,direction:new N,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function $b(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let eM=0;function tM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nM(i){const e=new Qb,t=$b(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ht,a=new ht;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,b=0,x=0,w=0,R=0,A=0;c.sort(tM);for(let S=0,M=c.length;S<M;S++){const T=c[S],I=T.color,F=T.intensity,B=T.distance,Y=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],F);A++}else if(T.isDirectionalLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const re=T.shadow,J=t.get(T);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=T.shadow.matrix,y++}n.directional[f]=X,f++}else if(T.isSpotLight){const X=e.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(I).multiplyScalar(F),X.distance=B,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[v]=X;const re=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,re.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[v]=re.matrix,T.castShadow){const J=t.get(T);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Y,x++}v++}else if(T.isRectAreaLight){const X=e.get(T);X.color.copy(I).multiplyScalar(F),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=X,m++}else if(T.isPointLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){const re=T.shadow,J=t.get(T);J.shadowIntensity=re.intensity,J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,J.shadowCameraNear=re.camera.near,J.shadowCameraFar=re.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=X,g++}else if(T.isHemisphereLight){const X=e.get(T);X.skyColor.copy(T.color).multiplyScalar(F),X.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=A,n.version=eM++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function od(i){const e=new nM(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function iM(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new od(i),e.set(s,[o])):r>=a.length?(o=new od(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class sM extends Ci{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;function lM(i,e,t){let n=new $o;const s=new at,r=new at,a=new It,o=new sM({depthPacking:zg}),l=new rM,c={},h=t.maxTextureSize,u={[hi]:Pn,[Pn]:hi,[Yn]:Yn},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:aM,fragmentShader:oM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rf;let p=this.type;this.render=function(R,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(_s),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Vi&&this.type===Vi,B=p===Vi&&this.type!==Vi;for(let Y=0,X=R.length;Y<X;Y++){const re=R[Y],J=re.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const ye=J.getFrameExtents();if(s.multiply(ye),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,J.mapSize.y=r.y)),J.map===null||F===!0||B===!0){const pe=this.type!==Vi?{minFilter:kn,magFilter:kn}:{};J.map!==null&&J.map.dispose(),J.map=new Os(s.x,s.y,pe),J.map.texture.name=re.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ee=J.getViewportCount();for(let pe=0;pe<ee;pe++){const se=J.getViewport(pe);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),I.viewport(a),J.updateMatrices(re,pe),n=J.getFrustum(),x(A,P,J.camera,re,this.type)}J.isPointLightShadow!==!0&&this.type===Vi&&y(J,P),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,T)};function y(R,A){const P=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Os(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,P,f,v,null)}function b(R,A,P,S){let M=null;const T=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=M.uuid,F=A.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let Y=B[F];Y===void 0&&(Y=M.clone(),B[F]=Y,A.addEventListener("dispose",w)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=P}return M}function x(R,A,P,S,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Vi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const F=e.update(R),B=R.material;if(Array.isArray(B)){const Y=F.groups;for(let X=0,re=Y.length;X<re;X++){const J=Y[X],ye=B[J.materialIndex];if(ye&&ye.visible){const ee=b(R,ye,S,M);R.onBeforeShadow(i,R,A,P,F,ee,J),i.renderBufferDirect(P,null,F,ee,R,J),R.onAfterShadow(i,R,A,P,F,ee,J)}}}else if(B.visible){const Y=b(R,B,S,M);R.onBeforeShadow(i,R,A,P,F,Y,null),i.renderBufferDirect(P,null,F,Y,R,null),R.onAfterShadow(i,R,A,P,F,Y,null)}}const I=R.children;for(let F=0,B=I.length;F<B;F++)x(I[F],A,P,S,M)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const S=c[P],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const cM={[pc]:mc,[_c]:xc,[gc]:yc,[Tr]:vc,[mc]:pc,[xc]:_c,[yc]:gc,[vc]:Tr};function uM(i,e){function t(){let z=!1;const we=new It;let ne=null;const q=new It(0,0,0,0);return{setMask:function(ge){ne!==ge&&!z&&(i.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){z=ge},setClear:function(ge,Te,Ze,ot,dt){dt===!0&&(ge*=ot,Te*=ot,Ze*=ot),we.set(ge,Te,Ze,ot),q.equals(we)===!1&&(i.clearColor(ge,Te,Ze,ot),q.copy(we))},reset:function(){z=!1,ne=null,q.set(-1,0,0,0)}}}function n(){let z=!1,we=!1,ne=null,q=null,ge=null;return{setReversed:function(Te){if(we!==Te){const Ze=e.get("EXT_clip_control");we?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const ot=ge;ge=null,this.setClear(ot)}we=Te},getReversed:function(){return we},setTest:function(Te){Te?ue(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!z&&(i.depthMask(Te),ne=Te)},setFunc:function(Te){if(we&&(Te=cM[Te]),q!==Te){switch(Te){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=Te}},setLocked:function(Te){z=Te},setClear:function(Te){ge!==Te&&(we&&(Te=1-Te),i.clearDepth(Te),ge=Te)},reset:function(){z=!1,ne=null,q=null,ge=null,we=!1}}}function s(){let z=!1,we=null,ne=null,q=null,ge=null,Te=null,Ze=null,ot=null,dt=null;return{setTest:function(rt){z||(rt?ue(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(rt){we!==rt&&!z&&(i.stencilMask(rt),we=rt)},setFunc:function(rt,Rt,zt){(ne!==rt||q!==Rt||ge!==zt)&&(i.stencilFunc(rt,Rt,zt),ne=rt,q=Rt,ge=zt)},setOp:function(rt,Rt,zt){(Te!==rt||Ze!==Rt||ot!==zt)&&(i.stencilOp(rt,Rt,zt),Te=rt,Ze=Rt,ot=zt)},setLocked:function(rt){z=rt},setClear:function(rt){dt!==rt&&(i.clearStencil(rt),dt=rt)},reset:function(){z=!1,we=null,ne=null,q=null,ge=null,Te=null,Ze=null,ot=null,dt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,w=null,R=null,A=new ct(0,0,0),P=0,S=!1,M=null,T=null,I=null,F=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=re>=1):J.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=re>=2);let ye=null,ee={};const pe=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),me=new It().fromArray(pe),W=new It().fromArray(se);function G(z,we,ne,q){const ge=new Uint8Array(4),Te=i.createTexture();i.bindTexture(z,Te),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ne;Ze++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(we+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Te}const te={};te[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Tr),qe(!1),Ye(lh),ue(i.CULL_FACE),O(_s);function ue(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Z(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function xe(z,we){return u[z]!==we?(i.bindFramebuffer(z,we),u[z]=we,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ae(z,we){let ne=f,q=!1;if(z){ne=d.get(we),ne===void 0&&(ne=[],d.set(we,ne));const ge=z.textures;if(ne.length!==ge.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ze=ge.length;Te<Ze;Te++)ne[Te]=i.COLOR_ATTACHMENT0+Te;ne.length=ge.length,q=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,q=!0);q&&i.drawBuffers(ne)}function Fe(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const De={[Us]:i.FUNC_ADD,[hg]:i.FUNC_SUBTRACT,[dg]:i.FUNC_REVERSE_SUBTRACT};De[fg]=i.MIN,De[pg]=i.MAX;const We={[mg]:i.ZERO,[_g]:i.ONE,[gg]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Sg]:i.SRC_ALPHA_SATURATE,[bg]:i.DST_COLOR,[xg]:i.DST_ALPHA,[vg]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Mg]:i.ONE_MINUS_DST_COLOR,[yg]:i.ONE_MINUS_DST_ALPHA,[Eg]:i.CONSTANT_COLOR,[Tg]:i.ONE_MINUS_CONSTANT_COLOR,[Ag]:i.CONSTANT_ALPHA,[wg]:i.ONE_MINUS_CONSTANT_ALPHA};function O(z,we,ne,q,ge,Te,Ze,ot,dt,rt){if(z===_s){v===!0&&(Z(i.BLEND),v=!1);return}if(v===!1&&(ue(i.BLEND),v=!0),z!==ug){if(z!==m||rt!==S){if((p!==Us||x!==Us)&&(i.blendEquation(i.FUNC_ADD),p=Us,x=Us),rt)switch(z){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,b=null,w=null,R=null,A.set(0,0,0),P=0,m=z,S=rt}return}ge=ge||we,Te=Te||ne,Ze=Ze||q,(we!==p||ge!==x)&&(i.blendEquationSeparate(De[we],De[ge]),p=we,x=ge),(ne!==y||q!==b||Te!==w||Ze!==R)&&(i.blendFuncSeparate(We[ne],We[q],We[Te],We[Ze]),y=ne,b=q,w=Te,R=Ze),(ot.equals(A)===!1||dt!==P)&&(i.blendColor(ot.r,ot.g,ot.b,dt),A.copy(ot),P=dt),m=z,S=!1}function $e(z,we){z.side===Yn?Z(i.CULL_FACE):ue(i.CULL_FACE);let ne=z.side===Pn;we&&(ne=!ne),qe(ne),z.blending===xr&&z.transparent===!1?O(_s):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const q=z.stencilWrite;o.setTest(q),q&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),st(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function Ye(z){z!==og?(ue(i.CULL_FACE),z!==T&&(z===lh?i.cullFace(i.BACK):z===lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),T=z}function Be(z){z!==I&&(X&&i.lineWidth(z),I=z)}function st(z,we,ne){z?(ue(i.POLYGON_OFFSET_FILL),(F!==we||B!==ne)&&(i.polygonOffset(we,ne),F=we,B=ne)):Z(i.POLYGON_OFFSET_FILL)}function Pe(z){z?ue(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function L(z){z===void 0&&(z=i.TEXTURE0+Y-1),ye!==z&&(i.activeTexture(z),ye=z)}function E(z,we,ne){ne===void 0&&(ye===null?ne=i.TEXTURE0+Y-1:ne=ye);let q=ee[ne];q===void 0&&(q={type:void 0,texture:void 0},ee[ne]=q),(q.type!==z||q.texture!==we)&&(ye!==ne&&(i.activeTexture(ne),ye=ne),i.bindTexture(z,we||te[z]),q.type=z,q.texture=we)}function D(){const z=ee[ye];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){me.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function Me(z){W.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function Ne(z,we){let ne=c.get(we);ne===void 0&&(ne=new WeakMap,c.set(we,ne));let q=ne.get(z);q===void 0&&(q=i.getUniformBlockIndex(we,z.name),ne.set(z,q))}function He(z,we){const q=c.get(we).get(z);l.get(we)!==q&&(i.uniformBlockBinding(we,q,z.__bindingPointIndex),l.set(we,q))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ye=null,ee={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,x=null,w=null,R=null,A=new ct(0,0,0),P=0,S=!1,M=null,T=null,I=null,F=null,B=null,me.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Z,bindFramebuffer:xe,drawBuffers:Ae,useProgram:Fe,setBlending:O,setMaterial:$e,setFlipSided:qe,setCullFace:Ye,setLineWidth:Be,setPolygonOffset:st,setScissorTest:Pe,activeTexture:L,bindTexture:E,unbindTexture:D,compressedTexImage2D:H,compressedTexImage3D:oe,texImage2D:_e,texImage3D:Le,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:Re,texStorage3D:$,texSubImage2D:ae,texSubImage3D:Oe,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:ke,viewport:Me,reset:Qe}}function ld(i,e,t,n){const s=hM(n);switch(t){case Ff:return i*e;case Bf:return i*e;case kf:return i*e*2;case xu:return i*e/s.components*s.byteLength;case Jo:return i*e/s.components*s.byteLength;case zf:return i*e*2/s.components*s.byteLength;case yu:return i*e*2/s.components*s.byteLength;case Of:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case bu:return i*e*4/s.components*s.byteLength;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Ac:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case wc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vf:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jc:case Yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hM(i){switch(i){case Yi:case Df:return{byteLength:1,components:1};case _a:case Uf:case Pa:return{byteLength:2,components:1};case gu:case vu:return{byteLength:2,components:4};case vs:case _u:case ni:return{byteLength:4,components:1};case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return f?new OffscreenCanvas(L,E):xa("canvas")}function v(L,E,D){let H=1;const oe=Pe(L);if((oe.width>D||oe.height>D)&&(H=D/Math.max(oe.width,oe.height)),H<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(H*oe.width),Oe=Math.floor(H*oe.height);u===void 0&&(u=g(ae,Oe));const de=E?g(ae,Oe):u;return de.width=ae,de.height=Oe,de.getContext("2d").drawImage(L,0,0,ae,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Oe+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,E,D,H,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=E;if(E===i.RED&&(D===i.FLOAT&&(ae=i.R32F),D===i.HALF_FLOAT&&(ae=i.R16F),D===i.UNSIGNED_BYTE&&(ae=i.R8)),E===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(ae=i.R8UI),D===i.UNSIGNED_SHORT&&(ae=i.R16UI),D===i.UNSIGNED_INT&&(ae=i.R32UI),D===i.BYTE&&(ae=i.R8I),D===i.SHORT&&(ae=i.R16I),D===i.INT&&(ae=i.R32I)),E===i.RG&&(D===i.FLOAT&&(ae=i.RG32F),D===i.HALF_FLOAT&&(ae=i.RG16F),D===i.UNSIGNED_BYTE&&(ae=i.RG8)),E===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(ae=i.RG8UI),D===i.UNSIGNED_SHORT&&(ae=i.RG16UI),D===i.UNSIGNED_INT&&(ae=i.RG32UI),D===i.BYTE&&(ae=i.RG8I),D===i.SHORT&&(ae=i.RG16I),D===i.INT&&(ae=i.RG32I)),E===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),D===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),D===i.UNSIGNED_INT&&(ae=i.RGB32UI),D===i.BYTE&&(ae=i.RGB8I),D===i.SHORT&&(ae=i.RGB16I),D===i.INT&&(ae=i.RGB32I)),E===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),D===i.UNSIGNED_INT&&(ae=i.RGBA32UI),D===i.BYTE&&(ae=i.RGBA8I),D===i.SHORT&&(ae=i.RGBA16I),D===i.INT&&(ae=i.RGBA32I)),E===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),E===i.RGBA){const Oe=oe?Qo:Et.getTransfer(H);D===i.FLOAT&&(ae=i.RGBA32F),D===i.HALF_FLOAT&&(ae=i.RGBA16F),D===i.UNSIGNED_BYTE&&(ae=Oe===Ht?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(L,E){let D;return L?E===null||E===vs||E===Cr?D=i.DEPTH24_STENCIL8:E===ni?D=i.DEPTH32F_STENCIL8:E===_a&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vs||E===Cr?D=i.DEPTH_COMPONENT24:E===ni?D=i.DEPTH_COMPONENT32F:E===_a&&(D=i.DEPTH_COMPONENT16),D}function w(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==kn&&L.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&h.delete(E)}function A(L){const E=L.target;E.removeEventListener("dispose",A),M(E)}function P(L){const E=n.get(L);if(E.__webglInit===void 0)return;const D=L.source,H=d.get(D);if(H){const oe=H[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(L),Object.keys(H).length===0&&d.delete(D)}n.remove(L)}function S(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const D=L.source,H=d.get(D);delete H[E.__cacheKey],a.memory.textures--}function M(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let oe=0;oe<E.__webglFramebuffer[H].length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[H][oe]);else i.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)i.deleteFramebuffer(E.__webglFramebuffer[H]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const D=L.textures;for(let H=0,oe=D.length;H<oe;H++){const ae=n.get(D[H]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(D[H])}n.remove(L)}let T=0;function I(){T=0}function F(){const L=T;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),T+=1,L}function B(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const D=n.get(L);if(L.isVideoTexture&&Be(L),L.isRenderTargetTexture===!1&&L.version>0&&D.__version!==L.version){const H=L.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(D,L,E);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+E)}function X(L,E){const D=n.get(L);if(L.version>0&&D.__version!==L.version){W(D,L,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+E)}function re(L,E){const D=n.get(L);if(L.version>0&&D.__version!==L.version){W(D,L,E);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+E)}function J(L,E){const D=n.get(L);if(L.version>0&&D.__version!==L.version){G(D,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+E)}const ye={[Rr]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},ee={[kn]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},pe={[Hg]:i.NEVER,[Yg]:i.ALWAYS,[Gg]:i.LESS,[Wf]:i.LEQUAL,[Wg]:i.EQUAL,[jg]:i.GEQUAL,[Xg]:i.GREATER,[qg]:i.NOTEQUAL};function se(L,E){if(E.type===ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===Lo||E.magFilter===ra||E.magFilter===Xi||E.minFilter===ti||E.minFilter===Lo||E.minFilter===ra||E.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ye[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ye[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ye[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ee[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==ra&&E.minFilter!==Xi||E.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function me(L,E){let D=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const H=E.source;let oe=d.get(H);oe===void 0&&(oe={},d.set(H,oe));const ae=B(E);if(ae!==L.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),oe[ae].usedTimes++;const Oe=oe[L.__cacheKey];Oe!==void 0&&(oe[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(E)),L.__cacheKey=ae,L.__webglTexture=oe[ae].texture}return D}function W(L,E,D){let H=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=i.TEXTURE_3D);const oe=me(L,E),ae=E.source;t.bindTexture(H,L.__webglTexture,i.TEXTURE0+D);const Oe=n.get(ae);if(ae.version!==Oe.__version||oe===!0){t.activeTexture(i.TEXTURE0+D);const de=Et.getPrimaries(Et.workingColorSpace),Se=E.colorSpace===us?null:Et.getPrimaries(E.colorSpace),Re=E.colorSpace===us||de===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let $=v(E.image,!1,s.maxTextureSize);$=st(E,$);const _e=r.convert(E.format,E.colorSpace),Le=r.convert(E.type);let ke=b(E.internalFormat,_e,Le,E.colorSpace,E.isVideoTexture);se(H,E);let Me;const Ne=E.mipmaps,He=E.isVideoTexture!==!0,Qe=Oe.__version===void 0||oe===!0,z=ae.dataReady,we=w(E,$);if(E.isDepthTexture)ke=x(E.format===Pr,E.type),Qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,ke,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ke,$.width,$.height,0,_e,Le,null));else if(E.isDataTexture)if(Ne.length>0){He&&Qe&&t.texStorage2D(i.TEXTURE_2D,we,ke,Ne[0].width,Ne[0].height);for(let ne=0,q=Ne.length;ne<q;ne++)Me=Ne[ne],He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(i.TEXTURE_2D,ne,ke,Me.width,Me.height,0,_e,Le,Me.data);E.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(i.TEXTURE_2D,we,ke,$.width,$.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,_e,Le,$.data)):t.texImage2D(i.TEXTURE_2D,0,ke,$.width,$.height,0,_e,Le,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ke,Ne[0].width,Ne[0].height,$.depth);for(let ne=0,q=Ne.length;ne<q;ne++)if(Me=Ne[ne],E.format!==Kn)if(_e!==null)if(He){if(z)if(E.layerUpdates.size>0){const ge=ld(Me.width,Me.height,E.format,E.type);for(const Te of E.layerUpdates){const Ze=Me.data.subarray(Te*ge/Me.data.BYTES_PER_ELEMENT,(Te+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Te,Me.width,Me.height,1,_e,Ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,$.depth,_e,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ke,Me.width,Me.height,$.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,$.depth,_e,Le,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ke,Me.width,Me.height,$.depth,0,_e,Le,Me.data)}else{He&&Qe&&t.texStorage2D(i.TEXTURE_2D,we,ke,Ne[0].width,Ne[0].height);for(let ne=0,q=Ne.length;ne<q;ne++)Me=Ne[ne],E.format!==Kn?_e!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,_e,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me.width,Me.height,_e,Le,Me.data):t.texImage2D(i.TEXTURE_2D,ne,ke,Me.width,Me.height,0,_e,Le,Me.data)}else if(E.isDataArrayTexture)if(He){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ke,$.width,$.height,$.depth),z)if(E.layerUpdates.size>0){const ne=ld($.width,$.height,E.format,E.type);for(const q of E.layerUpdates){const ge=$.data.subarray(q*ne/$.data.BYTES_PER_ELEMENT,(q+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,$.width,$.height,1,_e,Le,ge)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,_e,Le,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,$.width,$.height,$.depth,0,_e,Le,$.data);else if(E.isData3DTexture)He?(Qe&&t.texStorage3D(i.TEXTURE_3D,we,ke,$.width,$.height,$.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,_e,Le,$.data)):t.texImage3D(i.TEXTURE_3D,0,ke,$.width,$.height,$.depth,0,_e,Le,$.data);else if(E.isFramebufferTexture){if(Qe)if(He)t.texStorage2D(i.TEXTURE_2D,we,ke,$.width,$.height);else{let ne=$.width,q=$.height;for(let ge=0;ge<we;ge++)t.texImage2D(i.TEXTURE_2D,ge,ke,ne,q,0,_e,Le,null),ne>>=1,q>>=1}}else if(Ne.length>0){if(He&&Qe){const ne=Pe(Ne[0]);t.texStorage2D(i.TEXTURE_2D,we,ke,ne.width,ne.height)}for(let ne=0,q=Ne.length;ne<q;ne++)Me=Ne[ne],He?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e,Le,Me):t.texImage2D(i.TEXTURE_2D,ne,ke,_e,Le,Me);E.generateMipmaps=!1}else if(He){if(Qe){const ne=Pe($);t.texStorage2D(i.TEXTURE_2D,we,ke,ne.width,ne.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Le,$)}else t.texImage2D(i.TEXTURE_2D,0,ke,_e,Le,$);m(E)&&p(H),Oe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function G(L,E,D){if(E.image.length!==6)return;const H=me(L,E),oe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+D);const ae=n.get(oe);if(oe.version!==ae.__version||H===!0){t.activeTexture(i.TEXTURE0+D);const Oe=Et.getPrimaries(Et.workingColorSpace),de=E.colorSpace===us?null:Et.getPrimaries(E.colorSpace),Se=E.colorSpace===us||Oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,$=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let q=0;q<6;q++)!Re&&!$?_e[q]=v(E.image[q],!0,s.maxCubemapSize):_e[q]=$?E.image[q].image:E.image[q],_e[q]=st(E,_e[q]);const Le=_e[0],ke=r.convert(E.format,E.colorSpace),Me=r.convert(E.type),Ne=b(E.internalFormat,ke,Me,E.colorSpace),He=E.isVideoTexture!==!0,Qe=ae.__version===void 0||H===!0,z=oe.dataReady;let we=w(E,Le);se(i.TEXTURE_CUBE_MAP,E);let ne;if(Re){He&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ne,Le.width,Le.height);for(let q=0;q<6;q++){ne=_e[q].mipmaps;for(let ge=0;ge<ne.length;ge++){const Te=ne[ge];E.format!==Kn?ke!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Te.width,Te.height,ke,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,Te.width,Te.height,ke,Me,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,Ne,Te.width,Te.height,0,ke,Me,Te.data)}}}else{if(ne=E.mipmaps,He&&Qe){ne.length>0&&we++;const q=Pe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ne,q.width,q.height)}for(let q=0;q<6;q++)if($){He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_e[q].width,_e[q].height,ke,Me,_e[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,_e[q].width,_e[q].height,0,ke,Me,_e[q].data);for(let ge=0;ge<ne.length;ge++){const Ze=ne[ge].image[q].image;He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,Ze.width,Ze.height,ke,Me,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Ne,Ze.width,Ze.height,0,ke,Me,Ze.data)}}else{He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ke,Me,_e[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,ke,Me,_e[q]);for(let ge=0;ge<ne.length;ge++){const Te=ne[ge];He?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,ke,Me,Te.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,Ne,ke,Me,Te.image[q])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),ae.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function te(L,E,D,H,oe,ae){const Oe=r.convert(D.format,D.colorSpace),de=r.convert(D.type),Se=b(D.internalFormat,Oe,de,D.colorSpace),Re=n.get(E),$=n.get(D);if($.__renderTarget=E,!Re.__hasExternalTextures){const _e=Math.max(1,E.width>>ae),Le=Math.max(1,E.height>>ae);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,Se,_e,Le,E.depth,0,Oe,de,null):t.texImage2D(oe,ae,Se,_e,Le,0,Oe,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,oe,$.__webglTexture,0,qe(E)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,oe,$.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(L,E,D){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const H=E.depthTexture,oe=H&&H.isDepthTexture?H.type:null,ae=x(E.stencilBuffer,oe),Oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=qe(E);Ye(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ae,E.width,E.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ae,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,L)}else{const H=E.textures;for(let oe=0;oe<H.length;oe++){const ae=H[oe],Oe=r.convert(ae.format,ae.colorSpace),de=r.convert(ae.type),Se=b(ae.internalFormat,Oe,de,ae.colorSpace),Re=qe(E);D&&Ye(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Se,E.width,E.height):Ye(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(E.depthTexture);H.__renderTarget=E,(!H.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const oe=H.__webglTexture,ae=qe(E);if(E.depthTexture.format===yr)Ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Pr)Ye(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function xe(L){const E=n.get(L),D=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const H=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",oe)};H.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=H}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,L)}else if(D){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=i.createRenderbuffer(),ue(E.__webglDepthbuffer[H],L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ue(E.__webglDepthbuffer,L,!1);else{const H=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(L,E,D){const H=n.get(L);E!==void 0&&te(H.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&xe(L)}function Fe(L){const E=L.texture,D=n.get(L),H=n.get(E);L.addEventListener("dispose",A);const oe=L.textures,ae=L.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=E.version,a.memory.textures++),ae){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let Se=0;Se<E.mipmaps.length;Se++)D.__webglFramebuffer[de][Se]=i.createFramebuffer()}else D.__webglFramebuffer[de]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)D.__webglFramebuffer[de]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let de=0,Se=oe.length;de<Se;de++){const Re=n.get(oe[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Ye(L)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const Se=oe[de];D.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const Re=r.convert(Se.format,Se.colorSpace),$=r.convert(Se.type),_e=b(Se.internalFormat,Re,$,Se.colorSpace,L.isXRRenderTarget===!0),Le=qe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,_e,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,D.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(D.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),se(i.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)te(D.__webglFramebuffer[de][Se],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else te(D.__webglFramebuffer[de],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let de=0,Se=oe.length;de<Se;de++){const Re=oe[de],$=n.get(Re);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),se(i.TEXTURE_2D,Re),te(D.__webglFramebuffer,L,Re,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(Re)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,H.__webglTexture),se(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)te(D.__webglFramebuffer[Se],L,E,i.COLOR_ATTACHMENT0,de,Se);else te(D.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,de,0);m(E)&&p(de),t.unbindTexture()}L.depthBuffer&&xe(L)}function De(L){const E=L.textures;for(let D=0,H=E.length;D<H;D++){const oe=E[D];if(m(oe)){const ae=y(L),Oe=n.get(oe).__webglTexture;t.bindTexture(ae,Oe),p(ae),t.unbindTexture()}}}const We=[],O=[];function $e(L){if(L.samples>0){if(Ye(L)===!1){const E=L.textures,D=L.width,H=L.height;let oe=i.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(L),de=E.length>1;if(de)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]);const Re=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,D,H,0,0,D,H,oe,i.NEAREST),l===!0&&(We.length=0,O.length=0,We.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(We.push(ae),O.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Se]);const Re=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function qe(L){return Math.min(s.maxSamples,L.samples)}function Ye(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Be(L){const E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function st(L,E){const D=L.colorSpace,H=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||D!==Vn&&D!==us&&(Et.getTransfer(D)===Ht?(H!==Kn||oe!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),E}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=re,this.setTextureCube=J,this.rebindTextures=Ae,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ye}function fM(i,e){function t(n,s=us){let r;const a=Et.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.BYTE;if(n===Uf)return i.SHORT;if(n===_a)return i.UNSIGNED_SHORT;if(n===_u)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Pa)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Of)return i.RGB;if(n===Kn)return i.RGBA;if(n===Bf)return i.LUMINANCE;if(n===kf)return i.LUMINANCE_ALPHA;if(n===yr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===zf)return i.RG;if(n===yu)return i.RG_INTEGER;if(n===bu)return i.RGBA_INTEGER;if(n===Io||n===Do||n===Uo||n===No)if(a===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===Tc||n===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Rc||n===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Rc)return a===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return a===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vf||n===qc||n===jc||n===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class pM extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new yn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:_M,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new el(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xM extends Bs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new vM,m=t.getContextAttributes();let p=null,y=null;const b=[],x=[],w=new at;let R=null;const A=new On;A.viewport=new It;const P=new On;P.viewport=new It;const S=[A,P],M=new pM;let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let G=b[W];return G===void 0&&(G=new Fl,b[W]=G),G.getTargetRaySpace()},this.getControllerGrip=function(W){let G=b[W];return G===void 0&&(G=new Fl,b[W]=G),G.getGripSpace()},this.getHand=function(W){let G=b[W];return G===void 0&&(G=new Fl,b[W]=G),G.getHandSpace()};function F(W){const G=x.indexOf(W.inputSource);if(G===-1)return;const te=b[G];te!==void 0&&(te.update(W.inputSource,W.frame,c||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let W=0;W<b.length;W++){const G=x[W];G!==null&&(x[W]=null,b[W].disconnect(G))}T=null,I=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){const G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Os(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,te=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=m.stencil?Pr:yr,te=m.stencil?Cr:vs);const Z={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Z),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Os(d.textureWidth,d.textureHeight,{format:Kn,type:Yi,depthTexture:new tp(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(W){for(let G=0;G<W.removed.length;G++){const te=W.removed[G],ue=x.indexOf(te);ue>=0&&(x[ue]=null,b[ue].disconnect(te))}for(let G=0;G<W.added.length;G++){const te=W.added[G];let ue=x.indexOf(te);if(ue===-1){for(let xe=0;xe<b.length;xe++)if(xe>=x.length){x.push(te),ue=xe;break}else if(x[xe]===null){x[xe]=te,ue=xe;break}if(ue===-1)break}const Z=b[ue];Z&&Z.connect(te)}}const X=new N,re=new N;function J(W,G,te){X.setFromMatrixPosition(G.matrixWorld),re.setFromMatrixPosition(te.matrixWorld);const ue=X.distanceTo(re),Z=G.projectionMatrix.elements,xe=te.projectionMatrix.elements,Ae=Z[14]/(Z[10]-1),Fe=Z[14]/(Z[10]+1),De=(Z[9]+1)/Z[5],We=(Z[9]-1)/Z[5],O=(Z[8]-1)/Z[0],$e=(xe[8]+1)/xe[0],qe=Ae*O,Ye=Ae*$e,Be=ue/(-O+$e),st=Be*-O;if(G.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(st),W.translateZ(Be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Z[10]===-1)W.projectionMatrix.copy(G.projectionMatrix),W.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Pe=Ae+Be,L=Fe+Be,E=qe-st,D=Ye+(ue-st),H=De*Fe/L*Pe,oe=We*Fe/L*Pe;W.projectionMatrix.makePerspective(E,D,H,oe,Pe,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ye(W,G){G===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(G.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let G=W.near,te=W.far;v.texture!==null&&(v.depthNear>0&&(G=v.depthNear),v.depthFar>0&&(te=v.depthFar)),M.near=P.near=A.near=G,M.far=P.far=A.far=te,(T!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,I=M.far),A.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const ue=W.parent,Z=M.cameras;ye(M,ue);for(let xe=0;xe<Z.length;xe++)ye(Z[xe],ue);Z.length===2?J(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ee(W,M,ue)};function ee(W,G,te){te===null?W.matrix.copy(G.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(G.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(G.projectionMatrix),W.projectionMatrixInverse.copy(G.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let pe=null;function se(W,G){if(h=G.getViewerPose(c||a),g=G,h!==null){const te=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;te.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let xe=0;xe<te.length;xe++){const Ae=te[xe];let Fe=null;if(f!==null)Fe=f.getViewport(Ae);else{const We=u.getViewSubImage(d,Ae);Fe=We.viewport,xe===0&&(e.setRenderTargetTextures(y,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(y))}let De=S[xe];De===void 0&&(De=new On,De.layers.enable(xe),De.viewport=new It,S[xe]=De),De.matrix.fromArray(Ae.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ae.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),xe===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(De)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){const xe=u.getDepthInformation(te[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,s.renderState)}}for(let te=0;te<b.length;te++){const ue=x[te],Z=b[te];ue!==null&&Z!==void 0&&Z.update(ue,G,c||a)}pe&&pe(W,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const me=new ep;me.setAnimationLoop(se),this.setAnimationLoop=function(W){pe=W},this.dispose=function(){}}}const Ts=new Li,yM=new ht;function bM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,x=y.envMapRotation;b&&(m.envMap.value=b,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function MM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const x=b.program;n.uniformBlockBinding(y,x)}function c(y,b){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(y,w);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const b=u();y.__bindingPointIndex=b;const x=i.createBuffer(),w=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],x=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,A=x.length;R<A;R++){const P=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,M=P.length;S<M;S++){const T=P[S];if(f(T,R,S,w)===!0){const I=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let Y=0;Y<F.length;Y++){const X=F[Y],re=v(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,I+B,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,B),B+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,x,w){const R=y.value,A=b+"_"+x;if(w[A]===void 0)return typeof R=="number"||typeof R=="boolean"?w[A]=R:w[A]=R.clone(),!0;{const P=w[A];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[A]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(y){const b=y.uniforms;let x=0;const w=16;for(let A=0,P=b.length;A<P;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,T=S.length;M<T;M++){const I=S[M],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,Y=F.length;B<Y;B++){const X=F[B],re=v(X),J=x%w,ye=J%re.boundary,ee=J+ye;x+=ye,ee!==0&&w-ee<re.storage&&(x+=w-ee),I.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=re.storage}}}const R=x%w;return R>0&&(x+=w-R),y.__size=x,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class SM{constructor(e={}){const{canvas:t=hv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=gs,this.toneMappingExposure=1;const x=this;let w=!1,R=0,A=0,P=null,S=-1,M=null;const T=new It,I=new It;let F=null;const B=new ct(0);let Y=0,X=t.width,re=t.height,J=1,ye=null,ee=null;const pe=new It(0,0,X,re),se=new It(0,0,X,re);let me=!1;const W=new $o;let G=!1,te=!1;const ue=new ht,Z=new ht,xe=new N,Ae=new It,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function We(){return P===null?J:1}let O=n;function $e(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const j="webgl2";if(O=$e(j,C),O===null)throw $e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let qe,Ye,Be,st,Pe,L,E,D,H,oe,ae,Oe,de,Se,Re,$,_e,Le,ke,Me,Ne,He,Qe,z;function we(){qe=new R0(O),qe.init(),He=new fM(O,qe),Ye=new M0(O,qe,e,He),Be=new uM(O,qe),Ye.reverseDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),st=new L0(O),Pe=new Kb,L=new dM(O,qe,Be,Pe,Ye,He,st),E=new E0(x),D=new w0(x),H=new Bv(O),Qe=new y0(O,H),oe=new C0(O,H,st,Qe),ae=new D0(O,oe,H,st),ke=new I0(O,Ye,L),$=new S0(Pe),Oe=new Yb(x,E,D,qe,Ye,Qe,$),de=new bM(x,Pe),Se=new Jb,Re=new iM(qe),Le=new x0(x,E,D,Be,ae,f,l),_e=new lM(x,ae,Ye),z=new MM(O,st,Ye,Be),Me=new b0(O,qe,st),Ne=new P0(O,qe,st),st.programs=Oe.programs,x.capabilities=Ye,x.extensions=qe,x.properties=Pe,x.renderLists=Se,x.shadowMap=_e,x.state=Be,x.info=st}we();const ne=new xM(x,O);this.xr=ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(X,re,!1))},this.getSize=function(C){return C.set(X,re)},this.setSize=function(C,j,le=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,re=j,t.width=Math.floor(C*J),t.height=Math.floor(j*J),le===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(X*J,re*J).floor()},this.setDrawingBufferSize=function(C,j,le){X=C,re=j,J=le,t.width=Math.floor(C*le),t.height=Math.floor(j*le),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,j,le,he){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,j,le,he),Be.viewport(T.copy(pe).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,j,le,he){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,j,le,he),Be.scissor(I.copy(se).multiplyScalar(J).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){Be.setScissorTest(me=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,j=!0,le=!0){let he=0;if(C){let K=!1;if(P!==null){const Ve=P.texture.format;K=Ve===bu||Ve===yu||Ve===Jo}if(K){const Ve=P.texture.type,Je=Ve===Yi||Ve===vs||Ve===_a||Ve===Cr||Ve===gu||Ve===vu,tt=Le.getClearColor(),nt=Le.getClearAlpha(),pt=tt.r,_t=tt.g,it=tt.b;Je?(g[0]=pt,g[1]=_t,g[2]=it,g[3]=nt,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=pt,v[1]=_t,v[2]=it,v[3]=nt,O.clearBufferiv(O.COLOR,0,v))}else he|=O.COLOR_BUFFER_BIT}j&&(he|=O.DEPTH_BUFFER_BIT),le&&(he|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Se.dispose(),Re.dispose(),Pe.dispose(),E.dispose(),D.dispose(),ae.dispose(),Qe.dispose(),z.dispose(),Oe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Gn),ne.removeEventListener("sessionend",En),fn.stop()};function q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=st.autoReset,j=_e.enabled,le=_e.autoUpdate,he=_e.needsUpdate,K=_e.type;we(),st.autoReset=C,_e.enabled=j,_e.autoUpdate=le,_e.needsUpdate=he,_e.type=K}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const j=C.target;j.removeEventListener("dispose",Ze),ot(j)}function ot(C){dt(C),Pe.remove(C)}function dt(C){const j=Pe.get(C).programs;j!==void 0&&(j.forEach(function(le){Oe.releaseProgram(le)}),C.isShaderMaterial&&Oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,le,he,K,Ve){j===null&&(j=Fe);const Je=K.isMesh&&K.matrixWorld.determinant()<0,tt=Pt(C,j,le,he,K);Be.setMaterial(he,Je);let nt=le.index,pt=1;if(he.wireframe===!0){if(nt=oe.getWireframeAttribute(le),nt===void 0)return;pt=2}const _t=le.drawRange,it=le.attributes.position;let At=_t.start*pt,ce=(_t.start+_t.count)*pt;Ve!==null&&(At=Math.max(At,Ve.start*pt),ce=Math.min(ce,(Ve.start+Ve.count)*pt)),nt!==null?(At=Math.max(At,0),ce=Math.min(ce,nt.count)):it!=null&&(At=Math.max(At,0),ce=Math.min(ce,it.count));const fe=ce-At;if(fe<0||fe===1/0)return;Qe.setup(K,he,tt,le,nt);let Ie,ze=Me;if(nt!==null&&(Ie=H.get(nt),ze=Ne,ze.setIndex(Ie)),K.isMesh)he.wireframe===!0?(Be.setLineWidth(he.wireframeLinewidth*We()),ze.setMode(O.LINES)):ze.setMode(O.TRIANGLES);else if(K.isLine){let be=he.linewidth;be===void 0&&(be=1),Be.setLineWidth(be*We()),K.isLineSegments?ze.setMode(O.LINES):K.isLineLoop?ze.setMode(O.LINE_LOOP):ze.setMode(O.LINE_STRIP)}else K.isPoints?ze.setMode(O.POINTS):K.isSprite&&ze.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const be=K._multiDrawStarts,lt=K._multiDrawCounts,et=K._multiDrawCount,Lt=nt?H.get(nt).bytesPerElement:1,wt=Pe.get(he).currentProgram.getUniforms();for(let Vt=0;Vt<et;Vt++)wt.setValue(O,"_gl_DrawID",Vt),ze.render(be[Vt]/Lt,lt[Vt])}else if(K.isInstancedMesh)ze.renderInstances(At,fe,K.count);else if(le.isInstancedBufferGeometry){const be=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,lt=Math.min(le.instanceCount,be);ze.renderInstances(At,fe,lt)}else ze.render(At,fe)};function rt(C,j,le){C.transparent===!0&&C.side===Yn&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,mt(C,j,le),C.side=hi,C.needsUpdate=!0,mt(C,j,le),C.side=Yn):mt(C,j,le)}this.compile=function(C,j,le=null){le===null&&(le=C),p=Re.get(le),p.init(j),b.push(p),le.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),C!==le&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const he=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ve=K.material;if(Ve)if(Array.isArray(Ve))for(let Je=0;Je<Ve.length;Je++){const tt=Ve[Je];rt(tt,le,K),he.add(tt)}else rt(Ve,le,K),he.add(Ve)}),b.pop(),p=null,he},this.compileAsync=function(C,j,le=null){const he=this.compile(C,j,le);return new Promise(K=>{function Ve(){if(he.forEach(function(Je){Pe.get(Je).currentProgram.isReady()&&he.delete(Je)}),he.size===0){K(C);return}setTimeout(Ve,10)}qe.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Rt=null;function zt(C){Rt&&Rt(C)}function Gn(){fn.stop()}function En(){fn.start()}const fn=new ep;fn.setAnimationLoop(zt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(C){Rt=C,ne.setAnimationLoop(C),C===null?fn.stop():fn.start()},ne.addEventListener("sessionstart",Gn),ne.addEventListener("sessionend",En),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(j),j=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,j,P),p=Re.get(C,b.length),p.init(j),b.push(p),Z.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(Z),te=this.localClippingEnabled,G=$.init(this.clippingPlanes,te),m=Se.get(C,y.length),m.init(),y.push(m),ne.enabled===!0&&ne.isPresenting===!0){const Ve=x.xr.getDepthSensingMesh();Ve!==null&&Jn(Ve,j,-1/0,x.sortObjects)}Jn(C,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ye,ee),De=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,De&&Le.addToRenderList(m,C),this.info.render.frame++,G===!0&&$.beginShadows();const le=p.state.shadowsArray;_e.render(le,C,j),G===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=m.opaque,K=m.transmissive;if(p.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(K.length>0)for(let Je=0,tt=Ve.length;Je<tt;Je++){const nt=Ve[Je];Wt(he,K,C,nt)}De&&Le.render(C);for(let Je=0,tt=Ve.length;Je<tt;Je++){const nt=Ve[Je];pn(m,C,nt,nt.viewport)}}else K.length>0&&Wt(he,K,C,j),De&&Le.render(C),pn(m,C,j);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(x,C,j),Qe.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],G===!0&&$.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Jn(C,j,le,he){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){he&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Z);const Je=ae.update(C),tt=C.material;tt.visible&&m.push(C,Je,tt,le,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Je=ae.update(C),tt=C.material;if(he&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Ae.copy(Je.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(Z)),Array.isArray(tt)){const nt=Je.groups;for(let pt=0,_t=nt.length;pt<_t;pt++){const it=nt[pt],At=tt[it.materialIndex];At&&At.visible&&m.push(C,Je,At,le,Ae.z,it)}}else tt.visible&&m.push(C,Je,tt,le,Ae.z,null)}}const Ve=C.children;for(let Je=0,tt=Ve.length;Je<tt;Je++)Jn(Ve[Je],j,le,he)}function pn(C,j,le,he){const K=C.opaque,Ve=C.transmissive,Je=C.transparent;p.setupLightsView(le),G===!0&&$.setGlobalState(x.clippingPlanes,le),he&&Be.viewport(T.copy(he)),K.length>0&&Zt(K,j,le),Ve.length>0&&Zt(Ve,j,le),Je.length>0&&Zt(Je,j,le),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Wt(C,j,le,he){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[he.id]===void 0&&(p.state.transmissionRenderTarget[he.id]=new Os(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Pa:Yi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ve=p.state.transmissionRenderTarget[he.id],Je=he.viewport||T;Ve.setSize(Je.z,Je.w);const tt=x.getRenderTarget();x.setRenderTarget(Ve),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),De&&Le.render(le);const nt=x.toneMapping;x.toneMapping=gs;const pt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),p.setupLightsView(he),G===!0&&$.setGlobalState(x.clippingPlanes,he),Zt(C,le,he),L.updateMultisampleRenderTarget(Ve),L.updateRenderTargetMipmap(Ve),qe.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let it=0,At=j.length;it<At;it++){const ce=j[it],fe=ce.object,Ie=ce.geometry,ze=ce.material,be=ce.group;if(ze.side===Yn&&fe.layers.test(he.layers)){const lt=ze.side;ze.side=Pn,ze.needsUpdate=!0,bn(fe,le,he,Ie,ze,be),ze.side=lt,ze.needsUpdate=!0,_t=!0}}_t===!0&&(L.updateMultisampleRenderTarget(Ve),L.updateRenderTargetMipmap(Ve))}x.setRenderTarget(tt),x.setClearColor(B,Y),pt!==void 0&&(he.viewport=pt),x.toneMapping=nt}function Zt(C,j,le){const he=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ve=C.length;K<Ve;K++){const Je=C[K],tt=Je.object,nt=Je.geometry,pt=he===null?Je.material:he,_t=Je.group;tt.layers.test(le.layers)&&bn(tt,j,le,nt,pt,_t)}}function bn(C,j,le,he,K,Ve){C.onBeforeRender(x,j,le,he,K,Ve),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(x,j,le,he,C,Ve),K.transparent===!0&&K.side===Yn&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,x.renderBufferDirect(le,j,he,K,C,Ve),K.side=hi,K.needsUpdate=!0,x.renderBufferDirect(le,j,he,K,C,Ve),K.side=Yn):x.renderBufferDirect(le,j,he,K,C,Ve),C.onAfterRender(x,j,le,he,K,Ve)}function mt(C,j,le){j.isScene!==!0&&(j=Fe);const he=Pe.get(C),K=p.state.lights,Ve=p.state.shadowsArray,Je=K.state.version,tt=Oe.getParameters(C,K.state,Ve,j,le),nt=Oe.getProgramCacheKey(tt);let pt=he.programs;he.environment=C.isMeshStandardMaterial?j.environment:null,he.fog=j.fog,he.envMap=(C.isMeshStandardMaterial?D:E).get(C.envMap||he.environment),he.envMapRotation=he.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,pt===void 0&&(C.addEventListener("dispose",Ze),pt=new Map,he.programs=pt);let _t=pt.get(nt);if(_t!==void 0){if(he.currentProgram===_t&&he.lightsStateVersion===Je)return Qt(C,tt),_t}else tt.uniforms=Oe.getUniforms(C),C.onBeforeCompile(tt,x),_t=Oe.acquireProgram(tt,nt),pt.set(nt,_t),he.uniforms=tt.uniforms;const it=he.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=$.uniform),Qt(C,tt),he.needsLights=Ti(C),he.lightsStateVersion=Je,he.needsLights&&(it.ambientLightColor.value=K.state.ambient,it.lightProbe.value=K.state.probe,it.directionalLights.value=K.state.directional,it.directionalLightShadows.value=K.state.directionalShadow,it.spotLights.value=K.state.spot,it.spotLightShadows.value=K.state.spotShadow,it.rectAreaLights.value=K.state.rectArea,it.ltc_1.value=K.state.rectAreaLTC1,it.ltc_2.value=K.state.rectAreaLTC2,it.pointLights.value=K.state.point,it.pointLightShadows.value=K.state.pointShadow,it.hemisphereLights.value=K.state.hemi,it.directionalShadowMap.value=K.state.directionalShadowMap,it.directionalShadowMatrix.value=K.state.directionalShadowMatrix,it.spotShadowMap.value=K.state.spotShadowMap,it.spotLightMatrix.value=K.state.spotLightMatrix,it.spotLightMap.value=K.state.spotLightMap,it.pointShadowMap.value=K.state.pointShadowMap,it.pointShadowMatrix.value=K.state.pointShadowMatrix),he.currentProgram=_t,he.uniformsList=null,_t}function Xt(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Oo.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Qt(C,j){const le=Pe.get(C);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Pt(C,j,le,he,K){j.isScene!==!0&&(j=Fe),L.resetTextureUnits();const Ve=j.fog,Je=he.isMeshStandardMaterial?j.environment:null,tt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vn,nt=(he.isMeshStandardMaterial?D:E).get(he.envMap||Je),pt=he.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,_t=!!le.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),it=!!le.morphAttributes.position,At=!!le.morphAttributes.normal,ce=!!le.morphAttributes.color;let fe=gs;he.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ie=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ze=Ie!==void 0?Ie.length:0,be=Pe.get(he),lt=p.state.lights;if(G===!0&&(te===!0||C!==M)){const Nt=C===M&&he.id===S;$.setState(he,C,Nt)}let et=!1;he.version===be.__version?(be.needsLights&&be.lightsStateVersion!==lt.state.version||be.outputColorSpace!==tt||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==nt||he.fog===!0&&be.fog!==Ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==$.numPlanes||be.numIntersection!==$.numIntersection)||be.vertexAlphas!==pt||be.vertexTangents!==_t||be.morphTargets!==it||be.morphNormals!==At||be.morphColors!==ce||be.toneMapping!==fe||be.morphTargetsCount!==ze)&&(et=!0):(et=!0,be.__version=he.version);let Lt=be.currentProgram;et===!0&&(Lt=mt(he,j,K));let wt=!1,Vt=!1,en=!1;const yt=Lt.getUniforms(),ft=be.uniforms;if(Be.useProgram(Lt.program)&&(wt=!0,Vt=!0,en=!0),he.id!==S&&(S=he.id,Vt=!0),wt||M!==C){Be.buffers.depth.getReversed()?(ue.copy(C.projectionMatrix),fv(ue),pv(ue),yt.setValue(O,"projectionMatrix",ue)):yt.setValue(O,"projectionMatrix",C.projectionMatrix),yt.setValue(O,"viewMatrix",C.matrixWorldInverse);const mn=yt.map.cameraPosition;mn!==void 0&&mn.setValue(O,xe.setFromMatrixPosition(C.matrixWorld)),Ye.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&yt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Vt=!0,en=!0)}if(K.isSkinnedMesh){yt.setOptional(O,K,"bindMatrix"),yt.setOptional(O,K,"bindMatrixInverse");const Nt=K.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),yt.setValue(O,"boneTexture",Nt.boneTexture,L))}K.isBatchedMesh&&(yt.setOptional(O,K,"batchingTexture"),yt.setValue(O,"batchingTexture",K._matricesTexture,L),yt.setOptional(O,K,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",K._indirectTexture,L),yt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",K._colorsTexture,L));const Ut=le.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&ke.update(K,le,Lt),(Vt||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,yt.setValue(O,"receiveShadow",K.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(ft.envMap.value=nt,ft.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&j.environment!==null&&(ft.envMapIntensity.value=j.environmentIntensity),Vt&&(yt.setValue(O,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&Ei(ft,en),Ve&&he.fog===!0&&de.refreshFogUniforms(ft,Ve),de.refreshMaterialUniforms(ft,he,J,re,p.state.transmissionRenderTarget[C.id]),Oo.upload(O,Xt(be),ft,L)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Oo.upload(O,Xt(be),ft,L),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&yt.setValue(O,"center",K.center),yt.setValue(O,"modelViewMatrix",K.modelViewMatrix),yt.setValue(O,"normalMatrix",K.normalMatrix),yt.setValue(O,"modelMatrix",K.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Nt=he.uniformsGroups;for(let mn=0,Wn=Nt.length;mn<Wn;mn++){const Qi=Nt[mn];z.update(Qi,Lt),z.bind(Qi,Lt)}}return Lt}function Ei(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ti(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,j,le){Pe.get(C.texture).__webglTexture=j,Pe.get(C.depthTexture).__webglTexture=le;const he=Pe.get(C);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=le===void 0,he.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const le=Pe.get(C);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,le=0){P=C,R=j,A=le;let he=!0,K=null,Ve=!1,Je=!1;if(C){const nt=Pe.get(C);if(nt.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(O.FRAMEBUFFER,null),he=!1;else if(nt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(nt.__hasExternalTextures)L.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&Pe.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const pt=C.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Je=!0);const _t=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(_t[j])?K=_t[j][le]:K=_t[j],Ve=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?K=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(_t)?K=_t[le]:K=_t,T.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else T.copy(pe).multiplyScalar(J).floor(),I.copy(se).multiplyScalar(J).floor(),F=me;if(Be.bindFramebuffer(O.FRAMEBUFFER,K)&&he&&Be.drawBuffers(C,K),Be.viewport(T),Be.scissor(I),Be.setScissorTest(F),Ve){const nt=Pe.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt.__webglTexture,le)}else if(Je){const nt=Pe.get(C.texture),pt=j||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,le||0,pt)}S=-1},this.readRenderTargetPixels=function(C,j,le,he,K,Ve,Je){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt){Be.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=C.texture,pt=nt.format,_t=nt.type;if(!Ye.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-he&&le>=0&&le<=C.height-K&&O.readPixels(j,le,he,K,He.convert(pt),He.convert(_t),Ve)}finally{const nt=P!==null?Pe.get(P).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,j,le,he,K,Ve,Je){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt){const nt=C.texture,pt=nt.format,_t=nt.type;if(!Ye.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-he&&le>=0&&le<=C.height-K){Be.bindFramebuffer(O.FRAMEBUFFER,tt);const it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,Ve.byteLength,O.STREAM_READ),O.readPixels(j,le,he,K,He.convert(pt),He.convert(_t),0);const At=P!==null?Pe.get(P).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,At);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dv(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ve),O.deleteBuffer(it),O.deleteSync(ce),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,le=0){C.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const he=Math.pow(2,-le),K=Math.floor(C.image.width*he),Ve=Math.floor(C.image.height*he),Je=j!==null?j.x:0,tt=j!==null?j.y:0;L.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,le,0,0,Je,tt,K,Ve),Be.unbindTexture()},this.copyTextureToTexture=function(C,j,le=null,he=null,K=0){C.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,C=arguments[1],j=arguments[2],K=arguments[3]||0,le=null);let Ve,Je,tt,nt,pt,_t,it,At,ce;const fe=C.isCompressedTexture?C.mipmaps[K]:C.image;le!==null?(Ve=le.max.x-le.min.x,Je=le.max.y-le.min.y,tt=le.isBox3?le.max.z-le.min.z:1,nt=le.min.x,pt=le.min.y,_t=le.isBox3?le.min.z:0):(Ve=fe.width,Je=fe.height,tt=fe.depth||1,nt=0,pt=0,_t=0),he!==null?(it=he.x,At=he.y,ce=he.z):(it=0,At=0,ce=0);const Ie=He.convert(j.format),ze=He.convert(j.type);let be;j.isData3DTexture?(L.setTexture3D(j,0),be=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),be=O.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const lt=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Lt=O.getParameter(O.UNPACK_SKIP_PIXELS),wt=O.getParameter(O.UNPACK_SKIP_ROWS),Vt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_t);const en=C.isDataArrayTexture||C.isData3DTexture,yt=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ft=Pe.get(C),Ut=Pe.get(j),Nt=Pe.get(ft.__renderTarget),mn=Pe.get(Ut.__renderTarget);Be.bindFramebuffer(O.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Wn=0;Wn<tt;Wn++)en&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(C).__webglTexture,K,_t+Wn),C.isDepthTexture?(yt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.get(j).__webglTexture,K,ce+Wn),O.blitFramebuffer(nt,pt,Ve,Je,it,At,Ve,Je,O.DEPTH_BUFFER_BIT,O.NEAREST)):yt?O.copyTexSubImage3D(be,K,it,At,ce+Wn,nt,pt,Ve,Je):O.copyTexSubImage2D(be,K,it,At,ce+Wn,nt,pt,Ve,Je);Be.bindFramebuffer(O.READ_FRAMEBUFFER,null),Be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(be,K,it,At,ce,Ve,Je,tt,Ie,ze,fe.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(be,K,it,At,ce,Ve,Je,tt,Ie,fe.data):O.texSubImage3D(be,K,it,At,ce,Ve,Je,tt,Ie,ze,fe):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,it,At,Ve,Je,Ie,ze,fe.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,it,At,fe.width,fe.height,Ie,fe.data):O.texSubImage2D(O.TEXTURE_2D,K,it,At,Ve,Je,Ie,ze,fe);O.pixelStorei(O.UNPACK_ROW_LENGTH,lt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,wt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt),K===0&&j.generateMipmaps&&O.generateMipmap(be),Be.unbindTexture()},this.copyTextureToTexture3D=function(C,j,le=null,he=null,K=0){return C.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,he=arguments[1]||null,C=arguments[2],j=arguments[3],K=arguments[4]||0),aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,le,he,K)},this.initRenderTarget=function(C){Pe.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,Be.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class ap extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class EM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new N;class wu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cd=new N,ud=new It,hd=new It,TM=new N,dd=new ht,io=new N,Ol=new zn,fd=new ht,Bl=new ks;class AM extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dh,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1&&(fd.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ud.fromBufferAttribute(s.attributes.skinIndex,e),hd.fromBufferAttribute(s.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=hd.getComponent(r);if(a!==0){const o=ud.getComponent(r);dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(TM.copy(cd).applyMatrix4(dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class op extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class da extends yn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=kn,h=kn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new ht,wM=new ht;class Ru{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:wM;pd.multiplyMatrices(o,t[r]),pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new da(t,e,e,Kn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new op),this.bones.push(a),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class $c extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new ht,md=new ht,so=[],_d=new jt,RM=new ht,jr=new Ct,Yr=new zn;class CM extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,RM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),_d.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(_d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Yr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),md.multiplyMatrices(n,er),jr.matrixWorld=md,jr.raycast(e,so);for(let a=0,o=so.length;a<o;a++){const l=so[a];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new da(new Float32Array(s*this.count),s,this.count,xu,ni));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function kl(i,e){return i-e}function PM(i,e){return i.z-e.z}function LM(i,e){return e.z-i.z}class IM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const qn=new ht,DM=new ct(1,1,1),zl=new $o,ro=new jt,As=new zn,Kr=new N,gd=new N,UM=new N,Vl=new IM,wn=new Ct,ao=[];function NM(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ws(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class FM extends Ct{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new si,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new da(t,e,e,Kn,ni);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new da(t,e,e,Jo,vs);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new da(t,e,e,Kn,ni);n.colorSpace=Et.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new un(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new un(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingBoxAt(r,ro).applyMatrix4(qn),e.union(ro)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,qn),this.getBoundingSphereAt(r,As).applyMatrix4(qn),e.union(As)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(kl),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;qn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(DM.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(kl),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);NM(u,d,l);const f=u.itemSize;for(let g=u.count,v=c;g<v;g++){const m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,g=f.array,v=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const g=d[f],{array:v,itemSize:m}=g;v.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new jt,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Kr.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new zn;this.getBoundingBoxAt(e,ro),ro.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Kr.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Kr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(kl);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);ws(this._multiDrawCounts,s),ws(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ws(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ws(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ws(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new si,this._initializeGeometry(r));const a=this.geometry;r.index&&ws(r.index.array,a.index.array);for(const o in r.attributes)ws(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;wn.material=this.material,wn.geometry.index=a.index,wn.geometry.attributes=a.attributes,wn.geometry.boundingBox===null&&(wn.geometry.boundingBox=new jt),wn.geometry.boundingSphere===null&&(wn.geometry.boundingSphere=new zn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=s[c];wn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,wn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,wn.geometry.boundingBox),this.getBoundingSphereAt(c,wn.geometry.boundingSphere),wn.raycast(e,ao);for(let u=0,d=ao.length;u<d;u++){const f=ao[u];f.object=this,f.batchId=o,t.push(f)}ao.length=0}wn.material=null,wn.geometry.index=null,wn.geometry.attributes={},wn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(qn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),zl.setFromProjectionMatrix(qn,e.coordinateSystem));let v=0;if(this.sortObjects){qn.copy(this.matrixWorld).invert(),Kr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(qn),gd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(qn);for(let y=0,b=l.length;y<b;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,qn),this.getBoundingSphereAt(x,As).applyMatrix4(qn);let w=!1;if(d&&(w=!zl.intersectsSphere(As)),!w){const R=u[x],A=UM.subVectors(As.center,Kr).dot(gd);Vl.push(R.start,R.count,A,y)}}const m=Vl.list,p=this.customSort;p===null?m.sort(r.transparent?LM:PM):p.call(this,m,n);for(let y=0,b=m.length;y<b;y++){const x=m[y];c[v]=x.start*o,h[v]=x.count,g[v]=x.index,v++}Vl.reset()}else for(let m=0,p=l.length;m<p;m++)if(l[m].visible&&l[m].active){const y=l[m].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(m,qn),this.getBoundingSphereAt(y,As).applyMatrix4(qn),b=!zl.intersectsSphere(As)),!b){const x=u[y];c[v]=x.start*o,h[v]=x.count,g[v]=m,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class lp extends Ci{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qo=new N,jo=new N,vd=new ht,Zr=new ks,oo=new zn,Hl=new N,xd=new N;class La extends Kt{constructor(e=new si,t=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qo.distanceTo(jo);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;vd.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(vd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),b=lo(this,e,Zr,l,p,y);b&&t.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=lo(this,e,Zr,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=lo(this,e,Zr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=lo(this,e,Zr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lo(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),t.distanceSqToSegment(qo,jo,Hl,xd)>n)return;Hl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hl);if(!(l<e.near||l>e.far))return{distance:l,point:xd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yd=new N,bd=new N;class Cu extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(bd);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pu extends La{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cp extends Ci{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Md=new ht,eu=new ks,co=new zn,uo=new N;class Lu extends Kt{constructor(e=new si,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;Md.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);uo.fromBufferAttribute(u,m),Sd(uo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)uo.fromBufferAttribute(u,g),Sd(uo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sd(i,e,t,n,s,r,a){const o=eu.distanceSqToPoint(i);if(o<t){const l=new N;eu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Iu extends si{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ui(a,3)),this.setAttribute("normal",new ui(o,3)),this.setAttribute("uv",new ui(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ya extends Ci{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends ya{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ho(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function OM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function BM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ed(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function up(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ia{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kM extends Ia{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ph:r=e,o=2*t-n;break;case mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:a=e,l=2*n-t;break;case mh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[c+w]+b*a[l+w]+x*a[u+w];return r}}class zM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class VM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new VM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&OM(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=va;class Br extends Ii{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ga;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class hp extends Ii{}hp.prototype.ValueTypeName="color";class Dr extends Ii{}Dr.prototype.ValueTypeName="number";class HM extends Ia{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Pi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ur extends Ii{InterpolantFactoryMethodLinear(e){return new HM(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Ii{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ga;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends Ii{}Nr.prototype.ValueTypeName="vector";class GM{constructor(e="",t=-1,n=[],s=Og){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(XM(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=BM(l);l=Ed(l,1,h),c=Ed(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Dr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];up(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const b=d[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new Dr(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Nr,f+".position",d,"pos",s),n(Ur,f+".quaternion",d,"rot",s),n(Nr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return hp;case"quaternion":return Ur;case"bool":case"boolean":return Br;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function XM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WM(i.type);if(i.times===void 0){const t=[],n=[];up(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const jM=new qM;class zr{constructor(e){this.manager=e!==void 0?e:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class YM extends Error{constructor(e,t){super(e),this.response=t}}class dp extends zr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:s});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:x})=>{if(b)p.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let R=0,A=h.length;R<A;R++){const P=h[R];P.onProgress&&P.onProgress(w)}p.enqueue(x),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new YM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{fs.add(e,c);const h=zi[e];delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class KM extends zr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xa("img");function l(){h(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ZM extends zr{constructor(e){super(e)}load(e,t,n,s){const r=new yn,a=new KM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class nl extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class JM extends nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gl=new ht,Td=new N,Ad=new N;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QM extends Du{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $M extends nl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new QM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wd=new ht,Jr=new N,Wl=new N;class eS extends Du{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}}class Uu extends nl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tS extends Du{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tu extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new tS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nS extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),fs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fs.add(e,l),r.manager.itemStart(e)}}const Nu="\\[\\]\\.:\\/",iS=new RegExp("["+Nu+"]","g"),Fu="[^"+Nu+"]",sS="[^"+Nu.replace("\\.","")+"]",rS=/((?:WC+[\/:])*)/.source.replace("WC",Fu),aS=/(WCOD+)?/.source.replace("WCOD",sS),oS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),lS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),cS=new RegExp("^"+rS+aS+oS+lS+"$"),uS=["material","materials","bones","map"];class hS{constructor(e,t,n){const s=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ot{constructor(e,t,n){this.path=t,this.parsedPath=n||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,n):new Ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iS,"")}static parseTrackName(e){const t=cS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);uS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=hS;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Rd=new ht;class dS{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(e,t=!0,n=[]){return nu(e,this,n,t),n.sort(Cd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nu(e[s],this,n,t);return n.sort(Cd),n}}function Cd(i,e){return i.distance-e.distance}function nu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)nu(r[a],e,t,!0)}}class Pd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ld=new N,fo=new N;class Zi{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ld.subVectors(e,this.start),fo.subVectors(this.end,this.start);const n=fo.dot(fo);let r=fo.dot(Ld)/n;return t&&(r=gn(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class fS extends Bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);const Id={type:"change"},Ou={type:"start"},fp={type:"end"},po=new ks,Dd=new vi,pS=Math.cos(70*Su.DEG2RAD),on=new N,jn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class mS extends fS{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vr.ROTATE,MIDDLE:vr.DOLLY,RIGHT:vr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Pi,this._lastTargetPosition=new N,this._quat=new Pi().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pd,this._sphericalDelta=new Pd,this._scale=1,this._panOffset=new N,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new N,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gS.bind(this),this._onPointerDown=_S.bind(this),this._onPointerUp=vS.bind(this),this._onContextMenu=TS.bind(this),this._onMouseWheel=bS.bind(this),this._onKeyDown=MS.bind(this),this._onTouchStart=SS.bind(this),this._onTouchMove=ES.bind(this),this._onMouseDown=xS.bind(this),this._onMouseMove=yS.bind(this),this._interceptControlDown=AS.bind(this),this._interceptControlUp=wS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Id),this.update(),this.state=Gt.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=jn:n>Math.PI&&(n-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=on.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<pS?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _S(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fp),this.state=Gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Gt.DOLLY;break;case vr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}break;case vr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Ou)}function yS(i){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(i.preventDefault(),this.dispatchEvent(Ou),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fp))}function MS(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function SS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Gt.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Gt.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Ou)}function ES(i){switch(this._trackPointer(i),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Gt.NONE}}function TS(i){this.enabled!==!1&&i.preventDefault()}function AS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ud(i,e){if(e===Bg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kc||e===Hf){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class RS extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new jS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=fa.extractUrlBase(e);a=fa.resolveURL(c,this.path)}else a=fa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pp){try{a[St.KHR_BINARY_GLTF]=new YS(e)}catch(u){s&&s(u);return}r=JSON.parse(a[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:a[u]=new LS;break;case St.KHR_DRACO_MESH_COMPRESSION:a[u]=new KS(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:a[u]=new ZS;break;case St.KHR_MESH_QUANTIZATION:a[u]=new JS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function CS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PS{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ct(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Uu(h),c.distance=u;break;case"spot":c=new $M(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class LS{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return ds}extendParams(e,t,n){const s=[];e.color=new ct(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,sn))}return Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class DS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(o,o)}return Promise.all(r)}}class US{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,sn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class OS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(o[0],o[1],o[2],Vn),Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(o[0],o[1],o[2],Vn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,sn)),Promise.all(r)}}class VS{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class WS{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XS{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qS{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class jS{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new ht,m=new N,p=new Pi,y=new N(1,1,1),b=new CM(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,v.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const w=l[x];b.instanceColor=new $c(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Kt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const pp="glTF",Qr=12,Nd={JSON:1313821514,BIN:5130562};class YS{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qr,r=new DataView(e,Qr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Nd.JSON){const c=new Uint8Array(e,Qr+a,o);this.content=n.decode(c)}else if(l===Nd.BIN){const c=Qr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=iu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=iu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Mr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,Vn,d)})})}}class ZS{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JS{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class mp extends Ia{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let x=0;x!==o;x++){const w=a[v+x+o],R=a[v+x+l]*h,A=a[g+x+o],P=a[g+x]*h;r[x]=y*w+b*R+m*A+p*P}return r}}const QS=new Pi;class $S extends mp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return QS.fromArray(r).normalize().toArray(r),r}}const oi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:kn,9729:ti,9984:If,9985:Lo,9986:ra,9987:Xi},Od={33071:hs,33648:Wo,10497:Rr},ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:va,STEP:ga},jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ya({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),i.DefaultMaterial}function Rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function iE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(i){let e;const t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=i.indices+":"+Yl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Yl(i.targets[n]);return e}function Yl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aE=new ht;class oE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ZM(this.options.manager):this.textureLoader=new nS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Rs(r,o,s),Hi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(fa.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ql[s.type],o=Mr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new un(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ql[s.type],c=Mr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(y);b||(v=new c(o,p*f,s.count*f/h),b=new EM(v,f/h),t.cache.add(y,b)),m=new wu(b,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new un(v,l,g);if(s.sparse!==void 0){const p=ql.SCALAR,y=Mr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new y(a[1],b,s.sparse.count*p),R=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new un(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=w.length;A<P;A++){const S=w[A];if(m.setX(S,R[A*l]),l>=2&&m.setY(S,R[A*l+1]),l>=3&&m.setZ(S,R[A*l+2]),l>=4&&m.setW(S,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||ti,h.minFilter=Fd[d.minFilter]||Xi,h.wrapS=Od[d.wrapS]||Rr,h.wrapT=Od[d.wrapT]||Rr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kn&&h.minFilter!==ti,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new yn(v);m.needsUpdate=!0,d(m)}),t.load(fa.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Hi(u,a),u.userData.mimeType=a.mimeType||rE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new cp,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new lp,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ya}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){const u=s[St.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ct(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,sn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yn);const h=r.alphaMode||jl.OPAQUE;if(h===jl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===jl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ds&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new at(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==ds&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ds){const u=r.emissiveFactor;o.emissive=new ct().setRGB(u[0],u[1],u[2],Vn)}return r.emissiveTexture!==void 0&&a!==ds&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,sn)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rs(s,u,r),u})}createUniqueName(e){const t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=sE(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Bd(new si,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?tE(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const y=c[f];if(m.mode===oi.TRIANGLES||m.mode===oi.TRIANGLE_STRIP||m.mode===oi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new AM(v,y):new Ct(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===oi.TRIANGLE_STRIP?p.geometry=Ud(p.geometry,Hf):m.mode===oi.TRIANGLE_FAN&&(p.geometry=Ud(p.geometry,Kc));else if(m.mode===oi.LINES)p=new Cu(v,y);else if(m.mode===oi.LINE_STRIP)p=new La(v,y);else if(m.mode===oi.LINE_LOOP)p=new Pu(v,y);else if(m.mode===oi.POINTS)p=new Lu(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&Rs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Rs(s,u[0],r),u[0];const d=new Fs;r.extensions&&Rs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new On(Su.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Tu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ht;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ru(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){const x=d[y],w=f[y],R=g[y],A=v[y],P=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,w,R,A,P);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new GM(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,aE)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new op:c.length>1?h=new Fs:c.length===1?h=c[0]:h=new Kt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Hi(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){const u=new ht;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Fs;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&Rs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Ci||d instanceof yn)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(os[r.path]){case os.weights:c=Dr;break;case os.rotation:c=Ur;break;case os.position:case os.scale:c=Nr;break;default:switch(n.itemSize){case 1:c=Dr;break;case 2:case 3:default:c=Nr;break}break}const h=s.interpolation!==void 0?eE[s.interpolation]:va,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+os[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ur?$S:mp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lE(i,e,t){const n=e.attributes,s=new jt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const h=su(Mr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new N,l=new N;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=su(Mr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new zn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Bd(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=iu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Et.workingColorSpace!==Vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Hi(i,e),lE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nE(i,e.targets,t):i})}class cE extends ap{constructor(){super();const e=new Fr;e.deleteAttribute("uv");const t=new ya({side:Pn}),n=new ya,s=new Uu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ct(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ct(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ct(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ct(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ct(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ct(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ct(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ct(e,tr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Ct(e,tr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Ct(e,tr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Ct(e,tr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Ct(e,tr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ct(e,tr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function tr(i){const e=new ds;return e.color.setScalar(i),e}const _p=0,uE=1,hE=2,kd=2,Kl=1.25,zd=1,ii=32,rn=ii/4,gp=65535,Bo=Math.pow(2,-24),Bu=Symbol("SKIP_GENERATION"),vp={strategy:_p,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Bu]:!1};function Jt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function ru(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function Vd(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Zl(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}function $t(i,e){return e[i+15]===gp}function xn(i,e){return e[i+6]}function Cn(i,e){return e[i+14]}function ln(i){return i+rn}function cn(i,e){const t=e[i+6];return i+t*rn}function ku(i,e){return e[i+7]}function Jl(i,e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,g=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let y=(e-p)*6,b=(e+t-p)*6;y<b;y+=6){const x=i[y+0],w=i[y+1],R=x-w,A=x+w;R<r&&(r=R),A>l&&(l=A),x<u&&(u=x),x>g&&(g=x);const P=i[y+2],S=i[y+3],M=P-S,T=P+S;M<a&&(a=M),T>c&&(c=T),P<d&&(d=P),P>v&&(v=P);const I=i[y+4],F=i[y+5],B=I-F,Y=I+F;B<o&&(o=B),Y>h&&(h=Y),I<f&&(f=I),I>m&&(m=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=h,s[0]=u,s[1]=d,s[2]=f,s[3]=g,s[4]=v,s[5]=m}const wi=8,zu=8,Ql=new Int32Array(wi),Ai=new Float32Array(wi*6),nr=new Float32Array(wi*6),_i=new Float32Array(6),mo=new Float32Array(6),ls=new Int32Array(zu),Hd=new Float32Array(zu*6);function dE(i,e,t,n){for(let s=0;s<3;s++){const r=e[i+2*s],a=e[i+2*s+1],o=r-a,l=r+a;o<t[n+s]&&(t[n+s]=o),l>t[n+s+3]&&(t[n+s+3]=l)}}function Gd(i,e){const t=i[e+3]-i[e],n=i[e+4]-i[e+1],s=i[e+5]-i[e+2];return 2*(t*n+n*s+s*t)}function fE(i,e,t,n,s,r){let a=-1,o=0;if(r===_p)a=ru(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===uE)a=ru(i),a!==-1&&(o=pE(t,n,s,a));else if(r===hE){const l=Zl(i);let c=Kl*s;const h=t.offset||0,u=(n-h)*6,d=(n+s-h)*6;for(let f=0;f<3;f++){const g=e[f],p=(e[f+3]-g)/wi;if(s<zu){for(let y=0;y<s;y++){const b=u+y*6,x=t[b+2*f];let w=y;for(;w>0&&t[ls[w-1]+2*f]>x;)ls[w]=ls[w-1],w--;ls[w]=b}for(let y=0;y<3;y++)_i[y]=1/0,_i[y+3]=-1/0,mo[y]=1/0,mo[y+3]=-1/0;for(let y=s-1;y>=0;y--)Vd(ls[y],t,mo),Hd.set(mo,y*6);for(let y=0;y<s-1;y++){Vd(ls[y],t,_i);const b=t[ls[y+1]+2*f];if(t[ls[y]+2*f]===b)continue;const x=y+1,w=s-x,R=Zl(_i)/l,A=Gd(Hd,x*6)/l,P=zd+Kl*(R*x+A*w);P<c&&(a=f,c=P,o=b)}}else{for(let x=0;x<wi;x++){Ql[x]=0;for(let w=0;w<3;w++)Ai[x*6+w]=1/0,Ai[x*6+w+3]=-1/0}for(let x=u;x<d;x+=6){let A=~~((t[x+2*f]-g)/p);A>=wi&&(A=wi-1),Ql[A]++,dE(x,t,Ai,A*6)}const y=(wi-1)*6;for(let x=0;x<6;x++)nr[y+x]=Ai[y+x];for(let x=wi-2;x>=0;x--){const w=x*6,R=w+6;for(let A=0;A<3;A++)nr[w+A]=Math.min(Ai[w+A],nr[R+A]),nr[w+A+3]=Math.max(Ai[w+A+3],nr[R+A+3])}let b=0;for(let x=0;x<wi-1;x++){const w=x*6,R=Ql[x];if(R!==0)for(let T=0;T<3;T++)b===0?(_i[T]=Ai[w+T],_i[T+3]=Ai[w+T+3]):(_i[T]=Math.min(_i[T],Ai[w+T]),_i[T+3]=Math.max(_i[T+3],Ai[w+T+3]));b+=R;let A=0,P=0;b!==0&&(A=Zl(_i)/l);const S=s-b;S!==0&&(P=Gd(nr,w+6)/l);const M=zd+Kl*(A*b+P*S);M<c&&(a=f,c=M,o=g+p+x*p)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function pE(i,e,t,n){let s=0;const r=i.offset;for(let a=e,o=e+t;a<o;a++)s+=i[(a-r)*6+n*2];return s/t}function mE(i,e,t,n,s,r){let a=n,o=n+s-1;const l=r.pos,c=r.axis*2,h=t.offset||0;for(;;){for(;a<=o&&t[(a-h)*6+c]<l;)a++;for(;a<=o&&t[(o-h)*6+c]>=l;)o--;if(a<o){for(let u=0;u<e;u++){let d=i[a*e+u];i[a*e+u]=i[o*e+u],i[o*e+u]=d}for(let u=0;u<6;u++){const d=a-h,f=o-h,g=t[d*6+u];t[d*6+u]=t[f*6+u],t[f*6+u]=g}a++,o--}else return a}}const _E=Math.pow(2,32),ir=new Float32Array(6),_o=new Float32Array(6);function gE(i,e,t,n,s,r){const{maxDepth:a,verbose:o,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:d=!1}=s,f=i.primitiveBuffer,g=i.primitiveBufferStride,v=d?SharedArrayBuffer:ArrayBuffer,m=new v(ii*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),y=new Uint32Array(m),b=new Uint16Array(m);let x=0,w=!1;return Jl(e,t,n,ir,_o),P(t,n,0),m.slice(0,x*ii);function R(S){u&&u((S-r.offset)/r.count)}function A(S,M,T){const I=S*2;y[S+6]=M,b[I+14]=T,b[I+15]=gp,R(M+T)}function P(S,M,T){const I=x++,F=I*rn;p.set(ir,F),!w&&T>=a&&(w=!0,o&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));const B=M>c;if(M<=l&&!B||T>=a){A(F,S,M);return}const Y=fE(ir,_o,e,S,M,h);let X=Y.axis===-1?-1:mE(f,g,e,S,M,Y);if(Y.axis===-1||X===S||X===S+M){if(!B){A(F,S,M);return}Y.axis=Math.max(0,ru(ir)),X=S+Math.max(1,Math.floor(M/2))}y[F+7]=Y.axis;const re=X-S;Jl(e,S,re,ir,_o),P(S,re,T+1);const J=x-I;if(J>_E)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");y[F+6]=J;const ye=M-re;Jl(e,X,ye,ir,_o),P(X,ye,T+1)}}function vE(i,e){const t=i.getRootRanges(e.range),n=t[0],s=t[t.length-1],r={offset:n.offset,count:s.offset+s.count-n.offset},a=new Float32Array(6*r.count);a.offset=r.offset,i.computePrimitiveBounds(r.offset,r.count,a),i._roots=t.map(o=>gE(i,a,o.offset,o.count,e,r))}class Vu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class xE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const kt=new xE;let ps,_r;const sr=[],go=new Vu(()=>new jt);function yE(i,e,t,n,s,r){ps=go.getPrimitive(),_r=go.getPrimitive(),sr.push(ps,_r),kt.setBuffer(i._roots[e]);const a=au(0,i.geometry,t,n,s,r);kt.clearBuffer(),go.releasePrimitive(ps),go.releasePrimitive(_r),sr.pop(),sr.pop();const o=sr.length;return o>0&&(_r=sr[o-1],ps=sr[o-2]),a}function au(i,e,t,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:c}=kt;let h=i*2;if($t(h,l)){const d=xn(i,c),f=Cn(h,l);return Jt(i,o,ps),n(d,f,!1,a,r+i/rn,ps)}else{let M=function(I){const{uint16Array:F,uint32Array:B}=kt;let Y=I*2;for(;!$t(Y,F);)I=ln(I),Y=I*2;return xn(I,B)},T=function(I){const{uint16Array:F,uint32Array:B}=kt;let Y=I*2;for(;!$t(Y,F);)I=cn(I,B),Y=I*2;return xn(I,B)+Cn(Y,F)};const d=ln(i),f=cn(i,c);let g=d,v=f,m,p,y,b;if(s&&(y=ps,b=_r,Jt(g,o,y),Jt(v,o,b),m=s(y),p=s(b),p<m)){g=f,v=d;const I=m;m=p,p=I,y=b}y||(y=ps,Jt(g,o,y));const x=$t(g*2,l),w=t(y,x,m,a+1,r+g/rn);let R;if(w===kd){const I=M(g),B=T(g)-I;R=n(I,B,!0,a+1,r+g/rn,y)}else R=w&&au(g,e,t,n,s,r,a+1);if(R)return!0;b=_r,Jt(v,o,b);const A=$t(v*2,l),P=t(b,A,p,a+1,r+v/rn);let S;if(P===kd){const I=M(v),B=T(v)-I;S=n(I,B,!0,a+1,r+v/rn,b)}else S=P&&au(v,e,t,n,s,r,a+1);return!!S}}const pa=new kt.constructor,Yo=new kt.constructor,cs=new Vu(()=>new jt),rr=new jt,ar=new jt,$l=new jt,ec=new jt;let tc=!1;function bE(i,e,t,n){if(tc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");tc=!0;const s=i._roots,r=e._roots;let a,o=0,l=0;const c=new ht().copy(t).invert();for(let h=0,u=s.length;h<u;h++){pa.setBuffer(s[h]),l=0;const d=cs.getPrimitive();Jt(0,pa.float32Array,d),d.applyMatrix4(c);for(let f=0,g=r.length;f<g&&(Yo.setBuffer(r[f]),a=gi(0,0,t,c,n,o,l,0,0,d),Yo.clearBuffer(),l+=r[f].byteLength/ii,!a);f++);if(cs.releasePrimitive(d),pa.clearBuffer(),o+=s[h].byteLength/ii,a)break}return tc=!1,a}function gi(i,e,t,n,s,r=0,a=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=Yo,d=pa):(u=pa,d=Yo);const f=u.float32Array,g=u.uint32Array,v=u.uint16Array,m=d.float32Array,p=d.uint32Array,y=d.uint16Array,b=i*2,x=e*2,w=$t(b,v),R=$t(x,y);let A=!1;if(R&&w)h?A=s(xn(e,p),Cn(e*2,y),xn(i,g),Cn(i*2,v),l,a+e/rn,o,r+i/rn):A=s(xn(i,g),Cn(i*2,v),xn(e,p),Cn(e*2,y),o,r+i/rn,l,a+e/rn);else if(R){const P=cs.getPrimitive();Jt(e,m,P),P.applyMatrix4(t);const S=ln(i),M=cn(i,g);Jt(S,f,rr),Jt(M,f,ar);const T=P.intersectsBox(rr),I=P.intersectsBox(ar);A=T&&gi(e,S,n,t,s,a,r,l,o+1,P,!h)||I&&gi(e,M,n,t,s,a,r,l,o+1,P,!h),cs.releasePrimitive(P)}else{const P=ln(e),S=cn(e,p);Jt(P,m,$l),Jt(S,m,ec);const M=c.intersectsBox($l),T=c.intersectsBox(ec);if(M&&T)A=gi(i,P,t,n,s,r,a,o,l+1,c,h)||gi(i,S,t,n,s,r,a,o,l+1,c,h);else if(M)if(w)A=gi(i,P,t,n,s,r,a,o,l+1,c,h);else{const I=cs.getPrimitive();I.copy($l).applyMatrix4(t);const F=ln(i),B=cn(i,g);Jt(F,f,rr),Jt(B,f,ar);const Y=I.intersectsBox(rr),X=I.intersectsBox(ar);A=Y&&gi(P,F,n,t,s,a,r,l,o+1,I,!h)||X&&gi(P,B,n,t,s,a,r,l,o+1,I,!h),cs.releasePrimitive(I)}else if(T)if(w)A=gi(i,S,t,n,s,r,a,o,l+1,c,h);else{const I=cs.getPrimitive();I.copy(ec).applyMatrix4(t);const F=ln(i),B=cn(i,g);Jt(F,f,rr),Jt(B,f,ar);const Y=I.intersectsBox(rr),X=I.intersectsBox(ar);A=Y&&gi(S,F,n,t,s,a,r,l,o+1,I,!h)||X&&gi(S,B,n,t,s,a,r,l,o+1,I,!h),cs.releasePrimitive(I)}}return A}const nc=new class{constructor(){let i=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=i=r._roots[a],this.uint16Array=t=new Uint16Array(i),this.uint32Array=e=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let a=r*2;for(;!$t(a,t);)r=ln(r),a=r*2;return xn(r,e)},this.getRangeEnd=r=>{let a=r*2;for(;!$t(a,t);)r=cn(r,e),a=r*2;return xn(r,e)+Cn(a,t)};const s=(r,a,o)=>{const l=a*2,c=$t(l,t);if(!r(o,c,a)&&!c){const u=ln(a),d=cn(a,e);s(r,u,o+1),s(r,d,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,o,l)=>{if(o){const c=l*2,h=e[l+6],u=t[c+14];return r(a,o,new Float32Array(i,l*4,6),h,u)}else{const c=ku(l,e);return r(a,o,new Float32Array(i,l*4,6),c)}})}}},Wd=new jt,or=new Float32Array(6);class ME{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...vp,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),vE(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=e,d=e+t;u<d;u++){this.writePrimitiveBounds(u,or,0);const[f,g,v,m,p,y]=or;f<r&&(r=f),m>l&&(l=m),g<a&&(a=g),p>c&&(c=p),v<o&&(o=v),y>h&&(h=y)}return n[s+0]=r,n[s+1]=a,n[s+2]=o,n[s+3]=l,n[s+4]=c,n[s+5]=h,n}computePrimitiveBounds(e,t,n){const s=n.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,or,0);const[o,l,c,h,u,d]=or,f=(o+h)/2,g=(l+u)/2,v=(c+d)/2,m=(h-o)/2,p=(u-l)/2,y=(d-c)/2,b=(r-s)*6;n[b+0]=f,n[b+1]=m+(Math.abs(f)+m)*Bo,n[b+2]=g,n[b+3]=p+(Math.abs(g)+p)*Bo,n[b+4]=v,n[b+5]=y+(Math.abs(v)+y)*Bo}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,s=t.length;n<s;n++)t[n]+=e;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],a=new Uint32Array(r),o=new Uint16Array(r),l=r.byteLength/ii;for(let c=0;c<l;c++){const h=rn*c,u=2*h;$t(u,o)&&(a[h+6]+=e)}}}}traverse(e,t=0){nc.setBVH(this,t),nc.traverse(e),nc.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const s=e[t],r=new Uint32Array(s),a=new Uint16Array(s),o=new Float32Array(s),l=s.byteLength/ii;for(let c=l-1;c>=0;c--){const h=c*rn,u=h*2;if($t(u,a)){const f=xn(h,r),g=Cn(u,a);this.writePrimitiveRangeBounds(f,g,or,0),o.set(or,h)}else{const f=ln(h),g=cn(h,r);for(let v=0;v<3;v++){const m=o[f+v],p=o[f+v+3],y=o[g+v],b=o[g+v+3];o[h+v]=m<y?m:y,o[h+v+3]=p>b?p:b}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Jt(0,new Float32Array(n),Wd),e.union(Wd)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:a,iterate:o}=e;if(s&&r){const u=s;s=(d,f,g,v,m)=>u(d,f,g,v,m)?!0:o(d,f,this,r,g,v,a)}else s||(r?s=(u,d,f,g)=>o(u,d,this,r,f,g,a):s=(u,d,f)=>f);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(l=yE(this,u,n,s,t,c),l)break;c+=f.byteLength/ii}return l}bvhcast(e,t,n){let{intersectsRanges:s}=n;return bE(this,e,t,s)}}function SE(){return typeof SharedArrayBuffer<"u"}function Hu(i){return i.index?i.index.count:i.attributes.position.count}function il(i){return Hu(i)/3}function EE(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function TE(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=EE(t,n);i.setIndex(new un(s,1));for(let r=0;r<t;r++)s[r]=r}}function AE(i,e,t){const n=Hu(i)/t,s=e||i.drawRange,r=s.start/t,a=(s.start+s.count)/t,o=Math.max(0,r),l=Math.min(n,a)-o;return{offset:Math.floor(o),count:Math.floor(l)}}function wE(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Xd(i,e,t){const n=AE(i,e,t),s=wE(i,t);if(!s.length)return[n];const r=[],a=n.offset,o=n.offset+n.count,l=Hu(i)/t,c=[];for(const d of s){const{offset:f,count:g}=d,v=f,m=isFinite(g)?g:l-f,p=f+m;v<o&&p>a&&(c.push({pos:Math.max(a,v),isStart:!0}),c.push({pos:Math.min(o,p),isStart:!1}))}c.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(const d of c){const f=d.pos;h!==0&&f!==u&&r.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return r}function RE(i,e){const t=i[i.length-1],n=t.offset+t.count>2**16,s=i.reduce((c,h)=>c+h.count,0),r=n?4:2,a=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),o=n?new Uint32Array(a):new Uint16Array(a);let l=0;for(let c=0;c<i.length;c++){const{offset:h,count:u}=i[c];for(let d=0;d<u;d++)o[l+d]=h+d;l+=u}return o}class CE extends ME{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!SE())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...vp,...t},t[Bu]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const s=Xd(t,e.range,n),r=RE(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else TE(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new jt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Xd(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Ji{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],l=e.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}Ji.prototype.setFromBox=(function(){const i=new N;return function(t,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*h+r.z*(1-h);const u=t.dot(i);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}})();const PE=(function(){const i=new N,e=new N,t=new N;return function(s,r,a){const o=s.start,l=i,c=r.start,h=e;t.subVectors(o,c),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),g=t.dot(l),m=l.dot(l)*f-d*d;let p,y;m!==0?p=(u*d-g*f)/m:p=0,y=(u+p*d)/f,a.x=p,a.y=y}})(),Gu=(function(){const i=new at,e=new N,t=new N;return function(s,r,a,o){PE(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,a),r.at(c,o);return}else if(l>=0&&l<=1){c<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=s.start:h=s.end;let u;c<0?u=r.start:u=r.end;const d=e,f=t;if(s.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}})(),LE=(function(){const i=new N,e=new N,t=new vi,n=new Zi;return function(r,a){const{radius:o,center:l}=r,{a:c,b:h,c:u}=a;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const v=a.getPlane(t);if(Math.abs(v.distanceToPoint(l))<=o){const p=v.projectPoint(l,e);if(a.containsPoint(p))return!0}return!1}})(),IE=["x","y","z"],Gi=1e-15,qd=Gi*Gi;function ai(i){return Math.abs(i)<Gi}class Mi extends Sn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new N),this.satBounds=new Array(4).fill().map(()=>new Ji),this.points=[this.a,this.b,this.c],this.plane=new vi,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Zi,this.needsUpdate=!0}intersectsSphere(e){return LE(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const c=r[1],h=a[1];c.subVectors(e,t),h.setFromPoints(c,s);const u=r[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,s);const f=r[3],g=a[3];f.subVectors(n,e),g.setFromPoints(f,s);const v=c.length(),m=u.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Gi?m<Gi||p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<Gi?p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<Gi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Mi.prototype.closestPointToSegment=(function(){const i=new N,e=new N,t=new Zi;return function(s,r=null,a=null){this.needsUpdate&&this.update();const{start:o,end:l}=s,c=this.points;let h,u=1/0;const d=this.plane.distanceToPoint(o),f=this.plane.distanceToPoint(l);if(d*f<0&&this.plane.intersectLine(s,i)!==null&&this.containsPoint(i))return r&&r.copy(i),a&&a.copy(i),0;for(let g=0;g<3;g++){const v=(g+1)%3;t.start.copy(c[g]),t.end.copy(c[v]),Gu(t,s,i,e),h=i.distanceToSquared(e),h<u&&(u=h,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),h=o.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(u)}})();Mi.prototype.intersectsTriangle=(function(){const i=new Mi,e=new Ji,t=new Ji,n=new N,s=new N,r=new N,a=new N,o=new Zi,l=new Zi,c=new N,h=new at,u=new at;function d(b,x,w,R){const A=n;!b.isDegenerateIntoPoint&&!b.isDegenerateIntoSegment?A.copy(b.plane.normal):A.copy(x.plane.normal);const P=b.satBounds,S=b.satAxes;for(let I=1;I<4;I++){const F=P[I],B=S[I];if(e.setFromPoints(B,x.points),F.isSeparated(e)||(a.copy(A).cross(B),e.setFromPoints(a,b.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}const M=x.satBounds,T=x.satAxes;for(let I=1;I<4;I++){const F=M[I],B=T[I];if(e.setFromPoints(B,b.points),F.isSeparated(e)||(a.crossVectors(A,B),e.setFromPoints(a,b.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}return w&&(R||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),w.start.set(0,0,0),w.end.set(0,0,0)),!0}function f(b,x,w,R,A,P,S,M,T,I,F){let B=S/(S-M);I.x=R+(A-R)*B,F.start.subVectors(x,b).multiplyScalar(B).add(b),B=S/(S-T),I.y=R+(P-R)*B,F.end.subVectors(w,b).multiplyScalar(B).add(b)}function g(b,x,w,R,A,P,S,M,T,I,F){if(A>0)f(b.c,b.a,b.b,R,x,w,T,S,M,I,F);else if(P>0)f(b.b,b.a,b.c,w,x,R,M,S,T,I,F);else if(M*T>0||S!=0)f(b.a,b.b,b.c,x,w,R,S,M,T,I,F);else if(M!=0)f(b.b,b.a,b.c,w,x,R,M,S,T,I,F);else if(T!=0)f(b.c,b.a,b.b,R,x,w,T,S,M,I,F);else return!0;return!1}function v(b,x,w,R){const A=x.degenerateSegment,P=b.plane.distanceToPoint(A.start),S=b.plane.distanceToPoint(A.end);return ai(P)?ai(S)?d(b,x,w,R):(w&&(w.start.copy(A.start),w.end.copy(A.start)),b.containsPoint(A.start)):ai(S)?(w&&(w.start.copy(A.end),w.end.copy(A.end)),b.containsPoint(A.end)):b.plane.intersectLine(A,n)!=null?(w&&(w.start.copy(n),w.end.copy(n)),b.containsPoint(n)):!1}function m(b,x,w){const R=x.a;return ai(b.plane.distanceToPoint(R))&&b.containsPoint(R)?(w&&(w.start.copy(R),w.end.copy(R)),!0):!1}function p(b,x,w){const R=b.degenerateSegment,A=x.a;return R.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<qd?(w&&(w.start.copy(A),w.end.copy(A)),!0):!1}function y(b,x,w,R){if(b.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){const A=b.degenerateSegment,P=x.degenerateSegment,S=s,M=r;A.delta(S),P.delta(M);const T=n.subVectors(P.start,A.start),I=S.x*M.y-S.y*M.x;if(ai(I))return!1;const F=(T.x*M.y-T.y*M.x)/I,B=-(S.x*T.y-S.y*T.x)/I;if(F<0||F>1||B<0||B>1)return!1;const Y=A.start.z+S.z*F,X=P.start.z+M.z*B;return ai(Y-X)?(w&&(w.start.copy(A.start).addScaledVector(S,F),w.end.copy(A.start).addScaledVector(S,F)),!0):!1}else return x.isDegenerateIntoPoint?p(b,x,w):v(x,b,w,R);else{if(b.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(b.a)<qd?(w&&(w.start.copy(b.a),w.end.copy(b.a)),!0):!1:x.isDegenerateIntoSegment?p(x,b,w):m(x,b,w);if(x.isDegenerateIntoPoint)return m(b,x,w);if(x.isDegenerateIntoSegment)return v(b,x,w,R)}}return function(x,w=null,R=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const A=y(this,x,w,R);if(A!==void 0)return A;const P=this.plane,S=x.plane;let M=S.distanceToPoint(this.a),T=S.distanceToPoint(this.b),I=S.distanceToPoint(this.c);ai(M)&&(M=0),ai(T)&&(T=0),ai(I)&&(I=0);const F=M*T,B=M*I;if(F>0&&B>0)return!1;let Y=P.distanceToPoint(x.a),X=P.distanceToPoint(x.b),re=P.distanceToPoint(x.c);ai(Y)&&(Y=0),ai(X)&&(X=0),ai(re)&&(re=0);const J=Y*X,ye=Y*re;if(J>0&&ye>0)return!1;s.copy(P.normal),r.copy(S.normal);const ee=s.cross(r);let pe=0,se=Math.abs(ee.x);const me=Math.abs(ee.y);me>se&&(se=me,pe=1),Math.abs(ee.z)>se&&(pe=2);const G=IE[pe],te=this.a[G],ue=this.b[G],Z=this.c[G],xe=x.a[G],Ae=x.b[G],Fe=x.c[G];if(g(this,te,ue,Z,F,B,M,T,I,h,o))return d(this,x,w,R);if(g(x,xe,Ae,Fe,J,ye,Y,X,re,u,l))return d(this,x,w,R);if(h.y<h.x){const De=h.y;h.y=h.x,h.x=De,c.copy(o.start),o.start.copy(o.end),o.end.copy(c)}if(u.y<u.x){const De=u.y;u.y=u.x,u.x=De,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(w&&(u.x>h.x?w.start.copy(l.start):w.start.copy(o.start),u.y<h.y?w.end.copy(l.end):w.end.copy(o.end)),!0)}})();Mi.prototype.distanceToPoint=(function(){const i=new N;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Mi.prototype.distanceToTriangle=(function(){const i=new N,e=new N,t=["a","b","c"],n=new Zi,s=new Zi;return function(a,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(a,c,!0))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],g=a[f];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<h&&(h=d,o&&o.copy(i),l&&l.copy(g));const v=this[f];a.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<h&&(h=d,o&&o.copy(v),l&&l.copy(i))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const v=t[g],m=t[(g+1)%3];s.set(a[v],a[m]),Gu(n,s,i,e);const p=i.distanceToSquared(e);p<h&&(h=p,o&&o.copy(i),l&&l.copy(e))}}return Math.sqrt(h)}})();class Hn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new N,this.max=new N,this.matrix=new ht,this.invMatrix=new ht,this.points=new Array(8).fill().map(()=>new N),this.satAxes=new Array(3).fill().map(()=>new N),this.satBounds=new Array(3).fill().map(()=>new Ji),this.alignedSatBounds=new Array(3).fill().map(()=>new Ji),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Hn.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=s[d];f.x=c?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let c=0;c<3;c++){const h=a[c],u=r[c],d=1<<c,f=s[d];h.subVectors(o,f),u.setFromPoints(h,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Hn.prototype.intersectsBox=(function(){const i=new Ji;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=a[l],h=r[l];if(i.setFromBox(c,t),h.isSeparated(i))return!1}return!0}})();Hn.prototype.intersectsTriangle=(function(){const i=new Mi,e=new Array(3),t=new Ji,n=new Ji,s=new N;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const f=o[d],g=l[d];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}const c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],g=h[d];if(t.setFromPoints(g,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let g=0;g<4;g++){const v=h[g];if(s.crossVectors(f,v),t.setFromPoints(s,e),n.setFromPoints(s,u),t.isSeparated(n))return!1}}return!0}})();Hn.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Hn.prototype.distanceToPoint=(function(){const i=new N;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Hn.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Zi),t=new Array(12).fill().map(()=>new Zi),n=new N,s=new N;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const h=o*o,u=a.min,d=a.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(u,d);const y=p.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(p),c&&c.copy(s),y<h))return Math.sqrt(y)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const b=(m+1)%3,x=(m+2)%3,w=p<<b|y<<x,R=1<<m|p<<b|y<<x,A=f[w],P=f[R];e[v].set(A,P);const M=i[m],T=i[b],I=i[x],F=t[v],B=F.start,Y=F.end;B[M]=u[M],B[T]=p?u[T]:d[T],B[I]=y?u[I]:d[I],Y[M]=d[M],Y[T]=p?u[T]:d[T],Y[I]=y?u[I]:d[I],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?d.x:u.x,s.y=p?d.y:u.y,s.z=y?d.z:u.z,this.closestPointToPoint(s,n);const b=s.distanceToSquared(n);if(b<g&&(g=b,l&&l.copy(n),c&&c.copy(s),b<h))return Math.sqrt(b)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const b=t[y];Gu(p,b,n,s);const x=n.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<h))return Math.sqrt(x)}}return Math.sqrt(g)}})();class DE extends Vu{constructor(){super(()=>new Mi)}}const ci=new DE,$r=new N,ic=new N;function UE(i,e,t={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>($r.copy(e).clamp(h.min,h.max),$r.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,$r);const d=e.distanceToSquared($r);return d<o&&(ic.copy($r),o=d,l=u),d<r}}),o===1/0)return null;const c=Math.sqrt(o);return t.point?t.point.copy(ic):t.point=ic.clone(),t.distance=c,t.faceIndex=l,t}const vo=parseInt(Ca)>=169,NE=parseInt(Ca)<=161,Cs=new N,Ps=new N,Ls=new N,xo=new at,yo=new at,bo=new at,jd=new N,Yd=new N,Kd=new N,ea=new N;function FE(i,e,t,n,s,r,a,o){let l;if(r===Pn?l=i.intersectTriangle(n,t,e,!0,s):l=i.intersectTriangle(e,t,n,r!==Yn,s),l===null)return null;const c=i.origin.distanceTo(s);return c<a||c>o?null:{distance:c,point:s.clone()}}function Zd(i,e,t,n,s,r,a,o,l,c,h){Cs.fromBufferAttribute(e,r),Ps.fromBufferAttribute(e,a),Ls.fromBufferAttribute(e,o);const u=FE(i,Cs,Ps,Ls,ea,l,c,h);if(u){if(n){xo.fromBufferAttribute(n,r),yo.fromBufferAttribute(n,a),bo.fromBufferAttribute(n,o),u.uv=new at;const f=Sn.getInterpolation(ea,Cs,Ps,Ls,xo,yo,bo,u.uv);vo||(u.uv=f)}if(s){xo.fromBufferAttribute(s,r),yo.fromBufferAttribute(s,a),bo.fromBufferAttribute(s,o),u.uv1=new at;const f=Sn.getInterpolation(ea,Cs,Ps,Ls,xo,yo,bo,u.uv1);vo||(u.uv1=f),NE&&(u.uv2=u.uv1)}if(t){jd.fromBufferAttribute(t,r),Yd.fromBufferAttribute(t,a),Kd.fromBufferAttribute(t,o),u.normal=new N;const f=Sn.getInterpolation(ea,Cs,Ps,Ls,jd,Yd,Kd,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),vo||(u.normal=f)}const d={a:r,b:a,c:o,normal:new N,materialIndex:0};if(Sn.getNormal(Cs,Ps,Ls,d.normal),u.face=d,u.faceIndex=r,vo){const f=new N;Sn.getBarycoord(ea,Cs,Ps,Ls,f),u.barycoord=f}}return u}function Jd(i){return i&&i.isMaterial?i.side:i}function sl(i,e,t,n,s,r,a){const o=n*3;let l=o+0,c=o+1,h=o+2;const{index:u,groups:d}=i;i.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));const{position:f,normal:g,uv:v,uv1:m}=i.attributes;if(Array.isArray(e)){const p=n*3;for(let y=0,b=d.length;y<b;y++){const{start:x,count:w,materialIndex:R}=d[y];if(p>=x&&p<x+w){const A=Jd(e[R]),P=Zd(t,f,g,v,m,l,c,h,A,r,a);if(P)if(P.faceIndex=n,P.face.materialIndex=R,s)s.push(P);else return P}}}else{const p=Jd(e),y=Zd(t,f,g,v,m,l,c,h,p,r,a);if(y)if(y.faceIndex=n,y.face.materialIndex=0,s)s.push(y);else return y}return null}function an(i,e,t,n){const s=i.a,r=i.b,a=i.c;let o=e,l=e+1,c=e+2;t&&(o=t.getX(o),l=t.getX(l),c=t.getX(c)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function OE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++)sl(l,e,t,h,r,a,o)}function BE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=sl(o,e,t,u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function kE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=h,an(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function zE(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,g=!1){const v=d*2;if($t(v,o)){const m=xn(d,a),p=Cn(v,o);let y=1/0,b=1/0,x=1/0,w=-1/0,R=-1/0,A=-1/0;for(let P=3*m,S=3*(m+p);P<S;P++){let M=n[P];const T=s.getX(M),I=s.getY(M),F=s.getZ(M);T<y&&(y=T),T>w&&(w=T),I<b&&(b=I),I>R&&(R=I),F<x&&(x=F),F>A&&(A=F)}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==x||l[d+3]!==w||l[d+4]!==R||l[d+5]!==A?(l[d+0]=y,l[d+1]=b,l[d+2]=x,l[d+3]=w,l[d+4]=R,l[d+5]=A,!0):!1}else{const m=ln(d),p=cn(d,a);let y=g,b=!1,x=!1;if(e){if(!y){const M=m/rn+f/ii,T=p/rn+f/ii;b=e.has(M),x=e.has(T),y=!b&&!x}}else b=!0,x=!0;const w=y||b,R=y||x;let A=!1;w&&(A=u(m,f,y));let P=!1;R&&(P=u(p,f,y));const S=A||P;if(S)for(let M=0;M<3;M++){const T=m+M,I=p+M,F=l[T],B=l[T+3],Y=l[I],X=l[I+3];l[d+M]=F<Y?F:Y,l[d+M+3]=B>X?B:X}return S}}}function di(i,e,t,n,s){let r,a,o,l,c,h;const u=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,g=t.origin.x,v=t.origin.y,m=t.origin.z;let p=e[i],y=e[i+3],b=e[i+1],x=e[i+3+1],w=e[i+2],R=e[i+3+2];return u>=0?(r=(p-g)*u,a=(y-g)*u):(r=(y-g)*u,a=(p-g)*u),d>=0?(o=(b-v)*d,l=(x-v)*d):(o=(x-v)*d,l=(b-v)*d),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),f>=0?(c=(w-m)*f,h=(R-m)*f):(c=(R-m)*f,h=(w-m)*f),r>h||c>a)?!1:((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),r<=s&&a>=n)}function VE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++){let d=c?c[h]:h;sl(l,e,t,d,r,a,o)}}function HE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=sl(o,e,t,l?l[u]:u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function GE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),an(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function WE(i,e,t,n,s,r,a){kt.setBuffer(i._roots[e]),di(0,kt.float32Array,n,r,a)&&ou(0,i,t,n,s,r,a),kt.clearBuffer()}function ou(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=kt,h=i*2;if($t(h,l)){const d=xn(i,c),f=Cn(h,l);OE(e,t,n,d,f,s,r,a)}else{const d=ln(i);di(d,o,n,r,a)&&ou(d,e,t,n,s,r,a);const f=cn(i,c);di(f,o,n,r,a)&&ou(f,e,t,n,s,r,a)}}const XE=["x","y","z"];function qE(i,e,t,n,s,r){kt.setBuffer(i._roots[e]);let a=null;return di(0,kt.float32Array,n,s,r)&&(a=lu(0,i,t,n,s,r)),kt.clearBuffer(),a}function lu(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=kt;let c=i*2;if($t(c,o)){const u=xn(i,l),d=Cn(c,o);return BE(e,t,n,u,d,s,r)}else{const u=ku(i,l),d=XE[u],g=n.direction[d]>=0;let v,m;g?(v=ln(i),m=cn(i,l)):(v=cn(i,l),m=ln(i));const y=di(v,a,n,s,r)?lu(v,e,t,n,s,r):null;if(y){const w=y.point[d];if(g?w<=a[m+u]:w>=a[m+u+3])return y}const x=di(m,a,n,s,r)?lu(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const Mo=new jt,lr=new Mi,cr=new Mi,ta=new ht,Qd=new Hn,So=new Hn;function jE(i,e,t,n){kt.setBuffer(i._roots[e]);const s=cu(0,i,t,n);return kt.clearBuffer(),s}function cu(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=kt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Qd.set(t.boundingBox.min,t.boundingBox.max,n),s=Qd),$t(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,v=xn(i,o),m=Cn(l,a);if(ta.copy(n).invert(),t.boundsTree)return Jt(i,r,So),So.matrix.copy(ta),So.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>So.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=v*3,x=(m+v)*3;b<x;b+=3)if(an(cr,b,u,d),cr.needsUpdate=!0,y.intersectsTriangle(cr))return!0;return!1}});{const p=il(t);for(let y=v*3,b=(m+v)*3;y<b;y+=3){an(lr,y,u,d),lr.a.applyMatrix4(ta),lr.b.applyMatrix4(ta),lr.c.applyMatrix4(ta),lr.needsUpdate=!0;for(let x=0,w=p*3;x<w;x+=3)if(an(cr,x,f,g),cr.needsUpdate=!0,lr.intersectsTriangle(cr))return!0}}}else{const h=ln(i),u=cn(i,o);return Jt(h,r,Mo),!!(s.intersectsBox(Mo)&&cu(h,e,t,n,s)||(Jt(u,r,Mo),s.intersectsBox(Mo)&&cu(u,e,t,n,s)))}}const Eo=new ht,sc=new Hn,na=new Hn,YE=new N,KE=new N,ZE=new N,JE=new N;function QE(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),sc.set(e.boundingBox.min,e.boundingBox.max,t),sc.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ci.getPrimitive(),f=ci.getPrimitive();let g=YE,v=KE,m=null,p=null;s&&(m=ZE,p=JE);let y=1/0,b=null,x=null;return Eo.copy(t).invert(),na.matrix.copy(Eo),i.shapecast({boundsTraverseOrder:w=>sc.distanceToBox(w),intersectsBounds:(w,R,A)=>A<y&&A<a?(R&&(na.min.copy(w.min),na.max.copy(w.max),na.needsUpdate=!0),!0):!1,intersectsRange:(w,R)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>na.distanceToBox(P),intersectsBounds:(P,S,M)=>M<y&&M<a,intersectsRange:(P,S)=>{for(let M=P,T=P+S;M<T;M++){an(f,3*M,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let I=w,F=w+R;I<F;I++){an(d,3*I,c,l),d.needsUpdate=!0;const B=d.distanceToTriangle(f,g,m);if(B<y&&(v.copy(g),p&&p.copy(m),y=B,b=I,x=M),B<r)return!0}}}});{const A=il(e);for(let P=0,S=A;P<S;P++){an(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=w,T=w+R;M<T;M++){an(d,3*M,c,l),d.needsUpdate=!0;const I=d.distanceToTriangle(f,g,m);if(I<y&&(v.copy(g),p&&p.copy(m),y=I,b=M,x=P),I<r)return!0}}}}}),ci.releasePrimitive(d),ci.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Eo),v.applyMatrix4(Eo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function $E(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,g=!1){const v=d*2;if($t(v,o)){const m=xn(d,a),p=Cn(v,o);let y=1/0,b=1/0,x=1/0,w=-1/0,R=-1/0,A=-1/0;for(let P=m,S=m+p;P<S;P++){const M=3*i.resolveTriangleIndex(P);for(let T=0;T<3;T++){let I=M+T;I=n?n[I]:I;const F=s.getX(I),B=s.getY(I),Y=s.getZ(I);F<y&&(y=F),F>w&&(w=F),B<b&&(b=B),B>R&&(R=B),Y<x&&(x=Y),Y>A&&(A=Y)}}return l[d+0]!==y||l[d+1]!==b||l[d+2]!==x||l[d+3]!==w||l[d+4]!==R||l[d+5]!==A?(l[d+0]=y,l[d+1]=b,l[d+2]=x,l[d+3]=w,l[d+4]=R,l[d+5]=A,!0):!1}else{const m=ln(d),p=cn(d,a);let y=g,b=!1,x=!1;if(e){if(!y){const M=m/rn+f/ii,T=p/rn+f/ii;b=e.has(M),x=e.has(T),y=!b&&!x}}else b=!0,x=!0;const w=y||b,R=y||x;let A=!1;w&&(A=u(m,f,y));let P=!1;R&&(P=u(p,f,y));const S=A||P;if(S)for(let M=0;M<3;M++){const T=m+M,I=p+M,F=l[T],B=l[T+3],Y=l[I],X=l[I+3];l[d+M]=F<Y?F:Y,l[d+M+3]=B>X?B:X}return S}}}function eT(i,e,t,n,s,r,a){kt.setBuffer(i._roots[e]),di(0,kt.float32Array,n,r,a)&&uu(0,i,t,n,s,r,a),kt.clearBuffer()}function uu(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=kt,h=i*2;if($t(h,l)){const d=xn(i,c),f=Cn(h,l);VE(e,t,n,d,f,s,r,a)}else{const d=ln(i);di(d,o,n,r,a)&&uu(d,e,t,n,s,r,a);const f=cn(i,c);di(f,o,n,r,a)&&uu(f,e,t,n,s,r,a)}}const tT=["x","y","z"];function nT(i,e,t,n,s,r){kt.setBuffer(i._roots[e]);let a=null;return di(0,kt.float32Array,n,s,r)&&(a=hu(0,i,t,n,s,r)),kt.clearBuffer(),a}function hu(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=kt;let c=i*2;if($t(c,o)){const u=xn(i,l),d=Cn(c,o);return HE(e,t,n,u,d,s,r)}else{const u=ku(i,l),d=tT[u],g=n.direction[d]>=0;let v,m;g?(v=ln(i),m=cn(i,l)):(v=cn(i,l),m=ln(i));const y=di(v,a,n,s,r)?hu(v,e,t,n,s,r):null;if(y){const w=y.point[d];if(g?w<=a[m+u]:w>=a[m+u+3])return y}const x=di(m,a,n,s,r)?hu(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const To=new jt,ur=new Mi,hr=new Mi,ia=new ht,$d=new Hn,Ao=new Hn;function iT(i,e,t,n){kt.setBuffer(i._roots[e]);const s=du(0,i,t,n);return kt.clearBuffer(),s}function du(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=kt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),$d.set(t.boundingBox.min,t.boundingBox.max,n),s=$d),$t(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,g=t.attributes.position,v=xn(i,o),m=Cn(l,a);if(ia.copy(n).invert(),t.boundsTree)return Jt(i,r,Ao),Ao.matrix.copy(ia),Ao.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Ao.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let b=v,x=m+v;b<x;b++)if(an(hr,3*e.resolveTriangleIndex(b),u,d),hr.needsUpdate=!0,y.intersectsTriangle(hr))return!0;return!1}});{const p=il(t);for(let y=v,b=m+v;y<b;y++){const x=e.resolveTriangleIndex(y);an(ur,3*x,u,d),ur.a.applyMatrix4(ia),ur.b.applyMatrix4(ia),ur.c.applyMatrix4(ia),ur.needsUpdate=!0;for(let w=0,R=p*3;w<R;w+=3)if(an(hr,w,f,g),hr.needsUpdate=!0,ur.intersectsTriangle(hr))return!0}}}else{const h=ln(i),u=cn(i,o);return Jt(h,r,To),!!(s.intersectsBox(To)&&du(h,e,t,n,s)||(Jt(u,r,To),s.intersectsBox(To)&&du(u,e,t,n,s)))}}const wo=new ht,rc=new Hn,sa=new Hn,sT=new N,rT=new N,aT=new N,oT=new N;function lT(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),rc.set(e.boundingBox.min,e.boundingBox.max,t),rc.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ci.getPrimitive(),f=ci.getPrimitive();let g=sT,v=rT,m=null,p=null;s&&(m=aT,p=oT);let y=1/0,b=null,x=null;return wo.copy(t).invert(),sa.matrix.copy(wo),i.shapecast({boundsTraverseOrder:w=>rc.distanceToBox(w),intersectsBounds:(w,R,A)=>A<y&&A<a?(R&&(sa.min.copy(w.min),sa.max.copy(w.max),sa.needsUpdate=!0),!0):!1,intersectsRange:(w,R)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:P=>sa.distanceToBox(P),intersectsBounds:(P,S,M)=>M<y&&M<a,intersectsRange:(P,S)=>{for(let M=P,T=P+S;M<T;M++){const I=A.resolveTriangleIndex(M);an(f,3*I,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let F=w,B=w+R;F<B;F++){const Y=i.resolveTriangleIndex(F);an(d,3*Y,c,l),d.needsUpdate=!0;const X=d.distanceToTriangle(f,g,m);if(X<y&&(v.copy(g),p&&p.copy(m),y=X,b=F,x=M),X<r)return!0}}}})}else{const A=il(e);for(let P=0,S=A;P<S;P++){an(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let M=w,T=w+R;M<T;M++){const I=i.resolveTriangleIndex(M);an(d,3*I,c,l),d.needsUpdate=!0;const F=d.distanceToTriangle(f,g,m);if(F<y&&(v.copy(g),p&&p.copy(m),y=F,b=M,x=P),F<r)return!0}}}}}),ci.releasePrimitive(d),ci.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=b,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(wo),v.applyMatrix4(wo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function ef(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}const Ro=new Hn,Co=new ks,tf=new N,nf=new ht,sf=new N,ac=["getX","getY","getZ"];class Ko extends CE{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=s.map(l=>l.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=s,o.index=a?a.array:null,o.indirectBuffer=r),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const o=new Ko(t,{...n,[Bu]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const h=new un(e.index,1,!1);t.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o;function l(c){for(let h=0;h<c.length;h++){const u=c[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let g=0,v=u.byteLength/ii;g<v;g++){const m=rn*g,p=2*m;$t(p,f)||(d[m+6]=d[m+6]/rn-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,c=(r?r[e]:e)*3;let h=c+0,u=c+1,d=c+2;o&&(h=o[h],u=o[u],d=o[d]);for(let f=0;f<3;f++){const g=a[ac[f]](h),v=a[ac[f]](u),m=a[ac[f]](d);let p=g;v<p&&(p=v),m<p&&(p=m);let y=g;v>y&&(y=v),m>y&&(y=m),t[n+f]=p,t[n+f+3]=y}return t}computePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,l=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=a.array,h=a.offset||0;let u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let g=e,v=e+t;g<v;g++){const p=(r?r[g]:g)*3,y=(g-f)*6;let b=p+0,x=p+1,w=p+2;o&&(b=o[b],x=o[x],w=o[w]),l||(b=b*u+h,x=x*u+h,w=w*u+h);for(let R=0;R<3;R++){let A,P,S;l?(A=a[d[R]](b),P=a[d[R]](x),S=a[d[R]](w)):(A=c[b+R],P=c[x+R],S=c[w+R]);let M=A;P<M&&(M=P),S<M&&(M=S);let T=A;P>T&&(T=P),S>T&&(T=S);const I=(T-M)/2,F=R*2;n[y+F+0]=M+I,n[y+F+1]=I+(Math.abs(M)+I)*Bo}}return n}raycastObject3D(e,t,n=[]){const{material:s}=e;if(s===void 0)return;nf.copy(e.matrixWorld).invert(),Co.copy(t.ray).applyMatrix4(nf),sf.setFromMatrixScale(e.matrixWorld),tf.copy(Co.direction).multiply(sf);const r=tf.length(),a=t.near/r,o=t.far/r;if(t.firstHitOnly===!0){let l=this.raycastFirst(Co,s,a,o);l=ef(l,e,t),l&&n.push(l)}else{const l=this.raycast(Co,s,a,o);for(let c=0,h=l.length;c<h;c++){const u=ef(l[c],e,t);u&&n.push(u)}}return n}refit(e=null){return(this.indirect?$E:zE)(this,e)}raycast(e,t=hi,n=0,s=1/0){const r=this._roots,a=[],o=this.indirect?eT:WE;for(let l=0,c=r.length;l<c;l++)o(this,l,t,e,a,n,s);return a}raycastFirst(e,t=hi,n=0,s=1/0){const r=this._roots;let a=null;const o=this.indirect?nT:qE;for(let l=0,c=r.length;l<c;l++){const h=o(this,l,t,e,n,s);h!=null&&(a==null||h.distance<a.distance)&&(a=h)}return a}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?iT:jE;for(let a=0,o=s.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=ci.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?GE:kE});return ci.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=ci.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const v=this.resolveTriangleIndex(g);an(a,v*3,o,l)}:g=>{an(a,g*3,o,l)},h=ci.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?g=>{const v=e.resolveTriangleIndex(g);an(h,v*3,u,d)}:g=>{an(h,g*3,u,d)};if(r){if(!(e instanceof Ko))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(v,m,p,y,b,x,w,R)=>{for(let A=p,P=p+y;A<P;A++){f(A),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=v,M=v+m;S<M;S++)if(c(S),a.needsUpdate=!0,r(a,h,S,A,b,x,w,R))return!0}return!1};if(s){const v=s;s=function(m,p,y,b,x,w,R,A){return v(m,p,y,b,x,w,R,A)?!0:g(m,p,y,b,x,w,R,A)}}else s=g}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return Ro.set(e.min,e.max,t),Ro.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ro.intersectsBox(n),intersectsTriangle:n=>Ro.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){return(this.indirect?lT:QE)(this,e,t,n,s,r,a)}closestPointToPoint(e,t={},n=0,s=1/0){return UE(this,e,t,n,s)}}const fr={Mesh:Ct.prototype.raycast,Line:La.prototype.raycast,LineSegments:Cu.prototype.raycast,LineLoop:Pu.prototype.raycast,Points:Lu.prototype.raycast,BatchedMesh:FM.prototype.raycast},Mn=new Ct,Po=[];function cT(i,e){if(this.isBatchedMesh)uT.call(this,i,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,i,e);else{let n;if(this instanceof Ct)n=fr.Mesh;else if(this instanceof Cu)n=fr.LineSegments;else if(this instanceof Pu)n=fr.LineLoop;else if(this instanceof La)n=fr.Line;else if(this instanceof Lu)n=fr.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,e)}}}function uT(i,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Mn.material=this.material,Mn.geometry=this.geometry;const a=Mn.geometry.boundsTree,o=Mn.geometry.drawRange;Mn.geometry.boundingSphere===null&&(Mn.geometry.boundingSphere=new zn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const h=n[l].geometryIndex;if(Mn.geometry.boundsTree=t[h],this.getMatrixAt(l,Mn.matrixWorld).premultiply(r),!Mn.geometry.boundsTree){this.getBoundingBoxAt(h,Mn.geometry.boundingBox),this.getBoundingSphereAt(h,Mn.geometry.boundingSphere);const u=s[h];Mn.geometry.setDrawRange(u.start,u.count)}Mn.raycast(i,Po);for(let u=0,d=Po.length;u<d;u++){const f=Po[u];f.object=this,f.batchId=l,e.push(f)}Po.length=0}Mn.geometry.boundsTree=a,Mn.geometry.drawRange=o,Mn.material=null,Mn.geometry=null}else fr.BatchedMesh.call(this,i,e)}function hT(i={}){const{type:e=Ko}=i;return this.boundsTree=new e(this,i),this.boundsTree}function dT(){this.boundsTree=null}const dr={radial:.55,hemi:25,drop:18};function fT(i,e,t,n,s,r,a=1){const o=Math.max(0,Math.min(1,s));return r.x=(i.x-e.x)*o*dr.radial,r.y=(i.y-e.y)*o*dr.radial,r.z=(i.z-e.z)*o*dr.radial,t==="L"?r.x+=o*dr.hemi*a:t==="R"&&(r.x-=o*dr.hemi*a),(n==="cerebellum"||n==="brainstem")&&(r.y-=o*dr.drop*a),r}var pT=Ce('<div class="stage svelte-v5k0y"><div class="tip svelte-v5k0y" hidden="" role="presentation"><span class="tt"></span><span class="ts svelte-v5k0y"></span></div> <div class="pin svelte-v5k0y" aria-hidden="true"><span class="lbl svelte-v5k0y"></span><span class="stem svelte-v5k0y"></span><span class="dotp svelte-v5k0y"></span></div></div>');function mT(i,e){Ln(e,!0);let t=gr(e,"framing",3,"head");const n=t()==="head";let s,r,a,o,l,c;const h=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let u=null,d,f,g,v=null,m=null,p=null;const y=1e6,b=new vi(new N(0,-1,0),y),x=[b],w=new N(1,1,1);let R=100,A=1,P=!0,S=!1;const M=new Map,T=[],I=new Map,F=new Map,B=[],Y=new Map,X=[],re=new ct,J=new ct("#5b6476"),ye=new N,ee={x:0,y:0,z:0},pe={x:0,y:0,z:0},se=new dS,me=new at,W=[],G=new N,te=new ct(fm),ue=new ct(pm),Z=new Map(Object.entries(hm).map(([ce,fe])=>[ce,new ct(fe)])),xe=new Map,Ae=ce=>{let fe=xe.get(ce);return fe||xe.set(ce,fe=new ct(bf[ce]??uc)),fe},Fe=Ue(()=>e.store.s),De=Ue(()=>_(Fe).colorBy),We=Ue(()=>_(Fe).sel),O=Ue(()=>_(Fe).hover),$e=Ue(()=>_(Fe).xray),qe=Ue(()=>_(Fe).isolate),Ye=Ue(()=>_(Fe).show),Be=Ue(()=>_(Fe).explode),st=Ue(()=>_(Fe).cut),Pe=Ue(()=>_(Fe).cutAxis),L=Ue(()=>_(Fe).rotate),E=Ue(()=>!!_(Fe).quiz),D=Ue(()=>_(De).startsWith("data:")?e.dataMaps.find(ce=>`data:${ce.key}`===_(De))??null:null);let H=bt(!1);ei(()=>{_(De),_(We),_(O),_($e),_(qe),_(Ye),_(D),e.store.colors,_(H),He()}),ei(()=>{_(Be),_(H),Qe()}),ei(()=>{_(st),_(Pe),_(H),z()}),ei(()=>{const ce=_(L);g&&(g.autoRotate=ce,g.autoRotateSpeed=1.2,P=!0)});const oe={left:[1,.12,0],right:[-1,.12,0],front:[0,.1,1],back:[0,.15,-1],top:[0,1,.001],below:[0,-1,.001]},ae={head:[.75,.25,.6],body:[.22,.1,1],spine:[1,.06,.1]},Oe=()=>Math.max(1,1.25/((f==null?void 0:f.aspect)||1)),de={r:new N,u:new N,d:new N,p:new N};function Se(ce,fe=w,Ie=1.12){const{r:ze,u:be,d:lt,p:et}=de;lt.copy(ce).normalize(),be.set(0,1,0),Math.abs(lt.dot(be))>.98&&be.set(0,0,-1),ze.crossVectors(be,lt).normalize(),be.crossVectors(lt,ze).normalize();let Lt=0,wt=0,Vt=0;for(let ft=0;ft<8;ft++)et.set((ft&1?.5:-.5)*fe.x,(ft&2?.5:-.5)*fe.y,(ft&4?.5:-.5)*fe.z),Lt=Math.max(Lt,Math.abs(et.dot(ze))),wt=Math.max(wt,Math.abs(et.dot(be))),Vt=Math.max(Vt,Math.abs(et.dot(lt)));const en=Math.tan(Su.degToRad(((f==null?void 0:f.fov)??32)/2)),yt=(f==null?void 0:f.aspect)||1;return Math.max(wt/en,Lt/(en*yt))*Ie+Vt}function Re(ce){if(ce==="inside"){n&&ge(new N,new N(-1,.1,0),R*4.4);return}const fe=new N(...oe[ce]);n?ge(new N,fe,R*3.4):ge(new N,fe,Se(fe),!0)}function $(){const ce=new N(...ae[t()]);n?ge(new N,ce,R*3.4):ge(new N,ce,Se(ce),!0)}function _e(ce,fe){if(!ce)return $();if(!n)return Le(ce,fe);const Ie=ot(ce);if(!Ie)return;const ze=fe?new N(...fe):Ie.clone().sub(new N(0,Ie.y*.2,0));ze.length()<R*.15&&ze.set(.3,.4,1),ge(Ie.multiplyScalar(fe?.3:.35),ze.normalize(),R*3.7)}function Le(ce,fe){const Ie=Ze(ce);if(!Ie)return;const ze=Ie.getCenter(new N),be=Ie.getSize(new N),lt=new N(...fe??ae[t()]);!fe&&t()==="body"&&(lt.x+=Math.sign(ze.x)*.35);const et=Math.min(Se(lt,w),Math.max(Se(lt,be,1.9),R*.35));ge(ze,lt.normalize(),et,!0)}function ke(ce="medmereport-3d.png"){if(!u)return;u.render(d,f);const fe=document.createElement("a");fe.download=ce,fe.href=u.domElement.toDataURL("image/png"),fe.click()}function Me(ce,fe){if(_(De)==="natural")return fe.copy(Z.get(ce.lobe)??(ce.inner?ue:te));if(_(De)==="lobes")return fe.copy(Ae(ce.lobe));if(_(D)){const ze=Y_(_(D),ce.key);return fe.setRGB(ze[0]/255,ze[1]/255,ze[2]/255,sn)}const Ie=e.store.colors[ce.structure];return Ie?fe.setRGB(Ie[0]/255,Ie[1]/255,Ie[2]/255,sn):fe.set(uc)}const Ne=(ce,fe)=>!!fe&&(fe.type==="lobe"?ce.lobe===fe.id:fe.type==="region"&&ce.key===fe.id);function He(){var fe;if(!_(H))return;const ce=!!_(We)&&_(We).type!=="vessel";X.length=0;for(const Ie of T){const ze=Ie.mat,be=Ne(Ie,_(We)),lt=Ne(Ie,_(O));Me(Ie,re),ce&&!be&&re.lerp(J,.55),ze.color.copy(re),ze.emissive.set(be?1013358:lt?3359061:0),ze.emissiveIntensity=be?.55:lt?.6:0;const et=_($e)&&(!Ie.inner||V_.has(Ie.layer))&&!be||_(qe)&&ce&&!be;ze.transparent!==et&&(ze.transparent=et,ze.needsUpdate=!0),ze.opacity=et?_(qe)&&ce?.06:.13:1,ze.depthWrite=!et;const Lt=_(Ye)[Ie.layer]!==!1;for(const wt of Ie.meshes)wt.visible=Lt,wt.renderOrder=et?5:0,Lt&&!et&&X.push(wt)}for(const Ie of B){const ze=!!_(Ye)[Ie.layer];if(Ie.kind==="vessel"&&Ie.mat.emissive.set(((fe=_(We))==null?void 0:fe.type)==="vessel"&&_(We).id===Ie.key?8330525:3866640),Ie.kind==="bone"&&!n){const be=_($e)||_(qe)&&ce;Ie.mat.transparent!==be&&(Ie.mat.transparent=be,Ie.mat.needsUpdate=!0),Ie.mat.opacity=be?.13:1,Ie.mat.depthWrite=!be;for(const lt of Ie.meshes)lt.renderOrder=be?5:0}for(const be of Ie.meshes)be.visible=ze,ze&&Ie.kind==="vessel"&&X.push(be)}P=!0}function Qe(){if(_(H)){for(const ce of T){fT(ce.center,pe,ce.hemi,ce.layer,_(Be),ee,A);for(const fe of ce.meshes)fe.position.copy(F.get(fe)).add(ye.set(ee.x,ee.y,ee.z))}P=!0}}function z(){if(!_(H))return;const ce={x:w.x,y:w.y,z:w.z}[_(Pe)]*.52;b.normal.set(_(Pe)==="x"?-1:0,_(Pe)==="y"?-1:0,_(Pe)==="z"?-1:0),b.constant=_(st)>=.999?y:-ce+2*ce*_(st),P=!0}let we=null;const ne=new N,q=new N;function ge(ce,fe,Ie,ze=!1){if(!f)return;const be=g.target.clone(),lt=f.position.clone(),et=fe?fe.clone().normalize():lt.clone().sub(be).normalize(),Lt=Ie!==null?ze?Ie:Ie*Oe():lt.distanceTo(be),wt=ce.clone().add(et.multiplyScalar(Lt));if(h){g.target.copy(ce),f.position.copy(wt),we=null,P=!0;return}we={t0:be,p0:lt,t1:ce.clone(),p1:wt,start:performance.now(),dur:900}}function Te(ce){if(!we)return;let fe=Math.min(1,(ce-we.start)/we.dur);fe=fe<.5?4*fe*fe*fe:1-Math.pow(-2*fe+2,3)/2,g.target.lerpVectors(we.t0,we.t1,fe),ne.copy(we.p0).sub(we.t0),q.copy(we.p1).sub(we.t1);const Ie=ne.length()+(q.length()-ne.length())*fe;ne.normalize().lerp(q.normalize(),fe).normalize().multiplyScalar(Ie),f.position.copy(g.target).add(ne),fe>=1&&(we=null)}function Ze(ce){const fe=new jt;if(ce.type==="vessel")B.forEach(Ie=>{Ie.key===ce.id&&Ie.meshes.forEach(ze=>fe.expandByObject(ze))});else for(const Ie of T)Ne(Ie,ce)&&Ie.meshes.forEach(ze=>fe.expandByObject(ze));return fe.isEmpty()?null:fe}const ot=ce=>{var fe;return((fe=Ze(ce))==null?void 0:fe.getCenter(new N))??null};let dt=0,rt=0,Rt=!1,zt=!1,Gn=!1,En=null;function fn(ce,fe){if(!u)return null;const Ie=u.domElement.getBoundingClientRect();me.set((ce-Ie.left)/Ie.width*2-1,-((fe-Ie.top)/Ie.height)*2+1),se.setFromCamera(me,f),W.length=0;const ze=b.constant>=y;se.firstHitOnly=ze,se.intersectObjects(X,!1,W);for(const be of W)if(ze||b.distanceToPoint(be.point)>=-.5)return be.object;return null}function Jn(ce){if(!ce)return null;const fe=Y.get(ce);if(fe)return{type:"vessel",id:fe.key};const Ie=I.get(ce);return Ie?_(Fe).pickBy==="lobe"?{type:"lobe",id:Ie.lobe}:{type:"region",id:Ie.key}:null}function pn(){if(!zt||Gn)return;zt=!1;const ce=Rt?Jn(fn(dt,rt)):null;if(e.store.dispatch({type:"hover",sel:ce}),ce&&!_(E)){const fe=e.label(ce);a.textContent=fe.title,o.textContent=fe.sub??"";const Ie=s.getBoundingClientRect();r.style.transform=`translate(${dt-Ie.left+14}px, ${rt-Ie.top+14}px)`,r.hidden=!1,u.domElement.style.cursor="pointer"}else r.hidden=!0,u&&(u.domElement.style.cursor="")}function Wt(ce){dt=ce.clientX,rt=ce.clientY,Rt=!0,zt=!0}function Zt(){Rt=!1,zt=!0,Gn=!1}function bn(ce){En=[ce.clientX,ce.clientY],Gn=!0,r.hidden=!0,_(Fe).rotate&&e.store.dispatch({type:"rotate",on:!1})}function mt(ce){if(Gn=!1,zt=!0,!En||Math.hypot(ce.clientX-En[0],ce.clientY-En[1])>5){En=null;return}En=null;const fe=fn(ce.clientX,ce.clientY);if(_(Fe).quiz){const Ie=fe?I.get(fe):null;Ie&&e.store.dispatch({type:"quizAnswer",picked:Ie.key});return}e.store.dispatch({type:"select",sel:Jn(fe)})}function Xt(ce){if(_(Fe).quiz)return;const fe=Jn(fn(ce.clientX,ce.clientY));fe&&(e.store.dispatch({type:"select",sel:fe}),_e(e.store.s.sel))}let Qt=!1;function Pt(){const ce=_(We),fe=(ce==null?void 0:ce.type)==="region"&&!_(E)?M.get(ce.id):null,Ie=fe==null?void 0:fe.meshes[0];let ze=!1;if(fe&&Ie&&Ie.visible&&u&&(G.copy(fe.anchor).applyMatrix4(Ie.matrixWorld).project(f),G.z<1&&Math.abs(G.x)<1.2&&Math.abs(G.y)<1.2)){const be=u.domElement.clientWidth,lt=u.domElement.clientHeight;l.style.transform=`translate(${(G.x*.5+.5)*be}px, ${(-G.y*.5+.5)*lt}px) translate(-50%, -100%)`,ze=!0}ze!==Qt&&(l.style.opacity=ze?"1":"0",Qt=ze)}ei(()=>{const ce=_(We);c&&(c.textContent=(ce==null?void 0:ce.type)==="region"?e.label(ce).title:"")});function Ei(){return new Zn({color:16777215,roughness:.58,metalness:0,clearcoat:.25,clearcoatRoughness:.45,sheen:.35,sheenRoughness:.6,sheenColor:new ct("#ffd6e0"),side:Yn,clippingPlanes:x})}async function Ti(ce,fe){var Lt,wt;const Ie=await fetch(ce,{credentials:"same-origin",signal:fe});if(!Ie.ok)throw new Error(`HTTP ${Ie.status}`);const ze=+(Ie.headers.get("content-length")??0);if(!Ie.body||!ze)return(Lt=e.onprogress)==null||Lt.call(e,null),Ie.arrayBuffer();const be=Ie.body.getReader(),lt=new Uint8Array(ze);let et=0;for(;;){const{done:Vt,value:en}=await be.read();if(Vt)break;if(et+en.length>lt.length){const yt=new Uint8Array(Math.max(lt.length*2,et+en.length));return yt.set(lt.subarray(0,et)),C(be,yt,et,en)}lt.set(en,et),et+=en.length,(wt=e.onprogress)==null||wt.call(e,Math.round(et/ze*100))}return lt.buffer.slice(0,et)}async function C(ce,fe,Ie,ze){const be=[fe.subarray(0,Ie),ze];for(;;){const{done:wt,value:Vt}=await ce.read();if(wt)break;be.push(Vt)}const lt=be.reduce((wt,Vt)=>wt+Vt.length,0),et=new Uint8Array(lt);let Lt=0;for(const wt of be)et.set(wt,Lt),Lt+=wt.length;return et.buffer}function j(ce){try{const fe=new DataView(ce);if(fe.getUint32(0,!0)!==1179937895)return!1;const Ie=fe.getUint32(12,!0),ze=new TextDecoder().decode(new Uint8Array(ce,20,Ie));return ze.includes("EXT_meshopt_compression")||ze.includes("KHR_meshopt_compression")}catch{return!1}}function le(ce){var Wu,Xu,qu;const fe=new Map((((Wu=e.regions)==null?void 0:Wu.regions)??[]).map(Yt=>[Yt.key,Yt])),Ie=new Set((((Xu=e.regions)==null?void 0:Xu.regions)??[]).map(Yt=>Yt.structure)),ze=Yt=>Ie.has(Yt)||_f(Yt),be=n?void 0:"organ";p=ce,d.add(p);const lt=()=>new Zn({color:"#e11d48",roughness:.32,clearcoat:.8,clearcoatRoughness:.2,emissive:"#3b0010",clippingPlanes:x,side:Yn}),et=new Zn({color:"#cbd5e1",roughness:.6,transparent:!0,opacity:.1,depthWrite:!1,side:hi,clippingPlanes:x}),Lt=new Zn({color:"#e7e2d3",roughness:.7,clippingPlanes:x,side:Yn}),wt=new Map;let Vt=0,en=0;const yt={regions:new Map,vessels:new Map};p.traverse(Yt=>{var Da,ju;if(!Yt.isMesh)return;const tn=Yt;let $i=tn,Dt=null;for(;$i&&!(Dt=Jp($i.name,ze));)$i=$i.parent;const Xn=tn.geometry;if(Xn.attributes.normal||Xn.computeVertexNormals(),Vt+=(Xn.index?Xn.index.count:Xn.attributes.position.count)/3,en++,(ju=(Da=tn.material)==null?void 0:Da.dispose)==null||ju.call(Da),!Dt){tn.visible=!1;return}if(Dt.kind!=="region"){const Vr=Dt.kind==="skin"?"skin":Dt.kind==="bone"?"bone":/neck/i.test(Dt.name)?"neck":"vessels";let xs=wt.get(Dt.key);xs||(xs={key:Dt.key,kind:Dt.kind,layer:Vr,mat:Dt.kind==="skin"?et:Dt.kind==="bone"?Lt:lt(),meshes:[]},wt.set(Dt.key,xs),B.push(xs),Dt.kind==="vessel"&&yt.vessels.set(Dt.key,Vr)),tn.material=xs.mat,Dt.kind==="skin"&&(tn.renderOrder=10),xs.meshes.push(tn),Y.set(tn,xs);return}const Di=fe.get(Dt.key);let Ui=M.get(Dt.key);if(!Ui){const Vr=e.lobeOf(Dt.structure)||zo(Dt.structure);Ui={key:Dt.key,hemi:Dt.hemi,structure:Dt.structure,lobe:Vr,layer:rm(Dt.structure,Dt.hemi,Di==null?void 0:Di.group,be),inner:(Di==null?void 0:Di.inner)??sm(Dt.structure),mat:Ei(),meshes:[],center:new N,anchor:new N},M.set(Dt.key,Ui),T.push(Ui),yt.regions.set(Dt.key,{layer:Ui.layer,inner:Ui.inner,lobe:Vr})}tn.material=Ui.mat,Ui.meshes.push(tn),I.set(tn,Ui)});const ft=new jt;T.length?T.forEach(Yt=>Yt.meshes.forEach(tn=>ft.expandByObject(tn))):ft.setFromObject(p),ft.isEmpty()&&ft.set(new N(-50,-50,-50),new N(50,50,50));const Ut=ft.getCenter(new N);ft.getSize(w),R=Math.max(40,w.length()/2),p.position.sub(Ut),p.updateMatrixWorld(!0);const Nt=new jt,mn=new N,Wn=new N,Qi=new ht;for(const Yt of T){Nt.makeEmpty(),Yt.meshes.forEach(Xn=>{Nt.expandByObject(Xn),F.set(Xn,Xn.position.clone())}),Nt.getCenter(Yt.center);const tn=Yt.meshes[0],$i=tn.geometry.attributes.position;if(mn.copy(Yt.center),Yt.inner||mn.lengthSq()<1){Qi.copy(tn.matrixWorld).invert(),Yt.anchor.copy(Yt.center).applyMatrix4(Qi);continue}mn.normalize();let Dt=-1/0;for(let Xn=0;Xn<$i.count;Xn++){Wn.fromBufferAttribute($i,Xn).applyMatrix4(tn.matrixWorld);const Di=Wn.dot(mn);Di>Dt&&(Dt=Di,Yt.anchor.fromBufferAttribute($i,Xn))}}for(const Yt of B)Yt.meshes.forEach(tn=>F.set(tn,tn.position.clone()));A=n?1:Math.max(1,R/125),f.near=Math.max(.5,R/100),f.far=R*40,f.updateProjectionMatrix(),g.minDistance=n?R*.7:R*.12,g.maxDistance=R*11,m&&(m.scale.setScalar(R/125),m.position.y=-w.y/2-R*(n?.24:.06)),f.position.set(R*3.4*.72,R*1.3,R*2.6),g.target.set(0,0,0),g.update(),e.store.init(yt,[...wt.values()].map(Yt=>Yt.layer),{framing:t(),regions:e.regions}),je(H,!0),$(),(qu=e.onloaded)==null||qu.call(e,{triangles:Math.round(Vt),meshes:en}),Ve()}const he=2e3;let K=0;function Ve(){const ce=[];for(const be of T)for(const lt of be.meshes)ce.push(lt);for(const be of B)if(be.kind==="vessel")for(const lt of be.meshes)ce.push(lt);const fe=be=>(be.geometry.index?be.geometry.index.count:be.geometry.attributes.position.count)/3,Ie=ce.filter(be=>fe(be)>=he).sort((be,lt)=>fe(lt)-fe(be));for(const be of ce)be.raycast=cT;const ze=()=>{const be=performance.now();for(;Ie.length&&performance.now()-be<12;){const lt=Ie.shift().geometry;lt.boundsTree||hT.call(lt,{maxLeafSize:10})}Ie.length&&!S&&(K=window.setTimeout(ze,16))};K=window.setTimeout(ze,50)}Cp(()=>{var en,yt;const ce=new AbortController;try{u=new SM({antialias:!0,powerPreference:"high-performance"})}catch{(en=e.onerror)==null||en.call(e,"webgl");return}u.setPixelRatio(Math.min(devicePixelRatio||1,2)),u.toneMapping=Pf,u.toneMappingExposure=.82,u.outputColorSpace=sn,u.localClippingEnabled=!0;const fe=u.domElement;fe.setAttribute("role","img"),fe.setAttribute("aria-label",e.ariaLabel),fe.tabIndex=-1,s.prepend(fe),d=new ap;const Ie=new Jc(u),ze=new cE;v=Ie.fromScene(ze,.04).texture,ze.traverse(ft=>{const Ut=ft;Ut.isMesh&&(Ut.geometry.dispose(),Ut.material.dispose())}),Ie.dispose(),d.environment=v,d.environmentIntensity=.55,f=new On(32,1,1,5e3),g=new mS(f,fe),g.enableDamping=!0,g.dampingFactor=.08,g.rotateSpeed=.8,g.addEventListener("change",()=>P=!0),g.addEventListener("start",()=>{we=null});const be=new tu(16777215,1.6);be.position.set(-200,300,400),d.add(be);const lt=new tu(8965375,1.2);lt.position.set(300,-100,-400),d.add(lt),d.add(new JM(14674175,1708064,.5)),f.add(new Uu(16777215,.6,0,0)),d.add(f),m=new Ct(new Iu(170,64),new Ki({transparent:!0,depthWrite:!1,uniforms:{c:{value:new ct("#2dd4bf")}},vertexShader:"varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying vec2 vU; void main(){ float d=distance(vU,vec2(.5))*2.; float a=smoothstep(1.,0.,d)*.16 + smoothstep(.02,0.,abs(d-.82))*.25; gl_FragColor=vec4(c,a); }"})),m.rotation.x=-Math.PI/2,d.add(m);const et=()=>{if(!u)return;const ft=Math.max(1,s.clientWidth),Ut=Math.max(1,s.clientHeight);u.setSize(ft,Ut),f.aspect=ft/Ut,f.updateProjectionMatrix(),P=!0},Lt=new ResizeObserver(et);Lt.observe(s),et(),fe.addEventListener("pointermove",Wt),fe.addEventListener("pointerleave",Zt),fe.addEventListener("pointerdown",bn),fe.addEventListener("pointerup",mt),fe.addEventListener("dblclick",Xt);const wt=ft=>{var Ut;ft.preventDefault(),(Ut=e.onerror)==null||Ut.call(e,"context")};fe.addEventListener("webglcontextlost",wt);const Vt=()=>!!_(We)&&_(We).type!=="vessel"&&!h;return u.setAnimationLoop(ft=>{if(we&&(Te(ft),P=!0),g.update()&&(P=!0),pn(),Vt()){const Ut=.45+Math.sin(ft/380)*.15;for(const Nt of T)Ne(Nt,_(We))&&(Nt.mat.emissiveIntensity=Ut);P=!0}P&&u&&(P=!1,u.render(d,f),Pt())}),(yt=e.onprogress)==null||yt.call(e,0),Ti(e.url,ce.signal).then(async ft=>{const Ut=new RS;if(j(ft)){const{MeshoptDecoder:Nt}=await Pp(async()=>{const{MeshoptDecoder:mn}=await import("./meshopt_decoder.module-BbCP70j-.js");return{MeshoptDecoder:mn}},[]);Ut.setMeshoptDecoder(Nt)}return Ut.parseAsync(ft,"")}).then(ft=>{S||le(ft.scene)}).catch(ft=>{var Ut;!S&&(ft==null?void 0:ft.name)!=="AbortError"&&((Ut=e.onerror)==null||Ut.call(e,String((ft==null?void 0:ft.message)??ft)))}),()=>{S=!0,clearTimeout(K),ce.abort(),Lt.disconnect(),fe.removeEventListener("pointermove",Wt),fe.removeEventListener("pointerleave",Zt),fe.removeEventListener("pointerdown",bn),fe.removeEventListener("pointerup",mt),fe.removeEventListener("dblclick",Xt),fe.removeEventListener("webglcontextlost",wt),u==null||u.setAnimationLoop(null),g.dispose();const ft=new Set;d.traverse(Ut=>{var mn,Wn;const Nt=Ut;Nt.isMesh&&((mn=Nt.geometry)!=null&&mn.boundsTree&&dT.call(Nt.geometry),(Wn=Nt.geometry)==null||Wn.dispose(),(Array.isArray(Nt.material)?Nt.material:[Nt.material]).forEach(Qi=>Qi&&ft.add(Qi)))}),ft.forEach(Ut=>Ut.dispose()),v==null||v.dispose(),u==null||u.renderLists.dispose(),u==null||u.dispose(),u==null||u.forceContextLoss(),fe.remove(),u=null,M.clear(),T.length=0,B.length=0,X.length=0,I.clear(),Y.clear(),F.clear()}});var Je={view:Re,home:$,flyToSel:_e,screenshot:ke},tt=pT(),nt=ie(tt),pt=ie(nt);li(pt,ce=>a=ce,()=>a);var _t=U(pt);li(_t,ce=>o=ce,()=>o),li(nt,ce=>r=ce,()=>r);var it=U(nt,2),At=ie(it);return li(At,ce=>c=ce,()=>c),li(it,ce=>l=ce,()=>l),li(tt,ce=>s=ce,()=>s),ve(i,tt),In(Je)}const xp=wf.head;function rf(i,e){const t=Object.fromEntries(i.map(n=>[n,(e==null?void 0:e[n])??xp[n]??!0]));return{mode:"mine",colorBy:"anatomy",pickBy:"structure",sel:null,hover:null,show:{...t},defaults:t,xray:!1,isolate:!1,explode:0,cut:1,cutAxis:"y",rotate:!1,tour:null,quiz:null}}const _T=(i,e)=>(i==null?void 0:i.type)===(e==null?void 0:e.type)&&(i==null?void 0:i.id)===(e==null?void 0:e.id),Is=(i,e)=>e in i.show;function af(i,e,t){if((i==null?void 0:i.type)==="region"&&e==="lobe"){const n=t.regions.get(i.id);if(n)return{type:"lobe",id:n.lobe}}return i}function gT(i,e,t){switch(e.type){case"mode":return e.mode===i.mode?i:{...i,mode:e.mode,...e.mode==="mine"?{tour:null,quiz:null}:{}};case"colorBy":return{...i,colorBy:e.colorBy};case"pickBy":{const n=af(i.sel,e.pickBy,t);return{...i,pickBy:e.pickBy,sel:n}}case"select":{const n=af(e.sel,i.pickBy,t),s={...i,sel:n,isolate:n?i.isolate:!1};if((n==null?void 0:n.type)==="region"){const r=t.regions.get(n.id);r&&(Is(i,r.layer)&&!i.show[r.layer]&&(s.show={...i.show,[r.layer]:!0}),r.inner&&!i.xray&&(s.xray=!0))}else if((n==null?void 0:n.type)==="vessel"){const r=t.vessels.get(n.id);r&&Is(i,r)&&!i.show[r]&&(s.show={...i.show,[r]:!0})}return s}case"hover":return _T(e.sel,i.hover)?i:{...i,hover:e.sel};case"layer":{if(!Is(i,e.layer))return i;const n=e.on??!i.show[e.layer];return n===i.show[e.layer]?i:{...i,show:{...i.show,[e.layer]:n}}}case"xray":{const n=e.on??!i.xray,s={...i.show};if(n)for(const r of H_)Is(i,r)&&(s[r]=!0);return{...i,xray:n,show:s}}case"isolate":{const n=e.on??!i.isolate;return{...i,isolate:n&&!!i.sel}}case"explode":return{...i,explode:of(e.value)};case"cut":return{...i,cut:of(e.value)};case"cutAxis":return{...i,cutAxis:e.axis};case"rotate":return{...i,rotate:e.on??!i.rotate};case"view":return e.view==="inside"&&Is(i,"hemi_R")?{...i,show:{...i.show,hemi_R:!1}}:i;case"reset":{const n=Object.fromEntries(Object.keys(i.show).map(s=>[s,i.defaults[s]??xp[s]??!0]));return{...i,sel:null,hover:null,show:n,xray:!1,isolate:!1,explode:0,cut:1,rotate:!1,tour:null,quiz:null}}case"tour":{const n={...i.show};return Is(i,"hemi_R")&&(n.hemi_R=!e.hideR),{...i,mode:"learn",quiz:null,tour:{i:e.step},sel:{type:"lobe",id:e.lobe},xray:e.xray,isolate:!1,show:n}}case"tourEnd":{if(!i.tour)return i;const n={...i.show};return Is(i,"hemi_R")&&(n.hemi_R=!0),{...i,tour:null,xray:!1,sel:null,show:n}}case"quizStart":return{...i,mode:"learn",tour:null,sel:null,isolate:!1,quiz:{target:e.target,score:0,n:0,tries:0,last:null,revealing:!1}};case"quizNext":return i.quiz?{...i,sel:null,quiz:{...i.quiz,target:e.target,tries:0,last:null,revealing:!1}}:i;case"quizAnswer":{const n=i.quiz;if(!n||n.revealing)return i;const s=e.picked===n.target;if(s)return{...i,sel:{type:"region",id:n.target},quiz:{...n,score:n.score+1,n:n.n+1,last:{ok:s,picked:e.picked},revealing:!0}};const r=n.tries+1,a=r>=2;return{...i,sel:a?{type:"region",id:n.target}:i.sel,quiz:{...n,tries:r,n:a?n.n+1:n.n,last:{ok:s,picked:e.picked},revealing:a}}}case"quizSkip":{const n=i.quiz;return!n||n.revealing?i:{...i,sel:{type:"region",id:n.target},quiz:{...n,n:n.n+1,last:null,revealing:!0}}}case"quizEnd":return i.quiz?{...i,quiz:null,sel:null}:i}}const of=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),vT=[{lobe:"frontal",view:[.6,.35,1]},{lobe:"parietal",view:[.5,.8,-.4]},{lobe:"temporal",view:[1,-.1,.1]},{lobe:"occipital",view:[.3,.2,-1]},{lobe:"insular",view:[1,.1,.2],xray:!0},{lobe:"limbic",view:[-1,.1,0],hideR:!0},{lobe:"subcortical",view:[.6,.5,.8],xray:!0},{lobe:"ventricles",view:[.6,.5,.8],xray:!0},{lobe:"cerebellum",view:[.4,-.2,-1]},{lobe:"brainstem",view:[-1,-.1,.2],hideR:!0}],xT=i=>vT.filter(e=>i.has(e.lobe));function lf(i,e){const t=[];for(const[n,s]of e.regions)!s.inner&&i.show[s.layer]&&t.push(n);return t}function cf(i,e,t=Math.random){if(!i.length)return null;const n=i.length>1&&e?i.filter(s=>s!==e):i;return n[Math.min(n.length-1,Math.floor(t()*n.length))]}var ba,Ma,Sa,Ea,Ta,Aa,wa;class yT{constructor(){es(this,ba,bt(fu(rf([]))));es(this,Ma,bt({keys:[],vessels:[],layers:[],lobes:new Set,present:new Map}));es(this,Sa,bt({}));es(this,Ea,bt(!1));es(this,Ta,bt("head"));es(this,Aa,bt(!0));es(this,wa,bt("head"));rl(this,"facts",{regions:new Map,vessels:new Map});rl(this,"dispatch",e=>{const t=gT(this.s,e,this.facts);t!==this.s&&(this.s=t)})}get s(){return _(Dn(this,ba))}set s(e){je(Dn(this,ba),e,!0)}get index(){return _(Dn(this,Ma))}set index(e){je(Dn(this,Ma),e)}get colors(){return _(Dn(this,Sa))}set colors(e){je(Dn(this,Sa),e)}get ready(){return _(Dn(this,Ea))}set ready(e){je(Dn(this,Ea),e,!0)}get framing(){return _(Dn(this,Ta))}set framing(e){je(Dn(this,Ta),e,!0)}get brain(){return _(Dn(this,Aa))}set brain(e){je(Dn(this,Aa),e,!0)}get wording(){return _(Dn(this,wa))}set wording(e){je(Dn(this,wa),e,!0)}init(e,t,n={}){this.facts=e;const s=n.framing??"head",r=new Set(t),a=new Set,o=new Map,l=new Map;for(const[u,d]of e.regions){r.add(d.layer),a.add(d.lobe);const[f,g]=[u.slice(0,1),u.slice(2)];o.has(g)||o.set(g,new Set),o.get(g).add(f),l.set(g,d.lobe)}for(const u of e.vessels.values())r.add(u);const c=B_(r,n.regions,s),h=[...o.keys()].sort((u,d)=>Vo(u)-Vo(d)||u.localeCompare(d));this.colors=vm(h,u=>l.get(u)??"other"),this.index={keys:[...e.regions.keys()],vessels:[...e.vessels.keys()],layers:c.layers,lobes:a,present:o},this.framing=s,this.brain=k_(a),this.wording=z_(s,this.brain),this.s={...rf(c.layers,c.defaults),mode:this.s.mode},this.ready=!0}}ba=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,Ea=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,wa=new WeakMap;var bT=Ce('<button type="button"> </button>'),MT=Ce('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button> <!></li>'),uf=Ce('<ul role="list" class="svelte-1r3olto"></ul>'),ST=Ce('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button> <button type="button"><!></button></div> <!></div>'),ET=Ce('<p class="none faint svelte-1r3olto"> </p>'),TT=Ce('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" style="background:#e11d48" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button></li>'),AT=Ce('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button></div> <!></div>'),wT=Ce('<div class="tree svelte-1r3olto"><label class="search svelte-1r3olto"><!> <span class="sr-only"> </span> <input type="search" autocomplete="off" spellcheck="false" class="svelte-1r3olto"/> <kbd aria-hidden="true" class="svelte-1r3olto">/</kbd></label> <div class="th svelte-1r3olto"><span> </span><span class="n svelte-1r3olto"> </span></div> <div class="list svelte-1r3olto"><!> <!></div></div>');function RT(i,e){Ln(e,!0);let t=gr(e,"vesselName",3,ee=>ee),n=bt(""),s,r,a=fu({});function o(){s==null||s.focus(),s==null||s.select()}const l=Ue(()=>{const ee=new Map;for(const se of e.store.index.present.keys()){const me=e.lobeOfStructure(se);ee.has(me)||ee.set(me,[]),ee.get(me).push(se)}return[...oc,...[...ee.keys()].filter(se=>!oc.includes(se))].filter(se=>ee.has(se)).map(se=>({lobe:se,items:ee.get(se).map(me=>({id:me,name:e.structName(me),hs:[...e.store.index.present.get(me)].sort()})).sort(im.has(se)?(me,W)=>Vo(me.id)-Vo(W.id)||me.name.localeCompare(W.name):(me,W)=>me.name.localeCompare(W.name))}))}),c=Ue(()=>_(n).trim().toLowerCase()),h=Ue(()=>_(c)?_(l).map(ee=>({...ee,items:ee.items.filter(pe=>e.search(pe.id).includes(_(c)))})).filter(ee=>ee.items.length):_(l)),u=Ue(()=>e.store.index.keys.length),d=Ue(()=>e.onpickvessel?e.store.index.vessels.map(ee=>({key:ee,name:t()(ee)})):[]),f=Ue(()=>_(c)?_(d).filter(ee=>ee.name.toLowerCase().includes(_(c))):_(d));let g=bt(!1);const v=Ue(()=>V(mu("m3d.search.ph",e.store.wording,Fn))),m=Ue(()=>e.store.s.sel),p=Ue(()=>{var ee;return((ee=_(m))==null?void 0:ee.type)==="region"?_(m).id.slice(2):null});ei(()=>{const ee=_(p);if(!ee)return;const pe=e.lobeOfStructure(ee);a[pe]||(a[pe]=!0),queueMicrotask(()=>{var se;return(se=r==null?void 0:r.querySelector(`[data-id="${CSS.escape(ee)}"]`))==null?void 0:se.scrollIntoView({block:"nearest"})})});const y=ee=>ee.includes("M")?"M":ee.includes("L")?"L":ee[0];function b(ee){var pe,se;if(ee.key==="Enter"){const me=(pe=_(h)[0])==null?void 0:pe.items[0];me?(ee.preventDefault(),e.onpick(`${y(me.hs)}|${me.id}`)):_(f)[0]&&e.onpickvessel&&(ee.preventDefault(),e.onpickvessel(_(f)[0].key))}else ee.key==="Escape"?_(n)?(je(n,""),ee.stopPropagation()):s.blur():ee.key==="ArrowDown"&&(ee.preventDefault(),(se=r.querySelector("button"))==null||se.focus())}var x={focus:o},w=wT(),R=ie(w),A=ie(R);Mt(A,{name:"search",size:15});var P=U(A,2),S=Q(P,!0),M=U(P,2);li(M,ee=>s=ee,()=>s);var T=U(R,2),I=ie(T),F=Q(I,!0),B=U(I),Y=Q(B,!0),X=U(T,2),re=ie(X);qt(re,17,()=>_(h),ee=>ee.lobe,(ee,pe)=>{const se=Ue(()=>!!_(c)||!!a[_(pe).lobe]);var me=ST(),W=ie(me),G=ie(W),te=ie(G);let ue;var Z=U(te,2),xe=U(Z,2),Ae=Q(xe,!0),Fe=U(xe,2),De=Q(Fe,!0),We=U(G,2);let O;var $e=ie(We);Mt($e,{name:"focus",size:13});var qe=U(W,2);{var Ye=Be=>{var st=uf();qt(st,21,()=>_(pe).items,Pe=>Pe.id,(Pe,L)=>{const E=Ue(()=>e.store.colors[_(L).id]);var D=MT();let H;var oe=ie(D),ae=ie(oe),Oe=U(ae,2),de=Q(Oe,!0),Se=U(oe,2);qt(Se,17,()=>_(L).hs.filter(Re=>Re!=="M"),Bn,(Re,$)=>{var _e=bT();let Le;var ke=Q(_e,!0);Ee((Me,Ne)=>{var He,Qe;Le=Bt(_e,1,"lr svelte-1r3olto",null,Le,{on:((He=_(m))==null?void 0:He.type)==="region"&&_(m).id===`${_($)}|${_(L).id}`}),Ge(_e,"aria-label",Me),Ge(_e,"aria-pressed",((Qe=_(m))==null?void 0:Qe.type)==="region"&&_(m).id===`${_($)}|${_(L).id}`),k(ke,Ne)},[()=>V(_($)==="L"?"side.leftOf":"side.rightOf",{name:_(L).name}),()=>V(_($)==="L"?"side.L":"side.R")]),ut("click",_e,()=>e.onpick(`${_($)}|${_(L).id}`)),ve(Re,_e)}),Ee(Re=>{H=Bt(D,1,"it svelte-1r3olto",null,H,{sel:_(p)===_(L).id}),Ge(D,"data-id",_(L).id),Ge(oe,"aria-current",_(p)===_(L).id?"true":void 0),vn(ae,`background:${Re??""}`),k(de,_(L).name)},[()=>_(E)?Ef(_(E)):"var(--text-3)"]),ut("click",oe,()=>e.onpick(`${y(_(L).hs)}|${_(L).id}`)),ve(Pe,D)}),ve(Be,st)};Xe(qe,Be=>{_(se)&&Be(Ye)})}Ee((Be,st,Pe,L)=>{var E;Ge(G,"aria-expanded",_(se)),ue=Bt(te,1,"car svelte-1r3olto",null,ue,{o:_(se)}),vn(Z,`background:${Be??""}`),k(Ae,st),k(De,_(pe).items.length),O=Bt(We,1,"all svelte-1r3olto",null,O,{on:((E=_(m))==null?void 0:E.type)==="lobe"&&_(m).id===_(pe).lobe}),Ge(We,"aria-label",Pe),Ge(We,"title",L)},[()=>Sr(_(pe).lobe),()=>e.lobeName(_(pe).lobe),()=>V("m3d.selectLobe",{name:e.lobeName(_(pe).lobe)}),()=>V("m3d.selectLobe",{name:e.lobeName(_(pe).lobe)})]),ut("click",G,()=>a[_(pe).lobe]=!a[_(pe).lobe]),ut("click",We,()=>e.onpicklobe(_(pe).lobe)),ve(ee,me)},ee=>{var pe=Ra(),se=gt(pe);{var me=W=>{var G=ET(),te=Q(G,!0);Ee(ue=>k(te,ue),[()=>_(c)?V("m3d.noMatch"):V("m3d.noStructures")]),ve(W,G)};Xe(se,W=>{_(f).length||W(me)})}ve(ee,pe)});var J=U(re,2);{var ye=ee=>{const pe=Ue(()=>!!_(c)||_(g)||!_(u));var se=AT(),me=ie(se),W=ie(me),G=ie(W);let te;var ue=U(G,2),Z=U(ue,2),xe=Q(Z,!0),Ae=U(Z,2),Fe=Q(Ae,!0),De=U(me,2);{var We=O=>{var $e=uf();qt($e,21,()=>_(f),qe=>qe.key,(qe,Ye)=>{var Be=TT();let st;var Pe=ie(Be),L=U(ie(Pe),2),E=Q(L,!0);Ee(()=>{var D,H;st=Bt(Be,1,"it svelte-1r3olto",null,st,{sel:((D=_(m))==null?void 0:D.type)==="vessel"&&_(m).id===_(Ye).key}),Ge(Pe,"aria-current",((H=_(m))==null?void 0:H.type)==="vessel"&&_(m).id===_(Ye).key?"true":void 0),k(E,_(Ye).name)}),ut("click",Pe,()=>{var D;return(D=e.onpickvessel)==null?void 0:D.call(e,_(Ye).key)}),ve(qe,Be)}),ve(O,$e)};Xe(De,O=>{_(pe)&&O(We)})}Ee((O,$e)=>{Ge(W,"aria-expanded",_(pe)),te=Bt(G,1,"car svelte-1r3olto",null,te,{o:_(pe)}),vn(ue,`background:${O??""}`),k(xe,$e),k(Fe,_(f).length)},[()=>Sr("arteries"),()=>V("m3d.tree.vessels")]),ut("click",W,()=>je(g,!_(pe))),ve(ee,se)};Xe(J,ee=>{_(f).length&&ee(ye)})}return li(X,ee=>r=ee,()=>r),Ee((ee,pe)=>{k(S,ee),Ge(M,"placeholder",_(v)),k(F,pe),k(Y,_(u)+_(d).length)},[()=>V("m3d.search"),()=>V("m3d.structures")]),ut("keydown",M,b),Lp(M,()=>_(n),ee=>je(n,ee)),ve(i,w),In(x)}Si(["keydown","click"]);var CT=Ce('<div class="none svelte-1bo6tlo" role="status"><b> </b><span class="muted"> </span></div>'),PT=Ce('<span class="chip best svelte-1bo6tlo"> </span>'),hf=Ce('<small class="muted svelte-1bo6tlo"> </small>'),LT=Ce('<label><input type="radio" name="pipeline" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!></span></label>'),df=Ce('<fieldset class="opts svelte-1bo6tlo"><legend class="svelte-1bo6tlo"> </legend> <!></fieldset>'),IT=Ce('<p class="one svelte-1bo6tlo"><b> </b> · <span class="muted"> </span></p>'),DT=Ce('<span class="chip warn svelte-1bo6tlo"> </span>'),UT=Ce('<small class="faint svelte-1bo6tlo"> </small>'),NT=Ce('<label><input type="radio" name="backend" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!> <!></span></label>'),FT=Ce('<p class="err svelte-1bo6tlo" role="alert"> </p>'),OT=Ce('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo"> </p> <ul class="pts svelte-1bo6tlo"><li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li></ul> <!> <!> <!> <button type="button" class="btn primary lg svelte-1bo6tlo"><!> </button>',1),BT=Ce("<li><!> </li>"),kT=Ce('<ol class="stages svelte-1bo6tlo"></ol>'),zT=Ce('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo" aria-live="polite"> </p> <div class="bar svelte-1bo6tlo" role="progressbar"><i class="svelte-1bo6tlo"></i></div> <div class="pct faint svelte-1bo6tlo"> </div> <!> <p class="faint small svelte-1bo6tlo"> </p> <button type="button" class="btn svelte-1bo6tlo"> </button>',1),VT=Ce('<section class="panel build fade-in svelte-1bo6tlo" aria-labelledby="b-t"><div class="ic svelte-1bo6tlo" aria-hidden="true"><!></div> <!></section> <!>',1);function HT(i,e){Ln(e,!0);let t=bt(null),n=bt(""),s=bt(0),r=bt(null),a=bt(!1),o=null;const l=fu([]);let c=bt(null),h=bt(!0),u=bt("auto"),d=bt("auto");ei(()=>{const Z=e.studyId;let xe=!1;return je(h,!0),je(c,null),Ip(Z).then(Ae=>{xe||(je(c,Ae),je(u,(Ae==null?void 0:Ae.recommended)??"auto",!0),je(d,m(Ae==null?void 0:Ae.pipelines.find(Fe=>Fe.pipeline===_(u))),!0))}).catch(()=>{xe||je(c,null)}).finally(()=>{xe||je(h,!1)}),()=>{xe=!0}});const f=Ue(()=>{var Z;return(Z=_(c))==null?void 0:Z.pipelines.find(xe=>xe.pipeline===_(u))}),g=Ue(()=>{var Z;return((Z=_(f))==null?void 0:Z.backends)??[]}),v=Ue(()=>!!_(c)&&_(c).pipelines.length===0);function m(Z){var Ae;const xe=((Z==null?void 0:Z.backends)??[]).filter(Fe=>Fe.available);return((Ae=xe.find(Fe=>Fe.default)??xe.find(Fe=>Fe.id==="classical")??xe[0])==null?void 0:Ae.id)??"auto"}function p(Z){var xe;je(u,Z,!0),je(d,m((xe=_(c))==null?void 0:xe.pipelines.find(Ae=>Ae.pipeline===Z)),!0)}const y=Z=>Fn(`m3d.build.pipeline.${Z}`)?V(`m3d.build.pipeline.${Z}`):ma(Z),b=Z=>Fn(`m3d.build.pipeline.${Z}.d`)?V(`m3d.build.pipeline.${Z}.d`):"",x=Z=>Fn(`m3d.build.backend.${Z}`)?V(`m3d.build.backend.${Z}`):ma(Z),w=Z=>Fn(`m3d.build.backend.${Z}.d`)?V(`m3d.build.backend.${Z}.d`):"",R=Z=>Fn(`mstage.${Z}`)?V(`mstage.${Z}`):V("mstage.working"),A=Ue(()=>Math.round(Math.max(0,Math.min(100,_(s))))),P=Ue(()=>l);function S(Z){if(Z instanceof Vp){const xe=`m3d.build.err.${Z.status}`;return Fn(xe)?V(xe,{msg:Z.message}):V("m3d.build.error",{msg:Z.message})}return Z instanceof TypeError?V("m3d.build.err.net"):V("m3d.build.error",{msg:String((Z==null?void 0:Z.message)??Z)})}function M(Z){var Ae;const xe=(Ae=Z.result)==null?void 0:Ae.code;return typeof xe=="string"&&Fn(`m3d.build.code.${xe}`)?V(`m3d.build.code.${xe}`):Z.error?V("m3d.build.error",{msg:Z.error}):V("m3d.build.failed")}let T=bt(null),I=bt(!1);const F=()=>_(c)?_(u)==="auto"?_(c).recommended:_(u):null;async function B(){if(F()==="brain_mr"){je(I,!0);const Z=Up(await Fp().catch(()=>null),Np());if(je(I,!1),Z){je(T,Z);return}}await re()}function Y(){je(T,null),re()}function X(){var Z;(Z=_(T))!=null&&Z.bundle&&Bp(_(T).bundle.id),je(T,null),re()}async function re(){je(r,null),je(n,""),je(s,0),l.length=0;try{je(t,await kp(e.studyId,_(c)?_(u):"auto",_(c)&&_(g).length>1?_(d):void 0),!0),o=zp(_(t).id,Z=>{je(n,Z.stage,!0),je(s,Z.pct,!0),Z.stage&&!l.includes(Z.stage)&&l.push(Z.stage)},Z=>{je(t,null),je(a,!1),Z.status==="done"?e.ondone():Z.status==="cancelled"?je(r,null):je(r,M(Z),!0)})}catch(Z){je(t,null),je(r,S(Z),!0)}}async function J(){if(_(t)){je(a,!0);try{await Op(_(t).id)}catch{je(a,!1)}}}pf(()=>o==null?void 0:o());var ye=VT(),ee=gt(ye),pe=ie(ee),se=ie(pe);Mt(se,{name:"cube",size:30});var me=U(pe,2);{var W=Z=>{var xe=OT(),Ae=gt(xe),Fe=Q(Ae,!0),De=U(Ae,2),We=Q(De,!0),O=U(De,2),$e=ie(O),qe=ie($e);Mt(qe,{name:"lock",size:15});var Ye=U(qe,1,!0),Be=U($e,2),st=ie(Be);Mt(st,{name:"clock",size:15});var Pe=U(st,1,!0),L=U(Be,2),E=ie(L);Mt(E,{name:"info",size:15});var D=U(E,1,!0),H=U(O,2);{var oe=Ne=>{var He=CT(),Qe=ie(He),z=Q(Qe,!0),we=U(Qe),ne=Q(we,!0);Ee((q,ge)=>{k(z,q),k(ne,ge)},[()=>V("m3d.build.none"),()=>V("m3d.build.none.d")]),ve(Ne,He)},ae=Ne=>{var He=df(),Qe=ie(He),z=Q(Qe,!0),we=U(Qe,2);qt(we,19,()=>_(c).pipelines,ne=>ne.pipeline,(ne,q,ge)=>{var Te=LT();let Ze;var ot=ie(Te),dt=U(ot,2),rt=ie(dt),Rt=ie(rt),zt=U(Rt);{var Gn=pn=>{var Wt=PT(),Zt=Q(Wt,!0);Ee(bn=>k(Zt,bn),[()=>V("m3d.build.best")]),ve(pn,Wt)};Xe(zt,pn=>{_(ge)===0&&pn(Gn)})}var En=U(rt,2);{var fn=pn=>{var Wt=hf(),Zt=Q(Wt,!0);Ee(bn=>k(Zt,bn),[()=>_(q).reason||b(_(q).pipeline)]),ve(pn,Wt)},Jn=Ue(()=>b(_(q).pipeline)||_(q).reason);Xe(En,pn=>{_(Jn)&&pn(fn)})}Ee(pn=>{Ze=Bt(Te,1,"opt svelte-1bo6tlo",null,Ze,{on:_(u)===_(q).pipeline}),ko(ot,_(q).pipeline),Zu(ot,_(u)===_(q).pipeline),k(Rt,pn)},[()=>y(_(q).pipeline)]),ut("change",ot,()=>p(_(q).pipeline)),ve(ne,Te)}),Ee(ne=>k(z,ne),[()=>V("m3d.build.choose")]),ve(Ne,He)},Oe=Ne=>{var He=IT(),Qe=ie(He),z=Q(Qe,!0),we=U(Qe,2),ne=Q(we,!0);Ee((q,ge)=>{k(z,q),k(ne,ge)},[()=>y(_(f).pipeline),()=>b(_(f).pipeline)]),ve(Ne,He)},de=Ue(()=>_(f)&&b(_(f).pipeline));Xe(H,Ne=>{_(v)?Ne(oe):_(c)&&_(c).pipelines.length>1?Ne(ae,1):_(de)&&Ne(Oe,2)})}var Se=U(H,2);{var Re=Ne=>{var He=df(),Qe=ie(He),z=Q(Qe,!0),we=U(Qe,2);qt(we,17,()=>_(g),ne=>ne.id,(ne,q)=>{var ge=NT();let Te;var Ze=ie(ge),ot=U(Ze,2),dt=ie(ot),rt=ie(dt),Rt=U(rt);{var zt=Wt=>{var Zt=DT(),bn=Q(Zt,!0);Ee(mt=>k(bn,mt),[()=>V("m3d.build.backend.unavailable")]),ve(Wt,Zt)};Xe(Rt,Wt=>{_(q).available||Wt(zt)})}var Gn=U(dt,2);{var En=Wt=>{var Zt=hf(),bn=Q(Zt,!0);Ee(mt=>k(bn,mt),[()=>!_(q).available&&_(q).reason?_(q).reason:w(_(q).id)]),ve(Wt,Zt)},fn=Ue(()=>w(_(q).id)||_(q).reason);Xe(Gn,Wt=>{_(fn)&&Wt(En)})}var Jn=U(Gn,2);{var pn=Wt=>{var Zt=UT(),bn=Q(Zt,!0);Ee(()=>k(bn,_(q).licence)),ve(Wt,Zt)};Xe(Jn,Wt=>{_(q).licence&&Wt(pn)})}Ee(Wt=>{Te=Bt(ge,1,"opt svelte-1bo6tlo",null,Te,{on:_(d)===_(q).id,off:!_(q).available}),ko(Ze,_(q).id),Zu(Ze,_(d)===_(q).id),Ze.disabled=!_(q).available,k(rt,Wt)},[()=>x(_(q).id)]),ut("change",Ze,()=>je(d,_(q).id,!0)),ve(ne,ge)}),Ee(ne=>k(z,ne),[()=>V("m3d.build.backend")]),ve(Ne,He)};Xe(Se,Ne=>{!_(v)&&_(g).length>1&&Ne(Re)})}var $=U(Se,2);{var _e=Ne=>{var He=FT(),Qe=Q(He,!0);Ee(()=>k(Qe,_(r))),ve(Ne,He)};Xe($,Ne=>{_(r)&&Ne(_e)})}var Le=U($,2),ke=ie(Le);Mt(ke,{name:"cube",size:17});var Me=U(ke,1,!0);Ee((Ne,He,Qe,z,we,ne)=>{k(Fe,Ne),k(We,He),k(Ye,Qe),k(Pe,z),k(D,we),Le.disabled=_(h)||_(v)||_(I),k(Me,ne)},[()=>V("m3d.build.title"),()=>V("m3d.build.lead"),()=>V("m3d.build.p1"),()=>V("m3d.build.p2"),()=>V("m3d.build.p3"),()=>_(r)?V("m3d.build.retry"):V("m3d.build.cta")]),ut("click",Le,B),ve(Z,xe)},G=Z=>{var xe=zT(),Ae=gt(xe),Fe=Q(Ae,!0),De=U(Ae,2),We=Q(De),O=U(De,2);Ge(O,"aria-valuemin",0),Ge(O,"aria-valuemax",100);var $e=Q(O),qe=U(O,2),Ye=Q(qe),Be=U(qe,2);{var st=H=>{var oe=kT();qt(oe,21,()=>_(P),Bn,(ae,Oe)=>{var de=BT();let Se;var Re=ie(de);{let _e=Ue(()=>_(Oe)===_(n)?"spark":"check");Mt(Re,{get name(){return _(_e)},size:13})}var $=U(Re,1,!0);Ee(_e=>{Se=Bt(de,1,"svelte-1bo6tlo",null,Se,{now:_(Oe)===_(n)}),k($,_e)},[()=>R(_(Oe))]),ve(ae,de)}),ve(H,oe)};Xe(Be,H=>{_(P).length&&H(st)})}var Pe=U(Be,2),L=Q(Pe,!0),E=U(Pe,2),D=Q(E,!0);Ee((H,oe,ae,Oe,de)=>{k(Fe,H),k(We,`${oe??""}…`),Ge(O,"aria-valuenow",_(A)),Ge(O,"aria-label",ae),vn($e,`width:${_(A)??""}%`),k(Ye,`${_(A)??""}%`),k(L,Oe),E.disabled=_(a),k(D,de)},[()=>V("m3d.build.progress"),()=>_(n)?R(_(n)):V("mstage.starting"),()=>V("m3d.build.progress"),()=>V("m3d.build.note"),()=>_(a)?V("import.progress.cancelling"):V("common.cancel")]),ut("click",E,J),ve(Z,xe)};Xe(me,Z=>{_(t)?Z(G,-1):Z(W)})}var te=U(ee,2);{var ue=Z=>{Dp(Z,{get offer(){return _(T)},context:"build",onclose:()=>je(T,null),ondone:Y,onskip:X})};Xe(te,Z=>{_(T)&&Z(ue)})}ve(i,ye),In()}Si(["change","click"]);var GT=Ce('<div class="center svelte-yes7qw" role="status"><div class="spinner svelte-yes7qw"></div></div>'),WT=Ce('<section class="panel msg svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p><p class="faint mono svelte-yes7qw"> </p> <a class="btn svelte-yes7qw"><!> </a></section>'),XT=Ce('<nav class="crumbs faint svelte-yes7qw"><a class="svelte-yes7qw"> </a> <span aria-hidden="true" class="svelte-yes7qw">›</span> <span aria-current="page" class="svelte-yes7qw"> </span></nav> <!>',1),qT=Ce('<p class="faint mono svelte-yes7qw"> </p>'),jT=Ce('<section class="panel msg over svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p> <!></section>'),YT=Ce('<div class="loading panel svelte-yes7qw" role="status" aria-live="polite"><span class="svelte-yes7qw"> </span> <div class="bar svelte-yes7qw"><i></i></div></div>'),KT=Ce('<div class="top svelte-yes7qw"><!></div>'),ZT=Ce('<div class="m3d svelte-yes7qw"><!> <!> <!> <aside id="m3d-controls"><div class="lh svelte-yes7qw"><a class="back svelte-yes7qw"><!></a> <div class="st svelte-yes7qw"><h1 class="pt svelte-yes7qw"> </h1><small class="faint svelte-yes7qw"> </small></div> <button type="button" class="btn icon mob svelte-yes7qw"><!></button></div> <!></aside> <aside id="m3d-card"><button type="button" class="btn icon mob closer svelte-yes7qw"><!></button> <!></aside> <!> <div class="bottom svelte-yes7qw"><!> <!></div> <p class="sr-only svelte-yes7qw" aria-live="polite"> </p></div>');function $T(i,e){Ln(e,!0);let t=bt("loading"),n=bt(null),s=bt(null),r=bt(null),a=bt(null),o=bt(null),l=bt(null),c=bt(null),h=bt(0),u=bt(!1),d=bt(null);const f=new yT;let g=bt(null),v=bt(null),m=bt(!1),p=bt(!1);const y=Ue(()=>e.params.id),b=Ue(()=>encodeURIComponent(e.params.id));async function x(D){je(t,"loading"),je(n,null),je(u,!1),je(d,null);try{const[H,oe]=await Promise.all([Gp(D).catch(()=>null),Wp(D)]);if(je(s,H,!0),!oe){je(t,"missing");return}je(r,oe,!0);const[ae,Oe,de]=await Promise.all([Xp(D),qp(D),Ju("en")]);je(a,ae),je(o,Oe),je(l,de),je(t,"ready")}catch(H){je(n,String((H==null?void 0:H.message)??H),!0),je(t,"error")}}ei(()=>{x(_(y))}),ei(()=>{const D=xi.lang;je(c,null),D!=="en"&&Ju(D).then(H=>{xi.lang===D&&je(c,H)})});const w=Ue(()=>om(_(l),xi.lang,_(c))),R=(D,H)=>Fn(D)?V(D,H):null,A=Ue(()=>({kb:_(w),tr:R,en:_(l),lang:xi.lang})),P=Ue(()=>j_(_(o))),S=Ue(()=>{var D;return new Map((((D=_(a))==null?void 0:D.regions)??[]).map(H=>[H.key,H]))}),M=D=>xf(_(w),D),T=Ue(()=>{var D;return O_(_(a),(D=_(r))==null?void 0:D.pipeline)}),I=(D,H)=>V(mu(D,f.ready?f.wording:_(T),Fn),H),F=D=>R(`measure.${D.key}`)??D.label,B=D=>R(`measure.${D.key}.short`)??R(`measure.${D.key}`)??D.label,Y=D=>D.type==="lobe"?Wi(_(A),D.id):D.type==="vessel"?V(`card.vessel.${yf(D.id,_(T))}`):cc(_(A),D.id),X=D=>({title:Y(D),sub:D.type==="region"?Wi(_(A),M(D.id.slice(2))):D.type==="vessel"?I("m3d.vessel.sub"):void 0}),re=Ue(()=>f.s),J=Ue(()=>_(re).colorBy.startsWith("data:")?_(P).find(D=>`data:${D.key}`===_(re).colorBy)??null:null),ye=Ue(()=>xT(f.index.lobes)),ee=Ue(()=>_(re).sel?V("m3d.announce",{name:Y(_(re).sel)}):f.ready?V("m3d.announce.none"):"");function pe(D,H=!1){var oe;f.dispatch({type:"select",sel:D}),H&&((oe=_(g))==null||oe.flyToSel(f.s.sel))}function se(D){_(re).quiz||pe({type:"region",id:D},!0)}function me(D){_(re).quiz||pe({type:"lobe",id:D},!0)}function W(D){_(re).quiz||pe({type:"vessel",id:D},!0)}function G(D){var H;f.dispatch({type:"view",view:D}),(H=_(g))==null||H.view(D)}function te(){var D;f.dispatch({type:"reset"}),(D=_(g))==null||D.home()}function ue(D){const H=_(ye)[D];H&&(f.dispatch({type:"tour",step:D,lobe:H.lobe,xray:!!H.xray,hideR:!!H.hideR}),Qu().then(()=>{var oe;return(oe=_(g))==null?void 0:oe.flyToSel({type:"lobe",id:H.lobe},H.view)}))}const Z=()=>ue(0),xe=D=>{var H;return ue(Math.max(0,Math.min(_(ye).length-1,(((H=_(re).tour)==null?void 0:H.i)??-1)+D)))};function Ae(){var D;f.dispatch({type:"tourEnd"}),(D=_(g))==null||D.home()}function Fe(){const D=cf(lf(f.s,f.facts),null);D&&f.dispatch({type:"quizStart",target:D})}let De=0;ei(()=>{var H;const D=_(re).quiz;if(D!=null&&D.revealing)return De=window.setTimeout(()=>{const oe=cf(lf(f.s,f.facts),D.target);oe&&f.dispatch({type:"quizNext",target:oe})},(H=D.last)!=null&&H.ok?1300:1700),()=>clearTimeout(De)}),pf(()=>clearTimeout(De));function We(){f.dispatch({type:"xray",on:!0});const D=f.index.vessels.find(H=>!/neck/i.test(H))??f.index.vessels[0];D&&pe({type:"vessel",id:D})}const O=Ue(()=>({studyId:_(y),kb:_(w),namer:_(A),stats:_(o),regions:_(a),regionByKey:_(S),status:_(r),store:f,measureLabel:F,tourLen:_(ye).length,framing:_(T),ft:I,study:_(s),act:{select:pe,tour:Z,tourStep:xe,tourEnd:Ae,quiz:Fe,showVessels:We}})),$e=()=>typeof matchMedia<"u"&&matchMedia("(max-width: 900px)").matches;ei(()=>{_(re).sel&&!_(re).quiz&&$e()&&(je(p,!0),je(m,!1))});function qe(D){if(_(t)!=="ready"||D.ctrlKey||D.metaKey||D.altKey||D.defaultPrevented)return;const H=D.target;if(!(H&&(H.isContentEditable||H.tagName==="TEXTAREA"||H.tagName==="SELECT"||H.tagName==="INPUT"&&H.type!=="range"&&H.type!=="checkbox")))if(D.key==="Escape"){if(_(re).quiz)f.dispatch({type:"quizEnd"});else if(_(re).tour)Ae();else if(_(m)||_(p))je(m,!1),je(p,!1);else if(_(re).sel)pe(null);else return;D.preventDefault()}else D.key==="/"?(D.preventDefault(),$e()&&(je(m,!0),je(p,!1)),Qu().then(()=>{var ae;return(ae=_(v))==null?void 0:ae.focus()})):D.key==="x"||D.key==="X"?f.dispatch({type:"xray"}):(D.key==="i"||D.key==="I")&&_(re).sel&&f.dispatch({type:"isolate"})}var Ye=Ra();Hp("keydown",jp,qe);var Be=gt(Ye);{var st=D=>{var H=GT(),oe=Q(H);Ee(ae=>Ge(oe,"aria-label",ae),[()=>V("common.loading")]),ve(D,H)},Pe=D=>{var H=WT(),oe=ie(H),ae=Q(oe,!0),Oe=U(oe),de=Q(Oe,!0),Se=U(Oe),Re=Q(Se,!0),$=U(Se,2),_e=ie($);Mt(_e,{name:"back",size:16});var Le=U(_e,1,!0);la($,ke=>{var Me;return(Me=ca)==null?void 0:Me(ke)}),Ee((ke,Me,Ne)=>{k(ae,ke),k(de,Me),k(Re,_(n)),Ge($,"href",`/study/${_(b)??""}`),k(Le,Ne)},[()=>V("m3d.error.t"),()=>V("m3d.error.d"),()=>V("view.back")]),ve(D,H)},L=D=>{var H=XT(),oe=gt(H),ae=ie(oe),Oe=Q(ae,!0);la(ae,$=>{var _e;return(_e=ca)==null?void 0:_e($)});var de=U(ae,4),Se=Q(de,!0),Re=U(oe,2);HT(Re,{get studyId(){return e.params.id},ondone:()=>x(e.params.id)}),Ee(($,_e,Le)=>{Ge(oe,"aria-label",$),Ge(ae,"href",`/study/${_(b)??""}`),k(Oe,_e),k(Se,Le)},[()=>V("common.breadcrumb"),()=>{var $;return(($=_(s))==null?void 0:$.description)||V("study.untitled")},()=>V("study.3d")]),ve(D,H)},E=D=>{var H=ZT(),oe=ie(H);{var ae=mt=>{var Xt=jT(),Qt=ie(Xt),Pt=Q(Qt,!0),Ei=U(Qt),Ti=Q(Ei,!0),C=U(Ei,2);{var j=le=>{var he=qT(),K=Q(he,!0);Ee(()=>k(K,_(d))),ve(le,he)};Xe(C,le=>{_(d)!=="webgl"&&_(d)!=="context"&&le(j)})}Ee((le,he)=>{k(Pt,le),k(Ti,he)},[()=>V("m3d.error.t"),()=>_(d)==="webgl"||_(d)==="context"?V(`m3d.error.${_(d)}`):V("m3d.error.d")]),ve(mt,Xt)};Xe(oe,mt=>{_(d)&&mt(ae)})}var Oe=U(oe,2);ff(Oe,()=>e.params.id,mt=>{{let Xt=Ue(()=>Yp(e.params.id)),Qt=Ue(()=>I("m3d.canvas"));li(mT(mt,{get url(){return _(Xt)},get store(){return f},get regions(){return _(a)},get framing(){return _(T)},lobeOf:M,get dataMaps(){return _(P)},label:X,get ariaLabel(){return _(Qt)},onprogress:Pt=>je(h,Pt,!0),onerror:Pt=>je(d,Pt,!0),onloaded:()=>je(u,!0)}),Pt=>je(g,Pt,!0),()=>_(g))}});var de=U(Oe,2);{var Se=mt=>{var Xt=YT(),Qt=ie(Xt),Pt=Q(Qt,!0),Ei=U(Qt,2),Ti=ie(Ei);let C;Ee(j=>{k(Pt,j),vn(Ti,`width:${_(h)??30??""}%`),C=Bt(Ti,1,"svelte-yes7qw",null,C,{indet:_(h)===null})},[()=>V("m3d.loading")]),ve(mt,Xt)};Xe(de,mt=>{!_(u)&&!_(d)&&mt(Se)})}var Re=U(de,2);let $;var _e=ie(Re),Le=ie(_e),ke=ie(Le);Mt(ke,{name:"back",size:16}),la(Le,mt=>{var Xt;return(Xt=ca)==null?void 0:Xt(mt)});var Me=U(Le,2),Ne=ie(Me),He=Q(Ne,!0),Qe=U(Ne),z=Q(Qe,!0),we=U(Me,2),ne=ie(we);Mt(ne,{name:"close",size:16});var q=U(_e,2);{var ge=mt=>{q_(mt,{get store(){return f},get dataMaps(){return _(P)},dataLabel:B,tree:Qt=>{li(RT(Qt,{get store(){return f},structName:Pt=>Ho(_(A),Pt),lobeName:Pt=>Wi(_(A),Pt),lobeOfStructure:M,search:Pt=>cm(_(w),Pt,Ho(_(A),Pt)),vesselName:Pt=>Y({type:"vessel",id:Pt}),onpick:se,onpicklobe:me,onpickvessel:W}),Pt=>je(v,Pt,!0),()=>_(v))},$$slots:{tree:!0}})};Xe(q,mt=>{f.ready&&mt(ge)})}var Te=U(Re,2);let Ze;var ot=ie(Te),dt=ie(ot);Mt(dt,{name:"close",size:16});var rt=U(ot,2);{var Rt=mt=>{N_(mt,{get ctx(){return _(O)}})};Xe(rt,mt=>{f.ready&&mt(Rt)})}var zt=U(Te,2);{var Gn=mt=>{var Xt=KT(),Qt=ie(Xt);ag(Qt,{get quiz(){return _(re).quiz},name:Pt=>cc(_(A),Pt),onskip:()=>f.dispatch({type:"quizSkip"}),onend:()=>f.dispatch({type:"quizEnd"})}),ve(mt,Xt)};Xe(zt,mt=>{_(re).quiz&&mt(Gn)})}var En=U(zt,2),fn=ie(En);{var Jn=mt=>{{let Xt=Ue(()=>B(_(J)));ng(mt,{get map(){return _(J)},get label(){return _(Xt)}})}};Xe(fn,mt=>{_(J)&&mt(Jn)})}var pn=U(fn,2);{var Wt=mt=>{{let Xt=Ue(()=>_(ye).length>0),Qt=Ue(()=>f.index.keys.length>1);eg(mt,{get store(){return f},get canTour(){return _(Xt)},get canQuiz(){return _(Qt)},onview:G,onshot:()=>{var Pt;return(Pt=_(g))==null?void 0:Pt.screenshot(V("m3d.shot.file"))},onreset:te,ontour:()=>_(re).tour?Ae():Z(),onquiz:()=>_(re).quiz?f.dispatch({type:"quizEnd"}):Fe(),get controlsOpen(){return _(m)},get cardOpen(){return _(p)},ontoggleControls:()=>{je(m,!_(m)),_(m)&&je(p,!1)},ontoggleCard:()=>{je(p,!_(p)),_(p)&&je(m,!1)}})}};Xe(pn,mt=>{f.ready&&mt(Wt)})}var Zt=U(En,2),bn=Q(Zt,!0);Ee((mt,Xt,Qt,Pt,Ei,Ti,C)=>{var j;$=Bt(Re,1,"left panel svelte-yes7qw",null,$,{open:_(m)}),Ge(Re,"aria-label",mt),Ge(Le,"href",`/study/${_(b)??""}`),Ge(Le,"aria-label",Xt),Ge(Le,"title",Qt),k(He,Pt),k(z,((j=_(s))==null?void 0:j.description)??""),Ge(we,"aria-label",Ei),Ze=Bt(Te,1,"right panel svelte-yes7qw",null,Ze,{open:_(p)}),Ge(Te,"aria-label",Ti),Ge(ot,"aria-label",C),k(bn,_(ee))},[()=>V("m3d.controls"),()=>V("view.back"),()=>V("view.back"),()=>V("m3d.title"),()=>V("card.close"),()=>V("m3d.card"),()=>V("card.close")]),ut("click",we,()=>je(m,!1)),ut("click",ot,()=>je(p,!1)),ve(D,H)};Xe(Be,D=>{_(t)==="loading"?D(st):_(t)==="error"?D(Pe,1):_(t)==="missing"?D(L,2):D(E,-1)})}ve(i,Ye),In()}Si(["click"]);export{$T as default};
