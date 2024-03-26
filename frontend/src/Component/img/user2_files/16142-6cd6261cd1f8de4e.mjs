"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16142],{567450:(e,t,n)=>{function a(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o});let i=new class{constructor(){a(this,"onResumeListeners",[]),a(this,"onPauseListeners",[]),a(this,"inExp",!1),a(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},r=e=>{if(e.isHidden){let{reason:t}=e;i.windowInFocus=!1,i.onPauseListeners.forEach(e=>e(t))}else i.windowInFocus=!0,i.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>r({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>r({isHidden:!1})),window.addEventListener("blur",()=>r({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>r({isHidden:!1})),window.addEventListener("pagehide",()=>r({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>r(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>r(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let o=i},42447:(e,t,n)=>{n.d(t,{Z:()=>ee});var a=n(667294),i=n(567450),r=n(226464),o=n(383434),s=n(790348),l=n(543059),d=n(198462),p=n(276602),c=n(638089),u=n(860273),m=n(453821),f=n(607150);let g=({constraintMap:e,initialNavTiming:t,annotations:n})=>({...n,...(0,f.jh)("constraint_",e),...(0,f.jh)("mark_",(0,l.gQ)()),...(0,f.jh)("browser_",{...t?(0,f.D3)(t):{},...(0,f.rX)()})});var y=n(505771);let h=(e,t)=>[...e.map(e=>(0,y.Z)(e,t)).filter(Boolean)];var w=n(156381),T=n(435851),_=n(67347);let A=e=>e<=2500?"Good":e>2500&&e<=4e3?"Needs Improvement":"Poor",S=({eventPrefix:e,endTime:t,tags:n,resourceArr:a,resourceType:i="allResources"})=>{let r=a.length;if(r>0&&"object"==typeof a[0]&&!Array.isArray(a[0])){let o=[...a].sort((e,t)=>e.fetchStart-t.fetchStart),s=[...a].sort((e,t)=>e.responseEnd-t.responseEnd),l=1,d=t/5,p=0;for(;l<=5;){let t=0;for(;p<=r-1&&o[p].fetchStart<=d*l;)p+=1,t+=1;(0,_.S0)(`${e}.tags.${i}.fetchStartInterval${l}of5`,t,{sampleRate:.2,tags:n}),(0,_.S0)(`${e}.${i}.fetchStartInterval${l}of5`,t,{sampleRate:.2}),l+=1}let c={zeroPercentInFlight:o[0].fetchStart,twentyFivePercentInFlight:o[Math.floor(r/4)].fetchStart,fiftyPercentInFlight:o[2*Math.floor(r/4)].fetchStart,seventyFivePercentInFlight:o[3*Math.floor(r/4)].fetchStart,hundredPercentInFlight:o[r-1].fetchStart,twentyFivePercentComplete:s[Math.floor(r/4)].responseEnd,fiftyPercentComplete:s[2*Math.floor(r/4)].responseEnd,seventyFivePercentComplete:s[3*Math.floor(r/4)].responseEnd,hundredPercentComplete:s[r-1].responseEnd};for(let t in c)c[t]&&((0,_.LY)(`${e}.tags.${i}.${t}`,c[t],{sampleRate:.2,tags:n}),(0,_.LY)(`${e}.${i}.${t}`,c[t],{sampleRate:.2}))}},E=({annotateExperiments:e,endTime:t,entries:n,metricId:a,pwtStaticContext:i})=>{let r=`${(0,T.Z)(i)}.${a.surface}`,o=[r];e&&e.forEach(e=>{let t=i.getExperimentGroup(e)||"null";o.push(`${r}.${e}.${t}`)});let s=A((0,w.Bn)()),l={lcpTimingBucket:s||"unknown",isAuthenticated:i.isAuthenticated,navigationType:a.navigationType},d=Array.from(n.filter(e=>"number"==typeof e.encodedBodySize&&e.encodedBodySize>=1e4&&e.responseEnd<=t)),p=[],c=[],u=[],m=[],f=[];d.forEach(e=>{"img"===e.initiatorType?p.push(e):"css"===e.initiatorType?c.push(e):"script"===e.initiatorType?u.push(e):"xmlhttprequest"===e.initiatorType?m.push(e):"link"===e.initiatorType&&e.name.includes("i.pinimg.com")&&f.push(e)}),o.forEach(e=>{S({eventPrefix:e,endTime:t,tags:l,resourceArr:d}),S({eventPrefix:e,endTime:t,tags:l,resourceArr:p,resourceType:"image"}),S({eventPrefix:e,endTime:t,tags:l,resourceArr:c,resourceType:"css"}),S({eventPrefix:e,endTime:t,tags:l,resourceArr:u,resourceType:"scripts"}),S({eventPrefix:e,endTime:t,tags:l,resourceArr:m,resourceType:"xhr"}),S({eventPrefix:e,endTime:t,tags:l,resourceArr:f,resourceType:"preloadedImage"})})};var v=n(22773);let I=({startTime:e,responseEnd:t},n)=>e>n.endTime||!!t&&t<n.startTime,M=({annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:a,endTime:i,imageTimings:r,metricId:o,pwtStaticContext:s,startTime:l,traceId:d,spans:p})=>{let f;let y=(0,v.Cg)();"initial_app_load"===o.navigationType&&(f=(0,u.Z)());let w=r.map(({name:e})=>e),T=y.map(e=>(0,m.p)(e,w)).filter(({timing:e})=>!I(e,{startTime:l,endTime:i}));return("board"===o.surface||"pin_closeup"===o.surface)&&E({annotateExperiments:e,endTime:i,entries:y,metricId:o,pwtStaticContext:s}),{type:"COMPLETE",traceId:d,startTime:l,endTime:i,spans:h(T,d).concat(p),annotationMap:g({constraintMap:a,initialNavTiming:f,annotations:t}),binaryAnnotationMap:(0,c.rA)({annotateExperiments:e,binaryAnnotations:n,entries:y,metricId:o,performanceResources:T,pwtEndTime:i,pwtStaticContext:s})}};var b=n(358864);let L=!1,N=(e,t)=>{if(e&&t){if(!L)return L=!0,t;(0,s.H)("duplicated_initial_app_load_surface_pwt")}return(0,b.Z)()};var R=n(558775),C=n(317672);let P=e=>{let t=performance.getEntriesByType("resource").filter(e=>e.name.includes("i.pinimg")).reduce((e,t)=>{let n=t.name.replace(".jpg","").split("/");return{[n[n.length-1]]:{downloadSize:t.name.split("/")[3].split("x")[0]},...e}},{}),n=Array.from(document.getElementsByTagName("img")).map(e=>{let n=e.src.replace(".jpg","").split("/"),a=n[n.length-1];if(t[a]){let n=C.rZ(e)?.width||1,i=t[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:i,ratio:i/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}}),a=Array.from(document.querySelectorAll('div[role="img"]')).map(e=>{let n=e.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),a=n[n.length-1];if(t[a]&&e instanceof HTMLDivElement){let n=C.rZ(e)?.width||1,i=t[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:i,ratio:i/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}});[...n,...a].forEach(t=>{let{ratio:n,fileName:a,downloadedSize:i}=t;t.ratio>1.05&&(0,s.A9)(`checkImageRatio.${e}`,{count:Math.round(10*n)/10,tags:{fileName:`${i}_${a}`}})})};var O=n(985271),$=n(780280);let H=(e,t)=>{let n=(0,a.useRef)(t);return{getState:()=>n.current,dispatch:t=>{n.current=e(n.current,t)}}};var B=n(314880),Z=n(785893);let D=["initial_app_load","client_route_push"],U=(0,o.XV)("PwtSurface"),k="NavigationComplete",z="VisuallyComplete",x=(e,t)=>{e.isSampled&&(0,R.Z)({metricId:e.metricConfig.metricId,pwtStaticContext:e.metricConfig.pwtStaticContext,result:{type:"ABORT",reason:t}})},G=(e,t,n)=>{let{metricConfig:{metricId:a,pwtStaticContext:i,annotateExperiments:o},annotations:d,binaryAnnotations:p,constraintMap:c,startTime:u,imageTimings:m,isSampled:f,spans:g}=e;(0,l.L8)(`PWT_Complete_${(0,r.KJ)(a)}`);let y=N("initial_app_load"===a.navigationType,i.serverData?.trace_id),h=M({annotateExperiments:o,annotations:d,binaryAnnotations:p,constraintMap:c,endTime:t,imageTimings:m,metricId:a,pwtStaticContext:i,startTime:u,traceId:y,spans:g});f&&!n&&(0,R.Z)({metricId:a,pwtStaticContext:i,result:h});try{P(String(h.binaryAnnotationMap["metricId.surface"].value))}catch(e){(0,s.H)("image_ratio_check_error",{error:e})}return{...e,result:h,status:"DONE"}},F=(e,t)=>{if(e.metricConfig.constraints.every(t=>e.constraintMap[t])){let n=Math.max(...e.metricConfig.constraints.map(t=>e.constraintMap[t]));return G(e,n,t)}return e},j=(e,t)=>{let{constraint:n,time:a,disablePWTLogging:i}=t,o=(0,r.KJ)(e.metricConfig.metricId);return O.Z?e.metricConfig.constraints.find(e=>e===n)?e.constraintMap[n]?(U(`constraint "${n}" is already complete.`),(0,s.H)("duplicated_constraint_complete",{constraint:n,action:o}),e):(U(`marking constraint "${n}" as complete`),(0,l.ZP)(`constraint_${n}_is_complete`),F({...e,constraintMap:{...e.constraintMap,[n]:a||O.Z.now()}},i)):(U(`marked constraint "${n}" is not a required constraint.`),e):((0,s.H)("missing_window_performance",{action:o}),e)},K=(e,t)=>{if(!O.Z){let t=(0,r.KJ)(e.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:t})}U(`removing constraint "${t}"`);let n=e.metricConfig.constraints.filter(e=>e!==t),{[t]:a,...i}=e.constraintMap;return F({...e,constraintMap:i,metricConfig:{...e.metricConfig,constraints:n}})},J=(e,t)=>{if(!O.Z){let t=(0,r.KJ)(e.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:t})}U(`updating pwt segment to "${t}"`);let n={...e.metricConfig.metricId,segment:t};return{...e,metricConfig:{...e.metricConfig,metricId:n}}},V=(e,t)=>{let{metricConfig:n,startTime:a,isSampled:i,disablePWTLogging:o}=t;if(o||"TIMING"!==e.status||a===e.startTime||x(e,"routeUpdatedOnSameSurface"),!n)return{status:"DISABLED",metricConfig:null};let l=(0,r.KJ)(n.metricId);return"TIMING"===e.status&&e.startTime===a&&e.constraintMap[k]?((0,s.H)("duplicated_init_route_action",{action:l}),e):(o||("Other"===n.pwtStaticContext.browserName&&!1===n.metricId.isAuthenticated&&"initial_app_load"===n.metricId.navigationType?((0,s.A9)(`TIMING.${l}`,{tags:{userAgent:window?.navigator?.userAgent}}),(0,s.A9)(`TIMING.sampled.${l}`,{tags:{userAgent:window?.navigator?.userAgent},sampleRate:.5})):((0,s.A9)(`TIMING.${l}`),(0,s.A9)(`TIMING.sampled.${l}`,{sampleRate:.5}))),j({status:"TIMING",metricConfig:n,startTime:a,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:i,spans:[]},{constraint:k,disablePWTLogging:o}))},W=(e,t)=>{if(U("dispatch action",t),"INIT_ROUTE"===t.type)return V(e,t.payload);if("TIMING"!==e.status)return U(`ignoring action due to invalid state ${e.status}`,t),e;switch(t.type){case"ABORT":x(e,t.reason);let n={type:"ABORT",reason:t.reason};return{...e,status:"DONE",result:n};case"ANNOTATE":let{name:a}=t.payload;if(!O.Z)return e;let i=O.Z.now();return U(`adding annotation {${a}: ${i}}`),{...e,annotations:{...e.annotations,[a]:i}};case"BINARY_ANNOTATE":let{name:o,value:l,annotationType:d}=t.payload;return U(`adding binary annotation {${o}: ${l}}`),{...e,binaryAnnotations:{...e.binaryAnnotations,[o]:{value:l,type:d}}};case"MARK_CONSTRAINT_COMPLETE":return j(e,t.payload);case"REMOVE_CONSTRAINT":return K(e,t.payload);case"SET_SEGMENT":return J(e,t.payload);case"SET_VISUALLY_COMPLETE_RESULT":{let{payload:{imageTimings:n}}=t;if(0===n.length)return x(e,"visuallyComplete_noImages"),{...e,status:"DONE",result:{type:"ABORT",reason:"visuallyComplete_noImages"}};let a=Math.max(...n.map(e=>e.responseEnd||0));return j({...e,imageTimings:n},{constraint:z,time:a})}case"ADD_SUBSPAN":let{startTime:p}=e,{payload:{name:c,startTime:u,endTime:m,annotations:f,binaryAnnotations:g,parentId:y}}=t;return{...e,spans:[...e.spans,{name:c,id:(0,b.Z)(),startTime:u||p,endTime:m,annotationMap:{...f},binaryAnnotationMap:{...g},parentId:y}]};case"START_SUBSPAN":return{...e,spans:[...e.spans,{name:t.payload.name,id:(0,b.Z)(),startTime:O.Z?O.Z.now():0,endTime:1/0,annotationMap:{...t.payload.annotations},binaryAnnotationMap:{...t.payload.binaryAnnotations},parentId:t.payload.parentId}]};case"STOP_SUBSPAN":let h=e.spans.findIndex(e=>e.name===t.payload.name);return h>-1?(e.spans[h].endTime=O.Z?O.Z.now():0,t.payload.annotations&&(e.spans[h].annotationMap={...e.spans[h].annotationMap,...t.payload.annotations}),t.payload.binaryAnnotations&&(e.spans[h].binaryAnnotationMap={...e.spans[h].binaryAnnotationMap,...t.payload.binaryAnnotations})):(0,s.H)("invalid_subspan_stop_name",{name:t.payload.name}),e;default:let w=(0,r.KJ)(e.metricConfig.metricId);return(0,s.H)("invalid_pwt_surface_action",{action:w}),e}},Y=e=>{if(!e)return"initial_app_load";switch(e.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}},q=new Set,X=({surface:e,constraints:t,segment:n,measureGridVisuallyComplete:r,annotateExperiments:o,customEnabledNavigationTypes:s,navigationInfo:{clientNavigation:l,navigationType:p},sampleRate:c})=>{let u=(0,a.useRef)("NOT_SET"),m=(0,d.N5)(),{getState:f,dispatch:g}=H(W,{status:"DISABLED",metricConfig:null}),y=(0,$.B)();if(u.current!==l&&(u.current=l,m)){let{isAuthenticated:a}=m,i=e&&p&&(s||D).includes(p)?{metricId:{type:"surface",surface:e,navigationType:p,isAuthenticated:a,segment:n},annotateExperiments:o,constraints:[k,...t||[],...r?[z]:[]],pwtStaticContext:m}:null;(0,_.nP)("webapp.pwt_surface.init_route",{tags:{surface:e,navigationType:p,isAuthenticated:a}});let d=!q.has(l);g({type:"INIT_ROUTE",payload:{metricConfig:i,startTime:l?l.time:0,isSampled:!c||Math.random()<c,disablePWTLogging:!d}}),d&&q.add(l)}let h=f();if((0,a.useEffect)(()=>()=>{q.delete(l)},[l]),(0,a.useEffect)(()=>{let e=e=>{g({type:"ABORT",reason:e})};i.Z.onSessionPause(e);let t=window.innerHeight,n=window.innerWidth,a=()=>{let e=Math.abs(window.innerHeight-t),i=Math.abs(window.innerWidth-n),r=window.innerHeight!==t,o=window.innerWidth!==n,s={handler:(0,B.H)(),deviceType:m?.deviceType??"unknown",isAuthenticated:m?.isAuthenticated??"unknown",platform:y.userAgent.platform??"unknown"};(0,_.nP)("webapp.PwtLogger.handleResize",{sampleRate:1,tags:{...s,heightChanged:r,widthChanged:o}}),r&&(0,_.S0)("webapp.PwtLogger.resizeHeightDelta",e,{sampleRate:1,tags:s}),o&&(0,_.S0)("webapp.PwtLogger.resizeWidthDelta",i,{sampleRate:1,tags:s}),window.removeEventListener("resize",a);let l=m?.deviceType==="phone"&&(!o&&r&&e<=150||!r&&!o)||m?.deviceType==="desktop"&&!r&&!o;if(l){(0,_.nP)("webapp.PwtLogger.skipResizeAbort",{sampleRate:1,tags:{...s,heightChanged:r,widthChanged:o}});return}g({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",a),()=>{let t=f();U("handling unmount",t),"TIMING"===t.status&&x(t,"unmount"),i.Z.removePauseListener(e),window.removeEventListener("resize",a)}},[]),"TIMING"!==h.status||!h.constraintMap[k])return{state:h,context:null};let{startTime:w,metricConfig:T}=h;return{state:h,context:{abort:e=>g({type:"ABORT",reason:e}),addAnnotation:e=>g({type:"ANNOTATE",payload:{name:e}}),addBinaryAnnotation:(e,t,n)=>g({type:"BINARY_ANNOTATE",payload:{name:e,value:t,annotationType:n}}),addSubspan:(e,t,n,a={},i={},r=null)=>g({type:"ADD_SUBSPAN",payload:{name:e,startTime:t,endTime:n,annotations:a,binaryAnnotations:i,parentId:r}}),getId:()=>w,getMetricId:()=>T.metricId,markConstraintComplete:e=>g({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:e,time:O.Z?O.Z.now():0}}),removeConstraint:e=>g({type:"REMOVE_CONSTRAINT",payload:e}),setSegment:e=>g({type:"SET_SEGMENT",payload:e}),setVisuallyCompleteResult:T.constraints.includes(z)?e=>g({type:"SET_VISUALLY_COMPLETE_RESULT",payload:e}):null,startSubspan:(e,t={},n={},a=null)=>g({type:"START_SUBSPAN",payload:{name:e,annotations:t,binaryAnnotations:n,parentId:a}}),stopSubspan:(e,t={},n={},a=null)=>g({type:"STOP_SUBSPAN",payload:{name:e,annotations:t,binaryAnnotations:n,parentId:a}})}}},Q=()=>{let e=(0,p.E)(),t=!!e;(0,a.useEffect)(()=>{if(t){let t=e?.getMetricId(),n=t?(0,r.KJ)(t):null;(0,s.H)("nested_pwt_surface",{action:n})}},[t])};function ee({children:e,...t}){let n=(0,d.fM)(),a=Y(n),i=[...t.annotateExperiments??[]],r={...t,annotateExperiments:i,navigationInfo:{navigationType:a,clientNavigation:n}},{context:o}=X(r);return Q(),(0,Z.jsx)(p.S,{value:o,children:e})}},311560:(e,t,n)=>{n.d(t,{Z:()=>a});let a=e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";case"CA":return"CA";case"GB":return"GB";case"FR":return"FR";case"DE":return"DE";case"AU":return"AU";case"IN":return"IN";default:return"OTHER"}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16142-6cd6261cd1f8de4e.mjs.map