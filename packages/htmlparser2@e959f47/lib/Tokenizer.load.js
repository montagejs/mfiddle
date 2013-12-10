montageDefine("e959f47","lib/Tokenizer",{dependencies:[],factory:function(e,t,n){function i(e){return" "===e||"	"===e||"\r"===e||"\n"===e}function r(e,t){this._state=a,this._buffer="",this._sectionStart=0,this._index=0,this._options=e,this._special=0,this._cbs=t,this._running=!0}n.exports=r;var o=0,a=o++,s=o++,l=o++,u=o++,c=o++,h=o++,d=o++,p=o++,f=o++,m=o++,v=o++,g=o++,_=o++,b=o++,y=o++,w=o++,C=o++,E=o++,S=o++,T=o++,x=o++,M=o++,P=o++,D=o++,O=o++,L=o++,k=o++,A=o++,I=o++,z=o++,j=o++,R=o++,N=o++,B=o++,F=o++,q=o++,W=o++,V=o++,U=o++,H=o++,Y=o++,G=o++,X=o++,K=o++,$=o++,J=o++,Z=o++,Q=o++,et=o++;r.prototype.write=function(e){for(this._buffer+=e;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===a?"<"===t&&(this._emitIfToken("text"),this._state=s,this._sectionStart=this._index):this._state===s?"/"===t?this._state=u:">"===t||this._special>0?this._state=a:i(t)||("!"===t?(this._state=b,this._sectionStart=this._index+1):"?"===t?(this._state=w,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==t&&"S"!==t?(this._state=l,this._sectionStart=this._index):(this._state=z,this._sectionStart=this._index)):this._state===l?"/"===t?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=h):">"===t?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=a,this._sectionStart=this._index+1):i(t)&&(this._emitToken("opentagname"),this._state=d):this._state===u?i(t)||(">"===t?this._state=a:this._special>0?("s"===t||"S"===t)&&(this._state=j):(this._state=c,this._sectionStart=this._index)):this._state===c?">"===t?(this._emitToken("closetag"),this._state=a,this._sectionStart=this._index+1,this._special=0):i(t)&&(this._emitToken("closetag"),this._state=h,this._special=0):this._state===h?">"===t&&(this._state=a,this._sectionStart=this._index+1):this._state===d?">"===t?(this._state=a,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===t?(this._cbs.onselfclosingtag(),this._state=h):i(t)||(this._state=p,this._sectionStart=this._index):this._state===p?"="===t?(this._emitIfToken("attribname"),this._state=m):i(t)?(this._emitIfToken("attribname"),this._state=f):("/"===t||">"===t)&&(this._emitIfToken("attribname"),this._state=d,this._index--):this._state===f?"="===t?this._state=m:"/"===t||">"===t?(this._state=d,this._index--):i(t)||(this._state=p,this._sectionStart=this._index):this._state===m?'"'===t?(this._state=v,this._sectionStart=this._index+1):"'"===t?(this._state=g,this._sectionStart=this._index+1):i(t)||(this._state=_,this._sectionStart=this._index):this._state===v?'"'===t&&(this._emitToken("attribvalue"),this._state=d):this._state===g?"'"===t&&(this._emitToken("attribvalue"),this._state=d):this._state===_?">"===t?(this._emitToken("attribvalue"),this._state=a,this._cbs.onopentagend(),this._sectionStart=this._index+1):i(t)&&(this._emitToken("attribvalue"),this._state=d):this._state===b?this._state="["===t?x:"-"===t?C:y:this._state===y?">"===t&&(this._emitToken("declaration"),this._state=a,this._sectionStart=this._index+1):this._state===w?">"===t&&(this._emitToken("processinginstruction"),this._state=a,this._sectionStart=this._index+1):this._state===C?"-"===t?(this._state=E,this._sectionStart=this._index+1):this._state=y:this._state===E?"-"===t&&(this._state=S):this._state===S?this._state="-"===t?T:E:this._state===T?">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=a,this._sectionStart=this._index+1):this._state=E:this._state===x?this._state="C"===t?M:y:this._state===M?this._state="D"===t?P:y:this._state===P?this._state="A"===t?D:y:this._state===D?this._state="T"===t?O:y:this._state===O?this._state="A"===t?L:y:this._state===L?"["===t?(this._state=k,this._sectionStart=this._index+1):this._state=y:this._state===k?"]"===t&&(this._state=A):this._state===A?this._state="]"===t?I:k:this._state===I?">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=a,this._sectionStart=this._index+1):this._state=k:this._state===z?"c"===t||"C"===t?this._state=R:"t"===t||"T"===t?this._state=G:(this._state=l,this._index--):this._state===j?this._state=1!==this._special||"c"!==t&&"C"!==t?2!==this._special||"t"!==t&&"T"!==t?a:J:W:this._state===R?"r"===t||"R"===t?this._state=N:(this._state=l,this._index--):this._state===N?"i"===t||"I"===t?this._state=B:(this._state=l,this._index--):this._state===B?"p"===t||"P"===t?this._state=F:(this._state=l,this._index--):this._state===F?"t"===t||"T"===t?this._state=q:(this._state=l,this._index--):this._state===q?(("/"===t||">"===t||i(t))&&(this._special=1),this._state=l,this._index--):this._state===W?this._state="r"===t||"R"===t?V:a:this._state===V?this._state="i"===t||"I"===t?U:a:this._state===U?this._state="p"===t||"P"===t?H:a:this._state===H?this._state="t"===t||"T"===t?Y:a:this._state===Y?">"===t||i(t)?(this._state=c,this._sectionStart=this._index-6,this._index--):this._state=a:this._state===G?"y"===t||"Y"===t?this._state=X:(this._state=l,this._index--):this._state===X?"l"===t||"L"===t?this._state=K:(this._state=l,this._index--):this._state===K?"e"===t||"E"===t?this._state=$:(this._state=l,this._index--):this._state===$?(("/"===t||">"===t||i(t))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===t||"Y"===t?Z:a:this._state===Z?this._state="l"===t||"L"===t?Q:a:this._state===Q?this._state="e"===t||"E"===t?et:a:this._state===et?">"===t||i(t)?(this._state=c,this._sectionStart=this._index-5,this._index--):this._state=a:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===a?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},r.prototype.pause=function(){this._running=!1},r.prototype.resume=function(){this._running=!0},r.prototype.end=function(e){e&&this.write(e),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===k||this._state===A||this._state===I?this._emitIfToken("cdata"):this._state===E||this._state===S||this._state===T?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===c?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},r.prototype.reset=function(){r.call(this,this._options,this._cbs)},r.prototype._emitToken=function(e){this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},r.prototype._emitIfToken=function(e){this._index>this._sectionStart&&this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});