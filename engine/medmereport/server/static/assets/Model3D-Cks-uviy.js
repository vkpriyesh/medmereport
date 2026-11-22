var _p=Object.defineProperty;var Xu=i=>{throw TypeError(i)};var gp=(i,e,t)=>e in i?_p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var il=(i,e,t)=>gp(i,typeof e!="symbol"?e+"":e,t),vp=(i,e,t)=>e.has(i)||Xu("Cannot "+t);var ui=(i,e,t)=>(vp(i,e,"read from private field"),t?t.call(i):e.get(i)),ks=(i,e,t)=>e.has(i)?Xu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);import{b as xp,E as yp,B as bp,p as Cn,a as aa,I as yt,s as N,i as qe,t as xe,c as H,d as z,e as pe,f as Pn,g as te,o as K,h as Mp,j as Ee,k as bi,l as gt,m as g,n as Yt,q as Mn,r as dt,u as De,v as Xe,w as jo,x as gi,y as Wn,z as Jn,A as Qe,C as ri,D as Pt,F as Xt,G as Zn,H as oa,J as la,K as qu,L as Sp,M as Ep,N as cf,O as Fo,P as Tp,_ as Ap,Q as hu,R as wp,S as Rp,T as uf,U as Cp,V as Pp,W as Lp,X as Ip,Y as ju,Z as Yu,$ as Dp,a0 as Up,a1 as Np,a2 as Fp,a3 as Op,a4 as Bp,a5 as kp,a6 as Ku}from"./index-HZV-pUI5.js";function hf(i,e,...t){var n=new bp(i);xp(()=>{const s=e()??null;n.ensure(s,s&&(r=>s(r,...t)))},yp)}const zp=/^([LRMVHB])__(.+?)(?:_\d+)?$/,Vp=/^([LRMVHB])__(.+)$/;function Hp(i,e){const t=i?zp.exec(i):null;if(!t)return null;const n=t[1];let s=t[2];if(e){const r=Vp.exec(i);if(r[2]!==s&&"LRM".includes(n)&&e(r[2]))s=r[2];else if(r[2]!==s&&"LRM".includes(n)){const a=/^(.+)_\d+$/.exec(r[2]);a&&a[1]!==s&&e(a[1])&&(s=a[1])}}return n==="V"?{kind:"vessel",name:s,key:`V|${s}`}:n==="H"?{kind:"skin",name:s,key:`H|${s}`}:n==="B"?{kind:"bone",name:s,key:`B|${s}`}:{kind:"region",hemi:n,structure:s,key:`${n}|${s}`}}function du(i){const e=i.indexOf("|");return{hemi:i.slice(0,e),structure:i.slice(e+1)}}function Gp(i){const{hemi:e,structure:t}=du(i);return e==="L"?`R|${t}`:e==="R"?`L|${t}`:null}const pa=i=>(i.charAt(0).toUpperCase()+i.slice(1)).replace(/_/g," "),Wp=i=>{const e=/^vertebrae_([cts]\d{1,2}|l\d|s\d)$/.exec(i);return e?e[1].toUpperCase():null},Xp=i=>{const e=/^rib_(\d{1,2})$/.exec(i);return e?+e[1]:null},ps={},Tt=(i,e,t,n)=>n.split(" ").forEach(s=>ps[s]=[i,e,t]);Tt("frontal","hemi",!1,"frontal_pole sfg mfg ifg_tri ifg_oper precentral frontal_medial sma paracingulate orbitofrontal frontal_operculum");Tt("insular","hemi",!1,"insula");Tt("temporal","hemi",!1,"temporal_pole stg mtg itg temporal_fusiform planum_polare heschl planum_temporale");Tt("parietal","hemi",!1,"postcentral spl supramarginal angular precuneus parietal_operculum central_operculum");Tt("occipital","hemi",!1,"lateral_occipital intracalcarine supracalcarine cuneus lingual occipital_fusiform temporo_occipital_fusiform occipital_pole");Tt("limbic","hemi",!1,"cingulate_ant cingulate_post subcallosal parahippocampal");Tt("limbic","deep",!0,"hippocampus amygdala");Tt("subcortical","deep",!0,"thalamus caudate putamen pallidum accumbens ventral_dc");Tt("ventricles","ventricle",!0,"lateral_ventricle third_ventricle fourth_ventricle");Tt("white_matter","hemi",!1,"corpus_callosum");Tt("white_matter","deep",!0,"cerebral_white_matter");Tt("white_matter","hemi",!1,"cerebral_cortex");Tt("cerebellum","cerebellum",!1,"cerebellum_hemi cerebellar_vermis");Tt("cerebellum","cerebellum",!0,"cerebellum_white_matter");Tt("brainstem","brainstem",!1,"midbrain pons medulla brainstem");Tt("arteries","vessel",!0,"cerebral_arteries neck_arteries body_arteries");Tt("integument","body",!1,"skin");Tt("skeleton","bone",!0,"skeleton");Tt("respiratory","organ",!0,"lung");Tt("respiratory","airway",!0,"airway");Tt("nervous_spine","spine",!0,"spinal_cord");Tt("nervous_spine","spine",!1,"spinal_csf");Tt("spinal_column","spine",!1,"intervertebral_disc");Tt("spinal_column","bone",!1,"vertebral_column");const qp=[...[1,2,3,4,5,6,7].map(i=>`c${i}`),...Array.from({length:12},(i,e)=>`t${e+1}`),...[1,2,3,4,5].map(i=>`l${i}`),"s1"];Tt("spinal_column","bone",!1,qp.map(i=>`vertebrae_${i}`).join(" "));Tt("respiratory","organ",!0,"lung_upper_lobe lung_middle_lobe lung_lower_lobe");Tt("respiratory","airway",!0,"trachea");Tt("cardiovascular","organ",!0,"heart atrial_appendage");Tt("cardiovascular","vessel",!0,"aorta pulmonary_vein pulmonary_artery brachiocephalic_trunk subclavian_artery common_carotid_artery brachiocephalic_vein superior_vena_cava inferior_vena_cava portal_vein_and_splenic_vein iliac_artery iliac_vena");Tt("digestive","organ",!0,"liver gallbladder stomach pancreas esophagus small_bowel duodenum colon");Tt("lymphatic","organ",!0,"spleen");Tt("urinary","organ",!0,"kidney kidney_cyst urinary_bladder");Tt("endocrine","organ",!0,"adrenal_gland thyroid_gland");Tt("reproductive","organ",!0,"prostate");Tt("skeleton","bone",!1,`skull sternum costal_cartilages sacrum humerus scapula clavicula femur hip ${Array.from({length:12},(i,e)=>`rib_${e+1}`).join(" ")}`);Tt("muscular","muscle",!1,"gluteus_maximus gluteus_medius gluteus_minimus autochthon iliopsoas");const jp=Object.keys(ps),rc=["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem","arteries","integument","skeleton","spinal_column","nervous_spine","respiratory","cardiovascular","digestive","urinary","endocrine","lymphatic","reproductive","muscular","nervous","sensory","body_regions"],Yp=new Set(["spinal_column"]),Oo=i=>{var e;return((e=ps[i])==null?void 0:e[0])??"other"},Kp=i=>{var e;return((e=ps[i])==null?void 0:e[2])??!1},df=i=>i in ps,Bo=i=>{const e=jp.indexOf(i);return e<0?1e6:e};function ff(i,e="L"){return i==="hemi"?e==="R"?"hemi_R":"hemi_L":i==="vessel"?"vessels":i==="body"?"skin":i}function Zp(i,e,t,n){const s=e==="R"?"hemi_R":"hemi_L",r=t??(ps[i]?ps[i][1]==="hemi"?s:ps[i][1]:n??s);return ff(r,e)}const La=i=>!!i&&typeof i=="object"&&!Array.isArray(i),Jp=i=>i==null||i===""||Array.isArray(i)&&i.length===0;function ac(i,e){if(!La(e))return i;if(!La(i))return e;const t={...i};for(const[n,s]of Object.entries(e))Jp(s)||(t[n]=La(s)&&La(t[n])?ac(t[n],s):s);return t}function Qp(i,e,t){var r,a;let n=i??t??{structures:{},lobes:{}};if(n={...n,structures:n.structures??{},lobes:n.lobes??{}},e==="en")return n;const s=((r=i==null?void 0:i.i18n)==null?void 0:r[e])??((a=t==null?void 0:t.i18n)==null?void 0:a[e]);return s&&(n=ac(n,s)),t&&t!==i&&(n=ac(n,{structures:t.structures,lobes:t.lobes,arteries:t.arteries,sequences:t.sequences})),n}const pf=(i,e,t)=>!!e&&(!i.lang||i.lang==="en"||e!==t),mf=(i,e)=>{var t;return((t=i.structures[e])==null?void 0:t.lobe)??Oo(e)};function ko(i,e){var n,s,r,a;const t=(n=i.kb.structures[e])==null?void 0:n.name;return pf(i,t,(a=(r=(s=i.en)==null?void 0:s.structures)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`struct.${e}`)??t??$p(i,e)??pa(e)}function $p(i,e){const t=Wp(e);if(t)return i.tr("struct.vertebra",{level:t})??`${t} vertebra`;const n=Xp(e);return n!==null?i.tr("struct.rib",{n})??`Rib ${n}`:null}function Wi(i,e){var n,s,r,a;const t=(n=i.kb.lobes[e])==null?void 0:n.name;return pf(i,t,(a=(r=(s=i.en)==null?void 0:s.lobes)==null?void 0:r[e])==null?void 0:a.name)?t:i.tr(`lobe.${e}`)??t??pa(e)}function oc(i,e){const{hemi:t,structure:n}=du(e),s=ko(i,n);return t==="L"?i.tr("side.leftOf",{name:s})??`Left ${s}`:t==="R"?i.tr("side.rightOf",{name:s})??`Right ${s}`:s}function em(i,e,t){const n=i.structures[e];return[t,n==null?void 0:n.name,...(n==null?void 0:n.aka)??[],e.replace(/_/g," ")].filter(Boolean).join(" ").toLowerCase()}function _f(i,e="head"){return/neck/i.test(i)?"neck":/body|aorta|cta/i.test(i)||e!=="head"?"body":"brain"}const gf={frontal:"#f472b6",parietal:"#60a5fa",temporal:"#34d399",occipital:"#fbbf24",insular:"#f97316",limbic:"#c084fc",subcortical:"#22d3ee",cerebellum:"#a3e635",brainstem:"#fb7185",ventricles:"#93c5fd",white_matter:"#e2e8f0",arteries:"#ef4444",integument:"#d6c2b4",skeleton:"#e9dfc7",spinal_column:"#e4d6b4",nervous_spine:"#facc15",respiratory:"#7dd3fc",cardiovascular:"#dc2626",digestive:"#f59e0b",urinary:"#a78bfa",endocrine:"#2dd4bf",lymphatic:"#a3e635",reproductive:"#f472b6",muscular:"#c2410c",nervous:"#fde68a",sensory:"#38bdf8",body_regions:"#94a3b8"},tm=new Set(["integument","skeleton","spinal_column"]),nm={integument:"#d9b8a3",skeleton:"#ece3cf",spinal_column:"#e6dcc4",nervous_spine:"#f2e6c0",respiratory:"#e9a6a6",cardiovascular:"#9f1d20",digestive:"#b9735a",urinary:"#8f4a3a",endocrine:"#c9855c",lymphatic:"#7a2e3a",reproductive:"#c98d8d",muscular:"#a3473f"},im={hemi_L:"#f472b6",hemi_R:"#60a5fa",cerebellum:"#a3e635",brainstem:"#fb7185",deep:"#22d3ee",ventricle:"#93c5fd",organ:"#f59e0b",airway:"#7dd3fc",spine:"#facc15",muscle:"#c2410c",vessels:"#ef4444",neck:"#f87171",bone:"#e7e2d3",skin:"#cbd5e1"},lc="#cbd5e1",vf="#3a4252",sm="#e7b9ad",rm="#c99a8a",xf=["#1e3a8a","#0ea5e9","#5eead4","#fde047","#f97316","#e11d48"],am=["#3b82f6","#93c5fd","#e2e8f0","#fca5a5","#ef4444"],Ta=i=>gf[i]??lc;function zo(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function om([i,e,t]){const n=i/255,s=e/255,r=t/255,a=Math.max(n,s,r),o=Math.min(n,s,r),l=(a+o)/2;if(a===o)return[0,0,l];const c=a-o,h=l>.5?c/(2-a-o):c/(a+o);let u=a===n?(s-r)/c+(s<r?6:0):a===s?(r-n)/c+2:(n-s)/c+4;return u/=6,[u,h,l]}function Zu([i,e,t]){if(e===0)return[t*255,t*255,t*255];const n=(a,o,l)=>(l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(o-a)*6*l:l<1/2?o:l<2/3?a+(o-a)*(2/3-l)*6:a),s=t<.5?t*(1+e):t+e-t*e,r=2*t-s;return[n(r,s,i+1/3)*255,n(r,s,i)*255,n(r,s,i-1/3)*255]}function lm(i,e,t){const n=om(zo(Ta(i))),s=t>1?e/(t-1):.5;if(tm.has(i)){const l=Math.max(.7,Math.min(.9,n[2]+(s-.5)*.12));return Zu([(n[0]+(s-.5)*.04+1)%1,Math.max(.25,n[1]-e%2*.12),l]).map(Math.round)}const r=(n[0]+(s-.5)*.09+1)%1,a=Math.max(.36,Math.min(.62,n[2]*.86+(s-.5)*.22)),o=Math.max(.45,n[1]-e%2*.12);return Zu([r,o,a]).map(Math.round)}function cm(i,e){var s;const t={};for(const r of i)(t[s=e(r)]??(t[s]=[])).push(r);const n={};for(const[r,a]of Object.entries(t))a.forEach((o,l)=>n[o]=lm(r,l,a.length));return n}function um(i,e=xf){i=Math.max(0,Math.min(1,Number.isFinite(i)?i:0));const t=e.length-1,n=Math.min(t-1,Math.floor(i*t)),s=i*t-n,r=zo(e[n]),a=zo(e[n+1]);return r.map((o,l)=>o+(a[l]-o)*s)}const hm=i=>`linear-gradient(90deg, ${i.join(", ")})`,yf=i=>`rgb(${i.map(Math.round).join(" ")})`;var dm=Ee('<p class="disc"><!><span><b> </b><!></span></p>');function Mr(i,e){Cn(e,!0);let t=aa(e,"extra",3,"");var n=dm(),s=te(n);yt(s,{name:"info",size:15});var r=N(s),a=te(r),o=K(a,!0),l=N(a);{var c=h=>{var u=Mp();xe(()=>z(u,t())),pe(h,u)};qe(l,h=>{t()&&h(c)})}xe(h=>z(o,h),[()=>H("disclaimer")]),pe(i,n),Pn()}function An(i,e="en"){if(i==null||!Number.isFinite(i))return"—";const t=Math.abs(i),n=t>=100?0:t>=10?1:t>=1?2:t===0?0:Math.min(4,1-Math.floor(Math.log10(t))),s=e==="hi"?"hi-IN":"en-US";return i.toLocaleString(s,{maximumFractionDigits:n,minimumFractionDigits:0})}function fm(i,e="en"){const t=An(Math.abs(i),e);return`${i>0?"+":i<0?"−":""}${t}%`}const Ia=String.raw`[-−]?\d+(?:[.,]\d+)?`,Da=i=>parseFloat(i.replace("−","-").replace(",","."));function pm(i){if(!i)return null;const e=i.replace(/(\d),(\d{3})(?!\d)/g,"$1$2").replace(/[×x]\s*10(?:\^[-−]?\d+|[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g," "),t=new RegExp(`(${Ia})\\s*(?:–|—|-|to|\\.\\.|…)\\s*(${Ia})`).exec(e);if(t){let r=Da(t[1]),a=Da(t[2]);return r>a&&([r,a]=[a,r]),{lo:r,hi:a}}const n=new RegExp(`(?:<|≤|<=|under|below)\\s*(${Ia})`,"i").exec(e);if(n)return{lo:null,hi:Da(n[1])};const s=new RegExp(`(?:>|≥|>=|over|above)\\s*(${Ia})`,"i").exec(e);return s?{lo:Da(s[1]),hi:null}:null}function mm(i,e){if(!Number.isFinite(i)||e.lo===null&&e.hi===null)return null;const t=e.lo??Math.min(0,i,e.hi*.5),n=e.hi??Math.max(t*2,i*1.25,t+1),s=Math.max(1e-9,n-t),r=Math.min(t-s*.35,i-s*.08),a=Math.max(n+s*.35,i+s*.08),o=l=>(l-r)/(a-r)*100;return{axisLo:r,axisHi:a,bandLeft:e.lo===null?0:o(t),bandWidth:(e.hi===null?100:o(n))-(e.lo===null?0:o(t)),marker:Math.max(0,Math.min(100,o(i))),position:e.lo!==null&&i<e.lo?"below":e.hi!==null&&i>e.hi?"above":"within"}}function _m(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))return null;const t=Math.max(Math.abs(i),Math.abs(e)),n=(i+e)/2;return{left:i,right:e,leftPct:t?Math.abs(i)/t*100:0,rightPct:t?Math.abs(e)/t*100:0,diffPct:n?(i-e)/Math.abs(n)*100:0}}function gm(i){const e=i==null?void 0:i.summary;return e?Array.isArray(e)?e:Object.entries(e).map(([t,n])=>({...n,key:n.key??t})):[]}const cc=i=>typeof i=="string"?i:i.text;var vm=Ee('<p class="tag"> </p>'),xm=Ee('<div class="metric-s svelte-1trur1d"><div class="k svelte-1trur1d"> </div><div class="v svelte-1trur1d"> <small class="svelte-1trur1d"> </small></div></div>'),ym=Ee('<h4> </h4> <div class="metrics"></div> <p class="p faint" style="font-size:11.5px;margin-top:6px"> </p>',1),bm=Ee("<p> </p>"),Ju=Ee("<li> </li>"),Mm=Ee('<h4> </h4><ul class="dots"></ul>',1),Sm=Ee('<h4> </h4><ul class="dots clin"></ul>',1),Em=Ee('<div class="fact"><b> </b> </div>'),Tm=Ee('<button type="button" class="chip"><span class="dot"></span> </button>'),Qu=Ee('<button type="button" class="btn primary"> </button>'),Am=Ee('<div class="tour-nav"><button type="button" class="btn"> </button> <span class="faint" style="font-size:12px"> </span> <!></div>'),wm=Ee('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot"></span> </span> <span class="chip"> </span></div> <h2> </h2> <!></div> <div class="ibody"><!> <!> <!> <!> <!> <h4> </h4> <div class="chips"></div> <!> <!></div>',1);function Rm(i,e){Cn(e,!0);const t=De(()=>e.ctx.kb.lobes[e.id]),n=De(()=>[...e.ctx.store.facts.regions].filter(([,G])=>G.lobe===e.id).map(([G])=>G)),s=De(()=>[...new Set(g(n).map(G=>G.slice(2)))]),r=De(()=>e.ctx.store.s.mode),a=De(()=>e.ctx.store.s.tour),o=/^(cm³|cm3|ml|mL|mm³|mm3|cc)$/,l=De(()=>{var $,ie,Re,Pe,Fe;const G={L:null,R:null,M:null};for(const Le of g(n)){const Ue=(Pe=(Re=(ie=($=e.ctx.stats)==null?void 0:$.regions)==null?void 0:ie[Le])==null?void 0:Re.measurements)==null?void 0:Pe.find(k=>k.key==="volume"||o.test(k.unit)&&k.value!==null);if(!Ue||Ue.value===null)continue;const Oe=Le[0];G[Oe]={v:(((Fe=G[Oe])==null?void 0:Fe.v)??0)+Ue.value,unit:Ue.unit}}return G}),c=G=>{const $=e.ctx.store.index.present.get(G);e.ctx.act.select({type:"region",id:`${$!=null&&$.has("M")?"M":$!=null&&$.has("L")?"L":"R"}|${G}`},!0)};var h=wm(),u=gt(h),d=te(u),f=te(d);yt(f,{name:"close",size:16});var _=N(d,2),v=te(_),m=te(v),p=N(m,1,!0),y=N(v,2),M=K(y,!0),x=N(_,2),T=K(x,!0),w=N(x,2);{var A=G=>{var $=vm(),ie=K($,!0);xe(()=>z(ie,g(t).tagline)),pe(G,$)};qe(w,G=>{var $;($=g(t))!=null&&$.tagline&&G(A)})}var P=N(u,2),E=te(P);{var S=G=>{var $=ym(),ie=gt($),Re=K(ie,!0),Pe=N(ie,2);Yt(Pe,20,()=>["L","R","M"],Wn,(Ue,Oe)=>{var k=jo(),$e=gt(k);{var Ye=We=>{var Ge=xm(),st=te(Ge),Ce=K(st,!0),I=N(st),b=te(I),O=N(b),Z=K(O,!0);xe((ue,le)=>{z(Ce,ue),z(b,le),z(Z,g(l)[Oe].unit)},[()=>H(`card.side.${Oe}`),()=>An(g(l)[Oe].v,gi.lang)]),pe(We,Ge)};qe($e,We=>{g(l)[Oe]&&We(Ye)})}pe(Ue,k)});var Fe=N(Pe,2),Le=K(Fe,!0);xe((Ue,Oe)=>{z(Re,Ue),z(Le,Oe)},[()=>H("card.yourMeasurements"),()=>H("card.lobeSumNote")]),pe(G,$)};qe(E,G=>{g(r)==="mine"&&(g(l).L||g(l).R||g(l).M)&&G(S)})}var R=N(E,2);{var L=G=>{var $=bm(),ie=K($,!0);xe(()=>z(ie,g(t).overview)),pe(G,$)};qe(R,G=>{var $;($=g(t))!=null&&$.overview&&G(L)})}var D=N(R,2);{var F=G=>{var $=Mm(),ie=gt($),Re=K(ie,!0),Pe=N(ie);Yt(Pe,21,()=>g(t).functions,Wn,(Fe,Le)=>{var Ue=Ju(),Oe=K(Ue,!0);xe(()=>z(Oe,g(Le))),pe(Fe,Ue)}),xe(Fe=>z(Re,Fe),[()=>H("card.functions")]),pe(G,$)};qe(D,G=>{var $,ie;(ie=($=g(t))==null?void 0:$.functions)!=null&&ie.length&&G(F)})}var V=N(D,2);{var X=G=>{var $=Sm(),ie=gt($),Re=K(ie,!0),Pe=N(ie);Yt(Pe,21,()=>g(t).clinical,Wn,(Fe,Le)=>{var Ue=Ju(),Oe=K(Ue,!0);xe(()=>z(Oe,g(Le))),pe(Fe,Ue)}),xe(Fe=>z(Re,Fe),[()=>H("card.clinical")]),pe(G,$)};qe(V,G=>{var $,ie;(ie=($=g(t))==null?void 0:$.clinical)!=null&&ie.length&&G(X)})}var oe=N(V,2);{var Q=G=>{var $=Em(),ie=te($),Re=K(ie,!0),Pe=N(ie,1,!0);xe(Fe=>{z(Re,Fe),z(Pe,g(t).fact)},[()=>H("card.fact")]),pe(G,$)};qe(oe,G=>{var $;($=g(t))!=null&&$.fact&&G(Q)})}var Me=N(oe,2),ve=K(Me,!0),Y=N(Me,2);Yt(Y,20,()=>g(s),G=>G,(G,$)=>{const ie=De(()=>e.ctx.store.colors[$]);var Re=Tm(),Pe=te(Re),Fe=N(Pe,1,!0);xe((Le,Ue)=>{Mn(Pe,`background:${Le??""}`),z(Fe,Ue)},[()=>g(ie)?yf(g(ie)):"var(--text-3)",()=>ko(e.ctx.namer,$)]),dt("click",Re,()=>c($)),pe(G,Re)});var re=N(Y,2);{var ye=G=>{var $=Am(),ie=te($),Re=K(ie),Pe=N(ie,2),Fe=K(Pe,!0),Le=N(Pe,2);{var Ue=k=>{var $e=Qu(),Ye=K($e);xe(We=>z(Ye,`${We??""} ›`),[()=>H("card.tour.next")]),dt("click",$e,()=>e.ctx.act.tourStep(1)),pe(k,$e)},Oe=k=>{var $e=Qu(),Ye=K($e,!0);xe(We=>z(Ye,We),[()=>H("card.tour.finish")]),dt("click",$e,function(...We){var Ge;(Ge=e.ctx.act.tourEnd)==null||Ge.apply(this,We)}),pe(k,$e)};qe(Le,k=>{g(a).i<e.ctx.tourLen-1?k(Ue):k(Oe,-1)})}xe((k,$e)=>{ie.disabled=g(a).i===0,z(Re,`‹ ${k??""}`),z(Fe,$e)},[()=>H("card.tour.back"),()=>H("card.tour.pos",{i:g(a).i+1,n:e.ctx.tourLen})]),dt("click",ie,()=>e.ctx.act.tourStep(-1)),pe(G,$)};qe(re,G=>{g(a)&&G(ye)})}var q=N(re,2);Mr(q,{}),xe((G,$,ie,Re,Pe,Fe,Le)=>{Xe(d,"aria-label",G),Xe(d,"title",$),Mn(m,`background:${ie??""}`),z(p,Re),z(M,Pe),z(T,Fe),z(ve,Le)},[()=>H("card.close"),()=>H("card.close"),()=>Ta(e.id),()=>e.ctx.ft("card.division"),()=>H("card.nStructures",{n:g(s).length}),()=>Wi(e.ctx.namer,e.id),()=>e.ctx.ft("card.inDivision")]),dt("click",d,()=>g(a)?e.ctx.act.tourEnd():e.ctx.act.select(null)),pe(i,h),Pn()}bi(["click"]);var Cm=Ee('<div class="pop svelte-17vi66k" role="note"><!></div>'),Pm=Ee('<span class="ip svelte-17vi66k"><button type="button" class="b svelte-17vi66k"><!></button> <!></span>');function Lm(i,e){Cn(e,!0);let t=Pt(!1),n;const s=`pop-${Math.random().toString(36).slice(2,9)}`;Jn(()=>{if(!g(t))return;const h=d=>{n.contains(d.target)||Qe(t,!1)},u=d=>{var f;d.key==="Escape"&&(Qe(t,!1),d.stopPropagation(),(f=n.querySelector("button"))==null||f.focus())};return document.addEventListener("pointerdown",h),n.addEventListener("keydown",u),()=>{document.removeEventListener("pointerdown",h),n.removeEventListener("keydown",u)}});var r=Pm(),a=te(r),o=te(a);yt(o,{name:"info",size:13});var l=N(a,2);{var c=h=>{var u=Cm(),d=te(u);hf(d,()=>e.children),xe(()=>Xe(u,"id",s)),pe(h,u)};qe(l,h=>{g(t)&&h(c)})}ri(r,h=>n=h,()=>n),xe((h,u)=>{Xe(a,"aria-expanded",g(t)),Xe(a,"aria-controls",s),Xe(a,"aria-label",h),Xe(a,"title",u)},[()=>H("card.howMeasured",{name:e.label}),()=>H("card.howMeasured",{name:e.label})]),dt("click",a,()=>Qe(t,!g(t))),pe(i,r),Pn()}bi(["click"]);var Im=Ee('<p class="svelte-qlz17q"><b> </b> </p>'),Dm=Ee("<li> </li>"),Um=Ee('<p class="svelte-qlz17q"><b> </b></p> <ul class="svelte-qlz17q"></ul>',1),Nm=Ee('<p class="svelte-qlz17q"><b> </b> </p> <!> <!> <p class="edu svelte-qlz17q"> </p>',1),Fm=Ee('<small class="svelte-qlz17q"> </small>'),Om=Ee('<div class="bar svelte-qlz17q" role="img"><div class="band svelte-qlz17q"></div> <div class="mk svelte-qlz17q"></div></div> <div class="bar-l svelte-qlz17q"><span> </span><span> </span><span> </span></div>',1),Bm=Ee('<div class="lr svelte-qlz17q" role="img"><b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span> <b class="svelte-qlz17q"> </b><div><i class="svelte-qlz17q"></i></div><span class="num svelte-qlz17q"> </span></div> <div class="s svelte-qlz17q"> <b class="svelte-qlz17q"> </b> </div>',1),km=Ee('<div class="cw svelte-qlz17q"> </div>'),zm=Ee('<div><div class="k svelte-qlz17q"><span> </span> <!></div> <div class="v svelte-qlz17q"> <!></div> <!> <!> <!></div>');function bf(i,e){Cn(e,!0);let t=aa(e,"other",3,null),n=aa(e,"hemi",3,"M"),s=aa(e,"wide",3,!1);const r=De(()=>gi.lang),a=De(()=>pm(e.m.reference)),o=De(()=>g(a)&&e.m.value!==null?mm(e.m.value,g(a)):null),l=De(()=>t()&&!/asym/i.test(e.m.key)&&e.m.value!==null&&t().value!==null&&(n()==="L"||n()==="R")?_m(n()==="L"?e.m.value:t().value,n()==="L"?t().value:e.m.value):null),c=De(()=>e.m.caveats??[]);var h=zm();let u;var d=te(h),f=te(d),_=K(f,!0),v=N(f,2);Lm(v,{get label(){return e.label},children:(R,L)=>{var D=Nm(),F=gt(D),V=te(F),X=K(V,!0),oe=N(V),Q=N(F,2);{var Me=q=>{var G=Im(),$=te(G),ie=K($,!0),Re=N($);xe(Pe=>{z(ie,Pe),z(Re,` ${e.m.reference??""}`)},[()=>H("card.reference")]),pe(q,G)};qe(Q,q=>{e.m.reference&&q(Me)})}var ve=N(Q,2);{var Y=q=>{var G=Um(),$=gt(G),ie=te($),Re=K(ie,!0),Pe=N($,2);Yt(Pe,21,()=>g(c),Wn,(Fe,Le)=>{var Ue=Dm();let Oe;var k=K(Ue,!0);xe($e=>{Oe=Xt(Ue,1,"svelte-qlz17q",null,Oe,{warn:typeof g(Le)!="string"&&g(Le).severity==="warn"}),z(k,$e)},[()=>cc(g(Le))]),pe(Fe,Ue)}),xe(Fe=>z(Re,Fe),[()=>H("card.caveats")]),pe(q,G)};qe(ve,q=>{g(c).length&&q(Y)})}var re=N(ve,2),ye=K(re,!0);xe((q,G,$)=>{z(X,q),z(oe,` ${G??""}`),z(ye,$)},[()=>H("card.method"),()=>e.m.method||H("card.methodUnknown"),()=>H("disclaimer")]),pe(R,D)},$$slots:{default:!0}});var m=N(d,2),p=te(m),y=N(p);{var M=R=>{var L=Fm(),D=K(L,!0);xe(()=>z(D,e.m.unit)),pe(R,L)};qe(y,R=>{e.m.unit&&R(M)})}var x=N(m,2);{var T=R=>{var L=Om(),D=gt(L),F=te(D),V=N(F,2),X=N(D,2),oe=te(X),Q=K(oe,!0),Me=N(oe),ve=K(Me,!0),Y=N(Me),re=K(Y,!0);xe((ye,q,G,$)=>{Xe(D,"aria-label",ye),Mn(F,`left:${g(o).bandLeft??""}%;width:${g(o).bandWidth??""}%`),Mn(V,`left:${g(o).marker??""}%`),z(Q,q),z(ve,G),z(re,$)},[()=>H(`card.range.${g(o).position}`,{lo:An(g(a).lo,g(r)),hi:An(g(a).hi,g(r))}),()=>An(g(o).axisLo,g(r)),()=>H("card.typical",{ref:e.m.reference??""}),()=>An(g(o).axisHi,g(r))]),pe(R,L)};qe(x,R=>{g(o)&&g(a)&&R(T)})}var w=N(x,2);{var A=R=>{var L=Bm(),D=gt(L),F=te(D),V=K(F,!0),X=N(F);let oe;var Q=K(X),Me=N(X),ve=K(Me,!0),Y=N(Me,2),re=K(Y,!0),ye=N(Y);let q;var G=K(ye),$=N(ye),ie=K($,!0),Re=N(D,2),Pe=te(Re),Fe=N(Pe),Le=K(Fe,!0),Ue=N(Fe);xe((Oe,k,$e,Ye,We,Ge,st,Ce)=>{Xe(D,"aria-label",Oe),z(V,k),oe=Xt(X,1,"t svelte-qlz17q",null,oe,{me:n()==="L"}),Mn(Q,`width:${g(l).leftPct??""}%`),z(ve,$e),z(re,Ye),q=Xt(ye,1,"t svelte-qlz17q",null,q,{me:n()==="R"}),Mn(G,`width:${g(l).rightPct??""}%`),z(ie,We),z(Pe,`${Ge??""} `),z(Le,st),z(Ue,` ${Ce??""}`)},[()=>H("card.lr.aria",{l:An(g(l).left,g(r)),r:An(g(l).right,g(r)),unit:e.m.unit}),()=>H("side.L"),()=>An(g(l).left,g(r)),()=>H("side.R"),()=>An(g(l).right,g(r)),()=>H("card.lr.diff"),()=>fm(g(l).diffPct,g(r)),()=>H(Math.abs(g(l).diffPct)<10?"card.lr.small":"card.lr.large")]),pe(R,L)};qe(w,R=>{g(l)&&t()&&R(A)})}var P=N(w,2);{var E=R=>{var L=km(),D=K(L,!0);xe(F=>z(D,F),[()=>cc(g(c).find(F=>typeof F!="string"&&F.severity==="warn"))]),pe(R,L)},S=De(()=>g(c).some(R=>typeof R!="string"&&R.severity==="warn"));qe(P,R=>{g(S)&&R(E)})}xe(R=>{u=Xt(h,1,"metric svelte-qlz17q",null,u,{wide:s()||!!g(l)||!!g(o)}),z(_,e.label),z(p,R)},[()=>An(e.m.value,g(r))]),pe(i,h),Pn()}var Vm=Ee('<span class="chip"> </span>'),Hm=Ee('<p class="tag"> </p>'),Gm=Ee('<div class="metrics"></div>'),$u=Ee('<p class="empty"> </p>'),Wm=Ee('<a><img alt="" loading="lazy" decoding="async"/><span> </span></a>'),Xm=Ee('<figure><img loading="lazy" decoding="async"/><span> </span></figure>'),qm=Ee('<h4> </h4> <div class="thumbs"></div> <p class="p faint" style="font-size:11.5px;margin-top:8px"> </p>',1),eh=Ee("<h4> </h4><p> </p>",1),jm=Ee('<button type="button" class="btn"> <!></button>'),Ym=Ee('<h4> </h4> <!> <!> <!> <div class="cta"><button type="button" class="btn"><!> </button> <!></div> <!>',1),Km=Ee("<p> </p>"),sl=Ee("<li> </li>"),Zm=Ee('<h4> </h4><ul class="dots"></ul>',1),Jm=Ee('<h4> </h4><ul class="dots conn"></ul>',1),Qm=Ee('<h4> </h4><ul class="dots clin"></ul>',1),rl=Ee("<dt> </dt><dd> </dd>",1),$m=Ee('<div class="fact"><b> </b> </div>'),e_=Ee('<!> <!> <!> <!> <!> <h4> </h4> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <!>',1),t_=Ee('<!> <div class="cta"><button type="button" class="btn"><!> </button> <button type="button" class="btn"><!> </button></div> <!>',1),n_=Ee('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"> </span> <button type="button" class="chip"><span class="dot"></span> </button> <!></div> <h2> </h2> <!></div> <div class="ibody"><!></div>',1);function i_(i,e){Cn(e,!0);const t=De(()=>e.ctx.store.s.mode),n=De(()=>du(e.id)),s=De(()=>e.ctx.kb.structures[g(n).structure]),r=De(()=>mf(e.ctx.kb,g(n).structure)),a=De(()=>oc(e.ctx.namer,e.id)),o=De(()=>{var re,ye;return(ye=(re=e.ctx.stats)==null?void 0:re.regions)==null?void 0:ye[e.id]}),l=De(()=>Gp(e.id)),c=De(()=>!!g(l)&&e.ctx.store.facts.regions.has(g(l))),h=De(()=>{var re,ye;return g(l)?(ye=(re=e.ctx.stats)==null?void 0:re.regions)==null?void 0:ye[g(l)]:void 0}),u=De(()=>{var re;return(re=e.ctx.regionByKey.get(e.id))==null?void 0:re.code}),d=De(()=>{var re;return((re=g(o))==null?void 0:re.thumbs)??[]}),f=De(()=>encodeURIComponent(e.ctx.studyId)),_=De(()=>{var re,ye;return Array.isArray((re=g(s))==null?void 0:re.brodmann)?g(s).brodmann.join(", "):((ye=g(s))==null?void 0:ye.brodmann)||""}),v=re=>`/study/${g(f)}/view/${encodeURIComponent(re.series)}?slice=${re.slice}${g(u)!==void 0?`&hl=${g(u)}`:""}`,m=re=>Zn(`card.view.${re}`)?H(`card.view.${re}`):re,p=re=>e.ctx.store.dispatch({type:"mode",mode:re});var y=n_(),M=gt(y),x=te(M),T=te(x);yt(T,{name:"close",size:16});var w=N(x,2),A=te(w),P=K(A,!0),E=N(A,2),S=te(E),R=N(S,1,!0),L=N(E,2);{var D=re=>{var ye=Vm(),q=K(ye,!0);xe(G=>z(q,G),[()=>Zn(`cat.${g(s).category}`)?H(`cat.${g(s).category}`):pa(g(s).category)]),pe(re,ye)};qe(L,re=>{var ye;(ye=g(s))!=null&&ye.category&&re(D)})}var F=N(w,2),V=K(F,!0),X=N(F,2);{var oe=re=>{var ye=Hm(),q=K(ye,!0);xe(()=>z(q,g(s).tagline)),pe(re,ye)};qe(X,re=>{var ye;(ye=g(s))!=null&&ye.tagline&&re(oe)})}var Q=N(M,2),Me=te(Q);{var ve=re=>{var ye=Ym(),q=gt(ye),G=K(q,!0),$=N(q,2);{var ie=Ce=>{var I=Gm();Yt(I,21,()=>g(o).measurements,b=>b.key,(b,O)=>{{let Z=De(()=>e.ctx.measureLabel(g(O))),ue=De(()=>{var le,He;return((He=(le=g(h))==null?void 0:le.measurements)==null?void 0:He.find(Te=>Te.key===g(O).key))??null});bf(b,{get m(){return g(O)},get label(){return g(Z)},get hemi(){return g(n).hemi},get other(){return g(ue)}})}}),pe(Ce,I)},Re=Ce=>{var I=$u(),b=K(I,!0);xe(O=>z(b,O),[()=>H("card.noMeasurements")]),pe(Ce,I)};qe($,Ce=>{var I,b;(b=(I=g(o))==null?void 0:I.measurements)!=null&&b.length?Ce(ie):Ce(Re,-1)})}var Pe=N($,2);{var Fe=Ce=>{var I=qm(),b=gt(I),O=K(b,!0),Z=N(b,2);Yt(Z,21,()=>g(d),Wn,(He,Te)=>{var me=jo(),Ne=gt(me);{var ee=Ie=>{var Ae=Wm(),de=te(Ae),Be=N(de),ke=K(Be,!0);oa(Ae,Je=>{var B;return(B=la)==null?void 0:B(Je)}),xe((Je,B,be,ne)=>{Xe(Ae,"href",Je),Xe(Ae,"aria-label",B),Xe(de,"src",be),z(ke,ne)},[()=>v(g(Te)),()=>H("card.thumb.open",{view:m(g(Te).view),n:g(Te).slice+1}),()=>qu(e.ctx.studyId,g(Te).img),()=>m(g(Te).view)]),pe(Ie,Ae)},_e=Ie=>{var Ae=Xm(),de=te(Ae),Be=N(de),ke=K(Be,!0);xe((Je,B,be)=>{Xe(de,"src",Je),Xe(de,"alt",B),z(ke,be)},[()=>qu(e.ctx.studyId,g(Te).img),()=>H("card.thumb.recon",{view:m(g(Te).view)}),()=>m(g(Te).view)]),pe(Ie,Ae)};qe(Ne,Ie=>{g(Te).series?Ie(ee):Ie(_e,-1)})}pe(He,me)});var ue=N(Z,2),le=K(ue,!0);xe((He,Te)=>{z(O,He),z(le,Te)},[()=>H("card.onScan"),()=>H("card.thumb.hint")]),pe(Ce,I)};qe(Pe,Ce=>{g(d).length&&Ce(Fe)})}var Le=N(Pe,2);{var Ue=Ce=>{var I=eh(),b=gt(I),O=K(b,!0),Z=N(b),ue=K(Z,!0);xe(le=>{z(O,le),z(ue,g(s).overview)},[()=>H("card.whatItIs")]),pe(Ce,I)};qe(Le,Ce=>{var I;(I=g(s))!=null&&I.overview&&Ce(Ue)})}var Oe=N(Le,2),k=te(Oe),$e=te(k);yt($e,{name:"spark",size:15});var Ye=N($e,1,!0),We=N(k,2);{var Ge=Ce=>{var I=jm(),b=te(I),O=N(b);yt(O,{name:"arrow",size:15}),xe(Z=>z(b,Z),[()=>H(g(n).hemi==="L"?"card.compareR":"card.compareL")]),dt("click",I,()=>e.ctx.act.select({type:"region",id:g(l)},!0)),pe(Ce,I)};qe(We,Ce=>{g(c)&&g(l)&&Ce(Ge)})}var st=N(Oe,2);{let Ce=De(()=>H("card.measureDisc"));Mr(st,{get extra(){return g(Ce)}})}xe((Ce,I)=>{z(G,Ce),z(Ye,I)},[()=>H("card.yourMeasurements"),()=>H("card.learnMore")]),dt("click",k,()=>p("learn")),pe(re,ye)},Y=re=>{var ye=t_(),q=gt(ye);{var G=$e=>{var Ye=e_(),We=gt(Ye);{var Ge=J=>{var fe=Km(),Se=K(fe,!0);xe(()=>z(Se,g(s).overview)),pe(J,fe)};qe(We,J=>{g(s).overview&&J(Ge)})}var st=N(We,2);{var Ce=J=>{var fe=Zm(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se);Yt(ft,21,()=>g(s).functions,Wn,(ut,rt)=>{var At=sl(),bt=K(At,!0);xe(()=>z(bt,g(rt))),pe(ut,At)}),xe(ut=>z(Ke,ut),[()=>H("card.functions")]),pe(J,fe)};qe(st,J=>{var fe;(fe=g(s).functions)!=null&&fe.length&&J(Ce)})}var I=N(st,2);{var b=J=>{var fe=Jm(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se);Yt(ft,21,()=>g(s).connections,Wn,(ut,rt)=>{var At=sl(),bt=K(At,!0);xe(()=>z(bt,g(rt))),pe(ut,At)}),xe(ut=>z(Ke,ut),[()=>H("card.connections")]),pe(J,fe)};qe(I,J=>{var fe;(fe=g(s).connections)!=null&&fe.length&&J(b)})}var O=N(I,2);{var Z=J=>{var fe=Qm(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se);Yt(ft,21,()=>g(s).clinical,Wn,(ut,rt)=>{var At=sl(),bt=K(At,!0);xe(()=>z(bt,g(rt))),pe(ut,At)}),xe(ut=>z(Ke,ut),[()=>H("card.clinical")]),pe(J,fe)};qe(O,J=>{var fe;(fe=g(s).clinical)!=null&&fe.length&&J(Z)})}var ue=N(O,2);{var le=J=>{var fe=eh(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se),ut=K(ft,!0);xe(rt=>{z(Ke,rt),z(ut,g(s).lateralization)},[()=>H("card.lateralization")]),pe(J,fe)};qe(ue,J=>{g(s).lateralization&&J(le)})}var He=N(ue,2),Te=K(He,!0),me=N(He,2),Ne=te(me);{var ee=J=>{var fe=rl(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se),ut=K(ft,!0);xe((rt,At)=>{z(Ke,rt),z(ut,At)},[()=>H("card.aka"),()=>g(s).aka.join(", ")]),pe(J,fe)};qe(Ne,J=>{var fe;(fe=g(s).aka)!=null&&fe.length&&J(ee)})}var _e=N(Ne,2);{var Ie=J=>{var fe=rl(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se),ut=K(ft,!0);xe(rt=>{z(Ke,rt),z(ut,g(_))},[()=>H("card.brodmann")]),pe(J,fe)};qe(_e,J=>{g(_)&&J(Ie)})}var Ae=N(_e,2);{var de=J=>{var fe=rl(),Se=gt(fe),Ke=K(Se,!0),ft=N(Se),ut=K(ft,!0);xe(rt=>{z(Ke,rt),z(ut,g(s).blood_supply)},[()=>H("card.blood")]),pe(J,fe)};qe(Ae,J=>{g(s).blood_supply&&J(de)})}var Be=N(Ae,2),ke=K(Be,!0),Je=N(Be),B=K(Je,!0),be=N(me,2);{var ne=J=>{var fe=$m(),Se=te(fe),Ke=K(Se,!0),ft=N(Se,1,!0);xe(ut=>{z(Ke,ut),z(ft,g(s).fact)},[()=>H("card.fact")]),pe(J,fe)};qe(be,J=>{g(s).fact&&J(ne)})}xe((J,fe,Se)=>{z(Te,J),z(ke,fe),z(B,Se)},[()=>H("card.details"),()=>H("card.partOf"),()=>Wi(e.ctx.namer,g(r))]),pe($e,Ye)},$=$e=>{var Ye=$u(),We=K(Ye,!0);xe(Ge=>z(We,Ge),[()=>H("card.noKb")]),pe($e,Ye)};qe(q,$e=>{g(s)?$e(G):$e($,-1)})}var ie=N(q,2),Re=te(ie),Pe=te(Re);yt(Pe,{name:"square",size:15});var Fe=N(Pe,1,!0),Le=N(Re,2),Ue=te(Le);yt(Ue,{name:"layers",size:15});var Oe=N(Ue,1,!0),k=N(ie,2);Mr(k,{}),xe(($e,Ye)=>{z(Fe,$e),z(Oe,Ye)},[()=>H("card.seeOnScan"),()=>H("card.wholeLobe",{name:Wi(e.ctx.namer,g(r))})]),dt("click",Re,()=>p("mine")),dt("click",Le,()=>e.ctx.act.select({type:"lobe",id:g(r)},!0)),pe(re,ye)};qe(Me,re=>{g(t)==="mine"?re(ve):re(Y,-1)})}xe((re,ye,q,G,$,ie)=>{Xe(x,"aria-label",re),Xe(x,"title",ye),z(P,q),Xe(E,"title",G),Mn(S,`background:${$??""}`),z(R,ie),z(V,g(a))},[()=>H("card.close"),()=>H("card.close"),()=>g(n).hemi==="L"?H("card.side.L"):g(n).hemi==="R"?H("card.side.R"):H("card.side.M"),()=>H("m3d.selectLobe",{name:Wi(e.ctx.namer,g(r))}),()=>Ta(g(r)),()=>Wi(e.ctx.namer,g(r))]),dt("click",x,()=>e.ctx.act.select(null)),dt("click",E,()=>e.ctx.act.select({type:"lobe",id:g(r)},!0)),pe(i,y),Pn()}bi(["click"]);var s_=Ee('<div class="cta" style="margin-top:10px"><a class="btn"><!> </a></div>'),r_=Ee('<h4> </h4> <div class="metrics"></div>',1),a_=Ee('<p class="empty"> </p>'),al=Ee("<dt> </dt><dd> </dd>",1),o_=Ee("<li> </li>"),l_=Ee('<div class="note"><b> </b> <ul class="dots"></ul></div>'),c_=Ee('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:var(--accent)"></span> </span></div> <h2> </h2> <p class="tag"> </p> <!></div> <div class="ibody"><!> <h4> </h4> <ul class="dots"><li> </li> <li> </li> <li> </li> <li> </li></ul> <h4> </h4> <dl class="kv"><!> <!> <!> <dt> </dt><dd> </dd></dl> <ol class="how" style="margin-top:10px"><li> </li> <li> </li> <li> </li></ol> <!> <!></div>',1),u_=Ee('<button type="button" class="btn primary"><!> </button>'),h_=Ee('<button type="button" class="btn"><!> </button>'),d_=Ee("<span> </span>"),f_=Ee('<button type="button" class="lobe-card"><b> </b><!></button>'),p_=Ee('<h4> </h4> <div class="lobes"></div>',1),m_=Ee('<h4> </h4> <p> </p> <div class="cta"><button type="button" class="btn"><!> </button></div>',1),__=Ee('<div class="ihead"><div class="kick"><span class="chip"><span class="dot" style="background:#c084fc"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><div class="cta" style="margin-top:0"><!> <!></div> <!> <!> <!></div>',1);function g_(i,e){Cn(e,!0);const t=De(()=>e.ctx.store.s.mode),n=De(()=>gm(e.ctx.stats)),s=De(()=>rc.filter(v=>e.ctx.store.index.lobes.has(v))),r=De(()=>e.ctx.store.index.vessels.length>0),a=De(()=>{var v;return(((v=e.ctx.regions)==null?void 0:v.caveats)??[]).map(cc)}),o=De(()=>e.ctx.framing==="head"),l=De(()=>e.ctx.ft),c=De(()=>{var v;return e.ctx.study?Sp(e.ctx.study.series,(v=e.ctx.regions)==null?void 0:v.primary_series,m=>Ep(m)):null}),h=De(()=>encodeURIComponent(e.ctx.studyId));var u=jo(),d=gt(u);{var f=v=>{var m=c_(),p=gt(m),y=te(p),M=te(y),x=N(te(M),1,!0),T=N(y,2),w=K(T,!0),A=N(T,2),P=K(A,!0),E=N(A,2);{var S=me=>{var Ne=s_(),ee=te(Ne),_e=te(ee);yt(_e,{name:"side",size:15});var Ie=N(_e,1,!0);oa(ee,Ae=>{var de;return(de=la)==null?void 0:de(Ae)}),xe((Ae,de)=>{Xe(ee,"href",`/study/${g(h)??""}/view/${Ae??""}`),z(Ie,de)},[()=>encodeURIComponent(g(c)),()=>g(l)("card.sum.open2d")]),pe(me,Ne)};qe(E,me=>{g(c)&&me(S)})}var R=N(p,2),L=te(R);{var D=me=>{var Ne=r_(),ee=gt(Ne),_e=K(ee,!0),Ie=N(ee,2);Yt(Ie,23,()=>g(n),Ae=>Ae.key,(Ae,de,Be)=>{{let ke=De(()=>e.ctx.measureLabel(g(de))),Je=De(()=>g(Be)===0);bf(Ae,{get m(){return g(de)},get label(){return g(ke)},get wide(){return g(Je)}})}}),xe(Ae=>z(_e,Ae),[()=>H("card.sum.numbers")]),pe(me,Ne)},F=me=>{var Ne=a_(),ee=K(Ne,!0);xe(_e=>z(ee,_e),[()=>H("card.sum.noNumbers")]),pe(me,Ne)};qe(L,me=>{g(n).length?me(D):me(F,-1)})}var V=N(L,2),X=K(V,!0),oe=N(V,2),Q=te(oe),Me=K(Q,!0),ve=N(Q,2),Y=K(ve,!0),re=N(ve,2),ye=K(re,!0),q=N(re,2),G=K(q,!0),$=N(oe,2),ie=K($,!0),Re=N($,2),Pe=te(Re);{var Fe=me=>{var Ne=al(),ee=gt(Ne),_e=K(ee,!0),Ie=N(ee),Ae=K(Ie,!0);xe(de=>{z(_e,de),z(Ae,e.ctx.regions.backend)},[()=>H("card.sum.backend")]),pe(me,Ne)};qe(Pe,me=>{var Ne;(Ne=e.ctx.regions)!=null&&Ne.backend&&me(Fe)})}var Le=N(Pe,2);{var Ue=me=>{var Ne=al(),ee=gt(Ne),_e=K(ee,!0),Ie=N(ee),Ae=K(Ie);xe(de=>{z(_e,de),z(Ae,`${e.ctx.status.pipeline??""}${e.ctx.status.version?` · v${e.ctx.status.version}`:""}`)},[()=>H("card.sum.pipeline")]),pe(me,Ne)};qe(Le,me=>{var Ne;(Ne=e.ctx.status)!=null&&Ne.pipeline&&me(Ue)})}var Oe=N(Le,2);{var k=me=>{var Ne=al(),ee=gt(Ne),_e=K(ee,!0),Ie=N(ee),Ae=K(Ie,!0);xe(de=>{z(_e,de),z(Ae,e.ctx.regions.licence)},[()=>H("card.sum.licence")]),pe(me,Ne)};qe(Oe,me=>{var Ne;(Ne=e.ctx.regions)!=null&&Ne.licence&&me(k)})}var $e=N(Oe,2),Ye=K($e,!0),We=N($e),Ge=K(We,!0),st=N(Re,2),Ce=te(st),I=K(Ce,!0),b=N(Ce,2),O=K(b,!0),Z=N(b,2),ue=K(Z,!0),le=N(st,2);{var He=me=>{var Ne=l_(),ee=te(Ne),_e=K(ee,!0),Ie=N(ee,2);Yt(Ie,21,()=>{var Ae;return[...g(a),...((Ae=e.ctx.status)==null?void 0:Ae.warnings)??[]]},Wn,(Ae,de)=>{var Be=o_(),ke=K(Be,!0);xe(()=>z(ke,g(de))),pe(Ae,Be)}),xe(Ae=>z(_e,Ae),[()=>H("card.sum.limits")]),pe(me,Ne)};qe(le,me=>{var Ne,ee;(g(a).length||(ee=(Ne=e.ctx.status)==null?void 0:Ne.warnings)!=null&&ee.length)&&me(He)})}var Te=N(le,2);{let me=De(()=>g(l)("card.sum.disc"));Mr(Te,{get extra(){return g(me)}})}xe((me,Ne,ee,_e,Ie,Ae,de,Be,ke,Je,B,be,ne)=>{z(x,me),z(w,Ne),z(P,ee),z(X,_e),z(Me,Ie),z(Y,Ae),z(ye,de),z(G,Be),z(ie,ke),z(Ye,Je),z(Ge,e.ctx.store.index.keys.length),z(I,B),z(O,be),z(ue,ne)},[()=>H("card.yourScan"),()=>H("card.sum.title"),()=>g(l)("card.sum.tag"),()=>H("card.sum.try"),()=>H("card.sum.try1"),()=>g(l)("card.sum.try2"),()=>g(l)("card.sum.try3"),()=>H("card.sum.try4"),()=>H("card.sum.how"),()=>H("card.sum.regions"),()=>H("card.sum.how1"),()=>g(l)("card.sum.how2"),()=>H("card.sum.how3")]),pe(v,m)},_=v=>{var m=__(),p=gt(m),y=te(p),M=te(y),x=N(te(M),1,!0),T=N(y,2),w=K(T,!0),A=N(T,2),P=K(A,!0),E=N(p,2),S=te(E),R=te(S);{var L=ve=>{var Y=u_(),re=te(Y);yt(re,{name:"play",size:14});var ye=N(re,1,!0);xe(q=>z(ye,q),[()=>H("card.learn.tour")]),dt("click",Y,function(...q){var G;(G=e.ctx.act.tour)==null||G.apply(this,q)}),pe(ve,Y)};qe(R,ve=>{e.ctx.tourLen&&ve(L)})}var D=N(R,2);{var F=ve=>{var Y=h_(),re=te(Y);yt(re,{name:"spark",size:15});var ye=N(re,1,!0);xe(q=>z(ye,q),[()=>H("m3d.quiz")]),dt("click",Y,function(...q){var G;(G=e.ctx.act.quiz)==null||G.apply(this,q)}),pe(ve,Y)};qe(D,ve=>{e.ctx.store.index.keys.length>1&&ve(F)})}var V=N(S,2);{var X=ve=>{var Y=p_(),re=gt(Y),ye=K(re,!0),q=N(re,2);Yt(q,20,()=>g(s),G=>G,(G,$)=>{var ie=f_(),Re=te(ie),Pe=K(Re,!0),Fe=N(Re);{var Le=Ue=>{var Oe=d_(),k=K(Oe,!0);xe(()=>z(k,e.ctx.kb.lobes[$].tagline)),pe(Ue,Oe)};qe(Fe,Ue=>{var Oe;(Oe=e.ctx.kb.lobes[$])!=null&&Oe.tagline&&Ue(Le)})}xe((Ue,Oe)=>{Mn(ie,`--c:${Ue??""}`),z(Pe,Oe)},[()=>Ta($),()=>Wi(e.ctx.namer,$)]),dt("click",ie,()=>e.ctx.act.select({type:"lobe",id:$},!0)),pe(G,ie)}),xe(G=>z(ye,G),[()=>g(l)("card.learn.divisions")]),pe(ve,Y)};qe(V,ve=>{g(s).length&&ve(X)})}var oe=N(V,2);{var Q=ve=>{var Y=m_(),re=gt(Y),ye=K(re,!0),q=N(re,2),G=K(q,!0),$=N(q,2),ie=te($),Re=te(ie);yt(Re,{name:"eye",size:15});var Pe=N(Re,1,!0);xe((Fe,Le)=>{z(ye,Fe),z(G,e.ctx.kb.arteries.overview),z(Pe,Le)},[()=>H("card.learn.arteries"),()=>H("card.learn.showArteries")]),dt("click",ie,function(...Fe){var Le;(Le=e.ctx.act.showVessels)==null||Le.apply(this,Fe)}),pe(ve,Y)};qe(oe,ve=>{var Y;g(o)&&g(r)&&((Y=e.ctx.kb.arteries)!=null&&Y.overview)&&ve(Q)})}var Me=N(oe,2);Mr(Me,{}),xe((ve,Y,re)=>{z(x,ve),z(w,Y),z(P,re)},[()=>H("m3d.mode.learn"),()=>g(l)("card.learn.title"),()=>g(l)("card.learn.tag")]),pe(v,m)};qe(d,v=>{g(t)==="mine"?v(f):v(_,-1)})}pe(i,u),Pn()}bi(["click"]);var v_=Ee("<p> </p>"),x_=Ee('<br/><span class="faint"> </span>',1),y_=Ee("<dt> </dt><dd> <!></dd>",1),b_=Ee('<h4> </h4> <dl class="kv"></dl>',1),M_=Ee('<div class="ihead"><button type="button" class="btn x"><!></button> <div class="kick"><span class="chip"><span class="dot" style="background:#ef4444"></span> </span></div> <h2> </h2> <p class="tag"> </p></div> <div class="ibody"><!> <!> <div class="note"> </div> <!></div>',1);function S_(i,e){Cn(e,!0);const t=De(()=>_f(e.id,e.ctx.framing)),n=De(()=>g(t)==="body"?void 0:e.ctx.kb.arteries);var s=M_(),r=gt(s),a=te(r),o=te(a);yt(o,{name:"close",size:16});var l=N(a,2),c=te(l),h=N(te(c),1,!0),u=N(l,2),d=K(u,!0),f=N(u,2),_=K(f,!0),v=N(r,2),m=te(v);{var p=P=>{var E=v_(),S=K(E,!0);xe(()=>z(S,g(n).overview)),pe(P,E)};qe(m,P=>{var E;(E=g(n))!=null&&E.overview&&P(p)})}var y=N(m,2);{var M=P=>{var E=b_(),S=gt(E),R=K(S,!0),L=N(S,2);Yt(L,21,()=>Object.values(g(n).vessels),Wn,(D,F)=>{var V=y_(),X=gt(V),oe=K(X,!0),Q=N(X),Me=te(Q),ve=N(Me);{var Y=re=>{var ye=x_(),q=N(gt(ye)),G=K(q,!0);xe(()=>z(G,g(F).note)),pe(re,ye)};qe(ve,re=>{g(F).note&&re(Y)})}xe(()=>{z(oe,g(F).name),z(Me,g(F).supplies)}),pe(D,V)}),xe(D=>z(R,D),[()=>H("card.vessel.main")]),pe(P,E)},x=De(()=>{var P;return((P=g(n))==null?void 0:P.vessels)&&Object.keys(g(n).vessels).length});qe(y,P=>{g(x)&&P(M)})}var T=N(y,2),w=K(T,!0),A=N(T,2);Mr(A,{}),xe((P,E,S,R,L,D)=>{Xe(a,"aria-label",P),Xe(a,"title",E),z(h,S),z(d,R),z(_,L),z(w,D)},[()=>H("card.close"),()=>H("card.close"),()=>H("card.vessel.kicker"),()=>H(`card.vessel.${g(t)}`),()=>H(`card.vessel.${g(t)}.tag`),()=>e.ctx.ft("card.vessel.caveat")]),dt("click",a,()=>e.ctx.act.select(null)),pe(i,s),Pn()}bi(["click"]);var E_=Ee('<div class="fade-in"><!></div>'),T_=Ee('<div class="cardx svelte-1yprcvz"><!></div>');function A_(i,e){Cn(e,!0);const t=De(()=>e.ctx.store.s.sel);let n;Jn(()=>{var a,o;(a=g(t))==null||a.type,(o=g(t))==null||o.id,e.ctx.store.s.mode,n&&(n.scrollTop=0)});var s=T_(),r=te(s);cf(r,()=>{var a,o;return`${(a=g(t))==null?void 0:a.type}:${(o=g(t))==null?void 0:o.id}:${e.ctx.store.s.mode}`},a=>{var o=E_(),l=te(o);{var c=f=>{g_(f,{get ctx(){return e.ctx}})},h=f=>{i_(f,{get ctx(){return e.ctx},get id(){return g(t).id}})},u=f=>{Rm(f,{get ctx(){return e.ctx},get id(){return g(t).id}})},d=f=>{S_(f,{get ctx(){return e.ctx},get id(){return g(t).id}})};qe(l,f=>{g(t)?g(t).type==="region"?f(h,1):g(t).type==="lobe"?f(u,2):f(d,-1):f(c)})}pe(a,o)}),ri(s,a=>n=a,()=>n),pe(i,s),Pn()}const th=["hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle","organ","airway","spine","muscle","vessels","neck","bone","skin"],nh={brain_mr:"head",spine_mr:"spine",ct_body:"body"},w_=new Set(["hemi","hemi_L","hemi_R","cerebellum","brainstem","deep","ventricle"]),R_=new Set(["frontal","parietal","temporal","occipital","insular","limbic","subcortical","ventricles","white_matter","cerebellum","brainstem"]);function C_(i,e){const t=i==null?void 0:i.framing;if(t==="head"||t==="body"||t==="spine")return t;const n=(i==null?void 0:i.pipeline)??e??"";if(nh[n])return nh[n];const s=(i==null?void 0:i.regions)??[];return!s.length||s.some(a=>a.group?w_.has(a.group):df(a.structure)&&R_.has(Oo(a.structure)))?"head":s.every(a=>["spinal_column","nervous_spine"].includes(Oo(a.structure))||a.group==="spine")?"spine":"body"}const Mf={head:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!1,neck:!1,bone:!1,skin:!1},body:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!0},spine:{hemi_L:!0,hemi_R:!0,cerebellum:!0,brainstem:!0,deep:!0,ventricle:!0,organ:!0,airway:!0,spine:!0,muscle:!1,vessels:!0,neck:!0,bone:!0,skin:!1}};function P_(i,e,t){const n=new Set(i),s=new Map;for(const l of(e==null?void 0:e.layers)??[])l&&typeof l.id=="string"&&s.set(ff(l.id),l.default);const r=[...th.filter(l=>n.has(l)),...[...n].filter(l=>!th.includes(l))],a=Mf[t],o={};for(const l of r){const c=s.get(l);o[l]=typeof c=="boolean"?c:a[l]??!0}return{layers:r,defaults:o}}const L_=new Set(["muscle","bone"]),I_=["deep","ventricle","vessels","organ","airway","spine"];function Sf(i,e,t){return e==="head"?i:e==="spine"&&t(`${i}.spine`)?`${i}.spine`:t(`${i}.body`)?`${i}.body`:i}var ih=Ee('<button type="button" role="radio"> </button>'),D_=Ee('<li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" aria-hidden="true"></span> </span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li>'),U_=Ee('<div class="cp svelte-1x9pj0t"><div class="sec mode svelte-1x9pj0t"><div class="seg svelte-1x9pj0t" role="group"><button type="button"><!> </button> <button type="button"><!> </button></div> <p class="hint svelte-1x9pj0t"> </p></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t" id="cb-l"> </div> <div class="seg wrap svelte-1x9pj0t" role="radiogroup" aria-labelledby="cb-l"></div> <div class="row svelte-1x9pj0t"><span id="pb-l"> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="pb-l"><button type="button" role="radio"> </button> <button type="button" role="radio"> </button></div></div></div> <div class="sec svelte-1x9pj0t"><div class="lab svelte-1x9pj0t"> </div> <ul class="layers svelte-1x9pj0t" role="list"><!> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:#e2e8f0" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">X</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li> <li><button type="button" role="switch"><span class="svelte-1x9pj0t"><span class="dot svelte-1x9pj0t" style="background:var(--accent)" aria-hidden="true"></span> <kbd class="svelte-1x9pj0t">I</kbd></span><span class="sw svelte-1x9pj0t" aria-hidden="true"></span></button></li></ul></div> <div class="sec svelte-1x9pj0t"><label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.01" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <label class="row sl svelte-1x9pj0t"><span class="w svelte-1x9pj0t"> </span> <input type="range" min="0" max="1" step="0.005" class="svelte-1x9pj0t"/> <span class="val svelte-1x9pj0t"> </span></label> <div class="row svelte-1x9pj0t"><span class="faint sm-t svelte-1x9pj0t" id="ax-l"><!> </span> <div class="seg sm svelte-1x9pj0t" role="radiogroup" aria-labelledby="ax-l"></div></div></div> <div class="sec tree svelte-1x9pj0t"><!></div></div>');function N_(i,e){Cn(e,!0);const t=De(()=>e.store.s),n=de=>e.store.dispatch(de),s=(de,Be)=>H(Sf(de,e.store.framing,Zn),Be),r=de=>Zn(`m3d.layer.${de}`)?s(`m3d.layer.${de}`):de.replace(/_/g," "),a=De(()=>[{id:"anatomy",label:H("m3d.color.anatomy")},{id:"lobes",label:s("m3d.color.lobes")},{id:"natural",label:H("m3d.color.natural")},...e.dataMaps.map(de=>({id:`data:${de.key}`,label:e.dataLabel(de),title:H("m3d.color.dataTitle",{name:e.dataLabel(de)})}))]),o=["y","x","z"],l=de=>Math.round(de*100);var c=U_(),h=te(c),u=te(h),d=te(u);let f;var _=te(d);yt(_,{name:"square",size:15});var v=N(_,1,!0),m=N(d,2);let p;var y=te(m);yt(y,{name:"spark",size:15});var M=N(y,1,!0),x=N(u,2),T=K(x,!0),w=N(h,2),A=te(w),P=K(A,!0),E=N(A,2);Yt(E,21,()=>g(a),de=>de.id,(de,Be)=>{var ke=ih();let Je;var B=K(ke,!0);xe(()=>{Xe(ke,"aria-checked",g(t).colorBy===g(Be).id),Xe(ke,"title",g(Be).title),Je=Xt(ke,1,"svelte-1x9pj0t",null,Je,{on:g(t).colorBy===g(Be).id}),z(B,g(Be).label)}),dt("click",ke,()=>n({type:"colorBy",colorBy:g(Be).id})),pe(de,ke)});var S=N(E,2),R=te(S),L=K(R,!0),D=N(R,2),F=te(D);let V;var X=K(F,!0),oe=N(F,2);let Q;var Me=K(oe,!0),ve=N(w,2),Y=te(ve),re=K(Y,!0),ye=N(Y,2),q=te(ye);Yt(q,16,()=>e.store.index.layers,de=>de,(de,Be)=>{var ke=D_(),Je=te(ke);let B;var be=te(Je),ne=te(be),J=N(ne,1,!0);xe(fe=>{Xe(Je,"aria-checked",!!g(t).show[Be]),B=Xt(Je,1,"tg svelte-1x9pj0t",null,B,{on:!!g(t).show[Be]}),Mn(ne,`background:${im[Be]??"#cbd5e1"??""}`),z(J,fe)},[()=>r(Be)]),dt("click",Je,()=>n({type:"layer",layer:Be})),pe(de,ke)});var G=N(q,2),$=te(G);let ie;var Re=te($),Pe=N(te(Re)),Fe=N(G,2),Le=te(Fe);let Ue;var Oe=te(Le),k=N(te(Oe)),$e=N(ve,2),Ye=te($e),We=te(Ye),Ge=K(We,!0),st=N(We,2),Ce=N(st,2),I=K(Ce),b=N(Ye,2),O=te(b),Z=K(O,!0),ue=N(O,2),le=N(ue,2),He=K(le,!0),Te=N(b,2),me=te(Te),Ne=te(me);yt(Ne,{name:"cut",size:13});var ee=N(Ne),_e=N(me,2);Yt(_e,21,()=>o,Wn,(de,Be)=>{var ke=ih();let Je;var B=K(ke,!0);xe(be=>{Xe(ke,"aria-checked",g(t).cutAxis===g(Be)),Je=Xt(ke,1,"svelte-1x9pj0t",null,Je,{on:g(t).cutAxis===g(Be)}),z(B,be)},[()=>H(`m3d.axis.${g(Be)}`)]),dt("click",ke,()=>n({type:"cutAxis",axis:g(Be)})),pe(de,ke)});var Ie=N($e,2),Ae=te(Ie);hf(Ae,()=>e.tree),xe((de,Be,ke,Je,B,be,ne,J,fe,Se,Ke,ft,ut,rt,At,bt,$t,en,Ct,tn,Bn,jn)=>{Xe(u,"aria-label",de),Xe(d,"aria-pressed",g(t).mode==="mine"),f=Xt(d,1,"svelte-1x9pj0t",null,f,{on:g(t).mode==="mine"}),z(v,Be),Xe(m,"aria-pressed",g(t).mode==="learn"),p=Xt(m,1,"svelte-1x9pj0t",null,p,{on:g(t).mode==="learn"}),z(M,ke),z(T,Je),z(P,B),z(L,be),Xe(F,"aria-checked",g(t).pickBy==="structure"),V=Xt(F,1,"svelte-1x9pj0t",null,V,{on:g(t).pickBy==="structure"}),z(X,ne),Xe(oe,"aria-checked",g(t).pickBy==="lobe"),Q=Xt(oe,1,"svelte-1x9pj0t",null,Q,{on:g(t).pickBy==="lobe"}),z(Me,J),z(re,fe),Xe($,"aria-checked",g(t).xray),ie=Xt($,1,"tg svelte-1x9pj0t",null,ie,{on:g(t).xray}),Xe($,"title",Se),z(Pe,`${Ke??""} `),Xe(Le,"aria-checked",g(t).isolate),Ue=Xt(Le,1,"tg svelte-1x9pj0t",null,Ue,{on:g(t).isolate}),Le.disabled=!g(t).sel,Xe(Le,"title",ft),z(k,`${ut??""} `),z(Ge,rt),Fo(st,g(t).explode),Mn(st,`--p:${At??""}%`),Xe(st,"aria-valuetext",`${bt??""}%`),z(I,`${$t??""}%`),z(Z,en),Fo(ue,g(t).cut),Mn(ue,`--p:${Ct??""}%`),Xe(ue,"aria-valuetext",tn),z(He,Bn),z(ee,` ${jn??""}`)},[()=>H("m3d.mode"),()=>H("m3d.mode.mine"),()=>H("m3d.mode.learn"),()=>H(g(t).mode==="mine"?"m3d.mode.mine.hint":"m3d.mode.learn.hint"),()=>H("m3d.colorBy"),()=>H("m3d.pickBy"),()=>H("m3d.pickBy.structure"),()=>s("m3d.pickBy.lobe"),()=>H("m3d.layers"),()=>s("m3d.xray.title"),()=>s("m3d.xray"),()=>H("m3d.isolate.title"),()=>H("m3d.isolate"),()=>H("m3d.explode"),()=>l(g(t).explode),()=>l(g(t).explode),()=>l(g(t).explode),()=>H("m3d.cut"),()=>l(g(t).cut),()=>g(t).cut>=.999?H("m3d.cut.off"):`${l(g(t).cut)}%`,()=>g(t).cut>=.999?H("m3d.cut.off"):`${l(g(t).cut)}%`,()=>H("m3d.cut.axis")]),dt("click",d,()=>n({type:"mode",mode:"mine"})),dt("click",m,()=>n({type:"mode",mode:"learn"})),dt("click",F,()=>n({type:"pickBy",pickBy:"structure"})),dt("click",oe,()=>n({type:"pickBy",pickBy:"lobe"})),dt("click",$,()=>n({type:"xray"})),dt("click",Le,()=>n({type:"isolate"})),dt("input",st,de=>n({type:"explode",value:+de.currentTarget.value})),dt("input",ue,de=>n({type:"cut",value:+de.currentTarget.value})),pe(i,c),Pn()}bi(["click","input"]);function zr(i,e){if(!i.length)return NaN;const t=(i.length-1)*Math.max(0,Math.min(1,e)),n=Math.floor(t),s=Math.ceil(t);return i[n]+(i[s]-i[n])*(t-n)}function F_(i,e=2){const t=new Map;for(const[s,r]of Object.entries((i==null?void 0:i.regions)??{}))for(const a of r.measurements??[]){if(typeof a.value!="number"||!Number.isFinite(a.value))continue;let o=t.get(a.key);o||t.set(a.key,o={label:a.label||a.key,unit:a.unit??"",values:new Map}),o.values.set(s,a.value)}const n=[];for(const[s,r]of t){if(r.values.size<e)continue;const a=[...r.values.values()].sort((h,u)=>h-u),o=a[0]<0&&a[a.length-1]>0;let l,c;if(o){const h=a.map(Math.abs).sort((u,d)=>u-d);c=zr(h,.95)||1,l=-c}else{const h=zr(a,.25),u=zr(a,.75),d=u-h;l=Math.max(zr(a,.05),h-1.5*d),c=Math.min(zr(a,.95),u+1.5*d),c>l||(l=a[0],c=a[a.length-1]),c>l||(c=l+1)}n.push({key:s,label:r.label,unit:r.unit,values:r.values,lo:l,hi:c,diverging:o,stops:o?am:xf})}return n}function O_(i,e){const t=i.values.get(e);return t===void 0?zo(vf):um((t-i.lo)/(i.hi-i.lo),i.stops)}const B_=i=>[i.lo,(i.lo+i.hi)/2,i.hi];var k_=Ee('<button type="button" class="svelte-1r8wc48"> </button>'),sh=Ee('<button type="button"><!> </button>'),z_=Ee('<span class="sep svelte-1r8wc48" aria-hidden="true"></span> <!> <!>',1),V_=Ee('<div class="dock panel svelte-1r8wc48" role="toolbar"><button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-controls"><!></button> <div class="seg svelte-1r8wc48" role="group"></div> <span class="sep svelte-1r8wc48" aria-hidden="true"></span> <button type="button"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <button type="button" class="btn icon svelte-1r8wc48"><!></button> <!> <button type="button" class="btn icon mob svelte-1r8wc48" aria-controls="m3d-card"><!></button></div>');function H_(i,e){Cn(e,!0);const t=De(()=>["left","front","top","right","back","below",...e.store.framing==="head"?["inside"]:[]]),n=De(()=>e.store.s);var s=V_(),r=te(s),a=te(r);yt(a,{name:"sliders",size:17});var o=N(r,2);Yt(o,21,()=>g(t),Wn,(M,x)=>{var T=k_(),w=K(T,!0);xe((A,P)=>{Xe(T,"title",A),z(w,P)},[()=>H(`m3d.view.${g(x)}.title`),()=>H(`m3d.view.${g(x)}`)]),dt("click",T,()=>e.onview(g(x))),pe(M,T)});var l=N(o,4);let c;var h=te(l);yt(h,{name:"rotate",size:17});var u=N(l,2),d=te(u);yt(d,{name:"camera",size:17});var f=N(u,2),_=te(f);yt(_,{name:"reset",size:17});var v=N(f,2);{var m=M=>{var x=z_(),T=N(gt(x),2);{var w=E=>{var S=sh();let R;var L=te(S);yt(L,{name:"play",size:14});var D=N(L,1,!0);xe(F=>{R=Xt(S,1,"btn svelte-1r8wc48",null,R,{on:!!g(n).tour}),z(D,F)},[()=>H("m3d.tour")]),dt("click",S,function(...F){var V;(V=e.ontour)==null||V.apply(this,F)}),pe(E,S)};qe(T,E=>{e.canTour&&E(w)})}var A=N(T,2);{var P=E=>{var S=sh();let R;var L=te(S);yt(L,{name:"spark",size:15});var D=N(L,1,!0);xe(F=>{R=Xt(S,1,"btn svelte-1r8wc48",null,R,{on:!!g(n).quiz}),z(D,F)},[()=>H("m3d.quiz")]),dt("click",S,function(...F){var V;(V=e.onquiz)==null||V.apply(this,F)}),pe(E,S)};qe(A,E=>{e.canQuiz&&E(P)})}pe(M,x)};qe(v,M=>{g(n).mode==="learn"&&M(m)})}var p=N(v,2),y=te(p);yt(y,{name:"card",size:17}),xe((M,x,T,w,A,P,E,S,R,L,D,F)=>{Xe(s,"aria-label",M),Xe(r,"aria-expanded",e.controlsOpen),Xe(r,"aria-label",x),Xe(r,"title",T),Xe(o,"aria-label",w),c=Xt(l,1,"btn icon svelte-1r8wc48",null,c,{on:g(n).rotate}),Xe(l,"aria-pressed",g(n).rotate),Xe(l,"aria-label",A),Xe(l,"title",P),Xe(u,"aria-label",E),Xe(u,"title",S),Xe(f,"aria-label",R),Xe(f,"title",L),Xe(p,"aria-expanded",e.cardOpen),Xe(p,"aria-label",D),Xe(p,"title",F)},[()=>H("m3d.dock"),()=>H("m3d.controls"),()=>H("m3d.controls"),()=>H("m3d.views"),()=>H("m3d.rotate"),()=>H("m3d.rotate"),()=>H("m3d.shot"),()=>H("m3d.shot"),()=>H("m3d.reset"),()=>H("m3d.reset"),()=>H("m3d.card"),()=>H("m3d.card")]),dt("click",r,function(...M){var x;(x=e.ontoggleControls)==null||x.apply(this,M)}),dt("click",l,()=>e.store.dispatch({type:"rotate"})),dt("click",u,function(...M){var x;(x=e.onshot)==null||x.apply(this,M)}),dt("click",f,function(...M){var x;(x=e.onreset)==null||x.apply(this,M)}),dt("click",p,function(...M){var x;(x=e.ontoggleCard)==null||x.apply(this,M)}),pe(i,s),Pn()}bi(["click"]);var G_=Ee('<div class="legend panel svelte-qe47ma" role="figure"><div class="ttl svelte-qe47ma"><span> </span><span> </span></div> <div class="grad svelte-qe47ma"></div> <div class="ticks svelte-qe47ma"><span> </span> <span> </span> <span> </span></div> <div class="nd svelte-qe47ma"><i class="svelte-qe47ma"></i> </div></div>');function W_(i,e){Cn(e,!0);const t=De(()=>B_(e.map)),n=De(()=>e.map.diverging&&/asym/i.test(e.map.key));var s=G_(),r=te(s),a=te(r),o=K(a,!0),l=N(a),c=K(l,!0),h=N(r,2),u=N(h,2),d=te(u),f=K(d,!0),_=N(d,2),v=K(_,!0),m=N(_,2),p=K(m,!0),y=N(u,2),M=te(y),x=N(M);xe((T,w,A,P,E,S,R)=>{Xe(s,"aria-label",T),z(o,e.label),z(c,e.map.unit),Mn(h,`background:${w??""}`),z(f,A),z(v,P),z(p,E),Mn(M,`background:${vf}`),z(x,`${S??""} · ${R??""}`)},[()=>H("m3d.legend",{name:e.label}),()=>hm(e.map.stops),()=>g(n)?H("m3d.legend.rLarger",{v:An(Math.abs(g(t)[0]),gi.lang)}):An(g(t)[0],gi.lang),()=>g(n)?H("m3d.legend.equal"):An(g(t)[1],gi.lang),()=>g(n)?H("m3d.legend.lLarger",{v:An(g(t)[2],gi.lang)}):An(g(t)[2],gi.lang)+(e.map.diverging?"":"+"),()=>H("m3d.legend.noData"),()=>H("m3d.legend.note")]),pe(i,s),Pn()}var X_=Ee('<span class="fb ok svelte-1xhmue8"> </span>'),q_=Ee('<span class="fb bad svelte-1xhmue8"> </span>'),j_=Ee('<div role="status" aria-live="polite"><span class="q svelte-1xhmue8"> <b class="svelte-1xhmue8"> </b></span> <span class="score svelte-1xhmue8"> </span> <!> <button type="button" class="btn svelte-1xhmue8"> </button> <button type="button" class="btn icon svelte-1xhmue8"><!></button></div>');function Y_(i,e){Cn(e,!0);var t=j_();let n;var s=te(t),r=te(s),a=N(r),o=K(a,!0),l=N(s,2),c=K(l),h=N(l,2);{var u=p=>{var y=X_(),M=K(y,!0);xe(x=>z(M,x),[()=>H("m3d.quiz.right")]),pe(p,y)},d=p=>{var y=q_(),M=K(y,!0);xe(x=>z(M,x),[()=>H("m3d.quiz.wrong",{name:e.name(e.quiz.last.picked)})]),pe(p,y)};qe(h,p=>{var y;(y=e.quiz.last)!=null&&y.ok?p(u):e.quiz.last&&e.quiz.last.picked&&p(d,1)})}var f=N(h,2),_=K(f,!0),v=N(f,2),m=te(v);yt(m,{name:"close",size:16}),xe((p,y,M,x,T,w)=>{var A,P;n=Xt(t,1,"banner panel svelte-1xhmue8",null,n,{ok:((A=e.quiz.last)==null?void 0:A.ok)===!0,bad:((P=e.quiz.last)==null?void 0:P.ok)===!1}),z(r,`${p??""} `),z(o,y),Xe(l,"aria-label",M),z(c,`${e.quiz.score??""}/${e.quiz.n??""}`),f.disabled=e.quiz.revealing,z(_,x),Xe(v,"aria-label",T),Xe(v,"title",w)},[()=>H("m3d.quiz.ask"),()=>e.name(e.quiz.target),()=>H("m3d.quiz.score",{s:e.quiz.score,n:e.quiz.n}),()=>H("m3d.quiz.skip"),()=>H("m3d.quiz.end"),()=>H("m3d.quiz.end")]),dt("click",f,function(...p){var y;(y=e.onskip)==null||y.apply(this,p)}),dt("click",v,function(...p){var y;(y=e.onend)==null||y.apply(this,p)}),pe(i,t),Pn()}bi(["click"]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",gr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K_=0,rh=1,Z_=2,Ef=1,J_=2,Vi=3,li=0,Rn=1,Gn=2,ms=0,vr=1,ah=2,oh=3,lh=4,Q_=5,Ds=100,$_=101,eg=102,tg=103,ng=104,ig=200,sg=201,rg=202,ag=203,uc=204,hc=205,og=206,lg=207,cg=208,ug=209,hg=210,dg=211,fg=212,pg=213,mg=214,dc=0,fc=1,pc=2,Sr=3,mc=4,_c=5,gc=6,vc=7,Tf=0,_g=1,gg=2,_s=0,vg=1,xg=2,yg=3,Af=4,bg=5,Mg=6,Sg=7,ch="attached",Eg="detached",wf=300,Er=301,Tr=302,xc=303,yc=304,Yo=306,Ar=1e3,us=1001,Vo=1002,Un=1003,Rf=1004,ia=1005,Qn=1006,Ro=1007,Xi=1008,Yi=1009,Cf=1010,Pf=1011,ma=1012,fu=1013,gs=1014,$n=1015,wa=1016,pu=1017,mu=1018,wr=1020,Lf=35902,If=1021,Df=1022,Xn=1023,Uf=1024,Nf=1025,xr=1026,Rr=1027,_u=1028,Ko=1029,Ff=1030,gu=1031,vu=1033,Co=33776,Po=33777,Lo=33778,Io=33779,bc=35840,Mc=35841,Sc=35842,Ec=35843,Tc=36196,Ac=37492,wc=37496,Rc=37808,Cc=37809,Pc=37810,Lc=37811,Ic=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,zc=37820,Vc=37821,Do=36492,Hc=36494,Gc=36495,Of=36283,Wc=36284,Xc=36285,qc=36286,_a=2300,ga=2301,ol=2302,uh=2400,hh=2401,dh=2402,Tg=2500,Ag=0,Bf=1,jc=2,wg=3200,Rg=3201,kf=0,Cg=1,cs="",an="srgb",Fn="srgb-linear",Zo="linear",Gt="srgb",zs=7680,fh=519,Pg=512,Lg=513,Ig=514,zf=515,Dg=516,Ug=517,Ng=518,Fg=519,Yc=35044,ph="300 es",qi=2e3,Ho=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const ca=Math.PI/180,Cr=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function xu(i,e){return(i%e+e)%e}function Og(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bg(i,e,t){return i!==e?(t-i)/(e-i):0}function ua(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return ua(i,e,1-Math.exp(-t*n))}function zg(i,e=1){return e-Math.abs(xu(i,e*2)-e)}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wg(i,e){return i+Math.random()*(e-i)}function Xg(i){return i*(.5-Math.random())}function qg(i){i!==void 0&&(mh=i);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(i){return i*ca}function Yg(i){return i*Cr}function Kg(i){return(i&i-1)===0&&i!==0}function Zg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yu={DEG2RAD:ca,RAD2DEG:Cr,generateUUID:xi,clamp:gn,euclideanModulo:xu,mapLinear:Og,inverseLerp:Bg,lerp:ua,damp:kg,pingpong:zg,smoothstep:Vg,smootherstep:Hg,randInt:Gg,randFloat:Wg,randFloatSpread:Xg,seededRandom:qg,degToRad:jg,radToDeg:Yg,isPowerOfTwo:Kg,ceilPowerOfTwo:Zg,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:Qg,normalize:Bt,denormalize:vi};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,s,r,a,o,l,c){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],x=s[7],T=s[2],w=s[5],A=s[8];return r[0]=a*v+o*y+l*T,r[3]=a*m+o*M+l*w,r[6]=a*p+o*x+l*A,r[1]=c*v+h*y+u*T,r[4]=c*m+h*M+u*w,r[7]=c*p+h*x+u*A,r[2]=d*v+f*y+_*T,r[5]=d*m+f*M+_*w,r[8]=d*p+f*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new _t;function Vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){const i=va("canvas");return i.style.display="block",i}const _h={};function sa(i){i in _h||(_h[i]=!0,console.warn(i))}function ev(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Gt&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Gt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],xh=[.3127,.329],yh=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[Fn]:{primaries:gh,whitePoint:xh,transfer:Zo,toXYZ:yh,fromXYZ:bh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:gh,whitePoint:xh,transfer:Gt,toXYZ:yh,fromXYZ:bh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let Vs;class iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=va("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sv=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class xn extends Os{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=us,s=us,r=Qn,a=Xi,o=Xn,l=Yi,c=xn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=xi(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=wf;xn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+d)/4,A=(u+v)/4,P=(_+m)/4;return M>x&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class av extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends av{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gf extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ov extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),w=Math.atan2(T,p*y);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const x=o*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+v*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new U,Mh=new Ci;class qt{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Na.subVectors(this.max,Vr),Hs.subVectors(e.a,Vr),Gs.subVectors(e.b,Vr),Ws.subVectors(e.c,Vr),es.subVectors(Gs,Hs),ts.subVectors(Ws,Gs),xs.subVectors(Hs,Ws);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-xs.z,xs.y,es.z,0,-es.x,ts.z,0,-ts.x,xs.z,0,-xs.x,-es.y,es.x,0,-ts.y,ts.x,0,-xs.y,xs.x,0];return!hl(t,Hs,Gs,Ws,Na)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Hs,Gs,Ws,Na))?!1:(Fa.crossVectors(es,ts),t=[Fa.x,Fa.y,Fa.z],hl(t,Hs,Gs,Ws,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new U,new U,new U,new U,new U,new U,new U,new U],hi=new U,Ua=new qt,Hs=new U,Gs=new U,Ws=new U,es=new U,ts=new U,xs=new U,Vr=new U,Na=new U,Fa=new U,ys=new U;function hl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ys.fromArray(i,r);const o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lv=new qt,Hr=new U,dl=new U;class Nn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(dl)),this.expandByPoint(Hr.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new U,fl=new U,Oa=new U,ns=new U,pl=new U,Ba=new U,ml=new U;class Bs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fl.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(fl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=ns.dot(this.direction),l=-ns.dot(Oa),c=ns.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fl).addScaledVector(Oa,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){pl.subVectors(t,e),Ba.subVectors(n,e),ml.crossVectors(pl,Ba);let a=this.direction.dot(ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);const l=o*this.direction.dot(Ba.crossVectors(ns,Ba));if(l<0)return null;const c=o*this.direction.dot(pl.cross(ns));if(c<0||l+c>a)return null;const h=-o*ns.dot(ml);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,_,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,v=c*u;t[0]=d+v*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cv,e,uv)}lookAt(e,t,n){const s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),is.crossVectors(n,Yn),is.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),is.crossVectors(n,Yn)),is.normalize(),ka.crossVectors(Yn,is),s[0]=is.x,s[4]=ka.x,s[8]=Yn.x,s[1]=is.y,s[5]=ka.y,s[9]=Yn.y,s[2]=is.z,s[6]=ka.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],v=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],T=n[15],w=s[0],A=s[4],P=s[8],E=s[12],S=s[1],R=s[5],L=s[9],D=s[13],F=s[2],V=s[6],X=s[10],oe=s[14],Q=s[3],Me=s[7],ve=s[11],Y=s[15];return r[0]=a*w+o*S+l*F+c*Q,r[4]=a*A+o*R+l*V+c*Me,r[8]=a*P+o*L+l*X+c*ve,r[12]=a*E+o*D+l*oe+c*Y,r[1]=h*w+u*S+d*F+f*Q,r[5]=h*A+u*R+d*V+f*Me,r[9]=h*P+u*L+d*X+f*ve,r[13]=h*E+u*D+d*oe+f*Y,r[2]=_*w+v*S+m*F+p*Q,r[6]=_*A+v*R+m*V+p*Me,r[10]=_*P+v*L+m*X+p*ve,r[14]=_*E+v*D+m*oe+p*Y,r[3]=y*w+M*S+x*F+T*Q,r[7]=y*A+M*R+x*V+T*Me,r[11]=y*P+M*L+x*X+T*ve,r[15]=y*E+M*D+x*oe+T*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,M=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-_*u*c+_*o*f-a*v*f-h*o*p+a*u*p,T=_*u*l-h*v*l-_*o*d+a*v*d+h*o*m-a*u*m,w=t*y+n*M+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=M*A,e[5]=(h*m*r-_*d*r+_*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=x*A,e[9]=(_*u*r-h*v*r-_*n*f+t*v*f+h*n*p-t*u*p)*A,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=T*A,e[13]=(h*v*s-_*u*s+_*n*d-t*v*d-h*n*m+t*u*m)*A,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,v=a*h,m=a*u,p=o*u,y=l*c,M=l*h,x=l*u,T=n.x,w=n.y,A=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+x)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(_+M)*A,s[9]=(m-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);const c=1/r,h=1/a,u=1/o;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=qi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,_;if(o===qi)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ho)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h;let _,v;if(o===qi)_=(a+r)*u,v=-2*u;else if(o===Ho)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new U,di=new ct,cv=new U(0,0,0),uv=new U(1,1,1),is=new U,ka=new U,Yn=new U,Sh=new ct,Eh=new Ci;class Pi{constructor(e=0,t=0,n=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hv=0;const Th=new U,qs=new Ci,Oi=new ct,za=new U,Gr=new U,dv=new U,fv=new Ci,Ah=new U(1,0,0),wh=new U(0,1,0),Rh=new U(0,0,1),Ch={type:"added"},pv={type:"removed"},js={type:"childadded",child:null},_l={type:"childremoved",child:null};class Kt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new U,t=new Pi,n=new Ci,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new _t}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Gr,za,this.up):Oi.lookAt(za,Gr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Oi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pv),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,dv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new U,Bi=new U,gl=new U,ki=new U,Ys=new U,Ks=new U,Ph=new U,vl=new U,xl=new U,yl=new U,bl=new Ut,Ml=new Ut,Sl=new Ut;class bn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Bi.subVectors(n,t),gl.subVectors(e,t);const a=fi.dot(fi),o=fi.dot(Bi),l=fi.dot(gl),c=Bi.dot(Bi),h=Bi.dot(gl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return bl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),bl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(Ml,r.y),a.addScaledVector(Sl,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Bi.subVectors(e,t),fi.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),fi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ys.subVectors(s,n),Ks.subVectors(r,n),vl.subVectors(e,n);const l=Ys.dot(vl),c=Ks.dot(vl);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,s);const h=Ys.dot(xl),u=Ks.dot(xl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);yl.subVectors(e,r);const f=Ys.dot(yl),_=Ks.dot(yl);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ks,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Ph.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Ph,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Va={h:0,s:0,l:0};function El(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=xu(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=El(a,r,e+1/3),this.g=El(a,r,e),this.b=El(a,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=Wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Et.fromWorkingColorSpace(En.copy(this),e),Math.round(gn(En.r*255,0,255))*65536+Math.round(gn(En.g*255,0,255))*256+Math.round(gn(En.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(En.copy(this),t);const n=En.r,s=En.g,r=En.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=an){Et.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,s=En.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Va);const n=ua(ss.h,Va.h,t),s=ua(ss.s,Va.s,t),r=ua(ss.l,Va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new lt;lt.NAMES=Wf;let mv=0;class Ri extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=xi(),this.name="",this.blending=vr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends Ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new U,Ha=new at;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class Xf extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qf extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class oi extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _v=0;const ni=new ct,Tl=new Kt,Zs=new U,Kn=new qt,Wr=new qt,_n=new U;class ti extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vf(e)?qf:Xf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oi(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Kn.min,Wr.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Wr.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Wr.min),Kn.expandByPoint(Wr.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_n.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),_n.add(Zs)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new U,l[P]=new U;const c=new U,h=new U,u=new U,d=new at,f=new at,_=new at,v=new U,m=new U;function p(P,E,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(R),o[P].add(v),o[E].add(v),o[S].add(v),l[P].add(m),l[E].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){const S=y[P],R=S.start,L=S.count;for(let D=R,F=R+L;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const M=new U,x=new U,T=new U,w=new U;function A(P){T.fromBufferAttribute(s,P),w.copy(T);const E=o[P];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(w,E);const R=x.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,E=y.length;P<E;++P){const S=y[P],R=S.start,L=S.count;for(let D=R,F=R+L;D<F;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new ct,bs=new Bs,Ga=new Nn,Ih=new U,Wa=new U,Xa=new U,qa=new U,Al=new U,ja=new U,Dh=new U,Ya=new U;class Lt extends Kt{constructor(e=new ti,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Al.fromBufferAttribute(u,e),a?ja.addScaledVector(Al,h):ja.addScaledVector(Al.sub(t),h))}t.add(ja)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(Ga.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ga,Ih)===null||bs.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const w=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);s=Ka(this,p,e,n,c,h,u,w,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=Ka(this,a,e,n,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const w=x,A=x+1,P=x+2;s=Ka(this,p,e,n,c,h,u,w,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const y=m,M=m+1,x=m+2;s=Ka(this,a,e,n,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function gv(i,e,t,n,s,r,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:i}}function Ka(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Wa),i.getVertexPosition(l,Xa),i.getVertexPosition(c,qa);const h=gv(i,e,t,n,Wa,Xa,qa,Dh);if(h){const u=new U;bn.getBarycoord(Dh,Wa,Xa,qa,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};bn.getNormal(Wa,Xa,qa,d.normal),h.face=d,h.barycoord=u}return h}class Ur extends ti{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(u,2));function _(v,m,p,y,M,x,T,w,A,P,E){const S=x/A,R=T/P,L=x/2,D=T/2,F=w/2,V=A+1,X=P+1;let oe=0,Q=0;const Me=new U;for(let ve=0;ve<X;ve++){const Y=ve*R-D;for(let re=0;re<V;re++){const ye=re*S-L;Me[v]=ye*y,Me[m]=Y*M,Me[p]=F,c.push(Me.x,Me.y,Me.z),Me[v]=0,Me[m]=0,Me[p]=w>0?1:-1,h.push(Me.x,Me.y,Me.z),u.push(re/A),u.push(1-ve/P),oe+=1}}for(let ve=0;ve<P;ve++)for(let Y=0;Y<A;Y++){const re=d+Y+V*ve,ye=d+Y+V*(ve+1),q=d+(Y+1)+V*(ve+1),G=d+(Y+1)+V*ve;l.push(re,ye,G),l.push(ye,q,G),Q+=6}o.addGroup(f,Q,E),f+=Q,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const s in n)e[s]=n[s]}return e}function vv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const xv={clone:Pr,merge:In};var yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new U,Uh=new at,Nh=new at;class Dn extends Yf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Qs=1;class Mv extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Js,Qs,e,t);s.layers=this.layers,this.add(s);const r=new Dn(Js,Qs,e,t);r.layers=this.layers,this.add(r);const a=new Dn(Js,Qs,e,t);a.layers=this.layers,this.add(a);const o=new Dn(Js,Qs,e,t);o.layers=this.layers,this.add(o);const l=new Dn(Js,Qs,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kf extends xn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sv extends Fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ur(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ms});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Qn),new Mv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const wl=new U,Ev=new U,Tv=new _t;class _i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=wl.subVectors(n,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tv.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Nn,Za=new U;class Jo{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],v=s[10],m=s[11],p=s[12],y=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+_,x+y).normalize(),n[3].setComponents(l-a,d-h,m-_,x-y).normalize(),n[4].setComponents(l-o,d-u,m-v,x-M).normalize(),t===qi)n[5].setComponents(l+o,d+u,m+v,x+M).normalize();else if(t===Ho)n[5].setComponents(o,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Za.x=s.normal.x>0?e.max.x:e.min.x,Za.y=s.normal.y>0?e.max.y:e.min.y,Za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Av(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],v=u[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Qo extends ti{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let M=0;M<c;M++){const x=M*u-r;_.push(x,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),w=y+1+c*p;f.push(M,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
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
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
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
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zv=`#ifdef USE_IRIDESCENCE
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
#endif`,Vv=`#ifdef USE_BUMPMAP
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zv=`#define PI 3.141592653589793
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
} // validated`,Jv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qv=`vec3 transformedNormal = objectNormal;
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
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Tx=`struct PhysicalMaterial {
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
}`,Ax=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fx=`#if defined( USE_POINTS_UV )
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
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Dy=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Ny=`#define DISTANCE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Hy=`#define LAMBERT
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,Yy=`#define PHONG
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
}`,Ky=`#define PHONG
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
}`,Zy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,Qy=`#define TOON
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
}`,$y=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:wv,alphahash_pars_fragment:Rv,alphamap_fragment:Cv,alphamap_pars_fragment:Pv,alphatest_fragment:Lv,alphatest_pars_fragment:Iv,aomap_fragment:Dv,aomap_pars_fragment:Uv,batching_pars_vertex:Nv,batching_vertex:Fv,begin_vertex:Ov,beginnormal_vertex:Bv,bsdfs:kv,iridescence_fragment:zv,bumpmap_pars_fragment:Vv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:Xv,color_fragment:qv,color_pars_fragment:jv,color_pars_vertex:Yv,color_vertex:Kv,common:Zv,cube_uv_reflection_fragment:Jv,defaultnormal_vertex:Qv,displacementmap_pars_vertex:$v,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:sx,envmap_fragment:rx,envmap_common_pars_fragment:ax,envmap_pars_fragment:ox,envmap_pars_vertex:lx,envmap_physical_pars_fragment:xx,envmap_vertex:cx,fog_vertex:ux,fog_pars_vertex:hx,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:gx,lights_pars_begin:vx,lights_toon_fragment:yx,lights_toon_pars_fragment:bx,lights_phong_fragment:Mx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Tx,lights_fragment_begin:Ax,lights_fragment_maps:wx,lights_fragment_end:Rx,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Ix,map_fragment:Dx,map_pars_fragment:Ux,map_particle_fragment:Nx,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:kx,morphcolor_vertex:zx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:qx,normal_pars_vertex:jx,normal_vertex:Yx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:$x,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:ay,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:fy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:_y,specularmap_pars_fragment:gy,tonemapping_fragment:vy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:by,uv_pars_fragment:My,uv_pars_vertex:Sy,uv_vertex:Ey,worldpos_vertex:Ty,background_vert:Ay,background_frag:wy,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Py,cube_frag:Ly,depth_vert:Iy,depth_frag:Dy,distanceRGBA_vert:Uy,distanceRGBA_frag:Ny,equirect_vert:Fy,equirect_frag:Oy,linedashed_vert:By,linedashed_frag:ky,meshbasic_vert:zy,meshbasic_frag:Vy,meshlambert_vert:Hy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:jy,meshphong_vert:Yy,meshphong_frag:Ky,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:Qy,meshtoon_frag:$y,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},je={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},wi={basic:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new lt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new lt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([je.points,je.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([je.common,je.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([je.sprite,je.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([je.common,je.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([je.lights,je.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};wi.physical={uniforms:In([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ja={r:0,b:0,g:0},Ss=new Pi,a0=new ct;function o0(i,e,t,n,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function v(y){let M=!1;const x=_(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){const x=_(M);x&&(x.isCubeTexture||x.mapping===Yo)?(h===void 0&&(h=new Lt(new Ur(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Pr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(M.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Ss)),h.material.toneMapped=Et.getTransfer(x.colorSpace)!==Gt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Lt(new Qo(2,2),new Ki({name:"BackgroundMaterial",uniforms:Pr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Et.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Ja,jf(i)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function l0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,R,L,D,F){let V=!1;const X=u(D,L,R);r!==X&&(r=X,c(r.object)),V=f(S,D,L,F),V&&_(S,D,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(S,R,L,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,L){const D=L.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let V=F[R.id];V===void 0&&(V={},F[R.id]=V);let X=V[D];return X===void 0&&(X=d(l()),V[D]=X),X}function d(S){const R=[],L=[],D=[];for(let F=0;F<t;F++)R[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:S,attributes:{},index:null}}function f(S,R,L,D){const F=r.attributes,V=R.attributes;let X=0;const oe=L.getAttributes();for(const Q in oe)if(oe[Q].location>=0){const ve=F[Q];let Y=V[Q];if(Y===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),ve===void 0||ve.attribute!==Y||Y&&ve.data!==Y.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function _(S,R,L,D){const F={},V=R.attributes;let X=0;const oe=L.getAttributes();for(const Q in oe)if(oe[Q].location>=0){let ve=V[Q];ve===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Y={};Y.attribute=ve,ve&&ve.data&&(Y.data=ve.data),F[Q]=Y,X++}r.attributes=F,r.attributesNum=X,r.index=D}function v(){const S=r.newAttributes;for(let R=0,L=S.length;R<L;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const L=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;L[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),F[S]!==R&&(i.vertexAttribDivisor(S,R),F[S]=R)}function y(){const S=r.newAttributes,R=r.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==S[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function M(S,R,L,D,F,V,X){X===!0?i.vertexAttribIPointer(S,R,L,F,V):i.vertexAttribPointer(S,R,L,D,F,V)}function x(S,R,L,D){v();const F=D.attributes,V=L.getAttributes(),X=R.defaultAttributeValues;for(const oe in V){const Q=V[oe];if(Q.location>=0){let Me=F[oe];if(Me===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),Me!==void 0){const ve=Me.normalized,Y=Me.itemSize,re=e.get(Me);if(re===void 0)continue;const ye=re.buffer,q=re.type,G=re.bytesPerElement,$=q===i.INT||q===i.UNSIGNED_INT||Me.gpuType===fu;if(Me.isInterleavedBufferAttribute){const ie=Me.data,Re=ie.stride,Pe=Me.offset;if(ie.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Q.locationSize;Fe++)p(Q.location+Fe,ie.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Fe=0;Fe<Q.locationSize;Fe++)m(Q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Fe=0;Fe<Q.locationSize;Fe++)M(Q.location+Fe,Y/Q.locationSize,q,ve,Re*G,(Pe+Y/Q.locationSize*Fe)*G,$)}else{if(Me.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,Me.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ie=0;ie<Q.locationSize;ie++)M(Q.location+ie,Y/Q.locationSize,q,ve,Y*G,Y/Q.locationSize*ie*G,$)}}else if(X!==void 0){const ve=X[oe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Q.location,ve);break;case 3:i.vertexAttrib3fv(Q.location,ve);break;case 4:i.vertexAttrib4fv(Q.location,ve);break;default:i.vertexAttrib1fv(Q.location,ve)}}}}y()}function T(){P();for(const S in n){const R=n[S];for(const L in R){const D=R[L];for(const F in D)h(D[F].object),delete D[F];delete R[L]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const L in R){const D=R[L];for(const F in D)h(D[F].object),delete D[F];delete R[L]}delete n[S.id]}function A(S){for(const R in n){const L=n[R];if(L[S.id]===void 0)continue;const D=L[S.id];for(const F in D)h(D[F].object),delete D[F];delete L[S.id]}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function c0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*d[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function u0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function h0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new _i,o=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let x=p.clippingState||null;l.value=x,x=h(_,d,M,f);for(let T=0;T!==M;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function d0(i){let e=new WeakMap;function t(a,o){return o===xc?a.mapping=Er:o===yc&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xc||o===yc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sv(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Mu extends Yf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,Fh=[.125,.215,.35,.446,.526,.582],Us=20,Rl=new Mu,Oh=new lt;let Cl=null,Pl=0,Ll=0,Il=!1;const Is=(1+Math.sqrt(5))/2,$s=1/Is,Bh=[new U(-Is,$s,0),new U(Is,$s,0),new U(-$s,0,Is),new U($s,0,Is),new U(0,Is,-$s),new U(0,Is,$s),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cl,Pl,Ll),this._renderer.xr.enabled=Il,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:wa,format:Xn,colorSpace:Fn,depthBuffer:!1},s=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,e,t)}return s}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,n,s){const o=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oh),h.toneMapping=_s,h.autoClear=!1;const f=new hs({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new Lt(new Ur,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Oh),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Qa(s,y*M,p>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Er||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bh[(s-r-1)%Bh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Lt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Us-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Us;m>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const p=[];let y=0;for(let A=0;A<Us;++A){const P=A/v,E=Math.exp(-P*P/2);p.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const x=this._sizeLods[s],T=3*x*(s>M-mr?s-M+mr:0),w=4*(this._cubeSize-x);Qa(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Rl)}}function f0(i){const e=[],t=[],n=[];let s=i;const r=i-mr+1+Fh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mr?l=Fh[a-i+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,v=3,m=2,p=1,y=new Float32Array(v*_*f),M=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,P=w>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(E,v*_*w),M.set(d,m*_*w);const S=[w,w,w,w,w,w];x.set(S,p*_*w)}const T=new ti;T.setAttribute("position",new dn(y,v)),T.setAttribute("uv",new dn(M,m)),T.setAttribute("faceIndex",new dn(x,p)),e.push(T),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(i,e,t){const n=new Fs(i,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p0(i,e,t){const n=new Float32Array(Us),s=new U(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function zh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Vh(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function m0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xc||l===yc,h=l===Er||l===Tr;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Kc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Kc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let M=0,x=y.length;M<x;M+=3){const T=y[M+0],w=y[M+1],A=y[M+2];d.push(T,w,w,A,A,T)}}else if(_!==void 0){const y=_.array;v=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const T=M+0,w=M+1,A=M+2;d.push(T,w,w,A,A,T)}}else return;const m=new(Vf(d)?qf:Xf)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function v0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*a,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function u(d,f,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,e,t){const n=new WeakMap,s=new Ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*T*4*u),A=new Gf(w,x,T,u);A.type=$n,A.needsUpdate=!0;const P=M*4;for(let S=0;S<u;S++){const R=m[S],L=p[S],D=y[S],F=x*T*4*S;for(let V=0;V<R.count;V++){const X=V*P;f===!0&&(s.fromBufferAttribute(R,V),w[F+X+0]=s.x,w[F+X+1]=s.y,w[F+X+2]=s.z,w[F+X+3]=0),_===!0&&(s.fromBufferAttribute(L,V),w[F+X+4]=s.x,w[F+X+5]=s.y,w[F+X+6]=s.z,w[F+X+7]=0),v===!0&&(s.fromBufferAttribute(D,V),w[F+X+8]=s.x,w[F+X+9]=s.y,w[F+X+10]=s.z,w[F+X+11]=D.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new at(x,T)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function b0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Jf extends xn{constructor(e,t,n,s,r,a,o,l,c,h=xr){if(h!==xr&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=gs),n===void 0&&h===Rr&&(n=wr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qf=new xn,Hh=new Jf(1,1),$f=new Gf,ep=new ov,tp=new Kf,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),jh=new Float32Array(4);function Nr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function A0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),pn(t,n)}}function w0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),pn(t,n)}}function R0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),pn(t,n)}}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function D0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function O0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=zf,r=Hh):r=Qf,t.setTexture2D(e||r,s)}function B0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ep,s)}function k0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tp,s)}function z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$f,s)}function V0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(i,e){i.uniform1fv(this.addr,e)}function G0(i,e){const t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function W0(i,e){const t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function X0(i,e){const t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function q0(i,e){const t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function j0(i,e){const t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y0(i,e){const t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K0(i,e){i.uniform1iv(this.addr,e)}function Z0(i,e){i.uniform2iv(this.addr,e)}function J0(i,e){i.uniform3iv(this.addr,e)}function Q0(i,e){i.uniform4iv(this.addr,e)}function $0(i,e){i.uniform1uiv(this.addr,e)}function eb(i,e){i.uniform2uiv(this.addr,e)}function tb(i,e){i.uniform3uiv(this.addr,e)}function nb(i,e){i.uniform4uiv(this.addr,e)}function ib(i,e,t){const n=this.cache,s=e.length,r=$o(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Qf,r[a])}function sb(i,e,t){const n=this.cache,s=e.length,r=$o(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ep,r[a])}function rb(i,e,t){const n=this.cache,s=e.length,r=$o(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tp,r[a])}function ab(i,e,t){const n=this.cache,s=e.length,r=$o(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$f,r[a])}function ob(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return j0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return $0;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}class lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}}class cb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ob(t.type)}}class ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function Yh(i,e){i.seq.push(e),i.map[e.id]=e}function hb(i,e,t){const n=i.name,s=n.length;for(Dl.lastIndex=0;;){const r=Dl.exec(n),a=Dl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yh(t,c===void 0?new lb(o,i,e):new cb(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ub(o),Yh(t,u)),t=u}}}class Uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hb(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Kh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const db=37297;let fb=0;function pb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zh=new _t;function mb(i){Et._getMatrix(Zh,Et.workingColorSpace,i);const e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Zo:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pb(i.getShaderSource(e),a)}else return s}function _b(i,e){const t=mb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gb(i,e){let t;switch(e){case vg:t="Linear";break;case xg:t="Reinhard";break;case yg:t="Cineon";break;case Af:t="ACESFilmic";break;case Mg:t="AgX";break;case Sg:t="Neutral";break;case bg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new U;function vb(){Et.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function yb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ra(i){return i!==""}function Qh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(Mb,Eb)}const Sb=new Map;function Eb(i,e){let t=vt[e];if(t===void 0){const n=Sb.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(Tb,Ab)}function Ab(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case _g:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ib(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wb(t),c=Rb(t),h=Cb(t),u=Pb(t),d=Lb(t),f=xb(t),_=yb(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?vt.tonemapping_pars_fragment:"",t.toneMapping!==_s?gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,_b("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=Zc(a),a=Qh(a,t),a=$h(a,t),o=Zc(o),o=Qh(o,t),o=$h(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,x=y+p+o,T=Kh(s,s.VERTEX_SHADER,M),w=Kh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,T),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(w).trim();let V=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{const oe=Jh(s,T,"vertex"),Q=Jh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+oe+`
`+Q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(X=!1);X&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(w),P=new Uo(s,v),E=bb(s,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,db)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let Db=0;class Ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nb(e),t.set(e,n)),n}}class Nb{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}}function Fb(i,e,t,n,s,r,a){const o=new bu,l=new Ub,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,L,D){const F=L.fog,V=D.geometry,X=E.isMeshStandardMaterial?L.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),Q=oe&&oe.mapping===Yo?oe.image.height:null,Me=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=ve!==void 0?ve.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let ye,q,G,$;if(Me){const rt=wi[Me];ye=rt.vertexShader,q=rt.fragmentShader}else ye=E.vertexShader,q=E.fragmentShader,l.update(E),G=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const ie=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,Fe=D.isBatchedMesh===!0,Le=!!E.map,Ue=!!E.matcap,Oe=!!oe,k=!!E.aoMap,$e=!!E.lightMap,Ye=!!E.bumpMap,We=!!E.normalMap,Ge=!!E.displacementMap,st=!!E.emissiveMap,Ce=!!E.metalnessMap,I=!!E.roughnessMap,b=E.anisotropy>0,O=E.clearcoat>0,Z=E.dispersion>0,ue=E.iridescence>0,le=E.sheen>0,He=E.transmission>0,Te=b&&!!E.anisotropyMap,me=O&&!!E.clearcoatMap,Ne=O&&!!E.clearcoatNormalMap,ee=O&&!!E.clearcoatRoughnessMap,_e=ue&&!!E.iridescenceMap,Ie=ue&&!!E.iridescenceThicknessMap,Ae=le&&!!E.sheenColorMap,de=le&&!!E.sheenRoughnessMap,Be=!!E.specularMap,ke=!!E.specularColorMap,Je=!!E.specularIntensityMap,B=He&&!!E.transmissionMap,be=He&&!!E.thicknessMap,ne=!!E.gradientMap,J=!!E.alphaMap,fe=E.alphaTest>0,Se=!!E.alphaHash,Ke=!!E.extensions;let ft=_s;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=i.toneMapping);const ut={shaderID:Me,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:q,defines:E.defines,customVertexShaderID:G,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Fn,alphaToCoverage:!!E.alphaToCoverage,map:Le,matcap:Ue,envMap:Oe,envMapMode:Oe&&oe.mapping,envMapCubeUVHeight:Q,aoMap:k,lightMap:$e,bumpMap:Ye,normalMap:We,displacementMap:d&&Ge,emissiveMap:st,normalMapObjectSpace:We&&E.normalMapType===Cg,normalMapTangentSpace:We&&E.normalMapType===kf,metalnessMap:Ce,roughnessMap:I,anisotropy:b,anisotropyMap:Te,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ee,dispersion:Z,iridescence:ue,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:le,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:Be,specularColorMap:ke,specularIntensityMap:Je,transmission:He,transmissionMap:B,thicknessMap:be,gradientMap:ne,opaque:E.transparent===!1&&E.blending===vr&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:Se,combine:E.combine,mapUv:Le&&v(E.map.channel),aoMapUv:k&&v(E.aoMap.channel),lightMapUv:$e&&v(E.lightMap.channel),bumpMapUv:Ye&&v(E.bumpMap.channel),normalMapUv:We&&v(E.normalMap.channel),displacementMapUv:Ge&&v(E.displacementMap.channel),emissiveMapUv:st&&v(E.emissiveMap.channel),metalnessMapUv:Ce&&v(E.metalnessMap.channel),roughnessMapUv:I&&v(E.roughnessMap.channel),anisotropyMapUv:Te&&v(E.anisotropyMap.channel),clearcoatMapUv:me&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(E.sheenRoughnessMap.channel),specularMapUv:Be&&v(E.specularMap.channel),specularColorMapUv:ke&&v(E.specularColorMap.channel),specularIntensityMapUv:Je&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:be&&v(E.thicknessMap.channel),alphaMapUv:J&&v(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(We||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Le||J),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Le&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Gt,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gn,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ke&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&E.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(S,E),M(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const S=_[E.type];let R;if(S){const L=wi[S];R=xv.clone(L.uniforms)}else R=E.uniforms;return R}function T(E,S){let R;for(let L=0,D=h.length;L<D;L++){const F=h[L];if(F.cacheKey===S){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Ib(i,S,E,r),h.push(R)),R}function w(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function Ob(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function id(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,_,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,_,v,m){const p=a(u,d,f,_,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,_,v,m){const p=a(u,d,f,_,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Bb),n.length>1&&n.sort(d||nd),s.length>1&&s.sort(d||nd)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function kb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new lt};break;case"SpotLight":t={position:new U,direction:new U,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Vb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hb=0;function Gb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wb(i){const e=new zb,t=Vb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new ct,a=new ct;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,y=0,M=0,x=0,T=0,w=0,A=0;c.sort(Gb);for(let E=0,S=c.length;E<S;E++){const R=c[E],L=R.color,D=R.intensity,F=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*D,u+=L.g*D,d+=L.b*D;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],D);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const oe=R.shadow,Q=t.get(R);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=X,f++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(L).multiplyScalar(D),X.distance=F,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;const oe=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,oe.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=oe.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=V,x++}v++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(L).multiplyScalar(D),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const oe=R.shadow,Q=t.get(R);Q.shadowIntensity=oe.intensity,Q.shadowBias=oe.bias,Q.shadowNormalBias=oe.normalBias,Q.shadowRadius=oe.radius,Q.shadowMapSize=oe.mapSize,Q.shadowCameraNear=oe.camera.near,Q.shadowCameraFar=oe.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=R.shadow.matrix,M++}n.point[_]=X,_++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(D),X.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=je.LTC_FLOAT_1,n.rectAreaLTC2=je.LTC_FLOAT_2):(n.rectAreaLTC1=je.LTC_HALF_1,n.rectAreaLTC2=je.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=f,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=A,n.version=Hb++)}function l(c,h){let u=0,d=0,f=0,_=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function sd(i){const e=new Wb(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xb(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sd(i),e.set(s,[o])):r>=a.length?(o=new sd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class qb extends Ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jb extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`;function Zb(i,e,t){let n=new Jo;const s=new at,r=new at,a=new Ut,o=new qb({depthPacking:Rg}),l=new jb,c={},h=t.maxTextureSize,u={[li]:Rn,[Rn]:li,[Gn]:Gn},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ms),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==Vi&&this.type===Vi,F=p===Vi&&this.type!==Vi;for(let V=0,X=w.length;V<X;V++){const oe=w[V],Q=oe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Me=Q.getFrameExtents();if(s.multiply(Me),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Me.x),s.x=r.x*Me.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Me.y),s.y=r.y*Me.y,Q.mapSize.y=r.y)),Q.map===null||D===!0||F===!0){const Y=this.type!==Vi?{minFilter:Un,magFilter:Un}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Fs(s.x,s.y,Y),Q.map.texture.name=oe.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const ve=Q.getViewportCount();for(let Y=0;Y<ve;Y++){const re=Q.getViewport(Y);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),L.viewport(a),Q.updateMatrices(oe,Y),n=Q.getFrustum(),x(A,P,Q.camera,oe,this.type)}Q.isPointLightShadow!==!0&&this.type===Vi&&y(Q,P),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,R)};function y(w,A){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fs(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,f,v,null)}function M(w,A,P,E){let S=null;const R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=S.uuid,D=A.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let V=F[D];V===void 0&&(V=S.clone(),F[D]=V,A.addEventListener("dispose",T)),S=V}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Vi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=i.properties.get(S);L.light=P}return S}function x(w,A,P,E,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=e.update(w),F=w.material;if(Array.isArray(F)){const V=D.groups;for(let X=0,oe=V.length;X<oe;X++){const Q=V[X],Me=F[Q.materialIndex];if(Me&&Me.visible){const ve=M(w,Me,E,S);w.onBeforeShadow(i,w,A,P,D,ve,Q),i.renderBufferDirect(P,null,D,ve,w,Q),w.onAfterShadow(i,w,A,P,D,ve,Q)}}}else if(F.visible){const V=M(w,F,E,S);w.onBeforeShadow(i,w,A,P,D,V,null),i.renderBufferDirect(P,null,D,V,w,null),w.onAfterShadow(i,w,A,P,D,V,null)}}const L=w.children;for(let D=0,F=L.length;D<F;D++)x(L[D],A,P,E,S)}function T(w){w.target.removeEventListener("dispose",T);for(const P in c){const E=c[P],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Jb={[dc]:fc,[pc]:gc,[mc]:vc,[Sr]:_c,[fc]:dc,[gc]:pc,[vc]:mc,[_c]:Sr};function Qb(i,e){function t(){let B=!1;const be=new Ut;let ne=null;const J=new Ut(0,0,0,0);return{setMask:function(fe){ne!==fe&&!B&&(i.colorMask(fe,fe,fe,fe),ne=fe)},setLocked:function(fe){B=fe},setClear:function(fe,Se,Ke,ft,ut){ut===!0&&(fe*=ft,Se*=ft,Ke*=ft),be.set(fe,Se,Ke,ft),J.equals(be)===!1&&(i.clearColor(fe,Se,Ke,ft),J.copy(be))},reset:function(){B=!1,ne=null,J.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,ne=null,J=null,fe=null;return{setReversed:function(Se){if(be!==Se){const Ke=e.get("EXT_clip_control");be?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const ft=fe;fe=null,this.setClear(ft)}be=Se},getReversed:function(){return be},setTest:function(Se){Se?ie(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Se){ne!==Se&&!B&&(i.depthMask(Se),ne=Se)},setFunc:function(Se){if(be&&(Se=Jb[Se]),J!==Se){switch(Se){case dc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case pc:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case _c:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=Se}},setLocked:function(Se){B=Se},setClear:function(Se){fe!==Se&&(be&&(Se=1-Se),i.clearDepth(Se),fe=Se)},reset:function(){B=!1,ne=null,J=null,fe=null,be=!1}}}function s(){let B=!1,be=null,ne=null,J=null,fe=null,Se=null,Ke=null,ft=null,ut=null;return{setTest:function(rt){B||(rt?ie(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(rt){be!==rt&&!B&&(i.stencilMask(rt),be=rt)},setFunc:function(rt,At,bt){(ne!==rt||J!==At||fe!==bt)&&(i.stencilFunc(rt,At,bt),ne=rt,J=At,fe=bt)},setOp:function(rt,At,bt){(Se!==rt||Ke!==At||ft!==bt)&&(i.stencilOp(rt,At,bt),Se=rt,Ke=At,ft=bt)},setLocked:function(rt){B=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){B=!1,be=null,ne=null,J=null,fe=null,Se=null,Ke=null,ft=null,ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,v=!1,m=null,p=null,y=null,M=null,x=null,T=null,w=null,A=new lt(0,0,0),P=0,E=!1,S=null,R=null,L=null,D=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,oe=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=oe>=1):Q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=oe>=2);let Me=null,ve={};const Y=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ye=new Ut().fromArray(Y),q=new Ut().fromArray(re);function G(B,be,ne,J){const fe=new Uint8Array(4),Se=i.createTexture();i.bindTexture(B,Se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ne;Ke++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(be+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Se}const $={};$[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Sr),Ye(!1),We(rh),ie(i.CULL_FACE),k(ms);function ie(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Re(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Pe(B,be){return u[B]!==be?(i.bindFramebuffer(B,be),u[B]=be,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Fe(B,be){let ne=f,J=!1;if(B){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));const fe=B.textures;if(ne.length!==fe.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Ke=fe.length;Se<Ke;Se++)ne[Se]=i.COLOR_ATTACHMENT0+Se;ne.length=fe.length,J=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,J=!0);J&&i.drawBuffers(ne)}function Le(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const Ue={[Ds]:i.FUNC_ADD,[$_]:i.FUNC_SUBTRACT,[eg]:i.FUNC_REVERSE_SUBTRACT};Ue[tg]=i.MIN,Ue[ng]=i.MAX;const Oe={[ig]:i.ZERO,[sg]:i.ONE,[rg]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[hg]:i.SRC_ALPHA_SATURATE,[cg]:i.DST_COLOR,[og]:i.DST_ALPHA,[ag]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[ug]:i.ONE_MINUS_DST_COLOR,[lg]:i.ONE_MINUS_DST_ALPHA,[dg]:i.CONSTANT_COLOR,[fg]:i.ONE_MINUS_CONSTANT_COLOR,[pg]:i.CONSTANT_ALPHA,[mg]:i.ONE_MINUS_CONSTANT_ALPHA};function k(B,be,ne,J,fe,Se,Ke,ft,ut,rt){if(B===ms){v===!0&&(Re(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),B!==Q_){if(B!==m||rt!==E){if((p!==Ds||x!==Ds)&&(i.blendEquation(i.FUNC_ADD),p=Ds,x=Ds),rt)switch(B){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,M=null,T=null,w=null,A.set(0,0,0),P=0,m=B,E=rt}return}fe=fe||be,Se=Se||ne,Ke=Ke||J,(be!==p||fe!==x)&&(i.blendEquationSeparate(Ue[be],Ue[fe]),p=be,x=fe),(ne!==y||J!==M||Se!==T||Ke!==w)&&(i.blendFuncSeparate(Oe[ne],Oe[J],Oe[Se],Oe[Ke]),y=ne,M=J,T=Se,w=Ke),(ft.equals(A)===!1||ut!==P)&&(i.blendColor(ft.r,ft.g,ft.b,ut),A.copy(ft),P=ut),m=B,E=!1}function $e(B,be){B.side===Gn?Re(i.CULL_FACE):ie(i.CULL_FACE);let ne=B.side===Rn;be&&(ne=!ne),Ye(ne),B.blending===vr&&B.transparent===!1?k(ms):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const J=B.stencilWrite;o.setTest(J),J&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),st(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(B){S!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),S=B)}function We(B){B!==K_?(ie(i.CULL_FACE),B!==R&&(B===rh?i.cullFace(i.BACK):B===Z_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),R=B}function Ge(B){B!==L&&(X&&i.lineWidth(B),L=B)}function st(B,be,ne){B?(ie(i.POLYGON_OFFSET_FILL),(D!==be||F!==ne)&&(i.polygonOffset(be,ne),D=be,F=ne)):Re(i.POLYGON_OFFSET_FILL)}function Ce(B){B?ie(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function I(B){B===void 0&&(B=i.TEXTURE0+V-1),Me!==B&&(i.activeTexture(B),Me=B)}function b(B,be,ne){ne===void 0&&(Me===null?ne=i.TEXTURE0+V-1:ne=Me);let J=ve[ne];J===void 0&&(J={type:void 0,texture:void 0},ve[ne]=J),(J.type!==B||J.texture!==be)&&(Me!==ne&&(i.activeTexture(ne),Me=ne),i.bindTexture(B,be||$[B]),J.type=B,J.texture=be)}function O(){const B=ve[Me];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(B){ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function de(B){q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),q.copy(B))}function Be(B,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let J=ne.get(B);J===void 0&&(J=i.getUniformBlockIndex(be,B.name),ne.set(B,J))}function ke(B,be){const J=c.get(be).get(B);l.get(be)!==J&&(i.uniformBlockBinding(be,J,B.__bindingPointIndex),l.set(be,J))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Me=null,ve={},u={},d=new WeakMap,f=[],_=null,v=!1,m=null,p=null,y=null,M=null,x=null,T=null,w=null,A=new lt(0,0,0),P=0,E=!1,S=null,R=null,L=null,D=null,F=null,ye.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Re,bindFramebuffer:Pe,drawBuffers:Fe,useProgram:Le,setBlending:k,setMaterial:$e,setFlipSided:Ye,setCullFace:We,setLineWidth:Ge,setPolygonOffset:st,setScissorTest:Ce,activeTexture:I,bindTexture:b,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:ue,texImage2D:_e,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:ke,texStorage2D:Ne,texStorage3D:ee,texSubImage2D:le,texSubImage3D:He,compressedTexSubImage2D:Te,compressedTexSubImage3D:me,scissor:Ae,viewport:de,reset:Je}}function rd(i,e,t,n){const s=$b(n);switch(t){case If:return i*e;case Uf:return i*e;case Nf:return i*e*2;case _u:return i*e/s.components*s.byteLength;case Ko:return i*e/s.components*s.byteLength;case Ff:return i*e*2/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case Df:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case vu:return i*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:case Ec:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Sc:return Math.max(i,8)*Math.max(e,8)/2;case Tc:case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Do:case Hc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Of:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xc:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $b(i){switch(i){case Yi:case Cf:return{byteLength:1,components:1};case ma:case Pf:case wa:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case gs:case fu:case $n:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function eM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return f?new OffscreenCanvas(I,b):va("canvas")}function v(I,b,O){let Z=1;const ue=Ce(I);if((ue.width>O||ue.height>O)&&(Z=O/Math.max(ue.width,ue.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const le=Math.floor(Z*ue.width),He=Math.floor(Z*ue.height);u===void 0&&(u=_(le,He));const Te=b?_(le,He):u;return Te.width=le,Te.height=He,Te.getContext("2d").drawImage(I,0,0,le,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+le+"x"+He+")."),Te}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,b,O,Z,ue=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let le=b;if(b===i.RED&&(O===i.FLOAT&&(le=i.R32F),O===i.HALF_FLOAT&&(le=i.R16F),O===i.UNSIGNED_BYTE&&(le=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(le=i.R8UI),O===i.UNSIGNED_SHORT&&(le=i.R16UI),O===i.UNSIGNED_INT&&(le=i.R32UI),O===i.BYTE&&(le=i.R8I),O===i.SHORT&&(le=i.R16I),O===i.INT&&(le=i.R32I)),b===i.RG&&(O===i.FLOAT&&(le=i.RG32F),O===i.HALF_FLOAT&&(le=i.RG16F),O===i.UNSIGNED_BYTE&&(le=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(le=i.RG8UI),O===i.UNSIGNED_SHORT&&(le=i.RG16UI),O===i.UNSIGNED_INT&&(le=i.RG32UI),O===i.BYTE&&(le=i.RG8I),O===i.SHORT&&(le=i.RG16I),O===i.INT&&(le=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(le=i.RGB8UI),O===i.UNSIGNED_SHORT&&(le=i.RGB16UI),O===i.UNSIGNED_INT&&(le=i.RGB32UI),O===i.BYTE&&(le=i.RGB8I),O===i.SHORT&&(le=i.RGB16I),O===i.INT&&(le=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),O===i.UNSIGNED_INT&&(le=i.RGBA32UI),O===i.BYTE&&(le=i.RGBA8I),O===i.SHORT&&(le=i.RGBA16I),O===i.INT&&(le=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),b===i.RGBA){const He=ue?Zo:Et.getTransfer(Z);O===i.FLOAT&&(le=i.RGBA32F),O===i.HALF_FLOAT&&(le=i.RGBA16F),O===i.UNSIGNED_BYTE&&(le=He===Gt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(I,b){let O;return I?b===null||b===gs||b===wr?O=i.DEPTH24_STENCIL8:b===$n?O=i.DEPTH32F_STENCIL8:b===ma&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gs||b===wr?O=i.DEPTH_COMPONENT24:b===$n?O=i.DEPTH_COMPONENT32F:b===ma&&(O=i.DEPTH_COMPONENT16),O}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function w(I){const b=I.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&h.delete(b)}function A(I){const b=I.target;b.removeEventListener("dispose",A),S(b)}function P(I){const b=n.get(I);if(b.__webglInit===void 0)return;const O=I.source,Z=d.get(O);if(Z){const ue=Z[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&E(I),Object.keys(Z).length===0&&d.delete(O)}n.remove(I)}function E(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const O=I.source,Z=d.get(O);delete Z[b.__cacheKey],a.memory.textures--}function S(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ue=0;ue<b.__webglFramebuffer[Z].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[Z][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=I.textures;for(let Z=0,ue=O.length;Z<ue;Z++){const le=n.get(O[Z]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(I)}let R=0;function L(){R=0}function D(){const I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function F(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function V(I,b){const O=n.get(I);if(I.isVideoTexture&&Ge(I),I.isRenderTargetTexture===!1&&I.version>0&&O.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,I,b);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function X(I,b){const O=n.get(I);if(I.version>0&&O.__version!==I.version){q(O,I,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function oe(I,b){const O=n.get(I);if(I.version>0&&O.__version!==I.version){q(O,I,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function Q(I,b){const O=n.get(I);if(I.version>0&&O.__version!==I.version){G(O,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const Me={[Ar]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},ve={[Un]:i.NEAREST,[Rf]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Y={[Pg]:i.NEVER,[Fg]:i.ALWAYS,[Lg]:i.LESS,[zf]:i.LEQUAL,[Ig]:i.EQUAL,[Ng]:i.GEQUAL,[Dg]:i.GREATER,[Ug]:i.NOTEQUAL};function re(I,b){if(b.type===$n&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===Ro||b.magFilter===ia||b.magFilter===Xi||b.minFilter===Qn||b.minFilter===Ro||b.minFilter===ia||b.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Me[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Me[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Me[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ve[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Y[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==ia&&b.minFilter!==Xi||b.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ye(I,b){let O=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",w));const Z=b.source;let ue=d.get(Z);ue===void 0&&(ue={},d.set(Z,ue));const le=F(b);if(le!==I.__cacheKey){ue[le]===void 0&&(ue[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ue[le].usedTimes++;const He=ue[I.__cacheKey];He!==void 0&&(ue[I.__cacheKey].usedTimes--,He.usedTimes===0&&E(b)),I.__cacheKey=le,I.__webglTexture=ue[le].texture}return O}function q(I,b,O){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const ue=ye(I,b),le=b.source;t.bindTexture(Z,I.__webglTexture,i.TEXTURE0+O);const He=n.get(le);if(le.version!==He.__version||ue===!0){t.activeTexture(i.TEXTURE0+O);const Te=Et.getPrimaries(Et.workingColorSpace),me=b.colorSpace===cs?null:Et.getPrimaries(b.colorSpace),Ne=b.colorSpace===cs||Te===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ee=v(b.image,!1,s.maxTextureSize);ee=st(b,ee);const _e=r.convert(b.format,b.colorSpace),Ie=r.convert(b.type);let Ae=M(b.internalFormat,_e,Ie,b.colorSpace,b.isVideoTexture);re(Z,b);let de;const Be=b.mipmaps,ke=b.isVideoTexture!==!0,Je=He.__version===void 0||ue===!0,B=le.dataReady,be=T(b,ee);if(b.isDepthTexture)Ae=x(b.format===Rr,b.type),Je&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,_e,Ie,null));else if(b.isDataTexture)if(Be.length>0){ke&&Je&&t.texStorage2D(i.TEXTURE_2D,be,Ae,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)de=Be[ne],ke?B&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,_e,Ie,de.data):t.texImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,_e,Ie,de.data);b.generateMipmaps=!1}else ke?(Je&&t.texStorage2D(i.TEXTURE_2D,be,Ae,ee.width,ee.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,_e,Ie,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,_e,Ie,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ae,Be[0].width,Be[0].height,ee.depth);for(let ne=0,J=Be.length;ne<J;ne++)if(de=Be[ne],b.format!==Xn)if(_e!==null)if(ke){if(B)if(b.layerUpdates.size>0){const fe=rd(de.width,de.height,b.format,b.type);for(const Se of b.layerUpdates){const Ke=de.data.subarray(Se*fe/de.data.BYTES_PER_ELEMENT,(Se+1)*fe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Se,de.width,de.height,1,_e,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,ee.depth,_e,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ae,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,ee.depth,_e,Ie,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ae,de.width,de.height,ee.depth,0,_e,Ie,de.data)}else{ke&&Je&&t.texStorage2D(i.TEXTURE_2D,be,Ae,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)de=Be[ne],b.format!==Xn?_e!==null?ke?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?B&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,_e,Ie,de.data):t.texImage2D(i.TEXTURE_2D,ne,Ae,de.width,de.height,0,_e,Ie,de.data)}else if(b.isDataArrayTexture)if(ke){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ae,ee.width,ee.height,ee.depth),B)if(b.layerUpdates.size>0){const ne=rd(ee.width,ee.height,b.format,b.type);for(const J of b.layerUpdates){const fe=ee.data.subarray(J*ne/ee.data.BYTES_PER_ELEMENT,(J+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,_e,Ie,fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,Ie,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,_e,Ie,ee.data);else if(b.isData3DTexture)ke?(Je&&t.texStorage3D(i.TEXTURE_3D,be,Ae,ee.width,ee.height,ee.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,_e,Ie,ee.data);else if(b.isFramebufferTexture){if(Je)if(ke)t.texStorage2D(i.TEXTURE_2D,be,Ae,ee.width,ee.height);else{let ne=ee.width,J=ee.height;for(let fe=0;fe<be;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ae,ne,J,0,_e,Ie,null),ne>>=1,J>>=1}}else if(Be.length>0){if(ke&&Je){const ne=Ce(Be[0]);t.texStorage2D(i.TEXTURE_2D,be,Ae,ne.width,ne.height)}for(let ne=0,J=Be.length;ne<J;ne++)de=Be[ne],ke?B&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e,Ie,de):t.texImage2D(i.TEXTURE_2D,ne,Ae,_e,Ie,de);b.generateMipmaps=!1}else if(ke){if(Je){const ne=Ce(ee);t.texStorage2D(i.TEXTURE_2D,be,Ae,ne.width,ne.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ie,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ae,_e,Ie,ee);m(b)&&p(Z),He.__version=le.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function G(I,b,O){if(b.image.length!==6)return;const Z=ye(I,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+O);const le=n.get(ue);if(ue.version!==le.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const He=Et.getPrimaries(Et.workingColorSpace),Te=b.colorSpace===cs?null:Et.getPrimaries(b.colorSpace),me=b.colorSpace===cs||He===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ne&&!ee?_e[J]=v(b.image[J],!0,s.maxCubemapSize):_e[J]=ee?b.image[J].image:b.image[J],_e[J]=st(b,_e[J]);const Ie=_e[0],Ae=r.convert(b.format,b.colorSpace),de=r.convert(b.type),Be=M(b.internalFormat,Ae,de,b.colorSpace),ke=b.isVideoTexture!==!0,Je=le.__version===void 0||Z===!0,B=ue.dataReady;let be=T(b,Ie);re(i.TEXTURE_CUBE_MAP,b);let ne;if(Ne){ke&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Be,Ie.width,Ie.height);for(let J=0;J<6;J++){ne=_e[J].mipmaps;for(let fe=0;fe<ne.length;fe++){const Se=ne[fe];b.format!==Xn?Ae!==null?ke?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,Se.width,Se.height,Ae,de,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Be,Se.width,Se.height,0,Ae,de,Se.data)}}}else{if(ne=b.mipmaps,ke&&Je){ne.length>0&&be++;const J=Ce(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Be,J.width,J.height)}for(let J=0;J<6;J++)if(ee){ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ae,de,_e[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,_e[J].width,_e[J].height,0,Ae,de,_e[J].data);for(let fe=0;fe<ne.length;fe++){const Ke=ne[fe].image[J].image;ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ke.width,Ke.height,Ae,de,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Be,Ke.width,Ke.height,0,Ae,de,Ke.data)}}else{ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,de,_e[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Ae,de,_e[J]);for(let fe=0;fe<ne.length;fe++){const Se=ne[fe];ke?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ae,de,Se.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Be,Ae,de,Se.image[J])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),le.__version=ue.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function $(I,b,O,Z,ue,le){const He=r.convert(O.format,O.colorSpace),Te=r.convert(O.type),me=M(O.internalFormat,He,Te,O.colorSpace),Ne=n.get(b),ee=n.get(O);if(ee.__renderTarget=b,!Ne.__hasExternalTextures){const _e=Math.max(1,b.width>>le),Ie=Math.max(1,b.height>>le);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,le,me,_e,Ie,b.depth,0,He,Te,null):t.texImage2D(ue,le,me,_e,Ie,0,He,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),We(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ue,ee.__webglTexture,0,Ye(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ue,ee.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(I,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const Z=b.depthTexture,ue=Z&&Z.isDepthTexture?Z.type:null,le=x(b.stencilBuffer,ue),He=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=Ye(b);We(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,le,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,I)}else{const Z=b.textures;for(let ue=0;ue<Z.length;ue++){const le=Z[ue],He=r.convert(le.format,le.colorSpace),Te=r.convert(le.type),me=M(le.internalFormat,He,Te,le.colorSpace),Ne=Ye(b);O&&We(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,me,b.width,b.height):We(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,me,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,me,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const ue=Z.__webglTexture,le=Ye(b);if(b.depthTexture.format===xr)We(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(b.depthTexture.format===Rr)We(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Pe(I){const b=n.get(I),O=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ue)};Z.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=Z}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(b.__webglFramebuffer,I)}else if(O){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),ie(b.__webglDepthbuffer[Z],I,!1);else{const ue=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ie(b.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(I,b,O){const Z=n.get(I);b!==void 0&&$(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pe(I)}function Le(I){const b=I.texture,O=n.get(I),Z=n.get(b);I.addEventListener("dispose",A);const ue=I.textures,le=I.isWebGLCubeRenderTarget===!0,He=ue.length>1;if(He||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),le){O.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[Te]=[];for(let me=0;me<b.mipmaps.length;me++)O.__webglFramebuffer[Te][me]=i.createFramebuffer()}else O.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let Te=0;Te<b.mipmaps.length;Te++)O.__webglFramebuffer[Te]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(He)for(let Te=0,me=ue.length;Te<me;Te++){const Ne=n.get(ue[Te]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&We(I)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Te=0;Te<ue.length;Te++){const me=ue[Te];O.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Te]);const Ne=r.convert(me.format,me.colorSpace),ee=r.convert(me.type),_e=M(me.internalFormat,Ne,ee,me.colorSpace,I.isXRRenderTarget===!0),Ie=Ye(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,_e,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,O.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),re(i.TEXTURE_CUBE_MAP,b);for(let Te=0;Te<6;Te++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)$(O.__webglFramebuffer[Te][me],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,me);else $(O.__webglFramebuffer[Te],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Te=0,me=ue.length;Te<me;Te++){const Ne=ue[Te],ee=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),re(i.TEXTURE_2D,Ne),$(O.__webglFramebuffer,I,Ne,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),m(Ne)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Z.__webglTexture),re(Te,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)$(O.__webglFramebuffer[me],I,b,i.COLOR_ATTACHMENT0,Te,me);else $(O.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,Te,0);m(b)&&p(Te),t.unbindTexture()}I.depthBuffer&&Pe(I)}function Ue(I){const b=I.textures;for(let O=0,Z=b.length;O<Z;O++){const ue=b[O];if(m(ue)){const le=y(I),He=n.get(ue).__webglTexture;t.bindTexture(le,He),p(le),t.unbindTexture()}}}const Oe=[],k=[];function $e(I){if(I.samples>0){if(We(I)===!1){const b=I.textures,O=I.width,Z=I.height;let ue=i.COLOR_BUFFER_BIT;const le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(I),Te=b.length>1;if(Te)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let me=0;me<b.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[me]);const Ne=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,ue,i.NEAREST),l===!0&&(Oe.length=0,k.length=0,Oe.push(i.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Oe.push(le),k.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,He.__webglColorRenderbuffer[me]);const Ne=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ye(I){return Math.min(s.maxSamples,I.samples)}function We(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(I){const b=a.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function st(I,b){const O=I.colorSpace,Z=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||O!==Fn&&O!==cs&&(Et.getTransfer(O)===Gt?(Z!==Xn||ue!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=Q,this.rebindTextures=Fe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=We}function tM(i,e){function t(n,s=cs){let r;const a=Et.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cf)return i.BYTE;if(n===Pf)return i.SHORT;if(n===ma)return i.UNSIGNED_SHORT;if(n===fu)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===wa)return i.HALF_FLOAT;if(n===If)return i.ALPHA;if(n===Df)return i.RGB;if(n===Xn)return i.RGBA;if(n===Uf)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===_u)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===Ff)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===vu)return i.RGBA_INTEGER;if(n===Co||n===Po||n===Lo||n===Io)if(a===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Mc||n===Sc||n===Ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ac||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===Ac)return a===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Hc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return a===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Of||n===Wc||n===Xc||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class nM extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Os{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const v=new aM,m=t.getContextAttributes();let p=null,y=null;const M=[],x=[],T=new at;let w=null;const A=new Dn;A.viewport=new Ut;const P=new Dn;P.viewport=new Ut;const E=[A,P],S=new nM;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let G=M[q];return G===void 0&&(G=new Ul,M[q]=G),G.getTargetRaySpace()},this.getControllerGrip=function(q){let G=M[q];return G===void 0&&(G=new Ul,M[q]=G),G.getGripSpace()},this.getHand=function(q){let G=M[q];return G===void 0&&(G=new Ul,M[q]=G),G.getHandSpace()};function D(q){const G=x.indexOf(q.inputSource);if(G===-1)return;const $=M[G];$!==void 0&&($.update(q.inputSource,q.frame,c||a),$.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){const G=x[q];G!==null&&(x[q]=null,M[q].disconnect(G))}R=null,L=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){const G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Fs(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,$=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=m.stencil?Rr:xr,$=m.stencil?wr:gs);const Re={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Fs(d.textureWidth,d.textureHeight,{format:Xn,type:Yi,depthTexture:new Jf(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(q){for(let G=0;G<q.removed.length;G++){const $=q.removed[G],ie=x.indexOf($);ie>=0&&(x[ie]=null,M[ie].disconnect($))}for(let G=0;G<q.added.length;G++){const $=q.added[G];let ie=x.indexOf($);if(ie===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=x.length){x.push($),ie=Pe;break}else if(x[Pe]===null){x[Pe]=$,ie=Pe;break}if(ie===-1)break}const Re=M[ie];Re&&Re.connect($)}}const X=new U,oe=new U;function Q(q,G,$){X.setFromMatrixPosition(G.matrixWorld),oe.setFromMatrixPosition($.matrixWorld);const ie=X.distanceTo(oe),Re=G.projectionMatrix.elements,Pe=$.projectionMatrix.elements,Fe=Re[14]/(Re[10]-1),Le=Re[14]/(Re[10]+1),Ue=(Re[9]+1)/Re[5],Oe=(Re[9]-1)/Re[5],k=(Re[8]-1)/Re[0],$e=(Pe[8]+1)/Pe[0],Ye=Fe*k,We=Fe*$e,Ge=ie/(-k+$e),st=Ge*-k;if(G.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(G.projectionMatrix),q.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Ce=Fe+Ge,I=Le+Ge,b=Ye-st,O=We+(ie-st),Z=Ue*Le/I*Ce,ue=Oe*Le/I*Ce;q.projectionMatrix.makePerspective(b,O,Z,ue,Ce,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Me(q,G){G===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(G.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let G=q.near,$=q.far;v.texture!==null&&(v.depthNear>0&&(G=v.depthNear),v.depthFar>0&&($=v.depthFar)),S.near=P.near=A.near=G,S.far=P.far=A.far=$,(R!==S.near||L!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,L=S.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const ie=q.parent,Re=S.cameras;Me(S,ie);for(let Pe=0;Pe<Re.length;Pe++)Me(Re[Pe],ie);Re.length===2?Q(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),ve(q,S,ie)};function ve(q,G,$){$===null?q.matrix.copy(G.matrixWorld):(q.matrix.copy($.matrixWorld),q.matrix.invert(),q.matrix.multiply(G.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(G.projectionMatrix),q.projectionMatrixInverse.copy(G.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Y=null;function re(q,G){if(h=G.getViewerPose(c||a),_=G,h!==null){const $=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ie=!1;$.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let Pe=0;Pe<$.length;Pe++){const Fe=$[Pe];let Le=null;if(f!==null)Le=f.getViewport(Fe);else{const Oe=u.getViewSubImage(d,Fe);Le=Oe.viewport,Pe===0&&(e.setRenderTargetTextures(y,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(y))}let Ue=E[Pe];Ue===void 0&&(Ue=new Dn,Ue.layers.enable(Pe),Ue.viewport=new Ut,E[Pe]=Ue),Ue.matrix.fromArray(Fe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Fe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Le.x,Le.y,Le.width,Le.height),Pe===0&&(S.matrix.copy(Ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(Ue)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=u.getDepthInformation($[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let $=0;$<M.length;$++){const ie=x[$],Re=M[$];ie!==null&&Re!==void 0&&Re.update(ie,G,c||a)}Y&&Y(q,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),_=null}const ye=new Zf;ye.setAnimationLoop(re),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}}const Es=new Pi,lM=new ct;function cM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,Es.copy(x),Es.x*=-1,Es.y*=-1,Es.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Es)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(_(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(y,T);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const M=u();y.__bindingPointIndex=M;const x=i.createBuffer(),T=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],x=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=x.length;w<A;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,S=P.length;E<S;E++){const R=P[E];if(f(R,w,E,T)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let V=0;V<D.length;V++){const X=D[V],oe=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,L+F,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,F),F+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,x,T){const w=y.value,A=M+"_"+x;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const P=T[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(y){const M=y.uniforms;let x=0;const T=16;for(let A=0,P=M.length;A<P;A++){const E=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,R=E.length;S<R;S++){const L=E[S],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,V=D.length;F<V;F++){const X=D[F],oe=v(X),Q=x%T,Me=Q%oe.boundary,ve=Q+Me;x+=Me,ve!==0&&T-ve<oe.storage&&(x+=T-ve),L.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=oe.storage}}}const w=x%T;return w>0&&(x+=T-w),y.__size=x,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class hM{constructor(e={}){const{canvas:t=$g(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=_s,this.toneMappingExposure=1;const x=this;let T=!1,w=0,A=0,P=null,E=-1,S=null;const R=new Ut,L=new Ut;let D=null;const F=new lt(0);let V=0,X=t.width,oe=t.height,Q=1,Me=null,ve=null;const Y=new Ut(0,0,X,oe),re=new Ut(0,0,X,oe);let ye=!1;const q=new Jo;let G=!1,$=!1;const ie=new ct,Re=new ct,Pe=new U,Fe=new Ut,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Oe(){return P===null?Q:1}let k=n;function $e(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){const W="webgl2";if(k=$e(W,C),k===null)throw $e(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,We,Ge,st,Ce,I,b,O,Z,ue,le,He,Te,me,Ne,ee,_e,Ie,Ae,de,Be,ke,Je,B;function be(){Ye=new _0(k),Ye.init(),ke=new tM(k,Ye),We=new u0(k,Ye,e,ke),Ge=new Qb(k,Ye),We.reverseDepthBuffer&&d&&Ge.buffers.depth.setReversed(!0),st=new x0(k),Ce=new Ob,I=new eM(k,Ye,Ge,Ce,We,ke,st),b=new d0(x),O=new m0(x),Z=new Av(k),Je=new l0(k,Z),ue=new g0(k,Z,st,Je),le=new b0(k,ue,Z,st),Ae=new y0(k,We,I),ee=new h0(Ce),He=new Fb(x,b,O,Ye,We,Je,ee),Te=new cM(x,Ce),me=new kb,Ne=new Xb(Ye),Ie=new o0(x,b,O,Ge,le,f,l),_e=new Zb(x,le,We),B=new uM(k,st,We,Ge),de=new c0(k,Ye,st),Be=new v0(k,Ye,st),st.programs=He.programs,x.capabilities=We,x.extensions=Ye,x.properties=Ce,x.renderLists=me,x.shadowMap=_e,x.state=Ge,x.info=st}be();const ne=new oM(x,k);this.xr=ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(X,oe,!1))},this.getSize=function(C){return C.set(X,oe)},this.setSize=function(C,W,ae=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,oe=W,t.width=Math.floor(C*Q),t.height=Math.floor(W*Q),ae===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(X*Q,oe*Q).floor()},this.setDrawingBufferSize=function(C,W,ae){X=C,oe=W,Q=ae,t.width=Math.floor(C*ae),t.height=Math.floor(W*ae),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,W,ae,ce){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,W,ae,ce),Ge.viewport(R.copy(Y).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,W,ae,ce){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,W,ae,ce),Ge.scissor(L.copy(re).multiplyScalar(Q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Ge.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Me=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(C=!0,W=!0,ae=!0){let ce=0;if(C){let j=!1;if(P!==null){const Ve=P.texture.format;j=Ve===vu||Ve===gu||Ve===Ko}if(j){const Ve=P.texture.type,Ze=Ve===Yi||Ve===gs||Ve===ma||Ve===wr||Ve===pu||Ve===mu,tt=Ie.getClearColor(),nt=Ie.getClearAlpha(),pt=tt.r,mt=tt.g,it=tt.b;Ze?(_[0]=pt,_[1]=mt,_[2]=it,_[3]=nt,k.clearBufferuiv(k.COLOR,0,_)):(v[0]=pt,v[1]=mt,v[2]=it,v[3]=nt,k.clearBufferiv(k.COLOR,0,v))}else ce|=k.COLOR_BUFFER_BIT}W&&(ce|=k.DEPTH_BUFFER_BIT),ae&&(ce|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),Ne.dispose(),Ce.dispose(),b.dispose(),O.dispose(),le.dispose(),Je.dispose(),B.dispose(),He.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",$t),ne.removeEventListener("sessionend",en),Ct.stop()};function J(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=st.autoReset,W=_e.enabled,ae=_e.autoUpdate,ce=_e.needsUpdate,j=_e.type;be(),st.autoReset=C,_e.enabled=W,_e.autoUpdate=ae,_e.needsUpdate=ce,_e.type=j}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){const W=C.target;W.removeEventListener("dispose",Ke),ft(W)}function ft(C){ut(C),Ce.remove(C)}function ut(C){const W=Ce.get(C).programs;W!==void 0&&(W.forEach(function(ae){He.releaseProgram(ae)}),C.isShaderMaterial&&He.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ae,ce,j,Ve){W===null&&(W=Le);const Ze=j.isMesh&&j.matrixWorld.determinant()<0,tt=Mi(C,W,ae,ce,j);Ge.setMaterial(ce,Ze);let nt=ae.index,pt=1;if(ce.wireframe===!0){if(nt=ue.getWireframeAttribute(ae),nt===void 0)return;pt=2}const mt=ae.drawRange,it=ae.attributes.position;let wt=mt.start*pt,se=(mt.start+mt.count)*pt;Ve!==null&&(wt=Math.max(wt,Ve.start*pt),se=Math.min(se,(Ve.start+Ve.count)*pt)),nt!==null?(wt=Math.max(wt,0),se=Math.min(se,nt.count)):it!=null&&(wt=Math.max(wt,0),se=Math.min(se,it.count));const he=se-wt;if(he<0||he===1/0)return;Je.setup(j,ce,tt,ae,nt);let we,ze=de;if(nt!==null&&(we=Z.get(nt),ze=Be,ze.setIndex(we)),j.isMesh)ce.wireframe===!0?(Ge.setLineWidth(ce.wireframeLinewidth*Oe()),ze.setMode(k.LINES)):ze.setMode(k.TRIANGLES);else if(j.isLine){let ge=ce.linewidth;ge===void 0&&(ge=1),Ge.setLineWidth(ge*Oe()),j.isLineSegments?ze.setMode(k.LINES):j.isLineLoop?ze.setMode(k.LINE_LOOP):ze.setMode(k.LINE_STRIP)}else j.isPoints?ze.setMode(k.POINTS):j.isSprite&&ze.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ze.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ze.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ge=j._multiDrawStarts,ot=j._multiDrawCounts,et=j._multiDrawCount,Dt=nt?Z.get(nt).bytesPerElement:1,Rt=Ce.get(ce).currentProgram.getUniforms();for(let Ht=0;Ht<et;Ht++)Rt.setValue(k,"_gl_DrawID",Ht),ze.render(ge[Ht]/Dt,ot[Ht])}else if(j.isInstancedMesh)ze.renderInstances(wt,he,j.count);else if(ae.isInstancedBufferGeometry){const ge=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ot=Math.min(ae.instanceCount,ge);ze.renderInstances(wt,he,ot)}else ze.render(wt,he)};function rt(C,W,ae){C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Vt(C,W,ae),C.side=li,C.needsUpdate=!0,Vt(C,W,ae),C.side=Gn):Vt(C,W,ae)}this.compile=function(C,W,ae=null){ae===null&&(ae=C),p=Ne.get(ae),p.init(W),M.push(p),ae.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),C!==ae&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const ce=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ve=j.material;if(Ve)if(Array.isArray(Ve))for(let Ze=0;Ze<Ve.length;Ze++){const tt=Ve[Ze];rt(tt,ae,j),ce.add(tt)}else rt(Ve,ae,j),ce.add(Ve)}),M.pop(),p=null,ce},this.compileAsync=function(C,W,ae=null){const ce=this.compile(C,W,ae);return new Promise(j=>{function Ve(){if(ce.forEach(function(Ze){Ce.get(Ze).currentProgram.isReady()&&ce.delete(Ze)}),ce.size===0){j(C);return}setTimeout(Ve,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let At=null;function bt(C){At&&At(C)}function $t(){Ct.stop()}function en(){Ct.start()}const Ct=new Zf;Ct.setAnimationLoop(bt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(C){At=C,ne.setAnimationLoop(C),C===null?Ct.stop():Ct.start()},ne.addEventListener("sessionstart",$t),ne.addEventListener("sessionend",en),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,W,P),p=Ne.get(C,M.length),p.init(W),M.push(p),Re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Re),$=this.localClippingEnabled,G=ee.init(this.clippingPlanes,$),m=me.get(C,y.length),m.init(),y.push(m),ne.enabled===!0&&ne.isPresenting===!0){const Ve=x.xr.getDepthSensingMesh();Ve!==null&&tn(Ve,W,-1/0,x.sortObjects)}tn(C,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Me,ve),Ue=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ue&&Ie.addToRenderList(m,C),this.info.render.frame++,G===!0&&ee.beginShadows();const ae=p.state.shadowsArray;_e.render(ae,C,W),G===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,j=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(j.length>0)for(let Ze=0,tt=Ve.length;Ze<tt;Ze++){const nt=Ve[Ze];jn(ce,j,C,nt)}Ue&&Ie.render(C);for(let Ze=0,tt=Ve.length;Ze<tt;Ze++){const nt=Ve[Ze];Bn(m,C,nt,nt.viewport)}}else j.length>0&&jn(ce,j,C,W),Ue&&Ie.render(C),Bn(m,C,W);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(x,C,W),Je.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],G===!0&&ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function tn(C,W,ae,ce){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){ce&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Ze=le.update(C),tt=C.material;tt.visible&&m.push(C,Ze,tt,ae,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ze=le.update(C),tt=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Fe.copy(Ze.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(tt)){const nt=Ze.groups;for(let pt=0,mt=nt.length;pt<mt;pt++){const it=nt[pt],wt=tt[it.materialIndex];wt&&wt.visible&&m.push(C,Ze,wt,ae,Fe.z,it)}}else tt.visible&&m.push(C,Ze,tt,ae,Fe.z,null)}}const Ve=C.children;for(let Ze=0,tt=Ve.length;Ze<tt;Ze++)tn(Ve[Ze],W,ae,ce)}function Bn(C,W,ae,ce){const j=C.opaque,Ve=C.transmissive,Ze=C.transparent;p.setupLightsView(ae),G===!0&&ee.setGlobalState(x.clippingPlanes,ae),ce&&Ge.viewport(R.copy(ce)),j.length>0&&Ii(j,W,ae),Ve.length>0&&Ii(Ve,W,ae),Ze.length>0&&Ii(Ze,W,ae),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function jn(C,W,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new Fs(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?wa:Yi,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ve=p.state.transmissionRenderTarget[ce.id],Ze=ce.viewport||R;Ve.setSize(Ze.z,Ze.w);const tt=x.getRenderTarget();x.setRenderTarget(Ve),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&Ie.render(ae);const nt=x.toneMapping;x.toneMapping=_s;const pt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),G===!0&&ee.setGlobalState(x.clippingPlanes,ce),Ii(C,ae,ce),I.updateMultisampleRenderTarget(Ve),I.updateRenderTargetMipmap(Ve),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let it=0,wt=W.length;it<wt;it++){const se=W[it],he=se.object,we=se.geometry,ze=se.material,ge=se.group;if(ze.side===Gn&&he.layers.test(ce.layers)){const ot=ze.side;ze.side=Rn,ze.needsUpdate=!0,xt(he,ae,ce,we,ze,ge),ze.side=ot,ze.needsUpdate=!0,mt=!0}}mt===!0&&(I.updateMultisampleRenderTarget(Ve),I.updateRenderTargetMipmap(Ve))}x.setRenderTarget(tt),x.setClearColor(F,V),pt!==void 0&&(ce.viewport=pt),x.toneMapping=nt}function Ii(C,W,ae){const ce=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ve=C.length;j<Ve;j++){const Ze=C[j],tt=Ze.object,nt=Ze.geometry,pt=ce===null?Ze.material:ce,mt=Ze.group;tt.layers.test(ae.layers)&&xt(tt,W,ae,nt,pt,mt)}}function xt(C,W,ae,ce,j,Ve){C.onBeforeRender(x,W,ae,ce,j,Ve),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(x,W,ae,ce,C,Ve),j.transparent===!0&&j.side===Gn&&j.forceSinglePass===!1?(j.side=Rn,j.needsUpdate=!0,x.renderBufferDirect(ae,W,ce,j,C,Ve),j.side=li,j.needsUpdate=!0,x.renderBufferDirect(ae,W,ce,j,C,Ve),j.side=Gn):x.renderBufferDirect(ae,W,ce,j,C,Ve),C.onAfterRender(x,W,ae,ce,j,Ve)}function Vt(C,W,ae){W.isScene!==!0&&(W=Le);const ce=Ce.get(C),j=p.state.lights,Ve=p.state.shadowsArray,Ze=j.state.version,tt=He.getParameters(C,j.state,Ve,W,ae),nt=He.getProgramCacheKey(tt);let pt=ce.programs;ce.environment=C.isMeshStandardMaterial?W.environment:null,ce.fog=W.fog,ce.envMap=(C.isMeshStandardMaterial?O:b).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,pt===void 0&&(C.addEventListener("dispose",Ke),pt=new Map,ce.programs=pt);let mt=pt.get(nt);if(mt!==void 0){if(ce.currentProgram===mt&&ce.lightsStateVersion===Ze)return It(C,tt),mt}else tt.uniforms=He.getUniforms(C),C.onBeforeCompile(tt,x),mt=He.acquireProgram(tt,nt),pt.set(nt,mt),ce.uniforms=tt.uniforms;const it=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=ee.uniform),It(C,tt),ce.needsLights=Ei(C),ce.lightsStateVersion=Ze,ce.needsLights&&(it.ambientLightColor.value=j.state.ambient,it.lightProbe.value=j.state.probe,it.directionalLights.value=j.state.directional,it.directionalLightShadows.value=j.state.directionalShadow,it.spotLights.value=j.state.spot,it.spotLightShadows.value=j.state.spotShadow,it.rectAreaLights.value=j.state.rectArea,it.ltc_1.value=j.state.rectAreaLTC1,it.ltc_2.value=j.state.rectAreaLTC2,it.pointLights.value=j.state.point,it.pointLightShadows.value=j.state.pointShadow,it.hemisphereLights.value=j.state.hemi,it.directionalShadowMap.value=j.state.directionalShadowMap,it.directionalShadowMatrix.value=j.state.directionalShadowMatrix,it.spotShadowMap.value=j.state.spotShadowMap,it.spotLightMatrix.value=j.state.spotLightMatrix,it.spotLightMap.value=j.state.spotLightMap,it.pointShadowMap.value=j.state.pointShadowMap,it.pointShadowMatrix.value=j.state.pointShadowMatrix),ce.currentProgram=mt,ce.uniformsList=null,mt}function Jt(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Uo.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function It(C,W){const ae=Ce.get(C);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function Mi(C,W,ae,ce,j){W.isScene!==!0&&(W=Le),I.resetTextureUnits();const Ve=W.fog,Ze=ce.isMeshStandardMaterial?W.environment:null,tt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fn,nt=(ce.isMeshStandardMaterial?O:b).get(ce.envMap||Ze),pt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),it=!!ae.morphAttributes.position,wt=!!ae.morphAttributes.normal,se=!!ae.morphAttributes.color;let he=_s;ce.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(he=x.toneMapping);const we=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ze=we!==void 0?we.length:0,ge=Ce.get(ce),ot=p.state.lights;if(G===!0&&($===!0||C!==S)){const Ot=C===S&&ce.id===E;ee.setState(ce,C,Ot)}let et=!1;ce.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ot.state.version||ge.outputColorSpace!==tt||j.isBatchedMesh&&ge.batching===!1||!j.isBatchedMesh&&ge.batching===!0||j.isBatchedMesh&&ge.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ge.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ge.instancing===!1||!j.isInstancedMesh&&ge.instancing===!0||j.isSkinnedMesh&&ge.skinning===!1||!j.isSkinnedMesh&&ge.skinning===!0||j.isInstancedMesh&&ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ge.instancingMorph===!1&&j.morphTexture!==null||ge.envMap!==nt||ce.fog===!0&&ge.fog!==Ve||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ee.numPlanes||ge.numIntersection!==ee.numIntersection)||ge.vertexAlphas!==pt||ge.vertexTangents!==mt||ge.morphTargets!==it||ge.morphNormals!==wt||ge.morphColors!==se||ge.toneMapping!==he||ge.morphTargetsCount!==ze)&&(et=!0):(et=!0,ge.__version=ce.version);let Dt=ge.currentProgram;et===!0&&(Dt=Vt(ce,W,j));let Rt=!1,Ht=!1,nn=!1;const Mt=Dt.getUniforms(),ht=ge.uniforms;if(Ge.useProgram(Dt.program)&&(Rt=!0,Ht=!0,nn=!0),ce.id!==E&&(E=ce.id,Ht=!0),Rt||S!==C){Ge.buffers.depth.getReversed()?(ie.copy(C.projectionMatrix),tv(ie),nv(ie),Mt.setValue(k,"projectionMatrix",ie)):Mt.setValue(k,"projectionMatrix",C.projectionMatrix),Mt.setValue(k,"viewMatrix",C.matrixWorldInverse);const mn=Mt.map.cameraPosition;mn!==void 0&&mn.setValue(k,Pe.setFromMatrixPosition(C.matrixWorld)),We.logarithmicDepthBuffer&&Mt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Mt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Ht=!0,nn=!0)}if(j.isSkinnedMesh){Mt.setOptional(k,j,"bindMatrix"),Mt.setOptional(k,j,"bindMatrixInverse");const Ot=j.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Mt.setValue(k,"boneTexture",Ot.boneTexture,I))}j.isBatchedMesh&&(Mt.setOptional(k,j,"batchingTexture"),Mt.setValue(k,"batchingTexture",j._matricesTexture,I),Mt.setOptional(k,j,"batchingIdTexture"),Mt.setValue(k,"batchingIdTexture",j._indirectTexture,I),Mt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Mt.setValue(k,"batchingColorTexture",j._colorsTexture,I));const Ft=ae.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&Ae.update(j,ae,Dt),(Ht||ge.receiveShadow!==j.receiveShadow)&&(ge.receiveShadow=j.receiveShadow,Mt.setValue(k,"receiveShadow",j.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(ht.envMap.value=nt,ht.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&W.environment!==null&&(ht.envMapIntensity.value=W.environmentIntensity),Ht&&(Mt.setValue(k,"toneMappingExposure",x.toneMappingExposure),ge.needsLights&&Si(ht,nn),Ve&&ce.fog===!0&&Te.refreshFogUniforms(ht,Ve),Te.refreshMaterialUniforms(ht,ce,Q,oe,p.state.transmissionRenderTarget[C.id]),Uo.upload(k,Jt(ge),ht,I)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Uo.upload(k,Jt(ge),ht,I),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Mt.setValue(k,"center",j.center),Mt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(k,"normalMatrix",j.normalMatrix),Mt.setValue(k,"modelMatrix",j.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Ot=ce.uniformsGroups;for(let mn=0,kn=Ot.length;mn<kn;mn++){const Qi=Ot[mn];B.update(Qi,Dt),B.bind(Qi,Dt)}}return Dt}function Si(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ei(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,W,ae){Ce.get(C.texture).__webglTexture=W,Ce.get(C.depthTexture).__webglTexture=ae;const ce=Ce.get(C);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const ae=Ce.get(C);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ae=0){P=C,w=W,A=ae;let ce=!0,j=null,Ve=!1,Ze=!1;if(C){const nt=Ce.get(C);if(nt.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),ce=!1;else if(nt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(nt.__hasExternalTextures)I.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(nt.__boundDepthTexture!==it){if(it!==null&&Ce.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const pt=C.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ze=!0);const mt=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(mt[W])?j=mt[W][ae]:j=mt[W],Ve=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?j=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(mt)?j=mt[ae]:j=mt,R.copy(C.viewport),L.copy(C.scissor),D=C.scissorTest}else R.copy(Y).multiplyScalar(Q).floor(),L.copy(re).multiplyScalar(Q).floor(),D=ye;if(Ge.bindFramebuffer(k.FRAMEBUFFER,j)&&ce&&Ge.drawBuffers(C,j),Ge.viewport(R),Ge.scissor(L),Ge.setScissorTest(D),Ve){const nt=Ce.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,nt.__webglTexture,ae)}else if(Ze){const nt=Ce.get(C.texture),pt=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.__webglTexture,ae||0,pt)}E=-1},this.readRenderTargetPixels=function(C,W,ae,ce,j,Ve,Ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){Ge.bindFramebuffer(k.FRAMEBUFFER,tt);try{const nt=C.texture,pt=nt.format,mt=nt.type;if(!We.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ce&&ae>=0&&ae<=C.height-j&&k.readPixels(W,ae,ce,j,ke.convert(pt),ke.convert(mt),Ve)}finally{const nt=P!==null?Ce.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,W,ae,ce,j,Ve,Ze){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(tt=tt[Ze]),tt){const nt=C.texture,pt=nt.format,mt=nt.type;if(!We.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ce&&ae>=0&&ae<=C.height-j){Ge.bindFramebuffer(k.FRAMEBUFFER,tt);const it=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.bufferData(k.PIXEL_PACK_BUFFER,Ve.byteLength,k.STREAM_READ),k.readPixels(W,ae,ce,j,ke.convert(pt),ke.convert(mt),0);const wt=P!==null?Ce.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,wt);const se=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ev(k,se,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ve),k.deleteBuffer(it),k.deleteSync(se),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,ae=0){C.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ce=Math.pow(2,-ae),j=Math.floor(C.image.width*ce),Ve=Math.floor(C.image.height*ce),Ze=W!==null?W.x:0,tt=W!==null?W.y:0;I.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,Ze,tt,j,Ve),Ge.unbindTexture()},this.copyTextureToTexture=function(C,W,ae=null,ce=null,j=0){C.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,C=arguments[1],W=arguments[2],j=arguments[3]||0,ae=null);let Ve,Ze,tt,nt,pt,mt,it,wt,se;const he=C.isCompressedTexture?C.mipmaps[j]:C.image;ae!==null?(Ve=ae.max.x-ae.min.x,Ze=ae.max.y-ae.min.y,tt=ae.isBox3?ae.max.z-ae.min.z:1,nt=ae.min.x,pt=ae.min.y,mt=ae.isBox3?ae.min.z:0):(Ve=he.width,Ze=he.height,tt=he.depth||1,nt=0,pt=0,mt=0),ce!==null?(it=ce.x,wt=ce.y,se=ce.z):(it=0,wt=0,se=0);const we=ke.convert(W.format),ze=ke.convert(W.type);let ge;W.isData3DTexture?(I.setTexture3D(W,0),ge=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),ge=k.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),ge=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Dt=k.getParameter(k.UNPACK_SKIP_PIXELS),Rt=k.getParameter(k.UNPACK_SKIP_ROWS),Ht=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,he.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,pt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mt);const nn=C.isDataArrayTexture||C.isData3DTexture,Mt=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ht=Ce.get(C),Ft=Ce.get(W),Ot=Ce.get(ht.__renderTarget),mn=Ce.get(Ft.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let kn=0;kn<tt;kn++)nn&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(C).__webglTexture,j,mt+kn),C.isDepthTexture?(Mt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(W).__webglTexture,j,se+kn),k.blitFramebuffer(nt,pt,Ve,Ze,it,wt,Ve,Ze,k.DEPTH_BUFFER_BIT,k.NEAREST)):Mt?k.copyTexSubImage3D(ge,j,it,wt,se+kn,nt,pt,Ve,Ze):k.copyTexSubImage2D(ge,j,it,wt,se+kn,nt,pt,Ve,Ze);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Mt?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ge,j,it,wt,se,Ve,Ze,tt,we,ze,he.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(ge,j,it,wt,se,Ve,Ze,tt,we,he.data):k.texSubImage3D(ge,j,it,wt,se,Ve,Ze,tt,we,ze,he):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,it,wt,Ve,Ze,we,ze,he.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,it,wt,he.width,he.height,we,he.data):k.texSubImage2D(k.TEXTURE_2D,j,it,wt,Ve,Ze,we,ze,he);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ht),j===0&&W.generateMipmaps&&k.generateMipmap(ge),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ae=null,ce=null,j=0){return C.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0),sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,ae,ce,j)},this.initRenderTarget=function(C){Ce.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,Ge.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}class np extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new U;class Eu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ad=new U,od=new Ut,ld=new Ut,fM=new U,cd=new ct,eo=new U,Nl=new Nn,ud=new ct,Fl=new Bs;class pM extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(s),e.ray.intersectsSphere(Nl)!==!1&&(ud.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(ud),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;od.fromBufferAttribute(s.attributes.skinIndex,e),ld.fromBufferAttribute(s.attributes.skinWeight,e),ad.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ld.getComponent(r);if(a!==0){const o=od.getComponent(r);cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fM.copy(ad).applyMatrix4(cd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ip extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ha extends xn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Un,h=Un,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new ct,mM=new ct;class Tu{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:mM;hd.multiplyMatrices(o,t[r]),hd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ha(t,e,e,Xn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ip),this.bones.push(a),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Jc extends dn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new ct,dd=new ct,to=[],fd=new qt,_M=new ct,Xr=new Lt,qr=new Nn;class gM extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_M)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),fd.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(fd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),qr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),dd.multiplyMatrices(n,er),Xr.matrixWorld=dd,Xr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){const l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,_u,$n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Ol(i,e){return i-e}function vM(i,e){return i.z-e.z}function xM(i,e){return e.z-i.z}class yM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const Vn=new ct,bM=new lt(1,1,1),Bl=new Jo,no=new qt,Ts=new Nn,jr=new U,pd=new U,MM=new U,kl=new yM,Tn=new Lt,io=[];function SM(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function As(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class EM extends Lt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new ti,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ha(t,e,e,Xn,$n);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ha(t,e,e,Ko,gs);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ha(t,e,e,Xn,$n);n.colorSpace=Et.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new dn(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new dn(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,no).applyMatrix4(Vn),e.union(no)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Ts).applyMatrix4(Vn),e.union(Ts)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ol),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Vn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(bM.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ol),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);SM(u,d,l);const f=u.itemSize;for(let _=u.count,v=c;_<v;_++){const m=l+_;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,_=f.array,v=e-u;for(let m=h;m<h+d;m++)_[m]=_[m]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const _=d[f],{array:v,itemSize:m}=_;v.copyWithin(e*m,h*m,(h+u)*m),_.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new qt,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(jr.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new Nn;this.getBoundingBoxAt(e,no),no.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;a&&(u=a.getX(u)),jr.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(jr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ol);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);As(this._multiDrawCounts,s),As(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),As(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),As(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),As(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ti,this._initializeGeometry(r));const a=this.geometry;r.index&&As(r.index.array,a.index.array);for(const o in r.attributes)As(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Tn.material=this.material,Tn.geometry.index=a.index,Tn.geometry.attributes=a.attributes,Tn.geometry.boundingBox===null&&(Tn.geometry.boundingBox=new qt),Tn.geometry.boundingSphere===null&&(Tn.geometry.boundingSphere=new Nn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=s[c];Tn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Tn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Tn.geometry.boundingBox),this.getBoundingSphereAt(c,Tn.geometry.boundingSphere),Tn.raycast(e,io);for(let u=0,d=io.length;u<d;u++){const f=io[u];f.object=this,f.batchId=o,t.push(f)}io.length=0}Tn.material=null,Tn.geometry.index=null,Tn.geometry.attributes={},Tn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,_=f.image.data;d&&(Vn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Bl.setFromProjectionMatrix(Vn,e.coordinateSystem));let v=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),jr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Vn),pd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Vn);for(let y=0,M=l.length;y<M;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,Vn),this.getBoundingSphereAt(x,Ts).applyMatrix4(Vn);let T=!1;if(d&&(T=!Bl.intersectsSphere(Ts)),!T){const w=u[x],A=MM.subVectors(Ts.center,jr).dot(pd);kl.push(w.start,w.count,A,y)}}const m=kl.list,p=this.customSort;p===null?m.sort(r.transparent?xM:vM):p.call(this,m,n);for(let y=0,M=m.length;y<M;y++){const x=m[y];c[v]=x.start*o,h[v]=x.count,_[v]=x.index,v++}kl.reset()}else for(let m=0,p=l.length;m<p;m++)if(l[m].visible&&l[m].active){const y=l[m].geometryIndex;let M=!1;if(d&&(this.getMatrixAt(m,Vn),this.getBoundingSphereAt(y,Ts).applyMatrix4(Vn),M=!Bl.intersectsSphere(Ts)),!M){const x=u[y];c[v]=x.start*o,h[v]=x.count,_[v]=m,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class sp extends Ri{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new U,Wo=new U,md=new ct,Yr=new Bs,so=new Nn,zl=new U,_d=new U;class Ra extends Kt{constructor(e=new ti,t=new sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Go.fromBufferAttribute(t,s-1),Wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;md.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),M=ro(this,e,Yr,l,p,y);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(f),p=ro(this,e,Yr,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const p=ro(this,e,Yr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=ro(this,e,Yr,l,_-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ro(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Go.fromBufferAttribute(a,s),Wo.fromBufferAttribute(a,r),t.distanceSqToSegment(Go,Wo,zl,_d)>n)return;zl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zl);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const gd=new U,vd=new U;class Au extends Ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gd.fromBufferAttribute(t,s),vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gd.distanceTo(vd);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wu extends Ra{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rp extends Ri{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xd=new ct,Qc=new Bs,ao=new Nn,oo=new U;class Ru extends Kt{constructor(e=new ti,t=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;xd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(xd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,v=f;_<v;_++){const m=c.getX(_);oo.fromBufferAttribute(u,m),yd(oo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,v=f;_<v;_++)oo.fromBufferAttribute(u,_),yd(oo,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yd(i,e,t,n,s,r,a){const o=Qc.distanceSqToPoint(i);if(o<t){const l=new U;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Cu extends ti{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new U,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oi(a,3)),this.setAttribute("normal",new oi(o,3)),this.setAttribute("uv",new oi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xa extends Ri{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends xa{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function TM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function AM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function bd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function ap(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ca{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wM extends Ca{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hh:r=e,o=2*t-n;break;case dh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:a=e,l=2*n-t;break;case dh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,p=-d*m+2*d*v-d*_,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*_+1,M=(-1-f)*m+(1.5+f)*v+.5*_,x=f*m-f*v;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+M*a[l+T]+x*a[u+T];return r}}class RM extends Ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class CM extends Ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new CM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new RM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&TM(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const v=t[u+_];if(v!==t[d+_]||v!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=ga;class Fr extends Li{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=_a;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class op extends Li{}op.prototype.ValueTypeName="color";class Lr extends Li{}Lr.prototype.ValueTypeName="number";class PM extends Ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ci.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ir extends Li{InterpolantFactoryMethodLinear(e){return new PM(this.times,this.values,this.getValueSize(),e)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends Li{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=_a;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Li{}Dr.prototype.ValueTypeName="vector";class LM{constructor(e="",t=-1,n=[],s=Tg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(DM(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Li.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=AM(l);l=bd(l,1,h),c=bd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Lr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,v){if(f.length!==0){const m=[],p=[];ap(f,m,p,_),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let v=0;v<d[_].morphTargets.length;v++)f[d[_].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[_].morphTargets.length;++y){const M=d[_];m.push(M.time),p.push(M.morphTarget===v?1:0)}s.push(new Lr(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Dr,f+".position",d,"pos",s),n(Ir,f+".quaternion",d,"rot",s),n(Dr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return op;case"quaternion":return Ir;case"bool":case"boolean":return Fr;case"string":return Or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function DM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IM(i.type);if(i.times===void 0){const t=[],n=[];ap(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class UM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const NM=new UM;class Br{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Br.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class FM extends Error{constructor(e,t){super(e),this.response=t}}class lp extends Br{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:s});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{v+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let w=0,A=h.length;w<A;w++){const P=h[w];P.onProgress&&P.onProgress(T)}p.enqueue(x),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new FM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ds.add(e,c);const h=zi[e];delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class OM extends Br{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ds.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=va("img");function l(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class BM extends Br{constructor(e){super(e)}load(e,t,n,s){const r=new xn,a=new OM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class el extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kM extends el{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vl=new ct,Md=new U,Sd=new U;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sd),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zM extends Pu{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class VM extends el{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ed=new ct,Kr=new U,Hl=new U;class HM extends Pu{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),Hl.copy(n.position),Hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hl),n.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed)}}class Lu extends el{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new HM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GM extends Pu{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new GM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class da{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class WM extends Br{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ds.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ds.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,l),r.manager.itemStart(e)}}const Iu="\\[\\]\\.:\\/",XM=new RegExp("["+Iu+"]","g"),Du="[^"+Iu+"]",qM="[^"+Iu.replace("\\.","")+"]",jM=/((?:WC+[\/:])*)/.source.replace("WC",Du),YM=/(WCOD+)?/.source.replace("WCOD",qM),KM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),ZM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),JM=new RegExp("^"+jM+YM+KM+ZM+"$"),QM=["material","materials","bones","map"];class $M{constructor(e,t,n){const s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class kt{constructor(e,t,n){this.path=t,this.parsedPath=n||kt.parseTrackName(t),this.node=kt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new kt.Composite(e,t,n):new kt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(e){const t=JM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);QM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=kt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}kt.Composite=$M;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Td=new ct;class eS{constructor(e,t,n=0,s=1/0){this.ray=new Bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(e,t=!0,n=[]){return eu(e,this,n,t),n.sort(Ad),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,n,t);return n.sort(Ad),n}}function Ad(i,e){return i.distance-e.distance}function eu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)eu(r[a],e,t,!0)}}class wd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Rd=new U,co=new U;class Zi{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rd.subVectors(e,this.start),co.subVectors(this.end,this.start);const n=co.dot(co);let r=co.dot(Rd)/n;return t&&(r=gn(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class tS extends Os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const Cd={type:"change"},Uu={type:"start"},cp={type:"end"},uo=new Bs,Pd=new _i,nS=Math.cos(70*yu.DEG2RAD),cn=new U,Hn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class iS extends tS{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ci,this._lastTargetPosition=new U,this._quat=new Ci().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wd,this._sphericalDelta=new wd,this._scale=1,this._panOffset=new U,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new U,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rS.bind(this),this._onPointerDown=sS.bind(this),this._onPointerUp=aS.bind(this),this._onContextMenu=fS.bind(this),this._onMouseWheel=cS.bind(this),this._onKeyDown=uS.bind(this),this._onTouchStart=hS.bind(this),this._onTouchMove=dS.bind(this),this._onMouseDown=oS.bind(this),this._onMouseMove=lS.bind(this),this._interceptControlDown=pS.bind(this),this._interceptControlUp=mS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cd),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Hn:n>Math.PI&&(n-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=cn.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<nS?this.object.lookAt(this.target):(Pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(Pd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(Cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function rS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function aS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cp),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Wt.DOLLY;break;case gr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}break;case gr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Uu)}function lS(i){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(i.preventDefault(),this.dispatchEvent(Uu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cp))}function uS(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function hS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Wt.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Wt.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Uu)}function dS(i){switch(this._trackPointer(i),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Wt.NONE}}function fS(i){this.enabled!==!1&&i.preventDefault()}function pS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ld(i,e){if(e===Ag)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===jc||e===Bf){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===jc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class _S extends Br{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new NS(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=da.extractUrlBase(e);a=da.resolveURL(c,this.path)}else a=da.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new lp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===up){try{a[St.KHR_BINARY_GLTF]=new FS(e)}catch(u){s&&s(u);return}r=JSON.parse(a[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new KS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case St.KHR_MATERIALS_UNLIT:a[u]=new xS;break;case St.KHR_DRACO_MESH_COMPRESSION:a[u]=new OS(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:a[u]=new BS;break;case St.KHR_MESH_QUANTIZATION:a[u]=new kS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function gS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vS{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new lt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Fn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $c(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Lu(h),c.distance=u;break;case"spot":c=new VM(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class xS{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return hs}extendParams(e,t,n){const s=[];e.color=new lt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,an))}return Promise.all(s)}}class yS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(o,o)}return Promise.all(r)}}class MS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class SS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ES{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new lt(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Fn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,an)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class TS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class AS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new lt().setRGB(o[0],o[1],o[2],Fn),Promise.all(r)}}class wS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class RS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new lt().setRGB(o[0],o[1],o[2],Fn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,an)),Promise.all(r)}}class CS{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class PS{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class LS{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class IS{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DS{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class US{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class NS{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const _ of u){const v=new ct,m=new U,p=new Ci,y=new U(1,1,1),M=new gM(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,v.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const T=l[x];M.instanceColor=new Jc(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Kt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const up="glTF",Zr=12,Id={JSON:1313821514,BIN:5130562};class FS{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Zr,r=new DataView(e,Zr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Id.JSON){const c=new Uint8Array(e,Zr+a,o);this.content=n.decode(c)}else if(l===Id.BIN){const c=Zr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class OS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=tu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=tu[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=br[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const _ in f.attributes){const v=f.attributes[_],m=l[_];m!==void 0&&(v.normalized=m)}u(f)},o,c,Fn,d)})})}}class BS{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class kS{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class hp extends Ca{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,_=e*c,v=_-c,m=-2*f+3*d,p=f-d,y=1-m,M=p-d+u;for(let x=0;x!==o;x++){const T=a[v+x+o],w=a[v+x+l]*h,A=a[_+x+o],P=a[_+x]*h;r[x]=y*T+M*w+m*A+p*P}return r}}const zS=new Ci;class VS extends hp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return zS.fromArray(r).normalize().toArray(r),r}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dd={9728:Un,9729:Qn,9984:Rf,9985:Ro,9986:ia,9987:Xi},Ud={33071:us,33648:Vo,10497:Ar},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HS={CUBICSPLINE:void 0,LINEAR:ga,STEP:_a},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function ws(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function XS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qS(i){let e;const t=i.extensions&&i.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ql(t.attributes):e=i.indices+":"+ql(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ql(i.targets[n]);return e}function ql(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YS=new ct;class KS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new BM(this.options.manager):this.textureLoader=new WM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ws(r,o,s),Hi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(da.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Wl[s.type],o=br[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new dn(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Wl[s.type],c=br[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(y);M||(v=new c(o,p*f,s.count*f/h),M=new dM(v,f/h),t.cache.add(y,M)),m=new Eu(M,l,d%f/h,_)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new dn(v,l,_);if(s.sparse!==void 0){const p=Wl.SCALAR,y=br[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new y(a[1],M,s.sparse.count*p),w=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=T.length;A<P;A++){const E=T[A];if(m.setX(E,w[A*l]),l>=2&&m.setY(E,w[A*l+1]),l>=3&&m.setZ(E,w[A*l+2]),l>=4&&m.setW(E,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Dd[d.magFilter]||Qn,h.minFilter=Dd[d.minFilter]||Xi,h.wrapS=Ud[d.wrapS]||Ar,h.wrapT=Ud[d.wrapT]||Ar,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Un&&h.minFilter!==Qn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(v){const m=new xn(v);m.needsUpdate=!0,d(m)}),t.load(da.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Hi(u,a),u.userData.mimeType=a.mimeType||jS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rp,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new sp,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xa}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){const u=s[St.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new lt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Fn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,an)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gn);const h=r.alphaMode||Xl.OPAQUE;if(h===Xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hs&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new at(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==hs&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hs){const u=r.emissiveFactor;o.emissive=new lt().setRGB(u[0],u[1],u[2],Fn)}return r.emissiveTexture!==void 0&&a!==hs&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,an)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ws(s,u,r),u})}createUniqueName(e){const t=kt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Nd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=qS(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Nd(new ti,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?GS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const v=h[f],m=a[f];let p;const y=c[f];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new pM(v,y):new Lt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===si.TRIANGLE_STRIP?p.geometry=Ld(p.geometry,Bf):m.mode===si.TRIANGLE_FAN&&(p.geometry=Ld(p.geometry,jc));else if(m.mode===si.LINES)p=new Au(v,y);else if(m.mode===si.LINE_STRIP)p=new Ra(v,y);else if(m.mode===si.LINE_LOOP)p=new wu(v,y);else if(m.mode===si.POINTS)p=new Ru(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&XS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&ws(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ws(s,u[0],r),u[0];const d=new Ns;r.extensions&&ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(yu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ct;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Tu(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],_=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,y=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(_),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],v=u[3],m=u[4],p=[];for(let y=0,M=d.length;y<M;y++){const x=d[y],T=f[y],w=_[y],A=v[y],P=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=n._createAnimationTracks(x,T,w,A,P);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new LM(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,YS)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ip:c.length>1?h=new Ns:c.length===1?h=c[0]:h=new Kt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Hi(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){const u=new ct;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ns;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&ws(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Ri||d instanceof xn)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];as[r.path]===as.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(as[r.path]){case as.weights:c=Lr;break;case as.rotation:c=Ir;break;case as.position:case as.scale:c=Dr;break;default:switch(n.itemSize){case 1:c=Lr;break;case 2:case 3:default:c=Dr;break}break}const h=s.interpolation!==void 0?HS[s.interpolation]:ga,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+as[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ir?VS:hp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZS(i,e,t){const n=e.attributes,s=new qt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=nu(br[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,l=new U;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const v=nu(br[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Nd(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=tu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Et.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Hi(i,e),ZS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?WS(i,e.targets,t):i})}class JS extends np{constructor(){super();const e=new Ur;e.deleteAttribute("uv");const t=new xa({side:Rn}),n=new xa,s=new Lu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Lt(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Lt(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Lt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Lt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Lt(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Lt(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Lt(e,tr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Lt(e,tr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const _=new Lt(e,tr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Lt(e,tr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Lt(e,tr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Lt(e,tr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function tr(i){const e=new hs;return e.color.setScalar(i),e}const dp=0,QS=1,$S=2,Fd=2,jl=1.25,Od=1,ei=32,on=ei/4,fp=65535,No=Math.pow(2,-24),Nu=Symbol("SKIP_GENERATION"),pp={strategy:dp,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Nu]:!1};function Zt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function iu(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function Bd(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Yl(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}function Qt(i,e){return e[i+15]===fp}function vn(i,e){return e[i+6]}function wn(i,e){return e[i+14]}function un(i){return i+on}function hn(i,e){const t=e[i+6];return i+t*on}function Fu(i,e){return e[i+7]}function Kl(i,e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,_=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let y=(e-p)*6,M=(e+t-p)*6;y<M;y+=6){const x=i[y+0],T=i[y+1],w=x-T,A=x+T;w<r&&(r=w),A>l&&(l=A),x<u&&(u=x),x>_&&(_=x);const P=i[y+2],E=i[y+3],S=P-E,R=P+E;S<a&&(a=S),R>c&&(c=R),P<d&&(d=P),P>v&&(v=P);const L=i[y+4],D=i[y+5],F=L-D,V=L+D;F<o&&(o=F),V>h&&(h=V),L<f&&(f=L),L>m&&(m=L)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=h,s[0]=u,s[1]=d,s[2]=f,s[3]=_,s[4]=v,s[5]=m}const Ai=8,Ou=8,Zl=new Int32Array(Ai),Ti=new Float32Array(Ai*6),nr=new Float32Array(Ai*6),pi=new Float32Array(6),ho=new Float32Array(6),os=new Int32Array(Ou),kd=new Float32Array(Ou*6);function eE(i,e,t,n){for(let s=0;s<3;s++){const r=e[i+2*s],a=e[i+2*s+1],o=r-a,l=r+a;o<t[n+s]&&(t[n+s]=o),l>t[n+s+3]&&(t[n+s+3]=l)}}function zd(i,e){const t=i[e+3]-i[e],n=i[e+4]-i[e+1],s=i[e+5]-i[e+2];return 2*(t*n+n*s+s*t)}function tE(i,e,t,n,s,r){let a=-1,o=0;if(r===dp)a=iu(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===QS)a=iu(i),a!==-1&&(o=nE(t,n,s,a));else if(r===$S){const l=Yl(i);let c=jl*s;const h=t.offset||0,u=(n-h)*6,d=(n+s-h)*6;for(let f=0;f<3;f++){const _=e[f],p=(e[f+3]-_)/Ai;if(s<Ou){for(let y=0;y<s;y++){const M=u+y*6,x=t[M+2*f];let T=y;for(;T>0&&t[os[T-1]+2*f]>x;)os[T]=os[T-1],T--;os[T]=M}for(let y=0;y<3;y++)pi[y]=1/0,pi[y+3]=-1/0,ho[y]=1/0,ho[y+3]=-1/0;for(let y=s-1;y>=0;y--)Bd(os[y],t,ho),kd.set(ho,y*6);for(let y=0;y<s-1;y++){Bd(os[y],t,pi);const M=t[os[y+1]+2*f];if(t[os[y]+2*f]===M)continue;const x=y+1,T=s-x,w=Yl(pi)/l,A=zd(kd,x*6)/l,P=Od+jl*(w*x+A*T);P<c&&(a=f,c=P,o=M)}}else{for(let x=0;x<Ai;x++){Zl[x]=0;for(let T=0;T<3;T++)Ti[x*6+T]=1/0,Ti[x*6+T+3]=-1/0}for(let x=u;x<d;x+=6){let A=~~((t[x+2*f]-_)/p);A>=Ai&&(A=Ai-1),Zl[A]++,eE(x,t,Ti,A*6)}const y=(Ai-1)*6;for(let x=0;x<6;x++)nr[y+x]=Ti[y+x];for(let x=Ai-2;x>=0;x--){const T=x*6,w=T+6;for(let A=0;A<3;A++)nr[T+A]=Math.min(Ti[T+A],nr[w+A]),nr[T+A+3]=Math.max(Ti[T+A+3],nr[w+A+3])}let M=0;for(let x=0;x<Ai-1;x++){const T=x*6,w=Zl[x];if(w!==0)for(let R=0;R<3;R++)M===0?(pi[R]=Ti[T+R],pi[R+3]=Ti[T+R+3]):(pi[R]=Math.min(pi[R],Ti[T+R]),pi[R+3]=Math.max(pi[R+3],Ti[T+R+3]));M+=w;let A=0,P=0;M!==0&&(A=Yl(pi)/l);const E=s-M;E!==0&&(P=zd(nr,T+6)/l);const S=Od+jl*(A*M+P*E);S<c&&(a=f,c=S,o=_+p+x*p)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function nE(i,e,t,n){let s=0;const r=i.offset;for(let a=e,o=e+t;a<o;a++)s+=i[(a-r)*6+n*2];return s/t}function iE(i,e,t,n,s,r){let a=n,o=n+s-1;const l=r.pos,c=r.axis*2,h=t.offset||0;for(;;){for(;a<=o&&t[(a-h)*6+c]<l;)a++;for(;a<=o&&t[(o-h)*6+c]>=l;)o--;if(a<o){for(let u=0;u<e;u++){let d=i[a*e+u];i[a*e+u]=i[o*e+u],i[o*e+u]=d}for(let u=0;u<6;u++){const d=a-h,f=o-h,_=t[d*6+u];t[d*6+u]=t[f*6+u],t[f*6+u]=_}a++,o--}else return a}}const sE=Math.pow(2,32),ir=new Float32Array(6),fo=new Float32Array(6);function rE(i,e,t,n,s,r){const{maxDepth:a,verbose:o,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:d=!1}=s,f=i.primitiveBuffer,_=i.primitiveBufferStride,v=d?SharedArrayBuffer:ArrayBuffer,m=new v(ei*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),y=new Uint32Array(m),M=new Uint16Array(m);let x=0,T=!1;return Kl(e,t,n,ir,fo),P(t,n,0),m.slice(0,x*ei);function w(E){u&&u((E-r.offset)/r.count)}function A(E,S,R){const L=E*2;y[E+6]=S,M[L+14]=R,M[L+15]=fp,w(S+R)}function P(E,S,R){const L=x++,D=L*on;p.set(ir,D),!T&&R>=a&&(T=!0,o&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));const F=S>c;if(S<=l&&!F||R>=a){A(D,E,S);return}const V=tE(ir,fo,e,E,S,h);let X=V.axis===-1?-1:iE(f,_,e,E,S,V);if(V.axis===-1||X===E||X===E+S){if(!F){A(D,E,S);return}V.axis=Math.max(0,iu(ir)),X=E+Math.max(1,Math.floor(S/2))}y[D+7]=V.axis;const oe=X-E;Kl(e,E,oe,ir,fo),P(E,oe,R+1);const Q=x-L;if(Q>sE)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");y[D+6]=Q;const Me=S-oe;Kl(e,X,Me,ir,fo),P(X,Me,R+1)}}function aE(i,e){const t=i.getRootRanges(e.range),n=t[0],s=t[t.length-1],r={offset:n.offset,count:s.offset+s.count-n.offset},a=new Float32Array(6*r.count);a.offset=r.offset,i.computePrimitiveBounds(r.offset,r.count,a),i._roots=t.map(o=>rE(i,a,o.offset,o.count,e,r))}class Bu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class oE{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const zt=new oE;let fs,_r;const sr=[],po=new Bu(()=>new qt);function lE(i,e,t,n,s,r){fs=po.getPrimitive(),_r=po.getPrimitive(),sr.push(fs,_r),zt.setBuffer(i._roots[e]);const a=su(0,i.geometry,t,n,s,r);zt.clearBuffer(),po.releasePrimitive(fs),po.releasePrimitive(_r),sr.pop(),sr.pop();const o=sr.length;return o>0&&(_r=sr[o-1],fs=sr[o-2]),a}function su(i,e,t,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:c}=zt;let h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);return Zt(i,o,fs),n(d,f,!1,a,r+i/on,fs)}else{let S=function(L){const{uint16Array:D,uint32Array:F}=zt;let V=L*2;for(;!Qt(V,D);)L=un(L),V=L*2;return vn(L,F)},R=function(L){const{uint16Array:D,uint32Array:F}=zt;let V=L*2;for(;!Qt(V,D);)L=hn(L,F),V=L*2;return vn(L,F)+wn(V,D)};const d=un(i),f=hn(i,c);let _=d,v=f,m,p,y,M;if(s&&(y=fs,M=_r,Zt(_,o,y),Zt(v,o,M),m=s(y),p=s(M),p<m)){_=f,v=d;const L=m;m=p,p=L,y=M}y||(y=fs,Zt(_,o,y));const x=Qt(_*2,l),T=t(y,x,m,a+1,r+_/on);let w;if(T===Fd){const L=S(_),F=R(_)-L;w=n(L,F,!0,a+1,r+_/on,y)}else w=T&&su(_,e,t,n,s,r,a+1);if(w)return!0;M=_r,Zt(v,o,M);const A=Qt(v*2,l),P=t(M,A,p,a+1,r+v/on);let E;if(P===Fd){const L=S(v),F=R(v)-L;E=n(L,F,!0,a+1,r+v/on,M)}else E=P&&su(v,e,t,n,s,r,a+1);return!!E}}const fa=new zt.constructor,Xo=new zt.constructor,ls=new Bu(()=>new qt),rr=new qt,ar=new qt,Jl=new qt,Ql=new qt;let $l=!1;function cE(i,e,t,n){if($l)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");$l=!0;const s=i._roots,r=e._roots;let a,o=0,l=0;const c=new ct().copy(t).invert();for(let h=0,u=s.length;h<u;h++){fa.setBuffer(s[h]),l=0;const d=ls.getPrimitive();Zt(0,fa.float32Array,d),d.applyMatrix4(c);for(let f=0,_=r.length;f<_&&(Xo.setBuffer(r[f]),a=mi(0,0,t,c,n,o,l,0,0,d),Xo.clearBuffer(),l+=r[f].byteLength/ei,!a);f++);if(ls.releasePrimitive(d),fa.clearBuffer(),o+=s[h].byteLength/ei,a)break}return $l=!1,a}function mi(i,e,t,n,s,r=0,a=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=Xo,d=fa):(u=fa,d=Xo);const f=u.float32Array,_=u.uint32Array,v=u.uint16Array,m=d.float32Array,p=d.uint32Array,y=d.uint16Array,M=i*2,x=e*2,T=Qt(M,v),w=Qt(x,y);let A=!1;if(w&&T)h?A=s(vn(e,p),wn(e*2,y),vn(i,_),wn(i*2,v),l,a+e/on,o,r+i/on):A=s(vn(i,_),wn(i*2,v),vn(e,p),wn(e*2,y),o,r+i/on,l,a+e/on);else if(w){const P=ls.getPrimitive();Zt(e,m,P),P.applyMatrix4(t);const E=un(i),S=hn(i,_);Zt(E,f,rr),Zt(S,f,ar);const R=P.intersectsBox(rr),L=P.intersectsBox(ar);A=R&&mi(e,E,n,t,s,a,r,l,o+1,P,!h)||L&&mi(e,S,n,t,s,a,r,l,o+1,P,!h),ls.releasePrimitive(P)}else{const P=un(e),E=hn(e,p);Zt(P,m,Jl),Zt(E,m,Ql);const S=c.intersectsBox(Jl),R=c.intersectsBox(Ql);if(S&&R)A=mi(i,P,t,n,s,r,a,o,l+1,c,h)||mi(i,E,t,n,s,r,a,o,l+1,c,h);else if(S)if(T)A=mi(i,P,t,n,s,r,a,o,l+1,c,h);else{const L=ls.getPrimitive();L.copy(Jl).applyMatrix4(t);const D=un(i),F=hn(i,_);Zt(D,f,rr),Zt(F,f,ar);const V=L.intersectsBox(rr),X=L.intersectsBox(ar);A=V&&mi(P,D,n,t,s,a,r,l,o+1,L,!h)||X&&mi(P,F,n,t,s,a,r,l,o+1,L,!h),ls.releasePrimitive(L)}else if(R)if(T)A=mi(i,E,t,n,s,r,a,o,l+1,c,h);else{const L=ls.getPrimitive();L.copy(Ql).applyMatrix4(t);const D=un(i),F=hn(i,_);Zt(D,f,rr),Zt(F,f,ar);const V=L.intersectsBox(rr),X=L.intersectsBox(ar);A=V&&mi(E,D,n,t,s,a,r,l,o+1,L,!h)||X&&mi(E,F,n,t,s,a,r,l,o+1,L,!h),ls.releasePrimitive(L)}}return A}const ec=new class{constructor(){let i=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=i=r._roots[a],this.uint16Array=t=new Uint16Array(i),this.uint32Array=e=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let a=r*2;for(;!Qt(a,t);)r=un(r),a=r*2;return vn(r,e)},this.getRangeEnd=r=>{let a=r*2;for(;!Qt(a,t);)r=hn(r,e),a=r*2;return vn(r,e)+wn(a,t)};const s=(r,a,o)=>{const l=a*2,c=Qt(l,t);if(!r(o,c,a)&&!c){const u=un(a),d=hn(a,e);s(r,u,o+1),s(r,d,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,o,l)=>{if(o){const c=l*2,h=e[l+6],u=t[c+14];return r(a,o,new Float32Array(i,l*4,6),h,u)}else{const c=Fu(l,e);return r(a,o,new Float32Array(i,l*4,6),c)}})}}},Vd=new qt,or=new Float32Array(6);class uE{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...pp,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),aE(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=e,d=e+t;u<d;u++){this.writePrimitiveBounds(u,or,0);const[f,_,v,m,p,y]=or;f<r&&(r=f),m>l&&(l=m),_<a&&(a=_),p>c&&(c=p),v<o&&(o=v),y>h&&(h=y)}return n[s+0]=r,n[s+1]=a,n[s+2]=o,n[s+3]=l,n[s+4]=c,n[s+5]=h,n}computePrimitiveBounds(e,t,n){const s=n.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,or,0);const[o,l,c,h,u,d]=or,f=(o+h)/2,_=(l+u)/2,v=(c+d)/2,m=(h-o)/2,p=(u-l)/2,y=(d-c)/2,M=(r-s)*6;n[M+0]=f,n[M+1]=m+(Math.abs(f)+m)*No,n[M+2]=_,n[M+3]=p+(Math.abs(_)+p)*No,n[M+4]=v,n[M+5]=y+(Math.abs(v)+y)*No}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,s=t.length;n<s;n++)t[n]+=e;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],a=new Uint32Array(r),o=new Uint16Array(r),l=r.byteLength/ei;for(let c=0;c<l;c++){const h=on*c,u=2*h;Qt(u,o)&&(a[h+6]+=e)}}}}traverse(e,t=0){ec.setBVH(this,t),ec.traverse(e),ec.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const s=e[t],r=new Uint32Array(s),a=new Uint16Array(s),o=new Float32Array(s),l=s.byteLength/ei;for(let c=l-1;c>=0;c--){const h=c*on,u=h*2;if(Qt(u,a)){const f=vn(h,r),_=wn(u,a);this.writePrimitiveRangeBounds(f,_,or,0),o.set(or,h)}else{const f=un(h),_=hn(h,r);for(let v=0;v<3;v++){const m=o[f+v],p=o[f+v+3],y=o[_+v],M=o[_+v+3];o[h+v]=m<y?m:y,o[h+v+3]=p>M?p:M}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Zt(0,new Float32Array(n),Vd),e.union(Vd)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:a,iterate:o}=e;if(s&&r){const u=s;s=(d,f,_,v,m)=>u(d,f,_,v,m)?!0:o(d,f,this,r,_,v,a)}else s||(r?s=(u,d,f,_)=>o(u,d,this,r,f,_,a):s=(u,d,f)=>f);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const f=h[u];if(l=lE(this,u,n,s,t,c),l)break;c+=f.byteLength/ei}return l}bvhcast(e,t,n){let{intersectsRanges:s}=n;return cE(this,e,t,s)}}function hE(){return typeof SharedArrayBuffer<"u"}function ku(i){return i.index?i.index.count:i.attributes.position.count}function tl(i){return ku(i)/3}function dE(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function fE(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=dE(t,n);i.setIndex(new dn(s,1));for(let r=0;r<t;r++)s[r]=r}}function pE(i,e,t){const n=ku(i)/t,s=e||i.drawRange,r=s.start/t,a=(s.start+s.count)/t,o=Math.max(0,r),l=Math.min(n,a)-o;return{offset:Math.floor(o),count:Math.floor(l)}}function mE(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function Hd(i,e,t){const n=pE(i,e,t),s=mE(i,t);if(!s.length)return[n];const r=[],a=n.offset,o=n.offset+n.count,l=ku(i)/t,c=[];for(const d of s){const{offset:f,count:_}=d,v=f,m=isFinite(_)?_:l-f,p=f+m;v<o&&p>a&&(c.push({pos:Math.max(a,v),isStart:!0}),c.push({pos:Math.min(o,p),isStart:!1}))}c.sort((d,f)=>d.pos!==f.pos?d.pos-f.pos:d.type==="end"?-1:1);let h=0,u=null;for(const d of c){const f=d.pos;h!==0&&f!==u&&r.push({offset:u,count:f-u}),h+=d.isStart?1:-1,u=f}return r}function _E(i,e){const t=i[i.length-1],n=t.offset+t.count>2**16,s=i.reduce((c,h)=>c+h.count,0),r=n?4:2,a=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),o=n?new Uint32Array(a):new Uint16Array(a);let l=0;for(let c=0;c<i.length;c++){const{offset:h,count:u}=i[c];for(let d=0;d<u;d++)o[l+d]=h+d;l+=u}return o}class gE extends uE{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!hE())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...pp,...t},t[Nu]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const s=Hd(t,e.range,n),r=_E(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else fE(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new qt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Hd(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Ji{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],l=e.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}Ji.prototype.setFromBox=(function(){const i=new U;return function(t,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*h+r.z*(1-h);const u=t.dot(i);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}})();const vE=(function(){const i=new U,e=new U,t=new U;return function(s,r,a){const o=s.start,l=i,c=r.start,h=e;t.subVectors(o,c),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const u=t.dot(h),d=h.dot(l),f=h.dot(h),_=t.dot(l),m=l.dot(l)*f-d*d;let p,y;m!==0?p=(u*d-_*f)/m:p=0,y=(u+p*d)/f,a.x=p,a.y=y}})(),zu=(function(){const i=new at,e=new U,t=new U;return function(s,r,a,o){vE(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,a),r.at(c,o);return}else if(l>=0&&l<=1){c<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=s.start:h=s.end;let u;c<0?u=r.start:u=r.end;const d=e,f=t;if(s.closestPointToPoint(u,!0,e),r.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}})(),xE=(function(){const i=new U,e=new U,t=new _i,n=new Zi;return function(r,a){const{radius:o,center:l}=r,{a:c,b:h,c:u}=a;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const v=a.getPlane(t);if(Math.abs(v.distanceToPoint(l))<=o){const p=v.projectPoint(l,e);if(a.containsPoint(p))return!0}return!1}})(),yE=["x","y","z"],Gi=1e-15,Gd=Gi*Gi;function ii(i){return Math.abs(i)<Gi}class yi extends bn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new Ji),this.points=[this.a,this.b,this.c],this.plane=new _i,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Zi,this.needsUpdate=!0}intersectsSphere(e){return xE(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const c=r[1],h=a[1];c.subVectors(e,t),h.setFromPoints(c,s);const u=r[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,s);const f=r[3],_=a[3];f.subVectors(n,e),_.setFromPoints(f,s);const v=c.length(),m=u.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Gi?m<Gi||p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<Gi?p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<Gi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}yi.prototype.closestPointToSegment=(function(){const i=new U,e=new U,t=new Zi;return function(s,r=null,a=null){this.needsUpdate&&this.update();const{start:o,end:l}=s,c=this.points;let h,u=1/0;const d=this.plane.distanceToPoint(o),f=this.plane.distanceToPoint(l);if(d*f<0&&this.plane.intersectLine(s,i)!==null&&this.containsPoint(i))return r&&r.copy(i),a&&a.copy(i),0;for(let _=0;_<3;_++){const v=(_+1)%3;t.start.copy(c[_]),t.end.copy(c[v]),zu(t,s,i,e),h=i.distanceToSquared(e),h<u&&(u=h,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),h=o.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<u&&(u=h,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(u)}})();yi.prototype.intersectsTriangle=(function(){const i=new yi,e=new Ji,t=new Ji,n=new U,s=new U,r=new U,a=new U,o=new Zi,l=new Zi,c=new U,h=new at,u=new at;function d(M,x,T,w){const A=n;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?A.copy(M.plane.normal):A.copy(x.plane.normal);const P=M.satBounds,E=M.satAxes;for(let L=1;L<4;L++){const D=P[L],F=E[L];if(e.setFromPoints(F,x.points),D.isSeparated(e)||(a.copy(A).cross(F),e.setFromPoints(a,M.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}const S=x.satBounds,R=x.satAxes;for(let L=1;L<4;L++){const D=S[L],F=R[L];if(e.setFromPoints(F,M.points),D.isSeparated(e)||(a.crossVectors(A,F),e.setFromPoints(a,M.points),t.setFromPoints(a,x.points),e.isSeparated(t)))return!1}return T&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function f(M,x,T,w,A,P,E,S,R,L,D){let F=E/(E-S);L.x=w+(A-w)*F,D.start.subVectors(x,M).multiplyScalar(F).add(M),F=E/(E-R),L.y=w+(P-w)*F,D.end.subVectors(T,M).multiplyScalar(F).add(M)}function _(M,x,T,w,A,P,E,S,R,L,D){if(A>0)f(M.c,M.a,M.b,w,x,T,R,E,S,L,D);else if(P>0)f(M.b,M.a,M.c,T,x,w,S,E,R,L,D);else if(S*R>0||E!=0)f(M.a,M.b,M.c,x,T,w,E,S,R,L,D);else if(S!=0)f(M.b,M.a,M.c,T,x,w,S,E,R,L,D);else if(R!=0)f(M.c,M.a,M.b,w,x,T,R,E,S,L,D);else return!0;return!1}function v(M,x,T,w){const A=x.degenerateSegment,P=M.plane.distanceToPoint(A.start),E=M.plane.distanceToPoint(A.end);return ii(P)?ii(E)?d(M,x,T,w):(T&&(T.start.copy(A.start),T.end.copy(A.start)),M.containsPoint(A.start)):ii(E)?(T&&(T.start.copy(A.end),T.end.copy(A.end)),M.containsPoint(A.end)):M.plane.intersectLine(A,n)!=null?(T&&(T.start.copy(n),T.end.copy(n)),M.containsPoint(n)):!1}function m(M,x,T){const w=x.a;return ii(M.plane.distanceToPoint(w))&&M.containsPoint(w)?(T&&(T.start.copy(w),T.end.copy(w)),!0):!1}function p(M,x,T){const w=M.degenerateSegment,A=x.a;return w.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<Gd?(T&&(T.start.copy(A),T.end.copy(A)),!0):!1}function y(M,x,T,w){if(M.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){const A=M.degenerateSegment,P=x.degenerateSegment,E=s,S=r;A.delta(E),P.delta(S);const R=n.subVectors(P.start,A.start),L=E.x*S.y-E.y*S.x;if(ii(L))return!1;const D=(R.x*S.y-R.y*S.x)/L,F=-(E.x*R.y-E.y*R.x)/L;if(D<0||D>1||F<0||F>1)return!1;const V=A.start.z+E.z*D,X=P.start.z+S.z*F;return ii(V-X)?(T&&(T.start.copy(A.start).addScaledVector(E,D),T.end.copy(A.start).addScaledVector(E,D)),!0):!1}else return x.isDegenerateIntoPoint?p(M,x,T):v(x,M,T,w);else{if(M.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(M.a)<Gd?(T&&(T.start.copy(M.a),T.end.copy(M.a)),!0):!1:x.isDegenerateIntoSegment?p(x,M,T):m(x,M,T);if(x.isDegenerateIntoPoint)return m(M,x,T);if(x.isDegenerateIntoSegment)return v(M,x,T,w)}}return function(x,T=null,w=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const A=y(this,x,T,w);if(A!==void 0)return A;const P=this.plane,E=x.plane;let S=E.distanceToPoint(this.a),R=E.distanceToPoint(this.b),L=E.distanceToPoint(this.c);ii(S)&&(S=0),ii(R)&&(R=0),ii(L)&&(L=0);const D=S*R,F=S*L;if(D>0&&F>0)return!1;let V=P.distanceToPoint(x.a),X=P.distanceToPoint(x.b),oe=P.distanceToPoint(x.c);ii(V)&&(V=0),ii(X)&&(X=0),ii(oe)&&(oe=0);const Q=V*X,Me=V*oe;if(Q>0&&Me>0)return!1;s.copy(P.normal),r.copy(E.normal);const ve=s.cross(r);let Y=0,re=Math.abs(ve.x);const ye=Math.abs(ve.y);ye>re&&(re=ye,Y=1),Math.abs(ve.z)>re&&(Y=2);const G=yE[Y],$=this.a[G],ie=this.b[G],Re=this.c[G],Pe=x.a[G],Fe=x.b[G],Le=x.c[G];if(_(this,$,ie,Re,D,F,S,R,L,h,o))return d(this,x,T,w);if(_(x,Pe,Fe,Le,Q,Me,V,X,oe,u,l))return d(this,x,T,w);if(h.y<h.x){const Ue=h.y;h.y=h.x,h.x=Ue,c.copy(o.start),o.start.copy(o.end),o.end.copy(c)}if(u.y<u.x){const Ue=u.y;u.y=u.x,u.x=Ue,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(T&&(u.x>h.x?T.start.copy(l.start):T.start.copy(o.start),u.y<h.y?T.end.copy(l.end):T.end.copy(o.end)),!0)}})();yi.prototype.distanceToPoint=(function(){const i=new U;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();yi.prototype.distanceToTriangle=(function(){const i=new U,e=new U,t=["a","b","c"],n=new Zi,s=new Zi;return function(a,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(a,c,!0))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const f=t[u],_=a[f];this.closestPointToPoint(_,i),d=_.distanceToSquared(i),d<h&&(h=d,o&&o.copy(i),l&&l.copy(_));const v=this[f];a.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<h&&(h=d,o&&o.copy(v),l&&l.copy(i))}for(let u=0;u<3;u++){const d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let _=0;_<3;_++){const v=t[_],m=t[(_+1)%3];s.set(a[v],a[m]),zu(n,s,i,e);const p=i.distanceToSquared(e);p<h&&(h=p,o&&o.copy(i),l&&l.copy(e))}}return Math.sqrt(h)}})();class On{constructor(e,t,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new ct,this.invMatrix=new ct,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new Ji),this.alignedSatBounds=new Array(3).fill().map(()=>new Ji),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}On.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,f=s[d];f.x=c?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let c=0;c<3;c++){const h=a[c],u=r[c],d=1<<c,f=s[d];h.subVectors(o,f),u.setFromPoints(h,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();On.prototype.intersectsBox=(function(){const i=new Ji;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=a[l],h=r[l];if(i.setFromBox(c,t),h.isSeparated(i))return!1}return!0}})();On.prototype.intersectsTriangle=(function(){const i=new yi,e=new Array(3),t=new Ji,n=new Ji,s=new U;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const f=o[d],_=l[d];if(t.setFromPoints(_,e),f.isSeparated(t))return!1}const c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){const f=c[d],_=h[d];if(t.setFromPoints(_,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){const f=l[d];for(let _=0;_<4;_++){const v=h[_];if(s.crossVectors(f,v),t.setFromPoints(s,e),n.setFromPoints(s,u),t.isSeparated(n))return!1}}return!0}})();On.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();On.prototype.distanceToPoint=(function(){const i=new U;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();On.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Zi),t=new Array(12).fill().map(()=>new Zi),n=new U,s=new U;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const h=o*o,u=a.min,d=a.max,f=this.points;let _=1/0;for(let m=0;m<8;m++){const p=f[m];s.copy(p).clamp(u,d);const y=p.distanceToSquared(s);if(y<_&&(_=y,l&&l.copy(p),c&&c.copy(s),y<h))return Math.sqrt(y)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const M=(m+1)%3,x=(m+2)%3,T=p<<M|y<<x,w=1<<m|p<<M|y<<x,A=f[T],P=f[w];e[v].set(A,P);const S=i[m],R=i[M],L=i[x],D=t[v],F=D.start,V=D.end;F[S]=u[S],F[R]=p?u[R]:d[R],F[L]=y?u[L]:d[L],V[S]=d[S],V[R]=p?u[R]:d[R],V[L]=y?u[L]:d[L],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?d.x:u.x,s.y=p?d.y:u.y,s.z=y?d.z:u.z,this.closestPointToPoint(s,n);const M=s.distanceToSquared(n);if(M<_&&(_=M,l&&l.copy(n),c&&c.copy(s),M<h))return Math.sqrt(M)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const M=t[y];zu(p,M,n,s);const x=n.distanceToSquared(s);if(x<_&&(_=x,l&&l.copy(n),c&&c.copy(s),x<h))return Math.sqrt(x)}}return Math.sqrt(_)}})();class bE extends Bu{constructor(){super(()=>new yi)}}const ai=new bE,Jr=new U,tc=new U;function ME(i,e,t={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(Jr.copy(e).clamp(h.min,h.max),Jr.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Jr);const d=e.distanceToSquared(Jr);return d<o&&(tc.copy(Jr),o=d,l=u),d<r}}),o===1/0)return null;const c=Math.sqrt(o);return t.point?t.point.copy(tc):t.point=tc.clone(),t.distance=c,t.faceIndex=l,t}const mo=parseInt(Aa)>=169,SE=parseInt(Aa)<=161,Rs=new U,Cs=new U,Ps=new U,_o=new at,go=new at,vo=new at,Wd=new U,Xd=new U,qd=new U,Qr=new U;function EE(i,e,t,n,s,r,a,o){let l;if(r===Rn?l=i.intersectTriangle(n,t,e,!0,s):l=i.intersectTriangle(e,t,n,r!==Gn,s),l===null)return null;const c=i.origin.distanceTo(s);return c<a||c>o?null:{distance:c,point:s.clone()}}function jd(i,e,t,n,s,r,a,o,l,c,h){Rs.fromBufferAttribute(e,r),Cs.fromBufferAttribute(e,a),Ps.fromBufferAttribute(e,o);const u=EE(i,Rs,Cs,Ps,Qr,l,c,h);if(u){if(n){_o.fromBufferAttribute(n,r),go.fromBufferAttribute(n,a),vo.fromBufferAttribute(n,o),u.uv=new at;const f=bn.getInterpolation(Qr,Rs,Cs,Ps,_o,go,vo,u.uv);mo||(u.uv=f)}if(s){_o.fromBufferAttribute(s,r),go.fromBufferAttribute(s,a),vo.fromBufferAttribute(s,o),u.uv1=new at;const f=bn.getInterpolation(Qr,Rs,Cs,Ps,_o,go,vo,u.uv1);mo||(u.uv1=f),SE&&(u.uv2=u.uv1)}if(t){Wd.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,a),qd.fromBufferAttribute(t,o),u.normal=new U;const f=bn.getInterpolation(Qr,Rs,Cs,Ps,Wd,Xd,qd,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),mo||(u.normal=f)}const d={a:r,b:a,c:o,normal:new U,materialIndex:0};if(bn.getNormal(Rs,Cs,Ps,d.normal),u.face=d,u.faceIndex=r,mo){const f=new U;bn.getBarycoord(Qr,Rs,Cs,Ps,f),u.barycoord=f}}return u}function Yd(i){return i&&i.isMaterial?i.side:i}function nl(i,e,t,n,s,r,a){const o=n*3;let l=o+0,c=o+1,h=o+2;const{index:u,groups:d}=i;i.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));const{position:f,normal:_,uv:v,uv1:m}=i.attributes;if(Array.isArray(e)){const p=n*3;for(let y=0,M=d.length;y<M;y++){const{start:x,count:T,materialIndex:w}=d[y];if(p>=x&&p<x+T){const A=Yd(e[w]),P=jd(t,f,_,v,m,l,c,h,A,r,a);if(P)if(P.faceIndex=n,P.face.materialIndex=w,s)s.push(P);else return P}}}else{const p=Yd(e),y=jd(t,f,_,v,m,l,c,h,p,r,a);if(y)if(y.faceIndex=n,y.face.materialIndex=0,s)s.push(y);else return y}return null}function ln(i,e,t,n){const s=i.a,r=i.b,a=i.c;let o=e,l=e+1,c=e+2;t&&(o=t.getX(o),l=t.getX(l),c=t.getX(c)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function TE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++)nl(l,e,t,h,r,a,o)}function AE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=nl(o,e,t,u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function wE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=h,ln(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function RE(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,_=!1){const v=d*2;if(Qt(v,o)){const m=vn(d,a),p=wn(v,o);let y=1/0,M=1/0,x=1/0,T=-1/0,w=-1/0,A=-1/0;for(let P=3*m,E=3*(m+p);P<E;P++){let S=n[P];const R=s.getX(S),L=s.getY(S),D=s.getZ(S);R<y&&(y=R),R>T&&(T=R),L<M&&(M=L),L>w&&(w=L),D<x&&(x=D),D>A&&(A=D)}return l[d+0]!==y||l[d+1]!==M||l[d+2]!==x||l[d+3]!==T||l[d+4]!==w||l[d+5]!==A?(l[d+0]=y,l[d+1]=M,l[d+2]=x,l[d+3]=T,l[d+4]=w,l[d+5]=A,!0):!1}else{const m=un(d),p=hn(d,a);let y=_,M=!1,x=!1;if(e){if(!y){const S=m/on+f/ei,R=p/on+f/ei;M=e.has(S),x=e.has(R),y=!M&&!x}}else M=!0,x=!0;const T=y||M,w=y||x;let A=!1;T&&(A=u(m,f,y));let P=!1;w&&(P=u(p,f,y));const E=A||P;if(E)for(let S=0;S<3;S++){const R=m+S,L=p+S,D=l[R],F=l[R+3],V=l[L],X=l[L+3];l[d+S]=D<V?D:V,l[d+S+3]=F>X?F:X}return E}}}function ci(i,e,t,n,s){let r,a,o,l,c,h;const u=1/t.direction.x,d=1/t.direction.y,f=1/t.direction.z,_=t.origin.x,v=t.origin.y,m=t.origin.z;let p=e[i],y=e[i+3],M=e[i+1],x=e[i+3+1],T=e[i+2],w=e[i+3+2];return u>=0?(r=(p-_)*u,a=(y-_)*u):(r=(y-_)*u,a=(p-_)*u),d>=0?(o=(M-v)*d,l=(x-v)*d):(o=(x-v)*d,l=(M-v)*d),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),f>=0?(c=(T-m)*f,h=(w-m)*f):(c=(w-m)*f,h=(T-m)*f),r>h||c>a)?!1:((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),r<=s&&a>=n)}function CE(i,e,t,n,s,r,a,o){const{geometry:l,_indirectBuffer:c}=i;for(let h=n,u=n+s;h<u;h++){let d=c?c[h]:h;nl(l,e,t,d,r,a,o)}}function PE(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let c=1/0,h=null;for(let u=n,d=n+s;u<d;u++){let f;f=nl(o,e,t,l?l[u]:u,null,r,a),f&&f.distance<c&&(h=f,c=f.distance)}return h}function LE(i,e,t,n,s,r,a){const{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=i,u=e+i;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),ln(a,d*3,l,c),a.needsUpdate=!0,n(a,d,s,r))return!0}return!1}function IE(i,e,t,n,s,r,a){zt.setBuffer(i._roots[e]),ci(0,zt.float32Array,n,r,a)&&ru(0,i,t,n,s,r,a),zt.clearBuffer()}function ru(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=zt,h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);TE(e,t,n,d,f,s,r,a)}else{const d=un(i);ci(d,o,n,r,a)&&ru(d,e,t,n,s,r,a);const f=hn(i,c);ci(f,o,n,r,a)&&ru(f,e,t,n,s,r,a)}}const DE=["x","y","z"];function UE(i,e,t,n,s,r){zt.setBuffer(i._roots[e]);let a=null;return ci(0,zt.float32Array,n,s,r)&&(a=au(0,i,t,n,s,r)),zt.clearBuffer(),a}function au(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=zt;let c=i*2;if(Qt(c,o)){const u=vn(i,l),d=wn(c,o);return AE(e,t,n,u,d,s,r)}else{const u=Fu(i,l),d=DE[u],_=n.direction[d]>=0;let v,m;_?(v=un(i),m=hn(i,l)):(v=hn(i,l),m=un(i));const y=ci(v,a,n,s,r)?au(v,e,t,n,s,r):null;if(y){const T=y.point[d];if(_?T<=a[m+u]:T>=a[m+u+3])return y}const x=ci(m,a,n,s,r)?au(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const xo=new qt,lr=new yi,cr=new yi,$r=new ct,Kd=new On,yo=new On;function NE(i,e,t,n){zt.setBuffer(i._roots[e]);const s=ou(0,i,t,n);return zt.clearBuffer(),s}function ou(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=zt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Kd.set(t.boundingBox.min,t.boundingBox.max,n),s=Kd),Qt(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,_=t.attributes.position,v=vn(i,o),m=wn(l,a);if($r.copy(n).invert(),t.boundsTree)return Zt(i,r,yo),yo.matrix.copy($r),yo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>yo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let M=v*3,x=(m+v)*3;M<x;M+=3)if(ln(cr,M,u,d),cr.needsUpdate=!0,y.intersectsTriangle(cr))return!0;return!1}});{const p=tl(t);for(let y=v*3,M=(m+v)*3;y<M;y+=3){ln(lr,y,u,d),lr.a.applyMatrix4($r),lr.b.applyMatrix4($r),lr.c.applyMatrix4($r),lr.needsUpdate=!0;for(let x=0,T=p*3;x<T;x+=3)if(ln(cr,x,f,_),cr.needsUpdate=!0,lr.intersectsTriangle(cr))return!0}}}else{const h=un(i),u=hn(i,o);return Zt(h,r,xo),!!(s.intersectsBox(xo)&&ou(h,e,t,n,s)||(Zt(u,r,xo),s.intersectsBox(xo)&&ou(u,e,t,n,s)))}}const bo=new ct,nc=new On,ea=new On,FE=new U,OE=new U,BE=new U,kE=new U;function zE(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),nc.set(e.boundingBox.min,e.boundingBox.max,t),nc.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ai.getPrimitive(),f=ai.getPrimitive();let _=FE,v=OE,m=null,p=null;s&&(m=BE,p=kE);let y=1/0,M=null,x=null;return bo.copy(t).invert(),ea.matrix.copy(bo),i.shapecast({boundsTraverseOrder:T=>nc.distanceToBox(T),intersectsBounds:(T,w,A)=>A<y&&A<a?(w&&(ea.min.copy(T.min),ea.max.copy(T.max),ea.needsUpdate=!0),!0):!1,intersectsRange:(T,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>ea.distanceToBox(P),intersectsBounds:(P,E,S)=>S<y&&S<a,intersectsRange:(P,E)=>{for(let S=P,R=P+E;S<R;S++){ln(f,3*S,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let L=T,D=T+w;L<D;L++){ln(d,3*L,c,l),d.needsUpdate=!0;const F=d.distanceToTriangle(f,_,m);if(F<y&&(v.copy(_),p&&p.copy(m),y=F,M=L,x=S),F<r)return!0}}}});{const A=tl(e);for(let P=0,E=A;P<E;P++){ln(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let S=T,R=T+w;S<R;S++){ln(d,3*S,c,l),d.needsUpdate=!0;const L=d.distanceToTriangle(f,_,m);if(L<y&&(v.copy(_),p&&p.copy(m),y=L,M=S,x=P),L<r)return!0}}}}}),ai.releasePrimitive(d),ai.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(bo),v.applyMatrix4(bo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function VE(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,l,c=0;const h=i._roots;for(let d=0,f=h.length;d<f;d++)r=h[d],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u(0,c),c+=r.byteLength;function u(d,f,_=!1){const v=d*2;if(Qt(v,o)){const m=vn(d,a),p=wn(v,o);let y=1/0,M=1/0,x=1/0,T=-1/0,w=-1/0,A=-1/0;for(let P=m,E=m+p;P<E;P++){const S=3*i.resolveTriangleIndex(P);for(let R=0;R<3;R++){let L=S+R;L=n?n[L]:L;const D=s.getX(L),F=s.getY(L),V=s.getZ(L);D<y&&(y=D),D>T&&(T=D),F<M&&(M=F),F>w&&(w=F),V<x&&(x=V),V>A&&(A=V)}}return l[d+0]!==y||l[d+1]!==M||l[d+2]!==x||l[d+3]!==T||l[d+4]!==w||l[d+5]!==A?(l[d+0]=y,l[d+1]=M,l[d+2]=x,l[d+3]=T,l[d+4]=w,l[d+5]=A,!0):!1}else{const m=un(d),p=hn(d,a);let y=_,M=!1,x=!1;if(e){if(!y){const S=m/on+f/ei,R=p/on+f/ei;M=e.has(S),x=e.has(R),y=!M&&!x}}else M=!0,x=!0;const T=y||M,w=y||x;let A=!1;T&&(A=u(m,f,y));let P=!1;w&&(P=u(p,f,y));const E=A||P;if(E)for(let S=0;S<3;S++){const R=m+S,L=p+S,D=l[R],F=l[R+3],V=l[L],X=l[L+3];l[d+S]=D<V?D:V,l[d+S+3]=F>X?F:X}return E}}}function HE(i,e,t,n,s,r,a){zt.setBuffer(i._roots[e]),ci(0,zt.float32Array,n,r,a)&&lu(0,i,t,n,s,r,a),zt.clearBuffer()}function lu(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:c}=zt,h=i*2;if(Qt(h,l)){const d=vn(i,c),f=wn(h,l);CE(e,t,n,d,f,s,r,a)}else{const d=un(i);ci(d,o,n,r,a)&&lu(d,e,t,n,s,r,a);const f=hn(i,c);ci(f,o,n,r,a)&&lu(f,e,t,n,s,r,a)}}const GE=["x","y","z"];function WE(i,e,t,n,s,r){zt.setBuffer(i._roots[e]);let a=null;return ci(0,zt.float32Array,n,s,r)&&(a=cu(0,i,t,n,s,r)),zt.clearBuffer(),a}function cu(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=zt;let c=i*2;if(Qt(c,o)){const u=vn(i,l),d=wn(c,o);return PE(e,t,n,u,d,s,r)}else{const u=Fu(i,l),d=GE[u],_=n.direction[d]>=0;let v,m;_?(v=un(i),m=hn(i,l)):(v=hn(i,l),m=un(i));const y=ci(v,a,n,s,r)?cu(v,e,t,n,s,r):null;if(y){const T=y.point[d];if(_?T<=a[m+u]:T>=a[m+u+3])return y}const x=ci(m,a,n,s,r)?cu(m,e,t,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const Mo=new qt,ur=new yi,hr=new yi,ta=new ct,Zd=new On,So=new On;function XE(i,e,t,n){zt.setBuffer(i._roots[e]);const s=uu(0,i,t,n);return zt.clearBuffer(),s}function uu(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=zt;let l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Zd.set(t.boundingBox.min,t.boundingBox.max,n),s=Zd),Qt(l,a)){const h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,_=t.attributes.position,v=vn(i,o),m=wn(l,a);if(ta.copy(n).invert(),t.boundsTree)return Zt(i,r,So),So.matrix.copy(ta),So.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>So.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let M=v,x=m+v;M<x;M++)if(ln(hr,3*e.resolveTriangleIndex(M),u,d),hr.needsUpdate=!0,y.intersectsTriangle(hr))return!0;return!1}});{const p=tl(t);for(let y=v,M=m+v;y<M;y++){const x=e.resolveTriangleIndex(y);ln(ur,3*x,u,d),ur.a.applyMatrix4(ta),ur.b.applyMatrix4(ta),ur.c.applyMatrix4(ta),ur.needsUpdate=!0;for(let T=0,w=p*3;T<w;T+=3)if(ln(hr,T,f,_),hr.needsUpdate=!0,ur.intersectsTriangle(hr))return!0}}}else{const h=un(i),u=hn(i,o);return Zt(h,r,Mo),!!(s.intersectsBox(Mo)&&uu(h,e,t,n,s)||(Zt(u,r,Mo),s.intersectsBox(Mo)&&uu(u,e,t,n,s)))}}const Eo=new ct,ic=new On,na=new On,qE=new U,jE=new U,YE=new U,KE=new U;function ZE(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),ic.set(e.boundingBox.min,e.boundingBox.max,t),ic.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=ai.getPrimitive(),f=ai.getPrimitive();let _=qE,v=jE,m=null,p=null;s&&(m=YE,p=KE);let y=1/0,M=null,x=null;return Eo.copy(t).invert(),na.matrix.copy(Eo),i.shapecast({boundsTraverseOrder:T=>ic.distanceToBox(T),intersectsBounds:(T,w,A)=>A<y&&A<a?(w&&(na.min.copy(T.min),na.max.copy(T.max),na.needsUpdate=!0),!0):!1,intersectsRange:(T,w)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:P=>na.distanceToBox(P),intersectsBounds:(P,E,S)=>S<y&&S<a,intersectsRange:(P,E)=>{for(let S=P,R=P+E;S<R;S++){const L=A.resolveTriangleIndex(S);ln(f,3*L,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=T,F=T+w;D<F;D++){const V=i.resolveTriangleIndex(D);ln(d,3*V,c,l),d.needsUpdate=!0;const X=d.distanceToTriangle(f,_,m);if(X<y&&(v.copy(_),p&&p.copy(m),y=X,M=D,x=S),X<r)return!0}}}})}else{const A=tl(e);for(let P=0,E=A;P<E;P++){ln(f,3*P,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let S=T,R=T+w;S<R;S++){const L=i.resolveTriangleIndex(S);ln(d,3*L,c,l),d.needsUpdate=!0;const D=d.distanceToTriangle(f,_,m);if(D<y&&(v.copy(_),p&&p.copy(m),y=D,M=S,x=P),D<r)return!0}}}}}),ai.releasePrimitive(d),ai.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=y,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Eo),v.applyMatrix4(Eo),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function Jd(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}const To=new On,Ao=new Bs,Qd=new U,$d=new ct,ef=new U,sc=["getX","getY","getZ"];class qo extends gE{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=s.map(l=>l.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=s,o.index=a?a.array:null,o.indirectBuffer=r),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const o=new qo(t,{...n,[Nu]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const h=new dn(e.index,1,!1);t.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o;function l(c){for(let h=0;h<c.length;h++){const u=c[h],d=new Uint32Array(u),f=new Uint16Array(u);for(let _=0,v=u.byteLength/ei;_<v;_++){const m=on*_,p=2*m;Qt(p,f)||(d[m+6]=d[m+6]/on-_)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,c=(r?r[e]:e)*3;let h=c+0,u=c+1,d=c+2;o&&(h=o[h],u=o[u],d=o[d]);for(let f=0;f<3;f++){const _=a[sc[f]](h),v=a[sc[f]](u),m=a[sc[f]](d);let p=_;v<p&&(p=v),m<p&&(p=m);let y=_;v>y&&(y=v),m>y&&(y=m),t[n+f]=p,t[n+f+3]=y}return t}computePrimitiveBounds(e,t,n){const s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,l=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=a.array,h=a.offset||0;let u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);const d=["getX","getY","getZ"],f=n.offset;for(let _=e,v=e+t;_<v;_++){const p=(r?r[_]:_)*3,y=(_-f)*6;let M=p+0,x=p+1,T=p+2;o&&(M=o[M],x=o[x],T=o[T]),l||(M=M*u+h,x=x*u+h,T=T*u+h);for(let w=0;w<3;w++){let A,P,E;l?(A=a[d[w]](M),P=a[d[w]](x),E=a[d[w]](T)):(A=c[M+w],P=c[x+w],E=c[T+w]);let S=A;P<S&&(S=P),E<S&&(S=E);let R=A;P>R&&(R=P),E>R&&(R=E);const L=(R-S)/2,D=w*2;n[y+D+0]=S+L,n[y+D+1]=L+(Math.abs(S)+L)*No}}return n}raycastObject3D(e,t,n=[]){const{material:s}=e;if(s===void 0)return;$d.copy(e.matrixWorld).invert(),Ao.copy(t.ray).applyMatrix4($d),ef.setFromMatrixScale(e.matrixWorld),Qd.copy(Ao.direction).multiply(ef);const r=Qd.length(),a=t.near/r,o=t.far/r;if(t.firstHitOnly===!0){let l=this.raycastFirst(Ao,s,a,o);l=Jd(l,e,t),l&&n.push(l)}else{const l=this.raycast(Ao,s,a,o);for(let c=0,h=l.length;c<h;c++){const u=Jd(l[c],e,t);u&&n.push(u)}}return n}refit(e=null){return(this.indirect?VE:RE)(this,e)}raycast(e,t=li,n=0,s=1/0){const r=this._roots,a=[],o=this.indirect?HE:IE;for(let l=0,c=r.length;l<c;l++)o(this,l,t,e,a,n,s);return a}raycastFirst(e,t=li,n=0,s=1/0){const r=this._roots;let a=null;const o=this.indirect?WE:UE;for(let l=0,c=r.length;l<c;l++){const h=o(this,l,t,e,n,s);h!=null&&(a==null||h.distance<a.distance)&&(a=h)}return a}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?XE:NE;for(let a=0,o=s.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=ai.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?LE:wE});return ai.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=ai.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?_=>{const v=this.resolveTriangleIndex(_);ln(a,v*3,o,l)}:_=>{ln(a,_*3,o,l)},h=ai.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?_=>{const v=e.resolveTriangleIndex(_);ln(h,v*3,u,d)}:_=>{ln(h,_*3,u,d)};if(r){if(!(e instanceof qo))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const _=(v,m,p,y,M,x,T,w)=>{for(let A=p,P=p+y;A<P;A++){f(A),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let E=v,S=v+m;E<S;E++)if(c(E),a.needsUpdate=!0,r(a,h,E,A,M,x,T,w))return!0}return!1};if(s){const v=s;s=function(m,p,y,M,x,T,w,A){return v(m,p,y,M,x,T,w,A)?!0:_(m,p,y,M,x,T,w,A)}}else s=_}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return To.set(e.min,e.max,t),To.needsUpdate=!0,this.shapecast({intersectsBounds:n=>To.intersectsBox(n),intersectsTriangle:n=>To.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){return(this.indirect?ZE:zE)(this,e,t,n,s,r,a)}closestPointToPoint(e,t={},n=0,s=1/0){return ME(this,e,t,n,s)}}const fr={Mesh:Lt.prototype.raycast,Line:Ra.prototype.raycast,LineSegments:Au.prototype.raycast,LineLoop:wu.prototype.raycast,Points:Ru.prototype.raycast,BatchedMesh:EM.prototype.raycast},yn=new Lt,wo=[];function JE(i,e){if(this.isBatchedMesh)QE.call(this,i,e);else{const{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,i,e);else{let n;if(this instanceof Lt)n=fr.Mesh;else if(this instanceof Au)n=fr.LineSegments;else if(this instanceof wu)n=fr.LineLoop;else if(this instanceof Ra)n=fr.Line;else if(this instanceof Ru)n=fr.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,e)}}}function QE(i,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;yn.material=this.material,yn.geometry=this.geometry;const a=yn.geometry.boundsTree,o=yn.geometry.drawRange;yn.geometry.boundingSphere===null&&(yn.geometry.boundingSphere=new Nn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const h=n[l].geometryIndex;if(yn.geometry.boundsTree=t[h],this.getMatrixAt(l,yn.matrixWorld).premultiply(r),!yn.geometry.boundsTree){this.getBoundingBoxAt(h,yn.geometry.boundingBox),this.getBoundingSphereAt(h,yn.geometry.boundingSphere);const u=s[h];yn.geometry.setDrawRange(u.start,u.count)}yn.raycast(i,wo);for(let u=0,d=wo.length;u<d;u++){const f=wo[u];f.object=this,f.batchId=l,e.push(f)}wo.length=0}yn.geometry.boundsTree=a,yn.geometry.drawRange=o,yn.material=null,yn.geometry=null}else fr.BatchedMesh.call(this,i,e)}function $E(i={}){const{type:e=qo}=i;return this.boundsTree=new e(this,i),this.boundsTree}function eT(){this.boundsTree=null}const dr={radial:.55,hemi:25,drop:18};function tT(i,e,t,n,s,r,a=1){const o=Math.max(0,Math.min(1,s));return r.x=(i.x-e.x)*o*dr.radial,r.y=(i.y-e.y)*o*dr.radial,r.z=(i.z-e.z)*o*dr.radial,t==="L"?r.x+=o*dr.hemi*a:t==="R"&&(r.x-=o*dr.hemi*a),(n==="cerebellum"||n==="brainstem")&&(r.y-=o*dr.drop*a),r}var nT=Ee('<div class="stage svelte-v5k0y"><div class="tip svelte-v5k0y" hidden="" role="presentation"><span class="tt"></span><span class="ts svelte-v5k0y"></span></div> <div class="pin svelte-v5k0y" aria-hidden="true"><span class="lbl svelte-v5k0y"></span><span class="stem svelte-v5k0y"></span><span class="dotp svelte-v5k0y"></span></div></div>');function iT(i,e){Cn(e,!0);let t=aa(e,"framing",3,"head");const n=t()==="head";let s,r,a,o,l,c;const h=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let u=null,d,f,_,v=null,m=null,p=null;const y=1e6,M=new _i(new U(0,-1,0),y),x=[M],T=new U(1,1,1);let w=100,A=1,P=!0,E=!1;const S=new Map,R=[],L=new Map,D=new Map,F=[],V=new Map,X=[],oe=new lt,Q=new lt("#5b6476"),Me=new U,ve={x:0,y:0,z:0},Y={x:0,y:0,z:0},re=new eS,ye=new at,q=[],G=new U,$=new lt(sm),ie=new lt(rm),Re=new Map(Object.entries(nm).map(([se,he])=>[se,new lt(he)])),Pe=new Map,Fe=se=>{let he=Pe.get(se);return he||Pe.set(se,he=new lt(gf[se]??lc)),he},Le=De(()=>e.store.s),Ue=De(()=>g(Le).colorBy),Oe=De(()=>g(Le).sel),k=De(()=>g(Le).hover),$e=De(()=>g(Le).xray),Ye=De(()=>g(Le).isolate),We=De(()=>g(Le).show),Ge=De(()=>g(Le).explode),st=De(()=>g(Le).cut),Ce=De(()=>g(Le).cutAxis),I=De(()=>g(Le).rotate),b=De(()=>!!g(Le).quiz),O=De(()=>g(Ue).startsWith("data:")?e.dataMaps.find(se=>`data:${se.key}`===g(Ue))??null:null);let Z=Pt(!1);Jn(()=>{g(Ue),g(Oe),g(k),g($e),g(Ye),g(We),g(O),e.store.colors,g(Z),ke()}),Jn(()=>{g(Ge),g(Z),Je()}),Jn(()=>{g(st),g(Ce),g(Z),B()}),Jn(()=>{const se=g(I);_&&(_.autoRotate=se,_.autoRotateSpeed=1.2,P=!0)});const ue={left:[1,.12,0],right:[-1,.12,0],front:[0,.1,1],back:[0,.15,-1],top:[0,1,.001],below:[0,-1,.001]},le={head:[.75,.25,.6],body:[.22,.1,1],spine:[1,.06,.1]},He=()=>Math.max(1,1.25/((f==null?void 0:f.aspect)||1)),Te={r:new U,u:new U,d:new U,p:new U};function me(se,he=T,we=1.12){const{r:ze,u:ge,d:ot,p:et}=Te;ot.copy(se).normalize(),ge.set(0,1,0),Math.abs(ot.dot(ge))>.98&&ge.set(0,0,-1),ze.crossVectors(ge,ot).normalize(),ge.crossVectors(ot,ze).normalize();let Dt=0,Rt=0,Ht=0;for(let ht=0;ht<8;ht++)et.set((ht&1?.5:-.5)*he.x,(ht&2?.5:-.5)*he.y,(ht&4?.5:-.5)*he.z),Dt=Math.max(Dt,Math.abs(et.dot(ze))),Rt=Math.max(Rt,Math.abs(et.dot(ge))),Ht=Math.max(Ht,Math.abs(et.dot(ot)));const nn=Math.tan(yu.degToRad(((f==null?void 0:f.fov)??32)/2)),Mt=(f==null?void 0:f.aspect)||1;return Math.max(Rt/nn,Dt/(nn*Mt))*we+Ht}function Ne(se){if(se==="inside"){n&&fe(new U,new U(-1,.1,0),w*4.4);return}const he=new U(...ue[se]);n?fe(new U,he,w*3.4):fe(new U,he,me(he),!0)}function ee(){const se=new U(...le[t()]);n?fe(new U,se,w*3.4):fe(new U,se,me(se),!0)}function _e(se,he){if(!se)return ee();if(!n)return Ie(se,he);const we=ft(se);if(!we)return;const ze=he?new U(...he):we.clone().sub(new U(0,we.y*.2,0));ze.length()<w*.15&&ze.set(.3,.4,1),fe(we.multiplyScalar(he?.3:.35),ze.normalize(),w*3.7)}function Ie(se,he){const we=Ke(se);if(!we)return;const ze=we.getCenter(new U),ge=we.getSize(new U),ot=new U(...he??le[t()]);!he&&t()==="body"&&(ot.x+=Math.sign(ze.x)*.35);const et=Math.min(me(ot,T),Math.max(me(ot,ge,1.9),w*.35));fe(ze,ot.normalize(),et,!0)}function Ae(se="medmereport-3d.png"){if(!u)return;u.render(d,f);const he=document.createElement("a");he.download=se,he.href=u.domElement.toDataURL("image/png"),he.click()}function de(se,he){if(g(Ue)==="natural")return he.copy(Re.get(se.lobe)??(se.inner?ie:$));if(g(Ue)==="lobes")return he.copy(Fe(se.lobe));if(g(O)){const ze=O_(g(O),se.key);return he.setRGB(ze[0]/255,ze[1]/255,ze[2]/255,an)}const we=e.store.colors[se.structure];return we?he.setRGB(we[0]/255,we[1]/255,we[2]/255,an):he.set(lc)}const Be=(se,he)=>!!he&&(he.type==="lobe"?se.lobe===he.id:he.type==="region"&&se.key===he.id);function ke(){var he;if(!g(Z))return;const se=!!g(Oe)&&g(Oe).type!=="vessel";X.length=0;for(const we of R){const ze=we.mat,ge=Be(we,g(Oe)),ot=Be(we,g(k));de(we,oe),se&&!ge&&oe.lerp(Q,.55),ze.color.copy(oe),ze.emissive.set(ge?1013358:ot?3359061:0),ze.emissiveIntensity=ge?.55:ot?.6:0;const et=g($e)&&(!we.inner||L_.has(we.layer))&&!ge||g(Ye)&&se&&!ge;ze.transparent!==et&&(ze.transparent=et,ze.needsUpdate=!0),ze.opacity=et?g(Ye)&&se?.06:.13:1,ze.depthWrite=!et;const Dt=g(We)[we.layer]!==!1;for(const Rt of we.meshes)Rt.visible=Dt,Rt.renderOrder=et?5:0,Dt&&!et&&X.push(Rt)}for(const we of F){const ze=!!g(We)[we.layer];if(we.kind==="vessel"&&we.mat.emissive.set(((he=g(Oe))==null?void 0:he.type)==="vessel"&&g(Oe).id===we.key?8330525:3866640),we.kind==="bone"&&!n){const ge=g($e)||g(Ye)&&se;we.mat.transparent!==ge&&(we.mat.transparent=ge,we.mat.needsUpdate=!0),we.mat.opacity=ge?.13:1,we.mat.depthWrite=!ge;for(const ot of we.meshes)ot.renderOrder=ge?5:0}for(const ge of we.meshes)ge.visible=ze,ze&&we.kind==="vessel"&&X.push(ge)}P=!0}function Je(){if(g(Z)){for(const se of R){tT(se.center,Y,se.hemi,se.layer,g(Ge),ve,A);for(const he of se.meshes)he.position.copy(D.get(he)).add(Me.set(ve.x,ve.y,ve.z))}P=!0}}function B(){if(!g(Z))return;const se={x:T.x,y:T.y,z:T.z}[g(Ce)]*.52;M.normal.set(g(Ce)==="x"?-1:0,g(Ce)==="y"?-1:0,g(Ce)==="z"?-1:0),M.constant=g(st)>=.999?y:-se+2*se*g(st),P=!0}let be=null;const ne=new U,J=new U;function fe(se,he,we,ze=!1){if(!f)return;const ge=_.target.clone(),ot=f.position.clone(),et=he?he.clone().normalize():ot.clone().sub(ge).normalize(),Dt=we!==null?ze?we:we*He():ot.distanceTo(ge),Rt=se.clone().add(et.multiplyScalar(Dt));if(h){_.target.copy(se),f.position.copy(Rt),be=null,P=!0;return}be={t0:ge,p0:ot,t1:se.clone(),p1:Rt,start:performance.now(),dur:900}}function Se(se){if(!be)return;let he=Math.min(1,(se-be.start)/be.dur);he=he<.5?4*he*he*he:1-Math.pow(-2*he+2,3)/2,_.target.lerpVectors(be.t0,be.t1,he),ne.copy(be.p0).sub(be.t0),J.copy(be.p1).sub(be.t1);const we=ne.length()+(J.length()-ne.length())*he;ne.normalize().lerp(J.normalize(),he).normalize().multiplyScalar(we),f.position.copy(_.target).add(ne),he>=1&&(be=null)}function Ke(se){const he=new qt;if(se.type==="vessel")F.forEach(we=>{we.key===se.id&&we.meshes.forEach(ze=>he.expandByObject(ze))});else for(const we of R)Be(we,se)&&we.meshes.forEach(ze=>he.expandByObject(ze));return he.isEmpty()?null:he}const ft=se=>{var he;return((he=Ke(se))==null?void 0:he.getCenter(new U))??null};let ut=0,rt=0,At=!1,bt=!1,$t=!1,en=null;function Ct(se,he){if(!u)return null;const we=u.domElement.getBoundingClientRect();ye.set((se-we.left)/we.width*2-1,-((he-we.top)/we.height)*2+1),re.setFromCamera(ye,f),q.length=0;const ze=M.constant>=y;re.firstHitOnly=ze,re.intersectObjects(X,!1,q);for(const ge of q)if(ze||M.distanceToPoint(ge.point)>=-.5)return ge.object;return null}function tn(se){if(!se)return null;const he=V.get(se);if(he)return{type:"vessel",id:he.key};const we=L.get(se);return we?g(Le).pickBy==="lobe"?{type:"lobe",id:we.lobe}:{type:"region",id:we.key}:null}function Bn(){if(!bt||$t)return;bt=!1;const se=At?tn(Ct(ut,rt)):null;if(e.store.dispatch({type:"hover",sel:se}),se&&!g(b)){const he=e.label(se);a.textContent=he.title,o.textContent=he.sub??"";const we=s.getBoundingClientRect();r.style.transform=`translate(${ut-we.left+14}px, ${rt-we.top+14}px)`,r.hidden=!1,u.domElement.style.cursor="pointer"}else r.hidden=!0,u&&(u.domElement.style.cursor="")}function jn(se){ut=se.clientX,rt=se.clientY,At=!0,bt=!0}function Ii(){At=!1,bt=!0,$t=!1}function xt(se){en=[se.clientX,se.clientY],$t=!0,r.hidden=!0,g(Le).rotate&&e.store.dispatch({type:"rotate",on:!1})}function Vt(se){if($t=!1,bt=!0,!en||Math.hypot(se.clientX-en[0],se.clientY-en[1])>5){en=null;return}en=null;const he=Ct(se.clientX,se.clientY);if(g(Le).quiz){const we=he?L.get(he):null;we&&e.store.dispatch({type:"quizAnswer",picked:we.key});return}e.store.dispatch({type:"select",sel:tn(he)})}function Jt(se){if(g(Le).quiz)return;const he=tn(Ct(se.clientX,se.clientY));he&&(e.store.dispatch({type:"select",sel:he}),_e(e.store.s.sel))}let It=!1;function Mi(){const se=g(Oe),he=(se==null?void 0:se.type)==="region"&&!g(b)?S.get(se.id):null,we=he==null?void 0:he.meshes[0];let ze=!1;if(he&&we&&we.visible&&u&&(G.copy(he.anchor).applyMatrix4(we.matrixWorld).project(f),G.z<1&&Math.abs(G.x)<1.2&&Math.abs(G.y)<1.2)){const ge=u.domElement.clientWidth,ot=u.domElement.clientHeight;l.style.transform=`translate(${(G.x*.5+.5)*ge}px, ${(-G.y*.5+.5)*ot}px) translate(-50%, -100%)`,ze=!0}ze!==It&&(l.style.opacity=ze?"1":"0",It=ze)}Jn(()=>{const se=g(Oe);c&&(c.textContent=(se==null?void 0:se.type)==="region"?e.label(se).title:"")});function Si(){return new qn({color:16777215,roughness:.58,metalness:0,clearcoat:.25,clearcoatRoughness:.45,sheen:.35,sheenRoughness:.6,sheenColor:new lt("#ffd6e0"),side:Gn,clippingPlanes:x})}async function Ei(se,he){var Dt,Rt;const we=await fetch(se,{credentials:"same-origin",signal:he});if(!we.ok)throw new Error(`HTTP ${we.status}`);const ze=+(we.headers.get("content-length")??0);if(!we.body||!ze)return(Dt=e.onprogress)==null||Dt.call(e,null),we.arrayBuffer();const ge=we.body.getReader(),ot=new Uint8Array(ze);let et=0;for(;;){const{done:Ht,value:nn}=await ge.read();if(Ht)break;if(et+nn.length>ot.length){const Mt=new Uint8Array(Math.max(ot.length*2,et+nn.length));return Mt.set(ot.subarray(0,et)),C(ge,Mt,et,nn)}ot.set(nn,et),et+=nn.length,(Rt=e.onprogress)==null||Rt.call(e,Math.round(et/ze*100))}return ot.buffer.slice(0,et)}async function C(se,he,we,ze){const ge=[he.subarray(0,we),ze];for(;;){const{done:Rt,value:Ht}=await se.read();if(Rt)break;ge.push(Ht)}const ot=ge.reduce((Rt,Ht)=>Rt+Ht.length,0),et=new Uint8Array(ot);let Dt=0;for(const Rt of ge)et.set(Rt,Dt),Dt+=Rt.length;return et.buffer}function W(se){try{const he=new DataView(se);if(he.getUint32(0,!0)!==1179937895)return!1;const we=he.getUint32(12,!0),ze=new TextDecoder().decode(new Uint8Array(se,20,we));return ze.includes("EXT_meshopt_compression")||ze.includes("KHR_meshopt_compression")}catch{return!1}}function ae(se){var Vu,Hu,Gu;const he=new Map((((Vu=e.regions)==null?void 0:Vu.regions)??[]).map(jt=>[jt.key,jt])),we=new Set((((Hu=e.regions)==null?void 0:Hu.regions)??[]).map(jt=>jt.structure)),ze=jt=>we.has(jt)||df(jt),ge=n?void 0:"organ";p=se,d.add(p);const ot=()=>new qn({color:"#e11d48",roughness:.32,clearcoat:.8,clearcoatRoughness:.2,emissive:"#3b0010",clippingPlanes:x,side:Gn}),et=new qn({color:"#cbd5e1",roughness:.6,transparent:!0,opacity:.1,depthWrite:!1,side:li,clippingPlanes:x}),Dt=new qn({color:"#e7e2d3",roughness:.7,clippingPlanes:x,side:Gn}),Rt=new Map;let Ht=0,nn=0;const Mt={regions:new Map,vessels:new Map};p.traverse(jt=>{var Pa,Wu;if(!jt.isMesh)return;const sn=jt;let $i=sn,Nt=null;for(;$i&&!(Nt=Hp($i.name,ze));)$i=$i.parent;const zn=sn.geometry;if(zn.attributes.normal||zn.computeVertexNormals(),Ht+=(zn.index?zn.index.count:zn.attributes.position.count)/3,nn++,(Wu=(Pa=sn.material)==null?void 0:Pa.dispose)==null||Wu.call(Pa),!Nt){sn.visible=!1;return}if(Nt.kind!=="region"){const kr=Nt.kind==="skin"?"skin":Nt.kind==="bone"?"bone":/neck/i.test(Nt.name)?"neck":"vessels";let vs=Rt.get(Nt.key);vs||(vs={key:Nt.key,kind:Nt.kind,layer:kr,mat:Nt.kind==="skin"?et:Nt.kind==="bone"?Dt:ot(),meshes:[]},Rt.set(Nt.key,vs),F.push(vs),Nt.kind==="vessel"&&Mt.vessels.set(Nt.key,kr)),sn.material=vs.mat,Nt.kind==="skin"&&(sn.renderOrder=10),vs.meshes.push(sn),V.set(sn,vs);return}const Di=he.get(Nt.key);let Ui=S.get(Nt.key);if(!Ui){const kr=e.lobeOf(Nt.structure)||Oo(Nt.structure);Ui={key:Nt.key,hemi:Nt.hemi,structure:Nt.structure,lobe:kr,layer:Zp(Nt.structure,Nt.hemi,Di==null?void 0:Di.group,ge),inner:(Di==null?void 0:Di.inner)??Kp(Nt.structure),mat:Si(),meshes:[],center:new U,anchor:new U},S.set(Nt.key,Ui),R.push(Ui),Mt.regions.set(Nt.key,{layer:Ui.layer,inner:Ui.inner,lobe:kr})}sn.material=Ui.mat,Ui.meshes.push(sn),L.set(sn,Ui)});const ht=new qt;R.length?R.forEach(jt=>jt.meshes.forEach(sn=>ht.expandByObject(sn))):ht.setFromObject(p),ht.isEmpty()&&ht.set(new U(-50,-50,-50),new U(50,50,50));const Ft=ht.getCenter(new U);ht.getSize(T),w=Math.max(40,T.length()/2),p.position.sub(Ft),p.updateMatrixWorld(!0);const Ot=new qt,mn=new U,kn=new U,Qi=new ct;for(const jt of R){Ot.makeEmpty(),jt.meshes.forEach(zn=>{Ot.expandByObject(zn),D.set(zn,zn.position.clone())}),Ot.getCenter(jt.center);const sn=jt.meshes[0],$i=sn.geometry.attributes.position;if(mn.copy(jt.center),jt.inner||mn.lengthSq()<1){Qi.copy(sn.matrixWorld).invert(),jt.anchor.copy(jt.center).applyMatrix4(Qi);continue}mn.normalize();let Nt=-1/0;for(let zn=0;zn<$i.count;zn++){kn.fromBufferAttribute($i,zn).applyMatrix4(sn.matrixWorld);const Di=kn.dot(mn);Di>Nt&&(Nt=Di,jt.anchor.fromBufferAttribute($i,zn))}}for(const jt of F)jt.meshes.forEach(sn=>D.set(sn,sn.position.clone()));A=n?1:Math.max(1,w/125),f.near=Math.max(.5,w/100),f.far=w*40,f.updateProjectionMatrix(),_.minDistance=n?w*.7:w*.12,_.maxDistance=w*11,m&&(m.scale.setScalar(w/125),m.position.y=-T.y/2-w*(n?.24:.06)),f.position.set(w*3.4*.72,w*1.3,w*2.6),_.target.set(0,0,0),_.update(),e.store.init(Mt,[...Rt.values()].map(jt=>jt.layer),{framing:t(),regions:e.regions}),Qe(Z,!0),ee(),(Gu=e.onloaded)==null||Gu.call(e,{triangles:Math.round(Ht),meshes:nn}),Ve()}const ce=2e3;let j=0;function Ve(){const se=[];for(const ge of R)for(const ot of ge.meshes)se.push(ot);for(const ge of F)if(ge.kind==="vessel")for(const ot of ge.meshes)se.push(ot);const he=ge=>(ge.geometry.index?ge.geometry.index.count:ge.geometry.attributes.position.count)/3,we=se.filter(ge=>he(ge)>=ce).sort((ge,ot)=>he(ot)-he(ge));for(const ge of se)ge.raycast=JE;const ze=()=>{const ge=performance.now();for(;we.length&&performance.now()-ge<12;){const ot=we.shift().geometry;ot.boundsTree||$E.call(ot,{maxLeafSize:10})}we.length&&!E&&(j=window.setTimeout(ze,16))};j=window.setTimeout(ze,50)}Tp(()=>{var nn,Mt;const se=new AbortController;try{u=new hM({antialias:!0,powerPreference:"high-performance"})}catch{(nn=e.onerror)==null||nn.call(e,"webgl");return}u.setPixelRatio(Math.min(devicePixelRatio||1,2)),u.toneMapping=Af,u.toneMappingExposure=.82,u.outputColorSpace=an,u.localClippingEnabled=!0;const he=u.domElement;he.setAttribute("role","img"),he.setAttribute("aria-label",e.ariaLabel),he.tabIndex=-1,s.prepend(he),d=new np;const we=new Kc(u),ze=new JS;v=we.fromScene(ze,.04).texture,ze.traverse(ht=>{const Ft=ht;Ft.isMesh&&(Ft.geometry.dispose(),Ft.material.dispose())}),we.dispose(),d.environment=v,d.environmentIntensity=.55,f=new Dn(32,1,1,5e3),_=new iS(f,he),_.enableDamping=!0,_.dampingFactor=.08,_.rotateSpeed=.8,_.addEventListener("change",()=>P=!0),_.addEventListener("start",()=>{be=null});const ge=new $c(16777215,1.6);ge.position.set(-200,300,400),d.add(ge);const ot=new $c(8965375,1.2);ot.position.set(300,-100,-400),d.add(ot),d.add(new kM(14674175,1708064,.5)),f.add(new Lu(16777215,.6,0,0)),d.add(f),m=new Lt(new Cu(170,64),new Ki({transparent:!0,depthWrite:!1,uniforms:{c:{value:new lt("#2dd4bf")}},vertexShader:"varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying vec2 vU; void main(){ float d=distance(vU,vec2(.5))*2.; float a=smoothstep(1.,0.,d)*.16 + smoothstep(.02,0.,abs(d-.82))*.25; gl_FragColor=vec4(c,a); }"})),m.rotation.x=-Math.PI/2,d.add(m);const et=()=>{if(!u)return;const ht=Math.max(1,s.clientWidth),Ft=Math.max(1,s.clientHeight);u.setSize(ht,Ft),f.aspect=ht/Ft,f.updateProjectionMatrix(),P=!0},Dt=new ResizeObserver(et);Dt.observe(s),et(),he.addEventListener("pointermove",jn),he.addEventListener("pointerleave",Ii),he.addEventListener("pointerdown",xt),he.addEventListener("pointerup",Vt),he.addEventListener("dblclick",Jt);const Rt=ht=>{var Ft;ht.preventDefault(),(Ft=e.onerror)==null||Ft.call(e,"context")};he.addEventListener("webglcontextlost",Rt);const Ht=()=>!!g(Oe)&&g(Oe).type!=="vessel"&&!h;return u.setAnimationLoop(ht=>{if(be&&(Se(ht),P=!0),_.update()&&(P=!0),Bn(),Ht()){const Ft=.45+Math.sin(ht/380)*.15;for(const Ot of R)Be(Ot,g(Oe))&&(Ot.mat.emissiveIntensity=Ft);P=!0}P&&u&&(P=!1,u.render(d,f),Mi())}),(Mt=e.onprogress)==null||Mt.call(e,0),Ei(e.url,se.signal).then(async ht=>{const Ft=new _S;if(W(ht)){const{MeshoptDecoder:Ot}=await Ap(async()=>{const{MeshoptDecoder:mn}=await import("./meshopt_decoder.module-BbCP70j-.js");return{MeshoptDecoder:mn}},[]);Ft.setMeshoptDecoder(Ot)}return Ft.parseAsync(ht,"")}).then(ht=>{E||ae(ht.scene)}).catch(ht=>{var Ft;!E&&(ht==null?void 0:ht.name)!=="AbortError"&&((Ft=e.onerror)==null||Ft.call(e,String((ht==null?void 0:ht.message)??ht)))}),()=>{E=!0,clearTimeout(j),se.abort(),Dt.disconnect(),he.removeEventListener("pointermove",jn),he.removeEventListener("pointerleave",Ii),he.removeEventListener("pointerdown",xt),he.removeEventListener("pointerup",Vt),he.removeEventListener("dblclick",Jt),he.removeEventListener("webglcontextlost",Rt),u==null||u.setAnimationLoop(null),_.dispose();const ht=new Set;d.traverse(Ft=>{var mn,kn;const Ot=Ft;Ot.isMesh&&((mn=Ot.geometry)!=null&&mn.boundsTree&&eT.call(Ot.geometry),(kn=Ot.geometry)==null||kn.dispose(),(Array.isArray(Ot.material)?Ot.material:[Ot.material]).forEach(Qi=>Qi&&ht.add(Qi)))}),ht.forEach(Ft=>Ft.dispose()),v==null||v.dispose(),u==null||u.renderLists.dispose(),u==null||u.dispose(),u==null||u.forceContextLoss(),he.remove(),u=null,S.clear(),R.length=0,F.length=0,X.length=0,L.clear(),V.clear(),D.clear()}});var Ze={view:Ne,home:ee,flyToSel:_e,screenshot:Ae},tt=nT(),nt=te(tt),pt=te(nt);ri(pt,se=>a=se,()=>a);var mt=N(pt);ri(mt,se=>o=se,()=>o),ri(nt,se=>r=se,()=>r);var it=N(nt,2),wt=te(it);return ri(wt,se=>c=se,()=>c),ri(it,se=>l=se,()=>l),ri(tt,se=>s=se,()=>s),pe(i,tt),Pn(Ze)}const mp=Mf.head;function tf(i,e){const t=Object.fromEntries(i.map(n=>[n,(e==null?void 0:e[n])??mp[n]??!0]));return{mode:"mine",colorBy:"anatomy",pickBy:"structure",sel:null,hover:null,show:{...t},defaults:t,xray:!1,isolate:!1,explode:0,cut:1,cutAxis:"y",rotate:!1,tour:null,quiz:null}}const sT=(i,e)=>(i==null?void 0:i.type)===(e==null?void 0:e.type)&&(i==null?void 0:i.id)===(e==null?void 0:e.id),Ls=(i,e)=>e in i.show;function nf(i,e,t){if((i==null?void 0:i.type)==="region"&&e==="lobe"){const n=t.regions.get(i.id);if(n)return{type:"lobe",id:n.lobe}}return i}function rT(i,e,t){switch(e.type){case"mode":return e.mode===i.mode?i:{...i,mode:e.mode,...e.mode==="mine"?{tour:null,quiz:null}:{}};case"colorBy":return{...i,colorBy:e.colorBy};case"pickBy":{const n=nf(i.sel,e.pickBy,t);return{...i,pickBy:e.pickBy,sel:n}}case"select":{const n=nf(e.sel,i.pickBy,t),s={...i,sel:n,isolate:n?i.isolate:!1};if((n==null?void 0:n.type)==="region"){const r=t.regions.get(n.id);r&&(Ls(i,r.layer)&&!i.show[r.layer]&&(s.show={...i.show,[r.layer]:!0}),r.inner&&!i.xray&&(s.xray=!0))}else if((n==null?void 0:n.type)==="vessel"){const r=t.vessels.get(n.id);r&&Ls(i,r)&&!i.show[r]&&(s.show={...i.show,[r]:!0})}return s}case"hover":return sT(e.sel,i.hover)?i:{...i,hover:e.sel};case"layer":{if(!Ls(i,e.layer))return i;const n=e.on??!i.show[e.layer];return n===i.show[e.layer]?i:{...i,show:{...i.show,[e.layer]:n}}}case"xray":{const n=e.on??!i.xray,s={...i.show};if(n)for(const r of I_)Ls(i,r)&&(s[r]=!0);return{...i,xray:n,show:s}}case"isolate":{const n=e.on??!i.isolate;return{...i,isolate:n&&!!i.sel}}case"explode":return{...i,explode:sf(e.value)};case"cut":return{...i,cut:sf(e.value)};case"cutAxis":return{...i,cutAxis:e.axis};case"rotate":return{...i,rotate:e.on??!i.rotate};case"view":return e.view==="inside"&&Ls(i,"hemi_R")?{...i,show:{...i.show,hemi_R:!1}}:i;case"reset":{const n=Object.fromEntries(Object.keys(i.show).map(s=>[s,i.defaults[s]??mp[s]??!0]));return{...i,sel:null,hover:null,show:n,xray:!1,isolate:!1,explode:0,cut:1,rotate:!1,tour:null,quiz:null}}case"tour":{const n={...i.show};return Ls(i,"hemi_R")&&(n.hemi_R=!e.hideR),{...i,mode:"learn",quiz:null,tour:{i:e.step},sel:{type:"lobe",id:e.lobe},xray:e.xray,isolate:!1,show:n}}case"tourEnd":{if(!i.tour)return i;const n={...i.show};return Ls(i,"hemi_R")&&(n.hemi_R=!0),{...i,tour:null,xray:!1,sel:null,show:n}}case"quizStart":return{...i,mode:"learn",tour:null,sel:null,isolate:!1,quiz:{target:e.target,score:0,n:0,tries:0,last:null,revealing:!1}};case"quizNext":return i.quiz?{...i,sel:null,quiz:{...i.quiz,target:e.target,tries:0,last:null,revealing:!1}}:i;case"quizAnswer":{const n=i.quiz;if(!n||n.revealing)return i;const s=e.picked===n.target;if(s)return{...i,sel:{type:"region",id:n.target},quiz:{...n,score:n.score+1,n:n.n+1,last:{ok:s,picked:e.picked},revealing:!0}};const r=n.tries+1,a=r>=2;return{...i,sel:a?{type:"region",id:n.target}:i.sel,quiz:{...n,tries:r,n:a?n.n+1:n.n,last:{ok:s,picked:e.picked},revealing:a}}}case"quizSkip":{const n=i.quiz;return!n||n.revealing?i:{...i,sel:{type:"region",id:n.target},quiz:{...n,n:n.n+1,last:null,revealing:!0}}}case"quizEnd":return i.quiz?{...i,quiz:null,sel:null}:i}}const sf=i=>Math.max(0,Math.min(1,Number.isFinite(i)?i:0)),aT=[{lobe:"frontal",view:[.6,.35,1]},{lobe:"parietal",view:[.5,.8,-.4]},{lobe:"temporal",view:[1,-.1,.1]},{lobe:"occipital",view:[.3,.2,-1]},{lobe:"insular",view:[1,.1,.2],xray:!0},{lobe:"limbic",view:[-1,.1,0],hideR:!0},{lobe:"subcortical",view:[.6,.5,.8],xray:!0},{lobe:"ventricles",view:[.6,.5,.8],xray:!0},{lobe:"cerebellum",view:[.4,-.2,-1]},{lobe:"brainstem",view:[-1,-.1,.2],hideR:!0}],oT=i=>aT.filter(e=>i.has(e.lobe));function rf(i,e){const t=[];for(const[n,s]of e.regions)!s.inner&&i.show[s.layer]&&t.push(n);return t}function af(i,e,t=Math.random){if(!i.length)return null;const n=i.length>1&&e?i.filter(s=>s!==e):i;return n[Math.min(n.length-1,Math.floor(t()*n.length))]}var ya,ba,Ma,Sa,Ea;class lT{constructor(){ks(this,ya,Pt(hu(tf([]))));ks(this,ba,Pt({keys:[],vessels:[],layers:[],lobes:new Set,present:new Map}));ks(this,Ma,Pt({}));ks(this,Sa,Pt(!1));ks(this,Ea,Pt("head"));il(this,"facts",{regions:new Map,vessels:new Map});il(this,"dispatch",e=>{const t=rT(this.s,e,this.facts);t!==this.s&&(this.s=t)})}get s(){return g(ui(this,ya))}set s(e){Qe(ui(this,ya),e,!0)}get index(){return g(ui(this,ba))}set index(e){Qe(ui(this,ba),e)}get colors(){return g(ui(this,Ma))}set colors(e){Qe(ui(this,Ma),e)}get ready(){return g(ui(this,Sa))}set ready(e){Qe(ui(this,Sa),e,!0)}get framing(){return g(ui(this,Ea))}set framing(e){Qe(ui(this,Ea),e,!0)}init(e,t,n={}){this.facts=e;const s=n.framing??"head",r=new Set(t),a=new Set,o=new Map,l=new Map;for(const[u,d]of e.regions){r.add(d.layer),a.add(d.lobe);const[f,_]=[u.slice(0,1),u.slice(2)];o.has(_)||o.set(_,new Set),o.get(_).add(f),l.set(_,d.lobe)}for(const u of e.vessels.values())r.add(u);const c=P_(r,n.regions,s),h=[...o.keys()].sort((u,d)=>Bo(u)-Bo(d)||u.localeCompare(d));this.colors=cm(h,u=>l.get(u)??"other"),this.index={keys:[...e.regions.keys()],vessels:[...e.vessels.keys()],layers:c.layers,lobes:a,present:o},this.framing=s,this.s={...tf(c.layers,c.defaults),mode:this.s.mode},this.ready=!0}}ya=new WeakMap,ba=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,Ea=new WeakMap;var cT=Ee('<button type="button"> </button>'),uT=Ee('<li><button type="button" class="nm svelte-1r3olto"><span class="dot svelte-1r3olto" aria-hidden="true"></span> <span class="tx svelte-1r3olto"> </span></button> <!></li>'),hT=Ee('<ul role="list" class="svelte-1r3olto"></ul>'),dT=Ee('<div class="lobe svelte-1r3olto"><div class="lh svelte-1r3olto"><button type="button" class="lt svelte-1r3olto"><span aria-hidden="true">▶</span> <span class="sw svelte-1r3olto" aria-hidden="true"></span> <span class="ln svelte-1r3olto"> </span> <span class="n svelte-1r3olto"> </span></button> <button type="button"><!></button></div> <!></div>'),fT=Ee('<p class="none faint svelte-1r3olto"> </p>'),pT=Ee('<div class="tree svelte-1r3olto"><label class="search svelte-1r3olto"><!> <span class="sr-only"> </span> <input type="search" autocomplete="off" spellcheck="false" class="svelte-1r3olto"/> <kbd aria-hidden="true" class="svelte-1r3olto">/</kbd></label> <div class="th svelte-1r3olto"><span> </span><span class="n svelte-1r3olto"> </span></div> <div class="list svelte-1r3olto"></div></div>');function mT(i,e){Cn(e,!0);let t=Pt(""),n,s,r=hu({});function a(){n==null||n.focus(),n==null||n.select()}const o=De(()=>{const L=new Map;for(const F of e.store.index.present.keys()){const V=e.lobeOfStructure(F);L.has(V)||L.set(V,[]),L.get(V).push(F)}return[...rc,...[...L.keys()].filter(F=>!rc.includes(F))].filter(F=>L.has(F)).map(F=>({lobe:F,items:L.get(F).map(V=>({id:V,name:e.structName(V),hs:[...e.store.index.present.get(V)].sort()})).sort(Yp.has(F)?(V,X)=>Bo(V.id)-Bo(X.id)||V.name.localeCompare(X.name):(V,X)=>V.name.localeCompare(X.name))}))}),l=De(()=>g(t).trim().toLowerCase()),c=De(()=>g(l)?g(o).map(L=>({...L,items:L.items.filter(D=>e.search(D.id).includes(g(l)))})).filter(L=>L.items.length):g(o)),h=De(()=>e.store.index.keys.length),u=De(()=>e.store.s.sel),d=De(()=>{var L;return((L=g(u))==null?void 0:L.type)==="region"?g(u).id.slice(2):null});Jn(()=>{const L=g(d);if(!L)return;const D=e.lobeOfStructure(L);r[D]||(r[D]=!0),queueMicrotask(()=>{var F;return(F=s==null?void 0:s.querySelector(`[data-id="${CSS.escape(L)}"]`))==null?void 0:F.scrollIntoView({block:"nearest"})})});const f=L=>L.includes("M")?"M":L.includes("L")?"L":L[0];function _(L){var D,F;if(L.key==="Enter"){const V=(D=g(c)[0])==null?void 0:D.items[0];V&&(L.preventDefault(),e.onpick(`${f(V.hs)}|${V.id}`))}else L.key==="Escape"?g(t)?(Qe(t,""),L.stopPropagation()):n.blur():L.key==="ArrowDown"&&(L.preventDefault(),(F=s.querySelector("button"))==null||F.focus())}var v={focus:a},m=pT(),p=te(m),y=te(p);yt(y,{name:"search",size:15});var M=N(y,2),x=K(M,!0),T=N(M,2);ri(T,L=>n=L,()=>n);var w=N(p,2),A=te(w),P=K(A,!0),E=N(A),S=K(E,!0),R=N(w,2);return Yt(R,21,()=>g(c),L=>L.lobe,(L,D)=>{const F=De(()=>!!g(l)||!!r[g(D).lobe]);var V=dT(),X=te(V),oe=te(X),Q=te(oe);let Me;var ve=N(Q,2),Y=N(ve,2),re=K(Y,!0),ye=N(Y,2),q=K(ye,!0),G=N(oe,2);let $;var ie=te(G);yt(ie,{name:"focus",size:13});var Re=N(X,2);{var Pe=Fe=>{var Le=hT();Yt(Le,21,()=>g(D).items,Ue=>Ue.id,(Ue,Oe)=>{const k=De(()=>e.store.colors[g(Oe).id]);var $e=uT();let Ye;var We=te($e),Ge=te(We),st=N(Ge,2),Ce=K(st,!0),I=N(We,2);Yt(I,17,()=>g(Oe).hs.filter(b=>b!=="M"),Wn,(b,O)=>{var Z=cT();let ue;var le=K(Z,!0);xe((He,Te)=>{var me,Ne;ue=Xt(Z,1,"lr svelte-1r3olto",null,ue,{on:((me=g(u))==null?void 0:me.type)==="region"&&g(u).id===`${g(O)}|${g(Oe).id}`}),Xe(Z,"aria-label",He),Xe(Z,"aria-pressed",((Ne=g(u))==null?void 0:Ne.type)==="region"&&g(u).id===`${g(O)}|${g(Oe).id}`),z(le,Te)},[()=>H(g(O)==="L"?"side.leftOf":"side.rightOf",{name:g(Oe).name}),()=>H(g(O)==="L"?"side.L":"side.R")]),dt("click",Z,()=>e.onpick(`${g(O)}|${g(Oe).id}`)),pe(b,Z)}),xe(b=>{Ye=Xt($e,1,"it svelte-1r3olto",null,Ye,{sel:g(d)===g(Oe).id}),Xe($e,"data-id",g(Oe).id),Xe(We,"aria-current",g(d)===g(Oe).id?"true":void 0),Mn(Ge,`background:${b??""}`),z(Ce,g(Oe).name)},[()=>g(k)?yf(g(k)):"var(--text-3)"]),dt("click",We,()=>e.onpick(`${f(g(Oe).hs)}|${g(Oe).id}`)),pe(Ue,$e)}),pe(Fe,Le)};qe(Re,Fe=>{g(F)&&Fe(Pe)})}xe((Fe,Le,Ue,Oe)=>{var k;Xe(oe,"aria-expanded",g(F)),Me=Xt(Q,1,"car svelte-1r3olto",null,Me,{o:g(F)}),Mn(ve,`background:${Fe??""}`),z(re,Le),z(q,g(D).items.length),$=Xt(G,1,"all svelte-1r3olto",null,$,{on:((k=g(u))==null?void 0:k.type)==="lobe"&&g(u).id===g(D).lobe}),Xe(G,"aria-label",Ue),Xe(G,"title",Oe)},[()=>Ta(g(D).lobe),()=>e.lobeName(g(D).lobe),()=>H("m3d.selectLobe",{name:e.lobeName(g(D).lobe)}),()=>H("m3d.selectLobe",{name:e.lobeName(g(D).lobe)})]),dt("click",oe,()=>r[g(D).lobe]=!r[g(D).lobe]),dt("click",G,()=>e.onpicklobe(g(D).lobe)),pe(L,V)},L=>{var D=fT(),F=K(D,!0);xe(V=>z(F,V),[()=>H("m3d.noMatch")]),pe(L,D)}),ri(R,L=>s=L,()=>s),xe((L,D,F)=>{z(x,L),Xe(T,"placeholder",D),z(P,F),z(S,g(h))},[()=>H("m3d.search"),()=>H("m3d.search.ph"),()=>H("m3d.structures")]),dt("keydown",T,_),wp(T,()=>g(t),L=>Qe(t,L)),pe(i,m),Pn(v)}bi(["keydown","click"]);var _T=Ee('<div class="none svelte-1bo6tlo" role="status"><b> </b><span class="muted"> </span></div>'),gT=Ee('<span class="chip best svelte-1bo6tlo"> </span>'),of=Ee('<small class="muted svelte-1bo6tlo"> </small>'),vT=Ee('<label><input type="radio" name="pipeline" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!></span></label>'),xT=Ee('<fieldset class="opts svelte-1bo6tlo"><legend class="svelte-1bo6tlo"> </legend> <!></fieldset>'),yT=Ee('<p class="one svelte-1bo6tlo"><b> </b> · <span class="muted"> </span></p>'),bT=Ee('<span class="chip warn svelte-1bo6tlo"> </span>'),MT=Ee('<small class="faint svelte-1bo6tlo"> </small>'),ST=Ee('<label><input type="radio" name="backend" class="svelte-1bo6tlo"/> <span class="ot svelte-1bo6tlo"><b class="svelte-1bo6tlo"> <!></b> <!> <!></span></label>'),lf=Ee('<p class="note faint svelte-1bo6tlo"><!> </p>'),ET=Ee('<fieldset class="opts svelte-1bo6tlo"><legend class="svelte-1bo6tlo"> </legend> <!> <!></fieldset>'),TT=Ee('<p class="err svelte-1bo6tlo" role="alert"> </p>'),AT=Ee('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo"> </p> <ul class="pts svelte-1bo6tlo"><li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li> <li class="svelte-1bo6tlo"><!> </li></ul> <!> <!> <!> <!> <button type="button" class="btn primary lg svelte-1bo6tlo"><!> </button>',1),wT=Ee("<li><!> </li>"),RT=Ee('<ol class="stages svelte-1bo6tlo"></ol>'),CT=Ee('<h1 id="b-t" class="svelte-1bo6tlo"> </h1> <p class="muted svelte-1bo6tlo" aria-live="polite"> </p> <div class="bar svelte-1bo6tlo" role="progressbar"><i class="svelte-1bo6tlo"></i></div> <div class="pct faint svelte-1bo6tlo"> </div> <!> <p class="faint small svelte-1bo6tlo"> </p> <button type="button" class="btn svelte-1bo6tlo"> </button>',1),PT=Ee('<section class="panel build fade-in svelte-1bo6tlo" aria-labelledby="b-t"><div class="ic svelte-1bo6tlo" aria-hidden="true"><!></div> <!></section>');function LT(i,e){Cn(e,!0);let t=Pt(null),n=Pt(""),s=Pt(0),r=Pt(null),a=Pt(!1),o=null;const l=hu([]);let c=Pt(null),h=Pt(!0),u=Pt("auto"),d=Pt("auto");Jn(()=>{const Y=e.studyId;let re=!1;return Qe(h,!0),Qe(c,null),Rp(Y).then(ye=>{re||(Qe(c,ye),Qe(u,(ye==null?void 0:ye.recommended)??"auto",!0),Qe(d,y(ye==null?void 0:ye.pipelines.find(q=>q.pipeline===g(u))),!0))}).catch(()=>{re||Qe(c,null)}).finally(()=>{re||Qe(h,!1)}),()=>{re=!0}});const f=De(()=>{var Y;return(Y=g(c))==null?void 0:Y.pipelines.find(re=>re.pipeline===g(u))}),_=De(()=>{var Y;return((Y=g(f))==null?void 0:Y.backends)??[]}),v=De(()=>g(_).some(Y=>Y.id==="totalseg")),m=De(()=>!!g(c)&&g(c).pipelines.length===0),p=De(()=>{var Y;return((Y=g(f))==null?void 0:Y.pipeline)==="ct_body"&&!g(v)});function y(Y){var ye;const re=((Y==null?void 0:Y.backends)??[]).filter(q=>q.available);return((ye=re.find(q=>q.default)??re.find(q=>q.id==="classical")??re[0])==null?void 0:ye.id)??"auto"}function M(Y){var re;Qe(u,Y,!0),Qe(d,y((re=g(c))==null?void 0:re.pipelines.find(ye=>ye.pipeline===Y)),!0)}const x=Y=>Zn(`m3d.build.pipeline.${Y}`)?H(`m3d.build.pipeline.${Y}`):pa(Y),T=Y=>Zn(`m3d.build.pipeline.${Y}.d`)?H(`m3d.build.pipeline.${Y}.d`):"",w=Y=>Zn(`m3d.build.backend.${Y}`)?H(`m3d.build.backend.${Y}`):pa(Y),A=Y=>Zn(`m3d.build.backend.${Y}.d`)?H(`m3d.build.backend.${Y}.d`):"",P=Y=>Zn(`mstage.${Y}`)?H(`mstage.${Y}`):H("mstage.working"),E=De(()=>Math.round(Math.max(0,Math.min(100,g(s))))),S=De(()=>l);function R(Y){if(Y instanceof Ip){const re=`m3d.build.err.${Y.status}`;return Zn(re)?H(re,{msg:Y.message}):H("m3d.build.error",{msg:Y.message})}return Y instanceof TypeError?H("m3d.build.err.net"):H("m3d.build.error",{msg:String((Y==null?void 0:Y.message)??Y)})}function L(Y){var ye;const re=(ye=Y.result)==null?void 0:ye.code;return typeof re=="string"&&Zn(`m3d.build.code.${re}`)?H(`m3d.build.code.${re}`):Y.error?H("m3d.build.error",{msg:Y.error}):H("m3d.build.failed")}async function D(){Qe(r,null),Qe(n,""),Qe(s,0),l.length=0;try{Qe(t,await Cp(e.studyId,g(c)?g(u):"auto",g(c)&&g(_).length>1?g(d):void 0),!0),o=Pp(g(t).id,Y=>{Qe(n,Y.stage,!0),Qe(s,Y.pct,!0),Y.stage&&!l.includes(Y.stage)&&l.push(Y.stage)},Y=>{Qe(t,null),Qe(a,!1),Y.status==="done"?e.ondone():Y.status==="cancelled"?Qe(r,null):Qe(r,L(Y),!0)})}catch(Y){Qe(t,null),Qe(r,R(Y),!0)}}async function F(){if(g(t)){Qe(a,!0);try{await Lp(g(t).id)}catch{Qe(a,!1)}}}uf(()=>o==null?void 0:o());var V=PT(),X=te(V),oe=te(X);yt(oe,{name:"cube",size:30});var Q=N(X,2);{var Me=Y=>{var re=AT(),ye=gt(re),q=K(ye,!0),G=N(ye,2),$=K(G,!0),ie=N(G,2),Re=te(ie),Pe=te(Re);yt(Pe,{name:"lock",size:15});var Fe=N(Pe,1,!0),Le=N(Re,2),Ue=te(Le);yt(Ue,{name:"clock",size:15});var Oe=N(Ue,1,!0),k=N(Le,2),$e=te(k);yt($e,{name:"info",size:15});var Ye=N($e,1,!0),We=N(ie,2);{var Ge=ee=>{var _e=_T(),Ie=te(_e),Ae=K(Ie,!0),de=N(Ie),Be=K(de,!0);xe((ke,Je)=>{z(Ae,ke),z(Be,Je)},[()=>H("m3d.build.none"),()=>H("m3d.build.none.d")]),pe(ee,_e)},st=ee=>{var _e=xT(),Ie=te(_e),Ae=K(Ie,!0),de=N(Ie,2);Yt(de,19,()=>g(c).pipelines,Be=>Be.pipeline,(Be,ke,Je)=>{var B=vT();let be;var ne=te(B),J=N(ne,2),fe=te(J),Se=te(fe),Ke=N(Se);{var ft=bt=>{var $t=gT(),en=K($t,!0);xe(Ct=>z(en,Ct),[()=>H("m3d.build.best")]),pe(bt,$t)};qe(Ke,bt=>{g(Je)===0&&bt(ft)})}var ut=N(fe,2);{var rt=bt=>{var $t=of(),en=K($t,!0);xe(Ct=>z(en,Ct),[()=>g(ke).reason||T(g(ke).pipeline)]),pe(bt,$t)},At=De(()=>T(g(ke).pipeline)||g(ke).reason);qe(ut,bt=>{g(At)&&bt(rt)})}xe(bt=>{be=Xt(B,1,"opt svelte-1bo6tlo",null,be,{on:g(u)===g(ke).pipeline}),Fo(ne,g(ke).pipeline),ju(ne,g(u)===g(ke).pipeline),z(Se,bt)},[()=>x(g(ke).pipeline)]),dt("change",ne,()=>M(g(ke).pipeline)),pe(Be,B)}),xe(Be=>z(Ae,Be),[()=>H("m3d.build.choose")]),pe(ee,_e)},Ce=ee=>{var _e=yT(),Ie=te(_e),Ae=K(Ie,!0),de=N(Ie,2),Be=K(de,!0);xe((ke,Je)=>{z(Ae,ke),z(Be,Je)},[()=>x(g(f).pipeline),()=>T(g(f).pipeline)]),pe(ee,_e)},I=De(()=>g(f)&&T(g(f).pipeline));qe(We,ee=>{g(m)?ee(Ge):g(c)&&g(c).pipelines.length>1?ee(st,1):g(I)&&ee(Ce,2)})}var b=N(We,2);{var O=ee=>{var _e=ET(),Ie=te(_e),Ae=K(Ie,!0),de=N(Ie,2);Yt(de,17,()=>g(_),Je=>Je.id,(Je,B)=>{var be=ST();let ne;var J=te(be),fe=N(J,2),Se=te(fe),Ke=te(Se),ft=N(Ke);{var ut=Ct=>{var tn=bT(),Bn=K(tn,!0);xe(jn=>z(Bn,jn),[()=>H("m3d.build.backend.unavailable")]),pe(Ct,tn)};qe(ft,Ct=>{g(B).available||Ct(ut)})}var rt=N(Se,2);{var At=Ct=>{var tn=of(),Bn=K(tn,!0);xe(jn=>z(Bn,jn),[()=>!g(B).available&&g(B).reason?g(B).reason:A(g(B).id)]),pe(Ct,tn)},bt=De(()=>A(g(B).id)||g(B).reason);qe(rt,Ct=>{g(bt)&&Ct(At)})}var $t=N(rt,2);{var en=Ct=>{var tn=MT(),Bn=K(tn,!0);xe(()=>z(Bn,g(B).licence)),pe(Ct,tn)};qe($t,Ct=>{g(B).licence&&Ct(en)})}xe(Ct=>{ne=Xt(be,1,"opt svelte-1bo6tlo",null,ne,{on:g(d)===g(B).id,off:!g(B).available}),Fo(J,g(B).id),ju(J,g(d)===g(B).id),J.disabled=!g(B).available,z(Ke,Ct)},[()=>w(g(B).id)]),dt("change",J,()=>Qe(d,g(B).id,!0)),pe(Je,be)});var Be=N(de,2);{var ke=Je=>{var B=lf(),be=te(B);yt(be,{name:"info",size:13});var ne=N(be,1,!0);xe(J=>z(ne,J),[()=>H("m3d.build.totalsegNote")]),pe(Je,B)};qe(Be,Je=>{g(v)&&Je(ke)})}xe(Je=>z(Ae,Je),[()=>H("m3d.build.backend")]),pe(ee,_e)};qe(b,ee=>{!g(m)&&g(_).length>1&&ee(O)})}var Z=N(b,2);{var ue=ee=>{var _e=lf(),Ie=te(_e);yt(Ie,{name:"info",size:13});var Ae=N(Ie,1,!0);xe(de=>z(Ae,de),[()=>H("m3d.build.totalsegNote")]),pe(ee,_e)};qe(Z,ee=>{!g(m)&&g(p)&&ee(ue)})}var le=N(Z,2);{var He=ee=>{var _e=TT(),Ie=K(_e,!0);xe(()=>z(Ie,g(r))),pe(ee,_e)};qe(le,ee=>{g(r)&&ee(He)})}var Te=N(le,2),me=te(Te);yt(me,{name:"cube",size:17});var Ne=N(me,1,!0);xe((ee,_e,Ie,Ae,de,Be)=>{z(q,ee),z($,_e),z(Fe,Ie),z(Oe,Ae),z(Ye,de),Te.disabled=g(h)||g(m),z(Ne,Be)},[()=>H("m3d.build.title"),()=>H("m3d.build.lead"),()=>H("m3d.build.p1"),()=>H("m3d.build.p2"),()=>H("m3d.build.p3"),()=>g(r)?H("m3d.build.retry"):H("m3d.build.cta")]),dt("click",Te,D),pe(Y,re)},ve=Y=>{var re=CT(),ye=gt(re),q=K(ye,!0),G=N(ye,2),$=K(G),ie=N(G,2);Xe(ie,"aria-valuemin",0),Xe(ie,"aria-valuemax",100);var Re=K(ie),Pe=N(ie,2),Fe=K(Pe),Le=N(Pe,2);{var Ue=We=>{var Ge=RT();Yt(Ge,21,()=>g(S),Wn,(st,Ce)=>{var I=wT();let b;var O=te(I);{let ue=De(()=>g(Ce)===g(n)?"spark":"check");yt(O,{get name(){return g(ue)},size:13})}var Z=N(O,1,!0);xe(ue=>{b=Xt(I,1,"svelte-1bo6tlo",null,b,{now:g(Ce)===g(n)}),z(Z,ue)},[()=>P(g(Ce))]),pe(st,I)}),pe(We,Ge)};qe(Le,We=>{g(S).length&&We(Ue)})}var Oe=N(Le,2),k=K(Oe,!0),$e=N(Oe,2),Ye=K($e,!0);xe((We,Ge,st,Ce,I)=>{z(q,We),z($,`${Ge??""}…`),Xe(ie,"aria-valuenow",g(E)),Xe(ie,"aria-label",st),Mn(Re,`width:${g(E)??""}%`),z(Fe,`${g(E)??""}%`),z(k,Ce),$e.disabled=g(a),z(Ye,I)},[()=>H("m3d.build.progress"),()=>g(n)?P(g(n)):H("mstage.starting"),()=>H("m3d.build.progress"),()=>H("m3d.build.note"),()=>g(a)?H("import.progress.cancelling"):H("common.cancel")]),dt("click",$e,F),pe(Y,re)};qe(Q,Y=>{g(t)?Y(ve,-1):Y(Me)})}pe(i,V),Pn()}bi(["change","click"]);var IT=Ee('<div class="center svelte-yes7qw" role="status"><div class="spinner svelte-yes7qw"></div></div>'),DT=Ee('<section class="panel msg svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p><p class="faint mono svelte-yes7qw"> </p> <a class="btn svelte-yes7qw"><!> </a></section>'),UT=Ee('<nav class="crumbs faint svelte-yes7qw"><a class="svelte-yes7qw"> </a> <span aria-hidden="true" class="svelte-yes7qw">›</span> <span aria-current="page" class="svelte-yes7qw"> </span></nav> <!>',1),NT=Ee('<p class="faint mono svelte-yes7qw"> </p>'),FT=Ee('<section class="panel msg over svelte-yes7qw" role="alert"><h1 class="svelte-yes7qw"> </h1><p class="muted svelte-yes7qw"> </p> <!></section>'),OT=Ee('<div class="loading panel svelte-yes7qw" role="status" aria-live="polite"><span class="svelte-yes7qw"> </span> <div class="bar svelte-yes7qw"><i></i></div></div>'),BT=Ee('<div class="top svelte-yes7qw"><!></div>'),kT=Ee('<div class="m3d svelte-yes7qw"><!> <!> <!> <aside id="m3d-controls"><div class="lh svelte-yes7qw"><a class="back svelte-yes7qw"><!></a> <div class="st svelte-yes7qw"><b class="svelte-yes7qw"> </b><small class="faint svelte-yes7qw"> </small></div> <button type="button" class="btn icon mob svelte-yes7qw"><!></button></div> <!></aside> <aside id="m3d-card"><button type="button" class="btn icon mob closer svelte-yes7qw"><!></button> <!></aside> <!> <div class="bottom svelte-yes7qw"><!> <!></div> <p class="sr-only svelte-yes7qw" aria-live="polite"> </p></div>');function HT(i,e){Cn(e,!0);let t=Pt("loading"),n=Pt(null),s=Pt(null),r=Pt(null),a=Pt(null),o=Pt(null),l=Pt(null),c=Pt(null),h=Pt(0),u=Pt(!1),d=Pt(null);const f=new lT;let _=Pt(null),v=Pt(null),m=Pt(!1),p=Pt(!1);const y=De(()=>e.params.id),M=De(()=>encodeURIComponent(e.params.id));async function x(b){Qe(t,"loading"),Qe(n,null),Qe(u,!1),Qe(d,null);try{const[O,Z]=await Promise.all([Up(b).catch(()=>null),Np(b)]);if(Qe(s,O,!0),!Z){Qe(t,"missing");return}Qe(r,Z,!0);const[ue,le,He]=await Promise.all([Fp(b),Op(b),Yu("en")]);Qe(a,ue),Qe(o,le),Qe(l,He),Qe(t,"ready")}catch(O){Qe(n,String((O==null?void 0:O.message)??O),!0),Qe(t,"error")}}Jn(()=>{x(g(y))}),Jn(()=>{const b=gi.lang;Qe(c,null),b!=="en"&&Yu(b).then(O=>{gi.lang===b&&Qe(c,O)})});const T=De(()=>Qp(g(l),gi.lang,g(c))),w=(b,O)=>Zn(b)?H(b,O):null,A=De(()=>({kb:g(T),tr:w,en:g(l),lang:gi.lang})),P=De(()=>F_(g(o))),E=De(()=>{var b;return new Map((((b=g(a))==null?void 0:b.regions)??[]).map(O=>[O.key,O]))}),S=b=>mf(g(T),b),R=De(()=>{var b;return C_(g(a),(b=g(r))==null?void 0:b.pipeline)}),L=(b,O)=>H(Sf(b,g(R),Zn),O),D=b=>w(`measure.${b.key}`)??b.label,F=b=>w(`measure.${b.key}.short`)??w(`measure.${b.key}`)??b.label,V=b=>b.type==="lobe"?Wi(g(A),b.id):b.type==="vessel"?H(`card.vessel.${_f(b.id,g(R))}`):oc(g(A),b.id),X=b=>({title:V(b),sub:b.type==="region"?Wi(g(A),S(b.id.slice(2))):b.type==="vessel"?L("m3d.vessel.sub"):void 0}),oe=De(()=>f.s),Q=De(()=>g(oe).colorBy.startsWith("data:")?g(P).find(b=>`data:${b.key}`===g(oe).colorBy)??null:null),Me=De(()=>oT(f.index.lobes)),ve=De(()=>g(oe).sel?H("m3d.announce",{name:V(g(oe).sel)}):f.ready?H("m3d.announce.none"):"");function Y(b,O=!1){var Z;f.dispatch({type:"select",sel:b}),O&&((Z=g(_))==null||Z.flyToSel(f.s.sel))}function re(b){g(oe).quiz||Y({type:"region",id:b},!0)}function ye(b){g(oe).quiz||Y({type:"lobe",id:b},!0)}function q(b){var O;f.dispatch({type:"view",view:b}),(O=g(_))==null||O.view(b)}function G(){var b;f.dispatch({type:"reset"}),(b=g(_))==null||b.home()}function $(b){const O=g(Me)[b];O&&(f.dispatch({type:"tour",step:b,lobe:O.lobe,xray:!!O.xray,hideR:!!O.hideR}),Ku().then(()=>{var Z;return(Z=g(_))==null?void 0:Z.flyToSel({type:"lobe",id:O.lobe},O.view)}))}const ie=()=>$(0),Re=b=>{var O;return $(Math.max(0,Math.min(g(Me).length-1,(((O=g(oe).tour)==null?void 0:O.i)??-1)+b)))};function Pe(){var b;f.dispatch({type:"tourEnd"}),(b=g(_))==null||b.home()}function Fe(){const b=af(rf(f.s,f.facts),null);b&&f.dispatch({type:"quizStart",target:b})}let Le=0;Jn(()=>{var O;const b=g(oe).quiz;if(b!=null&&b.revealing)return Le=window.setTimeout(()=>{const Z=af(rf(f.s,f.facts),b.target);Z&&f.dispatch({type:"quizNext",target:Z})},(O=b.last)!=null&&O.ok?1300:1700),()=>clearTimeout(Le)}),uf(()=>clearTimeout(Le));function Ue(){f.dispatch({type:"xray",on:!0});const b=f.index.vessels.find(O=>!/neck/i.test(O))??f.index.vessels[0];b&&Y({type:"vessel",id:b})}const Oe=De(()=>({studyId:g(y),kb:g(T),namer:g(A),stats:g(o),regions:g(a),regionByKey:g(E),status:g(r),store:f,measureLabel:D,tourLen:g(Me).length,framing:g(R),ft:L,study:g(s),act:{select:Y,tour:ie,tourStep:Re,tourEnd:Pe,quiz:Fe,showVessels:Ue}})),k=()=>typeof matchMedia<"u"&&matchMedia("(max-width: 900px)").matches;Jn(()=>{g(oe).sel&&!g(oe).quiz&&k()&&(Qe(p,!0),Qe(m,!1))});function $e(b){if(g(t)!=="ready"||b.ctrlKey||b.metaKey||b.altKey||b.defaultPrevented)return;const O=b.target;if(!(O&&(O.isContentEditable||O.tagName==="TEXTAREA"||O.tagName==="SELECT"||O.tagName==="INPUT"&&O.type!=="range"&&O.type!=="checkbox")))if(b.key==="Escape"){if(g(oe).quiz)f.dispatch({type:"quizEnd"});else if(g(oe).tour)Pe();else if(g(m)||g(p))Qe(m,!1),Qe(p,!1);else if(g(oe).sel)Y(null);else return;b.preventDefault()}else b.key==="/"?(b.preventDefault(),k()&&(Qe(m,!0),Qe(p,!1)),Ku().then(()=>{var ue;return(ue=g(v))==null?void 0:ue.focus()})):b.key==="x"||b.key==="X"?f.dispatch({type:"xray"}):(b.key==="i"||b.key==="I")&&g(oe).sel&&f.dispatch({type:"isolate"})}var Ye=jo();Dp("keydown",Bp,$e);var We=gt(Ye);{var Ge=b=>{var O=IT(),Z=K(O);xe(ue=>Xe(Z,"aria-label",ue),[()=>H("common.loading")]),pe(b,O)},st=b=>{var O=DT(),Z=te(O),ue=K(Z,!0),le=N(Z),He=K(le,!0),Te=N(le),me=K(Te,!0),Ne=N(Te,2),ee=te(Ne);yt(ee,{name:"back",size:16});var _e=N(ee,1,!0);oa(Ne,Ie=>{var Ae;return(Ae=la)==null?void 0:Ae(Ie)}),xe((Ie,Ae,de)=>{z(ue,Ie),z(He,Ae),z(me,g(n)),Xe(Ne,"href",`/study/${g(M)??""}`),z(_e,de)},[()=>H("m3d.error.t"),()=>H("m3d.error.d"),()=>H("view.back")]),pe(b,O)},Ce=b=>{var O=UT(),Z=gt(O),ue=te(Z),le=K(ue,!0);oa(ue,Ne=>{var ee;return(ee=la)==null?void 0:ee(Ne)});var He=N(ue,4),Te=K(He,!0),me=N(Z,2);LT(me,{get studyId(){return e.params.id},ondone:()=>x(e.params.id)}),xe((Ne,ee,_e)=>{Xe(Z,"aria-label",Ne),Xe(ue,"href",`/study/${g(M)??""}`),z(le,ee),z(Te,_e)},[()=>H("common.breadcrumb"),()=>{var Ne;return((Ne=g(s))==null?void 0:Ne.description)||H("study.untitled")},()=>H("study.3d")]),pe(b,O)},I=b=>{var O=kT(),Z=te(O);{var ue=xt=>{var Vt=FT(),Jt=te(Vt),It=K(Jt,!0),Mi=N(Jt),Si=K(Mi,!0),Ei=N(Mi,2);{var C=W=>{var ae=NT(),ce=K(ae,!0);xe(()=>z(ce,g(d))),pe(W,ae)};qe(Ei,W=>{g(d)!=="webgl"&&g(d)!=="context"&&W(C)})}xe((W,ae)=>{z(It,W),z(Si,ae)},[()=>H("m3d.error.t"),()=>g(d)==="webgl"||g(d)==="context"?H(`m3d.error.${g(d)}`):H("m3d.error.d")]),pe(xt,Vt)};qe(Z,xt=>{g(d)&&xt(ue)})}var le=N(Z,2);cf(le,()=>e.params.id,xt=>{{let Vt=De(()=>kp(e.params.id)),Jt=De(()=>L("m3d.canvas"));ri(iT(xt,{get url(){return g(Vt)},get store(){return f},get regions(){return g(a)},get framing(){return g(R)},lobeOf:S,get dataMaps(){return g(P)},label:X,get ariaLabel(){return g(Jt)},onprogress:It=>Qe(h,It,!0),onerror:It=>Qe(d,It,!0),onloaded:()=>Qe(u,!0)}),It=>Qe(_,It,!0),()=>g(_))}});var He=N(le,2);{var Te=xt=>{var Vt=OT(),Jt=te(Vt),It=K(Jt,!0),Mi=N(Jt,2),Si=te(Mi);let Ei;xe(C=>{z(It,C),Mn(Si,`width:${g(h)??30??""}%`),Ei=Xt(Si,1,"svelte-yes7qw",null,Ei,{indet:g(h)===null})},[()=>H("m3d.loading")]),pe(xt,Vt)};qe(He,xt=>{!g(u)&&!g(d)&&xt(Te)})}var me=N(He,2);let Ne;var ee=te(me),_e=te(ee),Ie=te(_e);yt(Ie,{name:"back",size:16}),oa(_e,xt=>{var Vt;return(Vt=la)==null?void 0:Vt(xt)});var Ae=N(_e,2),de=te(Ae),Be=K(de,!0),ke=N(de),Je=K(ke,!0),B=N(Ae,2),be=te(B);yt(be,{name:"close",size:16});var ne=N(ee,2);{var J=xt=>{N_(xt,{get store(){return f},get dataMaps(){return g(P)},dataLabel:F,tree:Jt=>{ri(mT(Jt,{get store(){return f},structName:It=>ko(g(A),It),lobeName:It=>Wi(g(A),It),lobeOfStructure:S,search:It=>em(g(T),It,ko(g(A),It)),onpick:re,onpicklobe:ye}),It=>Qe(v,It,!0),()=>g(v))},$$slots:{tree:!0}})};qe(ne,xt=>{f.ready&&xt(J)})}var fe=N(me,2);let Se;var Ke=te(fe),ft=te(Ke);yt(ft,{name:"close",size:16});var ut=N(Ke,2);{var rt=xt=>{A_(xt,{get ctx(){return g(Oe)}})};qe(ut,xt=>{f.ready&&xt(rt)})}var At=N(fe,2);{var bt=xt=>{var Vt=BT(),Jt=te(Vt);Y_(Jt,{get quiz(){return g(oe).quiz},name:It=>oc(g(A),It),onskip:()=>f.dispatch({type:"quizSkip"}),onend:()=>f.dispatch({type:"quizEnd"})}),pe(xt,Vt)};qe(At,xt=>{g(oe).quiz&&xt(bt)})}var $t=N(At,2),en=te($t);{var Ct=xt=>{{let Vt=De(()=>F(g(Q)));W_(xt,{get map(){return g(Q)},get label(){return g(Vt)}})}};qe(en,xt=>{g(Q)&&xt(Ct)})}var tn=N(en,2);{var Bn=xt=>{{let Vt=De(()=>g(Me).length>0),Jt=De(()=>f.index.keys.length>1);H_(xt,{get store(){return f},get canTour(){return g(Vt)},get canQuiz(){return g(Jt)},onview:q,onshot:()=>{var It;return(It=g(_))==null?void 0:It.screenshot(H("m3d.shot.file"))},onreset:G,ontour:()=>g(oe).tour?Pe():ie(),onquiz:()=>g(oe).quiz?f.dispatch({type:"quizEnd"}):Fe(),get controlsOpen(){return g(m)},get cardOpen(){return g(p)},ontoggleControls:()=>{Qe(m,!g(m)),g(m)&&Qe(p,!1)},ontoggleCard:()=>{Qe(p,!g(p)),g(p)&&Qe(m,!1)}})}};qe(tn,xt=>{f.ready&&xt(Bn)})}var jn=N($t,2),Ii=K(jn,!0);xe((xt,Vt,Jt,It,Mi,Si,Ei)=>{var C;Ne=Xt(me,1,"left panel svelte-yes7qw",null,Ne,{open:g(m)}),Xe(me,"aria-label",xt),Xe(_e,"href",`/study/${g(M)??""}`),Xe(_e,"aria-label",Vt),Xe(_e,"title",Jt),z(Be,It),z(Je,((C=g(s))==null?void 0:C.description)??""),Xe(B,"aria-label",Mi),Se=Xt(fe,1,"right panel svelte-yes7qw",null,Se,{open:g(p)}),Xe(fe,"aria-label",Si),Xe(Ke,"aria-label",Ei),z(Ii,g(ve))},[()=>H("m3d.controls"),()=>H("view.back"),()=>H("view.back"),()=>H("m3d.title"),()=>H("card.close"),()=>H("m3d.card"),()=>H("card.close")]),dt("click",B,()=>Qe(m,!1)),dt("click",Ke,()=>Qe(p,!1)),pe(b,O)};qe(We,b=>{g(t)==="loading"?b(Ge):g(t)==="error"?b(st,1):g(t)==="missing"?b(Ce,2):b(I,-1)})}pe(i,Ye),Pn()}bi(["click"]);export{HT as default};
