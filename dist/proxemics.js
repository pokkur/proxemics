!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("core-js/modules/es6.object.assign"),require("core-js/modules/es6.regexp.to-string"),require("core-js/modules/web.dom.iterable")):"function"==typeof define&&define.amd?define(["core-js/modules/es6.object.assign","core-js/modules/es6.regexp.to-string","core-js/modules/web.dom.iterable"],t):e.Proxemics=t()}(this,function(){"use strict";return function c(e,t){var n=t.territory,o=void 0===n?10:n,i=t.defaultProxemityClass,a=void 0===i?"is-public":i,r=t.activeProxemityClass,s=void 0===r?"is-proxemity":r,d=t.intimateClass,l=void 0===d?"is-intimate":d,u=t.leftProxemityClass,f=void 0===u?"is-left":u,m=t.dataDistance,v=void 0!==m&&m,g=t.dataAngle,p=void 0!==g&&g,b=t.dataRadian,y=void 0!==b&&b,h=t.debuggable,x=void 0!==h&&h,L=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,A=document.querySelectorAll(e),M=o,j=x,w=a,T=s,H=f,E=l,P=v,X=p,Y=y;if(void 0===window.orientation&&0<A.length){Array.prototype.forEach.call(A,function(e){e.classList.add(w)}),j&&((c.InstancesInfo=function(){Array.prototype.forEach.call(A,function(e){var t=e,n="w".concat(t.offsetLeft+t.clientWidth/2,"px"),o="h".concat(t.offsetTop+t.clientHeight/2,"px");t.innerHTML="".concat(n," ").concat(o)})})(),(c.DebbugText=function(){var e=Math.random().toString(36).slice(-8);A[A.length-1].insertAdjacentHTML("afterend",'<div class="distance-debug'.concat(e,'"></div>')),(c.Debug=document.querySelector(".distance-debug".concat(e))).innerHTML="ready clientX null, clientY null"})());var q=function(e){c.X=e.clientX,c.Y=e.clientY,Array.prototype.forEach.call(A,function(e){var t=e,n=t.offsetLeft+t.clientWidth/2,o=t.offsetTop+t.clientHeight/2,i=Math.sqrt(Math.pow(c.X-n,2)+Math.pow(c.Y-o,2))-M,a=~~Math.max(i,0),r=Math.atan2(c.Y-o,c.X-n),s=~~(180*r/Math.PI+180);j&&(c.Debug.innerHTML="enter clientX ".concat(c.X,"px, clientY ").concat(c.Y,"px"),t.innerHTML="".concat(a,"px / ").concat(s,"°")),t.classList.remove(H),P&&t.setAttribute("data-distance",a),X&&t.setAttribute("data-angle",s),Y&&t.setAttribute("data-radian",r),0<a?(t.classList.add(T),t.classList.remove(E)):a<=0&&t.classList.add(E),c.Styles=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object.assign(t.style,e)},null!=L&&L({distance:a,angle:s,radian:r,el:t},c.Styles)})},D=function(){j&&(c.Debug.innerHTML="Out of range",c.InstancesInfo()),Array.prototype.forEach.call(A,function(e){var t=e;t.classList.remove(T),t.classList.add(f),t.setAttribute("style",""),P&&t.removeAttribute("data-distance"),X&&t.removeAttribute("data-angle"),Y&&t.removeAttribute("data-radian")})};document.body.addEventListener("mouseenter",function(){document.addEventListener("mousemove",q,{capture:!1}),document.addEventListener("mouseleave",D,{capture:!1})},{capture:!0})}else 0===A.length&&console.log("Proximics error: There is no selector onject on this document."),void 0!==window.orientation&&console.log("Proxemics warn: Only working on mouse device.")}});
