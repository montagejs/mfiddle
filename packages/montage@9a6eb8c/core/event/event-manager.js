var Montage=require("../core").Montage,UUID=require("../uuid"),MutableEvent=require("./mutable-event").MutableEvent,Serializer=require("../serialization").Serializer,Deserializer=require("../serialization").Deserializer,defaultEventManager;if("undefined"!=typeof window){window.Touch===void 0&&"ontouchstart"in window&&(window.Touch=function(){},function(){var e;document.addEventListener("touchstart",e=function(t){window.Touch=t.touches[0].constructor,document.nativeRemoveEventListener?document.nativeRemoveEventListener("touchstart",e,!0):document.removeEventListener("touchstart",e,!0),defaultEventManager&&defaultEventManager.isStoringPointerEvents&&(defaultEventManager.isStoringPointerEvents=!1,defaultEventManager.isStoringPointerEvents=!0)},!0)}());var EventListenerDescriptor=Montage.specialize({type:{value:null},listener:{value:null},capture:{value:null}});Serializer.defineSerializationUnit("listeners",function(e,t){var n,i,r,o=defaultEventManager,a=t.uuid,s=[];for(var l in o.registeredEventListeners)if(n=o.registeredEventListeners[l],i=n&&n[a])for(var u in i.listeners)r=i.listeners[u],s.push({type:l,listener:e.addObjectReference(r.listener),capture:r.capture});return s.length>0?s:void 0}),Deserializer.defineDeserializationUnit("listeners",function(e,t,n){for(var i,r=0;i=n[r];r++)t.addEventListener(i.type,i.listener,i.capture)});var NONE=Event.NONE,CAPTURING_PHASE=Event.CAPTURING_PHASE,AT_TARGET=Event.AT_TARGET,BUBBLING_PHASE=Event.BUBBLING_PHASE,FUNCTION_TYPE="function",EventManager=exports.EventManager=Montage.specialize({constructor:{value:function(){this.super()}},eventDefinitions:{value:{abort:{bubbles:!1,cancelable:!1},beforeunload:{bubbles:!1},blur:{bubbles:!1,cancelable:!1},change:{bubbles:!0,cancelable:!1},click:{bubbles:!0,cancelable:!0},close:{bubbles:!1,cancelable:!1},compositionend:{bubbles:!0,cancelable:!1},compositionstart:{bubbles:!0,cancelable:!0},compositionupdate:{bubbles:!0,cancelable:!1},contextmenu:{bubbles:!0,cancelable:!0},copy:{bubbles:!0,cancelable:!0},cut:{bubbles:!0,cancelable:!0},dblclick:{bubbles:!0,cancelable:!1},DOMActivate:{bubbles:!0,cancelable:!0,deprecated:!0},DOMMouseScroll:{bubbles:!0},drag:{bubbles:!0,cancelable:!0},dragend:{bubbles:!0,cancelable:!1},dragenter:{bubbles:!0,cancelable:!0},dragleave:{bubbles:!0,cancelable:!1},dragover:{bubbles:!0,cancelable:!0},dragstart:{bubbles:!0,cancelable:!0},drop:{bubbles:!0,cancelable:!0},error:{bubbles:function(e){return!(XMLHttpRequest.prototype.isPrototypeOf(e)||e.tagName&&"VIDEO"===e.tagName.toUpperCase()||e.tagName&&"AUDIO"===e.tagName.toUpperCase())},cancelable:!1},focus:{bubbles:!1,cancelable:!1},focusin:{bubbles:!0,cancelable:!1},focusout:{bubbles:!0,cancelable:!1},input:{bubbles:!0,cancelable:!1},keydown:{bubbles:!0,cancelable:!1},keypress:{bubbles:!0,cancelable:!1},keyup:{bubbles:!0,cancelable:!1},load:{bubbles:!1,cancelable:!1},loadend:{bubbles:!1,cancelable:!1},loadstart:{bubbles:!1,cancelable:!1},message:{bubbles:!1,cancelable:!1},mousedown:{bubbles:!0,cancelable:!0},mouseenter:{bubbles:!1,cancelable:!1},mouseleave:{bubbles:!1,cancelable:!1},mousemove:{bubbles:!0,cancelable:!0},mouseout:{bubbles:!0,cancelable:!0},mouseover:{bubbles:!0,cancelable:!0},mouseup:{bubbles:!0,cancelable:!0},mousewheel:{bubbles:!0},orientationchange:{bubbles:!1},paste:{bubbles:!0,cancelable:!0},progress:{bubbles:!1,cancelable:!1},reset:{bubbles:!0,cancelable:!1},resize:{bubbles:!1,cancelable:!1},scroll:{bubbles:function(e){return!!e.defaultView},cancelable:!1},select:{bubbles:!0,cancelable:!1},submit:{bubbles:!0,cancelable:!0},touchcancel:{bubbles:!0,cancelable:!1},touchend:{bubbles:!0,cancelable:!0},touchmove:{bubbles:!0,cancelable:!0},touchstart:{bubbles:!0,cancelable:!0},unload:{bubbles:!1,cancelable:!1},wheel:{bubbles:!0,cancelable:!0}}},_DOMPasteboardElement:{value:null,enumerable:!1},_delegate:{value:null,enumerable:!1},delegate:{enumerable:!1,get:function(){return this._delegate},set:function(e){this._delegate=e}},_application:{value:null,enumerable:!1},application:{enumerable:!1,get:function(){return this._application},set:function(e){this._application=e}},_registeredWindows:{value:null,enumerable:!1},_windowsAwaitingFinalRegistration:{value:{},enumerable:!1},initWithWindow:{enumerable:!1,value:function(e){if(this._registeredWindows)throw"EventManager has already been initialized";return this.registerWindow(e),this}},registerWindow:{enumerable:!1,value:function(e){if(e.defaultEventManager&&e.defaultEventManager!==this)throw"EventManager cannot register a window already registered to another EventManager";if(this._registeredWindows&&this._registeredWindows.indexOf(e)>=0)throw"EventManager cannot register a window more than once";if(this._registeredWindows||(this._registeredWindows=[]),e.uuid&&0!==e.uuid.length||(e.uuid=UUID.generate()),this._windowsAwaitingFinalRegistration[e.uuid]!==e){if(e.Element.prototype.nativeAddEventListener=e.Element.prototype.addEventListener,Object.defineProperty(e,"nativeAddEventListener",{configurable:!0,value:e.addEventListener}),Object.getPrototypeOf(e.document).nativeAddEventListener=e.document.addEventListener,e.XMLHttpRequest.prototype.nativeAddEventListener=e.XMLHttpRequest.prototype.addEventListener,e.Worker&&(e.Worker.prototype.nativeAddEventListener=e.Worker.prototype.addEventListener),e.MediaController&&(e.MediaController.prototype.nativeAddEventListener=e.MediaController.prototype.addEventListener),e.Element.prototype.nativeRemoveEventListener=e.Element.prototype.removeEventListener,Object.defineProperty(e,"nativeRemoveEventListener",{configurable:!0,value:e.removeEventListener}),Object.getPrototypeOf(e.document).nativeRemoveEventListener=e.document.removeEventListener,e.XMLHttpRequest.prototype.nativeRemoveEventListener=e.XMLHttpRequest.prototype.removeEventListener,e.Worker&&(e.Worker.prototype.nativeRemoveEventListener=e.Worker.prototype.removeEventListener),e.MediaController&&(e.MediaController.prototype.nativeRemoveEventListener=e.MediaController.prototype.removeEventListener),Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.addEventListener=e.Element.prototype.addEventListener=Object.getPrototypeOf(e.document).addEventListener=function(t,n,i){return e.defaultEventManager.registerEventListener(this,t,n,!!i)}}),e.Worker&&(e.Worker.prototype.addEventListener=e.addEventListener),e.MediaController&&(e.MediaController.prototype.addEventListener=e.addEventListener),Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.removeEventListener=e.Element.prototype.removeEventListener=Object.getPrototypeOf(e.document).removeEventListener=function(t,n,i){return e.defaultEventManager.unregisterEventListener(this,t,n,!!i)}}),e.Worker&&(e.Worker.prototype.removeEventListener=e.removeEventListener),e.MediaController&&(e.MediaController.prototype.removeEventListener=e.removeEventListener),e.HTMLDivElement.prototype.addEventListener!==e.Element.prototype.nativeAddEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype){var t,n,i=Object.getOwnPropertyNames(e),r=0,o=i.length;for(r;o>r;r++)t=i[r],t.match(/^HTML\w*Element$/)&&"function"==typeof t&&(n=t.prototype,n.nativeAddEventListener=n.addEventListener,n.addEventListener=e.Element.prototype.addEventListener,n.nativeRemoveEventListener=n.removeEventListener,n.removeEventListener=e.Element.prototype.removeEventListener)}Montage.defineProperty(e.Element.prototype,"eventHandlerUUID",{value:void 0,enumerable:!1}),Montage.defineProperty(e.Element.prototype,"component",{get:function(){return defaultEventManager._elementEventHandlerByUUID[this.eventHandlerUUID]},enumerable:!1}),defaultEventManager=e.defaultEventManager=exports.defaultEventManager=this,this._registeredWindows.push(e),this._windowsAwaitingFinalRegistration[e.uuid]=e,/loaded|complete|interactive/.test(e.document.readyState)?this._finalizeWindowRegistration(e):e.document.addEventListener("DOMContentLoaded",this,!0)}}},_finalizeWindowRegistration:{enumerable:!1,value:function(e){if(this._windowsAwaitingFinalRegistration[e.uuid]!==e)throw"EventManager wasn't expecting to register this window";delete this._windowsAwaitingFinalRegistration[e.uuid],this._listenToWindow(e)}},unregisterWindow:{enumerable:!1,value:function(e){if(0>this._registeredWindows.indexOf(e))throw"EventManager cannot unregister an unregistered window";if(this._registeredWindows=this._registeredWindows.filter(function(t){return e!==t}),delete e.defaultEventManager,e.Element.prototype.addEventListener=e.Element.prototype.nativeAddEventListener,Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.nativeAddEventListener}),Object.getPrototypeOf(e.document).addEventListener=e.document.nativeAddEventListener,e.XMLHttpRequest.prototype.addEventListener=e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&(e.Worker.prototype.addEventListener=e.Worker.prototype.nativeAddEventListener),e.Element.prototype.removeEventListener=e.Element.prototype.nativeRemoveEventListener,Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.nativeRemoveEventListener}),Object.getPrototypeOf(e.document).removeEventListener=e.document.nativeRemoveEventListener,e.XMLHttpRequest.prototype.removeEventListener=e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&(e.Worker.prototype.removeEventListener=e.Worker.prototype.nativeRemoveEventListener),e.HTMLDivElement.prototype.nativeAddEventListener!==e.Element.prototype.addEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var t,n;for(t in Components.interfaces)t.match(/^nsIDOMHTML\w*Element$/)&&(t=t.replace(/^nsIDOM/,""),(t=window[t])&&(n=t.prototype,n.addEventListener=n.nativeAddEventListener,delete n.nativeAddEventListener,n.removeEventListener=n.nativeRemoveEventListener,delete n.nativeRemoveEventListener))}delete e.Element.prototype.nativeAddEventListener,delete e.nativeAddEventListener,delete Object.getPrototypeOf(e.document).nativeAddEventListener,delete e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&delete e.Worker.prototype.nativeAddEventListener,delete e.Element.prototype.nativeRemoveEventListener,delete e.nativeRemoveEventListener,delete Object.getPrototypeOf(e.document).nativeRemoveEventListener,delete e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&delete e.Worker.prototype.nativeRemoveEventListener,delete e.Element.prototype.eventHandlerUUID,delete e.Element.prototype.component,this._stopListeningToWindow(e)}},unregisterWindows:{enumerable:!1,value:function(){this._registeredWindows.forEach(this.unregisterWindow)}},registeredEventListeners:{enumerable:!1,value:{}},registeredEventListenersForEventType_:{value:function(e){var t,n,i,r,o=this.registeredEventListeners[e];if(!o)return null;r={};for(t in o){n=o[t].listeners;for(i in n)r[i]=n[i]}return r}},registeredEventListenersForEventType_onTarget_:{enumerable:!1,value:function(e,t,n){var i,r;return i=t===n?n.eventManager.registeredEventListeners[e]:this.registeredEventListeners[e],i?(r=i[t.uuid],r?r.listeners:null):null}},registeredEventListenersOnTarget_:{value:function(e){var t,n,i=[];for(t in this.registeredEventListeners)n=this.registeredEventListeners[t],e.uuid in n&&i.push(n);return i}},registerEventListener:{enumerable:!1,value:function(e,t,n,i){var r,o,a,s=this.registeredEventListeners[t],l=!1,u=!1;if(e.uuid===void 0)throw Error("EventManager cannot observe a target without a uuid: "+(e.outerHTML||e));return s?((r=s[e.uuid])||(r=s[e.uuid]={target:e,listeners:{}},l=!0),o=r.listeners[n.uuid],a=i?"capture":"bubble",o?(o[a]=!0,u=!0):(o={listener:n,capture:i,bubble:!i},r.listeners[n.uuid]=o,u=!0)):(s=this.registeredEventListeners[t]={},s[e.uuid]={target:e,listeners:{}},s[e.uuid].listeners[n.uuid]={listener:n,capture:i,bubble:!i},l=!0,u=!0),l&&"function"==typeof e.nativeAddEventListener&&this._observeTarget_forEventType_(e,t),u}},unregisterEventListener:{enumerable:!1,value:function(e,t,n,i){var r,o,a,s,l,u=this.registeredEventListeners[t];if(u&&(r=u[e.uuid])){if(o=r.listeners[n.uuid],!o){for(s in r.listeners)if(l=r.listeners[s].listener,l.originalListener&&l.originalListener.uuid===n.uuid){o=r.listeners[s],n=l;break}if(!o)return}a=i?"capture":"bubble",o[a]=!1,o.bubble||o.capture||(delete r.listeners[n.uuid],0===Object.keys(r.listeners).length&&(delete u[e.uuid],0===Object.keys(u).length&&(delete this.registeredEventListeners[t],this._stopObservingTarget_forEventType_(e,t))))}}},actualDOMTargetForEventTypeOnTarget:{value:function(e,t){if(t.nativeAddEventListener){if(t.defaultView)return t;var n,i=this.eventDefinitions[e];return i?(n=typeof i.bubbles===FUNCTION_TYPE?i.bubbles(t):i.bubbles,n?t.screen?t.document:t.ownerDocument:t):t}return null}},_observedTarget_byEventType_:{value:{}},_observeTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;!(n=this.actualDOMTargetForEventTypeOnTarget(t,e))||this._observedTarget_byEventType_[t]&&this._observedTarget_byEventType_[t][n.uuid]||(this._observedTarget_byEventType_[t]||(this._observedTarget_byEventType_[t]={}),this._observedTarget_byEventType_[t][n.uuid]=this,n.nativeAddEventListener(t,this,!0))}},_stopObservingTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;n=this.actualDOMTargetForEventTypeOnTarget(t,e),n&&(delete this._observedTarget_byEventType_[t][n.uuid],n.nativeRemoveEventListener(t,this,!0))}},_activationHandler:{enumerable:!0,value:null},_listenToWindow:{enumerable:!1,value:function(e){if(!this._activationHandler){var t=this;this._activationHandler=function(e){var n,i=e.type;if("focus"===i||"mousedown"===i||"touchstart"===i)if(e.changedTouches){n=e.changedTouches.length;for(var r=0;n>r;r++)t._prepareComponentsForActivation(e.changedTouches[r].target)}else t._prepareComponentsForActivation(e.target)}}if(e.Touch?e.document.nativeAddEventListener("touchstart",this._activationHandler,!0):e.document.nativeAddEventListener("mousedown",this._activationHandler,!0),e.document.nativeAddEventListener("focus",this._activationHandler,!0),this.application){var n,i=this.registeredEventListenersOnTarget_(this.application);for(n in i)this._observeTarget_forEventType_(e,n)}}},_stopListeningToWindow:{enumerable:!1,value:function(e){var t,n=this.registeredEventListenersOnTarget_(this.application),i=this.registeredEventListenersOnTarget_(e);for(t in n)this._stopObservingTarget_forEventType_(e,t);for(t in i)this._stopObservingTarget_forEventType_(e,t)}},reset:{enumerable:!1,value:function(){var e,t,n,i;for(e in this.registeredEventListeners){t=this.registeredEventListeners[e];for(n in t.targets)i=t.targets[n],this._stopObservingTarget_forEventType_(i.target,e)}this.registeredEventListeners={},this._claimedPointers={}}},unload:{enumerable:!1,value:function(){this._stopListening()}},methodNameForBubblePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var i=n?t+"+"+n:t;return e[i]||(e[i]="handle"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_methodNameForCapturePhaseByEventType_:{value:{}},methodNameForCapturePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var i=n?t+"+"+n:t;return e[i]||(e[i]="capture"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_claimedPointers:{enumerable:!1,distinct:!0,value:{}},componentClaimingPointer:{value:function(e){return this._claimedPointers[e]}},isPointerClaimedByComponent:{value:function(e,t){if(!t)throw"Must specify a valid component to see if it claims the specified pointer, '"+t+"' is not valid.";return this._claimedPointers[e]===t}},claimPointer:{value:function(e,t){if(!e&&0!==e)throw"Must specify a valid pointer to claim, '"+e+"' is not valid.";if(!t)throw"Must specify a valid component to claim a pointer, '"+t+"' is not valid.";var n=this._claimedPointers[e];return n===t?!0:n?n.surrenderPointer(e,t)?(this._claimedPointers[e]=t,!0):!1:(this._claimedPointers[e]=t,!0)}},forfeitPointer:{value:function(e,t){if(t!==this._claimedPointers[e])throw"Not allowed to forfeit pointer '"+e+"' claimed by another component";delete this._claimedPointers[e]}},forfeitAllPointers:{value:function(e){var t,n;for(t in this._claimedPointers)n=this._claimedPointers[t],e===n&&delete this._claimedPointers[t]}},_isStoringPointerEvents:{enumerable:!1,value:!1},isStoringPointerEvents:{enumerable:!0,get:function(){return this._isStoringPointerEvents},set:function(e){e===!0?this._isStoringPointerEvents||(this._isStoringPointerEvents=!0,window.Touch&&Object.defineProperty(Touch.prototype,"velocity",{get:function(){return defaultEventManager.pointerMotion(this.identifier).velocity},set:function(){}})):(this._isStoringPointerEvents=!1,this._pointerStorage.memory={},this._isMouseDragging=!1)}},_isStoringMouseEventsWhileDraggingOnly:{enumerable:!1,value:!0},isStoringMouseEventsWhileDraggingOnly:{enumerable:!0,get:function(){return this._isStoringMouseEventsWhileDraggingOnly},set:function(e){this._isStoringMouseEventsWhileDraggingOnly=e===!0?!0:!1}},_isMouseDragging:{enumerable:!1,value:!1},_pointerStorage:{enumerable:!1,value:{memory:{},add:function(e,t){this.memory[e]||(this.memory[e]={data:Array(32),size:0,pos:0}),this.memory[e].data[this.memory[e].pos]=t,this.memory[e].size<this.memory[e].data.length&&this.memory[e].size++,this.memory[e].pos=(this.memory[e].pos+1)%this.memory[e].data.length},remove:function(e){delete this.memory[e]},clear:function(e){this.memory[e]&&(this.memory[e].size=0)},getMemory:function(e){return this.memory[e]},isStored:function(e){return this.memory[e]&&this.memory[e].size>0},storeEvent:function(e){var t;switch(e.type){case"mousedown":defaultEventManager._isMouseDragging=!0;case"mousemove":defaultEventManager._isStoringMouseEventsWhileDraggingOnly?defaultEventManager._isMouseDragging&&(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}})):(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}}));break;case"mouseup":this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return defaultEventManager.pointerMotion("mouse").velocity},set:function(){}});break;case"touchstart":case"touchmove":for(t=0;e.touches.length>t;t++)this.add(e.touches[t].identifier,{clientX:e.touches[t].clientX,clientY:e.touches[t].clientY,timeStamp:e.timeStamp});break;case"touchend":for(t=0;e.changedTouches.length>t;t++)this.add(e.changedTouches[t].identifier,{clientX:e.changedTouches[t].clientX,clientY:e.changedTouches[t].clientY,timeStamp:e.timeStamp})}},removeEvent:function(e){var t;switch(e.type){case"mouseup":defaultEventManager._isMouseDragging=!1,defaultEventManager._isStoringMouseEventsWhileDraggingOnly&&this.clear("mouse");break;case"touchend":for(t=0;e.changedTouches.length>t;t++)this.remove(e.changedTouches[t].identifier)}}}},_getPointerVelocityData:{enumerable:!1,value:function(e){var t,n,i,r,o,a,s,l,u,c=0,h=!0,d={x:[],y:[],time:[]};for(t=defaultEventManager._pointerStorage.getMemory(e),n=t.data.length,i=t.data[(t.pos-1+n)%n],r=o=a=i.timeStamp,s=i.clientX,l=i.clientY;h&&o>r-350&&t.size>c;)i=t.data[(t.pos-c-1+n)%n],o=i.timeStamp,u=s*s+l*l,u>2&&50>=a-o?(d.x.push(i.clientX),d.y.push(i.clientY),d.time.push(o),a=o,s=i.clientX,l=i.clientY,c++):h=!1;return d}},_fitPointerCurve:{enumerable:!1,value:function(e,t){var n,i,r,o,a,s,l,u,c,h,d,f,p,m,v,g,y,b,_,w,M,T,E,C,x,P,S,D,k,O,L,A,z,N,I,j,F,R,Y=1e-4,H=t.length;do{for(d=0,f=0,p=0,m=0,v=0,g=0,b=0,_=0,w=0,M=0,T=0,E=0,x=0,P=0,S=0,D=0,k=0,O=0,A=0,z=0,N=0,I=0,j=0,F=0,h=0;H>h;h++)a=t[h],s=a.t,u=s*s,c=u*s,l=a.v,y=Y*(6*(u-s)-c+2),C=6*Y*(c-2*u+s),L=6*Y*(u-c),R=2*Y*c,g+=y*y,E+=C*C,O+=L*L,F+=R*R,d+=l*y,b+=l*C,x+=l*L,A+=l*R,p-=y,w-=C,S-=L,N-=R,f-=y*s,_-=C*s,P-=L*s,z-=R*s,m-=y*u,M-=C*u,D-=L*u,I-=R*u,v-=y*c,T-=C*c,k-=L*c,j-=R*c;Y*=2}while(0===g||0===E||0===O||0===F);for(s=Y/g,d*=s,f*=3*s,p*=s,m*=3*s,v*=s,s=Y/E,b*=s,_*=3*s,w*=s,M*=3*s,T*=s,s=Y/O,x*=s,P*=3*s,S*=s,D*=3*s,k*=s,s=Y/F,A*=s,z*=3*s,N*=s,I*=3*s,j*=s,g=e[0],E=e[1],O=e[2],F=e[3],n=3*(E-O)+F-g,i=g+O-2*E,r=E-g,o=g,h=0;20>h;h++)s=d+o*p+r*f+i*m+n*v,g+=s,o+=s,n-=s,i+=s,r-=s,s=b+o*w+r*_+i*M+n*T,E+=s,n+=3*s,i-=s+s,r+=s,s=x+o*S+r*P+i*D+n*k,O+=s,n-=3*s,i+=s,s=A+o*N+r*z+i*I+n*j,F+=s,n+=s;e[0]=g,e[1]=E,e[2]=O,e[3]=F}},_pointerBezierValue:{enumerable:!1,value:function(e,t){var n=1-e;return n*n*n*t[0]+3*n*n*e*t[1]+3*n*e*e*t[2]+e*e*e*t[3]}},_calculatePointerVelocity:{enumerable:!1,value:function(e,t){var n,i,r=e.length,o=e[0],a=e[0],s=0;for(i=1;r>i;i++)o>e[i]&&(o=e[i],s=i);if(n=a-o){if(r>5){var l,u,c,h=[];for(i=0;r>i;i++)h[i]={v:t[i],t:(e[i]-o)/n};return l=h[s].v,u=h[0].v,c=[l,(2*l+u)/3,(l+2*u)/3,u],this._fitPointerCurve(c,h),5e3*(this._pointerBezierValue(.8,c)-this._pointerBezierValue(.6,c))/n}return r>1?1e3*(t[0]-t[s])/n:0}return 0}},pointerMotion:{value:function(e){if(defaultEventManager._pointerStorage.isStored(e)){var t={};return Object.defineProperties(t,{_data:{enumerable:!1,writable:!0,value:null},_x:{enumerable:!1,writable:!0,value:null},_y:{enumerable:!1,writable:!0,value:null},_speed:{enumerable:!1,writable:!0,value:null},_angle:{enumerable:!1,writable:!0,value:null},x:{get:function(){return null===this._x&&(null===this._data&&(this._data=defaultEventManager._getPointerVelocityData(e)),this._x=defaultEventManager._calculatePointerVelocity(this._data.time,this._data.x)),this._x},set:function(){}},y:{get:function(){return null===this._y&&(null===this._data&&(this._data=defaultEventManager._getPointerVelocityData(e)),this._y=defaultEventManager._calculatePointerVelocity(this._data.time,this._data.y)),this._y},set:function(){}},speed:{get:function(){return null===this._speed&&(this._speed=Math.sqrt(this.x*this.x+this.y*this.y)),this._speed},set:function(){}},angle:{get:function(){return null===this._angle&&(this._angle=Math.atan2(this.y,this.x)),this._angle},set:function(){}}}),{velocity:t}}return void 0}},monitorDOMModificationInEventHandling:{value:!1},domModificationEventHandler:{value:Montage.specialize({handleEvent:{value:function(){throw"DOM Modified"}},captureDOMSubtreeModified:{value:function(){throw"DOMSubtreeModified"}},captureDOMAttrModified:{value:function(){throw"DOMAttrModified"}},captureDOMCharacterDataModified:{value:function(){throw"DOMCharacterDataModified"}}})},handleEvent:{enumerable:!1,value:function(e){this.monitorDOMModificationInEventHandling&&(document.body.addEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0));var t,n,i,r,o,a,s,l,u,c,h,d,f,p,m=e.type,v=e.bubbles;for("DOMContentLoaded"===m&&(t=e.target.defaultView,t&&this._windowsAwaitingFinalRegistration[t.uuid]&&(this._finalizeWindowRegistration(t),e.target.removeEventListener("DOMContentLoaded",this,!0))),p="boolean"!=typeof e.propagationStopped?MutableEvent.fromEvent(e):e,u=Element.isElement(p.target)||p.target instanceof Document||p.target===window?this._eventPathForDomTarget(p.target):this._eventPathForTarget(p.target),d=p.target.identifier?this.methodNameForCapturePhaseOfEventType(m,p.target.identifier):null,f=p.target.identifier?this.methodNameForBubblePhaseOfEventType(m,p.target.identifier):null,c=this.methodNameForCapturePhaseOfEventType(m),h=this.methodNameForBubblePhaseOfEventType(m),this.delegate&&typeof this.delegate.willDistributeEvent===FUNCTION_TYPE&&this.delegate.willDistributeEvent(p),this._isStoringPointerEvents&&this._pointerStorage.storeEvent(p),p.eventPhase=CAPTURING_PHASE,n=u.length-1;!p.propagationStopped&&(i=u[n]);n--)if(p.currentTarget=i,r=this.registeredEventListenersForEventType_onTarget_(m,i))for(s=Object.keys(r),o=0;r&&!p.immediatePropagationStopped&&(a=r[s[o]]);o++)a.capture&&(l=a.listener,d&&typeof l[d]===FUNCTION_TYPE?l[d](p):typeof l[c]===FUNCTION_TYPE?l[c](p):typeof l.handleEvent===FUNCTION_TYPE?l.handleEvent(p):typeof l!==FUNCTION_TYPE||l.__isConstructor__||l.call(i,p));if(!p.propagationStopped&&(p.eventPhase=AT_TARGET,p.currentTarget=i=p.target,r=this.registeredEventListenersForEventType_onTarget_(m,i)))for(s=Object.keys(r),o=0;r&&!p.immediatePropagationStopped&&(a=r[s[o]]);o++)l=a.listener,a.capture&&(d&&typeof l[d]===FUNCTION_TYPE?l[d](p):typeof l[c]===FUNCTION_TYPE?l[c](p):typeof l.handleEvent===FUNCTION_TYPE?l.handleEvent(p):typeof l===FUNCTION_TYPE&&l.call(i,p)),a.bubble&&(f&&typeof l[f]===FUNCTION_TYPE?l[f](p):typeof l[h]===FUNCTION_TYPE?l[h](p):typeof l.handleEvent===FUNCTION_TYPE?l.handleEvent(p):typeof l===FUNCTION_TYPE&&l.call(i,p));for(p.eventPhase=BUBBLING_PHASE,n=0;v&&!p.propagationStopped&&(i=u[n]);n++)if(p.currentTarget=i,r=this.registeredEventListenersForEventType_onTarget_(m,i))for(s=Object.keys(r),o=0;r&&!p.immediatePropagationStopped&&(a=r[s[o]]);o++)a.bubble&&(l=a.listener,f&&typeof l[f]===FUNCTION_TYPE?l[f](p):typeof l[h]===FUNCTION_TYPE?l[h](p):typeof l.handleEvent===FUNCTION_TYPE?l.handleEvent(p):typeof l===FUNCTION_TYPE&&l.call(i,p));p.eventPhase=NONE,p.currentTarget=null,this._isStoringPointerEvents&&this._pointerStorage.removeEvent(e),this.monitorDOMModificationInEventHandling&&(document.body.removeEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0))}},_prepareComponentsForActivation:{value:function(e){var t,n,i=e,r=i&&i.defaultView?i.defaultView:window,o=r.document?r.document:document,a=!1,s=null;do switch(i&&(n=this.eventHandlerForElement(i),n&&(a||(a=!0,s=this._findActiveTarget(n)),n._preparedForActivationEvents||(n._prepareForActivationEvents(),n._preparedForActivationEvents=!0))),t=i,i){case r:i=null;break;case o:i=r;break;case o.documentElement:i=o;break;default:i=i.parentNode}while(i&&t!==i);this.activeTarget=s}},_findActiveTarget:{value:function(e){for(var t=null,n={};!t&&e&&!(e.uuid in n);)n[e.uuid]=e,e.acceptsActiveTarget?t=e:e=e.nextTarget;return t}},_eventPathForTarget:{enumerable:!1,value:function(e){if(!e)return[];var t=e,n=this.application,i=[],r={};r[e.uuid]=e;do t.uuid in r||(i.push(t),r[t.uuid]=t),t=t.nextTarget,(!t||t.uuid in r)&&(t=n),t&&t.uuid in r&&(t=null);while(t);return i}},_eventPathForDomTarget:{enumerable:!1,value:function(e){if(!e)return[];var t,n=e,i=n&&n.defaultView?n.defaultView:window,r=i.document?i.document:document,o=this.application,a=[];do switch(n!==e&&a.push(n),t=n,n){case o:n=n.parentApplication,n&&(o=n);break;case i:n=o;break;case r:n=i;break;case r.documentElement:n=r;break;default:n=n.parentNode,n||(n=o)}while(n&&t!==n);return a}},_elementEventHandlerByUUID:{enumerable:!1,value:{}},registerEventHandlerForElement:{enumerable:!1,value:function(e,t){var n=this.eventHandlerForElement(t);n&&this.unregisterEventHandlerForElement(t),this._elementEventHandlerByUUID[t.eventHandlerUUID=e.uuid]=e}},unregisterEventHandlerForElement:{enumerable:!1,value:function(e){delete this._elementEventHandlerByUUID[e.eventHandlerUUID],delete e.eventHandlerUUID}},eventHandlerForElement:{enumerable:!1,value:function(e){return this._elementEventHandlerByUUID[e.eventHandlerUUID]}},_activeTarget:{value:null},activeTarget:{get:function(){return this._activeTarget||this.application},set:function(e){e||(e=this.application),e===this._activeTarget||this.activeTarget&&!this.activeTarget.surrendersActiveTarget(e)||(e.willBecomeActiveTarget(this.activeTarget),this._activeTarget=e,e.didBecomeActiveTarget())}}})}