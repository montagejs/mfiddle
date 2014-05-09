montageDefine("9a6eb8c","composer/press-composer",{dependencies:["../core/core","./composer","../core/event/mutable-event"],factory:function(e,t){var n=e("../core/core").Montage,i=e("./composer").Composer,r=e("../core/event/mutable-event").MutableEvent,o=t.PressComposer=i.specialize({load:{value:function(){window.Touch?this._element.addEventListener("touchstart",this,!0):this._element.addEventListener("mousedown",this,!0)}},unload:{value:function(){window.Touch?this._element.removeEventListener("touchstart",this,!0):this._element.removeEventListener("mousedown",this,!0)}},delegate:{value:null},cancelPress:{value:function(){return this._state===o.PRESSED?(this._dispatchPressCancel(),this._endInteraction(),!0):!1}},addEventListener:{value:function(e,t,n){i.addEventListener.call(this,e,t,n),"longPress"===e&&(this._shouldDispatchLongPress=!0)}},UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2},_state:{enumerable:!1,value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{enumerable:!1,value:!1},_longPressThreshold:{enumerable:!1,value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){this._longPressThreshold!==e&&(this._longPressThreshold=e)}},_longPressTimeout:{enumberable:!1,value:null},_observedPointer:{enumerable:!1,value:null},_startInteraction:{enumerable:!1,value:function(e){if("enabled"in this.component&&!this.component.enabled||null!==this._observedPointer)return!1;var t;"touchstart"===e.type?(t=e.changedTouches.length,1===t&&(this._observedPointer=e.changedTouches[0].identifier),document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)):"mousedown"===e.type&&(this._observedPointer="mouse",document.addEventListener("mouseup",this,!1),document.addEventListener("click",this,!1)),this._element.addEventListener("dragstart",this,!1),this.component.eventManager.claimPointer(this._observedPointer,this),this._dispatchPressStart(e)}},_interpretInteraction:{value:function(e){var t,n,i;if(null===this._observedPointer)return this._endInteraction(e),void 0;for(t=!this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this),n=e.target;n!==this._element&&n&&n.parentNode;)n=n.parentNode;if(i=n===this._element,t&&"click"===e.type)return e.preventDefault(),this._endInteraction(e),void 0;if("mouseup"===e.type){if(!t&&i)return this._dispatchPress(e),this._endInteraction(e),void 0;if(!t&&!i)return this._dispatchPressCancel(e),this._endInteraction(e),void 0;this._endInteraction(e)}}},_endInteraction:{value:function(){document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this),document.removeEventListener("click",this),document.removeEventListener("mouseup",this),this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._state=o.UNPRESSED}},_changedTouchisObserved:{value:function(e){if(null===this._observedPointer)return!1;for(var t=0,n=e.length;n>t;t++)if(e[t].identifier===this._observedPointer)return t;return!1}},surrenderPointer:{value:function(e,t){var n=this.callDelegateMethod("surrenderPointer",e,t);return n!==void 0&&n===!1?!1:(this._dispatchPressCancel(),!0)}},captureTouchstart:{value:function(e){this._startInteraction(e)}},handleTouchend:{value:function(e){return null===this._observedPointer?(this._endInteraction(e),void 0):(this._changedTouchisObserved(e.changedTouches)!==!1&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._dispatchPress(e):e.preventDefault(),this._endInteraction(e)),void 0)}},handleTouchcancel:{value:function(e){(null===this._observedPointer||this._changedTouchisObserved(e.changedTouches)!==!1)&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(e),this._endInteraction(e))}},captureMousedown:{value:function(e){this._startInteraction(e)}},handleClick:{value:function(e){this._interpretInteraction(e)}},handleMouseup:{value:function(e){this._interpretInteraction(e)}},handleDragstart:{value:function(e){this._dispatchPressCancel(e),this._endInteraction()}},_createPressEvent:{enumerable:!1,value:function(e,t){var n,i;return t||(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!0,!0,null)),n=new a,n.event=t,n.type=e,n.pointer=this._observedPointer,n.targetElement=t.target,t.changedTouches&&(i=this._changedTouchisObserved(t.changedTouches))!==!1&&(n.touch=t.changedTouches[i]),n}},_dispatchPressStart:{enumerable:!1,value:function(e){if(this._state=o.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",e)),this._shouldDispatchLongPress){var t=this;this._longPressTimeout=setTimeout(function(){t._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this.dispatchEvent(this._createPressEvent("press",e)),this._state=o.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",e)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=o.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",e))}}}),a=function(){var e,t,i,o,a,l;for(e=r.specialize({type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(e){this._event=e}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(e){this._touch=e}}}),t=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],i=["clientX","clientY","pageX","pageY","screenX","screenY","target"],o=function(e){return{get:function(){return this._event[e]}}},a=function(e){return{get:function(){return this._touch?this._touch[e]:this._event[e]}}},l=t.length-1;l>=0;l--)n.defineProperty(e,t[l],o(t[l]));for(l=i.length-1;l>=0;l--)n.defineProperty(e,i[l],a(i[l]));return e}()}});