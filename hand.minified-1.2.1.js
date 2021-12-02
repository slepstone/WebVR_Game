var HANDJS=HANDJS||{};(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=Object(this);var n=t.length>>>0;if(n===0){return-1}var r=0;if(arguments.length>0){r=Number(arguments[1]);if(r!=r){r=0}else if(r!=0&&r!=Infinity&&r!=-Infinity){r=(r>0||-1)*Math.floor(Math.abs(r))}}if(r>=n){return-1}var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++){if(i in t&&t[i]===e){return i}}return-1}}var e=["pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","pointerenter","pointerleave"];var t=["PointerDown","PointerUp","PointerMove","PointerOver","PointerOut","PointerCancel","PointerEnter","PointerLeave"];var n="touch";var r="pen";var i="mouse";var s={};var o=function(e){while(e&&e.handjs_forcePreventDefault!==true){e=e.parentElement}return e!=null};var u=function(e,t){var s;if(document.createEvent){s=document.createEvent("MouseEvents");s.initMouseEvent(t,true,true,window,1,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null)}else{s=document.createEventObject();s.screenX=e.screenX;s.screenY=e.screenY;s.clientX=e.clientX;s.clientY=e.clientY;s.ctrlKey=e.ctrlKey;s.altKey=e.altKey;s.shiftKey=e.shiftKey;s.metaKey=e.metaKey;s.button=e.button}if(s.offsetX===undefined){if(e.offsetX!==undefined){if(Object&&Object.defineProperty!==undefined){Object.defineProperty(s,"offsetX",{writable:true});Object.defineProperty(s,"offsetY",{writable:true})}s.offsetX=e.offsetX;s.offsetY=e.offsetY}else if(e.layerX!==undefined){s.offsetX=e.layerX-e.currentTarget.offsetLeft;s.offsetY=e.layerY-e.currentTarget.offsetTop}}if(e.isPrimary!==undefined)s.isPrimary=e.isPrimary;else s.isPrimary=true;if(e.pressure)s.pressure=e.pressure;else{var u=0;if(e.which!==undefined)u=e.which;else if(e.button!==undefined){u=e.button}s.pressure=u==0?0:.5}if(e.rotation)s.rotation=e.rotation;else s.rotation=0;if(e.hwTimestamp)s.hwTimestamp=e.hwTimestamp;else s.hwTimestamp=0;if(e.tiltX)s.tiltX=e.tiltX;else s.tiltX=0;if(e.tiltY)s.tiltY=e.tiltY;else s.tiltY=0;if(e.height)s.height=e.height;else s.height=0;if(e.width)s.width=e.width;else s.width=0;s.preventDefault=function(){if(e.preventDefault!==undefined)e.preventDefault()};if(s.stopPropagation!==undefined){var a=s.stopPropagation;s.stopPropagation=function(){if(e.stopPropagation!==undefined)e.stopPropagation();a.call(this)}}s.POINTER_TYPE_TOUCH=n;s.POINTER_TYPE_PEN=r;s.POINTER_TYPE_MOUSE=i;s.pointerId=e.pointerId;s.pointerType=e.pointerType;switch(s.pointerType){case 2:s.pointerType=s.POINTER_TYPE_TOUCH;break;case 3:s.pointerType=s.POINTER_TYPE_PEN;break;case 4:s.pointerType=s.POINTER_TYPE_MOUSE;break}if(e.currentTarget&&o(e.currentTarget)===true){s.preventDefault()}if(e.target){e.target.dispatchEvent(s)}else{e.srcElement.fireEvent("on"+p(t),s)}};var a=function(e,t){e.pointerId=1;e.pointerType=i;u(e,t)};var f=function(e,t,r,i){var s=t.identifier+2;t.pointerId=s;t.pointerType=n;t.currentTarget=r;t.target=r;if(i.preventDefault!==undefined){t.preventDefault=function(){i.preventDefault()}}u(t,e)};var l=function(e,t){while(e&&!(e.__handjsGlobalRegisteredEvents&&e.__handjsGlobalRegisteredEvents[t])){e=e.parentElement}return e!=null};var c=function(e,t,n,r){if(l(n,e)){f(e,t,n,r)}};var h=function(e,t,n,r){if(e.preventManipulation)e.preventManipulation();for(var i=0;i<e.changedTouches.length;++i){var o=e.changedTouches[i];if(n){s[o.identifier]=o.target}if(r){c(t,o,s[o.identifier],e)}else{f(t,o,s[o.identifier],e)}}};var p=function(e){return e.toLowerCase().replace("pointer","mouse")};var d=function(n,r,i){var s=e.indexOf(i);var o=r+t[s];if(o===r+"PointerEnter"&&n["on"+r.toLowerCase()+"pointerenter"]===undefined){o=r+"PointerOver"}if(o===r+"PointerLeave"&&n["on"+r.toLowerCase()+"pointerleave"]===undefined){o=r+"PointerOut"}return o};var v=function(e,t,n,r){if(e.__handjsRegisteredEvents===undefined){e.__handjsRegisteredEvents=[]}if(r){if(e.__handjsRegisteredEvents[t]!==undefined){e.__handjsRegisteredEvents[t]++;return}e.__handjsRegisteredEvents[t]=1;e.addEventListener(t,n,false)}else{if(e.__handjsRegisteredEvents.indexOf(t)!==-1){e.__handjsRegisteredEvents[t]--;if(e.__handjsRegisteredEvents[t]!=0){return}}e.removeEventListener(t,n);e.__handjsRegisteredEvents[t]=0}};var m=function(e,t,n){if(e.onpointerdown!==undefined){return}if(e.onmspointerdown!==undefined){var r=d(e,"MS",t);v(e,r,function(e){u(e,t)},n);return}if(e.ontouchstart!==undefined){switch(t){case"pointermove":v(e,"touchmove",function(e){h(e,t)},n);break;case"pointercancel":v(e,"touchcancel",function(e){h(e,t)},n);break;case"pointerdown":case"pointerup":case"pointerout":case"pointerover":case"pointerleave":case"pointerenter":if(!e.__handjsGlobalRegisteredEvents){e.__handjsGlobalRegisteredEvents=[]}if(n){if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]++;return}e.__handjsGlobalRegisteredEvents[t]=1}else{if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]--;if(e.__handjsGlobalRegisteredEvents[t]<0){e.__handjsGlobalRegisteredEvents[t]=0}}}break}}switch(t){case"pointerdown":v(e,"mousedown",function(e){a(e,t)},n);break;case"pointermove":v(e,"mousemove",function(e){a(e,t)},n);break;case"pointerup":v(e,"mouseup",function(e){a(e,t)},n);break;case"pointerover":v(e,"mouseover",function(e){a(e,t)},n);break;case"pointerout":v(e,"mouseout",function(e){a(e,t)},n);break;case"pointerenter":if(e.onmouseenter===undefined){v(e,"mouseover",function(e){a(e,t)},n)}else{v(e,"mouseenter",function(e){a(e,t)},n)}break;case"pointerleave":if(e.onmouseleave===undefined){v(e,"mouseout",function(e){a(e,t)},n)}else{v(e,"mouseleave",function(e){a(e,t)},n)}break}};var g=function(t){var n=t.prototype?t.prototype.addEventListener:t.addEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){m(this,t,true)}if(n===undefined){this.attachEvent("on"+p(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.addEventListener=r}else{t.addEventListener=r}};var y=function(t){var n=t.prototype?t.prototype.removeEventListener:t.removeEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){m(this,t,false)}if(n===undefined){this.detachEvent(p(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.removeEventListener=r}else{t.removeEventListener=r}};g(HTMLElement);g(document);g(HTMLBodyElement);g(HTMLDivElement);g(HTMLImageElement);g(HTMLUListElement);g(HTMLAnchorElement);g(HTMLLIElement);g(HTMLTableElement);if(window.HTMLSpanElement){g(HTMLSpanElement)}if(window.HTMLCanvasElement){g(HTMLCanvasElement)}if(window.SVGElement){g(SVGElement)}y(HTMLElement);y(document);y(HTMLBodyElement);y(HTMLDivElement);y(HTMLImageElement);y(HTMLUListElement);y(HTMLAnchorElement);y(HTMLLIElement);y(HTMLTableElement);if(window.HTMLSpanElement){y(HTMLSpanElement)}if(window.HTMLCanvasElement){y(HTMLCanvasElement)}if(window.SVGElement){y(SVGElement)}if(window.ontouchstart!==undefined){window.addEventListener("touchstart",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];s[n.identifier]=n.target;c("pointerenter",n,n.target,e);c("pointerover",n,n.target,e);c("pointerdown",n,n.target,e)}});window.addEventListener("touchend",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=s[n.identifier];c("pointerup",n,r,e);c("pointerout",n,r,e);c("pointerleave",n,r,e)}});window.addEventListener("touchmove",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=document.elementFromPoint(n.clientX,n.clientY);var i=s[n.identifier];if(i===r){continue}if(i){c("pointerout",n,i,e);if(!i.contains(r)){c("pointerleave",n,i,e)}}if(r){c("pointerover",n,r,e);if(!r.contains(i)){c("pointerenter",n,r,e)}}s[n.identifier]=r}})}if(navigator.pointerEnabled===undefined){navigator.pointerEnabled=true;if(navigator.msPointerEnabled){navigator.maxTouchPoints=navigator.msMaxTouchPoints}}if(document.styleSheets&&document.addEventListener){document.addEventListener("DOMContentLoaded",function(){if(HANDJS.doNotProcessCSS){return}var e=function(e){return e.replace(/^\s+|\s+$/,"")};var t=function(t){var n=new RegExp(".+?{.*?}","m");var r=new RegExp(".+?{","m");while(t!=""){var i=n.exec(t);if(!i){break}var s=i[0];t=e(t.replace(s,""));var o=e(r.exec(s)[0].replace("{",""));if(s.replace(/\s/g,"").indexOf("touch-action:none")!=-1){var u=document.querySelectorAll(o);for(var a=0;a<u.length;a++){var f=u[a];if(f.style.msTouchAction!==undefined){f.style.msTouchAction="none"}else{f.handjs_forcePreventDefault=true}}}}};try{for(var n=0;n<document.styleSheets.length;n++){var r=document.styleSheets[n];if(r.href==undefined){continue}var i=new XMLHttpRequest;i.open("get",r.href,false);i.send();var s=i.responseText.replace(/(\n|\r)/g,"");t(s)}}catch(o){}var u=document.getElementsByTagName("style");for(var n=0;n<u.length;n++){var a=u[n];var f=e(a.innerHTML.replace(/(\n|\r)/g,""));t(f)}},false)}})()
