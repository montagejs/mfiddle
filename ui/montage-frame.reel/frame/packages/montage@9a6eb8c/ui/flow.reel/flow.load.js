montageDefine("9a6eb8c","ui/flow.reel/flow",{dependencies:["../../core/core","../component","frb/observers","./flow-bezier-spline","../../core/range-controller","../../core/deprecate"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../component").Component),i=e("frb/observers").observeProperty,r=e("./flow-bezier-spline").FlowBezierSpline,a=e("../../core/range-controller").RangeController,o=e("../../core/deprecate").deprecationWarning;t.Flow=n.specialize({constructor:{value:function(){this.super(),this._visibleIndexes=[],this._slideOffsets={},this.defineBinding("_numberOfIterations",{"<-":"_frustumController.content.length"}),this.addOwnPropertyChangeListener("_numberOfIterations",this),window.addEventListener("resize",this,!1)}},slotContent:{serializable:!0,value:null},__flowTranslateComposer:{value:null},_flowTranslateComposer:{get:function(){return this.__flowTranslateComposer},set:function(e){this.__flowTranslateComposer&&(this.__flowTranslateComposer.removeEventListener("translateStart",this,!1),this.__flowTranslateComposer.removeEventListener("translateEnd",this,!1)),this.__flowTranslateComposer=e,this.__flowTranslateComposer.addEventListener("translateStart",this,!1),this.__flowTranslateComposer.addEventListener("translateEnd",this,!1)}},handleTranslateStart:{value:function(){this.callDelegateMethod("didTranslateStart",this)}},handleTranslateEnd:{value:function(){this.callDelegateMethod("didTranslateEnd",this)}},_scrollingMode:{value:"linear"},_transform:{value:null},_transformCss:{value:null},_perspective:{value:null},scrollingMode:{serializable:!0,get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{seriazable:!0,get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_repetition:{value:null},momentumDuration:{serializable:!0,value:650},_splinePaths:{value:null},splinePaths:{enumerable:!1,get:function(){return this._splinePaths||(this._splinePaths=[]),this._splinePaths},set:function(e){this._splinePaths=e}},_appendPath:{value:function(e){var t,n,i=new r,a=e.knots,o=e.knots.length,s=[],l=[],u=[],c=[];i.parameters={};for(t in e.units)i.parameters[t]={data:[],units:e.units[t]};for(t=0;o>t;t++){s[t]=a[t].knotPosition,u[t]=a[t].previousHandlerPosition,l[t]=a[t].nextHandlerPosition,c[t]=a[t].previousDensity;for(n in e.units)i.parameters[n].data.push(a[t][n])}i.knots=s,i.previousHandlers=u,i.nextHandlers=l,i.densities=c,i._computeDensitySummation(),this.splinePaths.push(i),e.hasOwnProperty("headOffset")||(e.headOffset=0),e.hasOwnProperty("tailOffset")||(e.tailOffset=0),this._paths.push(e),this._updateLength()}},_paths:{value:null},paths:{get:function(){var e,t,n,i,r,a,o,s=this.splinePaths.length,l=[];for(r=0;s>r;r++){for(t=this.splinePaths[r].knots.length,e={knots:[],units:{}},a=0;t>a;a++)i={knotPosition:this.splinePaths[r].knots[a]},this.splinePaths[r].nextHandlers&&this.splinePaths[r].nextHandlers[a]&&(i.nextHandlerPosition=this.splinePaths[r].nextHandlers[a]),this.splinePaths[r].previousHandlers&&this.splinePaths[r].previousHandlers[a]&&(i.previousHandlerPosition=this.splinePaths[r].previousHandlers[a]),this.splinePaths[r].densities&&this.splinePaths[r].densities[a]&&(i.previousDensity=this.splinePaths[r].densities[a],i.nextDensity=this.splinePaths[r].densities[a]),e.knots.push(i);for(a in this.splinePaths[r].parameters)for(e.units[a]=this.splinePaths[r].parameters[a].units,n=this.splinePaths[r].parameters[a].data.length,o=0;n>o;o++)e.knots[o][a]=this.splinePaths[r].parameters[a].data[o];e.headOffset=this._paths[r].hasOwnProperty("headOffset")?this._paths[r].headOffset:0,e.tailOffset=this._paths[r].hasOwnProperty("tailOffset")?this._paths[r].tailOffset:0,l.push(e)}return l},set:function(e){var t,n=e.length;for(this._splinePaths=[],this._paths=[],t=0;n>t;t++)this._appendPath(e[t]);this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_cameraElement:{value:null},_cameraPosition:{value:[0,0,800]},cameraPosition:{get:function(){return this._cameraPosition},set:function(e){this._cameraPosition=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_cameraTargetPoint:{value:[0,0,0]},cameraTargetPoint:{get:function(){return this._cameraTargetPoint},set:function(e){this._cameraTargetPoint=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_cameraFov:{value:50},cameraFov:{get:function(){return this._cameraFov},set:function(e){this._cameraFov=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_cameraRoll:{value:0},cameraRoll:{get:function(){return this._cameraRoll},set:function(e){this._cameraRoll=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_stride:{value:0},stride:{get:function(){return this._stride},set:function(e){this._stride=e}},_scrollingTransitionDurationMiliseconds:{value:500},_scrollingTransitionDuration:{value:"500ms"},scrollingTransitionDuration:{get:function(){return this._scrollingTransitionDuration},set:function(e){var t,n,i=e+"";i.length,(n=/^(\d+)ms$/.exec(i))?t=+n[1]:(n=/^(\d+)s$/.exec(i))?t=1e3*+n[1]:(t=+i,i+="ms"),isNaN(t)||this._scrollingTransitionDurationMiliseconds===t||(this._scrollingTransitionDurationMiliseconds=t,this._scrollingTransitionDuration=i)}},hasSelectedIndexScrolling:{value:!1},selectedIndexScrollingOffset:{value:0},_handleSelectedIndexesChange:{value:function(e){this.hasSelectedIndexScrolling&&e[0]&&this.startScrollingIndexToOffset(Math.floor(this.contentController.content.indexOf(e[0].object)/this._paths.length),this.selectedIndexScrollingOffset)}},_timingFunctions:{value:{ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}},_scrollingTransitionTimingFunctionBezier:{value:[.25,.1,.25,1]},_scrollingTransitionTimingFunction:{value:"ease"},scrollingTransitionTimingFunction:{get:function(){return this._scrollingTransitionTimingFunction},set:function(e){var t,n,i=e+"";if(this._timingFunctions.hasOwnProperty(i))this._scrollingTransitionTimingFunction=i,this._scrollingTransitionTimingFunctionBezier=this._timingFunctions[i];else if("cubic-bezier("===i.substr(0,13)&&")"===i.substr(i.length-1,1)&&(t=i.substr(13,i.length-14).split(","),4===t.length)){for(n=0;4>n;n++)if(t[n]-=0,isNaN(t[n]))return;0>t[0]?t[0]=0:t[0]>1&&(t[0]=1),0>t[2]?t[2]=0:t[2]>1&&(t[2]=1),this._scrollingTransitionTimingFunction="cubic-bezier("+t+")",this._scrollingTransitionTimingFunctionBezier=t}}},_computeCssCubicBezierValue:{value:function(e,t){var n,i,r,a=.5,o=.25;for(r=0;20>r;r++)n=a*a,i=1-a,3*(i*i*a*t[0]+i*n*t[2])+n*a>e?a-=o:a+=o,o*=.5;return n=a*a,i=1-a,3*(i*i*a*t[1]+i*n*t[3])+n*a}},_isTransitioningScroll:{value:!1},stopScrolling:{value:function(){this._isTransitioningScroll=!1}},startScrollingIndexToOffset:{value:function(e,t){this._scrollingOrigin=this.scroll,this._scrollingDestination=e-t,this._scrollingDestination>this._length?this._scrollingDestination=this._length:0>this._scrollingDestination&&(this._scrollingDestination=0),this._isScrolling=!0,this._scrollingStartTime=Date.now(),this._isTransitioningScroll=!0,this.needsDraw=!0,this.callDelegateMethod("didTranslateStart",this)}},_isCameraUpdated:{value:!0},_width:{value:null},_height:{value:null},_boundingBoxSize:{value:[200,200,0]},boundingBoxSize:{serializable:!0,get:function(){return this._boundingBoxSize},set:function(e){this._boundingBoxSize=e,this.elementsBoundingSphereRadius=.5*Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),this._needsComputeVisibleRange=!0}},_elementsBoundingSphereRadius:{value:283},elementsBoundingSphereRadius:{get:function(){return this._elementsBoundingSphereRadius},set:function(e){this._elementsBoundingSphereRadius!==e&&(this._elementsBoundingSphereRadius=e,this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},_halfPI:{value:.5*Math.PI},_doublePI:{value:2*Math.PI},_computeFrustumNormals:{value:function(){var e,t,n,i,r,a,o,s,l,u=.5*this.cameraFov*this._doublePI/360,c=Math.sin(u),h=Math.cos(u),d=c*this._width/this._height,p=this.cameraTargetPoint[0]-this.cameraPosition[0],f=this.cameraTargetPoint[1]-this.cameraPosition[1],m=this.cameraTargetPoint[2]-this.cameraPosition[2],v=this._halfPI-Math.atan2(m,p),g=p*Math.sin(v)+m*Math.cos(v),_=this._halfPI-Math.atan2(g,f),b=[[h,0,d],[-h,0,d],[0,h,c],[0,-h,c]],y=[];for(l=0;4>l;l++)s=b[l],e=s[0],t=s[1]*Math.cos(-_)-s[2]*Math.sin(-_),n=s[1]*Math.sin(-_)+s[2]*Math.cos(-_),i=e*Math.cos(-v)-n*Math.sin(-v),r=t,a=e*Math.sin(-v)+n*Math.cos(-v),o=1/Math.sqrt(i*i+r*r+a*a),y.push([i*o,r*o,a*o]);return y}},_segmentsIntersection:{value:function(e,t){for(var n,i,r=0,a=0,o=[];e.length>r&&t.length>a;)e[r][0]>=t[a][1]?a++:e[r][1]<=t[a][0]?r++:(n=e[r][0]>=t[a][0]?e[r][0]:t[a][0],i=e[r][1]<=t[a][1]?e[r][1]:t[a][1],o.push([n,i]),e[r][1]<t[a][1]?r++:e[r][1]>t[a][1]?a++:(r++,a++));return o}},_computeVisibleRange:{value:function(e){var t,n,i,r,a=e._knots.length-1,o=this._cameraPosition[0],s=this._cameraPosition[1],l=this._cameraPosition[2],u=this._computeFrustumNormals(),c=[],h=[],d=[],p=this._elementsBoundingSphereRadius,f=e._knots,m=e._nextHandlers,v=e._previousHandlers,g=[],_=[];for(i=0;a>i;i++)if(t=u[0],c=e.directedPlaneBezierIntersection(o-t[0]*p,s-t[1]*p,l-t[2]*p,u[0],f[i],m[i],v[i+1],f[i+1],g),c.length&&(t=u[1],h=e.directedPlaneBezierIntersection(o-t[0]*p,s-t[1]*p,l-t[2]*p,u[1],f[i],m[i],v[i+1],f[i+1],g),h.length&&(n=this._segmentsIntersection(c,h),n.length&&(t=u[2],c=e.directedPlaneBezierIntersection(o-t[0]*p,s-t[1]*p,l-t[2]*p,u[2],f[i],m[i],v[i+1],f[i+1],g),n=this._segmentsIntersection(c,n),n.length))))for(t=u[3],c=e.directedPlaneBezierIntersection(o-t[0]*p,s-t[1]*p,l-t[2]*p,u[3],f[i],m[i],v[i+1],f[i+1],g),n=this._segmentsIntersection(c,n),r=0;n.length>r;r++)d.push([i,n[r][0],n[r][1]]);var b,y,w,E,P,M,S,C=e._densities;for(i=0;d.length>i;i++)b=C[d[i][0]],y=C[d[i][0]+1],w=d[i][0]?e._densitySummation[d[i][0]-1]:0,E=d[i][1],P=d[i][2],M=.5*(y-b)*E*E+E*b+w,S=.5*(y-b)*P*P+P*b+w,_.push([M,S]);return _}},_determineCssPrefixedProperties:{value:function(){"webkitTransform"in this.element.style?(this._transform="webkitTransform",this._transformCss="-webkit-transform",this._perspective="webkitPerspective"):"MozTransform"in this.element.style?(this._transform="MozTransform",this._transformCss="-moz-transform",this._perspective="MozPerspective"):"msTransform"in this.element.style?(this._transform="msTransform",this._transformCss="-ms-transform",this._perspective="msPerspective"):(this._transform="transform",this._perspective="perspective")}},_isListeningToResize:{value:!0},isListeningToResize:{get:function(){return this._isListeningToResize},set:function(e){var t=!!e;this._isListeningToResize!==t&&(this._isListeningToResize=t,this._isListeningToResize?window.addEventListener("resize",this,!1):window.removeEventListener("resize",this,!1))}},handleResize:{value:function(){this._isCameraUpdated=!0,this.needsDraw=!0}},enterDocument:{value:function(e){e&&(this._determineCssPrefixedProperties(),this._repetition.addRangeAtPathChangeListener("selectedIterations",this,"_handleSelectedIndexesChange"))}},_updateVisibleIndexes:{value:function(e,t){var n,i,r=this._visibleIndexes,a=r&&!isNaN(r.length)?r.length:0,o=[];for(i=0;a>i;i++)"number"==typeof t[r[i]]?e[t[r[i]]]=null:o.push(i);for(i=n=0;o.length>n&&e.length>i;i++)null!==e[i]&&(r.set(o[n],e[i]),n++);for(n=a;e.length>i;i++)null!==e[i]&&(r.set(n,e[i]),n++)}},_needsComputeVisibleRange:{value:!0},_previousVisibleRanges:{value:null},willDraw:{value:function(e){var t,n,i,r,a,o,s,l,u,c,h,d=[],p={},f=this._paths,m=f.length,v=this.splinePaths;this._isTransitioningScroll&&(c=(Date.now()-this._scrollingStartTime)/this._scrollingTransitionDurationMiliseconds,h=this._computeCssCubicBezierValue(c,this._scrollingTransitionTimingFunctionBezier),1>c?this.scroll=this._scrollingOrigin+(this._scrollingDestination-this._scrollingOrigin)*h:(this.scroll=this._scrollingDestination,this._isTransitioningScroll=!1,this._needsToCallDidTranslateEndDelegate=!0));var g,_,b,y,w,c=e,u=6,E=this.lastDrawTime?.018*(c-this.lastDrawTime)*this._elasticScrollingSpeed:0,P=1-E/u,M=this._minSlideOffsetIndex,S=this._maxSlideOffsetIndex;if(this.lastDrawTime=c,this._hasElasticScrolling)for(r=0;u>r;r++){for(i=this._draggedSlideIndex-1;i>=M;i--)g=this._getSlideOffset(i),_=this._getSlideOffset(i+1),b=(g-_)*P+_,b>0&&(b=0),this._updateSlideOffset(i,b);for(i=this._draggedSlideIndex+1;S>=i;i++)g=this._getSlideOffset(i),_=this._getSlideOffset(i-1),b=(g-_)*P+_,0>b&&(b=0),this._updateSlideOffset(i,b)}if(this._width=this._element.clientWidth,this._height=this._element.clientHeight,v.length){for(s=this._numberOfIterations%m,l=(this._numberOfIterations-s)/m,this._needsComputeVisibleRange&&(this._previousVisibleRanges=[]),a=0;m>a;a++)for(u=l+(s>a?1:0),this._needsComputeVisibleRange?(t=this._computeVisibleRange(v[a]),this._previousVisibleRanges[a]=t,v[a]._computeDensitySummation()):t=this._previousVisibleRanges[a],o=this._scroll-f[a].headOffset,i=0;t.length>i;i++){for(w=u/2,r=w;w>=1;)n=(0|r)*m+a,y=(0|r)+this._getSlideOffset(n)-o,w/=2,y>=t[i][0]?r-=w:r+=w;r=0|r-1,0>r&&(r=0);do n=r*m+a,y=r+this._getSlideOffset(n)-o,y>=t[i][0]&&t[i][1]>=y&&p[n]===void 0&&(p[n]=d.length,d.push(n)),r++;while(t[i][1]>=y&&u>r)}this._needsComputeVisibleRange=!1}this._updateVisibleIndexes(d,p)}},draw:{value:function(){var e,t,n,i,r,a,o,s,l,u,c=this._repetition._drawnIterations.length,h=(this._paths.length,this._visibleIndexes);if(this._isTransitioningScroll&&(this.needsDraw=!0),this._isCameraUpdated){var d,p,f=.5*Math.tan((90-.5*this.cameraFov)*this._doublePI/360)*this._height,m=this.cameraTargetPoint[0]-this.cameraPosition[0],v=this.cameraTargetPoint[1]-this.cameraPosition[1],g=this.cameraTargetPoint[2]-this.cameraPosition[2],_=Math.atan2(-m,-g);d=m*-Math.sin(-_)+g*Math.cos(-_),p=Math.atan2(-v,-d),this._element.style[this._perspective]=f+"px",this._cameraElement.style[this._transform]="translate3d(0,0,"+f+"px)rotateX("+p+"rad)rotateY("+-_+"rad)"+"translate3d("+-this.cameraPosition[0]+"px,"+-this.cameraPosition[1]+"px,"+-this.cameraPosition[2]+"px)",this._isCameraUpdated=!1}if(this.splinePaths.length)for(e=0;c>e;e++)u=this.offset(h[e]),a=u.pathIndex,t=u.slideTime,s=this._splinePaths[a]._convertSplineTimeToBezierIndexTime(t),i=this._repetition._drawnIterations[e],r=i.cachedFirstElement||i.firstElement,null!==s?(r.children[0]&&(r.classList.contains("selected")?r.children[0].classList.add("selected"):r.children[0].classList.remove("selected"),r.classList.contains("active")?r.children[0].classList.add("active"):r.children[0].classList.remove("active")),o=this._splinePaths[a].getPositionAtIndexTime(s),l=this._splinePaths[a].getRotationAtIndexTime(s),n=this._transformCss+":translate3d("+1e-5*(1e5*o[0]>>0)+"px,"+1e-5*(1e5*o[1]>>0)+"px,"+1e-5*(1e5*o[2]>>0)+"px)"+(l[2]?"rotateZ("+1e-5*(1e5*l[2]>>0)+"rad)":"")+(l[1]?"rotateY("+1e-5*(1e5*l[1]>>0)+"rad)":"")+(l[0]?"rotateX("+1e-5*(1e5*l[0]>>0)+"rad)":"")+";"+this._splinePaths[a].getStyleAtIndexTime(s),r.setAttribute("style",n)):r.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");else for(e=0;c>e;e++)i=this._repetition._drawnIterations[e],r=i.cachedFirstElement||i.firstElement,r.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");this._slideOffsetsLength&&(this.needsDraw=!0),this._needsToCallDidTranslateEndDelegate&&(this._needsToCallDidTranslateEndDelegate=!1,this.callDelegateMethod("didTranslateEnd",this))}},_updateLength:{value:function(){if(this._paths){var e,t,n,i,r,a,o=this._paths.length,s=0;if(o>0){for(r=this._numberOfIterations%o,i=(this._numberOfIterations-r)/o,a=0;o>a;a++)e=this._paths[a],t=i+(r>a?1:0),n=t-e.tailOffset+e.headOffset-1,n>s&&(s=n);this.length=s}this.needsDraw=!0}}},_numberOfIterations:{value:0},handle_numberOfIterationsChange:{value:function(){this._updateLength()}},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new a).initWithContent(e)}},contentController:{value:null},isSelectionEnabled:{value:null},selectedIndexes:{serializable:!1,value:null},activeIndexes:{serializable:!1,value:null},observeProperty:{value:function(e,t,n){return"currentIteration"!==e&&"objectAtCurrentIteration"!==e&&"contentAtCurrentIteration"!==e?i(this,e,t,n):(o(e,":iteration.object"),this._repetition?this._repetition.observeProperty(e,t,n):void 0)}},templateDidLoad:{value:function(){var e=this;this._repetition.willDraw=function(){e.needsDraw=!0}}},_length:{value:0},length:{get:function(){return this._length},set:function(e){this._length=0>e?0:e}},_scroll:{value:0},_elasticScrollingRange:{value:20},_hasElasticScrolling:{value:!1},hasElasticScrolling:{get:function(){return this._hasElasticScrolling},set:function(e){this._hasElasticScrolling=e?!0:!1}},_slideOffsets:{value:null},_slideOffsetsLength:{value:0},_maxSlideOffsetIndex:{value:-1},_minSlideOffsetIndex:{value:2e9},_updateSlideOffset:{value:function(e,t){var n=1e-4;e>=0&&(-n>t||t>n?(this._slideOffsets[e]===void 0&&(this._slideOffsetsLength++,this._minSlideOffsetIndex>e&&(this._minSlideOffsetIndex=e),e>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=e)),this._slideOffsets[e]=t):this._removeSlideOffset(e))}},_incrementSlideOffset:{value:function(e,t){this._updateSlideOffset(e,this._getSlideOffset(e)+t)}},_removeSlideOffset:{value:function(e){if(this._slideOffsets[e]!==void 0){var t,n,i;if(delete this._slideOffsets[e],this._slideOffsetsLength--,e===this._minSlideOffsetIndex)for(t=Object.keys(this._slideOffsets),this._minSlideOffsetIndex=2e9,n=0;t.length>n;n++)i=0|t[n],this._minSlideOffsetIndex>i&&(this._minSlideOffsetIndex=i);if(e===this._maxSlideOffsetIndex)for(t===void 0&&(t=Object.keys(this._slideOffsets)),this._maxSlideOffsetIndex=-1,n=0;t.length>n;n++)i=0|t[n],i>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=i)}}},_getSlideOffset:{value:function(e){return this._minSlideOffsetIndex>e?e=this._minSlideOffsetIndex>this._draggedSlideIndex?this._draggedSlideIndex:this._minSlideOffsetIndex:e>this._maxSlideOffsetIndex&&(e=this._maxSlideOffsetIndex<this._draggedSlideIndex?this._draggedSlideIndex:this._maxSlideOffsetIndex),this._slideOffsets[e]!==void 0?this._slideOffsets[e]:0}},scroll:{get:function(){return this._scroll},set:function(e){if(0>e&&(e=0),e>this.length&&(e=this.length),this._hasElasticScrolling&&null!==this._draggedSlideIndex){var t,n,i=this._draggedSlideIndex-this._elasticScrollingRange,r=this._draggedSlideIndex+this._elasticScrollingRange;for(i>this._minSlideOffsetIndex&&(i=this._minSlideOffsetIndex),this._maxSlideOffsetIndex>r&&(r=this._maxSlideOffsetIndex),n=e-this._scroll,0>i&&(i=0),t=i;r>=t;t++)t!==this._draggedSlideIndex?this._incrementSlideOffset(t,n):this._removeSlideOffset(t);this._scroll=e}else this._scroll=e;this.needsDraw=!0}},previousStride:{value:function(){var e=Math.round(this.scroll/this.stride),t=(e-1)*this.stride;this.startScrollingIndexToOffset(0,-t)}},nextStride:{value:function(){var e=Math.round(this.scroll/this.stride),t=(e+1)*this.stride;this.startScrollingIndexToOffset(0,-t)}},_isInputEnabled:{value:!0},isInputEnabled:{get:function(){return this._isInputEnabled},set:function(e){this._isInputEnabled=e?!0:!1}},_draggedSlideIndex:{value:0},draggedSlideIndex:{get:function(){return this._draggedSlideIndex},set:function(e){if(e!==this._draggedSlideIndex){if(null!==e){var t,n=this._getSlideOffset(e),i=this._minSlideOffsetIndex,r=this._maxSlideOffsetIndex;for(this._incrementSlideOffset(this._draggedSlideIndex,-n),t=i;r>=t;t++)t!==this._draggedSlideIndex&&this._incrementSlideOffset(t,-n);this._removeSlideOffset(e),this._scroll-=n,this._flowTranslateComposer._scroll=this._scroll}this._draggedSlideIndex=e,this.needsDraw=!0}}},_elasticScrollingSpeed:{value:1},elasticScrollingSpeed:{get:function(){return this._elasticScrollingSpeed},set:function(e){this._elasticScrollingSpeed=parseFloat(e)}},lastDrawTime:{value:null},offset:{enumerable:!1,value:function(e){var t=this._paths.length,n=e%t,i=Math.floor(e/t)-this._scroll+this._paths[n].headOffset;return{pathIndex:n,slideTime:i+this._getSlideOffset(e)}}},serializeSelf:{value:function(e){e.setAllProperties();for(var t,n=this.originalContent,i=0;t=n[i];i++)t.component&&e.addObject(t.component)}}})}});