var Montage=require("../../core/core").Montage,Component=require("../component").Component,MediaController=require("../../core/media-controller").MediaController,AbstractVideo=exports.AbstractVideo=Component.specialize({constructor:{value:function AbstractVideo(){if(this.constructor===AbstractVideo)throw Error("AbstractVideo cannot be instantiated.");Component.constructor.call(this)}},_mediaElement:{value:null},mediaElement:{get:function(){return this._mediaElement},set:function(e){this._mediaElement&&(this._mediaElement.controller=null),this._mediaElement=e,this.videoController&&(this._mediaElement.controller=this.videoController.mediaController)}},_videoController:{value:null},videoController:{get:function(){return this._videoController},set:function(e){e&&(this._videoController=e,this.mediaElement&&(this.mediaElement.controller=e.mediaController))}},_src:{value:null},src:{get:function(){return this._src},set:function(e){this._src=e}},_sources:{value:[]},sources:{get:function(){return this._sources},set:function(e){if(e&&e.length){for(var t=this.element.ownerDocument.createElement("video"),n=0;e.length>n;n++){var r=e[n].src,i=e[n].type;if(i&&t.canPlayType(i)){this.src=r;break}}this._sources=e}}},loadMedia:{value:function(){this.mediaElement.src=this.src,this.mediaElement.load()}},_repeat:{value:!1},repeat:{get:function(){return this._repeat},set:function(e){e!==this._repeat&&(this._repeat=e,e?this.mediaElement.setAttribute("loop","true"):this.mediaElement.removeAttribute("loop"),this.needsDraw=!0)}},toggleRepeat:{value:function(){this.repeat=!this.repeat}},_posterSrc:{value:null},posterSrc:{get:function(){return this._posterSrc},set:function(e){this._posterSrc=e}},showPoster:{value:function(){this.posterSrc&&this.mediaElement&&(this.mediaElement.poster=this.posterSrc)}},supportsFullScreen:{value:!0},_isFullScreen:{value:!1},isFullScreen:{get:function(){return this._isFullScreen}},toggleFullScreen:{value:function(){this.supportsFullScreen&&(this._isFullScreen=!this._isFullScreen,this._isFullScreen?this.element.webkitEnterFullScreen?this.element.webkitEnterFullScreen():this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen():this.element.webkitExitFullscreen?this.element.webkitExitFullscreen():this.element.webkitCancelFullScreen?this.element.webkitCancelFullScreen():this.element.ownerDocument.webkitCancelFullScreen&&this.element.ownerDocument.webkitCurrentFullScreenElement===this.element&&this.element.ownerDocument.webkitCancelFullScreen(),this.needsDraw=!0)}},handleControllerStatusChange:{value:function(){this.needsDraw=!0}},handleControllerVolumeChange:{value:function(){this.needsDraw=!0}},enterDocument:{value:function(e){if(e){if(this.originalElement.hasAttribute("src")&&this.originalElement.getAttribute("src"))this.src=this.originalElement.getAttribute("src");else for(var t,n,r=this.originalElement.getElementsByTagName("source"),i=0;r.length>i;i++)if(t=r[i].getAttribute("src"),n=r[i].getAttribute("type"),!n||this.mediaElement.canPlayType(n)){this.src=t;break}for(var a=this.originalElement.getElementsByTagName("track"),i=0;a.length>i;i++){var o=a[i].getAttribute("kind");if("captions"==o||"subtitles"==o){var s=document.createElement("track");s.kind=o,s.label=a[i].getAttribute("label"),s.src=a[i].getAttribute("src"),s.srclang=a[i].getAttribute("srclang"),s.default=a[i].hasAttribute("default"),this.mediaElement.appendChild(s),this.mediaElement.textTracks[this.mediaElement.textTracks.length-1].mode="showing"}}this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange"),this.addPathChangeListener("videoController.volume",this,"handleControllerVolumeChange"),this.videoController||(this.videoController=Montage.create(MediaController)),this.mediaElement.controller=this.videoController.mediaController}}}});