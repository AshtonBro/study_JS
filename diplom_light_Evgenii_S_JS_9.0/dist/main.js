!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){var t=document.querySelectorAll(".text-center"),e=document.createElement("div");e.style.cssText="font-size: 2rem",t.forEach((function(t){t.addEventListener("submit",(function(o){o.preventDefault(),t.appendChild(e),e.textContent="Идет отправка";var u=new FormData(t),c={};u.forEach((function(t,e){c[e]=t})),n(c).then((function(t){if(200!==t.status)throw new Error("Status network is not 200");e.textContent="Отправлено",r()})).catch((function(t){e.textContent="Ошибка",console.log(t)}))}))}));var n=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},r=function(){document.querySelectorAll("input").forEach((function(t){t.value=""}))}};(function(){var t=document.querySelector(".popup-call"),e=document.querySelectorAll(".call-btn"),n=document.querySelectorAll(".popup"),r=function(){t.style.display="block",t.style.transform="translateX(-100%)",setTimeout((function(){t.style.transform="translateX(0%)",t.style.transition="0.8s"}),450)};e.forEach((function(t){return t.addEventListener("click",r)})),n.forEach((function(t){return t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?(t.style.transform="translateX(-100%)",t.style.transition="0.8s"):(n=n.closest(".popup-content"))||(t.style.transform="translateX(-100%)",t.style.transition="0.8s")}))}))})(),r()}]);