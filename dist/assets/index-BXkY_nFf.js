function td(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},Si={},Ms={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),id=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ud=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),mo=Symbol.iterator;function md(e){return e===null||typeof e!="object"?null:(e=mo&&e[mo]||e["@@iterator"],typeof e=="function"?e:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Os=Object.assign,js={};function xt(e,n,t){this.props=e,this.context=n,this.refs=js,this.updater=t||_s}xt.prototype.isReactComponent={};xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ds(){}Ds.prototype=xt.prototype;function da(e,n,t){this.props=e,this.context=n,this.refs=js,this.updater=t||_s}var pa=da.prototype=new Ds;pa.constructor=da;Os(pa,xt.prototype);pa.isPureReactComponent=!0;var vo=Array.isArray,Bs=Object.prototype.hasOwnProperty,fa={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function Hs(e,n,t){var r,i={},l=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(l=""+n.key),n)Bs.call(n,r)&&!Us.hasOwnProperty(r)&&(i[r]=n[r]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:mr,type:e,key:l,ref:a,props:i,_owner:fa.current}}function vd(e,n){return{$$typeof:mr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function hd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ho=/\/+/g;function Di(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):n.toString(36)}function _r(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mr:case id:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Di(a,0):r,vo(i)?(t="",e!=null&&(t=e.replace(ho,"$&/")+"/"),_r(i,n,t,"",function(u){return u})):i!=null&&(ma(i)&&(i=vd(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ho,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",vo(e))for(var o=0;o<e.length;o++){l=e[o];var s=r+Di(l,o);a+=_r(l,n,t,s,i)}else if(s=md(e),typeof s=="function")for(e=s.call(e),o=0;!(l=e.next()).done;)l=l.value,s=r+Di(l,o++),a+=_r(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function xr(e,n,t){if(e==null)return e;var r=[],i=0;return _r(e,r,"","",function(l){return n.call(t,l,i++)}),r}function gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Or={transition:null},yd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Or,ReactCurrentOwner:fa};function Ws(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:xr,forEach:function(e,n,t){xr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return xr(e,function(){n++}),n},toArray:function(e){return xr(e,function(n){return n})||[]},only:function(e){if(!ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=xt;R.Fragment=ld;R.Profiler=od;R.PureComponent=da;R.StrictMode=ad;R.Suspense=dd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;R.act=Ws;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Os({},e.props),i=e.key,l=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,a=fa.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)Bs.call(n,s)&&!Us.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:mr,type:e.type,key:i,ref:l,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};R.createElement=Hs;R.createFactory=function(e){var n=Hs.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:cd,render:e}};R.isValidElement=ma;R.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};R.memo=function(e,n){return{$$typeof:pd,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Or.transition;Or.transition={};try{e()}finally{Or.transition=n}};R.unstable_act=Ws;R.useCallback=function(e,n){return pe.current.useCallback(e,n)};R.useContext=function(e){return pe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};R.useEffect=function(e,n){return pe.current.useEffect(e,n)};R.useId=function(){return pe.current.useId()};R.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return pe.current.useMemo(e,n)};R.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};R.useRef=function(e){return pe.current.useRef(e)};R.useState=function(e){return pe.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return pe.current.useTransition()};R.version="18.3.1";Ms.exports=R;var C=Ms.exports;const Vs=rd(C),xd=td({__proto__:null,default:Vs},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=C,Sd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),bd=Object.prototype.hasOwnProperty,Ed=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cd={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,n,t){var r,i={},l=null,a=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)bd.call(n,r)&&!Cd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Sd,type:e,key:l,ref:a,props:i,_owner:Ed.current}}Si.Fragment=kd;Si.jsx=$s;Si.jsxs=$s;Rs.exports=Si;var h=Rs.exports,ml={},qs={exports:{}},be={},Gs={exports:{}},Qs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,z){var T=N.length;N.push(z);e:for(;0<T;){var B=T-1>>>1,q=N[B];if(0<i(q,z))N[B]=z,N[T]=q,T=B;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],T=N.pop();if(T!==z){N[0]=T;e:for(var B=0,q=N.length,In=q>>>1;B<In;){var je=2*(B+1)-1,$n=N[je],De=je+1,zn=N[De];if(0>i($n,T))De<q&&0>i(zn,$n)?(N[B]=zn,N[De]=T,B=De):(N[B]=$n,N[je]=T,B=je);else if(De<q&&0>i(zn,T))N[B]=zn,N[De]=T,B=De;else break e}}return z}function i(N,z){var T=N.sortIndex-z.sortIndex;return T!==0?T:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],u=[],m=1,f=null,v=3,x=!1,S=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var z=t(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,n(s,z);else break;z=t(u)}}function y(N){if(w=!1,p(N),!S)if(t(s)!==null)S=!0,Pt(E);else{var z=t(u);z!==null&&Nt(y,z.startTime-N)}}function E(N,z){S=!1,w&&(w=!1,d(b),b=-1),x=!0;var T=v;try{for(p(z),f=t(s);f!==null&&(!(f.expirationTime>z)||N&&!re());){var B=f.callback;if(typeof B=="function"){f.callback=null,v=f.priorityLevel;var q=B(f.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?f.callback=q:f===t(s)&&r(s),p(z)}else r(s);f=t(s)}if(f!==null)var In=!0;else{var je=t(u);je!==null&&Nt(y,je.startTime-z),In=!1}return In}finally{f=null,v=T,x=!1}}var I=!1,g=null,b=-1,F=5,L=-1;function re(){return!(e.unstable_now()-L<F)}function An(){if(g!==null){var N=e.unstable_now();L=N;var z=!0;try{z=g(!0,N)}finally{z?rn():(I=!1,g=null)}}else I=!1}var rn;if(typeof c=="function")rn=function(){c(An)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,ji=Ct.port2;Ct.port1.onmessage=An,rn=function(){ji.postMessage(null)}}else rn=function(){P(An,0)};function Pt(N){g=N,I||(I=!0,rn())}function Nt(N,z){b=P(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Pt(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var T=v;v=z;try{return N()}finally{v=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=v;v=N;try{return z()}finally{v=T}},e.unstable_scheduleCallback=function(N,z,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,N={id:m++,callback:z,priorityLevel:N,startTime:T,expirationTime:q,sortIndex:-1},T>B?(N.sortIndex=T,n(u,N),t(s)===null&&N===t(u)&&(w?(d(b),b=-1):w=!0,Nt(y,T-B))):(N.sortIndex=q,n(s,N),S||x||(S=!0,Pt(E))),N},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(N){var z=v;return function(){var T=v;v=z;try{return N.apply(this,arguments)}finally{v=T}}}})(Qs);Gs.exports=Qs;var Pd=Gs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=C,ke=Pd;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ks=new Set,Kt={};function Wn(e,n){pt(e,n),pt(e+"Capture",n)}function pt(e,n){for(Kt[e]=n,e=0;e<n.length;e++)Ks.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,go={},yo={};function Id(e){return vl.call(yo,e)?!0:vl.call(go,e)?!1:Ad.test(e)?yo[e]=!0:(go[e]=!0,!1)}function zd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,t,r){if(n===null||typeof n>"u"||zd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function fe(e,n,t,r,i,l,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(va,ha);te[n]=new fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(va,ha);te[n]=new fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(va,ha);te[n]=new fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,t,i,r)&&(t=null),r||i===null?Id(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var nn=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Ys=Symbol.for("react.provider"),Xs=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Js=Symbol.for("react.offscreen"),xo=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=xo&&e[xo]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Bi;function _t(e){if(Bi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Bi=n&&n[1]||""}return`
`+Bi+e}var Ui=!1;function Hi(e,n){if(!e||Ui)return"";Ui=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{Ui=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function Td(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case hl:return"Profiler";case ya:return"StrictMode";case gl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xs:return(e.displayName||"Context")+".Consumer";case Ys:return(e._context.displayName||"Context")+".Provider";case xa:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wa:return n=e.displayName||null,n!==null?n:xl(e.type)||"Memo";case an:n=e._payload,e=e._init;try{return xl(e(n))}catch{}}return null}function Fd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(n);case 8:return n===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rd(e){var n=Zs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Rd(e))}function eu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Zs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nu(e,n){n=n.checked,n!=null&&ga(e,"checked",n,!1)}function Sl(e,n){nu(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?kl(e,n.type,t):n.hasOwnProperty("defaultValue")&&kl(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function So(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function kl(e,n,t){(n!=="number"||Kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ot=Array.isArray;function at(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ko(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Ot(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function tu(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function bo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,iu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Md=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){Md.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function lu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function au(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=lu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var _d=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,n){if(n){if(_d[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function Pl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,ot=null,st=null;function Eo(e){if(e=gr(e)){if(typeof Al!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Pi(n),Al(e.stateNode,e.type,n))}}function ou(e){ot?st?st.push(e):st=[e]:ot=e}function su(){if(ot){var e=ot,n=st;if(st=ot=null,Eo(e),n)for(e=0;e<n.length;e++)Eo(n[e])}}function uu(e,n){return e(n)}function cu(){}var Wi=!1;function du(e,n,t){if(Wi)return e(n,t);Wi=!0;try{return uu(e,n,t)}finally{Wi=!1,(ot!==null||st!==null)&&(cu(),su())}}function Xt(e,n){var t=e.stateNode;if(t===null)return null;var r=Pi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Il=!1;if(Xe)try{var It={};Object.defineProperty(It,"passive",{get:function(){Il=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Il=!1}function Od(e,n,t,r,i,l,a,o,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(m){this.onError(m)}}var Ut=!1,Yr=null,Xr=!1,zl=null,jd={onError:function(e){Ut=!0,Yr=e}};function Dd(e,n,t,r,i,l,a,o,s){Ut=!1,Yr=null,Od.apply(jd,arguments)}function Bd(e,n,t,r,i,l,a,o,s){if(Dd.apply(this,arguments),Ut){if(Ut){var u=Yr;Ut=!1,Yr=null}else throw Error(k(198));Xr||(Xr=!0,zl=u)}}function Vn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function pu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Co(e){if(Vn(e)!==e)throw Error(k(188))}function Ud(e){var n=e.alternate;if(!n){if(n=Vn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Co(i),e;if(l===r)return Co(i),n;l=l.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,r=l;break}if(o===r){a=!0,r=i,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,r=i;break}if(o===r){a=!0,r=l,t=i;break}o=o.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function fu(e){return e=Ud(e),e!==null?mu(e):null}function mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=mu(e);if(n!==null)return n;e=e.sibling}return null}var vu=ke.unstable_scheduleCallback,Po=ke.unstable_cancelCallback,Hd=ke.unstable_shouldYield,Wd=ke.unstable_requestPaint,G=ke.unstable_now,Vd=ke.unstable_getCurrentPriorityLevel,ka=ke.unstable_ImmediatePriority,hu=ke.unstable_UserBlockingPriority,Jr=ke.unstable_NormalPriority,$d=ke.unstable_LowPriority,gu=ke.unstable_IdlePriority,ki=null,Ve=null;function qd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Kd,Gd=Math.log,Qd=Math.LN2;function Kd(e){return e>>>=0,e===0?32:31-(Gd(e)/Qd|0)|0}var br=64,Er=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?r=jt(o):(l&=a,l!==0&&(r=jt(l)))}else a=t&~i,a!==0?r=jt(a):l!==0&&(r=jt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Me(n),i=1<<t,r|=e[t],n&=~i;return r}function Yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Me(l),o=1<<a,s=i[a];s===-1?(!(o&t)||o&r)&&(i[a]=Yd(o,n)):s<=n&&(e.expiredLanes|=o),l&=~o}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function vr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Me(n),e[n]=t}function Jd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Me(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ba(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Me(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var _=0;function xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,Ea,Su,ku,bu,Tl=!1,Cr=[],fn=null,mn=null,vn=null,Jt=new Map,Zt=new Map,sn=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function No(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zt.delete(n.pointerId)}}function zt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=gr(n),n!==null&&Ea(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ep(e,n,t,r,i){switch(n){case"focusin":return fn=zt(fn,e,n,t,r,i),!0;case"dragenter":return mn=zt(mn,e,n,t,r,i),!0;case"mouseover":return vn=zt(vn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Jt.set(l,zt(Jt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Zt.set(l,zt(Zt.get(l)||null,e,n,t,r,i)),!0}return!1}function Eu(e){var n=Fn(e.target);if(n!==null){var t=Vn(n);if(t!==null){if(n=t.tag,n===13){if(n=pu(t),n!==null){e.blockedOn=n,bu(e.priority,function(){Su(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Nl=r,t.target.dispatchEvent(r),Nl=null}else return n=gr(t),n!==null&&Ea(n),e.blockedOn=t,!1;n.shift()}return!0}function Ao(e,n,t){jr(e)&&t.delete(n)}function np(){Tl=!1,fn!==null&&jr(fn)&&(fn=null),mn!==null&&jr(mn)&&(mn=null),vn!==null&&jr(vn)&&(vn=null),Jt.forEach(Ao),Zt.forEach(Ao)}function Lt(e,n){e.blockedOn===n&&(e.blockedOn=null,Tl||(Tl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,np)))}function er(e){function n(i){return Lt(i,e)}if(0<Cr.length){Lt(Cr[0],e);for(var t=1;t<Cr.length;t++){var r=Cr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Lt(fn,e),mn!==null&&Lt(mn,e),vn!==null&&Lt(vn,e),Jt.forEach(n),Zt.forEach(n),t=0;t<sn.length;t++)r=sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(t=sn[0],t.blockedOn===null);)Eu(t),t.blockedOn===null&&sn.shift()}var ut=nn.ReactCurrentBatchConfig,ei=!0;function tp(e,n,t,r){var i=_,l=ut.transition;ut.transition=null;try{_=1,Ca(e,n,t,r)}finally{_=i,ut.transition=l}}function rp(e,n,t,r){var i=_,l=ut.transition;ut.transition=null;try{_=4,Ca(e,n,t,r)}finally{_=i,ut.transition=l}}function Ca(e,n,t,r){if(ei){var i=Fl(e,n,t,r);if(i===null)el(e,n,r,ni,t),No(e,r);else if(ep(i,e,n,t,r))r.stopPropagation();else if(No(e,r),n&4&&-1<Zd.indexOf(e)){for(;i!==null;){var l=gr(i);if(l!==null&&wu(l),l=Fl(e,n,t,r),l===null&&el(e,n,r,ni,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else el(e,n,r,null,t)}}var ni=null;function Fl(e,n,t,r){if(ni=null,e=Sa(r),e=Fn(e),e!==null)if(n=Vn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=pu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ni=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vd()){case ka:return 1;case hu:return 4;case Jr:case $d:return 16;case gu:return 536870912;default:return 16}default:return 16}}var cn=null,Pa=null,Dr=null;function Pu(){if(Dr)return Dr;var e,n=Pa,t=n.length,r,i="value"in cn?cn.value:cn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[l-r];r++);return Dr=i.slice(e,1<r?1-r:void 0)}function Br(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Io(){return!1}function Ee(e){function n(t,r,i,l,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pr:Io,this.isPropagationStopped=Io,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=Ee(wt),hr=V({},wt,{view:0,detail:0}),ip=Ee(hr),$i,qi,Tt,bi=V({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?($i=e.screenX-Tt.screenX,qi=e.screenY-Tt.screenY):qi=$i=0,Tt=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),zo=Ee(bi),lp=V({},bi,{dataTransfer:0}),ap=Ee(lp),op=V({},hr,{relatedTarget:0}),Gi=Ee(op),sp=V({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Ee(sp),cp=V({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=Ee(cp),pp=V({},wt,{data:0}),Lo=Ee(pp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vp[e])?!!n[e]:!1}function Aa(){return hp}var gp=V({},hr,{key:function(e){if(e.key){var n=fp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yp=Ee(gp),xp=V({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),To=Ee(xp),wp=V({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),Sp=Ee(wp),kp=V({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=Ee(kp),Ep=V({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=Ee(Ep),Pp=[9,13,27,32],Ia=Xe&&"CompositionEvent"in window,Ht=null;Xe&&"documentMode"in document&&(Ht=document.documentMode);var Np=Xe&&"TextEvent"in window&&!Ht,Nu=Xe&&(!Ia||Ht&&8<Ht&&11>=Ht),Fo=" ",Ro=!1;function Au(e,n){switch(e){case"keyup":return Pp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Ap(e,n){switch(e){case"compositionend":return Iu(n);case"keypress":return n.which!==32?null:(Ro=!0,Fo);case"textInput":return e=n.data,e===Fo&&Ro?null:e;default:return null}}function Ip(e,n){if(Yn)return e==="compositionend"||!Ia&&Au(e,n)?(e=Pu(),Dr=Pa=cn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nu&&n.locale!=="ko"?null:n.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zp[e.type]:n==="textarea"}function zu(e,n,t,r){ou(r),n=ti(n,"onChange"),0<n.length&&(t=new Na("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Wt=null,nr=null;function Lp(e){Uu(e,0)}function Ei(e){var n=Zn(e);if(eu(n))return e}function Tp(e,n){if(e==="change")return n}var Lu=!1;if(Xe){var Qi;if(Xe){var Ki="oninput"in document;if(!Ki){var _o=document.createElement("div");_o.setAttribute("oninput","return;"),Ki=typeof _o.oninput=="function"}Qi=Ki}else Qi=!1;Lu=Qi&&(!document.documentMode||9<document.documentMode)}function Oo(){Wt&&(Wt.detachEvent("onpropertychange",Tu),nr=Wt=null)}function Tu(e){if(e.propertyName==="value"&&Ei(nr)){var n=[];zu(n,nr,e,Sa(e)),du(Lp,n)}}function Fp(e,n,t){e==="focusin"?(Oo(),Wt=n,nr=t,Wt.attachEvent("onpropertychange",Tu)):e==="focusout"&&Oo()}function Rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(nr)}function Mp(e,n){if(e==="click")return Ei(n)}function _p(e,n){if(e==="input"||e==="change")return Ei(n)}function Op(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Op;function tr(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!vl.call(n,i)||!Oe(e[i],n[i]))return!1}return!0}function jo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Do(e,n){var t=jo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jo(t)}}function Fu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ru(){for(var e=window,n=Kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Kr(e.document)}return n}function za(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jp(e){var n=Ru(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Fu(t.ownerDocument.documentElement,t)){if(r!==null&&za(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Do(t,l);var a=Do(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dp=Xe&&"documentMode"in document&&11>=document.documentMode,Xn=null,Rl=null,Vt=null,Ml=!1;function Bo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ml||Xn==null||Xn!==Kr(r)||(r=Xn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vt&&tr(Vt,r)||(Vt=r,r=ti(Rl,"onSelect"),0<r.length&&(n=new Na("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Xn)))}function Nr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jn={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Yi={},Mu={};Xe&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Ci(e){if(Yi[e])return Yi[e];if(!Jn[e])return e;var n=Jn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mu)return Yi[e]=n[t];return e}var _u=Ci("animationend"),Ou=Ci("animationiteration"),ju=Ci("animationstart"),Du=Ci("transitionend"),Bu=new Map,Uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,n){Bu.set(e,n),Wn(n,[e])}for(var Xi=0;Xi<Uo.length;Xi++){var Ji=Uo[Xi],Bp=Ji.toLowerCase(),Up=Ji[0].toUpperCase()+Ji.slice(1);En(Bp,"on"+Up)}En(_u,"onAnimationEnd");En(Ou,"onAnimationIteration");En(ju,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Du,"onTransitionEnd");pt("onMouseEnter",["mouseout","mouseover"]);pt("onMouseLeave",["mouseout","mouseover"]);pt("onPointerEnter",["pointerout","pointerover"]);pt("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Ho(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Bd(r,n,void 0,e),e.currentTarget=null}function Uu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var a=r.length-1;0<=a;a--){var o=r[a],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==l&&i.isPropagationStopped())break e;Ho(i,o,u),l=s}else for(a=0;a<r.length;a++){if(o=r[a],s=o.instance,u=o.currentTarget,o=o.listener,s!==l&&i.isPropagationStopped())break e;Ho(i,o,u),l=s}}}if(Xr)throw e=zl,Xr=!1,zl=null,e}function j(e,n){var t=n[Bl];t===void 0&&(t=n[Bl]=new Set);var r=e+"__bubble";t.has(r)||(Hu(n,e,2,!1),t.add(r))}function Zi(e,n,t){var r=0;n&&(r|=4),Hu(t,e,r,n)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Ar]){e[Ar]=!0,Ks.forEach(function(t){t!=="selectionchange"&&(Hp.has(t)||Zi(t,!1,e),Zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ar]||(n[Ar]=!0,Zi("selectionchange",!1,n))}}function Hu(e,n,t,r){switch(Cu(n)){case 1:var i=tp;break;case 4:i=rp;break;default:i=Ca}t=i.bind(null,n,t,e),i=void 0,!Il||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function el(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Fn(o),a===null)return;if(s=a.tag,s===5||s===6){r=l=a;continue e}o=o.parentNode}}r=r.return}du(function(){var u=l,m=Sa(t),f=[];e:{var v=Bu.get(e);if(v!==void 0){var x=Na,S=e;switch(e){case"keypress":if(Br(t)===0)break e;case"keydown":case"keyup":x=yp;break;case"focusin":S="focus",x=Gi;break;case"focusout":S="blur",x=Gi;break;case"beforeblur":case"afterblur":x=Gi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Sp;break;case _u:case Ou:case ju:x=up;break;case Du:x=bp;break;case"scroll":x=ip;break;case"wheel":x=Cp;break;case"copy":case"cut":case"paste":x=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=To}var w=(n&4)!==0,P=!w&&e==="scroll",d=w?v!==null?v+"Capture":null:v;w=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Xt(c,d),y!=null&&w.push(ir(c,y,p)))),P)break;c=c.return}0<w.length&&(v=new x(v,S,null,t,m),f.push({event:v,listeners:w}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&t!==Nl&&(S=t.relatedTarget||t.fromElement)&&(Fn(S)||S[Je]))break e;if((x||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,x?(S=t.relatedTarget||t.toElement,x=u,S=S?Fn(S):null,S!==null&&(P=Vn(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=u),x!==S)){if(w=zo,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=To,y="onPointerLeave",d="onPointerEnter",c="pointer"),P=x==null?v:Zn(x),p=S==null?v:Zn(S),v=new w(y,c+"leave",x,t,m),v.target=P,v.relatedTarget=p,y=null,Fn(m)===u&&(w=new w(d,c+"enter",S,t,m),w.target=p,w.relatedTarget=P,y=w),P=y,x&&S)n:{for(w=x,d=S,c=0,p=w;p;p=qn(p))c++;for(p=0,y=d;y;y=qn(y))p++;for(;0<c-p;)w=qn(w),c--;for(;0<p-c;)d=qn(d),p--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break n;w=qn(w),d=qn(d)}w=null}else w=null;x!==null&&Wo(f,v,x,w,!1),S!==null&&P!==null&&Wo(f,P,S,w,!0)}}e:{if(v=u?Zn(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var E=Tp;else if(Mo(v))if(Lu)E=_p;else{E=Rp;var I=Fp}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=Mp);if(E&&(E=E(e,u))){zu(f,E,t,m);break e}I&&I(e,v,u),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&kl(v,"number",v.value)}switch(I=u?Zn(u):window,e){case"focusin":(Mo(I)||I.contentEditable==="true")&&(Xn=I,Rl=u,Vt=null);break;case"focusout":Vt=Rl=Xn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Bo(f,t,m);break;case"selectionchange":if(Dp)break;case"keydown":case"keyup":Bo(f,t,m)}var g;if(Ia)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Yn?Au(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Nu&&t.locale!=="ko"&&(Yn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Yn&&(g=Pu()):(cn=m,Pa="value"in cn?cn.value:cn.textContent,Yn=!0)),I=ti(u,b),0<I.length&&(b=new Lo(b,e,null,t,m),f.push({event:b,listeners:I}),g?b.data=g:(g=Iu(t),g!==null&&(b.data=g)))),(g=Np?Ap(e,t):Ip(e,t))&&(u=ti(u,"onBeforeInput"),0<u.length&&(m=new Lo("onBeforeInput","beforeinput",null,t,m),f.push({event:m,listeners:u}),m.data=g))}Uu(f,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ti(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Xt(e,t),l!=null&&r.unshift(ir(e,l,i)),l=Xt(e,n),l!=null&&r.push(ir(e,l,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wo(e,n,t,r,i){for(var l=n._reactName,a=[];t!==null&&t!==r;){var o=t,s=o.alternate,u=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&u!==null&&(o=u,i?(s=Xt(t,l),s!=null&&a.unshift(ir(t,s,o))):i||(s=Xt(t,l),s!=null&&a.push(ir(t,s,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Wp=/\r\n?/g,Vp=/\u0000|\uFFFD/g;function Vo(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace(Vp,"")}function Ir(e,n,t){if(n=Vo(n),Vo(e)!==n&&t)throw Error(k(425))}function ri(){}var _l=null,Ol=null;function jl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dl=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,$o=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof $o<"u"?function(e){return $o.resolve(null).then(e).catch(Gp)}:Dl;function Gp(e){setTimeout(function(){throw e})}function nl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);er(n)}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function qo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var St=Math.random().toString(36).slice(2),We="__reactFiber$"+St,lr="__reactProps$"+St,Je="__reactContainer$"+St,Bl="__reactEvents$"+St,Qp="__reactListeners$"+St,Kp="__reactHandles$"+St;function Fn(e){var n=e[We];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Je]||t[We]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=qo(e);e!==null;){if(t=e[We])return t;e=qo(e)}return n}e=t,t=e.parentNode}return null}function gr(e){return e=e[We]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pi(e){return e[lr]||null}var Ul=[],et=-1;function Cn(e){return{current:e}}function D(e){0>et||(e.current=Ul[et],Ul[et]=null,et--)}function O(e,n){et++,Ul[et]=e.current,e.current=n}var bn={},ue=Cn(bn),he=Cn(!1),jn=bn;function ft(e,n){var t=e.type.contextTypes;if(!t)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function ii(){D(he),D(ue)}function Go(e,n,t){if(ue.current!==bn)throw Error(k(168));O(ue,n),O(he,t)}function Wu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,Fd(e)||"Unknown",i));return V({},t,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,jn=ue.current,O(ue,e),O(he,he.current),!0}function Qo(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Wu(e,n,jn),r.__reactInternalMemoizedMergedChildContext=e,D(he),D(ue),O(ue,e)):D(he),O(he,t)}var Ge=null,Ni=!1,tl=!1;function Vu(e){Ge===null?Ge=[e]:Ge.push(e)}function Yp(e){Ni=!0,Vu(e)}function Pn(){if(!tl&&Ge!==null){tl=!0;var e=0,n=_;try{var t=Ge;for(_=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ge=null,Ni=!1}catch(i){throw Ge!==null&&(Ge=Ge.slice(e+1)),vu(ka,Pn),i}finally{_=n,tl=!1}}return null}var nt=[],tt=0,ai=null,oi=0,Ce=[],Pe=0,Dn=null,Qe=1,Ke="";function Ln(e,n){nt[tt++]=oi,nt[tt++]=ai,ai=e,oi=n}function $u(e,n,t){Ce[Pe++]=Qe,Ce[Pe++]=Ke,Ce[Pe++]=Dn,Dn=e;var r=Qe;e=Ke;var i=32-Me(r)-1;r&=~(1<<i),t+=1;var l=32-Me(n)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qe=1<<32-Me(n)+i|t<<i|r,Ke=l+e}else Qe=1<<l|t<<i|r,Ke=e}function La(e){e.return!==null&&(Ln(e,1),$u(e,1,0))}function Ta(e){for(;e===ai;)ai=nt[--tt],nt[tt]=null,oi=nt[--tt],nt[tt]=null;for(;e===Dn;)Dn=Ce[--Pe],Ce[Pe]=null,Ke=Ce[--Pe],Ce[Pe]=null,Qe=Ce[--Pe],Ce[Pe]=null}var Se=null,we=null,U=!1,Re=null;function qu(e,n){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ko(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,we=hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Qe,overflow:Ke}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,we=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(U){var n=we;if(n){var t=n;if(!Ko(e,n)){if(Hl(e))throw Error(k(418));n=hn(t.nextSibling);var r=Se;n&&Ko(e,n)?qu(r,t):(e.flags=e.flags&-4097|2,U=!1,Se=e)}}else{if(Hl(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,Se=e}}}function Yo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function zr(e){if(e!==Se)return!1;if(!U)return Yo(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!jl(e.type,e.memoizedProps)),n&&(n=we)){if(Hl(e))throw Gu(),Error(k(418));for(;n;)qu(e,n),n=hn(n.nextSibling)}if(Yo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){we=hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}we=null}}else we=Se?hn(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=we;e;)e=hn(e.nextSibling)}function mt(){we=Se=null,U=!1}function Fa(e){Re===null?Re=[e]:Re.push(e)}var Xp=nn.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},n._stringRef=l,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Lr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xo(e){var n=e._init;return n(e._payload)}function Qu(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=wn(d,c),d.index=0,d.sibling=null,d}function l(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,c,p,y){return c===null||c.tag!==6?(c=ul(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function s(d,c,p,y){var E=p.type;return E===Kn?m(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&Xo(E)===c.type)?(y=i(c,p.props),y.ref=Ft(d,c,p),y.return=d,y):(y=Gr(p.type,p.key,p.props,null,d.mode,y),y.ref=Ft(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=cl(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function m(d,c,p,y,E){return c===null||c.tag!==7?(c=On(p,d.mode,y,E),c.return=d,c):(c=i(c,p),c.return=d,c)}function f(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return p=Gr(c.type,c.key,c.props,null,d.mode,p),p.ref=Ft(d,null,c),p.return=d,p;case Qn:return c=cl(c,d.mode,p),c.return=d,c;case an:var y=c._init;return f(d,y(c._payload),p)}if(Ot(c)||At(c))return c=On(c,d.mode,p,null),c.return=d,c;Lr(d,c)}return null}function v(d,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:o(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:return p.key===E?s(d,c,p,y):null;case Qn:return p.key===E?u(d,c,p,y):null;case an:return E=p._init,v(d,c,E(p._payload),y)}if(Ot(p)||At(p))return E!==null?null:m(d,c,p,y,null);Lr(d,p)}return null}function x(d,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,o(c,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wr:return d=d.get(y.key===null?p:y.key)||null,s(c,d,y,E);case Qn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,E);case an:var I=y._init;return x(d,c,p,I(y._payload),E)}if(Ot(y)||At(y))return d=d.get(p)||null,m(c,d,y,E,null);Lr(c,y)}return null}function S(d,c,p,y){for(var E=null,I=null,g=c,b=c=0,F=null;g!==null&&b<p.length;b++){g.index>b?(F=g,g=null):F=g.sibling;var L=v(d,g,p[b],y);if(L===null){g===null&&(g=F);break}e&&g&&L.alternate===null&&n(d,g),c=l(L,c,b),I===null?E=L:I.sibling=L,I=L,g=F}if(b===p.length)return t(d,g),U&&Ln(d,b),E;if(g===null){for(;b<p.length;b++)g=f(d,p[b],y),g!==null&&(c=l(g,c,b),I===null?E=g:I.sibling=g,I=g);return U&&Ln(d,b),E}for(g=r(d,g);b<p.length;b++)F=x(g,d,b,p[b],y),F!==null&&(e&&F.alternate!==null&&g.delete(F.key===null?b:F.key),c=l(F,c,b),I===null?E=F:I.sibling=F,I=F);return e&&g.forEach(function(re){return n(d,re)}),U&&Ln(d,b),E}function w(d,c,p,y){var E=At(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var I=E=null,g=c,b=c=0,F=null,L=p.next();g!==null&&!L.done;b++,L=p.next()){g.index>b?(F=g,g=null):F=g.sibling;var re=v(d,g,L.value,y);if(re===null){g===null&&(g=F);break}e&&g&&re.alternate===null&&n(d,g),c=l(re,c,b),I===null?E=re:I.sibling=re,I=re,g=F}if(L.done)return t(d,g),U&&Ln(d,b),E;if(g===null){for(;!L.done;b++,L=p.next())L=f(d,L.value,y),L!==null&&(c=l(L,c,b),I===null?E=L:I.sibling=L,I=L);return U&&Ln(d,b),E}for(g=r(d,g);!L.done;b++,L=p.next())L=x(g,d,b,L.value,y),L!==null&&(e&&L.alternate!==null&&g.delete(L.key===null?b:L.key),c=l(L,c,b),I===null?E=L:I.sibling=L,I=L);return e&&g.forEach(function(An){return n(d,An)}),U&&Ln(d,b),E}function P(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:e:{for(var E=p.key,I=c;I!==null;){if(I.key===E){if(E=p.type,E===Kn){if(I.tag===7){t(d,I.sibling),c=i(I,p.props.children),c.return=d,d=c;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===an&&Xo(E)===I.type){t(d,I.sibling),c=i(I,p.props),c.ref=Ft(d,I,p),c.return=d,d=c;break e}t(d,I);break}else n(d,I);I=I.sibling}p.type===Kn?(c=On(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=Gr(p.type,p.key,p.props,null,d.mode,y),y.ref=Ft(d,c,p),y.return=d,d=y)}return a(d);case Qn:e:{for(I=p.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=cl(p,d.mode,y),c.return=d,d=c}return a(d);case an:return I=p._init,P(d,c,I(p._payload),y)}if(Ot(p))return S(d,c,p,y);if(At(p))return w(d,c,p,y);Lr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,p),c.return=d,d=c):(t(d,c),c=ul(p,d.mode,y),c.return=d,d=c),a(d)):t(d,c)}return P}var vt=Qu(!0),Ku=Qu(!1),si=Cn(null),ui=null,rt=null,Ra=null;function Ma(){Ra=rt=ui=null}function _a(e){var n=si.current;D(si),e._currentValue=n}function Vl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ct(e,n){ui=e,Ra=rt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Ie(e){var n=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:n,next:null},rt===null){if(ui===null)throw Error(k(308));rt=e,ui.dependencies={lanes:0,firstContext:e}}else rt=rt.next=e;return n}var Rn=null;function Oa(e){Rn===null?Rn=[e]:Rn.push(e)}function Yu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Oa(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ze(e,r)}function Ze(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var on=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ze(e,t)}return i=r.interleaved,i===null?(n.next=n,Oa(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ze(e,t)}function Ur(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ba(e,t)}}function Jo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ci(e,n,t,r){var i=e.updateQueue;on=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,u=s.next;s.next=null,a===null?l=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,o=m.lastBaseUpdate,o!==a&&(o===null?m.firstBaseUpdate=u:o.next=u,m.lastBaseUpdate=s))}if(l!==null){var f=i.baseState;a=0,m=u=s=null,o=l;do{var v=o.lane,x=o.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=e,w=o;switch(v=n,x=t,w.tag){case 1:if(S=w.payload,typeof S=="function"){f=S.call(x,f,v);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,v=typeof S=="function"?S.call(x,f,v):S,v==null)break e;f=V({},f,v);break e;case 2:on=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[o]:v.push(o))}else x={eventTime:x,lane:v,tag:o.tag,payload:o.payload,callback:o.callback,next:null},m===null?(u=m=x,s=f):m=m.next=x,a|=v;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;v=o,o=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(m===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Un|=a,e.lanes=a,e.memoizedState=f}}function Zo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var yr={},$e=Cn(yr),ar=Cn(yr),or=Cn(yr);function Mn(e){if(e===yr)throw Error(k(174));return e}function Da(e,n){switch(O(or,n),O(ar,e),O($e,yr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:El(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=El(n,e)}D($e),O($e,n)}function ht(){D($e),D(ar),D(or)}function Ju(e){Mn(or.current);var n=Mn($e.current),t=El(n,e.type);n!==t&&(O(ar,e),O($e,t))}function Ba(e){ar.current===e&&(D($e),D(ar))}var H=Cn(0);function di(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rl=[];function Ua(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Hr=nn.ReactCurrentDispatcher,il=nn.ReactCurrentBatchConfig,Bn=0,W=null,Y=null,J=null,pi=!1,$t=!1,sr=0,Jp=0;function ie(){throw Error(k(321))}function Ha(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function Wa(e,n,t,r,i,l){if(Bn=l,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hr.current=e===null||e.memoizedState===null?tf:rf,e=t(r,i),$t){l=0;do{if($t=!1,sr=0,25<=l)throw Error(k(301));l+=1,J=Y=null,n.updateQueue=null,Hr.current=lf,e=t(r,i)}while($t)}if(Hr.current=fi,n=Y!==null&&Y.next!==null,Bn=0,J=Y=W=null,pi=!1,n)throw Error(k(300));return e}function Va(){var e=sr!==0;return sr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function ze(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=J===null?W.memoizedState:J.next;if(n!==null)J=n,Y=e;else{if(e===null)throw Error(k(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function ur(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=ze(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,s=null,u=l;do{var m=u.lane;if((Bn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=f,a=r):s=s.next=f,W.lanes|=m,Un|=m}u=u.next}while(u!==null&&u!==l);s===null?a=r:s.next=o,Oe(r,n.memoizedState)||(ve=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,W.lanes|=l,Un|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function al(e){var n=ze(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Oe(l,n.memoizedState)||(ve=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Zu(){}function ec(e,n){var t=W,r=ze(),i=n(),l=!Oe(r.memoizedState,i);if(l&&(r.memoizedState=i,ve=!0),r=r.queue,$a(rc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,cr(9,tc.bind(null,t,r,i,n),void 0,null),Z===null)throw Error(k(349));Bn&30||nc(t,n,i)}return i}function nc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function tc(e,n,t,r){n.value=t,n.getSnapshot=r,ic(n)&&lc(e)}function rc(e,n,t){return t(function(){ic(n)&&lc(e)})}function ic(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function lc(e){var n=Ze(e,1);n!==null&&_e(n,e,1,-1)}function es(e){var n=He();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,W,e),[n.memoizedState,e]}function cr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ac(){return ze().memoizedState}function Wr(e,n,t,r){var i=He();W.flags|=e,i.memoizedState=cr(1|n,t,void 0,r===void 0?null:r)}function Ai(e,n,t,r){var i=ze();r=r===void 0?null:r;var l=void 0;if(Y!==null){var a=Y.memoizedState;if(l=a.destroy,r!==null&&Ha(r,a.deps)){i.memoizedState=cr(n,t,l,r);return}}W.flags|=e,i.memoizedState=cr(1|n,t,l,r)}function ns(e,n){return Wr(8390656,8,e,n)}function $a(e,n){return Ai(2048,8,e,n)}function oc(e,n){return Ai(4,2,e,n)}function sc(e,n){return Ai(4,4,e,n)}function uc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cc(e,n,t){return t=t!=null?t.concat([e]):null,Ai(4,4,uc.bind(null,n,e),t)}function qa(){}function dc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ha(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pc(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ha(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function fc(e,n,t){return Bn&21?(Oe(t,n)||(t=yu(),W.lanes|=t,Un|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function Zp(e,n){var t=_;_=t!==0&&4>t?t:4,e(!0);var r=il.transition;il.transition={};try{e(!1),n()}finally{_=t,il.transition=r}}function mc(){return ze().memoizedState}function ef(e,n,t){var r=xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},vc(e))hc(n,t);else if(t=Yu(e,n,t,r),t!==null){var i=de();_e(t,e,r,i),gc(t,n,r)}}function nf(e,n,t){var r=xn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(vc(e))hc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var a=n.lastRenderedState,o=l(a,t);if(i.hasEagerState=!0,i.eagerState=o,Oe(o,a)){var s=n.interleaved;s===null?(i.next=i,Oa(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Yu(e,n,i,r),t!==null&&(i=de(),_e(t,e,r,i),gc(t,n,r))}}function vc(e){var n=e.alternate;return e===W||n!==null&&n===W}function hc(e,n){$t=pi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ba(e,t)}}var fi={readContext:Ie,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},tf={readContext:Ie,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Ie,useEffect:ns,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Wr(4194308,4,uc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Wr(4,2,e,n)},useMemo:function(e,n){var t=He();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=He();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ef.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:es,useDebugValue:qa,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=es(!1),n=e[0];return e=Zp.bind(null,e[1]),He().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=W,i=He();if(U){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),Z===null)throw Error(k(349));Bn&30||nc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ns(rc.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,tc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=He(),n=Z.identifierPrefix;if(U){var t=Ke,r=Qe;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:Ie,useCallback:dc,useContext:Ie,useEffect:$a,useImperativeHandle:cc,useInsertionEffect:oc,useLayoutEffect:sc,useMemo:pc,useReducer:ll,useRef:ac,useState:function(){return ll(ur)},useDebugValue:qa,useDeferredValue:function(e){var n=ze();return fc(n,Y.memoizedState,e)},useTransition:function(){var e=ll(ur)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Zu,useSyncExternalStore:ec,useId:mc,unstable_isNewReconciler:!1},lf={readContext:Ie,useCallback:dc,useContext:Ie,useEffect:$a,useImperativeHandle:cc,useInsertionEffect:oc,useLayoutEffect:sc,useMemo:pc,useReducer:al,useRef:ac,useState:function(){return al(ur)},useDebugValue:qa,useDeferredValue:function(e){var n=ze();return Y===null?n.memoizedState=e:fc(n,Y.memoizedState,e)},useTransition:function(){var e=al(ur)[0],n=ze().memoizedState;return[e,n]},useMutableSource:Zu,useSyncExternalStore:ec,useId:mc,unstable_isNewReconciler:!1};function Te(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $l(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ii={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=xn(e),l=Ye(r,i);l.payload=n,t!=null&&(l.callback=t),n=gn(e,l,i),n!==null&&(_e(n,e,i,r),Ur(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=xn(e),l=Ye(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=gn(e,l,i),n!==null&&(_e(n,e,i,r),Ur(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=xn(e),i=Ye(t,r);i.tag=2,n!=null&&(i.callback=n),n=gn(e,i,r),n!==null&&(_e(n,e,r,t),Ur(n,e,r))}};function ts(e,n,t,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(i,l):!0}function yc(e,n,t){var r=!1,i=bn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ie(l):(i=ge(n)?jn:ue.current,r=n.contextTypes,l=(r=r!=null)?ft(e,i):bn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ii,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function rs(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ii.enqueueReplaceState(n,n.state,null)}function ql(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ja(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ie(l):(l=ge(n)?jn:ue.current,i.context=ft(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&($l(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ii.enqueueReplaceState(i,i.state,null),ci(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,n){try{var t="",r=n;do t+=Td(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ol(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Gl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var af=typeof WeakMap=="function"?WeakMap:Map;function xc(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){vi||(vi=!0,ra=r),Gl(e,n)},t}function wc(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Gl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Gl(e,n),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function is(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new af;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=wf.bind(null,e,n,t),n.then(e,e))}function ls(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function as(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,gn(t,n,1))),t.lanes|=1),e)}var of=nn.ReactCurrentOwner,ve=!1;function ce(e,n,t,r){n.child=e===null?Ku(n,null,t,r):vt(n,e.child,t,r)}function os(e,n,t,r,i){t=t.render;var l=n.ref;return ct(n,i),r=Wa(e,n,t,r,l,i),t=Va(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(U&&t&&La(n),n.flags|=1,ce(e,n,r,i),n.child)}function ss(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!eo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Sc(e,n,l,r,i)):(e=Gr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(a,r)&&e.ref===n.ref)return en(e,n,i)}return n.flags|=1,e=wn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Sc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(tr(l,r)&&e.ref===n.ref)if(ve=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,en(e,n,i)}return Ql(e,n,t,r,i)}function kc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(lt,xe),xe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(lt,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,O(lt,xe),xe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,O(lt,xe),xe|=r;return ce(e,n,i,t),n.child}function bc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ql(e,n,t,r,i){var l=ge(t)?jn:ue.current;return l=ft(n,l),ct(n,i),t=Wa(e,n,t,r,l,i),r=Va(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,en(e,n,i)):(U&&r&&La(n),n.flags|=1,ce(e,n,t,i),n.child)}function us(e,n,t,r,i){if(ge(t)){var l=!0;li(n)}else l=!1;if(ct(n,i),n.stateNode===null)Vr(e,n),yc(n,t,r),ql(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=ge(t)?jn:ue.current,u=ft(n,u));var m=t.getDerivedStateFromProps,f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||s!==u)&&rs(n,a,r,u),on=!1;var v=n.memoizedState;a.state=v,ci(n,r,a,i),s=n.memoizedState,o!==r||v!==s||he.current||on?(typeof m=="function"&&($l(n,t,m,r),s=n.memoizedState),(o=on||ts(n,t,o,r,v,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Xu(e,n),o=n.memoizedProps,u=n.type===n.elementType?o:Te(n.type,o),a.props=u,f=n.pendingProps,v=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=ge(t)?jn:ue.current,s=ft(n,s));var x=t.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||v!==s)&&rs(n,a,r,s),on=!1,v=n.memoizedState,a.state=v,ci(n,r,a,i);var S=n.memoizedState;o!==f||v!==S||he.current||on?(typeof x=="function"&&($l(n,t,x,r),S=n.memoizedState),(u=on||ts(n,t,u,r,v,S,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),a.props=r,a.state=S,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return Kl(e,n,t,r,l,i)}function Kl(e,n,t,r,i,l){bc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Qo(n,t,!1),en(e,n,l);r=n.stateNode,of.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=vt(n,e.child,null,l),n.child=vt(n,null,o,l)):ce(e,n,o,l),n.memoizedState=r.state,i&&Qo(n,t,!0),n.child}function Ec(e){var n=e.stateNode;n.pendingContext?Go(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Go(e,n.context,!1),Da(e,n.containerInfo)}function cs(e,n,t,r,i){return mt(),Fa(i),n.flags|=256,ce(e,n,t,r),n.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,n,t){var r=n.pendingProps,i=H.current,l=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(H,i&1),e===null)return Wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,l?(r=n.mode,l=n.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Ti(a,r,0,null),e=On(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Xl(t),n.memoizedState=Yl,e):Ga(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return sf(e,n,a,r,o,i,t);if(l){l=r.fallback,a=n.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=wn(o,l):(l=On(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,a=e.child.memoizedState,a=a===null?Xl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~t,n.memoizedState=Yl,r}return l=e.child,e=l.sibling,r=wn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ga(e,n){return n=Ti({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Tr(e,n,t,r){return r!==null&&Fa(r),vt(n,e.child,null,t),e=Ga(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sf(e,n,t,r,i,l,a){if(t)return n.flags&256?(n.flags&=-257,r=ol(Error(k(422))),Tr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=On(l,i,a,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&vt(n,e.child,null,a),n.child.memoizedState=Xl(a),n.memoizedState=Yl,l);if(!(n.mode&1))return Tr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(k(419)),r=ol(l,r,void 0),Tr(e,n,a,r)}if(o=(a&e.childLanes)!==0,ve||o){if(r=Z,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ze(e,i),_e(r,e,i,-1))}return Za(),r=ol(Error(k(421))),Tr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Sf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,we=hn(i.nextSibling),Se=n,U=!0,Re=null,e!==null&&(Ce[Pe++]=Qe,Ce[Pe++]=Ke,Ce[Pe++]=Dn,Qe=e.id,Ke=e.overflow,Dn=n),n=Ga(n,r.children),n.flags|=4096,n)}function ds(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vl(e.return,n,t)}function sl(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ce(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,t,n);else if(e.tag===19)ds(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&di(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),sl(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&di(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}sl(n,!0,t,null,l);break;case"together":sl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function en(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Un|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uf(e,n,t){switch(n.tag){case 3:Ec(n),mt();break;case 5:Ju(n);break;case 1:ge(n.type)&&li(n);break;case 4:Da(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;O(si,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Cc(e,n,t):(O(H,H.current&1),e=en(e,n,t),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,kc(e,n,t)}return en(e,n,t)}var Nc,Jl,Ac,Ic;Nc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jl=function(){};Ac=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn($e.current);var l=null;switch(t){case"input":i=wl(e,i),r=wl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=bl(e,i),r=bl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Cl(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kt.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&j("scroll",e),l||o===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};Ic=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cf(e,n,t){var r=n.pendingProps;switch(Ta(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return ge(n.type)&&ii(),le(n),null;case 3:return r=n.stateNode,ht(),D(he),D(ue),Ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(aa(Re),Re=null))),Jl(e,n),le(n),null;case 5:Ba(n);var i=Mn(or.current);if(t=n.type,e!==null&&n.stateNode!=null)Ac(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return le(n),null}if(e=Mn($e.current),zr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[We]=n,r[lr]=l,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<Dt.length;i++)j(Dt[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":wo(r,l),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},j("invalid",r);break;case"textarea":ko(r,l),j("invalid",r)}Cl(t,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ir(r.textContent,o,e),i=["children",""+o]):Kt.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&j("scroll",r)}switch(t){case"input":Sr(r),So(r,l,!0);break;case"textarea":Sr(r),bo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ri)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[We]=n,e[lr]=r,Nc(e,n,!1,!1),n.stateNode=e;e:{switch(a=Pl(t,r),t){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dt.length;i++)j(Dt[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":wo(e,r),i=wl(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),j("invalid",e);break;case"textarea":ko(e,r),i=bl(e,r),j("invalid",e);break;default:i=r}Cl(t,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="style"?au(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&iu(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Yt(e,s):typeof s=="number"&&Yt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Kt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&j("scroll",e):s!=null&&ga(e,l,s,a))}switch(t){case"input":Sr(e),So(e,r,!1);break;case"textarea":Sr(e),bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?at(e,!!r.multiple,l,!1):r.defaultValue!=null&&at(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ri)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Ic(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Mn(or.current),Mn($e.current),zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[We]=n,(l=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[We]=n,n.stateNode=r}return le(n),null;case 13:if(D(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&n.mode&1&&!(n.flags&128))Gu(),mt(),n.flags|=98560,l=!1;else if(l=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[We]=n}else mt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),l=!1}else Re!==null&&(aa(Re),Re=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?X===0&&(X=3):Za())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return ht(),Jl(e,n),e===null&&rr(n.stateNode.containerInfo),le(n),null;case 10:return _a(n.type._context),le(n),null;case 17:return ge(n.type)&&ii(),le(n),null;case 19:if(D(H),l=n.memoizedState,l===null)return le(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)Rt(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=di(e),a!==null){for(n.flags|=128,Rt(l,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(H,H.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>yt&&(n.flags|=128,r=!0,Rt(l,!1),n.lanes=4194304)}else{if(!r)if(e=di(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!U)return le(n),null}else 2*G()-l.renderingStartTime>yt&&t!==1073741824&&(n.flags|=128,r=!0,Rt(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(t=l.last,t!==null?t.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=H.current,O(H,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return Ja(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?xe&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function df(e,n){switch(Ta(n),n.tag){case 1:return ge(n.type)&&ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),D(he),D(ue),Ua(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ba(n),null;case 13:if(D(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));mt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(H),null;case 4:return ht(),null;case 10:return _a(n.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Fr=!1,se=!1,pf=typeof WeakSet=="function"?WeakSet:Set,A=null;function it(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){$(e,n,r)}else t.current=null}function Zl(e,n,t){try{t()}catch(r){$(e,n,r)}}var ps=!1;function ff(e,n){if(_l=ei,e=Ru(),za(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var a=0,o=-1,s=-1,u=0,m=0,f=e,v=null;n:for(;;){for(var x;f!==t||i!==0&&f.nodeType!==3||(o=a+i),f!==l||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)v=f,f=x;for(;;){if(f===e)break n;if(v===t&&++u===i&&(o=a),v===l&&++m===r&&(s=a),(x=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=x}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ol={focusedElem:e,selectionRange:t},ei=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,P=S.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Te(n.type,w),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){$(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return S=ps,ps=!1,S}function qt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Zl(n,t,l)}i=i.next}while(i!==r)}}function zi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ea(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zc(e){var n=e.alternate;n!==null&&(e.alternate=null,zc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[We],delete n[lr],delete n[Bl],delete n[Qp],delete n[Kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(na(e,n,t),e=e.sibling;e!==null;)na(e,n,t),e=e.sibling}function ta(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ta(e,n,t),e=e.sibling;e!==null;)ta(e,n,t),e=e.sibling}var ee=null,Fe=!1;function ln(e,n,t){for(t=t.child;t!==null;)Tc(e,n,t),t=t.sibling}function Tc(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ki,t)}catch{}switch(t.tag){case 5:se||it(t,n);case 6:var r=ee,i=Fe;ee=null,ln(e,n,t),ee=r,Fe=i,ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,t=t.stateNode,e.nodeType===8?nl(e.parentNode,t):e.nodeType===1&&nl(e,t),er(e)):nl(ee,t.stateNode));break;case 4:r=ee,i=Fe,ee=t.stateNode.containerInfo,Fe=!0,ln(e,n,t),ee=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Zl(t,n,a),i=i.next}while(i!==r)}ln(e,n,t);break;case 1:if(!se&&(it(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){$(t,n,o)}ln(e,n,t);break;case 21:ln(e,n,t);break;case 22:t.mode&1?(se=(r=se)||t.memoizedState!==null,ln(e,n,t),se=r):ln(e,n,t);break;default:ln(e,n,t)}}function ms(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pf),n.forEach(function(r){var i=kf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Le(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:ee=o.stateNode,Fe=!1;break e;case 3:ee=o.stateNode.containerInfo,Fe=!0;break e;case 4:ee=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(ee===null)throw Error(k(160));Tc(l,a,i),ee=null,Fe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){$(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fc(n,e),n=n.sibling}function Fc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(n,e),Be(e),r&4){try{qt(3,e,e.return),zi(3,e)}catch(w){$(e,e.return,w)}try{qt(5,e,e.return)}catch(w){$(e,e.return,w)}}break;case 1:Le(n,e),Be(e),r&512&&t!==null&&it(t,t.return);break;case 5:if(Le(n,e),Be(e),r&512&&t!==null&&it(t,t.return),e.flags&32){var i=e.stateNode;try{Yt(i,"")}catch(w){$(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=t!==null?t.memoizedProps:l,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&nu(i,l),Pl(o,a);var u=Pl(o,l);for(a=0;a<s.length;a+=2){var m=s[a],f=s[a+1];m==="style"?au(i,f):m==="dangerouslySetInnerHTML"?iu(i,f):m==="children"?Yt(i,f):ga(i,m,f,u)}switch(o){case"input":Sl(i,l);break;case"textarea":tu(i,l);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?at(i,!!l.multiple,x,!1):v!==!!l.multiple&&(l.defaultValue!=null?at(i,!!l.multiple,l.defaultValue,!0):at(i,!!l.multiple,l.multiple?[]:"",!1))}i[lr]=l}catch(w){$(e,e.return,w)}}break;case 6:if(Le(n,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){$(e,e.return,w)}}break;case 3:if(Le(n,e),Be(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(w){$(e,e.return,w)}break;case 4:Le(n,e),Be(e);break;case 13:Le(n,e),Be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ya=G())),r&4&&ms(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(se=(u=se)||m,Le(n,e),se=u):Le(n,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(f=A=m;A!==null;){switch(v=A,x=v.child,v.tag){case 0:case 11:case 14:case 15:qt(4,v,v.return);break;case 1:it(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(w){$(r,t,w)}}break;case 5:it(v,v.return);break;case 22:if(v.memoizedState!==null){hs(f);continue}}x!==null?(x.return=v,A=x):hs(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=lu("display",a))}catch(w){$(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){$(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(n,e),Be(e),r&4&&ms(e);break;case 21:break;default:Le(n,e),Be(e)}}function Be(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Lc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yt(i,""),r.flags&=-33);var l=fs(e);ta(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=fs(e);na(e,o,a);break;default:throw Error(k(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mf(e,n,t){A=e,Rc(e)}function Rc(e,n,t){for(var r=(e.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Fr;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||se;o=Fr;var u=se;if(Fr=a,(se=s)&&!u)for(A=i;A!==null;)a=A,s=a.child,a.tag===22&&a.memoizedState!==null?gs(i):s!==null?(s.return=a,A=s):gs(i);for(;l!==null;)A=l,Rc(l),l=l.sibling;A=i,Fr=o,se=u}vs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,A=l):vs(e)}}function vs(e){for(;A!==null;){var n=A;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||zi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!se)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Te(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Zo(n,l,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Zo(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&er(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||n.flags&512&&ea(n)}catch(v){$(n,n.return,v)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function hs(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function gs(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{zi(4,n)}catch(s){$(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){$(n,i,s)}}var l=n.return;try{ea(n)}catch(s){$(n,l,s)}break;case 5:var a=n.return;try{ea(n)}catch(s){$(n,a,s)}}}catch(s){$(n,n.return,s)}if(n===e){A=null;break}var o=n.sibling;if(o!==null){o.return=n.return,A=o;break}A=n.return}}var vf=Math.ceil,mi=nn.ReactCurrentDispatcher,Qa=nn.ReactCurrentOwner,Ae=nn.ReactCurrentBatchConfig,M=0,Z=null,K=null,ne=0,xe=0,lt=Cn(0),X=0,dr=null,Un=0,Li=0,Ka=0,Gt=null,me=null,Ya=0,yt=1/0,qe=null,vi=!1,ra=null,yn=null,Rr=!1,dn=null,hi=0,Qt=0,ia=null,$r=-1,qr=0;function de(){return M&6?G():$r!==-1?$r:$r=G()}function xn(e){return e.mode&1?M&2&&ne!==0?ne&-ne:Xp.transition!==null?(qr===0&&(qr=yu()),qr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function _e(e,n,t,r){if(50<Qt)throw Qt=0,ia=null,Error(k(185));vr(e,t,r),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(Li|=t),X===4&&un(e,ne)),ye(e,r),t===1&&M===0&&!(n.mode&1)&&(yt=G()+500,Ni&&Pn()))}function ye(e,n){var t=e.callbackNode;Xd(e,n);var r=Zr(e,e===Z?ne:0);if(r===0)t!==null&&Po(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Po(t),n===1)e.tag===0?Yp(ys.bind(null,e)):Vu(ys.bind(null,e)),qp(function(){!(M&6)&&Pn()}),t=null;else{switch(xu(r)){case 1:t=ka;break;case 4:t=hu;break;case 16:t=Jr;break;case 536870912:t=gu;break;default:t=Jr}t=Hc(t,Mc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mc(e,n){if($r=-1,qr=0,M&6)throw Error(k(327));var t=e.callbackNode;if(dt()&&e.callbackNode!==t)return null;var r=Zr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=gi(e,r);else{n=r;var i=M;M|=2;var l=Oc();(Z!==e||ne!==n)&&(qe=null,yt=G()+500,_n(e,n));do try{yf();break}catch(o){_c(e,o)}while(!0);Ma(),mi.current=l,M=i,K!==null?n=0:(Z=null,ne=0,n=X)}if(n!==0){if(n===2&&(i=Ll(e),i!==0&&(r=i,n=la(e,i))),n===1)throw t=dr,_n(e,0),un(e,r),ye(e,G()),t;if(n===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!hf(i)&&(n=gi(e,r),n===2&&(l=Ll(e),l!==0&&(r=l,n=la(e,l))),n===1))throw t=dr,_n(e,0),un(e,r),ye(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Tn(e,me,qe);break;case 3:if(un(e,r),(r&130023424)===r&&(n=Ya+500-G(),10<n)){if(Zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Dl(Tn.bind(null,e,me,qe),n);break}Tn(e,me,qe);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Me(r);l=1<<a,a=n[a],a>i&&(i=a),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vf(r/1960))-r,10<r){e.timeoutHandle=Dl(Tn.bind(null,e,me,qe),r);break}Tn(e,me,qe);break;case 5:Tn(e,me,qe);break;default:throw Error(k(329))}}}return ye(e,G()),e.callbackNode===t?Mc.bind(null,e):null}function la(e,n){var t=Gt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=gi(e,n),e!==2&&(n=me,me=t,n!==null&&aa(n)),e}function aa(e){me===null?me=e:me.push.apply(me,e)}function hf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Oe(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Ka,n&=~Li,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Me(n),r=1<<t;e[t]=-1,n&=~r}}function ys(e){if(M&6)throw Error(k(327));dt();var n=Zr(e,0);if(!(n&1))return ye(e,G()),null;var t=gi(e,n);if(e.tag!==0&&t===2){var r=Ll(e);r!==0&&(n=r,t=la(e,r))}if(t===1)throw t=dr,_n(e,0),un(e,n),ye(e,G()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Tn(e,me,qe),ye(e,G()),null}function Xa(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(yt=G()+500,Ni&&Pn())}}function Hn(e){dn!==null&&dn.tag===0&&!(M&6)&&dt();var n=M;M|=1;var t=Ae.transition,r=_;try{if(Ae.transition=null,_=1,e)return e()}finally{_=r,Ae.transition=t,M=n,!(M&6)&&Pn()}}function Ja(){xe=lt.current,D(lt)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$p(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:ht(),D(he),D(ue),Ua();break;case 5:Ba(r);break;case 4:ht();break;case 13:D(H);break;case 19:D(H);break;case 10:_a(r.type._context);break;case 22:case 23:Ja()}t=t.return}if(Z=e,K=e=wn(e.current,null),ne=xe=n,X=0,dr=null,Ka=Li=Un=0,me=Gt=null,Rn!==null){for(n=0;n<Rn.length;n++)if(t=Rn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}t.pending=r}Rn=null}return e}function _c(e,n){do{var t=K;try{if(Ma(),Hr.current=fi,pi){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(Bn=0,J=Y=W=null,$t=!1,sr=0,Qa.current=null,t===null||t.return===null){X=1,dr=n,K=null;break}e:{var l=e,a=t.return,o=t,s=n;if(n=ne,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=o,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ls(a);if(x!==null){x.flags&=-257,as(x,a,o,l,n),x.mode&1&&is(l,u,n),n=x,s=u;var S=n.updateQueue;if(S===null){var w=new Set;w.add(s),n.updateQueue=w}else S.add(s);break e}else{if(!(n&1)){is(l,u,n),Za();break e}s=Error(k(426))}}else if(U&&o.mode&1){var P=ls(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),as(P,a,o,l,n),Fa(gt(s,o));break e}}l=s=gt(s,o),X!==4&&(X=2),Gt===null?Gt=[l]:Gt.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=xc(l,s,n);Jo(l,d);break e;case 1:o=s;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yn===null||!yn.has(p)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=wc(l,o,n);Jo(l,y);break e}}l=l.return}while(l!==null)}Dc(t)}catch(E){n=E,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Oc(){var e=mi.current;return mi.current=fi,e===null?fi:e}function Za(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Un&268435455)&&!(Li&268435455)||un(Z,ne)}function gi(e,n){var t=M;M|=2;var r=Oc();(Z!==e||ne!==n)&&(qe=null,_n(e,n));do try{gf();break}catch(i){_c(e,i)}while(!0);if(Ma(),M=t,mi.current=r,K!==null)throw Error(k(261));return Z=null,ne=0,X}function gf(){for(;K!==null;)jc(K)}function yf(){for(;K!==null&&!Hd();)jc(K)}function jc(e){var n=Uc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?Dc(e):K=n,Qa.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=df(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(t=cf(t,n,xe),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);X===0&&(X=5)}function Tn(e,n,t){var r=_,i=Ae.transition;try{Ae.transition=null,_=1,xf(e,n,t,r)}finally{Ae.transition=i,_=r}return null}function xf(e,n,t,r){do dt();while(dn!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Jd(e,l),e===Z&&(K=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,Hc(Jr,function(){return dt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ae.transition,Ae.transition=null;var a=_;_=1;var o=M;M|=4,Qa.current=null,ff(e,t),Fc(t,e),jp(Ol),ei=!!_l,Ol=_l=null,e.current=t,mf(t),Wd(),M=o,_=a,Ae.transition=l}else e.current=t;if(Rr&&(Rr=!1,dn=e,hi=i),l=e.pendingLanes,l===0&&(yn=null),qd(t.stateNode),ye(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=ra,ra=null,e;return hi&1&&e.tag!==0&&dt(),l=e.pendingLanes,l&1?e===ia?Qt++:(Qt=0,ia=e):Qt=0,Pn(),null}function dt(){if(dn!==null){var e=xu(hi),n=Ae.transition,t=_;try{if(Ae.transition=null,_=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,hi=0,M&6)throw Error(k(331));var i=M;for(M|=4,A=e.current;A!==null;){var l=A,a=l.child;if(A.flags&16){var o=l.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(A=u;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:qt(8,m,l)}var f=m.child;if(f!==null)f.return=m,A=f;else for(;A!==null;){m=A;var v=m.sibling,x=m.return;if(zc(m),m===u){A=null;break}if(v!==null){v.return=x,A=v;break}A=x}}}var S=l.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}A=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,A=a;else e:for(;A!==null;){if(l=A,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qt(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,A=d;break e}A=l.return}}var c=e.current;for(A=c;A!==null;){a=A;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,A=p;else e:for(a=c;A!==null;){if(o=A,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zi(9,o)}}catch(E){$(o,o.return,E)}if(o===a){A=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,A=y;break e}A=o.return}}if(M=i,Pn(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{_=t,Ae.transition=n}}return!1}function xs(e,n,t){n=gt(t,n),n=xc(e,n,1),e=gn(e,n,1),n=de(),e!==null&&(vr(e,1,n),ye(e,n))}function $(e,n,t){if(e.tag===3)xs(e,e,t);else for(;n!==null;){if(n.tag===3){xs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=gt(t,e),e=wc(n,e,1),n=gn(n,e,1),e=de(),n!==null&&(vr(n,1,e),ye(n,e));break}}n=n.return}}function wf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(X===4||X===3&&(ne&130023424)===ne&&500>G()-Ya?_n(e,0):Ka|=t),ye(e,n)}function Bc(e,n){n===0&&(e.mode&1?(n=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):n=1);var t=de();e=Ze(e,n),e!==null&&(vr(e,n,t),ye(e,t))}function Sf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bc(e,t)}function kf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),Bc(e,t)}var Uc;Uc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,uf(e,n,t);ve=!!(e.flags&131072)}else ve=!1,U&&n.flags&1048576&&$u(n,oi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vr(e,n),e=n.pendingProps;var i=ft(n,ue.current);ct(n,t),i=Wa(null,n,r,e,i,t);var l=Va();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ge(r)?(l=!0,li(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ja(n),i.updater=Ii,n.stateNode=i,i._reactInternals=n,ql(n,r,e,t),n=Kl(null,n,r,!0,l,t)):(n.tag=0,U&&l&&La(n),ce(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Ef(r),e=Te(r,e),i){case 0:n=Ql(null,n,r,e,t);break e;case 1:n=us(null,n,r,e,t);break e;case 11:n=os(null,n,r,e,t);break e;case 14:n=ss(null,n,r,Te(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Ql(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),us(e,n,r,i,t);case 3:e:{if(Ec(n),e===null)throw Error(k(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Xu(e,n),ci(n,r,null,t);var a=n.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=gt(Error(k(423)),n),n=cs(e,n,r,t,i);break e}else if(r!==i){i=gt(Error(k(424)),n),n=cs(e,n,r,t,i);break e}else for(we=hn(n.stateNode.containerInfo.firstChild),Se=n,U=!0,Re=null,t=Ku(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(mt(),r===i){n=en(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return Ju(n),e===null&&Wl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,jl(r,i)?a=null:l!==null&&jl(r,l)&&(n.flags|=32),bc(e,n),ce(e,n,a,t),n.child;case 6:return e===null&&Wl(n),null;case 13:return Cc(e,n,t);case 4:return Da(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vt(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),os(e,n,r,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,a=i.value,O(si,r._currentValue),r._currentValue=a,l!==null)if(Oe(l.value,a)){if(l.children===i.children&&!he.current){n=en(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ye(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Vl(l.return,t,n),o.lanes|=t;break}s=s.next}}else if(l.tag===10)a=l.type===n.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(k(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Vl(a,t,n),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ct(n,t),i=Ie(i),r=r(i),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,i=Te(r,n.pendingProps),i=Te(r.type,i),ss(e,n,r,i,t);case 15:return Sc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Vr(e,n),n.tag=1,ge(r)?(e=!0,li(n)):e=!1,ct(n,t),yc(n,r,i),ql(n,r,i,t),Kl(null,n,r,!0,e,t);case 19:return Pc(e,n,t);case 22:return kc(e,n,t)}throw Error(k(156,n.tag))};function Hc(e,n){return vu(e,n)}function bf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,t,r){return new bf(e,n,t,r)}function eo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return eo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===wa)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=Ne(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gr(e,n,t,r,i,l){var a=2;if(r=e,typeof e=="function")eo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kn:return On(t.children,i,l,n);case ya:a=8,i|=8;break;case hl:return e=Ne(12,t,n,i|2),e.elementType=hl,e.lanes=l,e;case gl:return e=Ne(13,t,n,i),e.elementType=gl,e.lanes=l,e;case yl:return e=Ne(19,t,n,i),e.elementType=yl,e.lanes=l,e;case Js:return Ti(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ys:a=10;break e;case Xs:a=9;break e;case xa:a=11;break e;case wa:a=14;break e;case an:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Ne(a,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function On(e,n,t,r){return e=Ne(7,e,r,n),e.lanes=t,e}function Ti(e,n,t,r){return e=Ne(22,e,r,n),e.elementType=Js,e.lanes=t,e.stateNode={isHidden:!1},e}function ul(e,n,t){return e=Ne(6,e,null,n),e.lanes=t,e}function cl(e,n,t){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function no(e,n,t,r,i,l,a,o,s){return e=new Cf(e,n,t,o,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ne(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ja(l),e}function Pf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Wc(e){if(!e)return bn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ge(t))return Wu(e,t,n)}return n}function Vc(e,n,t,r,i,l,a,o,s){return e=no(t,r,!0,e,i,l,a,o,s),e.context=Wc(null),t=e.current,r=de(),i=xn(t),l=Ye(r,i),l.callback=n??null,gn(t,l,i),e.current.lanes=i,vr(e,i,r),ye(e,r),e}function Fi(e,n,t,r){var i=n.current,l=de(),a=xn(i);return t=Wc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(l,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gn(i,n,a),e!==null&&(_e(e,i,a,l),Ur(e,i,a)),a}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function to(e,n){ws(e,n),(e=e.alternate)&&ws(e,n)}function Nf(){return null}var $c=typeof reportError=="function"?reportError:function(e){console.error(e)};function ro(e){this._internalRoot=e}Ri.prototype.render=ro.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));Fi(e,n,null,null)};Ri.prototype.unmount=ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hn(function(){Fi(null,e,null,null)}),n[Je]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var n=ku();e={blockedOn:null,target:e,priority:n};for(var t=0;t<sn.length&&n!==0&&n<sn[t].priority;t++);sn.splice(t,0,e),t===0&&Eu(e)}};function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ss(){}function Af(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=yi(a);l.call(u)}}var a=Vc(n,r,e,0,null,!1,!1,"",Ss);return e._reactRootContainer=a,e[Je]=a.current,rr(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=yi(s);o.call(u)}}var s=no(e,0,!1,null,null,!1,!1,"",Ss);return e._reactRootContainer=s,e[Je]=s.current,rr(e.nodeType===8?e.parentNode:e),Hn(function(){Fi(n,s,t,r)}),s}function _i(e,n,t,r,i){var l=t._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var s=yi(a);o.call(s)}}Fi(n,a,e,i)}else a=Af(t,n,e,i,r);return yi(a)}wu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=jt(n.pendingLanes);t!==0&&(ba(n,t|1),ye(n,G()),!(M&6)&&(yt=G()+500,Pn()))}break;case 13:Hn(function(){var r=Ze(e,1);if(r!==null){var i=de();_e(r,e,1,i)}}),to(e,1)}};Ea=function(e){if(e.tag===13){var n=Ze(e,134217728);if(n!==null){var t=de();_e(n,e,134217728,t)}to(e,134217728)}};Su=function(e){if(e.tag===13){var n=xn(e),t=Ze(e,n);if(t!==null){var r=de();_e(t,e,n,r)}to(e,n)}};ku=function(){return _};bu=function(e,n){var t=_;try{return _=e,n()}finally{_=t}};Al=function(e,n,t){switch(n){case"input":if(Sl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(k(90));eu(r),Sl(r,i)}}}break;case"textarea":tu(e,t);break;case"select":n=t.value,n!=null&&at(e,!!t.multiple,n,!1)}};uu=Xa;cu=Hn;var If={usingClientEntryPoint:!1,Events:[gr,Zn,Pi,ou,su,Xa]},Mt={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{ki=Mr.inject(zf),Ve=Mr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;be.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!io(n))throw Error(k(200));return Pf(e,n,null,t)};be.createRoot=function(e,n){if(!io(e))throw Error(k(299));var t=!1,r="",i=$c;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=no(e,1,!1,null,null,t,!1,r,i),e[Je]=n.current,rr(e.nodeType===8?e.parentNode:e),new ro(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=fu(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Hn(e)};be.hydrate=function(e,n,t){if(!Mi(n))throw Error(k(200));return _i(null,e,n,!0,t)};be.hydrateRoot=function(e,n,t){if(!io(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",a=$c;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Vc(n,null,e,1,t??null,i,!1,l,a),e[Je]=n.current,rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ri(n)};be.render=function(e,n,t){if(!Mi(n))throw Error(k(200));return _i(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(k(40));return e._reactRootContainer?(Hn(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};be.unstable_batchedUpdates=Xa;be.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Mi(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return _i(e,n,t,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qs.exports=be;var Lf=qs.exports,ks=Lf;ml.createRoot=ks.createRoot,ml.hydrateRoot=ks.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pr.apply(this,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const bs="popstate";function Tf(e){e===void 0&&(e={});function n(r,i){let{pathname:l,search:a,hash:o}=r.location;return oa("",{pathname:l,search:a,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:xi(i)}return Rf(n,t,null,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function lo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ff(){return Math.random().toString(36).substr(2,8)}function Es(e,n){return{usr:e.state,key:e.key,idx:n}}function oa(e,n,t,r){return t===void 0&&(t=null),pr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?kt(n):n,{state:t,key:n&&n.key||r||Ff()})}function xi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function kt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Rf(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,o=pn.Pop,s=null,u=m();u==null&&(u=0,a.replaceState(pr({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function f(){o=pn.Pop;let P=m(),d=P==null?null:P-u;u=P,s&&s({action:o,location:w.location,delta:d})}function v(P,d){o=pn.Push;let c=oa(w.location,P,d);u=m()+1;let p=Es(c,u),y=w.createHref(c);try{a.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}l&&s&&s({action:o,location:w.location,delta:1})}function x(P,d){o=pn.Replace;let c=oa(w.location,P,d);u=m();let p=Es(c,u),y=w.createHref(c);a.replaceState(p,"",y),l&&s&&s({action:o,location:w.location,delta:0})}function S(P){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof P=="string"?P:xi(P);return c=c.replace(/ $/,"%20"),Q(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return o},get location(){return e(i,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(bs,f),s=P,()=>{i.removeEventListener(bs,f),s=null}},createHref(P){return n(i,P)},createURL:S,encodeLocation(P){let d=S(P);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:x,go(P){return a.go(P)}};return w}var Cs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cs||(Cs={}));function Mf(e,n,t){return t===void 0&&(t="/"),_f(e,n,t)}function _f(e,n,t,r){let i=typeof n=="string"?kt(n):n,l=ao(i.pathname||"/",t);if(l==null)return null;let a=Gc(e);Of(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let u=Kf(l);o=qf(a[s],u)}return o}function Gc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,a,o)=>{let s={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Sn([r,s.relativePath]),m=t.concat(s);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gc(l.children,n,m,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:Vf(u,l.index),routesMeta:m})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))i(l,a);else for(let s of Qc(l.path))i(l,a,s)}),n}function Qc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=Qc(r.join("/")),o=[];return o.push(...a.map(s=>s===""?l:[l,s].join("/"))),i&&o.push(...a),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function Of(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:$f(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const jf=/^:[\w-]+$/,Df=3,Bf=2,Uf=1,Hf=10,Wf=-2,Ps=e=>e==="*";function Vf(e,n){let t=e.split("/"),r=t.length;return t.some(Ps)&&(r+=Wf),n&&(r+=Bf),t.filter(i=>!Ps(i)).reduce((i,l)=>i+(jf.test(l)?Df:l===""?Uf:Hf),r)}function $f(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function qf(e,n,t){let{routesMeta:r}=e,i={},l="/",a=[];for(let o=0;o<r.length;++o){let s=r[o],u=o===r.length-1,m=l==="/"?n:n.slice(l.length)||"/",f=Gf({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),v=s.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Sn([l,f.pathname]),pathnameBase:em(Sn([l,f.pathnameBase])),route:v}),f.pathnameBase!=="/"&&(l=Sn([l,f.pathnameBase]))}return a}function Gf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Qf(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,m,f)=>{let{paramName:v,isOptional:x}=m;if(v==="*"){let w=o[f]||"";a=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=o[f];return x&&!S?u[v]=void 0:u[v]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:a,pattern:e}}function Qf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),lo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Kf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return lo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ao(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xf=e=>Yf.test(e);function Jf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?kt(e):e,l;if(t)if(Xf(t))l=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),lo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?l=Ns(t.substring(1),"/"):l=Ns(t,n)}else l=n;return{pathname:l,search:nm(r),hash:tm(i)}}function Ns(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function dl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function oo(e,n){let t=Zf(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function so(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kt(e):(i=pr({},e),Q(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,o;if(a==null)o=t;else{let f=n.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;i.pathname=v.join("/")}o=f>=0?n[f]:"/"}let s=Jf(i,o),u=a&&a!=="/"&&a.endsWith("/"),m=(l||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),em=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kc=["post","put","patch","delete"];new Set(Kc);const im=["get",...Kc];new Set(im);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fr.apply(this,arguments)}const uo=C.createContext(null),lm=C.createContext(null),Nn=C.createContext(null),Oi=C.createContext(null),tn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Yc=C.createContext(null);function am(e,n){let{relative:t}=n===void 0?{}:n;bt()||Q(!1);let{basename:r,navigator:i}=C.useContext(Nn),{hash:l,pathname:a,search:o}=Jc(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:Sn([r,a])),i.createHref({pathname:s,search:o,hash:l})}function bt(){return C.useContext(Oi)!=null}function Et(){return bt()||Q(!1),C.useContext(Oi).location}function Xc(e){C.useContext(Nn).static||C.useLayoutEffect(e)}function co(){let{isDataRoute:e}=C.useContext(tn);return e?wm():om()}function om(){bt()||Q(!1);let e=C.useContext(uo),{basename:n,future:t,navigator:r}=C.useContext(Nn),{matches:i}=C.useContext(tn),{pathname:l}=Et(),a=JSON.stringify(oo(i,t.v7_relativeSplatPath)),o=C.useRef(!1);return Xc(()=>{o.current=!0}),C.useCallback(function(u,m){if(m===void 0&&(m={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let f=so(u,JSON.parse(a),l,m.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Sn([n,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[n,r,a,l,e])}function sm(){let{matches:e}=C.useContext(tn),n=e[e.length-1];return n?n.params:{}}function Jc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=C.useContext(Nn),{matches:i}=C.useContext(tn),{pathname:l}=Et(),a=JSON.stringify(oo(i,r.v7_relativeSplatPath));return C.useMemo(()=>so(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function um(e,n){return cm(e,n)}function cm(e,n,t,r){bt()||Q(!1);let{navigator:i}=C.useContext(Nn),{matches:l}=C.useContext(tn),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Et(),m;if(n){var f;let P=typeof n=="string"?kt(n):n;s==="/"||(f=P.pathname)!=null&&f.startsWith(s)||Q(!1),m=P}else m=u;let v=m.pathname||"/",x=v;if(s!=="/"){let P=s.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=Mf(e,{pathname:x}),w=vm(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},o,P.params),pathname:Sn([s,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:Sn([s,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,t,r);return n&&w?C.createElement(Oi.Provider,{value:{location:fr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:pn.Pop}},w):w}function dm(){let e=xm(),n=rm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:i},t):null,null)}const pm=C.createElement(dm,null);class fm extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(tn.Provider,{value:this.props.routeContext},C.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mm(e){let{routeContext:n,match:t,children:r}=e,i=C.useContext(uo);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(tn.Provider,{value:n},r)}function vm(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,o=(i=t)==null?void 0:i.errors;if(o!=null){let m=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);m>=0||Q(!1),a=a.slice(0,Math.min(a.length,m+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let f=a[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=m),f.route.id){let{loaderData:v,errors:x}=t,S=f.route.loader&&v[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||S){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,f,v)=>{let x,S=!1,w=null,P=null;t&&(x=o&&f.route.id?o[f.route.id]:void 0,w=f.route.errorElement||pm,s&&(u<0&&v===0?(Sm("route-fallback"),S=!0,P=null):u===v&&(S=!0,P=f.route.hydrateFallbackElement||null)));let d=n.concat(a.slice(0,v+1)),c=()=>{let p;return x?p=w:S?p=P:f.route.Component?p=C.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=m,C.createElement(mm,{match:f,routeContext:{outlet:m,matches:d,isDataRoute:t!=null},children:p})};return t&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?C.createElement(fm,{location:t.location,revalidation:t.revalidation,component:w,error:x,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Zc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zc||{}),ed=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ed||{});function hm(e){let n=C.useContext(uo);return n||Q(!1),n}function gm(e){let n=C.useContext(lm);return n||Q(!1),n}function ym(e){let n=C.useContext(tn);return n||Q(!1),n}function nd(e){let n=ym(),t=n.matches[n.matches.length-1];return t.route.id||Q(!1),t.route.id}function xm(){var e;let n=C.useContext(Yc),t=gm(),r=nd();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function wm(){let{router:e}=hm(Zc.UseNavigateStable),n=nd(ed.UseNavigateStable),t=C.useRef(!1);return Xc(()=>{t.current=!0}),C.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fr({fromRouteId:n},l)))},[e,n])}const As={};function Sm(e,n,t){As[e]||(As[e]=!0)}function km(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function bm(e){let{to:n,replace:t,state:r,relative:i}=e;bt()||Q(!1);let{future:l,static:a}=C.useContext(Nn),{matches:o}=C.useContext(tn),{pathname:s}=Et(),u=co(),m=so(n,oo(o,l.v7_relativeSplatPath),s,i==="path"),f=JSON.stringify(m);return C.useEffect(()=>u(JSON.parse(f),{replace:t,state:r,relative:i}),[u,f,i,t,r]),null}function Ue(e){Q(!1)}function Em(e){let{basename:n="/",children:t=null,location:r,navigationType:i=pn.Pop,navigator:l,static:a=!1,future:o}=e;bt()&&Q(!1);let s=n.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:l,static:a,future:fr({v7_relativeSplatPath:!1},o)}),[s,o,l,a]);typeof r=="string"&&(r=kt(r));let{pathname:m="/",search:f="",hash:v="",state:x=null,key:S="default"}=r,w=C.useMemo(()=>{let P=ao(m,s);return P==null?null:{location:{pathname:P,search:f,hash:v,state:x,key:S},navigationType:i}},[s,m,f,v,x,S,i]);return w==null?null:C.createElement(Nn.Provider,{value:u},C.createElement(Oi.Provider,{children:t,value:w}))}function Cm(e){let{children:n,location:t}=e;return um(sa(n),t)}new Promise(()=>{});function sa(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let l=[...n,i];if(r.type===C.Fragment){t.push.apply(t,sa(r.props.children,l));return}r.type!==Ue&&Q(!1),!r.props.index||!r.props.children||Q(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=sa(r.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ua.apply(this,arguments)}function Pm(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Nm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Am(e,n){return e.button===0&&(!n||n==="_self")&&!Nm(e)}const Im=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zm="6";try{window.__reactRouterVersion=zm}catch{}const Lm="startTransition",Is=xd[Lm];function Tm(e){let{basename:n,children:t,future:r,window:i}=e,l=C.useRef();l.current==null&&(l.current=Tf({window:i,v5Compat:!0}));let a=l.current,[o,s]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=C.useCallback(f=>{u&&Is?Is(()=>s(f)):s(f)},[s,u]);return C.useLayoutEffect(()=>a.listen(m),[a,m]),C.useEffect(()=>km(r),[r]),C.createElement(Em,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:a,future:r})}const Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wi=C.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:o,target:s,to:u,preventScrollReset:m,viewTransition:f}=n,v=Pm(n,Im),{basename:x}=C.useContext(Nn),S,w=!1;if(typeof u=="string"&&Rm.test(u)&&(S=u,Fm))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=ao(y.pathname,x);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let P=am(u,{relative:i}),d=Mm(u,{replace:a,state:o,target:s,preventScrollReset:m,relative:i,viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||d(p)}return C.createElement("a",ua({},v,{href:S||P,onClick:w||l?r:c,ref:t,target:s}))});var zs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zs||(zs={}));var Ls;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ls||(Ls={}));function Mm(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:o}=n===void 0?{}:n,s=co(),u=Et(),m=Jc(e,{relative:a});return C.useCallback(f=>{if(Am(f,t)){f.preventDefault();let v=r!==void 0?r:xi(u)===xi(m);s(e,{replace:v,state:i,preventScrollReset:l,relative:a,viewTransition:o})}},[u,s,m,r,i,t,e,l,a,o])}const _m=[{id:"all",label:"All Topics"},{id:"formulation",label:"Formulation Science"},{id:"regulatory",label:"Regulatory & FSSAI"},{id:"ayurveda",label:"Ayurveda + Science"},{id:"market",label:"Market Trends"},{id:"startup",label:"Startup Guide"},{id:"qc",label:"Quality Control"},{id:"b2b",label:"B2B Strategy"},{id:"clinical",label:"Clinical Evidence"},{id:"sports",label:"Sports Nutrition"},{id:"epigenetics",label:"Epigenetics & Future"},{id:"consumer",label:"Consumer Guide"}],ca=[{slug:"startup-formulation-failure-guide",title:"Why 80% of Indian Supplement Startups Fail at the Formulation Stage — and What to Do Instead",categoryLabel:"Formulation Science",categoryId:"formulation",excerpt:"The real problem is not money or marketing. It is choosing the wrong actives, wrong delivery system, or trusting raw material suppliers without independent verification.",readTime:"8 min read",icon:"🧬",gradient:"linear-gradient(135deg, #D8EDE3, #b7dccb)",content:["Most startup failures in nutraceuticals happen before the first sale, during formulation. Teams often start with trendy ingredients and social media claims instead of building from mechanism, dosage evidence, and stability.","A winning formulation starts by defining one clear outcome per product: energy support, recovery, sleep quality, metabolic support, or gut comfort. Once that is fixed, every ingredient must justify its place through human data, not just in vitro papers.","The second common failure is dose illusion. Labels look attractive, but effective doses are undercut to meet COGS targets. This creates products that are marketable but not repeatable. In supplements, repeat purchase depends on felt benefit.","Third, founders ignore delivery system fit. Powders, capsules, tablets, and liquids each have different constraints for taste masking, oxidation risk, hygroscopic behavior, and compliance practicality.","The correct process is: define user outcome -> shortlist evidence-backed actives -> validate effective dosage ranges -> map ingredient interactions -> choose dosage form -> run pilot stability checks -> validate final claim language for compliance.","Raw material validation is non-negotiable. Never rely only on vendor CoA. Ask for method references, perform identity checks, and verify marker compound consistency lot-to-lot. Supplier variance can collapse a working formula in scale-up.","If you are launching your first product, reduce complexity: one hero promise, two to four core actives, transparent dose logic, and clean compliance copy. Clarity outperforms hype every time."]},{slug:"fssai-2025-compliance-checklist",title:"FSSAI 2025 Compliance Checklist for Nutraceutical Brands",categoryLabel:"Regulatory & FSSAI",categoryId:"regulatory",excerpt:"Every document, every test, every claim FSSAI needs before you can legally sell your supplement in India.",readTime:"6 min read",icon:"📋",gradient:"linear-gradient(135deg, #e8f0fe, #c8d8f8)",content:["Compliance delays usually come from incomplete documentation and incorrect claim language. A proper checklist before launch avoids expensive reformulation and relabeling cycles.","Start with classification clarity: nutraceutical, health supplement, or special category. Misclassification drives the wrong dossier structure and rejection risk.","Keep your core file ready: finalized formula sheet, ingredient specifications, vendor documents, internal QC plan, batch manufacturing process, label artwork draft, and claim substantiation references.","Your label must be compliant in both what it says and what it omits. Avoid disease-treatment implications, absolute cure language, and unsubstantiated performance claims.","For each ingredient, maintain a defendable source chain and internal quality acceptance criteria. A documented incoming QC process materially strengthens regulatory confidence.","Before submission, run a pre-audit review: formula-to-label dose consistency, mandatory declarations, warning statements, and clean typographic hierarchy for readability.","The practical rule: if a claim appears on pack, it must map to a compliant category, a measurable ingredient, and an internally documented rationale. That discipline prevents most first-round objections."]},{slug:"ashwagandha-ksm66-vs-sensoril",title:"Ashwagandha vs KSM-66 vs Sensoril: Which Extract Actually Works?",categoryLabel:"Ayurveda + Epigenetics",categoryId:"ayurveda",excerpt:"A clinical evidence review of the three most-used Ashwagandha extracts — what science says about bioavailability, epigenetic effects, and efficacy.",readTime:"7 min read",icon:"🌿",gradient:"linear-gradient(135deg, #fef3e2, #f5d9a8)",content:["Not all Ashwagandha is interchangeable. The source material, extraction method, marker profile, and dose range all affect outcomes in stress modulation, sleep, and perceived recovery.","Standardized extracts provide consistency that raw powders often cannot. For product teams, reproducibility matters more than ingredient romance.","When comparing extract options, focus on validated dose windows, trial population relevance, and endpoint quality. Lifestyle-stress outcomes should be measured with practical scales and meaningful timelines.","Epigenetic framing is useful when discussing long-term adaptation, but consumer-facing communication must remain compliant and precise. Avoid deterministic gene-switch claims on-pack.","For formulation, combine Ashwagandha with compatible support nutrients only when there is a clear objective and no absorption or tolerance conflict.","A good decision framework: target user profile -> desired effect timeline -> dose practicality -> sensory tolerance -> cost per effective serving.","The best extract is not the most marketed one; it is the one that gives consistent user outcomes at a realistic dose and survives quality testing across production lots."]}];function Om({blog:e}){return h.jsxs(wi,{to:`/knowledge-base/${e.slug}`,className:"blog-card",children:[h.jsx("div",{className:"blog-thumb",style:{background:e.gradient},children:h.jsx("span",{className:"blog-thumb-icon",children:e.icon})}),h.jsxs("div",{className:"blog-card-body",children:[h.jsx("span",{className:"blog-cat",children:e.categoryLabel}),h.jsx("div",{className:"blog-card-title",children:e.title}),h.jsx("div",{className:"blog-excerpt",children:e.excerpt}),h.jsxs("div",{className:"blog-meta",children:[h.jsx("span",{children:"Dr. Pramod Pandey"}),h.jsx("span",{children:"·"}),h.jsx("span",{children:e.readTime})]})]})]})}function jm({activeTopic:e="all",onTopicChange:n}){const t=e==="all"?ca:ca.filter(r=>r.categoryId===e);return h.jsx("section",{id:"insights",className:"section",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"reveal",children:[h.jsx("span",{className:"label",children:"Knowledge Base"}),h.jsxs("div",{className:"kus-header-bar",children:[h.jsxs("div",{className:"kus-brand",children:[h.jsx("div",{className:"kus-logo",children:"KB"}),h.jsxs("div",{children:[h.jsxs("div",{className:"kus-name",children:["Knowledge ",h.jsx("span",{children:"Base"})]}),h.jsx("div",{className:"kus-tagline",children:"India's most honest supplement knowledge base"})]})]}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"10px"},children:[h.jsx("span",{className:"kus-domain",children:"Independent Editorial"}),h.jsx("p",{style:{fontSize:"11px",color:"rgba(255,255,255,0.4)",textAlign:"right",maxWidth:"280px"},children:"No sponsored content. No brand money. Only science, only honesty."})]})]})]}),h.jsx("div",{className:"blog-topics reveal",children:_m.map(r=>h.jsx("button",{type:"button",className:`topic-pill ${e===r.id?"active":""}`,onClick:()=>n(r.id),children:r.label},r.id))}),t.length>0?h.jsx("div",{className:"blog-grid",children:t.map(r=>h.jsx(Om,{blog:r},r.slug))}):h.jsx("div",{className:"topics-table",children:h.jsx("div",{className:"topic-row no-border-right last",children:"No posts in this topic yet. Please pick another topic."})}),h.jsxs("div",{className:"topics-table reveal",children:[h.jsx("span",{className:"label",children:"Full Blog Topic Library"}),h.jsx("h3",{className:"subhead",style:{marginBottom:"28px"},children:"50 Topics Every Nutraceutical Founder & Consumer Must Read"}),h.jsxs("div",{className:"topics-cols",children:[h.jsx("div",{className:"topics-col-head",children:"Formulation & Science"}),h.jsx("div",{className:"topics-col-head reg",children:"Regulation & Compliance"}),h.jsx("div",{className:"topics-col-head biz",children:"Business, Market & Consumer"}),h.jsx("div",{className:"topic-row",children:"1. Bioavailability 101: Why Most Supplements Do Nothing"}),h.jsx("div",{className:"topic-row",children:"18. FSSAI vs FDA: What Exporters Must Know in 2025"}),h.jsx("div",{className:"topic-row no-border-right",children:"35. How to Launch a Supplement Brand Under ₹25 Lakhs"}),h.jsx("div",{className:"topic-row",children:"2. Protein Powder: Whey vs Plant vs Casein — The Real Science"}),h.jsx("div",{className:"topic-row",children:"19. GMP Certification Step by Step for Indian Manufacturers"}),h.jsx("div",{className:"topic-row no-border-right",children:"36. Private Label Supplements: Complete Business Model Guide"}),h.jsx("div",{className:"topic-row",children:"3. The Truth About Proprietary Blends on Supplement Labels"}),h.jsx("div",{className:"topic-row",children:"20. HACCP Implementation for Nutraceutical Plants"}),h.jsx("div",{className:"topic-row no-border-right",children:"37. Nutraceutical Export from India: Opportunities & Pitfalls"}),h.jsx("div",{className:"topic-row",children:"4. Collagen: Type I vs II vs III vs Marine — What You Actually Need"}),h.jsx("div",{className:"topic-row",children:"21. Label Claims That Will Get Your Product Rejected by FSSAI"}),h.jsx("div",{className:"topic-row no-border-right",children:"38. Competitive Analysis in the Indian Supplement Market 2025"}),h.jsx("div",{className:"topic-row",children:"5. BCAA Ratios — 2:1:1 vs 4:1:1: The Science Explained"}),h.jsx("div",{className:"topic-row",children:"22. How to Prepare a FSSAI Product Approval Dossier"}),h.jsx("div",{className:"topic-row no-border-right",children:"39. D2C vs B2B Supplement Business: Honest Comparison"}),h.jsx("div",{className:"topic-row",children:"6. Nitrogen Flushing: The Under-Used Tool for Supplement Shelf Life"}),h.jsx("div",{className:"topic-row",children:"23. Adulterants in Indian Supplement Raw Materials — Red Flags"}),h.jsx("div",{className:"topic-row no-border-right",children:"40. Ingredient Sourcing Networks in India: What to Know"}),h.jsx("div",{className:"topic-row",children:"7. KSM-66 vs Sensoril vs Raw Ashwagandha: Epigenetic Evidence"}),h.jsx("div",{className:"topic-row",children:"24. Stability Testing Protocol for Nutraceuticals India"}),h.jsx("div",{className:"topic-row no-border-right",children:"41. How Supplement Startups Should Find a Manufacturer"}),h.jsx("div",{className:"topic-row",children:"8. Liposomal vs Standard Vitamin C: Is the Price Worth It?"}),h.jsx("div",{className:"topic-row",children:"25. Clinical Trials for Supplement Claims: The Real Process"}),h.jsx("div",{className:"topic-row no-border-right",children:"42. Functional Foods — The Fastest Growing Nutraceutical Segment"}),h.jsx("div",{className:"topic-row",children:"9. Gut Health Supplements: Probiotics, Prebiotics, Postbiotics Explained"}),h.jsx("div",{className:"topic-row",children:"26. Understanding Schedule H vs OTC Supplement Classification"}),h.jsx("div",{className:"topic-row no-border-right",children:"43. How to Price Your Supplement Product Correctly"}),h.jsx("div",{className:"topic-row",children:"10. Mushroom Extracts: Reishi, Lion's Mane, Cordyceps — Real Evidence"}),h.jsx("div",{className:"topic-row",children:"27. Ayurvedic Drug vs Nutraceutical: Which License Do You Need?"}),h.jsx("div",{className:"topic-row no-border-right",children:"44. Global Nutraceutical Market Trends 2025-2030"}),h.jsx("div",{className:"topic-row",children:"11. Omega-3 Quality: EPA vs DHA, Oxidation, Bioavailability"}),h.jsx("div",{className:"topic-row",children:"28. FSSAI Health Claims: What You Can and Cannot Say"}),h.jsx("div",{className:"topic-row no-border-right",children:"45. Why India Will Lead the Global Nutraceutical Market by 2030"}),h.jsx("div",{className:"topic-row",children:"12. Curcumin: BCM-95 vs Meriva vs Piperine — Which Absorbs Best?"}),h.jsx("div",{className:"topic-row",children:"29. QA vs QC in Supplement Manufacturing — What's the Difference?"}),h.jsx("div",{className:"topic-row no-border-right",children:"46. Supplement Brand Differentiation: Beyond the Label"}),h.jsx("div",{className:"topic-row",children:"13. Magnesium: Glycinate vs Oxide vs Citrate — Real Talk"}),h.jsx("div",{className:"topic-row",children:"30. HPLC Testing for Supplement Manufacturers: Basics Explained"}),h.jsx("div",{className:"topic-row no-border-right",children:"47. Hospital & Clinical Nutraceutical Procurement: B2B Guide"}),h.jsx("div",{className:"topic-row",children:"14. Epigenetics & Nutrition: How Food Switches Your Genes On and Off"}),h.jsx("div",{className:"topic-row",children:"31. Certificate of Analysis (COA) Reading Guide for Brands"}),h.jsx("div",{className:"topic-row no-border-right",children:"48. Supplement Business Financial Modelling for Startups"}),h.jsx("div",{className:"topic-row",children:"15. Pre-Workout Science: What Works, What Is Hype, What Is Dangerous"}),h.jsx("div",{className:"topic-row",children:"32. Banned Substances in Sports Nutrition — India Compliance"}),h.jsx("div",{className:"topic-row no-border-right",children:"49. Digital Marketing for Nutraceutical Brands in India"}),h.jsx("div",{className:"topic-row",children:"16. Liver Health Supplements: NAFLD, Silymarin, TUDCA Explained"}),h.jsx("div",{className:"topic-row",children:"33. GMP Audit Preparation: A Practical Checklist"}),h.jsx("div",{className:"topic-row no-border-right",children:"50. Investor Pitch Deck for a Supplement Brand — What Matters"}),h.jsx("div",{className:"topic-row last",children:"17. Sleep Supplements: Melatonin, Ashwagandha, L-Theanine Evidence Review"}),h.jsx("div",{className:"topic-row last",children:"34. Third-Party Testing: Why It Matters and How to Choose a Lab"}),h.jsx("div",{className:"topic-row no-border-right last",children:"+ New topics added weekly"})]}),h.jsx("div",{style:{textAlign:"center",marginTop:"28px"},children:h.jsx(wi,{to:"/contact",className:"btn btn-primary",children:"Request Full Articles List →"})})]})]})})}function Dm(){const{slug:e}=sm(),n=ca.find(t=>t.slug===e);return n?h.jsx("section",{className:"section",children:h.jsxs("div",{className:"container blog-post-wrap",children:[h.jsx("span",{className:"label",children:n.categoryLabel}),h.jsx("h1",{className:"headline blog-post-title",children:n.title}),h.jsxs("div",{className:"blog-post-meta",children:[h.jsx("span",{children:"Dr. Pramod Pandey"}),h.jsx("span",{children:"·"}),h.jsx("span",{children:n.readTime})]}),h.jsx("div",{className:"blog-post-body",children:n.content.map((t,r)=>h.jsx("p",{children:t},`${n.slug}-${r}`))}),h.jsx(wi,{to:"/knowledge-base",className:"btn btn-outline",children:"← Back to Knowledge Base"})]})}):h.jsx("section",{className:"section",children:h.jsxs("div",{className:"container blog-post-wrap",children:[h.jsx("h1",{className:"headline",style:{marginBottom:"18px"},children:"Post not found"}),h.jsx("p",{className:"body-text",style:{marginBottom:"24px"},children:"The blog you are trying to open does not exist."}),h.jsx(wi,{to:"/knowledge-base",className:"btn btn-primary",children:"Back to Knowledge Base"})]})})}const Bm=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#F7F5F0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=yes">
<title>Pandey Epigen Lab | Dr. Pramod Pandey | Nutraceutical Consultant India | FSSAI Regulatory Expert</title>
<meta name="description" content="Pandey Epigen Lab — India's premier nutraceutical consulting lab by Dr. Pramod Pandey (Ph.D. Biochemistry). Supplement formulation, FSSAI licensing, GMP compliance, Ayurvedic product development, private label nutraceuticals, and regulatory consulting.">
<meta name="keywords" content="nutraceutical consultant India, FSSAI license consultant, health supplement formulation expert, FSSAI regulatory consultant India, supplement startup consultant India, Ayurvedic product development consultant, private label nutraceutical India, GMP compliance consultant, protein powder formulation India, BCAA supplement formulation, nutraceutical B2B India, supplement manufacturing consultant Delhi, FSSAI product approval, nutraceutical regulatory forum India, epigenetic nutrition India, functional food consultant India, dietary supplement consultant India, health food regulatory India, nutraceutical laboratory India, supplement quality control India, FSSAI registration consultant, food supplement license India, nutraceutical business consultant India, clinical supplement formulation, herbal supplement consultant India">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
:root {
  --bg:         #F7F5F0;
  --surface:    #FFFFFF;
  --ink:        #1A1A18;
  --ink-soft:   #5A5A54;
  --ink-muted:  #9A9A92;
  --accent:     #2D6A4F;
  --accent-lt:  #40916C;
  --accent-dim: #D8EDE3;
  --accent-pale:#EDF7F2;
  --rule:       #E2E0D8;
  --gold:       #B8860B;
  --gold-dim:   #F5EDD0;
  --serif:      'Cormorant Garamond', Georgia, serif;
  --sans:       'DM Sans', sans-serif;
  --max:        1140px;
  --r:          4px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* ── UTILITIES ── */
.container { max-width: var(--max); margin: 0 auto; padding: 0 32px; }
.section    { padding: 100px 0; }
.section-sm { padding: 64px 0; }
.divider    { height: 1px; background: var(--rule); }

.label {
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 14px;
}
.headline {
  font-family: var(--serif);
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 400;
  line-height: 1.12;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.subhead {
  font-family: var(--serif);
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  font-weight: 400;
  line-height: 1.3;
  color: var(--ink);
}
.body-text {
  font-size: 1rem;
  color: var(--ink-soft);
  line-height: 1.85;
  max-width: 640px;
}
.btn {
  display: inline-block;
  padding: 13px 32px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--r);
  transition: all 0.25s ease;
  cursor: pointer;
  border: none;
}
.btn-primary  { background: var(--accent); color: #fff; }
.btn-primary:hover  { background: var(--accent-lt); transform: translateY(-1px); }
.btn-outline  { background: transparent; color: var(--accent); border: 1.5px solid var(--accent); }
.btn-outline:hover  { background: var(--accent); color: #fff; transform: translateY(-1px); }
.btn-dark     { background: var(--ink); color: #fff; }
.btn-dark:hover     { background: #2d2d2a; transform: translateY(-1px); }

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 200;
  background: rgba(247,245,240,0.93);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--rule);
}
.nav-inner {
  max-width: var(--max); margin: 0 auto; padding: 0 32px;
  height: 68px;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-logo { display: flex; flex-direction: column; text-decoration: none; }
.nav-logo-main {
  font-family: var(--serif); font-size: 1.15rem; font-weight: 500;
  color: var(--ink); letter-spacing: 0.01em; line-height: 1.1;
}
.nav-logo-main span { color: var(--accent); }
.nav-logo-sub {
  font-size: 9px; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--ink-muted);
}
.nav-links { display: flex; gap: 28px; list-style: none; align-items: center; }
.nav-links a {
  font-size: 12px; font-weight: 400; letter-spacing: 0.04em;
  color: var(--ink-soft); text-decoration: none; transition: color 0.2s;
}
.nav-links a:hover { color: var(--accent); }
.nav-cta {
  font-size: 11px !important; font-weight: 500 !important;
  color: var(--accent) !important;
  border: 1.5px solid var(--accent); padding: 7px 18px;
  border-radius: var(--r); transition: all 0.2s !important;
}
.nav-cta:hover { background: var(--accent) !important; color: #fff !important; }
.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
.hamburger span { display: block; width: 22px; height: 1.5px; background: var(--ink); transition: all 0.3s; }

/* ── HERO ── */
#hero {
  padding-top: 148px; padding-bottom: 100px;
  background: var(--bg); position: relative; overflow: hidden;
}
#hero::before {
  content: '';
  position: absolute; top: -60px; right: -100px;
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, var(--accent-dim) 0%, transparent 65%);
  pointer-events: none;
}
#hero::after {
  content: '';
  position: absolute; bottom: -80px; left: -60px;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, var(--gold-dim) 0%, transparent 70%);
  pointer-events: none; opacity: 0.5;
}
.hero-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.hero-eyebrow {
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
}
.hero-eyebrow-line { width: 36px; height: 1.5px; background: var(--accent); }
.hero-eyebrow-text {
  font-size: 11px; font-weight: 600; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--accent);
}
.hero-title {
  font-family: var(--serif);
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  font-weight: 400; line-height: 1.05;
  color: var(--ink); margin-bottom: 24px; letter-spacing: -0.02em;
}
.hero-title em   { font-style: italic; color: var(--accent); }
.hero-title .sub-em { font-style: italic; color: var(--gold); }
.hero-desc {
  font-size: 1.02rem; color: var(--ink-soft);
  line-height: 1.8; margin-bottom: 40px; max-width: 520px;
}
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 16px; }
.hero-knowur {
  display: flex; align-items: center; gap: 10px;
  margin-top: 14px;
  padding: 12px 18px;
  background: var(--gold-dim);
  border: 1px solid rgba(184,134,11,0.25);
  border-radius: var(--r);
  text-decoration: none;
  transition: all 0.2s;
  max-width: fit-content;
}
.hero-knowur:hover { background: var(--gold-dim); border-color: var(--gold); transform: translateY(-1px); }
.hero-knowur-icon { font-size: 1.1rem; }
.hero-knowur-text { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); }
.hero-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 20px; margin-top: 48px; padding-top: 36px;
  border-top: 1px solid var(--rule);
}
.stat-num {
  font-family: var(--serif); font-size: 2.6rem; font-weight: 400;
  color: var(--ink); line-height: 1; margin-bottom: 5px;
}
.stat-num span { color: var(--accent); }
.stat-label {
  font-size: 11px; font-weight: 400; color: var(--ink-muted);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.credential-card {
  background: var(--surface); border: 1px solid var(--rule);
  border-radius: 8px; padding: 36px; position: relative;
}
.credential-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  height: 3px; background: linear-gradient(90deg, var(--accent), var(--gold));
  border-radius: 8px 8px 0 0;
}
.profile-identity {
  display: flex; gap: 18px; align-items: flex-start;
  margin-bottom: 28px; padding-bottom: 24px; border-bottom: 1px solid var(--rule);
}
.profile-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--accent-dim); display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 1.6rem; font-weight: 500;
  color: var(--accent); flex-shrink: 0;
}
.profile-name { font-family: var(--serif); font-size: 1.4rem; font-weight: 500; color: var(--ink); margin-bottom: 3px; }
.profile-title-tag { font-size: 11px; color: var(--ink-soft); letter-spacing: 0.03em; line-height: 1.5; }
.cred-list { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.cred-list li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 0.875rem; color: var(--ink-soft);
}
.cred-list li::before { content: '—'; color: var(--accent); font-weight: 600; flex-shrink: 0; margin-top: 1px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--rule); }
.badge {
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent); background: var(--accent-dim); padding: 4px 10px; border-radius: 2px;
}
.badge-gold { color: var(--gold); background: var(--gold-dim); }

/* ── TRUST BAR ── */
.trust-bar { background: var(--ink); padding: 20px 0; overflow: hidden; }
.trust-scroll {
  display: flex; gap: 56px;
  animation: marquee 35s linear infinite; white-space: nowrap;
}
.trust-item {
  font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(255,255,255,0.45); display: flex; align-items: center; gap: 12px; flex-shrink: 0;
}
.trust-dot { width: 3px; height: 3px; background: var(--accent-lt); border-radius: 50%; flex-shrink: 0; }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ── THREE PILLARS ── */
#pillars { background: var(--surface); }
.pillars-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--rule);
  border: 1px solid var(--rule); border-radius: 8px; overflow: hidden;
  margin-top: 56px;
}
.pillar-card {
  background: var(--surface); padding: 44px 36px;
  transition: background 0.2s; cursor: default;
}
.pillar-card:hover { background: var(--bg); }
.pillar-icon { font-size: 2rem; margin-bottom: 20px; }
.pillar-title {
  font-family: var(--serif); font-size: 1.5rem; font-weight: 500;
  color: var(--ink); margin-bottom: 12px; line-height: 1.25;
}
.pillar-desc { font-size: 0.9rem; color: var(--ink-soft); line-height: 1.75; margin-bottom: 20px; }
.pillar-link {
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--accent); text-decoration: none;
  transition: gap 0.2s; display: inline-flex; align-items: center; gap: 6px;
}
.pillar-link:hover { gap: 10px; }

/* ── ABOUT ── */
#about .about-grid {
  display: grid; grid-template-columns: 5fr 7fr;
  gap: 80px; align-items: start;
}
.about-quote {
  font-family: var(--serif); font-size: clamp(1.4rem, 2.2vw, 1.85rem);
  font-weight: 400; line-height: 1.45; color: var(--ink); font-style: italic;
  margin: 28px 0; padding-left: 22px; border-left: 3px solid var(--accent);
}
.about-body { font-size: 1rem; color: var(--ink-soft); line-height: 1.85; margin-bottom: 18px; }
.epigen-callout {
  background: var(--accent-pale); border: 1px solid var(--accent-dim);
  border-radius: 6px; padding: 24px 28px; margin: 28px 0;
}
.epigen-callout-title {
  font-family: var(--serif); font-size: 1.1rem; font-weight: 500;
  color: var(--accent); margin-bottom: 8px;
}
.epigen-callout-text { font-size: 0.9rem; color: var(--ink-soft); line-height: 1.7; }
.edu-block { margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--rule); }
.edu-item {
  display: flex; gap: 18px; padding: 16px 0;
  border-bottom: 1px solid var(--rule);
}
.edu-year { font-size: 11px; font-weight: 600; color: var(--accent); letter-spacing: 0.08em; min-width: 48px; padding-top: 2px; }
.edu-detail-title { font-size: 0.9rem; font-weight: 500; color: var(--ink); margin-bottom: 2px; }
.edu-detail-inst  { font-size: 0.82rem; color: var(--ink-muted); }

/* ── SERVICES ── */
#services { background: var(--bg); }
.services-intro {
  display: grid; grid-template-columns: 1fr 2fr;
  gap: 60px; align-items: end; margin-bottom: 56px;
}
.services-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--rule);
  border: 1px solid var(--rule); border-radius: 6px; overflow: hidden;
}
.service-card {
  background: var(--surface); padding: 32px 28px;
  transition: background 0.2s; position: relative;
}
.service-card:hover { background: var(--accent-pale); }
.service-number {
  font-family: var(--serif); font-size: 2.8rem; font-weight: 300;
  color: var(--rule); line-height: 1; margin-bottom: 16px; letter-spacing: -0.03em;
}
.service-title { font-family: var(--serif); font-size: 1.1rem; font-weight: 500; color: var(--ink); margin-bottom: 10px; line-height: 1.3; }
.service-desc { font-size: 0.85rem; color: var(--ink-soft); line-height: 1.7; }
.service-tag { display: inline-block; margin-top: 16px; font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); }

/* ── REGULATORY SECTION ── */
#regulatory { background: var(--surface); }
.reg-grid {
  display: grid; grid-template-columns: 5fr 7fr;
  gap: 80px; align-items: start;
}
.reg-intro { max-width: 440px; }
.reg-intro .headline { margin-bottom: 20px; }
.reg-intro .body-text { margin-bottom: 32px; }
.forum-cta {
  background: var(--accent-dim); border: 1px solid rgba(45,106,79,0.2);
  border-radius: 6px; padding: 24px 28px; margin-top: 28px;
}
.forum-cta-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 500; color: var(--ink); margin-bottom: 8px; }
.forum-cta-text  { font-size: 0.875rem; color: var(--ink-soft); margin-bottom: 16px; }
.reg-cards {
  display: flex; flex-direction: column; gap: 16px;
}
.reg-card {
  background: var(--bg); border: 1px solid var(--rule);
  border-radius: 6px; padding: 24px 28px;
  display: flex; gap: 18px; align-items: flex-start;
  transition: border-color 0.2s, background 0.2s;
}
.reg-card:hover { border-color: var(--accent); background: var(--accent-pale); }
.reg-card-icon {
  width: 40px; height: 40px; background: var(--accent-dim);
  border-radius: var(--r); display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.reg-card-title { font-size: 0.95rem; font-weight: 600; color: var(--ink); margin-bottom: 4px; }
.reg-card-desc  { font-size: 0.845rem; color: var(--ink-soft); line-height: 1.6; }
.reg-faq {
  margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--rule);
}
.faq-item {
  border-bottom: 1px solid var(--rule); padding: 18px 0; cursor: pointer;
}
.faq-q {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.95rem; font-weight: 500; color: var(--ink);
}
.faq-q .faq-icon {
  font-size: 1.2rem;
  color: var(--accent);
  transition: transform 0.3s;
  flex-shrink: 0;
  margin-left: 12px;
}
.faq-a {
  font-size: 0.875rem; color: var(--ink-soft); line-height: 1.7;
  max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s;
  padding-top: 0;
}
.faq-item.open .faq-a { max-height: 420px; padding-top: 12px; }
.faq-item.open .faq-q .faq-icon { transform: rotate(45deg); }

/* ── EXPERTISE ── */
#expertise { background: var(--bg); }
#expertise .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.exp-list { list-style: none; display: flex; flex-direction: column; }
.exp-list li {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 0; border-bottom: 1px solid var(--rule);
  font-size: 0.92rem; color: var(--ink-soft); transition: color 0.2s;
}
.exp-list li:hover { color: var(--accent); }
.exp-list li::after { content: '→'; color: var(--accent); opacity: 0; transition: opacity 0.2s; font-size: 0.85rem; }
.exp-list li:hover::after { opacity: 1; }
.exp-right { display: flex; flex-direction: column; gap: 18px; }
.highlight-box { background: var(--accent); color: #fff; border-radius: 6px; padding: 32px; }
.highlight-box .hl-num { font-family: var(--serif); font-size: 3.2rem; font-weight: 300; line-height: 1; margin-bottom: 8px; }
.highlight-box .hl-label { font-size: 12px; font-weight: 400; opacity: 0.8; line-height: 1.5; }
.instruments-box { background: var(--surface); border: 1px solid var(--rule); border-radius: 6px; padding: 26px 30px; }
.instruments-box .ib-title { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 14px; }
.instrument-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.instrument-tag { font-size: 10px; font-weight: 500; color: var(--ink-soft); background: var(--bg); border: 1px solid var(--rule); padding: 4px 11px; border-radius: 2px; }

/* ── B2B ── */
#b2b { background: var(--ink); }
.b2b-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 80px; align-items: center; }
.b2b-body { font-size: 1rem; color: rgba(255,255,255,0.58); line-height: 1.85; margin: 22px 0 32px; max-width: 460px; }
.b2b-right { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.b2b-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px; padding: 24px 20px; transition: background 0.2s;
}
.b2b-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.15); }
.b2b-card-icon { font-size: 1.5rem; margin-bottom: 14px; }
.b2b-card-title { font-size: 0.92rem; font-weight: 500; color: #fff; margin-bottom: 7px; }
.b2b-card-desc  { font-size: 0.8rem; color: rgba(255,255,255,0.42); line-height: 1.6; }

/* ── KNOWLEDGE HUB ── */
#insights { background: var(--bg); }
.kus-header-bar {
  background: var(--ink); border-radius: 8px; padding: 28px 36px;
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 48px; gap: 20px; flex-wrap: wrap;
}
.kus-brand {
  display: flex; align-items: center; gap: 16px;
}
.kus-logo {
  width: 52px; height: 52px; background: var(--accent); border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 1.1rem; font-weight: 500; color: #fff;
}
.kus-name { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; color: #fff; }
.kus-name span { color: var(--accent-lt); }
.kus-tagline { font-size: 11px; color: rgba(255,255,255,0.45); letter-spacing: 0.06em; }
.kus-domain { font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent-lt); background: rgba(64,145,108,0.15); padding: 6px 14px; border-radius: 20px; }

.blog-topics { display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 32px; }
.topic-pill {
  font-size: 11px; font-weight: 500; color: var(--ink-soft);
  background: var(--surface); border: 1px solid var(--rule);
  padding: 7px 16px; border-radius: 40px; cursor: pointer; transition: all 0.2s; text-decoration: none;
}
.topic-pill:hover, .topic-pill.active { background: var(--accent); color: #fff; border-color: var(--accent); }

.blog-grid {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr;
  gap: 20px; margin-bottom: 36px;
}
.blog-card {
  background: var(--surface); border: 1px solid var(--rule);
  border-radius: 6px; overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s; text-decoration: none; display: block;
}
.blog-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.07); }
.blog-thumb {
  height: 170px; display: flex; align-items: center; justify-content: center;
}
.blog-card:first-child .blog-thumb { height: 220px; }
.blog-thumb-icon { font-size: 2.8rem; opacity: 0.45; }
.blog-card-body { padding: 22px; }
.blog-cat { font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 9px; display: block; }
.blog-card-title { font-family: var(--serif); font-size: 1.1rem; font-weight: 500; color: var(--ink); line-height: 1.35; margin-bottom: 10px; }
.blog-card:first-child .blog-card-title { font-size: 1.35rem; }
.blog-excerpt { font-size: 0.83rem; color: var(--ink-soft); line-height: 1.65; margin-bottom: 14px; }
.blog-meta { font-size: 10px; color: var(--ink-muted); display: flex; gap: 10px; }

/* 50 topics grid */
.topics-table {
  margin-top: 48px; padding-top: 40px; border-top: 1px solid var(--rule);
}
.topics-cols {
  display: grid; grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid var(--rule); border-radius: 6px; overflow: hidden;
}
.topics-col-head {
  background: var(--ink); color: #fff; padding: 13px 18px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
}
.topics-col-head.reg { background: var(--accent); }
.topics-col-head.biz { background: #3a3a36; }
.topic-row {
  padding: 14px 18px; border-bottom: 1px solid var(--rule);
  font-size: 0.845rem; color: var(--ink-soft); border-right: 1px solid var(--rule);
  transition: background 0.15s; cursor: default;
}
.topic-row:hover { background: var(--accent-pale); color: var(--accent); }
.topic-row.no-border-right { border-right: none; }
.topic-row.last { border-bottom: none; }

/* ── FORUM TEASER ── */
#forum { background: var(--surface); }
.forum-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.forum-threads { display: flex; flex-direction: column; gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 6px; overflow: hidden; }
.forum-thread {
  background: var(--surface); padding: 20px 24px;
  display: flex; gap: 16px; align-items: flex-start;
  transition: background 0.2s; cursor: pointer;
}
.forum-thread:hover { background: var(--accent-pale); }
.forum-thread-cat {
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: #fff; background: var(--accent); padding: 3px 8px; border-radius: 2px;
  flex-shrink: 0; margin-top: 3px;
}
.forum-thread-cat.reg { background: var(--gold); }
.forum-thread-cat.sci { background: var(--ink); }
.forum-thread-q { font-size: 0.92rem; font-weight: 500; color: var(--ink); margin-bottom: 3px; line-height: 1.35; }
.forum-thread-meta { font-size: 10px; color: var(--ink-muted); }
.forum-right { }
.forum-cta-big {
  background: var(--accent); color: #fff; border-radius: 8px; padding: 36px;
  margin-bottom: 20px;
}
.forum-cta-big .fct-title { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; margin-bottom: 12px; line-height: 1.2; }
.forum-cta-big .fct-text  { font-size: 0.9rem; opacity: 0.8; line-height: 1.7; margin-bottom: 24px; }
.forum-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.forum-tag {
  font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ink-soft); background: var(--bg); border: 1px solid var(--rule);
  padding: 5px 12px; border-radius: 2px;
}

/* ── PROCESS ── */
#process { background: var(--bg); }
.process-steps {
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 0; margin-top: 52px; position: relative;
}
.process-steps::before {
  content: ''; position: absolute; top: 27px; left: 10%; right: 10%;
  height: 1px; background: var(--rule);
}
.process-step { text-align: center; padding: 0 14px; }
.step-circle {
  width: 54px; height: 54px; background: var(--bg); border: 2px solid var(--rule);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 1rem; font-weight: 500; color: var(--ink-soft);
  margin: 0 auto 18px; position: relative; z-index: 1; transition: all 0.25s;
}
.process-step:hover .step-circle { background: var(--accent); border-color: var(--accent); color: #fff; }
.step-title  { font-size: 0.82rem; font-weight: 600; color: var(--ink); margin-bottom: 7px; }
.step-desc   { font-size: 0.78rem; color: var(--ink-muted); line-height: 1.6; }

/* ── TESTIMONIALS ── */
#testimonials { background: var(--surface); }
.testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
.testi-card { background: var(--bg); border: 1px solid var(--rule); border-radius: 6px; padding: 32px; }
.testi-stars { color: var(--accent); font-size: 13px; letter-spacing: 2px; margin-bottom: 18px; }
.testi-quote { font-family: var(--serif); font-size: 1.02rem; font-weight: 400; color: var(--ink); line-height: 1.6; margin-bottom: 22px; font-style: italic; }
.testi-author { font-size: 11px; font-weight: 600; color: var(--ink-soft); letter-spacing: 0.06em; text-transform: uppercase; }
.testi-role   { font-size: 10px; color: var(--ink-muted); margin-top: 3px; }

/* ── CONTACT ── */
#contact { background: var(--bg); }
.contact-grid { display: grid; grid-template-columns: 5fr 7fr; gap: 80px; align-items: start; }
.contact-info { display: flex; flex-direction: column; gap: 24px; margin-top: 32px; }
.contact-item { display: flex; gap: 14px; align-items: flex-start; }
.contact-icon {
  width: 38px; height: 38px; background: var(--accent-dim);
  border-radius: var(--r); display: flex; align-items: center; justify-content: center;
  font-size: 0.95rem; flex-shrink: 0;
}
.contact-label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 3px; }
.contact-value { font-size: 0.92rem; color: var(--ink); }
.contact-value a { color: var(--accent); text-decoration: none; }
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group label { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft); }
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--surface); border: 1px solid var(--rule);
  border-radius: var(--r); padding: 13px 15px;
  font-family: var(--sans); font-size: 0.88rem; color: var(--ink);
  outline: none; transition: border-color 0.2s; resize: vertical;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--accent); }
.form-group textarea { min-height: 110px; }

/* ── FOOTER ── */
footer { background: var(--ink); color: rgba(255,255,255,0.55); padding: 56px 0 28px; }
.footer-top {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 56px; padding-bottom: 44px;
  border-bottom: 1px solid rgba(255,255,255,0.07); margin-bottom: 28px;
}
.footer-brand { font-family: var(--serif); font-size: 1.3rem; font-weight: 400; color: #fff; margin-bottom: 6px; }
.footer-brand span { color: var(--accent-lt); }
.footer-sub { font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 14px; }
.footer-tagline { font-size: 0.83rem; color: rgba(255,255,255,0.38); line-height: 1.7; max-width: 270px; }
.footer-col-title { font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.28); margin-bottom: 18px; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.footer-links a { font-size: 0.85rem; color: rgba(255,255,255,0.48); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: rgba(255,255,255,0.88); }
.footer-knowur {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(64,145,108,0.12); border: 1px solid rgba(64,145,108,0.25);
  border-radius: 4px; padding: 8px 14px; margin-top: 14px; text-decoration: none;
}
.footer-knowur span { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-lt); }
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 11px; color: rgba(255,255,255,0.22); flex-wrap: wrap; gap: 10px;
}

/* ══════════════════════════════════════════════════════
   RESPONSIVE SYSTEM — 5 BREAKPOINTS
   1280px+  → Large laptop / desktop
   1024px   → Small laptop / iPad landscape
   768px    → Tablet portrait / large phone landscape
   480px    → Mobile (Android + iPhone standard)
   360px    → Small Android (Samsung Galaxy S series)
   ══════════════════════════════════════════════════════ */

/* ── BASE: iOS & Android global fixes ── */
* {
  -webkit-tap-highlight-color: transparent;  /* remove blue flash on tap (Android) */
  -webkit-touch-callout: none;               /* disable long-press popup on iOS */
}
input, select, textarea, button {
  -webkit-appearance: none;                  /* fix iOS form styling */
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;                        /* iOS rounds inputs aggressively */
}
select { background-image: none; }          /* remove iOS select arrow */
body {
  -webkit-text-size-adjust: 100%;           /* prevent iOS auto font scaling */
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  overflow-x: hidden;                        /* prevent horizontal scroll on mobile */
}
img { max-width: 100%; height: auto; display: block; }

/* ── BREAKPOINT 1: Small laptop / iPad landscape (max 1024px) ── */
@media (max-width: 1024px) {
  :root { --max: 960px; }
  .container { padding: 0 28px; }
  .section { padding: 80px 0; }

  .hero-title { font-size: 3.8rem; }
  .hero-grid  { gap: 48px; }

  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .testi-grid    { grid-template-columns: repeat(2, 1fr); }
  .footer-top    { grid-template-columns: 2fr 1fr 1fr; gap: 36px; }

  .process-steps { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .process-steps::before { left: 16%; right: 16%; }
}

/* ── BREAKPOINT 2: Tablet portrait / phone landscape (max 768px) ── */
@media (max-width: 768px) {
  .container { padding: 0 24px; }
  .section    { padding: 64px 0; }
  .section-sm { padding: 48px 0; }

  /* Nav */
  .nav-links  { display: none; }
  .hamburger  { display: flex; }
  .nav-inner  { height: 60px; }
  #mobile-menu { top: 60px; }

  /* Hero */
  .hero-grid  {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hero-title { font-size: clamp(2.6rem, 8vw, 3.4rem); }
  .hero-desc  { font-size: 0.97rem; max-width: 100%; }
  .hero-stats { grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; padding-top: 28px; }
  .hero-right { order: -1; } /* show credential card ABOVE text on tablet */
  .credential-card { padding: 28px; }

  /* All two-col grids → single col */
  .hero-grid, #about .about-grid, .services-intro,
  .b2b-grid, .contact-grid, #expertise .exp-grid,
  .forum-grid, .reg-grid { grid-template-columns: 1fr; gap: 32px; }

  /* Three-col grids → two col */
  .pillars-grid  { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .testi-grid    { grid-template-columns: 1fr; }
  .blog-grid     { grid-template-columns: 1fr; }
  .b2b-right     { grid-template-columns: repeat(2, 1fr); }

  .process-steps { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .process-steps::before { display: none; }

  .footer-top    { grid-template-columns: 1fr 1fr; gap: 28px; }
  .topics-cols   { grid-template-columns: 1fr; }
  .form-row      { grid-template-columns: 1fr; }

  /* Knowledge bar */
  .kus-header-bar { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px; }

  /* Forum threads */
  .forum-cta-big { padding: 28px 24px; }

  /* Blog topics pills — horizontal scroll on tablet */
  .blog-topics { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 8px; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
  .blog-topics::-webkit-scrollbar { display: none; }
  .topic-pill  { flex-shrink: 0; }
}

/* ── BREAKPOINT 3: Mobile — Android + iPhone (max 480px) ── */
@media (max-width: 480px) {
  html { font-size: 15px; }
  .container  { padding: 0 18px; }
  .section    { padding: 52px 0; }
  .section-sm { padding: 40px 0; }

  /* Nav — tighter on small phones */
  .nav-inner  { height: 56px; padding: 0 18px; }
  #mobile-menu { top: 56px; padding: 16px 18px; }
  .nav-logo-main { font-size: 1rem; }
  .nav-logo-sub  { display: none; } /* hide sub-label on small phones */

  /* Hero */
  .hero-title { font-size: clamp(2.2rem, 9.5vw, 2.8rem); line-height: 1.08; }
  .hero-desc  { font-size: 0.93rem; margin-bottom: 28px; }
  .hero-actions { gap: 10px; }
  .hero-actions .btn { padding: 12px 22px; font-size: 11px; width: 100%; text-align: center; }
  .hero-knowur { width: 100%; justify-content: center; }
  .hero-stats  { grid-template-columns: 1fr 1fr; gap: 14px; }
  .stat-num    { font-size: 2.2rem; }

  /* Credential card */
  .credential-card { padding: 22px 18px; }
  .profile-identity { gap: 14px; }
  .profile-avatar   { width: 52px; height: 52px; font-size: 1.3rem; }
  .profile-name     { font-size: 1.2rem; }
  .profile-title-tag { font-size: 10px; }
  .cred-list li     { font-size: 0.82rem; }
  .badge-row        { gap: 5px; margin-top: 18px; }
  .badge            { font-size: 8px; padding: 3px 8px; }

  /* About */
  .about-quote { font-size: 1.25rem; padding-left: 16px; }
  .epigen-callout { padding: 18px 20px; }

  /* Pillars — single col on small mobile */
  .pillars-grid  { grid-template-columns: 1fr; }
  .pillar-card   { padding: 30px 24px; }

  /* Services */
  .services-grid { grid-template-columns: 1fr; }
  .service-card  { padding: 24px 20px; }
  .service-number { font-size: 2rem; }

  /* Regulatory */
  .reg-card  { padding: 18px 20px; }
  .forum-cta { padding: 18px 20px; }

  /* Expertise */
  .exp-list li { font-size: 0.875rem; padding: 13px 0; }
  .highlight-box { padding: 24px; }
  .highlight-box .hl-num { font-size: 2.6rem; }

  /* B2B */
  .b2b-right { grid-template-columns: 1fr; }
  .b2b-card  { padding: 20px 18px; }

  /* Blog */
  .blog-card-body  { padding: 18px; }
  .blog-card-title { font-size: 1.05rem !important; }
  .blog-thumb      { height: 150px !important; }

  /* Forum */
  .forum-threads { border-radius: 4px; }
  .forum-thread  { padding: 16px 18px; flex-wrap: wrap; }
  .forum-thread-cat { font-size: 8px; }
  .forum-cta-big { padding: 22px 18px; }
  .forum-cta-big .fct-title { font-size: 1.4rem; }

  /* Process */
  .process-steps { grid-template-columns: 1fr; gap: 20px; }
  .process-step  { text-align: left; display: flex; gap: 16px; align-items: flex-start; }
  .step-circle   { flex-shrink: 0; width: 44px; height: 44px; font-size: 0.9rem; margin: 0; }
  .step-title    { margin-bottom: 4px; }

  /* Testimonials */
  .testi-card  { padding: 24px 20px; }
  .testi-quote { font-size: 0.97rem; }

  /* Contact */
  .contact-form .btn { width: 100%; padding: 16px; }

  /* Footer */
  .footer-top    { grid-template-columns: 1fr; gap: 28px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; font-size: 10px; }

  /* Topics table */
  .topic-row { padding: 12px 14px; font-size: 0.82rem; }
  .topics-col-head { padding: 11px 14px; font-size: 9px; }

  /* Headline sizes */
  .headline { font-size: clamp(1.8rem, 7.5vw, 2.6rem); }
  .subhead  { font-size: clamp(1.2rem, 5vw, 1.5rem); }
}

/* ── BREAKPOINT 4: Small Android phones — 360px (Samsung Galaxy S, Redmi) ── */
@media (max-width: 380px) {
  html { font-size: 14px; }
  .container  { padding: 0 14px; }

  .hero-title { font-size: 2rem; }
  .hero-actions .btn { font-size: 10.5px; padding: 11px 18px; }

  .nav-logo-main { font-size: 0.92rem; }
  .stat-num      { font-size: 2rem; }

  .credential-card { padding: 18px 14px; }
  .profile-avatar  { width: 46px; height: 46px; font-size: 1.1rem; }

  .kus-name { font-size: 1.4rem; }
  .kus-logo { width: 42px; height: 42px; font-size: 0.95rem; }

  .pillar-card   { padding: 24px 18px; }
  .service-card  { padding: 20px 16px; }
  .testi-card    { padding: 20px 16px; }
  .b2b-card      { padding: 16px 14px; }
}

/* ── iOS SAFARI SPECIFIC FIXES ── */
@supports (-webkit-touch-callout: none) {
  /* Fix iOS momentum scrolling */
  body { -webkit-overflow-scrolling: touch; }

  /* Fix iOS input zoom — font-size must be 16px or iOS zooms in */
  .form-group input,
  .form-group select,
  .form-group textarea { font-size: 16px !important; }

  /* Fix iOS sticky nav blur */
  nav { -webkit-backdrop-filter: blur(18px); }

  /* Fix iOS bottom safe area (iPhone X and newer notch phones) */
  footer { padding-bottom: max(28px, env(safe-area-inset-bottom)); }
  nav    { padding-top: env(safe-area-inset-top); }
}

/* ── ANDROID CHROME SPECIFIC FIXES ── */
@media screen and (max-width: 480px) {
  /* Android Chrome address bar height fix */
  #hero { min-height: calc(100svh - 60px); padding-bottom: 60px; }

  /* Fix Android font rendering */
  body { text-rendering: optimizeSpeed; }

  /* Ensure tap targets are 48px minimum (Google requirement) */
  .btn, .nav-cta, .topic-pill, .footer-links a,
  #mobile-menu a, .faq-q, .forum-thread { min-height: 48px; }
  .btn { display: flex; align-items: center; justify-content: center; }

  /* Fix Android select arrow */
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A5A54' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }
}

/* ── LARGE SCREENS: 1400px+ ── */
@media (min-width: 1400px) {
  :root { --max: 1240px; }
  .hero-title { font-size: 5.2rem; }
}

/* ── ANIMATIONS (reduced motion for accessibility) ── */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .trust-scroll { animation: none; }
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}

/* ── MOBILE MENU ── */
#mobile-menu {
  display: none; position: fixed; top: 68px; left: 0; right: 0;
  background: var(--bg); border-bottom: 1px solid var(--rule);
  padding: 20px 28px; z-index: 99; flex-direction: column; gap: 0;
  max-height: calc(100vh - 68px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
#mobile-menu.open { display: flex; }
#mobile-menu a {
  font-size: 15px; font-weight: 400; color: var(--ink-soft); text-decoration: none;
  padding: 14px 0; border-bottom: 1px solid var(--rule);
  min-height: 48px; display: flex; align-items: center;
  transition: color 0.2s;
}
#mobile-menu a:last-child { border-bottom: none; }
#mobile-menu a:hover, #mobile-menu a:active { color: var(--accent); }

/* ── EPIGEN TAG ── */
.epigen-tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--gold-dim); border: 1px solid rgba(184,134,11,0.3);
  border-radius: 3px; padding: 4px 10px; margin-left: 8px; vertical-align: middle;
}
.epigen-tag span { font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#hero" class="nav-logo">
      <span class="nav-logo-main">Epigene Lab <span>by Dr. Pandey</span></span>
      <span class="nav-logo-sub">Dr. Pramod Pandey · Nutraceutical Consultant</span>
    </a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#regulatory">Regulatory</a></li>
      <li><a href="#forum">Forum</a></li>
      <li><a href="#insights">Knowledge Base</a></li>
      <li><a href="#contact" class="nav-cta">Consult Now</a></li>
    </ul>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div id="mobile-menu">
  <a href="#about"      onclick="toggleMenu()">About</a>
  <a href="#services"   onclick="toggleMenu()">Services</a>
  <a href="#regulatory" onclick="toggleMenu()">Regulatory</a>
  <a href="#forum"      onclick="toggleMenu()">Forum</a>
  <a href="#insights"   onclick="toggleMenu()">Knowledge Base</a>
  <a href="#contact"    onclick="toggleMenu()">Consult Now</a>
</div>

<!-- HERO -->
<section id="hero">
  <div class="container">
    <div class="hero-grid">
      <div>
        <div class="hero-eyebrow">
          <div class="hero-eyebrow-line"></div>
          <span class="hero-eyebrow-text">Nutraceutical Science · Regulatory Consulting · India</span>
        </div>
        <h1 class="hero-title">
          Science-Backed<br>
          <em>Nutraceutical</em><br>
          Solutions
        </h1>
        <p class="hero-desc">
          India's independent nutraceutical lab and regulatory consultancy. Ph.D. Biochemist with 10+ years across supplement formulation, FSSAI compliance, Ayurvedic product development, GMP manufacturing, and science-backed health solutions for B2B brands worldwide.
        </p>
        <div class="hero-actions">
          <a href="#contact"   class="btn btn-primary">Start a Project</a>
          <a href="#regulatory" class="btn btn-outline">FSSAI Queries</a>
          <a href="#services"  class="btn btn-dark">View Services</a>
        </div>
        <div class="hero-stats">
          <div>
            <div class="stat-num">10<span>+</span></div>
            <div class="stat-label">Years Research Experience</div>
          </div>
          <div>
            <div class="stat-num">100<span>%</span></div>
            <div class="stat-label">Regulatory Approval Rate</div>
          </div>
          <div>
            <div class="stat-num">18<span>mo</span></div>
            <div class="stat-label">Shelf-Life Extended</div>
          </div>
          <div>
            <div class="stat-num">12<span>%</span></div>
            <div class="stat-label">Production Cost Reduced</div>
          </div>
        </div>
      </div>

      <div class="reveal">
                <div class="credential-card">
          <div class="profile-identity">
            <div class="profile-avatar">PP</div>
            <div>
              <div class="profile-name">Dr. Pramod Pandey</div>
              <div class="profile-title-tag">Ph.D. Biochemistry · Post-Doc CAS China<br>Scientific Officer & Plant Head · Nutraceutical Consultant</div>
            </div>
          </div>
          <ul class="cred-list">
            <li>Ph.D. Biochemistry — Kumaun University, Nainital, India</li>
            <li>Post-Doctoral Research — Dalian Institute of Chemical Physics, Chinese Academy of Sciences, China</li>
            <li>Biosensor R&D for early Alzheimer's detection</li>
            <li>Young Scientist Award — Uttarakhand State Science Congress 2013</li>
            <li>Designed nutraceuticals for Indian Defence sector — FSSAI + GMP compliant</li>
            <li>FSSAI · GMP · HACCP · FDA registration expertise</li>
            <li>Protein powder, BCAA, Ayurvedic, clinical-grade supplement formulation</li>
          </ul>
          <div class="badge-row">
            <span class="badge">FSSAI</span>
            <span class="badge">GMP</span>
            <span class="badge">HACCP</span>
            <span class="badge">Ph.D.</span>
            <span class="badge">Post-Doc</span>
            <span class="badge badge-gold">Epigenetics</span>
            <span class="badge badge-gold">B2B</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div style="overflow:hidden;">
    <div class="trust-scroll">
      <span class="trust-item"><span class="trust-dot"></span>Nutraceutical Formulation</span>
      <span class="trust-item"><span class="trust-dot"></span>FSSAI Compliance India</span>
      <span class="trust-item"><span class="trust-dot"></span>Supplement Regulatory Consultant</span>
      <span class="trust-item"><span class="trust-dot"></span>Ayurvedic Product Development</span>
      <span class="trust-item"><span class="trust-dot"></span>Private Label Supplements</span>
      <span class="trust-item"><span class="trust-dot"></span>Epigenetic Nutrition Science</span>
      <span class="trust-item"><span class="trust-dot"></span>Protein Powder Formulation</span>
      <span class="trust-item"><span class="trust-dot"></span>GMP Certified Manufacturing</span>
      <span class="trust-item"><span class="trust-dot"></span>Supplement Startup Consultant</span>
      <span class="trust-item"><span class="trust-dot"></span>Quality Control & Stability Testing</span>
      <span class="trust-item"><span class="trust-dot"></span>FSSAI License Registration</span>
      <!-- duplicate -->
      <span class="trust-item"><span class="trust-dot"></span>Nutraceutical Formulation</span>
      <span class="trust-item"><span class="trust-dot"></span>FSSAI Compliance India</span>
      <span class="trust-item"><span class="trust-dot"></span>Supplement Regulatory Consultant</span>
      <span class="trust-item"><span class="trust-dot"></span>Ayurvedic Product Development</span>
      <span class="trust-item"><span class="trust-dot"></span>Private Label Supplements</span>
      <span class="trust-item"><span class="trust-dot"></span>Epigenetic Nutrition Science</span>
      <span class="trust-item"><span class="trust-dot"></span>Protein Powder Formulation</span>
      <span class="trust-item"><span class="trust-dot"></span>GMP Certified Manufacturing</span>
      <span class="trust-item"><span class="trust-dot"></span>Supplement Startup Consultant</span>
      <span class="trust-item"><span class="trust-dot"></span>Quality Control & Stability Testing</span>
      <span class="trust-item"><span class="trust-dot"></span>FSSAI License Registration</span>
    </div>
  </div>
</div>

<!-- THREE PILLARS -->
<section id="pillars" class="section">
  <div class="container">
    <div class="reveal" style="text-align:center; max-width:640px; margin:0 auto 0;">
      <span class="label">What We Do</span>
      <h2 class="headline">Three Ways Pandey Epigen Lab<br>Serves You</h2>
      <p class="body-text" style="margin:16px auto 0; text-align:center;">Whether you are a supplement startup, a brand with FSSAI questions, or a consumer wanting honest supplement knowledge — there is a door here for you.</p>
    </div>
    <div class="pillars-grid reveal">
      <div class="pillar-card">
        <div class="pillar-icon">⚗️</div>
        <div class="pillar-title">Nutraceutical Formulation & B2B Consulting</div>
        <div class="pillar-desc">End-to-end supplement formulation, raw material sourcing, clinical validation, manufacturing oversight, and market strategy for brands, startups, and manufacturers. From protein powders and BCAAs to Ayurvedic formulations and functional foods.</div>
        <a href="#services" class="pillar-link">Explore Services →</a>
      </div>
      <div class="pillar-card">
        <div class="pillar-icon">📋</div>
        <div class="pillar-title">Regulatory Consulting & FSSAI Advisory</div>
        <div class="pillar-desc">FSSAI license registration, product approval dossiers, GMP and HACCP compliance, label claims guidance, and a dedicated regulatory forum where brands and founders get real answers to real compliance questions.</div>
        <a href="#regulatory" class="pillar-link">Get Regulatory Help →</a>
      </div>
      <div class="pillar-card">
        <div class="pillar-icon">🧪</div>
        <div class="pillar-title">Knowledge Base & Research Library</div>
        <div class="pillar-desc">An evidence-first content library for founders, manufacturers, and consumers covering formulation science, regulatory updates, quality systems, and market realities in nutraceuticals.</div>
        <a href="#insights" class="pillar-link">Open Knowledge Base →</a>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ABOUT -->
<section id="about" class="section">
  <div class="container">
    <div class="about-grid">
      <div class="about-left reveal">
        <span class="label">About</span>
        <h2 class="headline">The Science Behind Every Supplement</h2>
        <blockquote class="about-quote">
          "Real nutraceutical consulting is not about selling you a formula. It is about making sure your product actually works — on the shelf, in the lab, and in the market."
        </blockquote>
        <p class="body-text">
          India's nutraceutical market is growing at 20%+ annually. Most brands fail not because of bad intent — but bad science. Wrong actives, wrong delivery systems, wrong regulatory claims, wrong compliance. Pandey Epigen Lab exists to fix exactly that.
        </p>
        <div class="epigen-callout">
          <div class="epigen-callout-title">🧬 Why "Epigen"? The Science Explained.</div>
          <div class="epigen-callout-text">Epigenetics is the study of how food, herbs, and nutrients switch your genes on and off — without changing your DNA. Every Ayurvedic herb that survived 5,000 years works epigenetically. Modern science is just now proving what India always knew. Pandey Epigen Lab bridges that ancient wisdom with cutting-edge nutritional science — for supplements, functional foods, and health solutions that work at the cellular level.</div>
        </div>
      </div>
      <div class="about-right reveal">
        <p class="about-body">Dr. Pramod Pandey brings over a decade of research experience at the intersection of biochemistry, nutraceutical science, and industrial manufacturing. His work spans from biosensor development for early Alzheimer's detection in China, to designing nutrition-rich supplements for the Indian Defence sector, to leading plant operations and R&D at Fermentis Life Sciences, Gurugram.</p>
        <p class="about-body">What sets this practice apart is the combination of academic rigour with field-level execution. Dr. Pandey has personally handled raw material sourcing, stability testing, FSSAI documentation, clinical validation, manufacturing supervision, and post-market feedback — not in theory, but on the factory floor.</p>
        <p class="about-body">Today, Pandey Epigen Lab consults with supplement startups, established nutraceutical brands, Ayurvedic manufacturers, export-focused businesses, and consumers who deserve honest answers about the supplements they take every day.</p>
        <div class="edu-block">
          <span class="label">Education & Research</span>
          <div class="edu-item">
            <div class="edu-year">2018</div>
            <div>
              <div class="edu-detail-title">Post-Doctoral Fellowship — Photo-physics of Bio-Molecules</div>
              <div class="edu-detail-inst">Dalian Institute of Chemical Physics, Chinese Academy of Sciences, Dalian, China</div>
            </div>
          </div>
          <div class="edu-item">
            <div class="edu-year">2016</div>
            <div>
              <div class="edu-detail-title">Ph.D. in Biochemistry</div>
              <div class="edu-detail-inst">Kumaun University, Nainital, India</div>
            </div>
          </div>
          <div class="edu-item">
            <div class="edu-year">2008</div>
            <div>
              <div class="edu-detail-title">M.Sc. Organic Chemistry</div>
              <div class="edu-detail-inst">Kumaun University, Nainital, India</div>
            </div>
          </div>
          <div class="edu-item">
            <div class="edu-year">2013</div>
            <div>
              <div class="edu-detail-title">Young Scientist Award</div>
              <div class="edu-detail-inst">8th Uttarakhand State Science & Technology Congress, Doon University</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- SERVICES -->
<section id="services" class="section">
  <div class="container">
    <div class="services-intro">
      <div class="reveal">
        <span class="label">Services</span>
        <h2 class="headline">10 Ways to Build a Better Supplement Brand</h2>
      </div>
      <div class="reveal">
        <p class="body-text">Every service solves a specific, real problem nutraceutical brands face — from raw material fraud to failed regulatory submissions to products that lose potency within six months. No fluff. Only field-tested solutions.</p>
        <p class="body-text" style="margin-top:12px;">Keywords we rank for: nutraceutical consultant India · supplement formulation expert · health supplement B2B · protein powder formulation · Ayurvedic product development · functional food consultant · private label supplement India</p>
      </div>
    </div>
    <div class="services-grid reveal">
      <div class="service-card">
        <div class="service-number">01</div>
        <div class="service-title">End-to-End Product Formulation</div>
        <div class="service-desc">Science-backed formulations for nutraceuticals, health supplements, and Ayurvedic products. Concept to execution — including active delivery systems, bioavailability optimisation, and epigenetic nutrient profiling.</div>
        <span class="service-tag">Formulation · R&D · Innovation · Epigenetics</span>
      </div>
      <div class="service-card">
        <div class="service-number">02</div>
        <div class="service-title">Raw Material Sourcing & Quality Assurance</div>
        <div class="service-desc">Cost-efficient procurement of USP-grade, verified raw materials. Full quality assurance protocols to prevent adulteration, substandard actives, or overpriced supplier costs from reaching your product.</div>
        <span class="service-tag">Sourcing · QA · Supply Chain</span>
      </div>
      <div class="service-card">
        <div class="service-number">03</div>
        <div class="service-title">Packaging & Stability Optimisation</div>
        <div class="service-desc">Selection of packaging materials that protect product potency. Nitrogen-flushed packaging and advanced preservation techniques extending shelf life by up to 18 months — proven on live production lines.</div>
        <span class="service-tag">Packaging · Shelf Life · Stability</span>
      </div>
      <div class="service-card">
        <div class="service-number">04</div>
        <div class="service-title">Clinical Trial Design & Implementation</div>
        <div class="service-desc">End-to-end clinical trial support — planning, execution, and data analysis. Build legally defensible, evidence-based product claims that survive regulatory scrutiny in India and internationally.</div>
        <span class="service-tag">Clinical · Evidence · Validation</span>
      </div>
      <div class="service-card">
        <div class="service-number">05</div>
        <div class="service-title">Regulatory Compliance — FSSAI, GMP, HACCP, FDA</div>
        <div class="service-desc">Comprehensive documentation and compliance support for FSSAI product approval, GMP certification, HACCP implementation, and FDA registration. 100% approval track record. No rework, no delays, no surprises.</div>
        <span class="service-tag">FSSAI · GMP · FDA · HACCP</span>
      </div>
      <div class="service-card">
        <div class="service-number">06</div>
        <div class="service-title">Manufacturing Process Oversight</div>
        <div class="service-desc">Hands-on guidance during production to maintain batch-to-batch consistency, process efficiency, and quality compliance. Reduced Fermentis Life Sciences production cost by 12% without touching quality parameters.</div>
        <span class="service-tag">Manufacturing · Process · QC</span>
      </div>
      <div class="service-card">
        <div class="service-number">07</div>
        <div class="service-title">Quality Control & Stability Testing</div>
        <div class="service-desc">Analytical testing using HPLC, GC-MS, FTIR, HPTLC, UV-Vis spectroscopy. Verifying identity, potency, purity, and shelf-life of every batch — the same standards used for Indian Defence sector nutraceuticals.</div>
        <span class="service-tag">QC · Analytical · Testing</span>
      </div>
      <div class="service-card">
        <div class="service-number">08</div>
        <div class="service-title">Business Development & Market Strategy</div>
        <div class="service-desc">Market positioning, competitive analysis, and product differentiation for supplement brands targeting India and global markets. D2C, B2B, hospital procurement, export — strategy for every channel.</div>
        <span class="service-tag">Strategy · Market · Growth</span>
      </div>
      <div class="service-card">
        <div class="service-number">09</div>
        <div class="service-title">Customer Support & Product Feedback Analysis</div>
        <div class="service-desc">Scientific management of consumer queries, product complaints, and post-market feedback. Turn real-world consumer data into meaningful product improvements and brand loyalty.</div>
        <span class="service-tag">Consumer · Feedback · Improvement</span>
      </div>
    </div>
    <div style="margin-top:20px; text-align:center;" class="reveal">
      <a href="#contact" class="btn btn-primary">Discuss Your Requirements</a>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- REGULATORY SECTION -->
<section id="regulatory" class="section">
  <div class="container">
    <div class="reg-grid">
      <div class="reg-intro reveal">
        <span class="label">Regulatory Consulting</span>
        <h2 class="headline">FSSAI. GMP. HACCP. FDA.<br>Done Right.</h2>
        <p class="body-text">India's supplement regulatory landscape is complex, frequently updated, and widely misunderstood. Pandey Epigen Lab is your dedicated FSSAI and regulatory partner — from first license to export compliance.</p>
        <p class="body-text" style="margin-top:14px;">Most compliance failures happen because brands copy-paste old documentation or rely on consultants who have never seen the inside of a manufacturing facility. We have. Every recommendation comes from lived, hands-on experience — not just guidelines.</p>
        <div class="forum-cta">
          <div class="forum-cta-title">🏛️ Join the Regulatory Forum</div>
          <div class="forum-cta-text">Post your FSSAI question, compliance challenge, or licensing query. Get a science-based, honest answer — free, for the community. Building India's most useful nutraceutical regulatory knowledge base, one question at a time.</div>
          <a href="#forum" class="btn btn-primary" style="font-size:11px; padding:11px 24px;">Visit the Forum →</a>
        </div>
      </div>
      <div>
        <div class="reg-cards reveal">
          <div class="reg-card">
            <div class="reg-card-icon">📜</div>
            <div>
              <div class="reg-card-title">FSSAI License & Product Registration</div>
              <div class="reg-card-desc">Complete end-to-end FSSAI licensing support — basic, state, and central license registration. Product approval dossier preparation with 100% first-submission success rate.</div>
            </div>
          </div>
          <div class="reg-card">
            <div class="reg-card-icon">🏭</div>
            <div>
              <div class="reg-card-title">GMP Certification Preparation</div>
              <div class="reg-card-desc">Factory audit readiness, documentation, SOP development, and process compliance for WHO-GMP and Schedule M certification across nutraceutical and supplement manufacturing facilities.</div>
            </div>
          </div>
          <div class="reg-card">
            <div class="reg-card-icon">🔐</div>
            <div>
              <div class="reg-card-title">HACCP System Implementation</div>
              <div class="reg-card-desc">Hazard analysis, critical control point mapping, and full HACCP plan documentation for nutraceutical plants — tailored to your specific product line and manufacturing environment.</div>
            </div>
          </div>
          <div class="reg-card">
            <div class="reg-card-icon">🌍</div>
            <div>
              <div class="reg-card-title">Export Compliance — US, EU, Middle East</div>
              <div class="reg-card-desc">International regulatory strategy for brands targeting US FDA, EU EFSA, Gulf region SFDA, and Southeast Asian markets. Labelling, claims, and dossier preparation for each jurisdiction.</div>
            </div>
          </div>
          <div class="reg-card">
            <div class="reg-card-icon">🌿</div>
            <div>
              <div class="reg-card-title">Ayurvedic Drug vs Nutraceutical Classification</div>
              <div class="reg-card-desc">Confused about whether your product needs a FSSAI license or Ayush drug license? This is one of India's most common and costly compliance mistakes — get it right from the start.</div>
            </div>
          </div>
          <div class="reg-card">
            <div class="reg-card-icon">🏷️</div>
            <div>
              <div class="reg-card-title">Label Claims & Permissible Health Claims</div>
              <div class="reg-card-desc">What you can legally say on your supplement label under FSSAI regulations — and what will get your product rejected or recalled. Claim language review and compliant copy writing.</div>
            </div>
          </div>
        </div>

        <!-- FAQ Accordion -->
        <div class="reg-faq reveal">
          <span class="label" style="margin-bottom:20px;">Common Regulatory Questions</span>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <span>Do I need a FSSAI license before I start formulating my supplement?</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-a">You need a FSSAI license before manufacturing or selling in India — not before formulating. However, your formulation design must be FSSAI-compliant from day one, or you will waste time and money reformulating later. Start compliance-aware, not compliance-reactive.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <span>What is the difference between FSSAI State and Central license for supplements?</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-a">State license covers businesses with turnover up to ₹20 crore. Central license is required for manufacturers, importers, large-scale operators, and export businesses. Most supplement manufacturers need a Central license from day one — getting the wrong license wastes 3-6 months.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <span>Can I call my product "Ayurvedic" and avoid FSSAI regulations?</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-a">Only if you register under AYUSH (Ministry of AYUSH) as an Ayurvedic drug. If your product is sold as a food supplement or health food — even with Ayurvedic ingredients — it falls under FSSAI. Misclassification is one of the top reasons supplement brands get shutdown in India.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <span>How long does FSSAI product approval take in 2025?</span>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-a">With a correctly prepared dossier, basic product approval typically takes 30-90 days. Novel foods or proprietary ingredients can take 6-12 months. Incomplete dossiers — the most common mistake — can add 3-6 months of back-and-forth. Our 100% first-submission approval rate is built on getting the dossier right the first time.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- EXPERTISE -->
<section id="expertise" class="section" style="background:var(--surface);">
  <div class="container">
    <div class="exp-grid">
      <div class="reveal">
        <span class="label">Specialisations</span>
        <h2 class="headline">Every Category.<br>One Expert.</h2>
        <p class="body-text" style="margin:18px 0 32px;">Deep expertise across every major nutraceutical, supplement, and functional food category — from sports nutrition to clinical-grade Ayurvedic formulations.</p>
        <ul class="exp-list">
          <li>Custom Nutraceutical Formulation</li>
          <li>Protein Powder & BCAA Development</li>
          <li>Pre-Workout Supplement Design</li>
          <li>Collagen & Skin Health Supplements</li>
          <li>Capsule, Tablet, Powder & Liquid Forms</li>
          <li>Ayurvedic Product Development</li>
          <li>Herbal Extracts & Botanical Supplements</li>
          <li>Functional Foods & Beverages</li>
          <li>Immunity Booster Formulations</li>
          <li>Liver Health Supplement Design</li>
          <li>Gut Health — Probiotics, Prebiotics, Postbiotics</li>
          <li>Epigenetic Nutrition Formulation</li>
          <li>Innovative Delivery Systems</li>
          <li>Private Label Nutraceuticals</li>
          <li>Dietary Supplements</li>
          <li>Clinical-Grade Supplement Development</li>
          <li>Sleep & Cognitive Health Supplements</li>
          <li>Sports Nutrition — Defence Grade Standards</li>
        </ul>
      </div>
      <div class="exp-right reveal">
        <div class="highlight-box">
          <div class="hl-num">Ph.D.</div>
          <div class="hl-label">Biochemistry + Post-Doctoral Research in Bio-Molecular Photo-Physics, Chinese Academy of Sciences. Applied daily to real product development — not academic theory alone.</div>
        </div>
        <div class="highlight-box" style="background: var(--accent-lt);">
          <div class="hl-num">Defence</div>
          <div class="hl-label">Formulated nutrition-rich nutraceuticals for the Indian Defence sector — the highest purity, efficacy, and safety standard demanded by any domestic industry.</div>
        </div>
        <div class="instruments-box">
          <div class="ib-title">Analytical Instruments — Direct Hands-On Experience</div>
          <div class="instrument-tags">
            <span class="instrument-tag">HPLC</span>
            <span class="instrument-tag">GC-MS</span>
            <span class="instrument-tag">FTIR</span>
            <span class="instrument-tag">HPTLC</span>
            <span class="instrument-tag">UV-Vis</span>
            <span class="instrument-tag">Fluorimeter</span>
            <span class="instrument-tag">GC</span>
            <span class="instrument-tag">MS</span>
            <span class="instrument-tag">Polarimeter</span>
            <span class="instrument-tag">Femtosecond Transient</span>
            <span class="instrument-tag">Chem Draw</span>
            <span class="instrument-tag">Gromacs</span>
            <span class="instrument-tag">Autodoc</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- B2B -->
<section id="b2b" class="section">
  <div class="container">
    <div class="b2b-grid">
      <div class="reveal">
        <span class="label" style="color:rgba(255,255,255,0.35);">B2B Platform</span>
        <h2 class="headline" style="color:#fff;">One Consultant.<br>Your Entire<br>Supplement Business.</h2>
        <p class="b2b-body">Whether you are launching India's next protein brand, scaling an Ayurvedic line for export, developing clinical supplements for hospitals, or building a private-label range with international compliance — Pandey Epigen Lab is the single point of contact that handles everything, honestly.</p>
        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <a href="#contact" class="btn btn-primary">Partner With Us</a>
          <a href="#services" class="btn" style="background:rgba(255,255,255,0.08); color:#fff; border:1px solid rgba(255,255,255,0.15); font-size:12px; padding:13px 28px; letter-spacing:0.08em; text-transform:uppercase;">All Services →</a>
        </div>
      </div>
      <div class="b2b-right reveal">
        <div class="b2b-card">
          <div class="b2b-card-icon">🏭</div>
          <div class="b2b-card-title">Manufacturers</div>
          <div class="b2b-card-desc">GMP compliance, process optimisation, and quality control for supplement manufacturers at any scale.</div>
        </div>
        <div class="b2b-card">
          <div class="b2b-card-icon">🚀</div>
          <div class="b2b-card-title">Startups</div>
          <div class="b2b-card-desc">From formulation concept to first production run. No wasted money, no regulatory surprises, no bad science.</div>
        </div>
        <div class="b2b-card">
          <div class="b2b-card-icon">🌿</div>
          <div class="b2b-card-title">Ayurvedic Brands</div>
          <div class="b2b-card-desc">Modernise traditional Ayurvedic formulations with epigenetic science and international compliance systems.</div>
        </div>
        <div class="b2b-card">
          <div class="b2b-card-icon">📦</div>
          <div class="b2b-card-title">Private Label</div>
          <div class="b2b-card-desc">Full private-label nutraceutical development — custom formulas, branding-ready packaging, regulatory docs.</div>
        </div>
        <div class="b2b-card">
          <div class="b2b-card-icon">🌍</div>
          <div class="b2b-card-title">Export-Focused</div>
          <div class="b2b-card-desc">International compliance for US, EU, Middle East, and Southeast Asian markets — label to dossier.</div>
        </div>
        <div class="b2b-card">
          <div class="b2b-card-icon">🏥</div>
          <div class="b2b-card-title">Clinical / Hospital</div>
          <div class="b2b-card-desc">Clinical-grade supplement development for hospitals, healthcare chains, and pharma entering nutraceuticals.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KNOWLEDGE BASE -->
<section id="insights" class="section">
  <div class="container">
    <div class="reveal">
      <span class="label">Knowledge Base</span>
      <div class="kus-header-bar">
        <div class="kus-brand">
          <div class="kus-logo">KB</div>
          <div>
            <div class="kus-name">Knowledge <span>Base</span></div>
            <div class="kus-tagline">India's most honest supplement knowledge base</div>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:10px;">
          <span class="kus-domain">Independent Editorial</span>
          <p style="font-size:11px; color:rgba(255,255,255,0.4); text-align:right; max-width:280px;">No sponsored content. No brand money. Only science, only honesty.</p>
        </div>
      </div>
    </div>

    <div class="blog-topics reveal">
      <a href="#" class="topic-pill active" data-cat="all">All Topics</a>
      <a href="#" class="topic-pill" data-cat="formulation">Formulation Science</a>
      <a href="#" class="topic-pill" data-cat="regulatory">Regulatory & FSSAI</a>
      <a href="#" class="topic-pill" data-cat="ayurveda">Ayurveda + Science</a>
      <a href="#" class="topic-pill" data-cat="market">Market Trends</a>
      <a href="#" class="topic-pill" data-cat="startup">Startup Guide</a>
      <a href="#" class="topic-pill" data-cat="qc">Quality Control</a>
      <a href="#" class="topic-pill" data-cat="b2b">B2B Strategy</a>
      <a href="#" class="topic-pill" data-cat="clinical">Clinical Evidence</a>
      <a href="#" class="topic-pill" data-cat="sports">Sports Nutrition</a>
      <a href="#" class="topic-pill" data-cat="epigenetics">Epigenetics & Future</a>
      <a href="#" class="topic-pill" data-cat="consumer">Consumer Guide</a>
    </div>

    <div class="blog-grid">
      <a href="#" class="blog-card reveal">
        <div class="blog-thumb" style="background: linear-gradient(135deg, #D8EDE3, #b7dccb);">
          <span class="blog-thumb-icon">🧬</span>
        </div>
        <div class="blog-card-body">
          <span class="blog-cat">Formulation Science</span>
          <div class="blog-card-title">Why 80% of Indian Supplement Startups Fail at the Formulation Stage — and What to Do Instead</div>
          <div class="blog-excerpt">The real problem is not money or marketing. It is choosing the wrong actives, wrong delivery system, or trusting raw material suppliers without independent verification.</div>
          <div class="blog-meta"><span>Dr. Pramod Pandey</span><span>·</span><span>8 min read</span></div>
        </div>
      </a>
      <a href="#" class="blog-card reveal">
        <div class="blog-thumb" style="background: linear-gradient(135deg, #e8f0fe, #c8d8f8);">
          <span class="blog-thumb-icon">📋</span>
        </div>
        <div class="blog-card-body">
          <span class="blog-cat">Regulatory & FSSAI</span>
          <div class="blog-card-title">FSSAI 2025 Compliance Checklist for Nutraceutical Brands</div>
          <div class="blog-excerpt">Every document, every test, every claim FSSAI needs before you can legally sell your supplement in India.</div>
          <div class="blog-meta"><span>Dr. Pramod Pandey</span><span>·</span><span>6 min read</span></div>
        </div>
      </a>
      <a href="#" class="blog-card reveal">
        <div class="blog-thumb" style="background: linear-gradient(135deg, #fef3e2, #f5d9a8);">
          <span class="blog-thumb-icon">🌿</span>
        </div>
        <div class="blog-card-body">
          <span class="blog-cat">Ayurveda + Epigenetics</span>
          <div class="blog-card-title">Ashwagandha vs KSM-66 vs Sensoril: Which Extract Actually Works?</div>
          <div class="blog-excerpt">A clinical evidence review of the three most-used Ashwagandha extracts — what science says about bioavailability, epigenetic effects, and efficacy.</div>
          <div class="blog-meta"><span>Dr. Pramod Pandey</span><span>·</span><span>7 min read</span></div>
        </div>
      </a>
    </div>

    <!-- 50 Topics Table -->
    <div class="topics-table reveal">
      <span class="label">Full Blog Topic Library</span>
      <h3 class="subhead" style="margin-bottom:28px;">50 Topics Every Nutraceutical Founder & Consumer Must Read</h3>
      <div class="topics-cols">
        <div class="topics-col-head">Formulation & Science</div>
        <div class="topics-col-head reg">Regulation & Compliance</div>
        <div class="topics-col-head biz">Business, Market & Consumer</div>

        <div class="topic-row">1. Bioavailability 101: Why Most Supplements Do Nothing</div>
        <div class="topic-row">18. FSSAI vs FDA: What Exporters Must Know in 2025</div>
        <div class="topic-row no-border-right">35. How to Launch a Supplement Brand Under ₹25 Lakhs</div>

        <div class="topic-row">2. Protein Powder: Whey vs Plant vs Casein — The Real Science</div>
        <div class="topic-row">19. GMP Certification Step by Step for Indian Manufacturers</div>
        <div class="topic-row no-border-right">36. Private Label Supplements: Complete Business Model Guide</div>

        <div class="topic-row">3. The Truth About Proprietary Blends on Supplement Labels</div>
        <div class="topic-row">20. HACCP Implementation for Nutraceutical Plants</div>
        <div class="topic-row no-border-right">37. Nutraceutical Export from India: Opportunities & Pitfalls</div>

        <div class="topic-row">4. Collagen: Type I vs II vs III vs Marine — What You Actually Need</div>
        <div class="topic-row">21. Label Claims That Will Get Your Product Rejected by FSSAI</div>
        <div class="topic-row no-border-right">38. Competitive Analysis in the Indian Supplement Market 2025</div>

        <div class="topic-row">5. BCAA Ratios — 2:1:1 vs 4:1:1: The Science Explained</div>
        <div class="topic-row">22. How to Prepare a FSSAI Product Approval Dossier</div>
        <div class="topic-row no-border-right">39. D2C vs B2B Supplement Business: Honest Comparison</div>

        <div class="topic-row">6. Nitrogen Flushing: The Under-Used Tool for Supplement Shelf Life</div>
        <div class="topic-row">23. Adulterants in Indian Supplement Raw Materials — Red Flags</div>
        <div class="topic-row no-border-right">40. Ingredient Sourcing Networks in India: What to Know</div>

        <div class="topic-row">7. KSM-66 vs Sensoril vs Raw Ashwagandha: Epigenetic Evidence</div>
        <div class="topic-row">24. Stability Testing Protocol for Nutraceuticals India</div>
        <div class="topic-row no-border-right">41. How Supplement Startups Should Find a Manufacturer</div>

        <div class="topic-row">8. Liposomal vs Standard Vitamin C: Is the Price Worth It?</div>
        <div class="topic-row">25. Clinical Trials for Supplement Claims: The Real Process</div>
        <div class="topic-row no-border-right">42. Functional Foods — The Fastest Growing Nutraceutical Segment</div>

        <div class="topic-row">9. Gut Health Supplements: Probiotics, Prebiotics, Postbiotics Explained</div>
        <div class="topic-row">26. Understanding Schedule H vs OTC Supplement Classification</div>
        <div class="topic-row no-border-right">43. How to Price Your Supplement Product Correctly</div>

        <div class="topic-row">10. Mushroom Extracts: Reishi, Lion's Mane, Cordyceps — Real Evidence</div>
        <div class="topic-row">27. Ayurvedic Drug vs Nutraceutical: Which License Do You Need?</div>
        <div class="topic-row no-border-right">44. Global Nutraceutical Market Trends 2025–2030</div>

        <div class="topic-row">11. Omega-3 Quality: EPA vs DHA, Oxidation, Bioavailability</div>
        <div class="topic-row">28. FSSAI Health Claims: What You Can and Cannot Say</div>
        <div class="topic-row no-border-right">45. Why India Will Lead the Global Nutraceutical Market by 2030</div>

        <div class="topic-row">12. Curcumin: BCM-95 vs Meriva vs Piperine — Which Absorbs Best?</div>
        <div class="topic-row">29. QA vs QC in Supplement Manufacturing — What's the Difference?</div>
        <div class="topic-row no-border-right">46. Supplement Brand Differentiation: Beyond the Label</div>

        <div class="topic-row">13. Magnesium: Glycinate vs Oxide vs Citrate — Real Talk</div>
        <div class="topic-row">30. HPLC Testing for Supplement Manufacturers: Basics Explained</div>
        <div class="topic-row no-border-right">47. Hospital & Clinical Nutraceutical Procurement: B2B Guide</div>

        <div class="topic-row">14. Epigenetics & Nutrition: How Food Switches Your Genes On and Off</div>
        <div class="topic-row">31. Certificate of Analysis (COA) Reading Guide for Brands</div>
        <div class="topic-row no-border-right">48. Supplement Business Financial Modelling for Startups</div>

        <div class="topic-row">15. Pre-Workout Science: What Works, What Is Hype, What Is Dangerous</div>
        <div class="topic-row">32. Banned Substances in Sports Nutrition — India Compliance</div>
        <div class="topic-row no-border-right">49. Digital Marketing for Nutraceutical Brands in India</div>

        <div class="topic-row">16. Liver Health Supplements: NAFLD, Silymarin, TUDCA Explained</div>
        <div class="topic-row">33. GMP Audit Preparation: A Practical Checklist</div>
        <div class="topic-row no-border-right">50. Investor Pitch Deck for a Supplement Brand — What Matters</div>

        <div class="topic-row last">17. Sleep Supplements: Melatonin, Ashwagandha, L-Theanine Evidence Review</div>
        <div class="topic-row last">34. Third-Party Testing: Why It Matters and How to Choose a Lab</div>
        <div class="topic-row no-border-right last">+ New topics added weekly</div>
      </div>
      <div style="text-align:center; margin-top:28px;">
        <a href="#contact" class="btn btn-primary">Request Full Articles List →</a>
      </div>
    </div>
  </div>
</section>

<!-- REGULATORY FORUM -->
<section id="forum" class="section" style="background:var(--surface);">
  <div class="container">
    <div class="forum-grid">
      <div class="reveal">
        <span class="label">Regulatory Forum</span>
        <h2 class="headline">India's Nutraceutical<br>Regulatory Q&A Forum</h2>
        <p class="body-text" style="margin:16px 0 20px;">Ask any FSSAI, GMP, HACCP, or supplement compliance question. Get a science-based, honest answer from Dr. Pramod Pandey and the Pandey Epigen Lab community. Free. Open. No selling.</p>
        <p class="body-text" style="margin-bottom:28px;">This forum is being built as India's most useful regulatory knowledge base for supplement brands, manufacturers, Ayurvedic companies, and startup founders who cannot afford expensive legal missteps.</p>
        <div class="forum-tags">
          <span class="forum-tag">FSSAI Registration</span>
          <span class="forum-tag">Product Approval</span>
          <span class="forum-tag">GMP Audit</span>
          <span class="forum-tag">HACCP</span>
          <span class="forum-tag">Label Claims</span>
          <span class="forum-tag">Ayush vs FSSAI</span>
          <span class="forum-tag">Novel Foods</span>
          <span class="forum-tag">Export Compliance</span>
          <span class="forum-tag">FDA Registration</span>
          <span class="forum-tag">Schedule H</span>
          <span class="forum-tag">Banned Ingredients</span>
          <span class="forum-tag">COA Verification</span>
        </div>
        <div style="margin-top:28px;">
          <a href="#contact" class="btn btn-primary">Post Your Question →</a>
        </div>
      </div>
      <div class="reveal">
        <div class="forum-cta-big">
          <div class="fct-title">Have a Regulatory Question? Ask It Here.</div>
          <div class="fct-text">This is a free, community-first regulatory knowledge base. Whether you are confused about FSSAI licensing categories, need help reading a compliance notice, or want to know if your ingredient is permitted — post your question and get a real, expert answer.</div>
          <a href="#contact" class="btn" style="background:#fff; color:var(--accent); font-size:11px; padding:12px 28px; letter-spacing:0.09em; text-transform:uppercase; display:inline-block; border-radius:4px; font-weight:500;">Submit Your FSSAI Query</a>
        </div>
        <div class="forum-threads">
          <div class="forum-thread">
            <span class="forum-thread-cat">FSSAI</span>
            <div>
              <div class="forum-thread-q">Can I sell protein powder as a food supplement without a central FSSAI license?</div>
              <div class="forum-thread-meta">Answered · 3 replies · Formulation Startup</div>
            </div>
          </div>
          <div class="forum-thread">
            <span class="forum-thread-cat reg">Ayush</span>
            <div>
              <div class="forum-thread-q">My product has Ashwagandha — do I need FSSAI or Ayush license?</div>
              <div class="forum-thread-meta">Answered · 7 replies · Ayurvedic Brand</div>
            </div>
          </div>
          <div class="forum-thread">
            <span class="forum-thread-cat sci">GMP</span>
            <div>
              <div class="forum-thread-q">What are the most common reasons for GMP audit failure in India?</div>
              <div class="forum-thread-meta">Answered · 5 replies · Manufacturer</div>
            </div>
          </div>
          <div class="forum-thread">
            <span class="forum-thread-cat">FSSAI</span>
            <div>
              <div class="forum-thread-q">Can I make "boosts immunity" claim on my supplement label?</div>
              <div class="forum-thread-meta">Answered · 4 replies · D2C Brand Founder</div>
            </div>
          </div>
          <div class="forum-thread">
            <span class="forum-thread-cat reg">Export</span>
            <div>
              <div class="forum-thread-q">What certifications do I need to export supplements to the UAE?</div>
              <div class="forum-thread-meta">Answered · 6 replies · Export Business</div>
            </div>
          </div>
          <div class="forum-thread" style="border-bottom:none;">
            <span class="forum-thread-cat sci">Ingredients</span>
            <div>
              <div class="forum-thread-q">Is NMN (Nicotinamide Mononucleotide) permitted as a supplement ingredient in India?</div>
              <div class="forum-thread-meta">Open · 2 replies · Longevity Brand</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section id="process" class="section">
  <div class="container">
    <div class="reveal" style="text-align:center; max-width:520px; margin:0 auto;">
      <span class="label">How It Works</span>
      <h2 class="headline">From First Call to Market Launch</h2>
    </div>
    <div class="process-steps reveal">
      <div class="process-step">
        <div class="step-circle">01</div>
        <div class="step-title">Discovery Call</div>
        <div class="step-desc">Understand your product vision, target market, regulatory needs, and budget.</div>
      </div>
      <div class="process-step">
        <div class="step-circle">02</div>
        <div class="step-title">Formulation Design</div>
        <div class="step-desc">Science-backed formula with optimal actives, dosage, delivery system, and epigenetic nutrition logic.</div>
      </div>
      <div class="process-step">
        <div class="step-circle">03</div>
        <div class="step-title">Sourcing & Testing</div>
        <div class="step-desc">Verified raw material procurement and rigorous analytical quality testing — HPLC, GC-MS, FTIR.</div>
      </div>
      <div class="process-step">
        <div class="step-circle">04</div>
        <div class="step-title">Compliance & Docs</div>
        <div class="step-desc">Full regulatory documentation for FSSAI, GMP, HACCP, or FDA. First-submission approval guaranteed.</div>
      </div>
      <div class="process-step">
        <div class="step-circle">05</div>
        <div class="step-title">Launch & Scale</div>
        <div class="step-desc">Manufacturing oversight, market strategy, and post-launch feedback management.</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- TESTIMONIALS -->
<section id="testimonials" class="section-sm">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <span class="label">Outcomes</span>
      <h2 class="headline">Results That Speak</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card reveal">
        <div class="testi-stars">★★★★★</div>
        <div class="testi-quote">"The formulation work done for our defence nutrition line was exceptional — rigorous, compliant, and genuinely effective. FSSAI approval came on the first submission."</div>
        <div class="testi-author">Senior Purchase Officer</div>
        <div class="testi-role">Indian Defence Sector — Nutrition Programme</div>
      </div>
      <div class="testi-card reveal reveal-delay-1">
        <div class="testi-stars">★★★★★</div>
        <div class="testi-quote">"Dr. Pandey reduced our production costs by 12% without compromising a single quality parameter. His process optimisation work paid for itself in two batches."</div>
        <div class="testi-author">Operations Director</div>
        <div class="testi-role">Supplement Manufacturer, Gurugram</div>
      </div>
      <div class="testi-card reveal reveal-delay-2">
        <div class="testi-stars">★★★★★</div>
        <div class="testi-quote">"We extended shelf life by 18 months using the nitrogen-flushed packaging method he recommended. The science behind it is solid and implementation was seamless."</div>
        <div class="testi-author">Founder</div>
        <div class="testi-role">Health Supplement Startup, Delhi</div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section" style="background:var(--surface);">
  <div class="container">
    <div class="contact-grid">
      <div class="reveal">
        <span class="label">Contact</span>
        <h2 class="headline">Let's Build Something Real</h2>
        <p class="body-text" style="margin:18px 0 0;">Reach out for a no-fluff consultation. Supplement startup, FSSAI compliance issue, manufacturing challenge, regulatory forum question, or a consumer wanting honest supplement advice — start here.</p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div>
              <div class="contact-label">Mobile / WhatsApp</div>
              <div class="contact-value"><a href="tel:+919897938747">+91 98979 38747</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">✉️</div>
            <div>
              <div class="contact-label">Email — Primary</div>
              <div class="contact-value"><a href="mailto:drpplabs@gmail.com">drpplabs@gmail.com</a></div>
              <div class="contact-label" style="margin-top:8px;">Email — Research</div>
              <div class="contact-value"><a href="mailto:pp.chem24@gmail.com">pp.chem24@gmail.com</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">💼</div>
            <div>
              <div class="contact-label">LinkedIn</div>
              <div class="contact-value"><a href="https://www.linkedin.com/in/pramod-pandey-351bab68/" target="_blank">linkedin.com/in/pramod-pandey-351bab68</a></div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div>
              <div class="contact-label">Based In</div>
              <div class="contact-value">Delhi (NCR), India — Serving Clients Globally</div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal">
        <div class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Your name">
            </div>
            <div class="form-group">
              <label>Company / Brand</label>
              <input type="text" placeholder="Company name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Email *</label>
              <input type="email" placeholder="your@email.com">
            </div>
            <div class="form-group">
              <label>Phone / WhatsApp</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX">
            </div>
          </div>
          <div class="form-group">
            <label>Enquiry Type *</label>
            <select>
              <option value="">Select enquiry type...</option>
              <optgroup label="── B2B Consulting ──">
                <option>Product Formulation — New Supplement</option>
                <option>Protein / BCAA / Pre-Workout Formulation</option>
                <option>Ayurvedic Product Development</option>
                <option>Private Label Nutraceutical</option>
                <option>Raw Material Sourcing & QA</option>
                <option>Clinical Trial Design</option>
                <option>Manufacturing Oversight</option>
                <option>Quality Control & Stability Testing</option>
                <option>Business & Market Strategy</option>
                <option>Complete End-to-End Project</option>
              </optgroup>
              <optgroup label="── Regulatory Consulting ──">
                <option>FSSAI License Registration</option>
                <option>FSSAI Product Approval Dossier</option>
                <option>GMP Certification Preparation</option>
                <option>HACCP Implementation</option>
                <option>Export Compliance — US / EU / UAE</option>
                <option>Label Claims & Regulatory Review</option>
                <option>Ayush vs FSSAI Classification Help</option>
              </optgroup>
              <optgroup label="── General ──">
                <option>Regulatory Forum Question</option>
                <option>Consumer Supplement Query</option>
                <option>Research Collaboration</option>
                <option>Other</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group">
            <label>Tell Me About Your Project / Query *</label>
            <textarea placeholder="Describe your product idea, current challenges, regulatory stage, or question. The more detail you give, the better the response you will get..."></textarea>
          </div>
          <button class="btn btn-primary" style="width:100%; padding:15px; font-size:12px; letter-spacing:0.1em;" onclick="handleFormSubmit()">
            Send Enquiry → Pandey Epigen Lab
          </button>
          <p style="font-size:10px; color:var(--ink-muted); text-align:center; margin-top:4px;">Response within 24 hours · All enquiries strictly confidential · No spam ever</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-brand">Epigene Lab <span>by Dr. Pandey</span></div>
        <div class="footer-sub">Dr. Pramod Pandey · Ph.D. Biochemistry</div>
        <p class="footer-tagline">India's independent nutraceutical consultancy — formulation, FSSAI regulatory compliance, epigenetic nutrition science, and business strategy for supplement brands that want to do it right.</p>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="#services">Product Formulation</a></li>
          <li><a href="#services">Regulatory Compliance</a></li>
          <li><a href="#services">Raw Material Sourcing</a></li>
          <li><a href="#services">Clinical Trial Design</a></li>
          <li><a href="#services">Manufacturing Oversight</a></li>
          <li><a href="#b2b">B2B Consulting</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Regulatory</div>
        <ul class="footer-links">
          <li><a href="#regulatory">FSSAI License Help</a></li>
          <li><a href="#regulatory">GMP Certification</a></li>
          <li><a href="#regulatory">HACCP Implementation</a></li>
          <li><a href="#regulatory">Export Compliance</a></li>
          <li><a href="#forum">Regulatory Forum</a></li>
          <li><a href="#regulatory">Label Claims Advice</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Connect</div>
        <ul class="footer-links">
          <li><a href="tel:+919897938747">+91 98979 38747</a></li>
          <li><a href="mailto:drpplabs@gmail.com">drpplabs@gmail.com (Primary)</a></li>
          <li><a href="mailto:pp.chem24@gmail.com">pp.chem24@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/pramod-pandey-351bab68/" target="_blank">LinkedIn</a></li>
          <li><a href="#contact">Book a Consultation</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Epigene Lab by Dr. Pandey · Nutraceutical Consultant, Delhi NCR, India</span>
      <span>FSSAI · GMP · HACCP · Ph.D. Biochemistry · Post-Doc CAS China</span>
    </div>
  </div>
</footer>

<script>
// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ── MOBILE MENU ──
const mobileMenu = document.getElementById('mobile-menu');
const hamburger  = document.querySelector('.hamburger');
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
}

function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = '';
  spans[1].style.opacity   = '';
  spans[2].style.transform = '';
}

// Close menu on scroll (mobile UX best practice)
window.addEventListener('scroll', () => { if (menuOpen) closeMenu(); }, { passive: true });

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (menuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
});

// ── TOPIC PILLS ──
document.querySelectorAll('.topic-pill').forEach(pill => {
  pill.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.topic-pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── FAQ ACCORDION ──
function toggleFaq(el) {
  const item   = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── CONTACT FORM ──
function handleFormSubmit() {
  alert('Thank you for reaching out to Pandey Epigen Lab.\\n\\nDr. Pramod Pandey will respond within 24 hours.\\n\\nPrimary Email: drpplabs@gmail.com\\nResearch: pp.chem24@gmail.com\\nWhatsApp: +91 98979 38747');
}

// ── NAV ACTIVE LINK ON SCROLL ──
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
}, { passive: true });

// ── iOS SAFE AREA FIX for dynamic viewport height ──
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
}
setViewportHeight();
window.addEventListener('resize', setViewportHeight, { passive: true });

// ── SMOOTH SCROLL FIX for iOS Safari ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      if (menuOpen) closeMenu();
    }
  });
});
<\/script>

</body>
</html>
`,Um={"#hero":"/","#pillars":"/","#process":"/","#testimonials":"/","#about":"/about","#expertise":"/about","#b2b":"/about","#services":"/services","#regulatory":"/regulatory","#forum":"/forum","#insights":"/knowledge-base","#contact":"/contact"};function ae(e){if(!e||typeof document>"u")return e||"";const n=document.createElement("template");return n.innerHTML=e,n.content.querySelectorAll("a").forEach(t=>{const r=t.getAttribute("href")||"";if(r.startsWith("#")){const i=Um[r];i&&t.setAttribute("href",i)}t.getAttribute("target")==="_blank"&&!t.getAttribute("rel")&&t.setAttribute("rel","noopener noreferrer")}),n.innerHTML}function Hm(){var l;if(typeof DOMParser>"u")return{styleText:"",navHtml:"",mobileMenuHtml:"",footerHtml:"",trustBarHtml:"",sections:{}};const n=new DOMParser().parseFromString(Bm,"text/html"),t=((l=n.querySelector("style"))==null?void 0:l.textContent)||"",r=a=>{var o;return((o=n.querySelector(a))==null?void 0:o.outerHTML)||""},i=a=>r(`section#${a}`);return{styleText:t,navHtml:ae(r("nav")),mobileMenuHtml:ae(r("#mobile-menu")),footerHtml:ae(r("footer")),trustBarHtml:ae(r(".trust-bar")),sections:{hero:ae(i("hero")),pillars:ae(i("pillars")),about:ae(i("about")),services:ae(i("services")),regulatory:ae(i("regulatory")),expertise:ae(i("expertise")),b2b:ae(i("b2b")),insights:ae(i("insights")),forum:ae(i("forum")),process:ae(i("process")),testimonials:ae(i("testimonials")),contact:ae(i("contact"))}}}const oe=Hm(),pl='<div class="divider"></div>',Ts={"/":[oe.sections.hero,oe.trustBarHtml,oe.sections.pillars,pl,oe.sections.process,pl,oe.sections.testimonials],"/about":[oe.sections.about,pl,oe.sections.expertise,oe.sections.b2b],"/services":[oe.sections.services],"/regulatory":[oe.sections.regulatory],"/forum":[oe.sections.forum],"/contact":[oe.sections.contact]};function Fs(e,n){let t=document.head.querySelector(`meta[name="${e}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",e),document.head.appendChild(t)),t.setAttribute("content",n)}function fl(e,n){let t=document.head.querySelector(`link[data-react-head="${e}"]`);t||(t=document.createElement("link"),t.setAttribute("data-react-head",e),document.head.appendChild(t)),Object.entries(n).forEach(([r,i])=>t.setAttribute(r,i))}function Wm(){return C.useEffect(()=>{document.title="Pandey Epigen Lab | Dr. Pramod Pandey | Nutraceutical Consultant India | FSSAI Regulatory Expert",Fs("description","Pandey Epigen Lab — India's premier nutraceutical consulting lab by Dr. Pramod Pandey (Ph.D. Biochemistry). Supplement formulation, FSSAI licensing, GMP compliance, Ayurvedic product development, private label nutraceuticals, and regulatory consulting."),Fs("theme-color","#F7F5F0"),fl("fonts-preconnect-1",{rel:"preconnect",href:"https://fonts.googleapis.com"}),fl("fonts-preconnect-2",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}),fl("fonts-css",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"})},[]),C.useEffect(()=>{const e=document.createElement("style");return e.setAttribute("data-react-style","pandey-epigen-lab"),e.textContent=oe.styleText,document.head.appendChild(e),()=>e.remove()},[]),null}function Qr({html:e}){return h.jsx("div",{dangerouslySetInnerHTML:{__html:e}})}function Vm(){const e="https://wa.me/919897938747";return h.jsxs("div",{className:"whatsapp-widget","aria-label":"WhatsApp contact widget",children:[h.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-widget-text",children:"Connect on WhatsApp now"}),h.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-widget-button","aria-label":"Open WhatsApp chat",children:"💬"})]})}function Gn({path:e}){const n=Ts[e]||Ts["/"];return h.jsx(h.Fragment,{children:n.map((t,r)=>h.jsx(Qr,{html:t},`${e}-${r}`))})}function $m(){const e=C.useRef(null),n=Et(),t=co(),[r,i]=C.useState("all");return C.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"}),n.pathname.startsWith("/knowledge-base")||i("all")},[n.pathname]),C.useEffect(()=>{const l=e.current;if(!l)return;const a=l.querySelectorAll(".reveal"),o=new IntersectionObserver(g=>{g.forEach(b=>{b.isIntersecting&&(b.target.classList.add("visible"),o.unobserve(b.target))})},{threshold:.07,rootMargin:"0px 0px -40px 0px"});a.forEach(g=>o.observe(g));const s=l.querySelector("#mobile-menu"),u=l.querySelector(".hamburger");let m=!1;const f=()=>{if(!s||!u)return;m=!1,s.classList.remove("open");const g=u.querySelectorAll("span");g[0]&&(g[0].style.transform=""),g[1]&&(g[1].style.opacity=""),g[2]&&(g[2].style.transform="")},v=()=>{if(!s||!u)return;m=!m,s.classList.toggle("open",m);const g=u.querySelectorAll("span");m?(g[0]&&(g[0].style.transform="rotate(45deg) translate(4px, 4px)"),g[1]&&(g[1].style.opacity="0"),g[2]&&(g[2].style.transform="rotate(-45deg) translate(4px, -4px)")):(g[0]&&(g[0].style.transform=""),g[1]&&(g[1].style.opacity=""),g[2]&&(g[2].style.transform=""))},x=g=>{var L;const b=(L=g==null?void 0:g.closest)==null?void 0:L.call(g,".faq-item");if(!b)return;const F=b.classList.contains("open");l.querySelectorAll(".faq-item").forEach(re=>re.classList.remove("open")),F||b.classList.add("open")},S=()=>{var N,z,T,B,q,In,je,$n,De,zn,po,fo;const g=l.querySelector(".contact-form");if(!g)return;const b=g.querySelectorAll("input"),F=((z=(N=b[0])==null?void 0:N.value)==null?void 0:z.trim())||"",L=((B=(T=b[1])==null?void 0:T.value)==null?void 0:B.trim())||"",re=((In=(q=b[2])==null?void 0:q.value)==null?void 0:In.trim())||"",An=(($n=(je=b[3])==null?void 0:je.value)==null?void 0:$n.trim())||"",rn=((zn=(De=g.querySelector("select"))==null?void 0:De.value)==null?void 0:zn.trim())||"",Ct=((fo=(po=g.querySelector("textarea"))==null?void 0:po.value)==null?void 0:fo.trim())||"";if(!F||!re||!rn||!Ct){window.alert("Please fill all required fields: Full Name, Email, Enquiry Type, and Project/Query.");return}const ji=`New Enquiry: ${F}`,Pt=["New website enquiry details:","",`Full Name: ${F}`,`Company / Brand: ${L||"N/A"}`,`Email: ${re}`,`Phone / WhatsApp: ${An||"N/A"}`,`Enquiry Type: ${rn}`,"","Project / Query:",Ct].join(`
`),Nt=`mailto:drpplabs@gmail.com?subject=${encodeURIComponent(ji)}&body=${encodeURIComponent(Pt)}`;window.location.href=Nt};window.toggleMenu=v,window.toggleFaq=x,window.handleFormSubmit=S;const w=()=>{m&&f()},P=g=>{!m||!s||!u||!s.contains(g.target)&&!u.contains(g.target)&&f()};window.addEventListener("scroll",w,{passive:!0}),document.addEventListener("click",P);const d=()=>{const g=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${g}px`)};d(),window.addEventListener("resize",d,{passive:!0});const c=l.querySelectorAll('a[href^="/"]'),p=[];c.forEach(g=>{const b=F=>{if(F.defaultPrevented||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey)return;const L=g.getAttribute("href");L&&(F.preventDefault(),t(L),f())};g.addEventListener("click",b),p.push([g,b])});const y=l.querySelectorAll('a[href="#"]'),E=[];return y.forEach(g=>{const b=F=>F.preventDefault();g.addEventListener("click",b),E.push([g,b])}),l.querySelectorAll(".nav-links a").forEach(g=>{const b=g.getAttribute("href"),F=b==="/knowledge-base"&&n.pathname.startsWith("/knowledge-base");g.style.color=b===n.pathname||F?"var(--accent)":""}),()=>{o.disconnect(),window.removeEventListener("scroll",w),document.removeEventListener("click",P),window.removeEventListener("resize",d),p.forEach(([g,b])=>g.removeEventListener("click",b)),E.forEach(([g,b])=>g.removeEventListener("click",b)),delete window.toggleMenu,delete window.toggleFaq,delete window.handleFormSubmit}},[n.pathname,t]),h.jsxs("main",{ref:e,"aria-label":"Pandey Epigen Lab website",children:[h.jsx(Qr,{html:oe.navHtml}),h.jsx(Qr,{html:oe.mobileMenuHtml}),h.jsxs(Cm,{children:[h.jsx(Ue,{path:"/",element:h.jsx(Gn,{path:"/"})}),h.jsx(Ue,{path:"/about",element:h.jsx(Gn,{path:"/about"})}),h.jsx(Ue,{path:"/services",element:h.jsx(Gn,{path:"/services"})}),h.jsx(Ue,{path:"/regulatory",element:h.jsx(Gn,{path:"/regulatory"})}),h.jsx(Ue,{path:"/knowledge-base",element:h.jsx(jm,{activeTopic:r,onTopicChange:i})}),h.jsx(Ue,{path:"/knowledge-base/:slug",element:h.jsx(Dm,{})}),h.jsx(Ue,{path:"/forum",element:h.jsx(Gn,{path:"/forum"})}),h.jsx(Ue,{path:"/contact",element:h.jsx(Gn,{path:"/contact"})}),h.jsx(Ue,{path:"*",element:h.jsx(bm,{to:"/",replace:!0})})]}),h.jsx(Qr,{html:oe.footerHtml}),h.jsx(Vm,{})]})}function qm(){return h.jsxs(Tm,{children:[h.jsx(Wm,{}),h.jsx($m,{})]})}ml.createRoot(document.getElementById("root")).render(h.jsx(Vs.StrictMode,{children:h.jsx(qm,{})}));
