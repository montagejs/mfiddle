montageDefine("a08bd27","dom",{dependencies:["collections/listen/property-changes"],factory:function(e){function t(e){a.dispatchOwnPropertyChange(e.target,"checked",e.target.checked)}function n(e){a.dispatchOwnPropertyChange(e.target,"value",e.target.value)}function i(e){"checked"===e?this.addEventListener("change",t):"value"===e&&(this.addEventListener("change",n),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.addEventListener("keyup",n))}function r(e){"checked"===e?this.removeEventListener("change",t):"value"===e&&(this.removeEventListener("change",n),("text"===this.type||"TEXTAREA"===this.nodeName)&&this.removeEventListener("keyup",n))}var a=e("collections/listen/property-changes"),s=Object.getPrototypeOf(document.createElement("input"));s.makePropertyObservable=i,s.makePropertyUnobservable=r;var o=Object.getPrototypeOf(document.createElement("textarea"));o.makePropertyObservable=i,o.makePropertyUnobservable=r}});