import{K as C,L as X,M as Qe,r as F,N as et,e as Y,F as E,O as we,P as le,i as c,Q as U,R as V,o as se,S as Be,T as tt,U as nt,G as at,H as ot,V as T,W as ie,X as N,Y as re,Z as Te,z as u,$ as ue,a0 as ce,h as de,a1 as lt,a2 as st,a3 as Ve,a4 as q,a5 as it,a6 as Se,a7 as rt,a8 as ut,a9 as ct,aa as Pe,ab as ve,ac as Re,ad as M,ae as dt,af as vt,ag as xe,ah as ft,ai as gt,aj as mt,ak as yt,al as ht,am as ke,D as ze,_ as bt,J as St,t as xt,A as _e,an as _t}from"./C-cukafx.js";const j=C({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function O(e){const i=X("useRender");i.render=e}function He(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=Qe(),n=F();if(et){const s=new ResizeObserver(o=>{e==null||e(o,s),o.length&&(i==="content"?n.value=o[0].contentRect:n.value=o[0].target.getBoundingClientRect())});Y(()=>{s.disconnect()}),E(()=>t.el,(o,a)=>{a&&(s.unobserve(a),n.value=void 0),o&&s.observe(o)},{flush:"post"})}return{resizeRef:t,contentRect:we(n)}}const G=Symbol.for("vuetify:layout"),$e=Symbol.for("vuetify:layout-item"),Ce=1e3,Ct=C({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=C({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function It(){const e=le(G);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Le(e){const i=le(G);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${nt()}`,n=X("useLayoutItem");Be($e,{id:t});const s=V(!1);at(()=>s.value=!0),ot(()=>s.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:a}=i.register(n,{...e,active:c(()=>s.value?!1:e.active.value),id:t});return Y(()=>i.unregister(t)),{layoutItemStyles:o,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const pt=(e,i,t,n)=>{let s={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...s}}];for(const a of e){const l=i.get(a),v=t.get(a),d=n.get(a);if(!l||!v||!d)continue;const r={...s,[l.value]:parseInt(s[l.value],10)+(d.value?parseInt(v.value,10):0)};o.push({id:a,layer:r}),s=r}return o};function wt(e){const i=le(G,null),t=c(()=>i?i.rootZIndex.value-100:Ce),n=F([]),s=U(new Map),o=U(new Map),a=U(new Map),l=U(new Map),v=U(new Map),{resizeRef:d,contentRect:r}=He(),g=c(()=>{const x=new Map,R=e.overlaps??[];for(const S of R.filter(B=>B.includes(":"))){const[B,I]=S.split(":");if(!n.value.includes(B)||!n.value.includes(I))continue;const H=s.get(B),f=s.get(I),_=o.get(B),k=o.get(I);!H||!f||!_||!k||(x.set(I,{position:H.value,amount:parseInt(_.value,10)}),x.set(B,{position:f.value,amount:-parseInt(k.value,10)}))}return x}),b=c(()=>{const x=[...new Set([...a.values()].map(S=>S.value))].sort((S,B)=>S-B),R=[];for(const S of x){const B=n.value.filter(I=>{var H;return((H=a.get(I))==null?void 0:H.value)===S});R.push(...B)}return pt(R,s,o,l)}),m=c(()=>!Array.from(v.values()).some(x=>x.value)),h=c(()=>b.value[b.value.length-1].layer),p=c(()=>({"--v-layout-left":T(h.value.left),"--v-layout-right":T(h.value.right),"--v-layout-top":T(h.value.top),"--v-layout-bottom":T(h.value.bottom),...m.value?void 0:{transition:"none"}})),w=c(()=>b.value.slice(1).map((x,R)=>{let{id:S}=x;const{layer:B}=b.value[R],I=o.get(S),H=s.get(S);return{id:S,...B,size:Number(I.value),position:H.value}})),L=x=>w.value.find(R=>R.id===x),y=X("createLayout"),P=V(!1);se(()=>{P.value=!0}),Be(G,{register:(x,R)=>{let{id:S,order:B,position:I,layoutSize:H,elementSize:f,active:_,disableTransitions:k,absolute:K}=R;a.set(S,B),s.set(S,I),o.set(S,H),l.set(S,_),k&&v.set(S,k);const ye=tt($e,y==null?void 0:y.vnode).indexOf(x);ye>-1?n.value.splice(ye,0,S):n.value.push(S);const he=c(()=>w.value.findIndex(D=>D.id===S)),ee=c(()=>t.value+b.value.length*2-he.value*2),Ge=c(()=>{const D=I.value==="left"||I.value==="right",te=I.value==="right",Ye=I.value==="bottom",ne=f.value??H.value,Je=ne===0?"%":"px",be={[I.value]:0,zIndex:ee.value,transform:`translate${D?"X":"Y"}(${(_.value?0:-(ne===0?100:ne))*(te||Ye?-1:1)}${Je})`,position:K.value||t.value!==Ce?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!P.value)return be;const A=w.value[he.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${S}"`);const ae=g.value.get(S);return ae&&(A[ae.position]+=ae.amount),{...be,height:D?`calc(100% - ${A.top}px - ${A.bottom}px)`:f.value?`${f.value}px`:void 0,left:te?void 0:`${A.left}px`,right:te?`${A.right}px`:void 0,top:I.value!=="bottom"?`${A.top}px`:void 0,bottom:I.value!=="top"?`${A.bottom}px`:void 0,width:D?f.value?`${f.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),Xe=c(()=>({zIndex:ee.value-1}));return{layoutItemStyles:Ge,layoutItemScrimStyles:Xe,zIndex:ee}},unregister:x=>{a.delete(x),s.delete(x),o.delete(x),l.delete(x),v.delete(x),n.value=n.value.filter(R=>R!==x)},mainRect:h,mainStyles:p,getLayoutItem:L,items:w,layoutRect:r,rootZIndex:t});const z=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),W=c(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:z,layoutStyles:W,getLayoutItem:L,items:w,layoutRect:r,layoutRef:d}}const Bt=C({...j(),...Ct({fullHeight:!0}),...ie()},"VApp"),Tt=N()({name:"VApp",props:Bt(),setup(e,i){let{slots:t}=i;const n=re(e),{layoutClasses:s,getLayoutItem:o,items:a,layoutRef:l}=wt(e),{rtlClasses:v}=Te();return O(()=>{var d;return u("div",{ref:l,class:["v-application",n.themeClasses.value,s.value,v.value,e.class],style:[e.style]},[u("div",{class:"v-application__wrap"},[(d=t.default)==null?void 0:d.call(t)])])}),{getLayoutItem:o,items:a,theme:n}}}),J=C({tag:{type:String,default:"div"}},"tag"),Vt=C({text:String,...j(),...J()},"VToolbarTitle"),Pt=N()({name:"VToolbarTitle",props:Vt(),setup(e,i){let{slots:t}=i;return O(()=>{const n=!!(t.default||t.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[n&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Rt=C({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function $(e,i,t){return N()({name:e,props:Rt({mode:t,origin:i}),setup(n,s){let{slots:o}=s;const a={onBeforeEnter(l){n.origin&&(l.style.transformOrigin=n.origin)},onLeave(l){if(n.leaveAbsolute){const{offsetTop:v,offsetLeft:d,offsetWidth:r,offsetHeight:g}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${v}px`,l.style.left=`${d}px`,l.style.width=`${r}px`,l.style.height=`${g}px`}n.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(n.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:v,top:d,left:r,width:g,height:b}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=v||"",l.style.top=d||"",l.style.left=r||"",l.style.width=g||"",l.style.height=b||""}}};return()=>{const l=n.group?ue:ce;return de(l,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:a},o.default)}}})}function Ae(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return N()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(n,s){let{slots:o}=s;const a=n.group?ue:ce;return()=>de(a,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:i},o.default)}})}function Ee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=lt(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const l=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const v=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=l.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=v})},onAfterEnter:o,onEnterCancelled:o,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),o(a)}function o(a){const l=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,l!=null&&(a.style[t]=l),delete a._initialStyle}}$("fab-transition","center center","out-in");$("dialog-bottom-transition");$("dialog-top-transition");$("fade-transition");$("scale-transition");$("scroll-x-transition");$("scroll-x-reverse-transition");$("scroll-y-transition");$("scroll-y-reverse-transition");$("slide-x-transition");$("slide-x-reverse-transition");$("slide-y-transition");$("slide-y-reverse-transition");const kt=Ae("expand-transition",Ee());Ae("expand-x-transition",Ee("",!0));const zt=C({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),oe=N(!1)({name:"VDefaultsProvider",props:zt(),setup(e,i){let{slots:t}=i;const{defaults:n,disabled:s,reset:o,root:a,scoped:l}=st(e);return Ve(n,{reset:o,root:a,scoped:l,disabled:s}),()=>{var v;return(v=t.default)==null?void 0:v.call(t)}}}),Oe=C({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function We(e){return{dimensionStyles:c(()=>{const t={},n=T(e.height),s=T(e.maxHeight),o=T(e.maxWidth),a=T(e.minHeight),l=T(e.minWidth),v=T(e.width);return n!=null&&(t.height=n),s!=null&&(t.maxHeight=s),o!=null&&(t.maxWidth=o),a!=null&&(t.minHeight=a),l!=null&&(t.minWidth=l),v!=null&&(t.width=v),t})}}function Ht(e){return{aspectStyles:c(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const je=C({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...j(),...Oe()},"VResponsive"),Ie=N()({name:"VResponsive",props:je(),setup(e,i){let{slots:t}=i;const{aspectStyles:n}=Ht(e),{dimensionStyles:s}=We(e);return O(()=>{var o;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:n.value},null),(o=t.additional)==null?void 0:o.call(t),t.default&&u("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function $t(e){return it(()=>{const i=[],t={};if(e.value.background)if(Se(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&rt(e.value.background)){const n=ut(e.value.background);if(n.a==null||n.a===1){const s=ct(n);t.color=s,t.caretColor=s}}}else i.push(`bg-${e.value.background}`);return e.value.text&&(Se(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):i.push(`text-${e.value.text}`)),{colorClasses:i,colorStyles:t}})}function fe(e,i){const t=c(()=>({background:q(e)?e.value:null})),{colorClasses:n,colorStyles:s}=$t(t);return{backgroundColorClasses:n,backgroundColorStyles:s}}const ge=C({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function me(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pe();return{roundedClasses:c(()=>{const n=q(e)?e.value:e.rounded,s=q(e)?e.value:e.tile,o=[];if(n===!0||n==="")o.push(`${i}--rounded`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))o.push(`rounded-${a}`);else(s||n===!1)&&o.push("rounded-0");return o})}}const Nt=C({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Z=(e,i)=>{let{slots:t}=i;const{transition:n,disabled:s,group:o,...a}=e,{component:l=o?ue:ce,...v}=typeof n=="object"?n:{};return de(l,ve(typeof n=="string"?{name:s?"":n}:v,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:o}).filter(d=>{let[r,g]=d;return g!==void 0})),a),t)};function Lt(e,i){if(!Re)return;const t=i.modifiers||{},n=i.value,{handler:s,options:o}=typeof n=="object"?n:{handler:n,options:{}},a=new IntersectionObserver(function(){var g;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const d=(g=e._observe)==null?void 0:g[i.instance.$.uid];if(!d)return;const r=l.some(b=>b.isIntersecting);s&&(!t.quiet||d.init)&&(!t.once||r||d.init)&&s(r,l,v),r&&t.once?Me(e,i):d.init=!0},o);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:a},a.observe(e)}function Me(e,i){var n;const t=(n=e._observe)==null?void 0:n[i.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const At={mounted:Lt,unmounted:Me},Et=C({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...je(),...j(),...ge(),...Nt()},"VImg"),Ot=N()({name:"VImg",directives:{intersect:At},props:Et(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:t,slots:n}=i;const{backgroundColorClasses:s,backgroundColorStyles:o}=fe(M(e,"color")),{roundedClasses:a}=me(e),l=X("VImg"),v=V(""),d=F(),r=V(e.eager?"loading":"idle"),g=V(),b=V(),m=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=c(()=>m.value.aspect||g.value/b.value||0);E(()=>e.src,()=>{p(r.value!=="idle")}),E(h,(f,_)=>{!f&&_&&d.value&&z(d.value)}),dt(()=>p());function p(f){if(!(e.eager&&f)&&!(Re&&!f&&!e.eager)){if(r.value="loading",m.value.lazySrc){const _=new Image;_.src=m.value.lazySrc,z(_,null)}m.value.src&&vt(()=>{var _;t("loadstart",((_=d.value)==null?void 0:_.currentSrc)||m.value.src),setTimeout(()=>{var k;if(!l.isUnmounted)if((k=d.value)!=null&&k.complete){if(d.value.naturalWidth||L(),r.value==="error")return;h.value||z(d.value,null),r.value==="loading"&&w()}else h.value||z(d.value),y()})})}}function w(){var f;l.isUnmounted||(y(),z(d.value),r.value="loaded",t("load",((f=d.value)==null?void 0:f.currentSrc)||m.value.src))}function L(){var f;l.isUnmounted||(r.value="error",t("error",((f=d.value)==null?void 0:f.currentSrc)||m.value.src))}function y(){const f=d.value;f&&(v.value=f.currentSrc||f.src)}let P=-1;Y(()=>{clearTimeout(P)});function z(f){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(P),l.isUnmounted)return;const{naturalHeight:K,naturalWidth:Q}=f;K||Q?(g.value=Q,b.value=K):!f.complete&&r.value==="loading"&&_!=null?P=window.setTimeout(k,_):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const W=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var k;if(!m.value.src||r.value==="idle")return null;const f=u("img",{class:["v-img__img",W.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:w,onError:L},null),_=(k=n.sources)==null?void 0:k.call(n);return u(Z,{transition:e.transition,appear:!0},{default:()=>[xe(_?u("picture",{class:"v-img__picture"},[_,f]):f,[[mt,r.value==="loaded"]])]})},R=()=>u(Z,{transition:e.transition},{default:()=>[m.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",W.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),S=()=>n.placeholder?u(Z,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!n.error)&&u("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,B=()=>n.error?u(Z,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[n.error()])]}):null,I=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=V(!1);{const f=E(h,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),f())})}return O(()=>{const f=Ie.filterProps(e);return xe(u(Ie,ve({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!H.value},s.value,a.value,e.class],style:[{width:T(e.width==="auto"?g.value:e.width)},o.value,e.style]},f,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(gt,null,[u(x,null,null),u(R,null,null),u(I,null,null),u(S,null,null),u(B,null,null)]),default:n.default}),[[ft("intersect"),{handler:p,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:d,state:r,naturalWidth:g,naturalHeight:b}}}),Fe=C({border:[Boolean,Number,String]},"border");function De(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pe();return{borderClasses:c(()=>{const n=q(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${i}--border`);else if(typeof n=="string"||n===0)for(const o of String(n).split(" "))s.push(`border-${o}`);return s})}}const Ue=C({elevation:{type:[Number,String],validator(e){const i=parseInt(e);return!isNaN(i)&&i>=0&&i<=24}}},"elevation");function qe(e){return{elevationClasses:c(()=>{const t=q(e)?e.value:e.elevation,n=[];return t==null||n.push(`elevation-${t}`),n})}}const Wt=[null,"prominent","default","comfortable","compact"],Ke=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Wt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fe(),...j(),...Ue(),...ge(),...J({tag:"header"}),...ie()},"VToolbar"),pe=N()({name:"VToolbar",props:Ke(),setup(e,i){var m;let{slots:t}=i;const{backgroundColorClasses:n,backgroundColorStyles:s}=fe(M(e,"color")),{borderClasses:o}=De(e),{elevationClasses:a}=qe(e),{roundedClasses:l}=me(e),{themeClasses:v}=re(e),{rtlClasses:d}=Te(),r=V(!!(e.extended||(m=t.extension)!=null&&m.call(t))),g=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=c(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ve({VBtn:{variant:"text"}}),O(()=>{var L;const h=!!(e.title||t.title),p=!!(t.image||e.image),w=(L=t.extension)==null?void 0:L.call(t);return r.value=!!(e.extended||w),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,o.value,a.value,l.value,v.value,d.value,e.class],style:[s.value,e.style]},{default:()=>[p&&u("div",{key:"image",class:"v-toolbar__image"},[t.image?u(oe,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):u(Ot,{key:"image-img",cover:!0,src:e.image},null)]),u(oe,{defaults:{VTabs:{height:T(g.value)}}},{default:()=>{var y,P,z;return[u("div",{class:"v-toolbar__content",style:{height:T(g.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),h&&u(Pt,{key:"title",text:e.title},{text:t.title}),(P=t.default)==null?void 0:P.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}}),u(oe,{defaults:{VTabs:{height:T(b.value)}}},{default:()=>[u(kt,null,{default:()=>[r.value&&u("div",{class:"v-toolbar__extension",style:{height:T(b.value)}},[w])]})]})]})}),{contentHeight:g,extensionHeight:b}}}),jt=C({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Mt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let n=0,s=0;const o=F(null),a=V(0),l=V(0),v=V(0),d=V(!1),r=V(!1),g=c(()=>Number(e.scrollThreshold)),b=c(()=>yt((g.value-a.value)/g.value||0)),m=()=>{const h=o.value;if(!h||t&&!t.value)return;n=a.value,a.value="window"in h?h.pageYOffset:h.scrollTop;const p=h instanceof Window?document.documentElement.scrollHeight:h.scrollHeight;if(s!==p){s=p;return}r.value=a.value<n,v.value=Math.abs(a.value-g.value)};return E(r,()=>{l.value=l.value||a.value}),E(d,()=>{l.value=0}),se(()=>{E(()=>e.scrollTarget,h=>{var w;const p=h?document.querySelector(h):window;p&&p!==o.value&&((w=o.value)==null||w.removeEventListener("scroll",m),o.value=p,o.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),Y(()=>{var h;(h=o.value)==null||h.removeEventListener("scroll",m)}),t&&E(t,m,{immediate:!0}),{scrollThreshold:g,currentScroll:a,currentThreshold:v,isScrollActive:d,scrollRatio:b,isScrollingUp:r,savedScroll:l}}function Ze(){const e=V(!1);return se(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:we(e)}}const Ft=C({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ke(),...Ne(),...jt(),height:{type:[Number,String],default:64}},"VAppBar"),Dt=N()({name:"VAppBar",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=F(),s=ht(e,"modelValue"),o=c(()=>{var P;const y=new Set(((P=e.scrollBehavior)==null?void 0:P.split(" "))??[]);return{hide:y.has("hide"),fullyHide:y.has("fully-hide"),inverted:y.has("inverted"),collapse:y.has("collapse"),elevate:y.has("elevate"),fadeImage:y.has("fade-image")}}),a=c(()=>{const y=o.value;return y.hide||y.fullyHide||y.inverted||y.collapse||y.elevate||y.fadeImage||!s.value}),{currentScroll:l,scrollThreshold:v,isScrollingUp:d,scrollRatio:r}=Mt(e,{canScroll:a}),g=c(()=>o.value.hide||o.value.fullyHide),b=c(()=>e.collapse||o.value.collapse&&(o.value.inverted?r.value>0:r.value===0)),m=c(()=>e.flat||o.value.fullyHide&&!s.value||o.value.elevate&&(o.value.inverted?l.value>0:l.value===0)),h=c(()=>o.value.fadeImage?o.value.inverted?1-r.value:r.value:void 0),p=c(()=>{var z,W;if(o.value.hide&&o.value.inverted)return 0;const y=((z=n.value)==null?void 0:z.contentHeight)??0,P=((W=n.value)==null?void 0:W.extensionHeight)??0;return g.value?l.value<v.value||o.value.fullyHide?y+P:y:y+P});ke(c(()=>!!e.scrollBehavior),()=>{ze(()=>{g.value?o.value.inverted?s.value=l.value>v.value:s.value=d.value||l.value<v.value:s.value=!0})});const{ssrBootStyles:w}=Ze(),{layoutItemStyles:L}=Le({id:e.name,order:c(()=>parseInt(e.order,10)),position:M(e,"location"),layoutSize:p,elementSize:V(void 0),active:s,absolute:M(e,"absolute")});return O(()=>{const y=pe.filterProps(e);return u(pe,ve({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...L.value,"--v-toolbar-image-opacity":h.value,height:void 0,...w.value},e.style]},y,{collapse:b.value,flat:m.value}),t)}),{}}}),Ut=C({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Fe(),...j(),...Ue(),...Ne(),...ge(),...J({tag:"footer"}),...ie()},"VFooter"),qt=N()({name:"VFooter",props:Ut(),setup(e,i){let{slots:t}=i;const n=F(),{themeClasses:s}=re(e),{backgroundColorClasses:o,backgroundColorStyles:a}=fe(M(e,"color")),{borderClasses:l}=De(e),{elevationClasses:v}=qe(e),{roundedClasses:d}=me(e),r=V(32),{resizeRef:g}=He(m=>{m.length&&(r.value=m[0].target.clientHeight)}),b=c(()=>e.height==="auto"?r.value:parseInt(e.height,10));return ke(()=>e.app,()=>{const m=Le({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:M(e,"absolute")});ze(()=>{n.value=m.layoutItemStyles.value})}),O(()=>u(e.tag,{ref:g,class:["v-footer",s.value,o.value,l.value,v.value,d.value,e.class],style:[a.value,e.app?n.value:{height:T(e.height)},e.style]},t)),{}}}),Kt=C({scrollable:Boolean,...j(),...Oe(),...J({tag:"main"})},"VMain"),Zt=N()({name:"VMain",props:Kt(),setup(e,i){let{slots:t}=i;const{dimensionStyles:n}=We(e),{mainStyles:s}=It(),{ssrBootStyles:o}=Ze();return O(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,o.value,n.value,e.style]},{default:()=>{var a,l;return[e.scrollable?u("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(l=t.default)==null?void 0:l.call(t)]}})),{}}}),Gt={};function Xt(e,i){return xt(),St(Tt,null,{default:_e(()=>[u(Dt),u(Zt,null,{default:_e(()=>[_t(e.$slots,"default")]),_:3}),u(qt)]),_:3})}const Jt=bt(Gt,[["render",Xt]]);export{Jt as default};
